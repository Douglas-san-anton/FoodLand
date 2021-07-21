import React from "react";
import { configure, shallow } from "enzyme";
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import { expect } from 'chai';

import RecipeContainer from "./RecipeContainer.js";

 configure({ adapter: new Adapter() });

describe("<RecipeContainer/>", () => {
  describe("Estructura", () => {
    let wrapper;
    let props = {
      recipe: {
        image: "https://d37k6lxrz24y4c.cloudfront.net/v2/es-ar/e9dc924f238fa6cc29465942875fe8f0/0c75d61a-3bc2-4906-addf-fb616b5ead4f-900.webp",
        title: "Guiso de arroz",
        diets: ["Vegan"]
      }
    }
    beforeEach(() => {
      wrapper = shallow(<RecipeContainer props={props}/>);
    });

    it('Renderiza una imagen', () => {
      expect(wrapper.find('image')).toHaveLength(1);
    });

    it('Debe tener un boton de tipo submit', () => {
        expect(wrapper.find('button')).toHaveLength(1);
      });
  });
});
