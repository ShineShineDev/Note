## Nginx Reverse Proxy

- `A reverse proxy is a server that sits between clients and backend servers.`
-  `When clients send requests to the reverse proxy, it forwards those requests to the appropriate backend server, retrieves the response, and then sends it back to the client.`
- `Nginx is a popular web server and reverse proxy server. Setting up Nginx as a reverse proxy involves configuring it to listen for incoming requests, determine where to forward those requests based on predefined rules (usually based on the requested URL or other headers), and then proxying the requests to the appropriate backend server.`



###  Install Nginx  on  debian-based system

- `If you don't have Nginx installed, you can install it using your package manager. For example, on a Debian-based system:`

  ```bash
  sudo apt update
  sudo apt install nginx
  ```




### Configure Reverse Proxy

- `Nginx configuration files for each site should be created in`  **`/etc/nginx/sites-available/`.**

  ```bash
  sudo nano /etc/nginx/sites-available/reverse_proxy.conf
  ```

- `Inside the configuration file, add the following configuration block to define your reverse proxy setup:`

  ```bash
  server {
      listen 80;
      server_name test-nginx-reverse-proxy.com;
  
      location / {
          proxy_pass http://localhost:9000/; # Node App Running on port 9000
          proxy_set_header Host $host;
          proxy_set_header X-Real-IP $remote_addr;
          proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
          proxy_set_header X-Forwarded-Proto $scheme;
      }
  }
  ```




### **Enable the Site Configuration**:

- `Once you've created the configuration file, create a symbolic link to enable it:`

  ```bash
  sudo ln -s /etc/nginx/sites-available/reverse_proxy.conf /etc/nginx/sites-enabled/
  ```





### Edit hosts file

- `If you want to test your virtual host configuration locally without updating DNS settings, you can modify your hosts file on your computer. This allows you to map domain names to IP addresses locally.`

  ```bash
  sudo nano /etc/hosts
  ```

  **`Add Domain Entries`**

  - `At the end of the file, add lines to map your local IP address (usually 127.0.0.1) to your domain names. For example:`

    ```ini
    127.0.0.1 test-nginx-reverse-proxy.com
    127.0.0.1 www.test-nginx-reverse-proxy.com
    
    127.0.0.1 site1.com
    127.0.0.1 www.site1.com
    
    127.0.0.1 site2.com
    127.0.0.1 www.site2.com
    ```

  - **`Test Your Configuration`**

    ```bash
    sudo systemctl restart nginx
    ```



### Test Nginx Configuration

- `Test the configuration to make sure there are no syntax errors`

  ```sh
  sudo nginx -t
  ```



### Restart Nginx

- `Restart Nginx to apply the changes`

  ```sh
  sudo systemctl restart nginx
  ```


> http://test-nginx-reverse-proxy.com/
