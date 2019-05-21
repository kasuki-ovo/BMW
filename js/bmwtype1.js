$('.link').click(function() {
	$('.list-link').slideToggle(100)
	if ($('.nav-link').css('display', 'block')) {
		$('.nav-link').slideToggle(0)
	}
	$('.link a').toggleClass('on')
	$('.link span').toggleClass('on')
})
$('.navigation').click(function() {
	$('.nav-link').slideToggle(100)
	if ($('.list-link').css('display', 'block')) {
		$('.list-link').slideToggle(0)
	}
	$('.navigation a').toggleClass('on')
	$('.navigation span').toggleClass('on')
})

$(window).scroll(function() {
	var h = $(window).scrollTop()
	if (h > $('main').offset().top) {
		$('.fix-ul').show()
		$('.fix-search').slideDown()
		$('.fix-search').css({
			'position': 'fixed',
			'top': 0
		})
	}
	if (h <= $('main').offset().top) {
		$('.fix-ul').hide()
		$('.fix-search').css({
			'position': 'absolute',
			'top': '100%'
		})
		$('.fix-search').slideUp()
	}
})

var n = 0;
$('.sec button.left').click(function() {
	n--;
	if (n < 0) {
		n = 4;
	}
	$('.txt-list').css('left', -100 * n + '%');
	$('ol li').eq(n).addClass('on');
	$('ol li').eq(n).siblings().removeClass('on')
})
$('.sec button.right').click(function() {
	n++;
	if (n > 4) {
		n = 0;
	}
	$('.txt-list').css('left', -100 * n + '%');
	$('ol li').eq(n).addClass('on');
	$('ol li').eq(n).siblings().removeClass('on')
})
$('ol li').click(function() {
	n = $(this).index();
	$(this).addClass('on');
	$(this).siblings().removeClass('on');
	$('.txt-list').css('left', -100 * n + '%')
	// $('.txt-list').animate({'left':-100*n+'%'},250,"linear")
})
var m = 0;
$('.cartype-img .lf').click(function() {
	m--;
	if (m < 0) {
		m = 10;
		$('.cartype-img ul').css('left', -43.3 * m + '%')
	}
	$('.cartype-img ul').animate({
		'left': -43.3 * m + '%'
	})
})
$('.cartype-img .rig').click(function() {
	m++;
	if (m > 10) {
		m = 0;
		$('.cartype-img ul').css('left', -41 * m + '%')
	}
	$('.cartype-img ul').animate({
		'left': -39.1 * m + '%'
	})
})

var flag = false;
var x, y;
var ol, ot;
$('#drag1.move-btn').mousedown(function(ev){  //鼠标按下
	var ev = window.event || ev;
	flag = true;
	x = ev.clientX;
	y = ev.clientY;
	ol = $(this)[0].offsetLeft;
	ot = $(this)[0].offsetTop;
})
$(document).mousemove(function(ev){  //鼠标移动
	if (flag == false) return;
	var ev = window.event || ev;
	var _x, _y;
	_x = ev.clientX - x + ol;
	_y = ev.clientY - y + ot;
	if (_x < 0) _x = -5;//防止超出左边缘。
	if (_y < 0) _y = 20;//防止超出上边缘。
	if (_x > $('.prog-div')[0].offsetWidth - $('.move-btn')[0].offsetWidth) _x = $('.prog-div')[0].offsetWidth - $('.move-btn')[0].offsetWidth+5;//防止超出右边缘。
	if (_y > $('.prog-div')[0].offsetHeight - $('.move-btn')[0].offsetHeight) _y = $('.prog-div')[0].offsetHeight - $('.move-btn')[0].offsetHeight+20;//防止超出下边缘
	$('#box1 .progress-line').css('width',_x+5);
	$('#drag1.move-btn').css('left', _x + 'px');
	$('#drag1.move-btn').css('top', _y + 'px');
})
$(document).mouseup(function(){  //鼠标松开
	flag = false;
})

$('#drag2.move-btn').mousedown(function(ev){  //鼠标按下
	var ev = window.event || ev;
	flag = true;
	x = ev.clientX;
	y = ev.clientY;
	ol = $(this)[0].offsetLeft;
	ot = $(this)[0].offsetTop;
})
$(document).mousemove(function(ev){  //鼠标移动
	if (flag == false) return;
	var ev = window.event || ev;
	var _x, _y;
	_x = ev.clientX - x + ol;
	_y = ev.clientY - y + ot;
	if (_x < 0) _x = -5;//防止超出左边缘。
	if (_y < 0) _y = 20;//防止超出上边缘。
	if (_x > $('.prog-div')[0].offsetWidth - $('.move-btn')[0].offsetWidth) _x = $('.prog-div')[0].offsetWidth - $('.move-btn')[0].offsetWidth+5;//防止超出右边缘。
	if (_y > $('.prog-div')[0].offsetHeight - $('.move-btn')[0].offsetHeight) _y = $('.prog-div')[0].offsetHeight - $('.move-btn')[0].offsetHeight+20;//防止超出下边缘
	$('#box2 .progress-line').css('width',_x+5);
	$('#drag2.move-btn').css('left', _x + 'px');
	$('#drag2.move-btn').css('top', _y + 'px');
})
$(document).mouseup(function(){  //鼠标松开
	flag = false;
})