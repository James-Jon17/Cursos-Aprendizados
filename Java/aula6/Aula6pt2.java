package aula6;
import java.util.Scanner;

public class Aula6pt2{
    public static void main(String[] args) {
        
        final int tam= 5;
        char[] gabarito = {'a', 'a', 'd', 'b', 'c'};
        char[] respostas = new char[tam];
        int nota = 0;
        try (Scanner input = new Scanner(System.in)) {
            for (int i = 0; i < respostas.length; i++) {
                System.out.printf("Informe a resposta %d: ", i);
                respostas[i] = input.nextLine().charAt(0);
            }
        }

        for (int i = 0; i < respostas.length; i++) {
            if (respostas[i] == gabarito[i]) {
                nota++;
            }
        }
        System.out.printf("%nNota do aluno:%d", nota);
        
    }
}