'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "25d4feb4da6f7fd0725a959557c6dfd9",
".git/config": "51d5dabb354245018c6c5538485aca2d",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "3c5989301dd4b949dfa1f43738a22819",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/update.sample": "7bf1fcc5f411e5ad68c59b68661660ed",
".git/index": "1e9c098f277c2fbe626f81fa96030d2c",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "8d084c83d4ed39e1bbedde6a21a7d0cb",
".git/logs/refs/heads/master": "4aff986b20ecb79af96e79bd5289abb1",
".git/logs/refs/remotes/origin/master": "7022c322924fa9c792577514288e0606",
".git/objects/00/5ae8a029012eac12a17ec8aa91eb920ec1d8a2": "f0df17d22ca1d61550e63c7da5096480",
".git/objects/0d/d1977c0ccf75c66bf4d4f9419e9438488e3d8e": "a37c79ce72d2bd69ea4355346f30ae07",
".git/objects/11/ebe0abf0e894a859e0fb58e7eae195cda45183": "a448adc1da0456db701dc50d773d932a",
".git/objects/14/e5c6d06e20491f3c315c2cb2b8fcada28d4633": "00f6e52af0253f93b85924498001504d",
".git/objects/17/5f007bb1d454a90d3011465e9a6bb663756a40": "283f59716e0232fa460a92114b816cc6",
".git/objects/17/877a8de625e9cbf0b09d1cbdcc1e2c3772126c": "296cc181b57b5094c9a9d53385d545ad",
".git/objects/1a/dc13fbba2a3ae375ac3e4ae6675094f986a76f": "e789a77e9c9465fb422677faff0400fe",
".git/objects/1d/235556b61ee1ac158cae31cae9617a63513466": "4bddf47145ba6eeb9e1f1f00505f07b8",
".git/objects/1d/80cad82005110db40a6941e3118308c013b0ca": "5638e9ab4bbfb58f61db016fe127fdb8",
".git/objects/27/27acae83a9bce3976c69ac2ed1b31b9a2a29ba": "a3715d6a5c121f1052f9c8c45f7c7882",
".git/objects/29/724773df3bcce9250210d98afb9750256513cb": "e5a34e24d898b00429ccd1811a567a43",
".git/objects/2b/0087fd697744aec4f748a547668ac247a3bd80": "debbf35e4f2115145acf5aefaf46b825",
".git/objects/2d/0471ef9f12c9641643e7de6ebf25c440812b41": "d92fd35a211d5e9c566342a07818e99e",
".git/objects/32/46ad559eeae0370195978eaed83f1053ee13fd": "a043dbc0a0bda96ce2127799ccc27506",
".git/objects/3c/b3b53a24ee4712b8463133dca203ddd72fb43b": "c3066eae2c84f5465b93f0624f5ecfa6",
".git/objects/3d/c9f6732f1d7ae5447e60cc19e5c2e9428f3d88": "bda4cbf646c79b812c75685e8996be56",
".git/objects/3e/432a152179956cfe12e2950b8ff174b71cc83e": "826b5cc9c80202498cefa215496978b0",
".git/objects/41/fd7dd3fcfc1d77cb8b28c96eb639f6083b9df5": "5b75d931d10d530fe187620d2a81fe5e",
".git/objects/43/708d565144515bdeac0293716a02b59c1e80b3": "96dc54cb337f0b13c42256c5360b96f8",
".git/objects/47/a6bd952a8f111718c22c871bd99431de893b3d": "43bc5c44b6bd6e264c1fde152cc5af71",
".git/objects/4e/d0ad167406b69823371f2b02eb96d9feb62ddc": "8e5fa50e2892fb6896eef7b76471a5ff",
".git/objects/50/9702a4ce308f416b06b17a54e0a8088b223c4e": "7f8347ce417bcfa532c830c44a5ab02a",
".git/objects/58/5ab6c1e123a4ee37f9a49039c4f792477ed4e6": "3d1474f58a6304e19d52fc162098ba85",
".git/objects/62/0f4759350808560ba2c0eadadd9c52495a1fd3": "fa094b919aa533d69010fed03846cd4b",
".git/objects/65/647fb5bcca55e208cb176be85c26cdd9315dc2": "1d19117857b7683440941fd0eeede76f",
".git/objects/65/b384c04ef7ee9fb9b7582b77377280c5d64cd5": "88422bbb2bc42436f8f242eb59c23af7",
".git/objects/6f/db6ade685c5fd8fa121910e9d92185c9e45b77": "5b4a1ff344ca931855a1399fece7756c",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/87/748811d9bdbffffa46bb959351dcefc851eef9": "f6ae000509c1c6189205c1dffee84fb3",
".git/objects/87/f054e04ed114946a8053f1e1af75ae02515ad8": "5564957db507df4c078a0fee4df56451",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/89/e79c07a3f39e4142acaa4618211da50b90a049": "0731a0b05a4ed3665f67c71fedb10080",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8b/d8c5f582f5dd1c7e054ea2d7300b1c191cb2b7": "bf4bc9021fec7c23d9aa5de163f8ea8c",
".git/objects/90/1f25d0135fd11ae495af92b68667c6a7deae7f": "fccd9abfd348714debffbbbfffb52207",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/a3/2a915d6c343f053ae6fa0f21913ab600011eb9": "db91bdef6b9f863c319d69223be3d73e",
".git/objects/a5/770e062bcf903ded380964d7fd2bab17cb3c30": "3db74ec5b30ffe37e84cd43b85fff3d7",
".git/objects/a5/c715ea5e34e2109264dfb12af04e4559a876b6": "9c51af91835de5d341fb0be4cff150e1",
".git/objects/a8/beffd3ad4fe54d6cabccf83a05477d6a986cd0": "6677888e4a051c7838b5b240c09f0981",
".git/objects/ac/dff003233d90b91aebe67dcd38d5049aacda7b": "6fea100e06e06948e49143e92be1a8dd",
".git/objects/ad/cc2d37b927f220fe55e148b835e50cf226f814": "023956bee7ab95778a3f01ca50f1aeaf",
".git/objects/ae/1cccc7ca6ebf26b1e4104baba791f1ee278785": "d6c9a4268f64077e9f6637d2afce5d73",
".git/objects/b2/b3c0ef19a4a4591af8b0a3bcfcc68e774318da": "573d07009a5c004005e6080ea42c07b8",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/bc/7e7e8f078840225ecb5fb5a360582fcb0b4b77": "e5752c67c6b2f67fa7abc7ad8661f329",
".git/objects/bf/064e3a59cc115d9662f6d5c1f54fd43c58d2fa": "15db70a0622726296231fe04ff47c13c",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d8/87526f233e39bd070ba62a4f60370ee81bdbee": "910cba684a2528f89051c72b497604e2",
".git/objects/e2/069c64e149f9ef3bbb3f857d82d3c8827e4709": "79d12bca70331d51bc5ec6370bd41af1",
".git/objects/e2/7806d4de4a4153132caa5ffc551b7c62e296a3": "943f0a57694dfd257b0011b98aba0a61",
".git/objects/e3/ca761c1d8391989ef11ba89ade2617f6181846": "7f346188e86ccbe538ef8d4bb2a9c00c",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/f2/db86d54ff8c45eed1cf74ab4bbbca71cfb6dbb": "456345e718d95d8933db21d14bbb1a33",
".git/objects/f5/2f551c136a155f1e926f8e7f0f1742f83ce028": "4ebe715ddb13223f916928cc9fb519ee",
".git/objects/fa/f192e867eb91733d88802a821fd7fdb8d4ee65": "f4696c8ccff3f623dd9179e57c5d3a3d",
".git/objects/fc/36894d30d5a17ee23abdc7c4a34f5e622d4270": "3329c4a65c4dfcc528248d1d648f6f9a",
".git/refs/heads/master": "d5ec77fdbe5f17e53db4acb78211d0bb",
".git/refs/remotes/origin/master": "d5ec77fdbe5f17e53db4acb78211d0bb",
"assets/AssetManifest.json": "3fc3d9eccd895440198ee2a309f53d46",
"assets/assets/audios/0.wav": "ea19dc1777cd31b94e4895ecc557b370",
"assets/assets/audios/1.wav": "8cb1152ee016603feb1cbebac586845c",
"assets/assets/audios/10.wav": "a6f49d959afdd6850aa4134726c87016",
"assets/assets/audios/11.wav": "c23d6d839ade04f782745a250d571675",
"assets/assets/audios/2.wav": "24b40bbc39551bc205fe412a32858c6a",
"assets/assets/audios/3.wav": "ce6d995571ce444917cded419eb4168a",
"assets/assets/audios/4.wav": "45effffeb4adb5c9cc2158d711f02fcb",
"assets/assets/audios/5.wav": "8fa960f5769fb37ecbfc1a4e1c2f9d7a",
"assets/assets/audios/6.wav": "9b8f80e249abd9745346f3a2ab68d2e4",
"assets/assets/audios/7.wav": "209acf4c842831aa5d051abdb176235f",
"assets/assets/audios/8.wav": "61b46a2379ad2ea6b47994574feed20d",
"assets/assets/audios/9.wav": "7fba4a5a4323bc8c13d8de0e7cf5cee6",
"assets/assets/audios/bgm.mp3": "d8340f5792fd8fe8b0d20d51aa23b8f7",
"assets/assets/audios/bite.wav": "67b8efcf49f7ce3a4ff722c2ec198672",
"assets/assets/audios/end.wav": "9ed3c7e7321fa6345dc63fef2eb13c5b",
"assets/assets/fonts/NotoSansTC-Regular.otf": "d6b43f6600389d7442f317adfbbd9942",
"assets/assets/images/58-1.png": "16d1f6b08d489d33e9b05aa1155d9591",
"assets/assets/images/background.png": "1676150cae3967fd3365fb8c9d68b589",
"assets/assets/images/char/1.png": "70c036f3bb846592d501a856154a0d51",
"assets/assets/images/char/2.png": "b00d39a746bf9725f706f6b9b245da10",
"assets/assets/images/char/3.png": "2af55973dc0e82644dda821a17f503bb",
"assets/assets/images/char/bite.png": "d82524a768ce68797e8598e03082f932",
"assets/assets/images/char/lutra0.png": "3ab77c180c57b4fa2fdcc48b581d5283",
"assets/assets/images/char/lutra1.png": "f33e3292e634adf0d06af3a91eafd154",
"assets/assets/images/char/sign0.png": "e8b53a662262cee5b749625a55dd3708",
"assets/assets/images/char/sign1.png": "179d36cc5c171e09e15c75c1ce019223",
"assets/assets/images/char/sign10.png": "30db85f756f15b264f11d6594fe8cb06",
"assets/assets/images/char/sign11.png": "a0f541002b6ea59ffcf5013243e6d93d",
"assets/assets/images/char/sign2.png": "7d1ec726408d682b44926a1304cf68ca",
"assets/assets/images/char/sign3.png": "7d531d72dbd554f66f884d60504e56a3",
"assets/assets/images/char/sign4.png": "a96de1d27902b1ab4b385ce6952bdb9d",
"assets/assets/images/char/sign5.png": "1fe7e413650bd80050ffde030bdc1a48",
"assets/assets/images/char/sign6.png": "6a6870826aedfcf14fa9d8924270d24b",
"assets/assets/images/char/sign7.png": "a7dd862b03accc358554fd78aa952c7d",
"assets/assets/images/char/sign8.png": "9647718ac75dad3ab16615571f61c0aa",
"assets/assets/images/char/sign9.png": "cf7c23a635ec24944db65e26ffb052aa",
"assets/assets/images/drawerbg.png": "78c263ba781743ea35825ce4a20ad664",
"assets/assets/images/foot.png": "c917e377b76d9996e557a0f63e0aa9b1",
"assets/assets/images/footer.png": "d852d882f7f36bdb701e89dae9898f82",
"assets/assets/images/header.png": "ba1a8b69e80426860f72057170abb587",
"assets/assets/images/loading.gif": "835d8a3ae689a4dc1d02d420a0a1efc0",
"assets/assets/images/NoCute.png": "97803080e3605c68ec5abf17bb649167",
"assets/FontManifest.json": "8579c6adc9e38c35424c0f467921413b",
"assets/fonts/MaterialIcons-Regular.otf": "7e7a6cccddf6d7b20012a548461d5d81",
"assets/NOTICES": "35f122514e585a952f7ed45b1c275555",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/fluttertoast/assets/toastify.css": "a85675050054f179444bc5ad70ffc635",
"assets/packages/fluttertoast/assets/toastify.js": "e7006a0a033d834ef9414d48db3be6fc",
"canvaskit/canvaskit.js": "c2b4e5f3d7a3d82aed024e7249a78487",
"canvaskit/canvaskit.wasm": "4b83d89d9fecbea8ca46f2f760c5a9ba",
"canvaskit/profiling/canvaskit.js": "ae2949af4efc61d28a4a80fffa1db900",
"canvaskit/profiling/canvaskit.wasm": "95e736ab31147d1b2c7b25f11d4c32cd",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "80814e6e4e2936e7c6f4c48b7f020be3",
"/": "80814e6e4e2936e7c6f4c48b7f020be3",
"main.dart.js": "dbe3ecceaaf0960bdaee42fe78751fca",
"manifest.json": "2325df0cb07b898646ceac8d92c69e27",
"version.json": "7360b2a01862d915c13ffeaf9e43df15"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
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
