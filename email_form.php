<?php
	if(isset($_POST['submit'])){
        $firstname=$_POST['firstname'];
        $lastname=$_POST['lastname'];
		$email=$_POST['email'];
        $ragionesociale=$_POST['ragionesociale'];
        $piva=$_POST['piva'];
		$msg=$_POST['msg'];

		$to='94matteo1@gmail.com'; // Receiver Email ID, Replace with your email ID
		$subject='Form Submission';
		$message="Name :".$firstname."\n"."Lastname :".$lastname."\n"."Ragionesociale :".$ragionesociale."\n"."Piva :".$piva."\n"."Wrote the following :"."\n\n".$msg;
		$headers="From: ".$email;

		if(mail($to, $subject, $message, $headers)){
			echo "<h1>Sent Successfully! Thank you"." ".$firstname.", We will contact you shortly!</h1>";
		}
		else{
			echo "Something went wrong!";
		}
	}
?>