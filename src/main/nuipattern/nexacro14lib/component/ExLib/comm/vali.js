/**
 * @fileoverview 프로젝트 validation 공통함수 
 */

if ( !JsNamespace.exist("Ex.vali")  )
{
	/**
	 * @namespace
	 * @name Ex.vali
	 * @author
	 * @memberof! Ex.vali
	 */
	JsNamespace.declare("Ex.vali",{

		/**
		 * this formFile object 선언 변수
		 * @private
		 * @type 		 
		 * @memberOf Ex.vali
		 */ 
		ffobj : this,
				
		/**
		 * div 창에서 뿌릴 폰트 크기 (이값으로 창크기 결정)
		 * @private
		 * @type 
		 * @example 
		 * @memberOf Ex.vali
		*/		 
		DIV_FONT_SIZE : 10,

		/**
		 * div 창에서 뿌릴 폰트 높이 (이값으로 창크기 결정)
		 * @private
		 * @type 
		 * @example 
		 * @memberOf Ex.vali
		*/
		DIV_FONT_HEIGHT : 15,
		 
		/**
		 * 화면구성 컴포넌트 배열
		 * @private
		 * @type 
		 * @example 
		 * @memberOf Ex.vali
		*/
		jo_ArrComp : [], //화면구성 컴포넌트 배열

		/**
		 * 대상 컴포넌트 갯수
		 * @private
		 * @type 
		 * @example 
		 * @memberOf Ex.vali
		*/
		jv_CompCnt : 0,
		 
		/**
		 * 화면구성 컴포넌트의 Taborder 배열
		 * @private
		 * @type 
		 * @example 
		 * @memberOf Ex.vali
		*/
		jo_ArrTaborder : [], 

		/**
		 * 컴포넌트 Parent 의 jo_ArrComp Idx
		 * @private
		 * @type 
		 * @example 
		 * @memberOf Ex.vali
		*/
		jv_ArrPIdx : [],

		/**
		 * 컴포넌트 Parent 의 param
		 * @private
		 * @type 
		 * @example 
		 * @memberOf Ex.vali
		*/
		jv_ArrParentNm : [],
		

		 /**
		 * 객체 초기 onload 생성
		 * @example 
		 * @memberOf Ex.vali
		*/
		 init : function(formObj)
		 {
			this.ffobj = formObj; 
		 },
			
		 /**
		 * this 폼관련 valdiaion 함수 호출 공통 함수
		 * @param {object} form,div,tab
		 * @return boolen   true:OK
		 * @example
		 * var compObj = ExtVali.checkRequiredObject(this); //output: 
		 *
		 * @memberOf Ex.vali
		 */
		isValidComp : function (oBaseObj)
		{

			return this.findValidObject(oBaseObj);
		},
		
		/**
		 * validaition 메인 호출 공통 함수
		 * @param {object} 폼 컴퍼넌트
		 * @return {boolen} true false
		 * @example	
		 * @memberOf Ex.vali
		 */
		findValidObject : function (oForm)
		{
		  
		   
			var is_check = true;
			var strForm = "";
            var oComp =[];
			
			   //validation 할 컴퍼넌트 가져오는 함수
			    oComp = Eco.XComp.query(oForm,"prop[_check] != '' && prop[_msg] != '' && isVisual==true && isEnable==true && typeOf != 'Static'");
			  
			    
			    for(var p=0;p<oComp.length;p++)
			    {
			       if(this.isValidComponentValue(oComp[p],true) == false) 
 					{
						oComp[p].setFocus();						
						is_check = false;
						return false;
 					}
			    }
 			
 			
			return is_check;
		},
		
		/**
		 * 컴퍼넌트 검색 validation 수행
		 * @param {xpComp} xplatoform componenet
		 * @param {boolen}is_check : _check 옵션 여부
		 * @param {object} form
		 * @return {boolen} true : check가 성공적(true)으로 끝나면 문제가 없다고 가정함 / check가 실패(false)하면 검증이 실패했다고 봄
		 * @example	
		 * @memberOf Ex.vali
		 */
		isValidComponentValue : function (component,isOption)
		{

			var id = component.name;
			

			var type = component;
			var style_class = Ex.util.isReplaceEmpty(component.cssclass);
			var strCheck = Ex.util.isReplaceEmpty(component._check);   // 필수입력 property			
			var readonly = Ex.util.isReplaceEmpty(component.readonly);
			var strOption = Eco.isEmpty(isOption) ?  false : true;
			
			if (readonly == "true" || readonly == true) 
			{
				return true;
			}
				
			
			if (Eco.XComp.typeOf(type) =="Edit"
				|| Eco.XComp.typeOf(type) == "MaskEdit"
				 || Eco.XComp.typeOf(type) == "TextArea"
				 || Eco.XComp.typeOf(type) == "Combo"
				 || Eco.XComp.typeOf(type) == "CheckBox"
				 || Eco.XComp.typeOf(type) == "Radio"
				 || Eco.XComp.typeOf(type) == "Calendar")
			{			
			

					if(component.hasOwnProperty("_check") && !Eco.isUndefined(component._check)) 
					{
						var res = this.isValidComFunc(component,strOption);
						if(strOption == false && res == false)
						{
							component.setFocus();
						}
						
							return res;
							
						
					}
			}

			// 그리드에서는 row 단위로 값이 있는지 여부를 판별해서 메세지를 한번에 띄운다.
			// 검색조건 검사시에는 그리드가 대상이 아니다.
			if (component.hasOwnProperty("_check") && Eco.XComp.typeOf(type) == "Grid"  && !Eco.isUndefined(component._check)) 
			{
					
				return this.isValidGridValue(component);
			}


			return true;
		},

		/**
		 * 해당 컴포넌트의 값이 유효한지 여부를 검증한다.
		 * @param {xpComp} xplatoform componenet
		 * @return {boolen}boolean 유효성검사를 통과하면 true / 실패하면 false
		 * @example	
		 * @memberOf Ex.vali
		 */
		isValidComFunc : function (component,strOption)
		{
			
			var id = component.name;
			var type = component;
			var value = String(Ex.util.isReplaceEmpty(component.value)).trim();
			var strCheck = String(Ex.util.isReplaceEmpty(component._check)).toUpperCase().trim();
			var strMsg =  String(Ex.util.isReplaceEmpty(component._msg)).toUpperCase().trim();
        
           
			// 1.strCheck 조건을 체크하자.
			var isNumCheck = false;
			var iMin = -1;
			var iMax = -1;
			var iMinLength = -1;
			var iMaxLength = -1;
			var isZeroCheck = false;
			var bEmpty = false;
			var arr = strCheck.split("|");

           if(Eco.isEmpty(strOption)) Eco.Logger.error({message:"isValidComFunc 현재 함수는 직접 실행하실수 없습니다.",elapsed:true,stack:true});

			for (var i = 0; i < arr.length; i++) 
			{
				var aReq = String(arr[i]).split(":");
				var sCheckGubun = aReq[0];
              
				if (sCheckGubun == "MIN") 
				{
					iMin = nexacro.toNumber(aReq[1]);
				}
				if (sCheckGubun == "MAX") 
				{
				  
					iMax = nexacro.toNumber(aReq[1]);
				}
				
				if (Eco.string.startsWith(sCheckGubun,"MIN_LENGTH")) 
				{
					
					sCheckGubun = Ex.vali.getLengthType(component,sCheckGubun);
					if(Eco.isEmpty(sCheckGubun))
				    {
				       return;
				    }
					iMinLength = nexacro.toNumber(aReq[1]);
					
				}
				if (Eco.string.startsWith(sCheckGubun,"MAX_LENGTH")) 
				{
					
					sCheckGubun = Ex.vali.getLengthType(component,sCheckGubun);
					
					if(Eco.isEmpty(sCheckGubun))
				    {
				       return;
				    }
				    
					iMaxLength = nexacro.toNumber(aReq[1]);
				}
				if (sCheckGubun == "NUM") 
				{
					isNumCheck = true;
				}
				if (sCheckGubun == "ZERO") 
				{
					isZeroCheck = true;
				}
				
				if (sCheckGubun == "NULL") 
				{
					bEmpty = true;
				}
			}
            //null체크
            if(bEmpty == true && Eco.isEmpty(value))
            {
            	Ex.core.comMsg("alert","@항목에 값을 넣어주세요","vali","메세지",value);
				return false;
                           
            }
         
			// 3. 최소길이 체크
			if (iMinLength > 0 && Eco.string.getLength(value,sCheckGubun) < iMinLength) 
			{
				Ex.core.comMsg("alert","항목은 @글자이상 입력하셔야 합니다","vali","메세지",[strMsg, iMinLength]);
				return false;
			}
	
			// 4. 최대길이 체크
			if (iMaxLength > 0 && Eco.string.getLength(value,sCheckGubun) > iMaxLength) 
			{

				Ex.core.comMsg("alert","@ 항목은 @글자 이하 입력하셔야 합니다.","vali","메세지",[strMsg, iMaxLength]);
				return false;
			}

			// 5. 숫자값인지 여부
			if (isNumCheck && !Eco.isNumber(value)) 
			{
				Ex.core.comMsg("alert","{0}항목은 숫자형이 아닙니다.","메세지",[strMsg]);
				return false;
			}

			// 6. 최소값 체크
			if (iMin > 0 && iMin > parseInt(value, 10) || Eco.isEmpty(value)) 
			{
				Ex.core.comMsg("alert","@ 항목은 @글자 이상 입력하셔야 합니다.","vali","메세지",[strMsg, iMin]);
				return false;
			}
			
			// 7. 최대값 체크
			if (iMax > 0 && iMax < parseInt(value, 10) || Eco.isEmpty(value)) 
			{
				Ex.core.comMsg("alert","@ 항목은 @글자 이하 입력하셔야 합니다.","vali","메세지",[strMsg, iMax]);
				return false;
			}

			// 8. 숫자값일때 '0'
			if (isZeroCheck && (parseInt(value, 10) == 0) || Eco.isEmpty(value)) 
			{

				Ex.core.comMsg("alert","@ 아닙니다. @ 확인하세요","valiValue_zeroCheck","메세지",[strMsg]);
				return false;
			}

			return true;
		},
	
	    /**
		 * validation _check _msg 필수 프로퍼티 체크
		 * @param {nxComp}  nexacro component
		 * @return {boolen}boolean 유효성검사를 통과하면 true / 실패하면 false
		 * @example	
		 * @memberOf Ex.vali
		 */
	   isValiProperty : function(nxComp)
	   {
	      if(!nxComp.hasOwnProperty("_check") && nxComp.hasOwnProperty("_msg"))
	      {
	        nxComp.setFocus();
	        Eco.Logger.error({message:"unknwon prperty is _check or _msg",stack:true,elapsed:true});
	         return false;
	      }
	      
	      if(Eco.isEmpty(nxComp._check) || Eco.isEmpty(nxComp._msg))
	      {
	         Eco.Logger.error({message:"property  is Null :  _check or _msg",stack:true,elapsed:true});
	         nxComp.setFocus();
	         return false;
	      }
	      return true;
	   },
	    
	      /**
		 * validation length 문자열의 단위 return
		 * @param {nxComp}  nexacro component
		 * @param {str}  length type
		 * @return {string} "utf16" - 한문자당 1의 값으로 합산함(default).
				            "utf8"  - 한 문자당 영문1, 다국어 2~5의 값으로 합산함.
				            "ascii" - 한문자당 영문 1, 한글 2의 값으로 합산함.
		 * @example	
		 * @memberOf Ex.vali
		 */
	    getLengthType : function(oComp,str)
	    {
	        var res = "";
	     
	        if(Eco.string.endsWith(str,"UTF8"))
			{
			  res = "utf8";
			  
			}
			else if(Eco.string.endsWith(str,"UTF16"))
			{
			  res = "utf16";
			}
			else if(Eco.string.endsWith(str,"ASCII"))
			{
			  res = "ascii";
			}
			else
			{
			   Eco.Logger.error({message:"UnKnown _check lengthtype...._check'"+oComp._check+"'",elapsed: true,stack:true});
			   res ="";
			
			}
			
			return res;
	    },
	    
		 /**
		 * 그리드의 유효성 검사를 체크한다
		 * @param {xpComp} 그리드 컴퍼넌트
		 * @param {obj} isForm : 폼
		 * @return 
		 * @example	
		 * @memberOf Ex.vali
		 */
		isValidGridValue : function (component)
		{
	
			// 메세지 결정
			var pThis = this.ffobj;
			var sMessage = "";
			var binds,
				i, len, 
				compPathName,
				bindDatasetid,
				columnid,
				bindDataset,
				currow,
				topForm = this._topform || this;
			  
			if (Eco.isEmpty(component.binddataset) || Eco.isEmpty(component._check)) 
			{
				return true;
			}
		
			//var ds = (Eco.isEmpty(isForm) ? pThis.all["this." + component.binddataset] : eval(isForm + "." + component.binddataset));
			//var ds =  pThis.all[component.binddataset]
			var ds = Eco.XComp.lookup(this.ffobj,component.binddataset);
			var sRequired = component._check;


			for (var iRow = 0; iRow < ds.rowcount; iRow++) 
			{
				var iRowType = ds.getRowType(iRow);
				if (iRowType == 8) 
				{
					continue;
				}
				// 삭제는 validation 을 하지 말자.


				var aRequired = String(sRequired).split("^");
				for (var j = 0; j < aRequired.length; j++) 
				{
					var strCheck = aRequired[j];


					// 1.strCheck 조건을 체크하자.
					var isNumCheck = false;
					var iMin = -1;
					var iMax = -1;
					var iMinLength = -1;
					var iMaxLength = -1;
					var isZeroCheck = false;
					var arr = String(strCheck).split("|");
					var sColNm = arr[0];

					for (var i = 1; i < arr.length; i++) 
					{
						var aReq = String(arr[i]).split(":");
						var sCheckGubun = aReq[0];

						if (sCheckGubun == "MIN") 
						{
							iMin = nexacro.toNumber(aReq[1]);
						}
						if (sCheckGubun == "MAX") 
						{
							iMax = nexacro.toNumber(aReq[1]);
						}
						if (Eco.string.startsWith(sCheckGubun,"MIN_LENGTH")) 
						{
							
							sCheckGubun = Ex.vali.getLengthType(component,sCheckGubun);
						
							if(Eco.isEmpty(sCheckGubun))
							{
							   return;
							}
							
							iMinLength = nexacro.toNumber(aReq[1]);
						}
						if (Eco.string.startsWith(sCheckGubun,"MAX_LENGTH")) 
						{
					
						    sCheckGubun = Ex.vali.getLengthType(component,sCheckGubun);
						
							if(Eco.isEmpty(sCheckGubun))
							{
							   return;
							}
							
							iMaxLength = nexacro.toNumber(aReq[1]);
						}
						if (sCheckGubun == "NUM") 
						{
							isNumCheck = true;
						}
						if (sCheckGubun == "ZERO") 
						{
							isZeroCheck = true;
						}
					}

					var iCellIdx = component.getBindCellIndex("body", sColNm);
					var iColSize = component.getFormatColSize(iCellIdx);

					if (iColSize < 1) 
					{
						continue;
					}
					// colSize==0  validaion pass 2013/07/26
					var sEditType = component.getCellProperty("Body", iCellIdx, "edittype");
					if (Eco.isEmpty(sEditType) || sEditType == "none" || sEditType == "readonly") 
					{
						continue;
					}
					// editmode 인 녀석만 뿌리게 해둬야됨

					var value = String(Ex.util.isReplaceEmpty(ds.getColumn(iRow, sColNm))).trim();
					var text = component.getCellText(-1,iCellIdx).replace(String.fromCharCode(13), '').replace(String.fromCharCode(10), '');

					// 2.필수값 체크
					if (Eco.isEmpty(value)) 
					{
						Ex.core.comMsg("alert","@ 행의 @ 은(는) 필수 입력 입니다.","vali","메세지",[(iRow + 1), "(" + text + ")"]);
						Ex.vali.grd_ShwEditor(component, ds, iCellIdx, iRow);
						return false;
					}

					// 3. 최소길이 체크
					else if (iMinLength > 0 && Eco.string.getLength(value,sCheckGubun) < iMinLength) 
					{
						Ex.core.comMsg("alert","@ 행의 @ 은(는) 필수 입력 입니다","vali","메세지",[iRow + 1, "(" + text + ")", iMinLength]);
						Ex.vali.grd_ShwEditor(component, ds, iCellIdx, iRow);
						return false;
					}

					// 4. 최대길이 체크
					else if (iMaxLength > 0 && Eco.string.getLength(value,sCheckGubun) > iMaxLength) 
					{
						Ex.core.comMsg("alert","@ 항목은 @글자 이하 입력하셔야 합니다.","vali","메세지",[10,"(" + text + ")", iMaxLength]);
						Ex.vali.grd_ShwEditor(component, ds, iCellIdx, iRow);
						return false;
					}

					// 5. 숫자값인지 여부
					else if (isNumCheck && !Eco.isNumber(value)) 
					{
						Ex.core.comMsg("alert","@ 번째 줄의 @ 숫자형이 아닙니다.","vali","메세지",[(iRow + 1) ,"(" + text + ")"]);
						Ex.vali.grd_ShwEditor(component, ds, iCellIdx, iRow);
						return false;
					}

					// 6. 최소값 체크
					if (iMin > 0 && iMin > parseInt(value, 10)) 
					{
						Ex.core.comMsg("alert","@ 항목은 @글자 이상 입력하셔야 합니다.","vali","메세지",[(iRow + 1) , "(" + text + ")",iMin]);
						Ex.vali.grd_ShwEditor(component, ds, iCellIdx, iRow);
						return false;
					}

					// 7. 최대값 체크
					if (iMax > 0 && iMax < parseInt(value, 10)) 
					{
						Ex.core.comMsg("alert","@ 항목은 @글자 이하 입력하셔야 합니다.","vali","default",[(iRow + 1) , "(" + text + ")",iMax]);
						Ex.vali.grd_ShwEditor(component, ds, iCellIdx, iRow);
						return false;
					}

					// 8. 숫자값일때 '0'
					if (isZeroCheck && (parseInt(value, 10) == 0)) 
					{
						Ex.core.comMsg("alert","@ 아닙니다. @ 확인하세요","vali","default", [(iRow + 1), "(" + text + ")"]);
						Ex.vali.grd_ShwEditor(component, ds, iCellIdx, iRow);
						return false;
					}
				}
			}
			return true;
		},
		
		
		 /**
		 * validation 그리드 해당 cell position focus
		 * @param {xpComp} 그리드 컴퍼넌트
		 * @param {obj} dataset
		 * @param {number} iCellIdx
		 * @param {number} row index
		 * @return 
		 * @example	
		 * @memberOf Ex.vali
		 */
		grd_ShwEditor : function (component,ds,iCellIdx,iRow)
		{
			ds.set_rowposition(iRow);
			component.setCellPos(iCellIdx);
			component.showEditor(true);
		}
		
	});
}