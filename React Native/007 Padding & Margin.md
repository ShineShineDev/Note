### Margin & Padding

```react
import { StyleSheet,Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.card}>
          <Text> Post One </Text>
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card : {    
    margin : 30,
    marginHorizontal : 39,
    marginVertical : 20,
    marginEnd : 39,
    marginLeft : 20,
    padding : 20,
    paddingHorizontal : 49,
    paddingVertical : 50,
    paddingEnd : 39,
    paddingRight : 20,
    
    elevation : 1,
    width : 300,
    height :300,
    borderRadius : 10 ,
  },
});

```

