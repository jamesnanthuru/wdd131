(function() {

    function calculateWindChill(tempC, windKmh) {
        return 13.12 + 0.6215 * tempC - 11.37 * Math.pow(windKmh, 0.16) + 0.3965 * tempC * Math.pow(windKmh, 0.16);
    }

    function displayWindChill() {
        var tempEl = document.getElementById('temperature');
        var windEl = document.getElementById('wind-speed');
        var chillEl = document.getElementById('wind-chill');

        var tempText = tempEl.textContent.trim();
        var windText = windEl.textContent.trim();

        var tempC = parseFloat(tempText);
        var windKmh = parseFloat(windText);

        var chillDisplay = 'N/A';

        if (!isNaN(tempC) && !isNaN(windKmh)) {
            if (tempC <= 10 && windKmh > 4.8) {
                var chill = calculateWindChill(tempC, windKmh);
                chillDisplay = chill.toFixed(1) + ' °C';
            }
        }

        chillEl.textContent = chillDisplay;
    }

    function setFooterDates() {
        var yearSpan = document.getElementById('footer-year');
        var modSpan = document.getElementById('footer-modified');

        var now = new Date();
        yearSpan.textContent = now.getFullYear();

        var mod = new Date(document.lastModified);
        var options = { year: 'numeric', month: 'short', day: 'numeric', hour: '2-digit', minute: '2-digit' };
        modSpan.textContent = mod.toLocaleDateString('en-US', options);
    }

    window.addEventListener('DOMContentLoaded', function() {
        displayWindChill();
        setFooterDates();
    });

})();