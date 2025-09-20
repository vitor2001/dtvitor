#!/bin/bash

# Script de deploy para Firebase - DTVitor
echo "🚀 Iniciando deploy do DTVitor Firebase..."

# Verificar se Firebase CLI está instalado
if ! command -v firebase &> /dev/null; then
    echo "❌ Firebase CLI não encontrado. Instalando..."
    npm install -g firebase-tools
fi

# Verificar se está logado no Firebase
echo "🔐 Verificando autenticação Firebase..."
firebase login --no-localhost

# Verificar se o projeto está configurado
if [ ! -f .firebaserc ]; then
    echo "⚙️ Configurando projeto Firebase..."
    firebase use --add
fi

# Deploy hosting apenas (gratuito)
echo "📤 Fazendo deploy do hosting..."
firebase deploy --only hosting

# Verificar se quer fazer deploy das functions também
read -p "🤔 Deseja fazer deploy das Functions também? (y/N): " deploy_functions

if [[ $deploy_functions == [yY] || $deploy_functions == [yY][eE][sS] ]]; then
    echo "📤 Fazendo deploy das Functions..."
    cd functions
    npm install
    cd ..
    firebase deploy --only functions
fi

echo "✅ Deploy concluído!"
echo "🌐 Seu site estará disponível em: https://$(firebase use).web.app"

# Abrir no navegador (opcional)
read -p "🌐 Abrir o site no navegador? (y/N): " open_browser
if [[ $open_browser == [yY] || $open_browser == [yY][eE][sS] ]]; then
    firebase open hosting:site
fi