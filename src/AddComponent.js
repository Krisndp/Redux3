import React from 'react';
import {View, Text, TextInput, TouchableOpacity, Dimensions, Alert} from 'react-native';
import {connect} from 'react-redux';
const {width, height} = Dimensions.get('window');
import { addNew } from '../redux/action/actionCreators'

class AddComponent extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            taskName:''
        }
    }

    addNew(taskName){
        this.props.addNew(taskName);
        this.setState({taskName:''});
        
    }

    render(){
        const {taskName} = this.state;
        return(
            <View style = {{height: height/ 10, width, backgroundColor: 'red', flexDirection:'row' }}>
                <View style = {{flex: 9, justifyContent:'center', alignItems:'center'}}>
                    <TextInput
                    placeholder = 'Add new task'
                    style = {{paddingLeft: 20, color:'black', margin:5 ,fontSize: 14 ,width: width * 0.8, backgroundColor:'white'}}
                    onChangeText = {text => this.setState({taskName:text})}
                    value = {this.state.taskName}
                    />
                </View>
                <View style = {{flex:1}}>
                    <TouchableOpacity onPress = {()=> this.addNew(taskName)} style = {{flex:1, justifyContent:'center', alignItems:'center'}}>
                        <Text style = {{color: "white", fontSize:40, marginRight:10 }}>+</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}
function mapSTP(state){
    Alert.alert(`poi ${JSON.stringify(state)}`)
    return { myState: state };
}

export default connect(mapSTP,{addNew})(AddComponent);