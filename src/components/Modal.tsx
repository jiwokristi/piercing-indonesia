import { useEffect, useState, ReactNode } from 'react'
import ReactDOM from 'react-dom'
import clsx from 'clsx'

interface BackdropProps {
  onClose?: () => void
  classes?: string
}

interface ModalOverlayProps {
  children: ReactNode
  classes?: string
}

interface ModalProps {
  open?: boolean
  onClose?: () => void
  children: ReactNode
  modalClasses?: string
  backdropClasses?: string
}

const Backdrop = ({ classes, onClose }: BackdropProps) => {
  return <div className={classes} onClick={onClose} />
}

const ModalOverlay = ({ classes, children }: ModalOverlayProps) => {
  return <div className={classes}>{children}</div>
}

export const Modal = ({
  open,
  modalClasses = '',
  backdropClasses = '',
  onClose,
  children,
}: ModalProps) => {
  const [portalElement, setPortalElement] = useState<HTMLElement | null>(null)

  useEffect(() => {
    setPortalElement(document?.querySelector<HTMLElement>('#portal'))
  }, [])

  return portalElement !== null ? (
    <>
      {ReactDOM.createPortal(
        <Backdrop
          onClose={onClose}
          classes={clsx(
            `fixed left-0 top-0 z-50 h-screen w-full bg-gray-1/90 transition-all duration-300 ease-in-out ${backdropClasses}`,
            {
              'visible opacity-100': open,
              'invisible opacity-0': !open,
            },
          )}
        />,
        portalElement,
      )}
      {ReactDOM.createPortal(
        <ModalOverlay
          classes={clsx(
            `fixed left-1/2 top-0 -translate-x-1/2 -translate-y-1/3 py-32 px-24 shadow-2 z-[9999] transition-all duration-300 ease-in-out ${modalClasses}`,
            {
              'opacity-100 !top-1/2 !-translate-y-1/2': open,
              'opacity-0': !open,
            },
          )}
        >
          {children}
        </ModalOverlay>,
        portalElement,
      )}
    </>
  ) : null
}
