import CustomKeyboardView from '@/components/CustomKeyboardView';
import Loading from '@/components/Loading';
import { useAuth } from '@/context/authContext';
import { Octicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { View, Text, Image, Dimensions, TextInput, TouchableOpacity, Pressable, Alert } from 'react-native';

export default function SignIn() {
  const router = useRouter()
  const windowWidth = Dimensions.get('window').width;
  const windowHeight = Dimensions.get('window').height;
  const [loading, setLoading] = useState(false)
  const {login} = useAuth()
  const [user, setUser] = useState({
    email: "",
    password: ""
  })

  const loginProcess = async () => {
    if (user.email == "" || user.password == "") {
      Alert.alert("Fill Fields")
    }
    setLoading(true)
    const response = await login(user.email, user.password);
    setLoading(false)
    if(!response.success){
      Alert.alert('Sign In', response.msg)
    }
  }
  return (
   <CustomKeyboardView>
      <StatusBar style='dark' />
      <View className="flex-1 gap-12 items-center" style={{ paddingTop: (windowHeight / 100) * 5 }}>
        <View className="item-center">
          <Image source={require('../assets/images/login.png')} style={{ height: 200, width: 200 }} resizeMode='contain' />
        </View>
        <View className="gap-10 items-center">
          <Text style={{ fontSize: (windowHeight / 100) * 6 }} className="font-bold tracking-wider text-neutral-800">Sign In</Text>
          <View className="gap-4">
            <View style={{ height: (windowHeight / 100) * 8, width: (windowWidth / 100) * 90 }} className="flex-row gap-4 px-4 bg-neutral-300 items-center rounded-2xl">
              <Octicons name='mail' size={(windowHeight / 100) * 3} color='gray' />
              <TextInput style={{ fontSize: 20 }} onChangeText={(e) => setUser({ ...user, email: e })} className="flex-1 font-semibold text-neutral-700" placeholder='Email Address' placeholderTextColor={'gray'} />
            </View>
          </View>

          <View className="gap-3">
            <View style={{ height: (windowHeight / 100) * 8, width: (windowWidth / 100) * 90 }} className="flex-row gap-4 px-4 bg-neutral-300 items-center rounded-2xl">
              <Octicons name='key' size={(windowHeight / 100) * 3} color='gray' />
              <TextInput secureTextEntry style={{ fontSize: 20 }} onChangeText={(e) => setUser({ ...user, password: e })} className="flex-1 font-semibold text-neutral-700" placeholder='Password' placeholderTextColor={'gray'} />
            </View>
            <Text style={{ fontSize: (windowWidth / 100) * 4 }} className="text-right text-neutral-800">Forgot Password</Text>
          </View>
         
            
              {
                loading ? (<View className="flex-row justify-center">
                  <Loading size={50}/>
                </View>) : (
                 
                 <View className="bg-indigo-400 rounded-xl justify-center items-center p-2 pl-7 pr-7">
                    <TouchableOpacity onPress={loginProcess}>
                      <Text style={{ fontSize: 40 }} className="text-white font-bold tracking-widest">Login</Text>
                    </TouchableOpacity>
                    </View>
                  
                )
              }
            


          
          <View className=" flex-row justify-center">
            <Text>Don't have an account? </Text>
            <Pressable onPress={() => router.push('/signUp')}>
              <Text className="font-bold text-indigo-500">Sign Up</Text>
            </Pressable>

          </View>


        </View>

      </View>
      </CustomKeyboardView>
  );
}
