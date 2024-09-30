import { Livro } from "../modelo/Livro";

export class ControleLivros {
    public livros;

    constructor() {
        this.livros = [
            new Livro(1, 1, 'Livro A', 'Resumo A', ['Autor A']),
            new Livro(2, 2, 'Livro B', 'Resumo B', ['Autor B']),
            new Livro(3, 3, 'Livro C', 'Resumo C', ['Autor C'])
        ];
    }

    obterLivros() {
        return this.livros;
    }

    incluir(livro: Livro) {
        const novoCodigo = Math.max(...this.livros.map(l => l.codigo)) + 1;
        livro.codigo = novoCodigo;
        this.livros.push(livro);
    }

    excluir(codigo: number) {
        const index = this.livros.findIndex(l => l.codigo === codigo);
        if (index > -1) {
            this.livros.splice(index, 1);
        }
    }
}
