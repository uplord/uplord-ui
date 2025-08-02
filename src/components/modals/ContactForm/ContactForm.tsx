import * as yup from 'yup'
import NiceModal, { NiceModalHocProps, useModal } from '@ebay/nice-modal-react'
import { Formik, Form, Field, useFormikContext } from 'formik'
import { FC, useEffect, useState } from 'react'

import styles from './contact-form.module.scss'
import { Modal, FormikInput, Input, Textarea, Button } from '@/components'
import { useModalData } from '@/lib'

export const validationSchema = yup.object({
  fullName: yup.string().required('Full name is required'),
  email: yup.string().email('Invalid email').required('Email is required'),
  message: yup.string().required('Message is required'),
})

type SubmitFormRegistrarProps = {
  setSubmitForm: (fn: () => void) => void
}

const SubmitFormRegistrar: FC<SubmitFormRegistrarProps> = ({ setSubmitForm }) => {
  const { submitForm } = useFormikContext()

  useEffect(() => {
    setSubmitForm(() => submitForm)
  }, [submitForm, setSubmitForm])

  return null
}

export const ContactForm: FC<SubmitFormRegistrarProps> = ({ setSubmitForm }) => (
  <div className={styles.section}>
    <Formik
      initialValues={{ fullName: '', email: '', message: '' }}
      validationSchema={validationSchema}
      onSubmit={(values) => {
        console.log('values', values)
      }}>
      {() => (
        <Form
          autoComplete="off"
          noValidate>
          <SubmitFormRegistrar setSubmitForm={setSubmitForm} />
          <div className={styles.section}>
            <Field
              name="fullName"
              placeholder="Full name"
              autoComplete="off"
              component={FormikInput}
              input={Input}
            />
            <Field
              name="email"
              type="email"
              placeholder="Email address"
              autoComplete="off"
              component={FormikInput}
              input={Input}
            />
            <Field
              name="message"
              placeholder="Message"
              component={FormikInput}
              input={Textarea}
            />
          </div>
        </Form>
      )}
    </Formik>
  </div>
)

export const ContactFormModal: FC<NiceModalHocProps> = NiceModal.create(() => {
  useModalData()
  const modal = useModal()
  const [submitForm, setSubmitForm] = useState<(() => void) | null>(null)

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
            onClick={modal.hide}
          />
        ),
      }}
      footerProps={{
        trailing: (
          <Button
            label="Submit"
            size="md"
            variant="primary"
            onClick={() => submitForm?.()}
          />
        ),
      }}
      mobileDraggable
      bottomSheet>
      <ContactForm setSubmitForm={setSubmitForm} />
    </Modal>
  )
})
