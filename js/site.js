
$(document).ready(function() {
    
    $('body').removeClass('nojs');
    
    
    $('a').click(function(e) {
        try {
            _gat._getTrackerByName()._trackEvent('Click', this.title);
        }
        catch(e) {}
    });
    
    $(window).load(function() {
        $('#content, .footer').fadeIn(450);
          
          $(['/img/socialnetworkshover.png']).each(function(){
            $('<img/>')[0].src = this;
          });    
    });
    
    $(document).pngFix({blankgif: '/img/blank.gif'}); 
    
    
    
   $.backstretch("/img/bkg.jpg", {speed:450, height: 864, width: 1300}, function() {
       $(this).append('<div id=\"raster\"></div>');
       $('#raster').pngFix({blankgif: '/img/blank.gif'}); 
   });
   
    try {
    konami = new Konami();
    konami.code = function() {
         _gat._getTrackerByName()._trackEvent('Easter Egg', "Nyan Cat");
        $.getScript('/js/soundmanager2-nodebug-jsmin.js', function() {
            
            $.backstretch("/img/nyancat.gif", {speed:0, height: 400, width: 400});
            
           
                soundManager.url = '/swf/';
                soundManager.flashVersion = 9;
                soundManager.useFlashBlock = false;
                soundManager.onready(function() {
                  soundManager.createSound({
                    id: 'loop',
                    url: '/media/nyanloop.mp3',
                    autoLoad: true,
                    autoPlay: true,
                    loops: 9999999,
                    onload: function() {
                    },
                    onfinish: function() {
                    },
                    volume: 50
                  });
                });

                
    });
    };

    konami.load();
    }
    catch(err) { // in the event konami doesn't load 
    
    }

});