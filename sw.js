const cacheVersion = "v1-05-11-2018";

this.addEventListener("install", function (event) {
	event.waitUntil(
	    caches.open(cacheVersion).then(function(cache) {
	      return cache.addAll([
	      	"/mws-restaurant-stage-1/",
	      	"/mws-restaurant-stage-1/data/restaurants.json",
	      	"/mws-restaurant-stage-1/img/",
	      	"/mws-restaurant-stage-1/js/main.js",
	      	"/mws-restaurant-stage-1/js/restaurant_info.js"
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