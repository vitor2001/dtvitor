# 🚀 Guia de Início Rápido - DTVitor Firebase

## Setup em 5 minutos

### 1. Pré-requisitos
```bash
# Verificar se Node.js está instalado
node --version

# Se não tiver, instale de https://nodejs.org/
```

### 2. Configuração Básica
```bash
# Clonar repositório
git clone https://github.com/vitor2001/dtvitor.git
cd dtvitor

# Instalar Firebase CLI
npm install -g firebase-tools

# Login no Firebase
firebase login
```

### 3. Criar Projeto Firebase
1. Acesse https://console.firebase.google.com/
2. Clique em "Adicionar projeto"
3. Nome: `dtvitor-firebase`
4. Configure Google Analytics (opcional)
5. Criar projeto

### 4. Configurar Projeto
```bash
# Conectar ao projeto Firebase
firebase use --add
# Selecione seu projeto e dê o alias "default"
```

### 5. Deploy Instantâneo
```bash
# Linux/Mac
./scripts/deploy.sh

# Windows
scripts\deploy.bat

# Ou manualmente
firebase deploy --only hosting
```

### 6. Acessar Site
Seu site estará em: `https://SEU-PROJETO.web.app`

## 🎯 Resultado Esperado

Após o deploy, você terá:
- ✅ Site responsivo funcionando
- ✅ Hospedagem gratuita no Firebase
- ✅ SSL automático
- ✅ CDN global
- ✅ Apresentação dos seus projetos de Data Science

## 🔧 Próximos Passos

1. **Personalizar o site**: Edite `public/index.html`
2. **Adicionar seus projetos**: Modifique as seções no HTML
3. **Configurar domínio próprio**: No Firebase Console > Hosting
4. **Adicionar Functions**: Para funcionalidades de backend

## 💡 Dicas

- O plano gratuito é suficiente para projetos pessoais
- Functions: 125K invocações grátis/mês
- Hosting: 10GB armazenamento + 360MB/dia transferência
- SSL e CDN inclusos gratuitamente

## 🆘 Problemas Comuns

**Erro de permissão**:
```bash
firebase login --reauth
```

**Projeto não encontrado**:
```bash
firebase use --add
# Selecione o projeto correto
```

**Deploy falha**:
```bash
firebase deploy --only hosting --debug
```