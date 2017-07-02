/*!
 * 
 * Some custom javascript
 * 
 */

var aTopSection = '#profile';
var amountScrolled = 100;

$(window).scroll(function() {
    btn_back_to_top(aTopSection);
});

/* 
  jQuery ready function. Specify a function to 
  execute when the DOM is fully loaded.
*/
$(document).ready( function ()
{
	btn_back_to_top(aTopSection);
});
