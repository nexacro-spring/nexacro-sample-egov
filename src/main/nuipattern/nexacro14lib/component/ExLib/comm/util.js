/**
f * @fileoverview 프로젝트 utility 공통함수
 */
if ( !JsNamespace.exist("Ex.util")  )
{
	/**
	 * @namespace
	 * @name Ex.util
	 * @author 
	 * @memberof! <global>	
	 */
	JsNamespace.declare("Ex.util",{

		/**
		 * this formFile object 선언 변수
		 * @private
		 * @type string		 
		 * @memberOf Ex.util
		 */ 
		ffobj : undefined,	
		/**
		 * 아규먼트 셋팅
		 * @private
		 * @type string		 
		 * @memberOf Ex.util
		 */
		ffarg : undefined,
        
		 
		 /**
		 * _msgFormSize
		 * @private
		 * @memberOf private
		*/
		_msgFormSize : {
			       
		        	 width : "400",
			         height : "210",         
			        middle :{
				           width : "400",
				           height : "280"         
				         },
				         
				    max :{
				           width : "600",
				           height : "280"      
				         }
		        	 
		 },
		 
		 /**
		 * 객체 초기 onload 생성	
		 * @type 
		 * @example 
		 * @memberOf Ex.util
		*/
		 init : function(formObj)
		 {
			
			 this.ffarg =  undefined;
			this.ffobj = formObj; 
		 },
		 
		 /**
		 * gfn_alert  gfn_confirm 공통 폼 사이즈 선언	
		 * @type 
		 * @example 
		 * @memberOf Ex.util
		*/
		setOpenMsg : function(sSizeType)
		{
			
		          var strWidth,strHeight;
		          //var strHeight = "";
	        		if (Eco.isEmpty(sSizeType) || sSizeType == "default") 
					{
	        			sSizeType = "default";
					  
					   strWidth =  Ex.util._msgFormSize.width;
				       strHeight =  Ex.util._msgFormSize.height;
				       
					}
					else
					{
						
				        switch(sSizeType)
				        {
				           case "middle" :
				          
				          strWidth =  this._msgFormSize.middle.width;
				          strHeight =  this._msgFormSize.middle.height;
				          
				            break;
				            
				           case "max" :
				        	   strWidth =  this._msgFormSize.max.width;
							  strHeight =  this._msgFormSize.max.height;
							
				            break;
				            
				           default :
				        	   Ex.Logger.error({message: "unKnown msgPopup type :" + sSizeType, elapsed: true, stack:true});
				        	 break;
				        }
					    
					}
	        		
	        		var size = {
	        			width :	strWidth,
	        			height : strHeight
	        				
	        		};
	 
	        		
	        		return size;
		        		
		},
		 
         /**
 		 * argument 세팅함수 		 
 		 * @type 
 		 * @example 
 		 * @memberOf Ex.util
 		*/
		 setArg : function(ffArg)
		 {
			this.ffArg = ffArg;
			 //{arg : }
			 
		 },

		 
		 /**
 		 * argument 가져오는 함수 
 		 * @type 
 		 * @example 
 		 * @memberOf Ex.util
 		*/
		 getArg : function()
		 {
			 return this.ffArg;
		 },
		 
		 
		 /**
		 * 공백으로치환 
		 * @param {string} 체크할  파리미터명
		 * @return {string} 공백으로 치환값
		 * @example
		 *    trace(Eco.isEmpty("")); (output) ""
		 * @memberOf Ex.util
		 */		
		isReplaceEmpty : function(strArg)
		{
			  if( Eco.isNull(strArg) || Eco.isUndefined(strArg)) return "";
			   else
			   return strArg;
		},
		
		 /**
		 * 부모창에 존재하는 함수명 검색하여 호출 
		 * @param {string} function명
		 * @return {string} 공백으로 치환값
		 * @example
		 *  Ex.util.searchParentFunc("fn_func").call(this,arg1);
		 * @memberOf Ex.util
		 */	
		searchParentFunc : function()
	    {
		
			var idx = 1;
			var parentStr = "";
			var pThis = "this.ffobj.";
			var  i=0;
            var functionName = arguments[0];
            var isFind = false;
			
			while(idx<5)
			{
				
			   if(Eco.isFunction(eval(pThis + parentStr + functionName)) == true)
			   {
				   
			     isFind= true;
			     break;
			   }
			   else
			   {
			       
			      parentStr =  "parent." + parentStr;
			     idx++;
			   }
			  
			}
		  
		   if(!isFind)
		   {
			   //Ex.Logger.error({message: "unknown function error !!!" + functionName, elapsed: true});
		    }
		   else
			{
			
			
			   isFind = eval(pThis + parentStr + functionName);
			   
			} 
		   
			return isFind;
	    },
	    
	    /**
		 * 호스트정보 
		 * @param 
		 * @return {string} host정보
		 * @example
		 *  var isHost = Ex.isGetHost() //output : LOCAL OR DEV OR OP	 
		 * @memberOf Ex.util
		 */
	    isGetHost : function()
	    {

	    	 return "OP";
	    },
	    
	    /**
		 * 메인폼인지 팝업인지 구분 
		 * @param 
		 * @return  p 팝업 M 메인
		 * @example
		 *  var isHost = Ex.util.isForm() //output : p 팝업 M 메인 
		 * @memberOf Ex.util
		 */
	    isForm : function()
	    {
	     	
	    	if(Eco.isEmpty(this.ffobj.opener))
	    	{
	    		return "M";
	    	}
	    	else
	    	{
	    		return "P";
	    	}	
	    
	    },
	   	    
	    /**
		 * 디버그 메세지 출력
		 * @param 
		 * @return  debug message
		 * @example
		 *  var isHost = Ex.util.isForm() //output : p 팝업 M 메인 
		 * @memberOf Ex.util
		 */
	    isDebug : function(msg)
	    {
	    	if(application.gv_debug == "Y")
	    	{
	    		  Ex.Logger.debug({message: "debug message !!!" + msg, elapsed: true,stack:true});
	    	}		
	    	
	    },
		
		/**
		* 해당 데이터셋명으로 검색하여 데이터셋이 없으면 데이터셋을 생성
		* @param {string} 데이터셋명
		* @return {string} dataset
		* @example
		* @memberOf Ex.util
		*/   
		isCheckDs : function(sDsNm)
		{
		   
			//var oDs = Ex.util.getDataset(sDsNm);
			var oDs =Eco.XComp.lookup(this.ffobj,sDsNm);
			 trace(Eco.XComp);
		    // 
		     if(Eco.isEmpty(oDs))
		     {
		         oDs = new Dataset;
		         oDs.name = sDsNm;
		      
		         this.ffobj.addChild(sDsNm, oDs);
		     }
		     else
		    {
		    	 oDs.clearData();
		    	 
		    }	 
		    
		     
		     return oDs;
		},
		
		/**
		* 해당 데이터셋명으로 검색하여 데이터셋찾아서 리턴 없으면 -1을 반환
		* @param {string} 데이터셋명
		* @return {string} dataset
		* @example
		* @memberOf Ex.util
		*/  
		getDataset : function(sDsNm)
		{
		
			return Eco.XComp.query(this.ffobj, "typeOf == 'Dataset' && prop[name] == '"+sDsNm+"'")[0];
		},
		
		/**
		* = 을 배열로 분리 처리
		* @param {string} objString (inds=inds)
		* @param {number} 0 : 배열 첫번째값 1: 배열 두번째값
		* @return {string} return 된 배열값
		* @example
		* @memberOf Ex.util
		*/ 
		splitDsName : function(objString, type)
		{
			var strDsMapping;			//mapping string
			var objArr;					//dataset name array
			var objReturn = new Array();
			
			strDsMapping = objString.split(" ");
			
			for (var i = 0; i < strDsMapping.length ; i++ ){
				objArr = strDsMapping[i].split("=");    // objArr = a,cd
				if (type == 0)
					objReturn[i] = objArr[0];
				else
					objReturn[i] = objArr[1];
			}
			
			return objReturn;
		},
		

		/**
		*  데이터셋 페이징처리 부분 체크
		* @param {string} outputDataset
		* @return {string} return outputdataset
		* @example
		* @memberOf Ex.util
		*/ 
		_searchPageDatasetCheck : function(sOutDs)
		{	
			
			if(Eco.isEmpty(sOutDs))
		    {
		        return sOutDs;
		    }
		    
		    var aOutDsList = sOutDs.split(" ");
		    var aOutDsInfo = "";
		    var sPageDsSpare = "";
		    var sOutDataset = "";
		    var oOutDataset;
		    var oPageDs;
		    var oPageDsSpare;
		    var oPageDsTarget;
		    var nPage = (Eco.isEmpty(application.gds_pageInfo.getColumn(0,"CURR_PAGE"))) ? 1 : parseInt(application.gds_pageInfo.getColumn(0,"CURR_PAGE"));
	
		    
		    var sAppendDataset = (nPage > 1) ? "Y" : "N";
		    var rtnVal = new Array(2);
		   
		    for(var i=0; i<aOutDsList.length; i++)
		    {
		        aOutDsInfo = aOutDsList[i].split("=");
		        oOutDataset = Ex.util.getDataset(aOutDsInfo[0]);
		  
				if(sAppendDataset == "Y")
				{        
					sPageDsSpare = aOutDsInfo[0]+"_Spare";
					oPageDsSpare = Ex.util.getDataset(sPageDsSpare); 
					oPageDsTarget = Ex.util.getDataset(aOutDsInfo[0]); 
				
					if(Eco.isEmpty(oPageDsSpare))
					{
						oPageDsSpare = new Dataset;
		                oPageDsSpare.loadXML(oPageDsTarget.saveXML());
		                oPageDsSpare.name = sPageDsSpare;
		                oPageDsSpare.useclientlayout = true;
						this.ffobj.addChild(sPageDsSpare,oPageDsSpare);
					}                

					if(sOutDataset.length == 0)
					{
					   sOutDataset = sPageDsSpare+"="+aOutDsInfo[1];
					}
					else
					{
					   sOutDataset += " "+sPageDsSpare+"="+aOutDsInfo[1];
					}			
				}
				else
				{
					if(sOutDataset.length == 0)
					{
					   sOutDataset = aOutDsInfo[0]+"="+aOutDsInfo[1];
					}
					else
					{
					   sOutDataset += " "+aOutDsInfo[0]+"="+aOutDsInfo[1];
					}					
				}
		    }

		    return sOutDataset;
		},
		
		/**
		* 페이징 dataset 초기화
		* @param {string} outputDataset
		* @return N/A
		* @example
		* @memberOf Ex.util
		*/ 
		postPageDataset : function(sOutDs)
		{
		    if(Eco.isEmpty(sOutDs))
		    {
		        return sOutDs;
		    }
		    
		    var aOutDsList = sOutDs.split(" ");
		    var aOutDsInfo = "";
		    var sPageDs = "";
		    var sPageDsSpare = "";
		    var sPageDsTarget = "";
		    var nRow = 0;
		    var oPageDsSpare;
		    var oPageDsTarget;

		    for(var i=0; i<aOutDsList.length; i++)
		    {
		        sOutDsInfo = aOutDsList[i].split("=");
		        sTargetDs = sOutDsInfo[0];
		        
		         if(sTargetDs.search(/_Spare/g) > -1)
		         {
		             sPageDsTarget = sTargetDs.replace(/_Spare/g,"");
		             oPageDsTarget = Ex.util.getDataset(sPageDsTarget);
		             oPageDsSpare = Ex.util.getDataset(sTargetDs);
		             
		             
		             oPageDsTarget.appendData(oPageDsSpare);
		             nRow = oPageDsTarget.rowcount;
		             oPageDsTarget.set_rowposition(nRow-1);
		         }
		    }
		},
		

		/**
		* dataset object에서 키에 해당되는 Row를 찾아서 삭제
		* @param {object} dataset
		* @param {string} 키칼럼
		* @param {string} :키값
		* @param {string} 서브키칼럼
		* @param {string} :서브 키값
		* @return N/A
		* @example
		* @memberOf Ex.util
		*/  
		deleteData : function (ObjDs, strIdCol, strId, strSubCol, strSubId)
		{
			var curRow = Ex.util.findData(ObjDs, strIdCol, strId, strSubCol, strSubId);
			ObjDs.deleteRow(curRow);
		},
		
		/**
		* dataSet object에서 키에 해당되는 Row를 찾아서 rowpostion 전달
		* @param {object} dataset
		* @param {string} 키칼럼
		* @param {string} :키값
		* @param {string} : 서브키칼럼
		* @param {string} :서브 키값
		* @return N/A
		* @example
		* @memberOf Ex.util
		*/  
		findData : function (ObjDs, strIdCol, strId, strSubCol, strSubId)
		{
		
			if (Eco.isEmpty(strSubCol)) 
			{
				return ObjDs.findRow(strIdCol, strId.toString());
			}
		
			return ObjDs.findRowExpr(strIdCol + " == '" + strId + "' && " + strSubCol + " == '" + strSubId + "'");
		},
		
		/**
		* dataset object에서 키에 해당되는 Row를 찾아서 이동
		* @param {object} dataset
		* @param {string} 키칼럼
		* @param {string} :키값
		* @param {string} : 이동할 Row,
		* @param {string} :서브키칼럼
		* @param {string} : 서브 키값
		* @return N/A
		* @example
		* @memberOf Ex.util
		*/   
		moveData : function (ObjDs, strIdCol, strId, newRow, strSubCol, strSubId)
		{
			var curRow = Ex.util.findData(ObjDs, strIdCol, strId, strSubCol, strSubId);
			ObjDs.moveRow(curRow, newRow);
		},
		
		/**
		* dataset object에서 키에 해당되는 Row를 찾아서 값을 변경
		* @param {object} dataset
		* @param {string} 키칼럼
		* @param {string} :키값
		* @param {string} : 변경할 칼럼
		* @param {string} :변경값
		* @param {string} : 서브키칼럼
		* @param {string} : 서브 키값
		* @return N/A
		* @example
		* @memberOf Ex.util
		*/   
		editData : function (ObjDs, strIdCol, strId, valCol, newVal, strSubCol, strSubId)
		{
			var curRow = Ex.util.findData(ObjDs, strIdCol, strId, strSubCol, strSubId);
			return ObjDs.setColumn(curRow, valCol, newVal);
		},
		

		/**
		* dataset object에서 가져오는 함수 Null경우에는 Type에 의한 예외처리 하여 반환
		* @param {object} dataset
		* @param {string} 키칼럼
		* @param {string} :키값
		* @param {string} : 변경할 칼럼
		* @param {string} :변경값
		* @param {string} : 서브키칼럼
		* @param {string} : 서브 키값
		* @return N/A
		* @example
		* @memberOf Ex.util
		*/  
		getData : function(ObjDs,nRow,sColId,sVal)
		{
		    var oData = ObjDs.getColumn(nRow,sColId);
		 
		    var oColInfo = ObjDs.getColumnInfo(sColId);
		    if(Eco.isEmpty(oColInfo)) return "";
		    var sType = oColInfo.type;
		    
		    if(Eco.isEmpty(sVal))
		    {
				switch(sType.toUpperCase())
				{
					case "STRING" : 
					   sVal = "";
					break;
					case "BIGDECIMAL" :
					case "INT" :
					case "FLOAT" :
					   sVal = 0;
					break;
				}
			}	
		    
		    var rtnVal = (Eco.isEmpty(oData)) ? sVal : oData;
		    
		    return rtnVal;
		},
		
		/**
		* dataSet object에서 키에 해당되는 Row를 찾아서 칼럼값을 전달
		* @param {object} dataset
		* @param {string} 키칼럼
		* @param {string} :키값
		* @param {string} : dataSet 칼럼
		* @param {string} :변경값
		* @param {string} : 서브키칼럼
		* @param {string} : 서브 키값
		* @return N/A
		* @example
		* @memberOf Ex.util
		*/   
		getLookupData : function (ObjDs, strIdCol, strId, strInfo, strSubCol, strSubId)
		{
			var strVal;
			var curRow = Ex.util.findData(ObjDs, strIdCol, strId, strSubCol, strSubId);
			if (curRow < 0) 
			{
				return "";
			}
			
			strVal = ObjDs.getColumn(curRow, strInfo);
			if (Eco.isEmpty(strVal)) 
			{
				return "";
			}

			return strVal;
		},
		
		/**
		* dataSet의 Row 중에서 변경된 내용이 있는지 여부를  판단하는 함수
		* @param {object} DataSet
		* @return {boolen} true = 변경 된 데이터가 존재 , false = 변경 된 데이터가 없음
		* @example
		* @memberOf Ex.util
		*/  
		isUpdated : function (objDs)
		{
			if (objDs.getDeletedRowCount() > 0) 
			{
				return true;
			}
			
			if (objDs.findRowExpr("(this.getRowType(rowidx)==Dataset.ROWTYPE_UPDATE)||(this.getRowType(rowidx)==Dataset.ROWTYPE_INSERT)") > -1) 
			{
				return true;
			}
			return false;
		},
		
		/**
		* dataSet의 Row가 변경되었는지 판단하는 함수
		* @param {object} objDs(DataSet)
		* @param {number} 체크할 Row index
		* @return {boolen} true = 변경 된 데이터가 존재 , false = 변경 된 데이터가 없음
		* @example
		* @memberOf Ex.util
		*/   
		isUpdatedRow : function (objDs, nRow)
		{
			if (objDs.updatecontrol == true) 
			{
				if (objDs.getRowType(nRow) == 2 || objDs.getRowType(nRow) == 4) 
				{
					return true;
				}
				return false;
			}
			else 
			{
				for (var i = 0; objDs.getColCount(); i++) 
				{
					if (this.gfn_IsUpdateColumn(objDs, nRow, i) == true) 
					{
						return true;
					}
				}
			}
			return false;
		},
		

		/**
		* dataSet의 Row 에서 해당 칼럼이 변경되었는지
		* @param {object} objDs(DataSet)
		* @param {number} 체크할 Row index
		* @param {string} 체크할 컬럼값
		* @return {boolen} true = 변경 된 데이터가 존재 , false = 변경 된 데이터가 없음
		* @example
		* @memberOf Ex.util
		*/   
		isUpdateColumn : function (objDs, nRow, Column)
		{
			if (objDs.getRowType(nRow) == 2) 
			{
				if (Eco.isEmpty(objDs.getColumn(nRow, Column))) 
				{
					return false;
				}
			}
			else 
			{
				if (objDs.getColumn(nRow, Column) == objDs.getOrgColumn(nRow, Column)) 
				{
					return false;
				}
			}
			return true;
		},
		

		/**
		* Dataset의 모든 행을 함수의 인자로 넘겨주고 함수 호출처리
		* @param {object} objDs(DataSet)
		* @param {string} 호출할 함수
		* @param {boolen} 변경된 데이터만 호출할지 여부
		* @return {string} 호출된값
		* @example
		* @memberOf Ex.util
		*/   
		allRowDataCall : function (dsObj, callFncObj, bModifiedOnly)
		{
			var retVal;
			for (var i = 0; i < dsObj.getRowCount(); i++) 
			{
				if (bModifiedOnly && !(dsObj.getRowType(i) == 2 || dsObj.getRowType(i) == 4)) 
				{
					continue;
				}
				retVal = callFncObj(dsObj, i);
				if (Eco.isEmpty(retVal) == false) 
				{
					return retVal;
				}
			}
		},
		

		/**
		* Dataset의 필터한 정보를 대상 Dataset으로 Copy하는 기능
		* @param {object} 목적데이타셋dsDs(DataSet)
		* @param {string} 처리데이타셋
		* @param {string} 필터표현
		* @return N/A
		* @example
		* @memberOf Ex.util
		*/   
		dsFilter : function(dsSc,dsTg,sFilterExpr)
		{
			var sKeyString = dsSc.keystring;
			if(!Eco.isEmpty(sKeyString))  sKeyString = sKeyString.toString();
			dsSc.set_keystring("");
			dsSc.filter(sFilterExpr);
			dsTg.copyData(dsSc,true);
			dsSc.filter("");   
			if(!Eco.isEmpty(sKeyString))  dsSc.set_keystring(sKeyString);
		},
		

		/**
		* 입력값이 e-mail Type인지 체크하는 함수
		* @param {string} strValue
		* @return true = 입력값이 email형태일 경우
		* @example
		* @memberOf Ex.util
		*/ 
		checkEmail : function (strValue)
		{
			if (Eco.isEmpty(strValue)) 
			{
				return false;
			}

			var nIndexOfAt = strValue.indexOf("@");
			var nIndexOfDot = strValue.indexOf(".");
			var nLength = strValue.length;

			// "@" 이 하나도 없거나 맨 끝에 위치한  경우
			if (nIndexOfAt <= 0 || nIndexOfAt == nLength) 
			{
				return false;
			}

			// "." 이 하나도 없거나 맨 끝에 위치한 경우
			if (nIndexOfDot <= 0 || nIndexOfDot == nLength) 
			{
				return false;
			}

			// "@"이 두개 이상 존재하는 경우
			if (strValue.indexOf("@", nIndexOfAt + 1) != -1) 
			{
				return false;
			}

			// ".@" 인 경우 또는 "@."인 경우
			if (strValue.substr(nIndexOfAt - 1, 1) == "." || strValue.substr(nIndexOfAt + 1, 1) == ".") 
			{
				return false;
			}

			// "@" 이후에 "."이 존재하지 않는 경우
			if (strValue.indexOf(".", (nIndexOfAt + 2)) == -1) 
			{
				return false;
			}

			// 공백문자가 존재하는 경우
			if (strValue.indexOf(" ") != -1) 
			{
				return false;
			}

			return true;
		},
		
		/**
		* 해당 PC의 오늘 날짜(korea)를 가져온다.
		* @return {string] 오늘날짜
		* @example
		* @memberOf Ex.util
		*/  
		today : function ()
		{
		  
		
			var strToday = "";
			var objDate = new Date();

			var strToday = objDate.getFullYear() + "";
			strToday += Eco.string.getRightStr("0" + (objDate.getMonth() + 1), 2);
			strToday += Eco.string.getRightStr("0" + objDate.getDate(), 2);

			return strToday;
		},
		
		/**
		* 해당 PC의 오늘 날짜(English)를 가져온다.
		* @return {string] 오늘날짜
		* @example
		* @memberOf Ex.util
		*/  
		todayEng : function ()
		{
		  
		
			var strToday = "";
			var objDate = new Date();

			var strToday = "";
			strToday += Eco.string.getRightStr("0" + (objDate.getMonth() + 1), 2);
			strToday += Eco.string.getRightStr("0" + objDate.getDate(), 2);
			strToday += objDate.getFullYear() 

			return strToday;
		},
		
		/**
		* 날짜 형식을 englisg 형태를  korea 형식으로 변환
		* @return {string]  mmddyyyy 형태에 날짜를 yyyymmdd로 변경처리
		* @example
		* @memberOf Ex.util
		*/  
		replaceDateKorea : function(value)
		{
			var stringWrapper = new String(value);
			
			if( stringWrapper.toString().length !== 8 ) return;
		   //영문달력인지 체크하는 함수
			var iMonth  = Math.floor(stringWrapper.slice(0,2), 10);
			var iDate   = Math.floor(stringWrapper.slice(2,4), 10);
		
		
			if( iMonth < 1 || iMonth > 12 ) return;
				
			if( iDate < 1 ) return;
			
			strToday = value.slice(4);
			
			strToday += value.slice(0,2);
			strToday += value.slice(2,4);
		
			return strToday;
			
		},
		
		/**
		* 날짜 형식을 korea 형태를  English 형식으로 변환
		* @return {string] yyyymmdd로  형태에 날짜를 mmddyyyy로 변경처리
		* @example
		* @memberOf Ex.util
		*/  
		replaceDateEng : function(value)
		{
			var stringWrapper = new String(value);
		
			if( stringWrapper.toString().length !== 8 ) return;
		   //영문달력인지 체크하는 함수
			var iMonth  = Math.floor(stringWrapper.slice(4,6), 10);
			var iDate   = Math.floor(stringWrapper.slice(6), 10);
		 
		 
			if( iMonth < 1 || iMonth > 12 ) return;
				
			if( iDate < 1 ) return;
			
			strToday = stringWrapper.slice(4,6);
			strToday += stringWrapper.slice(6);			
			strToday += stringWrapper.slice(0,4);
		
			return strToday;
			
		},
		
		isFormatDate : function()
		{
			
		},
		
		/**
		* 해당 PC의 오늘 날짜+시간를 가져온다.
		* @return {string] 오늘날짜 + 시간
		* @example
		* @memberOf Ex.util
		*/  
		todayTime : function ()
		{
			var strToday = "";
			var objDate = new Date();

			var strToday = objDate.getFullYear() + "";
			strToday += Eco.string.getRightStr("0" + (objDate.getMonth() + 1), 2);
			strToday += Eco.string.getRightStr("0" + objDate.getDate(), 2);
			strToday += Eco.string.getRightStr("0" + objDate.getHours(), 2);
			strToday += Eco.string.getRightStr("0" + objDate.getMinutes(), 2);
			strToday += Eco.string.getRightStr("0" + objDate.getSeconds(), 2);

			return strToday;
		},
		
		/**
		* 입력값이 e-mail Type인지 체크하는 함수
		* @param {string} strValue
		* @return true = 입력값이 email형태일 경우
		* @example
		* @memberOf Ex.util
		*/ 
		checkEmail : function (strValue)
		{
			if (Eco.isEmpty(strValue)) 
			{
				return false;
			}

			var nIndexOfAt = strValue.indexOf("@");
			var nIndexOfDot = strValue.indexOf(".");
			var nLength = strValue.length;

			// "@" 이 하나도 없거나 맨 끝에 위치한  경우
			if (nIndexOfAt <= 0 || nIndexOfAt == nLength) 
			{
				return false;
			}

			// "." 이 하나도 없거나 맨 끝에 위치한 경우
			if (nIndexOfDot <= 0 || nIndexOfDot == nLength) 
			{
				return false;
			}

			// "@"이 두개 이상 존재하는 경우
			if (strValue.indexOf("@", nIndexOfAt + 1) != -1) 
			{
				return false;
			}

			// ".@" 인 경우 또는 "@."인 경우
			if (strValue.substr(nIndexOfAt - 1, 1) == "." || strValue.substr(nIndexOfAt + 1, 1) == ".") 
			{
				return false;
			}

			// "@" 이후에 "."이 존재하지 않는 경우
			if (strValue.indexOf(".", (nIndexOfAt + 2)) == -1) 
			{
				return false;
			}

			// 공백문자가 존재하는 경우
			if (strValue.indexOf(" ") != -1) 
			{
				return false;
			}

			return true;
		},
		
		/**
		* 입력값이 전화번호 format 인지 체크하는 함수
		* @param {string} strValue
		* @return true = 입력값이 전화번호 형태일 경우
		* @example
		* @memberOf Ex.util
		*/
		checkPhone : function (strValue)
		{
			// null 이거나 "-"이 존재하지 않는 경우
			if (Eco.isEmpty(strValue) || (!Eco.isEmpty(strValue) && strValue.indexOf("-") == -1)) 
			{
				return false;
			}
			else if (strValue.indexOf(".") >= 0) 
			{
				return false;
			}
			else 
			{
				// "-" 사이의 값이 숫자가 아닌 경우
				var arrNumbers = strValue.split("-");
				for (var i = 0; i < arrNumbers.length; i++) 
				{
					if (!nexacro.isNumeric(arrNumbers[i])) 
					{
						return false;
					}
				}
			}
			return true;
		},
		

		/**
		* Font Object 생성 반환.
		* @param {object} obj
		* @param {number} iFontSize
		* @param {string} 폰트명
		* @param {string} sType
		* @return {array] 변형문자열
		* @example
		* @memberOf Ex.util
		*/ 
		getObjFont : function (obj,iFontSize, sFontName, sType)
		{
		    var objFont = obj.currentstyle.font;
		    sType = (Eco.isEmpty(sType)) ? "normal" : sType;
		    objFont.set_size(iFontSize);
		    objFont.set_face(sFontName);
		    objFont.set_type(sType);
//		 	var strFont = sFontName + "," + iFontSize;
//		 	if (bBold == true) 
//		 	{
//		 		strFont += ",bold";
//		 	}
		 	return objFont;
		},
		
		/**
		* 인자를 넘겨줄 경우에 넘겨주는 규칙대로 인자/값을 설정
		* @param {string} 설정할 파리미터명
		* @param {string} p_value - 설정할 값
		* @return {string] String
		* @example
		*     paramStr += gfn_SetParam("sql_xml", "gspl_sql_common");
		* @memberOf Ex.util
		*/
		setParam : function (p_name, p_value)
		{			
		   
			//return p_name + "="+this.isReplaceEmpty(p_value)+ "&nbsp;";
		    return p_name + "="+this.isReplaceEmpty(p_value)+ " ";
		},
		
		/**
		* 입력값이 null에 해당되면 val2(대체문자열)로 반환한다.
		* @param {string} val : 체크할 문자열( 예 : null 또는 undefined 또는 "" 또는 "abc" )
		* @return {string}  val값이 null에 해당하는 경우 val2값으로 대체 반환
		* @example
		* @memberOf Ex.util
		*/   
		isNvl : function(val,val2)
		{
		    var rtnVal = (Eco.isEmpty(val)) ? val2 : val;
		    return rtnVal;
		},
		
		/**
		* decode 처리 
		* @param {string} val : 체크할 문자열( 예 : null 또는 undefined 또는 "" 또는 "abc" )
		* @return {string}  val값이 null에 해당하는 경우 val2값으로 대체 반환
		* @example
		* @memberOf Ex.util
		*/ 
	   gDecode : function()
	   {

		   	var varRtnValue = null;

		   	var arrArgument = arguments;
		  
		   	var varValue    = arrArgument[0];
		   	var bIsDefault  = false;
		   	var nCount      = 0;

		   	if ((arrArgument.length % 2) == 0) {
		   		nCount     = arrArgument.length - 1;
		   		bIsDefault = true;
		   	} else {
		   		nCount     = arrArgument.length;
		   		bIsDefault = false;
		   	}

		   	for (var i = 1; i < nCount; i+=2) {
		   		if (varValue == arrArgument[i]) {
		   			varRtnValue = arrArgument[i+1];
		   			i = nCount;
		   		}
		   	}

		   	if (varRtnValue == null && bIsDefault) {
		   		varRtnValue = arrArgument[arrArgument.length-1];
		   	}

		   	return varRtnValue;
		   
	   },
	   
	 
		/**
		* 현재 플랫폼의 OS종류를 구한다.
		* @return {string}  반환os
		* @example
		* @memberOf Ex.util
		*/ 
	   getOS : function()
	   {
	   	var osVersion = system.osversion;
	   	
	   	//trace("osVersion[" + osVersion + "]")

	   	if ( Eco.isEmpty(osVersion) )
	   		return "ETC";
	   	
	   	osVersion = osVersion.toUpperCase();
	   		
	   	if ( osVersion.indexOf("ANDROID") >= 0 )	// android 
	   	{
	   		return "ANDROID";
	   	}
	   	else if ( osVersion.indexOf("IOS") >= 0 )
	   	{
	   		return "IOS";
	   	}
	   	else if ( osVersion.indexOf("WINDOWS") >= 0 )
	   	{
	   		return "WINDOWS";
	   	}
	   	else
	   	{
	   		return "ETC";
	   	}
	   }
	   
	   

	});
//	console.log("end nexacroLoad="+new Date());
}