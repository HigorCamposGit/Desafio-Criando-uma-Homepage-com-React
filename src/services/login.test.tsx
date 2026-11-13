import { login } from './login';

describe('login', () => {
  it('deve exibir um alert com a mensagem de boas-vindas', () => {
    const mockAlert = jest.fn();
    window.alert = mockAlert;

    login();

    // O texto aqui dentro precisa ser exatamente igual ao do login.tsx
    expect(mockAlert).toHaveBeenCalledWith('Bem-vindo(a), Higor de Campos!');
  });
});
