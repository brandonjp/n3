jQuery(document).ready(function($) { 

	var n3active = "active";  //  give the name of your 'active' class

	var $n3hides = (function() {
		$('#mainNav, #subNav, #customContent').children('ul').removeClass(n3active).children('li').removeClass(n3active);
	});  //  END n3hides [resets the nav / clears all .active items]

	var $n3firsts = (function() {
		$('#mainNav, #subNav, #customContent').children('ul:first-child').addClass(n3active).children('li:first-child').addClass(n3active);
	});  //  END n3firsts [adds .active to the :first-child of each nav level]

	$n3hides();  //  perform the hides right away
	$n3firsts();  //  set the :first-child items to n3active

	$('div.n3group.nav ul li').css('cursor','pointer').click(function() {
		
		$n3hides();  //  start with fresh actives on each click
		
		var tc = ( "." + $(this).attr('class') );
		var pc = ( "." + $(this).parent('ul').attr('class') );
		var di = ( $(this).parent('ul').parent('div').attr('id') );

		$(this).addClass(n3active).parent('ul').addClass(n3active);

		if ( di == "mainNav" ) {
			$('#subNav ul, #customContent ul').filter('ul'+tc).addClass(n3active).children('li').filter('li:first-child').addClass(n3active);	
		};

		if ( di == "subNav" ) {
			$('#mainNav ul').children('li').filter('li'+pc).addClass(n3active).parent('ul').addClass(n3active);
			$('#customContent ul'+pc).addClass(n3active).children('li').filter('li'+tc).addClass(n3active);							
		};


	});  // END n3nav onClick events
	
});  //  END jQuery ready