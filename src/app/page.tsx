import { styled } from "@stitches/react";
import { ReactElement } from "react";

const Titulo = styled("h1", {
  color: "blue",
})

const Button = styled('button', {
  backgroundColor: 'red',
  borderRadius: '9999px',
  fontSize: '13px',
  padding: '10px 15px',
  '&:hover': {
    backgroundColor: 'lightgray',
  },
});

const Teste = () => <Button>Button</Button>

export default function Inicio(): ReactElement {
  return (
    <div>
      <Titulo as='h1'>Começando</Titulo>
      <Button>Botão</Button>
      <Teste />
    </div>
  )
}
