
const Header = (props) => <h1>{props.course}</h1>

const Content = (props) => (
  <div>
    <Part part={props.parts[0]} />
    <Part part={props.parts[1]} />
  </div>
)

const Part = (props) => (
  <p>
    {props.part.name} {props.part.exercises}
  </p>
)

const Total = (props) => <p>Number of exercises {props.total}</p>
const totalExercises = (parts) => parts.reduce((sum, part) => sum + part.exercises, 0)
export const Course = ({ course }) => {
    return (
        <>
        <Header course={course.name} />
                <div>
            <Content parts={course.parts} />
            <Total total={totalExercises(course.parts)} />
            </div>
        </>
    )
}