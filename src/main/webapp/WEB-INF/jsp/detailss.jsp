<%@ page language="java" contentType="text/html; charset=utf-8" pageEncoding="utf-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<%
	String path = request.getContextPath();
	String basePath = request.getScheme() + "://" + request.getServerName() + ":" + request.getServerPort()+ path;
%>
 
<html>
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
    <title></title>
    <link rel="stylesheet" type="text/css" href="static/js/css/index.css">
    <script type="text/javascript">
    	
   		document.addEventListener('plusready', function(){
   			//console.log("所有plus api都应该在此事件发生后调用，否则会出现plus is undefined。"
   			
   		});
   		
    </script>
</head>
<body>
	<header>
	<div class="logo-img"></div>
	<div class="container">
    <form action="adminselect" class="parent">
        <input type="text" class="search" placeholder="搜索">
        <input type="button" name="" id="" class="btn" value="">
    </form>
</div>
	</header>
	<form action="upload" enctype="multipart/form-data"  method="post" id="form1">
	<div class="popup" style="display: none;">
		<div class="popup-mask"></div>
		<div class="search-list">
			<table>
				<thead>
					<tr>
						<th>序号</th>
						<th>名字</th>
						<th>部门</th>
						<th>手机</th>
						<th>操作</th>
					</tr>
				</thead>
				<tbody>
					
				</tbody>
			</table>
		</div>
		
	</div>
	<div class="clerkAdd">
			<div class="login-dl">
				<dl class="name">
					<dt></dt>
					<dd>
						<input type="text" id="username" name="username" type="text"  placeholder="请输入姓名" />
					</dd>
				</dl>
				<dl  class="dept">
					<dt></dt>
					<dd>
						<input type="hidden" id="selectNo" name="selectNo" value="0" />
						<select id="userDept" name="userDept"  >
							<option data-id='1'>总经办</option>
							<option data-id='2'>财务中心</option>
							<option data-id='3'>质管中心</option>
							<option data-id='4'>采购中心</option>
							<option data-id='5'>IT信息中心</option>
							<option data-id='6'>人力资源中心</option>
							<option data-id='7'>行政服务中心</option>
							<option data-id='8'>法务合规中心</option>
							<option data-id='9'>大客户事业部</option>
							<option data-id='10'>医疗耗材事业部</option>
							<option data-id='11'>SPD集中配送事业部</option>
							<option data-id='12'>医疗设备事业部</option>
							<option data-id='13'>市场合作事业部</option>
							<option data-id='14'>检验事业部(一部)</option>
							<option data-id='15'>检验事业部(二部)</option>
							<option data-id='16'>仓储物流事业部</option>
							<option data-id='17'>生物研发生产中心</option>
							<option data-id='18'>事业部负责人</option>
							<option data-id='19'>职能中心负责人</option>
						</select>
					</dd>
				</dl>
				<dl  class="campaignSlogan">
					<dt></dt>
					<dd>
						<textarea  name="campaignSlogan" id="campaignSlogan"  placeholder="请输入竞选口号"  ></textarea>
					</dd>
				</dl>
				<dl  class="voteNumber">
					<dt></dt>
					<dd>
						<input type="number" id="voteNumber" onKeyUp="value=value.replace(/\D/g,'')" onafterpaste="value=value.replace(/\D/g,'')"   name="voteNumber" id="voteNumber"  placeholder="请输入可投票数量"  />
					</dd>
				</dl>
				<dl  class="introduction">
					<dt></dt>
					<dd>
						<textarea  name="introduction" id="introduction"  placeholder="请输入个人简介"  ></textarea>
					</dd>
				</dl>
				<dl class="userPhone">
					<dt></dt>
					<dd>
						<input type="text" onKeyUp="value=value.replace(/\D/g,'')" onafterpaste="value=value.replace(/\D/g,'')"    name="userPhone" id="userPhone"  placeholder="请输入手机号码"  />
					</dd>
				</dl> 
				
				<input type="hidden" value="" id="state" />
			</div>
			<div class="fool">
				<div class="showImg">
					<a href="javascript:;" class="addImg"></a>
				
					        <input type="file" name="file" id="fileImg" accept="image/*" style="display: none;">
					
					    <img src="" alt="" class="">
				</div>
			
				<div class="footer-btn"><button type="submit" >提交信息</button><button type="button" class="clear">清除信息</button></div>
			</div>
				
		</div>
		    </form>
		<div class="mask"></div>
		
		<script type="text/javascript" src="static/js/jquery-1.8.3.min.js" ></script>
		<script type="text/javascript" src="js/jQuery-form.js" ></script>		
		<script type="text/javascript" src="static/js/index.js" ></script>
</body>
</html>
 