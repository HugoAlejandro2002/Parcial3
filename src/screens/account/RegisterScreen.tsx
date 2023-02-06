import { Button, Input } from "@rneui/themed"
import { Image, Text, TouchableOpacity, View } from "react-native"
import {useFormik} from 'formik';
import * as YUP from 'yup';
import {createUserWithEmailAndPassword } from "firebase/auth";
import {auth} from '../../services/firebase'




export const RegisterScreen = (props: any) => {
    const {navigation} = props;

    const initialValues = {
        email: '',
        password: '',
    };

    const formik = useFormik({
        initialValues: initialValues,
        validationSchema: YUP.object({
          email: YUP.string()
            .required('El email es Requerido.')
            .email('No es un email valido'),
          password: YUP.string().required('El password es Requerido.'),
        }),validateOnChange:true,
        // validationOnChange: false,
        onSubmit: async (formValue) => {
            // Sign up with email and password
            
            try {
              const { email, password } = formValue;
              
              await createUserWithEmailAndPassword(auth, email, password)
              .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                // ...
              })
              .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                // ..
              });
             
              console.log(email,password)
            } catch (error) {
                console.error(error);
            }
          },
      });

    return (
        <View style={{flex:1}}>
            <View style={{ alignItems: 'center',flex:1, justifyContent:'flex-end'}}>
                <Image
                source={{ uri: 'https://lh3.googleusercontent.com/vw09Bjm-aj1UcMxPk8gcUzZyNHAhJb3HLaDqLx9ioQ6fYrt3CrVuP5FTCVCKPRYkKAA8' }}
                style={{ width: 200, height: 200 }}
                />
            </View>
            <View style={{alignItems:'center', flex:1}}>
                <Input
                    placeholder="Email"
                    onChangeText={text => formik.setFieldValue('email', text)}
                    errorMessage={formik.errors.email}
                    containerStyle={{marginTop:30}}
                />
                <Input
                    placeholder="Password"
                    errorMessage={formik.errors.password}
                    onChangeText={text => formik.setFieldValue('password', text)}
                    secureTextEntry={true}
                />
                <Button
                        title="Sign Up"
                        loading={false}
                    //   loadingProps={{ size: 'small', color: 'white' }}
                        buttonStyle={{
                        backgroundColor: 'red',
                        borderRadius: 20,
                        }}
                        titleStyle={{ fontWeight: 'bold', fontSize: 23 }}
                        containerStyle={{
                        height: 50,
                        width: 200,
                        marginTop: 30,
                        marginBottom: 15
                        }}
                        onPress={() => {formik.submitForm()}}
                />
            </View>
        </View>
    )
}