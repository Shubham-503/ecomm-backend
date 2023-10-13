import { v2 as cloudinary } from "cloudinary";

// cloudinary.v2.config({
//   cloud_name: 'dysvuuvmm',
//   api_key: '643825173662588',
//   api_secret: 'VdUL13e5y4iOzAOwWwWyvQSNDIg',
//   secure: true,
// });

// const cloudinary = require("cloudinary");

cloudinary.config({
  cloud_name: "dysvuuvmm",
  api_key: "643825173662588",
  api_secret: "VdUL13e5y4iOzAOwWwWyvQSNDIg",
  secure: true,
});

export default cloudinary;
