import styled from "styled-components/native";
import { Card } from "react-native-paper";
import { Text } from "../../../components/typography/text.component";

export const Icon = styled.Image`
  width: 15px;
  height: 15px;
`;

export const SectionEnd = styled.View`
  justify-content: flex-end;
  flex: 1;
  flex-direction: row;
`;

export const RestaurantCard = styled(Card)`
  background-color: ${(props) => props.theme.colors.bg.primary};
`;

export const Info = styled.View`
  padding: ${(props) => props.theme.space[3]};
`;

export const Section = styled.View`
  align-items: center;
  flex-direction: row;
`;

export const Row = styled.View`
  flex-direction: row;
  padding-top: ${(props) => props.theme.space[1]}
  padding-bottom: ${(props) => props.theme.space[1]}
`;

export const RestaurantCover = styled(Card.Cover)`
  padding: ${(props) => props.theme.space[3]};
  background-color: ${(props) => props.theme.colors.bg.primary};
`;

export const Address = styled(Text)`
  font-family: ${(props) => props.theme.fonts.body};
  font-size: ${(props) => props.theme.fontSizes.caption};
  color: ${(props) => props.theme.colors.text.primary};
`;
