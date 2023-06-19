// parent // super // base 
class A
{
	int a=100;
	int b=200;
	void abc()
	{
		System.out.println("A class "+(a+b));
		
	}
}
// child // sub // derived 
class B extends A
{
	//int a=100;
	//int b=200;
	void xyz()
	{
		System.out.println("B class "+(a+b));
	}
}
class Demo7
{
	public static void main(String args[])
	{
		A a = new A();
		B b = new B();
		a.abc();
		b.xyz();
	}
}
//aquring the property from parent to child 
// use : ? we can reduce the lines of code , length of code
// we can re use the same variable  