const mongosse = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();


const dbConnect = async () =>{
    try{
        await mongosse.connect(process.env.DB_URL,
            console.log("Database connected!!")
        )

    } catch (err){
        console.log(err);
    }

}

module.exports = dbConnect;