<?php

$FName=$_POST['firstname'];
$LName=$_POST['middlename'];
$FtName=$_POST['FtName'];
$Rno=$_POST['Rno'];
$DName=$_POST['DName'];
$Email=$_POST['Email'];
$PhoneNumber=$_POST['PhoneNumber'];


$host="localhost";
$dbusername="root";
$dbpassword="";
$dbname="registration";
$conn = new mysqli($host,$dbusername,$dbpassword,$dbname);

$sql="INSERT INTO reginfo (username,FName,LName,FtName,Rno,DName,Email,PhoneNumber) values ('$username','$FName','$LName','$FtName',$Rno,'$DName','$Email',$PhoneNumber)";
if($conn->query($sql))
{
		echo "new data inserted successfully";
}
else
	{
		echo "Error";
	}
$conn->close();

 ?>