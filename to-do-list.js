const form = document.querySelector("#todo-form");
const todoInput = document.querySelector("#todo-list");
const todoList = document.querySelector(".list-group");
const firstCardBody = document.querySelectorAll(".card-body")[0];
const secondCardBody = document.querySelectorAll(".card-body")[1];
const filter = document.querySelector("#filter-control");
const clearButton = document.querySelector("#clear-todos")

eventListeners();
function eventListeners(){
    form.addEventListener("submit",addTodo)
    clearButton.addEventListener("click",clearAllTodos);
    secondCardBody.addEventListener("click",deleteTodo);
}
function addTodo(e){
    const newTodo = todoInput.value.trim();
    // console.log(newTodo)

    if(newTodo === ""){
        showAlert("danger","Lütfen Bir TODO Giriniz.")
    } else{
        addTodoListUI(newTodo);
        showAlert("success","Başarılı Bir Şekilde Eklendi")
     }

    
    e.preventDefault();
}
function  addTodoListUI(newTodo){
    //liste oluşturma
    const listİtem= document.createElement("li");
    //link oluşturma
    const link = document.createElement("a");
    // <!-- <li class="list-group-item d-flex justify-content-between">
    //                 Todo 1
    //                 <a href = "#" class ="delete-item">
    //                     <i class = "fa fa-remove"></i>
    //                 </a>

                // </li>-->

    
    link.href = "#"
    link.className = "delete-item"
    link.innerHTML = "<i class = 'fa fa-remove'></i>"
    listİtem.className = "list-group-item d-flex justify-content-between"
    listİtem.appendChild(document.createTextNode(newTodo));
    listİtem.appendChild(link);
    todoList.appendChild(listİtem);
    todoInput.value = " ";
}
function showAlert(type,message){
    const alert = document.createElement("div");
    alert.className = `alert alert-${type}`
    alert.textContent = message;
    firstCardBody.appendChild(alert);
    setTimeout(function(){
        alert.remove()

    },4000)
}
function clearAllTodos(){
    if(confirm("Tüm Todoları Silmek İstediğinizi Emin Misniz?")){
        todoList.innerHTML= ""; 
    }
}
function deleteTodo(e){
    if(e.target.className === "fa fa-remove"){
       e.target.parentElement.parentElement.remove()
       showAlert("success","Todo Silindi")

    }
}
