import PushNotification from "react-native-push-notification";


export default {
    configure() {
        PushNotification.configure({

            onNotification(notification) {
                console.log("notification recevied", notification)
            },
            requestPermissions: Platform.OS === 'ios'

        })

        return PushNotification;
    }
}