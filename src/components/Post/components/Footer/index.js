import React, { useState, useEffect } from 'react';
import { View, Text, TouchableWithoutFeedback, Image } from 'react-native'

import ADIcons from 'react-native-vector-icons/AntDesign'
import Fontisto from 'react-native-vector-icons/Fontisto'
import Ionicons from 'react-native-vector-icons/Ionicons'
import FontAwesome from 'react-native-vector-icons/FontAwesome'

import send from '../../../../../assets/Images/send.png'
import chat from '../../../../../assets/Images/chat.png'

import styles from './styles';

const Footer = ({likeCount: likeCountProp, caption, postedAt}) => {
    const [isLiked, setIsLike] = useState(false);
    const [likeCount, setLikeCount] = useState(0)

    const onLikePressed = () => {
        const amount = isLiked ? -1 : 1;
        setLikeCount(likeCount + amount);
        setIsLike(!isLiked)
    };

    useEffect( ()=> {
        setLikeCount(likeCountProp);
    }, []);

    return (
        <View style={styles.container}>
            <View style={styles.iconsContainer}> 
                <View style={styles.leftIcons}>
                    <TouchableWithoutFeedback onPress={onLikePressed}>
                    {isLiked ?
                        <ADIcons name='heart' size={24} color={"#e73838"} />
                        :<ADIcons name='hearto' size={24} color={"#000"} />
                    }
                    </TouchableWithoutFeedback>
                    <Image source={chat} style={{width: 25, resizeMode: "contain", height: 25}} />
                    <Image source={send} style={{width: 24, resizeMode: "contain", height: 25}} />
                </View>
                <FontAwesome name='bookmark-o' size={23} color={"#545454"} />
            </View>

            <Text style={styles.likeCount}>{likeCount} Likes</Text>
            <Text style={styles.caption}>{caption}</Text>
            <Text style={styles.postedAt}>{postedAt}</Text>
        </View>
    )
}

export default Footer;