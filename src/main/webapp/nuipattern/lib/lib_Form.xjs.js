//XJS=lib_Form.xjs
(function()
{
    return function(path)
    {
        var obj;
    
        // User Script
        this.registerScript(path, function() {
        /*
         ===============================================================================
         == 폼과 관련된 공통함수들은 여기에 작성한다.
         ===============================================================================
         ● gfn_FormOnLoad      : Form Load 시 공통 기능 처리
         ● gfn_FormSetInit     : Form에 속한 컨트롤들의 초기화 처리
         ● gfn_AllCallFunction : Form에 속한 모든 컴포넌트를 함수의 인자로 넘겨주고 함수 호출처리
         ● gfn_setTitle        : 컨트롤의 title을 공통 영역에 정의한 MsgId를 바탕으로 변경시키는 함수
         ● gfn_setAuth         : 컨트롤의 기능들에 대한 권한을 설정한다.
         ● gfn_setEnableCtrl   : 화면안의 컨트롤을 활성화 또는 비활성화 처리
         ● gfn_setDefault      : 화면안의 컨트롤의 default 속성을 설정한다.
         ● gfn_Alert           : 메세지 코드에 따른 실제 메세지값을 찾은 후 팝업창을 생성해서 해당 값을 보여주는 함수
         ● gfn_Confirm         : 메세지 코드에 따른 실제 메세지값을 찾은 후 팝업창을 생성해서 해당 값을 보여주는 함수
         ● gfn_Dialog          : Modal Dialog실행 함수
         ● gfn_Open            : Modaless Dialog실행 함수
         ● gfn_NewChildFrame   : 신규 ChildFrame 생성
         */
         
        /************************
         *  공통 Script Include
         ************************/

        /*******************************************************************************
         * Function Name: gfn_FormOnLoad
         * Description	: Form Load 시 공통 기능 처리
         * Arguments	: obj :열린 화면 객체
         * Return 		: None
         ********************************************************************************/
        this.gfn_FormOnLoad = function (obj)
        {
        	// Form에 속한 컨트롤들의 초기화 처리
        	this.gfn_AllCallFunction(obj, this.gfn_FormSetInit, true);
        }

        /*******************************************************************************
         * Function Name: gfn_FormSetInit
         * Description	: Form에 속한 컨트롤들의 초기화 처리
         * Arguments	: obj :객체
         * Return 		: None
         ********************************************************************************/
        this.gfn_FormSetInit = function (obj)
        {

        	this.gfn_setDefault(obj);
        }

        /********************************************************************************
         * Function Name: gfn_getComponentValue
         * Description	: 프로그램의 특정 컴포넌트의 Attribute값을 찾는 함수
         *				  (ex) gfn_getComponentValue("stInputBox", "value")
         * Arguments	: strID(Component의 ID값), strAttributeNM(Attribute Name)
         * Return 		: Attribute	값
         ********************************************************************************/
        this.gfn_getComponentValue = function (objId,sProp)
        {
        	var idObj = this.gfn_getComponent(objId);
        	if (this.gfn_isNull(idObj)) 
        	{
        		return "";
        	}
        	return idObj[sProp];
        }

        /********************************************************************************
         * Function Name: gfn_getComponent
         * Description	: 프로그램의 특정 컴포넌트를 컴포넌트의 id값을
         * 				  이용하여 찾아내는 함수
         * Arguments	: componentId(Component의 ID값), obj:찾기시작할 container
         * Return 		: Component Object
         ********************************************************************************/
        this.gfn_getComponent = function (objId,obj)
        {
        	if (this.gfn_isNull(obj)) 
        	{
        		obj = this;
        	}
        	return this.gfn_AllCallFunction(obj, this.gfn_isComponent, true, objId);
        }

        /********************************************************************************
         * Function Name: gfn_isComponent
         * Description	: 프로그램의 특정 컴포넌트를 컴포넌트의 id값을
         * 				  이용하여 찾아내는 함수
         * Arguments	: obj:컴포넌트 container, id: component Id
         * Return 		: Component Object
         ********************************************************************************/
        this.gfn_isComponent = function (Obj,id)
        {
        	if (Obj.name == id) 
        	{
        		return Obj;
        	}
        }

        /*******************************************************************************
         * Function Name: gfn_AllCallFunction
         * Description	: Form에 속한 모든 컴포넌트를 함수의 인자로 넘겨주고 함수 호출처리
         * Arguments	: obj :컨테이너(Form, Div), FunctionObj: 호출함수, bObjects: Invisible object 포함여부, paramObj: 함수에 넘겨줄 파라메터
         * Return 		: retVal
         ********************************************************************************/
        this.gfn_AllCallFunction = function (obj,FunctionObj,bObjects,paramObj)
        {
        	var strType;
        	var retVal;

        	for (var i = 0; i < obj.components.length; i++) 
        	{
        		strType = obj.components[i].toString().toUpperCase();

        		retVal = FunctionObj.call(this, obj.components[i], paramObj);
        		 
        		if (this.gfn_isNull(retVal) == false) 
        		{
        			return retVal;
        		}

        		if (obj.components[i].components) 
        		{
        			switch (strType) 
        			{
        				case "[OBJECT TAB]":
        					retVal = this.gfn_AllCallFunction(obj.components[i], FunctionObj, bObjects, paramObj);
        					if (this.gfn_isNull(retVal) == false) 
        					{
        						return retVal;
        					}
        					break;
        				case "[OBJECT TABPAGE]":
        				case "[OBJECT DIV]":
        				case "[OBJECT POPUPDIV]":
        					if (this.gfn_isNull(obj.components[i].url) == true) 
        					{
        						retVal = this.gfn_AllCallFunction(obj.components[i], FunctionObj, bObjects, paramObj);
        						if (this.gfn_isNull(retVal) == false) 
        						{
        							return retVal;
        						}
        					}
        					break;
        			}
        		}
        	}

        	if (bObjects == true && obj.objects) 
        	{
        		for (var i = 0; i < obj.objects.length; i++) 
        		{
        			retVal = FunctionObj.call(this, obj.objects[i], paramObj);
        			if (this.gfn_isNull(retVal) == false) 
        			{
        				return retVal;
        			}
        		}
        	}
        }

        /********************************************************************************
         * Function Name	: gfn_setTitle
         * Description		: 컨트롤의 title을 공통 영역에 정의한 Domain을 바탕으로 변경시키는 함수
         * Arguments		: obj:컨트롤
         * Return 			:
         ********************************************************************************/
        this.gfn_setTitle = function (obj)
        {
        	var sText;
        	var sCode;

        	var strType = obj.toString().toUpperCase();

        	switch (strType) 
        	{
        		case "[OBJECT GRID]":
        			for (var i = 0; i < obj.getCellCount("head"); i++) 
        			{
        				var sCode = obj.getCellProperty('head', i, "text");
        				var sText = this.gfn_getDomainText(sCode);
        				if (sCode != sText) 
        				{
        					obj.setCellProperty("head", i, "text", sText);
        				}
        			}
        			break;
        		case "[OBJECT DATASET]":
        			for (var i = 0; i < obj.getRowCount(); i++) 
        			{
        				for (var nCol = 0; nCol < obj.getColCount(); nCol++) 
        				{
        					sCode = obj.getColumn(i, nCol);
        					sText = this.gfn_getDomainText(sCode);
        					if (sCode != sText) 
        					{
        						obj.setColumn(i, nCol, sText);
        					}
        				}
        			}
        			break;
        		case "[OBJECT COMBO]":
        		case "[OBJECT RADIO]":
        		case "[OBJECT LISTBOX]":
        			var rtn = obj.getInnerDataset();			
        			if (this.gfn_isNull(rtn)) 
        			{
        				break;
        			}    

        				
        			if (rtn.toString().toUpperCase() != "[OBJECT DATASET]") 
        			{
        				break;
        			}
        			for (var i = 0; i < rtn.getRowCount(); i++) 
        			{

        				sCode = rtn.getColumn(i, obj.datacolumn);
        				sText = this.gfn_getDomainText(sCode);
        				if (sCode != sText) 
        				{
        					rtn.setColumn(i, "datacolumn", sText);
        					if(rtn.index == 0 ){
        						rtn.set_index(-1);
        						rtn.set_index(0);
        					}
        				}
        			}
        			break;
        		case "[OBJECT EDIT]":
        		case "[OBJECT MASKEDIT]":
        		case "[OBJECT CALENDAR]":
        		case "[OBJECT TEXTAREA]":
        			sText = this.gfn_getDomainText(obj.value);
        			if (sText != obj.value) 
        			{
        				obj.set_value(sText);
        			}
        			break;
        		case "[OBJECT FILEUPLOAD]":
        			sText = this.gfn_getDomainText(obj.style.buttontext);
        			if (sText != obj.style.buttontext) 
        			{
        				obj.style.set_buttontext(sText);
        			}
        			break;
        		default:
        			sText = this.gfn_getDomainText(obj.text);
        			if (sText != obj.text) 
        			{
        				obj.set_text(sText);
        			}
        			break;
        	}
        }

        /**********************************************************************************
         * Function Name   : gfn_setFlag
         * Description     : 각 컴포넌트의 Flag설정에 따른 처리
         * Arguments       : obj: 컨트롤 객체
         * Return          :
         **********************************************************************************/
        this.gfn_setFlag = function (obj)
        {
        	if (this.gfn_isNull(obj[application.gv_FlagProp])) 
        	{
        		return;
        	}

        	var arrEnv = this.gfn_Split2(obj[application.gv_FlagProp], ";", ":");
        	var strType = obj.toString().toUpperCase();
        	var eInit = [];

        	if (this.gfn_isNull(arrEnv)) 
        	{
        		return;
        	}

        	if (strType == "[OBJECT DIV]") 
        	{
        		obj.set_text(obj[application.gv_FlagProp]);
        	}

        	for (var i = 0; i < arrEnv.length; i++) 
        	{
        		switch (arrEnv[i][0]) 
        		{
        			case application.gv_ActionFlag:
        				//this.gfn_setAuth(obj, arrEnv[i][1]);
        				break;
        			case application.gv_ResizeFlag:
        				try 
        				{
        					this.addEventHandler("onsize", this.gfn_frm_OnSize, this);
        					this.gfn_setOrgSize(obj, arrEnv[i][1]);
        					eInit["cx"] = this.getOffsetWidth();
        					eInit["cy"] = this.getOffsetHeight();
        					this.gfn_setResize(obj, eInit);
        				}
        				catch (e) 
        				{
        					return false;
        				}
        				break;
        			default:
        				break;
        		}
        	}
        }

        /**********************************************************************************
         * Function Name   : gfn_setAuth
         * Description     : 컨트롤의 기능들에 대한 권한을 설정한다.
         * Arguments       : obj: 컨트롤 객체, sVal: 권한을 설정값
         * Return          :
         **********************************************************************************/
        /*
        this.gfn_setAuth = function (obj, sVal)
        {
        	
        	if( this.parent == "[object ChildFrame]" ){
        		var strRole = this.gfn_getMenuInfo(this.gfn_getMenuId(), application.gv_MenuAuthCol);
        	} else {	
        		var strRole = this.parent.gfn_getMenuInfo(this.parent.gfn_getMenuId(), application.gv_MenuAuthCol);
        	}
        	
        	if (this.gfn_isNull(strRole)) 
        	{
        		return;
        	}

        	// strRole = "1001";

        	switch (sVal) 
        	{
        		case application.gv_insertAct:
        			// 데이터 추가
        			if (strRole.substr(0, 1) != "1") 
        			{
        				this.gfn_setEnableCtrl(obj, false);
        			}
        			break;
        		case application.gv_updateAct:
        			// 데이터 수정
        			if (strRole.substr(1, 1) != "1") 
        			{
        				this.gfn_setEnableCtrl(obj, false);
        			}
        			break;
        		case application.gv_deleteAct:
        			// 데이터 삭제
        			if (strRole.substr(2, 1) != "1") 
        			{
        				this.gfn_setEnableCtrl(obj, false);
        			}
        			break;
        		case application.gv_commitAct:
        			// 데이터 저장 (서버에 저장처리)
        			if ((strRole.substr(0, 1) != "1") && 
        				(strRole.substr(1, 1) != "1") && 
        				(strRole.substr(2, 1) != "1")) 
        			{
        				this.gfn_setEnableCtrl(obj, false);
        			}
        			break;
        		case application.gv_outputAct:
        			// 데이터 프린트 또는 PC(파일)로 저장
        			if (strRole.substr(3, 1) != "1") 
        			{
        				this.gfn_setEnableCtrl(obj, false);
        			}
        			break;
        		default:
        			break;
        	}
        }
        */

        /**********************************************************************************
         * Function Name   : gfn_setDefault
         * Description     : 화면안의 컨트롤의 default 속성을 설정한다.
         * Arguments       : obj: 컨트롤 객체
         * Return          :
         **********************************************************************************/
        this.gfn_setDefault = function (obj)
        {
        	var strType = obj.toString().toUpperCase();

        	switch (strType) 
        	{
        		case "[OBJECT GRID]":
        			if (obj.autofittype == "none") 
        			{
        				obj.set_cellsizingtype("col");
        			}
        			obj.set_autoenter("select");
        			for (var nCell = 0; nCell < obj.getCellCount("Body"); nCell++) 
        			{
        				obj.setCellProperty("Body", nCell, "editautoselect", true);
        				obj.setCellProperty("Body", nCell, "combodisplayrowcount", 10);
        			}
        			break;
        		case "[OBJECT COMBO]":
        			if (obj.displayrowcount == -1) 
        			{
        				obj.set_displayrowcount(10);
        			}
        		case "[OBJECT EDIT]":
        		case "[OBJECT MASKEDIT]":
        		case "[OBJECT TEXTAREA]":
        			obj.set_autoselect(true);
        			break;
        		default:
        			break;
        	}
        }

        /**********************************************************************************
         * Function Name   : gfn_setEnableCtrl
         * Description     : 화면안의 컨트롤을 활성화 또는 비활성화 처리
         * Arguments       : obj: 컨트롤 객체, bEnable: 활성화 여부
         * Return          :
         **********************************************************************************/
        this.gfn_setEnableCtrl = function (obj,bEnable)
        {
        	var strType = obj.toString().toUpperCase();

        	switch (strType) 
        	{
        		case "[OBJECT TAB]":
        		case "[OBJECT DIV]":
        		case "[OBJECT ACTIVEX]":
        			obj.set_enable(bEnable);
        			break;
        		case "[OBJECT TABPAGE]":
        			obj.Parent.removeChild(obj.name);
        			break;
        		case "[OBJECT GRID]":
        		case "[OBJECT LISTBOX]":
        			obj.set_readonly(!(bEnable));
        			obj.set_enableevent(bEnable);
        			break;
        		case "[OBJECT EDIT]":
        		case "[OBJECT CALENDAR]":
        		case "[OBJECT MASKEDIT]":
        		case "[OBJECT TEXTAREA]":
        			obj.set_readonly(!(bEnable));
        			break;
        		default:
        			obj.set_enable(bEnable);
        			obj.set_enableevent(bEnable);
        			break;
        	}
        }

        /**********************************************************************************
         * Function Name: gfn_Open
         * Description  : Modaless Dialog실행 함수
         * Arguments    : sID		( Popup Form의 ID )
         *				: sURL 		( Popup Form  URL )
         *				: sArg 		( Popup Form으로 전달될 Argument )
         *				: nLeft 	( Popup Form Left Position )
         *				: nTop 		( Popup Form Top Position )
         *				: nWidth 	( Popup Form Width )
         *				: nHeight	( Popup Form Height )
         *				: sStyle 	( Popup Form 기본 유형 )
         *				: sProp 	( Chile Frame의 모든 Property를 설정 )
         * Return       : Boolean
         **********************************************************************************/
        this.gfn_Open = function (sID,sURL,sArg,nLeft,nTop,nWidth,nHeight,sStyle,sProp)
        {
        	var rtn;
        	var newChild;
        	var MyFrame = this.getOwnerFrame();

        	//sID = this.gfn_getDomainText(sID);

        	newChild = this.gfn_NewChildFrame(sID, sURL, sArg, nLeft, nTop, nWidth, nHeight, sStyle, sProp);

        	return newChild.showModeless(sID, MyFrame, sArg);
        }

        /**********************************************************************************
         * Function Name: gfn_NewChildFrame
         * Description  : 신규 ChildFrame 생성
         * Arguments    : sID		( Popup Form의 ID )
         *				: sURL 		( Popup Form  URL )
         *				: sArg 		( Popup Form으로 전달될 Argument )
         *				: nLeft 	( Popup Form Left Position )
         *				: nTop 		( Popup Form Top Position )
         *				: nWidth 	( Popup Form Width )
         *				: nHeight	( Popup Form Height )
         *				: sStyle 	( Popup Form 기본 유형 )
         *				: sProp 	( Chile Frame의 모든 Property를 설정 )
         * Return       : ChildFrame 객체
         **********************************************************************************/
        this.gfn_NewChildFrame = function (sID,sURL,sArg,nLeft,nTop,nWidth,nHeight,sStyle,sProp)
        {
        	var newChild; 

        	newChild = new ChildFrame;
        	newChild.init(sID, "absolute", nLeft, nTop, nWidth, nHeight, null, null,  sURL);
        	newChild.set_titletext(this.gfn_getDomainText(sID));

        
        	if (this.gfn_isNull(sStyle) == false) 
        	{
        		var aStyle = this.gfn_Split2(sStyle, ",", "=");
        		for (i = 0; i < aStyle.length; i++) 
        		{
        			newChild.style[aStyle[i][0]] = aStyle[i][1];
        		}
        	}

        	if (this.gfn_isNull(sProp) == false) 
        	{
        		var aProp = this.gfn_Split2(sProp, ",", "=");
        		for (var i = 0; i < aProp.length; i++) 
        		{
        			newChild[aProp[i][0]] = aProp[i][1];
        		}
        	}
        if(this.parent.url != null)
        {
        	newChild.arguments = [];
        	newChild.arguments[application.gv_MenuIdCol] = this.parent.gfn_getMenuId();
        }

        	return newChild;
        }

        /**********************************************************************************
         * Function Name: gfn_DsGetUpdated
         * Description  : Datset의 갱신여부를  Return 한다.
         * Arguments    : objDs	확인 대상 Dataset
         * Return       : boolean
         **********************************************************************************/
        this.gfn_DsGetUpdated = function (objDs)
        {
        	this.gfn_updateToDataset();
        	return this.gfn_DsIsUpdated(objDs);
        }

        /**********************************************************************************
         * Function Name: gfn_updateToDataset
         * Description  : 컨트롤이 Dataset에 bind되어 있을경우 즉시 value를 Dataset에 적용시킨다.
         * Arguments    :
         * Return       :
         **********************************************************************************/
        this.gfn_updateToDataset = function ()
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

        
        /**********************************************************************************
         * Function Name: gfn_checkMenuStat
         * Description  : 선택된 메뉴의 상태를 확인해서 오픈할 수 없을 경우에 메시지를 표시한다.
         * Arguments    : menuid: 메뉴아이디
         * Return       : bool: 오픈 가능 여부
         **********************************************************************************/
        this.gfn_checkMenuStat = function (menuId)
        {
         	var menuStat = this.gfn_getMenuInfo(menuId, application.gv_MenuStatCol);
         	if (menuStat == "MAKE") 
         	{
        // 		this.gfn_Alert("msg.menu.stat.make", "infomation");
        // 		return false;
         	}
        	return true;
        	
        }

        
        //lib_HTML5_Frame.xjs///////////////////////////////////////////////////////////////////////

        /**********************************************************************************
         * Function Name: gfn_openMenu
         * Description  : 메뉴 아이디를  기준으로 신규 윈도우 화면을 생성하고 open 시킴
         * Arguments    : menuid: 메뉴아이디, bReload: Reload 여부, aArgs: 넘겨줄 Argument, favArgs:즐겨찾기에서 넘어왔을 경우체크
         * Return       : 없음
         **********************************************************************************/
        this.gfn_openMenu = function(menuid,bReload,aArgs,favArgs)
        {
        	if (this.gfn_isNull(menuid)) 
        	{
        		return;
        	}

        
        	var nRow = -1;
        	var menuFilterGrp ='';
        	
        	
        	if (this.gfn_isNull(favArgs)){
        		nRow = this.gfn_findData(application.gds_menu, application.gv_MenuIdCol, menuid);
        	}else {
        		//즐겨찾게에서 넘어오면 application.gds_menu를 해당 메뉴그룹으로 다시 filter 한다.
        		menuFilterGrp = menuid.substring(0,1) +'000';		
        		application.gds_menu.filter(application.gv_MenuGIdCol + "=='"+menuFilterGrp+"' && MENU_LEVEL!=0");
        		gv_leftFrame.form.ds_menu.copyData(application.gds_menu, true);
        		application.gds_menu.filter();
        		
        		nRow = this.gfn_findData(gv_leftFrame.form.ds_menu, application.gv_MenuIdCol, menuid);
        	}
        	
        	if (nRow == -1)
        	{
        //		this.gfn_Alert("Menu가 존재하지 않습니다.");
        		return;
        	}

        	if (this.gfn_isNull(this.gfn_getMenuInfo(menuid, application.gv_MenuUrlCol))) 
        	{
        		return;
        	}

        	if (this.gfn_checkMenuStat(menuid) == false) 
        	{
        		return;
        	}
        	
        	var winid = this.gfn_getLookupData(application.gds_openMenu, application.gv_MenuIdCol, menuid, application.gv_WinIdCol);
        	if (this.gfn_isNull(winid) == false) 
        	{
        		if (this.gfn_activeFrame(winid, bReload, aArgs) == true) 
        		{
        			application.mainframe.VFrameSet.HFrameSet.VFrameSet1.MdiTabFrame.form.fn_moveTab(winid);
        			return;
        		}
        	} else {
        		gv_workFrame.removeChild("MainForm");
        	}

        	this.gfn_openMenuRow(menuid, nRow, aArgs);
        }

        /**********************************************************************************
         * Function Name: gfn_activeFrame
         * Description  : 윈도우 키를 기준으로 열려있는 화면 여부 확인
         * Arguments    : winid: 윈도우 생성 키, bReload: 화면 Reload여부, aArgs:전달인자
         * Return       : 열린화면이면 true 아니면 false
         **********************************************************************************/
        this.gfn_activeFrame = function (winid,bReload,aArgs)
        {

        	var framesInfo = gv_workFrame.frames;

        	if(this.gfn_isNull(winid)){return true;}
        	if (application.gv_openOnlyOne == false && bReload == false) 
        	{
        		return false;
        	}
        	
        	if(framesInfo[winid])
        	{
        	    application.mainframe.VFrameSet.HFrameSet.VFrameSet1.MdiTabFrame.form.fn_moveTab(winid);
        		framesInfo[winid].setFocus();

        		if (bReload == true) 
        		{
        			framesInfo[winid].reload();
        		}
        		return true;
        	}
        	
        	return false;

        }

        
        /**********************************************************************************
         * Function Name: gfn_openMenuRow
         * Description  : gds_openMenu의 해당 Row의 정보를 기준으로 신규 윈도우 화면을 생성하고 open 시킴
         * Arguments    : menuid: 메뉴아이디, nRow: gds_openMenu의 rowpostion, aArgs:전달인자
         * Return       : 없음
         **********************************************************************************/
        this.gfn_openMenuRow = function (menuid,nRow,aArgs)
        {
        	var winid = "win" + menuid + "_" + application.gds_openMenu.getRowCount() + "_" + parseInt(Math.random() * 1000);
        	var menuExtp = this.gfn_getMenuInfo(menuid, application.gv_MenuTypeCol);
        	if (menuExtp == 'EXEC') 
        	{
        		system.execShell(this.gfn_getMenuInfo(menuid, application.gv_MenuUrlCol) + " " + this.gfn_getMenuInfo(menuid, application.gv_MenuArgCol));
        		return;
        	}

        	var objNewWin = new ChildFrame;
        	var strTitle;
        	var strTitle_kor;
        	var strDesc_Url = "";
        	var strDesc_Url_ko = "";
        // trace("1 @@ [" + aArgs + "]");
        // trace("1-1 @@ " + aArgs.split(" "));
        // trace("2 @@ " + aArgs.split(" ")[1]);		
        // trace("3 @@ " + aArgs.split(" ")[1].split("=")[1]);
        	if( this.gfn_isNull(aArgs) == false ) {	
        		strDesc_Url = aArgs.split(" ")[1].split("=")[1];		
        		strDesc_Url_ko = aArgs.split(" ")[2].split("=")[1];
        	}

        	objNewWin.init(winid, "absolute", 0, 0, gv_workFrame.getOffsetWidth() - 0, gv_workFrame.getOffsetHeight() - 0);
        	objNewWin.set_tooltiptext(winid);
        	objNewWin.arguments = [];
        	strTitle = this.gfn_getMenuInfo(menuid, "MENU_NAME");
        	strTitle_kor = this.gfn_getMenuInfo(menuid, "MENU_NAME_KO");

        	if (this.gfn_isNull(aArgs) == false) 
        	{
        // 		for (var prop; ; ) 
        // 		{
        // 			objNewWin.arguments[prop] = aArgs[prop];
        // 		}
        	}
         
        	objNewWin.set_openstatus(application.gv_openStatus);	
        	
        	if (this.gfn_getMenuInfo(menuid, application.gv_MenuOPTPCol) == "POP") 
        	{
        		objNewWin.showModeless(winid, null);
        	}
        	else 
        	{
        	    var sPageUrl = this.gfn_getLookupData(application.gds_menu, application.gv_MenuIdCol, menuid, application.gv_MenuUrlCol);
        	    var sMenuNm = this.gfn_getLookupData(application.gds_menu, application.gv_MenuIdCol, menuid, application.gv_MenuNameCol);
        		var sGrpNm = aArgs.split(" ")[0].split("=")[1];
        		
        		gv_workFrame.addChild(winid, objNewWin);
        		this.gfn_addOpenMenuDs(winid, menuid, strTitle, strDesc_Url, strDesc_Url_ko);
        		objNewWin.set_formurl("frame::mdiWork.xfdl");
        	    objNewWin.set_dragmovetype("all");
        	    objNewWin.set_showtitlebar(false);
        	    objNewWin.set_resizable(true);
        		objNewWin.set_openstatus("maximize");

        // 		if( application.gv_MenuNameCol == "MENU_NAME_KO" ){			
        // 			objNewWin.set_titletext(sGrpNm + " > " + strTitle_kor);
        // 		}else{	
        // 			objNewWin.set_titletext(sGrpNm + " > " + strTitle);
        // 		}	
        		
        		objNewWin.set_titletext( strTitle);
        				 
        		objNewWin.arguments["winKey"]   =  winid;
        		objNewWin.arguments["menuId"]   =  menuid;
        		objNewWin.arguments["menuNm"]   =  sMenuNm;
        		objNewWin.arguments["pageUrl"]  =  sPageUrl;

        		objNewWin.arguments["descUrl"]  =  strDesc_Url;
        		objNewWin.arguments["descUrl_ko"]  =  strDesc_Url_ko;

        		objNewWin.show();
        		gv_mdiTabFrame.form.fn_addTab(winid, strTitle, strTitle_kor);

        		this.gfn_activeFrame(winid);

        	}
        }

        

        /**********************************************************************************
         * Function Name: gfn_addOpenMenuDs
         * Description  : 신규 생성된 윈도우(프레임) 화면을 gds_openMenu에 등록
         * Arguments    : winid: 윈도우아이디, menuid: 메뉴아이디, strTitle:타이틀
         * Return       : 없음
         **********************************************************************************/
        this.gfn_addOpenMenuDs = function (winid,menuid,strTitle,strDescUrl,strDescUrl_ko)
        {
        	var curRow = application.gds_openMenu.addRow();
        	application.gds_openMenu.setColumn(curRow, application.gv_WinIdCol, winid);
        	application.gds_openMenu.setColumn(curRow, application.gv_MenuIdCol, menuid);
        	application.gds_openMenu.setColumn(curRow, application.gv_TitleCol, strTitle);
        	application.gds_openMenu.setColumn(curRow, application.gv_DescUrl, strDescUrl);
        	application.gds_openMenu.setColumn(curRow, application.gv_DescUrl_ko, strDescUrl_ko);
        }

        
        ///////////////////////////////////////////////////////////////////////
        /**********************************************************************************
         * Function Name: gfn_findData
         * Description  : dataSet object에서 키에 해당되는 Row를 찾아서 rowpostion 전달
         * Arguments    : ObjDs:dataset, strIdCol:키칼럼, strId:키값,
         strSubCol:서브키칼럼, strSubId:서브 키값
         * Return       : rowpostion
         **********************************************************************************/
        this.gfn_findData = function (ObjDs,strIdCol,strId,strSubCol,strSubId)
        {
        	//var arrArgument = this.gfn_findData.arguments;
        	if (this.gfn_isNull(strSubCol)) 
        	{
        		return ObjDs.findRow(strIdCol, strId);
        	}
        	return ObjDs.findRowExpr(strIdCol + " == '" + strId + "' && " + strSubCol + " == '" + strSubId + "'");	
        	
        }

        /**********************************************************************************
         * Function Name: gfn_getLookupData
         * Description  : dataSet object에서 키에 해당되는 Row를 찾아서 칼럼값을 전달
         * Arguments    : ObjDs:dataset, strIdCol:키칼럼, strId:키값,  strInfo: dataSet 칼럼,
         strSubCol:서브키칼럼, strSubId:서브 키값
         * Return       : 칼럼값
         **********************************************************************************/
        this.gfn_getLookupData = function (ObjDs,strIdCol,strId,strInfo,strSubCol,strSubId)
        {
        	var strVal;
        	var curRow = this.gfn_findData(ObjDs, strIdCol, strId, strSubCol, strSubId);
        	
        	if (curRow < 0) 
        	{
        		return "";
        	}

        	strVal = ObjDs.getColumn(curRow, strInfo);
        	if (this.gfn_isNull(strVal)) 
        	{
        		return "";
        	}

        	return strVal;
        }

        

        //////////////////////////////////////////////////////////////////////////

        /*******************************************************************************
         * Function Name: gfn_isNull
         * Description  : 입력값이 null에 해당하는 경우 모두를 한번에 체크한다.
         * Arguments    : Val : 체크할 문자열( 예 : null 또는 undefined 또는 "" 또는 "abc" )
         * Return       : Boolean,  Val이 undefined, null, NaN, "", Array.length = 0인 경우 = true
         이외의 경우 = false
         ******************************************************************************/
        this.gfn_isNull = function (Val)
        {
        	if (new String(Val).valueOf() == "undefined") 
        	{
        		return true;
        	}
        	if (Val == null) 
        	{
        		return true;
        	}
        	if (("x" + Val == "xNaN") && (new String(Val.length).valueOf() == "undefined")) 
        	{
        		return true;
        	}
        	if (Val.length == 0) 
        	{
        		return true;
        	}

        	return false;
        }

        //////////////////////////////////////////////////////////
        /**********************************************************************************
         * Function Name: gfn_getMenuInfo
         * Description  : menuid 를 기준으로 해당 메뉴의 칼럼값을 전달
         * Arguments    : menuid: 메뉴아이디, menuInfo: 메뉴의 칼럼
         * Return       : 칼럼값
         **********************************************************************************/
        this.gfn_getMenuInfo = function (menuid,menuInfo)
        {
        	return this.gfn_getLookupData(application.gds_menu, application.gv_MenuIdCol, menuid, menuInfo);
        }

        /**********************************************************************************
         * Function Name: gfn_getFrameAguments
         * Description  : child Frame에 등록한 아규먼트를 반환한다.
         * Arguments    : winKey, pageUrl 등등
         * Return       : 반환값
         **********************************************************************************/
        this.gfn_getFrameAguments = function (sVal)
        {
            return this.getOwnerFrame().arguments[sVal];
        }
        /**
         * 열려있는 윈도우 화면을 정렬
         * @param	: 	strType: 정렬 타입
         * @return	:   N/A
         */
        this.gfn_ArrangeWin = function(strType) 
        {
        	// workFrame영역에 open된 childFrame 갯수
        	var iFramesCnt = gv_workFrame.frames.length;
        	//if (applicaton.gds_openMenu.getRowCount() < 1) return;

        	switch(strType)
        	{
        		case "maximize" :
        		for (var i=0; i<iFramesCnt; i++) 
        		{
        			gv_workFrame.frames[i].set_openstatus("maximize");		
        			gv_workFrame.frames[i].set_showtitlebar(false);		
        			gv_workFrame.frames[i].style.set_border("0 solid #006666ff");
        		}
                
        	   break;
        	   case "closeAll" :
        		for (var i=iFramesCnt; i>=0; i--) 
        		{			
        			if( i > 0 ){
        				gv_mdiTabFrame.form.gfn_TabOnClose(gv_workFrame.frames[i-1].name);
        				if( i == 0 ){
        					gfn_callMain();
        				}
        			}	
        		}
        	    break;
        	   case "hidden" :
        		for (i=0; i<iFramesCnt; i++) 
        		{
        			gv_workFrame.frames[i].set_showtitlebar(true);
        			gv_workFrame.frames[i].style.set_border("1 solid #7f7f7bff");
        			gv_workFrame.frames[i].style.set_bordertype("round 3 3");
        			gv_workFrame.frames[i].set_openstatus("minimize");		
        		}
        		
        		gv_workFrame.arrange(strType);
        	    break;
        	    default :
        		for (i=0; i<iFramesCnt; i++) 
        		{			
        			//if( gv_workFrame.frames[i].name != "MainForm" ){			
        				gv_workFrame.frames[i].set_showtitlebar(true);
        				gv_workFrame.frames[i].style.set_border("1 solid #7f7f7bff");
        			//}	

        			gv_workFrame.frames[i].style.set_bordertype("round 3 3");
        			gv_workFrame.frames[i].set_openstatus("normal");							
        		}
        		
        		gv_workFrame.arrange(strType);
        	    break;
        	   
        	}
        }
        });


    
        this.loadIncludeScript(path);
        
        obj = null;
    };
}
)();
