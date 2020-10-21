# Introduction 
TODO: Give a short introduction of your project. Let this section explain the objectives or the motivation behind this project. 

# Getting Started
All commands used so far:
1.	Create React app: npx create-react-app my-app
2. Install Material UI: npm install @material-ui/core
3. Install Material Icon: npm install @material-ui/icons
4. Install typescript: npm install typescript
5. install Redux Toolkit: npm install @reduxjs/toolkit
6. install Redux Code: npm install redux
7. install react-redux: npm install react-redux
8. install recharts: npm i recharts
9. install faker: npm i faker
10. install router dom: npm install react-router-dom 
11. install redux-saga: npm install redux-saga 
12. install axios for API call:npm install axios

# Build and Test
npm start
npm test
npm run build

# Next Topic or questions
1. multiple reducer or state: the use case should be to work with multiple objects. In this case, how to set that up?


# Saga effect
1. Fork:  performs a non-blocking operation on the function passed.
1. Take:  pauses until action received.
1. Race:  runs effects simultaneously, then cancels them all once one finishes.
1. Call:  runs a function. If it returns a promise, pauses the saga until the promise is resolved.
1. Put:  dispatches an action.
1. Select:  Runs a selector function to get data from the state
1. takeLatest:  means we are going to execute the operations, then return only the results of the last one call. If we trigger several cases, it’s going to ignore all of them except the last one.
1. takeEvery:  will return results for all the calls triggered.
