import { Livro } from "../classes/modelo/Livro";
import { ControleEditora } from "../classes/controle/ControleEditora";

const controleEditora = new ControleEditora();

interface LinhaLivroProp {
    livro: Livro;
    excluirLivro: (codigo: number) => void;
}

export const LinhaLivro = ({ livro, excluirLivro } : LinhaLivroProp) => {
    const nomeEditora = controleEditora.getNomeEditora(livro.codEditora);

    return (
        <tr>
            <td>{livro.titulo}</td>
            <td>{livro.resumo}</td>
            <td>{nomeEditora}</td>
            <td>
                <ul>
                    {
                        livro.autores.map((autor, id) => (
                            <li key={id}>{autor}</li>
                        ))
                    }
                </ul>
            </td>
            <td>
                <button type="button" className="btn btn-danger" onClick={() => excluirLivro(livro.codigo)}>Excluir</button>
            </td>
        </tr>
    );
};