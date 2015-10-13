/**
 * @namespace
 * @name login javascript
 * @author Tobesoft w.s.jeong
 * @memberof!  <global>
 */

var amountLoaded = 0;
var ifrmae_height= 900;
var ifrContentsTimer;
var isIframe= false;
/**
 * 브라우저 onload 수행
 * @return
 * @example
 * @memberOf public
 */
function onLoad() {
	 document.getElementById("nexacro_main").style.width = "100%";  //iframe size
     document.getElementById("nexacro_main").style.height = "95.5%";  //iframe size
     document.getElementById("nexacro_main").style.border = 0;  //iframe size
	 document.getElementById('nexacro_main').focus();
	 
	 document.getElementById("nexacro_main").src ="blank.html";
	 //document.getElementById("nexacro_main").src ="../index.html";
	 var offset = 20;
	    var duration = 200;
	    jQuery(window).scroll(function() {
	    	
	        if (jQuery(this).scrollTop() > offset) {
	            jQuery('.back-to-top').fadeIn(duration);
	        } else {
	            jQuery('.back-to-top').fadeOut(duration);
	        }
	    });
	    
	    jQuery('.back-to-top').click(function(event) {
	        event.preventDefault();
	        jQuery('html, body').animate({scrollTop: 0}, duration);
	        return false;
	    })
	 
	 
	 regenerate();
	 
	 
	 
	 ifrContentsTimer = setInterval('mainLoad()',200);
	 
	 
}

if ( window.addEventListener ) {
    window.addEventListener( "load", onLoad, false );  //w3c dom 지원 브라우저
}
else if ( window.attachEvent ) {
    window.attachEvent( "onload", onLoad ); // w3c do m 지원 브라우저 외(ex:msdom 지원 브라우저 ie)
} else if ( window.onLoad ) {
    window.onload = onLoad;
}


/**
 * html resize
 * @return
 * @example
 * @memberOf public
 */
window.onresize = regenerate;
function regenerate( )
{

	
	 if($(window).height() >ifrmae_height ){
		 document.getElementById("nexacro_main").style.height = $(window).height() -30;
	 }
	 else
	 {
		 
		 document.getElementById("nexacro_main").style.height = ifrmae_height;
	 }	 
	
	
	
}


/**
 * frame에 onload 처리시
 * @return
 * @example
 * @memberOf public
 */
function iframeOnload()
{
    isIframe= true;
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

/**
 * IE버젼체크
 * @return msie8.0
 * @example
 * @memberOf public
 */
function getBrowserType(){
    
    var _ua = navigator.userAgent;
    var rv = -1;
     
    //IE 11,10,9,8
    var trident = _ua.match(/Trident\/(\d.\d)/i);
    if( trident != null )
    {
        if( trident[1] == "7.0" ) return rv = 11;
        if( trident[1] == "6.0" ) return rv = 10;
        if( trident[1] == "5.0" ) return rv = 9;
        if( trident[1] == "4.0" ) return rv =8;
    }
     
    //IE 7...
    if( navigator.appName == 'Microsoft Internet Explorer' ) return rv = 7;
  
}


/**
 *nexacro frame load
 * @return
 * @example
 * @memberOf public
 */
function mainLoad()
{
   //프로그레스바 처리
	if(isIframe)
     {  
		 document.getElementById("delay").style.display = "none";
		 document.body.style.background = "url('');";
		 document.getElementById("nexacro_main").style.background ="white";
		 document.getElementById("nexacro_main").src = "../index.html";
		 document.getElementById("nexacro_main").style.display ="block";
         clearInterval(ifrContentsTimer);  
     }
     else
     {	 

    	 document.getElementById("delay").style.display = "block";  //프레그레스바 이미지 활성화

     }
}

/**
 *▲ 클릭실행
 * @return
 * @example
 * @memberOf public
 */
function click_close()
{
	   $("#header").slideToggle("fast", function() {
		   document.getElementById("nexacro_main").style.top ="0px";
	    });
}

/**
 *전용브라우저(임베디드) 클릭실행
 * @return
 * @example
 * @memberOf public
 */
function click_runtime()
{
	 
	 if(isBrowser() != "Ie")
	 {
		  alert(" 인터넷 익스플로러만 지원합니다.");
		  return;
			
	}
	
	
	document.getElementById("nexacro_main").src ="blank.html";
	
	 document.body.style.background = "url('');";
	 document.getElementById("nexacro_main").style.background ="white";
	 document.getElementById("nexacro_main").src = "./install/install.jsp?getChk=runtime";
	 document.getElementById("nexacro_main").style.display ="block";
 
 
}

/**
 *임베디드 실행
 * @return
 * @example
 * @memberOf public
 */
function click_embeded()
{
  if(isBrowser() != "Ie"){
	  alert(" 인터넷 익스플로러만 지원합니다.");
	  return;
		
   }
	document.getElementById("nexacro_main").src ="blank.html";
	 document.body.style.background = "url('');";
	 document.getElementById("nexacro_main").style.background ="white";
	 document.getElementById("nexacro_main").src = "./install/nexacroax14.html";
	 
	 document.getElementById("nexacro_main").style.display ="block";
}


/**
 *html5 버젼 실행
 * @return
 * @example
 * @memberOf public
 */
function click_html5()
{
    ifrContentsTimer = setInterval('mainLoad()',200);
}




function click_reset()
{

	 window.top.location.reload();
	 
}



/**
 *쿠키저장
 * @return
 * @example
 * @memberOf public
 */
function setsave(name, value, expiredays)
{
	if(!window.localStorage) {
		var today = new Date();
		    today.setDate( today.getDate() + expiredays );
		    document.cookie = name + "=" + escape( value ) + "; path=/; expires=" + today.toGMTString() + ";"  
		
		// document.write('이 Browser 는 Local Storage 를 지원하지 않습니다.');
		} else {
			
			if(expiredays == -1)
			{
				
				localStorage.setItem("userid", "");
			}
			else
			{
				
				localStorage.setItem("userid", value);
			}	
			
		}
	//var today = new Date();
   // today.setDate( today.getDate() + expiredays );
   // document.cookie = name + "=" + escape( value ) + "; path=/; expires=" + today.toGMTString() + ";"
}