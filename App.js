import React, { useState } from 'react';
import { StyleSheet, Text, View, FlatList, Button } from 'react-native';
import GoalItem from './Components/GoalItem';
import GoalInput from './Components/GoalInput'

export default function App() {
  const [courseGoals, setCourseGoal] = useState([]);
  const [displayAddMode, setDisplayAddMode] = useState(false)
 
  const addGoalHandler = (goalName) => {
    setCourseGoal(currentGoals => [...currentGoals, {id:Math.random().toString(), value:goalName}])
    setDisplayAddMode(false);
  }
  const removeGoalHandler = (goalId) => {
   setCourseGoal(currentGoals => {
        return currentGoals.filter(a => a.id !== goalId)
   })
  }
  const cancelGoalHandler = () =>{
    setDisplayAddMode(false)
  }
  return (
    <View style={styles.styleParentView} >
      <Button title="Add New Goal" onPress={()=>setDisplayAddMode(true)} />
      <GoalInput visible={displayAddMode} buttonClick= {addGoalHandler} cancelHandler={cancelGoalHandler} />
      <FlatList
      keyExtractor = {(item,index)=> item.id}
       data={courseGoals} renderItem={itemData => (
       <GoalItem items={itemData.item} removeGoal = {removeGoalHandler}/>
      )} />
    </View>
  );
}
const styles = StyleSheet.create({
  styleParentView: {
    padding: 30
  }
})

