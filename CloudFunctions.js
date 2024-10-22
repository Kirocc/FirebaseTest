import { initializeApp } from 'firebase/app';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import { firebaseConfig } from './firebaseConfig';
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export { app, auth };



export class CloudFunctionsClass {
  constructor(authInstance) {this.auth = authInstance;}

  registerUser(email, password) {
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

  loginUser(email, password) {
    return signInWithEmailAndPassword(auth, email, password)
      .then(userCredential => {
        const user = userCredential.user;
        console.log('Inloggad användare:', user);
        return user;
      })
      .catch(error => {
        console.error('Fel vid inloggning:', error.code, error.message);
        throw error;
      }); 
      }
     
      
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


  