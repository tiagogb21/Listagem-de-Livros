import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import {LivroLista} from './LivroLista';
import {LivroDados} from './LivroDados';
import { ControleLivros } from './controle/ControleLivros';
import { Livro } from './modelo/Livro';

const controleLivro = new ControleLivros();

const App = () => {
    const [livros, setLivros] = useState<Livro[]>([]);

    useEffect(() => {
        const livrosList = controleLivro.obterLivros();
        setLivros(livrosList);
    }, []);

    const incluirLivro = (livro: Livro) => {
        controleLivro.incluir(livro);
        setLivros(controleLivro.obterLivros());
    };

    const excluirLivro = (codigo: number) => {
        controleLivro.excluir(codigo);
        setLivros([...controleLivro.obterLivros()]);
    };

    return (
        <Router>
            <nav className="nav nav-tabs">
                <div className="nav-item">
                    <Link to="/" className="nav-link">Lista de Livros</Link>
                </div>
                <div className="nav-item"><Link to="/dados" className="nav-link">Cadastro de Livro</Link></div>
            </nav>
            <Routes>
                <Route path="/" element={<LivroLista livros={livros} excluirLivro={excluirLivro} />} />
                <Route path="/dados" element={<LivroDados incluirLivro={incluirLivro} />} />
            </Routes>
        </Router>
    );
};

export default App;
