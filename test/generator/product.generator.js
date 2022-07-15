import { faker } from '@faker-js/faker';

export const product = () => {
  return {
    title: faker.commerce.product(),
    description: faker.commerce.productDescription(),
    code: faker.random.alphaNumeric(6),
    thumbnail: faker.internet.avatar(),
    price: Math.floor(Math.random() * 10000),
    stock: Math.floor(Math.random() * 1000),
  }
}
