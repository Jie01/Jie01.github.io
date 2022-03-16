'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "84f9f9b45df299754ecfdc64bf950034",
"assets/assets/audios/bgm.mp3": "d8340f5792fd8fe8b0d20d51aa23b8f7",
"assets/assets/fonts/NotoSansTC-Regular.otf": "d6b43f6600389d7442f317adfbbd9942",
"assets/assets/images/background.png": "b0ebf1060c5d04935001b6c162cc61c1",
"assets/assets/images/char/1.png": "70c036f3bb846592d501a856154a0d51",
"assets/assets/images/char/2.png": "b00d39a746bf9725f706f6b9b245da10",
"assets/assets/images/char/3.png": "2af55973dc0e82644dda821a17f503bb",
"assets/assets/images/char/bite.png": "d82524a768ce68797e8598e03082f932",
"assets/assets/images/char/lutra0.png": "3ab77c180c57b4fa2fdcc48b581d5283",
"assets/assets/images/char/lutra1.png": "f33e3292e634adf0d06af3a91eafd154",
"assets/assets/images/char/sign0.png": "e8b53a662262cee5b749625a55dd3708",
"assets/assets/images/char/sign1.png": "179d36cc5c171e09e15c75c1ce019223",
"assets/assets/images/char/sign2.png": "7d1ec726408d682b44926a1304cf68ca",
"assets/assets/images/char/sign3.png": "7d531d72dbd554f66f884d60504e56a3",
"assets/assets/images/char/sign4.png": "a96de1d27902b1ab4b385ce6952bdb9d",
"assets/assets/images/drawerbg.png": "78c263ba781743ea35825ce4a20ad664",
"assets/assets/images/foot.png": "c917e377b76d9996e557a0f63e0aa9b1",
"assets/assets/images/footer.png": "d852d882f7f36bdb701e89dae9898f82",
"assets/assets/images/header.png": "ba1a8b69e80426860f72057170abb587",
"assets/assets/images/loading.gif": "835d8a3ae689a4dc1d02d420a0a1efc0",
"assets/assets/images/NoCute.png": "97803080e3605c68ec5abf17bb649167",
"assets/FontManifest.json": "8579c6adc9e38c35424c0f467921413b",
"assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1",
"assets/NOTICES": "c6f965681b022265b23289b9a92aa92c",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/fluttertoast/assets/toastify.css": "a85675050054f179444bc5ad70ffc635",
"assets/packages/fluttertoast/assets/toastify.js": "e7006a0a033d834ef9414d48db3be6fc",
"canvaskit/canvaskit.js": "62b9906717d7215a6ff4cc24efbd1b5c",
"canvaskit/canvaskit.wasm": "b179ba02b7a9f61ebc108f82c5a1ecdb",
"canvaskit/profiling/canvaskit.js": "3783918f48ef691e230156c251169480",
"canvaskit/profiling/canvaskit.wasm": "6d1b0fc1ec88c3110db88caa3393c580",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "8083ccb5e7d8bb299045ec2b797a5f30",
"/": "8083ccb5e7d8bb299045ec2b797a5f30",
"main.dart.js": "977afb7d6ed3a31b2c1b7f87c064dafd",
"manifest.json": "2325df0cb07b898646ceac8d92c69e27",
"version.json": "7360b2a01862d915c13ffeaf9e43df15"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
