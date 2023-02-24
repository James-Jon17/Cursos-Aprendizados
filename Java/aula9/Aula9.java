package aula9;

public class Aula9 {
    public static void main(String[] args) {
        
        // msg("Ola Mundo!!", 3);
        // msg("Estamos passando por parametro!", 2);
        msg("E confuso demais!!", 1);

        int r;
        r = soma2(10, 5);
        System.out.printf("%d %n", r);
        System.out.println(soma2(5, 3));
        System.out.println(soma(1, 5, 10 ));
        System.out.println(soma(2.5, 2.5));

    }

    public static int soma(int... numeros) {
        int res = 0;
        for(int n : numeros){
            res += n;
        }
        return res;
    }

    public static int soma(Double... numeros) {
        Double res = 0.0;
        for(Double n : numeros){
            res += n;
        }
        return (int) Math.round(res);
    }

    public static int soma2(int a, int b) {
        int res = a + b;
        return res;
    }

    public static void msg(String m, int l) {
        for (int i = 0; i < l; i++) {
            System.out.println(m);
        }
        
    }
}
