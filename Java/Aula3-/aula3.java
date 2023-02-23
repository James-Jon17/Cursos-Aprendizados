public class aula3{
    public static void main(String[] args) {

        int nota = 85;
        int faltas = 3;
        int maxFaltas = 5;
        int media = 60;
        String res = nota >= media ? (faltas <= maxFaltas ? "Aprovado" : "Reprovado") : "Reprovado por nota";


        if(nota >= media && faltas <= maxFaltas){
            System.out.printf("%s%n", res);
        } else if(nota >= 40 && faltas <= maxFaltas) {
            System.out.println("Recuperação");
        } else {
            System.out.println("Reprovado");
        }
        System.out.println("Fim do programa");

        // System.out.println("Resultado: " + res);
    }
}