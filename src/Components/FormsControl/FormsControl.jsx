import React from 'react'
import styles from './FormsControl.module.css'

export const FormElement = Element => ({input, placeholder, meta, type, ...props}) => {
  const hasError = meta.touched && meta.error
  return (
    <div className={styles.formControl + ' ' + (hasError ? styles.error : "")}>
      <Element {...input} 
        placeholder={placeholder} 
        type={type}  
      />
      {hasError && <span>{meta.error}</span>}
    </div> 
  )
}
