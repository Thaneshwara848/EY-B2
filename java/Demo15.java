import java.util.*;
class Demo15
{
	public static void main(String args[])
	{
		m1();					
	}
	static void m1()
	{
		m2();
		System.out.println("Hi m1 method....!");
	}
	static void m2()
	{
		m3();
		System.out.println("Hi M2 method....!");
	}
	static void m3()
	{

		try
		{
			Scanner sc= new Scanner(System.in);
			System.out.println("Enter A val : ");
			int a = sc.nextInt();

			System.out.println("Enter B val :");
			int b = sc.nextInt();

			int sum = a/b;

			System.out.println("Sum :"+sum);
			System,out.println("length is :"+);
		}
		catch(ArithmeticException ae)
		{
			System.out.println("HY Boss we cant devide anythong by \0 ");
		}	
		catch(InputMismatchException ie)
		{
			System.out.println("Hi Please enter only number ...! ");	
		}
	}
}



