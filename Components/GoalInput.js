import React, {useState} from 'react'
import { StyleSheet, View, Button, TextInput, Modal } from 'react-native';
function GoalInput(props) {
    const [enteredGoal, setEnteredGoal] = useState('');
    const goalInputHandler = (value) => {
        setEnteredGoal(value)
      }
      const addGoalHandler = () => {
          if(enteredGoal === '') return ;
          props.buttonClick(enteredGoal);
            setEnteredGoal('')
      }
    return (
        <Modal visible={props.visible} animationType="slide">
        <View style={styles.styleInputContainer}>
        <TextInput placeholder="Course Goal" style={styles.styleTextInput} onChangeText={goalInputHandler} value={enteredGoal} />
        <View style={styles.styleButtonContainer}>
         <View style={styles.styleButton}>
        <Button  title="ADD" onPress={addGoalHandler} />
         </View>
        <View style={styles.styleButton}>
        <Button  title="Cancel" onPress={props.cancelHandler} color="red" />
        </View>
        </View>
      </View>
      </Modal>
    )
}
const styles = StyleSheet.create({
    styleInputContainer: {
        flex:1,
        justifyContent: 'center',
        alignItems: 'center'
      },
      styleTextInput: {
        borderColor: 'black',
        borderWidth: 1,
        padding: 10,
        width: "80%",
        textAlign: "center",
        margin:10,
      },
      styleButtonContainer : {
          flexDirection:'row',
          width:'60%',
         justifyContent:'space-between'
      },
      styleButton:{
          margin:10,
          width:"40%"
      }
})
export default GoalInput
