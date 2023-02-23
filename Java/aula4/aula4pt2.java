import java.util.Scanner;

public class aula4pt2{
    public static void main(String[] args){


        try (Scanner entrada = new Scanner(System.in)) {
            int n1=0,n2=0,n3=0,n4=0,soma=0;
            final int MEDIA = 60;
            String nome = "", res= "";

            System.out.print("Nome do aluno: ");
            nome = entrada.nextLine();
            System.out.print("Digite a primeira note: ");
            n1 = entrada.nextInt();
            System.out.print("Digite a segunda nota: ");
            n2 = entrada.nextInt();
            System.out.print("Digite a terceira nota: ");
            n3 = entrada.nextInt();
            System.out.print("Digite a quarta nota: ");
            n4 = entrada.nextInt();
            soma = n1+n2+n3+n4;
            if(soma >= MEDIA){
                res="aprovado";
            } else if(soma >= 40){
                res="recuperacao";
            } else {
                res="reprovado";
            }
            System.out.printf("Aluno %s foi %s, com a nota %d", nome, res, soma);
        }
    }
}