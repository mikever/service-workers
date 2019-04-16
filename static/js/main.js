// Make sure sw are supported
if (navigator.serviceWorker) {
    window.addEventListener('load', () => {
        navigator.serviceWorker
          .register('./static/js/sw_cached_pages.js')
          .then(reg => console.log('Service Worker: Registered'))
          .catch(err => console.log(`Service Worker Error: ${err}`))
    })
}
