import React from 'react'

type HorizontalPosition = 'left' | 'right' | 'center'
type VerticalPosition = 'top' | 'center' | 'bottom'

type ToastProps = {
    position: Exclude<
        `${HorizontalPosition}-${VerticalPosition}`,
        'center-center'
        >
}

export const Toast = ({ position }: ToastProps) => {
    return (
        <div>Toast notification position - {position}</div>
    )
}
