import { Character } from '../Character';

const validCharacters = [
    { name: 'Dana', type: 'Swordsman' },
    { name: 'Masha', type: 'Magician' },
    { name: 'Vova', type: 'Bowerman' },
];

const invalidNames = [
    { name: 'A', errorMessage: 'Invalid character name length' },
    { name: 'Abcdefghijk', errorMessage: 'Invalid character name length' },
    { name: 12, errorMessage: 'Invalid character name length' },
];

const invalidTypes = [
    { type: 'InvalidType', errorMessage: 'There is no such character' },
    { type: '', errorMessage: 'There is no such character' },
];

describe('Character class - data-driven tests', () => {
    test.each(validCharacters)(
        'should create character with valid data %o',
        ({ name, type }) => {
            const char = new Character(name, type);
            expect(char.health).toBe(100);
            expect(char.level).toBe(1);
        }
    );

    test.each(invalidNames)(
        'should throw error for invalid name "%s"',
        ({ name, errorMessage }) => {
            expect(() => new Character(name, 'Swordsman')).toThrow(errorMessage);
        }
    );

    test.each(invalidTypes)(
        'should throw error for invalid type "%s"',
        ({ type, errorMessage }) => {
            expect(() => new Character('ValidName', type)).toThrow(errorMessage);
        }
    );
});
