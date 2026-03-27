import { ToastContainer, CloseButtonProps } from 'react-toastify'

import styles from './toast.module.scss'
import { Button, Theme } from '@/components/Button'
import { Icon } from '@/components/Icon'

export interface ToastProps {
  limit?: number
  theme?: Theme
}

interface CustomCloseButtonProps extends CloseButtonProps {
  theme: Theme
}

const CustomCloseButton = ({ closeToast, theme }: CustomCloseButtonProps) => {
  return (
    <Button
      size="sm"
      variant="default"
      hasPadding={false}
      theme={theme}
      onClick={closeToast}
      className={styles.button}>
      <Icon
        name="X"
        size="sm"
      />
    </Button>
  )
}

export const Toast = ({ limit, theme = Theme.Light }: ToastProps) => {
  return (
    <ToastContainer
      position="bottom-right"
      hideProgressBar
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      limit={limit}
      toastClassName={() => styles.toast}
      closeButton={(props) => (
        <CustomCloseButton
          {...props}
          theme={theme}
        />
      )}
    />
  )
}
