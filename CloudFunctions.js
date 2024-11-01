import { initializeApp } from 'firebase/app';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import { firebaseConfig } from './firebaseConfig.js';
import { getStorage, ref, uploadBytes, getDownloadURL } from 'firebase/storage';
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const storage = getStorage(app);
export { app, auth, storage};

// test
import fs from 'fs';





export class CloudFunctionsClass {
  constructor(authInstance) {this.auth = authInstance;}

async registerUser(email, password) {
    return createUserWithEmailAndPassword(auth, email, password)
      .then(userCredential => {
        const user = userCredential.user;
        console.log('Användare skapad:', user);
        return user;
      })
      .catch(error => {
        console.error('Fel vid registrering:', error.code, error.message);
        throw error;
      });
  }

  

async loginUser(email, password) {
    return signInWithEmailAndPassword(auth, email, password)
      .then(userCredential => {
        const user = userCredential.user;
        console.log('Inloggad användare:', user.email);
        return user.email;
      })
      .catch(error => {
        console.error('Fel vid inloggning:', error.code, error.message);
        throw error;
      }); 
      }
      
// uploadImage.js


 async uploadImage(filePath) {
  const fileName = filePath.split('/').pop();
  const file = fs.readFileSync(filePath);
  const storageRef = ref(storage, 'images/' + fileName);

  await uploadBytes(storageRef, file);
  const downloadURL = await getDownloadURL(storageRef);
  console.log('File available at', downloadURL);
  return downloadURL;
}



      // async uploadImage(file) {
//         const storageRef = ref(storage, 'images/' + file.name);
//         await uploadBytes(storageRef, file);
//         const downloadURL = await getDownloadURL(storageRef);
//         console.log('File available at', downloadURL);
//         return downloadURL;}
      

      
     
      
}

// Använd klassen
//const firebaseService = new FirebaseMethodsClass(auth);

//Loggar in en användare

// firebaseService.loginUser('mattias.sjodin91@live.se', 'password123')
//   .then(user => {
//     console.log('Inloggning lyckades:', user.photoURL);
//   })
//   .catch(error => {
//     console.error('Inloggning misslyckades:', error);
//   });




  // firebaseService.registerUser('mattias.sjodin91@live.se', 'password123')
  // .then(user => {
  //   console.log('Registrering lyckades:', user);
  // })
  // .catch(error => {
  //   console.error('Registrering misslyckades:', error);
  // });

  // signOut(auth).then(() => {
  //   console.log("User signed out successfully!");
  // }).catch((error) => {
  //   console.error("Error signing out: ", error);
  // }); 


  