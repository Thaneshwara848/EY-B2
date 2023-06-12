
import java.io.*;

public class Demo16 {

	public static void main(String[] args) {
		//String name="Krishna";
		String name=null;// NullPointerException 
		//System.out.println(name.length());

		int arr[]={1,2,3,4,5,6};
		System.out.println(arr[5]);
		//System.out.println(arr[7]);// ArrayIndexOutOfBoundsException


		String num="10";
		System.out.println(Integer.parseInt(name));


		// inputMisMathExceptrion 
		// AretmhmenticException
		
		// FileNotFound Exception
	}
}

Run time Exceptrion : 

NumberFormatException
AretmhmenticException
inputMisMathExceptrion
ArrayIndexOutOfBoundsException
NullPointerException

Compil time : 
		FileNotFounException 
		IoEception
	=====================================================================================

Error handing : 
		can we handle the error ? NO 
		




Exception : some mis match or some unwanted termintion 


While runing this anmything may happend 
	id some thing went wromng also
		our application should be able to handin and contine program 


Error 					Exception 

cant be handle 				can be handle 




						Checked exception 				Uncheck exception 
						Compile time 					Run time exception 

						it will check at 
						compilation time onle 				run time 
			
						FileNotFounfd
						IoException
						SQLException					IME/ AIOBE/ SIOBE/ NFE/NPE/AE


					how to handle ? 
						2 way : 
							using throws 
							using try & catch & finally 

							throw : if i want raise exception manully 


						Throw 							Throws 
						one exc can be raised 					we can decler multile exception 
													checked exception must be handeled 
































