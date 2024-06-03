## Add a shell script to the GNOME favorites



###  lists all the files

```cmd
> ls
goland.sh
```



### Create  .desktop file

```cmd
> touch 
goland.desktop
```



### Add the following content to the  .desktop file

```ini
// goland.desktop

[Desktop Entry]
Version=1.0
Name=GoLand
Comment=Launch GoLand IDE
Exec=/full/path/to/goland.sh
Icon=/full/path/to/goland.png
Terminal=false
Type=Application
Categories=Development;IDE;
```



### Move to share/applications folder

- **`~/.local/share/applications/` ** `if you want it to be user-specific, `

- **`/usr/share/applications/`** `if you want it to be available system-wide.`

  **user-specific**

  ```cmd
  mkdir -p ~/.local/share/applications
  mv goland.desktop ~/.local/share/applications/
  ```

  **system-wide**

  ```cmd
  mv goland.desktop /usr/share/applications/
  ```

  

###  Make the .desktop file executable

```js
//user-specific
chmod +x ~/.local/share/applications/goland.desktop

//system-wide
chmod +x /usr/share/applications/goland.desktop
```





### Add to GNOME favorites

- `Open the GNOME Activities overview by pressing the` **`Super`** `key (Windows key).`
- `Search for "GoLand" (or the name you used in the Name field).`
- `Once you find it, right-click on it and select "Add to Favorites".`



### Example `.desktop` File

```ini
[Desktop Entry]
Version=1.0
Name=GoLand
Comment=Launch GoLand IDE
Exec=/home/user/scripts/goland.sh
Icon=/home/user/scripts/goland.png
Terminal=false
Type=Application
Categories=Development;IDE;
```



