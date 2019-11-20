 <%@ page language="java" contentType="text/html; charset=utf-8"
    pageEncoding="utf-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<%
	String path = request.getContextPath();
	String basePath = request.getScheme() + "://" + request.getServerName() + ":" + request.getServerPort()
			+ path;
%>  
<HTML xmlns="http://www.w3.org/1999/xhtml"><HEAD>
 
 
 
 
  <meta charset="utf-8">
  <title> 德荣医疗集团投票后台</title>
  <meta name="description" content="particles.js is a lightweight JavaScript library for creating particles.">
  <meta name="author" content="Vincent Garreau" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no">
  <link rel="stylesheet" media="screen" href="static/css/style.css">
  <link rel="stylesheet" type="text/css" href="static/css/resetwx.css"/>
<SCRIPT src="static/js/jquery-1.8.3.min.js"></SCRIPT>
</head>
<body>


<div id="particles-js">
		<div class="login">
			<div class="login-top">
				登录
			</div>
			<form id=adminindex  method=post name=adminindex action="adminindex">
			<div class="login-center clearfix">
				<div class="login-center-img"><img src="static/images/name.png"/></div>
				<div class="login-center-input">
					<input type="text" name="yhum"  id="yhum" value="" placeholder="请输入您的电话号码" onfocus="this.placeholder=''" onblur="this.placeholder='请输入您的电话号码'"/>
					<div class="login-center-input-text">用户名</div>
				</div>
			</div>
			<div class="login-center clearfix">
				<div class="login-center-img"><img src="static/images/password.png"/></div>
				<div class="login-center-input">
					<input type="password"  id ="mima" name="mima"value="" placeholder="请点击获取密码之后填写" onfocus="this.placeholder=''" onblur="this.placeholder='请输入您的密码'"/>
					<div class="login-center-input-text">密码</div>
				</div>
			</div>
			
			${error}
			<!-- <div class="login-button1" id="hqmm">
				获取密码
			</div> -->
			
			<div class="login-button"   id="tijiao">
				登录
			</div>
			<p style="  text-align: center; margin-top: 20px;">By  德荣医疗   IT信息中心</p>
			</form>
		</div>
		<div class="sk-rotating-plane"></div>
</div>

<!-- scripts -->
<script src="static/js/particles.min.js"></script>
<script src="static/js/appwx.js"></script>
<script type="text/javascript">
$("#tijiao").click(function(){
	 var yhum= $("#yhum").val();
	 var mima= $("#mima").val();
	  if(yhum =="" ||undefined || null ||mima=="" ||undefined || null){
		    alert("用户名或者密码不能为空！") 
		    return;
	  }
	  /* alert("tijioooooo") */
	  $("#adminindex").submit();
 });

</script>
 
 
</body>
</html>
 
