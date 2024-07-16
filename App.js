// App.js
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { Button, Text, View } from 'react-native';
import { HomeNavigator } from './src/Home/components/HomeStack';
import { usePushNotifications } from './src/Home/screens/PushNotifications';
import { ProfileNavigator } from './src/Profile/components/ProfileStack';

const Tab = createMaterialBottomTabNavigator();

function PushNotificationScreen() {
  const { expoPushToken, notification, sendPushNotification } = usePushNotifications();

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'space-around' }}>
      <Text>Your Expo push token: {expoPushToken}</Text>
      <View style={{ alignItems: 'center', justifyContent: 'center' }}>
        <Text>Title: {notification && notification.request.content.title} </Text>
        <Text>Body: {notification && notification.request.content.body}</Text>
        <Text>Data: {notification && JSON.stringify(notification.request.content.data)}</Text>
      </View>
      <Button
        title="Press to Send Notification"
        onPress={async () => {
          await sendPushNotification(expoPushToken);
        }}
      />
    </View>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={HomeNavigator} />
        <Tab.Screen name="Profile" component={ProfileNavigator} />
        <Tab.Screen name="Notifications" component={PushNotificationScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
