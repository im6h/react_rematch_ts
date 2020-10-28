import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { RootState, Dispatch } from 'src/stores'

const ShowQuestion: React.FC = () => {
  const questions = useSelector((state: RootState) => state.questions)
  const dispatch = useDispatch<Dispatch>()
  const handleOnClick = (): void => {
    dispatch.questions.increment(1)
  }
  return (
    <>
      <div>
        <p>Count: {questions}</p>
        <button onClick={handleOnClick}>Increment</button>
      </div>
    </>
  )
}
export default ShowQuestion
