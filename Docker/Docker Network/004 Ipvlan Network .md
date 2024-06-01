## Docker Ipvlan Network

***



### Show Host Ip

```bash
$ ip route
default via 192.168.100.1 dev wlp2s0 proto dhcp metric 20600 
169.254.0.0/16 dev docker0 scope link metric 1000 linkdown 
172.17.0.0/16 dev docker0 proto kernel scope link src 172.17.0.1 linkdown 
192.168.100.0/24 dev wlp2s0 proto kernel scope link src 192.168.100.103 metric 600 
```



### Create ipvlan network

 ```bash
$sudo docker network create -d ipvlan --subnet=192.168.100.103/24 --gateway=192.168.100.1 -o ipvlan_mode=3 -o parent=wlp2s0 ipval_net

# docker network create -d ipvlan --subnet=<subnet> --gateway=<gateway> --subnet-ipv6=<subnet6> --gateway-ipv6=<gateway6> -o ipvlan_mode=l2 <network_name>
 ```



### Run Container with ipvlan network mode

```bash
$ sudo docker run --net=ipval_net -it  --name alpine_1 alpine 
/ # ip a
1: lo: <LOOPBACK,UP,LOWER_UP> mtu 65536 qdisc noqueue state UNKNOWN qlen 1000
    link/loopback 00:00:00:00:00:00 brd 00:00:00:00:00:00
    inet 127.0.0.1/8 scope host lo
       valid_lft forever preferred_lft forever
76: eth0@if3: <BROADCAST,MULTICAST,UP,LOWER_UP,M-DOWN> mtu 1500 qdisc noqueue state UNKNOWN 
    link/ether d0:53:49:e7:88:51 brd ff:ff:ff:ff:ff:ff
    inet 192.168.100.2/24 brd 192.168.100.255 scope global eth0
       valid_lft forever preferred_lft forever

$ sudo docker run --net=ipval_net -it  --name alpine_2 alpine 
/ # ip a
1: lo: <LOOPBACK,UP,LOWER_UP> mtu 65536 qdisc noqueue state UNKNOWN qlen 1000
    link/loopback 00:00:00:00:00:00 brd 00:00:00:00:00:00
    inet 127.0.0.1/8 scope host lo
       valid_lft forever preferred_lft forever
95: eth0@if3: <BROADCAST,MULTICAST,UP,LOWER_UP,M-DOWN> mtu 1500 qdisc noqueue state UNKNOWN 
    link/ether d0:53:49:e7:88:51 brd ff:ff:ff:ff:ff:ff
    inet 192.168.100.3/24 brd 192.168.100.255 scope global eth0
       valid_lft forever preferred_lft forever
/ # 
```



###  Ping 

```bash
#Ping from alpine_1 to alpine_2
$ sudo docker run --net=ipval_net -it  --name alpine_1 alpine 
/ # ping 192.168.100.3

#Ping from alpine_1 to alpine_2
$ sudo docker run --net=ipval_net -it  --name alpine_2 alpine 
/ # ping 192.168.100.2
```



