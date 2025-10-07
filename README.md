# 🚗 Sistema de Gerenciamento de Frota (POO com TypeScript)

Este projeto foi desenvolvido para aplicar e demonstrar os quatro pilares da **Programação Orientada a Objetos (POO)** utilizando **TypeScript** e **Node.js**.

O sistema simula o gerenciamento de uma frota de veículos, incluindo a criação de diferentes tipos de veículos e a atribuição de motoristas.

---

## ⚙️ Configuração e Execução

### 1. Clone o Repositório

```bash
git clone https://github.com/augustofranca0701/sistema-frota
cd sistema-frota
```

### 2. Instale as Dependências

Certifique-se de ter o **Node.js** instalado na sua máquina.
Depois, instale as dependências necessárias executando:

```bash
npm install
```

Isso instalará os pacotes listados no `package.json`, incluindo **TypeScript** e **ts-node**, usados para compilar e executar o projeto.

### 3. Execute a Aplicação

O ponto de entrada principal está em `src/app.ts`.
Para rodar a aplicação, use o script definido no `package.json`:

```bash
npm start
```

Se quiser rodar diretamente com o `ts-node`, também é possível:

```bash
npx ts-node src/app.ts
```

---

## 📐 Pilares da POO Aplicados

| Pilar              | Onde Aplicado                                                                         | Descrição no Projeto                                                                                                                                                                                            |
| ------------------ | ------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Abstração**      | `src/modelos/Veiculo.ts`                                                              | A classe abstrata `Veiculo` define as características e ações comuns (`modelo`, `ano`, `ligar()`, `desligar()`) sem especificar o tipo.                                                                         |
| **Herança**        | `src/modelos/Carro.ts`, `src/modelos/Caminhao.ts`                                     | As classes `Carro` e `Caminhao` herdam da classe base `Veiculo`, adicionando atributos específicos (`numeroPortas`, `capacidadeCarga`).                                                                         |
| **Encapsulamento** | `src/modelos/Motorista.ts`                                                            | Os atributos sensíveis (`cpf`, `cnh`) são privados (`private`) e protegidos. São acessíveis apenas por **getters**, impedindo alterações externas após a criação.                                               |
| **Polimorfismo**   | `src/modelos/Carro.ts`, `src/modelos/Caminhao.ts`, `src/servicos/GerenciadorFrota.ts` | O método abstrato `obterDescricao()` é implementado de forma diferente em `Carro` e `Caminhao`. O `GerenciadorFrota` chama esse método de forma genérica, e cada veículo responde com sua descrição específica. |

---

## 📁 Estrutura do Projeto

```
sistema-frota/
├── src/
│   ├── modelos/        (Entidades e classes de dados)
│   │   ├── Carro.ts
│   │   ├── Caminhao.ts
│   │   ├── Motorista.ts
│   │   └── Veiculo.ts
│   ├── servicos/       (Lógica de negócio e gerenciamento)
│   │   └── GerenciadorFrota.ts
│   └── app.ts          (Ponto de entrada, testes e demonstração)
├── package.json
└── tsconfig.json
```

---

## 🧪 Testes Rápidos

Você pode editar o arquivo `src/app.ts` para criar veículos e motoristas e verificar as funcionalidades.
Exemplo de uso dentro do `app.ts`:

```typescript
import { Carro } from "./modelos/Carro";
import { Caminhao } from "./modelos/Caminhao";
import { Motorista } from "./modelos/Motorista";
import { GerenciadorFrota } from "./servicos/GerenciadorFrota";

const frota = new GerenciadorFrota();

const carro1 = new Carro("Fiat Uno", 2010, 4);
const caminhao1 = new Caminhao("Volvo FH", 2020, 30000);

const motorista1 = new Motorista("João da Silva", "123.456.789-00", "ABC123456");

frota.adicionarVeiculo(carro1);
frota.adicionarVeiculo(caminhao1);
frota.adicionarMotorista(motorista1);

frota.listarFrota();
```
---

## 📝 Licença

Este projeto é de uso livre para fins de estudo e aprendizado.
Sinta-se à vontade para modificar, melhorar e compartilhar. 🚀

