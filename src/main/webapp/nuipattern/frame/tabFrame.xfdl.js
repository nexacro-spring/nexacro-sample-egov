(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        this.on_create = function()
        {
            // Declare Reference
            var obj = null;
            
            if (Form == this.constructor) {
                this.set_name("form");
                this.set_classname("MDI");
                this.set_scrollbars("none");
                this._setFormPosition(0,0,1025,30);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_Tab", this);
            obj.set_firefirstcount("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"TAB_ID\" type=\"STRING\" size=\"256\"/><Column id=\"TITLE\" type=\"STRING\" size=\"256\"/><Column id=\"TITLE_KO\" type=\"STRING\" size=\"256\"/><Column id=\"WIN_ID\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Static("Static01", "absolute", "0", "0", null, "30", "0", null, this);
            obj.set_taborder("17");
            obj.style.set_background("#f5f4f3ff");
            obj.style.set_border("1 solid #e1dedbff,1 solid #e1dedbff,0 none #808080,1 solid #e1dedbff");
            this.addChild(obj.name, obj);

            obj = new Static("Static00", "absolute", "0", "0", null, null, "0", "0", this);
            obj.set_taborder("16");
            obj.set_cssclass("sta_MDI_bg");
            this.addChild(obj.name, obj);

            obj = new Button("btn_closeAll", "absolute", null, "5", "21", "20", "8", null, this);
            obj.set_taborder("8");
            obj.set_cssclass("btn_MDI_screenclose");
            this.addChild(obj.name, obj);

            obj = new Button("btn_maximize", "absolute", null, "5", "21", "20", "104", null, this);
            obj.set_taborder("4");
            obj.set_cssclass("btn_MDI_screenmax");
            obj.set_visible("true");
            this.addChild(obj.name, obj);

            obj = new Button("btn_vertical", "absolute", null, "5", "21", "20", "32", null, this);
            obj.set_taborder("7");
            obj.set_visible("true");
            obj.set_cssclass("btn_MDI_screenV");
            this.addChild(obj.name, obj);

            obj = new Button("btn_tilehorizontal", "absolute", null, "5", "21", "20", "56", null, this);
            obj.set_taborder("6");
            obj.set_cssclass("btn_MDI_screenH");
            obj.set_visible("true");
            this.addChild(obj.name, obj);

            obj = new Button("btn_cascade", "absolute", null, "5", "21", "20", "80", null, this);
            obj.set_taborder("5");
            obj.set_cssclass("btn_MDI_screenpop");
            obj.set_visible("true");
            this.addChild(obj.name, obj);

            obj = new Div("div_Tab", "absolute", "1", "1", null, null, "162", "0", this);
            obj.set_taborder("1");
            obj.set_scrollbars("none");
            obj.style.set_background("#f5f4f3ff");
            this.addChild(obj.name, obj);

            obj = new Button("btn_PreMdi", "absolute", null, "6", "10", "15", "148", null, this);
            obj.set_taborder("2");
            obj.set_defaultbutton("true");
            obj.set_cssclass("btn_MDI_spinup");
            obj.style.set_bordertype("round 2 2");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Button("btn_NexMdi", "absolute", null, "6", "10", "15", "135", null, this);
            obj.set_taborder("3");
            obj.set_defaultbutton("true");
            obj.set_cssclass("btn_MDI_spindn");
            obj.style.set_bordertype("round 2 2");
            obj.style.set_align("center middle");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new ImageViewer("frame_focus", "absolute", "6", "34", "90", "65", null, null, this);
            obj.set_taborder("0");
            obj.style.set_background("stretch 4,4");
            obj.style.set_border("0 solid #e5e5e5ff");
            obj.style.set_accessibility("enable all '상단 메뉴' ''");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Edit("Setfocus", "absolute", "1020", "13", "1", "1", null, null, this);
            obj.set_taborder("9");
            obj.set_readonly("true");
            obj.style.set_background("stretch 4,4");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 0, 0, this.div_Tab,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("1");
            		p.set_scrollbars("none");
            		p.style.set_background("#f5f4f3ff");

            	}
            );
            this.div_Tab.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 1025, 30, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("MDI");
            		p.set_scrollbars("none");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information

            
            // Remove Reference
            obj = null;
        };
        

        
        // User Script
        this.addIncludeScript("tabFrame.xfdl", "lib::lib_Form.xjs");
        this.registerScript("tabFrame.xfdl", function() {
        /**
         * Program ID    : tabFrame.xfdl
         * Program Name  :
         * Author        :
         * Created On    :
         * Content 	 : Implementing button on MDI menu
         * =============================================================================
         * Revision history     Crated by    Content
         * =============================================================================
         *
         */    

        /****************************************************************************************
         Script Include   
         ****************************************************************************************/
        //include "lib::lib_Form.xjs"
        /****************************************************************************************
         * Screen variable declaration
         ****************************************************************************************/

        
        this.FIRST_GAP = 1;
        this.BTN_GAP = 0;
        this.MARGIN_WIDTH = 58;

        this.TAB_WIDTH = 120;
        this.TAB_HEIGHT = 30;
        this.TAB_EXTRA_RIGHT_GAP = 24;
        this.EXTRA_WIDTH = 18;
        this.EXTRA_TOP = 6;
        this.EXTRA_HEIGHT = 17;

        
        this.EXTRA_BTN_PREFIX = "EXTRA_";
        this.TAB_BTN_PREFIX = "TAB_";
        this.bClose = true;
        /***********************************************************************
         * Event processing
         ************************************************************************/
        /* Form related Event processing*/
        this.form_onload = function (obj,e)
        {
        	
        	// Common functionality processing on Form Load
        	this.gfn_FormOnLoad(obj);
        	application.gv_loadCnt++;
        	application.gfn_loadChk();	
        	
        }

        this.form_onsize = function (obj,e)
        {
        	this.fn_redrawTab();
        }

        /*===============================================================
         = Frame interface function
         ===============================================================*/
        this.fn_Load = function ()
        {

        }

        this.fn_delTab = function (winID)
        {
        	var nRow = this.ds_Tab.findRow("WIN_ID", winID);
        	if (nRow < 0) 
        	{
        		return false;
        	}

        	var tabID = this.TAB_BTN_PREFIX + winID;
        	
        	// Removing Tab button.
        	this.fn_delTabBtn(tabID);
        	this.ds_Tab.deleteRow(nRow);
        	this.fn_redrawTab();
        	return true;
        }

        this.fn_addTab = function (winID,name,name_ko)
        {
        	var nRow = this.ds_Tab.findRow("WIN_ID", winID);
        	if (nRow > -1) 
        	{
        		return nRow;
        	}

        	var tabID = this.TAB_BTN_PREFIX + winID;
        	
        	nRow = this.ds_Tab.addRow();
        	this.ds_Tab.setColumn(nRow, "TAB_ID", tabID);
        	this.ds_Tab.setColumn(nRow, "WIN_ID", winID);
        	this.ds_Tab.setColumn(nRow, "TITLE", name);
        	this.ds_Tab.setColumn(nRow, "TITLE_KO", name_ko);
        	
        	if( application.gv_MenuNameCol == "MENU_NAME_KO" ){
        		if( name_ko.length > 20 )
        			this.short_name = name_ko.substr(0,20)+"..."; 
        		else	
        			this.short_name = name_ko;
        	} else if( application.gv_MenuNameCol == "MENU_NAME" ) {
        		if( name.length > 20 )
        			this.short_name = name.substr(0,20)+"..."; 
        		else	
        			this.short_name = name;
        	}
        		
        	// Adding Tab button.
        	this.fn_addTabBtn(tabID, name, this.short_name);
        	this.fn_redrawTab();
        	this.bClose = true;
        	return nRow;
        }

        
        this.fn_addTabBtn = function (tabID,tabName,shortName)
        {
        	var tabObj;
        	var BtnObj;
        	var exBtnId = this.EXTRA_BTN_PREFIX + tabID;
        	var tabLength = (shortName.length * this.EXTRA_TOP) +35;
        		
        	if (this.fn_findObj(tabID) == null) 
        	{
        		tabObj = new Button();
        		var objTextWidth = tabLength;	//100;//this.fn_getWidth(tabID, tabName);
        		tabObj.init(tabID, "absolute", this.fn_getLeft(tabID), 0, this.fn_getLeft(tabID) + objTextWidth + this.MARGIN_WIDTH - this.fn_getLeft(tabID), this.TAB_HEIGHT - 0);
        	}

        	this.fn_addObj(tabID, tabObj);
        	tabObj.set_text(shortName);
        	tabObj.set_tooltiptext(tabName);
        	tabObj.set_cssclass("btn_MDI");

        	tabObj.setEventHandler("onclick", this.btn_Tab_OnClick, this);

        	tabObj.set_visible(true);
        	tabObj.show();

        	if (this.fn_findObj(exBtnId) == null && tabName != "MAIN" ) 
        	{
        		BtnObj = new Button();		
        		BtnObj.init(exBtnId, "absolute", tabObj.getOffsetRight() - this.TAB_EXTRA_RIGHT_GAP, this.EXTRA_TOP, tabObj.getOffsetRight() - this.TAB_EXTRA_RIGHT_GAP + this.EXTRA_WIDTH - (tabObj.getOffsetRight() - this.TAB_EXTRA_RIGHT_GAP), this.EXTRA_TOP + this.EXTRA_HEIGHT - this.EXTRA_TOP);

        		this.fn_addObj(exBtnId, BtnObj);
        		BtnObj.set_cssclass("btn_MDI_close");

        		BtnObj.setEventHandler("onclick", this.btn_Extra_OnClick, this);

        		BtnObj.set_visible(true);
        		BtnObj.show();	
        	}
        }
          
        this.fn_ChangeText = function(winID,gbn,idx)
        {
        	var objBtn = eval("this.div_Tab."+this.TAB_BTN_PREFIX + winID);
        	var strText = "";
        	var strUrl = "";
        	if( idx > 0 ){
        		//var f_idx = idx-1;
        	} else {	
        		var f_idx = idx;	
        	}	

        	if( gbn == "KO" ){
        		strText = this.ds_Tab.lookup("TAB_ID", this.TAB_BTN_PREFIX + winID, "TITLE_KO");	
        		strUrl = application.gds_openMenu.getColumn(idx, "Desc_Url_ko" );
        	} else if( gbn == "EN" ){
        		strText = this.ds_Tab.lookup("TAB_ID", this.TAB_BTN_PREFIX + winID, "TITLE");
        		strUrl = application.gds_openMenu.getColumn(idx, "Desc_Url" );
        	}	

         	var strGrp = gv_workFrame.frames[idx].titletext.split(" > ")[0];
         	gv_workFrame.frames[idx].set_titletext(strGrp + " > " + strText);	

        	gv_workFrame.frames[idx].form.f_ChangeUrl(strUrl);
        	
        	if( strText.length > 20 )
        		strText = strText.substr(0,20)+"..."; 

        	objBtn.set_text(strText);
        	objBtn.set_tooltiptext(strText);	
        }

        this.fn_moveTab = function (winID)
        {
        	var nRow = this.ds_Tab.findRow("WIN_ID", winID);
        	if (nRow < 0) 
        	{
        		return nRow;
        	}   

        	var tabID = this.TAB_BTN_PREFIX + winID;
        	this.fn_setActive(tabID);
        	this.fn_redrawTab();
        }

        this.fn_changeTab = function (fromID,toID)
        {
        	var nfromRow = this.ds_Tab.findRow("WIN_ID", fromID);
        	var ntoRow = this.ds_Tab.findRow("WIN_ID", toID);
        	this.ds_Tab.moveRow(nfromRow, ntoRow);
        	this.fn_redrawTab();
        }

        this.fn_getTab = function (winID)
        {
        	return this.ds_Tab.findRow("WIN_ID", winID);
        }

        this.fn_getCurTab = function ()
        {
        	if (this.ds_Tab.rowposition < 0) 
        	{
        		return false;
        	}
        	return this.ds_Tab.getColumn(this.ds_Tab.rowposition, "WIN_ID");
        }

        this.fn_getTabInfo = function (winID,sCol)
        {
        	var nRow = this.ds_Tab.findRow("WIN_ID", winID);
        	if (nRow < 0) 
        	{
        		return "";
        	}
        	return this.ds_Tab.getColumn(nRow, sCol);
        }

        this.fn_getTitle = function (winID)
        {
        	var curRow = this.ds_Tab.findRow("winID", winID);
        	if (this.lookup("nRow") < 0) 
        	{
        		return "";
        	}
        	return this.ds_Tab.getColumn(curRow, "TITLE");
        }

        this.fn_setTitle = function (winID,sTitle)
        {
        	var nRow = this.ds_Tab.findRow("WIN_ID", winID);
        	if (nRow < 0) 
        	{
        		return "";
        	}

        	var tabID = this.TAB_BTN_PREFIX + winID;
        	var panelObj = this.fn_findObj(tabID);
        	if ((panelObj == null) || (panelObj == "")) 
        	{
        		return;
        	}
        	//panelObj.Text = sTitle;	//2014.03.10 @rhs
        	panelObj.set_text(sTitle);
        }

        /*===============================================================
         Event processing functionality on button
         ===============================================================*/
        this.btn_Tab_OnClick = function (obj,e)
        {
            var winId = obj.name.split(this.TAB_BTN_PREFIX).join("");
        	this.gfn_activeFrame(winId);		
        }

        this.btn_Extra_OnClick = function (obj,e)
        {
            var windId = obj.name.split(this.TAB_BTN_PREFIX).join("").split(this.EXTRA_BTN_PREFIX).join("");
        	this.gfn_TabOnClose(windId);
        	this.bClose = true;
        }
          

        /**********************************************************************************
         * Function Name: gfn_TabOnClose
         * Description  : Event processing on title tab closing of window
         * Arguments    : winid: Window ID creation
         * Return       : No
         **********************************************************************************/
        this.gfn_TabOnClose = function (winid,bAsync)
        {
        	var objFrame = gv_workFrame.frames;
        	var objFrameCnt = gv_workFrame.frames.length;
            var nRow = this.gfn_findData(application.gds_openMenu, application.gv_WinIdCol, winid);
            var nCloseIdx = nRow;
            
            // MDI 탭버튼 삭제
            if(!this.gfn_isNull(objFrame[winid]) && nRow > -1)
            {
                this.fn_delTab(winid);
                this.bClose = false;
                var rObj = gv_workFrame.removeChild(winid);
                application.gds_openMenu.deleteRow(nRow);
                rObj.destroy();
                rObj = null;   
            }
        }

        
        this.btn_NexMdi_onclick = function (obj,e)
        {
        	this.fn_moveFirst(this.fn_getFirstTabIndex() + 1);
        	this.fn_redrawTab();
        }

        this.btn_PreMdi_onclick = function (obj,e)
        {
        	this.fn_moveFirst(this.fn_getFirstTabIndex() - 1);
        	this.fn_redrawTab();
        }

        this.fn_getFirstTabIndex = function ()
        {
        	for(var i=0; i < this.ds_Tab.rowcount;i++)
        	{
        		var tabID   = this.ds_Tab.getColumn(i, "TAB_ID");
        		var tabObj  = this.fn_findObj(tabID);
        		if(0 < tabObj.left) {
        			return i;
        		}
        	}
        	return -1;
        }

        this.fn_moveFirst = function (nMoveIdx)
        {
        	var nIndex;
        	var tabID;
        	var tabObj;
        	var btnObj;
        	var tabFirstObj;

        	nIndex = this.fn_getFirstTabIndex();
        	if (nIndex < 0) 
        	{
        		return;
        	}

        	if (nMoveIdx < 0) 
        	{
        		return;
        	}
        	if (nMoveIdx >= this.ds_Tab.rowcount) 
        	{
        		return;
        	}

        	tabID = this.ds_Tab.getColumn(nIndex, "TAB_ID");
        	var tabFirstObj = this.fn_findObj(tabID);

        	tabID = this.ds_Tab.getColumn(nMoveIdx, "TAB_ID");
        	tabObj = this.fn_findObj(tabID);

        	var nShiftPos = tabObj.getOffsetLeft() - tabFirstObj.getOffsetLeft();

        	for (var i = 0; i < this.ds_Tab.rowcount; i++) 
        	{
        		tabID = this.ds_Tab.getColumn(i, "TAB_ID");
        		tabObj = this.fn_findObj(tabID);
        		btnObj = this.fn_findObj(this.EXTRA_BTN_PREFIX + tabID);		
        		tabObj.move(tabObj.getOffsetLeft() - nShiftPos, tabObj.getOffsetTop());
        		if(this.gfn_isNull(btnObj) == false )
        			btnObj.move(btnObj.getOffsetLeft() - nShiftPos, btnObj.getOffsetTop());
        	}
        }

        
        /*===============================================================
         = Window specific function in tab title
         ===============================================================*/
        this.fn_setTabSpinBtnShow = function ()
        {
        	var tabObj;

        	if (this.ds_Tab.rowcount == 0) 
        	{
        		this.btn_PreMdi.set_visible(false);
        		this.btn_NexMdi.set_visible(false);
        		return;
        	}

        	tabObj = this.fn_findObj(this.ds_Tab.getColumn(this.ds_Tab.rowcount - 1, "TAB_ID"));

        	if (this.div_Tab.getOffsetWidth() < tabObj.getOffsetRight()) 
        	{
        		this.btn_NexMdi.set_visible(true);
        	}
        	else 
        	{
        		this.btn_NexMdi.set_visible(false);
        	}

        	tabObj = this.fn_findObj(this.ds_Tab.getColumn(0, "TAB_ID"));

        	if (tabObj.getOffsetLeft() < 0) 
        	{
        		this.btn_PreMdi.set_visible(true);
        	}
        	else 
        	{
        		this.btn_PreMdi.set_visible(false);
        	}
        }

        this.fn_getTabCount = function ()
        {
        	return this.ds_Tab.rowcount;
        }

        this.fn_clearTab = function ()
        {
        	for (var i = this.ds_Tab.rowcount - 1; i >= 0; i--) 
        	{
        		if (this.lookupFunc("delTab").call(this.ds_Tab.getColumn(i, "TAB_ID")) == false) 
        		{
        			return false;
        		}
        	}
        	return true;
        }

        this.fn_clearTabBtn = function ()
        {
        	var tabID;

        	for (var i = this.ds_Tab.rowcount - 1; i >= 0; i--) 
        	{
        		tabID = this.ds_Tab.getColumn(i, "TAB_ID");
        		this.fn_delTabBtn(tabID);
        	}
        }

        this.fn_setActive = function (tabID)
        {
        	
        	var nRow = this.ds_Tab.findRow("TAB_ID", tabID);
        	if (nRow < 0) 
        	{
        		return false;
        	}
        	this.ds_Tab.set_rowposition(nRow);
        	this.fn_setActiveBtn(tabID);

        	return true;
        }

        /*===============================================================
         = Tab related function
         ===============================================================*/
        this.fn_setActiveBtn = function (tabID)
        {
        	var TabObj;
        	var BtnObj;

        	for (var i = 0; i < this.ds_Tab.rowcount; i++) 
        	{
        		TabObj = this.fn_findObj(this.ds_Tab.getColumn(i, "TAB_ID"));
        		BtnObj = this.fn_findObj(this.EXTRA_BTN_PREFIX + this.ds_Tab.getColumn(i, "TAB_ID"));
        		
        		if (tabID == this.ds_Tab.getColumn(i, "TAB_ID")) 
        		{
        			TabObj.set_cssclass("btn_WF_MDIS");
        			this.fn_showTabBtn(i);
        		}
        		else 
        		{
        			TabObj.set_cssclass("btn_WF_MDI");
        		}
        	}
        }

        this.fn_showTabBtn = function (nIdx)
        {
        	var i;
        	var nLeft;
        	var nRight;

        	var tabObj = this.fn_findObj(this.ds_Tab.getColumn(nIdx, this.lookup("_ID")));
        	nLeft = tabObj.getOffsetLeft();
        	nRight = tabObj.getOffsetRight();

        	
        	if (0 <= nLeft && this.div_Tab.getOffsetWidth() >= nRight) 
        	{
        		return;
        	}

        	nRight = tabObj.getOffsetRight();
        	nLeft = tabObj.getOffsetLeft();

        	if (nLeft < 0) 
        	{
        		this.fn_moveFirst(nIdx);
        		return;
        	}

        	for (var i = this.fn_getFirstTabIndex() + 1; i < this.ds_Tab.rowcount; i++) 
        	{
        		tabObj = this.fn_findObj(this.ds_Tab.getColumn(i, "TAB_ID"));
        		if (nRight - tabObj.getOffsetLeft() <= this.div_Tab.getOffsetWidth()) 
        		{
        			break;
        		}
        		this.fn_moveFirst(i);
        	}
        }

        this.fn_delTabBtn = function (tabID)
        {
        	var exBtnId = this.EXTRA_BTN_PREFIX + tabID;
        	var TabObj = this.fn_findObj(tabID);
        	var BtnObj = this.fn_findObj(exBtnId);

        	var nShitLeft = TabObj.getOffsetWidth() + this.BTN_GAP;
        	var curRow = this.ds_Tab.findRow("TAB_ID", tabID);

        	this.fn_removeObj(exBtnId);
        	this.fn_removeObj(tabID);

        	for (var i = curRow + 1; i < this.ds_Tab.rowcount; i++) 
        	{
        		TabObj = this.fn_findObj(this.ds_Tab.getColumn(i, "TAB_ID"));
        		BtnObj = this.fn_findObj(this.EXTRA_BTN_PREFIX + this.ds_Tab.getColumn(i, "TAB_ID"));
        		TabObj.move(TabObj.getOffsetLeft() - nShitLeft, TabObj.getOffsetTop());
        		BtnObj.move(BtnObj.getOffsetLeft() - nShitLeft, BtnObj.getOffsetTop());
        	}
        }

        
        this.fn_findObj = function (strId)
        {
        	return this.div_Tab.components[strId];
        }

        this.fn_removeObj = function (strId)
        {
        	if (this.fn_findObj(strId) == null) 
        	{
        		return;
        	}
        	var strObj = this.div_Tab.removeChild(strId);
        	if (strObj != null) 
        	{
        		strObj.destroy();
        	}
        }

        this.fn_addObj = function (strId,obj)
        {
        	return this.div_Tab.addChild(strId, obj);
        }

        this.fn_redrawTab = function ()
        {
        	var tabObj;
        	var exBtnObj;

        	this.fn_checkShowBtnAll();
        	this.fn_setTabSpinBtnShow();
        }

        /*
         Checking all the tab be visible,if they can be visible procesing for handling 
         */
        this.fn_checkShowBtnAll = function ()
        {
        	if (this.ds_Tab.rowcount == 0) 
        	{
        		return;
        	}

        	var tabFirstObj = this.fn_findObj(this.ds_Tab.getColumn(0, "TAB_ID"));
        	var tabLastObj = this.fn_findObj(this.ds_Tab.getColumn(this.ds_Tab.rowcount - 1, "TAB_ID"));

        	var nLeft = tabFirstObj.getOffsetLeft();
        	var nRight = tabLastObj.getOffsetRight();

        
        	if (this.div_Tab.getOffsetWidth() >= (nRight - nLeft)) 
        	{
        		this.fn_moveFirst(0);
        		return;
        	}
        }

        this.fn_getLeft = function (tabID)
        {
        	var curRow = this.ds_Tab.findRow("TAB_ID", tabID);

        	if (curRow == 0) 
        	{
        		return this.FIRST_GAP;
        	}
        	var prevTab = this.fn_findObj(this.ds_Tab.getColumn(curRow - 1, "TAB_ID"));
        	return prevTab.getOffsetRight() + this.BTN_GAP;
        }

        this.fn_getWidth = function (tabID,name)
        {
        	var curRow = this.ds_Tab.findRow("TAB_ID", tabID);
        	var TabObj = this.fn_findObj(this.ds_Tab.getColumn(curRow, "TAB_ID"));
        	//var objFont = this.gfn_getObjFont(10, "Dotum", true);
        	var objSize = this.gfn_getTextSize(name,  objFont);
        	return objSize.cx;
        }

        
        this.btn_MdiList_onclick = function (obj,e)
        {
        	this.PopLink.ListBoxLink.set_innerdataset("");
        	this.PopLink.ListBoxLink.set_innerdataset(this.ds_Tab);
        	
        	var nX = system.clientToScreenX(obj, 0) + obj.getOffsetWidth() - this.PopLink.getOffsetWidth();
        	var nY = system.clientToScreenY(obj, 0) + obj.getOffsetHeight();
        	
        	if (this.PopLink.isPopup() == false) 
        	{
        		var RetVal = this.PopLink.trackPopup(nX, nY - this.PopLink.getOffsetHeight());
        	}
        	else 
        	{
        		this.PopLink.closePopup();
        	}
        }

        this.PopLink_ListBoxLink_onitemclick = function (obj,e)
        {	
        	this.gfn_activeForm(e.itemvalue);
        	this.PopLink.closePopup();
        }

        this.btn_arrange_onclick = function(obj,e)
        {
            var strType = this.gfn_Replace(obj.name, "btn_", "");
        	this.gfn_ArrangeWin(strType);
        }

        this.btn_closeAll_onkillfocus = function(obj,e)
        {
        	if(e.newcomponent.name == "Setfocus")
        	{
        		if ( parseInt(application.gds_openMenu.rowcount)== 0)
        		{
        			 gv_topFrame.form.frame_focus.setFocus();
        		}else{
        		
        		    var oAcitveFrame = gv_workFrame.getActiveFrame();
        		    
        			oAcitveFrame.form.frame_focus.setFocus() ;
        		}	
        	}	
        }
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload", this.form_onload, this);
            this.addEventHandler("onsize", this.form_onsize, this);
            this.btn_closeAll.addEventHandler("onclick", this.btn_arrange_onclick, this);
            this.btn_closeAll.addEventHandler("onkillfocus", this.btn_closeAll_onkillfocus, this);
            this.btn_maximize.addEventHandler("onclick", this.btn_arrange_onclick, this);
            this.btn_vertical.addEventHandler("onclick", this.btn_arrange_onclick, this);
            this.btn_tilehorizontal.addEventHandler("onclick", this.btn_arrange_onclick, this);
            this.btn_cascade.addEventHandler("onclick", this.btn_arrange_onclick, this);
            this.div_Tab.addEventHandler("onclick", this.div_Tab_onclick, this);
            this.btn_PreMdi.addEventHandler("onclick", this.btn_PreMdi_onclick, this);
            this.btn_NexMdi.addEventHandler("onclick", this.btn_NexMdi_onclick, this);
            this.frame_focus.addEventHandler("onsetfocus", this.Setfocus_onsetfocus, this);
            this.Setfocus.addEventHandler("oneditclick", this.Edit00_oneditclick, this);

        };

        this.loadIncludeScript("tabFrame.xfdl");

       
    };
}
)();
