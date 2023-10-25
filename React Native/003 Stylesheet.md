### Styleshee

- `To apply style to component ,we can use   StyleSheet from react-native  `

```js
import { StyleSheet,Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.card}>
      <Text style={styles.text}>Hello </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor:'blue',
  },
  text : {
   color:'red'
  }
});
```

