import { v2 as cloudinary } from "cloudinary";
import dotenv from "dotenv";

dotenv.config()

cloudinary.config({
  cloud_name:"dojgeecbw",
  api_key: 492774556351989,
  api_secret:"iSZlmQt3-DCz8Nq5biWT4ljAIZQ",
});

export default cloudinary;
