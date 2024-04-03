import { Produto } from "./produto";

export class Plastation5 extends Produto{
  

	constructor(id: number, nome: string, plataforma: number, ano: number, preco: number) {
    super(id, nome, plataforma, ano, preco)
	}

  public visualizar(): void {
    super.visualizar();
  }


}