import React, { useState, useEffect} from "react"
import { Dimensions, StyleSheet, Text, View } from "react-native"
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete"
import MapView, { Callout, Circle, Marker } from "react-native-maps"
import MapViewDirections from 'react-native-maps-directions';
import * as Location from 'expo-location';


export default function Explore() {

	useEffect(() => {
		const getPermissions = async () => {
		  let { status } = await Location.requestForegroundPermissionsAsync();
		  if (status !== 'granted') {
			setErrorMsg('Permission to access location was denied');
			return;
		  	}
		  let location = (await Location.getCurrentPositionAsync({})).coords;
		  setLocation(location);
		  console.log(location)
			
		};
		getPermissions();
	  }, []);
	  let text = 'Waiting..';
	  if (errorMsg) {
		text = errorMsg;
	  } else if (location) {
		text =  JSON.stringify(location);
	  }

	const [errorMsg, setErrorMsg] = React.useState(null);
	const[location, setLocation]  = useState({
		latitude: 48.858093,
		longitude: 2.294694
	})
	const [ region, setRegion ] = React.useState({
		latitude: 36.8364101,
		longitude: 10.142152,
		latitudeDelta: 0.0922,
		longitudeDelta: 0.0421
	})
  	const [ region2, setRegion2 ] = React.useState({
		latitude: 36.8363546,
		longitude: 10.1377858,
		latitudeDelta: 0.0922,
		longitudeDelta: 0.0421
	})
  	const [ region3, setRegion3 ] = React.useState({
		latitude: 36.83562,
		longitude: 10.2274756,
		latitudeDelta: 0.0922,
		longitudeDelta: 0.0421
	})
	const origin = {latitude: 37.3318456, longitude: -122.0296002};
	const destination = {latitude: 37.771707, longitude: -122.4053769};
	const GOOGLE_MAPS_APIKEY = '';	
	return (
		<View style={{ marginTop: 50, flex: 1 }}>
			<GooglePlacesAutocomplete
				placeholder="Search"
				fetchDetails={true}
				GooglePlacesSearchQuery={{
					rankby: "distance"
				}}
				onPress={(data, details = null) => {
					// 'details' is provided when fetchDetails = true
					console.log(data, details)
					setRegion({
						latitude: details.geometry.location.lat,
						longitude: details.geometry.location.lng,
						latitudeDelta: 0.0922,
						longitudeDelta: 0.0421
					})
				}}
				query={{
					key: "AIzaSyBYHIpWLHLB_Q4WZ0kqzZ7D5BgFERvMFpY",
					language: "en",
					components: "country:us",
					types: "establishment",
					radius: 30000,
					location: `${region.latitude}, ${region.longitude}`
				}}
				styles={{
					container: { flex: 0, position: "absolute", width: "100%", zIndex: 1 },
					listView: { backgroundColor: "white" }
				}}
				/>
				<MapView
				style={styles.map}
				initialRegion={{
					latitude: 36.8364101,
					longitude: 10.142152,
					latitudeDelta: 0.0922,
					longitudeDelta: 0.0421
				}}
				provider="google"
				>
				<Marker coordinate={{ latitude: region.latitude, longitude: region.longitude }} >
        			<Callout>
						<Text>Work Zone 1.0</Text>
					</Callout>
        		</Marker>
        		<Marker coordinate={{ latitude: region2.latitude, longitude: region2.longitude }} >
        			<Callout>
						<Text>MIND UP Co-working Space</Text>
					</Callout>
				</Marker>
				<Marker icon={require('../assets/images/google-maps-person-icon.jpg')} pinColor="red" coordinate={{ latitude: location.latitude, longitude: location.longitude }} >	
          			<Callout>
						<Text>my location</Text>
					</Callout>
				</Marker>
				<Marker coordinate={{ latitude: region3.latitude, longitude: region3.longitude }} >	
          			<Callout>
						<Text>ss</Text>
					</Callout>
				</Marker>
			
				<Circle center={region3} radius={1000} />
        		<Circle center={region} radius={1000} />
        		<Circle center={region2} radius={1000} />

			</MapView>
		</View>
	)}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff",
		alignItems: "center",
		justifyContent: "center" 
	},
	map: {
		width: Dimensions.get("window").width,
		height: Dimensions.get("window").height
	}
	})