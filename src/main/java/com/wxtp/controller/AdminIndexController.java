package com.wxtp.controller;

import javax.servlet.http.HttpServletRequest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import com.wxtp.service.IndexService;
import com.wxtp.util.JsonResult;
import com.wxtp.util.Wxhttp5;

@Controller
public class AdminIndexController {

	@Autowired
	IndexService indexService;

	// 管理员登陆
	@RequestMapping("/adminlogin")

	public Object adminlogin(HttpServletRequest request, Model model) {

		System.out.println("请求到这里没");
		return "adminlogins";

	}

	// 管理员登陆
	@RequestMapping("/adminindex")

	public Object adminindex(HttpServletRequest request, Model model) {
		String yhum=request.getParameter("yhum");
		String mima=request.getParameter("mima");
		System.out.println(yhum+""+mima);
		yhum=yhum+"";
		System.out.println( yhum.equals("15274960599"));
		if(yhum.equals("15274960599")){
			return "detailss";
		}else{
			 model.addAttribute("error", "验证失败");  
			 System.out.println("youwenti");
			return "adminlogins";
		}
		
	}
}
