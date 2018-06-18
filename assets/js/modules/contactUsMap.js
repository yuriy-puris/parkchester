export function contactUsMap() {
  $(window).on("load", function () {
    const location = $(".map-menu-item"),
      curLocation = location.find("span.active"),
      dataWindow = $(".data-window-content");

    function createMap(dataLat, dataLng, dataTitle, childCategory, idx) {
      let
        $map = $('#map'),
        lat = dataLat,
        lng = dataLng,
        myLatlng = new google.maps.LatLng(lat, lng),
        styles = [{"featureType":"all","elementType":"all","stylers":[{"lightness":"0"},{"gamma":"0.96"}]},{"featureType":"all","elementType":"geometry.fill","stylers":[{"hue":"#00ff9c"},{"visibility":"on"}]},{"featureType":"all","elementType":"geometry.stroke","stylers":[{"weight":"8.62"},{"visibility":"simplified"},{"color":"#0bb5e7"}]},{"featureType":"all","elementType":"labels.text","stylers":[{"saturation":"-88"},{"lightness":"-99"},{"gamma":"0.00"},{"weight":"0.63"},{"color":"#ebebeb"},{"visibility":"on"}]},{"featureType":"all","elementType":"labels.text.fill","stylers":[{"visibility":"on"},{"saturation":"-90"},{"lightness":"-34"},{"weight":"2.48"},{"gamma":"0.48"}]},{"featureType":"administrative","elementType":"labels.text.fill","stylers":[{"color":"#444444"}]},{"featureType":"landscape","elementType":"all","stylers":[{"color":"#f2f2f2"}]},{"featureType":"landscape.natural.landcover","elementType":"geometry.fill","stylers":[{"saturation":"-100"}]},{"featureType":"landscape.natural.terrain","elementType":"geometry.fill","stylers":[{"saturation":"-1"},{"lightness":"-100"},{"weight":"0.01"}]},{"featureType":"poi","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"road","elementType":"all","stylers":[{"saturation":-100},{"lightness":45}]},{"featureType":"road","elementType":"labels.text","stylers":[{"lightness":"6"},{"saturation":"1"},{"weight":"0.93"}]},{"featureType":"road.highway","elementType":"all","stylers":[{"visibility":"simplified"}]},{"featureType":"road.highway","elementType":"labels.text","stylers":[{"lightness":"-33"}]},{"featureType":"road.highway","elementType":"labels.text.fill","stylers":[{"lightness":"-21"}]},{"featureType":"road.arterial","elementType":"labels.text","stylers":[{"lightness":"5"}]},{"featureType":"road.arterial","elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"featureType":"road.local","elementType":"labels.text","stylers":[{"lightness":"21"}]},{"featureType":"transit","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"water","elementType":"all","stylers":[{"color":"#96d7f1"},{"visibility":"on"}]},{"featureType":"water","elementType":"geometry.fill","stylers":[{"lightness":"63"},{"hue":"#0061ff"}]},{"featureType":"water","elementType":"labels.text","stylers":[{"lightness":"65"}]}],
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
          url: $map.attr('data-image')
        };
        // marker = new google.maps.InfoWindow({
        //   position: myLatlng,
        //   map: map,
        //   icon: image,
        // }),
        // content = dataTitle;
        // marker.setContent(content);
        let marker;
        for (var i = 0; i < childCategory.length; i++) {
          let childItem = childCategory[i];
          marker = new google.maps.Marker({
            position: { 
              lat: childItem[0], 
              lng:  childItem[1] 
            },
            map: map,
            icon: image,
            title: childItem[2],
          });
          
          if( i === idx && typeof idx !== typeof undefined) {
            marker[idx] = new google.maps.InfoWindow({
              position: { 
                lat: childItem[0], 
                lng:  childItem[1] 
              },
              map: map,
              icon: image,
              content: childItem[2],
            })
          }
        }
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
            left: "100px",
            top: "325px"
          });
        });
    }

    function getData(locationItem, idx) {
      let curLat = parseFloat(locationItem.attr("data-lat")),
          curLng = parseFloat(locationItem.attr("data-lng")),
          curTitle = locationItem.attr("data-title");
      let childCategory = [];
      locationItem.next("ul").find("li").each(function(index, item) {
        let childItem = [];
        childItem.push(parseFloat($(this).attr("data-lat")));
        childItem.push(parseFloat($(this).attr("data-lng")));
        childItem.push($(this).attr("data-title"));
        childCategory.push(childItem);
      }).promise().done( createMap(curLat, curLng, curTitle, childCategory, idx) );
      
    }

    getData(curLocation);

    location.children('span').on("click", function () {
      let $this = $(this);
      $this
        .addClass("active")
        .parent("li")
        .addClass("active")
        .siblings("li")
        .removeClass("active")
        .find('span')
        .removeClass("active");
        getData($this);
    });

    location.children('ul').children('li').on("click", function () {
      let $this = $(this),
          $pseudoThis = $(this).parent("ul").prev("span"),
          $idx = $this.index();
      $this
        .addClass("active")
        .siblings("li")
        .removeClass("active")
        .parent("ul")
        .children("li")
        .not($this)
        .removeClass("active");
        console.log($pseudoThis);
      getData($pseudoThis, $idx);
    });

  });
}