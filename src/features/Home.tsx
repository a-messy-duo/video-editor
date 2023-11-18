import { FunctionComponent } from 'react';
import { Text, View } from 'react-native';
import Gallery from './gallery/Gallery';
import styles from './home.scss';

const Home: FunctionComponent = () => {
  return (
    <View style={styles.container}>
      <Text>Home</Text>
      <Gallery />
    </View>
  );
};

export default Home;
