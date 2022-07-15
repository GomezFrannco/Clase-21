import request from 'supertest';
import { expect } from 'chai';
import { describe } from 'mocha';
import * as generator from './generator/product.generator.js';

const req = request.agent("http://localhost:8080");

describe('Products API endpoints test', () => {
  before(()=>{
    console.log('============TESTS START============\n');
  })
  after(()=>{
    console.log('===========ALL TEST ENDS============');
  })

  describe('GET request', ()=> {
    before(()=>{
      console.log('=============GET TEST=============\n');
    })
    after(()=>{
      console.log('=============TEST ENDS============');
    })
    afterEach(()=>{
      console.log('\n**********************************\n');
    })
    describe('GetAll status 200', () => { 
      it('this should return a status code 200', async () => {
        let response = await req.get('/api/products');
        expect(response.status).to.eql(200);
      })
    })
    describe('GetAll data', () => { 
      it('returns an array of objects', async () => {
        let response = await req.get('/api/products');
        expect(response.status).to.eql(200);
        expect(response.body).to.be.an('array');
        expect(response.body[0]).to.be.an('object');
        expect(response.body[1]).to.be.an('object');
      })
    })
    describe('GetById status 204', () => { 
      it('this should return a status code 204', async () => {
        let response = await req.get('/api/products/id/random');
        expect(response.status).to.eql(204);
      })
    })
    describe('GetById status 200', () => { 
      it('this should return a status code 200', async () => {
        let response = await req.get('/api/products/id/62d1b1be44c4e5a6b580e6c8');
        expect(response.status).to.eql(200);
      })
    })
    describe('GetById data', () => { 
      it('returns an object', async () => {
        let response = await req.get('/api/products/id/62d1b1be44c4e5a6b580e6c8');
        expect(response.status).to.eql(200);
        expect(response.body).to.be.an('object');
      })
    })
  })

  describe('POST request', () => {
    before(()=>{
      console.log('=============POST TEST=============\n');
    })
    after(()=>{
      console.log('=============TEST ENDS============');
    })
    afterEach(()=>{
      console.log('\n**********************************\n');
    })
    describe('Post product status 201', () => {
      it('this would return a status code 201', async () => {
        const newProduct = generator.product()
        const res = await req.post('/api/products').send(newProduct);
        expect(res.status).to.eql(201);
      })
    })
    describe('Post product status 400', () => {
      it('this would return a status code 400', async () => {
        const newProduct = null
        const res = await req.post('/api/products').send(newProduct);
        expect(res.status).to.eql(400);
      })
    })
    describe('Post product data', () => {
      it('this would add a product into db', async () => {
        const newProduct = generator.product()
        const res = await req.post('/api/products').send(newProduct);
        expect(res.status).to.eql(201);
        expect(res.body).to.be.an('object');
      })
    })
  })
  
  describe('PUT request', () => {
    before(()=>{
      console.log('=============PUT TEST=============\n');
    })
    after(()=>{
      console.log('=============TEST ENDS============');
    })
    afterEach(()=>{
      console.log('\n**********************************\n');
    })
    describe('Put product status 201', () => {
      it('this would return a status code 201', async () => {
        const newProduct = generator.product()
        const res = await req.put('/api/products/id/62d1b0f744c4e5a6b580e6c3').send(newProduct);
        expect(res.status).to.eql(201);
      })
    })
    describe('Put product status 400', () => {
      it('this would return a status code 400', async () => {
        const newProduct = null
        const res = await req.put('/api/products/id/randomId').send(newProduct);
        expect(res.status).to.eql(400);
      })
    })
    describe('Put product data', () => {
      it('this would update a product into db', async () => {
        const newProduct = generator.product()
        const res = await req.put('/api/products/id/62d1b0f744c4e5a6b580e6c3').send(newProduct);
        expect(res.status).to.eql(201);
        expect(res.body).to.be.an('object');
      })
    })
  })

  describe('DELETE request', () => {
    before(()=>{
      console.log('=============DELETE TEST=============\n');
    })
    after(()=>{
      console.log('=============TEST ENDS============');
    })
    afterEach(()=>{
      console.log('\n**********************************\n');
    })
    describe('Delete product status 204', () => {
      it('this would return a status code 204', async () => {
        const res = await req.delete('/api/products/id/62d1e4ba22b271ef8dbd1cb9') // put a new Id in the URL
        expect(res.status).to.eql(204);
      })
    })
    describe('Delete product status 400', () => {
      it('this would return a status code 400', async () => {
        const res = await req.delete('/api/products/id/random')
        expect(res.status).to.eql(400);
      })
    })
    describe('Delete product data', () => {
      it('this would add a product into db', async () => {
        const res = await req.delete('/api/products/id/62d1e4ba22b271ef8dbd1cbc') // put a new Id in the URL
        expect(res.status).to.eql(204);
        expect(res.body).to.be.an('object');
      })
    })
  })
})

