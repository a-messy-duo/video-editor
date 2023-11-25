import { FunctionComponent, useState } from 'react';
import { Button, View } from 'react-native';
import VideoPicker from './VideoPicker';
import * as imagePicker from 'expo-image-picker';
import { NavigationProp } from '../stackNavigation/types';
import { useNavigation } from '@react-navigation/native';

const Gallery: FunctionComponent = () => {
  const navigation = useNavigation<NavigationProp>();
  const [openPicker, setOpenPicker] = useState(true);

  const handleVideoPickerResult = (result: imagePicker.ImagePickerResult) => {
    // TODO: result 값을 활용해 편집 시도
    setOpenPicker(false);
    if (!result.assets || !result.assets[0].uri) return;
    navigation.navigate('Edit', { videoUri: result.assets[0].uri });
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
