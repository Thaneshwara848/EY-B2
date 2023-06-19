import java.util.*;
class A
{
	int id;
	String name;
	int age;
	int salary;
	String desig="";
	Scanner sc= new Scanner(System.in);
	A()
	{
		System.out.println("Enter ID  ");
		id=sc.nextInt();
		System.out.println("Enter Name :");
		name=sc.next();
		System.out.println("Enter AGE ");
		age=sc.nextInt();
		System.out.println("Enter salary ");
		salary=sc.nextInt();
		
	}	
	void abc()
	{
		System.out.println("===================");
		System.out.println("ID :"+id);
		System.out.println("Name :"+name);
		System.out.println("AGE :"+age);
		System.out.println("SALARY :"+salary);
		System.out.println("DESIG:"+desig);
	}	
}

class Clerk extends A
{
	String desig="Clerk";
	Scanner sc= new Scanner(System.in);
	Clerk()
	{	
	}	
	void abc()
	{
		System.out.println("===================");
		System.out.println("ID :"+id);
		System.out.println("Name :"+name);
		System.out.println("AGE :"+age);
		System.out.println("SALARY :"+salary);
		System.out.println("DESIG:"+desig);
	}	
}
class Tester extends A
{
	
	String desig="Tester";
	Scanner sc= new Scanner(System.in);
	Tester()
	{	
	}	
	void abc()
	{
		System.out.println("===================");
		System.out.println("ID :"+id);
		System.out.println("Name :"+name);
		System.out.println("AGE :"+age);
		System.out.println("SALARY :"+salary);
		System.out.println("DESIG:"+desig);
	}	
}
class Demo4
{
	public static void main(String args[])
	{
		A a = new A();
		a.abc();

		Clerk c = new Clerk();
		c.abc();
		
		Tester t= new Tester();
		t.abc();
	}
}