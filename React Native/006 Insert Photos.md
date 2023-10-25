### Insert Photos

- `To Insert Photo ,we can use Image component from react-native  `

```js
import { StyleSheet,Image View } from 'react-native';

export default function App() {
  return (
    <View>    
      	//From Internet (use uri)
    	<Image source={{ uri : "https://img.com/photo") }} style={styles.imgOne} />
		//From local ( use require)
        <Image source={ require("./assets/images/urimg.png") style={ style.imgTwo } } 
    </View>
  );
}

const styles = StyleSheet.create({
  imgOne: {
      widht:200,
      height:200,
      resizeMode:"contain", //cover (resizeMode similar to background-size in css)
      backgroundColor : "red"
  }
  imgTwo : {
    widht:200,
      height:200,
      resizeMode:"contain", //cover (resizeMode similar to background-size in css)
      backgroundColor : "blue"
  }
});
```



View  Component (<View></View>)

TouchableOpcity & event

Using Icons

ScrollView(shwoVerticalScrollIndicator="false")

Run Andriod App as Webste(expo start -W --localhost)

