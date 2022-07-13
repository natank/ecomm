import { faker } from "@faker-js/faker";

const mount = (el: Element) => {
  const cartText = `<div>You have ${faker.random.numeric(
    5
  )} items in your cart</div>`;
  el.innerHTML = cartText;
};

if (process.env.NODE_ENV === "development") {
  const el = document.querySelector("#cart-dev");
  if (el) {
    mount(el);
  }
}

export { mount };
