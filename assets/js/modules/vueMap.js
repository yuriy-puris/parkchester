export function vueMap() {
  if($("#app").length) {

      const state = {
        data: [
            {
              name: "Parks1",
                latitude: "73.0040",
                  longtitude: "40.0040",
                    title: "Parks",
                      subList: [ 
                        {
                          name: "Fitness Centers1",
                          latitude: "73.0040",
                          longtitude: "40.0040",
                          title: "Fitness Centers1"
                        },
                        {
                          name: "Fitness Centers2",
                          latitude: "73.0040",
                          longtitude: "40.0040",
                          title: "Fitness Centers3"
                        },  
                        {
                          name: "Fitness Centers1",
                          latitude: "73.0040",
                          longtitude: "40.0040",
                          title: "Fitness Centers1"
                        }
                      ]    
            },
            {
              name: "Culture",
                latitude: "73.0040",
                  longtitude: "40.0040",
                    title: "Parks",
                      subList: [ 
                        {
                          name: "Fitness Centers1",
                          latitude: "73.0040",
                          longtitude: "40.0040",
                          title: "Fitness Centers1"
                        },
                        {
                          name: "Fitness Centers1",
                          latitude: "73.0040",
                          longtitude: "40.0040",
                          title: "Fitness Centers1"
                        },  
                        {
                          name: "Fitness Centers1",
                          latitude: "73.0040",
                          longtitude: "40.0040",
                          title: "Fitness Centers1"
                        }
                      ]    
            },
            {
              name: "Culture3",
                latitude: "73.0040",
                  longtitude: "40.0040",
                    title: "Parks",
                      subList: [ 
                        {
                          name: "Fitness Centers1",
                          latitude: "73.0040",
                          longtitude: "40.0040",
                          title: "Fitness Centers5"
                        },
                        {
                          name: "Fitness Centers1",
                          latitude: "73.0040",
                          longtitude: "40.0040",
                          title: "Fitness Centers6"
                        },
                      ]    
            }
        ] 
      }
      
      const getters = {
        get_mapmenu_list: state => {
          return state.data
        }
      }
      
      Vue.use(Vuex)
        
      const store = new Vuex.Store({
        state,
        getters
      })
      
      Vue.component('mapHolder', { 
        template: '#map-holder',
        data() {
          return {
            indexTab: 0
          }
        },
        computed: {
          getLocations() {
            return this.$store.getters.get_mapmenu_list
          }
        },
        methods: {
          tabs(index) {
            this.indexTab = index
            return index
          },
          initMap() {
            let
                $map =$("#map"),
                myLatlng = new google.maps.LatLng("40.6700", "-73.9400"),
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
                map = new google.maps.Map($map[0], mapOptions);
                let marker = new google.maps.Marker({
                  position: {
                      lat: 40.6700,
                      lng: -73.9400
                  },
                  map: map,
              });
          }
        },
        created() {
          this.tabs(this.indexTab)
          let _self = this;
          $(window).on("load", function () {
            _self.initMap()
          })
        }
      })

      
      new Vue({
        el: '#app',
        store,
      });
  }
}