import Blood from '../js/drawBlood';


const newBlood = new Blood(100, 100);

test('Constructor test', () => {
    expect(newBlood).toEqual({
        x: 100,
        y: 100
    })
});

test('Set x position', () => expect(newBlood.setX(50)).toBe(50));

test('Set y position', () => expect(newBlood.setY(150)).toBe(150));