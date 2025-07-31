import * as yup from 'yup'
import NiceModal from '@ebay/nice-modal-react'
import type { Meta, StoryObj } from '@storybook/nextjs'
import { Formik, Form } from 'formik'

import { ContactForm, ContactFormModal, validationSchema } from './ContactForm'
import { Button, ButtonProps } from '@/components/ui/Button'
import { ModalHeader, ModalFooter } from '@/components/utils/Modal'
import styles from '@/components/utils/Modal/modal.module.scss'

const meta: Meta = {
  title: 'Modals/Contact Form',
  decorators: [
    (Story) => (
      <NiceModal.Provider>
        <Story />
      </NiceModal.Provider>
    ),
  ],
}

export default meta

export const ButtonOpen: StoryObj<ButtonProps> = {
  args: {
    label: 'Open',
    size: 'md',
    variant: 'primary',
    onClick: () => NiceModal.show(ContactFormModal),
  },
  parameters: { controls: { disable: true } },
  render: (args) => <Button {...args} />,
  decorators: [
    (Story) => (
      <div className="padding">
        <Story />
      </div>
    ),
  ],
}

export const ModalOpen: StoryObj = {
  render: () => {
    return (
      <Formik
        initialValues={{
          fullName: '',
          email: '',
          message: '',
        }}
        validationSchema={validationSchema}
        onSubmit={(values) => {
          console.log('Submit', values)
        }}>
        {() => (
          <Form
            autoComplete="off"
            noValidate>
            <ModalHeader
              title="Get in touch"
              trailing={
                <Button
                  leadingIcon="X"
                  size="sm"
                  variant="anchor"
                  onClick={() => console.log('Close')}
                />
              }
            />
            <div className={styles.scroll}>
              <div className={styles.content}>
                <ContactForm />
              </div>
            </div>
            <ModalFooter
              trailing={
                <Button
                  label="Submit"
                  size="md"
                  variant="primary"
                  type="submit"
                />
              }
            />
          </Form>
        )}
      </Formik>
    )
  },
}
