function my() {
    var x = document.getElementById("myText").value;
    var jobs = [" Madz One"," Nimbus","Coker "," Kris Holm"];
    var y = x-1;
    var r = " ";
    //without quotes makes undefined string 
	
	while(y>=0){
	//cat
        r = r+jobs[y];
	//print
	document.getElementById("demo").innerHTML = r;
y--;
 var o = document.forms["myForm"]["fname"].value;
    if (o == null || o == "") {
        alert("Name must be filled out");
        return false;
    }
}
}
document.getElementById("myFunction").addEventListener("click", myFunction);

function myFunction() {
    alert ("Kris Holm");
}
function myF() {
 
 var time = new Date().getHours();
    if (time < 20) {
        document.getElementById("demo2").innerHTML = "Nimbus";
       }else if(time > 21 ){ 
	document.getElementById("demo2").innerHTML = "Madz One"; 
       }else {
	document.getElementById("demo2").innerHTML = "Kris Holm"; 

}
}
/*
 * declare map as a global variable
 */
var map;

/*
 * use google maps api built-in mechanism to attach dom events
 */
google.maps.event.addDomListener(window, "load", function () {

  /*
   * create map
   */
  var map = new google.maps.Map(document.getElementById("map_div"), {
    center: new google.maps.LatLng(33.808678, -117.918921),
    zoom: 12,
    mapTypeId: google.maps.MapTypeId.ROADMAP
  });

  /*
   * create infowindow (which will be used by markers)
   */
  var infoWindow = new google.maps.InfoWindow();

  /*
   * marker creater function (acts as a closure for html parameter)
   */
  function createMarker(options, html) {
    var marker = new google.maps.Marker(options);
    if (html) {
      google.maps.event.addListener(marker, "click", function () {
        infoWindow.setContent(html);
        infoWindow.open(options.map, this);
      });
    }
    return marker;
  }

  /*
   * add markers to map
   */
  var marker0 = createMarker({
    position: new google.maps.LatLng(33.808678, -117.918921),
    map: map,
    icon: "http://1.bp.blogspot.com/_GZzKwf6g1o8/S6xwK6CSghI/AAAAAAAAA98/_iA3r4Ehclk/s1600/marker-green.png"
  }, "<h1>Marker 0</h1><p>This is the home marker.</p>");

  var marker1 = createMarker({
    position: new google.maps.LatLng(33.818038, -117.928492),
    map: map
  }, "<h1>Marker 1</h1><p>This is marker 1</p>");

  var marker2 = createMarker({
    position: new google.maps.LatLng(33.803333, -117.915278),
    map: map
  }, "<h1>Marker 2</h1><p>This is marker 2</p>");
});