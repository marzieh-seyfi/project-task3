import { extractFormData } from "../../package/extractFormData.js"

 export const createNewData=(event)=>{

     event.preventDefault()
 
const formData=extractFormData(event.target,1)

const newData={

    id:productList.length+1,
     title:formData.title,
      discrib:formData.description,
      date:formData.date,
       pic:"camera.png"
}
productList.push(newData)
productCardGenerator.generator(productList,"productCardContainer")

console.log("formData==>",formData)
console.log("newData==>",newData)
return
}
 
