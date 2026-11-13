# 🏦 Criando uma Homepage com React

Projeto desenvolvido como entrega do desafio prático da **Formação TypeScript Fullstack Developer** na  **Digital Innovation One (DIO)**, 
focado na criação de componentes reutilizáveis, refatoração de layout com Chakra UI, personalização visual e implementação de testes 
unitários com `Jest` em uma aplicação `React` com `TypeScript`.

---

## 🎯 Desafios Resolvidos

### 1. Componentização e Refatoração da Página Inicial
* **Header (`src/components/Header.tsx`):** Componente de cabeçalho responsável por exibir o título e a identidade visual da aplicação (**DIO Bank**).
* **Botão Customizado (`src/components/Button.tsx`):** Componente reutilizável criado para receber propriedades dinâmicas (`title` e o evento `onClick`),
* garantindo desacoplamento e flexibilidade.
* **Refatoração do Card (`src/components/Card.tsx`):** Centralização do formulário de login (campos de e-mail, senha e botão de ação) dentro de um único
* componente estruturado, mantendo a página principal (`App.tsx`) limpa e modularizada.

### 2. Função de Boas-vindas e Testes Unitários
* **Serviço de Login (`src/services/login.tsx`):** Implementação da função `login`, acionada pelo evento `onClick` do botão de entrada para exibir
* um alerta de boas-vindas (`Bem vindo(a)!`).
* **Testes Unitários (`src/services/login.test.tsx`):** Criação de suíte de testes automatizados utilizando **Jest** para validar o disparo
* correto do `window.alert` e a mensagem exibida ao usuário.

---

## ✨ Melhorias e Ajustes Realizados
* **Identidade Visual:** Substituição da paleta original por um tema sóbrio e moderno em tons neutros/escuros (`#1A202C`) com Chakra UI.
* **Localização e Metadados (`public/index.html`):** Configuração do idioma para `pt-BR`, atualização do título da página para **DIO Bank** e tradução das mensagens de fallback.

---

## 🛠️ Tecnologias Utilizadas
* **React**
* **TypeScript**
* **Chakra UI**
* **Jest**

---

## 🚀 Como Executar o Projeto

1. **Clone o repositório:**
   ```bash
   git clone [https://github.com/HigorCamposGit/Desafio-Criando-uma-Homepage-com-React.git](https://github.com/HigorCamposGit/Desafio-Criando-uma-Homepage-com-React.git)

   ---
   
## 🤝 Conecte-se Comigo

<p align="center">
  <img src="https://github.com/HigorCamposGit.png" width="100px" style="border-radius: 50%;" alt="Foto de Higor de Campos" /><br />
  <b>Projeto atualizado por:</b> <a href="https://github.com/HigorCamposGit">Higor de Campos</a>
</p>

---
