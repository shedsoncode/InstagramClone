import React from 'react';
import { Text, View, FlatList } from 'react-native';
import Post from '../../components/Post'
import Stories from '../Stories';

const data = [
   { 
    id: '1',
    user: {
        imageUri: 'http://www.yardbarker.com/media/8/3/830d8b73cba20678657a264d3a3b4a58e49501a0/thumb_16x9/GettyImages-1173021544.jpg?v=1',
        name: 'luca'
      },
      imageUri: 'https://cdn.theatlantic.com/media/img/photo/2018/10/images-of-the-season-fall-is-in-the/f02_RTX6EJJJ-1/original.jpg',
      caption: 'Nice forest for animals #instagram',
      likeCount: 700,
      postedAt: '6 minutes ago'
    },

   { 
    id: '2',
    user: {
        imageUri: 'http://www.yardbarker.com/media/8/3/830d8b73cba20678657a264d3a3b4a58e49501a0/thumb_16x9/GettyImages-1173021544.jpg?v=1',
        name: 'luca'
      },
      imageUri: 'https://photoscissors.com/images/samples/3-before.jpg',
      caption: 'Nice forest for animals #instagram',
      likeCount: 1234,
      postedAt: '6 minutes ago'
    },

   { 
       id: '3',
    user: {
        imageUri: 'http://www.yardbarker.com/media/8/3/830d8b73cba20678657a264d3a3b4a58e49501a0/thumb_16x9/GettyImages-1173021544.jpg?v=1',
        name: 'benzema'
      },
      imageUri: 'https://images.unsplash.com/photo-1542038784456-1ea8e935640e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cGhvdG9ncmFwaHl8ZW58MHx8MHx8&w=1000&q=80',
      caption: 'Nice forest for animals #instagram',
      likeCount: 1234,
      postedAt: '6 minutes ago'
    },
]

const Feed = () => {
    return (
        <FlatList
            data={data}
            showsVerticalScrollIndicator={false}
            renderItem={({item}) => <Post post={item}/>}
            keyExtractor={({id}) => id}
            ListHeaderComponent={Stories}
            style={{backgroundColor: '#ffffff'}}
        />
            
    )
}

export default Feed;