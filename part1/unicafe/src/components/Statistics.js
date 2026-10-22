import {StatisticLine} from './StatisticLine'
export const Statistics = ({ good, neutral, bad }) => {
    const total = good + neutral + bad;
    const average = total === 0 ? 0 : (good - bad) / total;
    const positivePercentage = total === 0 ? 0 : (good / total) * 100;
    return (
        <>
        <h1>statistics</h1>
        {total === 0 ? (
            <p>No feedback given</p>
        ) : (
        <table>
            <tbody>
                <StatisticLine text="good" value={good} />
                <StatisticLine text="neutral" value={neutral} />
                <StatisticLine text="bad" value={bad} />
                <StatisticLine text="all" value={total} />
                <StatisticLine text="average" value={average.toFixed(1)} />
                <StatisticLine text="positive" value={positivePercentage.toFixed(1) + '%'} />
            </tbody>
        </table>
        )}
        </>)}