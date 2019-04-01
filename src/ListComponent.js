import React from 'react';
import {View, Text} from 'react-native';
import { connect } from 'react-redux';
import { toggleTask } from '../redux/action/actionCreators'

class ListComponent extends React.Component{

    render(){
        const {item} = this.props;
        return(
            <View style = {{backgroundColor:'yellow' , margin:10,}}>
                <Text onPress = {()=>this.props.toggleTask(item.taskId)} style = {{color: item.completed ? 'black' : 'blue', fontSize: 18, margin:10}}>{item.taskName}</Text>
            </View>
        )
    }
}

export default connect(null, {toggleTask})(ListComponent);