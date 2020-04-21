export const required = value => {
  if (value) return undefined
  return 'Field is required'
  
}

export const maxLength = (maxLength) => (value) => {
    return value && value.length > maxLength ? `Max length is ${maxLength} symbols` : undefined
}

