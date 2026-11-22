import { initEvents } from "../events/index.js"
import { resetIndexState } from "../state/index.js"


let initialRoutData=[ ]

export const getPathName = ()=>{

    let pathName=window.location.hash
    pathName=pathName.slice(1,pathName.length)
    return pathName  
}

export const creatBrowserRouter=(routData)=>{

    initialRoutData = routData
    rebuildWebPages()
    initEvents() 
}


export const rebuildWebPages=()=>{

    resetIndexState()
    const pathName="/"
    const newPathName=getPathName()

    const rootElement=document.getElementById("root")
    rootElement.innerHTML=""

   initialRoutData.forEach((rout)=>{

        if (rout.path==newPathName) {
        rootElement.innerHTML=rout.element()
    
        }
   })
}
 
export const useNavigation=()=>{

    const navigation=(routName)=>{ 
        window.location.hash=`#${routName}`
        rebuildWebPages()
    //    console.log("navigation==>",navigation)
    }
  return navigation
}
