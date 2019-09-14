import React,{ Component } from 'react';
import { View,Text,StyleSheet,SafeAreaView,Fragment } from 'react-native';
import OptionCard from './components/OptionCard';
import ItemsCard from './components/ItemsCard';

const OptionCards = [
  {
    key : 1,
    text : 'Beverages'
  },
  {
    key : 2,
    text : 'Chips'
  },
  {
    key : 3,
    text : 'Sweets'
  },
  {
    key : 4,
    text : 'Medicine'
  },
  {
    key : 5,
    text : 'Stationery'
  }
]
export default class App extends Component{
  constructor(props){
    super(props);
    this.state = {
      category : null,
      itemCode : null
    }
  }

  handleOptionCardOnPress = (category) => {
    this.setState({category : category.toLowerCase()});
  }

  handleItemOnPress = (itemCode) => {
    this.setState({itemCode : itemCode.toLowerCase()})
  }

  render(){
    const { category,itemCode } = this.state;
    if(category === null){
      return(
        <SafeAreaView style={styles.container}>
          <Text style={styles.title}>My Vending Machine</Text>
          <View style={styles.content}>
            {OptionCards.map(Option => 
              <OptionCard 
                text={Option.text} 
                key={Option.key}
                onPress={this.handleOptionCardOnPress.bind(this)}
              />
            )}
          </View>       
        </SafeAreaView>
      );
    }else if(itemCode === null){
      return(
        <SafeAreaView style={styles.container}>
          <ItemsCard 
            onPress={this.handleItemOnPress.bind(this)}
            itemCode={'A1'}
          />
        </SafeAreaView>
      )
    }else{
      return(
        <SafeAreaView style={styles.container}>
          <Text>Hello world</Text>
        </SafeAreaView>
      )
    }
  }
}

const styles = StyleSheet.create({
  container : {
    alignItems: 'center',
    flex: 1,
    // justifyContent: 'center'
  },
  title : {
    marginBottom : 20,
    fontSize : 24
  },
  content : {
    width : '100%',
    // alignItems : 'center'
  }
})