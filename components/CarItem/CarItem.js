import React from "react";
import { Text, View, ImageBackground } from "react-native";
import StyledButton from "../StyledButton/StyledButton";
import styles from "./CarItemStyle";

const CarItem = (props) => {
  const { name, tagline, image, taglineCTA } = props.car;
  return (
    <View style={styles.carContainer}>
      <ImageBackground source={image} style={styles.image} />
      <View style={styles.titles}>
        <Text style={styles.title}>{name} </Text>
        <Text style={styles.subTitle}>
          {tagline}{' '}
          <Text style={styles.subTitleCTA}>{taglineCTA}</Text>
        </Text>
      </View>
      <View style={styles.buttonsContainer}>
        <StyledButton
          type="primary"
          content="Custom Order"
          onPress={() => {
            console.warn("Custom Order press");
          }}
        />
        <StyledButton
          type="secondary"
          content="Existing inventory"
          onPress={() => {
            console.warn("Existing inventory press");
          }}
        />
      </View>
    </View>
  );
};

export default CarItem;
