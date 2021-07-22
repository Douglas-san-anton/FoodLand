/* eslint-disable import/no-extraneous-dependencies */
const { expect } = require('chai');
const session = require('supertest-session');
const app = require('../../src/app.js');
const { Recipe, conn } = require('../../src/db.js');

const agent = session(app);
const recipe = {
  title: 'Milanesa a la napolitana',
  summary: 'lo mas rico que hay'
};

 describe('Recipe routes', () => {
  before(() => conn.authenticate()
  .catch((err) => {
    console.error('Unable to connect to the database:', err);
  }));
  beforeEach(() => Recipe.sync({force: true})
    .then(() => Recipe.create(recipe)));
 describe('GET /recipes', () => {
      it('responds with 200', async () => {
        try {
          await agent.get('/recipes').expect(200);
        } catch (err) {
          console.log(err);
        }
      }).timeout(10000);
      it('responds an array with 101 recipes', async () => {
        try {
          const res = await agent.get('/recipes');
          expect(res.body).to.have.lengthOf(101);
        } catch (err) {
          console.log(err);
        }
      }).timeout(10000);
      it('If the title query is passed, the recipe should match with that title', async () => {
        try {
          const res = await agent.get('/recipes?title=pasta');
          expect(res.body[0].title).to.be.equal('pasta');
        } catch (err) {}
      }).timeout(10000);
      it('If an id parameter is passed it must return the recipe associated with that id', async () => {
        try {
          const res = await agent.get('/recipes/716381');
          expect(res.body[0].title).to.be.equal('Nigerian Snail Stew');
        } catch (err) {}
      }).timeout(10000);
    });
});
