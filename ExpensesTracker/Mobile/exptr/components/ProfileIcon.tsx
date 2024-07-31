import { View, Text, Image, Dimensions } from 'react-native'
import React from 'react'

export default function ProfileIcon() {
    const windowWidth = Dimensions.get('window').width;
  const windowHeight = Dimensions.get('window').height;
  return (
      <Image
        className='rounded-full' style={{width:windowHeight/23, height:windowHeight/23}}
        source={{
          uri: 'https://reactnative.dev/img/tiny_logo.png',
        }}
      />
  )
}