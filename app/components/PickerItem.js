import React from 'react';
import { View, StyleSheet, TouchableOpacity, Text } from 'react-native';

export default function PickerItem({ item, onPress }) {
    return (
        <TouchableOpacity onPress={onPress}>
            <Text style={styles.text}>{item.label}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    text: {
        fontSize: 18,
        padding: 20,
    },
});