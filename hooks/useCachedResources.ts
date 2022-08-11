import { FontAwesome } from "@expo/vector-icons";
import { Asset } from "expo-asset";
import * as Font from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { useEffect, useState } from "react";
import { Image } from "react-native";

function cacheImages(images: any) {
  return images.map((image: any) => {
    if (typeof image === "string") {
      return Image.prefetch(image);
    } else {
      return Asset.fromModule(image).downloadAsync();
    }
  });
}

export default function useCachedResources() {
  const [isLoadingComplete, setLoadingComplete] = useState(false);

  // Load any resources or data that we need prior to rendering the app
  useEffect(() => {
    async function loadResourcesAndDataAsync() {
      try {
        SplashScreen.preventAutoHideAsync();

        // Load fonts
        await Font.loadAsync({
          ...FontAwesome.font,
          "space-mono": require("../assets/fonts/SpaceMono-Regular.ttf"),
          Poppins: require("../assets/fonts/Poppins.ttf"),
          PoppinsSemiBold: require("../assets/fonts/PoppinsSemiBold.ttf"),
          PoppinsBold: require("../assets/fonts/PoppinsBold.ttf"),
          PoppinsMedium: require("../assets/fonts/PoppinsMedium.ttf"),
        });

        const imageAssets = cacheImages([
          "https://beaches.lacounty.gov/wp-content/uploads/2021/09/Redondo-Beach-BCB_5409-1920x1105.jpg",
          "https://img.hoodline.com/uploads/story/image/569140/photo_-_volunteers_help_CleanMission_spruce_up_outside_Zoe_Bikini_18th_and_Mission_8-2019.jpeg",
          "https://mcdonaldpaper.com/media/wysiwyg/blog/blog_21-10-20-2.jpg",
          "https://media.istockphoto.com/photos/picking-up-a-plastic-bottle-during-park-cleanup-picture-id1161008212?k=20&m=1161008212&s=612x612&w=0&h=ll4BiuqmO003r2LQ66PKurXnA1rD_gbdR1wQ7K-VKOs=",
          "https://s3-media0.fl.yelpcdn.com/bphoto/SyOO6VEokLNa9WKLvbV0lw/348s.jpg",
          "https://ca-times.brightspotcdn.com/dims4/default/369db9f/2147483647/strip/true/crop/6720x4479+0+1/resize/2000x1333!/quality/90/?url=https%3A%2F%2Fcalifornia-times-brightspot.s3.amazonaws.com%2F1b%2F77%2F9cd05cf64aa2bbc05b9b48b2a3c4%2Fla-photos-1staff-595996-me-0818-lopez-homeless-service-center-gem-001.jpg",
          require("../assets/images/ngc.png"),
          "https://res.cloudinary.com/crunchbase-production/image/upload/c_lpad,h_256,w_256,f_auto,q_auto:eco,dpr_1/jj50fxnrhizfctklih5n",
          "https://res.cloudinary.com/crunchbase-production/image/upload/c_lpad,h_256,w_256,f_auto,q_auto:eco,dpr_1/jj50fxnrhizfctklih5n",
          require("../assets/images/cleantrails.jpeg"),
          require("../assets/images/wes.png"),
          require("../assets/images/parksca.png"),
          require("../assets/images/saveourshores.png"),
          require("../assets/images/calosba.png"),
          require("../assets/images/focusedHomeIcon.png"),
          require("../assets/images/homeIcon.png"),
          require("../assets/images/focusedClockIcon.png"),
          require("../assets/images/clockIcon.png"),
          require("../assets/images/focusedRewardIcon.png"),
          require("../assets/images/rewardIcon.png"),
          require("../assets/images/focusedWalletIcon.png"),
          require("../assets/images/walletIcon.png"),
          require("../assets/images/settings.png"),
          require("../assets/images/clipboard.png"),
          require("../assets/images/POI.png"),
          require("../assets/images/calendar.png"),
          require("../assets/images/Search.png"),
          require("../assets/images/cubePointsLogo.png"),
          require("../assets/images/NFTbadge.png"),
          require("../assets/images/NFTcoin.png"),
          require("../assets/images/starbucks2.png"),
          require("../assets/images/clockIcon.png"),
          require("../assets/images/dotsVertical.png"),
          require("../assets/images/profilePic.png"),
          
        ]);

        // load images
        await Promise.all([...imageAssets]);
      } catch (e) {
        // We might want to provide this error information to an error reporting service
        console.warn(e);
      } finally {
        setLoadingComplete(true);
        SplashScreen.hideAsync();
      }
    }

    loadResourcesAndDataAsync();
  }, []);

  return isLoadingComplete;
}
