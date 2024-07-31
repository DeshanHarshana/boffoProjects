import { View, Text, Dimensions } from 'react-native'
import Ionicons from '@expo/vector-icons/Ionicons';
import ProfileIcon from './ProfileIcon';
export default function TopBar() {
  const windowHeight = Dimensions.get('window').height;
  return (
    <View className='bg-slate-200 p-4 flex flex-col items-center rounded-bl-3xl rounded-br-3xl'>
      <View className="flex-row justify-between w-full items-center">
        <View><Ionicons name='settings' size={windowHeight / 25} /></View>
        <View><Text style={{ fontFamily: "SpaceMono" }} className='text-lg'>Overall Balance</Text></View>
        <ProfileIcon />
      </View>
      <View className='item-center'><Text className=' text-2xl' style={{ fontFamily: "PoetsenOne" }}>Rs 2300</Text></View>
      <View className='flex-row justify-between w-full items-center pt-3 pl-20 pr-20'>
        <Text style={{ fontFamily: "PoetsenOne" }} className=' text-xl'>{"<"}</Text>
        <Text className=' font-bold'>Aug - 2024</Text>
        <Text style={{ fontFamily: "PoetsenOne" }} className=' text-xl'>{">"}</Text>
        </View>
    </View>
  )
}
