#GMAP - easy wrapper of google map
-------------

### settings

- api - link to your api (not require)
- height - height of element where we want add map
- autoClose - allows to close all infowindows when click to the some marker
- labels - array of the labels
- polygons - array of the polygons

	see more on google map api

### Examples

```html

<div id="map" style="width: 100%"></div>

<script type="text/javascript" src="src/gmap.js"></script>
<script type="text/javascript" src="js/common.js"></script>

```

```js

someStyle = [];

$('#map').gmap({
	height: 950,
	map: {
		zoom: 12,
		center : [56.126887, 40.397087],
		mapType: 'ROADMAP',
		scrollwheel : false,
	},
	styles: someStyle,
	labels: [
		{ position: [56.126887, 40.397087], content: 'Content of the marker', title: "some title!" ,icon: '../img/label.png', openWindow: true },
		{ position: [56.161912, 40.404627], content: 'Content of the marker', icon: '../img/label.png', openWindow: true },
	],
	polygons: [
	{ 
		paths: [ [56.115138, 40.338194], [56.149457, 40.361540], [56.169383, 40.390207], [56.176086, 40.496466], [56.137382, 40.431749] ],
		fillColor: 'red',
		strokeColor: '#fbc716',
		strokeOpacity: 1,
		fillOpacity: 0.5,
		zIndex: 1
	}
	]
});

```

-------------
Thank's for using.
Developed by Ustinov Maxim - [ewclide](http://vk.com/ewclide)