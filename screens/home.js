import React from 'react';
import {View,StyleSheet,Text, ImageBackground} from 'react-native';
import Day from './day';
import Card from './card';

export default class Home extends React.Component{
    state = {
        color : '#369307',
        activestate : 'rgba(255,255,255,0.3)'
    }

    change = () => {
        return(
            this.props.navigation.navigate('Mission')
        )
    }

    render(){
        return(
            <View style={styles.container}>
                <View style={styles.container1}>
                    <View style={styles.box1}></View>
                    <View style={styles.box2}>
                        <Text style={styles.name}>Hi Peter</Text>
                        <Text style={styles.subtitle}>Here is your health</Text>
                    </View>
                    <View style={styles.box3}>
                        <ImageBackground source = {require('../assets/graphone.png')} style={{width:360,height:'100%'}}/>
                    </View>
                    <View style={styles.box4}>
                        <Day dayname="Sun"/>
                        <Day dayname="Mon"/>
                        <Day dayname="Tue"/>
                        <Day dayname="Wed"/>
                        <Day dayname="Thu" active={this.state.activestate}/>
                        <Day dayname="Fri"/>
                        <Day dayname="Sat"/>
                    </View>
                </View>
                <View style={styles.container2}>
                    <View style={styles.line}></View>
                    <View style={styles.progress}>
                        <Text style={styles.text1}>My Progress</Text>
                    </View>
                    <View style={styles.cards}>
                        <Card
                            move="bounceInLeft"
                            image={require('../assets/checkbox.png')}
                            title="Mission"
                            subtitle="85% Complete"
                            completed="85%"
                            screenchange = {()=>this.change()}
                        />
                        <Card
                            move="bounceInLeft"
                            image={require('../assets/checktodo.png')}
                            title="Completed"
                            subtitle="75% Complete"
                            completed="75%"
                        />
                    </View>
                </View>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    container : {
        flex : 1,
        backgroundColor : '#369307',
    },
    container1 : {
        flex : 1.5,
    },
    container2 : {
        flex : 1,
        backgroundColor: '#fff',
        borderTopLeftRadius : 30,
        borderTopRightRadius : 30,
    },
    box1 : {
        flex : 1,
    },
    box2 : {
        flex : 0.8,
        paddingLeft : 20,
        paddingTop : 10
    },
    box3 : {
        flex : 2.5,
    },
    box4 : {
        flex : 0.5,
        color : '#fff',
        flexDirection : 'row',
    },
    name : {
        fontSize : 35,
        color : '#fff',
        fontWeight : 'bold',
        letterSpacing: 1,
    },
    subtitle : {
        fontSize : 20,
        color : '#fff',
        
    },
    line : {
        width : 64,
        height : 4,
        backgroundColor : '#f4f0f4',
        borderRadius : 2,
        marginVertical : 25,
        left : 150,
    },
    progress : {
        left : 50
    },
    text1 : {
        fontSize : 20,
        color : '#2D2D2D',
        letterSpacing : 1
    },
    cards : {
        flex : 1,
        marginTop : 10,
        marginHorizontal : 30
    }

})