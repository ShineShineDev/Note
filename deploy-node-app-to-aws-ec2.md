## How To Deploy Nodejs App on AWS EC2



### Update the package list

```
sudo apt update
```



### Install Nginx:

```cmd
sudo apt install nginx
```



### Start Nginx

```
sudo systemctl start nginx
```



### Enable Nginx to start on boot

```cmd
sudo systemctl enable nginx
```



### Crate  Config file 

- Crate Config  file with  your domain in  `/etc/nginx/sites-available/` folder

```js
sudo nano /etc/nginx/sites-available/your-domain
```



### Config File

```
server {
    listen 80;
    server_name YOUR_DOMAIN_NAME_HERE

    location / {
        proxy_pass http://localhost:3000; # Assuming your Node.js app runs on port 3000
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }

    access_log /var/log/nginx/your-domain-access.log;
    error_log /var/log/nginx/your-domain-error.log;
}
```



### Create a symbolic link 

```js
sudo ln -s /etc/nginx/sites-available/YOUR_CONFIG_FILE /etc/nginx/sites-enabled/
```



### Test the Nginx configuration for syntax errors

```js
sudo nginx -t
```



###  Restart Nginx to apply the changes

```js
sudo systemctl restart nginx
```



### Server names hash bucket size Error

> `nginx: [emerg] could not build server_names_hash, you should increase server_names_hash_bucket_size: 64 nginx: configuration file /etc/nginx/nginx.conf test failed `

```
sudo nano /etc/nginx/nginx.conf
```

```js
http {
    server_names_hash_bucket_size 128;
}
```

```js
sudo nginx -t
sudo systemctl restart nginx
```



### Upload File from local to Ec2 

```
$ sudo scp -i spideyshineaws.pem /media/spideyshine/P1/me/ticket/code.zip ubuntu@ec2-3-27-191-151.ap-southeast-2.compute.amazonaws.com:/www/bus-ticket
```

 

### Install pm2 

> `PM2 is a process manager for the JavaScript runtime Node.js. In 2016, PM2 was ranked as the 82nd most popular JavaScript project on GitHub.`

```js
$ cd /
$ npm install pm2 -g
```



### See Running App

```
$ pm2 list
┌────┬───────────┬─────────────┬─────────┬─────────┬──────────┬────────┬──────┬───────────┬──────────┬──────────┬──────────┬──────────┐
│ id │ name      │ namespace   │ version │ mode    │ pid      │ uptime │ ↺    │ status    │ cpu      │ mem      │ user     │ watching │
└────┴───────────┴─────────────┴─────────┴─────────┴──────────┴────────┴──────┴───────────┴──────────┴──────────┴──────────┴──────────┘
```



## Start Node Project

- `Go to Project Root Folder`

```
$ pm2 start npm --name "your-app-name" -- run dev
```



### Stop Running App

```js
$ pm2 list
$ pm2 stop your-app-name
```



### Delete Proccess

```
$ pm2 list
$ pm2 delete your-app-name
```





### Add SSL

> To add SSL (Secure Socket Layer) to your Nginx configuration, you need to obtain an SSL certificate and private key, commonly provided by a Certificate Authority (CA) like Let's Encrypt.



### Install Certbot (if not already installed)

```
$ sudo apt install certbot
```



### Obtain SSL Certificate and Key

- `Run Certbot to obtain a free SSL certificate and follow the prompts`

  ```
  $ sudo certbot certonly --nginx
  Saving debug log to /var/log/letsencrypt/letsencrypt.log
  The requested nginx plugin does not appear to be installed
  ```

  

###  Update Nginx Configuration





