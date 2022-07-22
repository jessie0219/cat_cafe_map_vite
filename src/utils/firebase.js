import { getAnalytics } from "firebase/analytics";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyBmhYE9wDqfwPhC3NsueS0rL50bP9q5bfY",
  authDomain: "cat-demo1.firebaseapp.com",
  databaseURL: "https://cat-demo1-default-rtdb.firebaseio.com",
  projectId: "cat-demo1",
  storageBucket: "cat-demo1.appspot.com",
  messagingSenderId: "484165942695",
  appId: "1:484165942695:web:191498a71fe23a322d0a82",
  measurementId: "G-QFHZJN6XW5",
};

const app = initializeApp(firebaseConfig);

const analytics = getAnalytics(app);

export default app;