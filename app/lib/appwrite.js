import { Client, Account, ID, Avatars, Databases } from 'react-native-appwrite';

export const config = {
    endpoint: 'https://cloud.appwrite.io/v1',
    platform: 'com.jsm.aora',
    projectId: '669220b2000347036462',
    databaseId: '669224ba0015b85edd0b',
    userCollectionId: '669224e1003e24c127f3',
    videosCollectionId: '6692255f0018147a56de',
    storageId: '66922a20003e5c328ee0'
}


const client = new Client();

client
    .setEndpoint(config.endpoint) // Your Appwrite Endpoint
    .setProject(config.projectId) // Your project ID
    .setPlatform(config.platform) // Your application ID or bundle ID.
;

const account = new Account(client);
const avatars = new Avatars(client);
const databases = new Databases(client);

// Register User
export const createUser = async (email, password, username) => {
 try {
    const newAccount = await account.create(
        ID.unique(), email, password, username
    )
    if(! newAccount) throw Error;
    const avatarURL = avatars.getInitials(username);

    await signIn(email, password);

    const newUser = await databases.createDocument(
        config.databaseId,
        config.userCollectionId,
        ID.unique(),
        {
            accountId: newAccount.$id,
            username,
            avatar: avatarURL
        }
    )
    return newUser;
 } 
 
 catch (error) {
    console.log(error)
    throw new Error(error);
 }
}

export async function signIn(email, password){
    try {
        const session = await account.createEmailSession(email, password)
    } catch (error) {
        throw new Error(error);
    }
}