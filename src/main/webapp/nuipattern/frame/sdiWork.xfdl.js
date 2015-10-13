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
                this.set_name("InitMain");
                this.set_classname("InitMain");
                this.set_titletext("New Form");
                this._setFormPosition(0,0,1024,630);
            }
            this.getSetter("inheritanceid").set("");

            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Grid("Grid00", "absolute", "3", "51", "198", null, null, "0.95%", this);
            obj.set_taborder("0");
            obj.set_binddataset("gds_menu");
            obj.set_treeusecheckbox("false");
            obj.set_autofittype("col");
            obj.set_treeinitstatus("expand,all");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"182\"/></Columns><Rows><Row size=\"24\"/></Rows><Band id=\"body\"><Cell displaytype=\"tree\" edittype=\"tree\" style=\"linetype:onlyvert;background:transparent;background2:transparent;\" text=\"bind:MENU_NAME\" treelevel=\"bind:MENU_LEVEL\" treestate=\"bind:PAGE_URL\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Div("Div00", "absolute", "206", "3", null, null, "5", "0.63%", this);
            obj.set_taborder("1");
            obj.style.set_border("1 solid #808080ff");
            this.addChild(obj.name, obj);

            obj = new ImageViewer("ImageViewer00", "absolute", "4", "1", "197", "47", null, null, this);
            obj.set_taborder("2");
            obj.set_image("URL('images::nexacro_platform.png')");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 1024, 630, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("InitMain");
            		p.getSetter("inheritanceid").set("");
            		p.set_titletext("New Form");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information

            
            // Remove Reference
            obj = null;
        };
        

        
        // User Script
        this.registerScript("sdiWork.xfdl", function() {

        this.Grid00_oncelldblclick = function(obj,e)
        {
        	var sUI=application.gds_menu.getColumn(e.row, "PAGE_URL");
        	
        	this.Div00.set_url(sUI);
        }
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.Grid00.addEventHandler("oncelldblclick", this.Grid00_oncelldblclick, this);

        };

        this.loadIncludeScript("sdiWork.xfdl");

       
    };
}
)();
