import { View, Text, TextInput, TouchableOpacity, Image} from 'react-native'
import React from 'react'
import { useState } from 'react'
import { icons  } from '../../constants'


const FormField = ({ title, value, placeholder, handleChangerText, otherStyles, ...props }) => {
 const [showPassword, setShowPassword] = useState(false)

  return (
    <View className={`space-y-2 ${otherStyles}`}>

      <Text className="text-base text-gray-100 font-pmedium">{title}</Text>
      <View className="border-2 border-black-500 w-full h-16 px-4 bg-black-100 rounded-2xl focus:border-secondary items-center flex-row">
      
        <TextInput className="flex-1 text-whight text-white font-psemibold" 
         value={value}
         placeholder={placeholder}
         placeholderTestColor="#7b7b8b"
         onChangeText={handleChangerText}
         secureTextEntry={title === 'Password'&& !showPassword}
        />
        {title ==='Password' && (
          <TouchableOpacity onPress={()=>{setShowPassword(!showPassword)}}> 
          <Image source={!showPassword ? icons.eye : icons.eyeHide} className="w-6 h-6" resizeMethod='contain'/>
          </TouchableOpacity>)
        }
      </View>
    </View>
  )}

export default FormField