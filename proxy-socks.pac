function FindProxyForURL(url, host) {
    var PROXY = "SOCKS5 127.0.0.1:1080";
    var DIRECT = "DIRECT";

    // Простая проверка по домену
   
    if (
        	// Youtube
        	dnsDomainIs(host, "youtube.com") ||
        	dnsDomainIs(host, "googlevideo.com") ||
        	dnsDomainIs(host, "youtu.be") ||
        	dnsDomainIs(host, "ytimg.com") ||

        	// Facebook
        	dnsDomainIs(host, "facebook.com") ||
        
        	// Swagger
	    	dnsDomainIs(host, "swagger.io") ||
	    	dnsDomainIs(host, "smartbear.co") ||

        	dnsDomainIs(host, "jetbrains.com") ||
        	dnsDomainIs(host, "jb.gg") ||
        	dnsDomainIs(host, "instagram.com") 
    	) {
        return PROXY;
    }

    return DIRECT;
}
