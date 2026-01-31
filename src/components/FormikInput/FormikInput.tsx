import { FieldProps } from 'formik'
import React from 'react'

import { InputProps } from '@/components/Input'

type FormikInputProps = FieldProps & {
  helper?: string
  input?: React.ComponentType<InputProps>
  value?: string | boolean
}

export const FormikInput = ({
  field,
  form,
  helper,
  input: Component,
  ...props
}: FormikInputProps) => {
  const error = form.errors[field.name]
  const touched = form.touched[field.name]
  const showError = touched && typeof error === 'string'

  if (!Component) {
    return <div>Component not provided</div>
  }

  const commonProps = {
    ...field,
    ...props,
    helper: showError ? error : helper,
    isError: !!showError,
    ...(Component.name === 'Checkbox' && { checked: field.value }),
    ...(Component.name === 'Radio' && { checked: field.value === props.value }),
  }

  return <Component {...commonProps} />
}
