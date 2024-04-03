import { Produto } from "../model/produto";
import { ProdutoRepository } from "../repository/produtoRepository";
import { colors } from "../util/colors";

export class ProdutoController implements ProdutoRepository{
    
    private listaProdutos: Array<Produto> = new Array<Produto>();
    public id: number = 0;

    // Método para Listar os dados de uma produto
    // inseridas na Collection listaprodutos
    procurarPorId(id: number): void {
        let buscaproduto = this.buscarNoArray(id);

        if(buscaproduto !== null)
            buscaproduto.visualizar()
        else
            console.log("\n");
            console.log(colors.bg.red, colors.fg.redstrong,"Produto não foi Encontrado!", colors.reset)
    }

    // Método para Listar os dados de todas as produtos
    // inseridas na Collection listaprodutos
    listarTodos(): void {
       for (let produto of this.listaProdutos){
            produto.visualizar();
       }
    }

     // Método para adicionar Objetos das Classes 
     // produtoCorrente e produtoPoupanca
    // na Collection listaprodutos
    cadastrar(produto: Produto): void {
        this.listaProdutos.push(produto);
        console.log("\n");
        console.log(colors.bg.green, colors.fg.greenstrong,"O produto foi adicionado com sucesso!", colors.reset)
    }

    // Método para atualizar os dados de uma produto
    // inseridas na Collection listaprodutos
    atualizar(produto: Produto): void {
        let buscaProduto = this.buscarNoArray(produto.id);

        if(buscaProduto !== null){
            this.listaProdutos[this.listaProdutos.indexOf(buscaProduto)] = produto;
            console.log("\n");
            console.log(colors.bg.green, colors.fg.greenstrong,`O produto número ${produto.id} foi Atualizado com sucesso!`,colors.reset)
        }else
            console.log("\n");
            console.log(colors.bg.red, colors.fg.redstrong,"O produto não foi encontrado!", colors.reset)
    }

    // Método para deletar uma produto
    // inseridas na Collection listaprodutos
    deletar(id: number): void {
        let buscaProduto = this.buscarNoArray(id);

        if(buscaProduto !== null){
            this.listaProdutos.splice(this.listaProdutos.indexOf(buscaProduto), 1)
            console.log("\n");
            console.log(colors.bg.green, colors.fg.greenstrong,`O produto número ${id} foi Excluído com sucesso!`, colors.reset)
        }else
            console.log("\n");
            console.log(colors.bg.red, colors.fg.redstrong, "O produto não foi Encontrado!", colors.reset)
    }


    // Métodos Auxiliares

    // Método para gerar um número para uma nova produto
    public gerarId(): number{
        return ++ this.id
    }
    
    // Método para procurar uma produto pelo id
    public buscarNoArray(id: number): Produto | null{
        for (let produto of this.listaProdutos){
            if (produto.id === id)
                return produto;
       }

       return null;
    }
}