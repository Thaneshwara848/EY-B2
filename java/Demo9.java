class Pravin
{
	int site=5;
	int money=50000;
	String car="BMW";
	void Puse()
	{
		System.out.println("Site :"+site);
		System.out.println("MOney :"+money);
		System.out.println("CAR : "+ car);
	}
}
class Suman  extends Pravin
{
	int money=10000;
	void display()
	{
		System.out.println("Site :"+site);
		System.out.println("CAR : "+ car);
		System.out.println("MOney :"+money);
		System.out.println("MOney :"+super.money);
		System.out.println("MOney :"+(super.money+money));	
	}
}
class Demo9
{
	public static void main(String args[])
	{
		Pravin p = new Pravin();
		p.Puse();
		Suman s= new Suman();
		s.display();
	}
}