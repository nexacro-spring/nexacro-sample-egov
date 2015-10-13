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
                this.set_name("Work");
                this.set_classname("Work");
                this.set_titletext("SingleDetail");
                this._setFormPosition(0,0,800,369);
            }
            this.getSetter("inheritanceid").set("");

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_search", this);
            obj.set_firefirstcount("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><ConstColumn id=\"PageIndex\" type=\"INT\" size=\"30\" value=\"1\"/><ConstColumn id=\"PageSize\" type=\"INT\" size=\"30\" value=\"5\"/><ConstColumn id=\"PageUnit\" type=\"INT\" size=\"30\" value=\"5\"/><Column id=\"searchCondition\" type=\"STRING\" size=\"100\"/><Column id=\"searchKeyword\" type=\"STRING\" size=\"100\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_user", this);
            obj.set_firefirstcount("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"title\" type=\"STRING\" size=\"256\"/><Column id=\"regId\" type=\"STRING\" size=\"256\"/><Column id=\"postId\" type=\"STRING\" size=\"256\"/><Column id=\"contents\" type=\"STRING\" size=\"256\"/><Column id=\"communityId\" type=\"STRING\" size=\"256\"/><Column id=\"regDate\" type=\"DATE\" size=\"256\"/><Column id=\"hitCount\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Div("div_search", "absolute", "0", "0", null, "41", "0", null, this);
            obj.set_taborder("16");
            obj.set_scrollbars("none");
            obj.set_cssclass("div_WF_searchBg");
            this.addChild(obj.name, obj);
            obj = new Static("st_searchCondition", "absolute", "20", "0", "64", "41", null, null, this.div_search);
            obj.set_taborder("24");
            obj.set_text("사용자");
            obj.set_cssclass("sta_WF_schTitle");
            obj.getSetter("domainId").set("nexa.s_condition");
            this.div_search.addChild(obj.name, obj);
            obj = new Button("btn_search", "absolute", null, "0", "51", null, "0", "0", this.div_search);
            obj.set_taborder("27");
            obj.set_cssclass("btn_WF_schArea");
            obj.getSetter("domainId").set("nexa.search");
            this.div_search.addChild(obj.name, obj);
            obj = new Edit("edt_searchKeyword", "absolute", "9.52%", "10", null, "20", "57.89%", null, this.div_search);
            obj.set_taborder("29");
            this.div_search.addChild(obj.name, obj);
            obj = new Static("Static00", "absolute", "44.36%", "12", null, "22", "36.84%", null, this.div_search);
            obj.set_taborder("30");
            obj.set_text("default 홍길동");
            this.div_search.addChild(obj.name, obj);

            obj = new Div("div_grid_top", "absolute", "0", "63", null, "23", "0", null, this);
            obj.set_taborder("17");
            obj.set_scrollbars("none");
            this.addChild(obj.name, obj);
            obj = new Button("btn_add", "absolute", null, "0", "50", "23", "160", null, this.div_grid_top);
            obj.set_taborder("27");
            obj.set_text("추가");
            obj.set_cssclass("btn_WF_CRUD");
            obj.getSetter("domainId").set("nexa.add");
            this.div_grid_top.addChild(obj.name, obj);
            obj = new Button("btn_delete", "absolute", null, "0", "50", "23", "107", null, this.div_grid_top);
            obj.set_taborder("28");
            obj.set_text("삭제");
            obj.set_cssclass("btn_WF_CRUD");
            obj.getSetter("domainId").set("nexa.delete");
            this.div_grid_top.addChild(obj.name, obj);
            obj = new Button("btn_save", "absolute", null, "0", "50", "23", "1", null, this.div_grid_top);
            obj.set_taborder("29");
            obj.set_text("저장");
            obj.set_cssclass("btn_WF_CRUD");
            obj.getSetter("domainId").set("nexa.save");
            this.div_grid_top.addChild(obj.name, obj);
            obj = new Button("btn_reset", "absolute", null, "0", "50", "23", "54", null, this.div_grid_top);
            obj.set_taborder("30");
            obj.set_text("리셋");
            obj.set_cssclass("btn_WF_CRUD");
            obj.getSetter("domainId").set("nexa.reset");
            this.div_grid_top.addChild(obj.name, obj);

            obj = new Div("divInput", "absolute", "0", "95", null, null, "0", "0", this);
            obj.set_taborder("18");
            obj.style.set_border("1 solid #808080ff");
            this.addChild(obj.name, obj);
            obj = new Static("stc_id", "absolute", "3.18%", "14", null, "30", "76.29%", null, this.divInput);
            obj.set_taborder("25");
            obj.set_text("ID");
            obj.style.set_background("lavender URL('images://ico_bullet.gif') left middle");
            obj.style.set_padding("1px 1px 1px 10");
            obj.style.set_font("9 Dotum");
            obj.getSetter("class").set("sub_title");
            this.divInput.addChild(obj.name, obj);
            obj = new Static("Static01", "absolute", "52.58%", "59", null, "30", "27.02%", null, this.divInput);
            obj.set_taborder("26");
            obj.set_text("EngName");
            obj.style.set_background("lavender");
            obj.style.set_padding("0 0 0 10");
            obj.style.set_font("9 Dotum");
            this.divInput.addChild(obj.name, obj);
            obj = new Static("Static07", "absolute", "3.18%", "145", null, "30", "76.29%", null, this.divInput);
            obj.set_taborder("32");
            obj.set_text("Phone");
            obj.style.set_background("lavender");
            obj.style.set_padding("0 0 0 10");
            obj.style.set_font("9 Dotum");
            this.divInput.addChild(obj.name, obj);
            obj = new Edit("edt_id", "absolute", "25.29%", "15", null, "34", "50%", null, this.divInput);
            obj.set_taborder("33");
            this.divInput.addChild(obj.name, obj);
            obj = new Edit("edtEngName", "absolute", "74.51%", "56", null, "34", "0.78%", null, this.divInput);
            obj.set_taborder("41");
            this.divInput.addChild(obj.name, obj);
            obj = new Static("stc_name", "absolute", "3.18%", "58", null, "30", "76.29%", null, this.divInput);
            obj.set_taborder("42");
            obj.set_text("FullName");
            obj.style.set_background("lavender URL('images://ico_bullet.gif') left middle");
            obj.style.set_padding("1px 1px 1px 10");
            obj.style.set_font("9 Dotum");
            obj.getSetter("class").set("sub_title");
            this.divInput.addChild(obj.name, obj);
            obj = new Edit("edt_fullName", "absolute", "25.3%", "59", null, "34", "50.07%", null, this.divInput);
            obj.set_taborder("43");
            this.divInput.addChild(obj.name, obj);
            obj = new Static("stc_password", "absolute", "52.53%", "14", null, "30", "27.04%", null, this.divInput);
            obj.set_taborder("44");
            obj.set_text("PASSWORD");
            obj.style.set_background("lavender URL('images://ico_bullet.gif') left middle");
            obj.style.set_padding("1px 1px 1px 10");
            obj.style.set_font("9 Dotum");
            obj.getSetter("class").set("sub_title");
            this.divInput.addChild(obj.name, obj);
            obj = new Edit("edt_password", "absolute", "74.57%", "15", null, "34", "0.79%", null, this.divInput);
            obj.set_taborder("45");
            obj.set_password("true");
            this.divInput.addChild(obj.name, obj);
            obj = new Edit("edt_phone", "absolute", "25.3%", "141", null, "34", "50.07%", null, this.divInput);
            obj.set_taborder("46");
            this.divInput.addChild(obj.name, obj);
            obj = new Static("Static00", "absolute", "52.45%", "145", null, "30", "27.02%", null, this.divInput);
            obj.set_taborder("47");
            obj.set_text("CellPhone");
            obj.style.set_background("lavender");
            obj.style.set_padding("0 0 0 10");
            obj.style.set_font("9 Dotum");
            this.divInput.addChild(obj.name, obj);
            obj = new Edit("edt_cellPhone", "absolute", "74.57%", "141", null, "34", "0.79%", null, this.divInput);
            obj.set_taborder("48");
            this.divInput.addChild(obj.name, obj);
            obj = new Static("Static02", "absolute", "3.18%", "104", null, "30", "76.29%", null, this.divInput);
            obj.set_taborder("49");
            obj.set_text("Email");
            obj.style.set_background("lavender");
            obj.style.set_padding("0 0 0 10");
            obj.style.set_font("9 Dotum");
            this.divInput.addChild(obj.name, obj);
            obj = new Edit("edt_email", "absolute", "25.3%", "100", null, "34", "0.79%", null, this.divInput);
            obj.set_taborder("50");
            this.divInput.addChild(obj.name, obj);
            obj = new Static("Static03", "absolute", "3.18%", "184", null, "30", "76.29%", null, this.divInput);
            obj.set_taborder("51");
            obj.set_text("ZipCode");
            obj.style.set_background("lavender");
            obj.style.set_padding("0 0 0 10");
            obj.style.set_font("9 Dotum");
            this.divInput.addChild(obj.name, obj);
            obj = new Edit("edt_zipCode", "absolute", "25.3%", "180", null, "34", "50.07%", null, this.divInput);
            obj.set_taborder("52");
            this.divInput.addChild(obj.name, obj);

            obj = new Static("stc_detail", "absolute", "2.13%", "68", null, "20", "77%", null, this);
            obj.set_taborder("21");
            obj.set_text("상세정보");
            obj.set_cssclass("sta_WF_title");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 0, 41, this.div_search,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("16");
            		p.set_scrollbars("none");
            		p.set_cssclass("div_WF_searchBg");

            	}
            );
            this.div_search.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 0, 23, this.div_grid_top,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("17");
            		p.set_scrollbars("none");

            	}
            );
            this.div_grid_top.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 0, 0, this.divInput,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("18");
            		p.style.set_border("1 solid #808080ff");

            	}
            );
            this.divInput.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 800, 369, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("Work");
            		p.getSetter("inheritanceid").set("");
            		p.set_titletext("SingleDetail");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information
            obj = new BindItem("item18","div_search.edt_searchKeyword","value","ds_search","searchKeyword");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item0","divInput.edt_id","value","ds_user","userId");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item3","divInput.edtEngName","value","ds_user","enName");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item1","divInput.edt_fullName","value","ds_user","userName");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item2","divInput.edt_password","value","ds_user","password");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item4","divInput.edt_phone","value","ds_user","phone");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item5","divInput.edt_cellPhone","value","ds_user","cellPhone");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item6","divInput.edt_email","value","ds_user","email");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item7","divInput.edt_zipCode","value","ds_user","zipCode");
            this.addChild(obj.name, obj);
            obj.bind();

            
            // Remove Reference
            obj = null;
        };
        

        
        // User Script
        this.addIncludeScript("Pattern_01.xfdl", "lib::comLib.xjs");
        this.registerScript("Pattern_01.xfdl", function() {
        /***********************************************************************
         * 01. 업무구분 : Single Detail
         * 02. 화면명   : Pattern_01.xfdl
         * 03. 그룹설명 : 
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
         ***********************************************************************/
        //include "lib::comLib.xjs";

        /***********************************************************************
         form 변수 선언
        ************************************************************************/
        var saveFlag=true;

        /*----------------------------------------------------------------------
        * 기   능:	form onload 함수
        * 인   수:	N/A
        * Return : 	N/A
        -----------------------------------------------------------------------*/
        this.form_onload = function(obj,e)
        {
        	//ExlLib 함수 초기화
        	Ex.core.init(obj);  
            this.fn_search();
        } 

        /***********************************************************************
         Transaction,CallBack처리 Area
        ************************************************************************/
        //조회
        this.fn_search = function(obj,e)
        {
        	var sSvcID        	= "search";                    
            var sController   	= "userSelectVO.do";

        	var sInDatasets   	= "ds_search=ds_search:U";	
        	var sOutDatasets  	= "ds_user=output1";

            var sArgs="";
            var searchCondition =  "NAME";
            var searchKeyword = this.div_search.edt_searchKeyword.value;
            
            this.ds_search.clearData();
            var rowIdx = this.ds_search.addRow();
        	this.ds_search.setColumn(rowIdx, "searchCondition", searchCondition);
        	this.ds_search.setColumn(rowIdx, "searchKeyword", searchKeyword);

        	Ex.core.tran(this,sSvcID, sController, sInDatasets, sOutDatasets, sArgs); 
        }

        //검색  Enter키
        this.div_search_btn_search_onclick = function(obj,e)
        {
        	if ( e.keycode == 13 )
        	{
        		this.fn_search();
        	}
        }

        //추가
        this.fn_add = function(obj,e)
        {
        	var nRow = this.ds_user.addRow();
        	this.div_search.edt_searchKeyword.set_value("");
        }

        //삭제
        this.fn_delete = function(obj,e)
        {
        	var nRow = this.ds_user.rowposition;
        	this.ds_user.deleteRow(nRow);
        	var rtnValue = Ex.core.comMsg("confirm","삭제 하시겠습니까?");
        	
        	if(rtnValue){
        		saveFlag=false;
        		this.fn_save();
        	}
        	else
        	{
        		this.fn_search();
        	}
        }

        //리셋
        this.fn_reset = function(obj,e)
        {
        	this.ds_user.reset();
        }

        //저장
        this.fn_save = function(obj,e)
        {
        	var sSvcID        	= "save";                    
            var sController   	= "userModifyVO.do";

            var sInDatasets   	= "input1=ds_user:U";
        	var sOutDatasets  	= "";
        	var sArgs = "";	

        	Ex.core.tran(this,sSvcID, sController, sInDatasets, sOutDatasets, sArgs);
        }

        /*----------------------------------------------------------------------
        * 기   능:	CallBack 호출
        * 인   수:	strSvcId - 서비스 아이디, 
        *			nErrorCode - 에러코드,
        *			strErrorMsg - 에러메시지
        * Return : 	N/A
        -----------------------------------------------------------------------*/
        this.fn_callBack = function (strSvcId,nErrorCode,strErrorMsg)
        { 
        	if (nErrorCode < 0) 
        	{
        		return Ex.core.comMsg("alert",strErrorMsg);		
        	}
        	
        	if (strSvcId == "search") 
        	{
        		this.fn_search_post();
        	}
        	
        	if (strSvcId == "save") 
        	{
        		if(saveFlag){
        			Ex.core.comMsg("alert","저장완료.");
        		}
        		else
        		{
        			saveFlag=true;
        			Ex.core.comMsg("alert","삭제완료.");
        		}
        		this.div_search.edt_searchKeyword.set_value(this.edt_fullName.value);
        		this.fn_search();
        	}
        }

        /**********************************************************************
        * User Function
        ***********************************************************************/
        //조회 후처리
        this.fn_search_post = function()
        {
        }
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload", this.form_onload, this);
            this.div_search.btn_search.addEventHandler("onclick", this.fn_search, this);
            this.div_search.edt_searchKeyword.addEventHandler("onkeyup", this.div_search_btn_search_onclick, this);
            this.div_grid_top.btn_add.addEventHandler("onclick", this.fn_add, this);
            this.div_grid_top.btn_delete.addEventHandler("onclick", this.fn_delete, this);
            this.div_grid_top.btn_save.addEventHandler("onclick", this.fn_save, this);
            this.div_grid_top.btn_reset.addEventHandler("onclick", this.fn_reset, this);

        };

        this.loadIncludeScript("Pattern_01.xfdl");

       
    };
}
)();
