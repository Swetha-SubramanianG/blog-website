let firebaseConfig = {
  apiKey: "AIzaSyDBxQcSs6537gPFoS1sSla2vK5lBRQRTBQ",
  authDomain: "blogging-website-c44f5.firebaseapp.com",
  projectId: "blogging-website-c44f5",
  storageBucket: "blogging-website-c44f5.appspot.com",
  messagingSenderId: "628096372717",
  appId: "1:628096372717:web:a99b99778878354da6a1e4"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
let db=firebase.firestore();