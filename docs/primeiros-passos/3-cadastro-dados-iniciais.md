---
id: "cadastro-dados-iniciais"
---

# Dados iniciais
Antes de iniciar a integração, é importante entender e organizar as informações fundamentais para o funcionamento das operações, como **filiais**, **prestadores de transporte**, **veículos** e **motoristas**. Eles garantem que a integração seja realizada de forma eficiente e sem erros.

## **Cadastro dos dados iniciais**

:::info[informação]
Para todas as requisições a seguir, você deve enviar no cabeçalho, o `token` obtido no processo de [**autorização**](./autorizacao-autenticacao) e o `Content-Type` como `application/json`.

:::

### Filial

Representa a unidade de operação do cliente embarcador (empresa que contrata o transporte).

**Exemplo de requisição**

- Método: `POST`
- URL: `[URL_BASE]/api/v1/Filial`

**Cabeçalhos**
```json
Content-Type: application/json
Authorization: Bearer {accessToken}
```

**Corpo**
```json
{
  "Identificador": "filial001",
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
```

| Campo             | Obrigatório | Descrição                                                                                                                                                                                                                                                         | Usabilidade                                                                                                     |
| ----------------- | ----------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------- |
| Identificador     | Não         | O intuito deste campo é facilitar a criação do registro de Viagem. Após a filial cadastrada, o valor atribuído neste campo será a chave para consulta dos dados previamente cadastrados, eliminando a necessidade de repetir informações na integração de Viagem. | Caso o identificador não seja informado, será gerado automaticamente e poderá ser consultado para reutilização. |
| CNPJ              | Sim         | Número do CNPJ da filial (14 dígitos, sem máscara).                                                                                                                                                                                                               | -                                                                                                               |
| NomeFantasia      | Não         | Nome comercial utilizado pela filial.                                                                                                                                                                                                                             | Emissão do MDF-e.                                                                                               |
| RazaoSocial       | Sim         | Nome legal da filial registrado no CNPJ.                                                                                                                                                                                                                          | -                                                                                                               |
| Logradouro        | Sim         | Rua ou avenida do endereço da filial.                                                                                                                                                                                                                             | -                                                                                                               |
| Numero            | Sim         | Número do imóvel.                                                                                                                                                                                                                                                 | -                                                                                                               |
| Bairro            | Sim         | Bairro onde a filial está localizada.                                                                                                                                                                                                                             | -                                                                                                               |
| IBGE              | Sim         | Código do município segundo o IBGE.                                                                                                                                                                                                                               | -                                                                                                               |
| UF                | Sim         | Sigla do estado onde a filial está localizada (e.g., SP, RJ).                                                                                                                                                                                                     | -                                                                                                               |
| CEP               | Sim         | Código postal do endereço da filial.                                                                                                                                                                                                                              | -                                                                                                               |
| IE                | Não         | Número de Inscrição Estadual (obrigatório para operações fiscais em alguns estados).                                                                                                                                                                              | Emissão do MDF-e e auditoria de frete.                                                                          |
| SerieMdfe         | Não         | Série utilizada para emissão de MDF-e (Manifesto Eletrônico de Documentos Fiscais).                                                                                                                                                                               | Emissão do MDF-e.                                                                                               |
| NumeroInicialMdfe | Não         | Número inicial da sequência de MDF-e para a filial.                                                                                                                                                                                                               | Emissão do MDF-e.                                                                                               |

### Prestador de transporte

Representa a entidade responsável pela execução do transporte. Pode ser uma empresa ETC (CNPJ) ou um transportador autônomo TAC (CPF).

**Exemplo de requisição**

- Método: `POST`
- URL: `[URL_BASE]/api/v1/Prestador`

**Cabeçalhos**
```json
Content-Type: application/json
Authorization: Bearer {accessToken}
```

**Corpo**
```json
{
  "Identificador": "prestador123",
  "CNPJCPF": "12345678000199",
  "Nome": "Transportadora XYZ",
  "RNTRC": 1234567890,
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
```

| **Campo**               | **Obrigatório** | **Descrição**                                                                                                                                                                                                                                                     |
| ----------------------- | --------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Identificador           | Sim             | O intuito deste campo é facilitar a criação do registro de Viagem. Após a filial cadastrada, o valor atribuído neste campo será a chave para consulta dos dados previamente cadastrados, eliminando a necessidade de repetir informações na integração de Viagem. |
| CNPJCPF                 | Sim             | Número do CNPJ ou CPF do prestador de transporte (14 dígitos para CNPJ ou 11 dígitos para CPF).                                                                                                                                                                   |
| Nome                    | Sim             | Nome do prestador de transporte.                                                                                                                                                                                                                                  |
| RNTRC                   | Não             | Registro Nacional de Transportadores Rodoviários de Carga (RNTRC), necessário para transportes.                                                                                                                                                                   |
| IE                      | Não             | Número de Inscrição Estadual (obrigatório para operações fiscais em alguns estados).                                                                                                                                                                              |
| Logradouro              | Não             | Rua ou avenida do endereço do prestador de transporte.                                                                                                                                                                                                            |
| Numero                  | Não             | Número do imóvel do prestador de transporte.                                                                                                                                                                                                                      |
| UF                      | Sim             | Sigla do estado onde o prestador de transporte está localizado (e.g., SP, RJ).                                                                                                                                                                                    |
| CEP                     | Não             | Código postal do endereço do prestador de transporte.                                                                                                                                                                                                             |
| IBGE                    | Não             | Código do município segundo o IBGE.                                                                                                                                                                                                                               |
| FormaRecebimentoFrete   | Sim             | Forma de recebimento do frete (1 para pagamento por conta, 2 para outro tipo de pagamento).                                                                                                                                                                       |
| FormaRecebimentoPedagio | Sim             | Forma de recebimento do pedágio (1 para pagamento por conta, 2 para outro tipo de pagamento).                                                                                                                                                                     |
| **DadosBancarios**      | Sim             | Dados bancários do prestador de transporte.                                                                                                                                                                                                                       |
| ChavePix                | Não             | Chave Pix para pagamentos.                                                                                                                                                                                                                                        |
| Agencia                 | Não             | Número da agência bancária do prestador de transporte.                                                                                                                                                                                                            |
| Conta                   | Não             | Número da conta bancária do prestador de transporte.                                                                                                                                                                                                              |
| DigVerificador          | Não             | Dígito verificador da conta bancária.                                                                                                                                                                                                                             |
| CodigoBanco             | Não             | Código do banco onde o prestador tem conta.                                                                                                                                                                                                                       |
| CPFCNPJBeneficiario     | Não             | CPF ou CNPJ do beneficiário do pagamento (quando aplicável).                                                                                                                                                                                                      |

### Veículo

Veículo utilizado para a movimentação da carga.

**Exemplo de requisição**

- Método: `POST`
- URL: `[URL_BASE]/api/v1/Veiculo`

**Cabeçalhos**
```json
Content-Type: application/json
Authorization: Bearer {accessToken}
```

**Corpo**
```json
{
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
```

| **Campo**               | **Obrigatório** | **Descrição**                                                                                                                                                                                                                                                     |
| ----------------------- | --------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Identificador           | Sim             | O intuito deste campo é facilitar a criação do registro de Viagem. Após a filial cadastrada, o valor atribuído neste campo será a chave para consulta dos dados previamente cadastrados, eliminando a necessidade de repetir informações na integração de Viagem. |
| Placa                   | Sim             | Placa do veículo.                                                                                                                                                                                                                                                 |
| TipoVeiculo             | Sim             | Tipo do veículo: 1 para caminhão, 2 para carreta, 3 para outro.                                                                                                                                                                                                   |
| Rntrc                   | Não             | Registro Nacional de Transportadores Rodoviários de Carga (RNTRC) do veículo.                                                                                                                                                                                     |
| Modelo                  | Sim             | Modelo do veículo.                                                                                                                                                                                                                                                |
| Tara                    | Não             | Peso do veículo vazio (sem carga).                                                                                                                                                                                                                                |
| Capacidade              | Não             | Capacidade máxima de carga do veículo.                                                                                                                                                                                                                            |
| TipoRodado              | Sim             | Tipo de rodado: 1 para rodado simples, 2 para rodado duplo.                                                                                                                                                                                                       |
| TipoCarroceria          | Sim             | Tipo da carroceria do veículo: 0 para baú, 1 para prancha, etc.                                                                                                                                                                                                   |
| Categoria               | Não             | Categoria do veículo: 0 para leve, 1 para pesado, etc.                                                                                                                                                                                                            |
| OperadoraTagPedagio     | Sim             | Operadora da tag de pedágio. 1 para Sem Parar, 2 para ConectCar, etc.                                                                                                                                                                                             |
| NumeroTagPedagio        | Sim             | Número da tag de pedágio vinculada ao veículo.                                                                                                                                                                                                                    |
| QuantidadeEixos         | Sim             | Número de eixos do veículo.                                                                                                                                                                                                                                       |
| **ProprietarioVeiculo** | Sim             | Dados do proprietário do veículo.                                                                                                                                                                                                                                 |
| Identificador           | Sim             | Identificador único do proprietário.                                                                                                                                                                                                                              |
| **Dados**               | Sim             | Informações detalhadas sobre o proprietário.                                                                                                                                                                                                                      |
| CNPJCPF                 | Sim             | CNPJ ou CPF do proprietário do veículo.                                                                                                                                                                                                                           |
| Nome                    | Sim             | Nome do proprietário do veículo.                                                                                                                                                                                                                                  |
| RNTRC                   | Não             | Registro Nacional de Transportadores Rodoviários de Carga do proprietário.                                                                                                                                                                                        |
| IE                      | Não             | Inscrição Estadual do proprietário (se aplicável).                                                                                                                                                                                                                |
| Logradouro              | Sim             | Rua ou avenida do endereço do proprietário.                                                                                                                                                                                                                       |
| Numero                  | Sim             | Número do imóvel do proprietário.                                                                                                                                                                                                                                 |
| UF                      | Sim             | Sigla do estado onde o proprietário está localizado.                                                                                                                                                                                                              |
| CEP                     | Sim             | Código postal do endereço do proprietário.                                                                                                                                                                                                                        |
| IBGE                    | Sim             | Código do município segundo o IBGE.                                                                                                                                                                                                                               |

### Proprietário do veículo (opcional)

Necessário em operações que exigem CIOT, vale pedágio obrigatório e/ou emissão de MDF-e.

**Exemplo de requisição**

- Método: `POST`
- URL: `[URL_BASE]/api/v1/Proprietario`

**Cabeçalhos**
```json
Content-Type: application/json
Authorization: Bearer {accessToken}
```

**Corpo**
```json
{
  "Identificador": "prestador123",
  "CNPJCPF": "12345678000199",
  "Nome": "Transportadora ABC LTDA",
  "RNTRC": 9876543210,
  "IE": 123456789,
  "Logradouro": "Av. das Nações",
  "Numero": "500",
  "UF": "SP",
  "CEP": 12345678,
  "IBGE": 3550308
}
```

| **Campo**     | **Obrigatório** | **Descrição**                                                                                                                                                                                                                                                     |
| ------------- | --------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Identificador | Sim             | O intuito deste campo é facilitar a criação do registro de Viagem. Após a filial cadastrada, o valor atribuído neste campo será a chave para consulta dos dados previamente cadastrados, eliminando a necessidade de repetir informações na integração de Viagem. |
| CNPJCPF       | Sim             | Número do CNPJ ou CPF do prestador de serviço (14 dígitos para CNPJ ou 11 dígitos para CPF).                                                                                                                                                                      |
| Nome          | Sim             | Nome do prestador de serviço.                                                                                                                                                                                                                                     |
| RNTRC         | Não             | Registro Nacional de Transportadores Rodoviários de Carga (RNTRC) do prestador de serviço.                                                                                                                                                                        |
| IE            | Não             | Número de Inscrição Estadual do prestador de serviço (obrigatório para operações fiscais em alguns estados).                                                                                                                                                      |
| Logradouro    | Sim             | Rua ou avenida do endereço do prestador de serviço.                                                                                                                                                                                                               |
| Numero        | Sim             | Número do imóvel do prestador de serviço.                                                                                                                                                                                                                         |
| UF            | Sim             | Sigla do estado onde o prestador de serviço está localizado (e.g., SP, RJ).                                                                                                                                                                                       |
| CEP           | Sim             | Código postal do endereço do prestador de serviço.                                                                                                                                                                                                                |
| IBGE          | Sim             | Código do município segundo o IBGE, identificando a cidade do prestador.                                                                                                                                                                                          |

### Motorista

Pessoa física responsável por operar o veículo durante o transporte.

**Exemplo de requisição**

- Método: `POST`
- URL: `[URL_BASE]/api/v1/Motorista`

**Cabeçalhos**
```json
Content-Type: application/json
Authorization: Bearer {accessToken}
```

**Corpo**
```json
{
  "Identificador": "motorista123",
  "Nome": "José da Silva",
  "CPF": "12345678901",
  "RNTRC": 1234567890
}
```

| **Campo**     | **Obrigatório** | **Descrição**                                                                                                                                                                                                                                                     |
| ------------- | --------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Identificador | Sim             | O intuito deste campo é facilitar a criação do registro de Viagem. Após a filial cadastrada, o valor atribuído neste campo será a chave para consulta dos dados previamente cadastrados, eliminando a necessidade de repetir informações na integração de Viagem. |
| Nome          | Sim             | Nome completo do motorista.                                                                                                                                                                                                                                       |
| CPF           | Sim             | Número do CPF do motorista (11 dígitos).                                                                                                                                                                                                                          |
| RNTRC         | Não             | Registro Nacional de Transportadores Rodoviários de Carga (RNTRC) do motorista.                                                                                                                                                                                   |

---

## **Próximos passos**

[**Criar a Viagem**](./criar-viagem)

---
