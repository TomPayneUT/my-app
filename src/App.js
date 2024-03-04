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
  const [tasks, setTasks] = useState([]);

  //console.log(colors);

  useEffect(
    () =>
      onSnapshot(collection(db, "tasks"), (snapshot) => 
        setTasks(snapshot.docs.map(doc => ({...doc.data(), id: doc.id})))
      ),
      []
  )

  const handleNew = async () => {
  //  const docRef = doc(db, "colors", "color001");  //firestore, collectionName, docId
  //  const payload = { name: "Black", value: "#000" };
  //  await setDoc(docRef, payload)  //setDoc will create the item if non-exist, OR overwrite that ID : => best for updating existing
    // ... await won't run the following code until the await func completes

    const name = prompt("Task name ");
    const priority = prompt("Priority ");

    const collectionRef = collection(db, "tasks");
    const payload = {name: name, priority: priority}
    const docRef = await addDoc(collectionRef, payload) //setDoc uses a docRef... addDoc uses a collectionRef

  }

  const handleEdit = async (id) => {
    const name = prompt("Task name ");
    const priority = prompt("Priority ");

    const docRef = doc(db, "tasks", id);  //firestore, collectionName, docId
    const payload = { name, priority }; //ES6 shortcut for {name: name, value: value}
    await setDoc(docRef, payload)  //setDoc will create the item if non-exist, OR overwrite that ID : => best for updating existing
    // ... await won't run the following code until the await func completes
  };

  const handleDelete = async (id) => {
    const docRef = doc(db, "tasks", id);
    await deleteDoc(docRef)
  }

  return (
    <div className="App">
      <h3>Tasks</h3>
      
      <table>

        {tasks.map(task => (
          <tr key={task.id}>
            <td><a href="#" onClick={() => handleDelete(task.id)}>del</a></td> 
            <td><a href="#" onClick={() => handleEdit(task.id)}>edit</a></td>
            <td> {task.priority}</td>
            <td> {task.name}</td>
          </tr>
        ))}

        <tr><button onClick={handleNew}>New Task</button></tr>
        
      </table>
    </div>
  );
}

export default App;
