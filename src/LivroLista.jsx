import { ControleEditora } from "./controle/ControleEditora";

const controleEditora = new ControleEditora();

const LinhaLivro = ({ livro, excluirLivro }) => {
    const nomeEditora = controleEditora.getNomeEditora(livro.codEditora);

    return (
        <tr>
            <td>{livro.titulo}</td>
            <td>{livro.resumo}</td>
            <td>{nomeEditora}</td>
            <td>
                <button type="button" className="btn btn-danger" onClick={() => excluirLivro(livro.codigo)}>Excluir</button>
            </td>
        </tr>
    );
};

export const LivroLista = ({ livros, excluirLivro }) => {
    return (
        <main>
            <h1>Catálogo de Livros</h1>
            <table className="table">
                <thead className="thead-dark">
                    <tr>
                        <th scope="col">Título</th>
                        <th scope="col">Resumo</th>
                        <th scope="col">Editora</th>
                        <th scope="col">Ações</th>
                    </tr>
                </thead>
                <tbody>
                    {livros.map((livro) => (
                        <LinhaLivro key={livro.codigo} livro={livro} excluirLivro={excluirLivro} />
                    ))}
                </tbody>
            </table>
        </main>
    );
};
