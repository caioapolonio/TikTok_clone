import { NavigationContainer } from "@react-navigation/native";
import {Routes} from './src/routes'
import { StatusBar } from "expo-status-bar";

const App = () => {
  return ( 
    <NavigationContainer>
      <StatusBar backgroundColor={"transparent"} barStyle="light-content" translucent={true}/>
      <Routes/>
    </NavigationContainer>
   );
}
 
export default App;