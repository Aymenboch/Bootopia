import React, { useState, useEffect } from "react";
import {
  Button,
  TouchableHighlight,
  Dimensions,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import MapView, { Callout, Circle, Marker } from "react-native-maps";
import MapViewDirections from "react-native-maps-directions";
import * as Location from "expo-location";
import { getDistance, getPreciseDistance } from "geolib";

export default function Explore() {
  useEffect(() => {
    const getPermissions = async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        setErrorMsg("Permission to access location was denied");
        return;
      }
      let location = (await Location.getCurrentPositionAsync({})).coords;
      setLocation(location);
      console.log(location);
    };
    getPermissions();
  }, []);
  let text = "Waiting..";
  if (errorMsg) {
    text = errorMsg;
  } else if (location) {
    text = JSON.stringify(location);
  }

  const { width, height } = Dimensions.get("window");
  const ASPECT_RATIO = width / height;
  const LATITUDE_DELTA = 0.02;
  const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;
  const [errorMsg, setErrorMsg] = React.useState(null);
  const [location, setLocation] = useState({
    latitude: 48.858093,
    longitude: 2.294694,
  });
  const [choosedLoc, setChoosedLoc] = React.useState({
    latitude: 36.8364101,
    longitude: 10.142152,
    latitudeDelta: 0.0122,
    longitudeDelta: 0.0091,
  });
  const [region, setRegion] = React.useState({
    latitude: 36.8364101,
    longitude: 10.142152,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  });
  const [region2, setRegion2] = React.useState({
    latitude: 36.8363546,
    longitude: 10.1377858,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  });
  const [region3, setRegion3] = React.useState({
    latitude: 36.83562,
    longitude: 10.2274756,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  });

  const origin = { latitude: 36.8363546, longitude: 10.1377858 };
  const destination = { latitude: 36.83562, longitude: 10.2274756 };
  const GOOGLE_MAPS_APIKEY = "";
  const origin2 = { latitude: region2.latitude, longitude: region2.longitude };
  const destination1 = {
    latitude: region.latitude,
    longitude: region.longitude,
  };
  const destination2 = {
    latitude: region3.latitude,
    longitude: region3.longitude,
  };
  const [showDirections, setShowDirections] = useState(false);
  const handleBestRoutePress = () => {
    setShowDirections(true);
  };
  const [nearestNeighborPath, setNearestNeighborPath] = useState([]);
  function calculateDistance(lat1, lon1, lat2, lon2) {
    const deg2rad = (degrees) => {
      return degrees * (Math.PI / 180);
    };

    const R = 6371; // Radius of the Earth in kilometers

    const dLat = deg2rad(lat2 - lat1);
    const dLon = deg2rad(lon2 - lon1);

    const a =
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos(deg2rad(lat1)) *
        Math.cos(deg2rad(lat2)) *
        Math.sin(dLon / 2) *
        Math.sin(dLon / 2);

    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    const distance = R * c;

    return distance;
  }
  useEffect(() => {
    const places = [
      {
        name: "your location",
        latitude: location.latitude,
        longitude: location.longitude,
      },
      { name: "ss", latitude: region3.latitude, longitude: region3.longitude },
      {
        name: "work zone",
        latitude: region2.latitude,
        longitude: region2.latitude,
      },
      {
        name: "mind up",
        latitude: region.latitude,
        longitude: region.latitude,
      },
    ];

    if (places.length <= 1) {
      console.log("Not enough places to visit.");
      return;
    }

    const visited = [];
    const remaining = [...places];

    visited.push(remaining.shift());

    while (remaining.length > 0) {
      let minDistance = Infinity;
      let nearestPlace;

      for (let i = 0; i < remaining.length; i++) {
        const currentPlace = remaining[i];
        const lastVisitedPlace = visited[visited.length - 1];

        const distance = calculateDistance(
          lastVisitedPlace.latitude,
          lastVisitedPlace.longitude,
          currentPlace.latitude,
          currentPlace.longitude
        );

        if (distance < minDistance) {
          minDistance = distance;
          nearestPlace = currentPlace;
        }
      }

      visited.push(nearestPlace);
      remaining.splice(remaining.indexOf(nearestPlace), 1);
    }
    setNearestNeighborPath(visited);
    console.log("Nearest Neighbor Path:");
    visited.forEach((place) => {
      console.log(place.name);
    });
  }, []);
  const [choosedLocName, setChoosedLocName] = React.useState("");
  return (
    <View style={{ marginTop: 50, flex: 1 }}>
      <GooglePlacesAutocomplete
        placeholder="Search"
        fetchDetails={true}
        GooglePlacesSearchQuery={{
          rankby: "distance",
        }}
        onPress={(data, details = null) => {
          // 'details' is provided when fetchDetails = true
          console.log(data.description);
          setChoosedLocName(data.description);
          console.log(details);
          setChoosedLoc({
            latitude: details.geometry.location.lat,
            longitude: details.geometry.location.lng,
            latitudeDelta: 0.00922,
            longitudeDelta: 0.0121,
          });
        }}
        query={{
          key: GOOGLE_MAPS_APIKEY,
          language: "en",
          components: "country:tn",
          types: "establishment",
          radius: 30000,
          location: `${region.latitude}, ${region.longitude}`,
        }}
        styles={{
          container: {
            flex: 0,
            position: "absolute",
            width: "100%",
            zIndex: 1,
          },
          listView: { backgroundColor: "white" },
        }}
      />

      <MapView
        style={styles.map}
        initialRegion={{
          latitude: choosedLoc.latitude,
          longitude: choosedLoc.longitude,
          latitudeDelta: 0.422,
          longitudeDelta: 0.221,
        }}
        provider="google"
      >
        <MapViewDirections
          origin={location}
          destination={choosedLoc}
          apikey={GOOGLE_MAPS_APIKEY}
          strokeWidth={3}
          strokeColor="hotpink"
          optimizeWaypoints={true}
        />
        <MapViewDirections
          origin={location}
          destination={region3}
          apikey={GOOGLE_MAPS_APIKEY}
          strokeWidth={3}
          strokeColor="hotpink"
          optimizeWaypoints={true}
        />
        <MapViewDirections
          origin={region}
          destination={region2}
          apikey={GOOGLE_MAPS_APIKEY}
          strokeWidth={3}
          strokeColor="hotpink"
          optimizeWaypoints={true}
        />
        <MapViewDirections
          origin={location}
          destination={region3}
          apikey={GOOGLE_MAPS_APIKEY}
          strokeWidth={3}
          strokeColor="hotpink"
          optimizeWaypoints={true}
        />
        <MapViewDirections
          origin={region}
          destination={region2}
          apikey={GOOGLE_MAPS_APIKEY}
          strokeWidth={3}
          strokeColor="hotpink"
          optimizeWaypoints={true}
        />
        <MapViewDirections
          origin={region2}
          destination={location}
          apikey={GOOGLE_MAPS_APIKEY}
          strokeWidth={3}
          strokeColor="hotpink"
          optimizeWaypoints={true}
        />
        <MapViewDirections
          origin={region}
          destination={region3}
          apikey={GOOGLE_MAPS_APIKEY}
          strokeWidth={3}
          strokeColor="hotpink"
          optimizeWaypoints={true}
        />
        <MapViewDirections
          origin={region}
          destination={region3}
          apikey={GOOGLE_MAPS_APIKEY}
          strokeWidth={3}
          strokeColor="hotpink"
          optimizeWaypoints={true}
        />

        <Marker
          coordinate={{
            latitude: region.latitude,
            longitude: region.longitude,
          }}
        >
          <Callout>
            <Text>Work Zone 1.0</Text>
          </Callout>
        </Marker>
        <Marker
          coordinate={{
            latitude: region2.latitude,
            longitude: region2.longitude,
          }}
        >
          <Callout>
            <Text>MIND UP Co-working Space</Text>
          </Callout>
        </Marker>

        <Marker
          coordinate={{
            latitude: choosedLoc.latitude,
            longitude: choosedLoc.longitude,
          }}
        >
          <Callout>
            <Text>{choosedLocName}</Text>
          </Callout>
        </Marker>

        <Marker
          icon={require("../assets/images/google-maps-person-icon.jpg")}
          pinColor="red"
          coordinate={{
            latitude: location.latitude,
            longitude: location.longitude,
          }}
        >
          <Callout>
            <Text>my location</Text>
          </Callout>
        </Marker>
        <Marker
          coordinate={{
            latitude: region3.latitude,
            longitude: region3.longitude,
          }}
        >
          <Callout>
            <Text>ss</Text>
          </Callout>
        </Marker>

        <Circle center={region3} radius={1000} />
        <Circle center={region} radius={1000} />
        <Circle center={region2} radius={1000} />
      </MapView>

      <Button title="Best Route" onPress={handleBestRoutePress} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  map: {
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height,
  },
});
