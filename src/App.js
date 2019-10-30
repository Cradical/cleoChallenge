import React from 'react'
import './App.css'

const questionSet = [
  {
    prompt: 'Do you want to build a snowman?',
    type: 'BOOLEAN',
    index: 0,
    options: ['yes', 'no'],
    conditions: [],
    answer: undefined,
  },
  {
    prompt: 'Why not?',
    type: 'SELECT_ONE',
    index: 1,
    options: ["I don't like snowmen", 'Other'],
    conditions: [
      {
        chosenAnswerIndex: 0,
        operator: '==',
        answer: false,
      },
    ],
    answer: undefined,
  },
  {
    prompt: 'Do you want some snow?',
    type: 'BOOLEAN',
    index: 1,
    options: ['yes', 'no'],
    conditions: [
      {
        chosenAnswerIndex: 0,
        operator: '==',
        answer: true,
      },
    ],
    answer: undefined,
  },
]

const answer = []
let currentIndex = 0

const incrementIndex = () => {}

const processAnswer = value => {
  if (value === undefined) return

  const currentQuestionSet = questionSet[currentIndex] // this needs to be cloned

  currentQuestionSet.answer = value
  answer.push(currentQuestionSet)

  incrementIndex()
}

const handleBlur = event => {
  console.log(event.target.value)
  processAnswer(event.target.value)
}

const PromptQuestion = props => {
  const { questions } = props

  return (
    <div>
      <label>
        {questions[0].prompt} (i.e. {questions[0].options.join(', ')})
      </label>
      <input type='text' onBlur={handleBlur} />
    </div>
  )
}

function App() {
  console.log(answer)
  console.log(currentIndex)
  return (
    <div className='App'>
      <form>
        <PromptQuestion questions={questionSet} />
      </form>
      <div>{currentIndex}</div>
    </div>
  )
}

export default App
