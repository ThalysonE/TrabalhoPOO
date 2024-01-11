import Usuario from './classeUsuario';
import { Reserva, ReservaVoo, ReservaHotel } from './classeReserva';
import RecomendacaoViagem from './classeRecomendacao';

// Classe principal para o aplicativo de Planejamento de Viagens
class AplicativoViagem {
    private _reservas: Reserva[];
    private _usuarios: Usuario[];
    private _recomendacoes: RecomendacaoViagem;

    constructor() {
        this._reservas = [];
        this._usuarios = [];
        this._recomendacoes = new RecomendacaoViagem();
    }

    // Método para realizar uma reserva
    realizarReserva(reserva: Reserva): void {
        // Verifica se há conflitos de reserva antes de adicionar
        try {
            if (!this.verificarConflitos(reserva)) {
                this._reservas.push(reserva);
                console.log(`Reserva realizada com sucesso: ${reserva.toString()}`);
            } else {
                console.log(`Conflito de reserva: ${reserva.toString()}`);
            }
        } catch (error) {
            console.error(`Erro ao realizar reserva: ${error}`);
        }
    }

    // Método para criar um itinerário personalizado
    criarItinerario(usuario: Usuario): Reserva[] {
        try {
            // Filtra as reservas do usuário
            const reservasUsuario = this._reservas.filter(reserva => reserva.usuario === usuario);

            // Ordena as reservas por data de início
            reservasUsuario.sort((a, b) => a.dataInicio.getTime() - b.dataInicio.getTime());

            console.log(`Itinerário criado para ${usuario.nome}:`);
            reservasUsuario.forEach(reserva => {
                console.log(`- ${reserva.toString()}`);
            });

            return reservasUsuario;
        } catch (error) {
            console.error(`Erro ao criar itinerário: ${error}`);
            return [];
        }
    }

    // Método para verificar conflitos de reserva
    private verificarConflitos(novaReserva: Reserva): boolean {
        try {
            // Verifica se há conflitos com outras reservas já existentes
            for (const reserva of this._reservas) {
                if (this.verificarConflitoIndividual(novaReserva, reserva)) {
                    return true;
                }
            }
            return false;
        } catch (error) {
            console.error(`Erro ao verificar conflitos: ${error}`);
            return false;
        }
    }

    // Método auxiliar para verificar conflito entre duas reservas
    private verificarConflitoIndividual(reserva1: Reserva, reserva2: Reserva): boolean {
        try {
            const inicio1 = reserva1.dataInicio.getTime();
            const fim1 = reserva1.dataFim.getTime();
            const inicio2 = reserva2.dataInicio.getTime();
            const fim2 = reserva2.dataFim.getTime();

            // Verifica se há sobreposição de datas
            if ((inicio1 >= inicio2 && inicio1 <= fim2) || (fim1 >= inicio2 && fim1 <= fim2)) {
                console.log(`Conflito de datas: ${reserva1.toString()} e ${reserva2.toString()}`);
                return true;
            }

            return false;
        } catch (error) {
            console.error(`Erro ao verificar conflito individual: ${error}`);
            return false;
        }
    }

    // Método para obter recomendações com base nas preferências do usuário
    obterRecomendacoes(usuario: Usuario): string[] {
        try {
            // Utiliza a classe RecomendacaoViagem para gerar sugestões
            return this._recomendacoes.oferecerSugestoes(usuario);
        } catch (error) {
            console.error(`Erro ao obter recomendações: ${error}`);
            return [];
        }
    }
}

export default AplicativoViagem;