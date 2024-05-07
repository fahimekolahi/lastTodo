const TodoBox=({id, todoText, deletfunction , setEditFlag})=>{

return(


    <div className="text-white flex gap-3 rounded-[3px] justify-center my-3 w-[90%] bg-[#004D83] mx-auto">
<p>{todoText}</p>

<button onClick={()=>deletfunction(id)} className="">delete</button>
<button onClick={()=>setEditFlag({editMode:true , todoId: id})}>edit</button>




    </div>





)








}

export default TodoBox