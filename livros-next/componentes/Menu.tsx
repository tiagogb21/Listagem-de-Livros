'use client';

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export const Menu: React.FC = () => {
    const path = usePathname();

    return (
        <header className="p-3 bg-dark text-white">
            <nav className="container">
                <div className="d-flex flex-wrap align-items-center justify-content-lg-start">
                    <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 mb-md-0">
                        <li>
                            <Link
                                href="/"
                                className={`nav-link px-2 ${path === '/' ? 'text-secondary' : 'text-white'}`}
                            >
                                Inicial
                            </Link>
                        </li>
                        <li>
                            <Link
                                href="/LivroLista"
                                className={`nav-link px-2 ${path === '/LivroLista' ? 'text-secondary' : 'text-white'}`}
                            >
                                Lista de Livros
                            </Link>
                        </li>
                        <li>
                            <Link
                                href="/LivroDados"
                                className={`nav-link px-2 ${path === '/LivroDados' ? 'text-secondary' : 'text-white'}`}
                            >
                                Cadastrar Livro
                            </Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </header>
    );
};
