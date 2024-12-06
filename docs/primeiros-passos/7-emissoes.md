---
id: "emissoes"
---

# Consulta de emissões

A API do NDD Elog permite que você recupere informações detalhadas sobre eventos relacionados ao **CIOT**, **Vale-pedágio obrigatório** e **MDF-e** através de métodos `GET`. Esses métodos são projetados para facilitar o acesso a dados importantes durante o processo de transporte, como o status de documentos, informações sobre o pagamento de pedágio e o manifesto de documentos fiscais.

## Recuperar informações sobre CIOT
O CIOT (Código Identificador da Operação de Transporte) é utilizado para identificar e rastrear operações de transporte de carga. Usando o método GET, o usuário pode recuperar informações relacionadas ao CIOT de uma viagem ou operação específica.


### Exemplo de requisição

- Método: `GET`
- URL: `[URL_BASE]/api/ciot/{ciot_id}`

**URL:**
```json
/api/ciot/3fa85f64-5717-4562-b3fc-2c963f66afa6
```

**Cabeçalhos**
```json
Content-Type: application/json
Authorization: Bearer {accessToken}
```

**Resposta esperada (em caso de sucesso):**
```json
{
  "value": [
    {
      "id": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
      "IdentificadorViagem": "string",
      "Status": 1,
      "Protocolo": "string",
      "Numero": "string",
      "MensagensFalha": "string"
    }
  ]
}
```

---

## Recuperar informações sobre o vale-pedágio obrigatório
O Vale-pedágio obrigatório é utilizado para o pagamento do pedágio durante o transporte de carga. Com o método, é possível acessar informações sobre os pagamentos de pedágio feitos durante a viagem.

### Exemplo de requisição

- Método: `GET`
- URL: `[URL_BASE]/api/pedagio/{pedagio_id}`

**URL:**
```json
/api/pedagio/3fa85f64-5717-4562-b3fc-2c963f66afa6
```

**Cabeçalhos**
```json
Content-Type: application/json
Authorization: Bearer {accessToken}
```

**Resposta esperada (em caso de sucesso):**
```json
{
  "value": [
    {
      "id": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
      "IdentificadorViagem": "string",
      "Status": 1,
      "Protocolo": "string",
      "Numero": "string",
      "MensagensFalha": "string"
    }
  ]
}
```

---

## Recuperar informações sobre o MDF-e
O MDF-e (Manifesto Eletrônico de Documentos Fiscais) é utilizado para documentar o transporte de cargas que envolvem múltiplos documentos fiscais. O método GET para MDF-e permite consultar o status e os detalhes dos manifestos gerados.

### Exemplo de requisição

- Método: `GET`
- URL: `[URL_BASE]/api/mdfe/{mdfe_id}`

**URL:**
```json
/api/mdfe/3fa85f64-5717-4562-b3fc-2c963f66afa6
```

**Cabeçalhos**
```json
Content-Type: application/json
Authorization: Bearer {accessToken}
```

**Resposta esperada (em caso de sucesso):**
```json
{
  "value": [
    {
      "id": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
      "IdentificadorViagem": "string",
      "Status": 1,
      "Protocolo": "string",
      "Numero": "string",
      "MensagensFalha": "string"
    }
  ]
}
```

:::tip[DICA]
Você pode consultar a nossa [**refência**](#) completa para mais informações.
:::