---
id: "emissoes"
---

# Consulta de emissões

A API do NDD Elog permite que você recupere informações detalhadas sobre eventos relacionados ao **CIOT**, **Vale-pedágio obrigatório** e **MDF-e** através de métodos `GET`. Esses métodos são projetados para facilitar o acesso a dados importantes durante o processo de transporte, como o status de documentos, informações sobre o pagamento de pedágio e o manifesto de documentos fiscais.

## Recuperar informações sobre CIOT
O CIOT (Código Identificador da Operação de Transporte) é utilizado para identificar e rastrear operações de transporte de carga. Usando o método GET, o usuário pode recuperar informações relacionadas ao CIOT de uma viagem ou operação específica.


### Exemplo de requisição

- Método: `GET`
- URL: `[URL_BASE]/api/v1/CIOT`

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
- URL: `[URL_BASE]/api/v1/Pedagio`

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
- URL: `[URL_BASE]/api/v1/MDFE`

:::note[nota]
Você pode utilizar o identificador do documento como parâmetro da URL `[URL_BASE]/api/v1/MDFE/{id}`
:::

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
      "Status": "string",
      "Serie": 0,
      "Numero": 0,
      "ValorTotal": 0,
      "PesoBrutoTotal": 0,
      "PercursoInterestadual": "string",
      "DataEncerramento": "2024-12-09T13:24:27.305Z",
      "ProtocoloSefaz": "string",
      "MensagensFalha": "string",
      "LocalRetirada": {
        "IBGE": 0,
        "Cidade": "string",
        "Estado": "string",
        "CEP": 0,
        "Logradouro": "string",
        "Numero": "string",
        "Complemento": "string",
        "Bairro": "string"
      },
      "LocalEntrega": {
        "IBGE": 0,
        "Cidade": "string",
        "Estado": "string",
        "CEP": 0,
        "Logradouro": "string",
        "Numero": "string",
        "Complemento": "string",
        "Bairro": "string"
      },
      "Emitente": {
        "CNPJ": "string",
        "IE": 0,
        "Nome": "string",
        "Endereco": {
          "IBGE": 0,
          "Cidade": "string",
          "Estado": "string",
          "CEP": 0,
          "Logradouro": "string",
          "Numero": "string",
          "Complemento": "string",
          "Bairro": "string"
        }
      },
      "CIOTs": [
        {
          "id": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
          "IdentificadorViagem": "string",
          "Status": 1,
          "Protocolo": "string",
          "Numero": "string",
          "MensagensFalha": "string"
        }
      ],
      "Pedágios": [
        {
          "id": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
          "IdentificadorViagem": "string",
          "Status": 1,
          "Protocolo": "string",
          "Numero": "string",
          "MensagensFalha": "string"
        }
      ],
      "VeiculoTracao": {
        "CategoriaCombinacao": "string",
        "Placa": "string",
        "Tara": 0,
        "TipoRodado": "string",
        "TipoCarroceria": "string",
        "Capacidade": 0
      },
      "VeiculosReboque": [
        {
          "CategoriaCombinacao": "string",
          "Placa": "string",
          "Tara": 0,
          "TipoRodado": "string",
          "TipoCarroceria": "string",
          "Capacidade": 0
        }
      ],
      "Condutor": {
        "Nome": "string",
        "CPF": "string"
      },
      "ProprietarioVeiculo": {
        "IBGE": "string",
        "RNTRC": 0,
        "Estado": "string",
        "Nome": "string"
      },
      "NFes": [
        {
          "id": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
          "ChaveAcesso": "string",
          "IBGERetirada": 0,
          "IBGEEntrega": "string",
          "EstaEntregue": true
        }
      ]
    }
  ]
}
```

:::tip[DICA]
Você pode consultar a nossa [**refência**](#) completa para mais informações.
:::