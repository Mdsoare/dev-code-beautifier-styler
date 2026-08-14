<div align="center">

# ⚡ Dev Code Beautifier & Styler

**Uma ferramenta web *client-side*, responsiva e segura para formatação e realce sintático de código multilinguagem.**

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)
[![Security](https://img.shields.io/badge/Security-CSP_Compliant-success)](SECURITY)
<!-- Badges das Linguagens e Ecossistema -->
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![JSON](https://img.shields.io/badge/JSON-000000?style=for-the-badge&logo=json&logoColor=white)
![XML](https://img.shields.io/badge/XML-00599C?style=for-the-badge&logo=xml&logoColor=white)
![Java](https://img.shields.io/badge/Java-ED8B00?style=for-the-badge&logo=openjdk&logoColor=white)
![C#](https://img.shields.io/badge/C%23-239120?style=for-the-badge&logo=csharp&logoColor=white)
![.NET](https://img.shields.io/badge/.NET-512BD4?style=for-the-badge&logo=dotnet&logoColor=white)
![Bash](https://img.shields.io/badge/GNU%20Bash-4EAA25?style=for-the-badge&logo=gnubash&logoColor=white)
![PowerShell](https://img.shields.io/badge/PowerShell-5391FE?style=for-the-badge&logo=powershell&logoColor=white)
![Python](https://img.shields.io/badge/Python-3776AB?style=for-the-badge&logo=python&logoColor=white)

</div>

---

## 📖 Sobre o Projeto

O **Dev Code Beautifier & Styler** é um utilitário web leve e intuitivo desenvolvido para ajudar desenvolvedores, analistas e estudantes a higienizar, organizar e visualizar trechos de código em diferentes linguagens.

A aplicação funciona **100% no navegador (Client-Side)**, garantindo total privacidade e velocidade no processamento sem depender de servidores externos.

### ✨ Principais Recursos

* 🎨 **Formatador Estrutural:** Indentação e organização automática para JavaScript, HTML, CSS, JSON e XML.
* 🌈 **Syntax Highlighting:** Realce sintático otimizado para Java, C# (.NET), Shell Script (Bash), PowerShell, Python e web languages.
* 🛡️ **Segurança em Primeiro Lugar:** Proteção ativa contra *DOM-based XSS* e total conformidade com regras estritas de Content Security Policy (CSP).
* 📱 **Layout 100% Responsivo:** Otimizado para telas de Desktop, Tablets e Smartphones.
* ⚡ **Zero Envio de Dados:** Todo o processamento de código ocorre localmente na máquina do usuário.

---

## 🚀 Linguagens Suportadas

| Linguagem | Formatação Estrutural | Syntax Highlighting |
| :--- | :---: | :---: |
| **JavaScript (ES6+)** | ✅ | ✅ |
| **HTML / CSS** | ✅ | ✅ |
| **JSON / XML** | ✅ | ✅ |
| **Java** | *Preserva Indentação* | ✅ |
| **C# / .NET** | *Preserva Indentação* | ✅ |
| **Shell Script (Bash)** | *Preserva Indentação* | ✅ |
| **PowerShell** | *Preserva Indentação* | ✅ |
| **Python** | *Preserva Indentação* | ✅ |

---

## 🛠️ Tecnologias Utilizadas

* **Estrutura & Estilo:** HTML5, CSS3 Moderno (Variables, Flexbox, CSS Grid e Media Queries).
* **Lógica Principal:** JavaScript Puro (ES6+ Vanilla, `'use strict'`).
* **Formatador:** [Prettier Standalone](https://prettier.io/) + Plugins locais (`babel`, `html`, `postcss`, `xml`).
* **Realce Sintático:** [PrismJS](https://prismjs.com/).

---

## 📁 Estrutura do Repositório

```text
.
├── index.html              # Interface principal da aplicação
├── assets/
│   ├── css/
│   │   ├── styles.css      # Estilização da UI e temas de sintaxe
│   │   └── vendor/         # Estilização dicional (Prettier & PrismJS)
│   └── js/
│       ├── app.js          # Lógica principal e manipulação do DOM
│       └── vendor/         # Bibliotecas locais (Prettier & PrismJS)
├── .gitignore
├── LICENSE                 # Licença do projeto
└── README.md               # Documentação
```

---

## 🔒 Segurança & Privacidade

Este projeto foi desenvolvido seguindo boas práticas de **DevSecOps**:

1. **Privacidade Absoluta:** O código inserido na ferramenta nunca sai do seu navegador.
2. **Sanitização de Saída:** A atribuição de código no DOM é feita via `textContent`, prevenindo injeções arbitrárias de HTML/JS (DOM XSS).
3. **Scripts Locais:** Nenhuma dependência externa é carregada via CDNs de terceiros em tempo de execução, permitindo o uso seguro em ambientes corporativos restritos.

---

## 📜 Licença

Este projeto está sob a licença [MIT](LICENSE).

---
*Desenvolvido por **Marcelo Soares** | Especialista em Segurança da Informação e Computação Forense.*
