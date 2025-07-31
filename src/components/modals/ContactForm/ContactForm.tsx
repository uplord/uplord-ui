import * as yup from 'yup'
import NiceModal, { NiceModalHocProps, useModal } from '@ebay/nice-modal-react'
import { Formik, Form, Field } from 'formik'
import { FC, useEffect, useState } from 'react'

import styles from './contact-form.module.scss'
import { Modal, FormikInput, Input, Textarea, Button } from '@/components'
import { useModalData } from '@/lib'

export const ContactForm = () => {
  return (
    <div className={styles.section}>
      <Field
        component={FormikInput}
        input={Input}
        placeholder="Full name"
        name="fullName"
        autoComplete="off"
      />
      <Field
        component={FormikInput}
        input={Input}
        type="email"
        placeholder="Email address"
        name="email"
        autoComplete="off"
      />
      <Field
        component={FormikInput}
        input={Textarea}
        placeholder="Message"
        name="message"
      />
    </div>
  )
}

export const validationSchema = yup.object({
  fullName: yup.string().required('Full name is required'),
  email: yup.string().email('Invalid email').required('Email is required'),
  message: yup.string().required('Message is required'),
})

export const ContactFormModal: FC<NiceModalHocProps> = NiceModal.create(() => {
  useModalData()
  const modal = useModal()
  const [submitFormFn, setSubmitFormFn] = useState<(() => void) | null>(null)

  return (
    <Modal
      modal={modal}
      headerProps={{
        title: 'Get in touch',
        trailing: (
          <Button
            leadingIcon="X"
            size="sm"
            variant="anchor"
            onClick={() => modal.hide()}
          />
        ),
      }}
      footerProps={{
        trailing: (
          <Button
            label="Submit"
            size="md"
            variant="primary"
            onClick={() => submitFormFn?.()}
          />
        ),
      }}
      mobileDraggable
      bottomSheet>
      <div className={styles.section}>
        <Formik
          initialValues={{
            fullName: '',
            email: '',
            message: '',
          }}
          validationSchema={validationSchema}
          onSubmit={(values) => {
            console.log('values', values)
          }}>
          {({ submitForm }) => {
            useEffect(() => {
              setSubmitFormFn(() => submitForm)
            }, [submitForm])

            return (
              <Form
                autoComplete="off"
                noValidate>
                <ContactForm />
              </Form>
            )
          }}
        </Formik>
      </div>
    </Modal>
  )
})
