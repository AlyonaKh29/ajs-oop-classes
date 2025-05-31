export class Character {
    constructor(name, type) {
        if (typeof name !== 'string' || name.length < 2 || name.length > 10) {
            throw new Error('Invalid character name length');
        }
        if (!['Bowerman', 'Swordsman', 'Magician', 'Daemon', 'Undead', 'Zombie'].includes(type)) {
            throw new Error('There is no such character')
        }
        this.name = name;
        this.type = type;
        this.health = 100;
        this.level = 1;
    }
}
