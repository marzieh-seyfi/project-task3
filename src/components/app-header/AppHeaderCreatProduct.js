import { html } from "../../package/events/index.js"
import { customButton } from "../custom/customButton.js"


const AppHeaderCreatProduct=()=>{return(
    html`<div class="app-header">
        <div class="top">
          <div>${customButton()}</div>
        </div>

    </div>
     
    `
    )

}
export default AppHeaderCreatProduct