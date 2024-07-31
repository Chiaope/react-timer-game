import { useState, useRef } from "react";
import ResultModal from "./ResultModal";

const defaultInterval = 10

export default function TimerChallenge({ title, targetTime }) {
    const modalRef = useRef()
    const intervalRef = useRef()
    const [challengeActive, setChallengeActive] = useState(false)
    const [timeRemaining, setTimeRemaining] = useState(targetTime * 1000)


    function handleChallengeStart() {
        intervalRef.current = setInterval(() => {
            setTimeRemaining(prevTimeRemaining => {
                const newTimeRemaining = prevTimeRemaining - defaultInterval
                if (newTimeRemaining <= 0) {
                    handleChallengeStop()
                }
                return newTimeRemaining
            })
        }, defaultInterval)
        setChallengeActive(true)
    }
    function handleChallengeStop() {
        clearInterval(intervalRef.current)
        setChallengeActive(false)
        modalRef.current.open()
    }
    function handleReset() {
        setTimeRemaining(targetTime * 1000)
    }


    return (
        <>
            <ResultModal ref={modalRef} timeRemaining={timeRemaining} targetTime={targetTime} onClose={handleReset}/>
            <section className="challenge">
                <h2>{title}</h2>
                <p className="challenge-time">
                    {targetTime} second{targetTime > 1 ? 's' : ''}
                </p>
                <p>
                    <button onClick={challengeActive ? handleChallengeStop : handleChallengeStart}>
                        {challengeActive ? 'Stop' : 'Start'} Challenge
                    </button>
                </p>
                <p className={challengeActive ? "active" : undefined}>
                    {challengeActive ? 'Timer is running' : 'Timer inactive'}
                </p>
            </section>
        </>
    )
}