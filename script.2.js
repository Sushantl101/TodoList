const item = document.querySelector("item");
const todoList = document.querySelector("#todoList");

let todos = [];
item.addEventListener(
  "keyup",
function(event){
  if(event.key == "Enter"){
    addToDo(this.value)
    this.value = ""
  }
}
)

const addToDo = (item) => {
  const listItem = document.createElement("li");
  listItem.innerHTML =
       $;{item}
       <i class="fa-solid fa-xmark"></i> 
    

  todoList.addEventListener(
 "click",
 function(){
  this.classList.toggle("done")
 }
  )
  todoList.appendChild(listItem)
}




 

