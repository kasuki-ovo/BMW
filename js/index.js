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
var w = $('.carousel').width()
$('.ppt img').css('width',w)
$('.mid-contain').css('width',w)
$(window).resize(function(){
	w = $('.carousel').width()
	$('.ppt img').css('width',w)
	$('.mid-contain').css('width',w)
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

//轮播图
var timer;
var n=0;
var num=0;
function run(){
	timer = setInterval(function(){
		w = $('.carousel').width()
		n++;
		if(n>6){
			n=0;
			$('.ppt-img ul').css('left',-w*n+'px');
			$('.mid-txt').css('left',-w*n+'px');
			n=1;
		}
		
		$('.ppt-img ul').animate({'left':-w*n+'px'})
		$('.mid-txt').animate({'left':-w*n+'px'})
		setTimeout(function(){
			if(n>5){
				var m=0;
				$('.carousel ol').css('left',m*16.66666667+'%');
			}else{
				$('.carousel ol').animate({'left':n*16.66666667+'%'},250,"linear");
			}
		},250)
	},3000)
}
run()

$('.ppt-img').hover(function(){
	clearInterval(timer)
},function(){
	run()
})
$('.carousel .right').click(function(){
	n++;
	if(n>6){
		n=0;
		$('.ppt-img ul').css('left',-w*n+'px');
		$('.mid-txt').css('left',-w*n+'px');
		n=1;
	}
	
	$('.ppt-img ul').animate({'left':-w*n+'px'})
	$('.mid-txt').animate({'left':-w*n+'px'})
	setTimeout(function(){
		if(n>5){
			var m=0;
			$('.carousel ol').css('left',m*16.66666667+'%');
		}else{
			$('.carousel ol').animate({'left':n*16.66666667+'%'},250,"linear");
		}
	},250)
})

$('.carousel .left').click(function(){
	n--;
	if(n<0){
		n=6;
		$('.ppt-img ul').css('left',-w*n+'px');
		$('.mid-txt').css('left',-w*n+'px');
		n=5;
	}
	
	$('.ppt-img ul').animate({'left':-w*n+'px'})
	$('.mid-txt').animate({'left':-w*n+'px'})
	setTimeout(function(){
		if(n<0){
			var m=5;
			$('.carousel ol').css('left',m*16.66666667+'%');
		}else{
			$('.carousel ol').animate({'left':n*16.66666667+'%'},250,"linear");
		}
	},250)
})

$('.li-toggle').click(function(){
	$('.hide-list').slideToggle();
	$('.li-toggle .cont').toggleClass('on')
	$('.li-toggle .blue').toggleClass('act')
})