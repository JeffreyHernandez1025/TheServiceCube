import { useState } from "react";
import { ImageSourcePropType } from "react-native";

export interface Data {
  source: ImageSourcePropType;
  name: string;
  price: string;
  points: string;
  giftCard: string;
}

export interface TabData {
  id: string;
  source: ImageSourcePropType;
  name: string;
  price: string;
  points: string;
  giftCard: string;
  status: boolean;
}
export interface TabData2 {
  id: string;
  source: string;
  name: string;
  price: string;
  points: string;
  giftCard: string;
  status: boolean;
}
export interface Tabs {
  id: string;
  tabName: string;
  status: boolean;
  data: Data[];
}

export default function useRewards() {
  // List Data
  const [tabInfo1, setTabInfo1] = useState<TabData[]>([
    {
      id: "1",
      source: require("../assets/images/starbucks.png"),
      name: "Starbucks Raffle",
      price: "$15",
      points: "300",
      giftCard: "$15 Starbucks Gift Card",
      status: true,
    },
    {
      id: "2",
      source: require("../assets/images/mcdonalds.png"),
      name: "Mcdonalds Raffle",
      price: "$15",
      points: "300",
      giftCard: "$15 Mcdonalds Gift Card",
      status: false,
    },
    {
      id: "3",
      source: require("../assets/images/bestbuy.png"),
      name: "Best Buy Raffle",
      price: "$15",
      points: "300",
      giftCard: "$15 Best Buy Gift Card",
      status: false,
    },
    {
      id: "4",
      source: require("../assets/images/target.png"),
      name: "Target Raffle",
      price: "$15",
      points: "300",
      giftCard: "$15 Target Gift Card",
      status: false,
    },
  ]);

  const [tabInfo2, setTabInfo2] = useState<TabData2[]>([
    {
      id: "1",
      source:
        "https://static.kinguin.net/cdn-cgi/image/w=1140,q=80,fit=scale-down,f=auto/media/category/g/g/ggplay_1573147519.jpg",
      name: "Google Play Raffle",
      price: "$15",
      points: "300",
      giftCard: "$15 Google Play Gift Card",
      status: true,
    },
    {
      id: "2",
      source:
        "https://images-na.ssl-images-amazon.com/images/G/01/gc/designs/livepreview/a_generic_white_10_us_noto_email_v2016_us-main._CB627448186_.png",
      name: "Amazon Raffle",
      price: "$15",
      points: "300",
      giftCard: "$15 Amazon Gift Card",
      status: false,
    },
    {
      id: "3",
      source:
        "https://www.paypalobjects.com/digitalassets/c/gifts/media/catalog/product/c/h/chilis_egift_image_82914_002_.png",
      name: "Chilis Raffle",
      price: "$15",
      points: "300",
      giftCard: "$15 Chilis Gift Card",
      status: false,
    },
    {
      id: "4",
      source:
        "https://d13080yemosbe2.cloudfront.net/Images/GiftCardFaceplates/External/XBOX_fp01.png",
      name: "Xbox Raffle",
      price: "$15",
      points: "300",
      giftCard: "$15 Xbox Gift Card",
      status: false,
    },
  ]);

  const [tabInfo3, setTaInfo3] = useState<TabData[]>([]);

  const [tabs, setTabs] = useState<Tabs[]>([
    {
      id: "1",
      tabName: "Raffles",
      status: true,
      data: tabInfo1,
    },
    {
      id: "2",
      tabName: "NFTs",
      status: false,
      data: tabInfo3,
    },
  ]);

  return {
    tabInfo1,
    tabInfo2,
    tabInfo3,
    tabs,
    setTabs
  };
}
