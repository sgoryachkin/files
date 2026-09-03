function FindProxyForURL(url, host) {
    var PROXY = "SOCKS5 127.0.0.1:1080";
    var DIRECT = "DIRECT";

    if (
        // Youtube
        dnsDomainIs(host, "youtube.com") ||
        dnsDomainIs(host, "googlevideo.com") ||
        dnsDomainIs(host, "youtu.be") ||
        dnsDomainIs(host, "ytimg.com") ||

        // Facebook
        dnsDomainIs(host, "facebook.com") ||
        dnsDomainIs(host, "fbcdn.net") ||

        // Instagram
        dnsDomainIs(host, "instagram.com") ||

        // LinkedIn
        dnsDomainIs(host, "linkedin.com") ||

        // Swagger.io
        dnsDomainIs(host, "swagger.io") ||
        dnsDomainIs(host, "smartbear.co") ||
        dnsDomainIs(host, "smartbear.com") ||
        dnsDomainIs(host, "imagedelivery.net") ||
        dnsDomainIs(host, "convertexperiments.com") ||

        // JetBrains
        dnsDomainIs(host, "jetbrains.com") ||
        dnsDomainIs(host, "jb.gg") ||

        // Видео cloudflarestream пользователя fttymkkotgfi8ra3 (Видеоуроки 3D)
        dnsDomainIs(host, "customer-fttymkkotgfi8ra3.cloudflarestream.com") ||

        // Autodesk
        dnsDomainIs(host, "autodesk.com")
    ) {
        return PROXY;
    }

    return DIRECT;
}
