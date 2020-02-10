$(document).ready(function(){
    var myTable =   $('table').DataTable({
          pagingType: 'full_numbers',
          pageLength: 10
      });
  $.ajax({
      url: 'mydataDraft.json',
      type: 'get',
      dataType: 'json',
      error: function(data){
          console.log(data);
          
      },
      success: function(data){
         console.log(data);
         $.each(data, function (key, val) {    
        
          
              myTable.row.add(
                  [
                     ]
                 ).draw();
        
      })
      
      }
    });
    });