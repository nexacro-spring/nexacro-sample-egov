(function()
{
    return function()
    {
        // Theme, Component URI Setting
        this._theme_uri = "./_theme_/";
        this._globalvar_uri = "globalvars.xml";
        
        this.loadTypedefition = function()
        {
            // this._addService(prefixid, type, url, cachelevel, codepage, language, version, communication);
            this._addService("default_typedef.xml", "sample", "form", "./sample/", "", null, "", "0", "0");
            this._addService("default_typedef.xml", "frame", "form", "./frame/", "", null, "", "0", "0");
            this._addService("default_typedef.xml", "svcurl", "JSP", "http://localhost:8080/nexacro-sample/", "none", null, "", "0", "0");
            this._addService("default_typedef.xml", "lib", "form", "./lib/", "", null, "", "0", "0");
            this._addService("default_typedef.xml", "images", "file", "./images/", "", null, "", "0", "0");
            this._addService("default_typedef.xml", "secureurl", "js", "security://localhost:8080/nexacro-sample/", "none", null, "", "0", "0");

            
            this._component_uri = (this._arg_compurl ? this._arg_compurl : "./nexacro14lib/component/");
            
            // load components
            var registerclass = [
            		{"id":"Div", "classname":"nexacro.Div", "type":"JavaScript"},
            		{"id":"Button", "classname":"nexacro.Button", "type":"JavaScript"},
            		{"id":"PopupDiv", "classname":"nexacro.PopupDiv", "type":"JavaScript"},
            		{"id":"Combo", "classname":"nexacro.Combo", "type":"JavaScript"},
            		{"id":"CheckBox", "classname":"nexacro.CheckBox", "type":"JavaScript"},
            		{"id":"ListBox", "classname":"nexacro.ListBox", "type":"JavaScript"},
            		{"id":"Edit", "classname":"nexacro.Edit", "type":"JavaScript"},
            		{"id":"MaskEdit", "classname":"nexacro.MaskEdit", "type":"JavaScript"},
            		{"id":"TextArea", "classname":"nexacro.TextArea", "type":"JavaScript"},
            		{"id":"Menu", "classname":"nexacro.Menu", "type":"JavaScript"},
            		{"id":"Tab", "classname":"nexacro.Tab", "type":"JavaScript"},
            		{"id":"Tabpage", "classname":"nexacro.Tabpage", "type":"JavaScript"},
            		{"id":"ImageViewer", "classname":"nexacro.ImageViewer", "type":"JavaScript"},
            		{"id":"Radio", "classname":"nexacro.Radio", "type":"JavaScript"},
            		{"id":"Calendar", "classname":"nexacro.Calendar", "type":"JavaScript"},
            		{"id":"Static", "classname":"nexacro.Static", "type":"JavaScript"},
            		{"id":"Grid", "classname":"nexacro.Grid", "type":"JavaScript"},
            		{"id":"Spin", "classname":"nexacro.Spin", "type":"JavaScript"},
            		{"id":"PopupMenu", "classname":"nexacro.PopupMenu", "type":"JavaScript"},
            		{"id":"GroupBox", "classname":"nexacro.GroupBox", "type":"JavaScript"},
            		{"id":"ProgressBar", "classname":"nexacro.ProgressBar", "type":"JavaScript"},
            		{"id":"ActiveX", "classname":"nexacro.ActiveX", "type":"JavaScript"},
            		{"id":"Dataset", "classname":"nexacro.NormalDataset", "type":"JavaScript"},
            		{"id":"FileUpload", "classname":"nexacro.FileUpload", "type":"JavaScript"},
            		{"id":"ExcelImportObject", "classname":"nexacro.ExcelImportObject", "type":"JavaScript"},
            		{"id":"ExcelExportObject", "classname":"nexacro.ExcelExportObject", "type":"JavaScript"},
            		{"id":"ExtFileUpload", "classname":"nexacro.ExtFileUpload", "type":"JavaScript"},
            		{"id":"ExtFileDownload", "classname":"nexacro.ExtFileDownload", "type":"JavaScript"},
            		{"id":"security", "classname":"nexacro.SecurityAdp", "type":"Protocol"}
            ];
            this._addClasses(registerclass);
        };
        
        this.on_loadGlobalVariables = function()
        {
            // global variable
            this._addVariable("gvUserID", "AA001", false);

            
            // global image
            this._addImage("btn_save", "images::btn_save.bmp");
            this._addImage("new_tx", "images::new_tx.bmp");
            this._addImage("BLUE", "images::BLUE.GIF");
            this._addImage("edit", "images::edit.png");

            
            // global dataset
            var obj = null;
            obj = new Dataset("gds_menu", this);
            obj._setContents("<ColumnInfo><Column id=\"MENU_NAME\" type=\"string\" size=\"32\" prop=\"\"/><Column id=\"MENU_SEQ\" type=\"int\" size=\"4\" prop=\"\"/><Column id=\"MENU_OPTP\" type=\"string\" size=\"32\" prop=\"\"/><Column id=\"PAGE_URL\" type=\"string\" size=\"32\" prop=\"\"/><Column id=\"MENU_TOP\" type=\"string\" size=\"32\" prop=\"\"/><Column id=\"MENU_ID\" type=\"string\" size=\"32\" prop=\"\"/><Column id=\"MENU_GRP\" type=\"string\" size=\"32\" prop=\"\"/><Column id=\"CREATE_DT\" type=\"string\" size=\"32\" prop=\"\"/><Column id=\"MENU_LEVEL\" type=\"int\" size=\"4\" prop=\"\"/><Column id=\"PAGE_ID\" type=\"string\" size=\"32\" prop=\"\"/><Column id=\"PAGE_NAME\" type=\"string\" size=\"32\" prop=\"\"/><Column id=\"MENU_ARGS\" type=\"string\" size=\"32\" prop=\"\"/><Column id=\"MENU_STAT\" type=\"string\" size=\"32\" prop=\"\"/><Column id=\"CREATE_USER\" type=\"string\" size=\"32\" prop=\"\"/><Column id=\"UPDATE_DT\" type=\"string\" size=\"32\" prop=\"\"/><Column id=\"UPDATE_USER\" type=\"string\" size=\"32\" prop=\"\"/><Column id=\"MENU_DESC\" type=\"string\" size=\"32\" prop=\"\"/></ColumnInfo><Rows><Row><Col id=\"MENU_NAME\">화면유형</Col><Col id=\"MENU_SEQ\">0</Col><Col id=\"MENU_ID\">1000</Col><Col id=\"MENU_GRP\">1000</Col><Col id=\"CREATE_DT\">20120831000000000</Col><Col id=\"MENU_LEVEL\">0</Col><Col id=\"MENU_STAT\">VIEW</Col><Col id=\"CREATE_USER\">test</Col><Col id=\"UPDATE_DT\">20120831000000000</Col><Col id=\"UPDATE_USER\">test</Col></Row><Row><Col id=\"MENU_NAME\">Single Detail</Col><Col id=\"MENU_SEQ\">1</Col><Col id=\"MENU_OPTP\">MAIN</Col><Col id=\"PAGE_URL\">sample::Pattern_01.xfdl</Col><Col id=\"MENU_TOP\">1000</Col><Col id=\"MENU_ID\">1001</Col><Col id=\"MENU_GRP\">1000</Col><Col id=\"CREATE_DT\">20120831000000000</Col><Col id=\"MENU_LEVEL\">1</Col><Col id=\"PAGE_ID\">userMgmt.xfdl</Col><Col id=\"PAGE_NAME\">사용자 그룹관리</Col><Col id=\"MENU_ARGS\">admin</Col><Col id=\"MENU_STAT\">VIEW</Col><Col id=\"CREATE_USER\">test</Col><Col id=\"UPDATE_DT\">20120905000000000</Col><Col id=\"UPDATE_USER\">test</Col><Col id=\"MENU_DESC\">II</Col></Row><Row><Col id=\"MENU_NAME\">Multi Detail</Col><Col id=\"MENU_SEQ\">1</Col><Col id=\"MENU_OPTP\">MAIN</Col><Col id=\"PAGE_URL\">sample::Pattern_02.xfdl</Col><Col id=\"MENU_TOP\">1000</Col><Col id=\"MENU_ID\">1002</Col><Col id=\"MENU_GRP\">1000</Col><Col id=\"CREATE_DT\">20120831000000000</Col><Col id=\"MENU_LEVEL\">1</Col><Col id=\"PAGE_ID\">userMgmt.xfdl</Col><Col id=\"PAGE_NAME\">사용자 그룹관리</Col><Col id=\"MENU_ARGS\">admin</Col><Col id=\"MENU_STAT\">VIEW</Col><Col id=\"CREATE_USER\">test</Col><Col id=\"UPDATE_DT\">20120905000000000</Col><Col id=\"UPDATE_USER\">test</Col><Col id=\"MENU_DESC\">II</Col></Row><Row><Col id=\"MENU_NAME\">Master Detail</Col><Col id=\"MENU_SEQ\">1</Col><Col id=\"MENU_OPTP\">MAIN</Col><Col id=\"PAGE_URL\">sample::Pattern_08.xfdl</Col><Col id=\"MENU_TOP\">1000</Col><Col id=\"MENU_ID\">1003</Col><Col id=\"MENU_GRP\">1000</Col><Col id=\"CREATE_DT\">20120831000000000</Col><Col id=\"MENU_LEVEL\">1</Col><Col id=\"PAGE_ID\">userMgmt.xfdl</Col><Col id=\"PAGE_NAME\">사용자 그룹관리</Col><Col id=\"MENU_ARGS\">admin</Col><Col id=\"MENU_STAT\">VIEW</Col><Col id=\"CREATE_USER\">test</Col><Col id=\"UPDATE_DT\">20120905000000000</Col><Col id=\"UPDATE_USER\">test</Col><Col id=\"MENU_DESC\">II</Col></Row><Row><Col id=\"MENU_NAME\">Bulk Data</Col><Col id=\"MENU_SEQ\">1</Col><Col id=\"MENU_OPTP\">MAIN</Col><Col id=\"PAGE_URL\">sample::Pattern_05.xfdl</Col><Col id=\"MENU_TOP\">1000</Col><Col id=\"MENU_ID\">1004</Col><Col id=\"MENU_GRP\">1000</Col><Col id=\"CREATE_DT\">20120831000000000</Col><Col id=\"MENU_LEVEL\">1</Col><Col id=\"PAGE_ID\">userMgmt.xfdl</Col><Col id=\"PAGE_NAME\">사용자 그룹관리</Col><Col id=\"MENU_ARGS\">admin</Col><Col id=\"MENU_STAT\">VIEW</Col><Col id=\"CREATE_USER\">test</Col><Col id=\"UPDATE_DT\">20120905000000000</Col><Col id=\"UPDATE_USER\">test</Col><Col id=\"MENU_DESC\">II</Col></Row><Row><Col id=\"MENU_NAME\">Security</Col><Col id=\"MENU_SEQ\">1</Col><Col id=\"MENU_OPTP\">MAIN</Col><Col id=\"PAGE_URL\">sample::Pattern_06.xfdl</Col><Col id=\"MENU_TOP\">1000</Col><Col id=\"MENU_ID\">1005</Col><Col id=\"MENU_GRP\">1000</Col><Col id=\"CREATE_DT\">20120831000000000</Col><Col id=\"MENU_LEVEL\">1</Col><Col id=\"PAGE_ID\">userMgmt.xfdl</Col><Col id=\"PAGE_NAME\">사용자 그룹관리</Col><Col id=\"MENU_ARGS\">admin</Col><Col id=\"MENU_STAT\">VIEW</Col><Col id=\"CREATE_USER\">test</Col><Col id=\"UPDATE_DT\">20120905000000000</Col><Col id=\"UPDATE_USER\">test</Col><Col id=\"MENU_DESC\">II</Col></Row><Row><Col id=\"MENU_NAME\">Excel Export&amp;Import</Col><Col id=\"MENU_SEQ\">1</Col><Col id=\"MENU_OPTP\">MAIN</Col><Col id=\"PAGE_URL\">sample::Pattern_04.xfdl</Col><Col id=\"MENU_TOP\">1000</Col><Col id=\"MENU_ID\">1006</Col><Col id=\"MENU_GRP\">1000</Col><Col id=\"CREATE_DT\">20120831000000000</Col><Col id=\"MENU_LEVEL\">1</Col><Col id=\"PAGE_ID\">userMgmt.xfdl</Col><Col id=\"PAGE_NAME\">사용자 그룹관리</Col><Col id=\"MENU_ARGS\">admin</Col><Col id=\"MENU_STAT\">VIEW</Col><Col id=\"CREATE_USER\">test</Col><Col id=\"UPDATE_DT\">20120905000000000</Col><Col id=\"UPDATE_USER\">test</Col><Col id=\"MENU_DESC\">II</Col></Row><Row><Col id=\"MENU_NAME\">File Up&amp;Down</Col><Col id=\"MENU_SEQ\">1</Col><Col id=\"MENU_OPTP\">MAIN</Col><Col id=\"PAGE_URL\">sample::Pattern_07.xfdl</Col><Col id=\"MENU_TOP\">1000</Col><Col id=\"MENU_ID\">1007</Col><Col id=\"MENU_GRP\">1000</Col><Col id=\"CREATE_DT\">20120831000000000</Col><Col id=\"MENU_LEVEL\">1</Col><Col id=\"PAGE_ID\">userMgmt.xfdl</Col><Col id=\"PAGE_NAME\">사용자 그룹관리</Col><Col id=\"MENU_ARGS\">admin</Col><Col id=\"MENU_STAT\">VIEW</Col><Col id=\"CREATE_USER\">test</Col><Col id=\"UPDATE_DT\">20120905000000000</Col><Col id=\"UPDATE_USER\">test</Col><Col id=\"MENU_DESC\">II</Col></Row></Rows>");
            this._addDataset(obj.name, obj);
            obj = null;

            obj = new Dataset("gds_openMenu", this);
            obj._setContents("<ColumnInfo><Column id=\"WIN_ID\" type=\"STRING\" size=\"256\"/><Column id=\"MENU_ID\" type=\"STRING\" size=\"256\"/><Column id=\"TITLE\" type=\"STRING\" size=\"256\"/><Column id=\"Desc_Url\" type=\"STRING\" size=\"256\"/><Column id=\"Desc_Url_ko\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this._addDataset(obj.name, obj);
            obj = null;

            obj = new Dataset("gds_message", this);
            obj._setContents("<ColumnInfo><Column id=\"MSG_CD\" type=\"string\" size=\"32\"/><Column id=\"MSG_TYPE\" type=\"string\" size=\"32\"/><Column id=\"MSG_NM\" type=\"string\" size=\"32\"/><Column id=\"MSG_NOTE\" type=\"string\" size=\"32\"/></ColumnInfo><Rows><Row><Col id=\"MSG_CD\">fail.common.msg</Col><Col id=\"MSG_TYPE\">CO</Col><Col id=\"MSG_NM\">error ocurred!</Col></Row><Row><Col id=\"MSG_CD\">fail.common.sql</Col><Col id=\"MSG_TYPE\">CO</Col><Col id=\"MSG_NM\">sql error ocurred! error code: {0}, error msg: {1}</Col></Row><Row><Col id=\"MSG_CD\">info.nodata.msg</Col><Col id=\"MSG_TYPE\">CO</Col><Col id=\"MSG_NM\">no data found.</Col></Row><Row><Col id=\"MSG_CD\">image.errorBg</Col><Col id=\"MSG_TYPE\">CO</Col><Col id=\"MSG_NM\">error_en</Col></Row><Row><Col id=\"MSG_CD\">errors.required</Col><Col id=\"MSG_TYPE\">CO</Col><Col id=\"MSG_NM\">{0} is required.</Col></Row><Row><Col id=\"MSG_CD\">accounting.hgr_store_credit.amount.error</Col><Col id=\"MSG_TYPE\">AC</Col><Col id=\"MSG_NM\">HGR Store Credit does not have to remove.</Col></Row><Row><Col id=\"MSG_CD\">success.insert</Col><Col id=\"MSG_TYPE\">PU</Col><Col id=\"MSG_NM\">Transaction has been completed successfully.</Col></Row><Row><Col id=\"MSG_CD\">success.update</Col><Col id=\"MSG_TYPE\">PU</Col><Col id=\"MSG_NM\">Transaction has been completed successfully.</Col></Row><Row><Col id=\"MSG_CD\">success.delete</Col><Col id=\"MSG_TYPE\">PU</Col><Col id=\"MSG_NM\">Transaction has been completed successfully.</Col></Row><Row><Col id=\"MSG_CD\">success.select</Col><Col id=\"MSG_TYPE\">PU</Col><Col id=\"MSG_NM\">Transaction has been completed successfully.</Col></Row><Row><Col id=\"MSG_CD\">transaction.complete</Col><Col id=\"MSG_TYPE\">CO</Col><Col id=\"MSG_NM\">Transaction has been completed successfully.</Col></Row><Row><Col id=\"MSG_CD\">comm.select.message</Col><Col id=\"MSG_TYPE\">CO</Col><Col id=\"MSG_NM\">Please select {0}</Col></Row><Row><Col id=\"MSG_CD\">comm.list.select.message</Col><Col id=\"MSG_TYPE\">CO</Col><Col id=\"MSG_NM\">Please select from the list.</Col></Row><Row><Col id=\"MSG_CD\">success.complete</Col><Col id=\"MSG_TYPE\">CO</Col><Col id=\"MSG_NM\">{0} has been completed successfully.</Col></Row><Row><Col id=\"MSG_CD\">comm.select.not.found</Col><Col id=\"MSG_TYPE\">CO</Col><Col id=\"MSG_NM\">There is no data.</Col></Row><Row><Col id=\"MSG_CD\">comm.input.message</Col><Col id=\"MSG_TYPE\">CO</Col><Col id=\"MSG_NM\">Please enter {0}</Col></Row><Row><Col id=\"MSG_CD\">comm.validation.message</Col><Col id=\"MSG_TYPE\">CO</Col><Col id=\"MSG_NM\">{0} is invalid.</Col></Row><Row><Col id=\"MSG_CD\">comm.print.barcode</Col><Col id=\"MSG_TYPE\">CO</Col><Col id=\"MSG_NM\">Want to print bar codes?</Col></Row><Row><Col id=\"MSG_CD\">main.title</Col><Col id=\"MSG_TYPE\">CO</Col><Col id=\"MSG_NM\">:: HGR Industrial Surplus - We Buy  Everything! ::</Col></Row><Row><Col id=\"MSG_CD\">main.negotiation</Col><Col id=\"MSG_TYPE\">CO</Col><Col id=\"MSG_NM\">Looks back on 30 minutes after</Col></Row><Row><Col id=\"MSG_CD\">error.incorrect</Col><Col id=\"MSG_TYPE\">CO</Col><Col id=\"MSG_NM\">{0} is incorrect</Col></Row><Row><Col id=\"MSG_CD\">comm.button.message</Col><Col id=\"MSG_TYPE\">CO</Col><Col id=\"MSG_NM\">Please click the {0} button.</Col></Row><Row><Col id=\"MSG_CD\">comm.data.check_status</Col><Col id=\"MSG_TYPE\">CO</Col><Col id=\"MSG_NM\">The status of data has changed.</Col></Row><Row><Col id=\"MSG_CD\">comm.success.complete</Col><Col id=\"MSG_TYPE\">CO</Col><Col id=\"MSG_NM\">{0} has been completed successfully.</Col></Row><Row><Col id=\"MSG_CD\">comm.register</Col><Col id=\"MSG_TYPE\">CO</Col><Col id=\"MSG_NM\">Please save {0} information.</Col></Row><Row><Col id=\"MSG_CD\">comm.already.registered</Col><Col id=\"MSG_TYPE\">CO</Col><Col id=\"MSG_NM\">{0} already exists.</Col></Row><Row><Col id=\"MSG_CD\">comm.register.fail</Col><Col id=\"MSG_TYPE\">CO</Col><Col id=\"MSG_NM\">Failed to register. Please try again.</Col></Row><Row><Col id=\"MSG_CD\">common.date.input</Col><Col id=\"MSG_TYPE\">CO</Col><Col id=\"MSG_NM\">Please enter date.</Col></Row><Row><Col id=\"MSG_CD\">success.inspection.complete</Col><Col id=\"MSG_TYPE\">CO</Col><Col id=\"MSG_NM\">Inspection has been completed</Col></Row><Row><Col id=\"MSG_CD\">success.bid.complete</Col><Col id=\"MSG_TYPE\">CO</Col><Col id=\"MSG_NM\">Bid has been completed</Col></Row><Row><Col id=\"MSG_CD\">success.createoffer.complete</Col><Col id=\"MSG_TYPE\">CO</Col><Col id=\"MSG_NM\">Create Offer has been completed</Col></Row><Row><Col id=\"MSG_CD\">success.po.complete</Col><Col id=\"MSG_TYPE\">CO</Col><Col id=\"MSG_NM\">PO has been completed</Col></Row><Row><Col id=\"MSG_CD\">success.revised.complete</Col><Col id=\"MSG_TYPE\">CO</Col><Col id=\"MSG_NM\">Revised Offer has been completed</Col></Row><Row><Col id=\"MSG_CD\">success.exception.complete</Col><Col id=\"MSG_TYPE\">CO</Col><Col id=\"MSG_NM\">Exception has been completed</Col></Row></Rows>");
            this._addDataset(obj.name, obj);
            obj = null;


            

        };
        
        // property, event, createMainFrame
        this.on_initApplication = function()
        {
            // properties
            this.set_id("MDI_Main");
            this.set_version("");
            this.set_tracemode("");
            this.set_themeid("nexacro.xtheme");

            if (this._is_attach_childframe)
            	return;

            
            // frame
            var mainframe = this.createMainFrame("mainframe", "absolute", "0", "0", "1024", "550", null, null, this);
            mainframe.set_resizable("true");
            mainframe.set_showtitlebar("true");
            mainframe.set_showstatusbar("true");
            mainframe.set_titletext("ABLE_Frame");
            mainframe.on_createBodyFrame = this.mainframe_createBodyFrame;

            // tray
            var tray = null;

        };
        

        
        this.mainframe_createBodyFrame = function()
        {
            var obj = new ChildFrame("childframe", "absolute", null, null, null, null, null, null, "", this);
            
            this.addChild(obj.name, obj);
            this.frame = obj;
            
            obj.set_formurl(application._quickview_formurl);
            obj.set_showtitlebar("false");
            obj.set_showstatusbar("false");
            
            obj = null;
        };       
        
        this.on_initEvent = function()
        {
            this.addEventHandler("onload", this.application_onload, this);

        };        
        
        // screeninfo
        this.loadScreenInfo = function()
        {

        }
        // script Compiler
        this.registerScript("mdi_pattern.xadl", function() {
        /**********************************************************************************
         *  공통  변수, 객체, 상수를 정의
         **********************************************************************************/
        /* 공통처리에 사용할 컨트롤들의 기능 플래그(권한처리 시 사용)*/
        this.gv_loadCnt = 0;

        /* 메뉴정보 칼럼 변수*/
        /*
         (index 0 ~ 3에 권한속성을 설정 자리순서대로 insert|update|delete|print 순으로 설정한 걸 가정(각 자리 "1":가능, "0": 불가능)
         */
        this.gv_MenuIdCol = "MENU_ID"; //아이디
        this.gv_MenuNameCol = "MENU_NAME"; //명칭
        this.gv_MenuLvlCol = "MENU_LEVEL"; //레벨ㄴ
        this.gv_MenuGIdCol = "MENU_GRP"; //메뉴그룹
        this.gv_MenuStatCol = "MENU_STAT"; //메뉴상태 ('VIEW':표시, 'HIDE':미표시, 'MAKE':개발중)
        this.gv_MenuUrlCol = "PAGE_URL"; //페이지경로
        this.gv_MenuUrlID = "PAGE_ID";
        this.gv_MenuTypeCol = "PAGE_EXTP"; //페이지실행타입 'FORM': XPLATFORM 폼, 'LINK': 웹페이지, 'EXEC': 외부모듈 실행
        this.gv_MenuOPTPCol = "MENU_OPTP"; //메뉴오픈타입 (팝업, 메인)
        this.gv_MenuAuthCol = "MENU_AUTH"; //메뉴에 대한 권한
        this.gv_MenuArgCol = "MENU_ARGS"; //메뉴파라메터
        ct_menuIdCol ="MENU_ID"; //아이디
        ct_menuUrlCol = "PAGE_ID"; //페이지ID
        ct_menuNaviCol = "MENU_ARGS"; //페이지경로

        
        /* 열린메뉴정보 칼럼 변수*/
        this.gv_WinIdCol = "WIN_ID"; //윈도우(프레임)아이디(열린 메뉴의 윈도우 아이디)
        this.gv_TitleCol = "TITLE"; //타이틀
        this.gv_DescUrl = "Desc_Url"; //Description Url
        this.gv_DescUrl_ko = "Desc_Url_ko"; // //Description Url
        this.gv_openStatus = "maximize"; //새로운 프레임이 열려지는 상태
        this.gv_openOnlyOne = true; //동일한 메뉴를 하나 이상 오픈가능 여부(true:하나만 오픈, false:하나이상 오픈)
        this.gv_openMaxFrame = 10; //열리는 프레임 최대 갯수

        // 프레임셋 관련 변수
        this.gv_vFrameSet   = "";     
        this.gv_vFrameSet1  = "";
        this.gv_topFrame    = "";
        this.gv_workFrame   = "";
        this.gv_hFrameSet   = "";
        this.gv_leftFrame   = "";
        this.gv_mdiTabFrame = "";

        
        this.application_onload = function(obj,e)
        {

        	gv_vFrameSet  = application.mainframe.VFrameSet;                       //VFrameSet
            gv_vFrameSet1  = application.mainframe.VFrameSet.HFrameSet.VFrameSet1; //VFrameSet1
        	gv_topFrame   = application.mainframe.VFrameSet.TopFrame;              //TopFrame	
        	gv_workFrame  = application.mainframe.VFrameSet.HFrameSet.VFrameSet1.WorkFrame;         //WorkForm
        	gv_hFrameSet  = application.mainframe.VFrameSet.HFrameSet;             //HFrame
        	gv_leftFrame  = application.mainframe.VFrameSet.HFrameSet.LeftFrame;   //leftFrame	
        	gv_mdiTabFrame  = application.mainframe.VFrameSet.HFrameSet.VFrameSet1.MdiTabFrame;

        	///////////////////////로그인 창 띄우기///////////////////////////////////////////////
        	this.loginCheck();
        	////////////////////////////////////////////////////////////////////////////////////////
        }

        // 로그인 페이지 출력
        this.loginCheck = function()
        {
            gv_vFrameSet.set_separatesize("0,*,0");
        }

        this.gfn_loadChk = function()
        {	
        	if( this.gv_loadCnt == 3 )
        	{
        		//trace( this.gv_loadCnt);
        	}  
        }
        
        });


                
        this.loadTypedefition();
        this.loadScreenInfo();
        this.loadTheme("nexacro.xtheme");


    };
}
)();
