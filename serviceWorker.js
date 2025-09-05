self.addEventListener('fetch', event => {
    const url = new URL(event.request.url);

    // Check if the request is going through Securly
    if (url.hostname.includes('securly.com')) {
        // Modify the request to bypass Securly
        const modifiedUrl = url.origin + url.pathname + url.search;
        event.respondWith(fetch(modifiedUrl));
    } else {
        // Pass through all other requests
        event.respondWith(fetch(event.request));
    }
});
