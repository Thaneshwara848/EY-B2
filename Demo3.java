class A
{
	A()
	{
		System.out.println("Hi A class ");
	}	
	void abc()
	{
		System.out.println("HI Abc method");
	}
}
class B
{
	B()
	{
		System.out.println("Hi B class ");
	}
	void xyz()
	{
		System.out.println("HI Xyz method...!");
	}
}
class Demo3
{
	public static void main(String args[])
	{
		System.out.println("Hi Demo3 class ");
		A a = new A();
		a.abc();
		B b= new B();
		b.xyz();
	}
}
		