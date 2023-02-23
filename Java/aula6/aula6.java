package aula6;

public class aula6 {
    public static void main(String[] args) {

        final int tam = 5;

        int[] num = new int[tam];
        int[] num2 = {1, 3, 7, 11};

        num[0]=10;
        num[1]=20;
        num[2]=30;
        num[3]=40;
        num[4]=50;

        for (int i = 0; i < num.length; i++) {
            System.out.print(num[i]);
            if (i < num.length - 1) {
                System.out.print(", ");
            } else {
                System.out.print(".\n");
            }
        }

        for (int i = 0; i < num2.length; i++) {
            System.out.printf("%d", num2[i]);
            if (i < num2.length - 1) {
                System.out.print(", ");
            } else {
                System.out.print(".");
            }
        }
        }
    }

