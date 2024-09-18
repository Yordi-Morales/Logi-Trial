import { useEffect, useState } from "react";
import { View, StyleSheet } from "react-native";
import AllUserList from "../components/AllUserList";
import { iUser } from "../interfaces/iUser";
import { fetchUsers } from "../services/user.service";
import SearchInput from "../components/UI/SearchInput";
import { NavigationProp } from "@react-navigation/native";
import Colors from "../constants/colors";

interface UserListProps {
  navigation: NavigationProp<any>;
}

const UserList = ({ navigation }: UserListProps) => {
  const [filteredUsers, setFilteredUsers] = useState<iUser[]>([]);

  const handleFetchUsers = async (query = "") => {
    const users = await fetchUsers(query);
    setFilteredUsers(users);
  };

  useEffect(() => {
    handleFetchUsers();
  }, []);

  const handleSearch = (text: string) => {
    handleFetchUsers(text);
  };

  return (
    <View style={styles.container}>
      <SearchInput
        onChangeText={handleSearch}
        placeholder="Buscar por nombre o usuario"
      />
      <AllUserList users={filteredUsers} navigation={navigation} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: Colors.background,
  },
});

export default UserList;
