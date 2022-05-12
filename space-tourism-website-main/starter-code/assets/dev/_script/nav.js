$(function(){
    $("#nav-placeholder").load("nav.html");
});

// document.querySelectorAll(".nav-link").addEventListener('click', function() {
//     document.getElementsByClassName("active").classList.remove("active");
//     this.classList.add("active");
// });

$('.nav-link').on('click',function(){
    $('.active').removeClass('active');
    $(this).addClass('active-link');
});