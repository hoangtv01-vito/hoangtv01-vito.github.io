// Typing Animation

var typed = new Typed(".typing",{
    strings:["", "Vulnerability Analyst", "Linux Administrator", "Windows Administrator", "Cloud Administrator"],
    typeSpeed:100,
    BackSpeed:60,
    loop:true
})

$('.nav__item').on('click', function(){
    $(this).addClass('active-link').siblings('li').removeClass('active-link');
});