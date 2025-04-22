import React from 'react'

type TypographyProps = {
    variant: 'h1' | 'h2' | 'h3' | 'p' | 'label' | 'caption'
    children: React.ReactNode
    className?: string
}

const variantClasses: Record<TypographyProps['variant'], string> = {
    h1: 'text-4xl font-bold',
    h2: 'text-3xl font-semibold',
    h3: 'text-2xl font-semibold',
    p: 'text-base',
    label: 'text-sm font-medium text-gray-700',
    caption: 'text-xs text-gray-500',
}

export const Typography = ({ variant, children, className = '' }: TypographyProps) => {
    const Tag = variant === 'p' || variant === 'caption' || variant === 'label' ? 'p' : variant
    return <Tag className={`${variantClasses[variant]} ${className}`}>{children}</Tag>
}
