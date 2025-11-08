// Nó da árvore binária
export class Node<T> {
  public value: T;
  public left: Node<T> | null;
  public right: Node<T> | null;

  constructor(value: T) {
    this.value = value;
    this.left = null; 
    this.right = null; 
  }
}

// Árvore de busca
export class BinaryTree<T> {
  public root: Node<T> | null;

  constructor() {
    this.root = null;
  }

  public inserir(value: T): void {
    this.root = this.inserirRecursivo(this.root, value);
  }

  private inserirRecursivo(node: Node<T> | null, value: T): Node<T> {
    if (node === null) {
      return new Node<T>(value);
    }

    if (value < node.value) {
      node.left = this.inserirRecursivo(node.left, value);
    }

    else if (value > node.value) {
      node.right = this.inserirRecursivo(node.right, value);
    }

    return node;
  }

  public ordenar(): T[] {
    const result: T[] = [];
    this.ordemRecursiva(this.root, result);
    return result;
  }

  private ordemRecursiva(node: Node<T> | null, result: T[]): void {
    if (node !== null) {
      this.ordemRecursiva(node.left, result);
      
      result.push(node.value);
      
      this.ordemRecursiva(node.right, result);
    }
  }

  public displayOrdenado(): void {
    console.log("Árvore em ordem crescente:", this.ordenar().join(" -> "));
  }

  public pesquisar(value: T): boolean {
    return this.pesquisarRecursivo(this.root, value);
  }

  private pesquisarRecursivo(node: Node<T> | null, value: T): boolean {
    if (node === null) {
      return false;
    }

    if (value === node.value) {
      return true;
    }

    if (value < node.value) {
      return this.pesquisarRecursivo(node.left, value);
    }
    
    else {
      return this.pesquisarRecursivo(node.right, value);
    }
  }

}
