import NiceModal, { useModal } from '@ebay/nice-modal-react'
import type { Meta, StoryObj } from '@storybook/nextjs-vite'
import clsx from 'clsx'

import styles from './modal.module.scss'
import { Button, ButtonGroup, ButtonProps } from '@/components/Button'
import { Icon } from '@/components/Icon'
import {
  Modal,
  ModalProps,
  ModalHeader,
  ModalHeaderProps,
  ModalFooter,
  ModalFooterProps,
} from '@/components/Modal'

const meta: Meta = {
  title: 'Utils/Modal',
  decorators: [
    (Story) => (
      <NiceModal.Provider>
        <Story />
      </NiceModal.Provider>
    ),
  ],
}

export default meta

const ButtonOpenModal = NiceModal.create((props: ModalProps) => {
  const modal = useModal()
  return (
    <Modal
      {...props}
      modal={modal}
      headerProps={{
        title: 'Title',
        trailing: (
          <Button
            size="sm"
            variant="text"
            hasIcon
            hasHover={false}
            hasActive={false}
            className={styles.anchor}
            onClick={() => modal.hide()}>
            <Icon
              name="X"
              size="md"
            />
          </Button>
        ),
      }}
      footerProps={{
        leading: (
          <Button
            label="Back"
            size="md"
            variant="text"
            hasHover={false}
            className={styles.anchor}
            onClick={() => modal.hide()}
          />
        ),
        trailing: (
          <Button
            label="Submit"
            size="md"
            variant="primary"
            onClick={() => modal.hide()}
          />
        ),
      }}>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vehicula tempor gravida.
        Integer ac ligula luctus, consectetur nunc non, sagittis ipsum. Suspendisse vitae mattis
        leo. Maecenas a felis nec tortor molestie semper. Donec fermentum diam sollicitudin, ornare
        neque a, egestas quam. Pellentesque et nisl vitae enim scelerisque eleifend eu quis ipsum.
        Suspendisse potenti. Nulla in augue at odio imperdiet dapibus et nec risus. Nam elementum mi
        ut tellus bibendum, nec scelerisque urna blandit. Duis egestas risus neque, rutrum ultrices
        dui vehicula vitae.
      </p>
    </Modal>
  )
})

export const ButtonOpen: StoryObj<ButtonProps> = {
  args: {
    label: 'Open',
    size: 'md',
    variant: 'primary',
    onClick: () => NiceModal.show(ButtonOpenModal),
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

const DialogModal = NiceModal.create((props: ModalProps) => {
  const modal = useModal()
  return (
    <Modal
      {...props}
      modal={modal}
      footerProps={{
        trailing: (
          <ButtonGroup>
            <Button
              label="Cancel"
              size="sm"
              variant="default"
              outline
              onClick={() => modal.hide()}
            />
            <Button
              label="Continue"
              size="sm"
              variant="primary"
              onClick={() => modal.hide()}
            />
          </ButtonGroup>
        ),
      }}
      maxWidth="460px">
      <h3>Dialog</h3>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vehicula tempor gravida.
        Integer ac ligula luctus, consectetur nunc non, sagittis ipsum.
      </p>
    </Modal>
  )
})

export const Dialog: StoryObj<ButtonProps> = {
  args: {
    label: 'Open',
    size: 'md',
    variant: 'primary',
    onClick: () => NiceModal.show(DialogModal),
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

const SheetModal = NiceModal.create((props: ModalProps) => {
  const modal = useModal()
  return (
    <Modal
      {...props}
      modal={modal}
      sheet
      headerProps={{
        title: 'Sheet modal',
        trailing: (
          <Button
            size="sm"
            variant="text"
            hasIcon
            hasHover={false}
            hasActive={false}
            className={styles.anchor}
            onClick={() => modal.hide()}>
            <Icon
              name="X"
              size="md"
            />
          </Button>
        ),
        sheet: true,
      }}
      footerProps={{
        trailing: (
          <Button
            label="Submit"
            size="md"
            variant="primary"
            onClick={() => modal.hide()}
          />
        ),
      }}
      bottomSheet
      mobileDraggable>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vehicula tempor gravida.
        Integer ac ligula luctus, consectetur nunc non, sagittis ipsum. Suspendisse vitae mattis
        leo. Maecenas a felis nec tortor molestie semper. Donec fermentum diam sollicitudin, ornare
        neque a, egestas quam. Pellentesque et nisl vitae enim scelerisque eleifend eu quis ipsum.
        Suspendisse potenti. Nulla in augue at odio imperdiet dapibus et nec risus. Nam elementum mi
        ut tellus bibendum, nec scelerisque urna blandit. Duis egestas risus neque, rutrum ultrices
        dui vehicula vitae.
      </p>
    </Modal>
  )
})

export const Sheet: StoryObj<ButtonProps> = {
  args: {
    label: 'Open',
    size: 'md',
    variant: 'primary',
    onClick: () => NiceModal.show(SheetModal),
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

const MobileBottomModal = NiceModal.create((props: ModalProps) => {
  const modal = useModal()
  return (
    <Modal
      {...props}
      modal={modal}
      headerProps={{
        title: 'Title',
        subtext: 'Subtext',
        trailing: (
          <Button
            size="sm"
            variant="text"
            hasIcon
            hasHover={false}
            hasActive={false}
            className={styles.anchor}
            onClick={() => modal.hide()}>
            <Icon
              name="X"
              size="md"
            />
          </Button>
        ),
      }}
      footerProps={{
        trailing: (
          <Button
            label="Submit"
            size="md"
            variant="primary"
          />
        ),
      }}
      bottomSheet
      mobileDraggable>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vehicula tempor gravida.
        Integer ac ligula luctus, consectetur nunc non, sagittis ipsum. Suspendisse vitae mattis
        leo. Maecenas a felis nec tortor molestie semper. Donec fermentum diam sollicitudin, ornare
        neque a, egestas quam. Pellentesque et nisl vitae enim scelerisque eleifend eu quis ipsum.
        Suspendisse potenti. Nulla in augue at odio imperdiet dapibus et nec risus. Nam elementum mi
        ut tellus bibendum, nec scelerisque urna blandit. Duis egestas risus neque, rutrum ultrices
        dui vehicula vitae.
      </p>
    </Modal>
  )
})

export const MobileBottom: StoryObj<ButtonProps> = {
  args: {
    label: 'Open',
    size: 'md',
    variant: 'primary',
    onClick: () => NiceModal.show(MobileBottomModal),
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

const FullScreenModal = NiceModal.create((props: ModalProps) => {
  const modal = useModal()
  return (
    <Modal
      {...props}
      modal={modal}
      headerProps={{
        title: 'Full screen',
        trailing: (
          <Button
            size="sm"
            variant="text"
            hasIcon
            hasHover={false}
            hasActive={false}
            className={styles.anchor}
            onClick={() => modal.hide()}>
            <Icon
              name="X"
              size="md"
            />
          </Button>
        ),
      }}
      footerProps={{
        trailing: (
          <Button
            label="Submit"
            size="md"
            variant="primary"
          />
        ),
      }}
      fullscreen>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vehicula tempor gravida.
        Integer ac ligula luctus, consectetur nunc non, sagittis ipsum. Suspendisse vitae mattis
        leo. Maecenas a felis nec tortor molestie semper. Donec fermentum diam sollicitudin, ornare
        neque a, egestas quam. Pellentesque et nisl vitae enim scelerisque eleifend eu quis ipsum.
        Suspendisse potenti. Nulla in augue at odio imperdiet dapibus et nec risus. Nam elementum mi
        ut tellus bibendum, nec scelerisque urna blandit. Duis egestas risus neque, rutrum ultrices
        dui vehicula vitae.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vehicula tempor gravida.
        Integer ac ligula luctus, consectetur nunc non, sagittis ipsum. Suspendisse vitae mattis
        leo. Maecenas a felis nec tortor molestie semper. Donec fermentum diam sollicitudin, ornare
        neque a, egestas quam. Pellentesque et nisl vitae enim scelerisque eleifend eu quis ipsum.
        Suspendisse potenti. Nulla in augue at odio imperdiet dapibus et nec risus. Nam elementum mi
        ut tellus bibendum, nec scelerisque urna blandit. Duis egestas risus neque, rutrum ultrices
        dui vehicula vitae.
      </p>

      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vehicula tempor gravida.
        Integer ac ligula luctus, consectetur nunc non, sagittis ipsum. Suspendisse vitae mattis
        leo. Maecenas a felis nec tortor molestie semper. Donec fermentum diam sollicitudin, ornare
        neque a, egestas quam. Pellentesque et nisl vitae enim scelerisque eleifend eu quis ipsum.
        Suspendisse potenti. Nulla in augue at odio imperdiet dapibus et nec risus. Nam elementum mi
        ut tellus bibendum, nec scelerisque urna blandit. Duis egestas risus neque, rutrum ultrices
        dui vehicula vitae.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vehicula tempor gravida.
        Integer ac ligula luctus, consectetur nunc non, sagittis ipsum. Suspendisse vitae mattis
        leo. Maecenas a felis nec tortor molestie semper. Donec fermentum diam sollicitudin, ornare
        neque a, egestas quam. Pellentesque et nisl vitae enim scelerisque eleifend eu quis ipsum.
        Suspendisse potenti. Nulla in augue at odio imperdiet dapibus et nec risus. Nam elementum mi
        ut tellus bibendum, nec scelerisque urna blandit. Duis egestas risus neque, rutrum ultrices
        dui vehicula vitae.
      </p>
    </Modal>
  )
})

export const FullScreen: StoryObj<ButtonProps> = {
  args: {
    label: 'Open',
    size: 'md',
    variant: 'primary',
    onClick: () => NiceModal.show(FullScreenModal),
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

const PreventCloseModal = NiceModal.create((props: ModalProps) => {
  const modal = useModal()
  return (
    <Modal
      {...props}
      modal={modal}
      backdropClose={false}>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vehicula tempor gravida.
        Integer ac ligula luctus, consectetur nunc non, sagittis ipsum. Suspendisse vitae mattis
        leo. Maecenas a felis nec tortor molestie semper. Donec fermentum diam sollicitudin, ornare
        neque a, egestas quam. Pellentesque et nisl vitae enim scelerisque eleifend eu quis ipsum.
        Suspendisse potenti. Nulla in augue at odio imperdiet dapibus et nec risus. Nam elementum mi
        ut tellus bibendum, nec scelerisque urna blandit. Duis egestas risus neque, rutrum ultrices
        dui vehicula vitae.
      </p>
      <ButtonGroup>
        <Button
          label="Close modal"
          size="sm"
          variant="default"
          outline
          onClick={() => modal.hide()}
        />
      </ButtonGroup>
    </Modal>
  )
})

export const PreventClose: StoryObj<ButtonProps> = {
  args: {
    label: 'Open',
    size: 'md',
    variant: 'primary',
    onClick: () => NiceModal.show(PreventCloseModal),
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

export const HeaderModal: StoryObj<ModalHeaderProps> = {
  args: {
    title: 'Title',
    subtext: 'Subtext',
    trailing: (
      <Button
        size="sm"
        variant="text"
        hasIcon
        hasHover={false}
        hasActive={false}
        className={styles.anchor}>
        <Icon
          name="X"
          size="md"
        />
      </Button>
    ),
  },
  argTypes: {
    trailing: {
      table: {
        disable: true,
      },
    },
  },
  render: (args: ModalHeaderProps) => <ModalHeader {...args} />,
}

export const FooterModal: StoryObj<ModalFooterProps> = {
  args: {
    title: 'Title',
    subtext: 'Subtext',
    leading: (
      <Button
        label="Back"
        size="md"
        variant="text"
        hasHover={false}
        className={clsx(styles.anchor, styles.button)}
        onClick={() => console.log('Close')}
      />
    ),
    trailing: (
      <Button
        label="Submit"
        size="md"
        variant="primary"
        className={styles.button}
        onClick={() => console.log('Submit')}
      />
    ),
  },
  argTypes: {
    leading: {
      table: {
        disable: true,
      },
    },
    trailing: {
      table: {
        disable: true,
      },
    },
  },
  render: (args: ModalFooterProps) => (
    <div className="padding-y">
      <ModalFooter {...args} />
    </div>
  ),
}

export const ModalOpen: StoryObj = {
  render: () => {
    return (
      <>
        <ModalHeader
          title="Title"
          subtext="Subtext"
          trailing={
            <Button
              size="sm"
              variant="text"
              hasIcon
              hasHover={false}
              hasActive={false}
              className={styles.anchor}>
              <Icon
                name="X"
                size="md"
              />
            </Button>
          }
        />
        <div className={styles.scroll}>
          <div className={styles.content}>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vehicula tempor gravida.
              Integer ac ligula luctus, consectetur nunc non, sagittis ipsum. Suspendisse vitae
              mattis leo. Maecenas a felis nec tortor molestie semper. Donec fermentum diam
              sollicitudin, ornare neque a, egestas quam. Pellentesque et nisl vitae enim
              scelerisque eleifend eu quis ipsum. Suspendisse potenti. Nulla in augue at odio
              imperdiet dapibus et nec risus. Nam elementum mi ut tellus bibendum, nec scelerisque
              urna blandit. Duis egestas risus neque, rutrum ultrices dui vehicula vitae.
            </p>
          </div>
        </div>
        <ModalFooter
          leading={
            <Button
              label="Back"
              size="md"
              variant="text"
              hasHover={false}
              className={clsx(styles.anchor, styles.button)}
              onClick={() => console.log('Close')}
            />
          }
          trailing={
            <Button
              label="Submit"
              size="md"
              variant="primary"
              className={styles.button}
              onClick={() => console.log('Submit')}
            />
          }
        />
      </>
    )
  },
}
