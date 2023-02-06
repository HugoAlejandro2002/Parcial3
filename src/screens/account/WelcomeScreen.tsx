import { Button } from "@rneui/themed"
import { Image, Text, TouchableOpacity, View } from "react-native"


export const WelcomeScreen = (props: any) => {
    const {navigation} = props;


    return (
        <View style={{flex:1}}>
            <View style={{ alignItems: 'center',flex:1, justifyContent:'flex-end'}}>
                <Image
                source={{ uri: 'https://lh3.googleusercontent.com/vw09Bjm-aj1UcMxPk8gcUzZyNHAhJb3HLaDqLx9ioQ6fYrt3CrVuP5FTCVCKPRYkKAA8' }}
                style={{ width: 200, height: 200 }}
                />
                <Text style={{ fontSize: 18, paddingTop: 20,color:'grey'  }}>
                    La App Para consultar tus notas
                </Text>
            </View>
            <View style={{alignItems:'center', flex:1}}>
                <Button
                        title="Log In"
                        loading={false}
                    //   loadingProps={{ size: 'small', color: 'white' }}
                        buttonStyle={{
                        backgroundColor: 'red',
                        borderRadius: 20,
                        }}
                        titleStyle={{ fontWeight: 'bold', fontSize: 23}}
                        containerStyle={{
                        height: 50,
                        width: 200,
                        marginTop: 30,
                        marginBottom: 15
                        }}
                        onPress={() => navigation.navigate('LoginScreen')}
                />
                <View style={{flexDirection:'row'}}>
                    <Text style={{color:'grey' }}>Don't have account?</Text>
                    <TouchableOpacity onPress={() => navigation.navigate('RegisterScreen')
                    }>
                        <Text style={{color:'red'}}> Sign Up</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}