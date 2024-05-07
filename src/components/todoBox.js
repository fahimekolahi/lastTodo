const TodoBox=({id, todoText, deletfunction , setEditFlag})=>{

return(


    <div>
<p>{todoText}</p>

<button onClick={()=>deletfunction(id)}>delete</button>
<button onClick={()=>setEditFlag({editMode:true , todoId: id})}>edit</button>




    </div>





)








}

export default TodoBox