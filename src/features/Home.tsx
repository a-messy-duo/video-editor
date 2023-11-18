import { FunctionComponent } from "react";
import { Text, View } from "react-native";
import Gallery from "./gallery/Gallery";

const Home: FunctionComponent = () => {
  return (
    <View>
      <Text>Home</Text>
      <Gallery />
    </View>
  );
};

export default Home;
