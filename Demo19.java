class A extends Thread
{
	public void run()
	{
		for(int i=0;i<=30;i++)
		{
			try
			{
				if(Thread.currentThread().getName().equals("BMW"))
				{
					System.out.println("	   "+Thread.currentThread().getName()+" :"+i);
					Thread.sleep(1000);
				}
				if(Thread.currentThread().getName().equals("AUDI"))
				{
					System.out.println("		      "+Thread.currentThread().getName()+" :"+i);
					Thread.sleep(1000);
				}
			}
			catch(Exception e)
			{
			}
		}
	}
}
class Demo19
{
	public static void main(String args[])
	{
		A a = new A();
		Thread t1= new Thread(a);
		Thread t2= new Thread(a);
		t1.start();
		t2.start();
		t1.setName("BMW");
		t2.setName("AUDI");
		
		t1.setPriority(8);
		t2.setPriority(4);

		for(int k=0;k<=30;k++)
		{
			try
			{
				System.out.println("Maruthi"+k);
				Thread.sleep(1000);
				if(k==10)
				{
					System.out.println("im going for break");
					t1.suspend();
					
				}
				if(k==20)
				{
					t1.resume();
					System.out.println("i just came back ");
				}

				
				if(k==22)
				{
					System.out.println(" is ALive ? "+t2.isAlive());
				}

				if(k==25)
				{
					System.out.println("my car got burst : i canrt pley");
					t2.stop();
				}		
	
				if(k==28)
				{
					System.out.println("IS ALive ?"+t2.isAlive());
					
				}
			}	
			catch(Exception e)
			{
			}
		}
		
	}
}


			https://paste.ubuntu.com/p/W4smcDZZp7/

