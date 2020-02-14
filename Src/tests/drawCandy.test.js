import Candy from '../js/drawCandy';

const candy = new Candy(123, 456);

test('Constructor test', () => {
    expect(candy).toEqual({
        x: 123,
        y: 456,
        radius: 50
    })
});