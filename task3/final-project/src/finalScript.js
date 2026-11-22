
// rooting

import { creatBrowserRouter, useNavigation } from "./package/router/router.js";
import { LandingPage, ProductListPage } from "./pages/index.js";

const navigation=useNavigation()
navigation("/")


creatBrowserRouter([
    {path:"/",element:()=>{return LandingPage()}},
    {path:"/product-List",element:()=>{return ProductListPage()}},
])