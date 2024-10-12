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
           
            function toStr(date: Date, yearOffset: number = 0) {
                const year = date.getFullYear() + yearOffset;
                return `${year}-${date.toISOString().slice(5, 10)}`;
            }
            
            const today = toStr(new Date());
            
            function findUpcomingBirthdays(persons: IPerson[], currentDate: string, maxCount = 4) {
                const results = persons.flatMap(person => {
                    const thisYearBirthday = new Date(person.born_date);
                    thisYearBirthday.setFullYear(new Date().getFullYear());
                    const nextYearBirthday = new Date(thisYearBirthday);
                    nextYearBirthday.setFullYear(thisYearBirthday.getFullYear() + 1);
            
                    // Preparar fechas para este año y el próximo y filtrar directamente
                    return [
                        { date: toStr(thisYearBirthday), person },
                        { date: toStr(nextYearBirthday), person }
                    ].filter(entry => entry.date > currentDate);
                });
            
                // Ordenar las fechas futuras y tomar los primeros 4
                return results.sort((a, b) => a.date.localeCompare(b.date))
                              .slice(0, maxCount)
                              .map(entry => entry.person);
            }
            
            // Llamando a la función
            const upcomingBirthdays = findUpcomingBirthdays(persons, today);

            // Almacenar en el Map y retornar
            personMap.set(Group.upcoming, upcomingBirthdays);
            return Array.from(personMap);
        }

        return Array.from(personMap)
            .toSorted((a, b) => getMonthNumber(a[0]) - getMonthNumber(b[0]))
    }


}
const personServices = new PersonServices();

export default personServices