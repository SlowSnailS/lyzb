<?php
    //header("Access-Control-Allow-Origin:*")
    /*
        username => 字段涵义 ; 前端发送给我的用户名信息;
    */
    //1.登陆;
    //2.注册;
    $usr = @$_POST["username"];
    $pwd = @$_POST["password"];
    $type = @$_POST["type"];
    if($type !== "login" && $type !== "register"){
        $res = array("error"=>"你到底想干啥!");
        die(json_encode($res));
    }
    require("./_connect.php");
    $pwd = md5($pwd);
    //根据不同情况进行不同判断;
    
    $sql_login = "SELECT username,pwd FROM user_data";
   
    $sql_register = "INSERT user_data(
        username,pwd
    )
        VALUES 
    ('{$usr}','{$pwd}')
    ";
    $result_login = $conn->query($sql_login);
    
    $hasuser = FALSE; //用户名是否存在;
    $select_res = FALSE;//储存用户信息;
    $haspwd = FALSE;//该用户名密码是否正确;
    
    while($row = $result_login->fetch_assoc()){
        //array("username"=>yanghuaizhi,"pwd":"123456")
        if($row["username"] == $usr){
            $hasuser = TRUE;
            echo "登录成功";
            //如果是注册，没必要判断密码;
            if($type == "register"){
                break;
            }
            if($row["pwd"] == $pwd){
                $select_res = json_encode($row);
                $haspwd = TRUE;
                break;
            }
        }
    }

    if($type == "login" &&  $haspwd == TRUE){
        // die($select_res);
    }else if($type == "login"){
        die("用户名不存在，请先注册！！！");
    }

    if($type == "register" && $hasuser == TRUE){
        //用户名重名; => 2;
        echo "用户名重名";
    }else if($hasuser == FALSE ){
        //注册成功成功;=>1
        // echo "注册成功成功";
        if($type == "register"){
             // $result_register = $conn->query($sql_register);
             // echo $result_register;
             if($conn->query($sql_register) == true){
                echo "注册成功成功";
            }else{
                echo "Error: " . $sql_register . "<br>" . $conn->error;
            }
        }
    }

    //echo $hasuser;

    //返回结果判定是那种操作在执行;
    // echo $hasuser;
    // echo $select_res;
?>