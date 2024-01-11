import Usuario from './classeUsuario';

// Classe para Recomendações de Viagem
class RecomendacaoViagem {
    oferecerSugestoes(usuario: Usuario): string[] {
        const preferenciasUsuario = usuario.preferencias;

        // Lógica para gerar sugestões com base nas preferências do usuário
        const sugestoes: string[] = [];

        const preferenciasDestinos: Record<string, string[]> = {
            "Praias": ["Cancun", "Maldivas", "Rio de Janeiro"],
            "Aventura": ["Patagônia", "Nepal", "Nova Zelândia"],
        };

        // Gerar sugestões com base nas preferências do usuário
        preferenciasUsuario.forEach(preferencia => {
            if (preferenciasDestinos[preferencia]) {
                sugestoes.push(...preferenciasDestinos[preferencia]);
            }
        });

        // Remover destinos que o usuário já visitou
        try {
            const destinosVisitados: string[] = [];
            const sugestoesFiltradas = sugestoes.filter(destino => !destinosVisitados.includes(destino));
            
            return sugestoesFiltradas;
        } catch (error) {
            console.error(`Erro ao filtrar sugestões: ${error}`);
            return sugestoes;
        }
    }
}

export default RecomendacaoViagem;