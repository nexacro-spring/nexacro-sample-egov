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
                this.set_name("TOP");
                this.set_classname("TOP");
                this._setFormPosition(0,0,1024,80);
            }
            this.style.set_background("darkgray");

            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new ImageViewer("ImageViewer00", "absolute", "1", "1", "192", "77", null, null, this);
            obj.set_taborder("0");
            obj.set_image("URL('images::nexacro_platform.png')");
            this.addChild(obj.name, obj);

            obj = new Static("Static00", "absolute", "196", "5", null, "72", "4", null, this);
            obj.set_taborder("1");
            obj.set_text("   ABLE_Frame 유형별 화면샘플");
            obj.style.set_background("darkgray");
            obj.style.set_font("bold 30 Microsoft Sans Serif");
            obj.set_visible("true");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 1024, 80, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("TOP");
            		p.style.set_background("darkgray");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information

            
            // Remove Reference
            obj = null;
        };
        

        
        // User Script
        this.registerScript("topFrame.xfdl", function() {
        /************************************************************************************************
         * 01. Work scope : Frame common
         * 02. Screen name   : topFrame.xfdl
         * 03. Screen explanation : 
         * 04. Related screen/Service 	: 
         * 05. Related table        	: 
         * 06. Created by 			    : sian
         * 07. Creation date 			: 2014.02.21 
         * ============================================================================================== 
         * 08. Revision history 		: Updated by          Content
         * ==============================================================================================
         *     2014.02.21             sian          First
         ************************************************************************************************/

        
        /************************************************************************************************
         * 1. Common library
         ************************************************************************************************/
        //include "lib::comLib.xjs";

         
        /***********************************************************************
         * Event processing
         ************************************************************************/
        /* Form related Event processing*/

        /* Screen Load Event processing*/
        this.form_onload = function (obj,e)
        {
        	application.gv_loadCnt++;
        	application.gfn_loadChk();	
        }
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload", this.form_onload, this);

        };

        this.loadIncludeScript("topFrame.xfdl");

       
    };
}
)();
