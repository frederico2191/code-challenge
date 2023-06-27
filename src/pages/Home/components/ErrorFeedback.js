import React from 'react'
import { styled } from '../../../stitches.config'

const ErrorMessage = styled("div", {
  marginTop: '5rem',
  textAlign: 'center',
})

const ErrorFeedback = () => (
  <ErrorMessage>An error has occured. Please try again.</ErrorMessage>
)

export default ErrorFeedback