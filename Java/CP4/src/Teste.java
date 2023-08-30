import java.util.ArrayList;

public class Teste {
    public static void main(String[] args) {
        ArrayList<Veiculo> veiculos = new ArrayList<>();

        Onibus onibus = new Onibus("volkswagen", "87616", 2018, 60, "Preto");
        Caminhao caminhao = new Caminhao("Ford", "418656", 2077, 8, true);

        veiculos.add(onibus);
        veiculos.add(caminhao);

        for (Veiculo veiculo : veiculos) {
            veiculo.exibirDados();
            System.out.println();
        }
    }
}
