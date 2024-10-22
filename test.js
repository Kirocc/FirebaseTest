import { CloudFunctionsClass } from "./CloudFunctions.js";
import { auth } from "./CloudFunctions.js"; 



const service = new CloudFunctionsClass({auth})

service.loginUser("mattias.sjodin91@live.se", "password123").then(user => {
         console.log('Inloggning lyckades:', user);
       })
       .catch(error => {
         console.error('Inloggning misslyckades:', error);
       });