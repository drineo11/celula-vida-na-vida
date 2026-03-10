# Célula Vida na Vida

Aplicação web da Célula Vida na Vida — Igreja Aliança, Vista Verde (São José dos Campos - SP).

## Funcionalidades

- **Banner semanal** — Informações do próximo encontro (data, horário, local e link do Google Maps)
- **Escala da semana** — Quem é responsável por cada função (casa, quebra-gelo, estudo, salinha)
- **Escala mensal** — Visão completa da escala do mês na rota `/escala`
- **Noite de oração** — Suporte a noites de oração na igreja ou na célula
- **Aniversariantes** — Destaque para aniversariantes da semana e do mês
- **Recados e programação** — Avisos fixados e eventos futuros

## Tecnologias

- React
- TypeScript
- Vite
- Tailwind CSS
- shadcn/ui

## Como rodar

```sh
# Clonar o repositório
git clone https://github.com/drineo11/celula-vida-na-vida.git

# Entrar na pasta
cd celula-vida-na-vida

# Instalar dependências
npm install

# Rodar em modo desenvolvimento
npm run dev
```

O projeto roda em `http://localhost:8080`.

## Como atualizar os dados

Todas as informações são editadas diretamente no arquivo `src/lib/mockData.ts`:

| Dado | Variável |
|------|----------|
| Reunião da semana | `mockCurrentMeeting` |
| Escala mensal | `mockMonthlySchedule` |
| Participantes e aniversários | `mockParticipants` |
| Avisos | `mockNotices` |

## Build de produção

```sh
npm run build
```

Os arquivos são gerados na pasta `dist/`.
