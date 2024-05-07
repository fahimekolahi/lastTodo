import { useEffect, useState } from 'react'
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
    setTodoList(todoList.filter(item => item.id !== id))
  }


  const [editFlag, setEditFlag] = useState({
    editMode: false,
    todoId: null
  })

  useEffect(() => {

    if (editFlag.editMode) {
      setInputValue(todoList.find(item => item.id === editFlag.todoId)?.todoText)
    } else { setInputValue("") }




  }, [editFlag])

  const submitEdit = () => {
    let temp = [...todoList]
    const indexFinder =
      temp.findIndex(item => item.id === editFlag.todoId)
    temp[indexFinder].todoText = inputValue

    setTodoList([...todoList])

    setEditFlag({
      editMode: false,
    })
  }

  return (


    <div className='mx-auto'>
      <div className='text-center text-[2rem] w-full py-2 bg-[#036CAD] my-4 text-white'>
        <p>todo list</p>

      </div>
      <div className='flex justify-center gap-2 text-white mt-6 mb-6'>
        <input value={inputValue} onChange={(e) => setInputValue(e.target.value)} className='rounded-[3px] text-black'></input>


        {editFlag.editMode ? <button onClick={submitEdit}>submit</button> : <button onClick={addBtn}>add</button>}

       

      </div>


      <div>
      {todoList.map(item =>
          <TodoBox todoText={item.todoText} id={item.id} deletfunction={deleteTodo} setEditFlag={setEditFlag}></TodoBox>
        )}
      </div>
    </div>












  );
}

export default App;

