### Border

```js
import { StyleSheet,Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.card}>    
    	<View style={styles.header}></View>
		<View style={styles.body}></View>
		<View style={styles.fotter}></View>
        <Text style={styles.tx}>This Text</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
      widht:500,
      height:500,
      backgroundColor:'blue',
      borderWidht :  2, //all border width
      borderTopWidth : 2, //top border widht
      borderColor :'red' //all border color
      borderRadius : 5,
      elevation : 10 //shadow for andriod
  },
 tx:{
     fontSize :12,
     fontWeight:"bold" // or normal
     color: 'yellow'
 }
});
```

