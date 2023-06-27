function globalSearch(){
	var allPage=['about-us','career','contact-us','gallery','history','index','news','partner-clients','project','services'];
	var keyWord=[['关于我们','公司简介','万峰自动化','企业简介'],
	['职位','应聘','招募','招聘','加入','找工作','求职','简历','岗位','职业'],
	['联系方式','报价','地址','电话','地图','邮箱','商业合作','邮件','热线'],
	['相册','画廊','图片'],
	['历史','经历','历程'],
	['主页','首页'],
	['动态','新闻','最近发生事情','活动'],
	['伙伴','品牌'],
	['项目','案例','解决方案'],
	['业务范围','服务','产品']]
	arr=[];
	var link = "";
	var wd = document.getElementsByName("globalSearch")[0].value;
	for(var i =0;i<keyWord.length;i++){
		for(var j=0;j<keyWord[i].length;j++){
			if(keyWord[i][j].indexOf(wd)>=0){
				arr.push(allPage[i])
				break;
			}
		}
	}
	if(arr.length>0){
		window.open(arr[0]+'.html')
	}else{
		window.open('404-page.html')
	}
}
function globalSearchEn(){
	var allPage=['about-us-en','career-en','contact-us-en','gallery-en','history-en','index-en','news-en','partner-clients-en','project-en','services-en'];
	var keyWord=[['about us','about','About','wanfeng','ABOUT US','ABOUT','WANFENG','us','US','introduction','INTRODUCTION','Introduction','Wanfeng'],
	['career','CAREER','recruitment','Recruitment','RECRUITMENT','Career','job','JOB','jobs','Jobs'],
	['contact us','CONTACT US','contact','Contact','quote','QUOTE','Quote','address','Address','ADDRESS','Map','map','MAP','PHONE','phone','Phone'],
	['gallery','Gallery','GALLERY','PICTURE','picture','Picture'],
	['history','History','HISTORY','expierence','EXPIERENCE','Expierence'],
	['Home','home','HOME','index','Index','INDEX'],
	['news','News','NEWS','Post','post','POST','Posts','POSTS','posts'],
	['partner','Partner','PARTNER','client','CLIENT','Client','clients','CLIENTS','Clients'],
	['project','PROJECT','Project','projects','PROJECTS','Projects'],
	['service','SERVICE','Service','services','SERVICES','Services','product','PRODUCT','Product','products','PRODUCTS','Products']]
	arr=[];
	var link = "";
	var wd = document.getElementsByName("globalSearchEn")[0].value;
	for(var i =0;i<keyWord.length;i++){
		for(var j=0;j<keyWord[i].length;j++){
			if(keyWord[i][j]==wd){
				arr.push(allPage[i])
				break;
			}
		}
	}
	if(arr.length>0){
		window.open(arr[0]+'.html')
	}else{
		window.open('404-page-en.html')
	}
}

function submitMessage(){
	var email=document.getElementsByName("email")[0].value;
	var phone=document.getElementsByName("phone")[0].value;
	var name=document.getElementsByName("name")[0].value;
	var message=document.getElementsByName("message")[0].value;
	var link = "mailto:business@gzwfauto.com?subject="+'商业合作 '+email+' '+phone+' '+name+'&body='+message;
	window.open(link); 
}
function submitMail(){
	var email=document.getElementsByName("EMAIL")[0].value;
	var link="mailto:business@gzwfauto.com?subject="+'商业合作 '+email;
	window.open(link);
}
function submitQuote(){
	var email=document.getElementsByName("email")[0].value;
	var phone=document.getElementsByName("phone")[0].value;
	var name=document.getElementsByName("name")[0].value;
	var link="mailto:business@gzwfauto.com?subject="+'商业合作 '+email+' '+phone+' '+name;
	window.open(link);
}