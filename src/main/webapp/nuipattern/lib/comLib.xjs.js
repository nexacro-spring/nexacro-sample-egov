//XJS=comLib.xjs
(function()
{
    return function(path)
    {
        var obj;
    
        // User Script
        this.registerScript(path, function() {
        /**
        *@fileoverview nexacro service library 
        *@_gfn_callback              : 공통 트랜잭션 공통 Callback 함수
        *@gfn_commCallBack           : 서비스 콜백 함수
        *@gfn_callBackMsg            : comLib메세지 공통콜벡
        *@gfn_getPopupRtn            : 팝업 창 아규먼트
        *@gfn_checkMenuStat          : 선택된 메뉴의 상태를 확인해서 오픈할 수 없을 경우에 메시지를 표시한다.
        *@gfn_DsGetUpdated           : Datset의 갱신여부를  Return 한다.
        *@gfn_updateToDataset        : Datset의 갱신여부를  Return 한다.
        *@_setReturn                 : 팝업 아규 셋팅
        *@_setGridCheckAll           : Grid Head중 check box가 있을 경우,
        *                               check box 클릭 이벤트 발생시 전체 row에 대한 check/uncheck 설정 함수
        * @memberof! comLib
        */

        /**
         * 그리드포멧 아규먼트 저장 아규먼트선언
         * @example	
         * @memberOf private
         */
        this._rtnModal = null;

        /**
        * 이 함수가 먼저 수행되고 사용자지정Callback함수가 수행된다
        * @param {string} svcID
        * @param {string} 에러코드
        * @param {string} 에러 메시지
        * @return N/A
        * @example
        * @memberOf comLib
        */   
        this._gfn_callback = function(o,errorCode,errorMsg)
        {
        	application.set_usewaitcursor(false,true); //커서 비활성화.
        	var svcId = o.id;	
            var strMsg =   errorMsg.length > 50 ? errorMsg.substr(0,50) + "..." : errorMsg;    
            var callBackId = o.callbackFunc;
                //trace(application.gds_menu.saveXML());
                Ex.core.trstart = false;

            if(errorCode == -1 && errorMsg == "FAILED")
             {
        		//Ex.core.clearSessionId();
        		return;
             }
             
        	// 세션 만료 체크
        	if(errorCode == -9)  
        	{
        	     if(nexacro.Browser != "Runtime"){
        	        //Ex.core.clearSessionId();	 
        	        Ex.core.showMsg(this,"alert","root_unknown",errorMsg,"","default","","this.gfn_callBackMsg");
        	     }else{
        			Ex.core.showMsg(this,"alert","root_runtime",errorMsg,"","default","","this.gfn_callBackMsg");
        	     }
        	     return;
        	}
        	// 페이징 데이터셋 초기화
        	if(errorCode < 0)
        	{
        	  Eco.Logger.debug({message:"Transaction Error!!! ErrorCode : '"+errorCode+"' ErrorMsg : '"+errorMsg+"'", elapsed:true, stack:true});
        	}
        		
        	 this[callBackId](svcId,errorCode,errorMsg);
        }

        /**
         * 서비스 콜백 함수
         * @param 
         * @return 
         * @example
         * @memberOf comLib
         */
        this.gfn_commCallBack = function(svcId,errorCode,errorMsg)
        {
        	var pThis = this;
        	if(errorCode < 0){
        	    Ex.core.showMsg(this,"alert","commCallBackErro",errorMsg,"","default","","this.gfn_callBackMsg");
        	    return;
        	} 	

        	switch(svcId){
        		
        		case "logout" : //로그아웃
        			
        			if(nexacro.Browser != "Runtime")
        			{
        				Ex.core.closeSession();  //로그아웃 reload
        			}						
        			else
        			{
        				application.exit();
        			}	
        			break;
        	}
        }

        
        /**
        * 공통 메세지 콜벡 
        * @param {string} popupid
        * @param {array} result
        * @return 
        * @example
        * @memberOf comLib
        */
        this.gfn_callBackMsg = function(strCallBackId,strResult)
        {
            if(strResult == "OK")
        	{
        		switch(strCallBackId)
        		{
        			case "msgSuccessGrdFormat" : 			
        				break;
        			case "login_strErrorMsg":
        			  var objLoginId = this.div_login.txt_userId;
        				objLoginId.setFocus();
        			 	 break;				
        			case "login_unknown":
        			 var objLoginPw = this.div_login.txt_userPwd;
        				objLoginPw.setFocus();
        				break;	
        		     case "root_strErrorMsg" :
        		        Ex.core.closeSession();
        		     	break;
        		     	
        		      case "root_unknown" :
        				Ex.core.closeSession();  //session 종료  reload
        		     	break;	
        		     case "root_runtime" :
        		        Ex.core.trLogout(this); // application 종료
        		        break;
        		}
        	}		
        }

        

        /**
        * 팝업창 창닫기 이벤트
        * @param {string}  창닫기시 보내질 아규먼트
        * @example N/A
        * @memberOf comLib
        */  
        this.gfn_popupClose = function(val)
        {
            application.gv_curFormId  = Ex.core.ff_preCurFormId;
            Ex.core.onload(this);
            this.close(this.opener._setReturn(val));	
        }

        /**
        * 팝업값 return 
        * @param 
        * @return {string} return 값
        * @example 
        * @memberOf comLib
        */
        this.gfn_getPopupRtn = function()
        {
          return this._rtnModal;

        }

        /**
        * 선택된 메뉴의 상태를 확인해서 오픈할 수 없을 경우에 메시지를 표시한다.
        * @param  {string} 메뉴아이디
        * @return  N/A
        * @example 
        * @memberOf comLib
        */  
        this.gfn_checkMenuStat = function(menuId)
        {
         	//var menuStat = Ex.util.getLookupData(application.gds_menu, gv_MenuIdCol, menuId, application.gv_MenuStatCol);
        	return true;
        }

        /**
        * Datset의 갱신여부를  Return 한다.
        * @param  {string} 확인 대상 Dataset
        * @return  {boolen} 갱신여부
        * @example 
        * @memberOf comLib
        */   
        this.gfn_DsGetUpdated = function(objDs)
        {
        	this.gfn_updateToDataset();
        	return Ex.util.isUpdated(objDs);
        }

        
        /**
        * 컨트롤이 Dataset에 bind되어 있을경우 즉시 value를 Dataset에 적용시킨다.
        * @param  
        * @return  N/A
        * @example 
        * @memberOf comLib
        */  
        this.gfn_updateToDataset = function()
        {
        	var objComp = this.getFocus();
        	
        	if (objComp != null) 
        	{
        		try 
        		{
        			objComp.updateToDataset();
        		}
        		catch (e) 
        		{
        		}
        	}
        }

        /**
        * 팝업 아규 셋팅
        * @param {obj}  arguemnt		
        * @return 
        * @example N/A
        * @memberOf comLib
        */
        this._setReturn = function(obj)
        {
        	this._rtnModal = null;	
        	if(typeof(obj) == "string")
        	{
        		this._rtnModal = obj;
        		return obj;
        	}
        	
        	if(obj instanceof Array) {
        		this._rtnModal = new Array();
        	} else {
        		this._rtnModal = new Object();
        	}
        	
        	for(var prop in obj)
        	{
        		this._rtnModal[prop] = obj[prop]	
        	}

        	return "_rtnModal";
        }

        

        /**
        * Grid Head중 check box가 있을 경우, check box 클릭 이벤트 발생시 전체 row에 대한 check/uncheck 설정 함수
        * @param  {object} grid
        * @return N/A
        * @example
        * @memberOf comLib
        */
        this._setGridCheckAll = function(obj,e)
        {
        	var strVal;
        	var strChkCol;
        	var dsObj;

        	if(obj.readonly == true) return;
        	   dsObj = Eco.XComp.lookup(this,obj.binddataset);

        	var strType = obj.getCellProperty("head", e.cell, "displaytype");

        	if(strType != "checkbox" || dsObj.rowcount == 0) return;
        	// Head셋팅
        	strVal = obj.getCellProperty("head", e.cell, "text");

        	if (strVal == "1")
        	{
        		obj.setCellProperty("head", e.cell, "text", '0');
        		strVal = "0";
        	}
        	else
        	{
        		obj.setCellProperty("head", e.cell, "text", '1');
        		strVal = "1";
        	}
        	strChkCol = Ex.util.isNvl(obj.getCellProperty("body", e.col, "text"), "");
        	strChkCol = strChkCol.split("bind:").join("");
        	// Body셋팅
        	dsObj.set_enableevent(false);
        	for (var i = 0; i < dsObj.rowcount; i++)
        	{
        		dsObj.setColumn(i, strChkCol, strVal);
        	}
        	dsObj.set_enableevent(true);
        }
        });


    
        this.loadIncludeScript(path);
        
        obj = null;
    };
}
)();
