import datepicker from "vue-date";
export function vueMap() {
  if($("#app").length) {

    const state = {
      data: markerCollection,
      date_events: [
        {
          item_image: "events1.png",
          item_title: "Christmas Tree Lighting",
          item_description: "Tis the Season!  Come and enjoy the annual Christmas Tree Lighting with Dickensian Carolers, hot beverages, cookies and more from 6:30-7pm! All activities take place on the Metropolitan Oval.",
          item_data_start: "2018-01-20",
          item_data_end: "2018-01-24",
        },
        {
          item_image: "events1.png",
          item_title: "Christmas Tree Lighting",
          item_description: "Tis the Season!  Come and enjoy the annual Christmas Tree Lighting with Dickensian Carolers, hot beverages, cookies and more from 6:30-7pm! All activities take place on the Metropolitan Oval.",
          item_data_start: "2018-01-24",
          item_data_end: "2018-01-27",
        },
        {
          item_image: "events1.png",
          item_title: "Christmas Tree Lighting",
          item_description: "Tis the Season!  Come and enjoy the annual Christmas Tree Lighting with Dickensian Carolers, hot beverages, cookies and more from 6:30-7pm! All activities take place on the Metropolitan Oval.",
          item_data_start: "2018-01-27",
          item_data_end: "2018-01-30",
        },
        {
          item_image: "events1.png",
          item_title: "Christmas Tree Lighting",
          item_description: "Tis the Season!  Come and enjoy the annual Christmas Tree Lighting with Dickensian Carolers, hot beverages, cookies and more from 6:30-7pm! All activities take place on the Metropolitan Oval.",
          item_data_start: "2018-02-03",
          item_data_end: "2018-02-10",
        },
        {
          item_image: "events2.png",
          item_title: "Christmas Tree Lighting",
          item_description: "Tis the Season!  Come and enjoy the annual Christmas Tree Lighting with Dickensian Carolers, hot beverages, cookies and more from 6:30-7pm! All activities take place on the Metropolitan Oval.",
          item_data_start: "2018-02-10",
          item_data_end: "2018-02-15",
        },
        {
          item_image: "events3.png",
          item_title: "Christmas Tree Lighting",
          item_description: "Tis the Season!  Come and enjoy the annual Christmas Tree Lighting with Dickensian Carolers, hot beverages, cookies and more from 6:30-7pm! All activities take place on the Metropolitan Oval.",
          item_data_start: "2018-02-15",
          item_data_end: "2018-02-20",
        },
        {
          item_image: "events3.png",
          item_title: "Christmas Tree Lighting",
          item_description: "Tis the Season!  Come and enjoy the annual Christmas Tree Lighting with Dickensian Carolers, hot beverages, cookies and more from 6:30-7pm! All activities take place on the Metropolitan Oval.",
          item_data_start: "2018-03-05",
          item_data_end: "2018-03-10",
        },
        {
          item_image: "events3.png",
          item_title: "Christmas Tree Lighting",
          item_description: "Tis the Season!  Come and enjoy the annual Christmas Tree Lighting with Dickensian Carolers, hot beverages, cookies and more from 6:30-7pm! All activities take place on the Metropolitan Oval.",
          item_data_start: "2018-03-10",
          item_data_end: "2018-03-20",
        },
        {
          item_image: "events3.png",
          item_title: "Christmas Tree Lighting",
          item_description: "Tis the Season!  Come and enjoy the annual Christmas Tree Lighting with Dickensian Carolers, hot beverages, cookies and more from 6:30-7pm! All activities take place on the Metropolitan Oval.",
          item_data_start: "2018-03-20",
          item_data_end: "2018-03-25",
        },
        {
          item_image: "events3.png",
          item_title: "Christmas Tree Lighting",
          item_description: "Tis the Season!  Come and enjoy the annual Christmas Tree Lighting with Dickensian Carolers, hot beverages, cookies and more from 6:30-7pm! All activities take place on the Metropolitan Oval.",
          item_data_start: "2018-04-05",
          item_data_end: "2018-04-10",
        },
        {
          item_image: "events3.png",
          item_title: "Christmas Tree Lighting",
          item_description: "Tis the Season!  Come and enjoy the annual Christmas Tree Lighting with Dickensian Carolers, hot beverages, cookies and more from 6:30-7pm! All activities take place on the Metropolitan Oval.",
          item_data_start: "2018-04-10",
          item_data_end: "2018-04-20",
        },
        {
          item_image: "events3.png",
          item_title: "Christmas Tree Lighting",
          item_description: "Tis the Season!  Come and enjoy the annual Christmas Tree Lighting with Dickensian Carolers, hot beverages, cookies and more from 6:30-7pm! All activities take place on the Metropolitan Oval.",
          item_data_start: "2018-04-20",
          item_data_end: "2018-04-25",
        },
        {
          item_image: "events3.png",
          item_title: "Christmas Tree Lighting",
          item_description: "Tis the Season!  Come and enjoy the annual Christmas Tree Lighting with Dickensian Carolers, hot beverages, cookies and more from 6:30-7pm! All activities take place on the Metropolitan Oval.",
          item_data_start: "2018-05-05",
          item_data_end: "2018-05-10",
        },
        {
          item_image: "events3.png",
          item_title: "Christmas Tree Lighting",
          item_description: "Tis the Season!  Come and enjoy the annual Christmas Tree Lighting with Dickensian Carolers, hot beverages, cookies and more from 6:30-7pm! All activities take place on the Metropolitan Oval.",
          item_data_start: "2018-05-10",
          item_data_end: "2018-05-20",
        },
        {
          item_image: "events3.png",
          item_title: "Christmas Tree Lighting",
          item_description: "Tis the Season!  Come and enjoy the annual Christmas Tree Lighting with Dickensian Carolers, hot beverages, cookies and more from 6:30-7pm! All activities take place on the Metropolitan Oval.",
          item_data_start: "2018-05-20",
          item_data_end: "2018-05-25",
        },
        {
          item_image: "events3.png",
          item_title: "Christmas Tree Lighting",
          item_description: "Tis the Season!  Come and enjoy the annual Christmas Tree Lighting with Dickensian Carolers, hot beverages, cookies and more from 6:30-7pm! All activities take place on the Metropolitan Oval.",
          item_data_start: "2018-06-05",
          item_data_end: "2018-06-10",
        },
        {
          item_image: "events3.png",
          item_title: "Christmas Tree Lighting",
          item_description: "Tis the Season!  Come and enjoy the annual Christmas Tree Lighting with Dickensian Carolers, hot beverages, cookies and more from 6:30-7pm! All activities take place on the Metropolitan Oval.",
          item_data_start: "2018-06-10",
          item_data_end: "2018-06-20",
        },
        {
          item_image: "events3.png",
          item_title: "Christmas Tree Lighting",
          item_description: "Tis the Season!  Come and enjoy the annual Christmas Tree Lighting with Dickensian Carolers, hot beverages, cookies and more from 6:30-7pm! All activities take place on the Metropolitan Oval.",
          item_data_start: "2018-06-20",
          item_data_end: "2018-06-25",
        },
        {
          item_image: "events3.png",
          item_title: "Christmas Tree Lighting",
          item_description: "Tis the Season!  Come and enjoy the annual Christmas Tree Lighting with Dickensian Carolers, hot beverages, cookies and more from 6:30-7pm! All activities take place on the Metropolitan Oval.",
          item_data_start: "2018-07-05",
          item_data_end: "2018-07-10",
        },
        {
          item_image: "events3.png",
          item_title: "Christmas Tree Lighting",
          item_description: "Tis the Season!  Come and enjoy the annual Christmas Tree Lighting with Dickensian Carolers, hot beverages, cookies and more from 6:30-7pm! All activities take place on the Metropolitan Oval.",
          item_data_start: "2018-07-10",
          item_data_end: "2018-07-20",
        },
        {
          item_image: "events3.png",
          item_title: "Christmas Tree Lighting",
          item_description: "Tis the Season!  Come and enjoy the annual Christmas Tree Lighting with Dickensian Carolers, hot beverages, cookies and more from 6:30-7pm! All activities take place on the Metropolitan Oval.",
          item_data_start: "2018-07-20",
          item_data_end: "2018-07-25",
        },
        {
          item_image: "events3.png",
          item_title: "Christmas Tree Lighting",
          item_description: "Tis the Season!  Come and enjoy the annual Christmas Tree Lighting with Dickensian Carolers, hot beverages, cookies and more from 6:30-7pm! All activities take place on the Metropolitan Oval.",
          item_data_start: "2018-08-05",
          item_data_end: "2018-08-10",
        },
        {
          item_image: "events3.png",
          item_title: "Christmas Tree Lighting",
          item_description: "Tis the Season!  Come and enjoy the annual Christmas Tree Lighting with Dickensian Carolers, hot beverages, cookies and more from 6:30-7pm! All activities take place on the Metropolitan Oval.",
          item_data_start: "2018-08-10",
          item_data_end: "2018-08-20",
        },
        {
          item_image: "events3.png",
          item_title: "Christmas Tree Lighting",
          item_description: "Tis the Season!  Come and enjoy the annual Christmas Tree Lighting with Dickensian Carolers, hot beverages, cookies and more from 6:30-7pm! All activities take place on the Metropolitan Oval.",
          item_data_start: "2018-08-20",
          item_data_end: "2018-08-25",
        },
        {
          item_image: "events3.png",
          item_title: "Christmas Tree Lighting",
          item_description: "Tis the Season!  Come and enjoy the annual Christmas Tree Lighting with Dickensian Carolers, hot beverages, cookies and more from 6:30-7pm! All activities take place on the Metropolitan Oval.",
          item_data_start: "2018-09-05",
          item_data_end: "2018-09-10",
        },
        {
          item_image: "events3.png",
          item_title: "Christmas Tree Lighting",
          item_description: "Tis the Season!  Come and enjoy the annual Christmas Tree Lighting with Dickensian Carolers, hot beverages, cookies and more from 6:30-7pm! All activities take place on the Metropolitan Oval.",
          item_data_start: "2018-09-10",
          item_data_end: "2018-09-20",
        },
        {
          item_image: "events3.png",
          item_title: "Christmas Tree Lighting",
          item_description: "Tis the Season!  Come and enjoy the annual Christmas Tree Lighting with Dickensian Carolers, hot beverages, cookies and more from 6:30-7pm! All activities take place on the Metropolitan Oval.",
          item_data_start: "2018-09-20",
          item_data_end: "2018-09-25",
        },
        {
          item_image: "events3.png",
          item_title: "Christmas Tree Lighting",
          item_description: "Tis the Season!  Come and enjoy the annual Christmas Tree Lighting with Dickensian Carolers, hot beverages, cookies and more from 6:30-7pm! All activities take place on the Metropolitan Oval.",
          item_data_start: "2018-10-05",
          item_data_end: "2018-10-10",
        },
        {
          item_image: "events3.png",
          item_title: "Christmas Tree Lighting",
          item_description: "Tis the Season!  Come and enjoy the annual Christmas Tree Lighting with Dickensian Carolers, hot beverages, cookies and more from 6:30-7pm! All activities take place on the Metropolitan Oval.",
          item_data_start: "2018-10-10",
          item_data_end: "2018-10-20",
        },
        {
          item_image: "events3.png",
          item_title: "Christmas Tree Lighting",
          item_description: "Tis the Season!  Come and enjoy the annual Christmas Tree Lighting with Dickensian Carolers, hot beverages, cookies and more from 6:30-7pm! All activities take place on the Metropolitan Oval.",
          item_data_start: "2018-10-20",
          item_data_end: "2018-10-25",
        },
        {
          item_image: "events3.png",
          item_title: "Christmas Tree Lighting",
          item_description: "Tis the Season!  Come and enjoy the annual Christmas Tree Lighting with Dickensian Carolers, hot beverages, cookies and more from 6:30-7pm! All activities take place on the Metropolitan Oval.",
          item_data_start: "2018-11-05",
          item_data_end: "2018-11-10",
        },
        {
          item_image: "events3.png",
          item_title: "Christmas Tree Lighting",
          item_description: "Tis the Season!  Come and enjoy the annual Christmas Tree Lighting with Dickensian Carolers, hot beverages, cookies and more from 6:30-7pm! All activities take place on the Metropolitan Oval.",
          item_data_start: "2018-11-10",
          item_data_end: "2018-11-20",
        },
        {
          item_image: "events3.png",
          item_title: "Christmas Tree Lighting",
          item_description: "Tis the Season!  Come and enjoy the annual Christmas Tree Lighting with Dickensian Carolers, hot beverages, cookies and more from 6:30-7pm! All activities take place on the Metropolitan Oval.",
          item_data_start: "2018-11-20",
          item_data_end: "2018-11-25",
        },
        {
          item_image: "events3.png",
          item_title: "Christmas Tree Lighting",
          item_description: "Tis the Season!  Come and enjoy the annual Christmas Tree Lighting with Dickensian Carolers, hot beverages, cookies and more from 6:30-7pm! All activities take place on the Metropolitan Oval.",
          item_data_start: "2018-12-05",
          item_data_end: "2018-12-10",
        },
        {
          item_image: "events3.png",
          item_title: "Christmas Tree Lighting",
          item_description: "Tis the Season!  Come and enjoy the annual Christmas Tree Lighting with Dickensian Carolers, hot beverages, cookies and more from 6:30-7pm! All activities take place on the Metropolitan Oval.",
          item_data_start: "2018-12-10",
          item_data_end: "2018-12-20",
        },
        {
          item_image: "events3.png",
          item_title: "Christmas Tree Lighting",
          item_description: "Tis the Season!  Come and enjoy the annual Christmas Tree Lighting with Dickensian Carolers, hot beverages, cookies and more from 6:30-7pm! All activities take place on the Metropolitan Oval.",
          item_data_start: "2018-12-20",
          item_data_end: "2018-12-25",
        },
      ],
      list_events: null,
      emptyEvents: false,
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
      load_events_list: async ({ commit }, query) => {
      let url = "http://parkchester-dev.bigdropinc.net/wp-json/wp/v2/neighborhood_events/from/"+query.from+"/to/"+query.to+"/per_paged/"+query.per_paged+"/page/"+query.page+"";
      await fetch(url)
        .then(response => response.json())
        .then(data => {
          data.events.sort((a,b) => {
            return Date.parse(a.date_from) > Date.parse(b.date_from)
          })
          commit('setEventList', { events: data.events, events_length: data.events.length })
        })
      }
    };
    const mutations = {
      setEventList: (state, { events, events_length }) => {
        if ( state.list_events !== null && state.list_events.length == events_length ) {
          state.activeMore = false
        } else {
          state.activeMore = true
        }
        state.list_events = events;
        events_length == 0 ? state.emptyEvents = true : false;
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
            _self.activeFilter = true;
            return arrDrop.filter(item => {
              return item.name.toLowerCase().indexOf(_self.searchText.toLowerCase()) >= 0;
            });
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
          event_date: {
            date: "",
            range: false
          },
          active: true,
          activeIndex: 9,
          activeViewMore: true,
          per_paged: 9,
          page: 1,
        };
      },
      components: { datepicker },
      computed: {
        getEvents() {
          return this.$store.state.list_events
        },
        notEvents() {
          return store.state.emptyEvents;
        },
        activeMore() {
          return store.state.activeMore;
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
          this.$store.dispatch('load_events_list', query);
          let start = this.filterDate(this.start);
          this.pseudo_start = start;
          this.activeIndex = 9;
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
          this.$store.dispatch('load_events_list', query);
          let end = this.filterDate(this.end);
          let idx;
          this.$store.getters.get_events.forEach((item, index) => {
            idx = index;
          });
          this.pseudo_end = end;
          this.activeIndex = 9;
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
          this.per_paged += 9;
          let idx,
            next_items = this.per_paged;
          this.activeIndex = next_items;
          let query = {
            from: String(Date.parse(this.start)).split("").slice(0, -3).join(""),
            to: String(Date.parse(this.end)).split("").slice(0, -3).join(""),
            per_paged: next_items,
            page: this.page
          };
          this.$store.dispatch('load_events_list', query);
        },
        loadEvent() {
          let query = {
            from: String(Date.parse(this.start)).split("").slice(0, -3).join(""),
            to: String(Date.parse(this.end)).split("").slice(0, -3).join(""),
            per_paged: this.per_paged,
            page: this.page
          };
          this.$store.dispatch('load_events_list', query);
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
