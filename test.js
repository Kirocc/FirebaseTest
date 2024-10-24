import { CloudFunctionsClass } from "./CloudFunctions.js";
import { auth } from "./CloudFunctions.js"; 



const service = new CloudFunctionsClass({auth})

service.loginUser("sammyringstrom@gmail.com", "password123").then(user => {
         console.log('Inloggning lyckades:', user.email) 
         const filePath = 'C:/Users/Sammy/Pictures/hämtning.jpg';
         service.uploadImage(filePath)
           .then(downloadURL => {
             console.log('Image uploaded to:', downloadURL);
           })
           .catch(error => {
             console.error('Upload failed:', error);
           });
       })
       .catch(error => {
         console.error('Inloggning misslyckades:', error);
       });






// const filePath = 'C:/Users/Sammy/Pictures/hämtning.jpg';
// service.uploadImage(filePath)
//   .then(downloadURL => {
//     console.log('Image uploaded to:', downloadURL);
//   })
//   .catch(error => {
//     console.error('Upload failed:', error);
//   });
