import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16'
import GameComponent from './GameComponent';


Enzyme.configure({ adapter: new Adapter() })

describe('<GameComponent />', () => {
  const component = <GameComponent />

  // beforeEach(() => {
  //
  // });


  // it("renders deck", async () => {
  //   const fakeDeck = {
  //       "success": true,
  //       "deck_id": "3p40paa87x90",
  //       "shuffled": true,
  //       "remaining": 52
  //   };
  //
  //   jest.spyOn(global, "fetch").mockImplementation(() => {
  //     Promise.resolve({
  //       json: () => Promise.resolve(fakeDeck)
  //     })
  //   });


  test('It should mount', () => {
    it(component.find(GameComponent)).toBe(1);
  });
});
