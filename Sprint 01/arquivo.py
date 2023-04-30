def selecionar_op():
    print("1 - Cadastrar loja")
    print("2 - Cadastrar produto")
    print("3 - Mostrar lojas cadastradas")
    print("4 - Mostrar produtos cadastrados")
    print("0 - Sair")
    print('')

    op = int(input('Digite a sua opção: '))
    return op


def cadastro_loja():
    nome_loja = input("Digite o nome da loja: ")
    id_loja = input("Digite o ID da sua loja: ")
    lojas = {
        "nome_loja": nome_loja,
        "id_loja": id_loja,
    }
    return lojas


def verificar_lojas(lojas):
    id_loja = input("Digite o ID: ")
    for loja in lojas:
        if loja["id_loja"] == id_loja:
            return loja


def colocar_produtos(lojas):
    loja = verificar_lojas(lojas)
    if not loja:
        return
    valor_produto = float(input("Digite o valor do produto: "))
    descricao = input("Digite a descrição: ")
    nome = input("Digite o nome do produto: ")
    id_loja = int(input("Digite o ID do produto: "))

    loja["valor_produto"] = valor_produto
    loja["descricao"] = descricao
    loja["nome"] = nome
    loja["id_produto"] = id_loja


def mostrar_lojas(lojas):
    for loja in lojas:
        print(loja['nome_loja'], loja['id_loja'])


lojas = []

while True:
    op = selecionar_op()
    if op == 0:
        break

    if op == 1:
        loja = cadastro_loja()
        lojas.append(loja)
    elif op == 2:
        colocar_produtos(lojas)
    elif op == 3:
        loja = verificar_lojas(lojas)
        if loja:
            print(loja)
        else:
            print("Não foi encontrado a loja")
        confirmacao = input("Deseja cadastrar uma nova (s/n)? ")
        if confirmacao == "s":
            loja = cadastro_loja()
            lojas.append(loja)
    elif op == 4:
        mostrar_lojas(lojas)


lista =[]
dic ={lista}
