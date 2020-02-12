import Blood from '../js/drawBlood';
import './node_modules/jest-canvas-mock';

beforeEach(() => {
    const createElement = document.createElement.bind(document);
    document.createElement = (tagName) => {
        if (tagName === 'canvas') {
            return {
                getContext: () => ({}),
                measureText: () => ({})
            };
        }
        return createElement(tagName);
    };
});

const newBlood = new Blood(100, 100);
// const events = ctx.__getEvents();

test ('Constructor test', () => {
    expect(newBlood).toEqual({
        x: 100,
        y: 100
    })
});

// test('Drawing blood', () => {
//     expect(events).toMatchSnapshot();
// });