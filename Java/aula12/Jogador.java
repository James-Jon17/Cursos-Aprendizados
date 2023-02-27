package aula12;

public class Jogador {

    private final int maxVidas = 3;
    private final int minVidas = 0;
    private int num = 0;
    private int vidas = 0;


    public Jogador(int num) {
        this.num = num;
        this.vidas = 1;
        System.out.printf("Jogador de numero %d criado%n", num);
    }

    public int getVidas() {
        return this.vidas;
    }

    public void setVidas(int vidas) {
        if(vidas > maxVidas) {
            this.vidas = maxVidas;
        } else if (vidas < minVidas) {
            this.vidas = minVidas;
        } else {
            this.vidas = vidas;
        }
    }
}
