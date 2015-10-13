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
                this.set_name("Login");
                this.set_classname("Login");
                this._setFormPosition(0,0,341,350);
            }
            this.style.set_background("transparent");

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsLogin", this);
            obj.set_firefirstcount("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"USER_ID\" type=\"STRING\" size=\"256\"/><Column id=\"PASSWORD\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"USER_ID\">test</Col><Col id=\"PASSWORD\">test123</Col></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsService", this);
            obj.set_firefirstcount("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"SVC_ID\" type=\"STRING\" size=\"100\"/><Column id=\"QUERY_LIST\" type=\"STRING\" size=\"256\"/><Column id=\"SERVICE\" type=\"STRING\" size=\"100\"/><Column id=\"IN_DATASET_LIST\" type=\"STRING\" size=\"256\"/><Column id=\"OUT_DATASET_LIST\" type=\"STRING\" size=\"256\"/><Column id=\"CONTROLLER\" type=\"STRING\" size=\"512\"/><Column id=\"CALLBACK\" type=\"STRING\" size=\"100\"/><Column id=\"SYNC_YN\" type=\"STRING\" size=\"1\"/></ColumnInfo><Rows><Row><Col id=\"SVC_ID\">login</Col><Col id=\"IN_DATASET_LIST\">inDataset=dsLogin</Col><Col id=\"OUT_DATASET_LIST\">gdsUser=gdsUser</Col><Col id=\"CONTROLLER\">xpQueryLogin.do</Col><Col id=\"CALLBACK\">fn_callBack</Col></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_user", this);
            obj.set_firefirstcount("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"GROUP_ID\" type=\"STRING\" size=\"256\"/><Column id=\"USER_ID\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Div("div_login", "absolute", "0", "0", "340", "352", null, null, this);
            obj.set_taborder("6");
            obj.style.set_background("transparent");
            obj.set_scrollbars("none");
            this.addChild(obj.name, obj);
            obj = new Static("stc_bg", "absolute", "0", "0", "340", "352", null, null, this.div_login);
            obj.set_taborder("5");
            obj.style.set_background("URL('images::sta_BG_login.png') left top");
            obj.set_cssclass("sta_BG_login");
            this.div_login.addChild(obj.name, obj);
            obj = new Edit("txt_userId", "absolute", "19.12%", "156", "210", "29", null, null, this.div_login);
            obj.set_taborder("6");
            obj.set_value("chulsoo");
            this.div_login.addChild(obj.name, obj);
            obj = new Edit("txt_userPwd", "absolute", "19.12%", "190", null, "29", "19.12%", null, this.div_login);
            obj.set_taborder("7");
            obj.set_value("test123");
            obj.set_password("true");
            this.div_login.addChild(obj.name, obj);
            obj = new Button("btn_login", "absolute", "19.12%", "264", null, "33", "19.12%", null, this.div_login);
            obj.set_taborder("8");
            obj.set_text("로그인");
            obj.set_cssclass("btn_LG_login");
            this.div_login.addChild(obj.name, obj);
            obj = new CheckBox("CheckBox00", "absolute", "19.12%", "227", null, "20", "36.76%", null, this.div_login);
            obj.set_taborder("9");
            obj.set_text("아이디 저장");
            this.div_login.addChild(obj.name, obj);
            obj = new Button("Button00", "absolute", "88.24%", "7", null, "30", "1.76%", null, this.div_login);
            obj.set_taborder("10");
            obj.style.set_background("transparent");
            obj.style.set_border("0 none #999999ff");
            this.div_login.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 553, 321, this.div_login,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("6");
            		p.style.set_background("transparent");
            		p.set_scrollbars("none");

            	}
            );
            this.div_login.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 341, 350, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("Login");
            		p.style.set_background("transparent");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information

            
            // Remove Reference
            obj = null;
        };
        

        
        // User Script
        this.addIncludeScript("login.xfdl", "lib::comLib.xjs");
        this.registerScript("login.xfdl", function() {
        /***********************************************************************************
        * SYSTEM      : nexacro Platform HTML5
        * BUSINESS    : Login
        * FILE NAME   : login.xfdl
        * PROGRAMMER  : 
        * DATE        : 
        * DESCRIPTION : Login
        *------------------------------------------------------------------
        * MODIFY DATE   PROGRAMMER			DESCRIPTION
        *------------------------------------------------------------------

        *------------------------------------------------------------------
        ***********************************************************************************/

         
        /***********************************************************************************
        * Common Library
        ***********************************************************************************/
        //include "lib::comLib.xjs";

        /***********************************************************************************
        * Form Event
        ***********************************************************************************/
        this.form_onload = function (obj,e)
        {
        	this.form_onsize(e.cx, e.cy);
        }

         
        /***********************************************************************************
        * User Function
        ***********************************************************************************/

        /**
        * form onsize
        * @return 
        * @example
        * @memberOf public
        */ 
        this.form_onsize = function(nWidth,nHeight)
        {
          	var nLeft = (application.mainframe.width / 2) - Math.round((this.div_login.getOffsetWidth()) / 2);
          	var nTop = (application.mainframe.height / 2) - Math.round((this.div_login.getOffsetHeight()) / 2);

        	if(nLeft <= 0)
        	{
        		this.div_login.setOffsetLeft(0);
        	}
        	else
        	{
        		this.div_login.setOffsetLeft(nLeft);
        		this.div_login.setOffsetTop(nTop);
        	}
        }

        
        /***********************************************************************************
        * Component Event
        ***********************************************************************************/
        this.btn_login_onclick = function(obj,e)
        {
        	gv_vFrameSet.set_separatesize("80,0,*");
        }

        
        this.Login_onsize = function(obj,e)
        {
             this.form_onsize(e.cx, e.cy);
        }

        this.fn_close = function(obj,e)
        {
        	application.exit();
        }

        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload", this.form_onload, this);
            this.addEventHandler("onsize", this.Login_onsize, this);
            this.div_login.txt_userId.addEventHandler("onkeyup", this.fn_loginOnkeyUp, this);
            this.div_login.txt_userPwd.addEventHandler("onkeyup", this.fn_loginOnkeyUp, this);
            this.div_login.btn_login.addEventHandler("onclick", this.btn_login_onclick, this);
            this.div_login.btn_login.addEventHandler("onkeyup", this.fn_loginOnkeyUp, this);
            this.div_login.Button00.addEventHandler("onclick", this.fn_close, this);

        };

        this.loadIncludeScript("login.xfdl");

       
    };
}
)();
