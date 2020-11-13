import React from 'react';
import {View,Text,StyleSheet,ScrollView,TouchableOpacity} from 'react-native';
import * as Animatable from 'react-native-animatable';
import Scroll from './scroll';
import Goal from './goals';

export default class Mission extends  React.Component{

    change = () => {
        return(
            this.props.navigation.navigate('Exercise')
        )
    }

    render(){
        return(
            <View style={styles.container}>
                <ScrollView showsVerticalScrollIndicator={false} style={{flex:1}} contentContainerStyle={{width:'100%',height:'120%'}}>
                    <View style={styles.header}>
                        <Text style={styles.inline}>My Mission</Text>
                    </View>
                    <View style={styles.memos}>
                        <ScrollView
                        horizontal={true} 
                        contentContainerStyle={{width:'150%'}}
                        showsHorizontalScrollIndicator={false}>
                            <Scroll bgcolor="#077235" 
                            background={require('../assets/graphtwo.png')}
                            title="Workout Challenge"
                            month = "3 Months"
                            />
                             <Scroll bgcolor="#072e70" 
                            background={require('../assets/graphtwo.png')}
                            title="100 Km Jogging"
                            month = "1 Month"
                            />
                             <Scroll bgcolor="#e59c00" 
                            background={require('../assets/graphtwo.png')}
                            title="No Junk Food Challenge"
                            month = "6 Months"
                            />
                        </ScrollView>
                    </View>
                    <View style={styles.supportview}>
                        <Text style={styles.support}>Daily Goals</Text>
                    </View>
                    <View style={[styles.rectangleone,{shadowOffset: { width: 100, height: 100 },
                    shadowColor: 'rgba(138, 149, 158)',
                    shadowOpacity: 1,
                    elevation: 30,
                    backgroundColor : "#FFFFFF"}]}>
                        <Goal
                        image = {require('../assets/exercise.png')}
                        title = "Exercise"
                        subtitle = "Difficulty on insensible"
                        screenchange = {()=>this.change()}
                        />
                    </View>
                    <View style={[styles.rectangleone,{shadowOffset: { width: 100, height: 100 },elevation:30, top : 580,backgroundColor:'#FFF'}]}>
                        <Goal
                        image = {require('../assets/apple.png')}
                        title = "Balanced Diet"
                        subtitle = "Occasional Preference fast"
                        />
                    </View>
                    <View style={[styles.rectangleone,{shadowOffset: { width: 100, height: 100 },elevation:30,top : 690,backgroundColor:'#FFF'}]}>
                        <Goal
                        image = {require('../assets/cricket.png')}
                        title = "Sports and Yoga"
                        subtitle = "Services securing health ..."
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
        left : 25,
        top : 100
    },
    inline : {
        fontSize : 38,
        letterSpacing : -0.5,
        fontWeight : 'bold',
        color : '#2E2E2E'
    },
    memos : {
        height : 250,
        position : 'absolute',
        top : 160,
        width:'100%',
        marginLeft : 10
    },
    supportview : {
        position : 'absolute',
        left : 25,
        top : 420
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
        top : 470,
        borderRadius : 18
    }
})