import { GetUsersByTag } from "./services/cademi";

import dotenv from 'dotenv'

dotenv.config();

const DoSomething = async () => {
    let users = await GetUsersByTag()

    // users.forEach(user => {
    //     let days = CheckAccess(user.ultimo_acesso_em)

    //     // IF para testar o envio dos email e o template!
    //     // if (user.nome === 'Luiz Pachioni'){
    //     //     sendEmail('email@teste.com.br', user.nome, mensagemUm)
    //     //     sendEmail('email@teste.com.br', user.nome, mensagemDois)
    //     //     sendEmail('email@teste.com.br', user.nome, mensagemTres)
    //     //     sendEmail('emaildois@teste.com', user.nome, mensagemTres)
    //     //     sendEmail('emailtres@teste.com', user.nome, mensagemTres)
    //     // }

    //     if (days === 3)
    //         sendEmail(user.email, user.nome, mensagemUm)

    //     if (days === 5)
    //         sendEmail(user.email, user.nome, mensagemDois)

    //     if (days === 7)
    //         return sendEmail(user.email, user.nome, mensagemTres)
    // });
}

DoSomething()