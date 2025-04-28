import { StyleSheet } from "react-native";

const todoListStyle = StyleSheet.create({
  container: {
    flex: 1, 
    paddingHorizontal: 24, 
    paddingVertical: 24, 
    backgroundColor: 'white',
  },
  inputContainer: {
    flexDirection: 'row', 
    alignItems: 'center', 
  },
  inputStyle: {
    flex: 1, 
    borderWidth: 1, 
    padding: 16, 
    borderRadius: 8
  },
  addButtonStyle: {
    backgroundColor: '#8ACCD5', 
    borderRadius: 5, 
    marginLeft: 8
  },
  addButtonText: {
    color: '#F8F8E1',
    padding: 8,
    fontSize: 16
  },
  contentContainer: {
    flex: 1
  },
  contentHeader: {
    fontSize: 20, 
    paddingVertical: 24
  },
  todoItemContainer: {
    flexDirection: 'row', 
    alignItems: 'center',
     paddingVertical: 8, 
     backgroundColor: '#FCEFCB',
     padding: 8, 
     borderRadius: 8, 
     marginTop: 4
  },
  todoItem: {
    flex: 1
  },
  todoItemText: {
    fontSize: 20, 
    color: 'black'
  },
  todoItemDeleteButton: {
    backgroundColor: '#8E1616', 
    borderRadius: 5, 
    padding: 8
  },
  todoItemDeleteText: {
    color: 'white'
  },
  bottomButton: {
    backgroundColor: '#8ACCD5',
    borderRadius: 5,
    padding: 8,
    marginTop: 16,
    alignItems: 'center'
  },
  bottomButtonText: {
    fontSize: 16,
    color: '#F8F8E1'
  },
  emptyListText: {
      fontSize: 20,
      textAlign: 'center',
      marginTop: 24,
      color: '#657C6A'
  }
});

export default todoListStyle;