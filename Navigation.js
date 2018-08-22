
import { createStackNavigator } from "react-navigation";
import LogIn from './Login';
import Home from './HomeScreen'; 


export default AppNavigator = createStackNavigator({
    LogIn: { screen: LogIn },
    HomePage: { screen: Home},
});