export interface IPerson {
    id: string
    avatar: string
    name: string
    born_date: Date
}

export enum Group {
    year = "year",
    month = "month",
    day = "day",
    upcoming = "upcoming"
}

type GroupedPersons = [string, IPerson[]][]

export interface IPersonsServices {
   groupPersonsBy(persons: IPerson[], groupBy: Group): GroupedPersons 
}

export interface IPersons {
 persons: IPerson[]
}

export interface IPersonManager {
    addPerson(person: IPerson): void
    setPersons(persons: IPerson[]): void
    getPerson(id: string): IPerson
    getPersons(): IPerson[]
}
