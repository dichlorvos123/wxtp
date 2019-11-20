package com.wxtp.util;

import java.io.BufferedReader;
import java.io.InputStreamReader;
import java.net.HttpURLConnection;
import java.net.URL;

public class Wxhttp5 {

	
	
	 public  String  httpURLConectionGET(String str) {
		 String uu="https://api.weixin.qq.com/sns/jscode2session?"
		 		+ "appid=wx051ced04345fbab3&"
		 		+ "secret=cf154cf6ae8864b5f6a90b38b90eb9fd&"
		 		+ "js_code="+ str
		 		+ "&grant_type=authorization_code";

	        try {
	            URL url = new URL(uu);// 字符串转成请求地址
	            HttpURLConnection connection = (HttpURLConnection) url.openConnection();// 打开连接
	            connection.connect();// 连接会话
	            BufferedReader br = new BufferedReader(new InputStreamReader(connection.getInputStream(), "UTF-8"));// 响应结果为输入流
	            String line;
	            StringBuilder sb = new StringBuilder();// 输出的结果
	            while ((line = br.readLine()) != null) {
	                sb.append(line);
	            }
	            br.close();
	            connection.disconnect();// 断开连接
	            System.out.println(sb.toString());
             return sb.toString();
	        } catch (Exception e) {
	            e.printStackTrace();
	            System.out.println("请求失败 :" + e.getMessage());
	            return "0";
	        }
	    }
}
