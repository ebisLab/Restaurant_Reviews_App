const cacheName ='v1';

const cacheAssets = [

'restaurant.html', 
'css/styles.css', 
'js/dbhelper.js',
'js/main.js',
'js/index.js',
'js/restaurant_info.js', 
'img/1.jpg',
'img/2.jpg',
'img/3.jpg',
'img/4.jpg',
'img/5.jpg',
'img/6.jpg',
'img/7.jpg',
'img/8.jpg',
'img/9.jpg',
'img/10.jpg'
];

//Call event
self.addEventListener('install', (e) =>{
	console.log('Service Worker: Installed');

	e.waitUntil(
		caches
			.open(cacheName)
			.then(cache => {
				console.log('Service Worker: Caching Files');
				cache.addAll(cacheAssets);
			})
			.then(() => self.skipWaiting())
		);
});

//Call Activate event
self.addEventListener('activate', (e) =>{
	console.log('Service Worker: Activated');

	//reove unwanted caches
	e.waitUntil(
		caches.keys().then(cacheNames => {
			return Promise.all(
				cacheNames.map(cache => {
					if(cache !== cacheName) {
						console.log('Service Worker: Clearing Old Cache');
						return caches.delete(cache);
					}
				})
				);
		})
		);
});

//Call Fetch Event
self.addEventListener('fetch', function(event) {
  event.respondWith(
    caches.match(event.request)
      .then(function(response) {
        // Cache hit - return response
        if (response) {
          return response;
        }
        return fetch(event.request);
      }
    )
  );
});