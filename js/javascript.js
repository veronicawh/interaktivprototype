var width = window.matchMedia('(min-width: 768px)');
/*
	Method to remove the mobile-nav-class
	If javascript is disabled, the mobile nav will be displayed at all times and the map will be removed.
	If javascript is enabled, this code will initiate and display the proper navigation and map.
*/
	function removeClasses() {
		var $hamburger = $('#hamburger-nav');
		$('.mobile-nav').removeClass('mobile-nav');
		$('#herervi').removeClass('hidden');
		if(width.matches) {
			$hamburger.removeClass('show');
			$hamburger.addClass('hidden');
		}  else {
			$hamburger.removeClass('hidden');
			$hamburger.addClass('show');
		}
	}

/*
	Toggle mobile navigation
*/

function toggleMobileNav() {

	$nav = $('#hamburger-nav');
	$nav.on('click', function() {
		$('.container ul').toggleClass('mobile-nav');
	});

}

/*
	Method to remove mobileNav if max width > 767px
*/

function removeMobileNavOnResize() {

	if(width.matches) {
		$('.mobile-nav').removeClass('mobile-nav');
		$('#hamburger-nav').addClass('hidden');
		$('#hamburger-nav').removeClass('show');
	} else {
		$('#hamburger-nav').addClass('show');
		$('#hamburger-nav').removeClass('hidden');
	}
}
