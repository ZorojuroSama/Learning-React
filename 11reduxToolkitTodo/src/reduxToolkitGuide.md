# Steps to configure redux toolkit

## 1. Make a store :
1. make a store.js file anywhere inside source folder.(I prefer to put inside "app" folder).
2. import {configureStore} from react/toolkit.
3. export const store = configureStore({})
4. ```javascript
        import {configureStore} from "react/toolkit"

        export const store = configureStore({})
    ```

## 2. Create Reducers: 
### note - reducers in redux toolkit are known as slices.
**Reducers act like containers to store properties or functions**

1. Create a file for the slice(todoSlice.js)
    - File structure:
        - src/features/todo/todoSlice.js

    **(only for this particular project.)**  
2. Import createSlice method from redux toolkit.  
```javascript
import { createSlice, nanoid } from '@reduxjs/toolkit';
```
3. Create a initial state for the store.
```javscript 
const initialState = {
    todos: [{id: 1, text: "Hello World"}]
}
```
4. Create a slice object and export. Give it a name which is mandetory.
```javascript
export const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        addTodo: () => {},
        removeTodo: () => {},
        updateTodo: () => {},
    }
}) 
```
5. Exporting is done in two steps:
    -  all the functionalities idividually to use them inside the components.
        - addTodo
        - removeTodo
        - updateTodo
    - export the default reducer to register it in the store.
```javascript
export const {addTodo, removeTodo, update.Todo} = todoSlice.actions

export default todoSlice.reducer
```
6. Import the reducer in store.js


### This is my reducer/slice code for this project:

```Javascript
import { createSlice, nanoid } from '@reduxjs/toolkit';

const initialState = {
    todos: [{id: 1, text: "Hello World"}]
}

export const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        addTodo: () => {},
        removeTodo: () => {},
        updateTodo: () => {},
    }
}) 

export const {addTodo, removeTodo, update.Todo} = todoSlice.actions

export default todoSlice.reducer
```

## 3. Using useDispatch:
1. Import useDispatch method.
```javascript
import { useDispatch } from "react-redux";
```
2. Import addTodo property from the reducer
```javascript 
import { addTodo } from "../features/todo/todoSlice";
```
3. Create dispatch using useDispatch()
```javascript
const dispatch = useDispatch();
```
---
📝**Note:** <font color='yellow'>Dispatch reducer ko use krke store mein changes karta hai</font>

 - Dispatch
    - reducer
       - store
---
