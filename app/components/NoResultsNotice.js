import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import colors from '../config/colors';
import Screen from './Screen';

export default function NoResultsNotice({ }) {
    return (
        <Screen >
            <View style={styles.container}>
                <Text style={styles.text}>No Results</Text>
            </View>
        </Screen>
    )
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        backgroundColor: colors.danger,
        padding: 10,
        justifyContent: 'center',
        width: '100%',
    },
    text: {
        color: colors.white,
        textAlign: 'center'
    }
});