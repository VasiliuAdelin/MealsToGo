import React from "react";
import { Text } from "../../../components/typography/text.component";
import { SvgXml } from "react-native-svg";
import star from "../../../../assets/star";
import open from "../../../../assets/open";
import { Spacer } from "../../../components/spacer/spacer.component";
import {
  Icon,
  SectionEnd,
  Section,
  Info,
  RestaurantCard,
  Row,
  RestaurantCover,
  Address,
} from "./restaurant-info-card.styles";

export const RestaurantInfoCard = ({ restaurant = {} }) => {
  const {
    name = "Some Restaurant",
    icon = "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/lodging-71.png",
    photos = [
      "https://images.unsplash.com/photo-1552566626-52f8b828add9?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    ],
    address = "100 some random street",
    isOpenNow = true,
    rating = 4,
    isClosedTemporarily = true,
  } = restaurant;
  const ratingArray = Array.from(new Array(Math.floor(rating)));
  return (
    <RestaurantCard elevation={5}>
      <RestaurantCover key={name} source={{ uri: photos[0] }}></RestaurantCover>
      <Info>
        <Text>{name}</Text>
        <Section>
          <Row>
            {ratingArray.map(() => (
              <SvgXml xml={star} width={20} height={20} />
            ))}
          </Row>
          <SectionEnd>
            {isClosedTemporarily && (
              <Text variant="error" style={{ color: "red" }}>
                CLOSED TEMPORARILY
              </Text>
            )}
            <Spacer position="left" size="large">
              {isOpenNow && <SvgXml xml={open} width={20} height={20} />}
            </Spacer>
            <Spacer position="left" size="large">
              <Icon source={{ uri: icon }} />
            </Spacer>
          </SectionEnd>
        </Section>
        <Address>{address}</Address>
      </Info>
    </RestaurantCard>
  );
};
