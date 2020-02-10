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
                    val.SHORTTITLE,
                    val.TYPE,
                    "<div class='d-flex'><div style='width: 83px;'>"+ val.STATE+ "</div><div class='progress'>"+
                               (val.STATE ==='Reviewed'  ? '<div  class="progress-bar" role="progressbar"  style="width: 75%" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>' : '') +
                               (val.STATE ==='Todo'  ? '<div  class="progress-bar" role="progressbar"  style="width: 5%" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>' : '') +
                               (val.STATE ==='Review'  ? '<div  class="progress-bar" role="progressbar"  style="width: 25%" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>' : '') +
                               (val.STATE ==='Completed'  ? '<div class="progress-bar" role="progressbar"  style="width: 100%" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>' : '') +
                            "</div>"+
                             (val.STATE ==='Completed'  ? '<div class="task-completed"><i class="fa fa-check check-icon"></<i></div>' : '') +
                             (val.STATE ==='Todo'  ? '<div class="task-completed"><i class="fa fa-faExclamation-icon"></i></div>' : '')+"</div>",
                    val.MYROLE,
                    val.SECTION,
                    val.AUTHOR,
                    val.DEADLINE,
                    "<select class='form-control'><option value='"+ val.ACTIONS + "'" + (val.ACTIONS === 'SELECT' ? 'selected="selected"' : '') +">Select</option><option value='"+ val.ACTIONS + "'" + (val.ACTIONS === 'REVIEW' ? 'selected="selected"' : '') +">Review</option><option value='"+ val.ACTIONS + "'" + (val.ACTIONS === 'TODO' ? 'selected="selected"' : '') +">Todo</option></select>"
                 ]
               ).draw();
      
    })
    
    }
  });
  });