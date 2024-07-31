import CustomKeyboardView from '@/components/CustomKeyboardView';
import Loading from '@/components/Loading';
import { useAuth } from '@/context/authContext';
import { Octicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';

import { View, Text, Image, Dimensions, TextInput, TouchableOpacity, Pressable, Alert } from 'react-native';

export default function SignUp() {
  const router = useRouter()
  const windowWidth = Dimensions.get('window').width;
  const windowHeight = Dimensions.get('window').height;
  const [loading, setLoading] = useState(false)
  const {register} = useAuth()
  const [user, setUser] = useState({
    username:"",
    email: "",
    password: "",
    profileUrl:""
  })

  const handleRegister = async () => {
    if (user.email == "" || user.password == "" || user.username=="") {
      Alert.alert("Fill Fields")
    }
    setLoading(true)
    let responese = await register(user.email, user.password, user.username, user.profileUrl);

    setLoading(false)
    console.log('got registerd result : ', responese)

    if(!responese.success){
      Alert.alert('Sign Up', responese.msg)
    }
  }
  return (
   <CustomKeyboardView>
      <StatusBar style='dark' />
      <View className="flex-1 gap-12 items-center" style={{ paddingTop: (windowHeight / 100) * 5 }}>
        <View className="item-center">
          <Image source={require('../assets/images/login.png')} style={{ height: 150, width: 150 }} resizeMode='contain' />
        </View>
        <View className="gap-6 items-center">
          <Text style={{ fontSize: (windowHeight / 100) * 6 }} className="font-bold tracking-wider text-neutral-800">Register</Text>
          
          <View className="gap-4">
            <View style={{ height: (windowHeight / 100) * 6, width: (windowWidth / 100) * 90 }} className="flex-row gap-4 px-4 bg-neutral-300 items-center rounded-2xl">
              <Octicons name='person' size={(windowHeight / 100) * 3} color='gray' />
              <TextInput style={{ fontSize: 20 }} onChangeText={(e) => setUser({ ...user, username: e })} className="flex-1 font-semibold text-neutral-700" placeholder='User Name' placeholderTextColor={'gray'} />
            </View>
          </View>
          
          <View className="gap-4">
            <View style={{ height: (windowHeight / 100) * 6, width: (windowWidth / 100) * 90 }} className="flex-row gap-4 px-4 bg-neutral-300 items-center rounded-2xl">
              <Octicons name='mail' size={(windowHeight / 100) * 3} color='gray' />
              <TextInput style={{ fontSize: 20 }} onChangeText={(e) => setUser({ ...user, email: e })} className="flex-1 font-semibold text-neutral-700" placeholder='Email Address' placeholderTextColor={'gray'} />
            </View>
          </View>

          <View className="gap-4">
            <View style={{ height: (windowHeight / 100) * 6, width: (windowWidth / 100) * 90 }} className="flex-row gap-4 px-4 bg-neutral-300 items-center rounded-2xl">
              <Octicons name='key' size={(windowHeight / 100) * 3} color='gray' />
              <TextInput secureTextEntry style={{ fontSize: 20 }} onChangeText={(e) => setUser({ ...user, password: e })} className="flex-1 font-semibold text-neutral-700" placeholder='Password' placeholderTextColor={'gray'} />
            </View>
           
          </View>
          <View className="gap-4">
            <View style={{ height: (windowHeight / 100) * 6, width: (windowWidth / 100) * 90 }} className="flex-row gap-4 px-4 bg-neutral-300 items-center rounded-2xl">
              <Octicons name='link' size={(windowHeight / 100) * 3} color='gray' />
              <TextInput style={{ fontSize: 20 }} onChangeText={(e) => setUser({ ...user, profileUrl: e })} className="flex-1 font-semibold text-neutral-700" placeholder='Profile Url' placeholderTextColor={'gray'} />
            </View>
           
          </View>
         
            
              {
                loading ? (<View className="flex-row justify-center">
                  <Loading size={50}/>
                </View>) : (
                 
                 <View className="bg-indigo-400 rounded-xl justify-center items-center p-2 pl-7 pr-7">
                    <TouchableOpacity onPress={handleRegister}>
                      <Text style={{ fontSize: 40 }} className="text-white font-bold tracking-widest">Register</Text>
                    </TouchableOpacity>
                    </View>
                  
                )
              }
            


          
          <View className=" flex-row justify-center">
            <Text>Already have an account? </Text>
            <Pressable onPress={() => router.push('/signIn')}>
              <Text className="font-bold text-indigo-500">Sign In</Text>
            </Pressable>

          </View>


        </View>

      </View>
      </CustomKeyboardView>
  );
}
