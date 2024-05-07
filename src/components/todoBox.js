const TodoBox=({id, todoText, deletfunction})=>{

return(


    <div>
<p>{todoText}</p>

<button onClick={()=>deletfunction(id)}>delete</button>
<button>edit</button>




    </div>





)








}

export default TodoBox