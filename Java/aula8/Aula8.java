package aula8;
import java.security.SecureRandom;

public class Aula8 {
    public static void main(String[] args) {
        
        final int linha = 3;
        final int colunas = 5;
        int[][] numero = new int[linha][colunas];

        for (int l = 0; l < linha; l++) {
            for (int c = 0; c < colunas; c++) {
                numero[l][c] = new SecureRandom().nextInt(100);
            }
        }

        /* 
        for (int l = 0; l < linha; l++) {
            for(int c = 0; c < colunas; c++){
                System.out.printf("%2d | ", numero[l][c]);
            }
            System.out.printf("%n");
        }
        */
        
        for (int[] n : numero) {
            for (int v : n) {
                System.out.printf("%2d | ", v);
            }
            System.out.printf("%n");
        }
    }
}
