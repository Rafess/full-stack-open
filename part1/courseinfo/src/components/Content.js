import { Part } from "./Part"
export const Content = ({ parts }) => {
    return (
        <>
            {parts.map((part) => (
                <Part key={part.name} part={part.name} exercises={part.exercises} />
            ))}
        </>
    )
}