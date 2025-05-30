// import { configureStore } from "@reduxjs/toolkit";

// const store= configureStore({
//     reducer:{

//     }
// })

// export default store;

import { configureStore } from "@reduxjs/toolkit";

// Dummy reducer to avoid the error
const dummyReducer = (state = {}, action) => state;

const store = configureStore({
  reducer: {
    dummy: dummyReducer
  }
});

export default store;
