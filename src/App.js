import { onSnapshot, collection, addDoc, setDoc, doc, deleteDoc } from "firebase/firestore";
import { useEffect, useState } from "react";
import db from"./firebase";
import './App.css';

const Dot = ({color}) => {
    const style = {
      height: 25,
      width: 25,
      margin: "0px 10px",
      backgroundColor: color,
      borderRadius: "50%",
      display: "inline-block"
    };
    return <span style={style}></span>;
}



function App() {
  const [colors, setColors] = useState([]);

  //console.log(colors);

  useEffect(
    () =>
      onSnapshot(collection(db, "colors"), (snapshot) => 
        setColors(snapshot.docs.map(doc => ({...doc.data(), id: doc.id})))
      ),
      []
  )

  const handleNew = async () => {
  //  const docRef = doc(db, "colors", "color001");  //firestore, collectionName, docId
  //  const payload = { name: "Black", value: "#000" };
  //  await setDoc(docRef, payload)  //setDoc will create the item if non-exist, OR overwrite that ID : => best for updating existing
    // ... await won't run the following code until the await func completes

    const name = prompt("Color name ");
    const value = prompt("Hex code ");

    const collectionRef = collection(db, "colors");
    const payload = {name: name, value: value}
    const docRef = await addDoc(collectionRef, payload) //setDoc uses a docRef... addDoc uses a collectionRef

  }

  const handleEdit = async (id) => {
    const name = prompt("Color name ");
    const value = prompt("Hex code ");

    const docRef = doc(db, "colors", id);  //firestore, collectionName, docId
    const payload = { name, value }; //ES6 shortcut for {name: name, value: value}
    await setDoc(docRef, payload)  //setDoc will create the item if non-exist, OR overwrite that ID : => best for updating existing
    // ... await won't run the following code until the await func completes
  };

  const handleDelete = async (id) => {
    const docRef = doc(db, "colors", id);
    await deleteDoc(docRef)
  }

  return (
    <div className="App">
      <h3>Colors</h3>
      <button onClick={handleNew}>New</button>
      <ul>

        {colors.map(color => (
          <li key={color.id}>
          <a href="#" onClick={() => handleDelete(color.id)}>del</a> - 
           <a href="#" onClick={() => handleEdit(color.id)}>edit</a> <Dot color={color.value} /> {color.name}
          </li>
        ))}

        
        
      </ul>
    </div>
  );
}

export default App;
