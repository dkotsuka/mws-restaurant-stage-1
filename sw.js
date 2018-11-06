this.addEventListener("install", function (event) {
	event.waitUntil(
	    caches.open("v1-05-11-2018").then(function(cache) {
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
	      	"/mws-restaurant-stage-1/restaurant.html?id=1"
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