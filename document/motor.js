import mongoose from "mongoose";
const server = "127.0.0.1:27017";
const database = "collection";

class Database{
    constructor(){
        this.__connect();
    }
    __connect(){
        mongoose.connect(`mongodb://${server}/${database}`)
        .then(
            ()=>{
                console.log("connexion reussi a la base de donne")
            }
        ).catch(err=>console.log("attention il y'a une erreur" + err))
    }
}
export default Database;