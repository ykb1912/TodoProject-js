const form = document.querySelector("#todo-form");
const todoInput = document.querySelector("#todo-list");
const todoList = document.querySelector(".list-group");
const firstCardBody = document.querySelectorAll(".card-body")[0];
const secondCardBody = document.querySelectorAll(".card-body")[1];
const filter = document.querySelector("#filter-control");
const clearButton = document.querySelector("#clear-todos")


// const users = prompt("Kullanıcı Adını Giriniz.")


// localStorage.setItem("users",users);

// document.querySelector("#users").innerHTML = localStorage.getItem("users")

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
        $.post("https://63136805b466aa9b0398e36f.mockapi.io/todos/", {
            "content":newTodo,
            "isCompleted":false
        })

        showAlert("success","Başarılı Bir Şekilde Eklendi")
    //    window.location.reload(1);
     }

    
    e.preventDefault();
}
function  addTodoListUI(newTodo,id){
    //liste oluşturma
    const listİtem= document.createElement("li");
    //link oluşturma
    const link = document.createElement("a");
    const detailLink = document.createElement("a")
    // <!-- <li class="list-group-item d-flex justify-content-between">
    //                 Todo 1
    //                 <a href = "#" class ="delete-item">
    //                     <i class = "fa fa-remove"></i>
    //                 </a>

                // </li>-->

    detailLink.href="details.html?id=" + id
    detailLink.className="düzenle"
    detailLink.innerHTML="Düzenle"
    link.href = "#"
    link.className = "delete-item"
    link.innerHTML = "<i class = 'fa fa-remove'></i>"
    listİtem.className = "list-group-item d-flex justify-content-between"
    link.setAttribute('data-id',id)
    listİtem.appendChild(document.createTextNode(newTodo));
    listİtem.appendChild(link);
    listİtem.appendChild(detailLink)
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
       $.ajax({
        url: 'https://63136805b466aa9b0398e36f.mockapi.io/todos/'+ e.target.parentElement.getAttribute('data-id'),
        type: 'DELETE',
        success: function(response) {
          //...
        }
     });

    }
}

$(document).ready(function(){
   
    getTodoList();


  });

function getTodoList(){
      //Ajax Function to send a get request
  $.ajax({
    type: "GET",
    url: 'https://63136805b466aa9b0398e36f.mockapi.io/todos/',
    success: function(response){
        for(var i = 0 ; i <= response.length; i++) {
           addTodoListUI(response[i].content, response[i].id)
        }
    }
  });
}

