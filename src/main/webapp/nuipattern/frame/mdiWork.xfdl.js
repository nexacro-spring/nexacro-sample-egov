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
                this.set_name("workFrame");
                this.set_classname("form_parent_general");
                this.set_scrollbars("none");
                this.set_cssclass("frm_WF");
                this._setFormPosition(0,0,800,520);
            }
            this.getSetter("inheritanceid").set("");
            this.style.set_background("white");

            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Static("stc_title", "absolute", "0", "0", null, "30", "0", null, this);
            obj.set_taborder("2");
            obj.set_text("Title");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Div("div_Work", "absolute", "10", "10", null, null, "10", "1", this);
            obj.set_taborder("5");
            obj.style.set_border("0 none #808080,0 none #808080,1 solid #bcc5dbff,0 none #808080");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 800, 520, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("form_parent_general");
            		p.getSetter("inheritanceid").set("");
            		p.set_scrollbars("none");
            		p.set_cssclass("frm_WF");
            		p.style.set_background("white");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information

            
            // Remove Reference
            obj = null;
        };
        

        
        // User Script
        this.addIncludeScript("mdiWork.xfdl", "lib::lib_Form.xjs");
        this.registerScript("mdiWork.xfdl", function() {
        /***********************************************************************
         * 01. 업무구분 : HTML5 Frame
         * 02. 화면명   : workFrame.xfdl
         * 03. 화면설명 :
         * 04. 작성일   :
         * 05. 작성자   :
         * 06. 수정이력 :
         ***********************************************************************
         *     수정일     작성자   내용
         ***********************************************************************
         *
         ***********************************************************************
         */
        /************************************************************************************************
         * 1. 공통 라이브러리
         ************************************************************************************************/
        //include "lib::lib_Form.xjs"

        
        /************************************************************************************************
         * 2. 변수 선언부
         ************************************************************************************************/
        this.pv_winKey;		//업무화면 Key코드
        this.pv_menuId;		//메뉴 ID
        this.fCloseFrame = "";	//	
        	
        /* 화면 Load Event 처리*/
        this.form_onload = function (obj,e)
        {
        	
        	var pv_winKey = this.gfn_getFrameAguments("winKey");	
        	var sPageUrl = this.gfn_getFrameAguments("pageUrl");
        	var sMenuNm = this.gfn_getFrameAguments("menuNm");
        	var sMenuId = this.gfn_getFrameAguments("menuId");
        	var sViewTitle = sMenuNm+" ("+sMenuId+")";
        	this.div_Work.set_url(sPageUrl);
        	this.stc_title.set_text(sViewTitle);
        	
        	//this.f_getSource();	
        }

        this.gfn_Exit = function ()
        {
        	application.gds_openMenu.clearData();
        }

        this.frame_focus_onkillfocus = function(obj,e)
        {
        	if (e.newcomponent.name == "tab_Setfocus")
        	{
        		gv_topFrame.form.frame_focus.setFocus();
        	}
        }   

        function f_close()
        {
        	if(this.gfn_isEmpty(div_Work.url) == true) close();
        	div_Work.url = "";
        	this.fCloseFrame = "F";
        	if(this.gfn_isEmpty(div_Work.url) == true) close();
        }

        this.workFrame_onactivate = function(obj,e)
        {
        	var menuGrp='';
        	var menuFilterGrp ='';
        	var winKey = gv_workFrame.getActiveFrame().name;
        	
        	var gRow = application.gds_openMenu.findRow('WIN_ID', winKey);
        	var menuId = application.gds_openMenu.getColumn(gRow, application.gv_MenuIdCol);
        	// 현재 left Menu 그룹
        	if (gv_leftFrame.form.ds_menu.rowcount >0) {
        		menuGrp = gv_leftFrame.form.ds_menu.getColumn(0, application.gv_MenuIdCol);
        		menuGrp = menuGrp.substring(0,1);	
        	}

        	// 선택된 화면이 현재left Menu그룹이 아니면 left Menu dataset 재구성
        	if (menuId.substring(0,1) != menuGrp)
        	{
        		menuFilterGrp = menuId.substring(0,1) +'000';		
        		application.gds_menu.filter(application.gv_MenuGIdCol + "=='"+menuFilterGrp+"' && MENU_LEVEL!=0");
        		gv_leftFrame.form.ds_menu.copyData(application.gds_menu, true);
        		application.gds_menu.filter();

        		var lRow = gv_leftFrame.form.ds_menu.findRow(application.gv_MenuIdCol, menuId);
        		gv_leftFrame.form.ds_menu.set_rowposition(lRow);
        	}else{
        		var lRow = gv_leftFrame.form.ds_menu.findRow(application.gv_MenuIdCol, menuId);		
        		if (lRow>-1)
        			gv_leftFrame.form.ds_menu.set_rowposition(lRow);
        	}

        	application.gds_openMenu.set_rowposition(gRow);
        }

        
        this.f_ChangeUrl = function(sUrl)
        {
        	if( this.gfn_isNull(sUrl) == false )
        		this.div_Description.Wb.set_url(application.gv_Desc_en + sUrl);	
        }

        // gfnService 처리 후 callback 처리
        this.fn_callback = function (strServiceId,strErrorCode,strErrorMsg)
        {

        	if (strErrorCode < 0) 
        	{
        		return this.gfn_Alert(strErrorMsg, "error");
        	}  

        	switch (strServiceId) 
        	{
        		case "getSource":
        			break;
        		default:
        			break;
        	}
        }

        //Tab변경시 값 셋팅
        this.f_setSource = function(idx)
        {
        	if( this.Ds_Contents.rowcount == 0 ) return;
        	
        	if( idx == 1 ){ //Form Source
        		if( this.Ds_Contents.getColumn(0,"contents").indexOf('<Objects/>') > -1 ){
        			var strLen = this.Ds_Contents.getColumn(0,"contents").indexOf('<Objects/>') + 10;
        		} else {	
        			var strLen = this.Ds_Contents.getColumn(0,"contents").indexOf('</Layouts>') + 10;
        		}	
        		this.div_Source.TxtContents.set_value(this.Ds_Contents.getColumn(0,"contents").substr(0 , strLen)+"\n  </Form>\n</FDL>");
        	} else if( idx == 2 ){ //Form Script
        		var strStartIdx = this.Ds_Contents.getColumn(0,"contents").indexOf('<![CDATA[') + 9;
        		var strEndIdx = this.Ds_Contents.getColumn(0,"contents").indexOf(']]></Script>');
        		var strLen = strEndIdx - strStartIdx;
        		this.div_Script.TxtContents.set_value(this.Ds_Contents.getColumn(0,"contents").substr(strStartIdx , strLen));		
        	} else if( idx == 3 ){ //Form Description
        		
        	} 
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

        this.workFrame_onclose = function(obj,e)
        {
        	if(gv_workFrame.getActiveFrame() != null){
        		
        		var winId = gv_workFrame.getActiveFrame().name;
        		if( gv_mdiTabFrame.form.bClose ) {
        			gv_mdiTabFrame.form.bClose = false;
        			gv_mdiTabFrame.form.gfn_TabOnClose(winId);
        		}
             }
        }
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload", this.form_onload, this);
            this.addEventHandler("onactivate", this.workFrame_onactivate, this);
            this.addEventHandler("onclose", this.workFrame_onclose, this);

        };

        this.loadIncludeScript("mdiWork.xfdl");

       
    };
}
)();
