
import java.util.List;
import java.util.Scanner;

public class App {
    public static void main(String[] args) {
        GerenciadorScores gerenciador = new GerenciadorScoresArquivos();
        Scanner scanner = new Scanner(System.in);
        
        while (true) {
            // Mostra o menu principal
            System.out.println("Menu Principal:");
            System.out.println("1. Adicionar Score");
            System.out.println("2. Listar Scores");
            System.out.println("3. Sair");
            System.out.print("Escolha uma opção: ");
            
            // Lê a opção do usuário
            int opcao = scanner.nextInt();
            scanner.nextLine();  // consome a linha restante
            
            switch (opcao) {
                case 1:
                    // Adicionar Score
                    System.out.print("Nome do Jogador: ");
                    String jogador = scanner.nextLine();
                    System.out.print("Pontos: ");
                    int pontos = scanner.nextInt();
                    scanner.nextLine();  // consome a linha restante
                    
                    gerenciador.adicionar(new Score(jogador, pontos));
                    System.out.println("Score adicionado com sucesso!\n");
                    break;
                case 2:
                    // Listar Scores
                    List<Score> scores = gerenciador.consultar();
                    System.out.println("Scores:");
                    for (Score score : scores) {
                        System.out.println(score.getJogador() + ": " + score.getPontos());
                    }
                    System.out.println();
                    break;
                case 3:
                    // Sair
                    System.out.println("Saindo...");
                    scanner.close();
                    return;
                default:
                    System.out.println("Opção inválida. Tente novamente.\n");
            }
        }
    }
}
