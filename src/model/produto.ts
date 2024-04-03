import { colors } from "../util/colors";

export abstract class Produto {
  private _id: number;
  private _nome: string;
  private _plataforma: number;
  private _ano: number;
  private _preco: number;


	constructor(id: number, nome: string, plataforma: number, ano: number, preco: number) {
		this._id = id;
		this._nome = nome;
		this._plataforma = plataforma;
		this._ano = ano;
		this._preco = preco;
	}


	public get id(): number {
		return this._id;
	}

	public get nome(): string {
		return this._nome;
	}

	public get plataforma(): number {
		return this._plataforma;
	}

	public get ano(): number {
		return this._ano;
	}

	public get preco(): number {
		return this._preco;
	}

	public set id(value: number) {
		this._id = value;
	}

	public set nome(value: string) {
		this._nome = value;
	}

	public set plataforma(value: number) {
		this._plataforma = value;
	}


	public set ano(value: number) {
		this._ano = value;
	}


	public set preco(value: number) {
		this._preco = value;
	}

  public visualizar(): void {
    let plataforma: string = "";

    switch (this._plataforma) {
      case 1:
        plataforma = "Plastation 5";
        break;
      case 2:
        plataforma = "Super Nintento";
        break;
    }

    console.log(colors.fg.cyanstrong,"+------------------------------------------------------+");
    console.log("|                   Dados do Protudo                  |");
    console.log("+------------------------------------------------------+", colors.reset);
    console.log("Id do produto: " + this._id);
    console.log("Nome do produto: " + this._nome);
    console.log("Plataforma do produto: " + plataforma);
    console.log("Ano do produto: " + this._ano)
    console.log("Preço do produto: " + this._preco.toFixed(2));
  }

}
