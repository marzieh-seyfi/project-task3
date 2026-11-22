
import { AppHeader, cardController } from "../../components/index.js"
import { html } from "../../package/events/index.js"

 
export const LandingPage = ()=> {

     let productList=[
    {id:1, title:"Product Title 1", discrib:"Lorem ipsum dolor sit amet consectetur.Eu suspendisse ullamcorper risus ultrices lacus eros varius donec aliquam.",date:"02 Feb 2023", pic:"src/assests/images/camera.png"},
    {id:2, title:"Product Title 2", discrib:"Lorem ipsum dolor sit amet consectetur.Eu suspendisse ullamcorper risus ultrices lacus eros varius donec aliquam.",date:"02 Feb 2023", pic:"src/assests/images/camera.png"},
    {id:3, title:"Product Title 3", discrib:"Lorem ipsum dolor sit amet consectetur.Eu suspendisse ullamcorper risus ultrices lacus eros varius donec aliquam.",date:"02 Feb 2023", pic:"src/assests/images/camera.png"},
    {id:4, title:"Product Title 4", discrib:"Lorem ipsum dolor sit amet consectetur.Eu suspendisse ullamcorper risus ultrices lacus eros varius donec aliquam.",date:"02 Feb 2023", pic:"src/assests/images/camera.png"},
    {id:5, title:"Product Title 5", discrib:"Lorem ipsum dolor sit amet consectetur.Eu suspendisse ullamcorper risus ultrices lacus eros varius donec aliquam.",date:"02 Feb 2023", pic:"src/assests/images/camera.png"},
    {id:6, title:"Product Title 6", discrib:"Lorem ipsum dolor sit amet consectetur.Eu suspendisse ullamcorper risus ultrices lacus eros varius donec aliquam.",date:"02 Feb 2023", pic:"src/assests/images/camera.png"},
    
]


return(
 html` 
 ${AppHeader()}
    <div class="landing-page">
        
     ${productList.map(item=>cardController(item)
     
     ).join("")}
    </div>
  
 `)  
}