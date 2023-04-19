

import java.util.Scanner;

public class ExemploArray {
        public int tamanhoVetor(){
            Scanner inuput = new Scanner(System.in);
            System.out.println("Digite o tamanho do vetor: ");
            int t = input.nextInt();
            return t;
        }
    }
    public int[] criaVetor(int t){ //instancia o vetor com o tamanho t
        Scanner input = new Scanner(System.in);
        int[] vetor = new int[t];
        return vetor;
        for (int i = 0; i < vetor.length; i++) {
            System.out.printf("Vetor[%d]:");
            vetor[i] = input.nextInt();
        }
        return vetor;

        public Void imprimeVetor(int[] vetor){
            for (int i = 0; i < vetor.length; i++) {
                System.out.printf("Vetor[%d]: %d", i, vetor[i]);

    }
    public class ExemploArrayTeste {
        public static void main(String[] args) {
            ExemploArray exemplo = new ExemploArray();
            int t = exemplo.tamanhoVetor();
            int[] vetor = exemplo.criaVetor(t);
            exemplo.imprimeVetor(vetor);
        }
    }
}

