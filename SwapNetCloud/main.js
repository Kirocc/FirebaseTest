import { initializeApp } from 'firebase/app';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyCkuW5_zHFGjnm_vU8WdiT_d9Iyy42LGuk",
  authDomain: "srfire-67cd6.firebaseapp.com",
  projectId: "srfire-67cd6",
  storageBucket: "srfire-67cd6.appspot.com",
  messagingSenderId: "148888070847",
  appId: "1:148888070847:web:e95d489b400fecce04f40a"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

class FirebaseService {
  constructor(authInstance) {
    this.auth = authInstance;
  }

  

  registerUser(email, password) {
    return createUserWithEmailAndPassword(this.auth, email, password)
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
    return signInWithEmailAndPassword(this.auth, email, password)
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
const firebaseService = new FirebaseService(auth);

// Logga in användare

// firebaseService.loginUser('mattias.sjodin91@live.se', 'password123')
//   .then(user => {
//     console.log('Inloggning lyckades:', user);
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

  signOut(auth).then(() => {
    console.log("User signed out successfully!");
  }).catch((error) => {
    console.error("Error signing out: ", error);
  }); 


  