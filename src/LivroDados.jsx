import { useState, useEffect } from "react";
import { ControleEditora } from "./controle/ControleEditora";
import { Livro } from "./modelo/Livro";

const controleEditora = new ControleEditora();

export const LivroDados = ({ incluirLivro }) => {
    const [titulo, setTitulo] = useState("");
    const [resumo, setResumo] = useState("");
    const [autores, setAutores] = useState("");
    const [codEditora, setCodEditora] = useState(0);
    const [editoras, setEditoras] = useState([]);
    const [showAlert, setShowAlert] = useState(false);

    useEffect(() => {
        const editorasList = controleEditora.getEditoras();
        setEditoras(editorasList);
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();

        const novoLivro = new Livro(
            0,
            codEditora,
            titulo,
            resumo,
            autores.split("\n")
        );

        incluirLivro(novoLivro);
        setShowAlert(true);

        setTitulo("");
        setResumo("");
        setAutores("");
        setCodEditora(0);
    };

    return (
        <main>
            <h1>Cadastro de Livro</h1>
            {showAlert && (
                <div className="alert alert-success alert-dismissible fade show" role="alert">
                    Livro cadastrado com sucesso!
                    <button type="button" className="close" data-dismiss="alert" aria-label="Close" onClick={() => setShowAlert(false)}>
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
            )}
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="title">Título</label>
                    <input
                        className="form-control"
                        id="title"
                        type="text"
                        value={titulo}
                        onChange={(e) => setTitulo(e.target.value)}
                        aria-describedby="title"
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="summary">Resumo:</label>
                    <input
                        className="form-control"
                        id="summary"
                        type="text"
                        value={resumo}
                        onChange={(e) => setResumo(e.target.value)}
                        aria-describedby="summary"
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="authors">Autores:</label>
                    <textarea
                        id="authors"
                        value={autores}
                        onChange={(e) => setAutores(e.target.value)}
                        placeholder="Um autor por linha"
                        className="form-control"
                        rows="3"
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="publisher">Editora:</label>
                    <select
                        id="publisher"
                        value={codEditora}
                        onChange={(e) => setCodEditora(Number(e.target.value))}
                        className="form-control"
                        required
                    >
                        <option value={0}>Selecione uma editora</option>
                        {editoras.map((editora) => (
                            <option
                                key={editora.codEditora}
                                value={editora.codEditora}
                            >
                                {editora.nome}
                            </option>
                        ))}
                    </select>
                </div>
                <button type="submit" className="btn btn-primary">Cadastrar</button>
            </form>
        </main>
    );
};
