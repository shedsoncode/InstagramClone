import React from 'react';
import { Text, View, FlatList } from 'react-native';
import Story from '../Story';
import styles from './styles';


const data = [
    {
        imageUri: 'https://content.api.news/v3/images/bin/afd1ba903dae014db1e991723b742c41',
        name: 'Rock',
    },
    {
        imageUri: 'http://www.yardbarker.com/media/8/3/830d8b73cba20678657a264d3a3b4a58e49501a0/thumb_16x9/GettyImages-1173021544.jpg?v=1',
        name: 'Luca',
    },
    {
        imageUri: 'https://images.fandango.com/ImageRenderer/0/0/redesign/static/img/default_poster.png/0/images/masterrepository/other/1622M04_JO079_H.JPG',
        name: 'Zivia',
    },
    {
        imageUri: 'https://static.more.com/wp-content/uploads/2014/07/25214432/SEI_74430577.jpg',
        name: 'Ed sheran',
    },
    {
        imageUri: 'https://content.api.news/v3/images/bin/afd1ba903dae014db1e991723b742c41',
        name: 'mike',
    },
    {
        imageUri: 'http://www.yardbarker.com/media/8/3/830d8b73cba20678657a264d3a3b4a58e49501a0/thumb_16x9/GettyImages-1173021544.jpg?v=1',
        name: 'Lucas',
    },
    {
        imageUri: 'https://images.fandango.com/ImageRenderer/0/0/redesign/static/img/default_poster.png/0/images/masterrepository/other/1622M04_JO079_H.JPG',
        name: 'Zivial',
    },
    {
        imageUri: 'https://static.more.com/wp-content/uploads/2014/07/25214432/SEI_74430577.jpg',
        name: 'victory',
    }
]

const Stories = () => {
    return (
        <FlatList
            data={data}
            keyExtractor={({name}) => name}
            horizontal
            style={styles.container}
            showsHorizontalScrollIndicator={false}
            renderItem={({item}) => <Story imageUri={item.imageUri} name={item.name} />}
        />
            
    )
}

export default Stories;