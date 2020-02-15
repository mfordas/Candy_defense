import Level from '../js/levelHandler';

const level = new Level(0,0,false);

test('Constructor test', () => {
    expect(level).toEqual({
        levelNumber: 0,
        time: 0,
        ready: false,
        intervalCountLevelTime: null
    })
})

test('Generating levels', () => {
    expect(level.generateLevels(2)).toEqual([{levelNumber: 1,
        time: 10,
        ready: false,
        intervalCountLevelTime: null}, {levelNumber: 2,
            time: 20,
            ready: false,
            intervalCountLevelTime: null}])
})


test('Set level time', () => expect(level.setLevelTime(50)).toBe(50))

test('Set level number', () => expect(level.setLevelNumber(5)).toBe(5))

test('Set level status', () => expect(level.setLevelReady(true)).toBe(true))