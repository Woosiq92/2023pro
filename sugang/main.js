
function checkLog(){
	if(document.getElementById("id").value == ""){
		alert("아이디를 입력하세요")
	return ;
		}
	if(document.getElementById("pw").value ==""){
		alert("비밀번호를 입력해주세요")
		return ;
	}
	if(document.getElementById("pw").value.length <3){
		alert("3자리 이상 입력하세요     입력한 숫자 갯수: "+document.getElementById("pw").value.length)
		return ;
	}	
	if(document.getElementById("re_pw").value ==""){
		alert("확인 비밀번호를 입력해주세요")
		return ;
	}
	if(document.getElementById("pw").value !== document.getElementById("re_pw").value ){
				alert("입력하신 비밀번호와 재 입력한 비밀번호가 일치하지 않습니다. 확인하세요.")
				return;
				}	 
	if(document.getElementById("nam").value == ""){
			alert("이름을 입력하세요")
		return ;
			}
			
	else alert(document.getElementById("id").value+"님 반갑습니다.")
	return(location.href='registration.html')
};