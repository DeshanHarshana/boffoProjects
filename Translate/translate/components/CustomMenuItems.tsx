import { View, Text, Pressable, TouchableOpacity } from 'react-native'
import React from 'react'
import {
    Menu,
    MenuOptions,
    MenuOption,
    MenuTrigger,
} from 'react-native-popup-menu';


export default function CustomMenuItems({ text, action, value, icon }: any) {
    return (
        <TouchableOpacity>
        <MenuOption onSelect={() => action()}>
            
                <View className='px-4 py-1 flex-row justify-between items-center'>

                    <Text style={{ fontSize: 20 }} className='font-semibold text-neutral-600'>{text}</Text>
                    {icon}


                </View>
           
        </MenuOption>
        </TouchableOpacity>
    )
}