import { FunctionComponent } from 'react';
import { Text, View } from 'react-native';
import styles from './editVideo.scss';
import { EditScreenProps } from '../../stackNavigation/types';

const EditVideo: FunctionComponent<EditScreenProps> = ({ route }) => {
  const videoUri = route.params?.videoUri;
  console.log(videoUri);

  return (
    <View style={styles.container}>
      <Text>Edit Video</Text>
    </View>
  );
};

export default EditVideo;
