import { useState } from 'react';
import { Box, Input, Text } from '@chakra-ui/react';
import { Button } from './Button';

export const Card = () => {
  const [email, setEmail] = useState('');

  const login = () => {
    alert(`Seja bem-vindo(a), ${email || 'usuário'}!`);
  };

  return (
    <Box backgroundColor="#FFFFFF" borderRadius="25px" padding="15px" width="400px" margin="0 auto">
      <Text fontSize="24px" fontWeight="bold" textAlign="center" mb="4" color="#333">
        Faça o login
      </Text>
      <Input 
        placeholder="email" 
        mb="3" 
        value={email} 
        onChange={(e) => setEmail(e.target.value)} 
      />
      <Input placeholder="password" type="password" mb="3" />
      <Button onClick={login} title="Entrar" />
    </Box>
  );
};