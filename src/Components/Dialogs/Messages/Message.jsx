import React from 'react'
import styles from "./Message.module.css"

const Message = (props) => {
  return (
    <div className={styles.messages}>
      <div className={styles.message}>{props.message}</div>
      <div>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSHauWbmVc4e5TuaqtGfDAYSccrz4935EcYnKakQo67Kp6scK8z&usqp=CAU" />
      </div>
    </div>
    
  )
}

export default Message