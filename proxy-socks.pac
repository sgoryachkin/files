function FindProxyForURL(url, host) {
    var PROXY = "SOCKS5 127.0.0.1:1080";
    var DIRECT = "DIRECT";

    // Простая проверка по домену
    if (dnsDomainIs(host, "youtube.com") ||
        dnsDomainIs(host, "googlevideo.com") ||
        dnsDomainIs(host, "youtu.be") ||
        dnsDomainIs(host, "facebook.com") ||
        dnsDomainIs(host, "ytimg.com") ||
	    dnsDomainIs(host, "swagger.io") ||
        dnsDomainIs(host, "jetbrains.com") ||
        dnsDomainIs(host, "instagram.com") ||
        dnsDomainIs(host, "jb.gg")) {
        return PROXY;
    }

    return DIRECT;
}
