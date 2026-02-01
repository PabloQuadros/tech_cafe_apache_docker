# ☕ Café Tech - Landing Page em Container Apache

Este projeto é uma Landing Page de uma cafeteria gourmet, desenvolvida para praticar conhecimentos em desenvolvimento front-end e orquestração de containers com Docker.

## 🚀 Tecnologias Utilizadas

* **Docker & Docker Compose**: Para containerização e isolamento do ambiente.
* **Apache HTTP Server (httpd)**: Servidor web de alta performance para hospedar a aplicação.
* **HTML5 & CSS3**: Estrutura semântica, layout e estilização.
* **JavaScript**: Lógica de interação para a simulação de preparo de café e navegação suave.

## 🛠️ Arquitetura do Projeto

A aplicação roda dentro de um container Docker utilizando a imagem oficial do Apache. O volume está mapeado para que qualquer alteração no código local seja refletida instantaneamente no servidor.

> **Nota sobre o Volume:** Caso as alterações não apareçam instantaneamente, utilize `Ctrl + F5` no seu navegador para limpar o cache. O mapeamento de volume garante que você não precise reiniciar o container para ver mudanças de estilo ou estrutura.

## 🔧 Como Executar

1. Certifique-se de ter o **Docker** e o **Docker Compose** instalados.
2. Clone este repositório.
3. No terminal, dentro da pasta do projeto, execute:
   ```bash
   docker-compose up -d
