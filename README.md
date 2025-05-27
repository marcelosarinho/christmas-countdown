# Christmas Countdown 🎄

Um aplicativo web simples e animado para contar os dias restantes até o Natal! Feito com Vite, TailwindCSS e JavaScript, o projeto traz uma interface festiva, animações de neve, curiosidades natalinas e um contador dinâmico até o dia 25 de dezembro.

## Demonstração

![Demonstração do Christmas Countdown](screenshot.png)

## Link de acesso
Acesse o site através desse link
[https://marcelosarinho.github.io/christmas-countdown/](https://marcelosarinho.github.io/christmas-countdown/)

## Funcionalidades

- **Contador de dias** até o Natal, atualizado automaticamente.
- **Animação de neve** que pode ser ativada ou desativada.
- **Luzes decorativas** piscando ao redor do contador.
- **Curiosidades sobre o Natal** exibidas aleatoriamente.
- Interface responsiva e amigável para dispositivos móveis.

## Tecnologias Utilizadas

- [Vite](https://vitejs.dev/) — Bundler moderno e rápido para desenvolvimento web.
- [TailwindCSS](https://tailwindcss.com/) — Utilitário CSS para estilização rápida e responsiva.
- [JavaScript](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript) — Lógica do countdown, animações e interatividade.

## Como rodar o projeto

1. **Clone o repositório:**
   ```bash
   git clone https://github.com/marcelosarinho/christmas-countdown.git
   cd christmas-countdown
   ```
2. **Instale as dependências:**
   ```bash
   npm install
   ```
3. **Execute em modo desenvolvimento:**
   ```bash
   npm run dev
   ```
   O app estará disponível normalmente em `http://localhost:5173`.

4. **Build para produção:**
   ```bash
   npm run build
   ```

## Estrutura do Projeto

```
christmas-countdown/
├── .github/
│   └── workflows/
│       └── deploy-page.yml    # Workflow para deploy no GitHub Pages
├── public/                    # Arquivos públicos
├── src/                       # Código-fonte principal
│   ├── main.js                # Lógica JS: contador, neve, curiosidades
│   ├── style.css              # Estilos customizados + Tailwind
│   └── vite-env.d.ts          # Tipagens do Vite
├── index.html                 # Página principal
├── package.json               # Dependências e scripts
├── vite.config.ts             # Configuração do Vite e Tailwind
└── README.md                  # Este arquivo
```

## Créditos
- Ícones: [Phosphor Icons](https://phosphoricons.com/)
- Inspiração: Espalhar o espírito natalino! 🎅

## Licença

Este projeto está sob a licença MIT. Sinta-se livre para usar, modificar e compartilhar!
