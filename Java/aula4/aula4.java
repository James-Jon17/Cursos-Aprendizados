import java.util.Scanner;

public class aula4 {
    public static void main(String[] args){

            try (Scanner entrada = new Scanner(System.in)) {
            int n1 = 0;
            int n2 = 0;
            int n3 = 0;
            String nome = "";

            System.out.print("Digite seu nome: ");
            nome = entrada.nextLine();
            System.out.print("Digite um numero: ");
            n1 = entrada.nextInt();
            System.out.print("Digite outro numero: ");
            n2 = entrada.nextInt();
            System.out.print("Digite mais um numero: ");
            n3 = entrada.nextInt();
            int res = n1 + n2 + n3;
            System.out.printf("Ola %s, valor de %d, %d e %d é %d", nome, n1, n2, n3, res);
        }
    }
}
