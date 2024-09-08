// ==UserScript==
// @name         Bumble Auto Location Changer
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Chrome based tampermonkey extension for location change.
// @author       Onurcan
// @match        https://bumble.com/*
// @match        https://*.bumble.com/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    // Balıkesir Koordinatları
    const latitude = 39.6357;
    const longitude = 27.8927;

    // Tarayıcının Geolocation API'sini geçersiz kıl
    navigator.geolocation.getCurrentPosition = function(success, error) {
        success({
            coords: {
                latitude: latitude,
                longitude: longitude,
                accuracy: 100
            }
        });
    };

})();
