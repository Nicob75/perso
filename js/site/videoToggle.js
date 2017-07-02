
function video_quality_toggle()
{
	$('.video-quality-select').each(function() {
	  $(this).change(function(e){
	  	var embed_div = $(this).siblings('.embed-responsive');
	    var video = embed_div.find('.embed-responsive-item');
	    // var src = video.attr(src);
	    var time = video[0].currentTime;

		video.find('source').eq(1).prependTo(video);
		video[0].load();
    	video[0].play();
    	video[0].currentTime = time;
	  });
	});

}
