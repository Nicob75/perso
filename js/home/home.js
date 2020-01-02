/*!
 * 
 * Some custom javascript
 * 
 */

var aTopSection = '#about';
var amountScrolled = 100;

var spanLastUpdate = document.getElementById('spanLastUpdate');
spanLastUpdate.innerHTML = spanLastUpdate.innerHTML.replace('XXX', strLastUpdate);

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
