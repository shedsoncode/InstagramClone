import React from 'react';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between', 
        alignItems: 'center',
    },

    left: {
        flexDirection: 'row',
        marginLeft: 10,
    },

    right:{
        marginRight: 5,
    },

    name: {
        alignSelf: 'center',
        fontWeight: 'bold',
        color: '#3c3c3c'
    }
})

export default styles;