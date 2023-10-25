## Web Geolocation API

```js
/* The HTML Geolocation API is used to get the geographical position of a user.
*/
function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition,showError);
    }
}
function showPosition(position) {
    console.log(`Latitude : ${position.coords.latitude},Longitude : ${position.coords.longitude}`)
}
getLocation()
```

