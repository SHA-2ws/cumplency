import { getMonth, getMonthNumber } from "../functions";
import { Group, type IPerson, type IPersonsServices } from "../types";

class PersonServices implements IPersonsServices {
    groupPersonsBy(persons: IPerson[], groupBy: Group): [string, IPerson[]][] {
        const personMap = new Map<string, IPerson[]>()
        if (groupBy === Group.month) {

            persons.forEach(person => {
                const month = getMonth(person.born_date)
                if (!month) {
                    return
                }
                const monthExist = personMap.get(month)
                if (monthExist) {
                    personMap.set(month, [...monthExist, person])
                } else {
                    personMap.set(month, [person])
                }

            })
        }

        if (groupBy === Group.upcoming) {
            const currentDate = new Date().getTime() //mayor

            let times: number[] = []

            for (const person of persons) {
                const timestamp = new Date(person.born_date).getTime()
                if (currentDate - timestamp >= 0) {
                    times = [...times, timestamp]
                } else {
                    continue
                }
            
            }

           times = times.toSorted((a, b) => b - a).slice(0,4)
            const upcomingPersons = persons.filter(person => times.includes(new Date(person.born_date).getTime()))
            personMap.set(Group.upcoming, upcomingPersons)
            return Array.from(personMap)


        }

        return Array.from(personMap)
            .toSorted((a, b) => getMonthNumber(a[0]) - getMonthNumber(b[0]))
    }


}
const personServices = new PersonServices();

export default personServices