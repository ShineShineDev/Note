### Current User Name In Linux
  - `id`  | `who` | `whoami` | `w | w -f`

    ```bash
    $ id
    uid=1000(spideyshine) gid=1000(spideyshine) groups=1000(spideyshine),4(adm),24(cdrom),27(sudo),30(dip),46(plugdev),120(lpadmin),131(lxd),132(sambashare)
    
    $ who
    spideyshine :1           2023-06-27 13:19 (:1)
    
    $ whoami
    spideyshine
    
    $ w
    23:26:28 up 10:10,  1 user,  load average: 1.95, 2.23, 2.76
    USER     TTY      FROM             LOGIN@   IDLE   JCPU   PCPU WHAT
    spideysh :1       :1               13:19   ?xdm?   2:49m  0.00s /usr/libexec/gdm-x-session --run-script env GNOME_SHELL_SESSION_MODE=ubuntu /us
    
    //See Current login user
    $ w -f
    23:27:38 up 10:11,  1 user,  load average: 2.16, 2.18, 2.70
    USER     TTY        LOGIN@   IDLE   JCPU   PCPU WHAT
    spideysh :1        13:19   ?xdm?   2:50m  0.00s /usr/libexec/gdm-x-session --run-script env GNOME_SHELL_SESSION_MODE=ubuntu /usr/bin/gnome-sess
    
    
    ```



###  Get Users Information In Linux

- `less /etc/passwd`

- `less /etc/shadow`

  ```bash
  $ less /etc/passwd
  root:x:0:0:root:/root:/bin/bash
  daemon:x:1:1:daemon:/usr/sbin:/usr/sbin/nologin
  bin:x:2:2:bin:/bin:/usr/sbin/nologin
  spideyshine:x:1000:1000:Spidey Shine,,,:/home/spideyshine:/bin/bash
  sssd:x:128:136:SSSD system user,,,:/var/lib/sss:/usr/sbin/nologin
  mongodb:x:129:65534::/home/mongodb:/usr/sbin/nologin
  redis:x:130:138::/var/lib/redis:/usr/sbin/nologin
  
  $ sudo less /etc/shadow
  root:!:19257:0:99999:7:::
  daemon:*:18667:0:99999:7:::
  bin:*:18667:0:99999:7:::
  sys:*:18667:0:99999:7:::
  spideyshine:$y$j9T$I031Zw/VTfgKPPssKqdXU/$wJivyuQ02AAxW9utTU2ZoVuIWKcNGlXDAKBBDJhAXA7:19479:0:99999:7:::
  systemd-coredump:!!:19257::::::
  mysql:!:19259::::::
  fwupd-refresh:*:19299:0:99999:7:::
  systemd-oom:*:19310:0:99999:7:::
  sssd:*:19310:0:99999:7:::
  mongodb:*:19495:0:99999:7:::
  redis:*:19528:0:99999:7:::
  ```



### OS Information In Linux

- `unam -a`

- `cat /etc/os-release`

  ```bash
  $ uname -a
  Linux spideyshine 5.19.0-45-generic #46~22.04.1-Ubuntu SMP PREEMPT_DYNAMIC Wed Jun 7 15:06:04 UTC 20 x86_64 x86_64 x86_64 GNU/Linux
  
  $ cat /etc/os-release
  PRETTY_NAME="Ubuntu 22.04.2 LTS"
  NAME="Ubuntu"
  VERSION_ID="22.04"
  VERSION="22.04.2 LTS (Jammy Jellyfish)"
  VERSION_CODENAME=jammy
  ID=ubuntu
  ID_LIKE=debian
  HOME_URL="https://www.ubuntu.com/"
  SUPPORT_URL="https://help.ubuntu.com/"
  BUG_REPORT_URL="https://bugs.launchpad.net/ubuntu/"
  PRIVACY_POLICY_URL="https://www.ubuntu.com/legal/terms-and-policies/privacy-policy"
  UBUNTU_CODENAME=jammy
  
  ```



### Network Information In Linux

- `ifconfig` : `get ip info`

- `ip add` : `get ip info(similar to ifconfig)`

- `ping` : `to check network connect`

- `tcpdump -i eth0 -c 3` : `see network traffic `

  ```bash
  $ ifconfig
  docker0: flags=4099<UP,BROADCAST,MULTICAST>  mtu 1500
  enp1s0: flags=4099<UP,BROADCAST,MULTICAST>  mtu 1500
  lo: flags=73<UP,LOOPBACK,RUNNING>  mtu 65536
  wlp2s0: flags=4163<UP,BROADCAST,RUNNING,MULTICAST>  mtu 1500
  
  
  $ ip add
  1: lo: <LOOPBACK,UP,LOWER_UP> mtu 65536 qdisc noqueue state UNKNOWN group default qlen 1000
  2: enp1s0: <NO-CARRIER,BROADCAST,MULTICAST,UP> mtu 1500 qdisc fq_codel state DOWN group default qlen 1000
  3: wlp2s0: <BROADCAST,MULTICAST,UP,LOWER_UP> mtu 1500 qdisc noqueue state UP group default qlen 1000
  4: docker0: <NO-CARRIER,BROADCAST,MULTICAST,UP> mtu 1500 qdisc noqueue state DOWN group default 
  
  $ ping www.google.com 
  PING www.google.com (74.125.200.147) 56(84) bytes of data.
  64 bytes from sa-in-f147.1e100.net (74.125.200.147): icmp_seq=3 ttl=56 time=628 ms
  --- www.google.com ping statistics ---
  11 packets transmitted, 8 received, 27.2727% packet loss, time 10067ms
  
  # ping with ip
  $ ping 192.168.100.93
  
  $sudo tcpdum #dump all from network
  tcpdump: verbose output suppressed, use -v[v]... for full protocol decode
  listening on wlp2s0, link-type EN10MB (Ethernet), snapshot length 262144 bytes
  00:09:41.936532 IP spideyshine.19000 > 192.168.100.202.50736: Flags [P.], seq 876164147:876164169, ack 3874833186, win 1910, options [nop,nop,TS val 567503358 ecr 140192881], length 22
  00:09:41.962260 IP spideyshine.46993 > _gateway.domain: 41617+ [1au] PTR? 202.100.168.192.in-addr.arpa. (57)
  00:09:42.060485 IP 43.224.86.12.https > spideyshine.37247: UDP, length 1250
  
  # dump specifi network
  $ sudo tcpdump -i enp1s0 -c 3
  tcpdump: verbose output suppressed, use -v[v]... for full protocol decode
  listening on enp1s0, link-type EN10MB (Ethernet), snapshot length 262144 bytes
  
  
  
  ```

  

  
