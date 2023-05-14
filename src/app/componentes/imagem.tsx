import { styled, keyframes } from '@stitches/react';
import Image from 'next/image';

const fadeIn = keyframes({
  '0%': { opacity: '0' },
  '100%': { opacity: '1' },
});


export const Img = styled(Image, {
  height: '75vh',
  animation: `${fadeIn} 3s`
})
