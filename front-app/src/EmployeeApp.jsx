import React from 'react'
import { AppRouter } from './router/AppRouter'
import { AppTheme } from './theme'

export const EmployeeApp = () => {


    return (
        <>
            <AppTheme>
                <AppRouter />
            </AppTheme>
        </>
    )
}
