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
                this.set_classname("CodeMgmt");
                this.set_titletext("공통코드관리");
                this._setFormPosition(0,0,800,422);
            }
            this.getSetter("inheritanceid").set("");

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_codeGroupList", this);
            obj.set_firefirstcount("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"groupCd\" type=\"string\" size=\"10\"/><Column id=\"groupNm\" type=\"string\" size=\"20\"/><Column id=\"useFg\" type=\"string\" size=\"1\"/><Column id=\"createUser\" type=\"string\" size=\"12\"/><Column id=\"createDt\" type=\"STRING\" size=\"20\"/><Column id=\"updateUser\" type=\"string\" size=\"12\"/><Column id=\"updateDt\" type=\"STRING\" size=\"20\"/><Column id=\"groupDesc\" type=\"string\" size=\"100\"/></ColumnInfo><Rows><Row><Col id=\"groupCd\">10000</Col><Col id=\"groupNm\">화면연동</Col><Col id=\"useFg\">1</Col><Col id=\"createUser\">test</Col><Col id=\"createDt\">20120830135434000</Col><Col id=\"updateUser\">test</Col><Col id=\"updateDt\">20120831155247000</Col><Col id=\"groupDesc\">화면을 연동하는 방식을 결정</Col></Row><Row><Col id=\"groupCd\">20000</Col><Col id=\"groupNm\">화면타입</Col><Col id=\"useFg\">1</Col><Col id=\"createUser\">test</Col><Col id=\"createDt\">20120830140318000</Col><Col id=\"updateUser\">test</Col><Col id=\"updateDt\">20120831151436000</Col><Col id=\"groupDesc\">화면의 타입을 정의</Col></Row><Row><Col id=\"groupCd\">30000</Col><Col id=\"groupNm\">메뉴오픈</Col><Col id=\"useFg\">1</Col><Col id=\"createUser\">test</Col><Col id=\"createDt\">20120831155247000</Col><Col id=\"updateUser\">test</Col><Col id=\"updateDt\">20120831155247000</Col><Col id=\"groupDesc\">메뉴를 오픈하는 방식을 결정</Col></Row><Row><Col id=\"groupCd\">40000</Col><Col id=\"groupNm\">화면그룹</Col><Col id=\"useFg\">1</Col><Col id=\"createUser\">test</Col><Col id=\"createDt\">20120831160804000</Col><Col id=\"updateUser\">test</Col><Col id=\"updateDt\">20120831160804000</Col><Col id=\"groupDesc\">화면의 기능별 그룹</Col></Row><Row><Col id=\"groupCd\">50000</Col><Col id=\"groupNm\">메뉴상태</Col><Col id=\"useFg\">1</Col><Col id=\"createUser\">test</Col><Col id=\"createDt\">20120831180027000</Col><Col id=\"updateUser\">test</Col><Col id=\"updateDt\">20120831180027000</Col><Col id=\"groupDesc\">메뉴의 상태를 결정</Col></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_codeList", this);
            obj.set_firefirstcount("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"codeCd\" type=\"string\" size=\"10\"/><Column id=\"codeNm\" type=\"string\" size=\"20\"/><Column id=\"codeSeq\" type=\"INT\" size=\"38\"/><Column id=\"groupCd\" type=\"string\" size=\"10\"/><Column id=\"useFg\" type=\"string\" size=\"1\"/><Column id=\"createUser\" type=\"string\" size=\"12\"/><Column id=\"createDt\" type=\"STRING\" size=\"256\"/><Column id=\"updateUser\" type=\"string\" size=\"12\"/><Column id=\"updateDt\" type=\"STRING\" size=\"256\"/><Column id=\"codeGbn\" type=\"string\" size=\"12\"/><Column id=\"codeDesc\" type=\"string\" size=\"100\"/></ColumnInfo><Rows><Row><Col id=\"codeCd\">FORM</Col><Col id=\"codeNm\">일반화면</Col><Col id=\"codeSeq\">1</Col><Col id=\"groupCd\">10000</Col><Col id=\"useFg\">1</Col><Col id=\"createUser\">test</Col><Col id=\"createDt\">20120831151943000</Col><Col id=\"updateUser\">test</Col><Col id=\"updateDt\">20120831152044000</Col><Col id=\"codeGbn\"/><Col id=\"codeDesc\">일반적인 화면으로 연동</Col></Row><Row><Col id=\"codeCd\">LINK</Col><Col id=\"codeNm\">웹페이지</Col><Col id=\"codeSeq\">2</Col><Col id=\"groupCd\">10000</Col><Col id=\"useFg\">1</Col><Col id=\"createUser\">test</Col><Col id=\"createDt\">20120831151943000</Col><Col id=\"updateUser\">test</Col><Col id=\"updateDt\">20120831152044000</Col><Col id=\"codeGbn\"/><Col id=\"codeDesc\">웹페이지 연동</Col></Row><Row><Col id=\"codeCd\">EXEC</Col><Col id=\"codeNm\">외부연동</Col><Col id=\"codeSeq\">3</Col><Col id=\"groupCd\">10000</Col><Col id=\"useFg\">1</Col><Col id=\"createUser\">test</Col><Col id=\"createDt\">20120831151943000</Col><Col id=\"updateUser\">test</Col><Col id=\"updateDt\">20120831155345000</Col><Col id=\"codeGbn\"/><Col id=\"codeDesc\">외부모듈의 실행으로 연동</Col></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_search", this);
            obj.set_firefirstcount("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><ConstColumn id=\"pageIndex\" type=\"INT\" size=\"30\" value=\"1\"/><ConstColumn id=\"pageSize\" type=\"INT\" size=\"30\" value=\"5\"/><ConstColumn id=\"pageUnit\" type=\"INT\" size=\"30\" value=\"5\"/><Column id=\"groupCd\" type=\"STRING\" size=\"100\"/><Column id=\"groupNm\" type=\"STRING\" size=\"100\"/></ColumnInfo><Rows><Row><Col id=\"groupNm\"/><Col id=\"groupCd\">0</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Grid("grd_Group", "absolute", "0", "85", null, "116", "0", null, this);
            obj.set_taborder("3");
            obj.set_binddataset("ds_codeGroupList");
            obj.set_cellsizingtype("col");
            obj.set_autofittype("col");
            obj.getSetter("domainId").set("nexa.codegroup;nexa.code.groupname;nexa.dspt;nexa.use;nexa.createdate;nexa.createuser;nexa.updatedate;nexa.updateuser");
            obj.set_createcellasync("true");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"77\"/><Column size=\"100\"/><Column size=\"236\"/><Column size=\"40\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"30\"/></Rows><Band id=\"head\"><Cell text=\"코드그룹\"/><Cell col=\"1\" text=\"코드그룹명\"/><Cell col=\"2\" text=\"설명\"/><Cell col=\"3\" text=\"사용\"/><Cell col=\"4\" text=\"등록일\"/><Cell col=\"5\" text=\"등록자\"/><Cell col=\"6\" text=\"수정일\"/><Cell col=\"7\" text=\"수정자\"/></Band><Band id=\"body\"><Cell edittype=\"expr:(dataset.getRowType(currow) == 2) ? 'normal' : 'none'\" text=\"bind:groupCd\"/><Cell col=\"1\" edittype=\"text\" text=\"bind:groupNm\"/><Cell col=\"2\" edittype=\"text\" style=\"align:left middle;\" text=\"bind:groupDesc\"/><Cell col=\"3\" displaytype=\"checkbox\" edittype=\"checkbox\" text=\"bind:useFg\" combodataset=\"ds_isvalid\" combocodecol=\"value\" combodatacol=\"code\"/><Cell col=\"4\" displaytype=\"date\" edittype=\"none\" text=\"bind:createDt\" mask=\"####.##.######.##.##\" maskchar=\" \"/><Cell col=\"5\" text=\"bind:updateUser\" maskchar=\" \"/><Cell col=\"6\" displaytype=\"date\" edittype=\"none\" text=\"bind:updateDt\" mask=\"####.##.##\" maskchar=\" \"/><Cell col=\"7\" text=\"bind:updateUser\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_Code", "absolute", "0", "261", null, null, "0", "0", this);
            obj.set_taborder("10");
            obj.set_binddataset("ds_codeList");
            obj.set_cellsizingtype("col");
            obj.set_autofittype("col");
            obj.getSetter("domainId").set("nexa.code;nexa.name;nexa.code.division;nexa.dspt;nexa.code.order;nexa.use;nexa.createdate;nexa.createuser;nexa.updatedate;nexa.updateuser");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"100\"/><Column size=\"108\"/><Column size=\"58\"/><Column size=\"133\"/><Column size=\"40\"/><Column size=\"40\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"30\"/></Rows><Band id=\"head\"><Cell text=\"코드\"/><Cell col=\"1\" text=\"코드명\"/><Cell col=\"2\" text=\"구분\"/><Cell col=\"3\" text=\"설명\"/><Cell col=\"4\" text=\"순서\"/><Cell col=\"5\" text=\"사용\"/><Cell col=\"6\" text=\"등록일\"/><Cell col=\"7\" text=\"등록자\"/><Cell col=\"8\" text=\"수정일\"/><Cell col=\"9\" text=\"수정자\"/></Band><Band id=\"body\"><Cell edittype=\"normal\" text=\"bind:codeCd\"/><Cell col=\"1\" edittype=\"text\" text=\"bind:codeNm\"/><Cell col=\"2\" edittype=\"normal\" text=\"bind:codeGbn\"/><Cell col=\"3\" edittype=\"normal\" style=\"align:left middle;\" text=\"bind:codeDesc\"/><Cell col=\"4\" displaytype=\"number\" edittype=\"normal\" text=\"bind:codeSeq\"/><Cell col=\"5\" displaytype=\"checkbox\" edittype=\"checkbox\" text=\"bind:useFg\" combodataset=\"ds_isvalid\" combocodecol=\"value\" combodatacol=\"code\"/><Cell col=\"6\" displaytype=\"date\" text=\"bind:createDt\" mask=\"####.##.##\" maskchar=\" \"/><Cell col=\"7\" text=\"bind:createUser\" maskchar=\" \"/><Cell col=\"8\" displaytype=\"date\" text=\"bind:updateDt\" mask=\"####.##.##\" maskchar=\" \"/><Cell col=\"9\" text=\"bind:updateUser\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("st_Title00", "absolute", "15", "224", "204", "22", null, null, this);
            obj.set_text("코드목록");
            obj.set_wordwrap("english");
            obj.set_cssclass("sta_WF_title");
            obj.getSetter("domainId").set("nexa.code.list");
            obj.set_taborder("5");
            this.addChild(obj.name, obj);

            obj = new Button("btn_insertCode", "absolute", null, "239", "58", "20", "62", null, this);
            obj.set_taborder("6");
            obj.set_text("행추가");
            obj.set_cssclass("btn_CRUD");
            obj.getSetter("domainId").set("nexa.add");
            this.addChild(obj.name, obj);

            obj = new Button("btn_deleteCode", "absolute", null, "239", "58", "20", "1", null, this);
            obj.set_taborder("7");
            obj.set_text("행삭제");
            obj.set_cssclass("btn_CRUD");
            obj.getSetter("domainId").set("nexa.delete");
            this.addChild(obj.name, obj);

            obj = new Div("div_search", "absolute", "0", "0", null, "41", "0", null, this);
            obj.set_taborder("0");
            obj.set_text("Div00");
            obj.set_scrollbars("none");
            obj.set_cssclass("div_WF_searchBg");
            this.addChild(obj.name, obj);
            obj = new Button("btn_search", "absolute", "87%", "1", null, "39", "7%", null, this.div_search);
            obj.set_taborder("19");
            obj.set_cssclass("btn_WF_schArea");
            obj.getSetter("domainId").set("nexa.search");
            this.div_search.addChild(obj.name, obj);
            obj = new Static("st_searchCondition", "absolute", "20", "0", "64", "41", null, null, this.div_search);
            obj.set_taborder("20");
            obj.set_text("검색조건");
            obj.set_cssclass("sta_WF_schTitle");
            obj.getSetter("domainId").set("nexa.s_condition");
            this.div_search.addChild(obj.name, obj);
            obj = new Combo("cmb_searchCondition", "absolute", "86", "10", "140", "20", null, null, this.div_search);
            this.div_search.addChild(obj.name, obj);
            var cmb_searchCondition_innerdataset = new Dataset("cmb_searchCondition_innerdataset", this.div_search.cmb_searchCondition);
            cmb_searchCondition_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">0</Col><Col id=\"datacolumn\">명칭</Col></Row><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">코드</Col></Row></Rows>");
            obj.set_innerdataset(cmb_searchCondition_innerdataset);
            obj.set_taborder("21");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.getSetter("domainId").set("nexa.name;nexa.code");
            obj.set_index("-1");
            obj = new Edit("edt_searchKeyword", "absolute", "228", "10", "260", "20", null, null, this.div_search);
            obj.set_taborder("22");
            this.div_search.addChild(obj.name, obj);

            obj = new Div("div_grid_top", "absolute", "-116", "52", null, "23", "800", null, this);
            obj.set_taborder("1");
            obj.set_scrollbars("none");
            this.addChild(obj.name, obj);
            obj = new Static("sta_title", "absolute", "26", "-3", "132", "16", null, null, this.div_grid_top);
            obj.set_taborder("20");
            obj.set_text("Records Found");
            obj.set_cssclass("sta_WF_GridFound2");
            this.div_grid_top.addChild(obj.name, obj);
            obj = new Static("sta_total_cnt", "absolute", "0", "3", "22", "16", null, null, this.div_grid_top);
            obj.set_taborder("21");
            obj.set_text("0");
            obj.set_cssclass("sta_WF_GridFound");
            obj.style.set_align("right middle");
            this.div_grid_top.addChild(obj.name, obj);

            obj = new Static("Static27", "absolute", "0", "70", null, "15", "0", null, this);
            obj.set_taborder("2");
            obj.set_text("h15");
            obj.set_cssclass("Guide_color");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static01", "absolute", "0", "246", null, "15", "0", null, this);
            obj.set_taborder("9");
            obj.set_text("h15");
            obj.set_cssclass("Guide_color");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Div("div_grid_bottom", "absolute", "0", "204", null, "20", "0", null, this);
            obj.set_taborder("11");
            obj.set_scrollbars("none");
            this.addChild(obj.name, obj);
            obj = new Static("sta_bg", "absolute", "0%", "24", null, null, "0%", "-24", this.div_grid_bottom);
            obj.set_taborder("28");
            obj.set_cssclass("sta_WF_GridDis");
            this.div_grid_bottom.addChild(obj.name, obj);
            obj = new Static("sta_msg", "absolute", "0.48%", "24", null, "20", "11.03%", null, this.div_grid_bottom);
            obj.set_taborder("30");
            obj.set_text("There is no data.");
            obj.style.set_color("#444444ff");
            this.div_grid_bottom.addChild(obj.name, obj);

            obj = new Div("div_grid_bottom00", "absolute", "0", "202", null, "20", "0", null, this);
            obj.set_taborder("12");
            obj.set_scrollbars("none");
            this.addChild(obj.name, obj);
            obj = new Static("sta_bg", "absolute", "0%", "0", null, null, "22.75%", "0", this.div_grid_bottom00);
            obj.set_taborder("33");
            obj.set_cssclass("sta_WF_GridDis");
            this.div_grid_bottom00.addChild(obj.name, obj);
            obj = new Static("sta_grid_cnt", "absolute", null, "0", "91", "20", "0", null, this.div_grid_bottom00);
            obj.set_taborder("34");
            obj.set_text("Rows : 0");
            this.div_grid_bottom00.addChild(obj.name, obj);
            obj = new Static("sta_msg", "absolute", "0", "0", null, "20", "131", null, this.div_grid_bottom00);
            obj.set_taborder("35");
            obj.set_text("There is no data.");
            obj.style.set_color("#444444ff");
            this.div_grid_bottom00.addChild(obj.name, obj);

            obj = new Button("btn_add", "absolute", "85.38%", "61", null, "21", "7.38%", null, this);
            obj.set_taborder("13");
            obj.set_text("행추가");
            obj.set_cssclass("btn_CRUD");
            obj.getSetter("domainId").set("nexa.add");
            this.addChild(obj.name, obj);

            obj = new Button("btn_delete", "absolute", "93%", "61", null, "21", "0.13%", null, this);
            obj.set_taborder("14");
            obj.set_text("행삭제");
            obj.set_cssclass("btn_CRUD");
            obj.getSetter("domainId").set("nexa.delete");
            this.addChild(obj.name, obj);

            obj = new Button("btn_save", "absolute", "93.88%", "1", null, "39", "0.38%", null, this);
            obj.set_taborder("15");
            obj.set_text("저장");
            obj.set_cssclass("btn_WF_CRUD");
            obj.getSetter("domainId").set("nexa.save");
            this.addChild(obj.name, obj);

            obj = new Static("st_Title01", "absolute", "1.88%", "47", null, "22", "72.63%", null, this);
            obj.set_taborder("16");
            obj.set_text("코드그룹");
            obj.set_wordwrap("english");
            obj.set_cssclass("sta_WF_title");
            obj.getSetter("domainId").set("nexa.code.list");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 0, 41, this.div_search,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("0");
            		p.set_text("Div00");
            		p.set_scrollbars("none");
            		p.set_cssclass("div_WF_searchBg");

            	}
            );
            this.div_search.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 0, 23, this.div_grid_top,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("1");
            		p.set_scrollbars("none");

            	}
            );
            this.div_grid_top.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 0, 20, this.div_grid_bottom,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("11");
            		p.set_scrollbars("none");

            	}
            );
            this.div_grid_bottom.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 0, 20, this.div_grid_bottom00,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("12");
            		p.set_scrollbars("none");

            	}
            );
            this.div_grid_bottom00.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 800, 422, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("CodeMgmt");
            		p.getSetter("inheritanceid").set("");
            		p.set_titletext("공통코드관리");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information
            obj = new BindItem("item17","div_search.cmb_searchCondition","value","ds_Search","SEARCH_CONDITION");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item18","div_search.txt_config_title","value","ds_Search","SEARCH_KEYWORD");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item0","div_search00.cmb_searchCondition","value","ds_Search","SEARCH_CONDITION");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item1","div_search00.edt_searchKeyword","value","ds_Search","SEARCH_KEYWORD");
            this.addChild(obj.name, obj);
            obj.bind();

            
            // Remove Reference
            obj = null;
        };
        

        
        // User Script
        this.addIncludeScript("Pattern_08.xfdl", "lib::comLib.xjs");
        this.registerScript("Pattern_08.xfdl", function() {
        /***********************************************************************
         * 01. 업무구분 : Master-Detail
         * 02. 화면명   : Pattern_08.xfdl
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

        /***********************************************************************
         * Script Include 
         ************************************************************************/
        //include "lib::comLib.xjs";

        /***********************************************************************
         * 화면 변수 선언부
         ************************************************************************/
         
        /***********************************************************************
         * Form Function
         ************************************************************************/

         // Form Load 시 공통 기능 처리
        this.form_onload = function (obj,e)
        {
        	Ex.core.init(obj); 	
        }

        //사용자 정의 폼 로드 함수(form_init 고정)
        this.form_init = function(obj)
        {
            this.fn_search();
        }

        /***********************************************************************************
        * Transaction Function
        ***********************************************************************************/

        //목록조회 Search
        this.fn_search = function()
        {
        	var sSvcID        	= "search";                    
            var sController   	= "selectCodeGroupList.do";
            
        	var sInDatasets   	= "ds_search=ds_search";
        	var sOutDatasets  	= "ds_codeGroupList=dsGroupCode ds_codeList=dsCode";
        	
        	var sArgs = "";	

        	this.ds_search.clearData();
            var rowIdx = this.ds_search.addRow();
        	// 조회조건(Condition)
        	if (this.div_search.cmb_searchCondition.value == 0)
        	{
        		this.ds_search.setColumn(rowIdx, "groupNm", this.div_search.edt_searchKeyword.value);
        	}
        	else if (this.div_search.cmb_searchCondition.value == 1)
        	{
        		this.ds_search.setColumn(rowIdx, "groupCd", this.div_search.edt_searchKeyword.value);
        	}
        		
        	Ex.core.tran(this,sSvcID, sController, sInDatasets, sOutDatasets, sArgs); 
        }

        //저장 save
        this.fn_save = function(strSvcId)
        {
        	var sSvcID        	= "save";                    
            var sController   	= "modifyCodes.do";
            var sInDatasets   	= "dsGroupCode=ds_codeGroupList:U dsCode=ds_codeList:U";
        	var sOutDatasets  	= "";
        	var sArgs = "";	
           
        //     if(strSvcId=="modifyCodeGroup")
        //     {
        // 		sSvcID=strSvcId;
        // 		sController		= "modifyCodeGroup.do";
        // 		sInDatasets   	= "dsGroupCode=ds_codeGroupList:U";
        // 		sOutDatasets  	= "";
        // 		
        //     } else if(strSvcId=="modifyCodeList")
        //     {
        // 		sSvcID=strSvcId;
        // 		sController		= "modifyCode.do";
        // 		sInDatasets   	= "dsCode=ds_codeList:U";
        // 		sOutDatasets  	= "";
        // 	}
        	

        	Ex.core.tran(this,sSvcID, sController, sInDatasets, sOutDatasets, sArgs);
        }
        /***********************************************************************************
        * CallBack Event (strSvcId - Sevice ID, nErrorCode - ErrorCode, strErrorMsg - Error Message)
        ***********************************************************************************/
        /* callBack함수 */
        this.fn_callBack = function (strSvcId,nErrorCode,strErrorMsg)
        { 
        	if (nErrorCode < 0) 
        	{
        		return Ex.core.comMsg("alert",strErrorMsg);		
        	}
        	switch (strSvcId)
        	{
        		case "search" :
        			this.fn_search_post();
        		 	break;

        		case "save" :
        			this.fn_search_post();
        		 	break;

        // 		 case "modifyCodeGroup" :
        // 		    if (nErrorCode == 0) {
        // 				fn_save("modifyCodeList"); 
        // 		    }
        // 		    this.fn_search();
        // 			break;
        // 
        // 		 case "modifyCodeList" :
        // 		    this.fn_search();
        // 			break;
        	}
        }

        /***********************************************************************************
        * Component Event
        ***********************************************************************************/

        //목록조회 Search
        this.div_search_btn_search_onclick = function(obj,e)
        {
        	this.fn_search();
        }

        // 코드그룹 추가 버튼 클릭시 이벤트 처리
        this.div_grid_top_btn_add_onclick = function(obj,e)
        {
        	var nRow = this.ds_codeGroupList.addRow();
        	//행 추가시 등록일, 수정일 오늘 날짜 표시
        	this.ds_codeGroupList.setColumn(nRow, "createDt", Ex.util.todayTime());
        	this.ds_codeGroupList.setColumn(nRow, "updateDt", Ex.util.todayTime());
        	//행 추가시 등록자, 수정자 표시
        	this.ds_codeGroupList.setColumn(nRow, "createUser", "test");
        	this.ds_codeGroupList.setColumn(nRow, "updateUser", "test");
        }
        //코드그룹 삭제 버튼 클릭시 이벤트 처리
        this.div_grid_top_btn_delete_onclick = function(obj,e)
        {
            var nCurRow = this.ds_codeGroupList.rowposition;
        	var nRowType = this.ds_codeGroupList.getRowType(nCurRow);
        	this.ds_codeGroupList.deleteRow(nCurRow);	
        }

        //코드그룹 저장 버튼 클릭시 이벤트 처리
        this.div_grid_top_btn_save_onclick = function(obj,e)
        {
        	this.fn_save("modifyCodeGroup");
        }
        //코드 저장 클릭시 이벤트 처리
        this.div_bottom_btn_save_onclick = function(obj,e)
        {    
            if(Ex.core.comMsg("confirm","Do you want to save?"))
            {
        	    this.fn_save("modifyCode");
        	}
        }
        //코드그룹 행 선택시 해당 데이터 필터링
        this.ds_codeGroupList_onrowposchanged = function(obj,e)
        {
        	var strFilterExpr = "";
        	strFilterExpr += "groupCd=='"+this.ds_codeGroupList.getColumn(e.newrow,"groupCd")+"'";
        	this.ds_codeList.filter(strFilterExpr);
        }

        // 코드 데이타 추가 버튼 클릭 이벤트 처리
        this.btn_insertCode_onclick = function(obj,e)
        {
        	var nRow = this.ds_codeList.addRow();
        	var nGroupVal;
        	var nGroup_cd;
        	nGroupVal = this.ds_codeGroupList.rowposition;
        	nGroup_cd = this.ds_codeGroupList.getColumn(nGroupVal, "groupCd");
        	this.ds_codeList.setColumn(nRow,"groupCd",nGroup_cd);
        	
        	this.ds_codeList.setColumn(nRow,"createDt",Ex.util.todayTime());
        	this.ds_codeList.setColumn(nRow, "updateDt", Ex.util.todayTime());
        	this.ds_codeList.setColumn(nRow, "createUser", "test");
        	this.ds_codeList.setColumn(nRow, "updateUser", "test");
        }

        // 코드데이타 삭제 버튼 이벤트 처리
        this.btn_deleteCode_onclick = function(obj,e)
        {
        	var nCurRow = this.ds_codeList.rowposition;
        	var nRowType = this.ds_codeList.getRowType(nCurRow);
        	this.ds_codeList.deleteRow(nCurRow);
        }

        // 검색시 Enter 키 이벤트 처리
        this.div_search_edt_searchKeyword_onkeyup = function(obj,e)
        {
        	if ( e.keycode == 13)
        	{
        		this.fn_search();
        	}
        }

        /***********************************************************************************
        * User Function
        ***********************************************************************************/
        //페이징 없는 경우

        this.fn_search_post = function()
        {
        	var nTotalCnt01 = this.ds_codeGroupList.rowcount;
            var nCnt01 = this.ds_codeGroupList.rowcount;

        	this.div_grid_bottom.sta_grid_cnt.set_text("Rows : "+nTotalCnt01);
        	this.div_grid_bottom.sta_msg.set_text("Select has been complted successfully.");	
        	this.div_grid_bottom.sta_grid_cnt.set_text("Rows : " + nCnt01);
        	
        	var nTotalCnt02 = this.ds_codeList.rowcount;
            var nCnt02 = this.ds_codeList.rowcount;

        	this.div_grid_bottom00.sta_grid_cnt.set_text("Rows : "+nTotalCnt02);
        	this.div_grid_bottom00.sta_msg.set_text("Select has been complted successfully.");	
        	this.div_grid_bottom00.sta_grid_cnt.set_text("Rows : " + nCnt02);
        }

        

        this.div_grid_bottom_btn_find_onclick = function(obj,e)
        {
        	this.gfn_findPopup(this.grd_Group);
        }

        this.div_grid_bottom00_btn_find_onclick = function(obj,e)
        {
        	this.gfn_findPopup(this.grd_Code);
        }
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.ds_codeGroupList.addEventHandler("canrowposchange", this.ds_codeGroupList_canrowposchange, this);
            this.ds_codeGroupList.addEventHandler("onrowposchanged", this.ds_codeGroupList_onrowposchanged, this);
            this.ds_codeGroupList.addEventHandler("cancolumnchange", this.ds_codeGroupList_cancolumnchange, this);
            this.addEventHandler("onload", this.form_onload, this);
            this.addEventHandler("onbeforeclose", this.form_onbeforeclose, this);
            this.btn_insertCode.addEventHandler("onclick", this.btn_insertCode_onclick, this);
            this.btn_deleteCode.addEventHandler("onclick", this.btn_deleteCode_onclick, this);
            this.div_search.btn_search.addEventHandler("onclick", this.fn_search, this);
            this.div_search.edt_searchKeyword.addEventHandler("onkeyup", this.div_search_edt_searchKeyword_onkeyup, this);
            this.btn_add.addEventHandler("onclick", this.div_grid_top_btn_add_onclick, this);
            this.btn_delete.addEventHandler("onclick", this.div_grid_top_btn_delete_onclick, this);
            this.btn_save.addEventHandler("onclick", this.div_grid_top_btn_save_onclick, this);

        };

        this.loadIncludeScript("Pattern_08.xfdl");

       
    };
}
)();
