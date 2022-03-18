import React from 'react';
import { View, Image, StyleSheet } from 'react-native';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';

import Text from './Text';
import colors from '../config/colors';

export default function Card({ item }) {
    return (
        <View style={styles.container}>
            <Image resizeMode='cover' style={styles.image} source={item.image} />
            <View style={styles.detailsContainer}>
                <Text style={styles.name}>{item.name}</Text>
                <View style={styles.locationContainer}>
                    <MaterialCommunityIcons style={styles.icon} name='map-marker' size={20} color={colors.secondary} />
                    <Text style={styles.location}>{item.location}</Text>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.light,
        borderRadius: 15,
        width: '100%',
        overflow: 'hidden',
        marginBottom: 10
    },
    detailsContainer: {
        padding: 20
    },
    image: {
        width: '100%',
        height: 200
    },
    icon: {
        marginRight: 10
    },
    location: {
        fontWeight: '700',
        letterSpacing: 1,
        fontSize: 18,
        color: colors.secondary
    },
    locationContainer: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    name: {
        textTransform: 'uppercase',
        marginBottom: 5,
        fontWeight: '600',
    }
});