import { CloudFunctionsClass } from "./CloudFunctions.js";
import { auth } from "./CloudFunctions.js"; 



const service = new CloudFunctionsClass({auth})

service.loginUser("", "password123").then(user => {
         console.log('Inloggning lyckades:', user.email);
       })
       .catch(error => {
         console.error('Inloggning misslyckades:', error);
       });


// import { uploadImage } from './CloudFunctions.js';

// const filePath = './path/to/your/image.jpg';

// uploadImage(filePath)
//   .then(downloadURL => {
//     console.log('Image uploaded to:', downloadURL);
//   })
//   .catch(error => {
//     console.error('Upload failed:', error);
//   });
