import { html } from "../../package/events/index.js"
import { useNavigation } from "../../package/router/router.js"
import { useState } from "../../package/state/index.js"




export const customButton=()=>{

   const navigation=useNavigation()

       const [state,setState,getState]=useState("Add Product")
      const [statelanding,setStatelanding,getStatelanding]=useState("products")
      
   
       const ProductListPageBtnHandler=()=>{
   
       navigation( "/product-List")
   
       setState("Add Product")
       
       }
       const LandingPageBtnHandler=()=>{
   
          navigation("/") 
          setStatelanding("products")
       }
       
 
return(
   html `
    <div class="custom-button">
     <button class="btn-header btn-header-product-list"><img src="src/assests/images/user.png">product List</button>
      <button onclick=${()=>{LandingPageBtnHandler()}} class="btn-header btn-header-products">${getStatelanding()}</button>
       <button onclick=${()=>{ProductListPageBtnHandler()}} class="btn-header btn-header-Addproducts"><img src="src/assests/images/user.png">${getState()}</button>
    </div>
    `
)

}