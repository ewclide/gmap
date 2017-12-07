'use strict';

(function(){

	class GMap
	{
		constructor(options)
		{
			this.api = options.settings.api || 'https://maps.googleapis.com/maps/api/js?key=AIzaSyCfx6YjInSCTM_jC2MvhQ-L2VUZW_umfmg';
			this.$element = options.$element;
			this.element = options.$element[0];
			this.settings = options.settings;
			this.labels = [];
			this.polygons = [];
			this.map;

			this._addAPI();
		}

		_addAPI()
		{
			var loc, api, self = this;

			api = document.createElement('script');
			api.src = this.api;

			loc = $(document).find("script[src*='gmap.js']")[0];
			loc.appendChild(api);

			api.onload = function()
			{
				self._create();
			};
		}

		_create()
		{
			var map,
				height,
				self = this,
				settings = this.settings;

			if (!settings.height) settings.height = 500;
			if (!settings.autoClose) settings.autoClose = true;

			this.$element.height(settings.height);

			if (settings.map.mapType)
			{
				var mapType = this._getMapType(settings.map.mapType);
				if (mapType) settings.map.mapTypeId = mapType;
			}

			if (settings.map.center)
			{
				settings.map.center = this._wrapCoords(settings.map.center);
			}

			this.map = new google.maps.Map(this.element, settings.map);

			if (settings.labels)
			{
				settings.labels.forEach(function(current){

					var marker, infoWindow;

					current.map = self.map;
					current.position = { lat: current.position[0], lng: current.position[1] };

					marker = new google.maps.Marker(current);
					infoWindow = new google.maps.InfoWindow({ content: current.content });

					if (current.openWindow) infoWindow.open(self.map, marker);
					
					marker.addListener('click', function(){
						if (settings.autoClose) self._closeInfoWindows();
						infoWindow.open(self.map, marker);
					});

					self.labels.push({
						marker : marker,
						infoWindow : infoWindow
					});
				});
			}

			if (settings.polygons)
			{
				settings.polygons.forEach(function(current){
					var polygon;

					current.map = self.map;
					current.paths = self._wrapCoords(current.paths);

					polygon = new google.maps.Polygon(current);

					self.polygons.push(polygon);
				});
			}
		}

		_closeInfoWindows()
		{
			var self = this;
			this.labels.forEach(function(current){
				current.infoWindow.close(self.map, current.marker);
			});
		}

		_getMapType(type)
		{
			switch (type)
			{
				case 'SATELLITE': return google.maps.MapTypeId.SATELLITE;
				case 'ROADMAP'  : return google.maps.MapTypeId.ROADMAP;
				case 'HYBRID'   : return google.maps.MapTypeId.HYBRID;
				case 'TERRAIN'  : return google.maps.MapTypeId.TERRAIN;
			}

			return false;
		}

		_wrapCoords(coords)
		{
			var result;

			console.log();

			if (coords.length > 3)
			{
				result = [];

				for(var i in coords)
					result.push({ lat: coords[i][0], lng: coords[i][1] });
			}
			else
			{
				result = { lat: coords[0], lng: coords[1] };
			}

			return result;
		}
	}

	$.fn.gmap = function(settings)
	{
		this.each(function(){

			var options, gmap;

			options = {
				settings : settings,
				$element : $(this)
			};

			gmap = new GMap(options);
		});
	}

})();
