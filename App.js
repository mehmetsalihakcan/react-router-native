import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {Route, NativeRouter, Link} from 'react-router-native';
import Login from './src/pages/login/Login';
import SignIn from './src/pages/signin/SignIn';
import Profile from './src/pages/profile/Profile';
import Dashboard from './src/pages/dashboard/Dashboard';

export default function App() {
  return (
   
    <NativeRouter>
       <View style={styles.container}>
         <Route exact path="/" component={Login} />
         <Route  path="/login" component={Login} />
         <Route  path="/dashboard" component={Dashboard} />
         <Route  path="/signin" component={SignIn} />
         <Route  path="/profile" component={Profile} />
       </View>
    </NativeRouter>
   
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
