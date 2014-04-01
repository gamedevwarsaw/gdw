(function (i, s, o, g, r, a, m) {
    i['GoogleAnalyticsObject'] = r;
    i[r] = i[r] || function () {
        (i[r].q = i[r].q || []).push(arguments)
    };
    i[r].l = new Date();
    a = s.createElement(o);
    m = s.getElementsByTagName(o)[0];
    a.async = 1;
    a.src = g;
    m.parentNode.insertBefore(a, m);
})(window, document, 'script', '//www.google-analytics.com/analytics.js', 'ga');
ga('create', 'UA-48817736-1', 'gamedevwarsaw.pl');
ga('send', 'pageview');


(function () {
    var scripts = ['js/vendor/jquery.js', 'js/vendor/fastclick.js', 'js/foundation/foundation.js', 'js/foundation-setup.js'];
    for (var i = 0; i < scripts.length; i++) {
        var ns = document.createElement('script');
        ns.type = 'text/javascript';
        ns.async = true;
        ns.src = scripts[i];
        var s = document.getElementsByTagName('script')[0];
        s.parentNode.insertBefore(ns, s);
    }
})();