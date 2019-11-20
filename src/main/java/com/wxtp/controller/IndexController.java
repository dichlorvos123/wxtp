package com.wxtp.controller;


import java.io.UnsupportedEncodingException;
import java.util.List;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;
import org.apache.shiro.authz.annotation.RequiresPermissions;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import com.wxtp.pojo.Users;
import com.wxtp.service.IndexService;
import com.wxtp.util.Duanxinbao;
import com.wxtp.util.JsonResult;
import com.wxtp.util.Wxhttp5;
 
 

@Controller
@RequestMapping("")
public class IndexController {
	
	
	@Autowired
	IndexService indexService; 
	
	//微信投票
	@RequestMapping("/login")
	@ResponseBody
	public Object  pddhhm(HttpServletRequest request, Model model){
		String code=request.getParameter("code");
	   System.out.println(code+"：页面传过来的code");
	   Wxhttp5 b=new Wxhttp5();
	  String xin= b.httpURLConectionGET(code);
	   JsonResult aJsonResult=new JsonResult();
	   aJsonResult.setMessage(xin);
	  return aJsonResult;  
	}
	
	
	
	@RequestMapping("/phone")
	@ResponseBody
	public Object  phone(HttpServletRequest request, Model model){
		String phone=request.getParameter("phone");
	   System.out.println(phone+"：页面传过来的dianh");
	   List<Users> p=indexService.phoneCheck(phone);
	   JsonResult aJsonResult=new JsonResult();
	  /* System.out.println(p+"p shi sha");*/
	   if(p.isEmpty()){
		   aJsonResult.setState(1); 
		   return   aJsonResult;
	   }
	   int aa = 0;
	  for (Users users : p) {
		    aa=  users.getPassword();
		   aJsonResult.setData(aa);
		   aJsonResult.setMessage(phone);
	}
	  System.out.println(phone +"---"+aa);
	  Duanxinbao.fasong(phone, aa+"");
	  return aJsonResult;  
	}
	
	
	@RequestMapping("/{page}") 
	public String showPage(@PathVariable String page) {
		System.out.println("页面"+page);
		return page;
	}
}
	
	
		

