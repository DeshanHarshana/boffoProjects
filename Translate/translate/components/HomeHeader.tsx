import { View, Text, Platform, StyleSheet } from 'react-native'
import React from 'react'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { Image } from 'expo-image'
import { blurhash } from '@/utils/common'
import { useAuth } from '@/context/authContext'
import {
    Menu,
    MenuOptions,
    MenuOption,
    MenuTrigger,
} from 'react-native-popup-menu';
import CustomMenuItems from './CustomMenuItems'
import { Feather } from '@expo/vector-icons'
const ios = Platform.OS == 'ios'
export default function HomeHeader() {
    const { top } = useSafeAreaInsets();
    const { user, logout } = useAuth()
    const handleProfile = () =>{

    }

    const handleLogout = async () =>{
        await logout()
    }
    return (
        <View style={{ padding: ios ? top : top + 10 }} className='flex-row justify-between px-5 bg-indigo-400 pb-6 rounded-b-3xl shadow-lg'>
            <View>
                <Text style={{ fontSize: 30 }} className='font-medium text-white'>
                    Chats
                </Text>
            </View>

            <Menu>
                <MenuTrigger>
                    <Image
                        style={{ height: 50, aspectRatio: 1, borderRadius: 100 }}
                        source={user?.profileUrl}
                        placeholder={blurhash}
                        contentFit="cover"
                        transition={500}

                    />
                </MenuTrigger>
                <MenuOptions customStyles={{
                    optionsContainer:{
                        borderRadius:10,
                        borderCurve:'continuous',
                        marginTop:40,
                        marginLeft:-30,
                        backgroundColor:'white',
                        shadowOpacity:0.2,
                        shadowOffset:{width:0, height:0},
                        width:160
                    }
                }}>
                   <CustomMenuItems text="Profile" action={handleProfile} value={null} icon={<Feather name='user' size={20} color="#737373"/>} />
                   
                   <CustomMenuItems text="Signout" action={handleLogout} value={null} icon={<Feather name='power' size={20} color="#737373"/>} />
                </MenuOptions>
            </Menu>



        </View>
    )
}
