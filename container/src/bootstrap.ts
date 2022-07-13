// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import { mount as productsMount } from "products/ProductsIndex";
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import { mount as cartMount } from "cart/CartShow";
import "cart/CartShow";
console.log("container");

productsMount(document.querySelector("#my-products"));
cartMount(document.querySelector("#my-cart"));
