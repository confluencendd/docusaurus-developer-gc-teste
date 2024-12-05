---
id: "autorizacao-autenticacao"
---

# Autorização e autenticação

As etapas a seguir o ajudarão a iniciar sua jornada para integração com o NDD Elog.

## **API de homologação**

Antes de iniciar a integração com a API em produção, é **altamente recomendável** que você utilize o **ambiente de homologação** para realizar seus testes. O ambiente de homologação é uma versão segura e controlada da API, onde você pode validar todas as funcionalidades e garantir que os dados estão sendo enviados corretamente sem impactar as operações reais.

:::tip[DICA]
Aqui está a URL base da API de homologação: `https://homologacao.nddelog.com/api`
:::

## Autorização

Antes de realizar qualquer integração, é necessário gerar as suas credenciais, `clientId` e `secret`, para obter um token de acesso, que valida suas solicitações e protege os dados trafegados.

1. Acesse a [**plataforma do NDD Elog**](#) e faça login
2. Navegue até Integração e clique em Criar credenciais
3. Utilize as credenciais `clientId` e `secret` geradas para [**obter o token de acesso**](#obter-o-token-de-acesso)

## Obter o token de acesso

O token de acesso é uma string qual contém as credenciais e permissões para serem usadas para acessar os recursos da nossa API (exemplo, criar a viagem, criar os motoristas, criar as filais, etc.)

Com o seu `clientId` e o `secret` em maõs, abra o Postman, ou qualquer outra ferramenta da sua preferência.

1. Em método selecione `POST`
2. URL digite `[URL_BASE]/api/auth/token`
3. No cabeçalho selecione `Content-Type: application/json`
4. No corpo da requisição envie a informação do `clientId` e `secret`

```json
{
  "clientId": "seu_client_id_aqui",
  "secret": "seu_secret_aqui"
}
```

5. O seu token de acesso será gerado

```json
{
  "accessToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6Ik5ERCBFbG9nIiwiaWF0IjoxNTE2MjM5MDIyfQ.sqF8-Z6lD8mO-BHgKDaG8W9cvEZexEBsR5p1W-9UcsY",
  "expiresIn": 3600
}
```

:::tip[PRONTO]
Agora você poderá utilizar todos os recursos da API do NDD Elog. Basta enviar o token como parte do cabeçalho Authorization nas próximas requisições.

```text
 Authorization: Bearer {accessToken}
```

:::

---

## **Próximos passos**

[**Configurar a API de notificações**](./notificacoes).

---
