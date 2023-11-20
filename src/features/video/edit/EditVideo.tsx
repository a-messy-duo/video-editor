import { FunctionComponent, useRef, useState } from 'react';
import { Button, Text, View } from 'react-native';
import styles from './editVideo.scss';
import { EditScreenProps } from '../../stackNavigation/types';
import { Video, ResizeMode, AVPlaybackStatus } from 'expo-av';

const EditVideo: FunctionComponent<EditScreenProps> = ({ route }) => {
  const videoUri = route.params?.videoUri || '';

  const video = useRef<Video>(null);
  const [status, setStatus] = useState<AVPlaybackStatus>(
    {} as AVPlaybackStatus,
  );

  return (
    <View style={styles.container}>
      <Text>Edit Video</Text>
      <Video
        ref={video}
        style={styles.video}
        source={{
          uri: videoUri,
        }}
        useNativeControls
        resizeMode={ResizeMode.CONTAIN}
        onPlaybackStatusUpdate={setStatus}
      />
      {status.isLoaded ? (
        <Button
          title={status.isPlaying ? 'Pause' : 'Play'}
          onPress={() =>
            status.isPlaying
              ? video.current?.pauseAsync()
              : video.current?.playAsync()
          }
        />
      ) : null}
    </View>
  );
};

export default EditVideo;
