
import { html } from "../package/events/index.js";

export const cardController=(item)=>{
    return (  
        html`
            <div class="products">
          <div class="product-card">
            <img src="${item.pic}">       
         
        <div class="product-info">
            <h3>${item.title}</h3>
            <p>${item.discrib}</p>
         
      <div class="product-bottom">
        <span>${item.date}</span>
        <button class="btn">Edit</button>
        <button class="btn">Delete</button>

    </div>   </div>   </div>   </div>
    `
    );

};


