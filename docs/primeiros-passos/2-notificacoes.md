---
id: "notificacoes"
---

# Notificações
O NDD Elog utiliza **webhook** para realizar o envio de notificações de cada etapa do processamento da viagem. 

:::warning[Atenção]
Colocar a informação de pre requisito para envio das notificações
:::

## Como o webhook funciona no NDD Elog?
Para cada etapa do processamento das informações da viagem, o NDD Elog irá gerar notificações para acompanhamento do *status*.

### Tipos de notificação que o NDD Elog envia

| Type | Descrição                                             |
| ---- | ----------------------------------------------------- |
| 1    | CIOT (Código Identificador da Operação de Transporte) |
| 2    | Vale-pedágio obrigatório                              |
| 3    | MDF-e (Manifesto Eletrônico de Documentos Fiscais)    |
| 4    | Confirmação de entrega                                |
| 5    | Ocorrências da viagem                                 |
| 6    | Imagem do comprovante de entrega                      |
| 7    | Pagamento                                             |
| 8    | Conciliação do CT-e                                   |


### O que eu preciso para receber as notificações?
Para integrar a API do NDD Elog e receber notificações importantes, como **ocorrências da viagem** e **emissão de documentos fiscais**, você precisará fornecer algumas informações essenciais.

#### Autorização
- Disponibilizar para a NDD os dados de autorização para envio das notificações para a sua API.

| Campo           | Descrição                                   |
| --------------- | ------------------------------------------- |
| URL do endpoint | Endpoint para gerar o token de autorização. |
| client_id       | Identificador único para autenticação.      |
| client_secret   | Chave secreta para autenticação.            |

:::warning[Atenção]
Os dados devem ser enviados para a NDD para fins de configuração do webhook de notificações.
:::

#### Endpoint de envio das notificações

- Disponibilizar um endpoint `POST` para onde as notificações serão enviadas que seja capaz de processar os dados abaixo:

| Campo   | Descrição                                                          |
| ------- | ------------------------------------------------------------------ |
| Type    | Tipo de notificação enviada.                                       |
| Id      | Identificador único do evento ou operação associado à notificação. |
| Status  | Status da operação. Pode ser 1 (Authorized) ou 2 (Failure).        |
| Message | Texto descritivo detalhando o resultado do evento ou operação.     |


### Exemplo de envio de notificação

- Método: `POST`
- URL: `https://api.cliente.com.br/webhook/notifications`

**Cabeçalhos:**
```json
Content-Type: application/json
Authorization: Bearer <nosso_token_de_acesso>
```
**Corpo**
```json
{
  "Type": 1,
  "Id": "8e57687f-9afe-419b-800b-49567673a67c",
  "Status": 1,
  "Message": "CIOT gerado com sucesso"
}
```

**Resposta esperada (em caso de sucesso):**
```json
HTTP/1.1 200 OK
```

**Resposta esperada (em caso de erro):**
```json
HTTP/1.1 400 Bad Request
Content-Type: application/json

{
  "error": "Invalid payload format"
}
```
---

## **Próximos passos**

Cadastrar os [**dados iniciais**](./cadastro-dados-iniciais) para a integração com o NDD Elog.

---