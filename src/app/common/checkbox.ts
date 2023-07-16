export const Checkbox = {
  // Estilos base para el componente Checkbox
  baseStyle: {
    control: {
      borderRadius: 'full', // Hace el checkbox circular
      width: '30px', // Ancho del checkbox (puedes ajustarlo según tu preferencia)
      height: '30px',
    },
  },
  // Estilos para diferentes variantes del Checkbox (como tamaños)
  sizes: {
    // Puedes definir tamaños personalizados si lo deseas
  },
  // Estilos para variantes (como colores)
  variants: {
    circular: (props: any) => ({
      control: {
        bg: '#1a202c', // Color de fondo cuando está seleccionado (verde si está seleccionado, gris oscuro si no está seleccionado)
        borderColor: '#3c3c47',
      },
    }),
  },
  // Estilos para partes específicas del Checkbox
  parts: {
    // Puedes definir partes personalizadas si lo deseas
  },
};

export default Checkbox;