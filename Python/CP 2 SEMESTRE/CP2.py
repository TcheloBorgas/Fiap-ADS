# ━━━━━━━━━━━━━❮CSV❯━━━━━━━━━━━━━
def load_csv(filename):
    data = []
    with open(filename, 'r') as file:
        for line in file:
            # Remove as aspas e divide pela vírgula
            data.append([item.strip('"') for item in line.strip().split(',')])
    return data


# ━━━━━━━━━━━━━❮Função Avaliação❯━━━━━━━━━━━━━
def avaliacao_publico(data):
    rates_dc, rates_marvel, count_dc, count_marvel = 0, 0, 0, 0
    for row in data[1:]:
        if row[2] == "DC":
            rates_dc += float(row[3])
            count_dc += 1
        elif row[2] == "Marvel":
            rates_marvel += float(row[3])
            count_marvel += 1

    media_dc = rates_dc / count_dc if count_dc != 0 else 0
    media_marvel = rates_marvel / count_marvel if count_marvel != 0 else 0
    return media_dc, media_marvel, "DC" if media_dc > media_marvel else "Marvel"


# ━━━━━━━━━━━━━❮Função Orçamento❯━━━━━━━━━━━━━
def orcamento(data):
    budget_dc, budget_marvel = 0, 0
    for row in data[1:]:
        if row[2] == "DC":
            budget_dc += int(row[7])
        elif row[2] == "Marvel":
            budget_marvel += int(row[7])
    return budget_dc, budget_marvel, "DC" if budget_dc > budget_marvel else "Marvel"


# ━━━━━━━━━━━━━❮Função Faturamento❯━━━━━━━━━━━━━
def faturamento(data):
    gross_dc, gross_marvel = 0, 0
    for row in data[1:]:
        if row[2] == "DC":
            gross_dc += int(row[10])
        elif row[2] == "Marvel":
            gross_marvel += int(row[10])
    return gross_dc, gross_marvel, "DC" if gross_dc > gross_marvel else "Marvel"

# ━━━━━━━━━━━━━❮Função Filtro❯━━━━━━━━━━━━━
def filtrar_filmes_por_avaliacao(data, nota_minima):
    return [row for row in data[1:] if float(row[3]) >= nota_minima]


# ━━━━━━━━━━━━━❮Menu❯━━━━━━━━━━━━━
def interface_usuario(data):
    while True:
        print("\nOpções:")
        print("1. Avaliação do público")
        print("2. Orçamento")
        print("3. Faturamento")
        print("4. Filtrar filmes por avaliação")
        print("5. Sair")
        
        opcao = input("Escolha uma opção (1-5): ")
        
        if opcao == '1':
            media_dc, media_marvel, vencedor = avaliacao_publico(data)
            print("\nMédia de Avaliação:")
            print("DC: {:.2f}".format(media_dc))
            print("Marvel: {:.2f}".format(media_marvel))
            print("Vencedor: ", vencedor)
            
        elif opcao == '2':
            budget_dc, budget_marvel, vencedor = orcamento(data)
            print("\nOrçamento Total:")
            print("DC: ${:,.2f}".format(budget_dc))
            print("Marvel: ${:,.2f}".format(budget_marvel))
            print("Vencedor: ", vencedor)
            
        elif opcao == '3':
            gross_dc, gross_marvel, vencedor = faturamento(data)
            print("\nFaturamento Mundial Total:")
            print("DC: ${:,.2f}".format(gross_dc))
            print("Marvel: ${:,.2f}".format(gross_marvel))
            print("Vencedor: ", vencedor)
            
        elif opcao == '4':
            nota = float(input("\nDigite a nota mínima para filtrar os filmes: "))
            filmes_filtrados = filtrar_filmes_por_avaliacao(data, nota)
            print("\nFilmes com nota maior ou igual a {:.1f}:".format(nota))
            for filme in filmes_filtrados:
                print("{} ({}): {}".format(filme[1], filme[2], filme[3]))
                
        elif opcao == '5':
            print("\nSaindo...")
            break
        else:
            print("\nOpção inválida. Tente novamente.")

#━━━━━━━━━❮Programa Principal❯━━━━━━━━━

db = input('Digite o Caminho absoluto do arquivo: ')
data = load_csv(db)


interface_usuario(data)
# ━━━━━━━━━━━━━❮◆❯━━━━━━━━━━━━━

# ------------------------------------------------------------------
#           MÉTODO UTILIZANDO PANDAS COMO BIBLIOTECA
# ------------------------------------------------------------------


# #━━━━━━━━━❮Bibliotecas❯━━━━━━━━━
# import pandas as pd
# #━━━━━━━━━━━━━❮◆❯━━━━━━━━━━━━━


# #━━━━━━━━━━━━━❮CSV❯━━━━━━━━━━━━━
# # Carregar o arquivo CSV

# data =input('Digite o Caminho absoluto do arquivo: ')
# df = pd.read_csv(data)


# #━━━━━━━━━━━━━❮Funções❯━━━━━━━━━━━━━
# def avaliacao_publico(df):
#     media_rate = df.groupby('Company')['Rate'].mean()
    
#     vencedor = media_rate.idxmax()
#     return media_rate, vencedor

# def orçamento(df):
#     total_budget = df.groupby('Company')['Budget'].sum()

#     vencedor = total_budget.idxmax()
#     return total_budget, vencedor

# def faturamento(df):
#     total_gross = df.groupby('Company')['Gross Worldwide'].sum()

#     vencedor = total_gross.idxmax()
#     return total_gross, vencedor

# def filtrar_filmes_por_avaliacao(df, nota_minima):

#     filmes_filtrados = df[df['Rate'] >= nota_minima]
#     return filmes_filtrados


# #━━━━━━━━━━━━━❮Menu❯━━━━━━━━━━━━━
# def interface_usuario():
#     while True:
#         print("\nOpções:")
#         print("1. Avaliação do público")
#         print("2. Orçamento")
#         print("3. Faturamento")
#         print("4. Filtrar filmes por avaliação")
#         print("5. Sair")
        
#         opcao = input("Escolha uma opção (1-5): ")
        
#         if opcao == '1':
#             media_rate, vencedor_rate = avaliacao_publico(df)
#             print("\nMédia de Avaliação:")
#             print("DC: {:.2f}".format(media_rate['DC']))
#             print("Marvel: {:.2f}".format(media_rate['Marvel']))
#             print("Vencedor: ", vencedor_rate)
            
#         elif opcao == '2':
#             total_budget, vencedor_budget = orçamento(df)
#             print("\nOrçamento Total:")
#             print("DC: ${:,.2f}".format(total_budget['DC']))
#             print("Marvel: ${:,.2f}".format(total_budget['Marvel']))
#             print("Vencedor: ", vencedor_budget)
            
#         elif opcao == '3':
#             total_gross, vencedor_gross = faturamento(df)
#             print("\nFaturamento Mundial Total:")
#             print("DC: ${:,.2f}".format(total_gross['DC']))
#             print("Marvel: ${:,.2f}".format(total_gross['Marvel']))
#             print("Vencedor: ", vencedor_gross)
            
#         elif opcao == '4':
#             nota = float(input("\nDigite a nota mínima para filtrar os filmes: "))
#             filmes_filtrados = filtrar_filmes_por_avaliacao(df, nota)
#             print("\nFilmes com nota maior ou igual a {:.1f}:".format(nota))
#             for index, row in filmes_filtrados.iterrows():
#                 print("{} ({}): {}".format(row['Original Title'], row['Company'], row['Rate']))
                
#         elif opcao == '5':
#             print("\nSaindo...")
#             break
#         else:
#             print("\nOpção inválida. Tente novamente.")


# # Para executar a interface do usuário, descomente a linha abaixo:

# interface_usuario()
