import React, { Component } from "react";
import { StyleSheet, Text, View, TextInput, Button } from "react-native";
import PlaceInput from "./src/components/PlaceInput/PlaceInput";
import PlaceList from "./src/components/PlaceList/PlaceList";
import placeImage from "./src/assets/beautiful-place.jpg";
import PlaceDetail from "./src/components/PlaceDetail/PlaceDetail";
import { connect } from "react-redux";
import {
  addPlace,
  deletePlace,
  selectPlace,
  deselectPlace
} from "./src/store/actions/index";
class App extends Component {
  // state = {
  //   places: [],
  //   selectedPlace: null
  // };

  placeAddedHandler = placeName => {
    // this.setState(prevState => {
    //   return {
    //     places: prevState.places.concat({
    //       key: Math.random(),
    //       name: placeName,
    //       //image: placeImage
    //       image: {
    //         uri:
    //           "https://cdn-ak.f.st-hatena.com/images/fotolife/k/kawaiikoippai/20190220/20190220101045.png"
    //       }
    //     })
    //   };
    // });
    this.props.onAddPlace(placeName);
  };

  // placeDeletedHandler = key => {
  //   this.setState(prevState => {
  //     return {
  //       places: prevState.places.filter(place => {
  //         return place.key !== key;
  //       })
  //     };
  //   });
  // };

  placeSelectedHandler = key => {
    // this.setState(prevState => {
    //   return {
    //     selectedPlace: prevState.places.find(place => {
    //       return place.key === key;
    //     })
    //   };
    // });
    this.props.onSelectPlace(key);
  };

  placeDeletedHandler = () => {
    // this.setState(prevState => {
    //   return {
    //     places: prevState.places.filter(place => {
    //       return place.key !== prevState.selectedPlace.key;
    //     }),
    //     selectedPlace: null
    //   };
    // });
    this.props.onDeletePlace();
  };

  modalClosedHandler = () => {
    // this.setState({
    //   selectedPlace: null
    // });
    this.props.onDeselectPlace();
  };
  render() {
    return (
      <View style={styles.container}>
        <PlaceDetail
          //selectedPlace={this.state.selectedPlace}
          selectedPlace={this.props.selectedPlace}
          onItemDeleted={this.placeDeletedHandler}
          onModalClosed={this.modalClosedHandler}
        />
        <PlaceInput onPlaceAdded={this.placeAddedHandler} />
        <PlaceList
          //places={this.state.places}
          places={this.props.places}
          onItemSelected={this.placeSelectedHandler}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "flex-start"
  }
});

const mapStateToProps = state => {
  return {
    places: state.places.places,
    selectedPlace: state.places.selectedPlace
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onAddPlace: name => dispatch(addPlace(name)),
    onDeletePlace: () => dispatch(deletePlace()),
    onSelectPlace: key => dispatch(selectPlace(key)),
    onDeselectPlace: () => dispatch(deselectPlace())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
