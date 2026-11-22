import { html } from "../../package/events/index.js";
import { createNewData } from "../form/formData.js";



export const productCreatForm=()=>{
    return (  
        html`
       
    <div class="form-controller">
          
       <form action="" id="createProductForm">
          <h3> Add New Product</h3>
          <div class="input-controller">
          <h5>product Image Picker</h5>
          <input type="text" placeholder="" id="pic" name="pic"> 
          </div>
          <div class="input-controller">
            <h5>Title</h5>
          <input type="text" placeholder=" " id="title" name="title"> 
          </div>
          <div class="input-controller">
            <h5>Description</h5>
          <input class="inputDescrib" type="text" placeholder="" id="description" name="description"> 
          </div>
    
          <div class="input-controller">
            <h5>Date</h5>
          <input type="text" placeholder="YYY-MM-DD" id="date" name="date"> 
          </div>
          <div class="btn-controller">
              <button onclick=${()=>{createNewData()}} class="create" type="submit">Add Product</button>
              
          </div>
       </form>
    </div>

       
    `
    );

};