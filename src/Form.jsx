import { useState } from "react"
import { MdDeleteOutline, MdEdit } from "react-icons/md";

function Form()
{
    const[input,setInput]=useState("");
    const [arr,setArray]=useState([]);
    function addarr()
    {
        const obj ={id:Date.now(),task:input}
        setArray([...arr,obj])
        setInput("");
       
    }
    function delLi(del)
    {
        setArray(arr.filter((obj)=>{ if(obj.id!==del){ return obj}}));
    }
    function EditLi(editid)
    {
        //const findObject= arr.find(obj.id===editid){ return obj}
      //  const objectToEdit = arr.find((obj) => obj.id === idToEdit);
      //const findobj =arr.find((obj)=>obj.id==idToEdit)
        const objectToEdit =arr.find((obj)=>obj.id===idToEdit);
    }
     console.log(arr);
    return(
        <>
        <input type="text" value={input} onChange={(e)=>setInput(e.target.value)}/>
        <button onClick={addarr}>Add</button>

        <ul>
            {
            arr.map((obj)=>{
                return <li key={obj.id}>{obj.task} {" "}
               
                <MdEdit onClick={()=> EditLi(obj.id)}/>
                 <MdDeleteOutline onClick={() => delLi(obj.id) }/>
               
                </li>
            })
        }
        </ul>
        </>
    )
}
export default Form