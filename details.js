$.ajax({
    type: "GET",
    url: 'https://63136805b466aa9b0398e36f.mockapi.io/todos/'+window.location.search.substr(4),
    success: function(response){
        document.getElementById("detail-list").value= response.content;
    }
        
})

// güncelle butonuna basıldığında put isteği atılacak ve input un değeri alınıp data içersinde content= şeklinde verilecek

$.ajax({
    url: '/echo/html/',
    type: 'PUT',
    data: "name=John&location=Boston",
    
  });
