
import { getAvatarUrl, getRandomId } from "../functions";
import type { IPerson, IPersonManager } from "../types";

export class Person implements IPerson {
    constructor(public avatar: string, public name: string, public born_date: Date, public id: string) {
        this.avatar = getAvatarUrl(name)
        this.id = getRandomId()
    }
}


export class PersonManager implements IPersonManager {
    private persons: IPerson[] = [
        new Person('', 'Titon', new Date(2001, 0, 15), ''),
        new Person('', 'MaDmA', new Date(2002, 1, 4), ''),
        new Person('', 'Mati', new Date(2001, 2, 8), ''),
        new Person('', 'Fede', new Date(2002, 6, 16), ''),
        new Person('', 'Nahuel', new Date(2002, 6, 25), ''),
        new Person('', 'Aaron', new Date(2002, 6, 25), ''),
        new Person('', 'Rodripollera', new Date(2002, 7, 9), ''),
        new Person('', 'Elias', new Date(2002, 7, 28), ''),
        new Person('', 'X', new Date(2002, 8, 7), ''),
        new Person('', 'Shadow', new Date(2002, 8, 18), ''),
        new Person('', 'Seba', new Date(2006, 9, 31), ''),
        new Person('', 'Alexander', new Date(2000, 11, 3), ''),
        new Person('', 'Maty', new Date(2000, 2, 11), '')
    ]
    addPerson (person: IPerson): void {
        this.persons = [...this.persons, person ]
    }
    setPersons (persons: IPerson[]): void {
        this.persons = [...persons]
    }
    getPerson (id: string): IPerson {
        const persons = this.getPersons()
        const person = persons.find(person => person.id === id)
        if (!person) {
            throw new Error("Person not found")
        }
        return person
    }
    getPersons (): IPerson[] {
       return [...this.persons] 
    }
}

const personManager = new PersonManager();

export default personManager
