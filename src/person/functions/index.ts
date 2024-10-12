const locale = "es-AR"

const dtf = new Intl.DateTimeFormat(locale, {
    dateStyle: 'long'
})

export function getAvatarUrl(name: string) {
    return `https://api.multiavatar.com/${name}.svg`
}
export function getRandomId() {
    return crypto.randomUUID()
}

export function getBirthday(date: Date) {
    const day = dtf.formatToParts(new Date(date)).find(part => part.type === "day")?.value
    const month = dtf.formatToParts(new Date(date)).find(part => part.type === "month")?.value
    return day + " de " + month
}

export function getAgeFrom(date: Date) {
    const today = new Date()
    const birthDate = new Date(date)
    let age = today.getFullYear() - birthDate.getFullYear()
    return age

}

export function getMonth(date: Date) {
    const month = dtf.formatToParts(new Date(date)).find(part => part.type === "month")?.value
    return month
}

const months = ["enero", "febrero", "marzo", "abril", "mayo", "junio", "julio", "agosto", "septiembre", "octubre", "noviembre", "diciembre"]

export function getMonthNumber (month: string) {
    const monthNumber = months.findIndex(monthName => monthName === month)
    return monthNumber + 1
}
