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
                this.set_name("sample009");
                this.set_classname("excelExportImport");
                this.set_titletext("엑셀 Import / Export");
                this._setFormPosition(0,0,800,400);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_excel", this);
            obj.set_firefirstcount("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"dept_code\" type=\"STRING\" size=\"256\"/><Column id=\"dept_name\" type=\"STRING\" size=\"256\"/><Column id=\"employee\" type=\"STRING\" size=\"256\"/><Column id=\"telno\" type=\"STRING\" size=\"256\"/><Column id=\"address\" type=\"STRING\" size=\"256\"/><Column id=\"age\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"dept_code\">100</Col><Col id=\"dept_name\">Technical Support Group</Col><Col id=\"employee\">Gil-Dong Hong</Col><Col id=\"telno\">02-1234-5678</Col><Col id=\"address\">Seoul Korea</Col><Col id=\"age\">100</Col></Row><Row><Col id=\"dept_code\">200</Col><Col id=\"dept_name\">Technical Support Group</Col><Col id=\"employee\">Sun-Sin Lee</Col><Col id=\"telno\">02-2345-6789</Col><Col id=\"address\">Pusan Korea</Col><Col id=\"age\">200</Col></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_out", this);
            obj.set_firefirstcount("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"dept_code\" type=\"STRING\" size=\"256\"/><Column id=\"dept_name\" type=\"STRING\" size=\"256\"/><Column id=\"employee\" type=\"STRING\" size=\"256\"/><Column id=\"telno\" type=\"STRING\" size=\"256\"/><Column id=\"address\" type=\"STRING\" size=\"256\"/><Column id=\"age\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Grid("grd_list", "absolute", "0", "38", null, "170", "0", null, this);
            obj.set_taborder("0");
            obj.set_binddataset("ds_excel");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row band=\"head\" size=\"24\"/><Row band=\"body\" size=\"24\"/></Rows><Band id=\"head\"><Cell col=\"0\" disptype=\"normal\" text=\"dept_code\"/><Cell col=\"1\" disptype=\"normal\" text=\"dept_name\"/><Cell col=\"2\" disptype=\"normal\" text=\"employee\"/><Cell col=\"3\" disptype=\"normal\" text=\"telno\"/><Cell col=\"4\" disptype=\"normal\" text=\"address\"/><Cell col=\"5\" disptype=\"normal\" text=\"age\"/></Band><Band id=\"body\"><Cell col=\"0\" disptype=\"normal\" text=\"bind:dept_code\"/><Cell col=\"1\" disptype=\"normal\" text=\"bind:dept_name\"/><Cell col=\"2\" disptype=\"normal\" text=\"bind:employee\"/><Cell col=\"3\" disptype=\"normal\" text=\"bind:telno\"/><Cell col=\"4\" disptype=\"normal\" text=\"bind:address\"/><Cell col=\"5\" disptype=\"normal\" text=\"bind:age\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Button("Button00", "absolute", null, "8", "90", "29", "0", null, this);
            obj.set_taborder("1");
            obj.set_text("Export");
            this.addChild(obj.name, obj);

            obj = new Button("Button01", "absolute", null, "217", "90", "28", "0", null, this);
            obj.set_taborder("2");
            obj.set_text("Import");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid00", "absolute", "0", "246", null, null, "0", "0", this);
            obj.set_taborder("3");
            obj.set_binddataset("ds_out");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row band=\"head\" size=\"24\"/><Row band=\"body\" size=\"24\"/></Rows><Band id=\"head\"><Cell col=\"0\" disptype=\"normal\" text=\"dept_code\"/><Cell col=\"1\" disptype=\"normal\" text=\"dept_name\"/><Cell col=\"2\" disptype=\"normal\" text=\"employee\"/><Cell col=\"3\" disptype=\"normal\" text=\"telno\"/><Cell col=\"4\" disptype=\"normal\" text=\"address\"/><Cell col=\"5\" disptype=\"normal\" text=\"age\"/></Band><Band id=\"body\"><Cell col=\"0\" disptype=\"normal\" text=\"bind:dept_code\"/><Cell col=\"1\" disptype=\"normal\" text=\"bind:dept_name\"/><Cell col=\"2\" disptype=\"normal\" text=\"bind:employee\"/><Cell col=\"3\" disptype=\"normal\" text=\"bind:telno\"/><Cell col=\"4\" disptype=\"normal\" text=\"bind:address\"/><Cell col=\"5\" disptype=\"normal\" text=\"bind:age\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("Static01", "absolute", "4", "8", "140", "36", null, null, this);
            obj.set_taborder("4");
            obj.set_text("1.엑셀익스포트");
            obj.set_cssclass("sta_WF_title");
            this.addChild(obj.name, obj);

            obj = new Static("Static00", "absolute", "6", "216", "332", "36", null, null, this);
            obj.set_taborder("5");
            obj.set_text("2.엑셀임포트");
            obj.set_cssclass("sta_WF_title");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 800, 400, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("excelExportImport");
            		p.set_titletext("엑셀 Import / Export");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information

            
            // Remove Reference
            obj = null;
        };
        

        
        // User Script
        this.addIncludeScript("Pattern_04.xfdl", "lib::comLib.xjs");
        this.registerScript("Pattern_04.xfdl", function() {
        /***********************************************************************
         * 01. 업무구분 : Excel Export&Import
         * 02. 화면명   : Pattern_04.xfdl
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

        this.form_onload = function(obj,e)
        {
        	Ex.core.init(obj);
        	
        }

        //ExcelExport 실행
        this.Button00_onclick = function(obj,e)
        {
        	
        	Ex.core.exportExcel(this,this.grd_list);

        }

        this.Button01_onclick = function(obj,e)
        {
           /*
           * 1.heead = 시트명  뿌릴 해드값 A1 ~ G1 
           * 2. body = 그리드 body에 뿌릴 excel sheet 번호 
           */
            var sSheet = "head=sheet1!A1:G1;body=sheet1!A2;";  
            
           /*
           * 출력할 dataset 명
           */
        	var ds = "ds_out";
        	Ex.core.importExcel(sSheet,ds);

        }

        /**
        * excel import
        * @param {object} datsetName
        * @return N/A
        * @example
        * @memberOf ExtNx.core
        */
        this.importExcel = function(sDsName)
        {
        	this.importExcelProcess();
        }

        this.importObj = null;
        this.Button02_onclick = function(obj,e)
        {
        	   var ds = "ds_out";
        	    var sSheet = "head=sheet1!A1;body=sheet1!A2;";  
        		    var sSvcUrl = application.services["svcurl"].url+"XImport" ;
        			this.importObj = new nexacro.ExcelImportObject("_importExcel",this);
        			
        			this.importObj.set_importtype(nexacro.ImportTypes.EXCEL);
        			//this.setWaitCursor(true,true);
        			this.importObj.addEventHandler("onsuccess", this._importExcel_onsuccess, this);
        			this.importObj.addEventHandler("onerror", this._importExcel_onerror, this);
        			this.importObj.set_importurl(sSvcUrl);
        		
        			this.importObj.importData("", "[command=getsheetdata;output=outDs;" + sSheet +"]", "["+ds+"=outDs]");
        }

        this._importExcel_onsuccess = function(obj,e)
        {
              trace("success");
        }

        this._importExcel_onerror = function(obj,e)
        {
        trace(" =========== onerror event start============");
        			trace(" e.eventid : " + e.eventid);
        			trace(" e.fromobject : " + e.fromobject);
        			trace(" e.fromreferenceobject : " + e.fromreferenceobject);
        			trace(" e.errorcode : " + e.errorcode);
        			trace(" e.errormsg) : " + e.errormsg);
        }
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload", this.form_onload, this);
            this.Button00.addEventHandler("onclick", this.Button00_onclick, this);
            this.Button01.addEventHandler("onclick", this.Button01_onclick, this);

        };

        this.loadIncludeScript("Pattern_04.xfdl");

       
    };
}
)();
