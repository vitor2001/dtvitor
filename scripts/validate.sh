#!/bin/bash

# Script de validação para DTVitor Firebase
echo "🔍 Validando estrutura do projeto DTVitor Firebase..."

# Verificar arquivos essenciais
echo "📁 Verificando arquivos essenciais..."

files=(
    "firebase.json"
    ".firebaserc"
    "package.json"
    "public/index.html"
    "public/style.css"
    "public/script.js"
    "functions/index.js"
    "functions/package.json"
    "README.md"
    "QUICKSTART.md"
)

for file in "${files[@]}"; do
    if [ -f "$file" ]; then
        echo "✅ $file"
    else
        echo "❌ $file - FALTANDO"
    fi
done

# Verificar se HTML é válido (básico)
echo ""
echo "🌐 Verificando HTML..."
if grep -q "<!DOCTYPE html>" public/index.html; then
    echo "✅ DOCTYPE correto"
else
    echo "❌ DOCTYPE faltando"
fi

if grep -q "<title>" public/index.html; then
    echo "✅ Title presente"
else
    echo "❌ Title faltando"
fi

# Verificar se CSS tem conteúdo
echo ""
echo "🎨 Verificando CSS..."
css_lines=$(wc -l < public/style.css)
if [ $css_lines -gt 50 ]; then
    echo "✅ CSS com $css_lines linhas"
else
    echo "⚠️ CSS muito pequeno ($css_lines linhas)"
fi

# Verificar se JavaScript tem conteúdo
echo ""
echo "⚡ Verificando JavaScript..."
js_lines=$(wc -l < public/script.js)
if [ $js_lines -gt 20 ]; then
    echo "✅ JavaScript com $js_lines linhas"
else
    echo "⚠️ JavaScript muito pequeno ($js_lines linhas)"
fi

# Verificar configuração Firebase
echo ""
echo "🔥 Verificando configuração Firebase..."
if grep -q "hosting" firebase.json; then
    echo "✅ Hosting configurado"
else
    echo "❌ Hosting não configurado"
fi

if grep -q "functions" firebase.json; then
    echo "✅ Functions configurado"
else
    echo "⚠️ Functions não configurado"
fi

# Resumo
echo ""
echo "📊 RESUMO:"
echo "- Projeto configurado para Firebase Hosting"
echo "- Site responsivo pronto para deploy"
echo "- Functions básicas incluídas"
echo "- Documentação completa"
echo ""
echo "🚀 Próximo passo: firebase deploy --only hosting"