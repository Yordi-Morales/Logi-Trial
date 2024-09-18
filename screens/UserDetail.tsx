import { useEffect, useState } from "react";
import {
  View,
  StyleSheet,
  ScrollView,
  Text,
  ActivityIndicator,
} from "react-native";
import { fetchUserDetails } from "../services/user.service";
import { iAllUserInfo } from "../interfaces/iAllUserInfo";
import LabelValue from "../components/UI/LabelValue";
import Colors from "../constants/colors";

const UserDetail = ({ route }: any) => {
  const { userId } = route.params;

  const [user, setUser] = useState<iAllUserInfo | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const getUserDetails = async () => {
      try {
        const userDetails = await fetchUserDetails(userId);
        setUser(userDetails);
        setLoading(false);
      } catch (err) {
        console.error("Error fetching user details:", err);
        setError("Error fetching user details");
        setLoading(false);
      }
    };

    getUserDetails();
  }, [userId]);

  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#007AFF" />
        <Text style={styles.loadingText}>Cargando...</Text>
      </View>
    );
  }

  if (error) {
    return (
      <View style={styles.container}>
        <Text style={styles.errorText}>{error}</Text>
      </View>
    );
  }

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {user ? (
        <>
          <View style={styles.innerContainer}>
            <Text style={styles.sectionTitle}>Información General</Text>
            <LabelValue label="Nombre" value={user.name} />
            <LabelValue label="Username" value={user.username} />
            <LabelValue label="Email" value={user.email} />
            <LabelValue label="Teléfono" value={user.phone} />
            <LabelValue
              label="Sitio web"
              value={`${user.website}`}
              isLink={true}
              link={`${user.website}`}
            />
            <Text style={styles.sectionTitle}>Dirección</Text>
            <LabelValue label="Calle" value={user.address.street} />
            <LabelValue label="Suite" value={user.address.suite} />
            <LabelValue label="Ciudad" value={user.address.city} />
            <LabelValue label="Zipcode" value={user.address.zipcode} />
            <LabelValue
              label="Ubicación"
              value={`${user.address.geo.lat}, ${user.address.geo.lng}`}
              isLink={true}
              link={`https://www.google.com/maps/search/?api=1&query=${user.address.geo.lat},${user.address.geo.lng}`}
            />

            <Text style={styles.sectionTitle}>Compañía</Text>
            <LabelValue label="Nombre" value={user.company.name} />
            <LabelValue label="Eslogan" value={user.company.catchPhrase} />
            <LabelValue label="BS" value={user.company.bs} />
          </View>
        </>
      ) : (
        <Text style={styles.noDataText}>
          No se encontraron detalles del usuario.
        </Text>
      )}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: "white",
  },
  innerContainer: {
    flex: 1,
  },
  loadingContainer: {
    flex: 1,

    backgroundColor: "#f9f9f9",
  },
  loadingText: {
    marginTop: 10,
    fontSize: 16,
    color: "#666",
  },
  title: {
    textAlign:"center",
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    color: " Colors.background",
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginTop: 20,
    marginBottom: 10,
    color: Colors.background,
  },
  errorText: {
    fontSize: 18,
    color: "red",
  },
  noDataText: {
    fontSize: 18,
    color: "#666",
  },
});

export default UserDetail;
