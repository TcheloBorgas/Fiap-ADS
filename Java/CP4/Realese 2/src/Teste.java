import java.util.ArrayList;
import java.util.List;

public class Teste {
    public static void main(String[] args) {
        
        List<Veiculo> veiculos = new ArrayList<>();
        
       
        veiculos.add(new Onibus("BMW", "DEF-456", 2044, 2, "Roxo"));
        veiculos.add(new Caminhao("Mercedes", "MHB-DNM", 2020, 1, false));
        
        
        for (Veiculo veiculo : veiculos) {
            veiculo.exibirDados();
            System.out.println();
        }
    }
}
