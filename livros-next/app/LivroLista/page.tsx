'use client';

import React, { useEffect, useState } from "react";
import Head from "next/head";
import { Livro } from "@/classes/modelo/Livro";
import { LinhaLivro } from "@/componentes/LinhaLivro";
import { Menu } from "@/componentes/Menu";

const baseURL = "http://localhost:3000/api/livros";

export default function LivroLista () {
    const [livros, setLivros] = useState<Array<Livro>>([]);
    const [carregado, setCarregado] = useState(false);

    const obterLivros = async () => {
        const resposta = await fetch(baseURL);
        const dados = await resposta.json();
        setLivros(dados);
        setCarregado(true);
    };

    const excluirLivro = async (codigo: number) => {
        const resposta = await fetch(`${baseURL}/${codigo}`, {
            method: "DELETE",
        });
        if (resposta.ok) {
            setCarregado(false); // Força o redesenho
        }
    };

    useEffect(() => {
        if (!carregado) {
            obterLivros();
        }
    }, [carregado]);

    return (
        <div>
            <Head>
                <title>Lista de Livros</title>
            </Head>
            {/* <Menu /> */}
            <main className="container col-12 m-4 flex flex-col gap-4">
                <h1 className="text-2xl font-bold">Lista de Livros</h1>
                <table className="table">
                    <thead className="thead-dark">
                        <tr>
                            <th scope="col">Título</th>
                            <th scope="col">Autores</th>
                            <th scope="col">Editora</th>
                            <th scope="col">Ações</th>
                        </tr>
                    </thead>
                    <tbody>
                        {livros.map((livro) => (
                            <LinhaLivro
                                key={livro.codigo}
                                livro={livro}
                                excluir={excluirLivro}
                            />
                        ))}
                    </tbody>
                </table>
            </main>
        </div>
    );
};
