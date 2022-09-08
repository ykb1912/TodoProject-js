const update = document.querySelector("#update-btn")

eventListeners();
function eventListeners(){
    update.addEventListener("click",makePUTrequest)

    
};

function makePUTrequest() {
    $.ajax({
        type: 'PUT',
        url: 'https://63136805b466aa9b0398e36f.mockapi.io/todos/'+window.location.search.substr(4),
        data: 'content='+document.getElementById("detail-list").value ,
        success: function (response){
            document.getElementById("detail-list").value = response.content;
        }
        
    });
}
$.ajax({
    type: "GET",
    url: 'https://63136805b466aa9b0398e36f.mockapi.io/todos/'+window.location.search.substr(4),
    success: function(response){
        document.getElementById("detail-list").value= response.content;
    }
        
})


// güncelle butonuna basıldığında put isteği atılacak ve input un değeri alınıp data içersinde content= şeklinde verilecek
