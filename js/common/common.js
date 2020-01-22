/*!
 * 
 * Global script to be used accross the website
 * 
 */

// header : makes header elements transparent when hovering the camera icon
$( ".header-content-inner .picture-tooltip-icon" ).hover(
  function() {
    $(this).siblings().css({opacity: 0.1});
  }, function() {
  	$(this).siblings().css({opacity: 1});
  }
);
