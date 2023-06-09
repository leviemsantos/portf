"use client";

import { ReactElement } from "react";
import { Box } from "./componentes/box"
import { Img } from "./componentes/imagem"
import Image from 'next/image'
// import Teste from "../../public/laura-vitoria-mSuPuoAhAvw-unsplash.jpg"

const boxStyle = {
  backgroundColor: '$gray',
  height: '80vh',
  width: '80vw',
  marginTop: '2vh',
}

export default function Inicio(): ReactElement {
  return (
    <Box css={boxStyle}>
      <div style={{ height: "500px", width: "500px" }}>
        <Img
          src="/laura-vitoria-mSuPuoAhAvw-unsplash.jpg"
          alt="Imagem inicial"
          fill={true}
          priority={true}
        />
      </div>
    </ Box>
  )
}
