// 
import { Client, Account, ID, Avatars, Databases, Query } from 'react-native-appwrite';
import React, { useState } from "react";

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
    .setEndpoint(config.endpoint) 
    .setProject(config.projectId) 
    .setPlatform(config.platform); 

const account = new Account(client);
const avatars = new Avatars(client);
const databases = new Databases(client);

export const createUser = async (email, password, username) => {
 try {

    const newAccount = await account.create( 
        ID.unique(), 
        email, 
        password, 
        username );

    if (!newAccount) throw new Error("Account creation failed");

    const avatarUrl = avatars.getInitials(username);
    
    await signIn(email, password);

    const newUser = await databases.createDocument(
        config.databaseId,
        config.userCollectionId,
        ID.unique(),
        {
            account_id: newAccount.$id,
            email,
            username,
            avatar: avatarUrl
        }
    );

    return newUser;

 } catch (error) {
    console.error(error);
    throw new Error(error.message);
 }
}


export const signIn = async (email, password) => {
    try {
        const session = await account.createEmailPasswordSession(email, password);
        return session;
    } catch (error) {
        throw new Error(error.message);
    }
}

export const getCurrentUser = async ()=>{
    try {
        const currentAccount = await account.get();
        if(!currentAccount) throw Error;

        const currentUser = await databases.listDocuments(
            config.databaseId,
            config.userCollectionId,
            [Query.equal('account_id'. currentAccount.$id)]
        )

        if(!currentUser) throw Error;

         return currentUser.documents[0];
        
    } catch (error) {
        console.log(error)
    }
}