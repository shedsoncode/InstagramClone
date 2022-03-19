import React from 'react';
import { View, Text } from 'react-native'
import Header from './components/Header';
import Footer from './components/Footer';
import Body from './components/Body';


const Post = ({ post }) => {
    return (
      <View>
      
        <Header imageUri={post.user.imageUri} name={post.user.name}/>
        <Body imageUri={post.imageUri} />
        <Footer 
          likeCount={post.likeCount}
          caption={post.caption}
          postedAt={post.postedAt}
         />

      </View>
    )
}

export default Post;