import { faker } from "@faker-js/faker";

const mount = (el: Element) => {
  let products = "";

  for (let i = 0; i < 5; i++) {
    const name = faker.commerce.productName();
    products += `<div>${name}</div>`;
  }
  el.innerHTML = products;
};

if (process.env.NODE_ENV === "development") {
  const el = document.querySelector("#dev-products");
  // Assuming our container doesn't have an element with id 'dev-products'
  if (el) {
    // We are probably in isolation
    mount(el);
  }
}

export { mount };
