export function contactUsMap() {
    if($("#map").length) {
        $(window).on("load", function () {
            const location = $(".map-menu-list"),
                curLocation = location.children('.active').find("a"),
                subLocation = $(".map-menu .tab-content-item");
    
            function createMap(dataLat, dataLng, dataTitle, childCategory, idx) {
                let
                    $map =$("#map"),
                    lat = dataLat,
                    lng = dataLng,
                    myLatlng = new google.maps.LatLng(lat, lng),
                    styles = [{
                            "featureType": "administrative",
                            "elementType": "all",
                            "stylers": [{
                                    "visibility": "on"
                                },
                                {
                                    "lightness": 33
                                }
                            ]
                        },
                        {
                            "featureType": "landscape",
                            "elementType": "all",
                            "stylers": [{
                                "color": "#f7f7f7"
                            }]
                        },
                        {
                            "featureType": "poi.business",
                            "elementType": "all",
                            "stylers": [{
                                "visibility": "off"
                            }]
                        },
                        {
                            "featureType": "poi.park",
                            "elementType": "geometry",
                            "stylers": [{
                                "color": "#deecdb"
                            }]
                        },
                        {
                            "featureType": "poi.park",
                            "elementType": "labels",
                            "stylers": [{
                                    "visibility": "on"
                                },
                                {
                                    "lightness": "25"
                                }
                            ]
                        },
                        {
                            "featureType": "road",
                            "elementType": "all",
                            "stylers": [{
                                "lightness": "25"
                            }]
                        },
                        {
                            "featureType": "road",
                            "elementType": "labels.icon",
                            "stylers": [{
                                "visibility": "off"
                            }]
                        },
                        {
                            "featureType": "road.highway",
                            "elementType": "geometry",
                            "stylers": [{
                                "color": "#ffffff"
                            }]
                        },
                        {
                            "featureType": "road.highway",
                            "elementType": "labels",
                            "stylers": [{
                                    "saturation": "-90"
                                },
                                {
                                    "lightness": "25"
                                }
                            ]
                        },
                        {
                            "featureType": "road.arterial",
                            "elementType": "all",
                            "stylers": [{
                                "visibility": "on"
                            }]
                        },
                        {
                            "featureType": "road.arterial",
                            "elementType": "geometry",
                            "stylers": [{
                                "color": "#ffffff"
                            }]
                        },
                        {
                            "featureType": "road.local",
                            "elementType": "geometry",
                            "stylers": [{
                                "color": "#ffffff"
                            }]
                        },
                        {
                            "featureType": "transit.line",
                            "elementType": "all",
                            "stylers": [{
                                "visibility": "off"
                            }]
                        },
                        {
                            "featureType": "transit.station",
                            "elementType": "all",
                            "stylers": [{
                                "visibility": "off"
                            }]
                        },
                        {
                            "featureType": "water",
                            "elementType": "all",
                            "stylers": [{
                                    "visibility": "on"
                                },
                                {
                                    "color": "#e0f1f9"
                                }
                            ]
                        }
                    ],
                    mapOptions = {
                        zoom: 7,
                        center: myLatlng,
                        scrollwheel: false,
                        scaleControl: false,
                        zoomControl: true,
                        disableDoubleClickZoom: true,
                        panControl: false,
                        mapTypeControl: false,
                        streetViewControl: false,
                        overviewMapControl: false,
                        styles: styles
                    },
                    map = new google.maps.Map($map[0], mapOptions),
                    image = {
                        url: $map.attr('data-image'),
                    };
                let marker;
                Array.prototype.forEach.call(childCategory, function (item, i) {
                    let childItem = childCategory[i];
                    marker = new google.maps.Marker({
                        position: {
                            lat: childItem[0],
                            lng: childItem[1]
                        },
                        map: map,
                        icon: image,
                        title: childItem[2],
                    });
                    if (i === idx && typeof idx !== typeof undefined) {
                        marker[idx] = new google.maps.InfoWindow({
                            position: {
                                lat: childItem[0],
                                lng: childItem[1]
                            },
                            map: map,
                            icon: image,
                        });
                        let content = '<div id="map-note-neighborhood">' +
                            '<h6>' + childItem[2] + '</h6>' +
                            '<div id="content-note">' +
                            '<div>2000 East Tremont Avenue</div>' +
                            '<div>Bronx, NY 10462</div>' +
                            '</div>' +
                            '</div>';
                        marker[idx].setContent(content);
                        let crctMarker = marker[idx];
                        correctMarker(crctMarker)
                    }
                });
    
                function correctMarker(marker) {
                    google.maps.event.addListenerOnce(marker, "domready", function () {
                        let iw = $(".gm-style-iw");
                        let iwBg = iw.prev();
                        iwBg.children(":nth-child(2)").css("display", "none");
                        iwBg.children(":nth-child(4)").css("display", "none");
                        iwBg.children(":nth-child(1)").attr("style",
                            function (i, s) {
                                return s + "display: none !important;";
                            }
                        );
                        iwBg.children(":nth-child(3)").attr("style",
                            function (i, s) {
                                return s + "display: none !important;";
                            });
                        iw.siblings("div, img").remove();
                        iw.parent().parent().css({
                            left: "120px",
                            top: "70px"
                        });
                    });
                }
            }
    
            function getData(locationItem, idx) {
                let curLat = parseFloat(locationItem.attr("data-lat")),
                    curLng = parseFloat(locationItem.attr("data-lng")),
                    curTitle = locationItem.attr("data-title");
                let childCategory = [];
                $('.tab-content-item.active').find("a").each(function (index, item) {
                    let childItem = [];
                    childItem.push(parseFloat($(this).attr("data-lat")));
                    childItem.push(parseFloat($(this).attr("data-lng")));
                    childItem.push($(this).attr("data-title"));
                    childCategory.push(childItem);
                }).promise().done(createMap(curLat, curLng, curTitle, childCategory, idx));
            }
    
            getData(curLocation);
    
            location.find("a").on("click", function () {
                let $this = $(this);
                getData($this);
            });
    
            subLocation.find("a").on("click", function () {
                let $this = $(this),
                    $pseudoThis = $(".tab-nav-item.active").find("a"),
                    $idx = $this.parent("li").index();
                $this
                    .addClass("active")
                    .parent("li")
                    .siblings()
                    .find("a")
                    .removeClass("active")
                getData($pseudoThis, $idx);
            });
    
        });
    }
}