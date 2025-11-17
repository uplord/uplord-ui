'use client'

import { NiceModalHandler } from '@ebay/nice-modal-react'
import clsx from 'clsx'
import { motion, AnimatePresence, useDragControls } from 'framer-motion'
import React, { useRef, useState, useEffect } from 'react'
import { useMediaQuery } from 'react-responsive'

import { ModalFooter, ModalFooterProps } from './_components'
import { ModalHeader, ModalHeaderProps } from './_components'
import styles from './modal.module.scss'

export type ModalProps = {
  children: React.ReactNode
  modal: NiceModalHandler
  headerProps?: ModalHeaderProps
  footerProps?: ModalFooterProps
  maxWidth?: string
  maxHeight?: string
  sheet?: boolean
  fullscreen?: boolean
  mobileMaxHeight?: boolean
  mobileDraggable?: boolean
  backdropClose?: boolean
  bottomSheet?: boolean
}

export const Modal = ({
  children,
  modal,
  headerProps,
  footerProps,
  maxWidth,
  maxHeight,
  sheet = false,
  fullscreen = false,
  mobileMaxHeight = false,
  mobileDraggable = false,
  backdropClose = true,
  bottomSheet = false,
}: ModalProps) => {
  const refMain = useRef<HTMLDivElement>(null)
  const controls = useDragControls()
  const isMobile = useMediaQuery({ maxWidth: 743 })
  const [showMobile, setShowMobile] = useState(true)

  useEffect(() => {
    setShowMobile(isMobile)
  }, [isMobile])

  const handleDragEnd = (_: unknown, info: { offset: { y: number } }) => {
    if (info.offset.y > 150) {
      modal.hide()
    }
  }

  const getInitialStyle = () => {
    const base = { opacity: 0 }
    if (sheet && !isMobile) {
      return { ...base, translateX: 'calc(100% + 0.5rem)', opacity: 1 }
    }
    return base
  }

  const getAnimateStyle = () => {
    const base = { opacity: 1 }
    if (sheet && !isMobile) {
      return { ...base, translateX: 0, opacity: 1 }
    }
    return base
  }

  return (
    <AnimatePresence onExitComplete={() => modal.remove()}>
      {modal.visible && (
        <motion.div
          className={clsx(
            styles.backdrop,
            bottomSheet && styles['bottom-sheet'],
            fullscreen && styles.fullscreen,
            mobileMaxHeight && isMobile && styles.max,
            sheet && !isMobile && styles.sheet,
          )}>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6 }}
            onClick={() => backdropClose && modal.hide()}
            className={styles['backdrop--close-button']}
          />
          {showMobile && mobileDraggable && bottomSheet ? (
            <motion.div
              ref={refMain}
              className={clsx(styles.main, fullscreen && styles.fullscreen)}
              style={{
                ...(maxWidth ? { maxWidth } : {}),
                ...(maxHeight ? { height: maxHeight } : {}),
              }}
              drag="y"
              dragConstraints={{ top: 0, bottom: 0 }}
              dragElastic={{ top: 0, bottom: 0.5 }}
              dragListener={false}
              dragControls={controls}
              onDragEnd={handleDragEnd}
              initial={{ y: '100%' }}
              animate={{ y: 0 }}
              exit={{ y: '100%' }}
              transition={{ duration: 0.4, ease: 'easeInOut' }}>
              <div
                className={styles.drag}
                onPointerDown={(event) => controls.start(event)}
                style={{ touchAction: 'none' }}>
                {headerProps && <ModalHeader {...headerProps} />}
                <div className={styles.scroll}>
                  <div className={styles.content}>{children}</div>
                </div>
                {footerProps && <ModalFooter {...footerProps} />}
              </div>
            </motion.div>
          ) : (
            <motion.div
              className={clsx(styles.main, fullscreen && styles.fullscreen)}
              style={{
                ...(maxWidth ? { maxWidth } : {}),
                ...(maxHeight ? { height: maxHeight } : {}),
              }}
              onDragEnd={handleDragEnd}
              initial={getInitialStyle()}
              animate={getAnimateStyle()}
              exit={getInitialStyle()}
              transition={{ duration: 0.4, ease: 'easeInOut' }}>
              {headerProps && <ModalHeader {...headerProps} />}
              <div className={styles.scroll}>
                <div className={styles.content}>{children}</div>
              </div>
              {footerProps && <ModalFooter {...footerProps} />}
            </motion.div>
          )}
        </motion.div>
      )}
    </AnimatePresence>
  )
}
