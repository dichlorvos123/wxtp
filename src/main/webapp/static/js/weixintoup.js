
$("#yxyg1").click(function(){
 
	var phone=$("#phone").val();
	var bmzt=$("#bmzt").val();
	var bmbsxxzx=$("#bmbsxxzx").val();
	var grbs=$("#grbs").val();
	 
	  /*alert(bmzt==bmbsxxzx);*/
	 $.ajax({
			        type:"get",
			        url:"yztps",
			        dataType:"json", 
			         data: {phone:phone}, 
			      success:function(state){
			    	  if(state.state==0){
			    		  alert("对不起您的票已全部投完")
			    		  return;
			    	   } else {
			    		   if(bmzt==bmbsxxzx){
			    			   alert("不能给同部门投票")
			    	            return;
			    		   }
			    	   }  
			    	   
			    	  $.ajax({
			                      type:"get",
			                      url:"tpcg",
			                      dataType:"json", 
			                      data: {phone:phone,grbs:grbs},
			              success:function(state){
			               if(state.state==1){
			                alert("投票成功")
			                $("#yxyg1").attr("disabled", true); 
			                
			               }
			              }
			              });
			    	  
			    	  }
			       
			}); 
	
	});

$("#yxyg2").click(function(){
	var phone=$("#phone").val();
	var bmzt=$("#bmzt").val();
	var bmbsxxzx=$("#bmbsxxzx").val();
	var grbs=$("#grbs2").val();
	  /*alert(bmzt==bmbsxxzx);*/
	 $.ajax({
			        type:"get",
			        url:"yztps",
			        dataType:"json", 
			         data: {phone:phone}, 
			      success:function(state){
			    	  if(state.state==0){
			    		  alert("对不起您的票已全部投完")
			    		  return;
			    	   } else {
			    		   if(bmzt==bmbsxxzx){
			    			   alert("不能给同部门投票")
			    	            return;
			    		   }
			    	   }  
			    	   
			    	  $.ajax({
			                      type:"get",
			                      url:"tpcg",
			                      dataType:"json", 
			                      data: {phone:phone,grbs:grbs},
			              success:function(state){
			               if(state.state==1){
			                alert("投票成功")
			                $("#yxyg2").attr("disabled", true); 
			                
			               }
			              }
			              });
			    	  
			    	  }
			       
			}); 
	
	});

$("#yxyg3").click(function(){
	 
	var phone=$("#phone").val();
	var bmzt=$("#bmzt").val();
	var grbs=$("#grbs3").val();
	 
	var bmbsxxzx=$("#spdjzps").val();
	  /*alert(bmzt==bmbsxxzx);*/
	 $.ajax({
			        type:"get",
			        url:"yztps",
			        dataType:"json", 
			         data: {phone:phone}, 
			      success:function(state){
			    	  if(state.state==0){
			    		  alert("对不起您的票已全部投完")
			    		  return;
			    	   } else {
			    		   if(bmzt==bmbsxxzx){
			    			   alert("不能给同部门投票")
			    	            return;
			    		   }
			    	   }  
			    	   
			    	  $.ajax({
			                      type:"get",
			                      url:"tpcg",
			                      dataType:"json", 
			                      data: {phone:phone,grbs:grbs},
			              success:function(state){
			               if(state.state==1){
			                alert("投票成功")
			             
			                $("#yxyg3").attr("disabled", true); 
			                
			                /* */
			               }
			              }
			              });
			    	  
			    	  }
			       
			}); 
	
	});

$("#yxyg4").click(function(){
	var phone=$("#phone").val();
	var bmzt=$("#bmzt").val();
	var grbs=$("#grbs4").val();
	var bmbsxxzx=$("#spdjzps").val();
	  /*alert(bmzt==bmbsxxzx);*/
	 $.ajax({
			        type:"get",
			        url:"yztps",
			        dataType:"json", 
			         data: {phone:phone}, 
			      success:function(state){
			    	  if(state.state==0){
			    		  alert("对不起您的票已全部投完")
			    		  return;
			    	   } else {
			    		   if(bmzt==bmbsxxzx){
			    			   alert("不能给同部门投票")
			    	            return;
			    		   }
			    	   }  
			    	   
			    	  $.ajax({
			                      type:"get",
			                      url:"tpcg",
			                      dataType:"json", 
			                      data: {phone:phone,grbs:grbs},
			              success:function(state){
			               if(state.state==1){
			                alert("投票成功")
			                $("#yxyg4").attr("disabled", true); 
			               }
			              }
			              });
			    	  
			    	  }
			       
			}); 
	
	});

$("#yxyg5").click(function(){
	var phone=$("#phone").val();
	var bmzt=$("#bmzt").val();
	var grbs=$("#grbs5").val();
	var bmbsxxzx=$("#cwzx").val();
	  /*alert(bmzt==bmbsxxzx);*/
	 $.ajax({
			        type:"get",
			        url:"yztps",
			        dataType:"json", 
			         data: {phone:phone}, 
			      success:function(state){
			    	  if(state.state==0){
			    		  alert("对不起您的票已全部投完")
			    		  return;
			    	   } else {
			    		   if(bmzt==bmbsxxzx){
			    			   alert("不能给同部门投票")
			    	            return;
			    		   }
			    	   }  
			    	   
			    	  $.ajax({
			                      type:"get",
			                      url:"tpcg",
			                      dataType:"json", 
			                      data: {phone:phone,grbs:grbs},
			              success:function(state){
			               if(state.state==1){
			                alert("投票成功")
			                $("#yxyg5").attr("disabled", true); 
			               }
			              }
			              });
			    	  
			    	  }
			       
			}); 
	
	});

$("#yxyg6").click(function(){
	var phone=$("#phone").val();
	var bmzt=$("#bmzt").val();
	var grbs=$("#grbs6").val();
	var bmbsxxzx=$("#cgzx").val();
	  /*alert(bmzt==bmbsxxzx);*/
	 $.ajax({
			        type:"get",
			        url:"yztps",
			        dataType:"json", 
			         data: {phone:phone}, 
			      success:function(state){
			    	  if(state.state==0){
			    		  alert("对不起您的票已全部投完")
			    		  return;
			    	   } else {
			    		   if(bmzt==bmbsxxzx){
			    			   alert("不能给同部门投票")
			    	            return;
			    		   }
			    	   }  
			    	   
			    	  $.ajax({
			                      type:"get",
			                      url:"tpcg",
			                      dataType:"json", 
			                      data: {phone:phone,grbs:grbs},
			              success:function(state){
			               if(state.state==1){
			                alert("投票成功")
			                $("#yxyg6").attr("disabled", true); 
			               }
			              }
			              });
			    	  
			    	  }
			       
			}); 
	
	});
$("#yxyg7").click(function(){
	var phone=$("#phone").val();
	var bmzt=$("#bmzt").val();
	var grbs=$("#grbs7").val();
	var bmbsxxzx=$("#ccwliu").val();
	  /*alert(bmzt==bmbsxxzx);*/
	 $.ajax({
			        type:"get",
			        url:"yztps",
			        dataType:"json", 
			         data: {phone:phone}, 
			      success:function(state){
			    	  if(state.state==0){
			    		  alert("对不起您的票已全部投完")
			    		  return;
			    	   } else {
			    		   if(bmzt==bmbsxxzx){
			    			   alert("不能给同部门投票")
			    	            return;
			    		   }
			    	   }  
			    	   
			    	  $.ajax({
			                      type:"get",
			                      url:"tpcg",
			                      dataType:"json", 
			                      data: {phone:phone,grbs:grbs},
			              success:function(state){
			               if(state.state==1){
			                alert("投票成功")
			                $("#yxyg7").attr("disabled", true); 
			               }
			              }
			              });
			    	  
			    	  }
			       
			}); 
	
	});


$("#yxyg8").click(function(){
	var phone=$("#phone").val();
	var bmzt=$("#bmzt").val();
	var grbs=$("#grbs8").val();
	var bmbsxxzx=$("#ccwliu").val();
	  /*alert(bmzt==bmbsxxzx);*/
	 $.ajax({
			        type:"get",
			        url:"yztps",
			        dataType:"json", 
			         data: {phone:phone}, 
			      success:function(state){
			    	  if(state.state==0){
			    		  alert("对不起您的票已全部投完")
			    		  return;
			    	   } else {
			    		   if(bmzt==bmbsxxzx){
			    			   alert("不能给同部门投票")
			    	            return;
			    		   }
			    	   }  
			    	   
			    	  $.ajax({
			                      type:"get",
			                      url:"tpcg",
			                      dataType:"json", 
			                      data: {phone:phone,grbs:grbs},
			              success:function(state){
			               if(state.state==1){
			                alert("投票成功")
			                $("#yxyg8").attr("disabled", true); 
			               }
			              }
			              });
			    	  
			    	  }
			       
			}); 
	
	});

$("#yxyg9").click(function(){
	var phone=$("#phone").val();
	var bmzt=$("#bmzt").val();
	var grbs=$("#grbs9").val();
	var bmbsxxzx=$("#xzfwzx").val();
	  /*alert(bmzt==bmbsxxzx);*/
	 $.ajax({
			        type:"get",
			        url:"yztps",
			        dataType:"json", 
			         data: {phone:phone}, 
			      success:function(state){
			    	  if(state.state==0){
			    		  alert("对不起您的票已全部投完")
			    		  return;
			    	   } else {
			    		   if(bmzt==bmbsxxzx){
			    			   alert("不能给同部门投票")
			    	            return;
			    		   }
			    	   }  
			    	   
			    	  $.ajax({
			                      type:"get",
			                      url:"tpcg",
			                      dataType:"json", 
			                      data: {phone:phone,grbs:grbs},
			              success:function(state){
			               if(state.state==1){
			                alert("投票成功")
			                $("#yxyg9").attr("disabled", true); 
			               }
			              }
			              });
			    	  
			    	  }
			       
			}); 
	
	});


$("#yxyg10").click(function(){
	var phone=$("#phone").val();
	var bmzt=$("#bmzt").val();
	var grbs=$("#grbs10").val();
	var bmbsxxzx=$("#jysyeb").val();
	  /*alert(bmzt==bmbsxxzx);*/
	 $.ajax({
			        type:"get",
			        url:"yztps",
			        dataType:"json", 
			         data: {phone:phone}, 
			      success:function(state){
			    	  if(state.state==0){
			    		  alert("对不起您的票已全部投完")
			    		  return;
			    	   } else {
			    		   if(bmzt==bmbsxxzx){
			    			   alert("不能给同部门投票")
			    	            return;
			    		   }
			    	   }  
			    	   
			    	  $.ajax({
			                      type:"get",
			                      url:"tpcg",
			                      dataType:"json", 
			                      data: {phone:phone,grbs:grbs},
			              success:function(state){
			               if(state.state==1){
			                alert("投票成功")
			                $("#yxyg10").attr("disabled", true); 
			               }
			              }
			              });
			    	  
			    	  }
			       
			}); 
	
	});

$("#yxyg11").click(function(){
	var phone=$("#phone").val();
	var bmzt=$("#bmzt").val();
	var grbs=$("#grbs11").val();
	var bmbsxxzx=$("#jysyyb").val();
	  /*alert(bmzt==bmbsxxzx);*/
	 $.ajax({
			        type:"get",
			        url:"yztps",
			        dataType:"json", 
			         data: {phone:phone}, 
			      success:function(state){
			    	  if(state.state==0){
			    		  alert("对不起您的票已全部投完")
			    		  return;
			    	   } else {
			    		   if(bmzt==bmbsxxzx){
			    			   alert("不能给同部门投票")
			    	            return;
			    		   }
			    	   }  
			    	   
			    	  $.ajax({
			                      type:"get",
			                      url:"tpcg",
			                      dataType:"json", 
			                      data: {phone:phone,grbs:grbs},
			              success:function(state){
			               if(state.state==1){
			                alert("投票成功")
			                $("#yxyg11").attr("disabled", true); 
			               }
			              }
			              });
			    	  
			    	  }
			       
			}); 
	
	});
$("#yxyg12").click(function(){
	var phone=$("#phone").val();
	var bmzt=$("#bmzt").val();
	var grbs=$("#grbs12").val();
	var bmbsxxzx=$("#rlzyzx").val();
	  /*alert(bmzt==bmbsxxzx);*/
	 $.ajax({
			        type:"get",
			        url:"yztps",
			        dataType:"json", 
			         data: {phone:phone}, 
			      success:function(state){
			    	  if(state.state==0){
			    		  alert("对不起您的票已全部投完")
			    		  return;
			    	   } else {
			    		   if(bmzt==bmbsxxzx){
			    			   alert("不能给同部门投票")
			    	            return;
			    		   }
			    	   }  
			    	   
			    	  $.ajax({
			                      type:"get",
			                      url:"tpcg",
			                      dataType:"json", 
			                      data: {phone:phone,grbs:grbs},
			              success:function(state){
			               if(state.state==1){
			                alert("投票成功")
			                $("#yxyg12").attr("disabled", true); 
			               }
			              }
			              });
			    	  
			    	  }
			       
			}); 
	
	});
$("#yxyg13").click(function(){
	var phone=$("#phone").val();
	var bmzt=$("#bmzt").val();
	var grbs=$("#grbs13").val();
	var bmbsxxzx=$("#swgs").val();
	  /*alert(bmzt==bmbsxxzx);*/
	 $.ajax({
			        type:"get",
			        url:"yztps",
			        dataType:"json", 
			         data: {phone:phone}, 
			      success:function(state){
			    	  if(state.state==0){
			    		  alert("对不起您的票已全部投完")
			    		  return;
			    	   } else {
			    		   if(bmzt==bmbsxxzx){
			    			   alert("不能给同部门投票")
			    	            return;
			    		   }
			    	   }  
			    	   
			    	  $.ajax({
			                      type:"get",
			                      url:"tpcg",
			                      dataType:"json", 
			                      data: {phone:phone,grbs:grbs},
			              success:function(state){
			               if(state.state==1){
			                alert("投票成功")
			                $("#yxyg13").attr("disabled", true); 
			               }
			              }
			              });
			    	  
			    	  }
			       
			}); 
	
	});
$("#yxyg14").click(function(){
	var phone=$("#phone").val();
	var bmzt=$("#bmzt").val();
	var grbs=$("#grbs14").val();
	var bmbsxxzx=$("#schz").val();
	  /*alert(bmzt==bmbsxxzx);*/
	 $.ajax({
			        type:"get",
			        url:"yztps",
			        dataType:"json", 
			         data: {phone:phone}, 
			      success:function(state){
			    	  if(state.state==0){
			    		  alert("对不起您的票已全部投完")
			    		  return;
			    	   } else {
			    		   if(bmzt==bmbsxxzx){
			    			   alert("不能给同部门投票")
			    	            return;
			    		   }
			    	   }  
			    	   
			    	  $.ajax({
			                      type:"get",
			                      url:"tpcg",
			                      dataType:"json", 
			                      data: {phone:phone,grbs:grbs},
			              success:function(state){
			               if(state.state==1){
			                alert("投票成功")
			                $("#yxyg14").attr("disabled", true); 
			               }
			              }
			              });
			    	  
			    	  }
			       
			}); 
	
	});
$("#yxyg15").click(function(){
	var phone=$("#phone").val();
	var bmzt=$("#bmzt").val();
	var grbs=$("#grbs15").val();
	var bmbsxxzx=$("#spdjzps").val();
	  /*alert(bmzt==bmbsxxzx);*/
	 $.ajax({
			        type:"get",
			        url:"yztps",
			        dataType:"json", 
			         data: {phone:phone}, 
			      success:function(state){
			    	  if(state.state==0){
			    		  alert("对不起您的票已全部投完")
			    		  return;
			    	   } else {
			    		   if(bmzt==bmbsxxzx){
			    			   alert("不能给同部门投票")
			    	            return;
			    		   }
			    	   }  
			    	   
			    	  $.ajax({
			                      type:"get",
			                      url:"tpcg",
			                      dataType:"json", 
			                      data: {phone:phone,grbs:grbs},
			              success:function(state){
			               if(state.state==1){
			                alert("投票成功")
			                $("#yxyg15").attr("disabled", true); 
			               }
			              }
			              });
			    	  
			    	  }
			       
			}); 
	
	});
$("#yxyg16").click(function(){
	var phone=$("#phone").val();
	var bmzt=$("#bmzt").val();
	var grbs=$("#grbs16").val();
	var bmbsxxzx=$("#ylhcgh").val();
	  /*alert(bmzt==bmbsxxzx);*/
	 $.ajax({
			        type:"get",
			        url:"yztps",
			        dataType:"json", 
			         data: {phone:phone}, 
			      success:function(state){
			    	  if(state.state==0){
			    		  alert("对不起您的票已全部投完")
			    		  return;
			    	   } else {
			    		   if(bmzt==bmbsxxzx){
			    			   alert("不能给同部门投票")
			    	            return;
			    		   }
			    	   }  
			    	   
			    	  $.ajax({
			                      type:"get",
			                      url:"tpcg",
			                      dataType:"json", 
			                      data: {phone:phone,grbs:grbs},
			              success:function(state){
			               if(state.state==1){
			                alert("投票成功")
			                $("#yxyg16").attr("disabled", true); 
			               }
			              }
			              });
			    	  
			    	  }
			       
			}); 
	
	});
$("#yxyg17").click(function(){
	var phone=$("#phone").val();
	var bmzt=$("#bmzt").val();
	var grbs=$("#grbs17").val();
	var bmbsxxzx=$("#ylsb").val();
	  /*alert(bmzt==bmbsxxzx);*/
	 $.ajax({
			        type:"get",
			        url:"yztps",
			        dataType:"json", 
			         data: {phone:phone}, 
			      success:function(state){
			    	  if(state.state==0){
			    		  alert("对不起您的票已全部投完")
			    		  return;
			    	   } else {
			    		   if(bmzt==bmbsxxzx){
			    			   alert("不能给同部门投票")
			    	            return;
			    		   }
			    	   }  
			    	   
			    	  $.ajax({
			                      type:"get",
			                      url:"tpcg",
			                      dataType:"json", 
			                      data: {phone:phone,grbs:grbs},
			              success:function(state){
			               if(state.state==1){
			                alert("投票成功")
			                $("#yxyg17").attr("disabled", true); 
			               }
			              }
			              });
			    	  
			    	  }
			       
			}); 
	
	});
$("#yxyg18").click(function(){
	var phone=$("#phone").val();
	var bmzt=$("#bmzt").val();
	var grbs=$("#grbs18").val();
	var bmbsxxzx=$("#ylsb").val();
	  /*alert(bmzt==bmbsxxzx);*/
	 $.ajax({
			        type:"get",
			        url:"yztps",
			        dataType:"json", 
			         data: {phone:phone}, 
			      success:function(state){
			    	  if(state.state==0){
			    		  alert("对不起您的票已全部投完")
			    		  return;
			    	   } else {
			    		   if(bmzt==bmbsxxzx){
			    			   alert("不能给同部门投票")
			    	            return;
			    		   }
			    	   }  
			    	   
			    	  $.ajax({
			                      type:"get",
			                      url:"tpcg",
			                      dataType:"json", 
			                      data: {phone:phone,grbs:grbs},
			              success:function(state){
			               if(state.state==1){
			                alert("投票成功")
			                $("#yxyg18").attr("disabled", true); 
			               }
			              }
			              });
			    	  
			    	  }
			       
			}); 
	
	});
$("#yxyg19").click(function(){
	var phone=$("#phone").val();
	var bmzt=$("#bmzt").val();
	var grbs=$("#grbs19").val();
	var bmbsxxzx=$("#zgzx").val();
	  /*alert(bmzt==bmbsxxzx);*/
	 $.ajax({
			        type:"get",
			        url:"yztps",
			        dataType:"json", 
			         data: {phone:phone}, 
			      success:function(state){
			    	  if(state.state==0){
			    		  alert("对不起您的票已全部投完")
			    		  return;
			    	   } else {
			    		   if(bmzt==bmbsxxzx){
			    			   alert("不能给同部门投票")
			    	            return;
			    		   }
			    	   }  
			    	   
			    	  $.ajax({
			                      type:"get",
			                      url:"tpcg",
			                      dataType:"json", 
			                      data: {phone:phone,grbs:grbs},
			              success:function(state){
			               if(state.state==1){
			                alert("投票成功")
			                $("#yxyg19").attr("disabled", true); 
			               }
			              }
			              });
			    	  
			    	  }
			       
			}); 
	
	});
$("#yxyg20").click(function(){
	var phone=$("#phone").val();
	var bmzt=$("#bmzt").val();
	var grbs=$("#grbs20").val();
	var bmbsxxzx=$("#spdjzps").val();
	  /*alert(bmzt==bmbsxxzx);*/
	 $.ajax({
			        type:"get",
			        url:"yztps",
			        dataType:"json", 
			         data: {phone:phone}, 
			      success:function(state){
			    	  if(state.state==0){
			    		  alert("对不起您的票已全部投完")
			    		  return;
			    	   } else {
			    		   if(bmzt==bmbsxxzx){
			    			   alert("不能给同部门投票")
			    	            return;
			    		   }
			    	   }  
			    	   
			    	  $.ajax({
			                      type:"get",
			                      url:"tpcg",
			                      dataType:"json", 
			                      data: {phone:phone,grbs:grbs},
			              success:function(state){
			               if(state.state==1){
			                alert("投票成功")
			                $("#yxyg20").attr("disabled", true); 
			               }
			              }
			              });
			    	  
			    	  }
			       
			}); 
	
	});
$("#yxyg21").click(function(){
	var phone=$("#phone").val();
	var bmzt=$("#bmzt").val();
	var grbs=$("#grbs21").val();
	var bmbsxxzx=$("#jysyeb").val();
	  /*alert(bmzt==bmbsxxzx);*/
	 $.ajax({
			        type:"get",
			        url:"yztps",
			        dataType:"json", 
			         data: {phone:phone}, 
			      success:function(state){
			    	  if(state.state==0){
			    		  alert("对不起您的票已全部投完")
			    		  return;
			    	   } else {
			    		   if(bmzt==bmbsxxzx){
			    			   alert("不能给同部门投票")
			    	            return;
			    		   }
			    	   }  
			    	   
			    	  $.ajax({
			                      type:"get",
			                      url:"tpcg",
			                      dataType:"json", 
			                      data: {phone:phone,grbs:grbs},
			              success:function(state){
			               if(state.state==1){
			                alert("投票成功")
			                $("#yxyg21").attr("disabled", true); 
			               }
			              }
			              });
			    	  
			    	  }
			       
			}); 
	
	});
$("#yxyg22").click(function(){
	var phone=$("#phone").val();
	var bmzt=$("#bmzt").val();
	var grbs=$("#grbs22").val();
	var bmbsxxzx=$("#jysyeb").val();
	  /*alert(bmzt==bmbsxxzx);*/
	 $.ajax({
			        type:"get",
			        url:"yztps",
			        dataType:"json", 
			         data: {phone:phone}, 
			      success:function(state){
			    	  if(state.state==0){
			    		  alert("对不起您的票已全部投完")
			    		  return;
			    	   } else {
			    		   if(bmzt==bmbsxxzx){
			    			   alert("不能给同部门投票")
			    	            return;
			    		   }
			    	   }  
			    	   
			    	  $.ajax({
			                      type:"get",
			                      url:"tpcg",
			                      dataType:"json", 
			                      data: {phone:phone,grbs:grbs},
			              success:function(state){
			               if(state.state==1){
			                alert("投票成功")
			                $("#yxyg22").attr("disabled", true); 
			               }
			              }
			              });
			    	  
			    	  }
			       
			}); 
	
	});
$("#yxyg23").click(function(){
	var phone=$("#phone").val();
	var bmzt=$("#bmzt").val();
	var grbs=$("#grbs23").val();
	var bmbsxxzx=$("#ylhcgh").val();
	  /*alert(bmzt==bmbsxxzx);*/
	 $.ajax({
			        type:"get",
			        url:"yztps",
			        dataType:"json", 
			         data: {phone:phone}, 
			      success:function(state){
			    	  if(state.state==0){
			    		  alert("对不起您的票已全部投完")
			    		  return;
			    	   } else {
			    		   if(bmzt==bmbsxxzx){
			    			   alert("不能给同部门投票")
			    	            return;
			    		   }
			    	   }  
			    	   
			    	  $.ajax({
			                      type:"get",
			                      url:"tpcg",
			                      dataType:"json", 
			                      data: {phone:phone,grbs:grbs},
			              success:function(state){
			               if(state.state==1){
			                alert("投票成功")
			                $("#yxyg23").attr("disabled", true); 
			               }
			              }
			              });
			    	  
			    	  }
			       
			}); 
	
	});
$("#yxyg24").click(function(){
	var phone=$("#phone").val();
	var bmzt=$("#bmzt").val();
	var grbs=$("#grbs24").val();
	var bmbsxxzx=$("#ylhcgh").val();
	  /*alert(bmzt==bmbsxxzx);*/
	 $.ajax({
			        type:"get",
			        url:"yztps",
			        dataType:"json", 
			         data: {phone:phone}, 
			      success:function(state){
			    	  if(state.state==0){
			    		  alert("对不起您的票已全部投完")
			    		  return;
			    	   } else {
			    		   if(bmzt==bmbsxxzx){
			    			   alert("不能给同部门投票")
			    	            return;
			    		   }
			    	   }  
			    	   
			    	  $.ajax({
			                      type:"get",
			                      url:"tpcg",
			                      dataType:"json", 
			                      data: {phone:phone,grbs:grbs},
			              success:function(state){
			               if(state.state==1){
			                alert("投票成功")
			                $("#yxyg24").attr("disabled", true); 
			               }
			              }
			              });
			    	  
			    	  }
			       
			}); 
	
	});
$("#yxyg25").click(function(){
	var phone=$("#phone").val();
	var bmzt=$("#bmzt").val();
	var grbs=$("#grbs25").val();
	var bmbsxxzx=$("#ylhcjr").val();
	  /*alert(bmzt==bmbsxxzx);*/
	 $.ajax({
			        type:"get",
			        url:"yztps",
			        dataType:"json", 
			         data: {phone:phone}, 
			      success:function(state){
			    	  if(state.state==0){
			    		  alert("对不起您的票已全部投完")
			    		  return;
			    	   } else {
			    		   if(bmzt==bmbsxxzx){
			    			   alert("不能给同部门投票")
			    	            return;
			    		   }
			    	   }  
			    	   
			    	  $.ajax({
			                      type:"get",
			                      url:"tpcg",
			                      dataType:"json", 
			                      data: {phone:phone,grbs:grbs},
			              success:function(state){
			               if(state.state==1){
			                alert("投票成功")
			                $("#yxyg25").attr("disabled", true); 
			               }
			              }
			              });
			    	  
			    	  }
			       
			}); 
	
	});
$("#yxyg26").click(function(){
	var phone=$("#phone").val();
	var bmzt=$("#bmzt").val();
	var grbs=$("#grbs26").val();
	var bmbsxxzx=$("#ylhcjr").val();
	  /*alert(bmzt==bmbsxxzx);*/
	 $.ajax({
			        type:"get",
			        url:"yztps",
			        dataType:"json", 
			         data: {phone:phone}, 
			      success:function(state){
			    	  if(state.state==0){
			    		  alert("对不起您的票已全部投完")
			    		  return;
			    	   } else {
			    		   if(bmzt==bmbsxxzx){
			    			   alert("不能给同部门投票")
			    	            return;
			    		   }
			    	   }  
			    	   
			    	  $.ajax({
			                      type:"get",
			                      url:"tpcg",
			                      dataType:"json", 
			                      data: {phone:phone,grbs:grbs},
			              success:function(state){
			               if(state.state==1){
			                alert("投票成功")
			                $("#yxyg26").attr("disabled", true); 
			               }
			              }
			              });
			    	  
			    	  }
			       
			}); 
	
	});
$("#yxyg27").click(function(){
	var phone=$("#phone").val();
	var bmzt=$("#bmzt").val();
	var grbs=$("#grbs27").val();
	var bmbsxxzx=$("#ylsb").val();
	  /*alert(bmzt==bmbsxxzx);*/
	 $.ajax({
			        type:"get",
			        url:"yztps",
			        dataType:"json", 
			         data: {phone:phone}, 
			      success:function(state){
			    	  if(state.state==0){
			    		  alert("对不起您的票已全部投完")
			    		  return;
			    	   } else {
			    		   if(bmzt==bmbsxxzx){
			    			   alert("不能给同部门投票")
			    	            return;
			    		   }
			    	   }  
			    	   
			    	  $.ajax({
			                      type:"get",
			                      url:"tpcg",
			                      dataType:"json", 
			                      data: {phone:phone,grbs:grbs},
			              success:function(state){
			               if(state.state==1){
			                alert("投票成功")
			                $("#yxyg27").attr("disabled", true); 
			               }
			              }
			              });
			    	  
			    	  }
			       
			}); 
	
	});
$("#yxyg28").click(function(){
	var phone=$("#phone").val();
	var bmzt=$("#bmzt").val();
	var grbs=$("#grbs28").val();
	var bmbsxxzx=$("#bmbsxxzx").val();
	  /*alert(bmzt==bmbsxxzx);*/
	 $.ajax({
			        type:"get",
			        url:"yztps",
			        dataType:"json", 
			         data: {phone:phone}, 
			      success:function(state){
			    	  if(state.state==0){
			    		  alert("对不起您的票已全部投完")
			    		  return;
			    	   } else {
			    		   if(bmzt==bmbsxxzx){
			    			   alert("不能给同部门投票")
			    	            return;
			    		   }
			    	   }  
			    	   
			    	  $.ajax({
			                      type:"get",
			                      url:"tpcg",
			                      dataType:"json", 
			                      data: {phone:phone,grbs:grbs},
			              success:function(state){
			               if(state.state==1){
			                alert("投票成功")
			                $("#yxyg28").attr("disabled", true); 
			               }
			              }
			              });
			    	  
			    	  }
			       
			}); 
	
	});
$("#yxyg29").click(function(){
	var phone=$("#phone").val();
	var bmzt=$("#bmzt").val();
	var grbs=$("#grbs29").val();
	var bmbsxxzx=$("#spdjzps").val();
	  /*alert(bmzt==bmbsxxzx);*/
	 $.ajax({
			        type:"get",
			        url:"yztps",
			        dataType:"json", 
			         data: {phone:phone}, 
			      success:function(state){
			    	  if(state.state==0){
			    		  alert("对不起您的票已全部投完")
			    		  return;
			    	   } else {
			    		   if(bmzt==bmbsxxzx){
			    			   alert("不能给同部门投票")
			    	            return;
			    		   }
			    	   }  
			    	   
			    	  $.ajax({
			                      type:"get",
			                      url:"tpcg",
			                      dataType:"json", 
			                      data: {phone:phone,grbs:grbs},
			              success:function(state){
			               if(state.state==1){
			                alert("投票成功")
			                $("#yxyg29").attr("disabled", true); 
			               }
			              }
			              });
			    	  
			    	  }
			       
			}); 
	
	});
$("#yxyg30").click(function(){
	var phone=$("#phone").val();
	var bmzt=$("#bmzt").val();
	var grbs=$("#grbs30").val();
	var bmbsxxzx=$("#spdjzps").val();
	  /*alert(bmzt==bmbsxxzx);*/
	 $.ajax({
			        type:"get",
			        url:"yztps",
			        dataType:"json", 
			         data: {phone:phone}, 
			      success:function(state){
			    	  if(state.state==0){
			    		  alert("对不起您的票已全部投完")
			    		  return;
			    	   } else {
			    		   if(bmzt==bmbsxxzx){
			    			   alert("不能给同部门投票")
			    	            return;
			    		   }
			    	   }  
			    	   
			    	  $.ajax({
			                      type:"get",
			                      url:"tpcg",
			                      dataType:"json", 
			                      data: {phone:phone,grbs:grbs},
			              success:function(state){
			               if(state.state==1){
			                alert("投票成功")
			                $("#yxyg30").attr("disabled", true); 
			               }
			              }
			              });
			    	  
			    	  }
			       
			}); 
	
	});
$("#yxyg31").click(function(){
	var phone=$("#phone").val();
	var bmzt=$("#bmzt").val();
	var grbs=$("#grbs31").val();
	var bmbsxxzx=$("#spdjzps").val();
	  /*alert(bmzt==bmbsxxzx);*/
	 $.ajax({
			        type:"get",
			        url:"yztps",
			        dataType:"json", 
			         data: {phone:phone}, 
			      success:function(state){
			    	  if(state.state==0){
			    		  alert("对不起您的票已全部投完")
			    		  return;
			    	   } else {
			    		   if(bmzt==bmbsxxzx){
			    			   alert("不能给同部门投票")
			    	            return;
			    		   }
			    	   }  
			    	   
			    	  $.ajax({
			                      type:"get",
			                      url:"tpcg",
			                      dataType:"json", 
			                      data: {phone:phone,grbs:grbs},
			              success:function(state){
			               if(state.state==1){
			                alert("投票成功")
			                $("#yxyg31").attr("disabled", true); 
			               }
			              }
			              });
			    	  
			    	  }
			       
			}); 
	
	});
$("#yxyg32").click(function(){
	var phone=$("#phone").val();
	var bmzt=$("#bmzt").val();
	var grbs=$("#grbs32").val();
	var bmbsxxzx=$("#ccwliu").val();
	  /*alert(bmzt==bmbsxxzx);*/
	 $.ajax({
			        type:"get",
			        url:"yztps",
			        dataType:"json", 
			         data: {phone:phone}, 
			      success:function(state){
			    	  if(state.state==0){
			    		  alert("对不起您的票已全部投完")
			    		  return;
			    	   } else {
			    		   if(bmzt==bmbsxxzx){
			    			   alert("不能给同部门投票")
			    	            return;
			    		   }
			    	   }  
			    	   
			    	  $.ajax({
			                      type:"get",
			                      url:"tpcg",
			                      dataType:"json", 
			                      data: {phone:phone,grbs:grbs},
			              success:function(state){
			               if(state.state==1){
			                alert("投票成功")
			                $("#yxyg32").attr("disabled", true); 
			               }
			              }
			              });
			    	  
			    	  }
			       
			}); 
	
	});
$("#yxyg33").click(function(){
	var phone=$("#phone").val();
	var bmzt=$("#bmzt").val();
	var grbs=$("#grbs33").val();
	var bmbsxxzx=$("#spdjzps").val();
	  /*alert(bmzt==bmbsxxzx);*/
	 $.ajax({
			        type:"get",
			        url:"yztps",
			        dataType:"json", 
			         data: {phone:phone}, 
			      success:function(state){
			    	  if(state.state==0){
			    		  alert("对不起您的票已全部投完")
			    		  return;
			    	   } else {
			    		   if(bmzt==bmbsxxzx){
			    			   alert("不能给同部门投票")
			    	            return;
			    		   }
			    	   }  
			    	   
			    	  $.ajax({
			                      type:"get",
			                      url:"tpcg",
			                      dataType:"json", 
			                      data: {phone:phone,grbs:grbs},
			              success:function(state){
			               if(state.state==1){
			                alert("投票成功")
			                $("#yxyg33").attr("disabled", true); 
			               }
			              }
			              });
			    	  
			    	  }
			       
			}); 
	
	});
$("#yxyg34").click(function(){
	var phone=$("#phone").val();
	var bmzt=$("#bmzt").val();
	var grbs=$("#grbs34").val();
	var bmbsxxzx=$("#jysyeb").val();
	  /*alert(bmzt==bmbsxxzx);*/
	 $.ajax({
			        type:"get",
			        url:"yztps",
			        dataType:"json", 
			         data: {phone:phone}, 
			      success:function(state){
			    	  if(state.state==0){
			    		  alert("对不起您的票已全部投完")
			    		  return;
			    	   } else {
			    		   if(bmzt==bmbsxxzx){
			    			   alert("不能给同部门投票")
			    	            return;
			    		   }
			    	   }  
			    	   
			    	  $.ajax({
			                      type:"get",
			                      url:"tpcg",
			                      dataType:"json", 
			                      data: {phone:phone,grbs:grbs},
			              success:function(state){
			               if(state.state==1){
			                alert("投票成功")
			                $("#yxyg34").attr("disabled", true); 
			               }
			              }
			              });
			    	  
			    	  }
			       
			}); 
	
	});
$("#yxyg35").click(function(){
	var phone=$("#phone").val();
	var bmzt=$("#bmzt").val();
	var grbs=$("#grbs35").val();
	var bmbsxxzx=$("#swgs").val();
	  /*alert(bmzt==bmbsxxzx);*/
	 $.ajax({
			        type:"get",
			        url:"yztps",
			        dataType:"json", 
			         data: {phone:phone}, 
			      success:function(state){
			    	  if(state.state==0){
			    		  alert("对不起您的票已全部投完")
			    		  return;
			    	   } else {
			    		   if(bmzt==bmbsxxzx){
			    			   alert("不能给同部门投票")
			    	            return;
			    		   }
			    	   }  
			    	   
			    	  $.ajax({
			                      type:"get",
			                      url:"tpcg",
			                      dataType:"json", 
			                      data: {phone:phone,grbs:grbs},
			              success:function(state){
			               if(state.state==1){
			                alert("投票成功")
			                $("#yxyg35").attr("disabled", true); 
			               }
			              }
			              });
			    	  
			    	  }
			       
			}); 
	
	});
$("#yxyg36").click(function(){
	var phone=$("#phone").val();
	var bmzt=$("#bmzt").val();
	var grbs=$("#grbs36").val();
	var bmbsxxzx=$("#schz").val();
	  /*alert(bmzt==bmbsxxzx);*/
	 $.ajax({
			        type:"get",
			        url:"yztps",
			        dataType:"json", 
			         data: {phone:phone}, 
			      success:function(state){
			    	  if(state.state==0){
			    		  alert("对不起您的票已全部投完")
			    		  return;
			    	   } else {
			    		   if(bmzt==bmbsxxzx){
			    			   alert("不能给同部门投票")
			    	            return;
			    		   }
			    	   }  
			    	   
			    	  $.ajax({
			                      type:"get",
			                      url:"tpcg",
			                      dataType:"json", 
			                      data: {phone:phone,grbs:grbs},
			              success:function(state){
			               if(state.state==1){
			                alert("投票成功")
			                $("#yxyg36").attr("disabled", true); 
			               }
			              }
			              });
			    	  
			    	  }
			       
			}); 
	
	});
$("#yxyg37").click(function(){
	var phone=$("#phone").val();
	var bmzt=$("#bmzt").val();
	var grbs=$("#grbs37").val();
	var bmbsxxzx=$("#ylhcgh").val();
	  /*alert(bmzt==bmbsxxzx);*/
	 $.ajax({
			        type:"get",
			        url:"yztps",
			        dataType:"json", 
			         data: {phone:phone}, 
			      success:function(state){
			    	  if(state.state==0){
			    		  alert("对不起您的票已全部投完")
			    		  return;
			    	   } else {
			    		   if(bmzt==bmbsxxzx){
			    			   alert("不能给同部门投票")
			    	            return;
			    		   }
			    	   }  
			    	   
			    	  $.ajax({
			                      type:"get",
			                      url:"tpcg",
			                      dataType:"json", 
			                      data: {phone:phone,grbs:grbs},
			              success:function(state){
			               if(state.state==1){
			                alert("投票成功")
			                $("#yxyg37").attr("disabled", true); 
			               }
			              }
			              });
			    	  
			    	  }
			       
			}); 
	
	});
$("#yxyg38").click(function(){
	var phone=$("#phone").val();
	var bmzt=$("#bmzt").val();
	var grbs=$("#grbs38").val();
	var bmbsxxzx=$("#ylhcgh").val();
	  /*alert(bmzt==bmbsxxzx);*/
	 $.ajax({
			        type:"get",
			        url:"yztps",
			        dataType:"json", 
			         data: {phone:phone}, 
			      success:function(state){
			    	  if(state.state==0){
			    		  alert("对不起您的票已全部投完")
			    		  return;
			    	   } else {
			    		   if(bmzt==bmbsxxzx){
			    			   alert("不能给同部门投票")
			    	            return;
			    		   }
			    	   }  
			    	   
			    	  $.ajax({
			                      type:"get",
			                      url:"tpcg",
			                      dataType:"json", 
			                      data: {phone:phone,grbs:grbs},
			              success:function(state){
			               if(state.state==1){
			                alert("投票成功")
			                $("#yxyg38").attr("disabled", true); 
			               }
			              }
			              });
			    	  
			    	  }
			       
			}); 
	
	});
$("#yxyg39").click(function(){
	var phone=$("#phone").val();
	var bmzt=$("#bmzt").val();
	var grbs=$("#grbs39").val();
	var bmbsxxzx=$("#zgzx").val();
	  /*alert(bmzt==bmbsxxzx);*/
	 $.ajax({
			        type:"get",
			        url:"yztps",
			        dataType:"json", 
			         data: {phone:phone}, 
			      success:function(state){
			    	  if(state.state==0){
			    		  alert("对不起您的票已全部投完")
			    		  return;
			    	   } else {
			    		   if(bmzt==bmbsxxzx){
			    			   alert("不能给同部门投票")
			    	            return;
			    		   }
			    	   }  
			    	   
			    	  $.ajax({
			                      type:"get",
			                      url:"tpcg",
			                      dataType:"json", 
			                      data: {phone:phone,grbs:grbs},
			              success:function(state){
			               if(state.state==1){
			                alert("投票成功")
			                $("#yxyg39").attr("disabled", true); 
			               }
			              }
			              });
			    	  
			    	  }
			       
			}); 
	
	});
$("#yxyg40").click(function(){
	var phone=$("#phone").val();
	var bmzt=$("#bmzt").val();
	var grbs=$("#grbs40").val();
	var bmbsxxzx=$("#spdjzps").val();
	  /*alert(bmzt==bmbsxxzx);*/
	 $.ajax({
			        type:"get",
			        url:"yztps",
			        dataType:"json", 
			         data: {phone:phone}, 
			      success:function(state){
			    	  if(state.state==0){
			    		  alert("对不起您的票已全部投完")
			    		  return;
			    	   } else {
			    		   if(bmzt==bmbsxxzx){
			    			   alert("不能给同部门投票")
			    	            return;
			    		   }
			    	   }  
			    	   
			    	  $.ajax({
			                      type:"get",
			                      url:"tpcg",
			                      dataType:"json", 
			                      data: {phone:phone,grbs:grbs},
			              success:function(state){
			               if(state.state==1){
			                alert("投票成功")
			                $("#yxyg40").attr("disabled", true); 
			               }
			              }
			              });
			    	  
			    	  }
			       
			}); 
	
	});
$("#yxyg41").click(function(){
	var phone=$("#phone").val();
	var bmzt=$("#bmzt").val();
	var grbs=$("#grbs41").val();
	var bmbsxxzx=$("#ccwliu").val();
	  /*alert(bmzt==bmbsxxzx);*/
	 $.ajax({
			        type:"get",
			        url:"yztps",
			        dataType:"json", 
			         data: {phone:phone}, 
			      success:function(state){
			    	  if(state.state==0){
			    		  alert("对不起您的票已全部投完")
			    		  return;
			    	   } else {
			    		   if(bmzt==bmbsxxzx){
			    			   alert("不能给同部门投票")
			    	            return;
			    		   }
			    	   }  
			    	   
			    	  $.ajax({
			                      type:"get",
			                      url:"tpcg",
			                      dataType:"json", 
			                      data: {phone:phone,grbs:grbs},
			              success:function(state){
			               if(state.state==1){
			                alert("投票成功")
			                $("#yxyg41").attr("disabled", true); 
			               }
			              }
			              });
			    	  
			    	  }
			       
			}); 
	
	});
$("#yxyg42").click(function(){
	var phone=$("#phone").val();
	var bmzt=$("#bmzt").val();
	var grbs=$("#grbs42").val();
	var bmbsxxzx=$("#xzfwzx").val();
	  /*alert(bmzt==bmbsxxzx);*/
	 $.ajax({
			        type:"get",
			        url:"yztps",
			        dataType:"json", 
			         data: {phone:phone}, 
			      success:function(state){
			    	  if(state.state==0){
			    		  alert("对不起您的票已全部投完")
			    		  return;
			    	   } else {
			    		   if(bmzt==bmbsxxzx){
			    			   alert("不能给同部门投票")
			    	            return;
			    		   }
			    	   }  
			    	   
			    	  $.ajax({
			                      type:"get",
			                      url:"tpcg",
			                      dataType:"json", 
			                      data: {phone:phone,grbs:grbs},
			              success:function(state){
			               if(state.state==1){
			                alert("投票成功")
			                $("#yxyg42").attr("disabled", true); 
			               }
			              }
			              });
			    	  
			    	  }
			       
			}); 
	
	});
$("#yxyg43").click(function(){
	var phone=$("#phone").val();
	var bmzt=$("#bmzt").val();
	var grbs=$("#grbs43").val();
	var bmbsxxzx=$("#spdjzps").val();
	  /*alert(bmzt==bmbsxxzx);*/
	 $.ajax({
			        type:"get",
			        url:"yztps",
			        dataType:"json", 
			         data: {phone:phone}, 
			      success:function(state){
			    	  if(state.state==0){
			    		  alert("对不起您的票已全部投完")
			    		  return;
			    	   } else {
			    		   if(bmzt==bmbsxxzx){
			    			   alert("不能给同部门投票")
			    	            return;
			    		   }
			    	   }  
			    	   
			    	  $.ajax({
			                      type:"get",
			                      url:"tpcg",
			                      dataType:"json", 
			                      data: {phone:phone,grbs:grbs},
			              success:function(state){
			               if(state.state==1){
			                alert("投票成功")
			                $("#yxyg43").attr("disabled", true); 
			               }
			              }
			              });
			    	  
			    	  }
			       
			}); 
	
	});
$("#yxyg44").click(function(){
	var phone=$("#phone").val();
	var bmzt=$("#bmzt").val();
	var grbs=$("#grbs44").val();
	var bmbsxxzx=$("#ccwliu").val();
	  /*alert(bmzt==bmbsxxzx);*/
	 $.ajax({
			        type:"get",
			        url:"yztps",
			        dataType:"json", 
			         data: {phone:phone}, 
			      success:function(state){
			    	  if(state.state==0){
			    		  alert("对不起您的票已全部投完")
			    		  return;
			    	   } else {
			    		   if(bmzt==bmbsxxzx){
			    			   alert("不能给同部门投票")
			    	            return;
			    		   }
			    	   }  
			    	   
			    	  $.ajax({
			                      type:"get",
			                      url:"tpcg",
			                      dataType:"json", 
			                      data: {phone:phone,grbs:grbs},
			              success:function(state){
			               if(state.state==1){
			                alert("投票成功")
			                $("#yxyg44").attr("disabled", true); 
			               }
			              }
			              });
			    	  
			    	  }
			       
			}); 
	
	});
$("#yxyg45").click(function(){
	var phone=$("#phone").val();
	var bmzt=$("#bmzt").val();
	var grbs=$("#grbs45").val();
	var bmbsxxzx=$("#ccwliu").val();
	  /*alert(bmzt==bmbsxxzx);*/
	 $.ajax({
			        type:"get",
			        url:"yztps",
			        dataType:"json", 
			         data: {phone:phone}, 
			      success:function(state){
			    	  if(state.state==0){
			    		  alert("对不起您的票已全部投完")
			    		  return;
			    	   } else {
			    		   if(bmzt==bmbsxxzx){
			    			   alert("不能给同部门投票")
			    	            return;
			    		   }
			    	   }  
			    	   
			    	  $.ajax({
			                      type:"get",
			                      url:"tpcg",
			                      dataType:"json", 
			                      data: {phone:phone,grbs:grbs},
			              success:function(state){
			               if(state.state==1){
			                alert("投票成功")
			                $("#yxyg45").attr("disabled", true); 
			               }
			              }
			              });
			    	  
			    	  }
			       
			}); 
	
	});
$("#yxyg46").click(function(){
	var phone=$("#phone").val();
	var bmzt=$("#bmzt").val();
	var grbs=$("#grbs46").val();
	var bmbsxxzx=$("#dkh").val();
	  /*alert(bmzt==bmbsxxzx);*/
	 $.ajax({
			        type:"get",
			        url:"yztps",
			        dataType:"json", 
			         data: {phone:phone}, 
			      success:function(state){
			    	  if(state.state==0){
			    		  alert("对不起您的票已全部投完")
			    		  return;
			    	   } else {
			    		   if(bmzt==bmbsxxzx){
			    			   alert("不能给同部门投票")
			    	            return;
			    		   }
			    	   }  
			    	   
			    	  $.ajax({
			                      type:"get",
			                      url:"tpcg",
			                      dataType:"json", 
			                      data: {phone:phone,grbs:grbs},
			              success:function(state){
			               if(state.state==1){
			                alert("投票成功")
			                $("#yxyg46").attr("disabled", true); 
			               }
			              }
			              });
			    	  
			    	  }
			       
			}); 
	
	});
$("#yxyg47").click(function(){
	var phone=$("#phone").val();
	var bmzt=$("#bmzt").val();
	var grbs=$("#grbs47").val();
	var bmbsxxzx=$("#bmbsxxzx").val();
	  /*alert(bmzt==bmbsxxzx);*/
	 $.ajax({
			        type:"get",
			        url:"yztps",
			        dataType:"json", 
			         data: {phone:phone}, 
			      success:function(state){
			    	  if(state.state==0){
			    		  alert("对不起您的票已全部投完")
			    		  return;
			    	   } else {
			    		   if(bmzt==bmbsxxzx){
			    			   alert("不能给同部门投票")
			    	            return;
			    		   }
			    	   }  
			    	   
			    	  $.ajax({
			                      type:"get",
			                      url:"tpcg",
			                      dataType:"json", 
			                      data: {phone:phone,grbs:grbs},
			              success:function(state){
			               if(state.state==1){
			                alert("投票成功")
			                $("#yxyg47").attr("disabled", true); 
			               }
			              }
			              });
			    	  
			    	  }
			       
			}); 
	
	});
$("#yxyg48").click(function(){
	var phone=$("#phone").val();
	var bmzt=$("#bmzt").val();
	var grbs=$("#grbs48").val();
	var bmbsxxzx=$("#cwzx").val();
	  /*alert(bmzt==bmbsxxzx);*/
	 $.ajax({
			        type:"get",
			        url:"yztps",
			        dataType:"json", 
			         data: {phone:phone}, 
			      success:function(state){
			    	  if(state.state==0){
			    		  alert("对不起您的票已全部投完")
			    		  return;
			    	   } else {
			    		   if(bmzt==bmbsxxzx){
			    			   alert("不能给同部门投票")
			    	            return;
			    		   }
			    	   }  
			    	   
			    	  $.ajax({
			                      type:"get",
			                      url:"tpcg",
			                      dataType:"json", 
			                      data: {phone:phone,grbs:grbs},
			              success:function(state){
			               if(state.state==1){
			                alert("投票成功")
			                $("#yxyg48").attr("disabled", true); 
			               }
			              }
			              });
			    	  
			    	  }
			       
			}); 
	
	});
$("#yxyg49").click(function(){
	var phone=$("#phone").val();
	var bmzt=$("#bmzt").val();
	var grbs=$("#grbs49").val();
	var bmbsxxzx=$("#cgzx").val();
	  /*alert(bmzt==bmbsxxzx);*/
	 $.ajax({
			        type:"get",
			        url:"yztps",
			        dataType:"json", 
			         data: {phone:phone}, 
			      success:function(state){
			    	  if(state.state==0){
			    		  alert("对不起您的票已全部投完")
			    		  return;
			    	   } else {
			    		   if(bmzt==bmbsxxzx){
			    			   alert("不能给同部门投票")
			    	            return;
			    		   }
			    	   }  
			    	   
			    	  $.ajax({
			                      type:"get",
			                      url:"tpcg",
			                      dataType:"json", 
			                      data: {phone:phone,grbs:grbs},
			              success:function(state){
			               if(state.state==1){
			                alert("投票成功")
			                $("#yxyg49").attr("disabled", true); 
			               }
			              }
			              });
			    	  
			    	  }
			       
			}); 
	
	});
$("#yxyg50").click(function(){
	var phone=$("#phone").val();
	var bmzt=$("#bmzt").val();
	var grbs=$("#grbs50").val();
	var bmbsxxzx=$("#ccwliu").val();
	  /*alert(bmzt==bmbsxxzx);*/
	 $.ajax({
			        type:"get",
			        url:"yztps",
			        dataType:"json", 
			         data: {phone:phone}, 
			      success:function(state){
			    	  if(state.state==0){
			    		  alert("对不起您的票已全部投完")
			    		  return;
			    	   } else {
			    		   if(bmzt==bmbsxxzx){
			    			   alert("不能给同部门投票")
			    	            return;
			    		   }
			    	   }  
			    	   
			    	  $.ajax({
			                      type:"get",
			                      url:"tpcg",
			                      dataType:"json", 
			                      data: {phone:phone,grbs:grbs},
			              success:function(state){
			               if(state.state==1){
			                alert("投票成功")
			                $("#yxyg50").attr("disabled", true); 
			               }
			              }
			              });
			    	  
			    	  }
			       
			}); 
	
	});
$("#yxyg51").click(function(){
	var phone=$("#phone").val();
	var bmzt=$("#bmzt").val();
	var grbs=$("#grbs51").val();
	var bmbsxxzx=$("#xzfwzx").val();
	  /*alert(bmzt==bmbsxxzx);*/
	 $.ajax({
			        type:"get",
			        url:"yztps",
			        dataType:"json", 
			         data: {phone:phone}, 
			      success:function(state){
			    	  if(state.state==0){
			    		  alert("对不起您的票已全部投完")
			    		  return;
			    	   } else {
			    		   if(bmzt==bmbsxxzx){
			    			   alert("不能给同部门投票")
			    	            return;
			    		   }
			    	   }  
			    	   
			    	  $.ajax({
			                      type:"get",
			                      url:"tpcg",
			                      dataType:"json", 
			                      data: {phone:phone,grbs:grbs},
			              success:function(state){
			               if(state.state==1){
			                alert("投票成功")
			                $("#yxyg51").attr("disabled", true); 
			               }
			              }
			              });
			    	  
			    	  }
			       
			}); 
	
	});
$("#yxyg52").click(function(){
	var phone=$("#phone").val();
	var bmzt=$("#bmzt").val();
	var grbs=$("#grbs52").val();
	var bmbsxxzx=$("#jysyeb").val();
	  /*alert(bmzt==bmbsxxzx);*/
	 $.ajax({
			        type:"get",
			        url:"yztps",
			        dataType:"json", 
			         data: {phone:phone}, 
			      success:function(state){
			    	  if(state.state==0){
			    		  alert("对不起您的票已全部投完")
			    		  return;
			    	   } else {
			    		   if(bmzt==bmbsxxzx){
			    			   alert("不能给同部门投票")
			    	            return;
			    		   }
			    	   }  
			    	   
			    	  $.ajax({
			                      type:"get",
			                      url:"tpcg",
			                      dataType:"json", 
			                      data: {phone:phone,grbs:grbs},
			              success:function(state){
			               if(state.state==1){
			                alert("投票成功")
			                $("#yxyg52").attr("disabled", true); 
			               }
			              }
			              });
			    	  
			    	  }
			       
			}); 
	
	});
$("#yxyg53").click(function(){
	var phone=$("#phone").val();
	var bmzt=$("#bmzt").val();
	var grbs=$("#grbs53").val();
	var bmbsxxzx=$("#jysyyb").val();
	  /*alert(bmzt==bmbsxxzx);*/
	 $.ajax({
			        type:"get",
			        url:"yztps",
			        dataType:"json", 
			         data: {phone:phone}, 
			      success:function(state){
			    	  if(state.state==0){
			    		  alert("对不起您的票已全部投完")
			    		  return;
			    	   } else {
			    		   if(bmzt==bmbsxxzx){
			    			   alert("不能给同部门投票")
			    	            return;
			    		   }
			    	   }  
			    	   
			    	  $.ajax({
			                      type:"get",
			                      url:"tpcg",
			                      dataType:"json", 
			                      data: {phone:phone,grbs:grbs},
			              success:function(state){
			               if(state.state==1){
			                alert("投票成功")
			                $("#yxyg53").attr("disabled", true); 
			               }
			              }
			              });
			    	  
			    	  }
			       
			}); 
	
	});
$("#yxyg54").click(function(){
	var phone=$("#phone").val();
	var bmzt=$("#bmzt").val();
	var grbs=$("#grbs54").val();
	var bmbsxxzx=$("#swgs").val();
	  /*alert(bmzt==bmbsxxzx);*/
	 $.ajax({
			        type:"get",
			        url:"yztps",
			        dataType:"json", 
			         data: {phone:phone}, 
			      success:function(state){
			    	  if(state.state==0){
			    		  alert("对不起您的票已全部投完")
			    		  return;
			    	   } else {
			    		   if(bmzt==bmbsxxzx){
			    			   alert("不能给同部门投票")
			    	            return;
			    		   }
			    	   }  
			    	   
			    	  $.ajax({
			                      type:"get",
			                      url:"tpcg",
			                      dataType:"json", 
			                      data: {phone:phone,grbs:grbs},
			              success:function(state){
			               if(state.state==1){
			                alert("投票成功")
			                $("#yxyg54").attr("disabled", true); 
			               }
			              }
			              });
			    	  
			    	  }
			       
			}); 
	
	});
$("#yxyg55").click(function(){
	var phone=$("#phone").val();
	var bmzt=$("#bmzt").val();
	var grbs=$("#grbs55").val();
	var bmbsxxzx=$("#zgzx").val();
	  /*alert(bmzt==bmbsxxzx);*/
	 $.ajax({
			        type:"get",
			        url:"yztps",
			        dataType:"json", 
			         data: {phone:phone}, 
			      success:function(state){
			    	  if(state.state==0){
			    		  alert("对不起您的票已全部投完")
			    		  return;
			    	   } else {
			    		   if(bmzt==bmbsxxzx){
			    			   alert("不能给同部门投票")
			    	            return;
			    		   }
			    	   }  
			    	   
			    	  $.ajax({
			                      type:"get",
			                      url:"tpcg",
			                      dataType:"json", 
			                      data: {phone:phone,grbs:grbs},
			              success:function(state){
			               if(state.state==1){
			                alert("投票成功")
			                $("#yxyg55").attr("disabled", true); 
			               }
			              }
			              });
			    	  
			    	  }
			       
			}); 
	
	});
$("#yxyg56").click(function(){
	var phone=$("#phone").val();
	var bmzt=$("#bmzt").val();
	var grbs=$("#grbs56").val();
	var bmbsxxzx=$("#cwzx").val();
	  /*alert(bmzt==bmbsxxzx);*/
	 $.ajax({
			        type:"get",
			        url:"yztps",
			        dataType:"json", 
			         data: {phone:phone}, 
			      success:function(state){
			    	  if(state.state==0){
			    		  alert("对不起您的票已全部投完")
			    		  return;
			    	   } else {
			    		   if(bmzt==bmbsxxzx){
			    			   alert("不能给同部门投票")
			    	            return;
			    		   }
			    	   }  
			    	   
			    	  $.ajax({
			                      type:"get",
			                      url:"tpcg",
			                      dataType:"json", 
			                      data: {phone:phone,grbs:grbs},
			              success:function(state){
			               if(state.state==1){
			                alert("投票成功")
			                $("#yxyg56").attr("disabled", true); 
			               }
			              }
			              });
			    	  
			    	  }
			       
			}); 
	
	});
$("#yxyg57").click(function(){
	var phone=$("#phone").val();
	var bmzt=$("#bmzt").val();
	var grbs=$("#grbs57").val();
	var bmbsxxzx=$("#dkh").val();
	  /*alert(bmzt==bmbsxxzx);*/
	 $.ajax({
			        type:"get",
			        url:"yztps",
			        dataType:"json", 
			         data: {phone:phone}, 
			      success:function(state){
			    	  if(state.state==0){
			    		  alert("对不起您的票已全部投完")
			    		  return;
			    	   } else {
			    		   if(bmzt==bmbsxxzx){
			    			   alert("不能给同部门投票")
			    	            return;
			    		   }
			    	   }  
			    	   
			    	  $.ajax({
			                      type:"get",
			                      url:"tpcg",
			                      dataType:"json", 
			                      data: {phone:phone,grbs:grbs},
			              success:function(state){
			               if(state.state==1){
			                alert("投票成功")
			                $("#yxyg57").attr("disabled", true); 
			               }
			              }
			              });
			    	  
			    	  }
			       
			}); 
	
	});
$("#yxyg58").click(function(){
	var phone=$("#phone").val();
	var bmzt=$("#bmzt").val();
	var grbs=$("#grbs58").val();
	var bmbsxxzx=$("#bmbsxxzx").val();
	  /*alert(bmzt==bmbsxxzx);*/
	 $.ajax({
			        type:"get",
			        url:"yztps",
			        dataType:"json", 
			         data: {phone:phone}, 
			      success:function(state){
			    	  if(state.state==0){
			    		  alert("对不起您的票已全部投完")
			    		  return;
			    	   } else {
			    		   if(bmzt==bmbsxxzx){
			    			   alert("不能给同部门投票")
			    	            return;
			    		   }
			    	   }  
			    	   
			    	  $.ajax({
			                      type:"get",
			                      url:"tpcg",
			                      dataType:"json", 
			                      data: {phone:phone,grbs:grbs},
			              success:function(state){
			               if(state.state==1){
			                alert("投票成功")
			                $("#yxyg58").attr("disabled", true); 
			               }
			              }
			              });
			    	  
			    	  }
			       
			}); 
	
	});
$("#yxyg59").click(function(){
	var phone=$("#phone").val();
	var bmzt=$("#bmzt").val();
	var grbs=$("#grbs59").val();
	var bmbsxxzx=$("#xzfwzx").val();
	  /*alert(bmzt==bmbsxxzx);*/
	 $.ajax({
			        type:"get",
			        url:"yztps",
			        dataType:"json", 
			         data: {phone:phone}, 
			      success:function(state){
			    	  if(state.state==0){
			    		  alert("对不起您的票已全部投完")
			    		  return;
			    	   } else {
			    		   if(bmzt==bmbsxxzx){
			    			   alert("不能给同部门投票")
			    	            return;
			    		   }
			    	   }  
			    	   
			    	  $.ajax({
			                      type:"get",
			                      url:"tpcg",
			                      dataType:"json", 
			                      data: {phone:phone,grbs:grbs},
			              success:function(state){
			               if(state.state==1){
			                alert("投票成功")
			                $("#yxyg59").attr("disabled", true); 
			               }
			              }
			              });
			    	  
			    	  }
			       
			}); 
	
	});
$("#yxyg60").click(function(){
	var phone=$("#phone").val();
	var bmzt=$("#bmzt").val();
	var grbs=$("#grbs60").val();
	var bmbsxxzx=$("#ylhcjr").val();
	  /*alert(bmzt==bmbsxxzx);*/
	 $.ajax({
			        type:"get",
			        url:"yztps",
			        dataType:"json", 
			         data: {phone:phone}, 
			      success:function(state){
			    	  if(state.state==0){
			    		  alert("对不起您的票已全部投完")
			    		  return;
			    	   } else {
			    		   if(bmzt==bmbsxxzx){
			    			   alert("不能给同部门投票")
			    	            return;
			    		   }
			    	   }  
			    	   
			    	  $.ajax({
			                      type:"get",
			                      url:"tpcg",
			                      dataType:"json", 
			                      data: {phone:phone,grbs:grbs},
			              success:function(state){
			               if(state.state==1){
			                alert("投票成功")
			                $("#yxyg60").attr("disabled", true); 
			               }
			              }
			              });
			    	  
			    	  }
			       
			}); 
	
	});
$("#yxyg61").click(function(){
	var phone=$("#phone").val();
	var bmzt=$("#bmzt").val();
	var grbs=$("#grbs61").val();
	var bmbsxxzx=$("#ylhcjr").val();
	  /*alert(bmzt==bmbsxxzx);*/
	 $.ajax({
			        type:"get",
			        url:"yztps",
			        dataType:"json", 
			         data: {phone:phone}, 
			      success:function(state){
			    	  if(state.state==0){
			    		  alert("对不起您的票已全部投完")
			    		  return;
			    	   } else {
			    		   if(bmzt==bmbsxxzx){
			    			   alert("不能给同部门投票")
			    	            return;
			    		   }
			    	   }  
			    	   
			    	  $.ajax({
			                      type:"get",
			                      url:"tpcg",
			                      dataType:"json", 
			                      data: {phone:phone,grbs:grbs},
			              success:function(state){
			               if(state.state==1){
			                alert("投票成功")
			                $("#yxyg61").attr("disabled", true); 
			               }
			              }
			              });
			    	  
			    	  }
			       
			}); 
	
	});
$("#yxyg62").click(function(){
	var phone=$("#phone").val();
	var bmzt=$("#bmzt").val();
	var grbs=$("#grbs62").val();
	var bmbsxxzx=$("#zgzx").val();
	  /*alert(bmzt==bmbsxxzx);*/
	 $.ajax({
			        type:"get",
			        url:"yztps",
			        dataType:"json", 
			         data: {phone:phone}, 
			      success:function(state){
			    	  if(state.state==0){
			    		  alert("对不起您的票已全部投完")
			    		  return;
			    	   } else {
			    		   if(bmzt==bmbsxxzx){
			    			   alert("不能给同部门投票")
			    	            return;
			    		   }
			    	   }  
			    	   
			    	  $.ajax({
			                      type:"get",
			                      url:"tpcg",
			                      dataType:"json", 
			                      data: {phone:phone,grbs:grbs},
			              success:function(state){
			               if(state.state==1){
			                alert("投票成功")
			                $("#yxyg62").attr("disabled", true); 
			               }
			              }
			              });
			    	  
			    	  }
			       
			}); 
	
	});
