
import './App.css';
import {useState} from "react";
function App() {
  const [toDos,setToDos] = useState([])
  const [toDo,setToDo] = useState('')
  return (
    <div className="App">
    <div className="checklist">
  <h2>To Do List </h2>
  <div className='input'>
    <input className='input-field' value={toDo} onChange={(e)=>setToDo(e.target.value)} type="text" placeholder='Add items ....' />
    <i onClick={()=>setToDos([...toDos,{id:Date.now(), text: toDo,status:false}])} className='fas fa-plus icon'></i>
 
  </div>
  {toDos.map((obj)=>{
   return( 
   <label>
    <input onChange={(e)=>{
      setToDos(toDos.filter(obj2=>{
        if(obj2.id===obj.id){
          obj2.status=e.target.checked
        }
        return obj2
      }))

    }} value={obj.status} type="checkbox" name="" id="" />
    <span>{obj.text}     </span>
     <i onClick={()=>setToDos([])} className="fa-solid fa-xmark" ></i>
  </label>)
  })}

    <h2>ACTIVE TASK</h2>
    <div>
  {toDos.map((obj)=>{
    if (obj.status) {
      return(<h2>{obj.text}</h2>)
    }
    return null
  })}
  </div>
</div>
    </div>
  );
}

export default App;
