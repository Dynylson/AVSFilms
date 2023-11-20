import { useState } from 'react';
import { Text, Button } from '@chakra-ui/react';

export const LerMais = ({ texto, limiteCaracteres }: any) => {
  const [mostrarCompleto, setMostrarCompleto] = useState(false);

  const handleMostrarMais = () => {
    setMostrarCompleto(!mostrarCompleto);
  };

  const handleMostrarMenos = () => {
    setMostrarCompleto(false);
  };

  return (
    <div>
      <Text>
        {mostrarCompleto ? texto : `${texto.slice(0, limiteCaracteres)}...`}
      </Text>
      {!mostrarCompleto && (
        <Button onClick={handleMostrarMais} size="sm" mt={2} variant="link" color="blue.900">
          Ler Mais
        </Button>
      )}
      {mostrarCompleto && (
        <Button onClick={handleMostrarMenos} size="sm" mt={2} variant="link" color="blue.900">
          Mostrar Menos
        </Button>
      )}
    </div>
  );
};
