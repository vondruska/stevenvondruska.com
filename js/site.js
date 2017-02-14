var stevon = {
    loaded: function() {
        document.querySelectorAll("a").forEach(function(element, index, array) {
			element.addEventListener("click", stevon.click);
		});

        try {
            konami = new Konami();
            konami.code = function() {
                stevon.sendEvent('Easter Egg', 'Nyan Cat');
                document.body.classList.add('nyancat');
                var audio = new Audio('/media/nyanloop.mp3');
                audio.volume = .5;
                audio.loop = true;
                audio.play();
            };

            konami.load();
        } catch (err) { // in the event konami doesn't load 
            console.warn("Konami failed");
        }
    },
    click: function(e) {
        stevon.sendEvent('Click', this.title);
    },
    isAnalyticsLoaded: function() {
        return typeof ga !== 'undefined';
    },
    sendEvent: function(category, action) {
        if (stevon.isAnalyticsLoaded()) {
            ga('send', 'event', category, action);
        } else {
            console.warn('Analytics failed');
        }
    }
}


document.addEventListener("DOMContentLoaded", stevon.loaded);