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
        try {
            if (!this.verificarConflitos(reserva)) {
                this._reservas.push(reserva);
                console.log(`Reserva realizada com sucesso: ${this.formatarDetalhesReserva(reserva)}`);
            } else {
                console.log(`Conflito de reserva: ${this.formatarDetalhesReserva(reserva)}`);
            }
        } catch (error) {
            console.error(`Erro ao realizar reserva: ${error}`);
        }
    }

    private formatarDetalhesReserva(reserva: Reserva): string {
        return `${reserva instanceof ReservaVoo ? 'Reserva de Voo' : 'Reserva de Hotel'} - ${reserva.toString()}`;
    }


    // Método para criar um itinerário personalizado
    criarItinerario(usuario: Usuario): Reserva[] {
        try {
            const reservasUsuario = this._reservas.filter(reserva => reserva.usuario === usuario);
    
            reservasUsuario.sort((a, b) => a.dataInicio.getTime() - b.dataInicio.getTime());
    
            console.log(`Itinerário criado para o usuário ${usuario.nome}:`);
    
            reservasUsuario.forEach(reserva => {
                console.log(`- Reserva: ${reserva.toString()} | Início: ${reserva.dataInicio.toDateString()} | Fim: ${reserva.dataFim.toDateString()}`);
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
            for (const reserva of this._reservas) {
                if (this.verificarConflitoIndividual(novaReserva, reserva)) {
                    console.log(`Conflito de datas: A nova reserva ${novaReserva.toString()} entra em conflito com a reserva existente ${reserva.toString()}`);
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

            const conflito = inicio1 <= fim2 && fim1 >= inicio2;

            if (conflito) {
                console.log(`Conflito de datas entre ${this.formatarDetalhesReserva(reserva1)} e ${this.formatarDetalhesReserva(reserva2)}`);
            }

            return conflito;
        } catch (error) {
            console.error(`Erro ao verificar conflito individual: ${error}`);
            return false;
        }
    }

    // Método para obter recomendações com base nas preferências do usuário
    obterRecomendacoes(usuario: Usuario): string[] {
        try {
            const recomendacoes = this._recomendacoes.oferecerSugestoes(usuario);
    
            if (recomendacoes.length > 0) {
                console.log(`Recomendações para ${usuario.nome}:`);
                recomendacoes.forEach((recomendacao, index) => {
                    console.log(`${index + 1}. ${recomendacao}`);
                });
            } else {
                console.log(`Não há recomendações disponíveis para ${usuario.nome}.`);
            }
    
            return recomendacoes;
        } catch (error) {
            console.error(`Erro ao obter recomendações: ${error}`);
            return [];
        }
    }
}

const usuario1 = new Usuario("João", ["Praias", "Aventura"]);
const usuario2 = new Usuario("Maria", ["Aventura", "Culinária"]);
const appViagem = new AplicativoViagem();

console.log("============================REALIZAR RESERVA VOO ==========================\n")
const reservaVoo1 = new ReservaVoo(new Date(2024, 5, 1), new Date(2024, 5, 7), "V123", usuario1);
const reservaVoo2 = new ReservaVoo(new Date(2024, 5, 10), new Date(2024, 5, 15), "V456", usuario2);
appViagem.realizarReserva(reservaVoo1);
appViagem.realizarReserva(reservaVoo2);
console.log("=====================================================================\n\n")

console.log("============================REALIZAR RESERVA HOTEL==========================\n")
const reservaHotel1 = new ReservaHotel(new Date(2024, 7, 2), new Date(2024, 7, 10), "Hotel X", usuario1);
const reservaHotel2 = new ReservaHotel(new Date(2024, 8, 10), new Date(2024, 8, 15), "Hotel Y", usuario2);
appViagem.realizarReserva(reservaHotel1);
appViagem.realizarReserva(reservaHotel2);
console.log("=====================================================================\n\n")

console.log("============================CRIA ITINERARIO==========================\n")
const itinerarioUsuario = appViagem.criarItinerario(usuario1);
console.log("=====================================================================\n\n")

console.log("============================Receber Recomendacao==========================\n")
const recomendacoesUsuario1 = appViagem.obterRecomendacoes(usuario1);
console.log("=====================================================================\n\n")


console.log("============================RESERVA COM CONFLITO==========================\n")
const reservaHotel3 = new ReservaHotel(new Date(2024, 1, 2), new Date(2024, 1, 10), "Hotel X", usuario1);
const reservaHotel4 = new ReservaHotel(new Date(2024, 1, 5), new Date(2024, 1, 8), "Hotel Y", usuario2);
appViagem.realizarReserva(reservaHotel1);
appViagem.realizarReserva(reservaHotel2);
console.log("=====================================================================\n\n")
