class A
{
	String name="Ramesh";
}
class B extends A
{
	String name="Ganesh";
	B(String name)
	{
		System.out.println("Hi :"+name);
		System.out.println("Hello :"+this.name);
		System.out.println("Bye :"+super.name);
	}
}
class Demo10
{
	public static void main(String args[])
	{
		B b = new B("Abi");	
	}
}