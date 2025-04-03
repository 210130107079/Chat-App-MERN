import { v2 as cloudinary } from "cloudinary";
import dotenv from "dotenv";

dotenv.config()

cloudinary.config({
  cloud_name:"",
  api_key: ,
  api_secret:"",
});

export default cloudinary;
