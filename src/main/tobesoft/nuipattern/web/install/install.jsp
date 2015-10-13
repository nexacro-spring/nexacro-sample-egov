<%@ page language="java" contentType="text/html; charset=EUC-KR" pageEncoding="UTF-8"%>
<%
  String strChk = request.getParameter("getChk");
%>
<HTML>
<HEAD>
<TITLE>넥사크로 통합페키지 모듈</TITLE>
<meta http-equiv="Content-Type" content="text/html; charset=euc-kr">
<meta http-equiv="X-UA-Compatible" content="requiresActiveX=true">
<SCRIPT LANGUAGE="JavaScript"> 

var pKey = "nuipattern";
var Server_Path = "http://" + window.location.host;	//사용하는 서버 주소
var prj_Path = "http://" + window.location.host + "/nexacro_able_sample/nuipattern/";	//사용하는 서버 주소
var bOnError = false;
var NEXACRO_CAB_VER = "2015,9,1,1";
function fn_objectOnError() {

	bOnError = true;
}

function fn_launchCall()
{
var chk = '<%=strChk%>';

if(bOnError == false) {  
	

	if(chk == "runtime")  //전용브라우저
	{
		 document.getElementById("title").style.display = "block";	
	     nexacrolauncherax14.key = "nuipattern_runtime";
	     nexacrolauncherax14.bjson = prj_Path+"start.json";
	     nexacrolauncherax14.makeshortcut("nuipattern", prj_Path + "install/img/xicon2.ico", "desktop","0");
	//     nexacrolauncherax14.onlyone = true;
	     nexacrolauncherax14.splashimage = prj_Path+"install/img/blank.gif";
	     nexacrolauncherax14.launch();
         setInterval('fn_close()',200);
	
	} else if(chk =='ie'){    //임베디드
	    
		 document.getElementById("title").style.display = "none";		
		 /* nexacrolauncherax14.key = "nexacro_ie";
		 nexacrolauncherax14.bjson = Server_Path+"/nexacro/start.json";
	     nexacrolauncherax14.splashimage =Server_Path+"/nexacro/Install/img/loading.gif";
 */
      window.location.href = "./nexacroax14.html";
    	 //setInterval('setlocation()',1000);
     	
		 
	}
 }
	
}

function setlocation()
{
	 window.location.href = "./nexacroax14.html";
}

function fn_close()
{
  if(navigator.appVersion.indexOf("MSIE 7.") >= 0 || navigator.appVersion.indexOf("MSIE 8.") >= 0  ||
	  navigator.appVersion.indexOf("MSIE 9.") >= 0 || navigator.appVersion.indexOf("MSIE 10.") >=0  || 
	  navigator.appVersion.indexOf("Trident") >= 0  ) {
	
	    window.top.open('about:blank','_self').close();
  } else {
		
		  window.top.opener = self;
	      self.close();
		
	}
}


</SCRIPT> 
<style type="text/css">
html, body{ margin:0; padding:0; height:100%; width:1920px; }

</style>
</HEAD>
<BODY onload ="fn_launchCall()">

<OBJECT ID="nexacrolauncherax14" CLASSID="CLSID:A7969122-0BB8-452A-93C9-72641B76CFB7" 
        width="0" height="0" CODEBASE="./download/nexacro14_Launcher.cab#version='+NEXACRO_CAB_VER+'" onError="fn_objectOnError()">	
</OBJECT>
<OBJECT ID="nexacroax14" CLASSID="CLSID:6DB5422D-536F-4B80-B32C-16BEA0971512" 
        width="0" height="0" CODEBASE="./download/nexacro14_SetupEngine.cab#version='+NEXACRO_CAB_VER+'" onError="fn_objectOnError()">
</OBJECT>
<div id="title" name="title" style="position:absolute;left:0;top:0;z-index:1; display:none;width:100%; height:100%;margin:0 auto;">
    <table border="0" cellpadding="0" cellspacing="0" width="100%" height="100%">
        <tr>
              <td align="center">
               <iframe name="installFrame" id="installFrame" src="img.html" frameborder="0" width="100%" height="300" scrolling="no" align="center" display="none" ></iframe>
               </td>
        </tr>
    </table>
</div>
</BODY>
</HTML>