import React, { useEffect } from 'react'

export const Messaje = () => {

    useEffect(() => {
        console.log('componente montado')
        return () => {
            console.log('componente desmontado')
        }
    }, [])


    return (
        <div>
            <h3>Eres genial</h3>
        </div>
    )
}
