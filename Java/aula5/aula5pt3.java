package aula5;
import java.util.Scanner;

public class aula5pt3 {
    public static void main(String[] args) {
        
        try (Scanner input = new Scanner(System.in)) {
            int cont = 1;
            System.out.print("Digite o valor maximo: ");
            int max = input.nextInt();
        do {
            System.out.println("Valor " + cont);
            cont++;
        } while (cont <= max+1);

        System.out.println("Fim do programa");
        }
        
    }
}
