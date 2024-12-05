---
sidebar_position: 1
sidebar_label: "Introdução"
id: "introducao"
---

# Introdução

O **NDD Elog** é uma plataforma completa que transforma a gestão de transportes, voltada para embarcadores que desejam otimizar seus processos e operações logísticas. Ela se diferencia por:

- **Centralização:** Todas as etapas do transporte são gerenciadas em um único ambiente.
- **Flexibilidade:** Integra-se facilmente com sistemas ERP, proporcionando uma experiência integrada e eficiente.
- **Conformidade:** Garante que todas as operações estejam alinhadas com as regulamentações vigentes.

## Como funciona o NDD Elog?

A plataforma atua como um elo entre todas as partes envolvidas na cadeia logística, oferecendo:

1. **Planejamento de viagens:** Auxilia na organização de rotas, cargas e recursos necessários.
2. **Validação de dados:** Verifica informações fiscais, de carga e financeiras, garantindo integridade e conformidade.
3. **Gestão de pagamentos:** Centraliza o monitoramento e execução de pagamentos relacionados ao transporte.
4. **Notificações em tempo real:** Mantém os usuários informados sobre cada etapa do processo de transporte.

## Visão geral da API do NDD Elog

A API segue a arquitetura REST, utilizando _endpoints_ baseados em recursos para realizar operações CRUD. Todos os dados são transferidos no formato JSON para facilidade de uso.

### Chamadas de API

A API do NDD Elog é uma API restrita com diferentes _endpoints_ que retornam metadados JSON.

### Endereços da API

- **Homologação:** `https://api.nddelog.com/v1`
- **Produção:** `https://api.nddelog.com/v1`

:::warning[Atenção]
Antes de iniciar a integração com a API em produção, é **altamente recomendável** que você utilize o **ambiente de homologação** para realizar seus testes. O ambiente de homologação é uma versão segura e controlada da API, onde você pode validar todas as funcionalidades e garantir que os dados estão sendo enviados corretamente sem impactar as operações reais.
:::


### Autorização

Todas as solicitações à API do NDD Elog exigem autorização.

:::tip[Dica]
Acesse o tópico de [**Autorização e autenticação**](./primeiros-passos/autorizacao-autenticacao).
:::

### Solicitações

Os recursos de dados são acessados por meio de solicitações HTTP padrão no formato UTF-8 para um ponto de extremidade da API. A API da Web usa os seguintes verbos HTTP:

| Método | Ação                                       |
| ------ | ------------------------------------------ |
| PUT    | Altera e/ou substitui recursos ou coleções |
| POST   | Cria recursos                              |
| DELETE | Exclui recursos                            |
| GET    | Recupera recursos                          |

### Respostas

A API normalmente retorna JSON no corpo da resposta. Alguns endpoints não retornam JSON, mas o código de status HTTP.

#### Códigos de status de resposta

A API usa os seguintes códigos de status de resposta, conforme definido na [RFC 2616](https://www.ietf.org/rfc/rfc2616.txt) e na [RFC 6585](https://www.ietf.org/rfc/rfc6585.txt):
| Código | Status                | Descrição                                                                                                                                                                                                                        |
| ------ | --------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 200    | OK                    | A requisição foi bem-sucedida. O cliente pode ler o resultado da requisição no corpo e nos cabeçalhos da resposta.                                                                                                               |
| 201    | Created               | A requisição foi concluída e resultou na criação de um novo recurso.                                                                                                                                                             |
| 202    | Accepted              | A requisição foi aceita para processamento, mas o processamento ainda não foi concluído.                                                                                                                                         |
| 204    | No content            | A requisição foi bem-sucedida, mas não retorna nenhum conteúdo no corpo da mensagem.                                                                                                                                             |
| 304    | Not modified          | Não modificado. Consulte requisições condicionais.                                                                                                                                                                               |
| 400    | Bad request           | A requisição não pôde ser entendida pelo servidor devido à sintaxe incorreta. O corpo da mensagem conterá mais informações; consulte o esquema de resposta.                                                                      |
| 401    | Unauthorized          | A requisição requer autenticação ou, se incluiu credenciais, a autorização foi recusada para essas credenciais.                                                                                                                  |
| 403    | Forbidden             | O servidor entendeu a requisição, mas está se recusando a atendê-la.                                                                                                                                                             |
| 404    | Not found             | O recurso solicitado não foi encontrado. Esse erro pode ser devido a uma condição temporária ou permanente.                                                                                                                      |
| 429    | Too many requests     | Foi aplicado um limite de requisições.                                                                                                                                                                                           |
| 500    | Internal server error | Você nunca deveria receber este erro porque nossos codificadores experientes capturam todos... mas, se for azarado o suficiente para receber um, por favor, informe-nos através de um comentário na parte inferior desta página. |
| 502    | Bad gateway           | O servidor estava atuando como um gateway ou proxy e recebeu uma resposta inválida do servidor upstream.                                                                                                                         |
| 503    | Service unavailable   | O servidor está temporariamente indisponível para lidar com a requisição devido a uma condição temporária, que será resolvida após algum tempo. Você pode tentar enviar a requisição novamente.                                  |

---

## Próximos passos
[**Obter o seu token de autorização**](./primeiros-passos/autorizacao-autenticacao)

---