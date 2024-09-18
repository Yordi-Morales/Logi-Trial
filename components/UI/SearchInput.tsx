import { TextInput, StyleSheet } from "react-native";
import { iTextInputProps } from "../../interfaces/iSearchInputProps";
import Colors from "../../constants/colors";

const SearchInput = (props: iTextInputProps) => {
  return (
    <TextInput
      style={styles.searchInput}
      onChangeText={props.onChangeText}
      placeholder={props.placeholder || "Buscar..."}
    />
  );
};

const styles = StyleSheet.create({
  searchInput: {
    height: 40,
    borderColor: Colors.inputBorder,
    color: Colors.inputText,
    borderWidth: 1,
    marginTop: 20,
    textAlign: "center",
    marginBottom: 20,
    fontWeight: "bold",
    paddingHorizontal: 10,
    borderRadius: 5,
    backgroundColor: "white",
  },
});

export default SearchInput;
