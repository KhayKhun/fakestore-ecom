import { configureStore } from "@reduxjs/toolkit";
import menuactive from "./menuactive";
import priceToggle from "./priceToggle";
import products from "./products";

export default configureStore({
    reducer : {
        menu : menuactive ,
        price: priceToggle,
        products : products
    }
})
