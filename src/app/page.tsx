"use client";

import { ReactElement } from "react";
import { Box } from "./componentes/box"
import { Imagem } from './componentes/imagem'

const boxStyle = {
  backgroundColor: '$gray',
  height: '80vh',
  width: '80vw',
  marginTop: '2vh',
  // margin: '2em'
}

export default function Inicio(): ReactElement {
  return (
    <Box css={boxStyle}>
      <Imagem src="https://images.unsplash.com/photo-1683983381840-ff7df07a13b1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80" />
    </ Box>
  )
}
