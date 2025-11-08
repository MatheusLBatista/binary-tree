# Árvore Binária de Busca — versão simples

Este repositório contém uma implementação de uma Árvore Binária de Busca (BST) em TypeScript.
O código é genérico (funciona com números, strings e outros tipos comparáveis) e vem com testes automatizados em Jest.

O objetivo deste README é explicar, de forma direta, o que está no projeto e como usar o básico.

O que tem aqui

- Implementação das classes `Node<T>` e `BinaryTree<T>` em `src/binaryTree.ts`.
- Exemplo e demonstração em `src/main.ts`.
- Testes com Jest em `tests/binary-tree.test.ts`.

Instalação e execução

1. Instale dependências:

```bash
npm install
```

2. Rodar a demonstração em modo de desenvolvimento (executa TypeScript direto):

```bash
npm run dev
```

3. Rodar os testes:

```bash
npm test
```

4. Gerar relatório de cobertura:

```bash
npm run test:coverage
```

Comandos úteis

- `npm run build` — compila TypeScript para `dist/`.
- `npm start` — compila e executa `dist/main.js`.
- `npm run clean` — remove `dist/`.

Exemplo rápido (uso mínimo)

```ts
import { BinaryTree } from "./src/binaryTree";

const tree = new BinaryTree<number>();
tree.insert(50);
tree.insert(30);
tree.insert(70);
console.log(tree.ordenar()); // [30, 50, 70]
console.log(tree.pesquisar(30)); // true
```

Notas rápidas

- A inserção evita duplicatas: inserir um valor já presente não altera a árvore.
- `inOrder()` retorna os valores em ordem crescente (quando os valores são comparáveis).
- A implementação usa recursão para inserção, busca e percursos.

Estrutura do repositório (resumida)

```
src/      - código TypeScript
tests/    - testes Jest
dist/     - saída compilada (após build)
package.json, tsconfig.json, jest.config.js
```

Se quiser que eu deixe este README ainda mais curto, inclua exemplos apenas, ou traduza para outro idioma, me diga como você prefere que eu simplifique.
