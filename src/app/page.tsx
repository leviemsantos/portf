"use client";

import { ReactElement } from "react";
import { Button } from "./pages/button"
import { Box } from "./pages/box"

export default function Inicio(): ReactElement {
  return (
    <Box css={{
      backgroundColor: '$gray',
    }}>
      <Button>Meu botão</Button>

    </Box>
  )
}
