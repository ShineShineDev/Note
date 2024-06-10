## Eclipse Mosquitto

- `Eclipse Mosquitto is an open-source message broker that implements the MQTT (Message Queuing Telemetry Transport) protocol.`
-  `MQTT is a lightweight messaging protocol designed for low-bandwidth, high-latency, or unreliable networks, making it ideal for Internet of Things (IoT) applications. Mosquitto is highly regarded for its efficiency, scalability, and ease of use.`



### Key Features of Mosquitto

- **`Lightweight and Efficient`**: `Designed to be lightweight and efficient, making it suitable for devices with limited processing power and memory.`
-  **`Supports MQTT Versions`**: `Fully supports MQTT versions 3.1, 3.1.1, and 5.0.`
-  **`Cross-Platform`**: `Available for various operating systems including Windows, macOS, Linux, and Raspberry Pi.`
-  **`Secure Communication`**: `Supports TLS for encrypted connections, ensuring secure data transmission.`
-  **`Flexible Configuration`**: `Allows extensive configuration options to tailor the broker's behavior to your needs.`
- **`Scalability`**: `Suitable for both small devices and large-scale IoT deployments.`



### Installing Mosquitto On Ubuntu

```cmd
# Add the Mosquitto repository:
sudo apt-add-repository ppa:mosquitto-dev/mosquitto-ppa

# Update the package list
sudo apt-get update

# Install Mosquitto
sudo apt-get install mosquitto mosquitto-clients
```



### Starting the Mosquitto Broker

```cmd
mosquitto
```

> `This will start the broker with default settings, listening on port 1883.`



### Subscribing to a Topic

```cmd
mosquitto_sub -h localhost -t test/topic
```



### Publishing a Message

```cmd
mosquitto_pub -h localhost -t test/topic -m "Hello, MQTT...Spidey..."
```



### Configuration

- `Mosquitto can be configured via its configuration file, typically located at` **`/etc/mosquitto/mosquitto.conf`** `on Linux systems`

  ```ini
  ## /etc/mosquitto/mosquitto.conf
  
  # Default Listener Port
  listener 1883
  
  # TLS Configuration
  listener 8883
  cafile /etc/mosquitto/certs/ca.crt
  certfile /etc/mosquitto/certs/server.crt
  keyfile /etc/mosquitto/certs/server.key
  
  
  # Authentication and Authorization
  allow_anonymous false
  password_file /etc/mosquitto/passwd
  
  ```

  

### Securing Mosquitt

- `To secure Mosquitto, you can enable authentication and use TLS for encrypted connections.`

   **Enabling Authentication**

  ```bash
  sudo mosquitto_passwd -c /etc/mosquitto/passwd username
  ```

  **Edit the configuration file to use the password file**

  ```bash
  allow_anonymous false
  password_file /etc/mosquitto/passwd
  ```

  **Enabling TLS**

  - **`Generate the certificates`** `using OpenSSL or any other tool.`

  - **`Edit the configuration file`** `to use the certificates`

    ```ini
    ## /etc/mosquitto/mosquitto.conf
    
    listener 8883
    cafile /etc/mosquitto/certs/ca.crt
    certfile /etc/mosquitto/certs/server.crt
    keyfile /etc/mosquitto/certs/server.key
    ```

  

  ### Restart Mosquitto

  ```bash
  sudo systemctl restart mosquitto
  ```

  


### Advanced Features

- **`Bridging`**: `Connect multiple Mosquitto brokers to form a larger, more distributed network.`
- **`Persistence`**: `Store messages to disk to ensure they are not lost between broker restarts.`
- **`WebSockets`**: `Enable WebSocket support to allow MQTT over WebSocket connections.`

`Mosquitto is a versatile and powerful MQTT broker suitable for a wide range of applications, from small IoT projects to large-scale industrial systems. `

 

