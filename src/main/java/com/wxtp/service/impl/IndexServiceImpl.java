package com.wxtp.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.wxtp.mapper.IndexMapper;
import com.wxtp.pojo.Users;
import com.wxtp.service.IndexService;
 

@Service
public class IndexServiceImpl  implements IndexService{
 
	@Autowired
     IndexMapper    indexMapper;
	

	public List<Users> LoginByCode() {
		 System.out.println("zhelishiserimpl");
		 List <Users> a=indexMapper.LoginByCode();
		return a;
	}

	public int comparisonWXID(String wxid) {
		 
		return indexMapper.comparisonWXID(wxid);
	}

	public List<Users> phoneCheck(String phone) {
		System.out.println(phone+"impde dianh");
		return 	indexMapper.phoneCheck(phone);
	}

	public int addUsers(Users user) {
		 
		return indexMapper.addUsers(user);
	}

	public List<Users> adminselect(Users str) {
		 
		return indexMapper.adminselect(str);
			}

	public int admindel(String str) {
		 
		return indexMapper.admindel(str);
	}  
  
}
