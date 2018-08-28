import datepicker from "vue-date";
import axios from "axios";

export function vueMap() {
    if ($("#app").length) {

        const state = {
            data: markerCollection,
            map_api: null,
            map_api_points: [],
            list_events: null,
            emptyEvents: false,
            activeViewMore: false,
            countEvents: 0,
            activeMore: true
        };
        const getters = {
            get_new_mapmenu_list: state => {
                return state.map_api;
            },
            get_mapmenu_list: state => {
                return state.data;
            },
            filter_mapmenu_list: (state) => (id) => {
              let id_new = Number(id);
              if (id == 0) {
                id_new = Number(id) + 1
              }
              for (let idx in state.map_api) {
                  if(Number(idx) === id_new) {
                    return state.map_api[idx]
                  }
              }
            },
            get_events: state => {
                return state.list_events;
            },
            filter_events_list: (state) => (date_start, date_end) => {
                if (date_end == "") {
                    return state.date_events;
                } else {
                    let eventArray = [];
                    return state.date_events.filter(item => {
                        if (Date.parse(date_start) <= Date.parse(item.item_data_end) &&
                            Date.parse(date_end) >= Date.parse(item.item_data_end)) {
                            eventArray.push(item);
                            return eventArray;
                        }
                    });
                }
            }
        };
        const actions = {
            load_events_list: ({commit}, query) => {
                let url = apiUrl;
                axios.get(url, {
                    params: {
                        from: query.from,
                        to: query.to,
                        per_paged: query.per_paged,
                        page: query.page,
                    }
                }).then(data => {
                    commit("setEventList", {events: data.data.events, events_length: data.data.count_events});
                });
            },
            load_map_api: ({commit}, query) => {
                let mapApi = mapApiUrl;
                axios.get(mapApi)
                  .then(data => {
                    commit("setMapList", { mapList: data.data })
                  })
            }
        };
        const mutations = {
            setMapList: (state, { mapList }) => {
                state.map_api = mapList
                let mapApi = state.map_api
                for (let item in mapApi) {
                    let itm = state.map_api[item]
                    state.map_api_points.push(itm)
                }
            },
            setEventList: (state, {events, events_length}) => {
                if (state.list_events !== null && state.list_events.length == events_length) {
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
                    mainTab: 1,
                    subTab: 0,
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
                getNewLocations() {
                    return this.$store.getters.get_new_mapmenu_list
                },
                getLocations() {
                    return this.$store.getters.get_mapmenu_list;
                },
                dropLocations: function () {
                  let _self = this,
                    arrDrop = [];

                  let map_data,
                    search_arr = [],
                    updateSearch = [];
                  if (this.$store.getters.get_new_mapmenu_list !== null) {
                    map_data = this.$store.getters.get_new_mapmenu_list;
                    for (let search_key in map_data) {
                      let search_sub_cat = map_data[search_key]
                      for ( let s_cat in search_sub_cat.sub_cats ) {
                        let s_key_cat = search_sub_cat.sub_cats[s_cat]
                        s_key_cat.parent_name = search_sub_cat.name
                        s_key_cat.parent_id = search_key
                        s_key_cat.self_id = s_cat
                      }
                      if (search_sub_cat.sub_cats) {
                        search_arr.push(search_sub_cat.sub_cats)
                      }
                    }
                    if (_self.searchText !== "" && _self.searchText !== null) {
                      search_arr.forEach(item => {
                        for (let item_key in item) {
                          let sub_key = item[item_key]
                          updateSearch.push(sub_key)
                        }
                      });
                      let res_arr = updateSearch.filter(item => {
                        return item.name.toLowerCase().indexOf(_self.searchText.toLowerCase()) >= 0;
                      });
                      _self.activeFilter = (res_arr.length > 0) ? true : false;
                      return res_arr;
                    } else {
                      _self.activeFilter = false;
                    }
                  }
                }
            },
            created() {
                this.loadMapApi()
            },
            methods: {
                loadMapApi() {
                  this.$store.dispatch('load_map_api');
                },
                tabs(index, sub_index) {
                    this.searchText = "";
                    this.removeContentActive();
                    if (sub_index) {
                      this.subTab = sub_index;
                    } else {
                      this.subTab = 0
                    }
                    this.mainTab = index;
                    this.mainCategory = this.$store.getters.filter_mapmenu_list(index);
                    this.initMap(this.mainCategory, sub_index);
                    return index;
                },
                searchTabs(parentIndex, subindex) {
                    this.mainCategory = this.$store.getters.filter_mapmenu_list(parentIndex);
                    this.initMap(this.mainCategory, subindex);
                },
                triggerFilter(index, sub_index) {
                  this.searchText = "";
                  if (sub_index) {
                    this.subTab = sub_index;
                  } else {
                    this.subTab = 0
                  }
                  this.mainTab = index;
                  this.mainCategory = this.$store.getters.filter_mapmenu_list(index);
                  this.initMap(this.mainCategory, sub_index);
                },
                autoValue(sub_name) {
                  this.searchText = sub_name;
                  setTimeout(() => {
                    this.activeFilter = false;
                  }, 10)
                },
                initMap(locations, sub_locations) {
                    let
                        $map = this.$refs.map,
                        // lat = parseFloat(locations.latitude),
                        // lng = parseFloat(locations.longtitude),
                        // myLatlng = new google.maps.LatLng(lat, lng),
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
                            zoom:13,
                            maxZoom: 18,
                            // center: myLatlng,
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
                        image = {
                            url: this.icon,
                            scaledSize: new google.maps.Size(26, 32),
                            optimized: false
                        },
                        marker,
                        sub_cats;

                    let infoWindow = new google.maps.InfoWindow();
                    let markers = [];
                    let bounds = new google.maps.LatLngBounds();
                    let points_submenu = [];
                    // check for sub_location
                    if (sub_locations) {
                      if (locations.sub_cats) {
                        sub_cats = locations.sub_cats;
                        let sub_points = sub_cats[sub_locations]
                        for (let s_point in sub_points.points) {
                          points_submenu.push(sub_points.points[s_point])
                        }
                      }
                    } else {
                      // check for sub_cats
                      if (locations.sub_cats) {
                        sub_cats = locations.sub_cats;
                        for ( let sub_key in sub_cats ) {
                          let sub_itm = sub_cats[sub_key]
                          for (let points_key in sub_itm.points) {
                            points_submenu.push(sub_itm.points[points_key])
                          }
                        }
                      } else {
                        sub_cats = locations.points;
                        for ( let sub_key in sub_cats ) {
                          let sub_itm = sub_cats[sub_key]
                          points_submenu.push(sub_itm)
                        }
                      }
                    }
                    [].forEach.call(points_submenu, function (subItem) {
                        marker = new google.maps.Marker({
                            position: {
                                lat: parseFloat(subItem.lat),
                                lng: parseFloat(subItem.lng)
                            },
                            map: map,
                            icon: image,
                            title: subItem.point_name,
                            // name: subItem.point_address,
                        });
                        markers.push(marker);
                        (function (marker, subItem) {
                            function infoWindowOpen() {
                                let infoWindowContent = {}
                                if ( subItem.point_name !== "NULL") {
                                  infoWindowContent.name = subItem.point_name
                                }
                                if (subItem.point_address !== "NULL") {
                                  infoWindowContent.address = subItem.point_address
                                }
                                map.setCenter(marker.getPosition());
                                for (let j = 0; j < markers.length; j++) {
                                    markers[j].setIcon({
                                        url: markerPin,
                                        scaledSize: new google.maps.Size(26, 32),
                                        optimized: false
                                    });
                                };
                                if (Object.keys(infoWindowContent).length !== 0) {
                                  let infoWindowTemplate;
                                  if (typeof infoWindowContent.name === 'undefined') {
                                      infoWindowTemplate = "<div class='map-note-neighborhood'>" +
                                        "<div id='content-note'>" +
                                        "<div>" + infoWindowContent.address + "</div>" +
                                        "</div>" +
                                        "</div>";
                                  }
                                  else if (typeof infoWindowContent.address === 'undefined') {
                                        infoWindowTemplate = "<div class='map-note-neighborhood'>" +
                                          "<h6>" + infoWindowContent.name + "</h6>" +
                                          "</div>";
                                  } else {
                                        infoWindowTemplate = "<div class='map-note-neighborhood'>" +
                                          "<h6>" + infoWindowContent.name + "</h6>" +
                                          "<div id='content-note'>" +
                                          "<div>" + infoWindowContent.address + "</div>" +
                                          "</div>" +
                                          "</div>";
                                  }
                                  infoWindow.setContent(infoWindowTemplate);
                                  infoWindow.open(map, marker);
                                }
                                marker.setIcon({
                                    url: activePin,
                                    scaledSize: new google.maps.Size(41, 50),
                                    optimized: false
                                });
                            }

                            google.maps.event.addListener(marker, "click", function () {
                                infoWindowOpen();
                                // let dataTitle = marker.title;
                                // let dataName = marker.name;
                                // setTimeout(() => {
                                //     $('.search-landmarks #search').val(dataTitle);
                                // }, 10);
                                // $('.tab-content-item.active a').each(function () {
                                //     if (dataTitle === $(this).data('title')) {
                                //         $('.tab-content-item.active li').removeClass('active');
                                //         $(`a[data-title='${dataTitle}']`).parent().addClass('active');
                                //     }
                                // });
                            });
                            // $(document).on('click', '.search-dropdown li', function () {
                            //     let dataTitle = $(this).attr('data-title');
                            //     let dataName = $(this).attr('data-name');
                            //
                            //     setTimeout(() => {
                            //         $('.search-landmarks #search').val(dataName);
                            //     }, 10);
                            //     if (dataTitle === marker.title) {
                            //         $('.tab-content-item.active li').removeClass('active');
                            //         $(this).parent().addClass('active');
                            //         infoWindowOpen();
                            //     }
                            //     return false;
                            // });
                            // $(document).on('click', '.tab-content-item.active a', function () {
                            //     let dataTitle = $(this).attr('data-title');
                            //     if (dataTitle === marker.title) {
                            //         $('.tab-content-item.active li').removeClass('active');
                            //         $(this).parent().addClass('active');
                            //         infoWindowOpen();
                            //     }
                            //     return false;
                            // });
                        })(marker, subItem);

                    });
                    for (let i = 0; i < markers.length; i++) {
                        bounds.extend(markers[i].getPosition());
                    }

                    map.fitBounds(bounds);

                    google.maps.event.addListener(infoWindow, 'domready', function () {
                        let iwOuter = $('.gm-style-iw');
                        let iwBackground = iwOuter.prev();
                        iwBackground.children(':nth-child(2)').css('display', 'none');
                        iwBackground.children(':nth-child(4)').css('display', 'none');
                        iwOuter.parent().parent().css({
                            left: "134px",
                            top: "144px"
                        });
                        iwBackground.children(':nth-child(1)').attr('style',
                            function (i, s) {
                                return s + 'display: none !important;'
                            }
                        );
                        iwBackground.children(':nth-child(3)').attr('style',
                            function (i, s) {
                                return s + 'display: none !important;'
                            });
                        iwBackground.children(':nth-child(3)').find('div').children().css('z-index', '1');
                        let iwCloseBtn = iwOuter.next();
                        iwCloseBtn.css({
                            display: 'none'
                        });
                        if ($('.iw-content').height() < 140) {
                            $('.iw-bottom-gradient').css('display', 'none');
                        }
                        iwCloseBtn.mouseout(function () {
                            $(this).css('opacity', '1');
                        });
                    });
                },
                removeContentActive() {
                    setTimeout(() => {
                        $('.search-landmarks #search').val('');
                    }, 10);
                    $('.tab-content-item li').removeClass('active');
                }
            },
            mounted() {
                setTimeout(() => {
                  this.tabs(this.mainTab);
                }, 2000)
            }
        });

        Vue.component("sortHolder", {
            template: "#sort-holder",
            data() {
                return {
                    language: "en",
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
            components: {datepicker},
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
                start: function () {
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
                end: function () {
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
            mounted() {
                $('.cancel-btn').remove();
            },
            methods: {
                filterDate(val) {
                    let dateStr;
                    let objDate = new Date(val).toString().split(" ");
                    dateStr = objDate[1] + " " + objDate[2] + "," + " " + objDate[3];
                    return dateStr;
                },
                eventsIndex() {
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
