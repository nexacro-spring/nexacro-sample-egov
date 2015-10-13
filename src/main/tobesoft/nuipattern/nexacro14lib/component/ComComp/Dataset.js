//==============================================================================
//
//  TOBESOFT Co., Ltd.
//  Copyright 2014 TOBESOFT Co., Ltd.
//  All Rights Reserved.
//
//  NOTICE: TOBESOFT permits you to use, modify, and distribute this file 
//          in accordance with the terms of the license agreement accompanying it.
//
//  Readme URL: http://www.nexacro.co.kr/legal/nexacro-public-license-readme-1.0.html	
//
//==============================================================================

if (!nexacro.NormalDataset) 
{
	//==============================================================================
	// nexacro.NormalDataset	
	//==============================================================================
	nexacro.NormalDataset = function (id, parent) 
	{
		nexacro.Dataset.call(this, id, parent);
		
	    this.url = "";
	    this.arguments = "";    	
        this.serverdatasetid = "";
	    this.firefirstcount = 0;
	    this.firenextcount = 0;
	    this.preload = false;

        // ----------------- internal variable ------------------ // 
	    this._is_preloaded = false;
	};
	
	var _pNormalDataset = nexacro._createPrototype(nexacro.Dataset, nexacro.NormalDataset);
	nexacro.NormalDataset.prototype = _pNormalDataset;	

    // Dataset Event Reasons
	nexacro.NormalDataset.ROWTYPE_EMPTY = 0; //존재하지 않는 Row 상태
	nexacro.NormalDataset.ROWTYPE_NORMAL = 1; //초기 Row 상태
	nexacro.NormalDataset.ROWTYPE_INSERT = 2; //추가된 Row 상태
	nexacro.NormalDataset.ROWTYPE_UPDATE = 4; //수정된 Row 상태
	nexacro.NormalDataset.ROWTYPE_DELETE = 8; //삭제된 Row 상태
	nexacro.NormalDataset.ROWTYPE_GROUP = 16; //Group 정보 Row 상태

	nexacro.NormalDataset.REASON_LOAD = 0; //Dataset의 Load가 완료되었을 때
	nexacro.NormalDataset.REASON_LOADPROCESS = 1; //Dataset을 Loading 중일 때 
	nexacro.NormalDataset.REASON_RESET = 2; //Dataset의 변경사항을 무시하고 이전상태로 Reset되었을 때
	nexacro.NormalDataset.REASON_LOADCONTENT = 3; //ADL 또는 FDL에 정의된 Dataset의 Load가 완료되었을 때. Form의 onload() 이벤트보다 먼저 발생합니다.

	nexacro.NormalDataset.REASON_ASSIGN = 10; //Dataset이 Assign 되었을 때
	nexacro.NormalDataset.REASON_COPY = 11; //Dataset이 복사되었을 때
	nexacro.NormalDataset.REASON_APPEND = 12; //Dataset이 추가되었을 때
	nexacro.NormalDataset.REASON_MERGE = 13; //Dataset이 통합되었을 때
	nexacro.NormalDataset.REASON_DELETE = 20; //Dataset의 Row가 삭제되었을 때
	nexacro.NormalDataset.REASON_DELETEALL = 22; //Dataset의 모든 Row가 삭제되었을 때
	nexacro.NormalDataset.REASON_CLEARDATA = 23; //Dataset의 모든 Row가 완전 삭제되었을 때
	nexacro.NormalDataset.REASON_CLEAR = 24; //Dataset의 모든 Column 및 Row가 완전히 삭제되었을 때
	nexacro.NormalDataset.REASON_SORTGROUP = 30; //Dataset의 데이터가 정렬 또는 그룹화 되었을 때
	nexacro.NormalDataset.REASON_FILTER = 31; //Dataset의 데이터가 Filter 되었을 때
	nexacro.NormalDataset.REASON_MOVE = 32; //Dataset의 Row가 다른 위치로 이동되었을 때
	nexacro.NormalDataset.REASON_EXCHANGE = 33; //Dataset의 두 Row가 서로 위치가 바뀌었을 때
	nexacro.NormalDataset.REASON_CHANGELAYOUT = 34; //Dataset의 Column 정보가 변경되었을 때
	nexacro.NormalDataset.REASON_CHANGESTATUS = 40; //Dataset의 Row 상태(Type, Select)이 변경되었을 때
	nexacro.NormalDataset.REASON_ENABLEEVENT = 41; //Dataset의 enableevent 속성이 'true'가 되었을 때

	nexacro.NormalDataset.REASON_ROWCHANGE = 51; //Dataset의 row object, index가 함께 변경된 경우
	nexacro.NormalDataset.REASON_ROWINDEXCHANGE = 52; //Dataset의 row object는 변경없고, index만 변경된 경우
	nexacro.NormalDataset.REASON_ROWOBJECTCHANGE = 53; //Dataset의 row object가 변경되고, index는 변경없는 경우;

	nexacro.NormalDataset.REASON_BINDSOURCE = 90; //Dataset을 Bind 했을 때 

    _pNormalDataset.on_created = function () 
    {
    	if (this.url == "" || this.preload == false)
    	{
    		if (this.colcount > 0) 
    		{
    			this._endLoad(0, "SUCCESS", 3);	// 3 == REASON_LOADCONTENT
    		}
    	}
    	
    	//preload
    	if (!nexacro.isDesignMode && this.preload && !this._is_preloaded)
		{
			if (this.url && this.parent)
			{
			    var bLoaded = false;

			    var keys = [];
			    keys.push("__preload");
			    keys.push(this.url);
			    keys.push(this.id);
			    keys.push(this.serverdatasetid);
			    var svcid = keys.join('_');

			    var url = application._getServiceLocation(this.url);
			    
			    var loadmanager = this.parent._load_manager;
			    if (loadmanager)
			    {
			        var data = loadmanager.getPreloadDataModule(this.id);
			        if (data)
			        {
			            var outds = this.id + "=" + this.serverdatasetid;
			            var tritem = new nexacro.TransactionItem(url, this.parent, svcid, "", outds, "", 0, true);
			            tritem._usewaitcursor = false;
			            tritem._loadFromData(data);
			            this._is_preloaded = true;
			        }
			    }
			}
    	}

    	this._defaultKeyStr = this.keystring;
    	this._defaultFilterStr = this.filterstr;

    };
    	
    _pNormalDataset.destroy = function ()
    {
        nexacro.Dataset.prototype.destroy.call(this);
        this._refform = null;
    };

	_pNormalDataset.set_url = function (v) 
	{
		this.url = v;
	};
	_pNormalDataset.set_arguments = function (v) 
	{
		this.arguments = v;
	}

	_pNormalDataset.set_firefirstcount = function (v) 
	{
		v = parseInt(v) | 0;
		if (isFinite(v))    
            this.firefirstcount = v;
	}
	_pNormalDataset.set_firenextcount = function (v) 
	{
		v = parseInt(v) | 0;
		if (isFinite(v))    
            this.firenextcount = v;
	}
	_pNormalDataset.set_preload = function (v) 
	{
		this.preload = v;
	};
	_pNormalDataset.set_serverdatasetid = function (v) 
	{
		this.serverdatasetid = v;
	};

	_pNormalDataset.load = function (async, datatype) 
	{
	    var baseurl;
	    if (this._refform)
	    {
	        baseurl = this._refform._getRefFormBaseUrl();
	    }
	    var url = application._getServiceLocation(this.url, baseurl);
	    
	    if (url.length && this.parent)
		{
			var svcid = "__normaldataset_loadurl_" + this.id;
			var loadmanager = this.parent._load_manager;
			if (loadmanager)
			{
			    var serverdatasetid = this.serverdatasetid;			    
			    if (serverdatasetid == null || serverdatasetid.length == 0)
			    {
			        serverdatasetid = "output";
			    }			    
			    var outds = this.id + "=" + serverdatasetid;
			    var service = application._getServiceObject(this.url, true);
			    loadmanager.loadDataModule(url, svcid, "", outds, this.arguments, null, async, datatype, false, service);
			}
		}
		else
		{
		    this._endLoad(-1, "empty url", 3);	// 3 == REASON_LOADCONTENT
		}
	};

	_pNormalDataset.on_preload_data = function (url, errstatus, data, fireerrorcode, returncode, requesturi, locationuri)
	{
	    if (errstatus != 0)
	    {
	        application._onHttpSystemError(this, true, this, fireerrorcode, url, returncode, requesturi, locationuri);
	    }
	    else if (data && !this._is_preloaded)
	    {
	        var keys = [];
	        keys.push("__preload");
	        keys.push(this.url);
	        keys.push(this.id);
	        keys.push(this.serverdatasetid);
	        var svcid = keys.join('_');

	        var outds = this.id + "=" + this.serverdatasetid;
	        var tritem = new nexacro.TransactionItem(this.url, this.parent, svcid, "", outds, "", 0, true);
	        tritem._usewaitcursor = false;
	        tritem._loadFromData(data);
	        this._is_preloaded = true;
	    }
	};

    delete _pNormalDataset;
}
