package com.wxtp.service;

import java.util.List;

import com.wxtp.pojo.Users;
 

public interface IndexService {
       
    List<Users>  LoginByCode( );
    
    int  comparisonWXID(String wxid);
    
    List<Users> phoneCheck(String phone);
    
    int  addUsers(Users user);
    
    List<Users>   adminselect(Users str);
    
    int admindel(String str);
}
