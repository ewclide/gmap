$('#map').gmap({
        height: 950,
        map: {
            zoom: 12,
            center : [56.126887, 40.397087],
            mapType: 'ROADMAP',
            scrollwheel : false,
            styles : [
                /*{
                  featureType: "all",
                  stylers: [
                    { saturation: -100 }
                  ]
                },
                {
                  featureType: "poi.business",
                  elementType: "labels",
                  stylers: [
                    { visibility: "off" }
                  ]
                }*/
				{
				  featureType: "all",
				  elementType: "geometry",
				  stylers: [
					{ saturation: 100 }
				  ]
				},
				
				{
				  featureType: "all ",
				  elementType: "labels.text", // цвет текста
				  stylers: [
					{ color: "#424750" },
				  ]
				},
				
				{
				  featureType: "all ",
				  elementType: "labels.text.stroke", // цвет обводки текста
				  stylers: [
					{ color: "#ffffff" },
				  ]
				},
				
				{
				  featureType: "landscape", // цвет ладншафта
				  stylers: [
				   { color: '#e8e8e8' }
				  ]
				},
				
				{
				  featureType: "landscape.natural",
				  elementType: "geometry",
				  stylers: [
					{ color: '#e8e8e8' }
				  ]
				},
				
				{
				  featureType: "road.highway", // цвет магистралей
				  elementType: "geometry",
				  stylers: [
					{ color: "#ff8a00" },
				  ]
				},
				
				{
				  featureType: "road.arterial", // цвет основных дорог
				  elementType: "geometry",
				  stylers: [
					{ color: "#ff8a00" },
				  ]
				},
				
				{
				  featureType: "road.local", // цвет второстепенных дорог
				  elementType: "geometry",
				  stylers: [
					{ color: "#2e3033" },
				  ]
				},
				
				{
				  featureType: "road",
				  elementType: "labels.icon",
				  stylers: [
					{ visibility: "off" },
				  ]
				},
				
				{
				  featureType: "administrative.province",  // цвет границ областей
				  elementType: "geometry.stroke ",
				  stylers: [
					{ color: "#60646d" },
				  ]
				},
				
				{
					featureType: 'water', // цвет воды
					stylers: [
						{color: '#fafafa'}
					]
				},
				
				{
					featureType: "poi",
					elementType: "geometry.fill", // цвет парков
					stylers: [
						{ color: "#fafafa" }
					]
				}
            ],

        },
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