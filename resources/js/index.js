$(document).ready(function () {
    jQuery.ajax({
        url: '../../pages/login.html',
        dataType: 'html',
        success: function(data) {
            $('.content-body-wrapper').html(data);
        },
        error: function(xhr, error){
            alert('error. see console for details');
        }
    });

    $(window).on('hashchange',function(){ 
        alert(window.location.hash);
      if(window.location.hash === '#/home'){
          alert();
          jQuery.ajax({
            url: '../../pages/dashboard.html',
            dataType: 'html',
            success: function(data) {
                $('.content-body-wrapper').html(data);
                $('.content-header-wrapper').load('../../pages/header.html');
            },
            error: function(xhr, error){
                alert('error. see console for details');
            }
        });
      }else if(window.location.hash === '#/todo'){
        alert();
        jQuery.ajax({
          url: '../../pages/todo.html',
          dataType: 'html',
          success: function(data) {
              $('.content-body-wrapper').html(data);
              $('.content-header-wrapper').load('../../pages/header.html');
          },
          error: function(xhr, error){
              alert('error. see console for details');
          }
      });
    }
          });

         
});
