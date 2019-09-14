import React,{ Component } from 'react';
import { SafeAreaView,View,Text,StyleSheet,Image,TouchableOpacity } from 'react-native';
import drinks from '../assets/images/drinks.jpg';

export default class ItemsCard extends Component{
    constructor(props){
        super(props);
        this.state = {

        }
    }

    onButtonPress(itemCode){
        this.props.onPress(itemCode);
    }

    render(){
        const { itemCode } = this.props;
        return(
            <TouchableOpacity onPress={() => {this.onButtonPress(itemCode)}}>
                <Image 
                    style={styles.image}
                    source={drinks} 
                />
            </TouchableOpacity>
        );
    }
}

const styles = StyleSheet.create({
    image : {
        width : 40,
        height : 40   
    }
})