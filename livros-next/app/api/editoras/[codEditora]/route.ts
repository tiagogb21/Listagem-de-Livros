// app/api/editoras/[codEditora]/route.ts
import { NextRequest, NextResponse } from 'next/server';
import { controleEditora } from '../route';

export async function GET(req: NextRequest, { params }: { params: { codEditora: string } }) {
    try {
        const codEditora = parseInt(params.codEditora, 10);
        const nomeEditora = controleEditora.getNomeEditora(codEditora);
        if (!nomeEditora) {
            return NextResponse.json({ error: 'Editora não encontrada' }, { status: 404 });
        }
        return NextResponse.json({ nome: nomeEditora }, { status: 200 });
    } catch (error) {
        return NextResponse.json({ error: 'Erro ao buscar a editora' }, { status: 500 });
    }
}

export async function POST() {
    return new Response('Método não permitido', { status: 405 });
}
