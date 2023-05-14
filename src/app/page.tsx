"use client";

import { ReactElement } from "react";
import { Box } from "./componentes/box"
import { Img } from './componentes/imagem'
// import Teste from "../../public/boxed-water-is-better-YQ4vknTXgfI-unsplash.jpg"

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
      <Img
        src="/boxed-water-is-better-YQ4vknTXgfI-unsplash.jpg"
        alt="Imagem inicial"
        width={1920}
        height={2560} />
    </ Box>
  )
}
