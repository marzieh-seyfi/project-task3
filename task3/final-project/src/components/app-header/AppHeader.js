import { html } from "../../package/events/index.js"
import { rebuildWebPages, useNavigation } from "../../package/router/router.js"
import { useState } from "../../package/state/index.js"
import { customButton } from "../index.js"
import { search } from "../search/search.js"


const AppHeader=()=>{

    return(
    html`<div class="app-header">
        <div class="top">
          <div>${customButton()}</div>
        </div>
        <div class="bottom">
          <div>${search({type:"text",placeholder:"search product..."})}</div>  
        </div>
       

    </div>
     
    `
    )

}
export default AppHeader