import Usuario from './classeUsuario';

export abstract class Reserva {
    protected _dataInicio: Date;
    protected _dataFim: Date;
    protected _usuario: Usuario; // Adiciona uma referência ao usuário associado à reserva

    constructor(dataInicio: Date, dataFim: Date, usuario: Usuario) {
        this._dataInicio = dataInicio;
        this._dataFim = dataFim;
        this._usuario = usuario;
    }


    get dataInicio(): Date {
        return this._dataInicio;
    }

    get dataFim(): Date {
        return this._dataFim;
    }

    get usuario(): Usuario {
        return this._usuario;
    }

    // Método toString para facilitar a impressão
    toString(): string {
        return `Reserva [${this._dataInicio.toDateString()} - ${this._dataFim.toDateString()}] para ${this._usuario.nome}`;
    }
}

// Subclasse para Reservas de Voos
export class ReservaVoo extends Reserva {
    private _numeroVoo: string;

    constructor(dataInicio: Date, dataFim: Date, numeroVoo: string, usuario: Usuario) {
        super(dataInicio, dataFim, usuario);
        this._numeroVoo = numeroVoo;
    }

    get numeroVoo(): string {
        return this._numeroVoo;
    }
}

// Subclasse para Reservas de Hotéis
export class ReservaHotel extends Reserva {
    private _nomeHotel: string;

    constructor(dataInicio: Date, dataFim: Date, nomeHotel: string, usuario: Usuario) {
        super(dataInicio, dataFim, usuario);
        this._nomeHotel = nomeHotel;
    }

    get nomeHotel(): string {
        return this._nomeHotel;
    }
}