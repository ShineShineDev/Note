## Docker Host Network

> **Container မှာ host network ကိုသတ်မှတ်လိုက်ရင် container network နဲံ host network ဟာ isolation network မဖြစ်တော့ပဲ  တစ်ထပ်တည်းဖြစ်သွားကြောင့် port mapping မလိုအပ်တော့ပဲ တိုက်ရိုက်ချိတ်ဆက်လို့်ရပါလိမ်မည်**
>
> **Host Network ကို သုံးရင် host တစ်ခုမှာ container တစ်လုံးပဲ လုပ်ဆောင်လို့ရပါတော့မယ်**
>
> **Host network ဟာ Linux မှာပဲအလုပ်လုပ်ပါတယ်  **
>
> 



### Show Networks

```bash
$ sudo docker network ls
  NETWORK ID     NAME      DRIVER    SCOPE
  eae20f290750   bridge    bridge    local
  c9a59d2bb7a9   host      host      local
  e9bfc1671f87   none      null      local
```



### Run  Containers with Host Network

 ```bash
~$ sudo docker run --rm -d  --net=host nginx
5570c59689f25534ffcb29a0bdf7ccbcab1f611a23c7d51ba25d27ba8448ecb8
 ```



### See Running Container

```bash
$ sudo docker ps 
CONTAINER ID   IMAGE     COMMAND                  CREATED          STATUS          PORTS     NAMES
5570c59689f2   nginx     "/docker-entrypoint.…"   20 seconds ago   Up 18 seconds             cranky_dubinsky
```



###  Show  Routing table

```bash
$ ip route show
default via 192.168.100.1 dev wlp2s0 proto dhcp metric 600 
169.254.0.0/16 dev docker0 scope link metric 1000 linkdown 
172.17.0.0/16 dev docker0 proto kernel scope link src 172.17.0.1 linkdown 
192.168.100.0/24 dev wlp2s0 proto kernel scope link src 192.168.100.97 metric 600 
```



### Browse without port binding

**http://localhost/**  



