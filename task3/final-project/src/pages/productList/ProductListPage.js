
import { AppHeaderCreatProduct } from "../../components/index.js"
import { productCreatForm } from "../../components/productCreatForm/productCreatForm.js"
import { html } from "../../package/events/index.js"
import { useNavigation } from "../../package/router/router.js"

 const ProductListPage=()=>{
      return(
       html`
       ${AppHeaderCreatProduct()}

       <div class="product-list-page">
         ${productCreatForm()}
        </div>` 
    )
}
export default ProductListPage 