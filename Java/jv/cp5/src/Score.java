
import java.io.Serializable;

public class Score implements Serializable {
    private static final long serialVersionUID = 1L;
    private String jogador;
    private int pontos;

    public Score(String jogador, int pontos) {
        this.jogador = jogador;
        this.pontos = pontos;
    }

    public String getJogador() {
        return jogador;
    }

    public void setJogador(String jogador) {
        this.jogador = jogador;
    }

    public int getPontos() {
        return pontos;
    }

    public void setPontos(int pontos) {
        this.pontos = pontos;
    }
}
