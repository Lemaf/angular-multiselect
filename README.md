# angular-multiselect

Multi-Select é uma diretiva para AngularJS, criada para facilitar a utilização de selects para a criação de um multi-select.

Demo: http://embed.plnkr.co/zA1BlwAz4rupdyEHcGCd/preview

# instalação

Baixe os arquivos da diretiva, e adicione-os como dependência do seu projeto.

No seu html adicione a seguinte tag:
```html
  <multi-select selected-items="selected_items" options="options" field-name="Multi-Select" all-if-none="true"></multi-select>
```

# opções de configuração

Atualmente as opções de configuração são as seguintes:

* selected-items - variável que receberá os itens que foram selecionados.
* options - as opções que serão adicionadas ao select.
* field-name - nome a ser adicionado antes do select (um label informando o que é o select).
* all-if-none - considera como todos estejam selecionados caso nenhum for selecionado.
  
# utilização

A variável de opções é utilizada no seguinte formato:

```js
			$scope.options = [

				{id: 0, nome: "Option A"},
				{id: 1, nome: "Option B"},
				{id: 2, nome: "Option C"}

			];
```

# para o futuro

Itens a serem a adicionados em versões futuras:

* bower - uma configuração bower para que o projeto possa ser instalado utilizando bower
* grunt ou gulp (a decidir) - para uma melhor distribuição dos arquivos
