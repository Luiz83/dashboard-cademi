export interface UserDto {
    id: number
    nome: string
    email: string
    doc: string
    celular: any
    login_auto: string
    gratis: boolean
    criado_em: string
    ultimo_acesso_em?: string
}