console.log('Service Worker: Registered');

//Event Listener 
self.addEventListener('install', function(e) {

});

const cacheFiles = [
'/', 
'/restaurant.html', 
'/css/styles.css', 
'/js/dbhelper.js',
'/js/main.js',
'/js/index.js',
'js/restaurant_info.js', 
'/data/restaurantsljson',
'/img/1.jpg',
'/img/2.jpg',
'/img/3.jpg',
'/img/4.jpg',
'/img/5.jpg',
'/img/6.jpg',
'/img/7.jpg',
'/img/8.jpg',
'/img/9.jpg',
'/img/10.jpg'
];