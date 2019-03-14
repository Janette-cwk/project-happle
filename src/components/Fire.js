import firebase from 'firebase';

  // Initialize Firebase
  const config = {
    apiKey: "AIzaSyC5a1iwE2SEWRtUreDoHPIehWIFKU__tis",
    authDomain: "happle-food-recipe.firebaseapp.com",
    databaseURL: "https://happle-food-recipe.firebaseio.com",
    projectId: "happle-food-recipe",
    storageBucket: "happle-food-recipe.appspot.com",
    messagingSenderId: "95668531877"
  };
  const fire = firebase.initializeApp(config);

  export default fire;
