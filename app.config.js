module.exports = {
  expo: {
    name: "test99",
    slug: "test99",
    version: "1.0.0",
    orientation: "portrait",
    userInterfaceStyle: "automatic",
    newArchEnabled: true,
    ios: {
      supportsTablet: true,
    },
    android: {
      adaptiveIcon: {
        backgroundColor: "#E6F4FE",
      },
      edgeToEdgeEnabled: true,
      predictiveBackGestureEnabled: false,
      permissions: [
        "android.permission.ACCESS_COARSE_LOCATION",
        "android.permission.ACCESS_FINE_LOCATION",
      ],
      package: "com.bussz.test99",
    },
    web: {
      output: "static",
    },
    plugins: [
      "expo-router",
      [
        "expo-location",
        {
          locationWhenInUsePermission:
            "Permita que este app use sua localizacao",
        },
      ],
      [
        "react-native-maps",
        {
          androidGoogleMapsApiKey: process.env.EXPO_PUBLIC_KEY_GOOGLE_MAPS,
        },
      ],
      [
        "expo-splash-screen",
        {
          imageWidth: 200,
          image: "./src/assets/99logo.png",
          resizeMode: "contain",
          backgroundColor: "#FFDD00",
          dark: {
            backgroundColor: "#000000",
          },
        },
      ],
    ],
    experiments: {
      typedRoutes: true,
      reactCompiler: true,
    },
  },
};
