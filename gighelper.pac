function FindProxyForURL(url, host) {
    // List of domains that should go through the proxy
    var proxyDomains = [
        "www.gighelper.com",
        "iguazu.doordash.com",
        "api-dasher.doordash.com",
        "unified-gateway.doordash.com",
        "otel-mobile.doordash.com"
    ];

    // Proxy server settings
    var proxy = "PROXY 52.39.55.16:2903";

    // Check if the host matches any of the domains in the list
    for (var i = 0; i < proxyDomains.length; i++) {
        if (dnsDomainIs(host, proxyDomains[i])) {
            return proxy;  // Route through the proxy
        }
    }

    // Default behavior: don't use a proxy for other domains
    return "DIRECT";
}
