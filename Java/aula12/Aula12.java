package aula12;
import aula12.Jogador;

public class Aula12 {
    public static void main(String[] args) {
        
        int num = 0;

        Jogador j1 = new Jogador(++num);
        Jogador j2 = new Jogador(++num);
        Jogador j3 = new Jogador(++num);

        //j1.vidas = 100;

        // j1.num = 10;
        // j2.num = 5;
        j1.setVidas(10);
        System.out.printf("%nO jogador 1 tem %d vidas", j1.getVidas());
        System.out.printf("%nO jogador 2 tem %d vidas", j2.getVidas());

        // System.out.println(j2);
    }
}
