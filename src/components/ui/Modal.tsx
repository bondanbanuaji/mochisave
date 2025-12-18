'use client'

import { ReactNode, useEffect } from 'react'
import { createPortal } from 'react-dom'
import { FiX } from 'react-icons/fi'

interface ModalProps {
  isOpen: boolean
  onClose: () => void
  title?: string
  children: ReactNode
  size?: 'sm' | 'md' | 'lg' | 'xl'
}

export default function Modal({ isOpen, onClose, title, children, size = 'md' }: ModalProps) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }

    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isOpen])

  if (!isOpen) return null

  const sizeClasses = {
    sm: 'max-w-md',
    md: 'max-w-2xl',
    lg: 'max-w-4xl',
    xl: 'max-w-6xl',
  }

  return createPortal(
    <div className="modal modal-open">
      <div className={`modal-box ${sizeClasses[size]}`}>
        <div className="flex items-center justify-between mb-4">
          {title && <h3 className="font-bold text-2xl">{title}</h3>}
          <button
            onClick={onClose}
            className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
          >
            <FiX size={20} />
          </button>
        </div>
        <div>{children}</div>
      </div>
      <div className="modal-backdrop" onClick={onClose}></div>
    </div>,
    document.body
  )
}
