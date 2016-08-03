// Url address like: file:///path/to/file/proxy.pac

function FindProxyForURL( url, host ) {
	if (
		dnsDomainIs( host, ".onion" ) ||
		false
	) {
		return "SOCKS 127.0.0.1:9050"
	}
	if (
		dnsDomainIs( host, ".i2p" ) ||
		false
	) {
		if (
			/^https:\/\//.test( url ) ||
			false
		)
			return "PROXY 127.0.0.1:4445"
		return "PROXY 127.0.0.1:4444"
	}
}

