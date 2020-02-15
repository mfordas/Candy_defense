import Bug from '../js/drawBugs';


const bug = new Bug(250, 0);

test('Constructor test', () => {
    expect(bug).toEqual({
        x: 250,
        y: 0,
        radius: 25,
        vx: 0,
        vy: 0,
        angle: 0
    })
});

test('Set x position', () => expect(bug.setX(500)).toBe(500));

test('Set y position', () => expect(bug.setY(1500)).toBe(1500));

test('Getting random number', () => {
    const randomNumber = bug.getRandomNumber(0, 100000);
    expect(randomNumber).toBeGreaterThanOrEqual(0);
    expect(randomNumber).toBeLessThan(100000);
})

test('Set position', () => {
    bug.setPosition(1500,1500);
    expect(bug.getX()).toBeGreaterThanOrEqual(0);
    expect(bug.getX()).toBeLessThanOrEqual(1500);
    expect(bug.getY()).toBeGreaterThanOrEqual(0);
    expect(bug.getY()).toBeLessThanOrEqual(1500);
})

test('Check velocity vector', () => {
    bug.setX(50);
    bug.setY(50);
    bug.setVelocityVector(75, 100);
    expect(Math.round((bug.getVX()*100))/100).toBe(1.57);
    expect(Math.round((bug.getVY()*100))/100).toBe(3.13);
})

test('Setting rotation angle', () => {
    bug.setX(50);
    bug.setY(50);
    bug.setVelocityVector(75, 100);
    bug.setRotationAngle();
    expect(Math.round((bug.getAngle()*100))/100).toBe(2.68);
})