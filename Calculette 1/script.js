function calc ()
	{
	    var numb1 = prompt ("Premier chiffre");
	    var operator = prompt("Quel operateur ? + - * /");
	    var numb2 = prompt("Second chiffre");
	    var total;

	    if (numb1 == "" || numb2 == "" || operator == "" )
			{
			    return alert ("Alors? On est nul!");
			}

	    numb1 = parseInt (numb1, 10);
	    numb2 = parseInt (numb2, 10);

	    switch (operator)
			{
				case '+':
				total = numb1 + numb2;
				break;
				case '-':
				total = numb1 - numb2;
				break;
				case '*':
				total = numb1 * numb2;
				break;
				case '/':
				total = numb1 / numb2;
				break;
				default:
				total = "Operateur non reconnu ! Regarde mieux ce qui a marqué !";
				break;
			}

		alert (total);

	}

calc ();