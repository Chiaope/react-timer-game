import { useState } from "react";
import ResultModal from "./ResultModal";

export default function TimerChallenge({title, targetTime}) {
    const [challengeActive, setChallengeActive] = useState(false)
    function handleChallengeStart(){
        setChallengeActive(true)
    }
    function handleChallengeStop() {
        setChallengeActive(false)
    }
    return (
        <>
        <ResultModal />
        <section className="challenge">
            <h2>{title}</h2>
            <p className="challenge-time">
                {targetTime} second{targetTime > 1 ? 's': ''}
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