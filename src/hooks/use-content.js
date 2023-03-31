import { useEffect, useState, useContext } from "react";
import { FirebaseContext } from "../context/firebase";

export default function useContent(target) {
  const [content, setContent] = useState([]);
  const { firebase } = useContext(FirebaseContext);

  //use firebase to access the collection (movies or shows)
  //get the collection
  //get the unique id (use as a key)
  useEffect(() => {
    firebase
      .firestore()
      .collection(target)
      .get()
      .then((snapshot) => {
        const allContent = snapshot.docs.map((contentObj) => ({
          ...contentObj.data(),
          docId: contentObj.id,
        }));
        setContent(allContent);
      })
      .catch((error) => {
        console.log(error.message);
      });
  }, []);

  return { [target]: content };
}
