package aula5;
import java.util.Scanner;

public class aula5pt2 {
    public static void main(String[] args) {
        
        try (Scanner input = new Scanner(System.in)) {
            System.out.print("Digite um valor maximo: ");
            int max = input.nextInt();
            int cont=1;
            while (cont < max+1) {
                System.out.println("Valor: " + cont);;
                cont++;
            }
        }

    }
}
