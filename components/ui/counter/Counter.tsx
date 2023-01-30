import React from 'react'
import styles from './Counter.module.scss'

const counterData = [
  {
    number: 12,
    text: 'Clients',
  },
  {
    number: 6,
    text: 'Courses',
  },

  {
    number: 3,
    text: 'Team',
  },
]

const Counter = () => {
  return (
    <div className="item-center flex justify-between">
      {counterData?.map((item, index) => (
        <div
          className="w-1/3 bg-gradient-to-tr from-counter-color bg-clip-text "
          key={index}>
          <h3 className="mb-[10px] bg-gradient-to-r from-counter-color bg-clip-text text-5xl">
            {item.number}+
          </h3>
          <h4 className="text-2xl">{item.text}</h4>
        </div>
      ))}
    </div>
  )
}

export default Counter
