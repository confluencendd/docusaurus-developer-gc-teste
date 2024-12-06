---
id: "criar-viagem"
---

# Criar a Viagem

A **criação de uma viagem** é o ponto central de toda a integração, consolidando todos os dados necessários para o processo logístico em um **único fluxo**.

Este endpoint recebe informações detalhadas sobre a viagem, incluindo os dados do **prestador de serviço**, **veículos**, **roteirização**, **documentos**, **locais de coleta e entrega** e **componentes do frete**. Ele assegura que todas as informações estejam integradas e que o processo de transporte seja devidamente registrado.

:::tip[DICA]
Se você já possui os dados iniciais cadastrados, basta enviar os seus [**identificadores**](#uso-de-identificadores) no cadastro da viagem.
:::


**Exemplo de requisição**

- Método: `POST`
- URL: `[URL_BASE]/api/v1/Viagem`

**Cabeçalhos**
```json
Content-Type: application/json
Authorization: Bearer {accessToken}
```

**Corpo**
```json
{
  "Identificador": "viagem001",
  "FormaPagamentoFrete": 1,
  "PorcentagemAntecipacapFrete": 0,
  "InfoComplementares": "Viagem de teste para cliente X",
  "Pedagio": {
    "CalcularPedagio": true,
    "PagarPedagio": true
  },
  "Filial": {
    "Identificador": "filial123",
    "Dados": {
      "Identificador": "filial123",
      "CNPJ": "12345678000199",
      "NomeFantasia": "Filial São Paulo",
      "RazaoSocial": "Empresa X Comércio LTDA",
      "Logradouro": "Av. Paulista",
      "Numero": "1000",
      "Bairro": "Bela Vista",
      "IBGE": 3550308,
      "UF": "SP",
      "CEP": 1310000,
      "IE": 123456789,
      "SerieMdfe": 1,
      "NumeroInicialMdfe": 1000
    }
  },
  "Prestador": {
    "Identificador": "prestador123",
    "Dados": {
      "Identificador": "prestador123",
      "CNPJCPF": "12345678000199",
      "Nome": "Transportadora ABC LTDA",
      "RNTRC": 9876543210,
      "IE": 123456789,
      "Logradouro": "Rua das Flores",
      "Numero": "100",
      "UF": "SP",
      "CEP": 12345678,
      "IBGE": 3550308,
      "FormaRecebimentoFrete": 1,
      "FormaRecebimentoPedagio": 1,
      "DadosBancarios": {
        "ChavePix": "1234abcd-5678-efgh-9101-ijklmnop1234",
        "Agencia": 1234,
        "Conta": 56789,
        "DigVerificador": 0,
        "CodigoBanco": 1,
        "CPFCNPJBeneficiario": "98765432100"
      }
    }
  },
  "VeiculoTracao": {
    "Identificador": "veiculo123",
    "Dados": {
      "Identificador": "veiculo123",
      "Placa": "ABC1234",
      "TipoVeiculo": 1,
      "Rntrc": 1234567890,
      "Modelo": "Scania R500",
      "Tara": 10000,
      "Capacidade": 20000,
      "TipoRodado": 1,
      "TipoCarroceria": 0,
      "Categoria": 0,
      "OperadoraTagPedagio": 1,
      "NumeroTagPedagio": "123456789",
      "QuantidadeEixos": 3,
      "ProprietarioVeiculo": {
        "Identificador": "proprietario123",
        "Dados": {
          "Identificador": "proprietario456",
          "CNPJCPF": "12345678000199",
          "Nome": "Transportadora XYZ LTDA",
          "RNTRC": 9876543210,
          "IE": 123456789,
          "Logradouro": "Rua das Flores",
          "Numero": "1000",
          "UF": "SP",
          "CEP": 12345678,
          "IBGE": 3550308
        }
      }
    }
  },
  "Roteirizacao": {
    "LocalOrigem": "São Paulo",
    "DefinicaoRota": 0,
    "CalcularRetorno": true,
    "Paradas": [
      {
        "Sequencia": 0,
        "Tipo": 1,
        "Local": "Campinas"
      }
    ]
  },
  "DocumentosViagem": [
    {
      "TipoDocumento": 1,
      "ChaveNumero": "123456",
      "Tomador": {
        "Identificador": "tomador123",
        "Dados": {
          "Identificador": "tomador123",
          "CNPJ": "98765432000199",
          "NomeFantasia": "Cliente XYZ",
          "RazaoSocial": "Empresa Cliente LTDA",
          "Logradouro": "Av. Brasil",
          "Numero": "500",
          "Bairro": "Centro",
          "IBGE": 3550308,
          "UF": "SP",
          "CEP": 10000000,
          "IE": 123456789,
          "SerieMdfe": 1,
          "NumeroInicialMdfe": 1000
        }
      },
      "LocalRetirada": "São Paulo",
      "LocalEntrega": "Campinas",
      "PesoLiquido": 10000,
      "PesoBruto": 12000,
      "Volume": 5,
      "PesoCubado": 15000,
      "ValorMercadoria": 50000,
      "ValorSeguro": 2000,
      "NumeroPedido": 1234,
      "DataHoraRetirada": "2024-11-29T13:42:12.865Z",
      "DataHoraEntrega": "2024-11-29T13:42:12.865Z"
    }
  ],
  "Locais": [
    {
      "Identificador": "local123",
      "CPFCNPJ": "12345678000199",
      "Nome": "Centro de Distribuição",
      "Logradouro": "Rua do Logística",
      "Numero": "500",
      "Bairro": "Centro",
      "CEP": 12345678,
      "Municipio": "São Paulo",
      "UF": "SP",
      "Ibge": 3550308,
      "Latitude": -23.5505,
      "Longitude": -46.6333
    }
  ],
  "Condutores": [
    {
      "Identificador": "condutor123",
      "Dados": {
        "Identificador": "condutor123",
        "Nome": "João da Silva",
        "CPF": "12345678901",
        "RNTRC": 9876543210
      }
    }
  ],
  "ComponentesFrete": [
    {
      "Descricao": "Frete Básico",
      "Valor": 1000,
      "ComImposto": true
    }
  ]
}
```

| **Campo**                   | **Obrigatório** | **Descrição**                                                                                                    |
| --------------------------- | --------------- | ---------------------------------------------------------------------------------------------------------------- |
| Identificador               | Sim             | Identificador único da viagem (e.g., código interno).                                                            |
| FormaPagamentoFrete         | Sim             | Forma de pagamento do frete: 1 para pagamento à vista, 2 para pagamento parcelado, etc.                          |
| PorcentagemAntecipacapFrete | Não             | Percentual de antecipação do frete.                                                                              |
| InfoComplementares          | Não             | Informações complementares sobre a viagem.                                                                       |
| Pedagio                     | Sim             | Dados sobre o pedágio: `CalcularPedagio` define se o pedágio será calculado e `PagarPedagio` se será pago.       |
| Filial                      | Sim             | Informações da filial: inclui dados como `CNPJ`, `NomeFantasia`, `RazaoSocial`, `Endereço`, entre outros.        |
| Prestador                   | Sim             | Dados do prestador de serviço, como `CNPJCPF`, `Nome`, `RNTRC`, `Dados Bancários`, e outros.                     |
| VeiculoTracao               | Sim             | Dados do veículo tração, incluindo `Placa`, `Modelo`, `Tara`, `Capacidade`, e informações sobre o proprietário.  |
| VeiculosReboque             | Não             | Lista de veículos reboque que podem ser utilizados na viagem, com detalhes semelhantes ao `VeiculoTracao`.       |
| Roteirizacao                | Sim             | Roteiro da viagem, incluindo `LocalOrigem`, `DefinicaoRota`, `CalcularRetorno`, e `Paradas` ao longo do caminho. |
| DocumentosViagem            | Sim             | Documentos associados à viagem, como `TipoDocumento`, `Tomador`, e detalhes sobre retirada e entrega.            |
| Locais                      | Sim             | Lista de locais associados à viagem, como `LocalRemetente`, `LocalDestinatario`, entre outros.                   |
| Condutores                  | Sim             | Informações sobre os motoristas, incluindo `Nome`, `CPF`, e `RNTRC`.                                             |
| ComponentesFrete            | Sim             | Componentes do frete, com descrição e valor, como o custo do frete e se inclui imposto.                          |

## Uso de Identificadores:

Você recorda que realizamos o [**Cadastro dos dados iniciais**](02-cadastro-dados-iniciais)?

Agora que você já possui estas informações cadastradas, basta passar os **IDs dessas entidades** na requisição. Por exemplo, em vez de enviar todos os dados do prestador, você pode simplesmente incluir o Identificador do prestador já cadastrado.

:::tip[DICA]
Para capturar os identificadores, você pode utilizar os métodos `GET` dos endpoints dos dados iniciais. Acesse a nossa [**Referência**](#) para saber mais.
:::

**Exemplo de requisição**

- Método: `POST`
- URL: `[URL_BASE]/api/v1/Viagem`

**Cabeçalhos**
```json
Content-Type: application/json
Authorization: Bearer {accessToken}
```

**Corpo**
```json
{
  "Identificador": "viagem123",
  "FormaPagamentoFrete": 1,
  "PorcentagemAntecipacapFrete": 0,
  "InfoComplementares": "Viagem de teste com IDs das entidades",
  "Pedagio": {
    "CalcularPedagio": true,
    "PagarPedagio": true
  },
  "Filial": {
    "Identificador": "filial123"
  },
  "Prestador": {
    "Identificador": "prestador123"
  },
  "VeiculoTracao": {
    "Identificador": "veiculo123"
  },
  "VeiculosReboque": [
    {
      "Identificador": "reboque123"
    }
  ],
  "Roteirizacao": {
    "LocalOrigem": "São Paulo",
    "DefinicaoRota": 0,
    "CalcularRetorno": true,
    "Paradas": [
      {
        "Sequencia": 0,
        "Tipo": 1,
        "Local": "Campinas"
      }
    ]
  },
  "DocumentosViagem": [
    {
      "TipoDocumento": 1,
      "ChaveNumero": "123456",
      "Tomador": {
        "Identificador": "tomador123"
      },
      "LocalRetirada": "São Paulo",
      "LocalEntrega": "Campinas",
      "PesoLiquido": 10000,
      "PesoBruto": 12000,
      "Volume": 5,
      "PesoCubado": 15000,
      "ValorMercadoria": 50000,
      "ValorSeguro": 2000,
      "NumeroPedido": 1234,
      "DataHoraRetirada": "2024-11-29T13:42:12.865Z",
      "DataHoraEntrega": "2024-11-29T13:42:12.865Z"
    }
  ],
  "Locais": [
    {
      "Identificador": "local123",
      "CPFCNPJ": "12345678000199",
      "Nome": "Centro de Distribuição",
      "Logradouro": "Rua do Logística",
      "Numero": "500",
      "Bairro": "Centro",
      "CEP": 12345678,
      "Municipio": "São Paulo",
      "UF": "SP",
      "Ibge": 3550308,
      "Latitude": -23.5505,
      "Longitude": -46.6333
    }
  ],
  "Condutores": [
    {
      "Identificador": "condutor123"
    }
  ],
  "ComponentesFrete": [
    {
      "Descricao": "Frete Básico",
      "Valor": 1000,
      "ComImposto": true
    }
  ]
}
```
---

## **Próximos passos**

Acompanhar as [**Notificações da Viagem**](./notificacao-viagem)

---