<?php
	if(isset($_POST['submit'])){
        $firstname=$_POST['firstname'];
        $lastname=$_POST['lastname'];
		$email=$_POST['email'];

		$msg=$_POST['msg'];

		$to='info@teleios.tech'; // Receiver Email ID, Replace with your email ID
		$subject='Form Submission';
		$message="Name :".$firstname."\n"."Lastname :".$lastname."\n"."Wrote the following :"."\n\n".$msg;
		$headers="From: ".$email;

		if(mail($to, $subject, $message, $headers)){
			//echo "<h1>Sent Successfully! Thank you"." ".$firstname.", We will contact you shortly!</h1>";
			header("Location:http://teleios.tech/contacts.html");
		}
		else{
			echo "Something went wrong!";
		}
	}
?>