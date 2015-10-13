/**
 * @fileoverview 프로젝트 메인프레임관련 공통함수
 */
if ( !JsNamespace.exist("Ex.core")  )
{

	/**
	 * @namespace
	 * @name Ex.core
	 * @author
	 * @memberof!  <global>
	 */
	JsNamespace.declare("Ex.core",{

		/**
		 * this formFile object 선언 변수
		 * @private
		 * @memberOf Ex.core
		 */
		ffobj : undefined,

		
		/**
		 * 폼 온로드시 폼 init 설정
		 * @param {xpComp} object
		 * @return
		 * @example
		 * @memberOf Ex.core
		 */
		init : function(obj,_height)
		{

		
			Ex.core.onload(obj);
			Ex.core._set(obj,_height);
		},

		/**
		 * this.ffobj 값에 현재 폼 obj 설정
		 * @param {xpComp} object
		 * @return
		 * @example
		 * @memberOf Ex.core
		 */
		onload : function(obj)
		{
			this.ffobj = obj;
			Ex.vali.init(obj);
			Ex.util.init(obj);
		},
		
		

		/**
		 *폼 최초 로드 설정 값 setting
		 * @param {xpComp} object
		 * @return
		 * @example
		 * @memberOf Ex.core
		 */
		_set : function(obj,_height)
		{
		   
		    var oComp = Eco.XComp.query(obj,"typeOf == 'Button' || typeOf == 'Grid' || typeOf == 'Combo' || typeOf == 'Edit' || typeOf == 'MaskEdit' || typeOf == 'TextArea'");

		    for(var i=0; i<oComp.length; i++)
		    {
		   
		    	if(oComp[i].hasOwnProperty("_find") || oComp[i].hasOwnProperty("_excel") || oComp[i].hasOwnProperty("_format"))    //find 검색 컴퍼넌트
				{   
					if(oComp[i].hasOwnProperty("_find")){
						oComp[i].set_tooltiptext("Find");
						
					}else if(oComp[i].hasOwnProperty("_excel")){
					
						oComp[i].set_tooltiptext("Save excel");
					}else if(oComp[i].hasOwnProperty("_format")){
						
						oComp[i].set_tooltiptext("Save format");
					}
					
					
					oComp[i].setEventHandler("onclick", this.ffobj.gfn_grdNavi_onclick, this.ffobj);
				}
				 
				 Ex.core._setDefault(oComp[i]);
		    }
		   
		    if(Ex.util.isForm() == "M")
			{
          
		    	if(obj.name == "div_work" || obj.name == "div_main"){
                 
		    		 Ex.core._fh =  Eco.isEmpty(_height) ? 640 : (_height+145); //work size
		    		 Ex.core._onResize(obj);
		    	}
			}
		    else
		    {
		        obj.set_titletext('');	//팝업일경우 타이틀텍스트 삭제
		    	obj.resetScroll();
		    }
		    
		    if (Eco.isFunction(obj.form_init))
		    {
		    	obj["form_init"]();
		    }
		},
		
		/**
	        * Grid를 Excel로 Export하는 함수
	        * @param  {object} 단일Export -  Grid Object  , 다수Export - Array Objec[Grid Object,Grid Object]
	        * @param  {string} sFileName - Export될 파일명
	        * @return N/A
	        * @example
	        * @memberOf Ex.core
	        */
	        exportExcel : function(objForm,obj,sFileName,strSheet)
	        {
	            
	            this.ffobj = objForm;
	            this.fv_exportObject = obj;         
	            this.fv_exportFileName = sFileName;

	            application.set_usewaitcursor(true,true);

	            this.ct_sheet = Eco.isEmpty(strSheet) ? "sheet" :strSheet;
	    
	             this._exportExcelProcess();
	    
	    
	        },

	        /**
	        * _exportExcelProcess
	        * @return N/A
	        * @example
	        * @memberOf Ex.core
	        */
	        _exportExcelProcess : function()
	        {

	            var obj = this.fv_exportObject;
	            var sFileName = this.sfv_exportFileName;
	            var dToday = new Date();
	            var oGrid;
	            var sSheetName;
	            
	            var strType = obj.toString().toUpperCase();
	            if(!Eco.isEmpty(sFileName)){
	                sFileName = dToday.getTime() + "_" + sFileName;
	            }else{
	                sFileName = dToday.getTime();
	            }

	            var exportObj = new ExcelExportObject();

	            var sSvcUrl = application.services["svcurl"].url+"XExportImport.do";
	            this.ffobj.setWaitCursor(true,true);
	         
	            exportObj.addEventHandler("onsuccess", this._exportExcelEnd, this);
	            exportObj.addEventHandler("onerror", this._exportExcelEnd, this);

	            exportObj.set_exporttype(nexacro.ExportTypes.EXCEL2007);
	            exportObj.set_exporturl(sSvcUrl);
	            exportObj.set_exportfilename(sFileName);

	            if(strType == "[OBJECT GRID]")
	            {
	                oGrid = obj;
	                sSheetName = this.ct_sheet+"1";
	                exportObj.addExportItem(nexacro.ExportItemTypes.GRID, oGrid,  sSheetName + "!A1","allband","allrecord","suppress","allstyle","background","font", "both");
	            }
	            else
	            {
	                for(var i=0; i<obj.length; i++)
	                {
	                    sSheetName = this.ct_sheet+(i+1);
	                    oGrid = obj[i];
	                    exportObj.addExportItem(nexacro.ExportItemTypes.GRID, oGrid,  sSheetName + "!A1","allband","allrecord","suppress","allstyle","background","font", "both");
	                }
	            }

	            exportObj.exportData();
	        },


	        /**
	        * excel import
	        * @param {object} datsetName
	        * @return N/A
	        * @example
	        * @memberOf Ex.core
	        */
	        importExcel : function(sSheet,ds)
	        {
	            var sDsName = this.fv_importDsName;
	            var sSvcUrl = application.services["svcurl"].url+"XExportImport.do" ;
	            this.ffobj.importObj = new nexacro.ExcelImportObject("_importExcel",this.ffobj);
	            alert("importObj : " + this.ffobj.importObj);
	            this.ffobj.importObj.set_importtype(nexacro.ImportTypes.EXCEL);
	            this.ffobj.setWaitCursor(true,true);
	            this.ffobj.importObj.addEventHandler("onsuccess", this._importExcel_onsuccess, this);
	            this.ffobj.importObj.addEventHandler("onerror", this._importExcel_onerror, this);
	            this.ffobj.importObj.set_importurl(sSvcUrl);
	            trace(" sSheet : " + sSheet + "<> ds :  " + ds );
	            this.ffobj.importObj.importData("", "[command=getsheetdata;output=outDs;" + sSheet +"]", "["+ds+"=outDs]");
	        },

	        
	        /**
	        * _importExcelProcess
	        * @return N/A
	        * @example
	        * @memberOf Ex.core
	        */
	        _importExcelProcess : function()
	        {
	            
	            
	            this.ffobj.setWaitCursor(false,true);
	        
	        },

	        /**
	        * ExceExport 성공시 callback
	        * @return N/A
	        * @example
	        * @memberOf private
	        */
	        _exportExcelEnd : function(obj,e)
	        {

	            this.ffobj.setWaitCursor(false,true);
	        },


	        /**
	        * import Excel 성공시 callback
	        * @return N/A
	        * @example
	        * @memberOf private
	        */
	        _importExcel_onsuccess : function(obj,  e)
	        {
	            
	            this.ffobj.setWaitCursor(false,true);
	            trace(" successcount : " + this.successcount);
	            trace("  e.eventid : " +  e.eventid);
	            trace("  e.fromobject : " +  e.fromobject);
	            trace(" e.fromreferenceobject : " + e.fromreferenceobject);
	            trace(" e.url : " + e.url);


	        },

	        /**
	        * import Excel 실패시 callback
	        * @return N/A
	        * @example
	        * @memberOf private
	        */
	        _importExcel_onerror : function(obj,  e)
	        {
	            trace(" =========== onerror event start============");
	            trace(" e.eventid : " + e.eventid);
	            trace(" e.fromobject : " + e.fromobject);
	            trace(" e.fromreferenceobject : " + e.fromreferenceobject);
	            trace(" e.errorcode : " + e.errorcode);
	            trace(" e.errormsg : " + e.errormsg);
	        },

		
		/**
		* 화면안의 컨트롤의 default 속성을 설정한다.
		* @param {object} 컨트롤 객체
		* @return N/A
		* @example
		* @memberOf Ex.core
		*/
		_setDefault : function (obj)
		{
			var strType = obj.toString().toUpperCase();

			switch (strType)
			{
			
				case "[OBJECT GRID]":
				
					if (obj.autofittype == "none")
					{
						obj.set_cellsizingtype("col");
					}

					obj.set_autoenter("select");

					for (var nCell = 0; nCell < obj.getCellCount("Body"); nCell++)
					{
						obj.setCellProperty("Body", nCell, "editautoselect", true);
						obj.setCellProperty("Body", nCell, "combodisplayrowcount", 10);

						obj.setCellProperty("Body", nCell, "background","EXPR(comp.parent._gfn_grid_background(comp,currow))");
						obj.setCellProperty("Body", nCell, "background2","EXPR(comp.parent._gfn_grid_background(comp,currow))");
					}


					if(!obj.hasOwnProperty("_useSort") || (!obj.hasOwnProperty("_useSort") && obj._useSort != "N"))
					{
 					  obj.addEventHandler("onheadclick",this.ffobj._gridSort,this.ffobj);
					}

					if(!obj.hasOwnProperty("_useAllCheck") || (!obj.hasOwnProperty("_useAllCheck") && obj._useAllCheck != "N"))
					{
					    obj.addEventHandler("onheadclick",this.ffobj._setGridCheckAll,this.ffobj);
						
					}

					if(!obj.hasOwnProperty("_useCopy") || (!obj.hasOwnProperty("_useCopy") && obj._useCopy != "N"))
					{
					    obj.addEventHandler("onkeydown",this.ffobj._gridOnkeydown,this.ffobj);
					}
				
					 obj.addEventHandler("onkeyup",this.ffobj._gridOnkeyup,this.ffobj);
					
					break;
				case "[OBJECT COMBO]":
					
					
					if(obj.hasOwnProperty("_useprop")){
					
						if(obj._useprop == "true"){
							obj.set_autoselect('true');
							obj.set_type('search');
							obj.addEventHandler("oneditclick",this.ffobj._comboOnEditClick,this.ffobj);
						}
						
					}else{
						obj.set_autoselect('true');
						obj.set_type('search');
						obj.addEventHandler("oneditclick",this.ffobj._comboOnEditClick,this.ffobj);
					}
					
					if (obj.displayrowcount == -1)
					{
						obj.set_displayrowcount(10);
					}
				case "[OBJECT EDIT]":
				case "[OBJECT MASKEDIT]":
				case "[OBJECT TEXTAREA]":
				//	obj.set_autoselect(true);
					break;
				default:
					break;
			}
		},

		_formOnsize : function(obj,e)
		{

			Ex.core._onResize(obj);
		},

		_onResize : function(obj)
		{
			if(obj.name == "div_work" || obj.name == "div_main")
			{
				
			  var nWorkSize = Eco.XComp.PositionSize.getClientWidth(gv_main.div_work);
			  var nLeftisze = Eco.XComp.PositionSize.getClientWidth(gv_main.div_left);			  
			  var nMainSize = application.mainframe.width;

			  Ex.core.ffsize.id = "work";
              Ex.core.ffsize.w = 1260;
              Ex.core.ffsize.h = Ex.core._fh;
              gv_index.on_resize();

              if(!Eco.isEmpty(Ex.core.ct_leftMenuId)){
            	
            	  gv_left.ds_menu.set_rowposition(-1);
            	  gv_left.ds_menu.set_rowposition(gv_left.ds_menu.findRow(ct_menuIdCol,Ex.core.ct_leftMenuId));
              }
              Ex.core.ct_leftMenuId = "";
             
              
			}
		},
        /**
         * @param {number} resizing hegith 값
         * @param {number} resizng 할 높이값
         * @return N/A
         * @example
         *	Ex.core.fResize(1000);
         * @memberOf Ex.core
         */
        fResize :  function(h)
        {
            if(typeof(h) != "number") Eco.Logger.debugger({message:"type error  argu type='"+typeof(h)+"'", elapsed:true, stack:true});
            Ex.core.ffsize.h = h;
            gv_index.on_resize();
            

        },

 
	   /**
		* favicon setting
		* @return 
		* @example
		* @memberOf Ex.core
		*/
	   setFavicon : function()
	   {
		  
		   var linkElement = document.createElement('link');
		   linkElement.rel = 'shortcut icon';
		   linkElement.type = 'image/ico';
		   //linkElement.href = 'http://localhost/images/favicon1.ico';
		   linkElement.href = './image/nexacro.ico';
		  
		   document.getElementsByTagName('head')[0].appendChild(linkElement);
	   },
	

		getParam : function(arg)
		{
		
		   return Ex.core.o_menu.PARAM[arg];
			
		},
		
		/**
	        * 메세지 코드에 따른 실제 메세지값을 찾은 후 팝업창을  생성해서 해당 값을 보여주는 함수
	        * @param {string} message 유형 (alert or confirm)
	        * @param {string} message id
	        * @param {string} callbackId
	        * @param {string} meesage type ("error", "question", "warning", "information" (default))
	        * @param {array} msgArr[](메세지값으로 치환될 Parameter Array)
	        * @param {string} max, min (defalut:min)
	        * @return {object} 팝업에 해당 메세지값을 표현
	        * @example
	        * @memberOf Ex.core
	        */
	        comMsg : function(strFlag,strMsgId, callbackId,strMsgType, msgArr,sSize)
	        {

	           if(Eco.isEmpty(strFlag)) Eco.Logger.error({message:"UnKown message flag :" + strFlag,stack:true,elapsed:true});
	            var strMsg = Ex.core.getMessage(strMsgId, msgArr);
	        
	           switch(strFlag)
	           {
	               case "alert":

	                   if(Eco.isEmpty(strMsgType)) strMsgType = "default";
	                   alert(strMsg, strMsgType, strMsgType);
	                   break;

	               case "confirm":
	                   if(Eco.isEmpty(strMsgType))  strMsgType = "question";
	                   return confirm(strMsg, strMsgType, strMsgType);
	                   break;
	            }

	        },
	        
	        /**
	         * 메세지 값을 문자열 치환하여 메세지 내용을 조회한다.
	         * @param {string} 메세지ID
	         * @param {array} 토큰문자배열
	         * @return String, 변형문자열
	         * @example
	         * @memberOf Ex.core
	         */
	         getMessage : function (TextID, aArgs)
	         {

	             if (Eco.isEmpty(TextID))
	             {
	                 return "";
	             }

	             var sRtnMsg = application.gds_message.lookup("MSG_CD",TextID,"MSG_NM");

	             if(Eco.isEmpty(sRtnMsg))
	             {
	                 return TextID;
	              }

	             if (Eco.isEmpty(aArgs))
	             {
	                 return sRtnMsg;
	             }

	             var sType = typeof (aArgs);

	             switch (sType)
	             {
	                 case "object":
	                     if (aArgs.length > 0)
	                     {
	                         for (var i = 0; i < aArgs.length; i++)
	                         {
	                             var strVal  = aArgs[i];
	                             sRtnMsg = sRtnMsg.replace(this.ct_txtPrefixFr + (i) + this.ct_txtPrefixTo,  this.getMessage(strVal));
	                         }
	                     }
	                     else
	                     {
	                         
	                             var strVal  = aArgs[strName];
	                             sRtnMsg = sRtnMsg.replace(this.ct_txtPrefixFr + strName + this.ct_txtPrefixTo, this.getMessage(strVal));
	                         
	                     }
	                     break;
	                 default:
	                     sRtnMsg = sRtnMsg.replace(this.ct_txtPrefixFr + "0" + this.ct_txtPrefixTo, this.getMessage(aArgs));
	                     break;
	             }

	             return sRtnMsg;
	         },
		

		/**
		* 넥사 프로그레시브바 대응 
		* @return {string}  반환os
		* @example
		* @memberOf Ex.util
		*/ 
	   set_wait : function(bArg)
	   {
		   
		   var pThis = (Ex.util.isForm() == "M" ? gv_index : this.ffobj);
		  
			   if(bArg)
		    	{
		    	
		    	   if(pThis.isValidObject("divWaitcursor")) pThis.removeChild("divWaitcursor"); 
		    	     	   
		    	   // Create Object  
					var objWaitDiv = new Div();  		
					objWaitDiv.init("divWaitcursor", "absolute", 0, 0, null, null, 0,0);
					objWaitDiv.style.set_background("transparent URL('image::waitimage.gif') center middle");
					// Add Object to Parent Form  
					pThis.addChild("divWaitcursor", objWaitDiv); 
					// Show Object  
					objWaitDiv.show(); 
					
					objWaitDiv.bringToFront();
		    	}
		    	else if(!bArg)
		    	{
		      	   if(pThis.isValidObject("divWaitcursor")) pThis.removeChild("divWaitcursor"); 
		    	
		    	}
	   },
	   
	  
		/**
		* 공통 트랜잭션 함수
		* @param {string} serviceID
		* @param {string} Transaction 요청 경로
		* @param {string} inputdataset 명   = 로 구분
		* @param {string} outDatasets 명   = 로 구분
		* @param {string} argument 명   Dataset 외의 Transaction을 위한 인자값
		*                            a=b의 형태로 입력하고, 빈칸으로 구분
		* @param {string} callbackFunc 명
		* @param {booolen}{string} ProgressBar 표시여부(default:true)
		* @param {booolen} 비동기 여부를 지정합니다.(Default : true)
		* @param {bBinary} Binary 형태로 전송할 지 여부를 지정합니다.(Default : false)
		* @return N/A
		* @example
		* @memberOf Ex.core
		*/
		tran : function()
		{

			if(application.gv_prjType == "false") return;
			
			var svcID, sController, inDatasets, outDatasets, argument, callbackFunc, showProgress, bAsync, bBinary;
			var arrArgu = arguments;
			Ex.core.onload(arrArgu[0]); //현재폼 초기화
			     svcID       = arrArgu[1];  //service id
			     sController = arrArgu[2];
			     inDatasets  = arrArgu[3];
			     outDatasets = arrArgu[4];
			     argument    = arrArgu[5];
			     callbackFunc  = arrArgu[6];
			     showProgress  = arrArgu[7];
			     bAsync        = arrArgu[8];
			     bBinary      = arrArgu[9];//0 : xml 2:ssv

			var pThis = arrArgu[0];
             this.trstart = true;
			if (Eco.isEmpty(showProgress))
			{
				
				showProgress = true;
			}
			if (Eco.isEmpty(bAsync))
			{
				bAsync = true;
			}
			if (Eco.isEmpty(bBinary))
			{
				bBinary = false;
			}
			if (Eco.isEmpty(argument))
			{
				argument = "";
			}
			if (Eco.isEmpty(callbackFunc))
			{
				callbackFunc = "fn_callBack";
			}
			var strChk = new String(showProgress);
			if (strChk != 'true' && strChk != 'false')
			{
			}
			application.set_usewaitcursor(showProgress,true);
			// Async가 true면 커서를 지정한다.
			var service = application.services["svcurl"];
			
			var _dsTransInfo = Ex.util.isCheckDs("dsTransInfo");
			//argument --- > dataset으로 처리
			var _dsParamInfo = Ex.util.isCheckDs("dsParamINfo");

		    if(pThis.dsTransInfo.getColCount() < 1)
		    {
		    	pThis.dsTransInfo.addColumn( "strSvcID", "string" );
		    	pThis.dsTransInfo.addColumn( "strURL", "string" );
		    	pThis.dsTransInfo.addColumn( "strInDatasets", "string" );
		    	pThis.dsTransInfo.addColumn( "strOutDatasets", "string" );
		    }
		    //argument = argument.replace(/null/g, "").replace(/undefined/g, "");
		    pThis.dsTransInfo.clearData();
		    pThis.dsParamINfo.clear();

		    var arrParam = argument.split("&nbsp;");
		    for(var p=0; p<arrParam.length;p++){

		
		    	var datasetNm 	= arrParam[p].split("=");

		    	if( datasetNm.length != 2 ) continue;

		    	var strArgServer 	= datasetNm[0].toString().trim();
				var strArgClient  	= datasetNm[1].toString().trim();

				    pThis.dsParamINfo.addColumn(strArgServer);

				    if(pThis.dsParamINfo.rowcount ==0)
				    {
				    	pThis.dsParamINfo.addRow();
				    }
				    pThis.dsParamINfo.setColumn(0,strArgServer,strArgClient);

		    }

			var dsInputName = Ex.util.splitDsName(inDatasets,0);
			var dsOutputName = Ex.util.splitDsName(outDatasets,1);

			for (var i = 0; i < dsInputName.length ; i++ ){
				var row = pThis.dsTransInfo.addRow();
				if (i == 0)
				{
					pThis.dsTransInfo.setColumn(row,0, svcID);
					pThis.dsTransInfo.setColumn(row,1, sController);
				}
				pThis.dsTransInfo.setColumn(row,2, dsInputName[i]);
			}

			for (var i = 0; i < dsOutputName.length ; i++ ){
				if(i > 0){
					row = pThis.dsTransInfo.addRow();
				}

				    pThis.dsTransInfo.setColumn(row,3, dsOutputName[i]);
			}

			
			inDatasets   = "__DS_PARAM_INFO__=dsParamINfo __DS_TRANS_INFO__=dsTransInfo " + inDatasets;
		    outDatasets = outDatasets;// Ex.util._searchPageDatasetCheck(outDatasets);  //out 데이터셋 페이징처리 부분 체크

		    // Service ID Merge
			var strSvcID = {id:svcID, callbackFunc:callbackFunc,outDatasets:outDatasets};
			var strURL = service.url + sController;
			var strInDatasets = inDatasets;
			var strOutDatasets = outDatasets;
			var strArgument = argument;
			var strCallbackFunc = "_gfn_callback";
			var m_output = outDatasets;

			pThis.transaction(strSvcID, strURL, strInDatasets, strOutDatasets, strArgument, strCallbackFunc, bAsync, bBinary);
		}
	});
}