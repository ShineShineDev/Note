## Web Geolocation API

- The HTML Geolocation API is used to get the geographical position of a user.
-  Geolocation is most accurate for devices with GPS, like smartphone.





#### Is supported

```js
if (navigator.geolocation) {
    console.log("Geolocation is supported by this browser")
  } else {
    console.log("Geolocation is not supported by this browser");
}
```

 





#### getCurrentPosition

- The `getCurrentPosition()` method is used to return the user's position.

- Check if Geolocation is supported and user allowed

- getCurrentPosition() method returns a coordinates object to the function specified in the parameter.

  ```js
  function getLocation() {
      if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition(showPosition);
      }
  }
  function showPosition(position) {
      console.log(`Latitude : ${position.coords.latitude},Longitude : ${position.coords.longitude}`)
  }
  ```

  





#### Handling Errors and Rejections

- The second parameter of the `getCurrentPosition()` method is used to handle errors. It specifies a function to run if it fails to get the user's location:

  ```js
  function getLocation() {
      if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition(showPosition,showError);
      }
  }
  function showPosition(position) {
      console.log(`Latitude : ${position.coords.latitude},Longitude : ${position.coords.longitude}`)
  }
  
  // Handling Errors and Rejections
  function showError(error) {
    switch(error.code) {
      case error.PERMISSION_DENIED:
        console.log("User denied the request for Geolocation.")
        break;
      case error.POSITION_UNAVAILABLE:
        console.log("Location information is unavailable.")
        break;
      case error.TIMEOUT:
        console.log("The request to get user location timed out.")
        break;
      case error.UNKNOWN_ERROR:
         console.log("An unknown error occurred.")
        break;
    }
  }
  ```







#### Displaying the Result in a Map

- To display the result in a map(static image), you need access to a map service, like Google Maps.

  ```js
  function showPosition(position) {
    let latlon = position.coords.latitude + "," + position.coords.longitude;
  
    let img_url = "https://maps.googleapis.com/maps/api/staticmap?center=
    "+latlon+"&zoom=14&size=400x300&sensor=false&key=YOUR_KEY";
  
    document.getElementById("mapholder").innerHTML = "<img src='"+img_url+"'>";
  }
  ```

  





####  getCurrentPosition() Method s

- The `getCurrentPosition()` method returns an object on success.

  | Property                | Returns                                                      |
  | :---------------------- | :----------------------------------------------------------- |
  | coords.latitude         | The latitude as a decimal number (always returned)           |
  | coords.longitude        | The longitude as a decimal number (always returned)          |
  | coords.accuracy         | The accuracy of position (always returned)                   |
  | coords.altitude         | The altitude in meters above the mean sea level (returned if available) |
  | coords.altitudeAccuracy | The altitude accuracy of position (returned if available)    |
  | coords.heading          | The heading as degrees clockwise from North (returned if available) |
  | coords.speed            | The speed in meters per second (returned if available)       |
  | timestamp               | The date/time of the response (returned if available)        |

​    Other interesting Methods

- `watchPosition()` - Returns the current position of the user and continues to return updated position as the user moves (like the GPS in a car).

- `clearWatch()` - Stops the `watchPosition()` method.





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

