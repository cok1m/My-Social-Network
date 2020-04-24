import React from 'react'
import styles from './FormsControl.module.css'

export const FormElement = Element => ({input, meta: {touched, error},}) => {
  const hasError = touched && error
  return (
    <div className={styles.formControl + ' ' + (hasError ? styles.error : "")}>
      <Element {...input} 
      />
      {hasError && <span>{error}</span>}
    </div> 
  )
}
