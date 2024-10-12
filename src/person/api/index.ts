
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
        new Person("", "Yoel", new Date("06/18/2002"), "" ),
        new Person("", "Yoel1", new Date("09/18/2002"), "" ),
        new Person("", "Yoel2", new Date("09/18/2002"), "" ),
        new Person("", "Yoel3", new Date("08/18/2002"), "" ),
        new Person("", "Yoel4", new Date("10/01/2002"), "" ),
        new Person("", "Yoel5", new Date("10/18/2002"), "" ),
        new Person("", "Aaron", new Date("07/25/2002"), "" ),
        new Person("", "Aaron1", new Date("07/25/2002"), "" ),
        new Person("", "Titon2", new Date("01/15/2002"), "" ),
        new Person("", "Titon3", new Date("11/15/2002"), "" ),
        new Person("", "Titon4", new Date("01/15/2002"), "" ),
        new Person("", "Aaron2", new Date("07/25/2002"), "" ),
        new Person("", "Aaron3", new Date("07/25/2002"), "" ),
        new Person("", "Mati1", new Date("03/08/2002"), "" ),
        new Person("", "Mati2", new Date("04/08/2002"), "" ),
        new Person("", "Mati3", new Date("05/08/2002"), "" ),
        new Person("", "Mati4", new Date("05/08/2002"), "" ),
        new Person("", "Mati5", new Date("12/08/2002"), "" ),
        new Person("", "Mati6", new Date("05/08/2002"), "" ),
        new Person("", "Mati7", new Date("05/08/2002"), "" ),
         new Person("", "Mati8", new Date("05/08/2002"), "" ),
         new Person("", "Mati9", new Date("05/08/2002"), "" ),
         new Person("", "Mati10", new Date("05/08/2002"), "" ),
        new Person("", "Maty", new Date("02/11/2002"), "" ),
        new Person("", "Nahuel", new Date("07/25/2002"), "" ),
        new Person("", "Titon", new Date("01/15/2002"), "" )
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
