import datepicker from 'vue-date'
export function vueMap() {
  if($("#app").length) {

      const state = {
        data: [
            {
              name: "Parks1",
                latitude: "40.0040",
                  longtitude: "-73.0040",
                    title: "Parks",
                      subList: [ 
                        {
                          name: "Yankees",
                          latitude: "40.0040",
                          longtitude: "-73.0040",
                          title: "Fitness Centers1",
                          address: "2001 East Tremont Avenue Bronx, NY 10462"
                        },
                        {
                          name: "Parks",
                          latitude: "40.0040",
                          longtitude: "-74.0040",
                          title: "Fitness Centers3",
                          address: "2002 East Tremont Avenue Bronx, NY 10462"
                        },  
                        {
                          name: "Fitness Centers1",
                          latitude: "40.0040",
                          longtitude: "-75.0040",
                          title: "Fitness Centers1",
                          address: "2003 East Tremont Avenue Bronx, NY 10462"
                        }
                      ]    
            },
            {
              name: "Culture",
                latitude: "40.0040",
                  longtitude: "-73.0040",
                    title: "Parks",
                    subList: [ 
                      {
                        name: "Yankees",
                        latitude: "40.0040",
                        longtitude: "-73.0040",
                        title: "Fitness Centers1",
                        address: "2004 East Tremont Avenue Bronx, NY 10462"
                      },
                      {
                        name: "Parks",
                        latitude: "40.0040",
                        longtitude: "-74.0040",
                        title: "Fitness Centers3",
                        address: "2005 East Tremont Avenue Bronx, NY 10462"
                      }, 
                    ]     
            },
            {
              name: "Culture3",
                latitude: "40.0040",
                  longtitude: "-73.0040",
                    title: "Parks",
                    subList: [ 
                      {
                        name: "Fitness Centers1",
                        latitude: "40.0040",
                        longtitude: "-71.0040",
                        title: "Fitness Centers1",
                        address: "2006 East Tremont Avenue Bronx, NY 10462"
                      },
                    ]     
            }
        ] 
      }
      
      const getters = {
        get_mapmenu_list: state => {
          return state.data
        },
        filter_mapmenu_list: (state) => (id) => {
          return state.data[id]
        },
      }
      
      Vue.use(Vuex)
        
      const store = new Vuex.Store({
        state,
        getters
      })

      Vue.component('v-select', VueSelect.VueSelect)
      
      Vue.component('mapHolder', {
        template: '#map-holder',
        data() {
          return {
            mainTab: 0,
            mainCategory: null,
            subIdx: null,
            icon: "/dist/images/mappin.png",
            searchQuery: '',
            arrLocations: [],
            searchText: '',
            activeFilter: false,
            activeSubIndex: false,
          }
        },
        computed: {
          getLocations() {
            return this.$store.getters.get_mapmenu_list
          },
          dropLocations: function() {
            let _self = this,
                arrDrop = []
            _self.$store.getters.get_mapmenu_list.map((item, index) => {
              item.subList.map((itm, idx) => {
                itm.parentname = item.name
                itm.parentindex = index
                itm.subindex = idx
                arrDrop.push(itm)
              })  
            })
            if ( _self.searchText !== '' && _self.searchText !== null ) {
              _self.activeFilter = true
              return arrDrop.filter(item => {
                return item.name.toLowerCase().indexOf(_self.searchText.toLowerCase()) >= 0
              })
            } else {
              _self.activeFilter = false
            }
          }
        },
        methods: {
          tabs(index) {
            this.mainTab = index
            this.mainCategory = this.$store.getters.filter_mapmenu_list(index)
            this.initMap(this.mainCategory)
            return index
          },
          subTabs(idx) {
            this.subIdx = idx
            this.mainCategory = this.$store.getters.filter_mapmenu_list(this.mainTab)
            this.initMap(this.mainCategory, this.subIdx)
          },
          searchTabs(parentIndex, subindex) {
            this.mainCategory = this.$store.getters.filter_mapmenu_list(parentIndex)
            this.initMap(this.mainCategory, subindex)
          },
          triggerFilter(parentindex, subindex) {
            this.mainTab = parentindex
            this.activeSubIndex = parentindex+'_'+subindex
          },
          initMap(locations, subIdx) {
            let
            _self = this,
            $map = this.$refs.map,
            lat = parseFloat(locations.latitude),
            lng = parseFloat(locations.longtitude),
            myLatlng = new google.maps.LatLng(lat, lng),
            styles = [
              {
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
            map = new google.maps.Map($map, mapOptions),
            subLocations = locations.subList,
            image = {
              url: this.icon,
            },
            marker;
            Array.prototype.forEach.call(subLocations, function(subItem, i) {
              marker = new google.maps.Marker({
                  position: {
                      lat: parseFloat(subItem.latitude),
                      lng: parseFloat(subItem.longtitude)
                  },
                  map: map,
                  icon: image,
                  title: subItem.title,
              })
              if (i === subIdx && typeof subIdx !== typeof undefined) {
                marker[subIdx] = new google.maps.InfoWindow({
                  position: {
                    lat: parseFloat(subItem.latitude),
                    lng: parseFloat(subItem.longtitude)
                  },
                  map: map,
                  icon: image,
                  title: subItem.title,
                })
                let content = '<div id="map-note-neighborhood">' +
                    '<h6>' + subItem.title + '</h6>' +
                    '<div id="content-note">' +
                    '<div>' + subItem.address + '</div>' +
                    '</div>' +
                    '</div>';
                marker[subIdx].setContent(content)
                let crctMarker = marker[subIdx]
                _self.correctMarker(crctMarker)
              }
            })
          },
          correctMarker(marker) {
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
          },
        },
        mounted() {
          this.tabs(this.mainTab)
        }
      })

      new Vue({
        el: '#app',
        store,
        data () {
          return {
              langList: [
                  {value: 'en', label: 'English'},
                  {value: 'zh-cn', label: 'Chinese'},
                  {value: 'uk', label: 'Ukrainsk'},
                  {value: 'es', label: 'Spanish'}
              ],
              language:"en",
              selected: '2018-06-28',
              start: '2018-06-28',
              end: '',
              range: ['2016-01-01', '2016-01-11'],
              init: '2016-12-26',
              event_date: {
                  date: '',
                  range: false
              }
          }
        },
        components: { datepicker }
      });
  }
}