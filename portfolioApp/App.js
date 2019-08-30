import { createStackNavigator, createAppContainer } from "react-navigation";

import HomeScreen from "./screens/HomeScreen";
import Profile from "./screens/Profile";
import SPWebview from "./screens/SPWebview";

const MainNavigator = createStackNavigator({
  Home: { screen: HomeScreen },
  Profile: { screen: Profile },
  SPWebview: { screen: SPWebview }
});

const App = createAppContainer(MainNavigator);

export default App;
