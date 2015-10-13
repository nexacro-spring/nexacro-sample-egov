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
                this.set_name("LEFT");
                this.set_classname("LEFT");
                this._setFormPosition(0,0,195,520);
            }
            this.style.set_background("transparent");
            this.style.set_border("0 none #808080ff");

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_menu", this);
            obj.set_firefirstcount("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"MENU_NAME\" type=\"string\" size=\"32\" prop=\"\"/><Column id=\"MENU_SEQ\" type=\"int\" size=\"4\" prop=\"\"/><Column id=\"MENU_OPTP\" type=\"string\" size=\"32\" prop=\"\"/><Column id=\"PAGE_URL\" type=\"string\" size=\"32\" prop=\"\"/><Column id=\"MENU_TOP\" type=\"string\" size=\"32\" prop=\"\"/><Column id=\"MENU_ID\" type=\"string\" size=\"32\" prop=\"\"/><Column id=\"MENU_GRP\" type=\"string\" size=\"32\" prop=\"\"/><Column id=\"CREATE_DT\" type=\"string\" size=\"32\" prop=\"\"/><Column id=\"MENU_LEVEL\" type=\"int\" size=\"4\" prop=\"\"/><Column id=\"PAGE_ID\" type=\"string\" size=\"32\" prop=\"\"/><Column id=\"PAGE_NAME\" type=\"string\" size=\"32\" prop=\"\"/><Column id=\"MENU_ARGS\" type=\"string\" size=\"32\" prop=\"\"/><Column id=\"MENU_STAT\" type=\"string\" size=\"32\" prop=\"\"/><Column id=\"CREATE_USER\" type=\"string\" size=\"32\" prop=\"\"/><Column id=\"UPDATE_DT\" type=\"string\" size=\"32\" prop=\"\"/><Column id=\"UPDATE_USER\" type=\"string\" size=\"32\" prop=\"\"/><Column id=\"MENU_DESC\" type=\"string\" size=\"32\" prop=\"\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Grid("grd_menu", "absolute", "1", "0", null, null, "1", "1", this);
            obj.set_taborder("0");
            obj.set_binddataset("ds_menu");
            obj.set_autofittype("none");
            obj.set_treeusecheckbox("false");
            obj.set_treeinitstatus("expand,all");
            obj.style.set_background("aquamarine");
            obj.style.set_align("left middle");
            obj.style.set_font("11 Dotum");
            obj.style.set_cursor("hand");
            obj.set_treeuseimage("true");
            obj.set_treeuseline("false");
            obj.set_wheelscrollrow("1");
            obj.set_cssclass("grd_LF_SubMenu");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"35\"/><Column size=\"135\"/></Columns><Rows><Row size=\"24\"/></Rows><Band id=\"body\"><Cell celltype=\"none\" displaytype=\"tree\" edittype=\"tree\" style=\"linetype:onlyvert;background2: ;\" wordwrap=\"none\" suppress=\"0\" suppressalign=\"first\" treelevel=\"bind:MENU_LEVEL\" autosizerow=\"default\" autosizecol=\"default\"/><Cell col=\"1\" style=\"align:left;padding:EXPR(MENU_LEVEL==1 ?&quot;0 0 0 0&quot;:&quot;0 0 0 0&quot;);font:10 arial;\" text=\"bind:MENU_NAME\" treestartlevel=\"1\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 195, 520, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("LEFT");
            		p.style.set_background("transparent");
            		p.style.set_border("0 none #808080ff");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information

            
            // Remove Reference
            obj = null;
        };
        

        
        // User Script
        this.addIncludeScript("leftFrame.xfdl", "lib::lib_Form.xjs");
        this.registerScript("leftFrame.xfdl", function() {
        /*
         * 01. Work scope : frame
         * 02. Screen name   : leftFrame.xfdl
         * 03. Screen explanation : Frame menu screen
         * 04. Creation date   : 2014.02.21
         * 05. Created by   : sian
         * 06. Revision history :
         *********************************************************************
         *     Modification date          Name    Reason
         *********************************************************************
         *
         *********************************************************************
         */   

        /****************************************************************************************
         include declaration
         ****************************************************************************************/
        //include "lib::lib_Form.xjs"

        this.leftFrame_onload = function(obj,e)
        {
        	
        	application.gv_loadCnt++;   
        	application.gfn_loadChk();	
        	this.ds_menu.copyData(application.gds_menu);
        } 

        
        this.grd_menu_oncellclick = function(obj,e)
        {
        	var pgId = this.ds_menu.getColumn(e.row, ct_menuUrlCol);
            var gpId = this.ds_menu.getColumn(e.row, ct_menuNaviCol);
            var sUrl = gpId + "::" + pgId;
        	var nTreeRow = obj.getTreeRow(e.row);
        	var sMenuId = this.ds_menu.getColumn(e.row, ct_menuIdCol);
        	
        	var strArgs = "";
        	var favArgs = "";
        	
        	this.gfn_openMenu(sMenuId, true, strArgs,favArgs);

        }

        this.leftFrame_ontimer = function(obj,e)
        {
        	this.killTimer(9);
        	//this.fn_changeMenu(6000);//최초 로딩시 디스플레임 메뉴

        }
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload", this.leftFrame_onload, this);
            this.addEventHandler("ontimer", this.leftFrame_ontimer, this);
            this.grd_menu.addEventHandler("oncellclick", this.grd_menu_oncellclick, this);

        };

        this.loadIncludeScript("leftFrame.xfdl");

       
    };
}
)();
