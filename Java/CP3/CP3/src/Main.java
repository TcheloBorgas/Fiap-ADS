// Marcelo Henrique Góes da Costa Borgas RM --> 98893
// Daniel Alves de Souza RM -->552310


import java.util.ArrayList;
import java.util.Scanner;
import java.util.List;

class Produto {
    private int codigo;
    private String descricao;
    private float precoUnitario;

    public Produto(int codigo, String descricao, float precoUnitario) {
        this.codigo = codigo;
        this.descricao = descricao;
        this.precoUnitario = precoUnitario;
    }

    public int getCodigo() {
        return codigo;
    }

    public String getDescricao() {
        return descricao;
    }

    public float getPrecoUnitario() {
        return precoUnitario;
    }

    public void setCodigo(int codigo) {
        this.codigo = codigo;
    }

    public void setDescricao(String descricao) {
        this.descricao = descricao;
    }

    public void setPrecoUnitario(float precoUnitario) {
        this.precoUnitario = precoUnitario;
    }

    @Override
    public String toString() {
        return "Produto{" +
                "codigo=" + codigo +
                ", descricao='" + descricao + '\'' +
                ", precoUnitario=" + precoUnitario +
                '}';
    }
}

class ItemComanda {
    private Produto produto;
    private int quantidade;

    public ItemComanda(Produto produto, int quantidade) {
        this.produto = produto;
        this.quantidade = quantidade;
    }

    public Produto getProduto() {
        return produto;
    }

    public int getQuantidade() {
        return quantidade;
    }
    
    public float calcularPreco() {
        return this.quantidade * this.produto.getPrecoUnitario();
    }

    @Override
    public String toString() {
        return "ItemComanda{" +
                "produto=" + produto +
                ", quantidade=" + quantidade +
                '}';
    }
}

class Comanda {
    private List<ItemComanda> itens;

    public Comanda() {
        this.itens = new ArrayList<>();
    }

    public void adicionarItem(ItemComanda item) {
        itens.add(item);
    }

    public float calcularTotal() {
        float total = 0.0f;
        for (ItemComanda item : itens) {
            total += item.calcularPreco();
        }
        return total;
    }

    public void imprimirComanda() {
        for (ItemComanda item : itens) {
            System.out.println(item);
        }
        System.out.println("Total: " + calcularTotal());
    }
}

class CatalogoProdutos {
    private List<Produto> produtos;

    public CatalogoProdutos() {
        this.produtos = new ArrayList<>();
    }

    public void adicionarProduto(Produto produto) {
        produtos.add(produto);
    }

    public Produto buscarProduto(int codigo) {
        for (Produto produto : produtos) {
            if (produto.getCodigo() == codigo) {
                return produto;
            }
        }
        return null; // Retorna null se o produto nao for encontrado
    }

    public void imprimirCatalogo() {
        for (Produto produto : produtos) {
            System.out.println(produto);
        }
    }
}


public class Main {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        CatalogoProdutos catalogo = new CatalogoProdutos();
        Comanda comanda = new Comanda();
        
        while (true) {
            System.out.println("1. Adicionar produto ao catálogo");
            System.out.println("2. Adicionar produto à comanda");
            System.out.println("3. Imprimir catálogo de produtos");
            System.out.println("4. Imprimir comanda");
            System.out.println("5. Sair");
            
            System.out.print("Escolha uma opção: ");
            int opcao = scanner.nextInt();
            
            if (opcao == 1) {
                System.out.print("Digite o código do produto: ");
                int codigo = scanner.nextInt();
                scanner.nextLine();  // Limpar o buffer
                
                System.out.print("Digite a descrição do produto: ");
                String descricao = scanner.nextLine();
                
                System.out.print("Digite o preço unitário do produto: ");
                float preco = scanner.nextFloat();
                
                Produto produto = new Produto(codigo, descricao, preco);
                catalogo.adicionarProduto(produto);
            } else if (opcao == 2) {
                System.out.print("Digite o código do produto: ");
                int codigo = scanner.nextInt();
                
                System.out.print("Digite a quantidade: ");
                int quantidade = scanner.nextInt();
                
                Produto produto = catalogo.buscarProduto(codigo);
                if (produto != null) {
                    comanda.adicionarItem(new ItemComanda(produto, quantidade));
                } else {
                    System.out.println("Produto não encontrado.");
                }
            } else if (opcao == 3) {
                catalogo.imprimirCatalogo();
            } else if (opcao == 4) {
                comanda.imprimirComanda();
            } else if (opcao == 5) {
                break;
            } else {
                System.out.println("Opção inválida. Tente novamente.");
            }
        }
        
        scanner.close();
    }
}
