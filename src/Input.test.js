import React from 'react';
import { shallow } from 'enzyme';

import { findByTestAttr, storeFactory } from '../test/testUtils';
import Input from './Input';

/**
* Factory function to create a ShalloWrapper for the Guesswords component
* @function setup
* @param {object} initialState - initial state for this setup
* @returns {ShallowWrapper}
*/

const setup = (initialState={}) => {
  const store = storeFactory(initialState);
  const wrapper = shallow(<Input store={store} />).dive().dive();
  return wrapper;
}


describe('render', () => {
  describe('word has not been guessed', () => {
    test('renders component without error', () => {

    });
    test('renders the input box', () => {

    });
    test('renders the submit button', () => {

    });
  });
  describe('words has been guessed', () => {
    test('renders component without error', () => {

    });
    test('does not render the input box', () => {

    });
    test('does not render the submit button', () => {

    });
  });
});
describe('update state', () => {

});
