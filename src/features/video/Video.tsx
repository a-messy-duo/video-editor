import { FunctionComponent } from "react";
import { Text, View } from "react-native";

type VideoProps = {
  id: number;
};

const Video: FunctionComponent<VideoProps> = ({ id }) => {
  return (
    <View>
      <Text>Video {id}</Text>
    </View>
  );
};

export default Video;
