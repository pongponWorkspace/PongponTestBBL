import { FlatList, Text, TextInput, TouchableOpacity, View } from "react-native";
import React from "react";
import useTodoListController from "./todo-list-controller";
import BouncyCheckbox from "react-native-bouncy-checkbox";
import todoListStyle from "./todo-list-style";

const TodoListScreen = () => {
  const {
    todoItems,
    addTodoItem,
    removeTodoItem,
    setItemName,
    itemName,
    updatedCheckItems,
    clearAll,

  } = useTodoListController();
  return (
    <View style={todoListStyle.container}>
      <View>
        <View style={todoListStyle.inputContainer}>
          <TextInput 
            style={todoListStyle.inputStyle}
            value={itemName}
            placeholder="Add a new task"
            onChangeText={(item) => {
              setItemName(item);
            }}
          />
          <TouchableOpacity 
            style={todoListStyle.addButtonStyle}
            onPress={() => {addTodoItem(itemName)}}
          >
            <Text style={todoListStyle.addButtonText}> + Add</Text>
          </TouchableOpacity>
        </View>
      </View>

      <View style={todoListStyle.contentContainer}>
        <Text style={todoListStyle.contentHeader}>Todo List</Text>
        <FlatList
          data={todoItems}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) =>{
            return  (
              <View style={todoListStyle.todoItemContainer}>
                <View style={todoListStyle.todoItem}>
                  <BouncyCheckbox
                    size={25}
                    fillColor="#03A791"
                    unFillColor="#FFFFFF"
                    text={item.task}
                    textStyle={todoListStyle.todoItemText}
                    onPress={(isChecked: boolean) => {
                      updatedCheckItems(item.id, isChecked);
                    }}
                  />
                </View>
                <TouchableOpacity 
                  onPress={() => removeTodoItem(item.id)}
                  style={todoListStyle.todoItemDeleteButton}
                >
                  <Text style={todoListStyle.todoItemDeleteText}>Delete</Text>
                </TouchableOpacity>
              </View>
            )
          }}
          ListEmptyComponent={(
            <Text style={todoListStyle.emptyListText}>No tasks available</Text>
          )}
        />
      </View>
      <TouchableOpacity
        onPress={() => {
          clearAll();
        }}
        style={todoListStyle.bottomButton}
        >
          <Text style={todoListStyle.bottomButtonText}> Clear All </Text>
        </TouchableOpacity>
  </View>
  );
};

export default TodoListScreen;