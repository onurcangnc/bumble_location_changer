// ==UserScript==
// @name         Bumble Auto Location Changer
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Chrome based Tampermonkey extension for location change.
// @author       Onurcan
// @match        https://bumble.com/*
// @match        https://*.bumble.com/*
// @match        https://*.gps-coordinates.net/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    // New Coordinates (near Balikesir)
    const latitude = 39.632289;  // Latitude (Enlem)
    const longitude = 27.896004; // Longitude (Boylam)

    // Override the browser's Geolocation API to use the custom coordinates
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
