//==============================================================================//
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

//==================================================================
//Only iOS
//==================================================================
if (nexacro.OS == "iOS" && (window.location.protocol == "file:" && window.location.pathname.split('/').pop() == "Run.html"))
{

nexacro.DeviceI.prototype.setup = function ()
{   
	this._userCreatedObj = {};
    this.curDevice = 0;
    this.isphone = 0;
    this._is_hybrid = true;
	this._protocolparameters = {};
	
    var userAgent = navigator.userAgent.toString();

    if (nexacro.OS == "iOS")
    {
        this.curDevice = 1;
    }
    if (this.curDevice == 1) 
    {
        // for iphone only
        if (!this.bridge && this.isHybrid())
        {
            this.bridge = document.createElement("IFRAME");
            this.bridge.setAttribute("height","0px");
            this.bridge.setAttribute("width","0px");
            this.bridge.setAttribute("frameborder","0");
            document.documentElement.appendChild(this.bridge);
            this.msgqueue = new Array(); 
            this.msgqueue.length = 0;
            setInterval("nexacro.Device.execiOS()", 20);
        }        		     		
    }   
};

nexacro.DeviceI.prototype.execiOS = function (method)
{
    if(this.msgqueue.length > 0 && this.curDevice == 1) 
    { 
        this.msgqueue.reverse();
        //iOS8 대응으로 "?" 추가 삽입.
        this.bridge.src = "nexacro://?" + encodeURI(this.msgqueue.pop());
        this.msgqueue.reverse();
    }
};

nexacro.DeviceI.prototype.exec = function (method)
{
    if (this.isHybrid() == false)
        return;

    this.msgqueue.push(method);	// msgqueue의 마지막에 명령 추가...
};

// Alias convert를 위한 method for V13(only iOS) 
nexacro._convertRealPath = function (strAlias)
{
    if (nexacro.Device.isHybrid() == undefined || !nexacro.Device.isHybrid())
        return strAlias;

    if (strAlias === undefined || strAlias === null)
    {
       return "";
    }
    //strAlias : %USERAPP%pics/1349934624256.JPEG 
    //this.userapp : /data/data/com.tobesoft.nexacro.loader/files/NEXACRO/
    var rootPathCheck = strAlias.substring(0,9);
    var iosFilePath = "";
    if (rootPathCheck.toLowerCase()=="%userapp%")
    {
        iosFilePath = strAlias.substring(9,strAlias.length);
        return nexacro.System.userapppath + iosFilePath;
    }
    else 
    {
        return strAlias;
    }		
};   

nexacro._closeWindowHandle = function (_win_handle)
{
    if (nexacro._getMainWindowHandle() == _win_handle)
    {
        nexacro._destroyManagerFrame(_win_handle);
        nexacro.Device.exit();
        _win_handle.open('', '_self');
    }
    // TODO check linked_window를 null로 세팅하고 close하면 닫을지 물어보는 Confirm창이 나온다.
    //            (Chrome + onbeforeunload 이벤트에서 close하는 경우 해당) 원인은 모르겠음. --;
    //_win_handle._linked_window = null; // TOBEWindow
    _win_handle.close();
};

nexacro._isHybrid = function()
{
	return nexacro.Device.isHybrid();
};

	
nexacro._convertDatasetSSVToBIN = function (ssvdata)
{
	return ssvdata;
};
nexacro._convertDatasetBINToSSV = function (bindata)
{
	return bindata;
};

nexacro._convertStreamSSVToBIN = function (ssvdata)
{
	return ssvdata;
};
nexacro._convertStreamBINToSSV = function (bindata)
{
	return bindata;
};

nexacro._setProtocolVar = function (name, key, val)
{
   var protocol = nexacro.Device._protocolparameters[name];
  
   if (protocol == undefined) {
	   nexacro.Device._protocolparameters[name] = {};
	   protocol = nexacro.Device._protocolparameters[name];
   }

   protocol[key] = val;

   return true;
};

nexacro._execBrowser = function(strUrl)
{
    this._id = nexacro.Device.makeID();
	
	if (strUrl == null || strUrl == undefined)
	{
		return false;
	}
	
	var params = '{"url":"'+strUrl+'"}';
	var jsonstr = '{"id":'+this._id+', "div":"Browser", "method":"execBrowser", "params":'+params+'}';

	nexacro.Device.exec(jsonstr);
	
	return true;	
};	

nexacro._initDeviceAPI();

}