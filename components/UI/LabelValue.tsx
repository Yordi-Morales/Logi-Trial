import { View, Text, StyleSheet, Linking, TouchableOpacity } from "react-native";

interface LabelValueProps {
  label: string;
  value: string;
  isLink?: boolean;
  link?: string;
}

const LabelValue = ({ label, value, isLink = false, link }: LabelValueProps) => {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      {isLink && link ? (
        <TouchableOpacity onPress={() => Linking.openURL(link)}>
          <Text style={[styles.value, styles.link]}>{value}</Text>
        </TouchableOpacity>
      ) : (
        <Text style={styles.value}>{value}</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 10,
  },
  label: {
    fontSize: 16,
    fontWeight: "600",
    color: "#333",
  },
  value: {
    fontSize: 16,
    color: "#666",
  },
  link: {
    color: "#007AFF",
    textDecorationLine: "underline",
  },
});

export default LabelValue;
