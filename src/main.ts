import { BinaryTree } from "./binaryTree";

// Criação da árvore
console.log("\n1. Criando uma árvore binária");
const tree: BinaryTree<number> = new BinaryTree<number>();
console.log("Árvore criada com sucesso!");

// Inserção de elementos pré-definidos
console.log("\n2. Inserindo elementos na árvore");
const elementos: number[] = [50, 30, 70, 20, 40, 60, 80];

console.log("Elementos a serem inseridos:", elementos.join(", "));
elementos.forEach((elemento: number) => {
  tree.inserir(elemento);
  console.log(`Elemento ${elemento} inserido`);
});

// Percurso em ordem
console.log("\n3. Percorrendo a árvore em ordem crescente");
tree.displayOrdenado();

// Testando inserção de outros elementos
console.log("\n4. Adicionando outros elementos");
const novosElementos: number[] = [25, 35, 65, 75];

novosElementos.forEach((elemento: number) => {
  console.log(`Inserindo ${elemento}...`);
  tree.inserir(elemento);
  tree.displayOrdenado();
  console.log();
});

// Função de busca
console.log("5. Testando função de busca");
const elementosParaBuscar: number[] = [50, 25, 80, 35, 65];

elementosParaBuscar.forEach((elemento: number) => {
  const encontrado: boolean = tree.pesquisar(elemento);
  const status: string = encontrado ? "Encontrado" : "Não encontrado";
  console.log(`Elemento ${elemento}: ${status}`);
});

// Final
console.log("\n6. Estado final da árvore:");
tree.displayOrdenado();

const tamanho: number = tree.ordenar().length;

console.log("Total de elementos:", tamanho);
