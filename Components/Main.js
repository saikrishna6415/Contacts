import React, { Component } from 'react'
import { View, Text, StyleSheet, ActivityIndicator, Image, TouchableOpacity } from 'react-native'
import { GoogleSignin, GoogleSigninButton, statusCodes } from '@react-native-community/google-signin';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import tabScreen from './tabScreen';
import contactInfo from './contactInfo';
import { connect } from 'react-redux'
import { getUser } from '../actions/userActions'

const stack = createStackNavigator();


class Main extends Component {
    constructor() {
        super()
        this.state = {
            // userInfo: null,
            gettingLoginStatus: true,
        }
    }
    componentDidMount() {
        GoogleSignin.configure({
            scopes: ['https://www.googleapis.com/auth/drive.readonly'], // what API you want to access on behalf of the user, default is email and profile
            webClientId: '65501395539-3e65tb6q4dh95c6ks4oumrrf9c0s05ae.apps.googleusercontent.com', // client ID of type WEB for your server (needed to verify user ID and offline access)
            offlineAccess: true, // if you want to access Google API on behalf of the user FROM YOUR SERVER
            // hostedDomain: '', // specifies a hosted domain restriction
            // loginHint: '', // [iOS] The user's ID, or email address, to be prefilled in the authentication UI if possible. [See docs here](https://developers.google.com/identity/sign-in/ios/api/interface_g_i_d_sign_in.html#a0a68c7504c31ab0b728432565f6e33fd)
            forceCodeForRefreshToken: true, // [Android] related to `serverAuthCode`, read the docs link below *.
            // accountName: '', // [Android] specifies an account name on the device that should be used
            // iosClientId: '<FROM DEVELOPER CONSOLE>', // [iOS] optional, if you want to specify the client ID of type iOS (otherwise, it is taken from GoogleService-Info.plist)
        });
        this._isSignedIn();

    }
    _isSignedIn = async () => {
        const isSignedIn = await GoogleSignin.isSignedIn();
        if (isSignedIn) {
            //Get the User details as user is already signed in
            this._getCurrentUserInfo();
        } else {
            //alert("Please Login");
            console.log('Please Login');
        }
        this.setState({ gettingLoginStatus: false });
    };
    _getCurrentUserInfo = async () => {
        try {
            const userInfo = await GoogleSignin.signInSilently();
            console.log('User Info --> ', userInfo);
            // this.setState({ userInfo: userInfo });
            this.props.getUser(userInfo)
        } catch (error) {
            if (error.code === statusCodes.SIGN_IN_REQUIRED) {
                // alert('User has not signed in yet');
                console.log('User has not signed in yet');
            } else {
                alert("Something went wrong. Unable to get user's info");
                console.log("Something went wrong. Unable to get user's info");
            }
        }
    };


    _signIn = async () => {
        //Prompts a modal to let the user sign in into your application.
        try {
            await GoogleSignin.hasPlayServices({
                //Check if device has Google Play Services installed.
                //Always resolves to true on iOS.
                showPlayServicesUpdateDialog: true,
            });
            const userInfo = await GoogleSignin.signIn();
            console.log('User Info --> ', userInfo);
            // this.setState({ userInfo: userInfo });
            this.props.getUser(userInfo)
        } catch (error) {
            console.log('Message', error.message);
            if (error.code === statusCodes.SIGN_IN_CANCELLED) {
                console.log('User Cancelled the Login Flow');
            } else if (error.code === statusCodes.IN_PROGRESS) {
                console.log('Signing In');
            } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
                console.log('Play Services Not Available or Outdated');
            } else {
                console.log('Some Other Error Happened');
            }
        }
    };
    _signOut = async () => {
        //Remove user session from the device.
        try {
            await GoogleSignin.revokeAccess();
            await GoogleSignin.signOut();
            // this.setState({ userInfo: null });
            this.props.getUser(null)
            // Remove the user from your app's state as well
        } catch (error) {
            console.error(error);
        }
    };
    render() {
        console.log("sshduwgdjw", this.props.userInfo)
        if (this.state.gettingLoginStatus) {
            return (
                <View style={styles.container}>
                    <ActivityIndicator size="large" color="#0000ff" />
                </View>
            );
        } else {
            if (this.props.userInfo != null) {
                //Showing the User detail
                return (
                    <NavigationContainer>
                        <stack.Navigator >
                            <stack.Screen options={{ headerShown: false }} name="Contacts" component={tabScreen} />
                            <stack.Screen name="contactInfo" component={contactInfo} />
                        </stack.Navigator>
                        <TouchableOpacity style={styles.button} onPress={this._signOut}>
                            <Text>Logout</Text>
                        </TouchableOpacity>
                    </NavigationContainer>
                )
            } else {
                //For login showing the Signin button
                return (
                    <View style={styles.container}>
                        <GoogleSigninButton
                            style={{ width: 312, height: 48 }}
                            size={GoogleSigninButton.Size.Wide}
                            color={GoogleSigninButton.Color.Light}
                            onPress={this._signIn}
                        />
                    </View>
                );
            }
        }
    }
}
const mapStateToProps = (state) => {
    // Redux Store --> Component
    return {
        // contacts: state.contactReducer.contacts,
        userInfo: state.userInfo.userInfo,
    };
};
export default connect(mapStateToProps, { getUser })(Main)

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    imageStyle: {
        width: 200,
        height: 300,
        resizeMode: 'contain',
    },
    button: {
        alignItems: 'center',
        backgroundColor: '#DDDDDD',
        padding: 10,
        width: 400,
        marginTop: 0,
    },
});