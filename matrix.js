
(function() {
    var link = document.querySelector("link[rel*='icon']") || document.createElement('link');
    link.type = 'image/x-icon';
    link.rel = 'shortcut icon';
    link.href = '/static/matrix-theme/favicon-96x96.png';
    document.getElementsByTagName('head')[0].appendChild(link);
})();

(function() {
    var link = document.querySelector("link[rel*='apple-touch-icon']") || document.createElement('link');
    link.type = 'image/x-icon';
    link.rel = 'apple-touch-icon';
    link.href = '/static/matrix-theme/matrix-icon.png';
    document.getElementsByTagName('head')[0].appendChild(link);
})();

(function() {
    var link = document.querySelector("link[rel*='apple-touch-startup-image']") || document.createElement('link');
    link.type = 'image/x-icon';
    link.rel = 'apple-touch-startup-image';
    link.href = '/static/matrix-theme/matrix-launch.png';
    document.getElementsByTagName('head')[0].appendChild(link);
})();

