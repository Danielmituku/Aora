import { View, Text, TextInput, TouchableOpacity, Image} from 'react-native'
import React from 'react'
import { useState } from 'react'
import { icons  } from '../../constants'


const SearchInput = ({ title, value, placeholder, handleChangerText, otherStyles, ...props }) => {
 const [showPassword, setShowPassword] = useState(false)

  return (
      <View className="border-2 border-black-500 w-full h-16 px-4 bg-black-100 rounded-2xl focus:border-secondary items-center flex-row space-x-4">

        <TextInput className="text-base mt-0.5 text-white flex-1 font-pregular" 
            value={value}
            placeholder='Search for a Video topic'
            placeholderTestColor="#7b7b8b"
            onChangeText={handleChangerText}
            secureTextEntry={title === 'Password'&& !showPassword}
        />

       <TouchableOpacity>
            <Image source={icons.search}
            className='w-5 h-5'
            resizeMode='contain' />
       </TouchableOpacity>
      </View>
  )}

export default SearchInput;