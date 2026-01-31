import { ToastContainer, CloseButtonProps } from 'react-toastify'

import styles from './toast.module.scss'
import { Button } from '@/components/Button'
import { Icon } from '@/components/Icon'

export interface ToastProps {
  limit?: number
}

const CustomCloseButton = (props: CloseButtonProps) => {
  return (
    <Button
      size="sm"
      variant="default"
      hasPadding={false}
      onClick={props.closeToast}
      className={styles.button}>
      <Icon
        name="X"
        size="sm"
      />
    </Button>
  )
}

export const Toast = ({ limit }: ToastProps) => {
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
      closeButton={(props) => <CustomCloseButton {...props} />}
    />
  )
}
