import { NextRequest, NextResponse } from 'next/server';
import { controleLivro } from '../route';

export async function DELETE(req: NextRequest, { params }: { params: { codigo: string } }) {
    try {
        const codigo = parseInt(params.codigo, 10);
        controleLivro.excluir(codigo);
        return NextResponse.json({ message: 'Livro excluído com sucesso' }, { status: 200 });
    } catch (error) {
        return NextResponse.json({ error: 'Erro ao excluir o livro' }, { status: 500 });
    }
}
