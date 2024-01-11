
// Classe para usuários
class Usuario {
    private _nome: string;
    private _preferencias: string[];

    constructor(nome: string, preferencias: string[]) {
        this._nome = nome;
        this._preferencias = preferencias;
    }

    // Métodos para obter informações do usuário
    get nome(): string {
        return this._nome;
    }

    get preferencias(): string[] {
        return this._preferencias;
    }
}

export default Usuario;