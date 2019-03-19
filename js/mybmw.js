$('.link').click(function(){
	$('.list-link').slideToggle(100)
	if ($('.nav-link').css('display','block')) {
		$('.nav-link').slideToggle(0)
	}
	$('.link a').toggleClass('on')
	$('.link span').toggleClass('on')
})
$('.navigation').click(function(){
	$('.nav-link').slideToggle(100)
	if ($('.list-link').css('display','block')) {
		$('.list-link').slideToggle(0)
	}
	$('.navigation a').toggleClass('on')
	$('.navigation span').toggleClass('on')
})

$(window).scroll(function(){
	var h = $(window).scrollTop()
	if (h>$('main').offset().top) {
		$('.fix-ul').show()
		$('.fix-search').slideDown()
		$('.fix-search').css({'position':'fixed','top':0})
	}
	if (h<=$('main').offset().top) {
		$('.fix-ul').hide()
		$('.fix-search').css({'position':'absolute','top':'100%'})
		$('.fix-search').slideUp()
	}
})