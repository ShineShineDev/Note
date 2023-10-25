## Docker Bridge Network

> `Docker ရဲ့ Bridge network က Host တစ်ခုအတွင်းမှာ အတူတူရှိနေတဲ့ container တွေအချင်းချင်းချိတ်ဆက်မှုရအောင် လုပ်ပေးတဲ့ Software Bridge တစ်ခုပါ။ Docker မှာာ Container တွေဆောက်တဲ့အခါ Bridge network က Default အနေနဲ့ ပါဝင်ပါတယ်။ `
>
> :warning: **`Bridge Networkမှာ Container တွေဟာ Host တူရင် အချင်းချင်းချိတ်လိုံရမယ်။ Host မတူတဲ့ Container တွေကိုတော့ ချိတ်ဆက်လို့ရမှာမဟုတ်ဘူး`**





### Show Created  Networks

```bash
$ sudo docker network ls
  NETWORK ID     NAME      DRIVER    SCOPE
  eae20f290750   bridge    bridge    local
  c9a59d2bb7a9   host      host      local
  e9bfc1671f87   none      null      local
```



### Create New Bridge Network (User Defined Network)

```bash
$ sudo docker network create shineshine
185688c61a54d6e13da77b888f0bed272ee0687baafadfcc176b83a17f7690f8

~$ sudo docker network ls
NETWORK ID     NAME         DRIVER    SCOPE
eae20f290750   bridge       bridge    local
c9a59d2bb7a9   host         host      local
e9bfc1671f87   none         null      local
185688c61a54   shineshine   bridge    local
```



### Run Containers

 ```bash
$ sudo docker images
REPOSITORY                                             TAG       IMAGE ID       CREATED        SIZE
spideyshine/apache-webserver-with-bootstarp-template   latest    05169e081adc   28 hours ago   147MB
nginx                                                  latest    f9c14fe76d50   2 weeks ago    143MB
httpd                                                  latest    d1676199e605   2 weeks ago    145MB
ubuntu                                                 latest    1f6ddc1b2547   2 weeks ago    77.8MB
alpine                                                 latest    5e2b554c1c45   4 weeks ago    7.33MB  

$ sudo docker run -d -p 8080:80 --name apache_web_ httpd 
fc34e0b91566bc28092c0427824b105c18d38da8225c131ece23dc2f76b36b6a
$ sudo docker run -d -p 8082:80 --name nginx_web nginx
903a68dd1c0eaf07484b216388a2758317acbb24db0866dc18bc8a09861548dd
$ sudo docker run -itd --name ubuntu ubuntu
bc1654e8550a8de030d68f4cf4850a3203189b01c3d4681510d54a4bf805788d
$ sudo docker run -itd --name alpine alpine
5c735621ef5a75974e2b58719f382d683067da1455594fe31b85cd99f0c13c5e

 ```



### See Running Container

```bash
$ sudo docker ps
CONTAINER ID   IMAGE     COMMAND                  CREATED         STATUS         PORTS                                   NAMES
bc1654e8550a   ubuntu    "/bin/bash"              4 minutes ago   Up 4 minutes                                           ubuntu
5c735621ef5a   alpine    "/bin/sh"                4 minutes ago   Up 4 minutes                                           alpine
903a68dd1c0e   nginx     "/docker-entrypoint.…"   9 minutes ago   Up 9 minutes   0.0.0.0:8082->80/tcp, :::8082->80/tcp   nginx_web
fc34e0b91566   httpd     "httpd-foreground"       9 minutes ago   Up 9 minutes   0.0.0.0:8080->80/tcp, :::8080->80/tcp   apache_web_
```



### Connect To Network

```bash
$ sudo docker network connect shineshine nginx_web
$ sudo docker network connect shineshine ubuntu
$ sudo docker network connect shineshine alpine 
```



### Ping 

```bash
#Ping from alpine to nginx_web 
$ sudo docker exec -ti alpine sh -c "ping -c 3 nginx_web"
PING nginx_web (172.19.0.2): 56 data bytes
64 bytes from 172.19.0.2: seq=0 ttl=64 time=0.166 ms
64 bytes from 172.19.0.2: seq=1 ttl=64 time=0.119 ms
64 bytes from 172.19.0.2: seq=2 ttl=64 time=0.190 ms
--- nginx_web ping statistics ---
3 packets transmitted, 3 packets received, 0% packet loss
round-trip min/avg/max = 0.119/0.158/0.190 ms

#Ping from alpine to ubuntu
spideyshine:~$ sudo docker exec -ti alpine sh -c "ping -c 3 ubuntu"
PING ubuntu (172.19.0.3): 56 data bytes
64 bytes from 172.19.0.3: seq=0 ttl=64 time=0.136 ms
64 bytes from 172.19.0.3: seq=1 ttl=64 time=0.170 ms
64 bytes from 172.19.0.3: seq=2 ttl=64 time=0.166 ms
--- ubuntu ping statistics ---
3 packets transmitted, 3 packets received, 0% packet loss
round-trip min/avg/max = 0.136/0.157/0.170 ms
```



### Disconnect

```bash
#Disconnect 
$ sudo docker network disconnect shineshine ubuntu

#ping 
$ sudo docker exec -ti alpine sh -c "ping -c 3 ubuntu"
ping: bad address 'ubuntu'
```



### Remove Network

```bash
$sudo docker network rm shineshine
Error response from daemon: error while removing network: network shineshine id 185688c61a54d6e13da77b888f0bed272ee0687baafadfcc176b83a17f7690f8 has active endpoints

#disconnect all connect container
$ sudo docker network disconnect shineshine alpine
$ sudo docker network disconnect shineshine nginx

#then,remove it
$sudo docker network rm shineshine
shineshine

$ sudo docker network ls
NETWORK ID     NAME      DRIVER    SCOPE
eae20f290750   bridge    bridge    local
c9a59d2bb7a9   host      host      local
e9bfc1671f87   none      null      local
```

