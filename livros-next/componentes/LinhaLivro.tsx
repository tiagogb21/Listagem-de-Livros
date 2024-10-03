import React from "react";
import { Livro } from "@/classes/modelo/Livro";
import { controleEditora } from "@/app/api/editoras/route";

interface LinhaLivroProps {
    livro: Livro;
    excluir: (codigo: number) => void;
}

export const LinhaLivro: React.FC<LinhaLivroProps> = ({ livro, excluir }) => {
    const nomeEditora = controleEditora.getNomeEditora(livro.codEditora);

    return (
        <tr>
            <td>{livro.titulo}</td>
            <td>{livro.autores.join(", ")}</td>
            <td>{nomeEditora}</td>
            <td>
                <button className="btn btn-danger" onClick={() => excluir(livro.codigo)}>Excluir</button>
            </td>
        </tr>
    );
};
