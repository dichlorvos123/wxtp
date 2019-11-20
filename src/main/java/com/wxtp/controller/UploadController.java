package com.wxtp.controller;

 
import java.io.File;
import java.io.FileNotFoundException;
import java.io.IOException;
import java.io.UnsupportedEncodingException;
import java.util.List;

import javax.servlet.http.HttpServletRequest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.multipart.MultipartFile;

import com.wxtp.pojo.Users;
import com.wxtp.service.IndexService;
import com.wxtp.util.JsonResult;
  
@Controller
public class UploadController {
	
	@Autowired
	IndexService indexService; 
	
	
     
    @RequestMapping(value = "/upload", method = RequestMethod.POST)
 
    public Object upload(HttpServletRequest req, @RequestParam("file") MultipartFile file,Model m) throws IllegalStateException, IOException {
    	System.out.println("1111111111");
    	String username=req.getParameter("username");
    	String userDept=req.getParameter("userDept");
    	String introduction=req.getParameter("introduction");
     	String selectNo=req.getParameter("selectNo");
    	String veteNumber=req.getParameter("voteNumber");  
    	int veteNumbers=Integer.parseInt(veteNumber);
    	String campaignSlogan=req.getParameter("campaignSlogan");
    	String userPhone=req.getParameter("userPhone");
    	System.out.println(username+"-"+userDept+"-"+selectNo+"-"+introduction+"-"+veteNumber+"-"+campaignSlogan+"-"+userPhone);
             
                String fileName = System.currentTimeMillis()+file.getOriginalFilename();
                String destFileName="F:\\"+File.separator+fileName;
                 System.out.println(destFileName+"文件名称");
                 Users user=new Users();
                 user.setName(username);
                 user.setDept(userDept);
                 user.setIntroduction(introduction);
                 user.setKetoupiaoshu(veteNumbers);
                 user.setMotto(campaignSlogan);
                 user.setPhoneno(userPhone);
                 user.setPhotoURL(destFileName);
                 user.setDeptno(selectNo);
                 int random=(int)((Math.random()*9+1)*1000) ;
                 user.setPassword(random);
                File destFile = new File(destFileName);
                destFile.getParentFile().mkdirs();
                file.transferTo(destFile);
                m.addAttribute("fileName",fileName);
                int aa= indexService.addUsers(user);
                JsonResult a=new JsonResult();
                String msg="";
                System.out.println(aa+"aadezhi");
                if(aa>0){
                	/* m.addAttribute("添加成功", msg); */
        			 a.setCode(1);
            }else{
            	a.setCode(0);
            	/* m.addAttribute("添加失败", msg); */
            }
                return a;
    }   
    
    
 // 管理员xiugai
 	 
 	@RequestMapping(value = "/adminupdate", method = RequestMethod.POST)
 	 public Object adminupdate(HttpServletRequest req, @RequestParam("file") MultipartFile file,Model m) {
 		String username=req.getParameter("username");//姓名
    	String userDept=req.getParameter("userDept");//部门
    	String userDeptid=req.getParameter("userDeptid");//部门编号
    	String introduction=req.getParameter("introduction");//竞选口号
    	String veteNumber=req.getParameter("veteNumber");//可投票数
    	int veteNumbers=Integer.parseInt(veteNumber);
    	String campaignSlogan=req.getParameter("campaignSlogan");//个人简介
    	String userPhone=req.getParameter("userPhone");//电话号码
 		 String id=req.getParameter("id");//主键id
 		 
    	 try {
             String fileName = System.currentTimeMillis()+file.getOriginalFilename();
             String destFileName="F:\\"+File.separator+fileName;
              System.out.println(destFileName+"文件名称");
              Users user=new Users();
              user.setName(username);
              user.setDept(userDept);
              user.setIntroduction(introduction);
              user.setKetoupiaoshu(veteNumbers);
              user.setMotto(campaignSlogan);
              user.setPhoneno(userPhone);
              user.setPhotoURL(destFileName);//图片地址
            /*  int random=(int)((Math.random()*9+1)*1000) ;
              user.setPassword(random);*/
             File destFile = new File(destFileName);
             destFile.getParentFile().mkdirs();
             file.transferTo(destFile);
             m.addAttribute("fileName",fileName);
             int aa= indexService.addUsers(user);
             JsonResult a=new JsonResult();
             if(aa>0){
             	a.setState(1);
             		return a;
         }else{
         	a.setState(0);
         	return a;
         			
         }
         } catch (FileNotFoundException e) {
             e.printStackTrace();
             return "上传失败," + e.getMessage();
         } catch (IOException e) {
             e.printStackTrace();
             return "上传失败," + e.getMessage();
         }
 }   
 	
 	
 // 管理员查询所有
  	@RequestMapping("/adminselect")
    @ResponseBody
  	public Object adminselect(HttpServletRequest request, Model model) throws UnsupportedEncodingException     {
  		 
  		String str=request.getParameter("param");
  	  if(str!=null && str!="") {
		  str = new String(str.getBytes("iso-8859-1"),"utf-8");
	  }
  		System.out.println(str+"data----");
  		Users userss= new Users();
  		userss.setDept(str);
  		
        List<Users> user=	indexService.adminselect(userss);
  		 JsonResult aj=new JsonResult();
  		 aj.setData(user);
  		
  		 return aj;
  		 
  	}
    
  	
 // 管理员删除以id为主键
   	@RequestMapping("/admindel")
     @ResponseBody
   	public Object admindel(HttpServletRequest request, Model model) throws UnsupportedEncodingException     {
   		 
   		String id=request.getParameter("id");
   	  
   		System.out.println(id+"id----");
         int r=	indexService.admindel(id);
   		 JsonResult aj=new JsonResult();
   		 aj.setCode(r);
   		 return aj;
   	}	
  	
  	
  	
}