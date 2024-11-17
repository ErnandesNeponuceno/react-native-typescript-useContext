
# 🦇 Desafio: Recriar um app de Bat Sinal

Este é um aplicativo simples criado em **React Native** com **TypeScript** que simula um sistema de pedidos de ajuda. O projeto utiliza navegação entre telas e gerenciamento de estado com o Context API, permitindo que a interface reaja dinamicamente às ações do usuário.



## 🗂️ Estrutura do Projeto

- **src/**
  - **screens/**
    - **HomeScreen.tsx**: Tela inicial com a lógica de alteração dinâmica da imagem e estilo.
    - **FormScreen.tsx**: Tela de formulário com campos de entrada e lógica de envio.
  - **assets/**:
    - **logooff.jpg**: Imagem inicial da tela Home.
    - **logoon.jpg**: Imagem após o envio do formulário.
  - **App.tsx**: Configuração da navegação e do Context API.
  - **types.ts**: Definição dos tipos de rotas para navegação.


## 🚀 Tecnologias Utilizadas

<div style="display: inline_block">
  <img alt="React Native" src="https://img.shields.io/badge/React_Native-20232A?style=for-the-badge&logo=react&logoColor=61DAFB">
  <img alt="TypeScript" src="https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white">
</div>


## 📄 Detalhes sobre o Gerenciamento de Estado

### Context API (Localizado em `App.tsx`)

A lógica do gerenciamento de estado global usa o Context API para permitir que todas as telas compartilhem o mesmo estado e reflitam alterações dinamicamente.

#### Definição do Contexto:
```typescript
export const AppContext = createContext({
  isHelpRequested: false, // Estado inicial do pedido de ajuda
  setHelpRequested: (value: boolean) => {}, // Função para alterar o estado
});
```

#### Uso na Tela Home:
```typescript
const { isHelpRequested } = useContext(AppContext);

<View style={isHelpRequested ? styles.containerActive : styles.containerInactive}>
  <Image source={isHelpRequested ? require('../../assets/logoon.jpg') : require('../../assets/logooff.jpg')} />
</View>
```


## 📌 Como Executar o Projeto

1. Clone o repositório:
   ```bash
   git clone <url-do-repositorio>
   ```

2. Instale as dependências:
   ```bash
   npm install
   ```

3. Inicie o Metro Bundler:
   ```bash
   npm start
   ```

4. Execute o aplicativo:
   - No Android:
     ```bash
     npx react-native run-android
     ```
   - No iOS:
     ```bash
     npx react-native run-ios
     ```


## 📌 Créditos

- **Inspirado em:** Desafio: Recrie um app de Bat Sinal. [DIO](https://web.dio.me/track/formacao-react-native-developer)
- **Documentação Oficial:** [React Native](https://reactnative.dev/)
