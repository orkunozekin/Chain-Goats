import React from 'react'
import styles from '../../styles/Counter.module.scss'

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
    <div className={styles.containerWrapper}>
      {counterData?.map((item, index) => (
        <div className={styles.counterItem} key={index}>
          <h3 className={styles.counterNumber}>{item.number}+</h3>
          <h4 className={styles.counterTitle}>{item.text}</h4>
        </div>
      ))}
    </div>
  )
}

export default Counter
