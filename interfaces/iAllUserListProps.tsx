import { iUser } from "./iUser";
import { NavigationProp } from "@react-navigation/native";

export interface iAllUserListProps {
  users: iUser[];
  navigation: NavigationProp<any>;
}
