import { faker } from '@faker-js/faker';

const cartText = `<div>You have ${faker.random.numeric(
	5
)} items in your cart</div>`;
document.querySelector('#cart-dev').innerHTML = cartText;
