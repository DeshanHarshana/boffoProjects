import { View, Text, Button, ActivityIndicator } from 'react-native'
import React from 'react'
import { useSegments } from 'expo-router';
import { useAuth } from '@/context/authContext';
import { StatusBar } from 'expo-status-bar';
import ChatList from '@/components/ChatList';

export default function Home() {
    const {logout, user} = useAuth()
    const [users, setUsers] = React.useState([1,2,3])
    
  return (
    <View className='flex-1 bg-white'>
      <StatusBar style='light'/>
      {
        users.length>0? (
          <ChatList users={users}/>
        ):(
          <View className='flex items-center' style={{top:40}}>
          <ActivityIndicator size={'large'}/>
          </View>
        )  
      }
    </View>
  )
}