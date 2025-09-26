  import { configureStore } from "@reduxjs/toolkit";
  import authSlice from "./authSlice"
  import videoStore from "./videoStore"



  const store= configureStore(
    {
        reducer:{
           auth:authSlice,
           video:videoStore
        }
    }
  )

  export default store