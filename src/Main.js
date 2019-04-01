import React from 'react';
import { View, Text, FlatList } from 'react-native';
import { connect } from 'react-redux';
import AddComponent from './AddComponent';
import ListComponent from './ListComponent'

class Main extends React.Component {

    render() {
        return (
            <View style={{ flex: 1, backgroundColor: 'green' }}>
                <AddComponent />
                <View style={{ marginTop: 10 }}>
                    <FlatList
                        data={this.props.myTask}
                        renderItem = {({item, index})=> <ListComponent item = {item}/>}
                        keyExtractor = {item => Number(item.taskId)}
                    />
                </View>
            </View>
        )
    }
}
function mapStateToProps(state) {
    console.log(state);
    return { myTask: state.taskReducer }
}

export default connect(mapStateToProps)(Main)