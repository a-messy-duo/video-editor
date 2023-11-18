import { FunctionComponent } from 'react';
import { View } from 'react-native';
import Gallery from './gallery/Gallery';
import styles from './home.scss';

const Home: FunctionComponent = () => {
  return (
    <View style={styles.container}>
      <Gallery />
    </View>
  );
};

export default Home;
