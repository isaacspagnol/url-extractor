# URL Extractor Chrome Extension

## Descrição

A extensão do Chrome "URL Extractor" permite extrair caminhos de URLs de uma lista fornecida, processando e exibindo os resultados de maneira amigável.

## Funcionalidades

- **Remoção de Números e Espaços no Início:**
  - A extensão remove números e espaços em branco do início de cada URL antes do processamento.

- **Tratamento de URLs Inválidas:**
  - URLs inválidas são identificadas e registradas no console.

- **Exclusão de URLs com '-' no Início e no Fim:**
  - URLs que começam e terminam com '-' são excluídas da lista.

## Como Usar

1. **Instalação:**
   - Baixe a extensão e instale no Chrome.

2. **Abrir Popup:**
   - Clique no ícone da extensão na barra de ferramentas do Chrome.
   - O popup será exibido.

3. **Inserir URLs:**
   - Insira as URLs na caixa de texto fornecida, uma por linha.

4. **Extrair URLs:**
   - Clique no botão "Extrair" para processar as URLs.

5. **Visualizar Resultados:**
   - Os caminhos extraídos serão exibidos abaixo, excluindo URLs inválidas e aquelas que começam e terminam com '-'.

## Desenvolvimento

O código-fonte está organizado da seguinte maneira:

- **popup.html:** Página popup da extensão.
- **popup.js:** Script para lidar com eventos no popup.
- **background.js:** Script de plano de fundo para lidar com eventos de extensão.
- **manifest.json:** Manifesto da extensão.

## Requisitos

- Chrome versão 3 ou superior.

## Licença

Este projeto está licenciado sob a [MIT License](LICENSE).
