
import { getAvatarUrl, getRandomId } from "../functions";
import type { IPerson, IPersonManager } from "../types";

export class Person implements IPerson {
    constructor(public avatar: string, public name: string, public born_date: Date, public id: string) {
        this.avatar = getAvatarUrl(name)
        this.id = getRandomId()
    }
}


export class PersonManager implements IPersonManager {
    private persons: IPerson[] = []
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
