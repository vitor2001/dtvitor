# Scripts de Deploy Rápido

Este diretório contém scripts para facilitar o deploy do projeto.

## Scripts Disponíveis

### `deploy.sh` (Linux/Mac)
```bash
chmod +x scripts/deploy.sh
./scripts/deploy.sh
```

### `deploy.bat` (Windows)
```cmd
scripts\deploy.bat
```

## O que os scripts fazem

1. Verificam se o Firebase CLI está instalado
2. Fazem login no Firebase (se necessário)
3. Fazem build do projeto
4. Executam o deploy
5. Abrem o site deployado no navegador