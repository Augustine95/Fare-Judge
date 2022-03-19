import React, { useState } from 'react';
import { View, StyleSheet, TouchableWithoutFeedback } from 'react-native';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';

import colors from '../config/colors';
import Text from './Text';

export default function SectionLabel({ expanded, label, onPress }) {
    const getIconName = () => {
        let name = 'chevron-';
        name += (expanded) ? 'down' : 'right';
        return name;
    };

    return (
        <TouchableWithoutFeedback onPress={onPress}>
            <View style={styles.container}>
                <Text style={styles.text}>{label}</Text>
                <MaterialCommunityIcons size={35} color={colors.white} name={getIconName()} />
            </View>
        </TouchableWithoutFeedback>
    )
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        backgroundColor: colors.secondary,
        borderRadius: 2,
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 7,
        paddingLeft: 5
    },
    text: {
        color: colors.white,
        fontSize: 20,
        fontWeight: '700',
        letterSpacing: 1
    }
});