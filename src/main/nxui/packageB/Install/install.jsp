<%@ page language="java" contentType="text/html; charset=EUC-KR" pageEncoding="UTF-8"%>
<%
  String reqArg = request.getParameter("reqArg");
%>
<HTML>
<HEAD>
<TITLE>넥사크로페키지B배포</TITLE>
<link id="favicon" rel="shortcut icon" href="./img/nexacro.ico">
<meta http-equiv="Content-Type" content="text/html; charset=euc-kr">
<meta http-equiv="X-UA-Compatible" content="requiresActiveX=true">
<meta name="viewport" content="user-scalable=1, initial-scale=1.0, width=device-width, target-densitydpi=device-dpi"/>
<SCRIPT LANGUAGE="JavaScript"> 

var pKey = "nexacro";
var Server_Path = "http://" + window.location.host;	//사용하는 서버 주소
var prj_Path = "http://" + window.location.host + ":8080/deploy/";	//사용하는 서버 주소
var bOnError = false;
var NEXACRO_CAB_VER = "2015,9,22,1";

function fn_objectOnError() {

	bOnError = true;
}

function fn_launchCall()
{

	var reqArg = '<%=reqArg%>';
  
  if(isBrowser()=="Ie" && bOnError == false)
   {
	
        alert("정상적으로 설치 되었습니다.");
  }
  else  
  {

    //plugin 설치페이지 이동
    // location.href = "./Download/nexacro14_SetupEngine.exe";
    var bInstallXLauncherPlugin = false;
    var bInstallXPlatformPlugin = false;
    
    for (var i=0; i<navigator.plugins.length; i++)
    {

  //window.console.log(navigator.plugins[i].name + ":" + navigator.plugins[i].filename + ":" + navigator.plugins[i][0].type.toLowerCase());

      if (navigator.plugins[i].name == "nexacro platform 14")
      {

          if (navigator.plugins[i].filename == "npnexacrolauncher14.dll")
          {
            bInstallXLauncherPlugin = true;
          }

          if (navigator.plugins[i][0].type.toLowerCase() == "application/nexacro14-plugin")
          {

            bInstallXPlatformPlugin = true;
          }     
      
      }
    }


     console.log(bInstallXLauncherPlugin + " ::::>>>>>>> " + bInstallXPlatformPlugin);
    if (!(bInstallXLauncherPlugin && bInstallXPlatformPlugin))
    {
      alert("Please install nexacro platform Plugin and restart browser");
      location.href = "./Download/nexacro14_SetupEngine.exe";
    }
    else
    {


    
    }

  }
	
}

//runtime 실행
function run_nexacro()
{
       document.getElementById("title").style.display = "block";  
       nexacrolauncherax14.key = "packageB";
       nexacrolauncherax14.bjson = prj_Path+"start.json";
       nexacrolauncherax14.makeshortcut("nxipm", prj_Path + "Install/img/xicon2.ico", "desktop","0");
       nexacrolauncherax14.splashimage = prj_Path+"Install/img/blank.gif";
       nexacrolauncherax14.onlyone = true;
  
       nexacrolauncherax14.launch();
         setInterval('fn_close()',200);
}

//ie Embeded 실행
function run_ieEmbeded(){
       document.getElementById("title").style.display = "none";   
}

//html5 실행
function run_html5(){

}


//navigator 버튼 클릭
function btn_onclick(e)
{
    var id=e.getAttribute("id");
 
      switch(id){
        case "runtime":

          break;
        
        case "html5":

          break;
        case "refresh":
        window.top.location.reload(true);

          break;
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

/**
 * 브라우저 체크
 * @return msie8.0
 * @example
 * @memberOf public
 */
function isBrowser()
{
    var agt = navigator.userAgent.toLowerCase();

    if (agt.indexOf("chrome") != -1) return 'Chrome';
    if (agt.indexOf("opera") != -1) return 'Opera';
    if (agt.indexOf("staroffice") != -1) return 'Star Office';
    if (agt.indexOf("webtv") != -1) return 'WebTV';
    if (agt.indexOf("beonex") != -1) return 'Beonex';
    if (agt.indexOf("chimera") != -1) return 'Chimera';
    if (agt.indexOf("netpositive") != -1) return 'NetPositive';
    if (agt.indexOf("phoenix") != -1) return 'Phoenix';
    if (agt.indexOf("firefox") != -1) return 'Firefox';
    if (agt.indexOf("safari") != -1) return 'Safari';
    if (agt.indexOf("skipstone") != -1) return 'SkipStone';
    if (agt.indexOf("trident") != -1) return 'Ie';
    if (agt.indexOf("netscape") != -1) return 'Netscape';
    if (agt.indexOf("mozilla/5.0") != -1) return 'Mozilla';

}



</SCRIPT> 
<style type="text/css">
html, body { margin: 0; padding: 0;}
#header{
    overflow:hidden;
    overflow-x:hidden;
    overflow-y:hidden;
    width:100%;
    height:30px;
    position:absolute;
    top:0x;
    left:0px;
    right:0px;
    margin:0 auto;
	background:url(img/img_topbg.png) repeat-x;
    background-color: #2a5597;
	-webkit-box-shadow: 0 1px 1px rgba(0,0,0,0.3), -1px 1px 1px rgba(0,0,0,0.2);
	-moz-box-shadow: 0 1px 1px rgba(0,0,0,0.3), -1px 1px 1px rgba(0,0,0,0.2);
	box-shadow: 0 1px 1px rgba(0,0,0,0.3), -1px 1px 1px rgba(0,0,0,0.2);

  
}
#header_sub{
overflow:hidden;
    overflow-x:hidden;
    overflow-y:hidden;
    width:400px;
    height:30px;
    position:absolute;
    top:0x;   
    right:0px;
    align :right;
    margin:0 auto;
    background-color: red;
}
#bglogo{
overflow:hidden;overflow-x:hidden;overflow-y:hidden;height:220px;width:100%;position:absolute;top:30%;left:0px;right:0px;bottom:0px;margin:0 auto;
}
#header input{cursor:hand;}
#header .btn_top{background:url(img//sta_MDI_Logo.png) no-repeat; width:30px; height:30px; border:0 none;}
#header .nexaBr{background:url(img/btn_br01.png) no-repeat; width:173px; height:30px; border:0 none;}
#header .useBr{background:url(img/btn_br02.png) no-repeat; width:173px; height:30px; border:0 none;}
#header .html5Br{background:url(img/btn_br03.png) no-repeat; width:173px; height:30px; border:0 none;}
#header .reset{background:url(img/btn_reset.png) no-repeat; width:71px; height:30px; border:0 none;}


.clear{
		clear:both;
}
.back-to-top {
    position: fixed;
    bottom: 2em;
    right: 0px;
    text-decoration: none;
    color: #000000;
    background-color: rgba(235, 235, 235, 0.80);
    font-size: 12px;
    padding: 1em;
    display: none;
}

.back-to-top:hover {    
    background-color: rgba(135, 135, 135, 0.50);
}

 .desc {
      font-size: 8pt;
      padding: 0px;
      text-align: center;
    }
      .congrats2 {
      font-size: 10pt;
      padding: 0px;
      text-align: center;
      top "30px";
    }

</style>
</HEAD>
<BODY onload ="fn_launchCall()">
<div id="header" frameborder="0" >  
<span style='float:left;margin:2 0.2em;'>
   <img src="img/sta_MDI_Logo.png" border="0">
  </span>
	       <span style='float:right; margin:0 0.2em;'>
	       <INPUT id="runtime" Type="button" VALUE="" class="nexaBr" onClick="btn_onclick(this);">        
           <INPUT id="html5" Type="button" VALUE="" class="html5Br" onClick="btn_onclick(this);">
            <INPUT id="refresh" Type="button" VALUE="" class="reset" onClick="btn_onclick(this);">
   </span>
 </div>

<div id="title" name="title" style="position:absolute;left:0;top:30px;z-index:1; display:block;width:100%; height:80%;margin:0 auto;">
    <table border="0" cellpadding="0" cellspacing="0" width="100%" height="100%">
        <tr>
              <td align="center">
               <iframe name="installFrame" id="installFrame" src="img.html" frameborder="0" width="100%" height="300" scrolling="no" align="center" display="block" ></iframe>
               </td>
              
        </tr>	

    </table>
    
</div>

<OBJECT ID="nexacrolauncherax14" CLASSID="CLSID:A7969122-0BB8-452A-93C9-72641B76CFB7" 
        width="0" height="0" CODEBASE="./Download/nexacro14_Launcher.cab#version='+NEXACRO_CAB_VER+'" onError="fn_objectOnError()">	
</OBJECT>
<OBJECT ID="nexacroax14" CLASSID="CLSID:6DB5422D-536F-4B80-B32C-16BEA0971512" 
        width="0" height="0" CODEBASE="./Download/nexacro14_SetupEngine.cab#version='+NEXACRO_CAB_VER+'" onError="fn_objectOnError()">
</OBJECT>



</BODY>
</HTML>