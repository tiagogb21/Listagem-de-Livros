'use client';

import React, { useState } from "react";
import { Livro } from "@/classes/modelo/Livro";
import { controleEditora } from "../api/editoras/route";
import Router from "next/router";

const baseURL = "http://localhost:3000/api/livros";

export default function LivroDados () {
    const opcoes = controleEditora.getEditoras().map((editora) => ({
        value: editora.codEditora,
        text: editora.nome,
    }));

    const [titulo, setTitulo] = useState("");
    const [resumo, setResumo] = useState("");
    const [autores, setAutores] = useState("");
    const [codEditora, setCodEditora] = useState(opcoes[0]?.value || 0);

    const incluirLivro = async (livro: Livro) => {
        const resposta = await fetch(baseURL, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(livro),
        });
        return resposta.ok;
    };

    const tratarCombo = (evento: React.ChangeEvent<HTMLSelectElement>) => {
        setCodEditora(Number(evento.target.value));
    };

    const incluir = async (evento: React.FormEvent<HTMLFormElement>) => {
        evento.preventDefault();
        const livro: Livro = {
            codigo: 0,
            titulo,
            resumo,
            autores: autores.split("\n"),
            codEditora,
        };
        const sucesso = await incluirLivro(livro);
        if (sucesso) {
            Router.push("/LivroLista");
        }
    };

    return (
        <div>
            <h1>Dados do Livro</h1>
            <form onSubmit={incluir}>
                <div>
                    <label>Título:</label>
                    <input
                        type="text"
                        value={titulo}
                        onChange={(e) => setTitulo(e.target.value)}
                    />
                </div>
                <div>
                    <label>Resumo:</label>
                    <textarea
                        value={resumo}
                        onChange={(e) => setResumo(e.target.value)}
                    />
                </div>
                <div>
                    <label>Autores (um por linha):</label>
                    <textarea
                        value={autores}
                        onChange={(e) => setAutores(e.target.value)}
                    />
                </div>
                <div>
                    <label>Editora:</label>
                    <select value={codEditora} onChange={tratarCombo}>
                        {opcoes.map((editora) => (
                            <option key={editora.value} value={editora.value}>
                                {editora.text}
                            </option>
                        ))}
                    </select>
                </div>
                <button type="submit">Salvar</button>
            </form>
        </div>
    );
};
