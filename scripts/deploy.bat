@echo off
echo 🚀 Iniciando deploy do DTVitor Firebase...

REM Verificar se Firebase CLI está instalado
firebase --version >nul 2>&1
if %errorlevel% neq 0 (
    echo ❌ Firebase CLI não encontrado. Instalando...
    npm install -g firebase-tools
)

REM Verificar se está logado no Firebase
echo 🔐 Verificando autenticação Firebase...
firebase login

REM Verificar se o projeto está configurado
if not exist .firebaserc (
    echo ⚙️ Configurando projeto Firebase...
    firebase use --add
)

REM Deploy hosting apenas (gratuito)
echo 📤 Fazendo deploy do hosting...
firebase deploy --only hosting

REM Verificar se quer fazer deploy das functions também
set /p deploy_functions="🤔 Deseja fazer deploy das Functions também? (y/N): "
if /i "%deploy_functions%"=="y" (
    echo 📤 Fazendo deploy das Functions...
    cd functions
    npm install
    cd ..
    firebase deploy --only functions
)

echo ✅ Deploy concluído!
echo 🌐 Seu site estará disponível em breve!

REM Abrir no navegador (opcional)
set /p open_browser="🌐 Abrir o site no navegador? (y/N): "
if /i "%open_browser%"=="y" (
    firebase open hosting:site
)

pause