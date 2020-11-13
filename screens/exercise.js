import React from 'react';
import {View,Text,StyleSheet,ScrollView,TouchableOpacity} from 'react-native';
import * as Animatable from 'react-native-animatable';
import Scroll from './scroll';
import Goal from './goals';

export default class Exercise extends  React.Component{
    render(){
        return(
            <View style={styles.container}>
                <ScrollView showsVerticalScrollIndicator={false} style={{flex:1}} contentContainerStyle={{width:'100%',height:'100%'}}>
                    <View style={styles.header}>
                        <Text style={styles.inline}>Workout Plans</Text>
                    </View>
                    <View style={[styles.rectangleone,{shadowOffset: { width: 100, height: 100 },
                    shadowColor: 'rgba(138, 149, 158)',
                    shadowOpacity: 1,
                    elevation: 30,
                    backgroundColor : "#2e7e3b"}]}>
                        <Goal
                        image = {require('../assets/exercise.png')}
                        title = "Beginer Workout"
                        subtitle = "Efficient workout regime for beginers"
                        />
                    </View>
                    <View style={[styles.rectangleone,{shadowOffset: { width: 100, height: 100 },elevation:30, top : 300,backgroundColor:'#FFF'}]}>
                        <Goal
                        image = {require('../assets/exercise.png')}
                        title = "Abs Workout"
                        subtitle = "Quick abs tone routine"
                        />
                    </View>
                    <View style={[styles.rectangleone,{shadowOffset: { width: 100, height: 100 },elevation:30,top : 400,backgroundColor:'#e59c00'}]}>
                        <Goal
                        image = {require('../assets/exercise.png')}
                        title = "Leg Workout"
                        subtitle = "Get the perfect legs of your dreams"
                        />
                    </View>
                </ScrollView>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    container : {
        flex : 1,
        backgroundColor : '#fff'
    },
    header : {
        flex : 1,
        left : 50,
        top : 100
    },
    inline : {
        fontSize : 38,
        letterSpacing : -0.5,
        fontWeight : 'bold',
        color : '#2E2E2E'
    },
    support : {
        fontSize : 25,
        fontWeight : 'bold',
        letterSpacing : -0.5,
        color : '#2E2E2E'
    },
    rectangleone : {
        height : 85,
        width : 300,
        position : 'absolute',
        alignSelf  : 'center',
        top : 200,
        borderRadius : 18
    }
})