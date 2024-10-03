import { LinhaLivro } from "./componentes/LinhaLivro";

export const LivroLista = ({ livros, excluirLivro }) => {
    return (
        <main className="col-md-9 mx-auto">
            <h1>Catálogo de Livros</h1>
            <table className="table">
                <thead className="thead-dark">
                    <tr>
                        <th scope="col">Título</th>
                        <th scope="col">Resumo</th>
                        <th scope="col">Editora</th>
                        <th scope="col">Autores</th>
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
