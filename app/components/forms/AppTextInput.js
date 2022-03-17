import React from "react";
import { View, StyleSheet, TextInput } from "react-native";
import MaterialCommunityIcon from '@expo/vector-icons/MaterialCommunityIcons';

import colors from "../../config/colors";

export default function AppTextInput({ icon, width = '100%', ...otherProps }) {
    return (
        <View style={[styles.container, { width }]}>
            {icon && <MaterialCommunityIcon
                color={colors.medium}
                name={icon}
                size={20}
                style={styles.icon}
            />}
            <TextInput
                placeholderTextColor={colors.medium}
                // style={styles.textInput}
                maxLength={255}
                {...otherProps}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        alignItems: "center",
        backgroundColor: colors.light,
        borderRadius: 25,
        flexDirection: 'row',
        marginVertical: 10,
        padding: 15,
    },
    icon: {
        marginRight: 10
    },
    textInput: {
        backgroundColor: colors.light,
        borderRadius: 20,
        color: colors.medium,
        flex: 1,
        padding: 10,
    },
});
