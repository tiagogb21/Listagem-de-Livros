import React from "react";
import Link from "next/link";

export const Menu: React.FC = () => {
    return (
        <nav>
            <ul>
                <li>
                    <Link href="/">Página Inicial</Link>
                </li>
                <li>
                    <Link href="/LivroLista">Lista de Livros</Link>
                </li>
                <li>
                    <Link href="/LivroDados">Cadastrar Livro</Link>
                </li>
            </ul>
        </nav>
    );
};
