import React from "react";
import { ImageSourcePropType } from "react-native";

export interface Data {
  id: string;
  info: string;
  opportunity: string;
  opportunity2: string;
  vb: string;
  uri: string;
  category: string;
  profile: ImageSourcePropType;
  des: string;
  url: string;
  email: string;
  contact: string;
  address: string;
}
export interface Data2 {
  id: string;
  info: string;
  opportunity: string;
  opportunity2: string;
  vb: string;
  uri: string;
  category: string;
  profile: string;
  des: string;
  url: string;
  email: string;
  contact: string;
  address: string;
}

export interface Row {
  id: string;
  label: string;
  data: any; //Data[] | { menuLabel: string }[];
  type: string;
}

export default function useOpportunities() {
  const [opportunities, setOpportunities] = React.useState<Data[]>([
    {
      id: "1",
      info: "Save Our Shores",
      opportunity: "Help clean up the beach!",
      opportunity2: "Help clean up the beach in Los Angeles!",
      vb: "Hour Block 1 hr",
      uri: "https://beaches.lacounty.gov/wp-content/uploads/2021/09/Redondo-Beach-BCB_5409-1920x1105.jpg",
      category: "Beach",
      profile: require("../assets/images/saveourshores.png"),
      des: "On the 21st of August, our team will need extra hands to clean the beach of LA in order to conserve the nature. Your help will begreatly appreciated.",
      url: "https://saveourshores.org/beachcleanups/",
      email: "alejandro@saveourbeach.org",
      contact: "(831) 462 5660",
      address: "123 Los Angeles Street, 90014",
    },
    {
      id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
      info: "Clean Trails",
      opportunity: "Help pick up trash in your streets!",
      opportunity2: "Help clean up the streets of Los Angeles!",
      vb: "Hour Block 1 hr",
      uri: "https://img.hoodline.com/uploads/story/image/569140/photo_-_volunteers_help_CleanMission_spruce_up_outside_Zoe_Bikini_18th_and_Mission_8-2019.jpeg",
      category: "Trash",
      profile: require("../assets/images/cleantrails.jpeg"),
      des: "On the 21st of August, our team will need extra hands to clean the streets of LA in order to conserve the hygiene. Your help will be greatly appreciated.",
      url: "https://www.cleantrails.org/",
      email: "info@cleantrails.org",
      contact: "(720) 985 8600",
      address: "123 Los Angeles Street, 90014",
    },
    {
      id: "58694a0f-3da1-471f-bd96-145571e29d72",
      info: "CalOSBA",
      opportunity: "Help out your local businesses!",
      opportunity2: "Help out the local business of Los Angeles!",
      vb: "Hour Block 1 hr",
      uri: "https://mcdonaldpaper.com/media/wysiwyg/blog/blog_21-10-20-2.jpg",
      category: "Business",
      profile: require("../assets/images/calosba.png"),
      des: "On the 21st of August, our team will need extra help at the local restaurants in order to keep our business strong. Your help will be greatly appreciated.",
      url: "https://calosba.ca.gov/",
      email: "CalOSBA@gmail.org",
      contact: "(877) 345 4633",
      address: "123 Los Angeles Street, 90014",
    },
    {
      id: "4",
      info: "California State Parks",
      opportunity: "Help clean up your local parks!",
      opportunity2: "Help clean up the parks of Los Angeles!",
      vb: "Hour Block 1 hr",
      uri: "https://media.istockphoto.com/photos/picking-up-a-plastic-bottle-during-park-cleanup-picture-id1161008212?k=20&m=1161008212&s=612x612&w=0&h=ll4BiuqmO003r2LQ66PKurXnA1rD_gbdR1wQ7K-VKOs=",
      category: "Trash",
      profile: require("../assets/images/parksca.png"),
      des: "On the 21st of August, our team will need extra hands to clean the parks in LA in order to conserve the nature. Your help will be greatly appreciated.",
      url: "https://www.parks.ca.gov/",
      email: "iso@parks.ca.gov",
      contact: "(916) 653 7423",
      address: "123 Los Angeles Street, 90014",
    },
    {
      id: "5",
      info: "National Gardening Club",
      opportunity: "Help keep the Earth green!",
      opportunity2: "Come and garden with the local gardening club!",
      vb: "Hour Block 1 hr",
      uri: "https://www.popsci.com/uploads/2022/04/21/garden.jpg?auto=webp&width=1440&height=1080",
      category: "Earth",
      profile: require("../assets/images/ngc.png"),
      des: "On the 21st of August, our team will be gardening at the local garden in LA in order to expand the nature of LA. Your help will be greatly appreciated.",
      url: "https://gardenclub.org/",
      email: "headquarters@gardenclub.org",
      contact: "(314) 776 7574",
      address: "123 Los Angeles Street, 90014",
    },
    {
      id: "6",
      info: "Woodcrest Elementary School",
      opportunity: "Help the youth in this school!",
      opportunity2: "Help the youth learn in Los Angeles!",
      vb: "Hour Block 1 hr",
      uri: "https://s3-media0.fl.yelpcdn.com/bphoto/SyOO6VEokLNa9WKLvbV0lw/348s.jpg",
      category: "School",
      profile: require("../assets/images/wes.png"),
      des: "On the 21st of August, our team will need extra hands to teach the youth in LA. Your help will be greatly appreciated.",
      url: "https://woodcrest-lausd-ca.schoolloop.com/",
      email: "woodcrest@school.org",
      contact: "(323) 756 1371",
      address: "123 Los Angeles Street, 90014",
    },
  ]);

  const [opportunities2, setOpportunities2] = React.useState<Data2[]>([
    {
      id: "1",
      info: "The Midnight Mission",
      opportunity: "Help out the homeless people!",
      opportunity2: "Help clean up the beach in Los Angeles!",
      vb: "Hour Block 1 hr",
      uri: "https://ca-times.brightspotcdn.com/dims4/default/369db9f/2147483647/strip/true/crop/6720x4479+0+1/resize/2000x1333!/quality/90/?url=https%3A%2F%2Fcalifornia-times-brightspot.s3.amazonaws.com%2F1b%2F77%2F9cd05cf64aa2bbc05b9b48b2a3c4%2Fla-photos-1staff-595996-me-0818-lopez-homeless-service-center-gem-001.jpg",
      category: "Homeless",
      profile:
        "https://res.cloudinary.com/crunchbase-production/image/upload/c_lpad,h_256,w_256,f_auto,q_auto:eco,dpr_1/jj50fxnrhizfctklih5n",
      des: "On the 21st of August, our team will need extra hands to clean the beach of LA in order to conserve the nature. Your help will begreatly appreciated.",
      url: "https://res.cloudinary.com/crunchbase-production/image/upload/c_lpad,h_256,w_256,f_auto,q_auto:eco,dpr_1/jj50fxnrhizfctklih5n",
      email: "alinares@midnightmission.org",
      contact: "(213) 624 9258",
      address: "123 Los Angeles Street, 90014",
    },
    {
      id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
      info: "Los Angeles Rescue Mission",
      opportunity: "Help the homeless people of LA!",
      opportunity2: "Help clean up the streets of Los Angeles!",
      vb: "Hour Block 1 hr",
      uri: "https://ca-times.brightspotcdn.com/dims4/default/5f5407f/2147483647/strip/true/crop/2000x1124+0+0/resize/840x472!/quality/90/?url=https%3A%2F%2Fcalifornia-times-brightspot.s3.amazonaws.com%2F31%2Fa6%2F0814886c5e80e77da32c9654242c%2Fla-1504025082-rjdt0vuajw-snap-image",
      category: "Homeless",
      profile:
        "https://pbs.twimg.com/profile_images/585487289310171138/wrv0AWfK_400x400.jpg",
      des: "On the 21st of August, our team will need extra hands to clean the streets of LA in order to conserve the hygiene. Your help will be greatly appreciated.",
      url: "https://www.cleantrails.org/",
      email: "info@cleantrails.org",
      contact: "(720) 985 8600",
      address: "123 Los Angeles Street, 90014",
    },
    {
      id: "58694a0f-3da1-471f-bd96-145571e29d72",
      info: "Rescue from the Hart",
      opportunity: "Help out your animals!",
      opportunity2: "Help out the local business of Los Angeles!",
      vb: "Hour Block 1 hr",
      uri: "https://i.ytimg.com/vi/bb1vzvq-m2Q/maxresdefault.jpg",
      category: "Animals",
      profile:
        "https://static.wixstatic.com/media/c1a48c_3218abfbf345485991e5df51e8cf48e9.png/v1/fit/w_2500,h_1330,al_c/c1a48c_3218abfbf345485991e5df51e8cf48e9.png",
      des: "On the 21st of August, our team will need extra help at the local restaurants in order to keep our business strong. Your help will be greatly appreciated.",
      url: "https://calosba.ca.gov/",
      email: "CalOSBA@gmail.org",
      contact: "(877) 345 4633",
      address: "123 Los Angeles Street, 90014",
    },
    {
      id: "4",
      info: "One Voice",
      opportunity: "Help local low income scholars!",
      opportunity2: "Help clean up the parks of Los Angeles!",
      vb: "Hour Block 1 hr",
      uri: "https://retailinsider.b-cdn.net/wp-content/uploads/2021/02/20170716-101843-160186bcb7f7a3_lg-1068x609.jpg",
      category: "School",
      profile:
        "https://www.onevoice-la.org/wp-content/uploads/2017/05/OV-Logo-w-R_Blue-e1495216000695.png",
      des: "On the 21st of August, our team will need extra hands to clean the parks in LA in order to conserve the nature. Your help will be greatly appreciated.",
      url: "https://www.parks.ca.gov/",
      email: "iso@parks.ca.gov",
      contact: "(916) 653 7423",
      address: "123 Los Angeles Street, 90014",
    },
    {
      id: "5",
      info: "Homeboy Industries",
      opportunity: "Help clean the streets with our fallen brothers!",
      opportunity2: "Come and garden with the local gardening club!",
      vb: "Hour Block 1 hr",
      uri: "https://homeboyindustries.org/wp-content/uploads/2020/11/GT-Banner-02-scaled.jpg",
      category: "Trash",
      profile:
        "https://homeboyindustries.org/wp-content/uploads/2019/01/homeboy-logo-mobile-menu.png",
      des: "On the 21st of August, our team will be gardening at the local garden in LA in order to expand the nature of LA. Your help will be greatly appreciated.",
      url: "https://gardenclub.org/",
      email: "headquarters@gardenclub.org",
      contact: "(314) 776 7574",
      address: "123 Los Angeles Street, 90014",
    },
    {
      id: "6",
      info: "SOVA",
      opportunity: "Help give out food to the poeple in need!",
      opportunity2: "Help the youth learn in Los Angeles!",
      vb: "Hour Block 1 hr",
      uri: "https://www.jfsla.org/wp-content/uploads/2020/01/SOVA-5-1-1-1.jpg",
      category: "Food",
      profile:
        "https://thebesty-prod.s3.amazonaws.com/uploads/merchant/logo/2459/thumb_file-2020-07-09T01_10_21%2B00_00.jpeg",
      des: "On the 21st of August, our team will need extra hands to teach the youth in LA. Your help will be greatly appreciated.",
      url: "https://woodcrest-lausd-ca.schoolloop.com/",
      email: "woodcrest@school.org",
      contact: "(323) 756 1371",
      address: "123 Los Angeles Street, 90014",
    },
  ]);

  const rows: Row[] = [
    { id: "1", label: "Near You", data: opportunities, type: "card" },
    {
      id: "",
      label: "Categories",
      data: [
        {
          menuLabel: "All",
        },
        {
          menuLabel: "Earth",
        },
        {
          menuLabel: "Beach",
        },
        {
          menuLabel: "Trash",
        },
        {
          menuLabel: "Business",
        },
        {
          menuLabel: "School",
        },
        {
          menuLabel: "Homeless",
        },
        {
          menuLabel: "Food",
        },
        {
          menuLabel: "Animals",
        },
      ],
      type: "menu",
    },
    {
      id: "3",
      label: "Popular",
      data: opportunities2,
      type: "card2",
    },
    {
      id: "4",
      label: "Cooking",
      data: opportunities2,
      type: "card2",
    },
  ];

  return {
    rows,
  };
}
