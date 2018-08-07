export function googleMap() {
  if ($("#map-home").length) {
    function createMap() {
      let image;
      let iconSrc =$("#map-home").attr("data-image");
      if( $(window).width() >= 1280 ) {
        image = {
          url: iconSrc
        };
      } else {
        image = {
          url: iconSrc,
          scaledSize: new google.maps.Size(17, 21)
        };
      }
      let $map = $("#map-home"),
        longitude = $map.attr("data-longitude"),
        latitude = $map.attr("data-latitude"),
        myLatlng = new google.maps.LatLng(longitude, latitude),
        styles = [{"featureType":"all","elementType":"all","stylers":[{"lightness":"0"},{"gamma":"0.96"}]},{"featureType":"all","elementType":"geometry.fill","stylers":[{"hue":"#00ff9c"},{"visibility":"on"}]},{"featureType":"all","elementType":"geometry.stroke","stylers":[{"weight":"8.62"},{"visibility":"simplified"},{"color":"#0bb5e7"}]},{"featureType":"all","elementType":"labels.text","stylers":[{"saturation":"-88"},{"lightness":"-99"},{"gamma":"0.00"},{"weight":"0.63"},{"color":"#ebebeb"},{"visibility":"on"}]},{"featureType":"all","elementType":"labels.text.fill","stylers":[{"visibility":"on"},{"saturation":"-90"},{"lightness":"-34"},{"weight":"2.48"},{"gamma":"0.48"}]},{"featureType":"administrative","elementType":"labels.text.fill","stylers":[{"color":"#444444"}]},{"featureType":"landscape","elementType":"all","stylers":[{"color":"#f2f2f2"}]},{"featureType":"landscape.natural.landcover","elementType":"geometry.fill","stylers":[{"saturation":"-100"}]},{"featureType":"landscape.natural.terrain","elementType":"geometry.fill","stylers":[{"saturation":"-1"},{"lightness":"-100"},{"weight":"0.01"}]},{"featureType":"poi","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"road","elementType":"all","stylers":[{"saturation":-100},{"lightness":45}]},{"featureType":"road","elementType":"labels.text","stylers":[{"lightness":"6"},{"saturation":"1"},{"weight":"0.93"}]},{"featureType":"road.highway","elementType":"all","stylers":[{"visibility":"simplified"}]},{"featureType":"road.highway","elementType":"labels.text","stylers":[{"lightness":"-33"}]},{"featureType":"road.highway","elementType":"labels.text.fill","stylers":[{"lightness":"-21"}]},{"featureType":"road.arterial","elementType":"labels.text","stylers":[{"lightness":"5"}]},{"featureType":"road.arterial","elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"featureType":"road.local","elementType":"labels.text","stylers":[{"lightness":"21"}]},{"featureType":"transit","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"water","elementType":"all","stylers":[{"color":"#96d7f1"},{"visibility":"on"}]},{"featureType":"water","elementType":"geometry.fill","stylers":[{"lightness":"63"},{"hue":"#0061ff"}]},{"featureType":"water","elementType":"labels.text","stylers":[{"lightness":"65"}]}],
        mapOptions = {
          zoom: 14,
          center: myLatlng,
          styles: styles,
          disableDefaultUI: true,
          scrollwheel: false,
          zoomControl: true,
          gestureHandling: "cooperative"
        },
        map = new google.maps.Map($map[0], mapOptions),
        marker = new google.maps.InfoWindow({
          position: myLatlng,
          map: map,
          icon: image,
        }),
        content = "<div id='map-note'>" +
                    "<h5>Parkchester</h5>"+
                    "<div id='content-note'>"+
                      "<div>2000 East Tremont Avenue</div>"+
                      "<div>Bronx, NY 10462</div>"+
                    "</div>"+
                  "</div>";
      new google.maps.Marker({
        position: myLatlng,
        map: map,
        icon: image,
      });

      marker.setContent(content);
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
        if( $(window).width() >= 1280 ) {
          iw.parent().parent().css({
            left: "95px",
            top: "150px"
          });
        } else {
          iw.parent().parent().css({
            left: "75px",
            top: "110px"
          });
        }
      });
    }
    createMap();
  }
}