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
                this.set_name("Security");
                this.set_classname("Security");
                this.set_titletext("Security");
                this._setFormPosition(0,0,800,400);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_output", this);
            obj.set_firefirstcount("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_user", this);
            obj.set_firefirstcount("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"id\" type=\"STRING\" size=\"256\"/><Column id=\"name\" type=\"STRING\" size=\"256\"/><Column id=\"passwd\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Static("Static19", "absolute", "0", "32", null, "169", "0", null, this);
            obj.set_taborder("14");
            obj.style.set_background("#ffffffff");
            obj.style.set_border("1 solid #c6c6c5ff");
            obj.style.set_align("center middle");
            obj.style.set_font("Tahoma,9,bold antialias");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_passwd", "absolute", "93", "134", "176", "36", null, null, this);
            obj.set_taborder("3");
            obj.style.set_font("11 arial");
            obj.style.set_accessibility("enable all '기관코드' '' ''");
            this.addChild(obj.name, obj);

            obj = new Button("btn_protocol", "absolute", "304", "80", "163", "66", null, null, this);
            obj.set_taborder("5");
            obj.set_text("전송(Data Encoding)");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_id", "absolute", "93", "54", "176", "36", null, null, this);
            obj.set_taborder("7");
            obj.style.set_font("11 arial");
            obj.style.set_accessibility("enable all '기관코드' '' ''");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_name", "absolute", "93", "94", "176", "36", null, null, this);
            obj.set_taborder("9");
            obj.style.set_font("11 arial");
            obj.style.set_accessibility("enable all '기관코드' '' ''");
            this.addChild(obj.name, obj);

            obj = new Static("stc_id", "absolute", "13", "54", "77", "35", null, null, this);
            obj.set_taborder("10");
            obj.set_text("ID");
            obj.style.set_background("lavender URL('images://ico_bullet.gif') left middle");
            obj.style.set_padding("1px 1px 1px 1");
            obj.getSetter("class").set("sub_title");
            this.addChild(obj.name, obj);

            obj = new Static("stc_id00", "absolute", "13", "94", "77", "35", null, null, this);
            obj.set_taborder("11");
            obj.set_text("NAME");
            obj.style.set_background("lavender URL('images://ico_bullet.gif') left middle");
            obj.style.set_padding("1px 1px 1px 1");
            obj.getSetter("class").set("sub_title");
            this.addChild(obj.name, obj);

            obj = new Static("stc_id01", "absolute", "13", "134", "77", "35", null, null, this);
            obj.set_taborder("12");
            obj.set_text("PASSWD");
            obj.style.set_background("lavender URL('images://ico_bullet.gif') left middle");
            obj.style.set_color("red");
            obj.style.set_padding("1px 1px 1px 1");
            obj.style.set_font("bold 9 Dotum");
            obj.getSetter("class").set("sub_title");
            this.addChild(obj.name, obj);

            obj = new Static("Static00", "absolute", "0.38%", "6", null, "22", "86%", null, this);
            obj.set_taborder("13");
            obj.set_text("Value Encoding");
            obj.set_cssclass("sta_WF_title");
            this.addChild(obj.name, obj);

            obj = new TextArea("txa_edit", "absolute", "0", "240", null, null, "0", "0", this);
            obj.set_taborder("15");
            this.addChild(obj.name, obj);

            obj = new Static("Static02", "absolute", "0.38%", "214", null, "22", "86%", null, this);
            obj.set_taborder("16");
            obj.set_text("Transfer Data");
            obj.set_cssclass("sta_WF_title");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 800, 400, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("Security");
            		p.set_titletext("Security");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information

            
            // Remove Reference
            obj = null;
        };
        

        
        // User Script
        this.addIncludeScript("Pattern_06.xfdl", "lib::sha256.xjs");
        this.registerScript("Pattern_06.xfdl", function() {
        /***********************************************************************
         * 01. 업무구분 : Security-value
         * 02. 화면명   : Pattern_06.xfdl
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
        //include "lib::sha256.xjs";

        
        // http 호출
        this.btn_http_onclick = function(obj,e)
        {
        	//this.transaction( "svc1" ,"svcurl::nuipattern/jsp/nexacroTest.jsp","ds_input=ds_list","ds_output=output","passwd="+this.edt_passwd.value,"callbackFunction");
        }

        // SHA256 암호화된 프로토콜 호출
        this.btn_protocol_onclick = function(obj,e)
        {
        	/*
        	// 암호화 프로토콜 Transaction 테스트
        	this.transaction( 
        		"svc2" 
        		,"secureurl::nuipattern/jsp/nexacroTest.jsp"
        		,"ds_input=ds_list"
        		,"ds_output=output"
        		,"passwd="+this.edt_passwd.value
        		,"callbackFunction"
        	);
        	*/
        	// 암호화(sha256) 라이브러리 함수호출 테스트.
        	this.ds_user.clearData();

        	var sSvcID        	= "search";                    
            var sController   	= "secureSelectVO.do"; //VO형태
        	var sArgs = "";	
        	
        	this.ds_user.addRow();
        	this.ds_user.setColumn(0, "id", this.edt_id.value);
        	this.ds_user.setColumn(0, "name", this.edt_name.value);
        	this.ds_user.setColumn(0, "passwd", this.b64_sha256(this.edt_passwd.value.trim()));
        	var sInDatasets   	= "dsInput=ds_user";	
        	var sOutDatasets  	= "ds_user=dsOutput";
        	// parameter setting
        	sArgs += Ex.util.setParam("id",this.edt_id.value);
        	sArgs += Ex.util.setParam("name",this.edt_name.value);
        	sArgs += Ex.util.setParam("passwd",this.b64_sha256(this.edt_passwd.value.trim()));
        	this.txa_edit.set_value(this.ds_user.saveXML());
        	Ex.core.tran(this,sSvcID, sController, sInDatasets, sOutDatasets, sArgs); 
        }

        this.callbackFunction = function (strSvcId,nErrorCode,strErrorMsg)
        {
        	if (nErrorCode < 0) 
        	{
        		return alert(strErrorMsg);		
        	}
        }	

        
        this.ds_output_onload = function(obj,e)
        {
        	trace(this.ds_output.saveXML());
        }
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.ds_output.addEventHandler("onload", this.ds_output_onload, this);
            this.edt_passwd.addEventHandler("onsetfocus", this.ect_condition_onsetfocus, this);
            this.btn_protocol.addEventHandler("onclick", this.btn_protocol_onclick, this);
            this.edt_id.addEventHandler("onsetfocus", this.ect_condition_onsetfocus, this);
            this.edt_name.addEventHandler("onsetfocus", this.ect_condition_onsetfocus, this);

        };

        this.loadIncludeScript("Pattern_06.xfdl");

       
    };
}
)();
