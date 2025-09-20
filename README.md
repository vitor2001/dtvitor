# DTVitor - Data Science Firebase Server

Este repositório contém um servidor simples hospedado no Firebase para apresentar projetos de ciência de dados de forma gratuita na nuvem.

## 🚀 Demonstração

O site está hospedado no Firebase Hosting e pode ser acessado em: `https://dtvitor-firebase.web.app` (após deployment)

## 📋 Pré-requisitos

- Node.js (versão 16 ou superior)
- Conta no Firebase (gratuita)
- Git

## 🛠️ Configuração do Firebase

### 1. Criar Projeto no Firebase

1. Acesse [Firebase Console](https://console.firebase.google.com/)
2. Clique em "Adicionar projeto"
3. Nomeie seu projeto como `dtvitor-firebase` (ou outro nome de sua preferência)
4. Configure o Google Analytics (opcional)
5. Clique em "Criar projeto"

### 2. Configurar Firebase Hosting

1. No painel do Firebase, vá para "Hosting" no menu lateral
2. Clique em "Começar"
3. Siga as instruções para configurar o domínio

### 3. Obter Configuração do Firebase

1. Vá para "Configurações do projeto" (ícone de engrenagem)
2. Role para baixo até "Seus aplicativos"
3. Clique em "Adicionar app" e selecione "Web"
4. Registre o app com o nome "DTVitor"
5. Copie a configuração do Firebase

## 💻 Instalação Local

### 1. Clonar o Repositório

```bash
git clone https://github.com/vitor2001/dtvitor.git
cd dtvitor
```

### 2. Instalar Dependências

```bash
# Instalar Firebase CLI globalmente
npm install -g firebase-tools

# Instalar dependências do projeto
npm install
```

### 3. Configurar Firebase

```bash
# Login no Firebase
firebase login

# Inicializar projeto (opcional - já configurado)
# firebase init

# Configurar o projeto
firebase use --add
```

Quando solicitado, selecione seu projeto do Firebase e dê o alias "default".

### 4. Atualizar Configuração

Edite o arquivo `public/script.js` e substitua a configuração do Firebase pela sua:

```javascript
const firebaseConfig = {
    apiKey: "sua-api-key",
    authDomain: "seu-projeto.firebaseapp.com",
    projectId: "seu-projeto-id",
    storageBucket: "seu-projeto.appspot.com",
    messagingSenderId: "123456789",
    appId: "seu-app-id"
};
```

## 🚀 Deploy

### Deploy Apenas Hosting (Gratuito)

```bash
# Servir localmente para testar
firebase serve

# Deploy para produção
firebase deploy --only hosting
```

### Deploy Completo com Functions

```bash
# Instalar dependências das functions
cd functions
npm install
cd ..

# Deploy completo
firebase deploy
```

## 📱 Comandos Disponíveis

```bash
# Servir o site localmente
npm start
# ou
firebase serve

# Deploy para produção
npm run deploy
# ou
firebase deploy

# Ver logs das functions
firebase functions:log

# Abrir console do Firebase
firebase open
```

## 🎯 Funcionalidades

### Hospedagem Gratuita
- ✅ Firebase Hosting (10 GB de armazenamento)
- ✅ SSL/TLS automático
- ✅ CDN global
- ✅ Domínio personalizado

### Servidor Simples (Functions)
- ✅ API REST para status do servidor
- ✅ Endpoints para informações dos notebooks
- ✅ 125K invocações gratuitas por mês

### Site Responsivo
- ✅ Design moderno e responsivo
- ✅ Navegação suave
- ✅ Apresentação dos projetos de Data Science
- ✅ Links para notebooks no GitHub

## 📊 Estrutura do Projeto

```
dtvitor/
├── public/                 # Arquivos do site (Hosting)
│   ├── index.html         # Página principal
│   ├── style.css          # Estilos CSS
│   └── script.js          # JavaScript
├── functions/              # Firebase Functions (Servidor)
│   ├── index.js           # Functions do backend
│   └── package.json       # Dependências das functions
├── firebase.json          # Configuração do Firebase
├── .firebaserc           # Projeto do Firebase
└── package.json          # Dependências do projeto
```

## 🌐 Endpoints da API

Após o deploy, sua API estará disponível em:

- `GET /helloWorld` - Teste básico do servidor
- `GET /getProjectStatus` - Status do projeto
- `GET /getNotebooks` - Informações dos notebooks

## 💰 Custos (Gratuito)

O Firebase oferece um plano gratuito generoso:

- **Hosting**: 10 GB de armazenamento, 360 MB/dia de transferência
- **Functions**: 125K invocações, 40K GB-s, 40K CPU-s por mês
- **Perfeito para projetos pessoais e de aprendizado**

## 🔧 Personalização

Para personalizar o site:

1. Edite `public/index.html` para alterar o conteúdo
2. Modifique `public/style.css` para mudar o visual
3. Atualize `public/script.js` para adicionar funcionalidades
4. Adicione novas functions em `functions/index.js`

## 🤝 Contribuição

1. Fork o projeto
2. Crie uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para detalhes.

## 👨‍💻 Autor

**Vitor Gomes**
- GitHub: [@vitor2001](https://github.com/vitor2001)
- Projeto: [dtvitor](https://github.com/vitor2001/dtvitor)

---

⭐ Não esqueça de dar uma estrela no projeto se ele foi útil para você!
