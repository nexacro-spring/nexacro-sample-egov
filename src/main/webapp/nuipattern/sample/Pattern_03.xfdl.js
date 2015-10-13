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
                this.set_titletext("List/Detail");
                this._setFormPosition(0,0,800,400);
            }
            this.getSetter("inheritanceid").set("");

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_service", this);
            obj.set_firefirstcount("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"conid\" type=\"STRING\" size=\"256\"/><Column id=\"key\" type=\"STRING\" size=\"256\"/><Column id=\"Column2\" type=\"STRING\" size=\"256\"/><Column id=\"Column3\" type=\"STRING\" size=\"256\"/><Column id=\"Column4\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_List", this);
            obj.set_firefirstcount("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"CUST_CODE\" type=\"STRING\" size=\"255\"/><Column id=\"BIZ_NAME\" type=\"STRING\" size=\"255\"/><Column id=\"CUST_BIZ_NO\" type=\"STRING\" size=\"255\"/><Column id=\"BIZ_ADRS\" type=\"STRING\" size=\"255\"/><Column id=\"DEPT_NAME\" type=\"STRING\" size=\"255\"/><Column id=\"PRTN_CUST_NAME\" type=\"STRING\" size=\"255\"/><Column id=\"TEL_NO\" type=\"STRING\" size=\"255\"/><Column id=\"TRAD_END_GUBUN\" type=\"STRING\" size=\"255\"/><Column id=\"CUST_ENTR_CODE\" type=\"STRING\" size=\"255\"/><Column id=\"EMAIL\" type=\"STRING\" size=\"255\"/><Column id=\"POSITION\" type=\"STRING\" size=\"256\"/><Column id=\"SEPR\" type=\"STRING\" size=\"256\"/><Column id=\"POWER\" type=\"STRING\" size=\"256\"/><Column id=\"WORK\" type=\"STRING\" size=\"256\"/><Column id=\"SCHOOL\" type=\"STRING\" size=\"256\"/><Column id=\"MAJOR\" type=\"STRING\" size=\"256\"/><Column id=\"TERM\" type=\"STRING\" size=\"256\"/><Column id=\"YEAR\" type=\"STRING\" size=\"256\"/><Column id=\"IMAGE\" type=\"STRING\" size=\"256\"/><Column id=\"DEV\" type=\"STRING\" size=\"256\"/><Column id=\"KEEP\" type=\"STRING\" size=\"256\"/><Column id=\"DEV_1\" type=\"STRING\" size=\"256\"/><Column id=\"KEEP_1\" type=\"STRING\" size=\"256\"/><Column id=\"MAN_1\" type=\"STRING\" size=\"256\"/><Column id=\"LEA\" type=\"STRING\" size=\"256\"/><Column id=\"SAAS\" type=\"STRING\" size=\"256\"/><Column id=\"MAN\" type=\"STRING\" size=\"256\"/><Column id=\"PRE\" type=\"STRING\" size=\"256\"/><Column id=\"SEX\" type=\"STRING\" size=\"256\"/><Column id=\"MEMO\" type=\"STRING\" size=\"256\"/><Column id=\"chk\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_JobM", this);
            obj.set_firefirstcount("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"code\" type=\"STRING\" size=\"256\"/><Column id=\"data\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"code\"/><Col id=\"data\">-----전체-------</Col></Row><Row><Col id=\"code\">1</Col><Col id=\"data\">음식 서비스</Col></Row><Row><Col id=\"code\">2</Col><Col id=\"data\">법률/경찰/교도</Col></Row><Row><Col id=\"code\">3</Col><Col id=\"data\">교육 및 자연과학대학</Col></Row><Row><Col id=\"code\">4</Col><Col id=\"data\">보건/의료</Col></Row><Row><Col id=\"code\">5</Col><Col id=\"data\">문화/예술/디자인</Col></Row><Row><Col id=\"code\">6</Col><Col id=\"data\">사회복지/종교</Col></Row><Row><Col id=\"code\">7</Col><Col id=\"data\">미용/스포츠</Col></Row><Row><Col id=\"code\">8</Col><Col id=\"data\">영업/판매</Col></Row><Row><Col id=\"code\">9</Col><Col id=\"data\">운전/운송</Col></Row><Row><Col id=\"code\">10</Col><Col id=\"data\">경비/청소</Col></Row><Row><Col id=\"code\">11</Col><Col id=\"data\">IT</Col></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_multiLangData", this);
            obj.set_firefirstcount("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"Column0\" type=\"STRING\" size=\"256\"/><Column id=\"Column1\" type=\"STRING\" size=\"256\"/><Column id=\"Column2\" type=\"STRING\" size=\"256\"/><Column id=\"Column3\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Div("div_search00", "absolute", "0", "0", null, "41", "0", null, this);
            obj.set_taborder("0");
            obj.set_text("Div00");
            obj.set_scrollbars("none");
            obj.set_cssclass("div_WF_searchBg");
            this.addChild(obj.name, obj);
            obj = new Static("st_searchCondition", "absolute", "20", "0", "64", "41", null, null, this.div_search00);
            obj.set_taborder("28");
            obj.set_text("검색조건");
            obj.set_cssclass("sta_WF_schTitle");
            obj.getSetter("domainId").set("nexa.s_condition");
            this.div_search00.addChild(obj.name, obj);
            obj = new Combo("cmb_searchCondition", "absolute", "86", "10", "110", "20", null, null, this.div_search00);
            this.div_search00.addChild(obj.name, obj);
            var cmb_searchCondition_innerdataset = new Dataset("cmb_searchCondition_innerdataset", this.div_search00.cmb_searchCondition);
            cmb_searchCondition_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">0</Col><Col id=\"datacolumn\">명칭</Col></Row><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">코드</Col></Row></Rows>");
            obj.set_innerdataset(cmb_searchCondition_innerdataset);
            obj.set_taborder("29");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.getSetter("domainId").set("nexa.name;nexa.code");
            obj = new Edit("edt_searchKeyword", "absolute", "198", "10", "180", "20", null, null, this.div_search00);
            obj.set_taborder("30");
            this.div_search00.addChild(obj.name, obj);
            obj = new Button("btn_search", "absolute", null, "0", "51", null, "0", "0", this.div_search00);
            obj.set_taborder("31");
            obj.set_cssclass("btn_WF_schArea");
            obj.getSetter("domainId").set("nexa.search");
            this.div_search00.addChild(obj.name, obj);

            obj = new Static("Static08", "absolute", "0", "389", null, "28", "0", null, this);
            obj.set_taborder("1");
            obj.set_cssclass("sta_WF_detailLabel2");
            this.addChild(obj.name, obj);

            obj = new Static("Static10", "absolute", "0", "416", null, "28", "0", null, this);
            obj.set_taborder("2");
            obj.set_cssclass("sta_WF_detailLabel2");
            this.addChild(obj.name, obj);

            obj = new Static("Static02", "absolute", "0", "443", null, "28", "0", null, this);
            obj.set_taborder("3");
            obj.set_cssclass("sta_WF_detailLabel2");
            this.addChild(obj.name, obj);

            obj = new Static("Static00", "absolute", "0", "470", null, null, "0", "5", this);
            obj.set_taborder("4");
            obj.set_cssclass("sta_WF_detailLabel2");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_list", "absolute", "0", "89", null, "265", "0", null, this);
            obj.set_taborder("5");
            obj.set_binddataset("ds_List");
            obj.set_cellsizingtype("col");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"46\"/><Column size=\"40\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell rowspan=\"2\" displaytype=\"checkbox\" edittype=\"checkbox\" text=\"1\"/><Cell col=\"1\" rowspan=\"2\" text=\"순번\"/><Cell col=\"2\" rowspan=\"2\" text=\"상태\"/><Cell col=\"3\" colspan=\"4\" text=\"계정코드\"/><Cell col=\"7\" colspan=\"4\" text=\"계정과목명\"/><Cell row=\"1\" col=\"3\"/><Cell row=\"1\" col=\"4\" text=\"관\"/><Cell row=\"1\" col=\"5\" text=\"항\"/><Cell row=\"1\" col=\"6\" text=\"목\"/><Cell row=\"1\" col=\"7\"/><Cell row=\"1\" col=\"8\" text=\"관\"/><Cell row=\"1\" col=\"9\" text=\"항\"/><Cell row=\"1\" col=\"10\" text=\"목\"/></Band><Band id=\"body\"><Cell displaytype=\"checkbox\" edittype=\"checkbox\" style=\"align:center middle;\" text=\"bind:chk\"/><Cell col=\"1\" expr=\"expr:currow+1\"/><Cell col=\"2\"/><Cell col=\"3\" edittype=\"normal\"/><Cell col=\"4\" edittype=\"normal\"/><Cell col=\"5\" edittype=\"normal\"/><Cell col=\"6\" edittype=\"normal\" style=\"align:left;padding:0 0 0 5;\"/><Cell col=\"7\" displaytype=\"combo\" edittype=\"combo\" combodataset=\"Dataset00\" combocodecol=\"Column0\" combodatacol=\"Column1\"/><Cell col=\"8\"/><Cell col=\"9\"/><Cell col=\"10\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("Static_18", "absolute", "0", "389", "114", "28", null, null, this);
            obj.set_taborder("6");
            obj.set_text("계정과목");
            obj.set_cssclass("sta_WF_detailLabel");
            this.addChild(obj.name, obj);

            obj = new Static("Static_21", "absolute", "484", "389", "114", "28", null, null, this);
            obj.set_taborder("7");
            obj.set_text("차대구분");
            obj.set_cssclass("sta_WF_detailLabel");
            this.addChild(obj.name, obj);

            obj = new Static("Static_24", "absolute", "0", "416", "114", "28", null, null, this);
            obj.set_taborder("8");
            obj.set_text("수입계정과목명");
            obj.set_cssclass("sta_WF_detailLabel");
            this.addChild(obj.name, obj);

            obj = new Static("Static_28", "absolute", "484", "416", "114", "28", null, null, this);
            obj.set_taborder("9");
            obj.set_text("지출계정과목명");
            obj.set_cssclass("sta_WF_detailLabel");
            this.addChild(obj.name, obj);

            obj = new Static("Static_01", "absolute", "0", "470", "114", null, null, "5", this);
            obj.set_taborder("10");
            obj.set_text("설명");
            obj.set_cssclass("sta_WF_detailLabel");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit_24", "absolute", "117", "393", "117", "20", null, null, this);
            obj.set_taborder("11");
            obj.set_lengthunit("utf8");
            obj.set_maxlength("20");
            this.addChild(obj.name, obj);

            obj = new Radio("Radio00", "absolute", "603", "393", "115", "20", null, null, this);
            this.addChild(obj.name, obj);
            var Radio00_innerdataset = new Dataset("Radio00_innerdataset", this.Radio00);
            Radio00_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">차변</Col></Row><Row><Col id=\"codecolumn\">2</Col><Col id=\"datacolumn\">대변</Col></Row></Rows>");
            obj.set_innerdataset(Radio00_innerdataset);
            obj.set_taborder("12");
            obj.set_columncount("2");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");

            obj = new Static("Static01", "absolute", "0", "364", "161", "22", null, null, this);
            obj.set_taborder("13");
            obj.set_text("상세");
            obj.set_cssclass("sta_WF_title");
            this.addChild(obj.name, obj);

            obj = new Static("Static_06", "absolute", "0", "443", "114", "28", null, null, this);
            obj.set_taborder("14");
            obj.set_text("계정항목");
            obj.set_cssclass("sta_WF_detailLabel");
            this.addChild(obj.name, obj);

            obj = new Static("Static_07", "absolute", "484", "443", "114", "28", null, null, this);
            obj.set_taborder("15");
            obj.set_text("정산계정여부");
            obj.set_cssclass("sta_WF_detailLabel");
            this.addChild(obj.name, obj);

            obj = new Static("Static_09", "absolute", "726", "389", "114", "28", null, null, this);
            obj.set_taborder("16");
            obj.set_text("출납계정여부");
            obj.set_cssclass("sta_WF_detailLabel");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit_01", "absolute", "237", "393", "244", "20", null, null, this);
            obj.set_taborder("17");
            obj.set_lengthunit("utf8");
            obj.set_maxlength("20");
            this.addChild(obj.name, obj);

            obj = new Radio("Radio01", "absolute", "844", "393", "115", "20", null, null, this);
            this.addChild(obj.name, obj);
            var Radio01_innerdataset = new Dataset("Radio01_innerdataset", this.Radio01);
            Radio01_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">예</Col></Row><Row><Col id=\"codecolumn\">2</Col><Col id=\"datacolumn\">아니오</Col></Row></Rows>");
            obj.set_innerdataset(Radio01_innerdataset);
            obj.set_taborder("18");
            obj.set_columncount("2");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");

            obj = new Edit("Edit_06", "absolute", "117", "420", "344", "20", null, null, this);
            obj.set_taborder("19");
            obj.set_lengthunit("utf8");
            obj.set_maxlength("20");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit_07", "absolute", "600", "420", "340", "20", null, null, this);
            obj.set_taborder("20");
            obj.set_lengthunit("utf8");
            obj.set_maxlength("20");
            this.addChild(obj.name, obj);

            obj = new CheckBox("CheckBox00", "absolute", "465", "420", "16", "20", null, null, this);
            obj.set_taborder("21");
            this.addChild(obj.name, obj);

            obj = new CheckBox("CheckBox01", "absolute", "943", "420", "16", "20", null, null, this);
            obj.set_taborder("22");
            this.addChild(obj.name, obj);

            obj = new TextArea("TextArea00", "absolute", "117", "474", null, null, "15", "9", this);
            obj.set_taborder("23");
            obj.set_scrollbars("alwaysvert");
            obj.set_lengthunit("utf8");
            obj.set_maxlength("500");
            this.addChild(obj.name, obj);

            obj = new Static("Static_10", "absolute", "242", "443", "114", "28", null, null, this);
            obj.set_taborder("24");
            obj.set_text("예산통제기준");
            obj.set_cssclass("sta_WF_detailLabel");
            this.addChild(obj.name, obj);

            obj = new Static("Static_11", "absolute", "726", "443", "114", "28", null, null, this);
            obj.set_taborder("25");
            obj.set_text("내부거래여부");
            obj.set_cssclass("sta_WF_detailLabel");
            this.addChild(obj.name, obj);

            obj = new Radio("Radio02", "absolute", "844", "447", "115", "20", null, null, this);
            this.addChild(obj.name, obj);
            var Radio02_innerdataset = new Dataset("Radio02_innerdataset", this.Radio02);
            Radio02_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">예</Col></Row><Row><Col id=\"codecolumn\">2</Col><Col id=\"datacolumn\">아니오</Col></Row></Rows>");
            obj.set_innerdataset(Radio02_innerdataset);
            obj.set_taborder("26");
            obj.set_columncount("2");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");

            obj = new Radio("Radio03", "absolute", "603", "447", "115", "20", null, null, this);
            this.addChild(obj.name, obj);
            var Radio03_innerdataset = new Dataset("Radio03_innerdataset", this.Radio03);
            Radio03_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">예</Col></Row><Row><Col id=\"codecolumn\">2</Col><Col id=\"datacolumn\">아니오</Col></Row></Rows>");
            obj.set_innerdataset(Radio03_innerdataset);
            obj.set_taborder("27");
            obj.set_columncount("2");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");

            obj = new Combo("Combo1_01", "absolute", "117", "447", "121", "20", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("28");
            obj.set_innerdataset("@ds_JobM");
            obj.set_codecolumn("code");
            obj.set_datacolumn("data");

            obj = new Combo("Combo1_02", "absolute", "359", "447", "121", "20", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("29");
            obj.set_innerdataset("@ds_JobM");
            obj.set_codecolumn("code");
            obj.set_datacolumn("data");

            obj = new Static("Static06", "absolute", "508", "41", "57", "48", null, null, this);
            obj.set_taborder("38");
            obj.set_visible("false");
            obj.style.set_background("#ff634733");
            this.addChild(obj.name, obj);

            obj = new Div("div_grid_top", "absolute", "0", "63", null, "23", "0", null, this);
            obj.set_taborder("39");
            obj.set_scrollbars("none");
            this.addChild(obj.name, obj);
            obj = new Static("sta_title", "absolute", "25", "0", "120", null, null, "0", this.div_grid_top);
            obj.set_taborder("30");
            obj.set_text("Records Found");
            obj.set_cssclass("sta_WF_GridFound2");
            this.div_grid_top.addChild(obj.name, obj);
            obj = new Static("sta_total_cnt", "absolute", "0", "0", "20", null, null, "0", this.div_grid_top);
            obj.set_taborder("31");
            obj.set_text("0");
            obj.set_cssclass("sta_WF_GridFound");
            this.div_grid_top.addChild(obj.name, obj);
            obj = new Button("btn_add", "absolute", null, "0", "50", "23", "106", null, this.div_grid_top);
            obj.set_taborder("32");
            obj.set_text("추가");
            obj.set_cssclass("btn_WF_CRUD");
            obj.getSetter("domainId").set("nexa.add");
            this.div_grid_top.addChild(obj.name, obj);
            obj = new Button("btn_delete", "absolute", null, "0", "50", "23", "53", null, this.div_grid_top);
            obj.set_taborder("33");
            obj.set_text("삭제");
            obj.set_cssclass("btn_WF_CRUD");
            obj.getSetter("domainId").set("nexa.delete");
            this.div_grid_top.addChild(obj.name, obj);
            obj = new Button("btn_save", "absolute", null, "0", "50", "23", "0", null, this.div_grid_top);
            obj.set_taborder("34");
            obj.set_text("저장");
            obj.set_cssclass("btn_WF_CRUD");
            obj.getSetter("domainId").set("nexa.save");
            this.div_grid_top.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 0, 41, this.div_search00,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("0");
            		p.set_text("Div00");
            		p.set_scrollbars("none");
            		p.set_cssclass("div_WF_searchBg");

            	}
            );
            this.div_search00.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 0, 23, this.div_grid_top,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("39");
            		p.set_scrollbars("none");

            	}
            );
            this.div_grid_top.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 800, 400, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("Work");
            		p.getSetter("inheritanceid").set("");
            		p.set_titletext("List/Detail");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information
            obj = new BindItem("item24","Edit_24","value","output","USER_ID");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item1","Edit_01","value","output","USER_ID");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item6","Edit_06","value","output","USER_ID");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item7","Edit_07","value","output","USER_ID");
            this.addChild(obj.name, obj);
            obj.bind();

            
            // Remove Reference
            obj = null;
        };
        

        
        // User Script

        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.ds_List.addEventHandler("onrowposchanged", this.ds_List_onrowposchanged, this);
            this.div_search00.edt_searchKeyword.addEventHandler("onkeyup", this.div_search_edt_searchKeyword_onkeyup, this);

        };

        this.loadIncludeScript("Pattern_03.xfdl");

       
    };
}
)();
