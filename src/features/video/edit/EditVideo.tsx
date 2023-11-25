import { FunctionComponent, useEffect, useRef, useState } from 'react';
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
  const [buttonStatus, setButtonStatus] = useState('Play');
  const [videoInfo, setVideoInfo] = useState({});
  console.log(videoInfo);
  const [willChangeRateValue, setWillChangeRateValue] = useState(1);

  useEffect(() => {
    if (!status.isLoaded) return;

    video.current?.getStatusAsync().then(function (result) {
      setVideoInfo(result);
    });
  }, [status.isLoaded]);

  useEffect(() => {
    if (!status.isLoaded) return;
    handleChangeRate();
  }, [willChangeRateValue]);

  const handlePlayButton = async () => {
    if (!status.isLoaded) return;
    // console.log(status, 'status');

    if (status.isPlaying) {
      video.current?.pauseAsync();
      setButtonStatus('Play');
      return;
    }
    if (!status.isPlaying) {
      video.current?.playAsync();
      setButtonStatus('Pause');
      return;
    }
  };

  const handleChangeRate = () => {
    const originMillis = videoInfo.durationMillis;
    if (originMillis <= 60000) return;
    console.log(Math.floor((60000 / originMillis) * 100) / 100, 'rateValue');
    const newMillis = Math.floor((60000 / originMillis) * 100) / 100;
    setWillChangeRateValue(newMillis);
    video.current?.setStatusAsync({ rate: newMillis });
    console.log(video.current);
  };

  return (
    <View style={styles.container}>
      <Video
        ref={video}
        style={styles.video}
        source={{
          uri: videoUri,
        }}
        useNativeControls
        resizeMode={ResizeMode.CONTAIN}
        onPlaybackStatusUpdate={setStatus}
        rate={willChangeRateValue}
      />
      <Text>{videoInfo.durationMillis}</Text>

      <Button title={buttonStatus} onPress={handlePlayButton} />
      <Button title="change rate" onPress={handleChangeRate} />
    </View>
  );
};

export default EditVideo;
