---
id: "autorizacao-autenticacao"
---

# Autorização e autenticação

As etapas a seguir o ajudarão a iniciar sua jornada para integração com o NDD Elog.

## Autorização

Antes de realizar qualquer integração, é necessário obter as suas credenciais, `clientId` e `secret`, para gerar um token de acesso, que valida suas solicitações e protege os dados trafegados.

### Onde eu consigo as minhas credenciais?
As credenciais serão enviadas pela NDD, contendo as seguintes informações:
- `clientId`
- `secret`
- `scope`
 
| **Escopo**            | **Descrição**                                                                                                 |
| --------------------- | ------------------------------------------------------------------------------------------------------------- |
| **ndd-core-api**      | API masterdata que permite criar e consultar os dados principais do processo de integração e enviar a viagem. |
| **ndd-emissions-api** | API que permite consultar os dados de CIOT, Vale-pedágio obrigatório e MDF-e.                                 |


## Obter o token de acesso
O token de acesso é uma `string` que contém as credenciais e permissões para serem usadas para acessar os recursos da nossa API (exemplo, criar a viagem, criar os motoristas, criar as filais, etc.)

Com o `clientId`, `secret` e `scope` utilize uma ferramenta para chamadas REST com as informações abaixo:

1. Em **método** selecione `POST`
2. Em **URL** digite `[URL_BASE]/api/v1/auth/token`
3. No **cabeçalho** selecione `Content-Type: application/json`
4. No **corpo** da requisição envie a informação do `clientId`, `secret`, `scope` e `grant_type`

:::note[Nota]
O `grant_type` deve ser enviado com o valor `client_credentials` fixo.
:::

### Exemplo de requisição
- Método: `POST`
- URL: `[URL_BASE]/api/v1/auth/token`

**Cabeçalhos**
```json
Content-Type: application/json
```

**Corpo**
```json
{
  "clientId": "abc123456789xyz",
  "secret": "shhItsASecretKey09876",
  "scope": "ndd-core-api",
  "grant_type": "client_credentials"
}
```

5. O token de acesso será gerado contendo duas informações:
   1. `accessToken`: String com o token de Autorização
   2. `expiresIn`: Tempo de expiração do token em minutos
   
:::note[Nota]
O token deve ser renovado após a sua expiração, seguindo o tópico [**Obter o token de acesso**](#obter-o-token-de-acesso).
:::

```json
{
  "accessToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6Ik5ERCBFbG9nIiwiaWF0IjoxNTE2MjM5MDIyfQ.sqF8-Z6lD8mO-BHgKDaG8W9cvEZexEBsR5p1W-9UcsY",
  "expiresIn": 3600
}
```

:::tip[PRONTO]
Agora é possível utilizar todos os recursos da API do NDD Elog, enviando o token como parte do cabeçalho `Authorization` nas próximas requisições.

```text
 Authorization: Bearer {accessToken}
```

:::

---

## **Próximos passos**

[**Configurar a API de notificações**](./notificacoes).

---
