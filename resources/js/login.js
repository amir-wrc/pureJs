validateLogin = () => {
    jQuery.ajax({
        url: '../../pages/dashboard.html',
        dataType: 'html',
        success: function(data) {
            window.location.href = '#/home';
        },
        error: function(xhr, error){
            alert('error. see console for details');
        }
    });
};

/* $(window).on('hashchange',function(){ 
    var page = window.location.hash;
    $.get('pages/'+page+'.html', function(pageContent){
       $('.page-container').html(pageContent);
    })   
  }); */