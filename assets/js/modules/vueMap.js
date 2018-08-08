import datepicker from "vue-date";
import axios from "axios";
export function vueMap() {
  if($("#app").length) {

    const state = {
      data: markerCollection,
      list_events: null,
      emptyEvents: false,
      activeViewMore: false,
      countEvents: 0,
      activeMore: true
    };
    const getters = {
      get_mapmenu_list: state => {
        return state.data;
      },
      filter_mapmenu_list: (state) => (id) => {
        return state.data[id];
      },
      get_events: state => {
        return state.list_events;
      },
      filter_events_list: (state) => (date_start, date_end) => {
        if(date_end == "") {
          return state.date_events;
        } else {
          let eventArray = [];
          return state.date_events.filter(item => {
            if( Date.parse(date_start) <= Date.parse(item.item_data_end) &&
                Date.parse(date_end) >= Date.parse(item.item_data_end)  ) {
              eventArray.push(item);
              return eventArray;
            }
          });
        }
      }
    };
    const actions = {
      load_events_list: ({ commit }, query) => {
        let url = apiUrl;
        axios.get(url, {
          params: {
            from: query.from,
            to: query.to,
            per_paged: query.per_paged,
            page: query.page,
          }
        }).then(data => {
            commit("setEventList", { events: data.data.events, events_length: data.data.count_events });
          });
      }
    };
    const mutations = {
      setEventList: (state, { events, events_length }) => {

        if ( state.list_events !== null && state.list_events.length == events_length ) {
          state.activeMore = false;
        } else {
          state.activeMore = true;
        }
        state.countEvents = events_length;
        state.list_events = events;
        if (events_length == 0) {
          state.emptyEvents = true;
          state.activeMore = false;
        } else {
          state.emptyEvents = false;
        }
      }
    };

    Vue.use(Vuex);

    const store = new Vuex.Store({
      state,
      actions,
      mutations,
      getters
    });

    Vue.component("v-select", VueSelect.VueSelect);

    Vue.component("mapHolder", {
      template: "#map-holder",
      data() {
        return {
          mainTab: 0,
          mainCategory: null,
          subIdx: null,
          icon: markerPin,
          searchQuery: "",
          arrLocations: [],
          searchText: "",
          activeFilter: false,
          activeSubIndex: false,
        };
      },
      computed: {
        getLocations() {
          return this.$store.getters.get_mapmenu_list;
        },
        dropLocations: function() {
          let _self = this,
            arrDrop = [];
          _self.$store.getters.get_mapmenu_list.map((item, index) => {
            item.subList.map((itm, idx) => {
              itm.parentname = item.name;
              itm.parentindex = index;
              itm.subindex = idx;
              arrDrop.push(itm);
            });
          });
          if ( _self.searchText !== "" && _self.searchText !== null ) {

            let res_arr = arrDrop.filter(item => {
              return item.name.toLowerCase().indexOf(_self.searchText.toLowerCase()) >= 0;
            });
              _self.activeFilter = (res_arr.length > 0) ? true : false;

            return res_arr;
          } else {
            _self.activeFilter = false;
          }
        }
      },
      methods: {
        tabs(index) {
          this.mainTab = index;
          this.mainCategory = this.$store.getters.filter_mapmenu_list(index);
          this.initMap(this.mainCategory);
          return index;
        },
        subTabs(idx) {
          this.subIdx = idx;
          this.mainCategory = this.$store.getters.filter_mapmenu_list(this.mainTab);
          this.initMap(this.mainCategory, this.subIdx);
        },
        searchTabs(parentIndex, subindex) {
          this.mainCategory = this.$store.getters.filter_mapmenu_list(parentIndex);
          this.initMap(this.mainCategory, subindex);
        },
        triggerFilter(parentindex, subindex) {
          this.mainTab = parentindex;
          this.activeSubIndex = parentindex+"_"+subindex;
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
                "stylers": [
                  {
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
            });
            if (i === subIdx && typeof subIdx !== typeof undefined) {
              marker[subIdx] = new google.maps.InfoWindow({
                position: {
                  lat: parseFloat(subItem.latitude),
                  lng: parseFloat(subItem.longtitude)
                },
                map: map,
                icon: image,
                title: subItem.title,
              });
              let content = "<div id='map-note-neighborhood'>" +
                  "<h6>" + subItem.title + "</h6>" +
                  "<div id='content-note'>" +
                  "<div>" + subItem.address + "</div>" +
                  "</div>" +
                  "</div>";
              marker[subIdx].setContent(content);
              let crctMarker = marker[subIdx];
              _self.correctMarker(crctMarker);
            }
          });
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
        this.tabs(this.mainTab);
      }
    });

    Vue.component("sortHolder", {
      template: "#sort-holder",
      data () {
        return {
          language:"en",
          selected: "2018-07-01",
          start: "2018-07-01",
          pseudo_start: "Jul 01, 2018",
          end: "2018-09-01",
          pseudo_end: "Sep 01, 2018",
          range: ["2016-01-01", "2016-01-11"],
          init: "2016-12-26",
          active: true,
          activeIndex: 6,
          activeViewMore: true,
          per_paged: 6,
          page: 1,
        };
      },
      components: { datepicker },
      computed: {
        getEvents() {
          return this.$store.state.list_events;
        },
        notEvents() {
          return store.state.emptyEvents;
        },
        activeMore() {
          if (store.state.list_events) {
            if (store.state.countEvents > this.per_paged) {
              return store.state.activeMore = true;
            } else {
              return store.state.activeMore = false;
            }
          }
        }
      },
      watch: {
        start: function() {
          let query = {
            from: String(Date.parse(this.start)).split("").slice(0, -3).join(""),
            to: String(Date.parse(this.end)).split("").slice(0, -3).join(""),
            per_paged: this.per_paged,
            page: this.page
          };
          this.$store.dispatch("load_events_list", query);
          let start = this.filterDate(this.start);
          this.per_paged = 6;
          this.pseudo_start = start;
          this.activeIndex = 6;
          this.activeViewMore = true;
          return this.pseudo_start;
        },
        end: function() {
          let query = {
            from: String(Date.parse(this.start)).split("").slice(0, -3).join(""),
            to: String(Date.parse(this.end)).split("").slice(0, -3).join(""),
            per_paged: this.per_paged,
            page: this.page
          };
          this.$store.dispatch("load_events_list", query);
          let end = this.filterDate(this.end);
          let idx;
          this.$store.getters.get_events.forEach((item, index) => {
            idx = index;
          });
          this.per_paged = 6;
          this.pseudo_end = end;
          this.activeIndex = 6;
          this.activeViewMore = true;
          return this.pseudo_end;
        }
      },
      created() {
        this.loadEvent();
      },
      methods: {
        filterDate(val) {
          let dateStr;
          let objDate = new Date(val).toString().split(" ");
          dateStr = objDate[1] + " " + objDate[2]+ "," + " " + objDate[3];
          return dateStr;
        },
        eventsIndex() {
          console.log('eventsIndex');
          this.per_paged += 6;
          let next_items = this.per_paged;
          this.activeIndex = next_items;
          let query = {
            from: String(Date.parse(this.start)).split("").slice(0, -3).join(""),
            to: String(Date.parse(this.end)).split("").slice(0, -3).join(""),
            per_paged: next_items,
            page: this.page
          };
          this.$store.dispatch("load_events_list", query);
        },
        loadEvent() {
          let query = {
            from: String(Date.parse(this.start)).split("").slice(0, -3).join(""),
            to: String(Date.parse(this.end)).split("").slice(0, -3).join(""),
            per_paged: this.per_paged,
            page: 1
          };
          this.$store.dispatch("load_events_list", query);
        },
      }
    });
    new Vue({
      el: "#app",
      store,
    });
    new Vue({
      el: "#sort-events",
      store,
    });
  }
}
