import java.util.ArrayList;
import java.util.List;

public class Teste_dois {
    public static void main(String[] args) {
        
        List<Veiculo_dois> veiculos = new ArrayList<>();
        
       
        veiculos.add(new Onibus_dois("BMW", "DEF-456", 2044, 2, "Roxo"));
        veiculos.add(new Caminhao_dois("Mercedes", "MHB-DNM", 2020, 1, false));
        
        
        for (Veiculo_dois veiculo : veiculos) {
            veiculo.exibirDados();
            System.out.println();
        }
    }
}
