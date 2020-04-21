import React from 'react'
import styles from './FormsControl.module.css'

export const Textarea = ({input, placeholder, meta, ...props}) => {
  const hasError = meta.touched && meta.error

  return (
    <div className={styles.formControl + ' ' + (hasError ? styles.error : "")}>
      <textarea {...input}placeholder={placeholder} />
      {hasError && <span>{meta.error}</span>}
    </div> 
  )
}