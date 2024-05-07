import { useState } from 'react'
import './App.css';
import TodoBox from './components/todoBox';
function App() {

  const [todoList, setTodoList] = useState([{
    id: 1, todoText: "studying"
  },
  { id: 2, todoText: "shopping" }
  ])

  const [inputValue, setInputValue] = useState("")

  function addBtn() {

    setTodoList([...todoList, { id: Date.now(), todoText: inputValue }])
  }


  function deleteTodo(id) {
    setTodoList(todoList.filter(item => item.id !==id))
  }


const[editFlag , setEditFlag]=useState({
  editMode:false,
  todoId: null
})



  return (


    <div>

      <input value={inputValue} onChange={(e) => setInputValue(e.target.value)}></input>

      <button onClick={addBtn}>add</button>
      {todoList.map(item =>
        <TodoBox todoText={item.todoText} id={item.id} deletfunction={deleteTodo}></TodoBox>
      )}

    </div>












  );
}

export default App;

