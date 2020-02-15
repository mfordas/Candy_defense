import Health from '../js/healthHandler';


const health = new Health(100);

test('Constructor test', () => {
    expect(health).toEqual({
        health: 100
    })
});

test('Health reload', () => {
    expect(health.healthReload()).toBe(100)
})

test('Health reduce', () => {
    expect(health.decreaseHealth()).toBe(95)
})