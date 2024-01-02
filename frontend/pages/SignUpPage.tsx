// Import necessary dependencies
import React from 'react';
import { View, Image,Text, TextInput, Button, SafeAreaView, StyleSheet, TouchableOpacity } from 'react-native';
import { useForm, Controller } from 'react-hook-form';
import { StackNavigationProp } from '@react-navigation/stack';
import InputField from '../components/InputField'
import BigButton from '../components/BigButton'
import SignInPage from './SignInPage';

// import { RootStackParamList } from './App';



export type RootStackParamList = {
    Home: undefined;
    Registration: undefined;
  };
// Define the RegistrationScreenProps type
type RegistrationScreenProps = {
  navigation: StackNavigationProp<RootStackParamList, 'Registration'>;
};



// Create RegistrationScreen component
const RegistrationScreen: React.FC<RegistrationScreenProps> = ({ navigation }) => {
  const { control, handleSubmit, formState: { errors }, getValues } = useForm();

  const onSubmit = (data: any) => {
    // Perform registration logic here
    console.log(data);
    // Redirect to another screen if needed
    // navigation.navigate('Home');
  };

  return (
    <SafeAreaView style={styles.container}>
    <View style={{ padding: 16 }}>
      <Text style= {styles.AccountText}>Create an account</Text>
      <Text style= {styles.createText}>Let's help you create an account, it won't take long.</Text>

      {/* Name input */}
      
      <Controller
        control={control}
        render={({ field }) => (
            <InputField textforInput={'Name'} placeholder={'Enter Name'}></InputField>
            
        )}
        name="name"
        rules={{ required: 'Name is required' }}
      />
      {/* <Text style={{ color: 'red' ,marginLeft:35,marginTop:3 }}><>{errors.name?.message}</></Text> */}

      {/* Email input */}
      <Controller
        control={control}
        render={({ field }) => (
            <InputField textforInput={'Email'} placeholder={'Enter email'}></InputField>
        )}
        name="email"
        rules={{ required: 'Email is required', pattern: /^\S+@\S+$/i }}
      />
      {/* <Text style={{ color: 'red' , marginLeft:35,marginTop:3}}>{errors.email?.type === 'required' ? 'Email is required':''}</Text> */}

      {/* Password input */}
      <Controller
        control={control}
        render={({ field }) => (
            <InputField textforInput={'Password'} placeholder={'Enter Password'}></InputField>
        )}
        name="password"
        rules={{ required: 'Password is required', minLength: 6 }}
      />
      {/* <Text style={{ color: 'red' , marginLeft:35,marginTop:3  }}>{errors.password?.type === 'required' ? 'Password is required' : 'Password must be at least 6 characters long'}</Text> */}

      {/* Confirm Password input */}
      <Controller
        control={control}
        render={({ field }) => (
            <InputField textforInput={'Confirm Password'} placeholder={'Enter Password'}></InputField>
        )}
        name="confirmPassword"
        rules={{ required: 'Confirm Password is required', validate: value => value === getValues('password') || 'Passwords do not match' }}
      />
      <Text style={{ color: 'red' , marginBottom:40,marginLeft:35,marginTop:3}}><>{errors.confirmPassword?.message}</></Text>
      
      {/* Registration Button */}
      <BigButton btnLabel={'Sign Up'} btnWidth={300} btnPosition={'relative'}></BigButton>
     </View>

     <TouchableOpacity style={styles.gButton}>
          <Image source={require('../assets/gbutton.png')} />
        </TouchableOpacity>
      
     <View style={styles.bottomText}>
      <Text>Already a member? </Text>
      <TouchableOpacity>
        <Text style={styles.SignInText}>Sign in</Text>
      </TouchableOpacity>  
    </View>

    </SafeAreaView>
  );
};


const styles = StyleSheet.create({
    container: {
        flex: 1
    },

    

      AccountText: {
        fontSize: 20,
        fontWeight: '500',
        color: 'black',
        marginTop: 20,
        padding: 20,
        marginLeft: 10,
        
      },


      createText: {
        fontSize: 16,
        fontWeight: '300',
        color: 'black',
        marginLeft: 10,
        paddingLeft: 20,
        marginRight:9,
      },

      input: {
        height: 50,
        // margin: 12,
        borderWidth: 1,
        borderColor: '#FC1125',
        borderRadius: 10,
        position:"relative"
        
      },

      inputText: {
        marginLeft: 10,
        marginTop: 15,
        // paddingLeft: 20,
        lineHeight: 27,
        color: 'black',

      },

      SignInText: {
        color:'#FC1125',
        textDecorationLine:'underline'
        
      },
      bottomText: {
        flexDirection: 'row',
        alignSelf: 'center',
        marginTop: 20,
        
      },

      gButton :{
        alignSelf: 'center',
      }



})

export default RegistrationScreen;
