# Pass data from one component to another component
1.Props
2.Context-Api

# React launch another thing that is called flux Architecture.
Store      - Globel
Dispatch   - function 
Action     - Special Object
Component  - Fn/Classes

# This is typicall complex for many developers Then many libraries Comes into picture
like Re-flux, FaceBokk flux, fluxState tec

# still developers unhappy with these thing then redux comes into picure

# Redux:-
->Flux Pattern + Own Pattern = Redux Pattern ---> Set of function + Rules

# What is Redux:-
->Redux is simple pattern and Library

# What is use/Purpose ?
->Redux is use to manage state(data) in the JS Application.

# Component --> Dispatche(Action) --> Reducer --> Redux store.

# Redux Pattern:-

# Store :- 
Step.1:- Create a React component.
Step.2:- Create Redux store using redux Library.
Step.3:- Provided Redux Store to all the component using Provider Component of react-redux

# Reducer Function:-
Step.1:- Reducer is a simple js function which takes two parameter and they are  [storedata and action] and it returns storeData.
Step.2:- Reducer should be registerd with Redux store.
Step.3:- Reducer can store default data in the redux store using its first parameter.
Step.4:- Whenever Applications start first time, Redux store will call Reducer function and Whatever Reducer will return that data will be stored redux store.

# Note:- Whenever reducer returns data at any point of time, that data will be stored in the redux store.

# Action :- 
->Action is a special objcet, whic contain one mandatory Property called type and value of this type Property should be unique.
->Action object is used too store the data of component
->Action object is passed as argument to the dispatch function.

     {
        type : "name"
     }

# Dispatch :-
->Dispatch() is predefined function which takes one argument and i.e. action object.
->Dispatch is used to call reducer() and pass the action object to reducer, reducer() will be called internally whenever dispatch is called and action object willl be stored in the second parameter of reducer.
->Dispatch() we can access using Redux store or using useDispatch() hook of react-redux.

->Dispatch() can be called from component directly.