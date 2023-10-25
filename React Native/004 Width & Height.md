### Width & Height

```js
import { StyleSheet,Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.card}>    
    	<View style={styles.header}></View>
		<View style={styles.body}></View>
		<View style={styles.fotter}></View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
      widht:500,
      height:500,
      backgroundColor:'blue',
  },
  header : {
      widht:'100%',
      height:50,
      backgroundColor:'red',
  },
  body : {
      widht:'100%',
      height:400,
      backgroundColor:'yellow',
  },
   fotter : {
      widht:'100%',
      height:50,
      backgroundColor:'pink',
  },
});
```

