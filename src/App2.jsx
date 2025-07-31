import { useState } from "react";
import { MdDeleteOutline, MdEdit } from "react-icons/md";

function App() {
  const [input, setinput] = useState("");
  const [arr, setarr] = useState([]);
  const [isEditing, setIsEditing] = useState(false);
  const [editId, setEditId] = useState(null);
  const [Message, setMessage] = useState(null);
  

  function addtask() {
     
    if(isEditing)
    {
        setarr(
          arr.map((obj)=>(obj.id === editId ? {...obj,task:input} :  obj))
        );
        setIsEditing(false);
        setEditId(null);

        
    }
    else {
      const obj = { id: Date.now(), task: input };
      setarr([...arr, obj]);
    }
    setinput("");
  }
  function handleDelete(del) {
    if(isEditing)
    {
      setMessage("Please compeletd Edit First");

    }
else{
    setarr(
      arr.filter((obj) => {
        if (obj.id !== del) {
          return obj;
        }
      })
    );
  }
  }

  function handleEdit(idToEdit) {
    const objectToEdit = arr.find((obj) => obj.id === idToEdit);
    setinput(objectToEdit.task);
    setIsEditing(true);
    setEditId(idToEdit);
    //setinput("");
  }

  return (
    <>
      <div>
        <input
          type="text"
          value={input}
          onChange={(e) => setinput(e.target.value)}
        />
        <button onClick={addtask}>{isEditing ? "Update" : "Add"}</button>
        {/*TERNARY OPERATOR*/}
      </div>
     <p>{Message}</p>
      <ul>
        
        {arr.map((obj) => {
          return (
            <li key={obj.id}>
              {obj.task}{" "}
              <MdDeleteOutline onClick={() => handleDelete(obj.id)} />
              <MdEdit onClick={() => handleEdit(obj.id)} />
            </li>
          );
        })}
      </ul>
    </>
  );
}

export default App;
