import {initialState} from './../initialState';

/* eslint no-undef: 0 */

describe('initialState()', () => {
  it('Size', () => {
    const answer = initialState(10, 30).get('world');
    expect(answer.size).toBe(10);
    expect(answer.get(0).get('blocks').size).toBe(30);
  });

  it('Type prop', () => {
    const answer = initialState(10, 30).get('world');
    expect(typeof answer.getIn([0, 'id'])).toBe('number');
    expect(typeof answer.getIn([0, 'blocks', 0, 'id'])).toBe('number');
    expect(typeof answer.getIn([0, 'blocks', 0, 'value'])).toBe('number');
  });
});
