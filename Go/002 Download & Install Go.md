### Download 

- `Download Link => https://go.dev/dl/`

### Install Go on Ubuntu

```cmd
$ ls
go1.22.3.linux-amd64.tar.gz
```

Extract the Archive

```cmd
$ sudo tar -xvf go1.22.3.linux-amd64.tar.gz -C /usr/local
```
Set Up Environment Variables

```cmd
$ nano ~/.profile
```

Add this lines in **.profile** file

```
export GOPATH=$HOME/go
export GOROOT=/usr/local/go
export PATH=$PATH:$GOPATH/bin:$GOROOT/bin
```

Apply Changes

```cmd
$ source ~/.profile
```

Verify Installation

```cmd
$ go version
go version go1.22.3 linux/amd64
```









