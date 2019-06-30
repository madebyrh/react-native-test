import React from "react";
import { View, StyleSheet, FlatList } from "react-native";
import ListItem from "../ListItem/ListItem";
const placeList = props => {
  //const placesOutput = props.places.map((place, i) => (

  //));
  return (
    <FlatList
      style={styles.listContainer}
      data={props.places}
      renderItem={info => (
        <ListItem
          placeName={info.item.name}
          placeImage={info.item.image}
          //onItemPressed={() => alert("Item predded -ID: " + i)}
          onItemPressed={() => props.onItemSelected(info.item.key)}
        />
      )}
    />
  );
};

const styles = StyleSheet.create({
  listContainer: {
    width: "100%"
  }
});

export default placeList;
