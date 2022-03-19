import React from 'react';
import { StyleSheet, Dimensions } from 'react-native';

const styles = StyleSheet.create({
    likeCount: {
        fontWeight: 'bold',
        margin: 3,
    },

    caption: {
        margin: 3,
    },

    PostedAt: {
        color: '#BcBcBc',
        margin: 3,
    },

    container: {
        margin: 5
    },

    leftIcons: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: 100
    },

    iconsContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 5
    }
})

export default styles;