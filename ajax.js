$("#toload").load(`page/main.html`)
$(function(){ 
    $('.nav-link').click(function (e) { 
        e.preventDefault();
        $("#toload").load(`page/${$(this).attr('id')}.html`)
    })
})