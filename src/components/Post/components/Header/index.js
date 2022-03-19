import React from 'react';
import { View, Text } from 'react-native'
import Icon from 'react-native-vector-icons/Entypo';
import styles from './styles';
import ProfilePicture from '../../../ProfilePicture'

const Header = ({imageUri, name}) => {
    return (
        <View style={styles.container}>
            <View style={styles.left}>
                <ProfilePicture uri={imageUri} size={35}/>
                <Text style={styles.name}>{name}</Text>
            </View>
           

           <View style={styles.right}>
            <Icon name="dots-three-vertical" size={15} color="#000" />
           </View>
        </View>
    )
}

export default Header;