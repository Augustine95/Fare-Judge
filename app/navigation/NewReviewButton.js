import React from 'react';
import { View, StyleSheet, TouchableWithoutFeedback } from 'react-native';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';

import colors from '../config/colors';

export default function NewReviewButton({ onPress }) {
    return (
        <TouchableWithoutFeedback onPress={onPress}>
            <View style={styles.container}>
                <MaterialCommunityIcons name='plus-circle' color={colors.white} size={40} />
            </View>
        </TouchableWithoutFeedback>
    );
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        backgroundColor: colors.primary,
        borderColor: colors.white,
        borderRadius: 40,
        borderWidth: 10,
        bottom: 22,
        height: 80,
        justifyContent: 'center',
        width: 80,
    },
});