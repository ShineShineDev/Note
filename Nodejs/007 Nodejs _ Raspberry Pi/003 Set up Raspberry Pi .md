##                                                                       Set up Raspberry Pi





###  Boot up Raspberry Pi

- `Insert the MicroSD memory card into the Raspberry Pi`

- `Connect the USB keyboard`

- `Connect the HDMI cable`

- `Connect the USB Wi-Fi adapter (or Ethernet cable). Skip this step if you are using a Raspberry Pi 3`

- `Connect the micro USB power supply`

- `The Raspberry Pi should now be booting up`

- `When the Raspberry Pi is finished booting up, log in using `**`username`**: **`pi`** and **` password:`**  **`raspberry`**

  

  <img src='open_raspberry_pi.png'/>






### Set Up Wife Network on the Raspberry Pi

- ` Scanning for wireless networks`

- `This will list all of the available WiFi networks. (It also confirms that your WiFi is working)`

- `Then we need to open the wpa-supplicant file to add the network `

- `Change `**`wifiName`** and **`wifiPassword`** `with the actual network name and password`

- `Then Press "`Ctrl+x`" to save the code`

- `Reboot the Raspberry Pi`

- `After reboot, log in again, and confirm that the WiFi is connected and working:`

  ```js
  pi@raspberrypi:~ $ sudo iwlist wlan0 scan // scan available WiFi networks
  
  pi@raspberrypi:~ $ sudo nano /etc/wpa_supplicant/wpa_supplicant.conf  //open the wpa-supplicant file, to add the network
  
  network={
    ssid="wifiName"
    psk="wifiPassword"
  }
  
  pi@raspberrypi:~ $ ifconfig wlan0 // If the WiFi is working propery, the information displayed should include an IP address
  ```

  

  **Note** : `If you will use a Ethernet cable to connect your Raspberry Pi to the internet, you can skip this step`



  

