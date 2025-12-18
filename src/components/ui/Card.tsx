import { ReactNode } from 'react'
import { clsx } from 'clsx'

interface CardProps {
  children: ReactNode
  className?: string
  hover?: boolean
}

export function Card({ children, className, hover }: CardProps) {
  return (
    <div
      className={clsx(
        'card bg-base-100 shadow-xl',
        hover && 'hover:shadow-2xl transition-all hover:-translate-y-2 duration-300',
        className
      )}
    >
      {children}
    </div>
  )
}

export function CardBody({ children, className }: { children: ReactNode; className?: string }) {
  return <div className={clsx('card-body', className)}>{children}</div>
}

export function CardTitle({ children, className }: { children: ReactNode; className?: string }) {
  return <h2 className={clsx('card-title', className)}>{children}</h2>
}

export function CardActions({ children, className }: { children: ReactNode; className?: string }) {
  return <div className={clsx('card-actions', className)}>{children}</div>
}
