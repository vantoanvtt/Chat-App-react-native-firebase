import React, { useContext } from "react";
import {
  ActivityIndicator,
  View,
  StyleSheet,
  Dimensions,
  Platform,
} from "react-native";
import { Store } from "../../context/store";
import { DARK_GRAY,SEMI_TRANSPARENT } from "../../utility";

const { height, width } = Dimensions.get("window");

const Loader = () => {
    const {loaderValue} = useContext(Store);
    const { mapLoaderState } = loaderValue;
    const { loading } = mapLoaderState;
  
    return loading ? (
      <View style={styles.loaderContainer}>
        <View style={styles.indicator}>
          <ActivityIndicator
            size="large"
            animating={loading}
            color="#e0e0d5"
          />
        </View>
      </View>
    ) : null;
  };
  
  export default Loader;

  const styles = StyleSheet.create({
    loaderContainer: {
      zIndex: 1,
      elevation: 2,
      height,
      width,
      position: "absolute",
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: SEMI_TRANSPARENT,
    },
    indicator: {
      backgroundColor: DARK_GRAY,
      height: 44,
      width: 44,
      borderRadius: 22,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      alignContent: "center",
    },
  });
