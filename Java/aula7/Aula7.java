package aula7;

import java.util.Arrays;

public class Aula7{
    public static void main(String[] args) {
        

        final int tam = 10;
        int[] num = {9, 2, 7, 1, 8, 5, 3, 4, 0, 6};
        int[] num2 = new int[tam];
        int p = 15;
        int pos;

        Arrays.sort(num);
        //Arrays.fill(num2, 10);
        //System.arraycopy(num, 0, num2, 0, tam);
        //System.out.printf("Arrays iguai?: %s", Arrays.equals(num, num2));

        pos = Arrays.binarySearch(num, p);
        System.out.printf("O elemento %d esta no array? %s na posicao %d", p, pos > 0 ? "Sim" : "Nao", pos);
        

        for (int n : num2) {
            System.out.printf("%d ", n);
        }
    }
}
