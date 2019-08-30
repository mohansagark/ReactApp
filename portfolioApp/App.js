import { createStackNavigator, createAppContainer } from "react-navigation";

import HomeScreen from "./screens/HomeScreen";
import Profile from "./screens/Profile";
import SPWebview from "./screens/SPWebview";
import ImageViewer from "./screens/ImageViewer";
import MapView from "./screens/MapView";
import Maps from "./screens/Maps";

const MainNavigator = createStackNavigator({
  Home: { screen: HomeScreen },
  Profile: { screen: Profile },
  SPWebview: { screen: SPWebview },
  ImageViewer: { screen: ImageViewer },
  MapView: { screen: MapView },
  Maps: { screen: Maps }
});

const App = createAppContainer(MainNavigator);

export default App;
