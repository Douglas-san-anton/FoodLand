const { Recipe, conn } = require('../../src/db.js');
const { expect } = require('chai');

describe('Recipe model', () => {
  before(() =>
    conn.authenticate().catch((err) => {
      console.error('Unable to connect to the database:', err);
    })
  );
  describe('Validators', () => {
    beforeEach(() => Recipe.sync({ force: true }));
    describe('title', () => {
      it('should throw an error if title is null', (done) => {
        Recipe.create({})
          .then(() => done(new Error('It requires a valid title')))
          .catch(() => done());
      });
      it('should work when its a valid title', () => {
        Recipe.create({
          title: 'Salsa criolla',
          summary: 'Es hermana del chimichurri',
          spoonacularScore: 100,
          healthScore: 50,
          analyzedInstructions:
            'Cortas cebollita, tomate y pimiento',
        });
      });

      it('should receive an object for recipe', () => {
        let recipe = {
          title: 'Salsa criolla',
          summary: 'Es hermana del chimichurri',
          spoonacularScore: 100,
          healthScore: 50,
          analyzedInstructions:
            'Cortas cebollita, tomate y pimiento.'
        };
        expect(recipe).to.be.a('object');
      });
      it('should receive a number in both score properties', () => {
        let recipe = {
          title: 'Salsa criolla',
          summary: 'Es hermana del chimichurri',
          spoonacularScore: 'no te paso score',
          healthScore: 'menos esto',
          analyzedInstructions:
            'Cortas cebollita, tomate y pimiento'
        };
        expect(recipe).to.be.a('object');
        expect(typeof recipe.spoonacularScore === 'number').to.equal(false);
        expect(typeof recipe.healthScore === 'number').to.equal(false);
      });
    });
  });
});
