import firebase from 'firebase/app';
import 'firebase/storage';

var firebaseConfig = {
      apiKey: "AIzaSyDU5rngXAShzx4nJsq3j9hGyjHFkhuuz9E",
      authDomain: "fir-fileupload-ab04a.firebaseapp.com",
      databaseURL: "https://fir-fileupload-ab04a.firebaseio.com",
      projectId: "fir-fileupload-ab04a",
      storageBucket: "fir-fileupload-ab04a.appspot.com",
      messagingSenderId: "1041787885493",
      appId: "1:1041787885493:web:f3f9177cb74cc24d5d6bfc"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

    const storage = firebase.storage();

    export {
          storage,firebase as default
    }