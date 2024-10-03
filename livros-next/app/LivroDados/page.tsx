'use client';

import React, { useState } from "react";
import { Livro } from "@/classes/modelo/Livro";
import { controleEditora } from "../api/editoras/route";
import { useRouter } from 'next/navigation'

const baseURL = "http://localhost:3000/api/livros";

export default function LivroDados () {
    const opcoes = controleEditora.getEditoras().map((editora) => ({
        value: editora.codEditora,
        text: editora.nome,
    }));

    const router = useRouter()

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
            router.push("/LivroLista");
        }
    };

    return (
        <div className="container col-12 m-4 flex flex-col gap-4">
            <h1 className="text-2xl font-bold">Dados do Livro</h1>
            <form onSubmit={incluir} className="flex flex-col gap-2">
                <div className="form-group">
                    <label htmlFor="title">Título:</label>
                    <input
                        id="title"
                        className="form-control"
                        type="text"
                        value={titulo}
                        onChange={(e) => setTitulo(e.target.value)}
                    />
                </div>
                <div className="form-group">
                    <label>Resumo:</label>
                    <textarea
                        className="form-control"
                        value={resumo}
                        onChange={(e) => setResumo(e.target.value)}
                    />
                </div>
                <div className="form-group">
                    <label>Autores (um por linha):</label>
                    <textarea
                        className="form-control"
                        value={autores}
                        onChange={(e) => setAutores(e.target.value)}
                    />
                </div>
                <div className="form-group">
                    <label>Editora:</label>
                    <select className="form-control" value={codEditora} onChange={tratarCombo}>
                        {opcoes.map((editora) => (
                            <option key={editora.value} value={editora.value}>
                                {editora.text}
                            </option>
                        ))}
                    </select>
                </div>
                <div>
                    <button className="btn btn-primary" type="submit">Salvar</button>
                </div>
            </form>
        </div>
    );
};
