import React from 'react'
import styled from 'styled-components'
import TituloSeccion from './TituloSeccion'
import Actor from './Actor'

const Container = styled.div`
display:flex;
overflow:scroll;
`

export default ({ cast }) => {
    if (cast) {
        return (
            <div>
                <TituloSeccion>Reparto:</TituloSeccion>
                <Container>
                    {
                        cast.map(actor => (
                            <Actor actor={actor} ></Actor>
                        ))
                    }
                </Container>
            </div>
        )
    } else {
        return (
            <div>cargando</div>
        )
    }
}