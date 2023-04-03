$('.menu-toggle-btn').click(function(){
$(this).toggleClass('fas fa-times')
$('.navigation-menu').toggleClass('active')
})
$('#botao').click(function(){
    $('.akaza').toggleClass('akazaon')
    $('.rengoku').removeClass('rengokuon')
})
$('#botao2').click(function(){
    $('.rengoku').toggleClass('rengokuon')
    $('.akaza').removeClass('akazaon')
})