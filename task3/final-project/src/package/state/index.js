import { rebuildWebPages } from "../router/router.js"

let state=[]
let indexState = 0

export const resetIndexState=()=>{
    indexState=0
}

 export const useState =(initialState)=>{

  const index = indexState++  

    if (!(index in state)) {
        state[index]=initialState 
        console.log("index==>",state)  
    }

    let getState =()=>{
        return state[index]
    }

    const setState=(newState)=>{
     
        state[index]=newState
console.log("setState==>",state)
        rebuildWebPages()

        console.log("setState==>",state)
    }
        
    return [state[index],setState,getState]
}