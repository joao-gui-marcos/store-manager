# Welcome to the Store Manager Project repository!

### README Translations:

-   [English](/README.en.md)
-   [Portuguese](/README.md)

* * *

## 👨‍💻 What was developed:

-   An API was developed using the MSC (model-service-controller) architecture.

-   The built API is a sales management system in dropshipping format in which it will be possible to create, visualize, delete and update products and sales. The MySQL database was used for data management, along with Docker. Furthermore, the API is RESTful.

## Skills used:

-   Node.js
-   Express
-   MySQL
-   Docker
-   Mocha
-   Otherwise
-   Chai

# Mandatory Requirements

## 01 - Create endpoints to list products

-   The endpoint for listing products must be accessible via the path (`/products`) e (`/products/:id`);
-   through the way`/products`, all products must be returned;
-   through the way`/products/:id`, only the product with the`id`present in the URL must be returned;
-   The result of the listing must be**tidy**growing across the field`id`;

<details close>
  <summary>Os seguintes pontos serão avaliados</summary>

-   **[It will be validated that it is possible to list all products]**

    -   When successfully listing users the result returned should be as shown below, with an http status`200`:

    ```json
    [
      {
        "id": 1,
        "name": "Martelo de Thor"
      },
      {
        "id": 2,
        "name": "Traje de encolhimento"
      }
      /* ... */
    ]
    ```

-   **[It will be validated that it is not possible to list a product that does not exist]**

    -   If the product does not exist, the returned result should be as shown below, with an http status`404`:

    ```json
    { "message": "Product not found" }
    ```

-   **[It will be validated that it is possible to successfully list a specific product]**

    -   When listing a product successfully the result returned should be as shown below, with an http status`200`:

    ```json
    {
      "id": 1,
      "name": "Martelo de Thor"
    }
    ```

      <br>
    </details>

* * *

## 02 - Develop tests that cover at least 5% of the layers of your application

-   Your test files should live in the directory`tests/unit`, as described in[To write your own test files](#para-escrever-seus-próprios-arquivos-de-teste);
-   Your tests from`model`must mock the database;
-   Optionally you can stop the`MYSQL`on your machine. To run your tests use`npm run test:mocha`;
-   Before running Trybe's tests, your tests must be error-free.

<details close>
  <summary>Os seguintes pontos serão avaliados</summary>

-   **[It will be validated that the full coverage of the lines and functions of the files of EACH layer`models`,services`e`controllers`is greater than or equal to 5` That is%. each layer must have at least 5, test coverage,]**
-   **[Será validado que existe um mínimo de 2 funções em CADA camada `models`,services`e`controllers`]**

    <br>

</details>

* * *

## 03 - Create endpoint to register products

-   The endpoint must be accessible via the path (`/products`);
-   The shipped products must be saved in the table`products`from the database;
-   The body of the request must follow the format below:

```json
{
  "name": "ProdutoX"
}
```

<details close>
  <summary>Os seguintes pontos serão avaliados</summary>

-   **[It will be validated that it is possible to successfully register a product]**

    -   If the product is successfully created the result returned should be as shown below, with an http status`201`:

    ```json
    {
      "id": 4,
      "name": "ProdutoX"
    }
    ```

      <br>
    </details>

* * *

## 04 - Create validations for products

-   The products endpoint must be reachable through the path (`/products`);
-   Remember, the database must not be accessed in the initial validations of the request body;

<details close>
  <summary>Os seguintes pontos serão avaliados</summary>

-   **[It will be validated that it is not possible to perform operations on a product without the field`name`]**

    -   If the request does not have the field`name`, the result returned should be as shown below, with an http status`400`:

    ```json
    { "message": "\"name\" is required" }
    ```

-   **[It will be validated that it is not possible to perform operations on a product with the field`name`less than 5 characters]**

    -   If the request does not have`name`with at least 5 characters, the result returned should be as shown below, with an http status`422`

    ```json
    { "message": "\"name\" length must be at least 5 characters long" }
    ```

      <br>
    </details>

* * *

## 05 - Develop tests that cover at least 10% of the layers of your application

-   Your test files should live in the directory`tests/unit`, as described in[To write your own test files](#para-escrever-seus-próprios-arquivos-de-teste);
-   Your tests from`model`must mock the database;
-   Optionally you can stop the`MYSQL`on your machine. To run your tests use`npm run test:mocha`;
-   Before running Trybe's tests, your tests must be error-free.

<details close>
  <summary>Os seguintes pontos serão avaliados</summary>

-   **[It will be validated that the full coverage of the lines and functions of the files of EACH layer`models`,services`e`controllers`is greater than or equal to 10` That is%. each layer must have at least 10, test coverage,]**
-   **[It will be validated that there are a minimum of 3 functions in EACH layer`models`,services`e`controllers`]**<br>

</details>

* * *

## 06 - Create endpoint to validate and register sales

-   The sales endpoint must be reachable through the path (`/sales`);
-   Submitted sales must be saved in the tables`sales`e`sales_products`from the database;
-   It must be possible to register the sale of several products through the same request;
-   The body of the request must follow the format below:

```json
[
  {
    "productId": 1,
    "quantity": 1
  },
  {
    "productId": 2,
    "quantity": 5
  }
]
```

<details close>
  <summary>Os seguintes pontos serão avaliados</summary>

-   **[It will be validated that it is not possible to carry out operations on a sale without the field`productId`]**

    -   If any of the requisition items do not have the field`productId`, the result returned should be as shown below, with an http status`400`:

    ```json
    { "message": "\"productId\" is required" }
    ```

-   **[It will be validated that it is not possible to carry out operations on a sale without the field`quantity`]**

    -   If any of the requisition items do not have the field`quantity`, the result returned should be as shown below, with an http status`400`:

    ```json
    { "message": "\"quantity\" is required" }
    ```

-   **[It will be validated that it is not possible to carry out operations on a sale with the field`quantity`Less than or equal to 0 (Zero)]**

    -   If the requisition has any item in which the field`quantity`is less than or equal to zero, the result returned should be as shown below, with an http status`422`

    ```json
    { "message": "\"quantity\" must be greater than or equal to 1" }
    ```

-   **[It will be validated that it is not possible to carry out operations on a sale with the field`productId`non,existent in a requisition with a single item]**

    -   if the field`productId`of the request item does not exist in the database, the returned result should be as shown below, with an http status`404`

    ```json
    { "message": "Product not found" }
    ```

-   **[It will be validated that it is not possible to carry out operations on a sale with the field`productId`non,existent in a request with several items]**

    -   If the requisition has any item whose field`productId`does not exist in the database, the returned result should be as shown below, with an http status`404`

    ```json
    { "message": "Product not found" }
    ```

-   **[It will be validated that it is possible to successfully register a sale]**

    -   If the sale is successfully created the returned result should be as shown below, with an http status`201`:

    ```json
    {
      "id": 3,
      "itemsSold": [
        {
          "productId": 1,
          "quantity": 1
        },
        {
          "productId": 2,
          "quantity": 5
        }
      ]
    }
    ```

      <br>
    </details>

> 💬 If in doubt, remember to consult the section[Tips](#dicas)e[ER Diagram, Entities and Scripts](#diagrama-scripts)

* * *

## 07 - Develop tests that cover at least 15% of the layers of your application

-   Your test files should live in the directory`tests/unit`, as described in[To write your own test files](#para-escrever-seus-próprios-arquivos-de-teste);
-   Your tests from`model`must mock the database;
-   Optionally you can stop the`MYSQL`on your machine. To run your tests use`npm run test:mocha`;
-   Before running Trybe's tests, your tests must be error-free.

<details close>
  <summary>Os seguintes pontos serão avaliados</summary>

-   **[It will be validated that the full coverage of the lines and functions of the files of EACH layer`models`,services`e`controllers`is greater than or equal to 15` That is%. each layer must have at least 15, test coverage,]**
-   **[It will be validated that there are a minimum of 4 functions in EACH layer`models`,services`e`controllers`]**

    <br>

</details>

* * *

## 08 - Create endpoints to list sales

-   The endpoint for listing sales must be accessible via the path (`/sales`) e (`/sales/:id`);
-   through the way`/sales`, all sales must be returned;
-   through the way`/sales/:id`, only sale with the`id`present in the URL must be returned;
-   the result must be**tidy**growing across the field`saleId`, in case of a tie,**organize**also growing across the field`productId`;

<details close>
  <summary>Os seguintes pontos serão avaliados</summary>

-   **[It will be validated that it is possible to list all sales]**

    -   When listing sales successfully, the returned result should be as shown below, with an http status`200`:

    ```json
    [
      {
        "saleId": 1,
        "date": "2021-09-09T04:54:29.000Z",
        "productId": 1,
        "quantity": 2
      },
      {
        "saleId": 1,
        "date": "2021-09-09T04:54:54.000Z",
        "productId": 2,
        "quantity": 2
      }

      /* ... */
    ]
    ```

-   **[It will be validated that it is not possible to list a sale that does not exist]**

    -   If the sale is non-existent, the returned result should be as shown below, with an http status`404`:

    ```json
    { "message": "Sale not found" }
    ```

-   **[It will be validated that it is possible to successfully list a specific sale]**

    -   When successfully listing a sale the result returned should be as shown below, with an http status`200`:

    ```json
    [
      {
        "date": "2021-09-09T04:54:29.000Z",
        "productId": 1,
        "quantity": 2
      },
      {
        "date": "2021-09-09T04:54:54.000Z",
        "productId": 2,
        "quantity": 2
      }

      /* ... */
    ]
    ```

      <br>
    </details>

* * *

## 09 - Develop tests that cover at least 20% of the layers of your application

-   Your test files should live in the directory`tests/unit`, as described in[To write your own test files](#para-escrever-seus-próprios-arquivos-de-teste);
-   Your tests from`model`must mock the database;
-   Optionally you can stop the`MYSQL`on your machine. To run your tests use`npm run test:mocha`;
-   Before running Trybe's tests, your tests must be error-free.

<details close>
  <summary>Os seguintes pontos serão avaliados</summary>

-   **[It will be validated that the full coverage of the lines and functions of the files of EACH layer`models`,services`e`controllers`is greater than or equal to 20` That is%. each layer must have at least 20, test coverage,]**
-   **[It will be validated that there are a minimum of 6 functions in EACH layer`models`,services`e`controllers`]**<br>

</details>

* * *

## 10 - Create endpoint to update a product

-   The endpoint must be accessible via the path (`/products/:id`);
-   Only the product with the`id`present in the URL must be updated;
-   The body of the request must be validated the same as in the registration;
-   The body of the request must follow the format below:

```json
{
  "name": "Martelo do Batman"
}
```

<details close>
  <summary>Os seguintes pontos serão avaliados</summary>
  
- **[Será validado que não é possível alterar um produto que não existe]**
  - Se o produto for inexistente o resultado retornado deverá ser conforme exibido abaixo, com um status http `404`:

    ```json
      { "message": "Product not found" }
    ```

-   **[It will be validated that it is possible to change a product successfully]**

    -   If the product is successfully changed the result returned should be as shown below, with an http status`200`:

    ```json
    {
      "id": 1,
      "name": "Martelo do Batman"
    }
    ```

      <br>
    </details>

* * *

## 11 - Develop tests that cover at least 25% of the layers of your application

-   Your test files should live in the directory`tests/unit`, as described in[To write your own test files](#para-escrever-seus-próprios-arquivos-de-teste);
-   Your tests from`model`must mock the database;
-   Optionally you can stop the`MYSQL`on your machine. To run your tests use`npm run test:mocha`;
-   Before running Trybe's tests, your tests must be error-free.

<details close>
  <summary>Os seguintes pontos serão avaliados</summary>

-   **[It will be validated that the full coverage of the lines and functions of the files of EACH layer`models`,services`e`controllers`is greater than or equal to 25` That is%. each layer must have at least 25, test coverage,]**
-   **[It will be validated that there are a minimum of 7 functions in EACH layer`models`,services`e`controllers`]**<br>

</details>

* * *

## 12 - Create endpoint to delete a product

-   The endpoint must be accessible via the path (`/products/:id`);
-   Only the product with the`id`present in the URL must be deleted;

<details close>
  <summary>Os seguintes pontos serão avaliados</summary>
  
- **[Será validado que não é possível deletar um produto que não existe]**
  - Se o produto for inexistente o resultado retornado deverá ser conforme exibido abaixo, com um status http `404`:

    ```json
      { "message": "Product not found" }
    ```

-   **[It will be validated that it is possible to delete a product successfully]**

    -   If the product is successfully deleted, no response should be returned, just an http status`204`;

          <br>
        </details>

> 💬 If in doubt, remember to consult the section[ER Diagram, Entities and Scripts](#diagrama-scripts)

* * *

# Bonus Requirements

## 13 - Develop tests that cover at least 30% of the layers of your application

-   Your test files should live in the directory`tests/unit`, as described in[To write your own test files](#para-escrever-seus-próprios-arquivos-de-teste);
-   Your tests from`model`must mock the database;
-   Optionally you can stop the`MYSQL`on your machine. To run your tests use`npm run test:mocha`;
-   Before running Trybe's tests, your tests must be error-free.

<details close>
  <summary>Os seguintes pontos serão avaliados</summary>

-   **[It will be validated that the full coverage of the lines and functions of the files of EACH layer`models`,services`e`controllers`is greater than or equal to 30` That is%. each layer must have at least 30, test coverage,]**
-   **[It will be validated that there are a minimum of 8 functions in EACH layer`models`,services`e`controllers`]**<br>

</details>

* * *

## 14 - Create endpoint to delete a sale

-   The endpoint must be accessible via the path (`/sales/:id`);
-   Only sale with`id`present in the URL must be deleted;

<details close>
  <summary>Os seguintes pontos serão avaliados</summary>
  
- **[Será validado que não é possível deletar uma venda que não existe]**
  - Se a venda for inexistente o resultado retornado deverá ser conforme exibido abaixo, com um status http `404`:

    ```json
      { "message": "Sale not found" }
    ```

-   **[It will be validated that it is possible to delete a sale successfully]**

    -   If the sale is successfully deleted, no response should be returned, just an http status`204`;

          <br>
        </details>

> 💬 If in doubt, remember to consult the section[ER Diagram, Entities and Scripts](#diagrama-scripts)

* * *

## 15 - Develop tests that cover at least 35% of the layers of your application

-   Your test files should live in the directory`tests/unit`, as described in[To write your own test files](#para-escrever-seus-próprios-arquivos-de-teste);
-   Your tests from`model`must mock the database;
-   Optionally you can stop the`MYSQL`on your machine. To run your tests use`npm run test:mocha`;
-   Before running Trybe's tests, your tests must be error-free.

<details close>
  <summary>Os seguintes pontos serão avaliados</summary>

-   **[It will be validated that the full coverage of the lines and functions of the files of EACH layer`models`,services`e`controllers`is greater than or equal to 35` That is%. each layer must have at least 35, test coverage,]**
-   **[It will be validated that there are a minimum of 9 functions in EACH layer`models`,services`e`controllers`]**<br>

</details>

* * *

## 16 - Create endpoint to update a sale

-   The endpoint must be accessible via the path (`/sales/:id`);
-   Only sale with`id`present in the URL must be updated;
-   The body of the request must be validated the same as in the registration;
-   The body of the request must follow the format below:

```json
[
  {
    "productId": 1,
    "quantity": 10
  },
  {
    "productId": 2,
    "quantity": 50
  }
]
```

<details close>
  <summary>Os seguintes pontos serão avaliados</summary>
  
- **[Será validado que não é possível alterar uma venda que não existe]**
  - Se a venda for inexistente o resultado retornado deverá ser conforme exibido abaixo, com um status http `404`:

    ```json
      { "message": "Sale not found" }
    ```

-   **[It will be validated that it is possible to change a sale successfully]**

    -   If the sale is successfully changed the returned result should be as shown below, with an http status`200`:

    ```json
      "saleId": 1,
        "itemsUpdated": [
          {
            "productId": 1,
            "quantity":10
          },
          {
            "productId": 2,
            "quantity":50
          }
        ]
    ```

      <br>
    </details>

* * *

## 17 - Develop tests that cover at least 40% of the layers of your application

-   Your test files should live in the directory`tests/unit`, as described in[To write your own test files](#para-escrever-seus-próprios-arquivos-de-teste);
-   Your tests from`model`must mock the database;
-   Optionally you can stop the`MYSQL`on your machine. To run your tests use`npm run test:mocha`;
-   Before running Trybe's tests, your tests must be error-free.

<details close>
  <summary>Os seguintes pontos serão avaliados</summary>

-   **[It will be validated that the full coverage of the lines and functions of the files of EACH layer`models`,services`e`controllers`is greater than or equal to 40` That is%. each layer must have at least 40, test coverage,]**
-   **[It will be validated that there are a minimum of 10 functions in EACH layer`models`,services`e`controllers`]**<br>

</details>

* * *

## 18 - Crie endpoint products/search?q=searchTerm

-   The endpoint must be accessible via the URL`/products/search`;
-   The endpoint must be able to bring the products based on the`q`the database, if it exists;
-   Your application must be able to return an array of products that contain the term passed in the URL in their name;
-   Your application must be able to return an empty array if no name matches the query;
-   The query params of the request must follow the format below:

    ```js
      http://localhost:PORT/products/search?q=Martelo
    ```

<details>
  <summary><strong>Os seguintes pontos serão avaliados</strong></summary>

-   **[It will be validated that it is possible to search for a product by`name`]**

    -   If the fetch is successful, the returned result should be as shown below, with an http status`200`:

    ```json
    // GET /products/search?q=Martelo

    [
      {
        "id": 1,
        "name": "Martelo de Thor"
      }
    ]
    ```

-   **[It will be validated that it is possible to search for all products when passing the empty search]**- If the search is empty, the returned result should be as shown below, with an http status`200`:

    ````json
    // GET /products/search?q=

          [
            {
              "id": 1,
              "name": "Martelo de Thor",
            },
            {
              "id": 2,
              "name": "Traje de encolhimento",
            }
            /* ... */
          ]
        ```
    ````


```

</details>

---

## 19 - Desenvolva testes que cubram no mínimo 50% das camadas da sua aplicação

- Seus arquivos de teste devem ficar no diretório `tests/unit`, como é descrito em [Para escrever seus próprios arquivos de teste](#para-escrever-seus-próprios-arquivos-de-teste);
- Seus testes da `model` devem fazer mock do banco de dados obrigatoriamente;
- Opcionalmente você pode parar o serviço do `MYSQL` em sua máquina. Para rodar seus teste utilize `npm run test:mocha`;
- Antes de executar os testes da Trybe, seus testes não devem conter erros.

<details close>
<summary>Os seguintes pontos serão avaliados</summary>

- **[Será validado que a cobertura total das linhas e funções dos arquivos de CADA camada `models`, `services` e `controllers` é maior ou igual a 50%. Ou seja, cada uma das camadas tem de ter, ao menos, 50% de cobertura de testes.]**
- **[Será validado que existe um mínimo de 11 funções em CADA camada `models`, `services` e `controllers`.]**
<br>

</details>

---

## 20 - Desenvolva testes que cubram no mínimo 60% das camadas da sua aplicação

- Seus arquivos de teste devem ficar no diretório `tests/unit`, como é descrito em [Para escrever seus próprios arquivos de teste](#para-escrever-seus-próprios-arquivos-de-teste);
- Seus testes da `model` devem fazer mock do banco de dados obrigatoriamente;
- Opcionalmente você pode parar o serviço do `MYSQL` em sua máquina. Para rodar seus teste utilize `npm run test:mocha`;
- Antes de executar os testes da Trybe, seus testes não devem conter erros.

<details close>
<summary>Os seguintes pontos serão avaliados</summary>

- **[Será validado que a cobertura total das linhas e funções dos arquivos de CADA camada `models`, `services` e `controllers` é maior ou igual a 60%. Ou seja, cada uma das camadas tem de ter, ao menos, 60% de cobertura de testes.]**
- **[Será validado que existe um mínimo de 11 funções em CADA camada `models`, `services` e `controllers`.]**
<br>

</details>

```
