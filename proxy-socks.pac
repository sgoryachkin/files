function FindProxyForURL(url, host) {
    var PROXY = "SOCKS5 127.0.0.1:1080";
    var DIRECT = "DIRECT";

    var proxyDomains = [
        // Youtube
        "youtube.com",
        "googlevideo.com",
        "youtu.be",
        "ytimg.com",

        // Facebook & Instagram
        "facebook.com",
        "fbcdn.net",
        "instagram.com",
        
        // Swagger & Smartbear
        "swagger.io",
        "smartbear.co",
        "imagedelivery.net",
        "convertexperiments.com",

        // JetBrains
        "jetbrains.com",
        "jb.gg",

        // Autodesk
        "autodesk.com"
    ];

    for (var i = 0; i < proxyDomains.length; i++) {
        if (dnsDomainIs(host, proxyDomains[i])) {
            return PROXY;
        }
    }

    return DIRECT;
}

