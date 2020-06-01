import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

function GoalItem(props) {
    return (
        <TouchableOpacity activeOpacity={0.5} onPress = {()=>props.removeGoal(props.items.id)}>
        <View style={styles.listDisplayed} >
          <Text>{props.items.value}</Text>
          {/* <Button title="x"></Button> */}
        </View>
        </TouchableOpacity>
    )
}
const styles = StyleSheet.create({
     listDisplayed: {
        flexDirection: "row",
        justifyContent: "space-between",
        padding: 10,
        borderColor: 'grey',
        borderWidth: 1,
        margin: 10,
        backgroundColor: "lightgreen"
      }
})
export default GoalItem
