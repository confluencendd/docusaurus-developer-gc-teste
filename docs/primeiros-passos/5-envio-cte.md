---
id: "envio-cte"
---

# Envio do CTe
O **Conhecimento de Transporte Eletrônico (CT-e)** é um documento fiscal essencial no fluxo logístico, utilizado para registrar e validar operações de transporte de cargas. 

## Quem pode enviar o CT-e para o NDD Elog?

- **Embarcadores:** Empresas que contratam o serviço de transporte e desejam emitir o CT-e em nome do transportador para registrar a movimentação de suas mercadorias.
- **Transportadores:** Empresas responsáveis pela execução do serviço de transporte, que emitem o CT-e para comprovar o serviço prestado.

## API de homologação

Antes de iniciar a integração com a API em produção, é **altamente recomendável** que você utilize o **ambiente de homologação** para realizar seus testes. O ambiente de homologação é uma versão segura e controlada da API, onde você pode validar todas as funcionalidades e garantir que os dados estão sendo enviados corretamente sem impactar as operações reais.

:::tip[DICA]
Aqui está a URL base da API de homologação: `https://homologacao.nddelog.com/api`
:::

### Exemplo de envio do CT-e

**CT-e enviado com sucesso:**
- Método: `POST`
- URL: `[URL_BASE]/api/v1/cte`

**Cabeçalhos:**
```json
Content-Type: application/json
Authorization: Bearer <nosso_token_de_acesso>
```

**Body:**
```json
{
  "Id": "8e57687f-9afe-419b-800b-49567673a67c",
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
  "error": "Invalid cte"
}
```

---
## **Próximos passos**

Acompanhar o [**processamento do documento CT-e**](./notificacao-processamento-cte)

---