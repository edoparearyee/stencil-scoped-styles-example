/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.1.0/workbox-sw.js");

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "assets/icon/favicon.ico",
    "revision": "d2f619d796fbe8bed6200da2691aa5b6"
  },
  {
    "url": "assets/icon/icon.png",
    "revision": "b96ad6e1e0b755c8cd45e6aec40bca25"
  },
  {
    "url": "build/app.js",
    "revision": "42aa3b25a0532e96e12f4fe2f89fd6b2"
  },
  {
    "url": "build/app/app.9xdiurak.js",
    "revision": "0cf2c14964d3c7e9d0189450b524b990"
  },
  {
    "url": "build/app/app.eauvhyru.js",
    "revision": "f80c4a9ec9369efd53b2ff201cd345b5"
  },
  {
    "url": "build/app/kzbtg52e.es5.js",
    "revision": "d6110a728b6410e12bf317ffccbd5854"
  },
  {
    "url": "build/app/kzbtg52e.js",
    "revision": "d2a3586697fbf2f4e94ea4c236b05989"
  },
  {
    "url": "build/app/kzbtg52e.sc.es5.js",
    "revision": "eb1e4a1eaa7845b12ac8342504dd02ed"
  },
  {
    "url": "build/app/kzbtg52e.sc.js",
    "revision": "edd0ac7b2268c140a2447a71b481b479"
  },
  {
    "url": "index.html",
    "revision": "e527490827ad0144ccf7a03ec3febb7c"
  },
  {
    "url": "manifest.json",
    "revision": "0c129721ede7cd25304ebdd238d774ad"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
