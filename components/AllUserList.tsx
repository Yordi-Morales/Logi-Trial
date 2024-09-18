import { View, FlatList, StyleSheet, TouchableOpacity } from "react-native";
import { iUser } from "../interfaces/iUser";
import { iAllUserListProps } from "../interfaces/iAllUserListProps";
import UserInfo from "../components/UserInfo";
import Colors from "../constants/colors";

const AllUserList = (props: iAllUserListProps) => {
  const { navigation } = props;

  const renderUser = ({ item }: { item: iUser }) => (
    <TouchableOpacity
      onPress={() => navigation.navigate("UserDetail", { userId: item.id })}
    >
      <UserInfo name={item.name} username={item.username} email={item.email} />
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={props.users}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderUser}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default AllUserList;
