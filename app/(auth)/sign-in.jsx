import { View, Text, ScrollView, Image, Alert } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'

import {images} from '../../constants';
import FormField from '../components/FormField';
import CustomButton from '../components/CustomButton';
import { signIn } from '../lib/appwrite';
import { Link, useRouter } from 'expo-router';


const SignIn = () => {
  const [form, setForm] = useState({
    email: '',
    password: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const router = useRouter();

  const isValidEmail = (email) => {
    const re = /\S+@\S+\.\S+/;
    return re.test(email);
  };


  const submit = async () => {
    
    if (!form.email || !form.password) {
      Alert.alert('Error', 'Please fill in all the fields');
      return;
    }

    if (!isValidEmail(form.email)) {
      Alert.alert('Error', 'Please enter a valid email address');
      return;
    }

    setIsSubmitting(true);

    try {
      await signIn(form.email, form.password);
      router.replace('/home');
      
    } catch (error) {

      Alert.alert("Error", error.message);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <SafeAreaView className = "bg-primary h-full">
      <ScrollView>
        <View className="w-full justify-center min-h-[85vh] px-4 my-6">
          <Image source={images.logo} resizeMode="contain"
          className="w-[115px] h-[35px]"/>
          <Text className="text-2xl text-white mt-10 font-psemibod">Log in to Aora</Text>
          <FormField 
            title= 'Email'
            Value={form.email}
            handleChangeText = {(e) =>setForm({ ...form, email: e})}
            otherStyles="mt-7"
            keyboardType='email-address'
          /> 

          <FormField 
            title= 'Password'
            Value={form.password}
            handleChangeText = {(e) =>setForm({ ...form, password: e})}
            otherStyles="mt-7"
          /> 
 
          <CustomButton
            title="Log In"
            handlePress= {submit}
            contianerStyles='mt-7'
            isLoading={isSubmitting}
          />

          <View className="justify-center pt-5 flex-row gap-2">
            <Text className="text-lg text-gray-100 font-pregular">
              Don't have an account? ከለሎት አሁኑኑ ይመዝገቡ!
            </Text>
            <Link href="/sign-up" className="text-lg font-psemibold text-secondary">Sign Up</Link>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default SignIn

// import { View, Text, ScrollView, Image, Alert } from 'react-native';
// import React, { useState } from 'react';
// import { SafeAreaView } from 'react-native-safe-area-context';

// import { images } from '../../constants';
// import FormField from '../components/FormField';
// import CustomButton from '../components/CustomButton';
// import { signIn } from '../lib/appwrite';  // Ensure correct import
// import { Link, useRouter } from 'expo-router';

// const SignIn = () => {
//   const [form, setForm] = useState({
//     email: '',
//     password: ''
//   });
//   const [isSubmitting, setIsSubmitting] = useState(false);
//   const router = useRouter();

//   const isValidEmail = (email) => {
//     const re = /\S+@\S+\.\S+/;
//     return re.test(email);
//   };

//   const submit = async () => {
//     if (!form.email || !form.password) {
//       Alert.alert('Error', 'Please fill in all the fields');
//       return;
//     }

//     if (!isValidEmail(form.email)) {
//       Alert.alert('Error', 'Please enter a valid email address');
//       return;
//     }

//     setIsSubmitting(true);

//     try {
//       await signIn(form.email, form.password);
//       router.replace('/home');
//     } catch (error) {
//       Alert.alert("Error", error.message);
//     } finally {
//       setIsSubmitting(false);
//     }
//   };

//   return (
//     <SafeAreaView style={{ backgroundColor: '#1F1F1F', height: '100%' }}>
//       <ScrollView>
//         <View style={{ width: '100%', justifyContent: 'center', minHeight: '85vh', paddingHorizontal: 16, marginTop: 24 }}>
//           <Image source={images.logo} resizeMode="contain" style={{ width: 115, height: 35 }} />
//           <Text style={{ fontSize: 24, color: '#FFFFFF', marginTop: 40, fontWeight: '600' }}>Log in to Aora</Text>
//           <FormField
//             title='Email'
//             value={form.email}
//             handleChangeText={(e) => setForm({ ...form, email: e })}
//             otherStyles={{ marginTop: 28 }}
//             keyboardType='email-address'
//           />
//           <FormField
//             title='Password'
//             value={form.password}
//             handleChangeText={(e) => setForm({ ...form, password: e })}
//             otherStyles={{ marginTop: 28 }}
//             secureTextEntry={true}
//           />
//           <CustomButton
//             title="Log In"
//             handlePress={submit}
//             containerStyles={{ marginTop: 28 }}
//             isLoading={isSubmitting}
//           />
//           <View style={{ justifyContent: 'center', paddingTop: 20, flexDirection: 'row', gap: 8 }}>
//             <Text style={{ fontSize: 18, color: '#A1A1A1', fontWeight: '400' }}>
//               Don't have an account? ከለሎት አሁኑኑ ይመዝገቡ!
//             </Text>
//             <Link href="/sign-up" style={{ fontSize: 18, fontWeight: '600', color: '#4FBBEC' }}>Sign Up</Link>
//           </View>
//         </View>
//       </ScrollView>
//     </SafeAreaView>
//   );
// };

// export default SignIn;
