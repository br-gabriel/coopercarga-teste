# Teste Técnico - Coopercarga

Este repositório contém o código-fonte de um teste técnico para a empresa Coopercarga. O projeto foi desenvolvido utilizando **React**, **Vite**, **Bootstrap**, **Node** e **Express**

- **As respostas das perguntas feitas estão na pasta 'Lista de Perguntas' na raiz do projeto**

## **Deploy da Aplicação (Frontend e Backend)**  

### **1. Deploy do Backend**  

#### **Passo 1: Escolha uma plataforma para o deploy do backend**   
Recomendo utilizar o render para fazer o deploy da aplicação.

#### **Passo 2: Criar um Novo Serviço Web**  
1. Escolha a plataforma para o deploy
2. Conecte seu repositório GitHub e selecione o projeto.  
3. No campo **Root Directory**, selecione a pasta do backend (`backend`).  
4. Em **Build Command**, use:  
   ```sh backend/ $ npm install```
5. Em **Start Command**, use:
   ```sh backend/ $ node server.js```
6. Adicionar a variável de ambiente ```ORIGIN_API="link do deploy do frontend"```

### **2. Deploy do frontend**
1. Escolha uma plataforma para fazer o deploy da aplicação, recomendo utilizar o netlify.
2. Conecte seu repositório GitHub e selecione o projeto.
3. Em **Build Command**, use:  
   ```npm run build```
4. Defina a variável de ambiente
   ```VITE_API_URL="url do backend"```

### **3. Lembrar de atualizar a variável de ambiente do backend**
