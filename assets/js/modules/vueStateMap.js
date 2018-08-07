import axios from "axios";

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
    load_events_list: ({ commit }, query) => {
        let url = api_url+"wp-json/wp/v2/neighborhood_events/from/"+query.from+"/to/"+query.to+"/per_paged/"+query.per_paged+"/page/"+query.page+"";
        axios.get(url)
            .then(data => {
                data.data.events.sort((a,b) => {
                    return Date.parse(a.date_from) > Date.parse(b.date_from);
                });
                commit("setEventList", { events: data.data.events, events_length: data.data.events.length });
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
