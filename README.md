# Bumble Auto Location Changer

This repository contains a Tampermonkey/GreaseMonkey userscript that automatically changes your location on Bumble to a specified latitude and longitude. The script is designed to work with Chrome or other browsers that support Tampermonkey and Geolocation-based web apps.

## Features

- Automatically overrides the browser's Geolocation API to set a custom location.
- Set location to Balıkesir (default) or modify it to any location you desire.
- Works with Bumble's web application to simulate being in a different city.

## Script Information

- **Name**: Bumble Auto Location Changer
- **Namespace**: http://tampermonkey.net/
- **Version**: 0.1
- **Description**: Chrome-based Tampermonkey extension for location change.
- **Author**: Onurcan
- **Match**: Works on `https://bumble.com/*`
- **Grant**: none

## Installation

1. Install the [Tampermonkey](https://www.tampermonkey.net/) extension in your browser (Chrome, Firefox, Edge, etc.).
2. Click on the Tampermonkey icon in the browser toolbar and select **Create a new script**.
3. Copy and paste the script below into the Tampermonkey editor:

   ```javascript
   // ==UserScript==
   // @name         Bumble Auto Location Changer
   // @namespace    http://tampermonkey.net/
   // @version      0.1
   // @description  Chrome based tampermonkey extension for location change.
   // @author       Onurcan
   // @match        https://bumble.com/*
   // @grant        none
   // ==/UserScript==

   (function() {
       'use strict';

       // Balıkesir Coordinates
       const latitude = 39.6357;
       const longitude = 27.8927;

       // Override browser's geolocation API
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
   ```

4. Save the script.
5. Open or refresh Bumble in your browser, and the location will automatically be set to Balıkesir.

## Modifying Location
- To change the location to a different city or region, modify the latitude and longitude values in the script. 

- For example:

```javascript
    // Istanbul
    const latitude = 41.0082;  // your desired latitude
    const longitude = 28.9784; // your desired longitude
```

- You can find latitude and longitude coordinates by searching for the city in Google Maps and right-clicking on the map to get the values.

## Usage
- Once the script is installed and running, Bumble will think you are in the specified location (default: Balıkesir).
- If you want to switch locations, update the latitude and longitude in the script and refresh Bumble.

## License
This `README.md` provides an overview of the script, how to install it, and how to customize the location to suit your needs.

