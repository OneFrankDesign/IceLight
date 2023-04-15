import { createStackNavigator } from "react-navigation-stack";
import SignUp from "../screens/Auth/signup/SignUp";
import SignIn from "../screens/Auth/signin/SignIn";

const AuthNavigator = createStackNavigator({
  SignUp: {
    screen: SignUp,
    navigationOptions: { headerShown: false },
  },
  SignIn: {
    screen: SignIn,
    navigationOptions: { headerShown: false },
  },
});

export default AuthNavigator;
