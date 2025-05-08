import { v2 as cloudinary } from "cloudinary";
import fs from "fs";

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

const uploadOnCloudinary = async function (localFilePath) {
  try {
    if (!localFilePath) return null;
    //   upload the file on cloudinary
    const response = await cloudinary.uploader.upload(localFilePath, {
      resource_type: "auto",
    });
    console.log(
      "file has been uploaded successfully on cloudinary",
      response.url
    );
    return response;
  } catch (error) {
    fs.unlink(localFilePath); //remove the locally saved temporary file as upload failed
    return null;
  }
};

export { uploadOnCloudinary };
