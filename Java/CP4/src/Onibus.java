public class Onibus extends Veiculo {
    private int assentos;
    private String cor;

    public Onibus(String modelo, String placa, int ano, int assentos, String cor) {
        super(modelo, placa, ano);
        this.assentos = assentos;
        this.cor = cor;
    }

    public int getAssentos() {
        return assentos;
    }

    public void setAssentos(int assentos) {
        this.assentos = assentos;
    }

    public String getCor() {
        return cor;
    }

    public void setCor(String cor) {
        this.cor = cor;
    }

    @Override
    public void exibirDados() {
        System.out.println("Modelo: " + getModelo());
        System.out.println("Placa: " + getPlaca());
        System.out.println("Ano: " + getAno());
        System.out.println("Assentos: " + getAssentos());
        System.out.println("Cor: " + getCor());
    }
}
