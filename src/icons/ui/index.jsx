import pkg from '@iconscout/react-unicons';
const {UilFocusAdd , UilX, UilCalendarAlt, UilListUl, UilExclamationOctagon, UilArrowLeft } = pkg;

export function XIcon() {
    return (
        <UilX />
    )
}

export function GridListIcon () {
    return (
        <UilCalendarAlt />
    )
}

export function ListIcon () {
    return (
        <UilListUl />
    )
}

export function AddIcon () {
    return (
        <UilFocusAdd />
    )
}

export function ErrorIcon () {
    return (
        <UilExclamationOctagon className="text-red-800 text-3xl"  width={90} height={90} />
    )
}

export function BackIcon () {
    return (
        <UilArrowLeft className="text-red-800 text-xl"  width={30} height={30} />
    )
}
