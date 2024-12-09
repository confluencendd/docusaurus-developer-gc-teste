---
id: "envio-cte"
---

# Envio do CTe
O **Conhecimento de Transporte Eletrônico (CT-e)** é um documento fiscal essencial no fluxo logístico, utilizado para registrar e validar operações de transporte de cargas. 

## Quem pode enviar o CT-e para o NDD Elog?
Os documentos autorizados podem ser enviados ao NDD Elog pela transportadora ou pelo embarcador, conforme abaixo:

- **Transportadoras:** Após a autorização do documento na SEFAZ.
- **Embarcadores:** Após a recepção dos documentos emitidos pela transportadora ou quando emitido documentos em nome das transportadoras.

### Exemplo de envio do CT-e

**CT-e enviado com sucesso:**
- Método: `POST`
- URL: `[URL_BASE]/api/v1/Documento/Cte`

**Cabeçalhos**
```json
Content-Type: application/json
Authorization: Bearer <nosso_token_de_acesso>
```

**Corpo**
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