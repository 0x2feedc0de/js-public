function FindProxyForURL(url, host) {
  // part of the IANA private IP address ranges, connect directly.
  if (
    isInNet(host, "10.0.0.0", "255.0.0.0") ||
    isInNet(host, "172.16.0.0", "255.240.0.0") ||
    isInNet(host, "192.168.0.0", "255.255.0.0")
  ) {
    return "DIRECT";
  }
  proxy_list = "PROXY proxy.test:8080; DIRECT";

  domains = [
    "github.com",
    "google.com",
    "gstatic.com",
    "youtube.com",
    "golang.org",
    "googlevideo.com",
    "googleusercontent.com",
  ];
  for (var i = 0; i < domains.length; i++) {
    if (dnsDomainIs(host, domains[i])) {
      return proxy_list;
    }
  }
  return "DIRECT";
}
