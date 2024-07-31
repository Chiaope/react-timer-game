import { forwardRef, useImperativeHandle, useRef } from "react"

const ResultModal = forwardRef(
    function ResultModal({ targetTime, timeRemaining, onClose }, ref) {
        const dialogRef = useRef()
        useImperativeHandle(ref, () => {
            return {
                open() { dialogRef.current.showModal() }
            }
        }
        )
        
        const remainingTime = (timeRemaining/1000).toFixed(2)
        const score = Math.round((1 - (timeRemaining/(targetTime * 1000))) * 100)
        return (
            <dialog ref={dialogRef} className="result-modal" onClose={onClose}>
                {score === 100 ? <h2>You lost</h2> : <h2>{score ? score : `Your ${score}`}</h2>}
                <p>
                    The target time was <strong>{targetTime} second{(targetTime > 1) ? 's' : ''}</strong>
                </p>
                <p>
                    You stopped the timer with <strong>{remainingTime} seconds left</strong>
                </p>
                <form method="dialog">
                    <button>close</button>
                </form>
            </dialog>
        )
    }
)

export default ResultModal