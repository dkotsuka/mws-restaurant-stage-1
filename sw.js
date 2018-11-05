const cacheVersion = "v1-05-11-2018";

this.addEventListener("install", function (event) {
	event.waitUntil(
	    caches.open(cacheVersion).then(function(cache) {
	      return cache.addAll([
	      	"/",
	      	"/data/restaurants.json",
	      	"/img/",
	      	"/js/main.js",
	      	"/js/restaurant_info.js"
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