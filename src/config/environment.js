import * as dotenv from 'dotenv'

//cargando variables de entorno del env 
dotenv.config()

export default {
    PORT: process.env.PORT || 4500,
    DB_URI: process.env.DB_URI
}







//DB_URI=mongodb+srv://eapa:EAPAproyecto05.@cluster0.iwgmmw4.mongodb.net/?retryWrites=true&w=majority