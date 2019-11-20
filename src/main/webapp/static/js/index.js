var datas = [{dept: "行政服务中心",
deptno: "50",
id: 1,
introduction: "绩效考核",
ketoupiaoshu: 55,
motto: "工人阶级",
name: "张三",
password: 8782,
phoneno: "3222222",
photoURL: "F:\1573788427460xuyaop.jpg",
wxid: null},{dept: "行政服务中心",
deptno: "50",
id: 1,
introduction: "绩效考核",
ketoupiaoshu: 55,
motto: "工人阶级",
name: "张四",
password: 8782,
phoneno: "3222222",
photoURL: "F:\1573788427460xuyaop.jpg",
wxid: null},{dept: "行政服务中心",
deptno: "50",
id: 1,
introduction: "绩效考核",
ketoupiaoshu: 55,
motto: "工人阶级",
name: "张五",
password: 8782,
phoneno: "3222222",
photoURL: "F:\1573788427460xuyaop.jpg",
wxid: null}]

var datass = [];
$('.addImg').click(function(){
	$('#fileImg').click();
	$('.showImg img').show();
})

//添加图片
$("select").change(function(){
	$('#selectNo').val($('select').get(0).selectedIndex+1);
})
//设置隐藏域下拉选择的值
$("input:file").change(function(){
    var reader = new FileReader();		//获取一个FileReader类
    var file = this.files[0];			//获取用户选择的文件
    reader.readAsDataURL(file);			//开始读取指定Blob（二进制文件）中的内容。一旦完成，立即触发 loadend 事件，并且该对象的 result 属性中将包含一个 data: URL 格式的字符串以表示所读取文件的内容。
    reader.onloadend = function(){
        $("img").attr("src", reader.result);
    }
})
//选择图片后展示

    $(function () {
    	var options = {
    		success: function (data) {
		$(".login-dl dl").each(function(i,e){
				var values = '';
			if($(e).find('input').length != 0){
				values =$(e).find('input').val();
		
			}else if($(e).find('textarea').length != 0){
				values = $(e).find('textarea').val();
			}
		    if(values==""){
		      alert("输入框不能为空");
		      return false
		   } 
		});
    		}
    	};
    	$("#form1").ajaxForm(options);
    });
    
//提交信息不能为空
$('.popup-mask').click(function(){
	$('.popup').hide()
})
$('.btn').click(function(){
	var param = $('.search').val();
	$('.search-list tbody').text('');
	if( param == ''){
		alert('请填写搜索信息');
	}else{
	$('.popup').show();
	$.ajax({
        type: "get",
        dataType: "json",//
        url: "/wxtp/adminselect",
        data: {param:param},
        success: function (data) {
            console.log("data");
        },
        error:function (err) {
            console.log("err");
        }
    });
    
	if(datas == ''){
		$('.search-list').children().remove();
		$('.search-list').find('table').hide();
		$('.search-list').css('width','80px');
		var str = '<div class="noPeople">查无此人</div>'
		$('.search-list').append(str);
	}
    $(datas).each(function(i,e){
    var str = '<tr data-index="${i}"><td>${i}</td><td>${e.name}</td><td>${e.dept}</td><td>${e.phoneno}</td><td><button class="tablebtn modification">修改</button><button class="tablebtn delete">删除</button></td></tr>';
		$('.search-list tbody').append(str);    		
		str = '';
    })
    
	}
});

$('.search-list').on('click','.modification',function(){
	 
	var index = $(this).parents('tr').data('index');
	$('.popup').hide();
	$('.login-dl dl').find('#username').val(datas[index].name);
	$('.login-dl dl').find('#username').attr('disabled','disabled');
	$('.login-dl dl').find('#userDept').val(datas[index].dept);
	$('.login-dl dl').find('#selectNo').val(datas[index].deptno);
	$('.login-dl dl').find('#introduction').val(datas[index].introduction);
	$('.login-dl dl').find('#voteNumber').val(datas[index].ketoupiaoshu);
	$('.login-dl dl').find('#campaignSlogan').val(datas[index].motto);
	$('.login-dl dl').find('#userPhone').val(datas[index].phoneno);
	$('.showImg').find('img').attr('src',datas[index].photoURL);
	$('.showImg').find('.fileImg').attr('src',datas[index].photoURL);
	$('.showImg').find('img').show();
	$('.login-dl').find("#state").val(datas[index].id)
    	
})
//弹出框点击修改
$('.search-list').on('click','.delete',function(){
	var index = $(this).parents('tr').data('index');
	var answer = confirm('请问您确定删除该数据么？');
	if(answer){
		$('.popup').hide();
	$.ajax({
        type: "get",
        dataType: "json",//
        url: "",
        data: index,
        success: function (data) {
            console.log("data");
        },
        error:function (err) {
            console.log("err");
        }
    });
	}
	
    
    
})
//弹出框点击删除

function eachdata(add,state){
	$('.login-dl').find('dl').each(function(index,item){
		if($(item).find('input').length != 0){
			$(item).find('input').val('');
		}else if($(item).find('select').length != 0){
			$(item).find('select').val(0)
		}else if($(item).find('textarea').length != 0){
			$(item).find('textarea').val('')
		}else{
			console.log(index,item);
		}
	})
}

$('.clear').click(function(){
	eachdata();
	$('.login-dl dl').find('#username').attr('disabled');
})





