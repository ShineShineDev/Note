


## Install Java on Ubuntu



### Download JDK

- https://jdk.java.net/java-se-ri/11-MR2

  

### Copy File 

- `Copy downloaded jdk zip file to ` **`/usr/lib/java `**  `folder`

```bash
#JDK 11 Version
ss@ss:/usr/lib/java$ cp ~/Downloads/openjdk-11.0.0.1_linux-x64_bin.tar.gz ./
#JDK 16 Version
ss@ss:/usr/lib/java$ cp ~/Downloads/openjdk-16+36_linux-x64_bin.tar.gz ./ 
```



### Extract File

```bash
#JDK 16 Version
ss@ss:/usr/lib/java$ sudo tar -xvzf  openjdk-16+36_linux-x64_bin.tar.gz 
#JDK 11 Version
ss@ss:/usr/lib/java$ sudo tar -xvzf  openjdk-11.0.0.1_linux-x64_bin.tar.gz
```



### Add path in .bashrc file

```bash
#home/username/.bashrc
old_path=$PATH

JAVA11=/usr/lib/java/jdk-11.0.0.1/bin
JAVA16=/usr/lib/java/jdk-16/bin

alias j11="export PATH=$JAVA11:$old_path"
alias j16="export PATH=$JAVA16:$old_path"

export PATH=$JAVA11:$PATH
```



### Change Java Version

```bash
$ java -version
openjdk version "11.0.0.1" 2023-05-09

#Change Version
spideyshine:java$ j16

spideyshine:java$ java -version
openjdk version "16" 2021-03-16
```





### First Program

- `Let's create our first Java file, called Main.java`

- `Copy code into file`

  ```java
  //Main.java
  public class Main {
    public static void main(String[] args) {
      System.out.println("Hello World");
    }
  }
  ```
  
  

### Compile to Byte Code

```
$ javac Main.java
```



### Run

```
$ java Main
```



### Run Without Compile(Only Single File)

```java
$ java Main.java
```

