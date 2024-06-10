##  Setting Up Virtual Hosts in Nginx

- `A Virtual Host (vhost) in Nginx allows you to host multiple websites on a single server. Each site can have its own domain name, root directory, and configuration. Here's a basic guide on how to set up virtual hosts in Nginx.`

  



###  Install Nginx  on  debian-based system

- `If you don't have Nginx installed, you can install it using your package manager. For example, on a Debian-based system:`

  ```bash
  sudo apt update
  sudo apt install nginx
  ```

  


### Create Directory for Your Sites

- `Create directories for the websites you want to host`

  ``` bash
  sudo mkdir -p /var/www/site1.com/html
  sudo mkdir -p /var/www/site2.com/html
  ```

  

### Set Permissions

- `Adjust the permissions so that the web server can access these directories:`

  ```sh
  sudo chown -R $USER:$USER /var/www/site1.com/html
  sudo chown -R $USER:$USER /var/www/site2.com/html
  sudo chmod -R 755 /var/www
  ```



### Create Demo Pages

- `Create a sample index.html file for each site:`

  ```sh
  echo "<html><head><title>Welcome to Site1</title></head><body><h1>Site1 is working!</h1></body></html>" | sudo tee /var/www/site1.com/html/index.html
  echo "<html><head><title>Welcome to Site2</title></head><body><h1>Site2 is working!</h1></body></html>" | sudo tee /var/www/site2.com/html/index.html
  ```

  

### Create Server Block Configuration Files

- `Nginx configuration files for each site should be created in`  **`/etc/nginx/sites-available/`.**

  ```sh
  > sudo nano /etc/nginx/sites-available/site1.com
  ```

  **Add the following configuration for site1.com**

  ```ini
  server {
      listen 80;
      server_name site1.com www.site1.com;
  
      root /var/www/site1.com/html;
      index index.html;
  
      location / {
          try_files $uri $uri/ =404;
      }
  }
  ```

  

  ```sh
  > sudo nano /etc/nginx/sites-available/site2.com
  ```

  **Add the following configuration for site1.com**

  ```ini
  server {
      listen 80;
      server_name site2.com www.site2.com;
  
      root /var/www/site2.com/html;
      index index.html;
  
      location / {
          try_files $uri $uri/ =404;
      }
  }
  ```

  

### Enable the Configuration Files

- `Link these configuration files to the ` **`sites-enabled`** ``directory`

  ```sh
  sudo ln -s /etc/nginx/sites-available/site1.com /etc/nginx/sites-enabled/
  sudo ln -s /etc/nginx/sites-available/site2.com /etc/nginx/sites-enabled/
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

  

### Edit hosts file

- `If you want to test your virtual host configuration locally without updating DNS settings, you can modify your hosts file on your computer. This allows you to map domain names to IP addresses locally.`

  ```bash
  sudo nano /etc/hosts
  ```
  
  **`Add Domain Entries`**
  
  - `At the end of the file, add lines to map your local IP address (usually 127.0.0.1) to your domain names. For example:`
  
    ```ini
    127.0.0.1 site1.com
    127.0.0.1 www.site1.com
    127.0.0.1 site2.com
    127.0.0.1 www.site2.com
    ```
  
  - **`Test Your Configuration`**
  
    ```bash
    sudo systemctl restart nginx
    ```



----

### Update DNS Settings on cloud

- `Updating DNS settings involves configuring your domain name to point to your web server's IP address. Here’s a step-by-step guide on how to update DNS settings, assuming you have a domain registered with a domain registrar like GoDaddy, Namecheap, or similar.`

​	**Step-by-Step Guide to Update DNS Settings**

- **`Log in to Your Domain Registrar's Account`** :   `Go to the website of your domain registrar and log in with your account credentials.`

- **`Find Your Domain Settings`** :  `Navigate to the section where your domains are listed. This might be labeled as "My Domains," "Domain Management," or something similar.`

- **`Select the Domain to Update`** : ` `Click on the domain name you want to configure. This will take you to the domain's settings page.`

- **`Access DNS Management`** :  `Look for an option like "DNS Management," "DNS Settings," "Manage DNS," or "Advanced DNS Settings." This section allows you to manage DNS records.`

- **`Edit A Record`** 

  - `The A record is what directs your domain to a specific IP address.`

    - `Find the A record entry in the DNS settings. It may be listed under "Host Records" or "DNS Records."`
    - `If there's already an A record for your domain, you can edit it. If not, you can add a new one.`

    `For example, if your server IP is 123.456.789.101 and your domain is example.com`:

    ```ini
    Type: A
    Host: @
    Points to: 123.456.789.101
    TTL: 600 (or the default value)
    ```

    `The "@" symbol in the "Host" field usually represents the root domain (example.com). You might also want to set up a www subdomain:`

    ```ini
    Type: A
    Host: www
    Points to: 123.456.789.101
    TTL: 600 (or the default value)
    ```


- **`Wait for DNS Propagation`**  : `DNS changes can take some time to propagate. This can range from a few minutes to up to 48 hours, but it’s typically faster. During this time, your new DNS settings will be distributed across the internet.`





  



















