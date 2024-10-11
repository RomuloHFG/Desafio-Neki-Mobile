import Routes from "@/routes/Routes";
import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "react-native";
import { Text, View } from "react-native";

export default function Index() {
  return (
    <>
  <StatusBar backgroundColor="#38A69D" barStyle="light-content"/>
   <Routes/>
   </>
  );
}
