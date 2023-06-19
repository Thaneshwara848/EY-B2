class A
{
	A()
	{
		for(int i=0;i<=10;i++)
		{
			System.out.println(i);
		}
		
		System.out.println("===while ========");
		int j=0;
		while(j<=10)
		{
			System.out.println(j);
			j++;
		}

		System.out.println("======Do while =====");
		int k=0;
		do
		{
			System.out.println(k);
			k++;
		}while(k<=10);	
	}
}
class Demo11
{
	public static void main(String args[])
	{
		A a = new A();
	}
}

