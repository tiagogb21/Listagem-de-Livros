import { NextRequest, NextResponse } from 'next/server';
import { ControleLivros } from '@/classes/controle/ControleLivros';

export const controleLivro = new ControleLivros();

export async function GET() {
    try {
        const livros = controleLivro.obterLivros();
        return NextResponse.json(livros, { status: 200 });
    } catch (error) {
        return NextResponse.json({ error: 'Erro ao buscar livros' }, { status: 500 });
    }
}

export async function POST(req: NextRequest) {
    try {
        const livro = await req.json();
        controleLivro.incluir(livro);
        return NextResponse.json({ message: 'Livro incluído com sucesso' }, { status: 200 });
    } catch (error) {
        return NextResponse.json({ error: 'Erro ao incluir livro' }, { status: 500 });
    }
}
