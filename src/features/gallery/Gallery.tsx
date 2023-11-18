import { FunctionComponent, useState } from 'react';
import { Button, View } from 'react-native';
import VideoPicker from './VideoPicker';
import * as imagePicker from 'expo-image-picker';

const Gallery: FunctionComponent = () => {
  const [openPicker, setOpenPicker] = useState(true);

  const handleVideoPickerResult = (result: imagePicker.ImagePickerResult) => {
    // TODO: result 값을 활용해 편집 시도
    console.log(result);
    setOpenPicker(false);
  };

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button
        title="Pick an image from camera roll"
        onPress={() => setOpenPicker(true)}
      />
      {openPicker && <VideoPicker onResult={handleVideoPickerResult} />}
    </View>
  );
};

export default Gallery;
