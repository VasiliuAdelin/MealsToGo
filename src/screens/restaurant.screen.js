import React from "react";
import { SafeAreaView, StatusBar, StyleSheet, Text, View } from "react-native";
import { Searchbar } from "react-native-paper";
import { RestaurantInfoCard } from "../components/restaurant-info-card.component";
import styled from "styled-components/native";

const SearchContainer = styled.View`
  padding: 16px;
  background-color: red;
`;

const ListContainer = styled.View`
  flex: 1;
  padding: 16px;
  background-color: blue;
`;

const SafeArea = styled(SafeAreaView)`
  flex: 1;
  ${StatusBar.currentHeight &&
  `margin-top :  ${StatusBar.currentHeight}px`}//applying statusBar.currentHeight only if it is not 0
`;

export const RestaurantsScreen = () => (
  <SafeArea>
    <SearchContainer>
      <Searchbar />
    </SearchContainer>
    <ListContainer>
      <RestaurantInfoCard />
    </ListContainer>
  </SafeArea>
);
