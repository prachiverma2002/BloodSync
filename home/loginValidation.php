<?php
    $connect=mysqli_connect("localhost","root","","phpclasses") or die ("Connection Failed");
    if(!empty($_POST['save']))
    {
        $username=$_POST['un'];
        $password=$_POST['pw'];
        $query="select * from login where username='$username' and password='$password'";
        $result=mysqli_query($connect,$query);
        $count=mysqli_num_rows($result);
        if($count>0){
            echo "Login Successfully";
        }
        else{
            echo "Login Invalid";
        }
        $connect->close();
    }
    ?>