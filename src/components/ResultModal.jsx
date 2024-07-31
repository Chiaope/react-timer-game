import { forwardRef, useImperativeHandle, useRef } from "react"

const ResultModal = forwardRef(
    function ResultModal({ result, targetTime }, ref) {
        const dialogRef = useRef()
        useImperativeHandle(ref, () => {
            return {
                open() { dialogRef.current.showModal() }
            }
        }
        )
        return (
            <dialog ref={dialogRef} className="result-modal">
                <h2>You {result}</h2>
                <p>
                    The target time was <strong>{targetTime} second{(targetTime > 1) ? 's' : ''}</strong>
                </p>
                <p>
                    You stopped the timer with <strong>X seconds left</strong>
                </p>
                <form method="dialog">
                    <button>close</button>
                </form>
            </dialog>
        )
    }
)

export default ResultModal