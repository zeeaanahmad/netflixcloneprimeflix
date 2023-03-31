import { useState, useEffect, useContext } from "react";
import { FirebaseContext } from "../context/firebase";

//listen to the user state and change this depending on user actions
export default function useAuthListener() {
  const [user, setUser] = useState(
    JSON.parse(localStorage.getItem("authUser"))
  );

  const { firebase } = useContext(FirebaseContext);

  //put authUser data in local storage (JSON format)
  //runs on first hit of the page
  useEffect(() => {
    const listener = firebase.auth().onAuthStateChanged((authUser) => {
      if (authUser) {
        localStorage.setItem("authUser", JSON.stringify(authUser));
        setUser(authUser);
      } else {
        localStorage.removeItem("authUser");
        setUser(null);
      }
    });

    //cleanup listener
    return () => listener();
  }, []);

  return { user };
}
