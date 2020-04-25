import React from 'react'
import styles from './FormsControl.module.css'

export const FormElement = Element => ({input, meta: {touched, error}, type}) => {
  const hasError = touched && error
  return (
    <div className={styles.formControl + ' ' + (hasError ? styles.error : "")}>
      <Element 
        {...input}
        type={type} 
      />
      {hasError && <span>{error}</span>}
    </div> 
  )
}
