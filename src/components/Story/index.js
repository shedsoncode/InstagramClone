import React from 'react';
import { Text, View } from 'react-native';
import styles from './styles';
import ProfilePicture from '../ProfilePicture'

const Story = ({imageUri, name}) => {
    return (
        <View style={styles.container}>
            <ProfilePicture uri={imageUri}/>
            <Text style={styles.name}>{name}</Text>
        </View>
    )
}


export default Story;