import { FunctionComponent } from 'react';
import { Text, View } from 'react-native';
import Video from '../video/Video';

const Gallery: FunctionComponent = () => {
  return (
    <View>
      <Text>Gallery</Text>
      {[1, 2, 3, 4, 5].map((item) => (
        <Video key={item} id={item} />
      ))}
    </View>
  );
};

export default Gallery;
