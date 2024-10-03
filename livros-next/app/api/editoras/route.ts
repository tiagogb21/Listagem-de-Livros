// app/api/editoras/route.ts
import { NextRequest, NextResponse } from 'next/server';
import { ControleEditora } from '@/classes/controle/ControleEditora';

export const controleEditora = new ControleEditora();

export async function GET(req: NextRequest) {
    try {
        const editoras = controleEditora.getEditoras();
        return NextResponse.json(editoras, { status: 200 });
    } catch (error) {
        return NextResponse.json({ error: 'Erro ao buscar editoras' }, { status: 500 });
    }
}

export async function POST(req: NextRequest) {
    return new Response('Método não permitido', { status: 405 });
}
