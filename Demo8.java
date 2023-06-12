class A
{
	A()
	{
		System.out.println("A class ");
	}
}
class B  extends A
{
	B()
	{
		System.out.println("B class ");
	}
}
class Demo8
{
	public static void main(String args[])
	{
		//A a = new A();
		B b = new B();
	}
}