
import java.util.ArrayList;
import java.util.List;
import java.io.*;

public class GerenciadorScoresArquivos implements GerenciadorScores {
    private List<Score> scores;
    private String filePath = "scores.dat";

    public GerenciadorScoresArquivos() {
        this.scores = new ArrayList<>();
        ler();
    }

    @Override
    public void adicionar(Score score) {
        scores.add(score);
        gravar();
    }

    @Override
    public List<Score> consultar() {
        return scores;
    }

    public void gravar() {
        try (ObjectOutputStream oos = new ObjectOutputStream(new FileOutputStream(filePath))) {
            oos.writeObject(scores);
        } catch (IOException e) {
            e.printStackTrace();
        }
    }

    public void ler() {
        try (ObjectInputStream ois = new ObjectInputStream(new FileInputStream(filePath))) {
            scores = (List<Score>) ois.readObject();
        } catch (FileNotFoundException e) {
            // O arquivo não foi encontrado, será criado na primeira gravação.
        } catch (IOException | ClassNotFoundException e) {
            e.printStackTrace();
        }
    }
}
