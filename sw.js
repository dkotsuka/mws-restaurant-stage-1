const currentCacheVersion = "v2-06-11-2018";

this.addEventListener("install", function (event) {
	event.waitUntil(
	    caches.open(currentCacheVersion).then(function(cache) {
	      return cache.addAll([
	      	"/mws-restaurant-stage-1/",
	    	"/mws-restaurant-stage-1/css/styles.css",
	      	"/mws-restaurant-stage-1/data/restaurants.json",
	      	"/mws-restaurant-stage-1/img/1.jpg",
	      	"/mws-restaurant-stage-1/img/2.jpg",
	      	"/mws-restaurant-stage-1/img/3.jpg",
	      	"/mws-restaurant-stage-1/img/4.jpg",
	      	"/mws-restaurant-stage-1/img/5.jpg",
	      	"/mws-restaurant-stage-1/img/6.jpg",
	      	"/mws-restaurant-stage-1/img/7.jpg",
	      	"/mws-restaurant-stage-1/img/8.jpg",
	      	"/mws-restaurant-stage-1/img/9.jpg",
	      	"/mws-restaurant-stage-1/img/10.jpg",
	      	"/mws-restaurant-stage-1/js/main.js",
	      	"/mws-restaurant-stage-1/js/dbhelper.js",
	      	"/mws-restaurant-stage-1/js/restaurant_info.js",
	      	"/mws-restaurant-stage-1/index.html",
	      	"/mws-restaurant-stage-1/restaurant.html?id=1",
	      	"/mws-restaurant-stage-1/restaurant.html?id=2",
	      	"/mws-restaurant-stage-1/restaurant.html?id=3",
	      	"/mws-restaurant-stage-1/restaurant.html?id=4",
	      	"/mws-restaurant-stage-1/restaurant.html?id=5",
	      	"/mws-restaurant-stage-1/restaurant.html?id=6",
	      	"/mws-restaurant-stage-1/restaurant.html?id=7",
	      	"/mws-restaurant-stage-1/restaurant.html?id=8",
	      	"/mws-restaurant-stage-1/restaurant.html?id=9",
	      	"/mws-restaurant-stage-1/restaurant.html?id=10"
	      ]);
	    })
	);
});

this.addEventListener('fetch', function(event) {
  event.respondWith(
    caches.match(event.request).then(function(response) {
      return response || fetch(event.request);
    })
  );
});

this.addEventListener('activate', function(event) {
  const cacheWhitelist = [currentCacheVersion];

  event.waitUntil(
    caches.keys().then(function(keyList) {
      return Promise.all(keyList.map(function(key) {
        if (cacheWhitelist.indexOf(key) === -1) {
          return caches.delete(key);
        }
      }));
    })
  );
});