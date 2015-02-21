var map;

$(window).resize(function() {
  sizeLayerControl();
});

$("#about-btn").click(function() {
  $("#aboutModal").modal("show");
  $(".navbar-collapse.in").collapse("hide");
  return false;
});

$("#full-extent-btn").click(function() {
  map.fitBounds(boroughs.getBounds());
  $(".navbar-collapse.in").collapse("hide");
  return false;
});

$("#legend-btn").click(function() {
  $("#legendModal").modal("show");
  $(".navbar-collapse.in").collapse("hide");
  return false;
});

$("#login-btn").click(function() {
  $("#loginModal").modal("show");
  $(".navbar-collapse.in").collapse("hide");
  return false;
});

$("#list-btn").click(function() {
  $('#sidebar').toggle();
  map.invalidateSize();
  return false;
});

$("#nav-btn").click(function() {
  $(".navbar-collapse").collapse("toggle");
  return false;
});

$("#sidebar-toggle-btn").click(function() {
  $("#sidebar").toggle();
  map.invalidateSize();
  return false;
});

$("#sidebar-hide-btn").click(function() {
  $('#sidebar').hide();
  map.invalidateSize();
});

function sizeLayerControl() {
  $(".leaflet-control-layers").css("max-height", $("#map").height() - 50);
}

function clearHighlight() {
  //highlight.clearLayers();
}

/* Basemap Layers */
var mapquestOSM = L.tileLayer("http://{s}.mqcdn.com/tiles/1.0.0/osm/{z}/{x}/{y}.png", {
  maxZoom: 19,
  subdomains: ["otile1", "otile2", "otile3", "otile4"],
  attribution: 'Tiles courtesy of <a href="http://www.mapquest.com/" target="_blank">MapQuest</a> <img src="http://developer.mapquest.com/content/osm/mq_logo.png">. Map data (c) <a href="http://www.openstreetmap.org/" target="_blank">OpenStreetMap</a> contributors, CC-BY-SA.'
});
var mapquestOAM = L.tileLayer("http://{s}.mqcdn.com/tiles/1.0.0/sat/{z}/{x}/{y}.jpg", {
  maxZoom: 18,
  subdomains: ["oatile1", "oatile2", "oatile3", "oatile4"],
  attribution: 'Tiles courtesy of <a href="http://www.mapquest.com/" target="_blank">MapQuest</a>. Portions Courtesy NASA/JPL-Caltech and U.S. Depart. of Agriculture, Farm Service Agency'
});
var mapquestHYB = L.layerGroup([L.tileLayer("http://{s}.mqcdn.com/tiles/1.0.0/sat/{z}/{x}/{y}.jpg", {
  maxZoom: 18,
  subdomains: ["oatile1", "oatile2", "oatile3", "oatile4"]
}), L.tileLayer("http://{s}.mqcdn.com/tiles/1.0.0/hyb/{z}/{x}/{y}.png", {
  maxZoom: 19,
  subdomains: ["oatile1", "oatile2", "oatile3", "oatile4"],
  attribution: 'Labels courtesy of <a href="http://www.mapquest.com/" target="_blank">MapQuest</a> <img src="http://developer.mapquest.com/content/osm/mq_logo.png">. Map data (c) <a href="http://www.openstreetmap.org/" target="_blank">OpenStreetMap</a> contributors, CC-BY-SA. Portions Courtesy NASA/JPL-Caltech and U.S. Depart. of Agriculture, Farm Service Agency'
})]);

var bicycle_lane = L.geoJson(null, {
  style: function (feature) {
    return {
      color: "#00ffff",
      fill: false,
      weight: 3,
      opacity: 1,
      clickable: false
    };
  }
  /*
  onEachFeature: function (feature, layer) {
    boroughSearch.push({
      name: layer.feature.properties.BoroName,
      source: "Boroughs",
      id: L.stamp(layer),
      bounds: layer.getBounds()
    });
}*/
});
$.getJSON("data/01_chiba_city_bicycle_lane.geojson", function (data) {
  bicycle_lane.addData(data);
});
var bicyclemap_blueline = L.geoJson(null, {
  style: function (feature) {
    return {
      color: "#0000ff",
      fill: false,
      weight: 3,
      opacity: 1,
      clickable: false
    };
  }
  /*
  onEachFeature: function (feature, layer) {
    boroughSearch.push({
      name: layer.feature.properties.BoroName,
      source: "Boroughs",
      id: L.stamp(layer),
      bounds: layer.getBounds()
    });
}*/
});
$.getJSON("data/11_chiba_city_bicyclemap_blueline.geojson", function (data) {
    bicyclemap_blueline.addData(data);
});
var bicyclemap_greenline = L.geoJson(null, {
  style: function (feature) {
    return {
      color: "#00ff00",
      fill: false,
      weight: 3,
      opacity: 1,
      clickable: false
    };
  }
  /*
  onEachFeature: function (feature, layer) {
    boroughSearch.push({
      name: layer.feature.properties.BoroName,
      source: "Boroughs",
      id: L.stamp(layer),
      bounds: layer.getBounds()
    });
}*/
});
$.getJSON("data/12_chiba_city_bicyclemap_greenline.geojson", function (data) {
    bicyclemap_greenline.addData(data);
});
var bicyclemap_pinkline = L.geoJson(null, {
  style: function (feature) {
    return {
      color: "#ff00ff",
      fill: false,
      weight: 3,
      opacity: 1,
      clickable: false
    };
  }
  /*
  onEachFeature: function (feature, layer) {
    boroughSearch.push({
      name: layer.feature.properties.BoroName,
      source: "Boroughs",
      id: L.stamp(layer),
      bounds: layer.getBounds()
    });
}*/
});
$.getJSON("data/14_chiba_city_bicyclemap_pinkline.geojson", function (data) {
    bicyclemap_pinkline.addData(data);
});
var bicyclemap_orengeline = L.geoJson(null, {
  style: function (feature) {
    return {
      color: "#ff9900",
      fill: false,
      weight: 3,
      opacity: 1,
      clickable: false
    };
  }
  /*
  onEachFeature: function (feature, layer) {
    boroughSearch.push({
      name: layer.feature.properties.BoroName,
      source: "Boroughs",
      id: L.stamp(layer),
      bounds: layer.getBounds()
    });
}*/
});
$.getJSON("data/15_chiba_city_bicyclemap_orengeline.geojson", function (data) {
    bicyclemap_orengeline.addData(data);
});

var contour_10_layer = L.geoJson(null, {
  style: function (feature) {
    return {
      color: "#1f78b4",
      fill: false,
      weight: 1,
      opacity: 0.8,
      clickable: false
    };
  }
  /*
  onEachFeature: function (feature, layer) {
    boroughSearch.push({
      name: layer.feature.properties.BoroName,
      source: "Boroughs",
      id: L.stamp(layer),
      bounds: layer.getBounds()
    });
}*/
});
/*
$.getJSON("data/chiba_contour_10.geojson", function (data) {
    contour_10_layer.addData(data);
});
*/

/* Empty layer placeholder to add to layer control for listening when to add/remove theaters to markerClusters layer */
var bicycleShopLayer = L.geoJson(null);
var bicycleShop = L.geoJson(null, {
  pointToLayer: function (feature, latlng) {
    return L.marker(latlng, {
      icon: L.icon({
        iconUrl: "http://umap.openstreetmap.fr/uploads/pictogram/bicycle-24.png",
        iconSize: new L.Point(30, 30),
        opacity: 1
      }),
      title: feature.properties.name
    });
  },
  onEachFeature: function (feature, layer) {
    if (feature.properties) {
      var content = "<table class='table table-striped table-bordered table-condensed'>" + "<tr><th>Name</th><td>" + feature.properties.name + "</td></tr>" + "<table>";
      layer.on({
        click: function (e) {
          $("#feature-title").html(feature.properties.name);
          $("#feature-info").html(content);
          $("#featureModal").modal("show");
          //highlight.clearLayers().addLayer(L.circleMarker([feature.geometry.coordinates[1], feature.geometry.coordinates[0]], highlightStyle));
        }
      });
      /*
      $("#feature-list tbody").append('<tr class="feature-row" id="' + L.stamp(layer) + '" lat="' + layer.getLatLng().lat + '" lng="' + layer.getLatLng().lng + '"><td style="vertical-align: middle;"><img width="16" height="18" src="assets/img/theater.png"></td><td class="feature-name">' + layer.feature.properties.NAME + '</td><td style="vertical-align: middle;"><i class="fa fa-chevron-right pull-right"></i></td></tr>');
      theaterSearch.push({
        name: layer.feature.properties.NAME,
        address: layer.feature.properties.ADDRESS1,
        source: "Theaters",
        id: L.stamp(layer),
        lat: layer.feature.geometry.coordinates[1],
        lng: layer.feature.geometry.coordinates[0]
      });
      */
    }
  }
});
$.getJSON("data/bicycle_shop_map.geojson", function (data) {
    bicycleShop.addData(data);
    bicycleShop.addTo(bicycleShopLayer);
    map.addLayer(bicycleShopLayer);
});

/* Empty layer placeholder to add to layer control for listening when to add/remove museums to markerClusters layer */
var parkingLayer = L.geoJson(null);
var parkings = L.geoJson(null, {
  pointToLayer: function (feature, latlng) {
    return L.marker(latlng, {
      icon: L.icon({
        iconUrl: "assets/img/bicycle_parking.svg",
        iconSize: [30, 30]
      }),
      title: feature.properties.name
    });
  },
  onEachFeature: function (feature, layer) {
    if (feature.properties) {
      var content = "<table class='table table-striped table-bordered table-condensed'>" + "<tr><th>Name</th><td>" + feature.properties.name + "</td></tr>" + "<tr><th>住所</th><td>" + feature.properties.address + "</td></tr>" + "<tr><th>一時利用最大台数</th><td>" + feature.properties.capacity + "台"+ "</td></tr>" + "<table>";
      layer.on({
        click: function (e) {
          $("#feature-title").html(feature.properties.name);
          $("#feature-info").html(content);
          $("#featureModal").modal("show");
          //highlight.clearLayers().addLayer(L.circleMarker([feature.geometry.coordinates[1], feature.geometry.coordinates[0]], highlightStyle));
        }
      });
      /*
      $("#feature-list tbody").append('<tr class="feature-row" id="' + L.stamp(layer) + '" lat="' + layer.getLatLng().lat + '" lng="' + layer.getLatLng().lng + '"><td style="vertical-align: middle;"><img width="16" height="18" src="assets/img/museum.png"></td><td class="feature-name">' + layer.feature.properties.NAME + '</td><td style="vertical-align: middle;"><i class="fa fa-chevron-right pull-right"></i></td></tr>');
      museumSearch.push({
        name: layer.feature.properties.NAME,
        address: layer.feature.properties.ADRESS1,
        source: "Museums",
        id: L.stamp(layer),
        lat: layer.feature.geometry.coordinates[1],
        lng: layer.feature.geometry.coordinates[0]
      });
      */
    }
  }
});
$.getJSON("data/parking.geojson", function (data) {
  parkings.addData(data);
  parkings.addTo(parkingLayer);
  map.addLayer(parkingLayer);
});

map = L.map("map", {
  zoom: 10,
  center: [35.600252, 140.098042],
  layers: [mapquestOSM, bicycle_lane, bicyclemap_blueline, bicyclemap_greenline, bicyclemap_pinkline, bicyclemap_orengeline],
  zoomControl: false,
  attributionControl: false
});

var zoomControl = L.control.zoom({
  position: "bottomright"
}).addTo(map);

/* GPS enabled geolocation control set to follow the user's location */
var locateControl = L.control.locate({
  position: "bottomright",
  drawCircle: true,
  follow: true,
  setView: true,
  keepCurrentZoomLevel: true,
  markerStyle: {
    weight: 1,
    opacity: 0.8,
    fillOpacity: 0.8
  },
  circleStyle: {
    weight: 1,
    clickable: false
  },
  icon: "icon-direction",
  metric: false,
  strings: {
    title: "My location",
    popup: "You are within {distance} {unit} from this point",
    outsideMapBoundsMsg: "You seem located outside the boundaries of the map"
  },
  locateOptions: {
    maxZoom: 18,
    watch: true,
    enableHighAccuracy: true,
    maximumAge: 10000,
    timeout: 10000
  }
}).addTo(map);

/* Larger screens get expanded layer control and visible sidebar */
if (document.body.clientWidth <= 767) {
  var isCollapsed = true;
} else {
  var isCollapsed = false;
}

var baseLayers = {
  "Street Map": mapquestOSM,
  "Aerial Imagery": mapquestOAM,
  "Imagery with Streets": mapquestHYB
};

var groupedOverlays = {
  "Points of Interest": {
    "駐車場": parkingLayer,
    "自転車屋": bicycleShopLayer
  },
  "Reference": {
    "Bicycle Lane": bicycle_lane,
    "Bicycle Blue Line": bicyclemap_blueline,
    "Bicycle Green Line": bicyclemap_greenline,
    "Bicycle Pink Line": bicyclemap_pinkline,
    "Bicycle Orenge Line": bicyclemap_orengeline
}/* ,
  "地形": {
    "等高線(10m)": contour_10_layer
}*/
};

var layerControl = L.control.groupedLayers(baseLayers, groupedOverlays, {
  collapsed: isCollapsed
}).addTo(map);


/* Typeahead search functionality */
$(document).one("ajaxStop", function () {
  $("#loading").hide();
  sizeLayerControl();
  /* Fit map to boroughs bounds */
  map.fitBounds(bicycle_lane.getBounds());

  $(".twitter-typeahead").css("position", "static");
  $(".twitter-typeahead").css("display", "block");
});

// Leaflet patch to make layer control scrollable on touch browsers
var container = $(".leaflet-control-layers")[0];
if (!L.Browser.touch) {
  L.DomEvent
  .disableClickPropagation(container)
  .disableScrollPropagation(container);
} else {
  L.DomEvent.disableClickPropagation(container);
}
