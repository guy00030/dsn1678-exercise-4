var $win = $(window);
var $sun = $('.sun');
var $sunSection = $('.sun-section');
var $dipperSection = $('.dipper-section');
var $dipper = $('.dipper');
var $shuttle1Section = $('.shuttle1-section');
var $shuttle1 = $('.shuttle1');
var $shipSection = $('.ship-section');
var $ship = $('.ship');
/* $= JQuery object reminder */

$win.on('scroll', function () {
	var scrollPos = $win.scrollTop();

	/* console.log(scrollPos); < for debugging*/

	$sun.css('transform', 'rotate(' + scrollPos / 5 + 'deg)');
	$sunSection.css('background-position', 'center ' + scrollPos / 3 + 'px');
});

$dipperSection.waypoint(function () {
	$dipper.addClass('js-dipper-fade');
}, { offset: '50%' });

$shuttle1Section.waypoint(function () {
	$shuttle1.addClass('js-shuttle1-fade');
}, { offset: '50%' });

$win.on('scroll', function () {
	var scrollPos = $win.scrollTop();

	
	$shuttleSection.css('background-position', 'center ' + scrollPos / 3 + 'px');
});

$shipSection.waypoint(function () {
	$ship.addClass('js-ship-fade');
}, { offset: '50%' });

$win.on('scroll', function () {
	var scrollPos = $win.scrollTop();

	
	$shipSection.css('background-position', 'center ' + scrollPos / 3 + 'px');
});