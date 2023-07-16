import { IconButton as ChakraIconButton } from '@chakra-ui/react';
import { CloseIcon } from '@chakra-ui/icons';

const IconButton = {
  baseStyle: {
    bgColor: '#f92d54 !important',
    borderRadius: 'full', // Cambia el color de fondo por defecto a azul
  },
  sizes: {
    // Puedes definir tamaños personalizados si lo deseas
  },
  variants: {},
  parts: {
    // Puedes definir partes personalizadas si lo deseas
  },
};

const CustomIconButton = (props: any) => (
  <ChakraIconButton
    ml={"15px"}
    icon={<CloseIcon />} // Icono "X"
    {...IconButton.baseStyle} // Estilos base
    {...props}
  />
);

export default CustomIconButton;