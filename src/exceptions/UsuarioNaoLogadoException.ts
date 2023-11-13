export class UsuarioNaoLogadoException extends Error {
    constructor(mensagem: string) {
        super(mensagem);
    }
}