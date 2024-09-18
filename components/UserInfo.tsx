import { View, Text, StyleSheet } from "react-native";
import { iUserInfoProps } from "../interfaces/iUserInfoProps";
import Colors from "../constants/colors";

const UserInfo = ({ name, username, email }: iUserInfoProps) => {
  return (
    <View style={styles.userContainer}>
      <View style={styles.container}>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.value}>{username}</Text>
        <Text style={styles.value}>{email}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  userContainer: {
    elevation: 5,
    backgroundColor: Colors.cardBackground,
    padding: 15,
    marginBottom: 10,
    borderRadius: 5,
  },
  name: {
    borderBottomColor: "white",
    borderBottomWidth: 1,
    fontWeight: "bold",
    fontSize: 16,
    color: Colors.title,
    marginBottom: 5,
  },
  container: {
    alignItems: "center",
    justifyContent: "center",
  },
  value: {
    fontWeight: "400",
    color: Colors.info,
    fontSize:11
  },
});

export default UserInfo;
