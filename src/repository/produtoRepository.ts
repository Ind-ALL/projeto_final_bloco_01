import { Produto } from "../model/produto";

export interface ProdutoRepository {

  // Métodos do CRUD: create - read - update - delete
  listarTodos(): void;
	procurarPorId(id: number): void;
  cadastrar(produto: Produto): void;
  atualizar(produto: Produto): void;
  deletar(id: number): void;
	
}