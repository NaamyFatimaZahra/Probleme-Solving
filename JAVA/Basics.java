
//1. Hello and Name Printer
public class Main{
    public static void main(String[] args){
        String name="amin";
        System.out.println("hello"+" "+name);
    }
}

//2. Sum of Two Numbers
public class Main{
    public static void main(String[] args){
        int num1=22;
        int num2=22;
        System.out.println(num1+num2);
    }
}

//3. Division of Two Numbers
public class Main{
    public static void main(String[] args){
        int num1=50;
        int num2=3;
        System.out.println(num1/num2);
    }
}

//4. Arithmetic Operations

public class Main{
    public static void main(String[] args){

        System.out.println(-5 + 8 * 6);
        System.out.println((55+9) % 9);
        System.out.println( 20 + -3*5 / 8);
    }
}

//5. Product of Two Numbers
import java.util.Scanner;

public class Main{
    public static void main(String[] args){
        Scanner scanner=new Scanner(System.in);
        System.out.println("entrer le 1ere nombre:");
        int nombre1=scanner.nextInt();
        System.out.println("entrer le 2ere nombre:");
        int nombre2=scanner.nextInt();
        System.out.println(nombre1+nombre2);
    }
}

//6. Basic Arithmetic Operations
import java.util.Scanner;

public class Main{
    public static void main(String[] args){
        Scanner scanner=new Scanner(System.in);
        System.out.println("entrer le 1ere nombre:");
        int nombre1=scanner.nextInt();
        System.out.println("entrer le 2ere nombre:");
        int nombre2=scanner.nextInt();
        System.out.println(nombre1+nombre2);
        System.out.println(nombre1-nombre2);
        System.out.println(nombre1/nombre2);
        System.out.println(nombre1*nombre2);
        System.out.println(nombre1 % nombre2);
    }
}

//7. Multiplication Table

import java.util.Scanner;

public class Main{
    public static void main(String[] args){
        Scanner scanner=new Scanner(System.in);
        System.out.println("entrer le nombre:");
        int nombre=scanner.nextInt();

        for (int i=1;i<=10;i++){
            System.out.println(nombre +"*"+i +"="+nombre*i);
        }

    }
}

//8. Pattern Display: JAVA
import java.util.Scanner;

public class Main{
    public static void main(String[] args){
        System.out.println("   J    a   v     v  a ");
        System.out.println("   J   a a   v   v  a a");
        System.out.println("J  J  aaaaa   V V  aaaaa");
        System.out.println(" JJ  a     a   V  a     a");

    }
}

//9. Expression Evaluation

import java.util.Scanner;

public class Main{
    public static void main(String[] args){
        System.out.println((25.5 * 3.5 - 3.5 * 3.5) / (40.5 - 4.5));
       

    }
}

//11. Circle: Area and Perimeter

import java.util.Scanner;

public class Main{
    public static void main(String[] args){
        Scanner scanner=new Scanner(System.in);
        System.out.println("Entrer Radius d'une circle:");
        float Radius=scanner.nextFloat();

        System.out.println("Perimeter: " + Radius*Math.PI*2);
        System.out.println("Area: " + Math.PI*Radius*Radius);

    }
}

//12. Average of Three Numbers

import java.util.Scanner;

public class Main{
    public static void main(String[] args){
        Scanner scanner=new Scanner(System.in);
        System.out.println("Entrer 1ere nombre:");
        float nombre1=scanner.nextFloat();
        System.out.println("Entrer 2ere nombre:");
        float nombre2=scanner.nextFloat();
        System.out.println((nombre1+nombre2)/2);


    }
}