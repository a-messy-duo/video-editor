import React, { FunctionComponent, useEffect, useState } from 'react';
import { Image, View } from 'react-native';
import * as imagePicker from 'expo-image-picker';

type VideoPickerProps = {
  onResult: (result: imagePicker.ImagePickerResult) => void;
};

const VideoPicker: FunctionComponent<VideoPickerProps> = ({ onResult }) => {
  const [image, setImage] = useState('');

  const pickImage = async () => {
    const result = await imagePicker.launchImageLibraryAsync({
      mediaTypes: imagePicker.MediaTypeOptions.Videos,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    onResult(result);

    // NOTE: 여기 값이 필요할지 고민 필요
    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };

  useEffect(() => {
    pickImage();
  }, []);

  return (
    <View>
      {/* FIXME: Video 태그로 변경해서 여기서 에딧할지 고민 필요 */}
      {image && (
        <Image source={{ uri: image }} style={{ width: 200, height: 200 }} />
      )}
    </View>
  );
};

export default VideoPicker;
