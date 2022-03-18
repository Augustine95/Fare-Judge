import React from "react";
import { View } from "react-native";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";

export default function Icon({
    backgroundColor = "#000",
    name,
    iconColor = "#fff",
    size = 40,
}) {
    return (
        <View
            style={{
                alignItems: "center",
                backgroundColor,
                borderRadius: size / 2,
                height: size,
                justifyContent: "center",
                width: size,
            }}
        >
            <MaterialCommunityIcons color={iconColor} name={name} size={size * 0.5} />
        </View>
    );
}
