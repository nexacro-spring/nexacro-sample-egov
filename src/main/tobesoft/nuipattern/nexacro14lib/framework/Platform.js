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

//==============================================================================
// nexacro Platform Objects
//==============================================================================

if (!nexacro._bInitPlatform)
{
    nexacro._bInitPlatform = true;

    nexacro.isDesignMode = false;
    nexacro.isPluginMode = nexacro._isPluginMode();
    //==============================================================================
    // nexacro_SysEvent
    // Basic System Event Utils
    //==============================================================================
    nexacro._initializeGlobalObjects = function (_jsContext)
    {
        //==============================================================================
        // _emptyFn
        _jsContext.emptyFn = nexacro._emptyFn;

        // global API's for script
        // isNumber, isString, isUndefined, isArray, isFunction, isObject

        // Basic Util Functions
        _jsContext.isNumber = nexacro._isNumber;
        _jsContext.isString = nexacro._isString;
        _jsContext.isUndefined = nexacro._isUndefined;
        _jsContext.isObject = nexacro._isObject;
        _jsContext.isArray = nexacro._isArray;
        _jsContext.isFunction = nexacro._isFunction;


        //==============================================================================
        // nexacro Object Register for HTML Documents
        //==============================================================================
        _jsContext.MainFrame = nexacro.MainFrame;
        _jsContext.ChildFrame = nexacro.ChildFrame;
        _jsContext.FrameSet = nexacro.FrameSet;
        _jsContext.VFrameSet = nexacro.VFrameSet;
        _jsContext.HFrameSet = nexacro.HFrameSet;
        _jsContext.TileFrameSet = nexacro.TileFrameSet;
        _jsContext.Form = nexacro.Form;
        _jsContext.Layout = nexacro.Layout;
        _jsContext.BindItem = nexacro.BindItem;
        _jsContext.ActiveX = nexacro.ActiveX;
        _jsContext.AppletComp = nexacro.AppletComp;
        _jsContext.FlashPlayer = nexacro.FlashPlayer;
        _jsContext.BindItem = nexacro.BindItem;
        _jsContext.Button = nexacro.Button;
        _jsContext.Calendar = nexacro.Calendar;
        _jsContext.Combo = nexacro.Combo;
        _jsContext.CheckBox = nexacro.CheckBox;
        _jsContext.Div = nexacro.Div;
        _jsContext.Dataset = nexacro.NormalDataset;
        _jsContext.Edit = nexacro.Edit;
        _jsContext.FileDownload = nexacro.FileDownload;
        _jsContext.FileUpload = nexacro.FileUpload;
        _jsContext.Grid = nexacro.Grid;
        _jsContext.GroupBox = nexacro.GroupBox;
        _jsContext.ImageViewer = nexacro.ImageViewer;
        _jsContext.ExcelImportObject = nexacro.ExcelImportObject;
        _jsContext.ListBox = nexacro.ListBox;
        _jsContext.MaskEdit = nexacro.MaskEdit;
        _jsContext.TextArea = nexacro.TextArea;
        _jsContext.Radio = nexacro.Radio;
        _jsContext.Spin = nexacro.Spin;
        _jsContext.Static = nexacro.Static;
        _jsContext.Chart = nexacro.Chart;
        _jsContext.ExcelExportObject = nexacro.ExcelExportObject;
        _jsContext.ExportItem = nexacro.ExportItem;
        _jsContext.ExportProgress = nexacro.ExportProgress;
        _jsContext.Menu = nexacro.Menu;
        _jsContext.PopupMenu = nexacro.PopupMenu;
        _jsContext.Tab = nexacro.Tab;
        _jsContext.Tabpage = nexacro.Tabpage;
        _jsContext.TabComponent = nexacro.TabComponent;
        _jsContext.ProgressBar = nexacro.ProgressBar;
        _jsContext.PopupDiv = nexacro.PopupDiv;
        _jsContext.WebBrowser = nexacro.WebBrowser;
        _jsContext.Sms = nexacro.Sms;
        _jsContext.AudioPlayer = nexacro.AudioPlayer;
        _jsContext.GeoLocation = nexacro.GeoLocation;
        _jsContext.Acceleration = nexacro.Acceleration;
        _jsContext.Vibrator = nexacro.Vibrator;
        _jsContext.Network = nexacro.Network;
        _jsContext.Camera = nexacro.Camera;
        _jsContext.Contact = nexacro.Contact;
        _jsContext.ContactSet = nexacro.ContactSet;
        _jsContext.ContactField = nexacro.ContactField;
        _jsContext.ContactPhoto = nexacro.ContactPhoto;
        _jsContext.ContactAddress = nexacro.ContactAddress;
        _jsContext.ContactOrganization = nexacro.ContactOrganization;
        _jsContext.ContactIM = nexacro.ContactIM;
        _jsContext.Camera = nexacro.Camera;
        _jsContext.ImagePicker = nexacro.ImagePicker;
        _jsContext.FileDialog = nexacro.FileDialog;
        _jsContext.VirtualFile = nexacro.VirtualFile;
        _jsContext.SQLConnection = nexacro.SQLConnection;
        _jsContext.SQLStatement = nexacro.SQLStatement;
        _jsContext.AudioRecord = nexacro.AudioRecord;
        _jsContext.DomParser = nexacro.DomParser;

        _jsContext.ColumnInfo = nexacro.DSColumnInfo;
        _jsContext.Plugin = nexacro.Plugin;
        //_jsContext.GridClickEventInfo = nexacro.Event.GridClick;
        //_jsContext.TextChangedEventInfo = nexacro.TextChangedEventInfo;
        _jsContext.Tray = nexacro.Tray;
        _jsContext.TrayPopupMenu = nexacro.TrayPopupMenu;

        _jsContext.DragDataFormats = nexacro.DragDataFormats;
        _jsContext.DragDataObject = nexacro.DragDataObject;
    };

    // IE6,7 에서 window urlchange 시 leak.
    nexacro._finalizeGlobalObjects = function (_jsContext)
    {
        //==============================================================================
        // _emptyFn
        _jsContext.emptyFn = null;

        // global API's for script
        // isNumber, isString, isUndefined, isArray, isFunction, isObject

        // Basic Util Functions
        _jsContext.isNumber = null;
        _jsContext.isString = null;
        _jsContext.isUndefined = null;
        _jsContext.isObject = null;
        _jsContext.isArray = null;
        _jsContext.isFunction = null;


        //==============================================================================
        // nexacro Object Register for HTML Documents
        //==============================================================================
        _jsContext.MainFrame = null;
        _jsContext.ChildFrame = null;
        _jsContext.FrameSet = null;
        _jsContext.VFrameSet = null;
        _jsContext.HFrameSet = null;
        _jsContext.TileFrameSet = null;
        _jsContext.Form = null;
        _jsContext.Layout = null;
        _jsContext.BindItem = null;
        _jsContext.ActiveX = null;
        _jsContext.AppletComp = null;
        _jsContext.FlashPlayer = null;
        _jsContext.BindItem = null;
        _jsContext.Button = null;
        _jsContext.Calendar = null;
        _jsContext.Combo = null;
        _jsContext.CheckBox = null;
        _jsContext.Div = null;
        _jsContext.Dataset = null;
        _jsContext.Edit = null;
        _jsContext.FileDownload = null;
        _jsContext.FileUpload = null;
        _jsContext.Grid = null;
        _jsContext.GroupBox = null;
        _jsContext.ImageViewer = null;
        _jsContext.ListBox = null;
        _jsContext.MaskEdit = null;
        _jsContext.TextArea = null;
        _jsContext.Radio = null;
        _jsContext.Spin = null;
        _jsContext.Static = null;
        _jsContext.Chart = null;
        _jsContext.ExcelExportObject = null;
        _jsContext.ExportItem = null;
        _jsContext.ExportProgress = null;
        _jsContext.Menu = null;
        _jsContext.PopupMenu = null;
        _jsContext.Tab = null;
        _jsContext.Tabpage = null;
        _jsContext.TabComponent = null;
        _jsContext.ProgressBar = null;
        _jsContext.PopupDiv = null;
        _jsContext.WebBrowser = null;
        _jsContext.Sms = null;
        _jsContext.AudioPlayer = null;
        _jsContext.GeoLocation = null;
        _jsContext.Acceleration = null;
        _jsContext.Vibrator = null;
        _jsContext.Network = null;
        _jsContext.Camera = null;
        _jsContext.Contact = null;
        _jsContext.ContactSet = null;
        _jsContext.ContactField = null;
        _jsContext.ContactPhoto = null;
        _jsContext.ContactAddress = null;
        _jsContext.ContactOrganization = null;
        _jsContext.ContactIM = null;
        _jsContext.Camera = null;
        _jsContext.ImagePicker = null;
        _jsContext.FileDialog = null;
        _jsContext.VirtualFile = null;
        _jsContext.SQLConnection = null;
        _jsContext.SQLStatement = null;
        _jsContext.AudioRecord = null;
        _jsContext.DomParser = null;

        _jsContext.ColumnInfo = null;
        _jsContext.GridClickEventInfo = null;
        _jsContext.TextChangedEventInfo = null;

    };

    //---------------------------------------------------------------------------------------
    // System Object : Object Type. --> application.system = nexacro.System;
    //---------------------------------------------------------------------------------------
    nexacro.System = {};

    nexacro.System.screenToClientX = function (comp, posX)
    {
        if (comp._control_element)
        {
            var p = nexacro._getElementScreenPosition(comp._control_element);
            return posX - p.x;
        }
    };
    nexacro.System.screenToClientY = function (comp, posY)
    {
        if (comp._control_element)
        {
            var p = nexacro._getElementScreenPosition(comp._control_element);
            return posY - p.y;
        }
    };
    nexacro.System.clientToScreenX = function (comp, posX)
    {
        if (comp._control_element)
        {
            var p = nexacro._getElementScreenPosition(comp._control_element);
            return posX + p.x;
        }
    };
    nexacro.System.clientToScreenY = function (comp, posY)
    {
        if (comp._control_element)
        {
            var p = nexacro._getElementScreenPosition(comp._control_element);
            return posY + p.y;
        }
    };

    nexacro.System.makeCall = function (phoneNumber, autoDialing)
    {
    };
    nexacro.System.play = function (filePath)
    {
    };

    //******************************************************************************
    //  Methods
    //******************************************************************************
    nexacro.System.convertRealPath = function (path)
    {
        return nexacro._convertRealPath(path);
    };

    nexacro.System.execBrowser = function (url)
    {
        nexacro._execBrowser(url);
    };

    nexacro.System.execShell = function (exeUrl)
    {
        nexacro._execShell(exeUrl);
    };

    nexacro.System.execNexacro = function (command)
    {
        nexacro._execNexacro(command);
    };

    nexacro.System.setClipboard = function (format, data)
    {
        return nexacro._setClipboard(format, data);
    };

    nexacro.System.getClipboard = function (format)
    {
        return nexacro._getClipboard(format);
    };

    nexacro.System.clearClipboard = function ()
    {
        nexacro._clearClipboard();
    };

    nexacro.System.getScreenResolution = function (monitor_index)
    {
        var ret_val = "";
        if (monitor_index)
        {
            var screenwidth = nexacro._getScreenWidth(monitor_index);
            var screenheight = nexacro._getScreenHeight(monitor_index);
            ret_val = screenwidth + " " + screenheight;
            return ret_val;
        }
    };

    nexacro.System.getScreenRect = function (monitor_index)
    {
        var ret_val = "";
        if (monitor_index)
        {
            return nexacro._getScreenRect(monitor_index);
        }
    };

    nexacro.System.showModalSync = function (childframe, str_id, _parent_frame, arr_arg, opener)
    {
        return nexacro._showModalSync(childframe, str_id, _parent_frame, arr_arg, opener);
    };

    nexacro.System.showModalWindow = function (childframe, str_id, parent_frame, arr_arg, opener)
    {
        return nexacro._showModalWindow(childframe, str_id, parent_frame, arr_arg, opener);
    };

    nexacro.System.attachChildFrame = function (_cur_win, _doc, key, adl_url, div_id, fdl_url)
    {
        return nexacro._attachChildFrame(_cur_win, _doc, key, adl_url, div_id, fdl_url);
    };

    nexacro.System.isPrimaryMonitor = function (monitor_index)
    {
        if (monitor_index)
        {
            return nexacro._isPrimaryMonitor(monitor_index);
        }
    };

    nexacro.System.getMonitorIndex = function (cursorX, cursorY)
    {
        return nexacro._getMonitorIndex(cursorX, cursorY);
    };

    nexacro.System.getCursorX = function (e)
    {
        return nexacro._getCursorX(e);
    };

    nexacro.System.getCursorY = function (e)
    {
        return nexacro._getCursorY(e);
    };

    nexacro.System.getScreenHeight = function (monitor_index)
    {
        return nexacro._getScreenHeight(monitor_index);
    };

    nexacro.System.getScreenWidth = function (monitor_index)
    {
        return nexacro._getScreenWidth(monitor_index);
    };

    nexacro.System._getMobileOrientation = function ()
    {
        var orientation = nexacro._getMobileOrientation();
        switch (orientation)
        {
            case 0:
                {
                    return "Portrait";
                }
                break;
            case 1:
                {
                    return "ReversePortrait";
                }
                break;
            case 2:
                {
                    return "LandscapeLeft";
                }
                break;
            case 3:
                {
                    return "LandscapeRight";
                }
                break;
            default:
                {
                    return "resize";
                }
                break;
        }
    };

    nexacro.System.getUserAppPath = function ()
    {
        return nexacro._getUserAppPath();
    };

    nexacro.System._os == nexacro.OS;
    nexacro.System.computername = nexacro._getComputerName();
    nexacro.System.cpuarchitecture = nexacro._getCPUArchitecture();
    nexacro.System.cpucount = nexacro._getCPUCount();
    nexacro.System.cputype = nexacro._getCPUType();
    nexacro.System.locale = nexacro._getLocale();
    nexacro.System.loginuser = nexacro._getLoginUser();
    nexacro.System.mobileorientation = nexacro.System._getMobileOrientation();
    nexacro.System.mobilephonenumber = nexacro._getMobilePhoneNumber();
    nexacro.System.mobileproducttype = nexacro._getMobileProductType();
    nexacro.System.mobileuniqueid = nexacro._getMobileUniqueID();
    nexacro.System.monitorcount = nexacro._getMonitorCount();
    nexacro.System.navigatorname = nexacro._getNavigatorName(); 
    nexacro.System.navigatorversion = nexacro.BrowserVersion; 
    nexacro.System.osversion = nexacro._getOSVersion();
    nexacro.System.taskbarsize = nexacro._getTaskbarSize();
    nexacro.System._language = nexacro._getLanguage();
    nexacro.System.notificationtoken = null;
    nexacro.System._accessibilitytype = null;
    nexacro.System._accessibilitystatus = nexacro._getAccessibilityStatus();

    nexacro.System.print = function (comp, defaultprint, valign, halign, fitonepage)
    {
        nexacro._beforePrintCheckPlugin(comp, comp._refform, defaultprint, valign, halign, fitonepage);
    };

    
    nexacro.System._setNotificationToken = function (notificationtoken)
    {
    	nexacro.System.notificationtoken = notificationtoken;
    };
    
    nexacro.System.setAccessibilityType = function (v)
    {
    	nexacro.System._accessibilitytype = v;
    };

    nexacro.System.getAccessibilityType = function ()
    {
    	return nexacro.System._accessibilitytype;
    };

    //==============================================================================
    // Timer & Timer Manager
    //==============================================================================
    nexacro.TimerManager = function (context)
    {
        this.context = context;
        this.status = 0;
        this.timerList = [];
    };
    var _pTimerManager = nexacro._createPrototype(nexacro.Object, nexacro.TimerManager);
    nexacro.TimerManager.prototype = _pTimerManager;

    _pTimerManager.addTimer = function (timer)
    {
        var timers = this.timerList;
        var len = timers.length;
        for (var i = 0; i < len; i++)
        {
            var tmitem = timers[i];
            if (tmitem.id == timer.id)
            {
                tmitem.destroy();
                timers.splice(i, 1);
                break;
            }
        }
        timers.push(timer);
    };
    _pTimerManager.stopTimer = function (id)
    {
        var timers = this.timerList;
        var len = timers.length;
        for (var i = 0; i < len; i++)
        {
            var tmitem = timers[i];
            if (tmitem.id == id)
            {
                tmitem.stop();
                return true;
            }
        }
        return false;
    };
    _pTimerManager.startTimer = function (id)
    {
        var timers = this.timerList;
        var len = timers.length;
        for (var i = 0; i < len; i++)
        {
            var tm = timers[i];
            if (tm.id == id)
            {
                tm.start();
                return true;
            }
        }
        return false;
    };
    _pTimerManager.deleteTimer = function (id)
    {
        var timers = this.timerList;
        var len = timers.length;
        for (var i = 0; i < len; i++)
        {
            var tm = timers[i];
            if (tm.id == id)
            {
                tm.destroy();
                timers.splice(i, 1);
                return true;
            }
        }
        return false;
    };
    _pTimerManager.deleteTimerItem = function (item)
    {
        var timers = this.timerList;
        var len = timers.length;
        for (var i = 0; i < len; i++)
        {
            var tm = timers[i];
            if (tm == item)
            {
                tm.destroy();
                timers.splice(i, 1);
                return true;
            }
        }
        return false;
    };
    _pTimerManager.clearAll = function ()
    {
        var timers = this.timerList;
        var len = timers.length;
        for (var i = 0; i < len; i++)
        {
            var tm = timers[i];
            tm.destroy();
        }
        timers.splice(0, len);
    }
    _pTimerManager.destroy = function ()
    {
        this.clearAll();
        this.context = null;
    }

    delete _pTimerManager;


    //---------------------------------------------------------------------------------------
    // EventTimer
    //---------------------------------------------------------------------------------------
    nexacro._on_bindEventTimerHandler = function (pthis, timerid)
    {
        return function ()
        {
            var context = pthis;
            if (context && context._is_alive && context.ontimer && context.ontimer._has_handlers)
            {
                var evt = new nexacro.TimerEventInfo(context, "ontimer", timerid);
                context.ontimer._fireEvent(context, evt);
            }
        };
    }

    //event timer 
    nexacro.EventTimer = function (target, id, interval)
    {
        // event target must be context
        this.id = id;
        this.context = target._getReferenceContext(); //refcontext is  selfcontext
        this.interval = (interval | 0);

        //------------ internal variable ------------------//
        this._handle = null;
        this._ontimer = nexacro._on_bindEventTimerHandler(this.context, id); // bind  
        this.context._timerManager.addTimer(this);
    };

    var _pEventTimer = nexacro._createPrototype(nexacro.Object, nexacro.EventTimer);
    nexacro.EventTimer.prototype = _pEventTimer;    

    _pEventTimer.setInterval = function (interval)
    {
        if (this._handle) this.stop();
        this.interval = interval;
    };
    _pEventTimer.start = function ()
    {
        if (this._handle) this.stop();
        this._handle = nexacro._setSystemTimer(this.context._getWindowHandle(), this._ontimer, this.interval);
    };
    _pEventTimer.stop = function ()
    {
        if (this._handle)
        {
            nexacro._clearSystemTimer(this.context._getWindowHandle(), this._handle);
            this._handle = null;
        }
    };
    _pEventTimer.destroy = function ()
    {
        this.stop();
        this.context = null;
        this._ontimer = null;
    };

    delete _pEventTimer;



    //---------------------------------------------------------------------------------------
    // delay for Scroll track, wheel 
    //---------------------------------------------------------------------------------------
    nexacro.DelayTask = function (target, fn, interval)
    {
        this.context = target._getReferenceContext(); //refcontext is  selfcontext
        this._handle = null;
        var handle_window = this.context._getWindowHandle();
        this._call = this.createDelayFunc(fn, interval, target, handle_window, this);
    }

    var _pDelayTask = nexacro._createPrototype(nexacro.Object, nexacro.DelayTask);
    nexacro.DelayTask.prototype = _pDelayTask;    

    _pDelayTask.createDelayFunc = function (fn, interval, scope, win_handle, pthis)
    {
        var lastCallTime, elapsed, lastArgs,
            execute = function ()
            {
                pthis.stop();
                fn.apply(scope, lastArgs);
                lastCallTime = new Date().getTime();
            };

        return function ()
        {
            lastArgs = arguments;
            elapsed = new Date().getTime() - lastCallTime;
            if (pthis._handle)
            {
                nexacro._clearSystemTimer(win_handle, pthis._handle);
                pthis._handle = null;
            }
            if (!lastCallTime || (elapsed >= interval))
            {
                execute();
            }
            else
            {
                pthis._handle = nexacro._setSystemTimer(win_handle, execute, interval - elapsed);
            }
        };
    };

    _pDelayTask.run = function ()
    {
        this._call.apply(null, arguments);
    };

    _pDelayTask.stop = function ()
    {
        if (this._handle)
        {
            nexacro._clearSystemTimer(this.context._getWindowHandle(), this._handle);
            this._handle = null;
        }
    };

    _pDelayTask.destroy = function ()
    {
        this.stop();
        this.context = null;
        this._call = null;
    };

    delete _pDelayTask;

    //---------------------------------------------------------------------------------------
    // CallbackTimer
    //---------------------------------------------------------------------------------------
    nexacro._CallbackTimerIdNo = 1000;
    nexacro._on_bindCallbackTimerHandler = function (pthis)
    {
        return function ()
        {
            var target = pthis.target;
            if (target && target._is_alive)
                pthis.callback.call(target);
        };
    }
    nexacro.CallbackTimer = function (target, callback, interval)
    {
        var id = nexacro._CallbackTimerIdNo;
        nexacro._CallbackTimerIdNo++;
        this.id = id;
        this.target = target;
        this.context = target._getReferenceContext();
        this.callback = callback;
        this.interval = (interval | 0);

        // ------------ internal variable -------------- //
        this._handle = null;
        this._ontimer = nexacro._on_bindCallbackTimerHandler(this, callback);
        this.context._timerManager.addTimer(this);
    };

    var _pCallbackTimer = nexacro._createPrototype(nexacro.Object, nexacro.CallbackTimer);
    nexacro.CallbackTimer.prototype = _pCallbackTimer;    

    _pCallbackTimer.setInterval = function (interval)
    {
        if (this._handle) this.stop();
        this.interval = interval;
    };
    _pCallbackTimer.start = function ()
    {
        if (this._handle) this.stop();
        this._handle = nexacro._setSystemTimer(this.context._getWindowHandle(), this._ontimer, this.interval);
    };
    _pCallbackTimer.stop = function ()
    {
        if (this._handle)
        {
            nexacro._clearSystemTimer(this.context._getWindowHandle(), this._handle);
            this._handle = null;
        }
    };
    _pCallbackTimer.destroy = function ()
    {
        this.stop();
        this.target = null;
        this.context = null;
        this._ontimer = null;
    };

    delete _pCallbackTimer;


    //---------------------------------------------------------------------------------------
    // OnceCallbackTimer
    //---------------------------------------------------------------------------------------
    nexacro._on_bindOnceCallbackTimerHandler = function (pthis)
    {
        return function ()
        {
            if (pthis)
            {
                var target = pthis.target;
                if (target && target._is_alive)
                    pthis.callback.call(target);
                if (!pthis.context._timerManager.deleteTimerItem(pthis))
                    pthis.destroy();
                pthis = null;
            }
        };
    }
    nexacro.OnceCallbackTimer = function (target, callback, interval)
    {
        var id = nexacro._CallbackTimerIdNo;
        nexacro._CallbackTimerIdNo++;
        this.id = id;
        this.target = target;
        this.context = target._getReferenceContext();
        this.callback = callback;
        this.interval = (interval | 0);

        // ----------- internal variable ------------- //
        this._handle = null;
        this._ontimer = nexacro._on_bindOnceCallbackTimerHandler(this);
        this.context._timerManager.addTimer(this);
    };

    var _pOnceCallbackTimer = nexacro._createPrototype(nexacro.Object, nexacro.OnceCallbackTimer);
    nexacro.OnceCallbackTimer.prototype = _pOnceCallbackTimer;


    _pOnceCallbackTimer.setInterval = function (interval)
    {
        if (this._handle) this.stop();
        this.interval = interval;
    };
    _pOnceCallbackTimer.start = function ()
    {
        if (this._handle)
            this.stop();
        this._handle = nexacro._setSystemTimer(this.context._getWindowHandle(), this._ontimer, this.interval);
    };
    _pOnceCallbackTimer.stop = function ()
    {
        if (this._handle)
        {
            nexacro._clearSystemTimer(this.context._getWindowHandle(), this._handle);
            this._handle = null;
        }
    };
    _pOnceCallbackTimer.destroy = function ()
    {
        this.stop();
        this.target = null;
        this.context = null;
        this._ontimer = null;
    };

    nexacro.OnceCallbackTimer.callonce = function (target, callback, interval)
    {
        var timer = new nexacro.OnceCallbackTimer(target, callback, interval);
        timer.start();
        return timer;
    };

    delete _pOnceCallbackTimer;

    //---------------------------------------------------------------------------------------
    // AnimationFrame Object
    //---------------------------------------------------------------------------------------
    nexacro.AnimationFrame = function (comp, callback)
    {
        // 다음 Rendering frame에 Callback을 1회 수행한다.
        this._comp = comp;
        this._window = comp._getWindow();
        this.callback = callback;
        this._timer_interval = 15;
        this._timer = null;
    };

    var _pAnimationFrame = nexacro._createPrototype(nexacro.Object, nexacro.AnimationFrame);
    nexacro.AnimationFrame.prototype = _pAnimationFrame;


    _pAnimationFrame.start = function ()
    {
        if (nexacro.SupportAnimationFrame)
            this.id = nexacro._requestAnimationFrame(this._window, this.callback);
        else
        {
            this._timer = new nexacro.OnceCallbackTimer(this._comp, this.callback, this._timer_interval);
            this._timer.start();
        }
    };

    _pAnimationFrame.stop = function ()
    {
        if (nexacro.SupportAnimationFrame)
        {
            nexacro._cancelAnimationFrame(this._window, this.id);
        }
        else
        {
            if (this._timer)
            {
                this._timer.stop();
        }
        }
    };

    _pAnimationFrame.destroy = function ()
    {
        this.stop();
        this._comp = null;
        this._window = null;
        this.callback = null;
    };

    delete _pAnimationFrame;

    //---------------------------------------------------------------------------------------
    // LoadItem Object
    //---------------------------------------------------------------------------------------
    nexacro.LoadItem = function (url, type)
    {
        this.url = url;
        this.type = type;
        this.errorcode = 0;
        this.module = null;
        this.data = null;
        this.targets = [];

        // -------------- internal variable ----------------- //
        this._handle = null;
        this._bLoaded = false;
        this._context_callback = null;
        this._requrl = url;    // for transaction : url is transaction service id, _requrl is request url
        this._is_cancel = false;
        this._is_process = false;
    };
    var _pLoadItem = nexacro._createPrototype(nexacro.Object, nexacro.LoadItem);
    nexacro.LoadItem.prototype = _pLoadItem;    

    _pLoadItem.addTarget = function (target)
    {
        var targets = this.targets;
        if (nexacro._indexOf(targets, target) < 0)
        {
            targets.push(target);
            return true;
        }
        return false;
    };
    _pLoadItem.deleteTarget = function (target)
    {
        var targets = this.targets;
        var idx = nexacro._indexOf(targets, target);
        if (idx >= 0)
        {
            targets.spliace(idx, 1);
            return true;
        }
        return false;
    };
    _pLoadItem.destroy = function ()
    {
        this.targets = null;
        this._handle = null;
        this._context_callback = null;
    };

    delete _pLoadItem;

    //---------------------------------------------------------------------------------------
    // LoadManager
    //---------------------------------------------------------------------------------------
    //
    // load Manager status
    //   0 : not init
    //   1 : loading main
    //   2 : end load main --> loading mandatory module : global, include, css
    //   3 : end loading mandatory : start init --> wait for preload list
    //   4 : end loading : on_load start
    //   preload는 component에 preload 옵션이 있는 component에 해당됨 (div, tabpage, dataset)
    nexacro.LoadManager = function (context)
    {
        this.context = context;
        this.status = 0;
        this.main_url = "";
        this.globalCnt = 0;
        this.globalList = [];
        this.localCnt = 0;
        this.localList = [];
        this.preloadCnt = 0;
        this.preloadList = [];
        this.dataCnt = 0;
        this.dataList = [];
        this.updateList = [];
        this.updateCnt = 0;
        this.childlocalCnt = 0;
        this.transactionList = [];

        // ---------- internal variable ------------ //
        this._main_handle = null;
        this._is_mainloaded = false;
    };

    var _pLoadManager = nexacro._createPrototype(nexacro.Object, nexacro.LoadManager);
    nexacro.LoadManager.prototype = _pLoadManager;
    
    _pLoadManager.getGlobalItem = function (url)
    {
        var globals = this.globalList;
        var cnt = globals.length;
        for (var i = 0; i < cnt; i++)
        {
            var item = globals[i];
            if (item.url == url)
                return item;
        }
        return null;
    };
    _pLoadManager.getLocalItem = function (url)
    {
        var locals = this.localList;
        var cnt = locals.length;
        for (var i = 0; i < cnt; i++)
        {
            var item = locals[i];
            if (item.url == url)
                return item;
        }
        return null;
    };
    _pLoadManager.getDataItem = function (url)
    {
        var datas = this.dataList;
        var cnt = datas.length;
        for (var i = 0; i < cnt; i++)
        {
            var item = datas[i];
            if (item.url == url)
                return item;
        }
        return null;
    };
    _pLoadManager.getUpdateItem = function (url)
    {
        var updates = this.updateList;
        var cnt = updates.length;
        for (var i = 0; i < cnt; i++)
        {
            var item = updates[i];
            if (item.url == url)
                return item;
        }
        return null;
    };
    _pLoadManager.getTransactionItem = function (url)
    {
        var transactions = this.transactionList;
        var cnt = transactions.length;
        for (var i = 0; i < cnt; i++)
        {
            var item = transactions[i];
            if (item.url == url)
                return item;
        }
        return null;
    };
    _pLoadManager.removeTransactionItem = function (url)
    {
        var transactions = this.transactionList;
        var cnt = transactions.length;
        for (var i = 0; i < cnt; i++)
        {
            var item = transactions[i];
            if (item.svcid == url)
            {
                transactions.splice(i, 1);
                break;
            }
        }
    };
    _pLoadManager.removeDataItem = function (url)
    {
        var datas = this.dataList;
        var cnt = datas.length;
        for (var i = 0; i < cnt; i++)
        {
            var item = datas[i];
            if (item.url == url)
            {
                datas.splice(i, 1);
                break;
            }
        }
    };
    _pLoadManager.getPreloadItem = function (type, url)
    {
        var preloads = this.preloadList;
        var cnt = preloads.length;
        for (var i = 0; i < cnt; i++)
        {
            var item = preloads[i];
            if (item.type == type && item.url == url)
                return item;
        }
        return null;
    };

    _pLoadManager.addPreloadItem = function (type, url, target, args, service)
    {
        if (type == "data")
        {
            var svcid = "__preload_" + ((typeof target) == "string" ? target : target.id);
            this.loadPreloadDataModule(url, target, false, true, svcid, args, service);
        }
        else
        {
            this.loadPreloadJSModule(url, target, true, null, service);
        }
    };

    _pLoadManager.loadMainModule = function (url, cache, async, reload, service)
    {
        if (cache == null)
            cache = false;
        if (async == null)
            async = true;
        if (reload == null)
            reload = false;

        if (reload == true || this.main_url != url)
        {
            if (this._main_handle)
            {
                nexacro._cancelLoad(this._main_handle);
                this.main_handle = null;
            }
            this.main_url = url;
            this.status = 1;

            var parent_context = (this.context) ? this.context.getParentContext() : null;
            var ret = 0;
            while (parent_context)
            {
                //form/div content/div url 이 붙는 경우 preloadlist가 form에 있어서 검색 필요

                ret = parent_context._load_manager.getPreloadJSModule(url, this.context)
                if (ret == 0)
                {
                    parent_context = parent_context.getParentContext();
                }
                else
                    break;
            }

            if (ret == 0)
            {
                this._main_handle = nexacro._loadJSModule(url, this, this.on_load_main, cache, service, async);
            }
            else
            {
                return ret;  //preload
            }
        }
    };

    _pLoadManager.loadGlobalModule = function (url, async, service)
    {
        if (async == null)
            async = true;
        if (this.status < 7)
        {
            var load_item = this.getGlobalItem(url);
            if (!load_item)
            {
                load_item = new nexacro.LoadItem(url, "globalmodule", null);
                this.globalList.push(load_item);
                this.globalCnt++;
                load_item._handle = nexacro._loadJSText(url, this, this.on_load_globalmodule, service, async);
            }
        }
    };

    _pLoadManager.loadUpdateModule = function (url, type, targetpath, ref, ver, failpass, service)
    {
        if (this.status < 7)
        {
            var load_item = this.getUpdateItem(url);
            if (!load_item)
            {
                load_item = new nexacro.LoadItem(url, type, null);
                load_item._targetpath = targetpath;
                load_item._ref = ref;
                load_item._ver = ver;
                load_item._failpass = failpass;
                this.updateList.push(load_item);
                this.updateCnt++;
                load_item._handle = nexacro._loadUpdateModule(url, this, this.on_load_updatemodule, service, true, type, targetpath, ref, ver, failpass);
            }
        }
    };

    _pLoadManager.loadIncludeModule = function (url, cache, async, service)
    {
        if (cache == null)
            cache = true;
        if (async == null)
            async = true;

        if (this.status < 7)
        {
            var load_item = this.getLocalItem(url);
            if (!load_item)
            {
                load_item = new nexacro.LoadItem(url, "include", this.context);
                this.localList.push(load_item);

                this.localCnt++;
                load_item._handle = nexacro._loadJSModule(url, this, this.on_load_localmodule, cache, service, async);

                // IE7 : cache로부터 load 할 경우 sync로 동작한다.
                if (!load_item._bLoaded)
                {
                    var parent_context = this.context.getParentContext();
                    while (parent_context && parent_context._load_manager.status != 7)
                    {
                        parent_context._load_manager.childlocalCnt++;
                        parent_context._load_manager.preloadCnt++;

                        parent_context = parent_context.getParentContext();
                    }
                }
            }
        }
    };

    _pLoadManager.loadCssModule = function (url, cache, async, service)
    {
        if (cache == null)
            cache = true;
        if (async == null)
            async = true;

        if (this.status < 7)
        {
            var load_item = this.getLocalItem(url);
            if (!load_item)
            {
                load_item = new nexacro.LoadItem(url, "css", this.context);
                this.localList.push(load_item);

                this.localCnt++;

                load_item._handle = nexacro._loadJSModule(url, this, this.on_load_localmodule, cache, service, async);
            }
        }
    };

    _pLoadManager.loadPreloadJSModule = function (url, target, cache, async, service)
    {
        if (cache == null)
            cache = false;
        if (async == null)
            async = true;

        var increase = false;
        if (this.status < 6)
        {
            var load_item = this.getPreloadItem("fdl", url);
            if (load_item && target)
            {
                if (load_item.addTarget(target) && !load_item._bLoaded)
                {
                    this.preloadCnt++;
                    var parent_context = this.context.getParentContext();
                    while (parent_context)
                    {
                        if (!parent_context._is_created)
                            parent_context._load_manager.preloadCnt++;
                        parent_context = parent_context.getParentContext();
                    }
                    increase = true;
                }
            }
            else
            {
                load_item = new nexacro.LoadItem(url, "fdl");

                if (target && load_item.addTarget(target))
                {
                    this.preloadCnt++;
                    var parent_context = this.context.getParentContext();
                    while (parent_context)
                    {
                        if (!parent_context._is_created)
                            parent_context._load_manager.preloadCnt++;
                        parent_context = parent_context.getParentContext();
                    }
                    increase = true;
                    this.preloadList.push(load_item);
                    load_item._handle = nexacro._loadJSModule(url, this, this.on_load_preloadjsmodule, cache, service, async);
                }
            }
        }
    };
    _pLoadManager.loadPreloadDataModule = function (url, target, cache, async, svcid, args, service)
    {
        if (nexacro.isDesignMode) return;

        var increase = false;
        if (this.status < 6)
        {
            var load_item = this.getPreloadItem("data", svcid);
            if (load_item && target)
            {
                if (load_item.addTarget(target));
                {
                    this.preloadCnt++;
                    increase = true;
                }
            }
            else
            {
                var referer = "";
                if (this.context) referer = this.context._url;

                load_item = new nexacro.LoadItem(svcid, "data");
                load_item._requrl = url;

                if (target && load_item.addTarget(target));
                {
                    this.preloadCnt++;
                    increase = true;

                    this.preloadList.push(load_item);
                    load_item._handle = nexacro._preloadData(url, this, this.on_load_preloaddatamodule, service, svcid, referer, args, true, 0, false);
                }
            }
        }
    };

    _pLoadManager.loadDataModule = function (url, svcid, indatasets, outdatasets, parameters, callback, async, datatype, compress, service)
    {
        if (async == null)
            async = true;
        var load_item = this.getDataItem(svcid);
        if (!load_item)
        {
            load_item = new nexacro.LoadItem(svcid, "data", this.context);
            load_item._requrl = url;

            this.dataList.push(load_item);
            this.dataCnt++;
            load_item._context_callback = callback;
            load_item._handle = nexacro._loadData(url, this, this.on_load_datamodule, service, this.context, svcid, indatasets, outdatasets, parameters, async, datatype, compress);
        }
    };

    _pLoadManager.reloadCssModule = function (url, cache, async, service)
    {
        var local_Item = new nexacro.LoadItem(url, "css", this.context);
        this.localList.push(local_Item);

        if (this.status < 7)
        {
            local_Item._handle = nexacro._loadJSModule(url, this, this.on_load_localmodule, true, service, true);
        }
        else
        {
            local_Item._handle = nexacro._loadJSModule(url, this, this.on_reload_css, true, service, async);
        }
    };

    //------------------------------------------------
    // load handlers
    //for error : errstatus, null, errormsgcode, returncode, requesturi, locationuri
    _pLoadManager.on_load_main = function (url, errstatus, module, fireerrorcode, returncode, requesturi, locationuri)
    {

        if (url == this.main_url)
        {

            this.status = 2;
            this._main_handle = null;
            this._is_mainloaded = false;
            if (errstatus == 0 && module && typeof (module) == "function")
            {
                module.call(this.context);
                if (this.context && this.context != application && this.context.parent && this.context.parent._is_frame)
                {
                    var child_frame = this.context.parent;
                    child_frame._is_loadform_failed = false;
            }
            }
            else
            {
                // adl 
                if (this.context == application)
                {
                    application._onHttpSystemError(this.context, true, this.context, "comm_fail_loadinvalidurl", url, returncode, requesturi, locationuri);
                    return;
                }
                else
                {
                    if (this.context && this.context.parent && this.context.parent._is_frame)
                    {
                        // main form
                        var child_frame = this.context.parent;
                        child_frame._is_loadform_failed = true;
                    }
                    application._onHttpSystemError(this.context, true, this.context, fireerrorcode, url, returncode, requesturi, locationuri);
                }
            }

            if (returncode != "404")
            {
                if (returncode != -1)
                {
                    this._is_mainloaded = true;
                    this._check_fire_oninit();
        }
            }
        }
    };

    _pLoadManager.on_load_globalmodule = function (url, errstatus, jstext, fireerrorcode, returncode, requesturi, locationuri)
    {
        var load_Item = this.getGlobalItem(url);
        if (load_Item)
        {
            load_Item._handle = null;
            if (errstatus == 0)
            {
                if (jstext != "")
                {
                    load_Item.data = jstext;
                }
            }
            else
            {
                load_Item.errcode = errstatus;
                application._onHttpSystemError(this.context, true, this.context, fireerrorcode, url, returncode, requesturi, locationuri);
            }
            this.globalCnt--;
            this._check_fire_oninit(); // _check_fire_oninit
        }
    };
    _pLoadManager.on_load_updatemodule = function (url, errstatus, binarymodule, fireerrorcode, returncode, requesturi, locationuri)
    {
        var load_Item = this.getUpdateItem(url);
        if (load_Item)
        {
            load_Item._handle = null;

            if (errstatus != 0)
            {
                load_Item.errcode = errstatus;
                application._onHttpSystemError(this.context, true, this.context, fireerrorcode, url, returncode, requesturi, locationuri);
            }
            this.updateCnt--;
            this._check_fire_oninit(); // _check_fire_oninit
        }
    };

    _pLoadManager.on_load_localmodule = function (url, errstatus, module, fireerrorcode, returncode, requesturi, locationuri)
    {
        var load_Item = this.getLocalItem(url);
        if (load_Item)
        {

            var _handle = load_Item._handle;
            load_Item._handle = null;
            if (errstatus == 0 && module && typeof (module) == "function")
            {
                if (load_Item.type == "include")
                {
                    load_Item._bLoaded = true;
                    module.call(this.context, load_Item.url);
                    load_Item.module = null;
                }
                else
                {
                    load_Item.module = module;
                }
            }
            else
            {
                load_Item.errcode = errstatus;
                application._onHttpSystemError(this.context, true, this.context, fireerrorcode, url, returncode, requesturi, locationuri);
            }

            this.localCnt--;
            this._check_fire_oninit();  // _check_fire_oninit()

            // sync 인 경우 handle 이 없다.
            //var parent_context = this.context.getParentContext();
            var parent_context = (this.context) ? this.context.getParentContext() : null;
            while (parent_context && parent_context._load_manager.childlocalCnt > 0)
            {

                    parent_context._load_manager.childlocalCnt--;
                    parent_context._load_manager.preloadCnt--;
                    parent_context._load_manager._check_fire_onload();

                    parent_context = parent_context.getParentContext();
                }
            return;
        }
    };

    _pLoadManager.on_load_preloadjsmodule = function (url, errstatus, module, fireerrorcode, returncode, requesturi, locationuri)
    {
        var load_Item = this.getPreloadItem("fdl", url);
        if (load_Item)
        {
            load_Item.errcode = errstatus;
            load_Item.module = module;
            load_Item._handle = null;
            load_Item._bLoaded = true;
            var targets = load_Item.targets;
            var target_len = targets.length;
            if (target_len > 0)
            {
                for (var i = 0; i < target_len; i++)
                {
                    if (this.context.components)
                    {
                        var target = targets[i];
                        if ((typeof target) == "string")
                        {
                            target = this.context.components[target];
                        }
                        if (target)
                        {
                            target._load_manager.on_load_main(url, errstatus, module, fireerrorcode, returncode, requesturi, locationuri);
                        }
                    }
                }

                targets.splice(0, target_len);
                this.preloadCnt -= target_len;

                this._check_fire_onload();
                if (this.context)
                {
                    var parent_context = this.context.getParentContext();
                    while (parent_context && parent_context._load_manager.preloadCnt > 0)
                    {
                        parent_context._load_manager.preloadCnt -= target_len;
                        parent_context._load_manager._check_fire_onload();
                        parent_context = parent_context.getParentContext();
                }
            }
        }
        }
    };

    _pLoadManager.on_load_preloaddatamodule = function (url, errstatus, data, fireerrorcode, returncode, requesturi, locationuri)
    {
        var load_Item = this.getPreloadItem("data", url);
        if (load_Item)
        {
            load_Item.errcode = errstatus;
            load_Item.data = data;
            load_Item._handle = null;
            load_Item._bLoaded = true;
            var targets = load_Item.targets;
            var target_len = targets.length;

            if (target_len > 0)
            {
                for (var i = 0; i < target_len; i++)
                {
                    if (this.context.all)
                    {
                        var target = targets[i];
                        if ((typeof target) == "string")
                        {
                            target = this.context.all[target];
                        }
                        if (target && target.on_preload_data)
                        {
                            target.on_preload_data(load_Item._requrl, errstatus, data, fireerrorcode, returncode, requesturi, locationuri);
                        }
                    }
                }

                targets.splice(0, target_len);
                this.preloadCnt -= target_len;
            }
            this._check_fire_onload();
        }
    };

    _pLoadManager.on_load_datamodule = function (svcid, errstatus, message, fireerrorcode, returncode, requesturi, locationuri)
    {
        var load_Item = this.getDataItem(svcid);
        if (load_Item)
        {
            var callback_id = load_Item._context_callback;
            var callback_func = this.context[callback_id];

            //받은 데이타가 아무것도 없을때는 callback만 호출됨
            var ret = false;
            if (errstatus < 0 && fireerrorcode)
            {
                load_Item.errcode = errstatus;
                if (fireerrorcode != "comm_cancel_byuser" || fireerrorcode != "comm_stop_transaction_byesc" ||
                    load_Item._is_cancel || !load_Item._handle || (load_Item._handle && !load_Item._handle._user_aborted && load_Item._handle._user_aborted !== undefined))
                {                    
                    ret = application._onHttpSystemError(this.context, true, this.context, fireerrorcode, requesturi, returncode, requesturi, locationuri);
                    if (fireerrorcode != "comm_cancel_byuser" && fireerrorcode != "comm_stop_transaction_byesc")
                        ret = false;
                    if (ret) return true;
                }
            }

            if (fireerrorcode == "comm_cancel_byuser" || fireerrorcode == "comm_stop_transaction_byesc")
            {
                // _handle이 없는경우는 async=false일때            
                if (ret && load_Item._handle && !load_Item._handle._user_aborted && load_Item._handle._user_aborted !== undefined)
                    return ret;
                if (load_Item._is_cancel !== undefined && !load_Item._is_cancel)
                    return ret;
            }

            //callback 함수내에서 같은 service 호출하는 경우
            this.removeDataItem(svcid);
            this.removeTransactionItem(svcid);
            this.dataCnt--;

            if (callback_func && typeof (callback_func) == "function")
            {
                callback_func.call(this.context, svcid, errstatus, message);
                if (errstatus == 0)
                {
                    load_Item._handle = null;
                }
            }
            
            return ret;
        }
    };

    _pLoadManager.on_reload_css = function (url, errstatus, module, fireerrorcode, returncode, requesturi, locationuri)
    {
        var load_Item = this.getLocalItem(url);
        if (load_Item)
        {
            var _handle = load_Item._handle;
            load_Item._handle = null;
            if (errstatus == 0 && module && typeof (module) == "function")
            {   
                load_Item._bLoaded = true;                    
                module.call(this.context, load_Item.url);
                load_Item.module = null;
            }
            else
            {
                load_Item.errcode = errstatus;
                application._onHttpSystemError(this.context, true, this.context, fireerrorcode, url, returncode, requesturi, locationuri);
            }
           
            return;
        }
    };

    _pLoadManager.getPreloadJSModule = function (url, child)
    {
        var load_Item = this.getPreloadItem("fdl", url);
        if (load_Item)
        {
            if (load_Item._bLoaded)
            {
                child._load_manager.on_load_main(url, load_Item.errcode, load_Item.module);
                return 2;
            }
            else
            {
                if (load_Item.addTarget(child))
                {
                    this.preloadCnt++;
                    var parent_context = this.context.getParentContext();
                    while (parent_context && parent_context._load_manager.status < 6)
                    {
                        parent_context._load_manager.preloadCnt++;
                        parent_context = parent_context.getParentContext();
                    }
                }
                return 1;
            }
        }
        return 0;
    };
    _pLoadManager.getPreloadDataModule = function (id)
    {
        var svcid = "__preload_" + id;
        var load_Item = this.getPreloadItem("data", svcid);
        if (load_Item && load_Item._bLoaded)
        {
            return load_Item.data;
        }
    };

    _pLoadManager.on_child_load_completed = function (url, child)
    {
        var load_Item = this.getPreloadItem("fdl", url);
        if (load_Item)
        {
            if (preloads.deleteTarget(child))
            {
                this.preloadCnt--;
                this.context._check_fire_onload();
            }
        }
    };

    _pLoadManager._check_fire_oninit = function ()
    {
        if (this.status < 2 || !this._is_mainloaded)
            return false;

        if (this.status == 2)
        {
            if (this.updateCnt > 0)
                return false;
            else
            {
                var cnt = this.updateList.length;
                for (var i = 0; i < cnt; i++)
                {
                    var item = this.updateList[i];
                    if (item._bLoaded == false)
                    {
                        item._bLoaded = true;
                        if (item.errorcode >= 0)
                        {
                            nexacro._completedUpdateResource(item.data, item.url, item._type, item._targetpath, item._ref, item._failpass, i, cnt);
                            item.data = null;
                        }
                    }
                }
                this.status = 3;
            }
        }

        if (this.status == 3)
        {
            if (this.globalCnt > 0)
                return false;
            else
            {
                var cnt = this.globalList.length;
                for (var i = 0; i < cnt; i++)
                {
                    var item = this.globalList[i];
                    if (item._bLoaded == false)
                    {
                        item._bLoaded = true;
                        if (item.errorcode >= 0)
                        {
                            nexacro._executeScript(item.data, item.url);
                            item.data = null;
                        }
                    }
                }
                this.status = 4;
            }
        }

        if (this.status == 4)
        {
            if (this.localCnt > 0)
                return false;
            else
            {
                var cnt = this.localList.length;
                for (var i = 0; i < cnt; i++)
                {
                    var item = this.localList[i];
                    if (item._bLoaded == false)
                    {
                        item._bLoaded = true;
                        if (item.errorcode >= 0)
                        {
                            if (item.type != "include" && item.module)
                                item.module.call(this.context);

                            item.module = null;
                        }

                    }
                }
                this.status = 5;
            }
        }


        // fire oninit & _check_fire_obload
        if (this.status == 5 && this.context)
        {
            // this function defined by compiler for ADL/FDL
            // create child Objects & Components
            this.context._on_init();
            this._check_fire_onload();
        }
    };

    _pLoadManager._check_fire_onload = function ()
    {
        if (this.status < 5 || !this._is_mainloaded)
            return;

        if (this.status == 5)
        {
            if (this.preloadCnt > 0)
                return false;
            else
            {
                //preload load               
                this.status = 6;
            }
        }

        if (this.status == 6)
        {
            //preload의 include count를 누적해서 가지고 있다.
            if (this.childlocalCnt > 0)
                return false;
            else
                this.status = 7;
        }

        //this.status = 5;
        // fire onload
        if (this.status == 7 && this.context)
        {
            var context = this.context;
            if (!context.parent || !context.parent._is_component) // application
                context._on_load(context, this.main_url);
            else
            {
                if (!context.parent._is_frame || context.parent._is_created)
                    context._on_load(context, this.main_url);

                // frame을 init만 한 상태에서 form이 로딩 f완료 될 경우, 
                // frame이 created 처리 될 때 form onload도 같이 처리한다.
            }

            // clear preload datamodule
            this.clearPreload("data");
        }
    };

    _pLoadManager.clearAllLoad = function ()
    {
        if (this._main_handle)
        {
            nexacro._cancelLoad(this._main_handle);
            this._main_handle = null;
        }

        this._is_mainloaded = false;

        var updates = this.updateList;
        var ucnt = updates.length;
        for (var i = 0; i < ucnt; i++)
        {
            var updateitem = updates[i];
            if (updateitem._handle)
                nexacro._cancelLoad(updateitem._handle);
            updateitem.destroy();
        }
        updates.splice(0, ucnt);

        var globals = this.globalList;
        var gcnt = globals.length;
        for (var i = 0; i < gcnt; i++)
        {
            var globalitem = globals[i];
            if (globalitem._handle)
                nexacro._cancelLoad(globalitem._handle);
            globalitem.destroy();
        }
        globals.splice(0, gcnt);

        var locals = this.localList;
        var lcnt = locals.length;
        for (var i = 0; i < lcnt; i++)
        {
            var localitem = locals[i];
            if (localitem._handle)
                nexacro._cancelLoad(localitem._handle);
            localitem.destroy();
        }
        locals.splice(0, lcnt);

        var preloads = this.preloadList;
        var pcnt = preloads.length;
        for (var i = 0; i < pcnt; i++)
        {
            var preloaditem = preloads[i];
            if (preloaditem._handle)
                nexacro._cancelLoad(preloaditem._handle);
            preloaditem.destroy();
        }
        preloads.splice(0, pcnt);

        var datas = this.dataList;
        var dcnt = datas.length;
        for (var i = 0; i < dcnt; i++)
        {
            var dataitem = datas[i];
            if (dataitem._handle)
                nexacro._cancelLoad(dataitem._handle);
            dataitem.destroy();
        }
        datas.splice(0, dcnt);

        var trs = this.transactionList;
        if (trs)
            trs.splice(0, trs.length);
    };

    _pLoadManager.clearPreload = function (type)
    {
        var preloads = this.preloadList;
        var pcnt = preloads.length;
        for (var i = pcnt - 1; i > 0; i--)
        {
            var preloaditem = preloads[i];
            if (preloaditem._handle && (!type || type == preloaditem.type))
            {
                nexacro._cancelLoad(preloaditem._handle);
                if (type)
                {
                    preloads.splice(i, 1);
                }
                preloaditem.destroy();
            }
        }

        if (!type)
        {
            preloads.splice(0, pcnt);
        }
    };

    _pLoadManager.destroy = function ()
    {
        this.clearAllLoad();
        this.context = null;
    };


    delete _pLoadManager;


    //---------------------------------------------------------------------------------------
    // ServiceItem Object
    //---------------------------------------------------------------------------------------
    nexacro.ServiceItem = function (prefixid, type, url, cachelevel, codepage, language, version, communicationversion)
    {
  
        this.prefixid = prefixid;
        this.type = type;
        this.url = url;
        this.cachelevel = cachelevel;
        this.codepage = codepage;
        this.language = language;
        this.version = version | "0.0";
        this.communicationversion = communicationversion;
    };
    var _pServiceItem = nexacro._createPrototype(nexacro.Object, nexacro.ServiceItem);
    nexacro.ServiceItem.prototype = _pServiceItem;

    _pServiceItem.set_cachelevel = function (v)
    {
        if (v == "none" || v == "static" || v == "session" || v == "dynamic")
            this.cachelevel = v;
    };

    _pServiceItem.set_version = function (v)
    {
        this.version = v;
    };

    delete _pServiceItem;

    //---------------------------------------------------------------------------------------
    // ComponentItem Object
    //---------------------------------------------------------------------------------------
    nexacro.ComponentItem = function (name, type, classname, moduleurl, version)
    {
        this.name = name;
        this.type = type;
        this.classname = classname;
        this.moduleurl = moduleurl;
        this.version = version | "0.0";
    };
    var _pComponentItem = nexacro._createPrototype(nexacro.Object, nexacro.ComponentItem);
    nexacro.ComponentItem.prototype = _pComponentItem;
    
    delete _pComponentItem;

    //---------------------------------------------------------------------------------------
    // UpdateItem Object
    //---------------------------------------------------------------------------------------
    nexacro.UpdateItem = function (type, moduleurl, targetpath, ref, version, desc, failpass)
    {
        // this.id = id;
        this.type = type;
        this.file = moduleurl;
        this.targetpath = targetpath;
        this.ref = ref;
        this.version = version;
        this.desc = desc;
        this.failpass = failpass;

    };
    var _pUpdateItem = nexacro._createPrototype(nexacro.Object, nexacro.UpdateItem);
    nexacro.UpdateItem.prototype = _pUpdateItem;
    
    delete _pUpdateItem;
    //---------------------------------------------------------------------------------------
    // TypeDefinitions //CHECK
    //---------------------------------------------------------------------------------------

    nexacro.TypeDefinition = function (url, component_uri, parent)
    {
        this.name = url;
        this._component_uri = component_uri;
        this.context = parent;
        this.services = new nexacro.Collection();
    };

    var _pTypeDefinition = nexacro._createPrototype(nexacro.Object, nexacro.TypeDefinition);
    nexacro.TypeDefinition.prototype = _pTypeDefinition;    

    _pTypeDefinition.addService = function (prefixid, type, url, cachelevel, codepage, language, version, communication)
    {
        var serviceitem = new nexacro.ServiceItem(prefixid, type, url, cachelevel, codepage, language, version, communication);
        this.services.add(prefixid, serviceitem);
    };

    _pTypeDefinition.getService = function (prefixid)
    {
        return this.services[prefixid];
    };

    _pTypeDefinition.getServiceUrl = function (url)
    {
        var prefixpos = url.indexOf("::");
        if (prefixpos > 0)
        {
            var prefix = url.substring(0, prefixpos);
            var url2 = url.substring(prefixpos + 2);

            var service = this.services[prefix];
            if (service)
            {
                return service.url + url2;
            }
        }
        return url;
    };


    delete _pTypeDefinition;



    //---------------------------------------------------------------------------------------
    // Layout Object
    //---------------------------------------------------------------------------------------
    nexacro.Layout = function (name, screenid, w, h, obj, changefn) //, recoverfn)
    {
        this.name = name;
        this.screenid = screenid;
        this.width = w;
        this.height = h;
        this._form = obj;
        this.change_fn = changefn;
        //this.recover_fn = recoverfn;
        this.stepcount = 0;
        this.stepindex = 0;
    };

    var _pLayout = nexacro._createPrototype(nexacro.Object, nexacro.Layout);
    nexacro.Layout.prototype = _pLayout;
    _pLayout._type_name = "Layout";

    _pLayout.destroy = function ()
    {
        this.name = "";
        this.screenid = "";
        this.description = "";
        this.context = null;
        this.width = 0;
        this.height = 0;
        this._form = null;
        this.change_fn = null;
        //this.recover_fn = null;
        this.stepcount = 0;
        this.stepindex = 0;
    };

    _pLayout.set_name = function (v)
    {
        this.name = v;
    };

    _pLayout.set_screenid = function (v)
    {
        this.screenid = v;
    };

    _pLayout.set_description = function (v)
    {
        this.description = v;
    };

    _pLayout.set_width = function (v)
    {
        this.width = v;
    };

    _pLayout.set_height = function (v)
    {
        this.height = v;
    };

    _pLayout.set_stepcount = function (v)
    {
        v = parseInt(v) | 0;
        if (v !== this.stepcount)
        {
            if (v == "" || (+v) != (+v))
            {
                v = 0;
            }
            this.stepcount = v;
        }
    };

    _pLayout.set_stepindex = function (v)
    {
        v = parseInt(v) | 0;
        if (v != this.stepindex && v < this.stepcount)
        {
            this.stepindex = v;
        }
    };

    delete _pLayout;

    //---------------------------------------------------------------------------------------
    // LayoutManager
    //---------------------------------------------------------------------------------------
    nexacro.LayoutManager = function (context)
    {
        this.context = context;

        //------------------- internal variable ------------------ //
        this._layout_list = [];
    };
    var _pLayoutManager = nexacro._createPrototype(nexacro.Object, nexacro.LayoutManager);
    nexacro.LayoutManager.prototype = _pLayoutManager;
    _pLayoutManager._type_name = "LayoutManager";

    _pLayoutManager.checkValid = function (form, szContainer)
    {
        if (!form) return -1;

        var layout_list = form._layout_list;
        if (!layout_list) return -1;

        var layout_len = layout_list.length;
        if (layout_len == 0)
            return -1;

        if (layout_len >= 1 && layout_list[layout_len - 1].name != "default")
        {
            layout_list.add_item("default", form._default_layout);
            layout_len++;
        }

        if (layout_len <= 1) return -1;


        var pt_min_x = -1, pt_min_y = -1;
        var correct = -1;
        var layout = null;
        var distance = -1, distance_y = -1;
        var correct_org = -1;
        var count = 0;
        var over_layout_width = [], over_layout_height = [];

        var tmp_correct = -1;
        var tmp_width = 0;

        var cur_screenid = nexacro._getCurrentScreenID();
        //application._curscreen = application._searchScrInfo();

        // for루프 내부에 i == 0조건 코드 제거(기존에 0번째가 default로 수행되서 넣어놓은 코드인듯...
        // 현재는 마지막으로 이동이 되서 수정
        // 이 내용이 아니라면 원상태로 수정해야함
        tmp_correct = layout_len - 1;
        tmp_width = layout_list[tmp_correct].width;        

        for (var i = 0; i < layout_len; i++)
        {

            if (i == (layout_len - 1))
                correct_org = correct;
            layout = layout_list[i];
            
            // Screen 미지정시 모든 screen에서 후보
            // Screen 지정시 현재 screen과 일치해야함.
            if (layout.screenid.length > 0)
            {
                var layout_screenid_list = layout.screenid.split(",");
                if (layout_screenid_list.indexOf(cur_screenid) < 0)
                    continue;
            }           
                       
            if (layout.width > szContainer.cx)
            {
                if (tmp_width > layout.width)
                {
                    tmp_correct = i;
                    tmp_width = layout.width;
                }
                continue;
            }
            
            distance = szContainer.cx - layout.width;
            distance_y = szContainer.cy - layout.height;

            if (pt_min_x == -1 || pt_min_x >= distance)
            {
                if (pt_min_x == distance)
                {
                    if (pt_min_y < 0)
                    {
                        if (distance_y < 0)
                        {
                            if (pt_min_y < distance_y)
                            {
                                pt_min_y = distance_y;
                                correct = i;
                            }
                        }
                        else
                        {
                            pt_min_y = distance_y;
                            correct = i;
                        }
                    }
                    else
                    {
                        if (distance_y < 0)
                        {
                        }
                        else
                        {
                            if (pt_min_y > distance_y)
                            {
                                pt_min_y = distance_y;
                                correct = i;
                            }
                        }
                    }
                }
                else
                {

                    if (distance >= 0)
                    {
                        pt_min_x = distance;
                        pt_min_y = distance_y;
                        correct = i;
                    }
                    else
                    {
                        over_layout_width.push({ idx: i, w: distance });
                        over_layout_height.push({ idx: i, w: distance_y });
                    }
                }
            }
        }


        if (correct == -1)
        {
            var len = over_layout_width.length;
            var index = 0;
            //var over_width = 0, over_height = 0; // not use

            for (var i = 0; i < len; i++)
            {
                index = over_layout_width[i].idx;
                layout = form._layout_list[index];

                distance = Math.abs(over_layout_width[i].w);
                distance_y = Math.abs(over_layout_height[i].h);
                if (pt_min_x == -1 || pt_min_x >= distance)
                {
                    if (pt_min_x == distance)
                    {
                        if (pt_min_y < 0)
                        {
                            if (distance_y < 0)
                            {
                                if (pt_min_y < distance_y)
                                {
                                    pt_min_y = distance_y;
                                    correct = i;
                                }
                            }
                            else
                            {
                                pt_min_y = distance_y;
                                correct = i;
                            }
                        }
                        else
                        {
                            if (distance_y < 0)
                            {
                            }
                            else
                            {
                                if (pt_min_y > distance_y)
                                {
                                    pt_min_y = distance_y;
                                    correct = i;
                                }
                            }
                        }
                    }
                    else
                    {
                        pt_min_x = distance;
                        pt_min_y = distance_y;
                        correct = i;
                    }
                }
            }
        }

        
        if (correct == -1)
        {
            if (tmp_correct > -1)
                return tmp_correct;

            return -1;
        }

        else if (correct == form._layout_list.length - 1)
        {
            if (correct > -1)
            {
                return correct;
            }
            else if (correct_org == -1)
            {
                return -1;
            }

            }


        var correct_layout = form._layout_list[correct];
        if (correct_layout == null)
        {
            return -1;
        }

        if (form._cur_real_layout == correct_layout.name)
        {
            return -2;
        }

        return correct;
    };

    _pLayoutManager.changeLayout = function (form, layout)
    {
        var current_layout = null, def_layout = null;;

        if (form == null || layout == null)
            return;

        if (form._cur_real_layout == layout.name)
            return;

        if (form._current_layout_name == layout.name)
        {
            form._cur_real_layout = form._current_layout_name;
            return;
        }

       // alert(form._current_layout_name + "    " + layout.name);

        
        if (form._current_layout_name == "")
            form._current_layout_name = "default";


        if (form._current_layout_name == "default")
        {
            current_layout = form._default_layout;
        }
        else
        {
            current_layout = form._layout_list.get_item(form._current_layout_name);
            def_layout = form._default_layout;
        }

        if (current_layout == null)
            return;

        this.loadLayout(form, current_layout, layout, def_layout);

        form._current_layout_name = layout.name;
        form._cur_real_layout = layout.name;
    };

    _pLayoutManager.loadLayout = function (form, cur, target, def)
    {
        var old_stepindex = -1, old_stepcount = 0;
        var new_stepindex = -1, new_stepcount = 0;
        if (cur)
        {
            old_stepindex = cur.stepindex;
            old_stepcount = cur.stepcount;
        }
        if (target)
        {
            new_stepindex = target.stepindex;
            new_stepcount = target.stepcount;

            if (form._layout_list.length > 0)
        form.on_fire_onbeforelayoutchange(form, "onbeforelayoutchange", cur, target.name);
        }

        form._on_prepare_stepcontents(old_stepcount, old_stepindex, new_stepcount, new_stepindex);

        if (form._layout_list.length > 0)
        {
            if (def && def.change_fn)
            {
                def.change_fn.call(this, form);
            }
        if (target && target.change_fn)
        {
            target.change_fn.call(this, form);
        }
        }

        form._on_refresh_stepcontents(old_stepcount, old_stepindex, new_stepcount, new_stepindex);
    };

    _pLayoutManager.getNormalLayout = function (form)
    {
        var len = form._layout_list.size();
        for (var i = 0; i < len; i++)
        {
            if (this.GetLayoutName(form, i) == "default")
            {
                return form._layout_list.get_item(i);
            }
        }

        return undefined;
    };

    _pLayoutManager.getLayoutName = function (form, nIdx)
    {
        if (form == null)
        {
            return "";
        }

        return form._layout_list[nIdx].name;
    };

    _pLayoutManager.clearLayout = function (form)
    {
        if (form == null)
        {
            return;
        }
        var layout_list = form._layout_list;
        var len = layout_list.length;
        for (var i = 0; i < len; i++)
        {   
            var layout = layout_list.get_item(i);
            layout.destroy();
        }
        form._layout_list.clear();
    };

    _pLayoutManager.getCurrentLayout = function (form)
    {
        var idx = this.checkValid(form, { cx: form._adjust_width, cy: form._adjust_height });
        var layout = form._layout_list[form._current_layout_name];

        return layout || form._default_layout;
    };

    _pLayoutManager.getStepCount = function (form)
    {
        if (!form) return 0;

        var current_layout = this.getCurrentLayout(form);
        if (current_layout)
        {
            return current_layout.stepcount;
        }
        else
        {
            return 0;
        }
    };
    _pLayoutManager.getCurrStepIndex = function (form)
    {
        if (!form) return 0;

        var current_layout = this.getCurrentLayout(form);
        if (current_layout)
        {
            return current_layout.stepindex;
        }
        else
        {
            return 0;
        }
    };

    _pLayoutManager.setStepIndex = function (form, index)
    {
        if (!form)
        {
            return;
        }

        var current_layout = this.getCurrentLayout(form)
        var stepcount = this.getStepCount(form);

        if (index < 0)
        {
            index = current_layout.stepindex;
        }
        if (stepcount < 0)
        {
            return;
        }

        current_layout.stepindex = index;
    };

    _pLayoutManager.__onbeforelayoutchange = function (obj, e)
    {
        if (obj)
        {
            var current_layout = this.getCurrentLayout(obj);
            obj._updateStepManager(current_layout);
        }
    };

    _pLayoutManager.__onlayoutchanged = function (obj, e)
    {
        var stepmanager = obj._stepmanager
        if (stepmanager)
        {
            stepmanager.initPositionStep();
        }
    }

    delete _pLayoutManager;

    //==============================================================================
    // nexacro.Window
    //==============================================================================
    nexacro.Window = function (id, parent, is_main)
    {
        this.id = this.name = id;
        this.parent = parent;
        this.frame = null;
        this.left = 0;
        this.top = 0;
        this.width = 0;
        this.height = 0;
        this.clientWidth = 0;
        this.clientHeight = 0;

        //------------ internal variable --------------//
        this._handle = null;
        this._doc = null;
        this._dest_doc = null;
        this._dest_handle = null;
        this._is_window = true;
        this._is_alive = true;
        this._is_main = (is_main || false);
        this._Init_sysevent_flag = false;
        this._prepared_flag = false;

        this._custom_node_left = 0;
        this._custom_node_top = 0;
        this._custom_node_id = null;
        this._custom_node = null;

        this._offset_client_width = -1;
        this._offset_client_height = -1;

        this._gap_client_width = 0;
        this._gap_client_height = 0;
        this._is_killfocusing = false;

        this._focus_list = null;
        this._child_list = new nexacro.Collection(); // child nexacro.Window list (for modeless,modalAsync)
        this._lock_list = [];   // locked parent list
        this._locker_list = []; // window list that locked me
        this._disable_ref = 0;  // locked refcount (for modalAsync)
        this._capture_complist = []; // event capturing component list (stack) [comp, capturelevel]

        this._last_focused_elem = null; // for Forwarding KeyEvent 

        this._cur_screen_pos = { "x": undefined, "y": undefined }; // for Checking mousemove event
        this._cur_client_pos = { "x": undefined, "y": undefined }; // for Checking mousemove event
        this._cur_touch_elem = null;
        this._cur_ldown_elem = null; // for current lbuttondown element
        this._cur_rdown_elem = null; // for current rbuttondown element
        this._cur_mdown_elem = null; // for current mousedown element except for lbutton and rbutton
        this._curWindowX = null; //save x at lbuttondown for track
        this._curWindowY = null; //save x at lbuttondown for track
        this._currentTouchEvents = [];

        this._modal_frame_stack = []; // stack of ModalFrameInfo
        this._ignore_close_confirm = false; // [I'm closing by parent] flag

        // init initial event handler
        // changed by capture element -> restore by release capture
        this._on_sys_lbuttondown = this._on_default_sys_lbuttondown;
        this._on_sys_rbuttondown = this._on_default_sys_rbuttondown;
        this._on_sys_lbuttonup = this._on_default_sys_lbuttonup;
        this._on_sys_rbuttonup = this._on_default_sys_rbuttonup;
        this._on_sys_mouseup = this._on_default_sys_mouseup;
        this._on_sys_mousedown = this._on_default_sys_mousedown;
        this._on_sys_mouseenter = this._on_default_sys_mouseenter;
        this._on_sys_mouseleave = this._on_default_sys_mouseleave;
        this._on_sys_mousemove = this._on_default_sys_mousemove;
        this._on_sys_mousewheel = this._on_default_sys_mousewheel;
        this._on_sys_dragenter = this._on_default_sys_dragenter; // System DragDrop
        this._on_sys_dragover = this._on_default_sys_dragover; // System DragDrop
        this._on_sys_dragleave = this._on_default_sys_dragleave; // System DragDrop
        this._on_sys_drop = this._on_default_sys_drop; // System DragDrop
        this._on_sys_keydown = this._on_default_sys_keydown;
        this._on_sys_keypress = this._on_default_sys_keypress;
        this._on_sys_keyup = this._on_default_sys_keyup;
        //this._on_sys_click = this._on_default_sys_click;
        this._on_sys_dblclick = this._on_default_sys_dblclick;
        this._on_sys_contextmenu = this._on_default_sys_contextmenu;

        this._on_sys_resize = this._on_default_sys_resize;
        this._on_sys_move = this._on_default_sys_move;
        this._on_sys_getminmaxinfo = this._on_default_sys_getminmaxinfo;
        this._on_sys_activate = this._on_default_sys_activate;
        this._on_sys_deactivate = this._on_default_sys_deactivate;
        this._on_sys_beforeclose = this._on_default_sys_beforeclose;
        this._on_sys_close = this._on_default_sys_close;

        this._on_sys_reload = this._on_default_sys_reload;
        this._on_sys_syscommand = this._on_default_sys_syscommand;

        this._on_sys_touchstart = this._on_default_sys_touchstart;
        this._on_sys_touchmove = this._on_default_sys_touchmove;
        this._on_sys_touchend = this._on_default_sys_touchend;
        this._on_sys_touchcancel = this._on_default_sys_touchcancel;

        this._on_sys_load = this._on_default_sys_load;
        this._on_sys_orientationchange = this._on_default_sys_orientationchange;
    };

    var _pWindow = nexacro._createPrototype(nexacro.Object, nexacro.Window);
    nexacro.Window.prototype = _pWindow;
    _pWindow._type_name = "Window";

    //------------------------------------------------------------------------------
    _pWindow.attachHandle = function (_handle)
    {
        if (!this._handle)
        {
            var custom_node = this._custom_node;
            this._handle = _handle;
            this._doc = this._dest_doc = nexacro._getWindowDocumentHandle(_handle);
            this._dest_handle = nexacro._getWindowDestinationHandle(_handle, this._custom_node_id);

            this.left = custom_node ? 0 : nexacro._getWindowHandlePosX(_handle);
            this.top = custom_node ? 0 : nexacro._getWindowHandlePosY(_handle);
            this.width = nexacro._getWindowHandleOuterWidth(_handle, this._custom_node_id);
            this.height = nexacro._getWindowHandleOuterHeight(_handle, this._custom_node_id);
            var clientWidth = nexacro._getWindowHandleClientWidth(_handle, this._custom_node_id);
            var clientHeight = nexacro._getWindowHandleClientHeight(_handle, this._custom_node_id);
            this.clientWidth = (clientWidth == 0) ? this.width : clientWidth;
            this.clientHeight = (clientHeight == 0) ? this.height : clientHeight;
            this._gap_client_width = this.width - this.clientWidth;
            this._gap_client_height = this.height - this.clientHeight;
        }
    };

    _pWindow.attachFrame = function (frame, refresh_flag)
    {
        this.frame = frame;
        if (refresh_flag)
            this._onPrepareWindowHandle();
    };

    _pWindow._setSystemMenuResizable = function (resizable)
    {
        nexacro._setSystemMenuResizable(this._handle, resizable);
    };

    _pWindow._procSysCommand = function (command)
    {
        nexacro._procSysCommand(this._handle, command);
    };

    _pWindow._onPrepareWindowHandle = function ()
    {
        if (!this._prepared_flag)
        {
            this._prepared_flag = true;

            if (this.frame)
                this.frame.on_created();

        }
    };

    _pWindow.refresh = function ()
    {
        if (this._handle && this._prepared_flag && this.frame)
        {
            this.frame.on_refresh();
        }
    };


    _pWindow.setLinkedWindow = function (_handle)
    {
        nexacro._setLinkedWindow(_handle, this);
        this.attachHandle(_handle);
    };

    _pWindow.addChild = function (childwin)
    {
        this._child_list.add_item(childwin.name, childwin);
    };

    _pWindow.create = function (_parent, name, width, height, left, top, resizable, layered, taskbar)
    {
        var _handle = null;
        if (_parent)
        {
            _handle = _parent._handle;
            _parent._child_list.add_item(name, this);
        }
        nexacro._createWindowHandle(_parent, this, name, left, top, width, height, resizable, layered, taskbar, this._is_main);
    };


    _pWindow.createModal = function (_parent, name, width, height, left, top, resizable, layered, lockmode)
    {
        var _handle = null;
        if (_parent)
        {
            _handle = _parent._handle;
            _parent._child_list.add_item(name, this);
        }
        return nexacro._createModalWindowHandle(_parent, this, name, left, top, width, height, resizable, layered, lockmode);
    };

    _pWindow.createModalAsync = function (_parent, name, width, height, left, top, resizable, layered, lockmode)
    {
        var _handle = null;
        if (_parent)
        {
            _handle = _parent._handle;
            _parent._child_list.add_item(name, this);
        }

        // lock windows
        var root_win = this; // 생성될 window의 root
        while (root_win.parent)
            root_win = root_win.parent;

        // parent=null인 경우 runbase를 parent로..
        if (_parent)
            this._lock_list[0] = root_win;
        else
            this._lock_list[0] = this.frame._runbase_window;

        if (lockmode == 1) // lock=all
        {
            for (var i = 0; i < application.popupframes.length; i++)
            {
                var popup_frame = application.popupframes[i];
                var popup_win = popup_frame._window;
                if (popup_win == this)
                    continue;
                var popup_root = popup_win;
                while (popup_root.parent)
                    popup_root = popup_root.parent;
                if (popup_root == root_win)
                    continue;
                if (nexacro._indexOf(this._lock_list, popup_root) < 0)
                    this._lock_list.push(popup_root);
            }
        }

        // create handle (for except from locklist)
        nexacro._createModalAsyncWindowHandle(_parent, this, name, left, top, width, height, resizable, layered, lockmode);

    };

    _pWindow.destroy = function ()
    {
        // ModalAsync callback처리시 IE에서 문제가 있어서 2개 파트로 나눔
        if (!this._is_alive)
            return;

        this._destroyVisiblePart();
        this._destroyInternalPart();
    };

    _pWindow._destroyVisiblePart = function ()
    {
        if (!this._is_alive)
            return;

        this._is_alive = false;

        // destroy childs
        this._closeChildWindows();

        // unlock if modalAsync
        if (this._lock_list.length > 0)
        {
            var locklen = this._lock_list.length;
            for (var i = locklen - 1; i >= 0; i--)
            {
                var locked_window = this._lock_list[i];
                if (!locked_window || !locked_window.frame)
                    continue;
                nexacro._setWindowHandleLock(locked_window._handle, false, this._handle, true);
            }
        }

        // close handle
        if (this._handle)
        {
            var repeatInfo = nexacro._cur_repeat_info;
            if (repeatInfo && repeatInfo.targetwin == this)
            {
                if (repeatInfo._timer)
                {
                    nexacro._clearSystemTimer(this._handle, repeatInfo._timer);
                }
            }


            nexacro._closeWindowHandle(this._handle);
        }
    };

    _pWindow._destroyInternalPart = function ()
    {

        application._removeProtocols();

        if (this.parent)
            this.parent._child_list.delete_item(this.id);

        // destroy modal frames
        var modal_frame_stack = this._modal_frame_stack;
        var modal_frame_stack_len = modal_frame_stack.length;
        for (var i = modal_frame_stack_len - 1; i >= 0; i--)
        {
            var modal_frame_info = modal_frame_stack[i];
            var frame = modal_frame_info[0];
            if (frame._is_alive)
                frame._destroy();
        }

        // destroy Self
        if (this.frame)
        {
            application._unregisterPopupFrame(this.frame.id);
            if (!this.frame._is_main)
                this.frame._on_close();

            if (this.frame._is_alive)
                this.frame._destroy();

        }

        nexacro._destroyManagerFrame(this._handle);

        this._doc = this._dest_doc = null;
        this._dest_handle = null;
        this.parent = null;
        this._custom_node = null;

        //////////////////////////////////////////////////////////////////////////
        // clear event handlers
        this._on_sys_lbuttondown = null;
        this._on_sys_rbuttondown = null;
        this._on_sys_lbuttonup = null;

        this._on_sys_drag_lbuttonup = null;

        this._on_sys_rbuttonup = null;
        this._on_sys_mouseup = null;
        this._on_sys_mousedown = null;
        this._on_sys_mouseenter = null;
        this._on_sys_mouseleave = null;
        this._on_sys_mousemove = null;

        this._on_sys_drag_mousemove = null;

        this._on_sys_mousewheel = null;

        this._on_sys_dragenter = null;
        this._on_sys_dragmove = null;
        this._on_sys_dragleave = null;
        this._on_sys_drop = null;

        this._on_sys_keydown = null;
        this._on_sys_keypress = null;
        this._on_sys_keyup = null;
        this._on_sys_click = null;
        this._on_sys_dblclick = null;
        this._on_sys_contextmenu = null;
        this._on_sys_resize = null;
        this._on_sys_move = null;
        this._on_sys_activate = null;
        this._on_sys_deactivate = null;

        this._on_sys_getminmaxinfo = null;
        this._on_sys_reload = null;
        this._on_sys_syscommand = null;
        this._on_sys_load = null;
        this._on_sys_orientationchange = null;
    };

    //------------------------------------------------------------------------------
    _pWindow.moveBy = function (dx, dy)
    {
        if (this._handle && dx && dy)
        {
            var l = this.left + (dx | 0);
            var t = this.top + (dy | 0);
            nexacro._setWindowHandlePos(this._handle, l, t);
            this.left = nexacro._getWindowHandlePosX(this._handle, this._custom_node_id);
            this.top = nexacro._getWindowHandlePosY(this._handle, this._custom_node_id);
        }
    };

    _pWindow.moveTo = function (l, t)
    {
        if (this._handle)
        {
            if (l === undefined || l === null) l = this.left;
            if (t === undefined || t === null) t = this.top;
            nexacro._setWindowHandlePos(this._handle, l, t);
            this.left = nexacro._getWindowHandlePosX(this._handle, this._custom_node_id);
            this.top = nexacro._getWindowHandlePosY(this._handle, this._custom_node_id);
        }
    };

    _pWindow.setArea = function (l, t, w, h)
    {
        if (this._handle)
        {
            if (l === undefined || l === null) l = this.left;
            if (t === undefined || t === null) t = this.top;
            if (w === undefined || w === null) w = this.width;
            if (h === undefined || h === null) h = this.height;
            nexacro._setWindowHandleArea(this._handle, l, t, w, h);
            this.left = nexacro._getWindowHandlePosX(this._handle, this._custom_node_id);
            this.top = nexacro._getWindowHandlePosY(this._handle, this._custom_node_id);
            this.width = nexacro._getWindowHandleOuterWidth(this._handle, this._custom_node_id);
            this.height = nexacro._getWindowHandleOuterHeight(this._handle, this._custom_node_id);
            this.clientWidth = nexacro._getWindowHandleClientWidth(this._handle, this._custom_node_id);
            this.clientHeight = nexacro._getWindowHandleClientHeight(this._handle, this._custom_node_id);
            this._gap_client_width = this.width - this.clientWidth;
            this._gap_client_height = this.height - this.clientHeight;
        }
    };
    _pWindow.setSize = function (w, h)
    {
        if (this._handle)
        {
            if (w === undefined || w === null) w = this.width;
            if (h === undefined || h === null) h = this.height;
            nexacro._setWindowHandleSize(this._handle, w, h);
            this.width = nexacro._getWindowHandleOuterWidth(this._handle, this._custom_node_id);
            this.height = nexacro._getWindowHandleOuterHeight(this._handle, this._custom_node_id);
            this.clientWidth = nexacro._getWindowHandleClientWidth(this._handle, this._custom_node_id);
            this.clientHeight = nexacro._getWindowHandleClientHeight(this._handle, this._custom_node_id);
            this._gap_client_width = this.width - this.clientWidth;
            this._gap_client_height = this.height - this.clientHeight;
        }
    };

    _pWindow.setZIndex = function (zindex)
    {
        if (this.zindex != zindex)
        {
            this.zindex = zindex;
            var _handle = this._handle;
            if (_handle)
            {
                nexacro._setWindowHandleZIndex(_handle, zindex);
            }
        }
    };

    _pWindow.getLeft = function ()
    {
        if (this._handle)
            this.left = nexacro._getWindowHandlePosX(this._handle, this._custom_node_id);
        return this.left;
    };
    _pWindow.getTop = function ()
    {
        if (this._handle)
            this.top = nexacro._getWindowHandlePosY(this._handle, this._custom_node_id);
        return this.top;
    };
    _pWindow.getWidth = function ()
    {
        return this.width;
    };
    _pWindow.getHeight = function ()
    {
        return this.height;
    };

    _pWindow.getClientWidth = function ()
    {
        return this.clientWidth;
    };
    _pWindow.getClientHeight = function ()
    {
        return this.clientHeight;
    };

    _pWindow.setVisible = function (visible)
    {
       
    };


    _pWindow.getActiveFrame = function ()
    {
        var frame = this._getLastModalFrame();
        if (frame)
            return frame;

        frame = this.frame;
        while (frame && frame.getActiveFrame)
        {
            frame = frame.getActiveFrame();
        }
        return frame;
    };

    _pWindow.getCurrentFocusPaths = function ()
    {
        return this._focus_list;
    };

    _pWindow.addCurrentFocusPaths = function (obj)
    {
        if (this._focus_list == null)
            this._focus_list = [];
        this._focus_list.push(obj);
    };
    _pWindow.clearCurrentFocusPaths = function ()
    {
        if (this._focus_list)
        {
            var obj = this._focus_list.pop();
            while (obj)
            {
                obj = null;
                obj = this._focus_list.pop();
            }
            this._focus_list.length = 0;
        }
    };

    // FocusPath에서 obj포함 그 이하를 모두 제거한다.
    _pWindow._removeFromCurrentFocusPath = function (obj, clear_last_focus, new_focus, new_refer_focus)
    {
        if (clear_last_focus === undefined)
            clear_last_focus = true;
        var idx = this._indexOfCurrentFocusPaths(obj);
        if (idx > -1 || (idx == -1 && obj === null))
        {
            // KillFocus처리까지
            var min_idx = (idx > -1) ? idx : 0;
            var focuspath_len = this._getCurrentFocusPathsLength() - 1;            
            for (var i = focuspath_len; i >= min_idx; i--)
            {
                var comp = this._focus_list[i];
                if (comp)
                {
                    if (comp._is_alive && !comp._isSelected())
                    {
                        if (comp._is_subcontrol)
                        {                           
                            var tmp_comp = comp;
                            var alive = true;

                            while (tmp_comp)
                            {
                                if (tmp_comp._is_alive == false)
                                {
                                    alive = false;
                                    break;
                                }
                                tmp_comp = tmp_comp.parent;
                            }

                            if (alive)
                        comp._stat_change("notfocus", "normal");
                    }
                        else
                        {
                            if (comp._is_alive)
                                comp._stat_change("notfocus", "normal");
                        }
                    }
                    if (idx > -1)
                        --this._focus_list.length;

                    if (comp._is_alive && comp._on_killfocus)
                    	comp._on_killfocus(new_focus, new_refer_focus);

                    if (comp.parent && clear_last_focus === true)
                    {
                        // showmodal의 경우 parent를 지정하게 되면 showmodal이 close될때 parent의 _last_focused를 지우게 됨.
                        // 이에 focusPath의 최상단의 경우 물려있는 _last_focused가 focuspath상에서 제거하려는 component와 동일한지 비교하여 같은 경우에만 제거
                        if (i > min_idx || comp.parent._last_focused == comp)
                        {
                            comp.parent._last_focused = null;
                        }
                    }
                }
            }

        }
    }

    _pWindow._indexOfCurrentFocusPaths = function (obj)
    {
        if (this._focus_list)
        {
            return nexacro._indexOf(this._focus_list, obj);
        }

        return -1;
    };

    _pWindow._getCurrentFocusPathsLength = function ()
    {
        if (this._focus_list)
            return this._focus_list.length;
        return 0;
    };

    // visible, enable, enableevent를 무시하고 component를 찾아냄.
    _pWindow.findComponent = function (elem, x, y)
    {
        if (x === undefined && y === undefined)
        {
            var tmp = elem;
            while (tmp && !tmp._is_component)
            {
                tmp = tmp.parent;
            }
            return tmp;
        }
        else
        {
            if (!elem) return [elem, x, y];
            var tmp = elem;
            while (tmp && !tmp._is_component)
            {
                x += tmp.left;
                y += tmp.top;
                x -= tmp._scroll_left || 0;
                y -= tmp._scroll_top || 0;
                tmp = tmp.parent;
            }
            if (!tmp) return [tmp, x, y];
            var control_elem = tmp._control_element;
            if (control_elem)
            {
                x -= control_elem.left;
                y -= control_elem.top;
            }
            if (tmp instanceof nexacro.Form)
            {
                x += elem._scroll_left ? elem._scroll_left : 0;
                y += elem._scroll_top ? elem._scroll_top : 0;
            }
            return [tmp, x, y];
        }
    };

    // 실제 이벤트가 발생할 수 있는 컴포넌트를 찾아냄.
    _pWindow._findComponentForEvent = function (elem, x, y)
    {
        if (x === undefined && y === undefined)
        {
            var tmp = elem;
            while (tmp)
            {
                if (tmp && tmp._is_component)
                {
                    if (tmp.visible && tmp._isEnable() && tmp.enableevent)
                        break;
                }
                tmp = tmp.parent;
            }
            return tmp;
        }
        else
        {
            if (!elem) return [elem, x, y];
            var tmp = elem;
            var is_passed = false;
            while (tmp)
            {
                if (!tmp._is_component)
                {
                    x += tmp.left;
                    y += tmp.top;
                    x -= tmp._scroll_left || 0;
                    y -= tmp._scroll_top || 0;

                    tmp = tmp.parent;
                }
                else
                {
                    if (tmp.visible && tmp._isEnable() && tmp.enableevent)
                        break;
                    else
                        is_passed = true;
                    x = y = 0;
                    tmp = tmp._control_element._parent_elem;
                }
            }
            if (!tmp) return [tmp, x, y];
            var control_elem = tmp._control_element;
            if (control_elem)
            {
                x -= control_elem.left;
                y -= control_elem.top;
            }
            if (is_passed)
                return [tmp, x, y, true];
            return [tmp, x, y];
        }
    };

    _pWindow._flashWindow = function (type, count, interval)
    {
        return nexacro._flashWindow(this._handle, type, count, interval);
    };



    _pWindow._closeChildWindows = function (is_close_all)
    {
        if (is_close_all)
        {
            var child_len = application.popupframes.length;
            for (var i = child_len - 1; i >= 0; i--)
            {
                var child = application.popupframes[i]._window;
                if (child && child.frame && child.frame._is_alive)
                {
                    child._ignore_close_confirm = true;
                    child.frame._destroy();
            }
        }
        }
        else
        {
            // destroy My Child window..
            var child_len = this._child_list.length;
            for (var i = child_len - 1; i >= 0; i--)
            {
                var child = this._child_list[i];
                if (!child || child.parent != this) // possible?
                    continue;

                if (child.frame && child.frame._is_alive)
                {
                    child._ignore_close_confirm = true;
                    child.frame._destroy();
            }
        }
        }
    };

    _pWindow._setTitleText = function (titletext)
    {
        if (this._handle)
        {
            return nexacro._setWindowHandleText(this._handle, titletext);
        }
    };

    _pWindow._setStatusText = function (statustext)
    {
        if (this._handle)
        {
            return nexacro._setWindowHandleStatusText(this._handle, statustext);
        }
    };

    _pWindow._resetScroll = function ()
    {
        var form = application.getActiveForm();
        if (form)
        {
            var focus_comp = form.getFocus();
            if (focus_comp)
            {
                focus_comp._resetScrollPos(
                    focus_comp,
                    focus_comp._adjust_left,
                    focus_comp._adjust_top,
                    focus_comp._adjust_left + focus_comp._adjust_width,
                    focus_comp._adjust_top + focus_comp._adjust_height);
            }
        }
    };

    _pWindow._setCaptureLock = function (comp, capture_mouse, capture_key)
    {
        var ar = this._capture_complist;
        if (ar.length > 0)
        {
            var last_capture_info = ar[ar.length - 1];

            // WaitCursor가 나와있는데 Popup이 뜨는 경우
            if (last_capture_info[0] instanceof nexacro.WaitComponent)
            {
                // insert
                ar.length = ar.length + 1;
                ar[ar.length - 1] = ar[ar.length - 2];
                ar[ar.length - 2] = [comp, capture_mouse, capture_key];
                return;
            }
        }

        ar.push([comp, capture_mouse, capture_key]);
    };

    _pWindow._releaseCaptureLock = function (comp)
    {
        var ar = this._capture_complist;
        var len = ar.length;
        for (var i = len - 1; i >= 0; i--)
        {
            if (ar[i][0] == comp)
            {
                ar[i][0] = null;
                // pop
                ar.splice(i, 1);                
                break;
            }
        }
    };

    // for showModalWindow
    _pWindow._setModalLock = function (modal_frame, overlaycolor)
    {
        // lock되는 frame
        var frame = this.frame;
        if (frame)
        {
            var elem = frame._control_element;
            if (elem)
            {
                this._on_modalLock();

                // calc zindex
                var zindex = nexacro._zindex_firstmodal;
                var modal_stack = this._modal_frame_stack;
                if (modal_stack.length > 0)
                {
                    // Overlay의 zindex는 1e6+2 부터 1씩 증가
                    zindex = modal_stack[modal_stack.length - 1][1] + 1;
                }

                // WaitCursor가 있을 경우 WaitCursor의 앞에 insert 해야함.
                var ref_dest_handle;
                if (frame._waitcomp)
                {
                    var waitcomp = frame._waitcomp;
                    if (waitcomp._control_element && waitcomp._control_element._handle)
                        ref_dest_handle = waitcomp._control_element._handle;
                }

                var modal_overlay_elem = frame._modal_overlay_elem = new nexacro.ModalOverlayElement(elem);
                modal_overlay_elem.setLinkedControl(frame);
                modal_overlay_elem.create(zindex, overlaycolor, ref_dest_handle);

                this._modal_frame_stack.push([frame, zindex, null]);

                elem._refreshForeground(elem._handle);
                frame.on_apply_pseudo(frame._pseudo);
            }
        }
    };

    _pWindow._setModalUnlock = function ()
    {
        var frame = this.frame;
        if (frame)
        {
            var elem = frame._control_element;
            if (elem)
            {
                // destroy overlay
                var modal_stack = this._modal_frame_stack;
                var modal_stack_len = modal_stack.length;
                var modal_info;
                for (var i = 0; i < modal_stack_len; i++)
                {
                    modal_info = modal_stack[i];
                    if (modal_info[0] == frame)
                    {
                        // pop
                        for (var j = i; j < modal_stack_len - 1; j++)
                        {
                            modal_stack[j] = modal_stack[j + 1];
                        }
                        modal_stack.length = modal_stack_len - 1;
                        break;
                    }
                }

                if (frame._modal_overlay_elem)
                {
                    frame._modal_overlay_elem.destroy();
                    frame._modal_overlay_elem = null;
                }

                elem._refreshForeground(elem._handle);
            }
        }
    };

    _pWindow._getCaptureComp = function (capture_mouse, capture_key, event_target_comp)
    {
        var ar = this._capture_complist;
        var len = ar.length;
        var comp;
        for (var i = len - 1; i >= 0; i--)
        {
            var info = ar[i];
            if (capture_mouse == true && info[1] == true)
            {
                comp = info[0];
                break;
            }
            if (capture_key == true && info[2] == true)
            {
                comp = info[0];
                break;
            }
        }

        if (comp)
        {
            // 이벤트 대상이 캡쳐 컴포넌트의 child인 경우, 그냥 이벤트 대상을 리턴. 직접 처리
            if (comp._contains(event_target_comp))
                return event_target_comp;
            return comp;
        }

        return null;
    };

    _pWindow._getLastModalFrame = function ()
    {
        if (this._modal_frame_stack.length > 0)
        {
            var modal_info = this._modal_frame_stack[this._modal_frame_stack.length - 1];
            return modal_info[0];
        }

        return null;
    };

    _pWindow._getComponentLayerInfo = function (comp)
    {
        var form = comp ? comp._refform : null;
        var frame = form ? form.getOwnerFrame() : null;
        if (!frame)
            return null;

        frame = frame._getRootLayerFrame();
        var is_modal = (frame._window_type == 1 || frame._window_type == 4);

        var layer_info = {};
        layer_info.frame = frame;
        layer_info.is_modal = is_modal;
        layer_info.popup_zindex = nexacro._zindex_popup;

        var win = this;
        if (win._getRootWindow)
            win = win._getRootWindow();

        var modal_frame_stack = win._modal_frame_stack;
        layer_info.ref_first_modal_frame = (modal_frame_stack.length > 0) ? modal_frame_stack[0][0] : null;
        if (is_modal)
        {
            for (var i = 0; i < modal_frame_stack.length; i++)
            {
                if (modal_frame_stack[i][0] == frame)
                {
                    layer_info.popup_zindex = modal_frame_stack[i][1];
                    break;
                }
            }
        }

        return layer_info;
    };

    // 활성화된 Layer에 속한 컴포넌트인지 판단한다.
    _pWindow._isActiveLayerComponent = function (comp)
    {
        var form = comp ? comp._refform : null;
        var frame = form ? form.getOwnerFrame() : null;
        if (!frame)
            return false;

        var win = this;
        if (win._getRootWindow)
            win = win._getRootWindow();

        frame = frame._getRootLayerFrame();
        var is_modal = (frame._window_type == 1 || frame._window_type == 4);

        // modal이 없다고 판단.
        var modal_frame_stack = win._modal_frame_stack;
        if (modal_frame_stack.length == 0)
            return true;

        // modal이 있으면
        if (frame == win._getLastModalFrame())
            return true;

        return false;
    };

    //------------------------------------------------------------------------------
    // for Event Handlers

    _pWindow._lbuttondown_wx = 0;
    _pWindow._lbuttondown_wy = 0;
    _pWindow._click_cancel = false;
    _pWindow._last_touchid = -1;

    _pWindow._on_default_sys_lbuttondown = function (elem, strButton, altKey, ctrlKey, shiftKey, windowX, windowY, screenX, screenY)
    {
        nexacro._gap_client_height = screenY - windowY;
        nexacro._gap_client_width = screenX - windowX;

        var is_runbase = application._setRunBaseWindow(this);

        this._lbuttondown_wx = windowX;
        this._lbuttondown_wy = windowY;
        elem = (elem && elem.setSelectEventPassElement) ? elem.setSelectEventPassElement(windowX, windowY) : elem;
        this._cur_ldown_elem = elem; //save elem at lbuttondown.

        if (elem && elem._is_track)
        {
            if (application._current_popups.length > 0)
            {
                var comp = this.findComponent(elem, 0, 0);
                application._checkClosePopupComponent(comp[0], false);
                var cur_popup = application._current_popups[0];
                if (!cur_popup)
                {
                    this._click_cancel = true;
                    return;
                }
            }
            else
            {
                this._click_cancel = false;
            }

            nexacro._setTrackInfo(this, elem, windowX, windowY);
        }
        else
        {
            var comp = this.findComponent(elem, 0, 0);
            if (comp && comp[0])
            {
                if (application._current_popups.length > 0)
                {
                    application._checkClosePopupComponent(comp[0], true);
                    var cur_popup = application._current_popups[0];
                    if (!cur_popup)
                    {
                        this._click_cancel = true;
                        return;
                    }
                }
                else
                {
                    this._click_cancel = false;
                }
                var _win = comp[0]._getWindow();
                _win._curWindowX = windowX; //save x at lbuttondown for track
                _win._curWindowY = windowY; //save x at lbuttondown for track

                // node left,top 값을 win ClientArea left,top 0을 기준으로 값을 얻는 함수 Call함.
                var elem_pos = nexacro._getElementXYInWindow((comp.length == 3) ? elem._handle : comp[0]._control_element._handle);
                var canvasX = windowX - elem_pos[0] + comp[1];
                var canvasY = windowY - elem_pos[1] + comp[2];

                var capture_comp = this._getCaptureComp(true, false, comp[0]);
                if (capture_comp && capture_comp != comp[0])
                    comp[0] = capture_comp;

                comp[0]._on_lbuttondown(elem, strButton, altKey, ctrlKey, shiftKey, canvasX, canvasY, screenX, screenY);
            }
        }
        if (is_runbase && application) application._runbase_window = null;
    };

    _pWindow._on_touch_to_lbuttondown = function (elem, strButton, altKey, ctrlKey, shiftKey, windowX, windowY, screenX, screenY)
    {
        nexacro._gap_client_height = screenY - windowY;
        nexacro._gap_client_width = screenX - windowX;

        var is_runbase = application._setRunBaseWindow(this);

        this._lbuttondown_wx = windowX;
        this._lbuttondown_wy = windowY;
        elem = (elem && elem.setSelectEventPassElement) ? elem.setSelectEventPassElement(windowX, windowY) : elem;
        this._cur_ldown_elem = elem; //save elem at lbuttondown.

        if (elem && elem._is_track)
        {
            if (application._current_popups.length > 0)
            {
                var comp = this.findComponent(elem, 0, 0);
                application._checkClosePopupComponent(comp[0], false);
                var cur_popup = application._current_popups[0];
                if (!cur_popup)
                {
                    this._click_cancel = true;
                    return;
                }
            }
            else
            {
                this._click_cancel = false;
            }

            nexacro._setTrackInfo(this, elem, windowX, windowY);
        }
        else
        {
            var comp = this.findComponent(elem, 0, 0);
            if (comp && comp[0])
            {
                if (application._current_popups.length > 0)
                {
                    application._checkClosePopupComponent(comp[0], true);
                    var cur_popup = application._current_popups[0];
                    if (!cur_popup)
                    {
                        this._click_cancel = true;
                        return;
                    }
                }
                else
                {
                    this._click_cancel = false;
                }
                var _win = comp[0]._getWindow();
                _win._curWindowX = windowX; //save x at lbuttondown for track
                _win._curWindowY = windowY; //save x at lbuttondown for track

                // node left,top 값을 win ClientArea left,top 0을 기준으로 값을 얻는 함수 Call함.
                var elem_pos = nexacro._getElementXYInWindow((comp.length == 3) ? elem._handle : comp[0]._control_element._handle);
                var canvasX = windowX - elem_pos[0] + comp[1];
                var canvasY = windowY - elem_pos[1] + comp[2];

                var capture_comp = this._getCaptureComp(true, false, comp[0]);
                if (capture_comp && capture_comp != comp[0])
                    comp[0] = capture_comp;

                comp[0]._on_touch_lbuttondown(elem, strButton, altKey, ctrlKey, shiftKey, canvasX, canvasY, screenX, screenY, undefined, undefined, undefined, false);

                return { cp: comp[0], cX: canvasX, cY: canvasY };
            }
        }
        if (is_runbase && application) application._runbase_window = null;
    };

    _pWindow._on_lbuttondown = function (elem, strButton, altKey, ctrlKey, shiftKey, windowX, windowY, eventBubbles)
    {
        return true;
    };

    _pWindow._on_default_sys_rbuttondown = function (elem, strButton, altKey, ctrlKey, shiftKey, windowX, windowY, screenX, screenY)
    {
        nexacro._gap_client_height = screenY - windowY;
        nexacro._gap_client_width = screenX - windowX;

        var is_runbase = application._setRunBaseWindow(this);
        elem = (elem && elem.setSelectEventPassElement) ? elem.setSelectEventPassElement(windowX, windowY) : elem;
        this._cur_rdown_elem = elem; //save elem at lbuttondown.
        var comp = this.findComponent(elem, 0, 0);
        if (comp && comp[0])
        {
            if (application._current_popups.length > 0)
            {
                application._checkClosePopupComponent(comp[0]);
                var cur_popup = application._current_popups[0];
                if (!cur_popup)
                {
                    this._click_cancel = true;
                    return;
                }
            }
            else
            {
                this._click_cancel = false;
            }

            var elem_pos = nexacro._getElementXYInWindow((comp.length == 3) ? elem._handle : comp[0]._control_element._handle);
            var canvasX = windowX - elem_pos[0] + comp[1];
            var canvasY = windowY - elem_pos[1] + comp[2];

            var capture_comp = this._getCaptureComp(true, false, comp[0]);
            if (capture_comp && capture_comp != comp[0])
                comp[0] = capture_comp;

            comp[0]._on_rbuttondown(elem, strButton, altKey, ctrlKey, shiftKey, canvasX, canvasY, screenX, screenY);
        }
        if (is_runbase && application) application._runbase_window = null;
    };

    _pWindow._on_rbuttondown = function (elem, strButton, altKey, ctrlKey, shiftKey, windowX, windowY, eventBubbles)
    {
        return true;
    };


    _pWindow._on_default_sys_lbuttonup = function (elem, strButton, altKey, ctrlKey, shiftKey, windowX, windowY, screenX, screenY)
    {
        if (this._click_cancel)
        {
            this._click_cancel = false;
            return;
        }

        var is_runbase = application._setRunBaseWindow(this);
        var dragInfo = nexacro._cur_drag_info;
        var repeatInfo = nexacro._cur_repeat_info;
        var trackInfo = nexacro._cur_track_info;
        var extratrackInfo = nexacro._cur_extra_track_info;
        var comp, elem_pos, canvasX, canvasY;
        var _is_drag = false, _is_text, _is_select, _is_click, _is_input;

        elem = (elem && elem.setSelectEventPassElement) ? elem.setSelectEventPassElement(windowX, windowY) : elem;
        if (elem && dragInfo && dragInfo.isDragging && dragInfo.targetwin == this)
        {
            comp = this.findComponent(elem, 0, 0);
            if (comp && comp[0])
            {
                elem_pos = nexacro._getElementXYInWindow(elem._handle, this._custom_node_id);
                canvasX = windowX - elem_pos[0] + comp[1];
                canvasY = windowY - elem_pos[1] + comp[2];
                comp[0]._on_drop(elem, dragInfo.target, dragInfo.referTarget, dragInfo.data, dragInfo.userdata, strButton, altKey, ctrlKey, shiftKey, canvasX, canvasY, screenX, screenY);
                _is_drag = true;
            }
        }

        if (repeatInfo && repeatInfo.targetwin == this)
        {
            if (repeatInfo._timer)
            {
                var _handle = nexacro._getWindowHandle(this._handle);
                nexacro._clearSystemTimer(_handle, repeatInfo._timer);
            }
            repeatInfo.distX = windowX - repeatInfo.startX;
            repeatInfo.distY = windowY - repeatInfo.startY;
            repeatInfo.target._on_endrepeat(repeatInfo.refer_comp, repeatInfo.distX, repeatInfo.distY, repeatInfo.data);
            nexacro._cur_repeat_info = null;
        }

        if (trackInfo && trackInfo.targetwin == this)
        {
            trackInfo.distX = windowX - trackInfo.startX;
            trackInfo.distY = windowY - trackInfo.startY;
            trackInfo.target._on_endtrack(trackInfo.distX, trackInfo.distY, trackInfo.data);
            nexacro._cur_track_info = null;
        }

        if (extratrackInfo)
        {
            extratrackInfo.distX = windowX - extratrackInfo.startX;
            extratrackInfo.distY = windowY - extratrackInfo.startY;
            extratrackInfo.target._on_end_extratrack(extratrackInfo.distX, extratrackInfo.distY, extratrackInfo.data);
            nexacro._cur_extra_track_info = null;
        }

        var upelem = elem;
        elem = this._cur_ldown_elem;
        comp = this.findComponent(elem, 0, 0);

        if (comp && comp[0])
        {
            elem_pos = nexacro._getElementXYInWindow((comp.length == 3) ? elem._handle : comp[0]._control_element._handle);
            canvasX = windowX - elem_pos[0] + comp[1];
            canvasY = windowY - elem_pos[1] + comp[2];

            var capture_comp = this._getCaptureComp(true, false, comp[0]);
            if (capture_comp && capture_comp != comp[0])
                comp[0] = capture_comp;

            // Logical onclick Event 
            // defaultprevented 처리 하면 default action인 click을 제어한다.
            var component = comp[0];
            if (component._is_subcontrol)
            {
                component = component._getFromComponent(component);
            }

            comp[0]._on_lbuttonup(elem, strButton, altKey, ctrlKey, shiftKey, canvasX, canvasY, screenX, screenY, undefined, undefined, undefined, upelem);

            if (!component.onlbuttonup || (component.onlbuttonup && !component.onlbuttonup.defaultprevented))
            {
                var downcomp = comp;
                var upcomp = this.findComponent(upelem, 0, 0);
                // pseudo 변경 시 IE에서 stretch , quad에 따라서 destroy 후 create 하는 경우 mouseout event 발생. 
                // 이로 인해 up되는 시점에 upelem을 정상적으로 전달 못하고 mainframe을 넘기는 경우 발생. 예외 처리 
                if (upcomp[0] && upcomp[0]._is_main && downcomp != upcomp)
                {
                    upcomp = comp;
                }

                if (downcomp && downcomp[0] && upcomp && upcomp[0] && downcomp[0] == upcomp[0])
                {
                    elem_pos = nexacro._getElementXYInWindow((upcomp.length == 3) ? upelem._handle : upcomp[0]._control_element._handle);
                    canvasX = windowX - elem_pos[0] + upcomp[1];
                    canvasY = windowY - elem_pos[1] + upcomp[2];
                    
                    _is_text = elem.getElementValue && !elem.getElementValue();
                    _is_select = this._lbuttondown_wx != windowX || this._lbuttondown_wy != windowY;
                    _is_click = this._lbuttondown_wx == windowX && this._lbuttondown_wy == windowY;
                    _is_input = elem instanceof nexacro.InputElement;

                    if (!_is_input || _is_click || _is_drag || (!_is_drag && _is_select && _is_text))
                    {
                        upcomp[0]._on_click(upelem, strButton, altKey, ctrlKey, shiftKey, canvasX, canvasY, screenX, screenY);
                    }
                }
            }
            _is_drag = false;

            if (comp[0]._is_alive)
                comp[0]._on_last_lbuttonup();
        }

        nexacro._cur_drag_info = null;
        this._cur_ldown_elem = null; //clear elem at lbuttondown.
        this._lbuttondown_wx = null;
        this._lbuttondown_wy = null;
        this._curWindowX = null;
        this._curWindowY = null;

        if (is_runbase && application) application._runbase_window = null;
    };

    // System DragDrop: OS -> Platform Window
    _pWindow._on_default_sys_dragenter = function (elem, strButton, altKey, ctrlKey, shiftKey, windowX, windowY, screenX, screenY, filelist)
    {
        // just set up draginfo

        // targetwin, target_elem, windowX, windowY, dragimage, imagealign
        nexacro._setDragInfo(this, elem, windowX, windowY, null, null);

        // create dragdata
        var dragdata = new nexacro.DragDataObject;

        // 현재 filedrop만 지원. 차후 확장 여부는 불확실함.
        dragdata.setData("filedrop", filelist);

        // 외부 Drag 이므로 컴포넌트에 허락받을 필요가 없다.
        var dragInfo = nexacro._cur_drag_info;
        dragInfo.isDragging = true;
        dragInfo.target = null;
        dragInfo.referTarget = null;
        dragInfo.data = dragdata;
        dragInfo.userdata = null;

        dragInfo._cur_elem = elem;
    };

    // System DragDrop: Move inside of Platform Window
    _pWindow._on_default_sys_dragover = function (elem, strButton, altKey, ctrlKey, shiftKey, windowX, windowY, screenX, screenY)
    {
        var dragInfo = nexacro._cur_drag_info;
        if (dragInfo && dragInfo.targetwin == this)
        {
            var comp = this.findComponent(elem, 0, 0);
            if (dragInfo._cur_elem != elem)
            {
                var old_elem = dragInfo._cur_elem;
                var old_comp = this.findComponent(old_elem, 0, 0);
                if (old_comp && old_comp[0])
                {
                    if (old_comp[0] != comp[0])
                    {
                        // leave
                        var elem_pos = nexacro._getElementXYInWindow((comp.length == 3) ? elem._handle : old_comp[0]._control_element._handle);
                        var canvasX = windowX - elem_pos[0] + old_comp[1];
                        var canvasY = windowY - elem_pos[1] + old_comp[2];
                        old_comp[0]._on_dragleave(elem, comp, dragInfo.target, dragInfo.referTarget, dragInfo.data, dragInfo.userdata, strButton, altKey, ctrlKey, shiftKey, canvasX, canvasY, screenX, screenY);

                        // enter
                        if (comp && comp[0])
                        {
                            elem_pos = nexacro._getElementXYInWindow((comp.length == 3) ? elem._handle : comp[0]._control_element._handle);
                            canvasX = windowX - elem_pos[0] + comp[1];
                            canvasY = windowY - elem_pos[1] + comp[2];
                            comp[0]._on_dragenter(elem, old_comp, dragInfo.target, dragInfo.referTarget, dragInfo.data, dragInfo.userdata, strButton, altKey, ctrlKey, shiftKey, canvasX, canvasY, screenX, screenY);
                        }
                    }
                }
            }

            dragInfo._cur_elem = elem;
            if (comp && comp[0])
            {
                var elem_pos = nexacro._getElementXYInWindow((comp.length == 3) ? elem._handle : comp[0]._control_element._handle);
                var canvasX = windowX - elem_pos[0] + comp[1];
                var canvasY = windowY - elem_pos[1] + comp[2];

                if (comp[0]._isRtl())
                {
                    canvasX = elem.width - canvasX;
                }

                comp[0]._on_dragmove(elem, dragInfo.target, dragInfo.referTarget, dragInfo.data, dragInfo.userdata, strButton, altKey, ctrlKey, shiftKey, canvasX, canvasY, screenX, screenY);
            }
        }
    };

    // System DragDrop: Go out from Platform Window
    _pWindow._on_default_sys_dragleave = function ()
    {
        nexacro._cur_drag_info = null;
    };

    // System DragDrop: Drop to Platform Window
    _pWindow._on_default_sys_drop = function (elem, strButton, altKey, ctrlKey, shiftKey, windowX, windowY, screenX, screenY)
    {
        var dragInfo = nexacro._cur_drag_info;
        var _is_drag = false, _is_text, _is_select, _is_click, _is_input;

        elem = (elem && elem.setSelectEventPassElement) ? elem.setSelectEventPassElement(windowX, windowY) : elem;
        if (elem && dragInfo && dragInfo.isDragging && dragInfo.targetwin == this)
        {
            comp = this.findComponent(elem, 0, 0);
            if (comp && comp[0])
            {
                elem_pos = nexacro._getElementXYInWindow(elem._handle, this._custom_node_id);
                canvasX = windowX - elem_pos[0] + comp[1];
                canvasY = windowY - elem_pos[1] + comp[2];
                comp[0]._on_drop(elem, dragInfo.target, dragInfo.referTarget, dragInfo.data, dragInfo.userdata, strButton, altKey, ctrlKey, shiftKey, canvasX, canvasY, screenX, screenY);
                _is_drag = true;
            }
        }

        nexacro._cur_drag_info = null;
    };

    _pWindow._cancelEvent = function ()
    {
        var is_runbase = application._setRunBaseWindow(this);
        var elem = this._cur_ldown_elem || this._keydown_element;
        var comp = this.findComponent(elem, 0, 0);
        var repeatInfo = nexacro._cur_repeat_info;
        
        if (comp && comp[0])
        {
            var comp_org = comp[0]._getRootComponent(comp[0]);
            comp_org._cancelEvent(comp[0]);
        }

        if (repeatInfo && repeatInfo._timer)
        {
            var _handle = nexacro._getWindowHandle(this._handle);
            nexacro._clearSystemTimer(_handle, repeatInfo._timer);
        }

        nexacro._cur_drag_info = null;
        nexacro._cur_repeat_info = null;
        nexacro._cur_track_info = null;
        nexacro._cur_extra_track_info = null;

        this._cur_ldown_elem = null; //clear elem at lbuttondown.
        this._lbuttondown_wx = null;
        this._lbuttondown_wy = null;
        this._curWindowX = null;
        this._curWindowY = null;
        this._keydown_element = null;
        if (is_runbase && application) application._runbase_window = null;
    };

    _pWindow._on_touch_to_lbuttonup = function (elem, strButton, altKey, ctrlKey, shiftKey, windowX, windowY, screenX, screenY)
    {
        if (this._click_cancel)
        {
            this._click_cancel = false;
            return;
        }

        var is_runbase = application._setRunBaseWindow(this);
        var dragInfo = nexacro._cur_drag_info;
        var repeatInfo = nexacro._cur_repeat_info;
        var trackInfo = nexacro._cur_track_info;
        var comp, elem_pos, canvasX, canvasY;
        var _is_drag = false, _is_text, _is_select, _is_click, _is_input;

        elem = (elem && elem.setSelectEventPassElement) ? elem.setSelectEventPassElement(windowX, windowY) : elem;
        if (elem && dragInfo && dragInfo.isDragging && dragInfo.targetwin == this)
        {
            comp = this.findComponent(elem, 0, 0);
            if (comp && comp[0])
            {
                elem_pos = nexacro._getElementXYInWindow(elem._handle);
                canvasX = windowX - elem_pos[0] + comp[1];
                canvasY = windowY - elem_pos[1] + comp[2];
                comp[0]._on_drop(elem, dragInfo.target, dragInfo.referTarget, dragInfo.data, dragInfo.userdata, strButton, altKey, ctrlKey, shiftKey, canvasX, canvasY, screenX, screenY);
                _is_drag = true;
            }
        }

        if (repeatInfo && repeatInfo.targetwin == this)
        {
            if (repeatInfo._timer)
            {
                var _handle = nexacro._getWindowHandle(this._handle);
                nexacro._clearSystemTimer(_handle, repeatInfo._timer);
            }
            repeatInfo.distX = windowX - repeatInfo.startX;
            repeatInfo.distY = windowY - repeatInfo.startY;
            repeatInfo.target._on_endrepeat(repeatInfo.refer_comp, repeatInfo.distX, repeatInfo.distY, repeatInfo.data);
            nexacro._cur_repeat_info = null;
        }

        if (trackInfo && trackInfo.targetwin == this)
        {
            trackInfo.distX = windowX - trackInfo.startX;
            trackInfo.distY = windowY - trackInfo.startY;
            trackInfo.target._on_endtrack(trackInfo.distX, trackInfo.distY, trackInfo.data);
            nexacro._cur_track_info = null;
        }


        var upelem = elem;
        elem = this._cur_ldown_elem;
        comp = this.findComponent(elem, 0, 0);

        if (comp && comp[0])
        {
            elem_pos = nexacro._getElementXYInWindow((comp.length == 3) ? elem._handle : comp[0]._control_element._handle);
            canvasX = windowX - elem_pos[0] + comp[1];
            canvasY = windowY - elem_pos[1] + comp[2];

            var capture_comp = this._getCaptureComp(true, false, comp[0]);
            if (capture_comp && capture_comp != comp[0])
                comp[0] = capture_comp;

            // Logical onclick Event 
            // defaultprevented 처리 하면 default action인 click을 제어한다.
            var component = comp[0];
            if (component._is_subcontrol)
            {
                component = component._getFromComponent(component);
            }

            comp[0]._on_touch_lbuttonup(elem, strButton, altKey, ctrlKey, shiftKey, canvasX, canvasY, screenX, screenY, undefined, undefined, undefined, upelem);

            _is_drag = false;
        }
    };

    _pWindow._on_drop = function ()
    {
        return true;
    };

    _pWindow._on_lbuttonup = function (elem, strButton, altKey, ctrlKey, shiftKey, windowX, windowY, eventBubbles)
    {
        return true;
    };

    _pWindow._on_default_sys_rbuttonup = function (elem, strButton, altKey, ctrlKey, shiftKey, windowX, windowY, screenX, screenY)
    {
        if (this._click_cancel)
        {
            this._click_cancel = false;
            return;
        }

        var is_runbase = application._setRunBaseWindow(this);
        elem = (elem && elem.setSelectEventPassElement) ? elem.setSelectEventPassElement(windowX, windowY) : elem;
        var comp = this.findComponent(elem, 0, 0);
        if (comp && comp[0])
        {
            var elem_pos = nexacro._getElementXYInWindow((comp.length == 3) ? elem._handle : comp[0]._control_element._handle);
            var canvasX = windowX - elem_pos[0] + comp[1];
            var canvasY = windowY - elem_pos[1] + comp[2];

            var capture_comp = this._getCaptureComp(true, false, comp[0]);
            if (capture_comp && capture_comp != comp[0])
                comp[0] = capture_comp;

            comp[0]._on_rbuttonup(elem, strButton, altKey, ctrlKey, shiftKey, canvasX, canvasY, screenX, screenY, undefined, undefined, undefined, elem);
        }

        this._cur_rdown_elem = null;

        if (is_runbase && application) application._runbase_window = null;
    };

    _pWindow._on_rbuttonup = function (elem, strButton, altKey, ctrlKey, shiftKey, windowX, windowY, eventBubbles)
    {
        return true;
    };

    _pWindow._on_default_sys_mouseup = function (elem, strButton, altKey, ctrlKey, shiftKey, windowX, windowY, screenX, screenY)
    {
        var is_runbase = application._setRunBaseWindow(this);
        elem = (elem && elem.setSelectEventPassElement) ? elem.setSelectEventPassElement(windowX, windowY) : elem;
        var comp = this.findComponent(elem, 0, 0);
        if (comp && comp[0])
        {
            var elem_pos = nexacro._getElementXYInWindow((comp.length == 3) ? elem._handle : comp[0]._control_element._handle);
            var canvasX = windowX - elem_pos[0] + comp[1];
            var canvasY = windowY - elem_pos[1] + comp[2];

            var capture_comp = this._getCaptureComp(true, false, comp[0]);
            if (capture_comp && capture_comp != comp[0])
                comp[0] = capture_comp;

            comp[0]._on_mouseup(elem, strButton, altKey, ctrlKey, shiftKey, canvasX, canvasY, screenX, screenY, undefined, undefined, undefined, elem);
        }
        this._cur_mdown_elem = null;

        if (is_runbase && application) application._runbase_window = null;
    };

    _pWindow._on_default_sys_mousedown = function (elem, strButton, altKey, ctrlKey, shiftKey, windowX, windowY, screenX, screenY)
    {
        var is_runbase = application._setRunBaseWindow(this);
        elem = (elem && elem.setSelectEventPassElement) ? elem.setSelectEventPassElement(windowX, windowY) : elem;
        this._cur_mdown_elem = elem; //save elem at lbuttondown.

        var comp = this.findComponent(elem, 0, 0);
        if (comp && comp[0])
        {
            var elem_pos = nexacro._getElementXYInWindow((comp.length == 3) ? elem._handle : comp[0]._control_element._handle);
            var canvasX = windowX - elem_pos[0] + comp[1];
            var canvasY = windowY - elem_pos[1] + comp[2];

            var capture_comp = this._getCaptureComp(true, false, comp[0]);
            if (capture_comp && capture_comp != comp[0])
                comp[0] = capture_comp;

            comp[0]._on_mousedown(elem, strButton, altKey, ctrlKey, shiftKey, canvasX, canvasY, screenX, screenY);
        }
        if (is_runbase && application) application._runbase_window = null;
    };

    _pWindow._on_default_sys_mousemove = function (elem, strButton, altKey, ctrlKey, shiftKey, windowX, windowY, screenX, screenY)
    {
        var dragInfo = nexacro._cur_drag_info;
        var repeatInfo = nexacro._cur_repeat_info;
        var trackInfo = nexacro._cur_track_info;
        var extratrackInfo = nexacro._cur_extra_track_info;
        var comp;
        if (dragInfo && dragInfo.targetwin == this)
        {
            if (!dragInfo.isDragging)
            {
                if (windowX != dragInfo.startX || windowY != dragInfo.startY)
                {
                    elem = dragInfo.target_elem;
                    comp = this.findComponent(elem, 0, 0);
                    var elem_pos = elem._handle ? nexacro._getElementXYInWindow(elem._handle) : [0, 0];
                    var canvasX = windowX - elem_pos[0] + comp[1];
                    var canvasY = windowY - elem_pos[1] + comp[2];

                    if (comp && comp[0])
                    {
                    if (comp[0]._isRtl())
                    {
                    	canvasX = elem.width - canvasX;
                    }

                    var ret = comp[0]._on_drag(elem, strButton, altKey, ctrlKey, shiftKey, canvasX, canvasY, screenX, screenY);
                    if (ret && ret[0] === true && nexacro._cur_drag_info)
                    {
                        dragInfo.isDragging = true;
                        dragInfo.target = ret[1];
                        dragInfo.referTarget = ret[2];
                        dragInfo.data = ret[3];
                        dragInfo.userdata = ret[4];
                        comp[0]._on_dragmove(elem, dragInfo.target, dragInfo.referTarget, dragInfo.data, dragInfo.userdata, strButton, altKey, ctrlKey, shiftKey, canvasX, canvasY, screenX, screenY);
                        return;
                }
                }
                    nexacro._cur_drag_info = null;
            }
                //IE에서 mousedown과 동시에 mousemove가 들어오는 경우에 drag정보가 지워져 drag가 발생 안하는 경우가 있음
                //application._cur_drag_info = null;
            }
            else
            {
                comp = this.findComponent(elem, 0, 0);
                if (comp && comp[0])
                {
                    var elem_pos = nexacro._getElementXYInWindow((comp.length == 3) ? elem._handle : comp[0]._control_element._handle);
                    var canvasX = windowX - elem_pos[0] + comp[1];
                    var canvasY = windowY - elem_pos[1] + comp[2];

                    if (comp[0]._isRtl())
                    {
                    	canvasX = elem.width - canvasX;
                    }

                    comp[0]._on_dragmove(elem, dragInfo.target, dragInfo.referTarget, dragInfo.data, dragInfo.userdata, strButton, altKey, ctrlKey, shiftKey, canvasX, canvasY, screenX, screenY);
                }
            }
            return;
        }

        if (repeatInfo && repeatInfo.targetwin == this)
        {
            repeatInfo.distX = windowX - repeatInfo.startX;
            repeatInfo.distY = windowY - repeatInfo.startY;
            repeatInfo.canvasX = repeatInfo.startCanvasX + repeatInfo.distX;
            repeatInfo.canvasY = repeatInfo.startCanvasY + repeatInfo.distY;
        }

        comp = this.findComponent(elem, 0, 0);

        if (trackInfo && trackInfo.targetwin == this)
        {
        	if (comp && comp[0] && comp[0]._isRtl())
        	{
        		trackInfo.distX = trackInfo.startX - windowX;
        		trackInfo.distY = windowY - trackInfo.startY;
        	}
        	else
        	{
            trackInfo.distX = windowX - trackInfo.startX;
            trackInfo.distY = windowY - trackInfo.startY;
        	}

            trackInfo.target._on_movetrack(trackInfo.distX, trackInfo.distY, trackInfo.data);
        }

        if (extratrackInfo)
        {
            if (comp && comp[0] && comp[0]._isRtl())
            {
                extratrackInfo.distX = extratrackInfo.startX - windowX;
                extratrackInfo.distY = windowY - extratrackInfo.startY;
            }
            else
            {
                extratrackInfo.distX = windowX - extratrackInfo.startX;
                extratrackInfo.distY = windowY - extratrackInfo.startY;
            }

            extratrackInfo.target._on_move_extratrack(comp[0], windowX, windowY, extratrackInfo.distX, extratrackInfo.distY, screenX, screenY);
        }

        if (comp && comp[0] && comp[0]._is_alive)
        {
            var elem_pos = nexacro._getElementXYInWindow(elem._handle);
            var canvasX = windowX - elem_pos[0] + comp[1];
            var canvasY = windowY - elem_pos[1] + comp[2];

            if (comp[0]._isRtl())
            {
            	canvasX = elem.width - canvasX;
            }

            var capture_comp = this._getCaptureComp(true, false, comp[0]);
            if (capture_comp && capture_comp != comp[0])
                comp[0] = capture_comp;

            // for waitcomponent
            var form = comp[0].parent;
            while (form)
            {
                if (form._is_form)
                    break;

                form = form._last_focused;
            }
            if (form)
                form._obj_mousemove = comp[0];

            comp[0]._on_mousemove(elem, strButton, altKey, ctrlKey, shiftKey, canvasX, canvasY, screenX, screenY);

            if (form)
                form._obj_mousemove = null;
        }
    };

    _pWindow._on_mousemove = function (elem, strButton, altKey, ctrlKey, shiftKey, windowX, windowY, eventBubbles)
    {
        return true;
    };

    _pWindow._on_dragmove = function ()
    {
        return true;
    };

    //repeat
    _pWindow._on_sys_repeat = function ()
    {
        var _handle = nexacro._getWindowHandle(this._handle);
        var repeatInfo = nexacro._cur_repeat_info;
        if (repeatInfo && repeatInfo.targetwin == this)
        {
            if (repeatInfo.step == "first")
            {
                if (repeatInfo._timer)
                {
                    nexacro._clearSystemTimer(_handle, repeatInfo._timer);
                }
                repeatInfo.step = "";
                var refer_comp = repeatInfo.refer_comp;
                var comp = repeatInfo.target;
                if (refer_comp === comp || comp._contains(refer_comp))
                {
                    comp._on_repeat(refer_comp, repeatInfo.canvasX, repeatInfo.canvasY, repeatInfo.data);
                }
                repeatInfo._timer = nexacro._setSystemTimer(_handle, nexacro._cur_repeat_info._repeatfunc, 75);
            }
            else
            {
                var refer_comp = repeatInfo.refer_comp;
                var comp = repeatInfo.target;
                if (refer_comp === comp || comp._contains(refer_comp))
                {
                    comp._on_repeat(refer_comp, repeatInfo.canvasX, repeatInfo.canvasY, repeatInfo.data);
                }
            }
        }
    };
    
    _pWindow._on_click = function (elem, strButton, altKey, ctrlKey, shiftKey, windowX, windowY, eventBubbles)
    {
        return true;
    };

    _pWindow._on_default_sys_dblclick = function (elem, strButton, altKey, ctrlKey, shiftKey, windowX, windowY, screenX, screenY)
    {
        var is_runbase = application._setRunBaseWindow(this);
        elem = (elem && elem.setSelectEventPassElement) ? elem.setSelectEventPassElement(windowX, windowY) : elem;
        var comp = this._findComponentForEvent(elem, 0, 0);
        if (comp && comp[0] && (strButton == "lbutton" || strButton == "none"))
        {
            var elem_pos = nexacro._getElementXYInWindow((comp.length == 3) ? elem._handle : comp[0]._control_element._handle);
            var canvasX = windowX - elem_pos[0] + comp[1];
            var canvasY = windowY - elem_pos[1] + comp[2];

            var capture_comp = this._getCaptureComp(true, false, comp[0]);
            if (capture_comp && capture_comp != comp[0])
                comp[0] = capture_comp;

            comp[0]._on_dblclick(elem, strButton, altKey, ctrlKey, shiftKey, canvasX, canvasY, screenX, screenY);
        }
        if (is_runbase && application) application._runbase_window = null;
    };

    _pWindow._on_dblclick = function (elem, strButton, altKey, ctrlKey, shiftKey, screenX, windowX, windowY, eventBubbles)
    {
        return true;
    };

    _pWindow._on_default_sys_mouseenter = function (elem, from_elem, strButton, altKey, ctrlKey, shiftKey, windowX, windowY, screenX, screenY)
    {
        var dragInfo = nexacro._cur_drag_info;
        var comp, from_comp;
        if (dragInfo && dragInfo.isDragging && dragInfo.targetwin == this)
        {
            comp = this.findComponent(elem, 0, 0);
            if (comp && comp[0])
            {
                from_comp = this.findComponent(from_elem);
                var elem_pos = nexacro._getElementXYInWindow((comp.length == 3) ? elem._handle : comp[0]._control_element._handle);
                var canvasX = windowX - elem_pos[0] + comp[1];
                var canvasY = windowY - elem_pos[1] + comp[2];
                comp[0]._on_dragenter(elem, from_comp, dragInfo.target, dragInfo.referTarget, dragInfo.data,
                        dragInfo.userdata, strButton, altKey, ctrlKey, shiftKey, canvasX, canvasY, screenX, screenY);
            }
            return;
        }

        comp = this.findComponent(elem, 0, 0);
        if (comp && comp[0])
        {
            var repeatInfo = nexacro._cur_repeat_info;
            if (repeatInfo && repeatInfo.targetwin == this)
            {
                repeatInfo.refer_comp = comp[0];
            }
            from_comp = this.findComponent(from_elem);
            var elem_pos = nexacro._getElementXYInWindow((comp.length == 3) ? elem._handle : comp[0]._control_element._handle);
            var canvasX = windowX - elem_pos[0] + comp[1];
            var canvasY = windowY - elem_pos[1] + comp[2];

            var capture_comp = this._getCaptureComp(true, false, comp[0]);
            if (capture_comp && capture_comp != comp[0])
                comp[0] = capture_comp;

            comp[0]._on_mouseenter(elem, from_comp, strButton, altKey, ctrlKey, shiftKey, canvasX, canvasY, screenX, screenY);
        }
    };

    _pWindow._on_mouseenter = function (elem, from_elem, strButton, altKey, ctrlKey, shiftKey, windowX, windowY, eventBubbles)
    {
        return true;
    };

    _pWindow._on_dragenter = function ()
    {
        return true;
    };

    _pWindow._on_default_sys_mouseleave = function (elem, to_elem, strButton, altKey, ctrlKey, shiftKey, windowX, windowY, screenX, screenY)
    {
        var dragInfo = nexacro._cur_drag_info;
        var comp, to_comp;
        if (dragInfo && dragInfo.isDragging && dragInfo.targetwin == this)
        {
            comp = this.findComponent(elem, 0, 0);
            if (comp && comp[0])
            {
                to_comp = this.findComponent(to_elem);
                var elem_pos = nexacro._getElementXYInWindow((comp.length == 3) ? elem._handle : comp[0]._control_element._handle);
                var canvasX = windowX - elem_pos[0] + comp[1];
                var canvasY = windowY - elem_pos[1] + comp[2];
                comp[0]._on_dragleave(elem, to_comp, dragInfo.target, dragInfo.referTarget, dragInfo.data, dragInfo.userdata, strButton, altKey, ctrlKey, shiftKey, canvasX, canvasY, screenX, screenY);
            }
            return;
        }

        comp = this.findComponent(elem, 0, 0);
        if (comp && comp[0])
        {
            to_comp = this.findComponent(to_elem);
            var elem_pos = nexacro._getElementXYInWindow((comp.length == 3) ? elem._handle : comp[0]._control_element._handle);
            var canvasX = windowX - elem_pos[0] + comp[1];
            var canvasY = windowY - elem_pos[1] + comp[2];

            var capture_comp = this._getCaptureComp(true, false, comp[0]);
            if (capture_comp && capture_comp != comp[0])
                comp[0] = capture_comp;

            comp[0]._on_mouseleave(elem, to_comp, strButton, altKey, ctrlKey, shiftKey, canvasX, canvasY, screenX, screenY);
        }
    };

    _pWindow._on_dragleave = function ()
    {
        return true;
    };

    _pWindow._on_mouseleave = function (elem, toelem, strButton, altKey, ctrlKey, shiftKey, windowX, windowY, eventBubbles)
    {
        return true;
    };

    _pWindow._on_default_sys_mousewheel = function (elem, wheelDeltaX, wheelDeltaY, strButton, altKey, ctrlKey, shiftKey, windowX, windowY, screenX, screenY)
    {
        var is_runbase = application._setRunBaseWindow(this);
        var comp = this._findComponentForEvent(elem, 0, 0);
        if (comp && comp[0])
        {
            var elem_pos = nexacro._getElementXYInWindow((comp.length == 3) ? elem._handle : comp[0]._control_element._handle);
            var canvasX = windowX - elem_pos[0] + comp[1];
            var canvasY = windowY - elem_pos[1] + comp[2];

            var capture_comp = this._getCaptureComp(true, false, comp[0]);
            if (capture_comp && capture_comp != comp[0])
                comp[0] = capture_comp;

            return comp[0]._on_mousewheel(elem, wheelDeltaX, wheelDeltaY, strButton, altKey, ctrlKey, shiftKey, canvasX, canvasY, screenX, screenY);
        }
        if (is_runbase && application) application._runbase_window = null;
    };


    _pWindow._on_mousewheel = function (elem, wheelDeltaX, wheelDeltaY, strButton, altKey, ctrlKey, shiftKey, windowX, windowY, eventBubbles)
    {
        return true;
    };

    _pWindow._keydown_element = null;
    _pWindow._is_hotkey = false;
    _pWindow._on_default_sys_keydown = function (elem, keycode, altKey, ctrlKey, shiftKey)
    {
        // TODO tab키처리 등. RT버젼의 Pretranslate처리를 분리해야함.
        //      tab키 이동시에도 컴포넌트 onkeydown을 거친 후 form의 onkeydown에서 처리가 됨.
        //      호출순서가 하->상 인지 상->하 인지 확인 필요.
        //
        //      참고로 Pretranslate는 Keydown만 처리하면 됨. 
        // var ret = this._on_pretranslate_keydown()

        var is_runbase = application._setRunBaseWindow(this);

        var comp = this.findComponent(elem);

        var capture_comp;
        if (comp) capture_comp = this._getCaptureComp(false, true, comp[0]);

        if (capture_comp && capture_comp != comp)
            comp = capture_comp;

        if (nexacro._enableaccessibility)
        {
            var ret = application.on_fire_onaccessibilitykey(keycode, altKey, ctrlKey, shiftKey, comp, comp);
            if (ret)
            {
                if (is_runbase && application) application._runbase_window = null;
                elem._event_stop = true;
                return;
            }
            application._processHotkey(keycode, altKey, ctrlKey, shiftKey, comp);
        }

        if (comp)
        {
            var _form = comp._getForm();
            if (comp._processHotkey(keycode, altKey, ctrlKey, shiftKey))
            {
                if (_form)
                {
                    var cur_focus_comp = _form.getFocus();
                    if (cur_focus_comp != comp)
                    {
                        if (cur_focus_comp == null) // ?
                            return;

                        comp = cur_focus_comp;
                        elem = cur_focus_comp._control_element;
                    }
                }
                comp._is_hotkey = true;
            }

            if (keycode == nexacro.Event.KEY_TAB)
            {
                // TODO check tabpage가 현재 subcontrol로 분류되어있어 문제가됨.
                if (comp._is_subcontrol)
                {
                    comp = comp._getFromComponent(comp);
                }
                if (!comp._getDlgCode(keycode, altKey, ctrlKey, shiftKey).want_tab && _form)
                {
                    comp = _form;
                }
            }
            else if (nexacro._enableaccessibility && (keycode == nexacro.Event.KEY_UP || keycode == nexacro.Event.KEY_DOWN) && !altKey && !ctrlKey && !shiftKey) // || keycode == nexacro.Event.KEY_LEFT || keycode == nexacro.Event.KEY_RIGHT))
            {                
                if (comp._is_subcontrol)
                {
                    comp = comp._getFromComponent(comp);
                }
                if (!comp._getDlgCode(keycode, altKey, ctrlKey, shiftKey).want_arrows && _form)
                {
                    comp = _form;
                }
            }

            this._keydown_element = elem;
            comp._on_keydown(elem, keycode, altKey, ctrlKey, shiftKey);
        }
        if (is_runbase && application) application._runbase_window = null;
    };

    _pWindow._on_keydown = function (elem, keycode, altKey, ctrlKey, shiftKey, eventBubbles)
    {
        return true;
    };

    _pWindow._on_default_sys_keypress = function (elem, keycode, altKey, ctrlKey, shiftKey)
    {
        var is_runbase = application._setRunBaseWindow(this);
        var comp = this.findComponent(elem);

        var capture_comp = this._getCaptureComp(false, true, comp[0]);
        if (capture_comp && capture_comp != comp)
            comp = capture_comp;

        if (comp)
        {
            comp._on_keypress(elem, keycode, altKey, ctrlKey, shiftKey);
        }
        if (is_runbase && application) application._runbase_window = null;
    };

    _pWindow._on_keypress = function (elem, keycode, altKey, ctrlKey, shiftKey)
    {
        return true;
    };

    _pWindow._on_default_sys_keyup = function (elem, keycode, altKey, ctrlKey, shiftKey)
    {
        var is_runbase = application._setRunBaseWindow(this);
        if (this._keydown_element)
        {
            var comp = this.findComponent(elem);

            var capture_comp = this._getCaptureComp(false, true, comp[0]);
            if (capture_comp && capture_comp != comp)
                comp = capture_comp;

            if (comp)
            {
                comp._on_keyup(elem, keycode, altKey, ctrlKey, shiftKey);

                if (comp._is_alive)
                comp._on_last_keyup();
            }
            if (!altKey && !ctrlKey && !shiftKey)
                this._keydown_element = null;
        }
        if (is_runbase && application) application._runbase_window = null;
    };

    
    _pWindow._on_keyup = function (elem, keycode, altKey, ctrlKey, shiftKey, fireComp)
    {
        return true;
    };

    _pWindow._on_default_sys_contextmenu = function (elem)
    {
        var comp = this.findComponent(elem);
        if (comp)
        {
            return comp._on_contextmenu(elem);
        }
    };

    
    _pWindow._on_contextmenu = function (elem)
    {
        return false;
    };

    _pWindow._on_default_sys_resize = function (width, height, wparam)
    {
        var _handle = this._handle;
        if (_handle)
        {
            var id = this._custom_node_id;
            this.width = nexacro._getWindowHandleOuterWidth(_handle, id);
            this.height = nexacro._getWindowHandleOuterHeight(_handle, id);
            this.left = nexacro._getWindowHandlePosX(_handle, id);
            this.top = nexacro._getWindowHandlePosY(_handle, id);

            var frame = this.frame;

            if (nexacro.Browser == "Runtime" && (nexacro.SystemType.toLowerCase() == "win32" || nexacro.SystemType.toLowerCase() == "win64"))
            {
                // win7 이상 AeroSnap으로 최대화시 maximize 처리되지 않고 resize로 최대화 처리가 된다.
                // 윈도우 크기가 먼저 바뀌지 않고 move로 처리됨.....
                // 최대화 처리를 위해 move되는지 알수 있다면 그쪽에서 처리하고 이쪽 분기코드를 없애야 한다...
                this.clientWidth = width || nexacro._getWindowHandleClientWidth(_handle, id);
                this.clientHeight = height || nexacro._getWindowHandleClientHeight(_handle, id);

                var frame_width = this.clientWidth;
                var frame_height = this.clientHeight;
                if (frame && (frame._window_type != 5 || frame._is_created) && frame._is_click_openstatus == false)
                {
                    // wParam
                    // 0: size_restored
                    // 1: size_minimized
                    // 2: size_maximized

                    // frame._state_openstatus
                    // normal(0), restore(1), minimize(2), maximize(3)

                    if (wparam == 0 && frame._state_openstatus == 3) // max->normal;
                    {
                        frame._setSize(frame_width, frame_height);
                        return frame.on_syscommand(frame._control_element, "restore", undefined, frame);
                    }
                    else if (wparam == 2 && frame._state_openstatus == 0) // normal->max;
                    {
                        frame._setSize(frame_width, frame_height);
                        return frame.on_syscommand(frame._control_element, "maximize", undefined, frame);
                    }
                }
            }
            else
            {
                // HTML의 경우 지정된 크기로 바꿔도 문제가 없었지만
                // Autozoom 처리시 싸이즈 sync가 맞지 않아 handle로 부터 얻은 값을 우선하도록함.
                this.clientWidth = nexacro._getWindowHandleClientWidth(_handle, id) || width;
                this.clientHeight = nexacro._getWindowHandleClientHeight(_handle, id) || height;
            }

            var frame_width = this.clientWidth;
            var frame_height = this.clientHeight;

            if (frame)
            {
                frame._setSize(frame_width, frame_height);

                // windowed frame window가 resize된 경우만..
                if (nexacro._resize_popup_inbound == true)
                {
                    var len = application._current_popups.length;
                    for (var i = len - 1; i >= 0; i--)
                    {
                        var cur_popup_comp = application._current_popups[i];
                        if (cur_popup_comp)
                        {
                            cur_popup_comp._resizePopupInbound(this.clientWidth, this.clientHeight);
                        }
                    }
                }
            }

            var modal_stack = this._modal_frame_stack;
            for (var i = 0; i < modal_stack.length; i++)
            {
                var modal_info = modal_stack[i];
                var modal_frame = modal_info[0];
                modal_frame._setModalOverlaySize(frame_width, frame_height);
            }
        }
    };

    _pWindow._on_default_sys_move = function (x, y)
    {
        var _handle = this._handle;
        if (_handle)
        {
            var id = this._custom_node_id;
            this.left = x;
            this.top = y;

            this.width = nexacro._getWindowHandleOuterWidth(_handle, id);
            this.height = nexacro._getWindowHandleOuterHeight(_handle, id);
            this.clientWidth = this.width ? this.width : nexacro._getWindowHandleClientWidth(_handle, id);
            this.clientHeight = this.height ? this.height : nexacro._getWindowHandleClientHeight(_handle, id);
        }

        // frame.move는 openstatus=normal일때만 작동함
        var frame = this.frame;
        if (frame && frame._is_window)
            frame._move(x, y);
    };

    _pWindow._on_default_sys_activate = function ()
    {
        // Google Chrome에서 activate 이벤트가 2번씩 나오는 문제로 validation한다.
        if (this._is_active_window != true)
        {
            // Pseudo change : Focused
            var cur_focus_paths = this.getCurrentFocusPaths();
            var cur_focus_paths_len = (cur_focus_paths ? cur_focus_paths.length : 0);
            for (var i = 0; i < cur_focus_paths_len; i++)
            {
                var _comp = cur_focus_paths[i];
                if (!_comp)
                    continue;
                /*  if (_comp._is_frame || _comp._is_form)
                  {
                      nexacro.Component.prototype._on_activate.call(_comp);
                  }
                  else*/
                _comp._on_activate();
            }

            var frame = this._getLastModalFrame();
            if (!frame)
                frame = this.getActiveFrame();
            if (!frame)
                frame = this.frame;

            if (frame)
            {
                frame._stat_change("activate", "activate");

                this._is_active_window = true;

                // IE Browser에서 Tab영역을 누르면 focus가 빠져버리기때문에 추가처리
                if (this._last_focused_elem)
                    this._last_focused_elem.setElementFocus();
            }
        }
    };

    _pWindow._on_default_sys_deactivate = function ()
    {
        // Google Chrome에서 activate 이벤트가 2번씩 나오는 문제로 validation한다.
        if (this._is_active_window != false)
        {
            nexacro._cur_drag_info = null;
            nexacro._cur_repeat_info = null;
            nexacro._cur_track_info = null;
            nexacro._cur_extra_track_info = null;

            var frame = this._getLastModalFrame();
            if (!frame)
                frame = this.frame;
            if (frame)
            {
                frame._stat_change("activate", "deactivate");

                this._is_active_window = false;
            }

            // Pseudo change : Non-Focused
            var cur_focus_paths = this.getCurrentFocusPaths();
            var cur_focus_paths_len = (cur_focus_paths ? cur_focus_paths.length : 0);
            for (var i = 0; i < cur_focus_paths_len ; i++)
            {
                var _comp = cur_focus_paths[i];
                if (_comp)
                {
                    /* if (_comp._is_frame || _comp._is_form)
                     {
                         nexacro.Component.prototype._on_deactivate.call(_comp);
                     }
                     else*/
                    _comp._on_deactivate();
                }
            }
        }

        // Popup 된 것 close 처리
        // focus된 Comp killfoucs 하는데 이벤트 Fire하지 않음.
        if (this._is_alive)
            application._checkClosePopupComponent(null);
    };

    _pWindow._on_default_sys_beforeclose = function ()
    {
        // Safari는 팝업을 X버튼으로 닫으면 beforeunload 이벤트가 발생하지 않음

        // 여기에서는 닫힐지 말지 알 수가 없다. 취소가 가능함
        // 리소스를 내리는 작업은 정말 닫힐때 (close에서) 처리

        // Parent에 의해 같이 닫히는 경우 Parent에서 한꺼번에 Confirm함
        if (!this._ignore_close_confirm)
        {
            var frame = this.frame;
            var confirm_message = frame._on_beforeclose();
            return confirm_message;
        }
    };

    _pWindow._on_default_sys_close = function ()
    {
        if (this._is_alive)
        {
            application._checkClosePopupComponent(null);
            application._removePopupComponent(null);
        }

        if (this._is_main)
        {
            application.beforeExit(); // ??
            this._closeChildWindows(true);
        }
        else if (this._is_alive)
            this.destroy();

        // IE는 window.close를 호출해도 window가 즉시 사라지지 않는 경우가 있기때문에
        // closed 속성이 true로 바뀔때까지 기다렸다가 콜백을 수행한다. 
        // 다행히 closed는 모든 브라우저에서 정확한 값을 보여주고 있다.

        if (!this._is_main && this.frame)
        {
            nexacro._createModalAsyncCallbackHandler(this._handle, this.frame);
        }
    };

    // IE 8이하의 경우, main window에서 Open Window의 DOM을 create 하면 속도가 많이 느림.
    // 때문에 Open Window의 onload Event를 받아서 Frame create 하도록 처리.
    _pWindow._on_default_sys_load = function (win_handle)
    {
        if (!this._handle && win_handle)
        {
            this.attachHandle(win_handle);
        }

        if (this._handle)
        {
            for (var i = 0; i < this._lock_list.length; i++)
                nexacro._setWindowHandleLock(this._lock_list[i] ? this._lock_list[i]._handle : null, true, this._handle, true);

            if (this.frame)
            {
                this.frame._on_window_loaded();
            }
        }
    };

    _pWindow._on_default_sys_reload = function (elem)
    {
        if (elem)
        {
            var comp = this.findComponent(elem);
            if (comp)
            {
                var ref_form = comp._getForm();
                if (ref_form)
                {
                    var frame = ref_form.getOwnerFrame();
                    if (frame && frame.form)
                    {
                        frame.form.reload();
                    }
                }
            }
        }
    };

    _pWindow._on_default_sys_syscommand = function (command)
    {
        if (this.frame)
        {
            var f = this.frame;
            f.on_syscommand(f._control_element, command, true, f, null);
        }
    };

    _pWindow._on_default_sys_getminmaxinfo = function ()
    {
        if (this.frame)
        {
            var minmaxinfo = this.frame._getMinMaxInfo();
            return [minmaxinfo.cx, minmaxinfo.cy];
        }

        return null;
    };

    _pWindow._on_default_sys_touchstart = function (elem, touchid, clientX, clientY, screenX, screenY, curtime, orgtime, is_last_changedtouch, first_touchid)
    {
        var manager = this._getTouchManager();
        if (!manager) return;

        this._cur_touch_elem = elem;
        
        if (application._current_popups.length > 0)
        {
            var comp = this.findComponent(elem, 0, 0);
            application._checkClosePopupComponent(comp[0], false);
            var cur_popup = application._current_popups[0];
            if (!cur_popup)
            {
                this._click_cancel = true;
                return;
            }
        }
        else
        {
            this._click_cancel = false;
        }

        if (nexacro.OS == "iOS")
        {
            var last_touchid = this._last_touchid;

            this._last_touchid = touchid;

            if (touchid == last_touchid)
            {
                this._click_cancel = true;
                return;
            }
        }

        var ret = manager.ontouchstart(this, elem, touchid, clientX, clientY, screenX, screenY, curtime, orgtime, is_last_changedtouch, first_touchid);

        // 모든 touchstart에 대해 default를 허용해야만 pinchzoom이 가능
        if (nexacro._allow_default_pinchzoom)
            return;

        return ret;
    };

    _pWindow._on_default_sys_touchmove = function (elem, touchid, clientX, clientY, screenX, screenY, curtime, orgtime, is_last_changedtouch)
    {
        var manager = this._getTouchManager();
        if (!manager) return;

        // pinchzoom 도중 touchmove는 모두 브라우저에 맡김 (검토)
        if (manager._allow_default)
            return;

        var ret = manager.ontouchmove(this, elem, touchid, clientX, clientY, screenX, screenY, curtime, orgtime, is_last_changedtouch);

        return ret;
    };

    _pWindow._on_default_sys_touchend = function (elem, touchid, clientX, clientY, screenX, screenY, curtime, orgtime, is_last_changedtouch)
    {
        if (this._click_cancel)
        {
            this._click_cancel = false;
            return;
        }

        var manager = this._getTouchManager();
        if (!manager) return;
        this._cur_touch_elem = elem;
        var ret = manager.ontouchend(this, elem, touchid, clientX, clientY, screenX, screenY, curtime, orgtime, is_last_changedtouch);

        if (manager._allow_default)
            return;

        return ret;
    };

    _pWindow._on_default_sys_touchcancel = function (elem, touchid, clientX, clientY, screenX, screenY, curtime, orgtime, is_last_changedtouch)
    {
        var manager = this._getTouchManager();
        if (!manager) return;
        var ret = manager.ontouchcancel(this, elem, touchid, clientX, clientY, screenX, screenY, curtime, orgtime, is_last_changedtouch);

        /*
        if (manager._allow_default)
            return;
        */

        return ret;
    };

    _pWindow._on_default_sys_orientationchange = function(orientation)
    {
        if (this.frame) {
            this.frame._on_orientationchange(orientation);
        }
    };

    _pWindow._getTouchManager = function ()
    {
        var manager = application._touch_manager;
        if (!manager)
        {
            manager = application._touch_manager = new nexacro.TouchManager();
        }
        return manager;
    };

    _pWindow._setFocus = function ()
    {
        nexacro._setWindowHandleFocus(this._handle);
    };

    _pWindow._on_modalLock = function ()
    {
        nexacro._updateWindow(this._handle);
    };

    delete _pWindow;

    //==============================================================================
    // nexacro.Window
    //==============================================================================
    nexacro.PopupWindow = function (id, parent)
    {
        nexacro.Window.call(this, id, parent, false);

        //------------------ internal variable ---------------------//
        this.comp = null;
        this._old_focused_comp = null;
    };

    var _pPopupWindow = nexacro._createPrototype(nexacro.Window, nexacro.PopupWindow);
    nexacro.PopupWindow.prototype = _pPopupWindow;
    _pPopupWindow._type_name = "PopupWindow";

    //------------------------------------------------------------------------------
    _pPopupWindow.attachHandle = function (_handle)
    {
        if (!this._handle)
        {
            this._handle = this._dest_handle = _handle;
            this._doc = this._dest_doc = nexacro._getPopupWindowDocumentHandle(_handle);

            this.left = nexacro._getPopupWindowHandlePosX(_handle);
            this.top = nexacro._getPopupWindowHandlePosY(_handle);
            this.width = nexacro._getPopupWindowHandleOuterWidth(_handle);
            this.height = nexacro._getPopupWindowHandleOuterHeight(_handle);
            this.clientWidth = nexacro._getPopupWindowHandleClientWidth(_handle);
            this.clientHeight = nexacro._getPopupWindowHandleClientHeight(_handle);
            this._gap_client_width = this.width - this.clientWidth;
            this._gap_client_height = this.height - this.clientHeight;
        }
    }

    _pPopupWindow.attachFrame = function (frame, refresh_flag)
    {
        // do nothing
    };

    _pPopupWindow.attachComp = function (comp, refresh_flag)
    {
        this.comp = comp;
        if (refresh_flag)
            this._onPrepareWindowHandle();
    };

    _pPopupWindow.create = function (_parent, name, width, height, left, top, resizable)
    {
        nexacro._createPopupWindowHandle(_parent, this, name, left, top, width, height);
    };

    _pPopupWindow.destroy = function ()
    {
        if (!this._is_alive)
            return;

        this._is_alive = false;

        var _handle = this._handle;
        if (_handle)
        {
            nexacro._closePopupWindowHandle(_handle);
            this._handle = null;
        }
        this.comp = null;
        nexacro.Window.prototype.destroy.call(this);
    };

    //------------------------------------------------------------------------------
    _pPopupWindow.moveBy = function (dx, dy)
    {
        var _handle = this._handle;
        if (_handle && dx && dy)
        {
            var l = this.left + (dx | 0);
            var t = this.top + (dy | 0);
            nexacro._setPopupWindowHandlePos(_handle, l, t);
            this.left = nexacro._getPopupWindowHandlePosX(_handle);
            this.top = nexacro._getPopupWindowHandlePosY(_handle);
        }
    };

    _pPopupWindow.moveTo = function (l, t)
    {
        var _handle = this._handle;
        if (_handle)
        {
            if (l === undefined || l === null) l = this.left;
            if (t === undefined || t === null) t = this.top;
            nexacro._setPopupWindowHandlePos(_handle, l, t);
            this.left = nexacro._getPopupWindowHandlePosX(_handle);
            this.top = nexacro._getPopupWindowHandlePosY(_handle);
        }
    };

    _pPopupWindow.setArea = function (l, t, w, h)
    {
        var _handle = this._handle;
        if (_handle)
        {
            if (l === undefined || l === null) l = this.left;
            if (t === undefined || t === null) t = this.top;
            if (w === undefined || w === null) w = this.width;
            if (h === undefined || h === null) h = this.height;
            nexacro._setPopupWindowHandleArea(_handle, l, t, w, h);
            this.left = nexacro._getPopupWindowHandlePosX(_handle);
            this.top = nexacro._getPopupWindowHandlePosY(_handle);
            this.width = nexacro._getPopupWindowHandleOuterWidth(_handle);
            this.height = nexacro._getPopupWindowHandleOuterHeight(_handle);
            this.clientWidth = nexacro._getPopupWindowHandleClientWidth(_handle);
            this.clientHeight = nexacro._getPopupWindowHandleClientHeight(_handle);
            this._gap_client_width = this.width - this.clientWidth;
            this._gap_client_height = this.height - this.clientHeight;
        }
    };
    _pPopupWindow.setSize = function (w, h)
    {
        var _handle = this._handle;
        if (_handle)
        {
            if (w === undefined || w === null) w = this.width;
            if (h === undefined || h === null) h = this.height;
            nexacro._setPopupWindowHandleSize(_handle, w, h);
            this.width = nexacro._getPopupWindowHandleOuterWidth(_handle);
            this.height = nexacro._getPopupWindowHandleOuterHeight(_handle);
            this.clientWidth = nexacro._getPopupWindowHandleClientWidth(_handle);
            this.clientHeight = nexacro._getPopupWindowHandleClientHeight(_handle);
            this._gap_client_width = this.width - this.clientWidth;
            this._gap_client_height = this.height - this.clientHeight;
        }
    };

    _pPopupWindow.setVisible = function (visible)
    {
        if (this.visible != visible)
        {
            this.visible = visible;

            // Popup 닫힐때 Focus 복원
            // PopupDiv, PopupMenu가 해당됨.
            var root_window = this._getRootWindow();
            if (visible)
            {
                var cur_focus_paths = root_window.getCurrentFocusPaths();
                if (cur_focus_paths && cur_focus_paths.length > 0)
                {
                    var comp = cur_focus_paths[cur_focus_paths.length - 1];

                    comp = comp._last_focused ? comp._last_focused : comp;

                    if (comp._is_killfocusing)
                    {
                        comp = root_window._setfocusing_comp;
                    }
                    this._old_focused_comp = comp;
                }
                else
                {
                    this._old_focused_comp = null;
                }
            }
            else
            {
                if (this._old_focused_comp)
                {
                        this._old_focused_comp.setFocus();
                }
                }

            // Popup이 닫힐때 KillFocus 처리
            // Focus 관리를 Frame window 단위
            nexacro._setPopupWindowHandleVisible(this._handle, visible);
        }
    };

    _pPopupWindow.getTopComp = function ()
    {
        return this.comp;
    };

    _pPopupWindow._setCaptureComp = function (comp)
    {
        var root_win = this._getRootWindow();
        if (root_win)
            root_win._setCaptureLock(comp, true, false);
    };

    _pPopupWindow._releaseCaptureComp = function (comp)
    {
        var root_win = this._getRootWindow();
        if (root_win)
            root_win._releaseCaptureLock(comp);
    };

    _pPopupWindow._on_default_sys_activate = nexacro._emptyFn;
    _pPopupWindow._on_default_sys_deactivate = nexacro._emptyFn;
    _pPopupWindow._getRootWindow = function ()
    {
        var root_window = this;
        while (root_window)
        {
            if (root_window.frame)
                return root_window;
            root_window = root_window.parent;
        }
        return this;
    };

    // FocusPath 관련 API를 모두 Frame Window로 호출하도록함. 
    // 아예 호출되지 않는 것이 최상의 시나리오임
    // 최종적으로는 모두 제거 대상
    _pPopupWindow.getCurrentFocusPaths = function ()
    {
        return this._getRootWindow().getCurrentFocusPaths();
    };
    _pPopupWindow.addCurrentFocusPaths = function (obj)
    {
        this._getRootWindow().addCurrentFocusPaths(obj);
    };
    _pPopupWindow.clearCurrentFocusPaths = function ()
    {
        this._getRootWindow().clearCurrentFocusPaths();
    };
    _pPopupWindow._removeFromCurrentFocusPath = function (obj, clear_last_focus, new_focus, new_refer_focus)
    {
    	this._getRootWindow()._removeFromCurrentFocusPath(obj, clear_last_focus, new_focus, new_refer_focus);
    };
    _pPopupWindow._indexOfCurrentFocusPaths = function (obj)
    {
        return this._getRootWindow()._indexOfCurrentFocusPaths(obj);
    };

    delete _pPopupWindow;

    //==============================================================================
    // nexacro Application
    //==============================================================================
    if (!this.application)
    {
        _pApplication = nexacro.Application = nexacro._createPrototype(nexacro.EventSinkObject);

        _pApplication._type_name = "Application";

        _pApplication.id = "application";
        _pApplication.name = "application";

        // Application Collections
        // all is special Collection - direct access not allowed
        _pApplication.all = new nexacro.Collection();
        _pApplication.trays = new nexacro.Collection();
        _pApplication.widgets = new nexacro.Collection();

        // service & image ObjectArray Collections
        _pApplication.popupframes = new nexacro.Collection();


        _pApplication.services = null;//=  new nexacro.Collection();
        _pApplication.images = new nexacro.Collection();
        _pApplication.components = new nexacro.Collection();
        _pApplication.updates = new nexacro.Collection();

        _pApplication.onload = null;
        _pApplication.onerror = null;
        _pApplication.onbeforeexit = null;
        _pApplication.onexit = null;
        _pApplication.onusernotify = null;
        _pApplication.onloadtypedefinition = null;
        _pApplication.onloadingglobalvariables = null;
        _pApplication.ondownloadactivex = null;
        _pApplication.oncopydata = null;
        _pApplication.onquickviewmenuclick = null;
        _pApplication.onbeforeuserconfirm = null;
        _pApplication.onafteruserconfirm = null;
        _pApplication.onaddlog = null;
        _pApplication.oncommunication = null;
        _pApplication.oncduplicateexcution = null;

        //property
        _pApplication.mainframe = null;
        _pApplication.key = "";
        _pApplication.xadl = "";
        _pApplication.componentpath = "";
        _pApplication.commthreadcount = 3; //   = COMMTHREAD_DEFAULT_CNT				3
        _pApplication.commthreadwaittime = 0;
        _pApplication.cachedir = "";
        _pApplication.errorfile = "";
        _pApplication.onlyone = false;
        _pApplication.loginformurl = "";
        _pApplication.loginformstyle = "";
        _pApplication.codepage = "";
        _pApplication.language = "";
        _pApplication.version = "";
        _pApplication.tracemode = false; 
        _pApplication.traceduration = -1;
        _pApplication.usehttpkeepalive = true; 
        _pApplication.useproxykeepalive = false; 
        _pApplication.httptimeout = 30;
        _pApplication.proxytimeout = 0; 
        _pApplication.httpretry = 3;
        _pApplication.proxyretry = 1; 
        _pApplication.themeid = "";
        _pApplication.engineversion = "2.0"; 
        _pApplication.enginesetupkey = ""; 
        _pApplication.usewaitcursor = true;
        _pApplication.licenseurl = "";
        _pApplication.mousehovertime = 500;
        _pApplication.mousewheeltype = 0; 
        _pApplication.imepastemode = 0; 
        _pApplication.addcookietovariable = true;
        _pApplication.filesecurelevel = 0; //  0:all, 1:private
        _pApplication.networksecurelevel = 0; //  0:all, 1:private
        //_pApplication.locale = 0;
        _pApplication.enabletouchevent = false;
        _pApplication.enableanimation = false;
        _pApplication.loglevel = "debug"; 
        _pApplication.errorlevel = 0;
        _pApplication.cookiecachetype = "cache";
        _pApplication.usecontextmenu = "all";
        _pApplication.loadingimage = "";
        _pApplication.usevml = true; 
        _pApplication.tabkeycirculation = "form,cycle";
        
        _pApplication.popuptype = "normal";
        _pApplication._is_attach_childframe = false;

        _pApplication._is_input_paste = false;
        _pApplication._input_paste_comp = null;

        _pApplication.rtldirection = "";	// ltr, rtl, inherit
        _pApplication.locale = "";	// property
        //accessibility Property
        _pApplication.enableaccessibility = false;
        _pApplication.accessibilityfirstovertext = ""; //
        _pApplication.accessibilitylastovertext = "";
        _pApplication.accessibilityreplayhotkey = "";
        _pApplication.accessibilitybackwardkey = "";
        _pApplication.accessibilityforwardkey = "";
        _pApplication.accessibilitywholereadhotkey = "";
        _pApplication.accessibilityhistorycount = 5;
        _pApplication.accessibilitytype = "standard"; //standard/sensereader/jaws
        _pApplication.accessibilitydescreadtype = "label"; //multienum - label/action/description
        _pApplication.accessibilitywholereadtype = "none"; // none/load/change/loadchange
        _pApplication.hithemeid = "";
        _pApplication.accessibilityheadingnexthotkey = "";
        _pApplication.accessibilityheadingprevhotkey = "";
        _pApplication.accessibilitycomponentnexthotkey = "";
        _pApplication.accessibilitycomponentprevhotkey = "";

        _pApplication._tabkeycirculation = 0;
        _pApplication._accessibilitywholereadtype = 0;
        _pApplication._accessibilityHistoryList = null;
        _pApplication._accessibilityHistoryCursor = -1;
        _pApplication.layoutautofittype = "none";

        _pApplication._hotkey_list = []; // Hotkey 사용하는 Component와 Hotkey정보 리스트
        _pApplication._locale = "";	//locale value
        //------------- internal variable --------------//
        _pApplication._is_application = true;

        _pApplication._need_init = true;

        // default Application environment
        _pApplication._project_uri = "";
        _pApplication._theme_uri = "./_theme_/default";
        _pApplication._resource_path = "";
        _pApplication._default_loadingimage = "./images/waitimage.gif";
        _pApplication._variables = [];
        _pApplication._cookie_variables = [];
        _pApplication._header_variables = [];
        _pApplication._datasets = [];
        _pApplication._protocols = {};

        _pApplication._active_window = null; //not use
        _pApplication._global_context = this;   // lookup topmost

        _pApplication._is_loaded = false;
        _pApplication._is_hybrid = false;
        _pApplication._is_loadforms = false;

        _pApplication._local_path = "";
        _pApplication._loglevel = 4;
        _pApplication._cssurls = [];
        //--------------------------------------
        // Managers
        // CSS containers
        _pApplication._css_selectors = { _is_selector: true, _has_items: false, _has_attr_items: false };
        _pApplication._cssfinder_cache = {};


        _pApplication._load_manager = new nexacro.LoadManager(nexacro.Application);

        // Multi-LayoutManager 
        //--------------------------------------
        _pApplication._screeninfo = null;
        _pApplication._device_name = "";
        _pApplication._layout_manager = new nexacro.LayoutManager(nexacro.Application);
        _pApplication._curscreen = null;
        //--------------------------------------

        _pApplication._touch_manager = null;

        // _pApplication._strMediaName = ""; // not use
        _pApplication._com_waiting = false;
        _pApplication._comm_contextlist = [];   // 현재 Transaction 처리중인 Form List 

        _pApplication._current_popups = []; // 현재 popup되어 있는 popupcomponents

        _pApplication._typedefinitions = [];
        _pApplication._aliaslist = [];  //typedefinition에 등록된 alias 처리
        _pApplication._registerclass = [];  //내부 class들에 등록

        _pApplication._extensionmodules = [];

        _pApplication._typedefinition_url = "";
        _pApplication._globalvar_uri = "";
        _pApplication._executescriptlist = [];
        _pApplication._includescriptlist = [];

        _pApplication._quickview_mode = false;

        _pApplication._localcache_path = "";
        _pApplication._localtheme_path = "";
        _pApplication._localcaches = {};
        _pApplication._localthemecaches = {};

        _pApplication._entered = null;
        _pApplication._load_callbacklist = [];

        _pApplication._closedmodalasync_list = []; // window handle까지 close처리된 frame,window_handle 리스트. callback처리 후 리스트에서 제거된다.
        _pApplication.services = new nexacro.Collection();
        _pApplication._defaultservice = null; //
        _pApplication._rtldirection = undefined;

        _pApplication._skipDragEventAfterMsgBox = false;

        _pApplication._current_tray_popup = null;

        _pApplication._accessibilitytype = 1;

        //==============================================================================
        // nexacro.Application : Event Area
        //==============================================================================
        // Application's event list
        _pApplication._event_list = {
            "onload": 1, "onerror": 1, "onbeforeexit": 1, "onexit": 1, "onusernotify": 1,
            "onloadtypedefinition": 1, "onloadingglobalvariables": 1,
            "ondownloadactivex": 1, "oncopydata": 1, "onquickviewmenuclick": 1, "onbeforeuserconfirm": 1, "onafteruserconfirm": 1,
            "onaddlog": 1, "oncommunication": 1, "onaccessibilitykey": 1, // for plugin/AX
            "onloadforms": 1, "onduplicateexcution": 1,            
            "onnotification":1 // for Mobile PUSH/Notification
        };

        _pApplication._isEnable = function ()
        {
            return true;
        };

        _pApplication._isLoaded = function ()
        {
            return this._is_loaded;
        };

        //_pApplication._on_load = 
        _pApplication.on_fire_onload = function (obj, url)
        {
            if (this.onload && this.onload._has_handlers)
            {
                var evt = new nexacro.LoadEventInfo(obj, "onload", url);
                return this.onload._fireEvent(this, evt);
            }
        };

        //ie6 에서 cache되어 있는 화면을 가져올때 sync 처럼 동작하는 현상이 있어
        //application의 onload event 후에 form의 onload event를 발생시키기 위해 
        //application에 onload event 후에 호출할 form callbacklist를 달아놓는다.

        _pApplication._on_load = function (obj, url)
        {
            this.on_fire_onload(obj, url);

            var callbacklist = this._load_callbacklist;
            var n = callbacklist.length;
            if (n > 0)
            {
                for (var i = 0; i < n; i++)
                {
                    var item = callbacklist[i];
                    var target = item.target;
                    var url = item.url;
                    if (target._is_alive != false)
                        item.callback.call(target, target, url, true);
                }
                callbacklist.splice(0, n);
            }


            return true;
        };


        _pApplication._addLoadCallbacklist = function (item)
        {
            if (!this._is_loaded)
            {
                application._load_callbacklist.push(item);
                return true;
            }
            return false;
        };

        _pApplication._registerLoadforms = function (obj)
        {
            if (this._is_loadforms)
                return;

            if (!application._loadforms)
                application._loadforms = [];
            application._loadforms.push(obj);
        };

        _pApplication._notifyLoadforms = function (obj)
        {
            if (this._is_loadforms)
                return;
            
            var loadforms = application._loadforms;
            if (!loadforms) return false;
            var n = loadforms.length;
            for (var i = 0; i < n; i++)
            {
                var item = loadforms[i];
                if (obj == item)
                {
                    loadforms.splice(i, 1);
                }
            }
    
            if (loadforms.length == 0)
            {
                this._is_loadforms = true;
                this.on_fire_onloadforms(this, this.xadl);
            }

            return false;
        };


        _pApplication.on_fire_onloadforms = function (obj, url)
        {
            if (this.onloadforms && this.onloadforms._has_handlers)
            {
                var evt = new nexacro.LoadEventInfo(obj, "onloadforms", url);
                return this.onloadforms._fireEvent(this, evt);
            }
        };

        _pApplication.on_fire_onloadtypedefinition = function (obj, url)
        {
            if (this.onloadtypedefinition && this.onloadtypedefinition._has_handlers)
            {
                var evt = new nexacro.LoadEventInfo(obj, "onloadtypedefinition", url);
                return this.onloadtypedefinition._fireEvent(this, evt);
            }
            return true;
        };

        _pApplication.on_fire_onloadingglobalvariables = function (obj, url)
        {
            if (this.onloadingglobalvariables && this.onloadingglobalvariables._has_handlers)
            {
                var evt = new nexacro.LoadEventInfo(obj, "onloadingglobalvariables", url);
                return this.onloadingglobalvariables._fireEvent(this, evt);
            }
            return true;
        };

        _pApplication.on_fire_onerror = function (obj, errortype, errormsg, errorobj, statuscode, requesturi, locationuri)
        {
            if (this.onerror && this.onerror._has_handlers)
            {
                var evt = new nexacro.ErrorEventInfo(obj, "onerror", errortype, errormsg, errorobj, statuscode, requesturi, locationuri);
                return this.onerror._fireEvent(this, evt);
            }
            return true;
        };

        _pApplication.on_fire_onbeforeexit = function (obj)
        {
            if (this.onbeforeexit && this.onbeforeexit._has_handlers)
            {
                var evt = new nexacro.ExitEventInfo(obj, "onbeforeexit");
                return this.onbeforeexit._fireEvent(this, evt);
            }
        };

        _pApplication.on_fire_onexit = function (obj)
        {
            if (this.onexit && this.onexit._has_handlers)
            {
                var evt = new nexacro.ExitEventInfo(obj, "onexit");
                return this.onexit._fireEvent(this, evt);
            }
            return true;
        };

        _pApplication.on_fire_onusernotify = function (obj, notifyid, message)
        {
            if (this.onusernotify && this.onusernotify._has_handlers)
            {
                var evt = new nexacro.UserNotify(obj, "onusernotify", notifyid, message);
                return this.onusernotify._fireEvent(this, evt);
            }
            return true;
        };

        _pApplication.on_fire_onaddlog = function (obj, message)
        {
            if (this.onaddlog && this.onaddlog._has_handlers)
            {
                var evt = new nexacro.AddLog(obj, "onaddlog", message);
                return this.onaddlog._fireEvent(this, evt);
            }
            return true;
        };

        _pApplication.on_fire_oncommunication = function (obj, state)
        {
            if (this.oncommunication && this.oncommunication._has_handlers)
            {
                var evt = new nexacro.Communication(obj, "oncommunication", state);
                return this.oncommunication._fireEvent(this, evt);
            }
            return true;
        };

        _pApplication.on_fire_onaccessibilitykey = function (key_code, alt_key, ctrl_key, shift_key, from_comp, from_refer_comp)
        {
            if (this.onaccessibilitykey && this.onaccessibilitykey._has_handlers)
            {
                var evt = new nexacro.KeyEventInfo(this, "onaccessibilitykey", alt_key, ctrl_key, shift_key, key_code, from_comp, from_refer_comp);
                return this.onaccessibilitykey._fireEvent(this, evt);
            }
            return false;
        };

        _pApplication._on_callback_beforeuserconfirm = function ()
        {
            return this.on_fire_onbeforeuserconfirm();
        }

        _pApplication._on_callback_afteruserconfirm = function ()
        {
            return this.on_fire_onafteruserconfirm();
        }

        _pApplication.on_fire_onbeforeuserconfirm = function ()
        {
            if (this.onbeforeuserconfirm && this.onbeforeuserconfirm._has_handlers)
            {
                var evt = new nexacro.EventInfo(this, "onbeforeuserconfirm");
                return this.onbeforeuserconfirm._fireEvent(this, evt);
            }
            return false;
        };

        _pApplication.on_fire_onafteruserconfirm = function ()
        {
            if (this.onafteruserconfirm && this.onafteruserconfirm._has_handlers)
            {
                var evt = new nexacro.EventInfo(this, "onafteruserconfirm");
                return this.onafteruserconfirm._fireEvent(this, evt);
            }
            return false;
        };

        _pApplication.on_fire_onduplicateexcution = function (_globalvalue)
        {
            if (this.onduplicateexcution && this.onduplicateexcution._has_handlers)
            {
                var _arguments = [];

                // Comma Separated, Quote 사용가능. 2013.04.03 neoarc
                var search_regexpr = /([a-z0-9_]*)(=|:[sgc]=)(([^,'"]+)|('[^']*')|("[^"]*"))(,|$)/ig;
                var matched;
                while (matched = search_regexpr.exec(_globalvalue))
                {
                    var globalvalue = matched[0]; // a=A, 또는 a=A
                    if (globalvalue.charAt(globalvalue.length - 1) == ',')
                        globalvalue = globalvalue.substr(0, globalvalue.length - 1);

                    var equal_idx = globalvalue.indexOf("=");
                    var variable_name = globalvalue.substr(0, equal_idx);

                    // 숫자로 시작하는 변수명인 경우 걸러냄
                    if (variable_name[0] >= '0' && variable_name.charAt(0) <= '9')
                        continue;
                    var variable_value = globalvalue.substr(equal_idx + 1, globalvalue.length - equal_idx);

                    // Type 지정여부 체크
                    var variable_type = null;
                    var colon_idx = variable_name.indexOf(":");
                    if (colon_idx > 0)
                    {
                        variable_type = variable_name.substr(colon_idx + 1, 1);
                        variable_name = variable_name.substr(0, colon_idx);
                    }

                    // Quote 처리 된 경우 Quote 제거
                    if (variable_value.length > 2 &&
                        ((variable_value.charAt(0) == '\'' && variable_value.charAt(variable_value.length - 1) == '\'') ||
                         (variable_value.charAt(0) == '\"' && variable_value.charAt(variable_value.length - 1) == '\"')))
                    {
                        variable_value = variable_value.substr(1, variable_value.length - 2);
                    }

                    switch (variable_type)
                    {
                        case 's': // cookie
                            _arguments.push({ name: variable_name, value: variable_value, usecokie: true });
                            break;
                        case 'g':
                        default: // global(default)
                            _arguments.push({ name: variable_name, value: variable_value, usecokie: false });
                            break;
                    }
                }

                var evt = new nexacro.DuplicateExcutionEventInfo(this, "onduplicateexcution", _arguments);
                return this.onduplicateexcution._fireEvent(this, evt);
            }
            return false;
        };

        _pApplication.on_fire_onnotification = function (v)
        {
            var parameters = JSON.parse(v);

            if (parameters.token != undefined)
                nexacro.System._setNotificationToken(parameters.token);

            if (this.onnotification && this.onnotification._has_handlers)
            {
                var evt = new nexacro.NotificationEventInfo(this, "onnotification", parameters.reason, parameters.messages);
                return this.onnotification._fireEvent(this, evt);
            }

            return false;
        };

        //==============================================================================
        // nexacro.Application : Application's default system event handlers
        //==============================================================================
        _pApplication._on_sys_focus = function (node, e, bubble)
        {
            return false;
        };
        _pApplication._on_sys_lbuttondown = function (node, e, bubble)
        {
            return false;
        };
        _pApplication._on_sys_lbuttonup = function (node, e, bubble)
        {
            return false;
        };
        _pApplication._on_sys_rbuttondown = function (node, e, bubble)
        {
            return false;
        };
        _pApplication._on_sys_rbuttonup = function (node, e, bubble)
        {
            return false;
        };
        _pApplication._on_sys_mouseup = function (node, e, bubble)
        {
            return false;
        };
        _pApplication._on_sys_mousedown = function (node, e, bubble)
        {
            return false;
        };
        _pApplication._on_sys_mouseenter = function (node, e, bubble)
        {
            return false;
        };
        _pApplication._on_sys_mouseleave = function (node, e, bubble)
        {
            return false;
        };
        _pApplication._on_sys_mousemove = function (node, e, bubble)
        {
            return false;
        };
        _pApplication._on_sys_mousewheel = function (node, e, bubble)
        {
            return false;
        };
        _pApplication._on_sys_keydown = function (node, e, bubble)
        {
            return false;
        };
        _pApplication._on_sys_keypress = function (node, e, bubble)
        {
            return false;
        };
        _pApplication._on_sys_keyup = function (node, e, bubble)
        {
            return false;
        };
       
        _pApplication._on_sys_dblclick = function (node, e, bubble)
        {
            return false;
        };
        _pApplication._on_sys_touch = function (node, e, bubble)
        {
            return false;
        };

        //==============================================================================
        // nexacro.Application : System Utility Functions
        //==============================================================================

        //Error 
        _pApplication._onSystemWarning = function (obj, errorcode)
        {
            var args = Array.prototype.slice.call(arguments, 2);
            var errormsg = this._getErrorMessge.apply(this, args);

            this._onFireSystemError(obj, false, errorcode, 2, errormsg, true);
        };

        _pApplication._onSystemError = function (obj, errortype, errormsg)
        {
            this._onFireSystemError(obj, true, errortype, 1, errormsg, true);
        };


        _pApplication._onHttpSystemError = function (obj, bfireevent, errorobj, errortype, url, returncode, requesturi, locationuri)
        {
            var ret = false;
            var commerrorobj = nexacro.MakeCommunicationError(this, errortype, url, returncode, requesturi, locationuri);
            if (bfireevent)
            {
                ret = this.on_fire_onerror(obj, commerrorobj.name, commerrorobj.message, errorobj, returncode, requesturi, locationuri);
            }

            this._onFireSystemError(obj, false, commerrorobj.name, 1, commerrorobj.message, true);

            return ret;
        };

        //"fatal" : 치명적이 에러인 경우 - 0 
        //"error" : 일반적인 에러인 경우 - 1
        //"warn" : 경고인 경우          - 2
        //"info" : 일반 정보인 경우     - 3
        //"debug" : 디버그 정보인 경우  - 4

        //loglevel : 2(warn) 1(error) 
        //bsystemlog : 1(systemlog) 2(userlog) 
        //msgtype : 받은 메세지가 warinig 인지 error인지 2(warn) 1(error) 
        _pApplication._onFireSystemError = function (errorobj, bfireevent, errortype, msgtype, message, bsystemlog, loglevel)
        {
            if (bfireevent)
            {
                this.on_fire_onerror(application, errortype, message, errorobj);
            }

            //message 값이 없을때 로그무시
            if ((loglevel || 4) <= this._loglevel && this.tracemode != "none" && message)
            {
                nexacro._writeTraceLog(msgtype, message, bsystemlog, loglevel);
            }
        };


        _pApplication._getMsg = function (errorcode)
        {
            if (nexacro._errortable)
            {
                var errmsg = nexacro._errortable[system._language][errorcode];

                if (!errmsg) return "";
                var arg = Array.prototype.slice.call(arguments, 1);
                var n = arg.length;

                for (var i = 0; i < n; i++)
                {
                    var a = "%[" + i + "]";
                    errmsg = errmsg.replace(a, arg[i]);
                }
                return errmsg;
            }
        };

        _pApplication._getErrorMessge = function (errorcode)
        {
            if (nexacro._errortable)
            {
                var errmsg = nexacro._errortable[system._language][errorcode];

                if (!errmsg) return "";
                var args = Array.prototype.slice.call(arguments, 1);

                var result = "";
                var argnum = 0;
                var errormsgcount = errmsg.length;
                var argscount = args.length;
                for (var i = 0; i < errormsgcount; i++)
        {
                    var str = errmsg[i];
                    if (argscount > 0 && str.length == 2 && str.charCodeAt(0) == 0x25)
                    {
                        var argnum = (str.charCodeAt(1) - 0x30) >>> 0;
                        if (argnum < errormsgcount)
                        {
                            str = args[argnum];
                        }
                    }
                    result += str;
                }
                return result;
            }
        };

        _pApplication.addErrorMessage = function (lang, code, msg)
        {
            if (!nexacro._errortable) nexacro._errortable = {};
            var args_len = arguments.length;
            if (args_len == 1)
            {
                var errortable = lang;
                for (locale in errortable)
                {
                    var errortable_locale = errortable[locale];
                    for (code in errortable_locale)
                    {
                        message = errortable_locale[code];
                        if (!nexacro._errortable[locale])
                            nexacro._errortable[locale] = {};
                        nexacro._errortable[locale][code] = message;
                    }
                }
            }
            else
            {
                if (nexacro._errortable[lang] == null)
                {
                    nexacro._errortable[lang] = nexacro._errortable["en"];
                }

                if (nexacro._errortable[lang])
                    nexacro._errortable[lang][code] = msg;
            }
        };


        _pApplication._setRunBaseWindow = function (_window)
        {
            // script가 시작된 곳을 저장해둠. xp9 runbase 역할
            if (this._runbase_window)
                return false;
            this._runbase_window = _window;
            return true;
        };
            
        _pApplication._loadGlobalValueData = function (key, url)
        {
        };

        _pApplication._addGlobalVariableFromGlobalValue = function ()
        {
            var globalvalues = nexacro._getGlobalValueData(this.key, this.xadl);
            if (!globalvalues)
                return;

            // this._globalvalue 예:
            // this._globalvalue = "a=A,b=B,c=씨,d='D,D',e=\"E=mc2,U+=LG\"";

            // Comma Separated, Quote 사용가능. 2013.04.03 neoarc
            var search_regexpr = /([a-z0-9_]*)(=|:[sgc]=)(([^,'"]+)|('[^']*')|("[^"]*"))(,|$)/ig;
            var matched;
            while (matched = search_regexpr.exec(this._globalvalue))
            {
                var globalvalue = matched[0]; // a=A, 또는 a=A
                if (globalvalue.charAt(globalvalue.length - 1) == ',')
                    globalvalue = globalvalue.substr(0, globalvalue.length - 1);

                var equal_idx = globalvalue.indexOf("=");
                var variable_name = globalvalue.substr(0, equal_idx);

                // 숫자로 시작하는 변수명인 경우 걸러냄
                if (variable_name[0] >= '0' && variable_name.charAt(0) <= '9')
                    continue;
                var variable_value = globalvalue.substr(equal_idx + 1, globalvalue.length - equal_idx);

                // Type 지정여부 체크
                var variable_type = null;
                var colon_idx = variable_name.indexOf(":");
                if (colon_idx > 0)
                {
                    variable_type = variable_name.substr(colon_idx + 1, 1);
                    variable_name = variable_name.substr(0, colon_idx);
                }

                // Quote 처리 된 경우 Quote 제거
                if (variable_value.length > 2 &&
                    ((variable_value.charAt(0) == '\'' && variable_value.charAt(variable_value.length - 1) == '\'') ||
                     (variable_value.charAt(0) == '\"' && variable_value.charAt(variable_value.length - 1) == '\"')))
                {
                    variable_value = variable_value.substr(1, variable_value.length - 2);
                }

                // Add to GlobalVariable
                switch (variable_type)
                {
                    case 's':
                        // cookie

                        // TODO expire date는 무슨값을 넣어야 하는지?
                        var expire;
                        this.setVariable(variable_name, variable_value, "share", expire);
                        break;
                    case 'g':
                    default:
                        // global(default)
                        this.setVariable(variable_name, variable_value);
                        break;
                }
            }
        };

        //==============================================================================
        // nexacro.Application : Layout control Methods
        //==============================================================================
        // Application Infomation Control Utils Get/Set
        // this function will deprecate!!, use 'load' function! 
        _pApplication.quickView = function (url, project_path, archive_path)
        {
            if (project_path)
            {
                // archive 경우 server path 지정
                this._project_url = project_path;
                nexacro._project_url = project_path;
                var base_url = nexacro._getProjectBaseURL(url);

                if (this._project_url != base_url)
                {
                    this._localcache_path = base_url;
                }
            }

            this.loadADL(url);
        };

        _pApplication.load = function (key, url, project_path, archive_path)
        {
            if (project_path)
            {
                // archive 경우 server path 지정
                this._project_url = project_path;
                nexacro._project_url = project_path ? project_path.substr(project_path.length - 1) == "/" ? project_path : project_path + "/" : project_path;
                var base_url = nexacro._getProjectBaseURL(url);

                if (this._project_url != base_url)
                {
                    this._localcache_path = base_url;
                }
            }

            this.loadADL(url, key);
        };


        _pApplication.loadADL = function (url, key)
        {
            this.key = key;

            var request_url = url;
            if (request_url.length > 5 && request_url.substring(request_url.length - 5) == ".xadl")
            {
                request_url = request_url + ".js";
            }

            var server_url = request_url;
            if (nexacro._isAbsolutePath(request_url))
            {
                if (!this._project_url)
                {
                    this._project_url = nexacro._getBaseUrl(request_url);
                    nexacro._project_url = this._project_url;
                }
            }
            else
            {
                if (!this._project_url)
                {
                    // archive adl을 사용하는 경우 외부에서 지정
                    this._project_url = nexacro._getProjectBaseURL(request_url);
                    nexacro._project_url = this._project_url;
                }
                server_url = request_url = this._transfullurl(this._project_url, request_url);

                if (this._localcache_path)
                {
                    var cache_url = url;
                    if (cache_url.substring(cache_url.length - 3) == ".js")
                    {
                        cache_url = cache_url.substring(0, cache_url.length - 3);
                    }
                    if (this._hasLocalCacheUrl(cache_url))
                    {
                        request_url = this._transfullurl(this._localcache_path, url);
                    }
                }
            }

            this.xadl = server_url;
            var service = this._getServiceObject(server_url);

            this._load_manager.loadMainModule(request_url, false, true, false, service);
        };



        _pApplication._addTypedefintion = function (typedefintion)
        {
            var typedefinition_url;
            typedefinition_url = this._getServiceLocation(typedefintion.name);

            if (typedefintion && typedefintion.context == this)
            {
                this._typedefinition_url = typedefinition_url;
                this.services = typedefintion.services;
            }
            this._typedefinitions.push({ id: typedefinition_url, obj: typedefintion });

        };


        _pApplication._findTypedefintion = function (typedefintion_url)
        {
            var cnt = this._typedefinitions.length;
            var i = 0;
            for (i = 0; i < cnt; i++)
            {
                if (this._typedefinitions[i].id == typedefintion_url)
                    return 0;
            }
            return -1;
        };

        //prefixid, type, url, cachelevel, codepage, language, version, communication
        _pApplication._addService = function (typedefinition, prefixid, type, url, cachelevel, codepage, language, version, communication)
        {
            if (typedefinition)
            {
                if (typeof typedefinition == "string")
                {
                    //typedefinition.addService(prefixid, type, url, cachelevel, codepage, language, version, communication);
                    var service = new nexacro.ServiceItem(prefixid, type, url, cachelevel, codepage, language, version, communication);
                    this.services.add(prefixid, service);
                    // this.services = service;

                    var typedefinition_url = this._getServiceLocation(typedefinition);
                    if (typedefinition_url)
                    {
                        this._typedefinition_url = typedefinition_url;
                    }
                    nexacro._typedefinition_url = typedefinition_url;
                }
                else
                {
                    typedefinition.addService(prefixid, type, url, cachelevel, codepage, language, version, communication);
                    this.services = typedefinition.services;
                }

            }

        };


        //var moudles = ["Button.js","Static.js"];
        _pApplication._loadModules = function (modules)
        {
            var base_url;
            if (this._localcache_path)
                base_url = this._localcache_path;

            this._component_uri = this._getServiceLocation(this._component_uri, base_url);

            // components has been loaded in index.html
            if (nexacro.Component)
                return;

            var cnt = modules.length;
            for (var i = 0; i < cnt; i++)
            {
                if (modules[i])
                {
                    var realmoudlueurl = this._getServiceLocation(modules[i], this._component_uri);
                    var service = this._getServiceObject(modules[i]);
                    this._load_manager.loadGlobalModule(realmoudlueurl, true, service);
                }
            }
        };

       
        _pApplication._addClasses = function (registerclass)
        {
            this._registerclass = registerclass;
        };


        // 호출 시점에 대한 논의가 필요함
        _pApplication._addRegisterClass = function (registername, classname)
        {
            var registerclass = this._registerclass;
            registerclass.push({ id: registername, classname: classname });
        };

        // 호출 시점에 대한 논의가 필요함
        //현재는 mainwindow 생성시에 등록하도록 함
        _pApplication._RegisterClass = function (_jsContext)
        {
            var registerclass = this._registerclass;
            var len = registerclass.length;
            for (var i = 0; i < len; i++)
            {
                var item = registerclass[i];
                if (item)
                {
                    _jsContext[item.id] = eval(item.classname);
                }
            }
        };

        _pApplication._setAliasForJSContext = function (_jsContext)
        {
            var aliases = this._aliaslist;
            var len = aliases.length;
            for (var i = 0; i < len; i++)
            {
                var item = this.components[aliases[i].name];
                if (item)
                {
                    _jsContext[item.name] = eval(item.classname);
                }
            }
        };

        _pApplication._addExtensionModules = function (modules)
        {
            this._extensionmodules = modules;
            var extensionmodules = this._extensionmodules;
            if (extensionmodules)
            {
                var len = extensionmodules.length;
                if (len > 0)
                {
                    for (var i = 0; i < len; i++)
                    {
                        var item = extensionmodules[i];
                        if (item)
                        {
                            nexacro._addExtensionModule(item);
                        }
                    }
                }
            }
        }


        _pApplication._addUpdateResource = function (type, updateurl, file, targetpath, ref, version, desc, failpass)
        {
            var real_url = this._getServiceLocation(file, updateurl);
            var service = this._getServiceObject(file);
            this._load_manager.loadUpdateModule(real_url, type, targetpath, ref, version, desc, failpass, service);
        }


        //1.systemtype > osversion  > device or systemtype > osversion  > default
        //2. systemtype > os > device or systemtype > os  > default
        //3. systemtype > all > device or systemtype > all > device 
        // 1 or 2 , 3 순서로 수행

        _pApplication._updateResources = function (updateresources)
        {
            if (updateresources)
            {
                var cur_osversion = nexacro._getOSVersion();   // desktop의 경우 undefined 이기 때문에 toLowerCase() 하면 안됨            
                var cur_osversion_str = (cur_osversion ? cur_osversion.toLowerCase().replace(/ /g, "_") : "default");

                var cur_systype_str = nexacro.SystemType.toLowerCase();
                if (cur_systype_str.indexOf("win64") >= 0) cur_systype_str = "win32";
                else if (cur_systype_str.indexOf("ipad") >= 0) cur_systype_str = "iphone";

                if (cur_systype_str.indexOf("android") >= 0) return;

                var selectsystemtype = updateresources[cur_systype_str];  //win32
                var updateurl;
                if (selectsystemtype)
                {
                    updateurl = selectsystemtype.updateurl;
                    this._addUpdateOS(selectsystemtype, cur_osversion_str, updateurl, true);
                    this._addUpdateOS(selectsystemtype, "all", updateurl, false);
                }
            }
        };


        _pApplication._addUpdateOS = function (systemtype, cur_osversion, url, bfindos)
        {
            var selectsystemtype = systemtype;
            var updateurl = url;
            var cur_device = nexacro.DEVICE;
            var cur_device_str = cur_device ? cur_device.toLowerCase() : "default";


            var selectosversion = selectsystemtype[cur_osversion];

            if (!selectosversion && bfindos)   //find by os 
            {
                var cur_os = nexacro._getOS();
                var cur_os_str = (cur_os ? cur_os.toLowerCase().replace(/ /g, "_") : "");
                selectosversion = selectsystemtype[cur_os_str];

                if (!selectosversion)
                    selectosversion = selectsystemtype["default"];
            }

            if (selectosversion)
            {
                if (selectosversion.updateurl)
                    updateurl = selectosversion.updateurl;

                var selectdevice = selectosversion[cur_device_str];  //device 
                if (!selectdevice)
                {
                    selectdevice = selectosversion["default"];      //default
                }

                if (selectdevice && selectdevice.resources)
                {
                    this._addUpdateDeviceResources(selectdevice, updateurl);
                }

                selectdevice = selectosversion["all"];              //all
                if (selectdevice && selectdevice.resources)
                    this._addUpdateDeviceResources(selectdevice, updateurl);
            }
        };

        _pApplication._addUpdateDeviceResources = function (device, url)
        {
            var updateurl = url;
            var selectdevice = device;
            if (selectdevice.updateurl)
                updateurl = selectdevice.updateurl;

            var realupdateurl = this._getServiceLocation(updateurl);
            var resources = selectdevice.resources;
            var len = resources.length;

            for (var i = 0; i < len; i++)
            {
                var realurl = resources[i].file;
                if (nexacro._isAbsolutePath(realurl) != true)   //상대경로일 경우 updateurl 을 적용한다. 단 updateurl은 typedefintion 을 기준으로 한다. 9.2 기준
                {
                    realurl = this._getServiceLocation(resources[i].file, realupdateurl);
                }


                var service = this._getServiceObject(resources[i].file);
                this._load_manager.loadUpdateModule(realurl, resources[i].type, resources[i].targetpath, resources[i].ref, resources[i].version, resources[i].failpass, service);
            }
        };

        _pApplication._loadInclude = function (mainurl, url, asyncmode)
        {
            var suburl = application._getServiceLocation(url);
            var includeurl = [];
            includeurl.push(suburl);
            includeurl.push(".js");
            suburl = includeurl.join("");

            var len = this._executescriptlist.length;
            for (var i = 0; i < len; i++)
            {
                if (this._executescriptlist[i].url == mainurl)
                {
                    this._executescriptlist.splice(i, 0, { url: suburl, fn: nexacro._emptyFn });
                    break;
                }
            }

            var service = application._getServiceObject(url);
            this._load_manager.loadIncludeModule(suburl, null, asyncmode, service);
        };
        
        _pApplication.loadCss = function (url)
        {
            //경로 설정하는 api 필요
            var cssurl = [];
            cssurl.push(this._getServiceLocation(url));
            cssurl.push(".js");

            var service = this._getServiceObject(url);

            this._cssurls.push(url);

            this._load_manager.loadCssModule(cssurl.join(""), null, null, service);
        };


        _pApplication.loadTheme = function (themeid, hithemeid)
        {
            if (this._curscreen)
            {
                if (this._curscreen.themeid)
                    themeid = this._curscreen.themeid;
                if (this._curscreen.hithemeid)
                    hithemeid = this._curscreen.hithemeid;
            }

            var curthemeid = themeid;
            if (nexacro._checkHighContrast() && hithemeid)
            {
                curthemeid = hithemeid;
            }

            //default
            if (curthemeid)
            {
                var themename;
                var idx = curthemeid.indexOf(".xtheme");
                if (idx < 0)
                    themename = curthemeid;
                else if (idx > 0)
                    themename = curthemeid.substring(0, idx);

                var cssurl, base_url;
                if (themename)
                {
                    this._clearLocalThemeCache();

                    var idx = themename.indexOf("::");
                    if (idx > 0)
                    {
                        var prefixurl = themename.substring(0, idx);
                        themename = themename.substring(idx + 2);

                        this._theme_uri = "./_theme_/" + prefixurl + "/" + themename;
                    }
                    else
                    {
                        this._theme_uri = "./_theme_/" + themename;
                    }

                    var bLocalCacheType = false;


                    if (this._localcache_path && this._hasLocalCacheUrl(curthemeid))
                    {
                        cssurl = this._getLocalCacheUrl(curthemeid);
                        if (cssurl)
                        {
                            var service = this._getServiceObject(curthemeid);
                            this._load_manager.loadCssModule(cssurl, null, null, service);
                            return;
                        }

                        bLocalCacheType = true;
                        base_url = this._localcache_path;
                    }

                    cssurl = this._theme_uri + "/theme.css";
                    cssurl = this._getServiceLocation(cssurl, base_url);

                    cssurl += ".js";
                    if (bLocalCacheType)
                    {
                        this._addLocalCacheUrl(curthemeid, cssurl);
                    }

                    var service = this._getServiceObject(cssurl);
                    this._load_manager.loadCssModule(cssurl, null, null, service);
                }
            }
        };

        //_pApplication.createMainFrame = function(id, left, top, width, height, parent)
        _pApplication.createMainFrame = function (id, position, left, top, width, height, right, bottom, parent)
        {
            var mainframe = new nexacro.MainFrame(id, position, left, top, width, height, right, bottom, parent);
            this[id] = this.mainframe = mainframe;
            this.all.add_item(id, mainframe);

            return mainframe;
        };

        _pApplication.createWidget = function (id, position, left, top, width, height, right, bottom, parent)
        {
            var widget;
            return widget;
        };

        _pApplication.createTray = function (id, parent)
        {
            var tray = new nexacro.Tray(id, parent);
            this.trays.add_item(id, tray);
            this.all.add_item(id, tray);

            return tray;
        };

        _pApplication.addTray = function (id, obj)
        {
            if (obj._type_name != "Tray")
                return -1;

            var idx = this.trays.add_item(id, obj);
            this.all.add_item(id, obj);
            
            return idx;
        };

        _pApplication.removeTray = function (id)
        {
            if (typeof(id) == "string")
            {
                this.trays[id]._destroy();
            }
            else
            {
                // remove all
                var cnt = this.trays.length;
                for (var i = cnt - 1; i >= 0; i--)
                {
                    this.trays[i]._destroy();
                }
            }
        };

        _pApplication._addPreloadList = function (type, url, id, args)
        {
            if (!url) return;

            var fullurl = this._getServiceLocation(url);

            var service = this._getServiceObject(url);
            if (type == "data")
            {
                this._load_manager.addPreloadItem(type, fullurl, id, args, service);
            }
            else
            {
                this._load_manager.addPreloadItem(type, url, (id ? id : this), null, service);
            }
        };

        _pApplication._loadScreenInfo = function (screeninfo)
        {
            this._screeninfo = screeninfo;

            // Simulator Level에서 강제로 세팅된 값이 있는지 알아본다.
            var arg_screenid = nexacro._getCurrentScreenID();
            
            var curscreen = this._curscreen = this._searchScrInfo(arg_screenid);
            if (curscreen)
            {
                // Minimum Zoom Factor
                if (!curscreen.zoommin)
                    curscreen._zoommin = undefined;
                else
                {
                    var zoommin = curscreen.zoommin;
                    if (typeof zoommin == "string" && zoommin.charAt(zoommin.length - 1) == "%")
                    {
                        // 100% -> 1.0
                        curscreen._zoommin = parseFloat(zoommin.slice(0, zoommin.length - 1)) / 100.0;
                    }
                    else
                    {
                        curscreen._zoommin = parseFloat(zoommin);
                    }

                    if (curscreen._zoommin >= 1)
                        curscreen._zoommin = 1;
                    nexacro._minimum_scale = curscreen._zoommin;
                }

                // Maximum Zoom Factor
                if (!curscreen.zoommax)
                    curscreen._zoommax = undefined;
                else
                {
                    var zoommax = curscreen.zoommax;
                    if (typeof zoommax == "string" && zoommax.charAt(zoommax.length - 1) == "%")
                    {
                        // 100% -> 1.0
                        curscreen._zoommax = parseFloat(zoommax.slice(0, zoommax.length - 1)) / 100.0;
                    }
                    else
                    {
                        curscreen._zoommax = parseFloat(zoommax);
                    }

                    if (curscreen._zoommax <= 1)
                        curscreen._zoommax = 1;
                    nexacro._maximum_scale = curscreen._zoommax;
                }
            }

            this._applyScreenAutozoom();
        };

        //CHECK
        _pApplication.getParentContext = function ()
        {
            return null;
        };



        // TODO : seperate typeid & refid from Compiler
        _pApplication._addCss = function (objtype, styleProp, styleobj, pseudoarr)
        {
            var type_arr = objtype.split(">");
            var cnt = type_arr.length;

            // find matched css - recursively
            var css = this._css_selectors;
            css._has_items = true;
            var type_id = "";
            var ref_id = "";
            var cls_name = "";

            for (var i = 0; i < cnt; i++)
            {
                var type_name = type_arr[i];

                // "*"
                if (type_name == "*") continue;
                if (type_name.substr(0, 1) == "#")
                {
                    ref_id += type_name;
                }
                else if (type_name.substr(0, 1) == ".")
                {
                    // allow only the last(one) classname
                    if (ref_id == "") cls_name = type_name;
                }
                else
                {
                    // case of this block : 
                    // ==> type selector(type) or type + class selector(type.cssclass)

                    if (type_name.substr(0, 2) == "*.") // *.cssclass
                        type_name = type_name.substring(1);

                    // allow only the last(one) typename
                    if (ref_id == "") type_id = type_name;
                }
            }
            if (type_id != "")
            {
                var css2 = css[type_id];
                if (!css2)
                {
                    css[type_id] = css2 = { _is_selector: true };
                }
                css = css2;
            }
            else if (cls_name != "")
            {
                var css2 = css[cls_name];
                if (!css2)
                {
                    css[cls_name] = css2 = { _is_selector: true };
                }
                css = css2;
            }

            if (ref_id != "")
            {
                var css2 = css[ref_id];
                if (!css2)
                {
                    css[ref_id] = css2 = { _is_selector: true };
                }
                css = css2;
            }

            css._has_attr_items = true;
            // for loop unrolling
            // max pseudo arry cnt == 7 : normal, mouseover, selected, pushed, disabled, focused, readonly
            var css_item = css[styleProp];
            if (!css_item) css[styleProp] = css_item = {};
            var i = 0;
            var pseudo_cnt = pseudoarr.length;
            var cur_pseudo;
            if (i >= pseudo_cnt) return;
            cur_pseudo = pseudoarr[i++];
            css_item[cur_pseudo] = styleobj;
            if (i >= pseudo_cnt) return;
            cur_pseudo = pseudoarr[i++];
            css_item[cur_pseudo] = styleobj;
            if (i >= pseudo_cnt) return;
            cur_pseudo = pseudoarr[i++];
            css_item[cur_pseudo] = styleobj;
            if (i >= pseudo_cnt) return;
            cur_pseudo = pseudoarr[i++];
            css_item[cur_pseudo] = styleobj;
            if (i >= pseudo_cnt) return;
            cur_pseudo = pseudoarr[i++];
            css_item[cur_pseudo] = styleobj;
            if (i >= pseudo_cnt) return;
            cur_pseudo = pseudoarr[i++];
            css_item[cur_pseudo] = styleobj;
            if (i >= pseudo_cnt) return;
            cur_pseudo = pseudoarr[i++];
            css_item[cur_pseudo] = styleobj;
        };

        // find_css list
        _pApplication._make_find_csslist = function ()
        {
            var css_list = this._find_csslist;
            if (!css_list)
            {
                css_list = [];
                var pThis = this;
                var css;
                while (pThis)
                {
                    css = pThis._css_selectors;
                    if (css && css._has_items)
                    {
                        css_list.push(css);
                    }

                    if (pThis.parent == null && !pThis._is_application)
                        pThis = application;
                    else if (pThis._is_frame && pThis._is_popup_frame)  //for popupframe
                        break;
                    else
                        pThis = pThis.parent;
                }
                this._find_csslist = css_list;
            }
            return css_list;
        };

        // protocol is Global resource - App level
        _pApplication._addProtocol = function (name, protocoladp)
        {
            this._protocols[name] = protocoladp;
        };

        _pApplication._isProtocol = function (name)
        {
            var registerclass = this._registerclass;
            var len = registerclass.length;
            for (var i = 0; i < len; i++)
            {
                var item = registerclass[i];
                if (item && item.id == name && nexacro._isRuntimeProtocol(name) == false)
                {
                    return true;
                }
            }
            return false;
        };

        _pApplication._getProtocol = function (name)
        {
            return this._protocols[name];
        };

        _pApplication._removeProtocols = function ()
        {
            var item;
            var protocols = this._protocols;
            for (item in protocols)
            {
                if (protocols[item].finalize)
                    protocols[item].finalize();
            }
            
            this._protocols = {};
        };

        _pApplication.setProtocolVar = function (name, key, val)
        {
            nexacro._setProtocolVar(name, key, val);
        }

        _pApplication._getNamedImage = function (id)
        {
            return this.images[id];
        };

        _pApplication._addLocalCacheUrl = function (url, localurl)
        {
            if (localurl) localurl = localurl.replace(/\\/g, "/");
            this._localcaches[url] = localurl;
        };
        _pApplication._hasLocalCacheUrl = function (url)
        {
            return (url in this._localcaches);
        };
        _pApplication._getLocalCacheUrl = function (url)
        {
            return this._localcaches[url];
        };
        _pApplication._addLocalThemeCacheUrl = function (url, localurl)
        {
            nexacro._addlocalthemecacheurl = true;
            if (localurl) localurl = localurl.replace(/\\/g, "/");
            this._localthemecaches[url] = localurl;
        };
        _pApplication._hasLocalThemeCacheUrl = function (url)
        {
            return (url in this._localthemecaches);
        };
        _pApplication._getLocalThemeCacheUrl = function (url)
        {
            return this._localthemecaches[url];
        };
        _pApplication._clearLocalThemeCache = function ()
        {
            this._localthemecaches = {};
        };

        _pApplication._getService = function (prefix, typedefintion_url)
        {
            if (typedefintion_url)
            {
                var cnt = this._typedefinitions.length;
                var i = 0;
                for (i = 0; i < cnt; i++)
                {
                    if (this._typedefinitions[i].id == typedefintion_url)
                        return this._typedefinitions[i].obj.services[prefix];
                }
            }

            return this.services[prefix];
        };


        _pApplication._addVariable = function (id, val, usecookie, defaultval, expire)
        {
            //runtime과 spec 조정 globalvars.js에 있는 variable의 default값은 ""
            //addvariable을 통해서 들어올때는 val 변수 그대로 처리
            if (arguments.length == 3 && val == null)
            {
                val = "";
            }

            this[id] = val;
            usecookie = !!(usecookie == true || usecookie == "true");
            if (!usecookie)
            {
                this._variables.push(id);
            }
            else
            {
                this._cookie_variables.push(id);
                nexacro._setCookie(id, val, expire);
            }

            this.all.add_item(id, val);

            return true;
        };

        _pApplication._getVariable = function (id)
        {
            return this[id];
        };

        _pApplication._existVariable = function (id)
        {
            var vars = this._variables;
            var len = vars.length;
            for (var i = 0; i < len; i++)
            {
                if (vars[i] == id) return true;
            }

            var cookies = this._cookie_variables;
            len = cookies.length;
            for (var i = 0; i < len; i++)
            {
                if (cookies[i] == id) return true;
            }
            return false;
        };


        _pApplication._addImage = function (id, url)
        {
            url = url.replace(/\\/g, "/");
            this.images.add(id, url);
        };

        _pApplication._addDataset = function (id, obj)
        {
            this._addObject(id, obj);
            this._datasets.push(obj);
        };

        _pApplication._addObject = function (id, obj)
        {
            this[id] = obj;
            this.all.add_item(id, obj);
        };

        _pApplication._getDatasetObject = function (datasetid)
        {
            return this[datasetid];
        };

        _pApplication._waitCursor = function (wait_flag, context)
        {
            var mainframe = this.mainframe;
            if (mainframe)
            {
                mainframe._waitCursor(wait_flag, context);
            }
        };

        //==============================================================================
        _pApplication._getProtocolLocation = function (str)
        {
            if (!str) return "";

            if (str.indexOf("://") >= 0)
            {
                var strA = str.split("://");
                var name = strA[0];
                var url = strA[1];
                var protocolUrl = this._getProtocol(name);
                if (protocolUrl != null)
                {
                    return nexacro._mergeUrl(protocolUrl, url);
                }
            }
            return str;
        };


        /***
        * 1. absolute check
        * 2. '\\' -> '/'
        * 3. remove "." , ".."
        * 4. merge to full path
        ***/
        _pApplication._transfullurl = function (baseurl, url)
        {
            if (nexacro._isAbsolutePath(url) == true)
                return url;

            baseurl = nexacro._getBaseUrl(baseurl);

            var fullurl = null;

            if (baseurl.indexOf("?") >= 0)
            {
                fullurl = baseurl + url;
            }
            else
            {
                fullurl = nexacro._mergeUrl(baseurl, url);
            }

            var urlarr = fullurl.split("/");

            var n = urlarr.length;

            var realpath = [];

            var i = 0;
            while (i < n)
            {
                if (urlarr[i] != "." && urlarr[i] != "..")
                {
                    break;
                }
                realpath.push(urlarr[i]);
                i++;
            }

            while (i < n)
            {
                if (urlarr[i] != ".")
                {
                    if (urlarr[i] == "..")
                    {
                        realpath.pop();
                    }
                    else
                    {
                        realpath.push(urlarr[i]);
                    }
                }
                i++;
            }

            return realpath.join("/");
        };

        _pApplication._transurl = function (baseurl, typedefintionurl, url)
        {
            // var exturl = this._getProtocolLocation(url);
            var exturl = url;

            //theme://
            if (exturl.indexOf("theme://") >= 0)
            { // _localthemecaches
                var bLocalCacheType = false;
                if (this._hasLocalCacheUrl(url))
                {
                    var local_url = this._getLocalCacheUrl(url);
                    if (local_url) return local_url;

                    bLocalCacheType = true;
                }

                var strA = exturl.split("://");
                var name = strA[0];
                var suburl = strA[1];

                var realpath = [];
                var separator = "/";

                var theme_uri = this._theme_uri;
                realpath.push(theme_uri);

                if (theme_uri.charAt(theme_uri.length - 1) == "/")
                    separator = "";
                realpath.push(suburl);

                exturl = realpath.join(separator).replace(/\\/g, "/");
                if (nexacro._isAbsolutePath(exturl) != true)
                {
                    if (bLocalCacheType)
                    {
                        exturl = this._transfullurl(this._localcache_path, exturl);
                    }
                    else
                    {
                        exturl = this._transfullurl(this._project_url, exturl);
                    }
                }

                if (bLocalCacheType)
                {
                    this._addLocalCacheUrl(url, exturl);
                }
            }
            else
            {
                var bLocalCacheType = false;
                if (this._hasLocalCacheUrl(url))
                {
                    var local_url = this._getLocalCacheUrl(url);
                    if (local_url) return local_url;

                    bLocalCacheType = true;
                }

                if (exturl.indexOf("::") < 0)
                {
                    if (bLocalCacheType)
                    {
                        baseurl = this._localcache_path;
                    }
                    exturl = this._transfullurl(baseurl, exturl);
                }
                else
                {
                    //service 
                    var strA = exturl.split("::");
                    var prefix = strA[0];
                    var suburl = strA[1];
                    var service = this._getService(prefix, typedefintionurl);
                    if (service != null)
                    {
                        var serviceurl = service.url;
                        if (serviceurl.charAt(serviceurl.length - 1) != "/")
                            serviceurl = serviceurl + "/";

                         if (suburl.charAt(0) == "/")
                             suburl = suburl.substring(1);

                        if (nexacro._isAbsolutePath(serviceurl) == true)
                        {
                            exturl = this._transfullurl(serviceurl, suburl);
                        }
                        else
                        {
                            var basepath;
                            if (bLocalCacheType)
                            {
                                basepath = this._transfullurl(this._localcache_path, serviceurl);
                            }
                            else
                            {
                                basepath = this._transfullurl(typedefintionurl, serviceurl);
                            }
                            exturl = this._transfullurl(basepath, suburl);
                        }

                    }
                    else
                    {
                        exturl = exturl.replace(/\\/g, "/");
                    }
                }

                if (bLocalCacheType)
                {
                    this._addLocalCacheUrl(url, exturl);
                }
            }
            return exturl;
        };


        _pApplication._getServiceLocation = function (url, baseurl, typedefinition_url)
        {
            if (!typedefinition_url)
                typedefinition_url = this._typedefinition_url;

            if (!baseurl)
                baseurl = this._project_url;

            return this._transurl(baseurl, typedefinition_url, url);
        };

        _pApplication._getFDLLocation = function (fdlurl, baseurl)
        {
            if (!fdlurl || fdlurl.length <= 0) return fdlurl;

            var url = this._getServiceLocation(fdlurl, baseurl);
            if (url.length > 5)
            {
                if (url.substring(url.length - 5) == ".xfdl")
                {
                    url = url + ".js";
                }
            }
            return url;
        };
        /*
        _pApplication._getImageLocation : nexacro._getImageLocation 로 옮김 open 성능

        _pApplication._getImageLocation = function (str, baseurl)
        {
            var url = this._getNamedImage(str);
            if (url)
            {
                baseurl = this._project_url + this._globalvar_uri;
            }
            else
            {
                url = str;
            }

            return this._getServiceLocation(url, baseurl);
        };
        */
        _pApplication._getServiceObject = function (url, bDefaultNone)
        {
            var serviceprefix = url.split("::");

            if (serviceprefix.length >= 2)
            {
                var service = this._getService(serviceprefix[0]);
                if (service)
                    return service;
            }

            if (!this._defaultservice)
            {
                this._defaultservice = new nexacro.ServiceItem();
                this._defaultservice.cachelevel = "session";
                this._defaultservice.version = "0.0";
            }

            if (url.toLowerCase().indexOf("file://") >= 0 || bDefaultNone)
                this._defaultservice.cachelevel = "none";
            else
                this._defaultservice.cachelevel = "session";

            return this._defaultservice;
        };

        //==============================================================================
        // nexacro.Application : Methods
        //==============================================================================
        _pApplication.flashWindow = function (strType, nCount, nInterval)
        {
            return this.mainframe._window._flashWindow(strType, nCount, nInterval);
        };

        _pApplication.getActiveFrame = function ()
        {
            var frame = this.mainframe;
            if (!frame) return null;

            var _window = frame._getWindow();
            if (_window && _window._is_active_window)
                return _window.getActiveFrame();

            var popupframes = this.popupframes;
            var popupframes_len = popupframes ? popupframes.length : 0;
            for (var i = 0; i < popupframes_len; i++)
            {
                _window = popupframes[i]._getWindow();
                if (_window && _window._is_active_window)
                    return _window.getActiveFrame();
            }
            return null;
        };
        _pApplication.getActiveForm = function ()
        {
            var frame = this.getActiveFrame();
            if (frame)
                return frame.form;
            else
                return null;
        };

        _pApplication.userNotify = function (notifyid, message)
        {
            return this.on_fire_onusernotify(this, notifyid, message);
        };

        _pApplication.callscript = function (expr)
        {
            var start = expr.indexOf('(');
            var end = expr.indexOf(')', start + 1);

            if (start == -1 || end == -1)
            {
                return;
            }

            var name = expr.substring(0, start).trim();
            var args = expr.substring(start + 1, end).trim();

            var call_fn = this[name];
            if (typeof call_fn == "function")
            {
                var thisp = this;
                return eval("call_fn.call(thisp, " + args + ");");
            }
        };

        _pApplication.trace = function (log, level)
        {
            var loglevel = 4; // debug
            if (level)
                trace(level);
            else
                trace(log);

        };

        _pApplication.addVariable = function (id, value, type, expire)
        {
            if (this[id]) return -1;

            var use_cookie = false;
            if (type)
            {
                if (type == "share")
                {
                    use_cookie = true;
                }
                else if (type == "header")
                {
                    this._header_variables.push(id);
                }
            }

            return this._addVariable(id, value, use_cookie, null, expire) == true ? 1 : 0;
        };

        //variable이 존재하면 set
        //variable이 없으면 add 
        _pApplication.setVariable = function (id, value, type, expire)
        {
            var vars = this._variables;
            var len = vars.length;
            for (var i = 0; i < len; i++)
            {
                if (vars[i] == id)
                {
                    this[id] = value;
                    return -1;
                }
            }

            var header_vars = this._header_variables;
            len = header_vars.length;
            for (var i = 0; i < len; i++)
            {
                if (header_vars[i] == id)
                {
                    this[id] = value;
                    return -1;
                }
            }

            var cookies = this._cookie_variables;
            len = cookies.length;
            for (var i = 0; i < len; i++)
            {
                if (cookies[i] == id)
                {
                    nexacro._setCookie(id, value, expire);
                    this[id] = value;
                    return -1;
                }
            }

            return this.addVariable(id, value, type, expire);
        };

        _pApplication.getVariable = function (id)
        {
            var vars = this._variables;
            var len = vars.length;
            for (var i = 0; i < len; i++)
            {
                if (vars[i] == id)
                {
                    return this[id];
                }
            }
            var cookies = this._cookie_variables;
            len = cookies.length;
            for (var i = 0; i < len; i++)
            {
                if (cookies[i] == id)
                {
                    var ret = nexacro._getCookie(id);
                    if (ret == undefined)
                    {
                        cookies.splice(i, 1);
                        this[id] = null;
                    }
                    return ret;
                }
            }
            return null;
        };

        _pApplication.removeVariable = function (id)
        {
            var vars = this._variables;
            if (vars)
            {
                var len = vars.length;
                for (var i = 0; i < len; i++)
                {
                    if (vars[i] == id)
                    {
                        vars.splice(i, 1);
                        this[id] = null;
                        this.all.delete_item(id);
                        return;
                    }
                }
            }
            var cookies = this._cookie_variables;
            if (cookies)
            {
                len = cookies.length;
                for (var i = 0; i < len; i++)
                {
                    if (cookies[i] == id)
                    {
                        cookies.splice(i, 1);
                        this[id] = null;
                        return;
                    }
                }
            }
        };

        _pApplication.isNumeric = function (v)
        {
            if (!v) return false;
            if (typeof v == "string")
            {
                var len = v.length;
                for (var i = 0; i < len; i++)
                {
                    var ch = v.charAt(i);
                    if (ch < "0" || ch > "9") return false;
                }
                return true;
            }
            return false;
        };

        _pApplication.lookup = function (name)
        {
            if (name in this)
                return this[name];
            this._global_context[name];
        };

        _pApplication.lookupSetter = function (name, fnname)
        {
            if (!fnname) fnname = "set_" + name;

            var fn = this[fnname];
            if (fn)
            {
                return new nexacro.SetterBinder(this, name, fn);
            }
            if (name in this)
            {
                return new nexacro.PropBinder(this, name);
            }
            return new nexacro.PropBinder(this._global_context, name);
        };

        _pApplication.lookupFunc = function (name)
        {
            var fn = this[name];
            if (fn && fn instanceof Function)
            {
                return new nexacro.FuncBinder(this, fn);
            }
            fn = this._global_context[name];
            if (fn && fn instanceof Function)
            {
                return new nexacro.FuncBinder(this._global_context, fn);
            }
            return null;
        };

        /*
        comp 	       : 지정한 component 부터 하위로 검색 (MainFrame/ChildFrame/Form/Component 지정가능)		
        startcomp 	   : 지정한 component 부터 다음검색 (미지정시 처음부터)		
        findtext 	   : 찾고자 하는 text		
        label/desc/all : 검색대상 Accessilibity Object의 Property (label:lable, desc:description, all:label+description) 		
        next/prev	   : 지정한 startcomp로부터 검색방향 (next:동일 level next, prev:동일 level prev) 	
                         startcomp가 미지정이면, 지정한 component의 child 기준으로 next면 First Child, prev면 Last Child 부터 검색됨	
        child/all	   : 지정한 comp로부터 검색범위 (child:직속 하위 component/control, all:모든 하위 component/control) 	
                         지정한 component가 form 계열일 경우 child 검색은 component 단위까지로 제한됨	
        result	       : 검색된 Component, 복수일경우 첫번째를 리턴, 없으면 null		
        */
        _pApplication.findAccessibility = function (comp, startcomp, value, type, dir, depth)
        {
            if (!comp || !value) //|| !type  || !dir || !depth)
                return null;

            // combo,calendar,spin,chart는 하위 control검색
            // grid는 band/cell단위 검색
            // list,radio는 item단위 검색
            if (comp._findAccessibility)
                return comp._findAccessibility(comp, startcomp, value, type, dir, depth);

            if (depth == "child")
                depth = 2;
            else
                depth = -1; // infinite

            return this._findAccessibility(comp, startcomp, value, type, dir, depth);
        }

        // findAccessibility의 실제 검색 메소드
        // comp의 Child 레벨 부터 검색한다.
        _pApplication._findAccessibility = function (comp, startcomp, value, type, dir, depth, findfrom)
        {
            // Validation
            // 1:true / 0:false / -1:startcomp matched
            var _validation = function (obj, startcomp)
            {
                if (!obj._isVisible())
                    return 0;
                if (obj == startcomp)
                    return -1;
                //if (startcomp != null) // startcomp 지정시 startcomp 이전 검색대상은 모두 무시
                //    return 0;
                var accessibility = obj.on_find_CurrentStyle_accessibility(obj._pseudo);
                if (!accessibility)
                    return 0;
                var label = accessibility.label; 
                var desc = accessibility.description; 
                if ((type == undefined || type == "all") && (label.toLowerCase().match(value) || desc.toLowerCase().match(value)))
                    return 1;
                else if ((type == "label") && label.toLowerCase().match(value))
                    return 1;
                else if ((type == "desc") && desc.toLowerCase().match(value))
                    return 1;
                return 0;
            };

            // child로 검색한 경우 검색종료
            if (depth == 0)
                return null;
            depth = depth - 1;

            if (!findfrom)
                findfrom = comp;

            value = value.toLowerCase();

            // Find 로직을 각각의 컴포넌트에 코딩 할 필요가 있을지??
            var ret;
            if (comp instanceof nexacro.MainFrame)
            {
                ret = _validation(comp.frame, startcomp);
                if (ret == 1)
                    return comp.frame;
                if (ret == -1)
                    startcomp = null;

                return this._findAccessibility(comp.frame, startcomp, value, type, dir, depth);
            }
            else if (comp instanceof nexacro.FrameSet)
            {
                // TODO check 무슨 순서대로 검색해야 할지?
                var child_list = comp.frames;
                var child_length = child_list.length;
                var i = 0;
                if (startcomp)
                {
                    var index = nexacro._indexOf(child_list, startcomp) + 1;
                    if (index > 0)
                        i = index;
                }
                for (; i < child_length; i++)
                {
                    var child = (dir == "prev") ? child = child_list[child_length - 1 - i] : child_list[i];
                    ret = _validation(child, startcomp);
                    if (ret == 1)
                        return child;
                    if (ret == -1)
                        startcomp = null;

                    if (depth != 1)
                    {
                        ret = this._findAccessibility(child, startcomp, value, type, dir, depth);
                        if (ret)
                            return ret;
                    }
                }
            }
            else if (comp instanceof nexacro.ChildFrame)
            {
                ret = _validation(comp.form, startcomp);
                if (ret == 1)
                    return comp.form;
                if (ret == -1)
                    startcomp = null;

                return this._findAccessibility(comp.form, startcomp, value, type, dir, depth, findfrom);
            }
            else if (comp instanceof nexacro.Tab)
            {
                var active_tabpage = comp._child_list[comp.tabindex];
                ret = _validation(active_tabpage, startcomp);
                if (ret == 1)
                    return active_tabpage;
                if (ret == -1)
                    startcomp = null;

                return this._findAccessibility(active_tabpage, startcomp, value, type, dir, depth, findfrom);
            }
            else if (comp instanceof nexacro.Form) // form, div, tabpage, popupdiv?
            {
                // Form은 taborder순으로 검색함
                //var child_list = comp._child_list;
                var child_list = comp._getSortedDecendants(comp);
                var child_length = child_list.length;
                var i = 0;
                if (startcomp)
                {
                    var index = nexacro._indexOf(child_list, startcomp) + 1;
                    if (index > 0)
                        i = index;
                }
                for (; i < child_length; i++)
                {
                    var child = (dir == "prev") ? child = child_list[child_length - 1 - i] : child_list[i];
                    ret = _validation(child, startcomp);
                    if (ret == 1)
                        return child;
                    //if (ret == -1)
                    //    startcomp = null;

                    if (depth != 1 && child instanceof nexacro.Form) // div이면 더 들어가봄.
                    {
                        ret = this._findAccessibility(child, startcomp, value, type, dir, depth, findfrom);
                        if (ret)
                            return ret;
                    }
                }
            }
            else if (findfrom == comp)
            {
                // TODO Component자신에서 시작된 경우 Control까지 검색
                // Control을 내부적으로 관리하는 기능 구현이 우선임.
            }

            return null;
        };

        //strName,strFormURL,objParentFrame,{objArgumentList},strOpenStyle,nLeft,nTop[,nRight,nBottom[,objOpener]]
        //str_id, _parent_frame, arr_arg, opener, _lockmode, callback, _is_async
        _pApplication.open = function (id, formurl, parent_frame, arr_arg, openstyles, left, top, width, height, opener)
        {
            var parentframe = parent_frame;
            if (parentframe && parentframe[id])
            {
                throw nexacro.MakeNativeError(this, "native_exist_id", id);
            }

            //popupframe에 있는지 먼저 체크 
            if (this._isPopupFrame(id))
            {
                throw nexacro.MakeNativeError(this, "native_exist_id", id);
            }

            var parent_window = parentframe ? parentframe._getWindow() : null;
            var resizable = false;
            var layered = false;
            var showontaskbar = false;
            if (!parent_window)
                showontaskbar = true;

            if (openstyles)
            {
                var openstyle = openstyles.split(" ");
                for (var i = 0; i < openstyle.length; i++)
                {
                    var style = openstyle[i].split("=");
                    if (style[0] == "resizable")
                        resizable = nexacro._toBoolean(style[1]);
                    if (style[0] == "layered")
                        layered = nexacro._toBoolean(style[1]);
                    if (style[0] == "showontaskbar")
                        showontaskbar = nexacro._toBoolean(style[1]);
                }
            }

            var option;
            var frameopener = opener;
            if (opener == null || opener == undefined)
            {
                var _focus_obj = null;
                if (parentframe && parentframe._focusManager)
                    _focus_obj = parentframe._focusManager[0];
                if (_focus_obj)
                {
                    if (_focus_obj.parent._is_form)
                        frameopener = _focus_obj.parent;
                    else
                        frameopener = parentframe ? parentframe.form : null;
                }
                else
                {
                    frameopener = parentframe ? parentframe.form : null;
                }
            }

            if (!this._popupframeoption)
                this._popupframeoption = {};

            if (width == undefined || width < 0)
                width = 0;
            if (height == undefined || height < 0)
                height = 0;

            this._popupframeoption[id] = {
                "_openstyles": openstyles,
                "_formurl": formurl,
                "_parentwindow": parent_window,
                "_opener": frameopener,
                "_args": arr_arg,
                "_parentframe": parentframe,
                "_left": left,
                "_top": top,
                "_width": width,
                "_height": height
            }

            var _handle = nexacro._createOpenWindowHandle(parent_window, id, formurl, left, top, width, height, resizable, layered, showontaskbar, false);
            if (_handle)
                return true;
            return false;
        };

        //==============================================================================
        // nexacro.Application : Properties
        //==============================================================================
        // Application Object's properties

        //추후 삭제 
        _pApplication.set_useajaximagefilter = function (v)
        {

        };

        _pApplication.set_version = function (v)
        {
            this.version = v;
        };

        //"none" : 로그 파일을 만들지 않습니다.
        //"new" : Application이 시작할때마다 로그 파일을 새로 만듭니다.
        //"append" : 기존에 있는 로그 파일에 추가합니다.

        _pApplication.set_tracemode = function (v)
        {
            var tracemode = this.tracemode;

            if (tracemode != v)
            {
                this.tracemode = v;
                if (this.tracemode != "append")
                {
                    nexacro._deleteTraceLogFile();
                }
            }
        };

        _pApplication.set_traceduration = function (v)
        {
            var traceduration = this.traceduration;
            var val = nexacro._parseInt(v);

            if (traceduration != val)
            {
                this.traceduration = val;
                if (this.tracemode == "append" && val < 1)
                {
                    nexacro._deleteTraceLogFile();
                }
            }
        }

        _pApplication.set_usehttpkeepalive = function (v)
        {
            this.usehttpkeepalive = nexacro._toBoolean(v);
        };

        _pApplication.set_useproxykeepalive = function (v)
        {
            this.useproxykeepalive = nexacro._toBoolean(v);
        };

        _pApplication.set_httptimeout = function (v)
        {
            nexacro._setHttpTimeout(v);
        };

        _pApplication.set_proxytimeout = function (v)
        {
            this.proxytimeout = nexacro._parseInt(v);
        };

        _pApplication.set_httpretry = function (v)
        {
            nexacro._setHttpRetry(v);
        };

        _pApplication.set_proxyretry = function (v)
        {
            this.proxyretry = nexacro._parseInt(v);
        };

        _pApplication.set_themeid = function (v)
        {
            this.themeid = v;
        };

        _pApplication.set_usewaitcursor = function (v)
        {
            this.usewaitcursor = nexacro._toBoolean(v);
        };

        _pApplication.set_licenseurl = function (v)
        {
            this.licenseurl = v;
        };

        _pApplication.set_mousewheeltype = function (v)
        {
            this.mousewheeltype = v;
        };

        _pApplication.set_imepastemode = function (v)
        {
            this.imepastemode = v;
        };

        _pApplication.set_addcookietovariable = function (v)
        {
            this.addcookietovariable = nexacro._toBoolean(v);
        };

        // sandbox
        _pApplication.set_filesecurelevel = function (v)
        {
            nexacro._setFileSecureLevel(v);
        };

        _pApplication.set_networksecurelevel = function (v)
        {
            nexacro._setNetworkSecureLevel(v);
        };

        _pApplication.set_locale = function (v)
        {
        	//this.locale = nexacro._parseInt(v);
        	if (!this.locale)
        	{
        		this.locale = v;
        		this._setLocale(v);
        	}
        };

        _pApplication._setLocale = function (v)
        {
        	var mainframe = this.mainframe;
        	this._locale = v;

        	if (mainframe)
        	{
        		mainframe._setLocale(v);
        	}
        };

        _pApplication.set_enabletouchevent = function (v)
        {
            this.enabletouchevent = nexacro._toBoolean(v);
        };

        _pApplication.set_tabkeycirculation = function (v)
        {
            if (this.tabkeycirculation != v)
            {
                var _v;
                switch (v)
                {                    
                    case "form,nocycle":
                        this._tabkeycirculation = 1;
                        this.tabkeycirculation = v;
                        break;
                    default:
                        this._tabkeycirculation = 0;
                        this.tabkeycirculation = "form,cycle";
                        break;
                }
            }
        };

        //Accessibility
        _pApplication.set_enableaccessibility = function (v)
        {
            if (this._is_loaded != true && this._enableaccessibility === undefined)
            {
                this.enableaccessibility = nexacro._toBoolean(v);
                this._enableaccessibility = nexacro._toBoolean(v);
                if (this.enableaccessibility == true)
                {
                    if (this._accessibilityHistoryList == null)
                        this._accessibilityHistoryList = [];

                    nexacro._attachAccessibilityComponentFunctions();
                }
            }
        };

        _pApplication.set_accessibilityfirstovertext = function (v)
        {
            this.accessibilityfirstovertext = v;
        };

        _pApplication.set_accessibilitylastovertext = function (v)
        {
            this.accessibilitylastovertext = v;
        };

        _pApplication.set_accessibilityreplayhotkey = function (v)
        {
            var cur_accessibilityreplayhotkey = this._accessibilityreplayhotkey;
            if (cur_accessibilityreplayhotkey)
                this._unregisterHotkey(cur_accessibilityreplayhotkey);
            var hotkey = new nexacro.HotKey(v);
            if (hotkey._isEmpty())
            {
                this.accessibilityreplayhotkey = "";
                this._accessibilityreplayhotkey = null;
                delete hotkey;
            }
            else
            {
                this.accessibilityreplayhotkey = hotkey._toString();
                this._accessibilityreplayhotkey = hotkey;

                this._registerHotkey(hotkey);
            }
        };

        _pApplication.set_accessibilitywholereadhotkey = function (v)
        {
            var cur_accessibilitywholereadhotkey = this._accessibilitywholereadhotkey;
            if (cur_accessibilitywholereadhotkey)
                this._unregisterHotkey(cur_accessibilitywholereadhotkey);
            var hotkey = new nexacro.HotKey(v);
            if (hotkey._isEmpty())
            {
                this.accessibilitywholereadhotkey = "";
                this._accessibilitywholereadhotkey = null;
                delete hotkey;
            }
            else
            {
                this.accessibilitywholereadhotkey = hotkey._toString();
                this._accessibilitywholereadhotkey = hotkey;

                this._registerHotkey(hotkey);
            }
        };

        _pApplication.set_accessibilityheadingnexthotkey = function (v)
        {
            var cur_accessibilityheadingnexthotkey = this._accessibilityheadingnexthotkey;
            if (cur_accessibilityheadingnexthotkey)
                this._unregisterHotkey(cur_accessibilityheadingnexthotkey);
            var hotkey = new nexacro.HotKey(v);
            if (hotkey._isEmpty())
            {
                this.accessibilityheadingnexthotkey = "";
                this._accessibilityheadingnexthotkey = null;
                delete hotkey;
            }
            else
            {
                this.accessibilityheadingnexthotkey = hotkey._toString();
                this._accessibilityheadingnexthotkey = hotkey;
                this._registerHotkey(hotkey);
            }
        };

        _pApplication.set_accessibilityheadingprevhotkey = function (v)
        {
            var cur_accessibilityheadingprevhotkey = this._accessibilityheadingprevhotkey;
            if (cur_accessibilityheadingprevhotkey)
                this._unregisterHotkey(cur_accessibilityheadingprevhotkey);
            var hotkey = new nexacro.HotKey(v);
            if (hotkey._isEmpty())
            {
                this.accessibilityheadingprevhotkey = "";
                this._accessibilityheadingprevhotkey = null;
                delete hotkey;
            }
            else
            {
                this.accessibilityheadingprevhotkey = hotkey._toString();
                this._accessibilityheadingprevhotkey = hotkey;
                this._registerHotkey(hotkey);
            }
        };

        _pApplication.set_accessibilitycomponentnexthotkey = function (v)
        {
            var cur_accessibilitycomponentnexthotkey = this._accessibilitycomponentnexthotkey;
            if (cur_accessibilitycomponentnexthotkey)
                this._unregisterHotkey(cur_accessibilitycomponentnexthotkey);
            var hotkey = new nexacro.HotKey(v);
            if (hotkey._isEmpty())
            {
                this.accessibilitycomponentnexthotkey = "";
                this._accessibilitycomponentnexthotkey = null;
                delete hotkey;
            }
            else
            {
                this.accessibilitycomponentnexthotkey = hotkey._toString();
                this._accessibilitycomponentnexthotkey = hotkey;
                this._registerHotkey(hotkey);
            }
        };

        _pApplication.set_accessibilitycomponentprevhotkey = function (v)
        {
            var cur_accessibilitycomponentprevhotkey = this._accessibilitycomponentprevhotkey;
            if (cur_accessibilitycomponentprevhotkey)
                this._unregisterHotkey(cur_accessibilitycomponentprevhotkey);
            var hotkey = new nexacro.HotKey(v);
            if (hotkey._isEmpty())
            {
                this.accessibilitycomponentprevhotkey = "";
                this._accessibilitycomponentprevhotkey = null;
                delete hotkey;
            }
            else
            {
                this.accessibilitycomponentprevhotkey = hotkey._toString();
                this._accessibilitycomponentprevhotkey = hotkey;
                this._registerHotkey(hotkey);
            }
        };

        _pApplication.set_popuptype = function (v)
        {
            if (v != this.popuptype)
            {
                this.popuptype = v;
            }
        };

        _pApplication._registerHotkey = function (v)
        {
            if (!v || v._is_registered)
                return;

            nexacro._registerHotkeyComp(this, this, v);
        };

        _pApplication._unregisterHotkey = function (v)
        {
            if (!v || !v._is_registered)
                return;
            nexacro._unregisterHotkeyComp(this, this, v);
        };

        _pApplication._processHotkey = function (keycode, altKey, ctrlKey, shiftKey, comp)
        {
            var hotkeylist = this._hotkey_list;
            for (var i = 0; i < hotkeylist.length; i++)
            {
                var hotkeyinfo = hotkeylist[i];
                if (hotkeyinfo[1] == keycode &&
                    hotkeyinfo[2] == altKey &&
                    hotkeyinfo[3] == ctrlKey &&
                    hotkeyinfo[4] == shiftKey)
                {
                    this._on_hotkey(keycode, altKey, ctrlKey, shiftKey, comp);
                    return true;
                }
            }
        };

        _pApplication._on_hotkey = function (keycode, altKey, ctrlKey, shiftKey, curcomp)
        {
            if (nexacro._enableaccessibility)
            {
                var forwardkey = this._accessibilityforwardkey;
                var backwardkey = this._accessibilitybackwardkey;
                var replayhotkey = this._accessibilityreplayhotkey;
                var wholereadhotkey = this._accessibilitywholereadhotkey;
                var headingnexthotkey = this._accessibilityheadingnexthotkey;
                var headingprevhotkey = this._accessibilityheadingprevhotkey;
                var componentnexthotkey = this._accessibilitycomponentnexthotkey;
                var componentprevhotkey = this._accessibilitycomponentprevhotkey;

                var comp;
                if (forwardkey && keycode == forwardkey._keycode &&
                    altKey == ((forwardkey._modifierkey & 0x02) == 0x02) &&
                    ctrlKey == ((forwardkey._modifierkey & 0x01) == 0x01) &&
                    shiftKey == ((forwardkey._modifierkey & 0x04) == 0x04))
                {
                    if (this._accessibilityHistoryCursor < this._accessibilityHistoryList.length - 2 && this._accessibilityHistoryCursor < this.accessibilityhistorycount - 1)
                    {
                        if (this._accessibilityHistoryCursor == -1)
                            this._accessibilityHistoryCursor = 0;
                        comp = this._get_accessibility_history(++this._accessibilityHistoryCursor);
                        if (comp)
                            this.playAccessibility(comp);

                    }
                }
                else if (backwardkey && keycode == backwardkey._keycode &&
                    altKey == ((backwardkey._modifierkey & 0x02) == 0x02) &&
                    ctrlKey == ((backwardkey._modifierkey & 0x01) == 0x01) &&
                    shiftKey == ((backwardkey._modifierkey & 0x04) == 0x04))
                {

                    if (this._accessibilityHistoryCursor > 0)
                    {
                        if (this._accessibilityHistoryCursor > this.accessibilityhistorycount)
                            this._accessibilityHistoryCursor--;
                        comp = this._get_accessibility_history(--this._accessibilityHistoryCursor);
                        if (comp)
                            this.playAccessibility(comp);
                    }

                }
                else if (replayhotkey && keycode == replayhotkey._keycode &&
                     altKey == ((replayhotkey._modifierkey & 0x02) == 0x02) &&
                     ctrlKey == ((replayhotkey._modifierkey & 0x01) == 0x01) &&
                     shiftKey == ((replayhotkey._modifierkey & 0x04) == 0x04))
                {
                    comp = this._get_accessibility_history(this._accessibilityHistoryCursor);
                    if (comp)
                        this.playAccessibility(comp);
                }
                else if (wholereadhotkey && keycode == wholereadhotkey._keycode &&
                    altKey == ((wholereadhotkey._modifierkey & 0x02) == 0x02) &&
                    ctrlKey == ((wholereadhotkey._modifierkey & 0x01) == 0x01) &&
                    shiftKey == ((wholereadhotkey._modifierkey & 0x04) == 0x04))
                {
                    //todo whole read hotkey 
                    if (nexacro._accessibilitywholereadtype != 0)
                    {
                        var ar = this._accessibilityHistoryList;
                        var lastfocusedcomp = this._get_accessibility_history(this._accessibilityHistoryList.length - 1);
                        var form = lastfocusedcomp._getForm();
                        form._playAccessibilityWholeReadLabel("wholeread");
                    }
                }
                else if (headingnexthotkey && keycode == headingnexthotkey._keycode &&
                    altKey == ((headingnexthotkey._modifierkey & 0x02) == 0x02) &&
                    ctrlKey == ((headingnexthotkey._modifierkey & 0x01) == 0x01) &&
                    shiftKey == ((headingnexthotkey._modifierkey & 0x04) == 0x04))
                {
                    var form = this.getActiveForm();
                    var last_comp = form._getLastFocused();
                    var comp = form._getNextHeadingComponent(last_comp ? last_comp : form);
                    if (comp)
                        comp._setFocus(true, 0, true);
                }
                else if (headingprevhotkey && keycode == headingprevhotkey._keycode &&
                        altKey == ((headingprevhotkey._modifierkey & 0x02) == 0x02) &&
                        ctrlKey == ((headingprevhotkey._modifierkey & 0x01) == 0x01) &&
                        shiftKey == ((headingprevhotkey._modifierkey & 0x04) == 0x04))
                {
                    var form = this.getActiveForm();
                    var last_comp = form._getLastFocused();
                    var comp = this.getActiveForm()._getPrevHeadingComponent(last_comp ? last_comp : form);
                    if (comp)
                        comp._setFocus(true, 1, true);
                }
                else if (componentnexthotkey && keycode == componentnexthotkey._keycode &&
                        altKey == ((componentnexthotkey._modifierkey & 0x02) == 0x02) &&
                        ctrlKey == ((componentnexthotkey._modifierkey & 0x01) == 0x01) &&
                        shiftKey == ((componentnexthotkey._modifierkey & 0x04) == 0x04))
                {
                    var form = curcomp._getForm();
                    if (form instanceof nexacro.Tab)
                        form = form._getForm();
                    var last_comp = form._getLastFocused();
                    var comp = form._searchNextTabFocus(last_comp ? last_comp : form, undefined, undefined, true, true);
                    if (comp && comp[0])
                        form._processArrowKey(true, comp);
                }
                else if (componentprevhotkey && keycode == componentprevhotkey._keycode &&
                        altKey == ((componentprevhotkey._modifierkey & 0x02) == 0x02) &&
                        ctrlKey == ((componentprevhotkey._modifierkey & 0x01) == 0x01) &&
                        shiftKey == ((componentprevhotkey._modifierkey & 0x04) == 0x04))
                {
                    var form = curcomp._getForm();
                    if (form instanceof nexacro.Tab)
                        form = form._getForm();
                    var last_comp = form._getLastFocused();
                    var comp = form._searchPrevTabFocus(last_comp ? last_comp : form, undefined, undefined, true, true);
                    if (comp && comp[0])
                        form._processArrowKey(false, comp);
                }
            }
        };

        _pApplication.set_accessibilitybackwardkey = function (v)
        {
            var cur_accessibilitybackwardkey = this._accessibilitybackwardkey;
            if (cur_accessibilitybackwardkey)
                this._unregisterHotkey(cur_accessibilitybackwardkey);
            var hotkey = new nexacro.HotKey(v);
            if (hotkey._isEmpty())
            {
                this.accessibilitybackwardkey = null;
                this._accessibilitybackwardkey = null;
                delete hotkey;
            }
            else
            {
                this.accessibilitybackwardkey = hotkey._toString();
                this._accessibilitybackwardkey = hotkey;

                this._registerHotkey(hotkey);
            }
        };

        _pApplication.set_accessibilityforwardkey = function (v)
        {
            var cur_accessibilityforwardkey = this._accessibilityforwardkey;
            if (cur_accessibilityforwardkey)
                this._unregisterHotkey(cur_accessibilityforwardkey);
            var hotkey = new nexacro.HotKey(v);
            if (hotkey._isEmpty())
            {
                this.accessibilityforwardkey = null;
                this._accessibilityforwardkey = null;
                delete hotkey;
            }
            else
            {
                this.accessibilityforwardkey = hotkey._toString();
                this._accessibilityforwardkey = hotkey;
                this._registerHotkey(hotkey);
            }
        };

        _pApplication.set_accessibilityhistorycount = function (v)
        {
            this.accessibilityhistorycount = parseInt(v);
        };

        _pApplication._set_accessibility_history = function (comp)
        {
            var historyList = this._accessibilityHistoryList;
            if (historyList)
            {
                var historyCount = this.accessibilityhistorycount;
                var currentCount = historyList.length;

                if (currentCount > 0)
                {
                    var lasthistorycomp = historyList[currentCount - 1];
                    if (lasthistorycomp == comp)
                        return;
                }
                if (currentCount < historyCount + 1)
                {
                    historyList.push(comp);
                    currentCount++;
                }
                else if (currentCount == historyCount + 1)
                {
                    historyList.splice(0, 1);
                    historyList.push(comp);
                }
                this._accessibilityHistoryCursor = currentCount - 1;
            }
        };

        _pApplication._get_accessibility_history = function (n, replay)
        {
            var historyList = this._accessibilityHistoryList;
            if (historyList)
            {
                var historyCount = this.accessibilityhistorycount;
                if (n > -1 && n <= historyCount)
                {
                    return historyList[n];
                }
                else if (replay)
                {
                    return historyList[n];
                }
            }
        };

        _pApplication._remove_accessibility_history = function (comp)
        {
            var historyList = this._accessibilityHistoryList;
            for (var i = 0, len = historyList.length; i < len ; i++)
            {
                if (historyList[i] == comp)
                {
                    historyList.splice(i, 1);
                    if (i <= this._accessibilityHistoryCursor)
                        this._accessibilityHistoryCursor--;
                }
            }
        };



        _pApplication.set_accessibilitytype = function (v)
        { //standard/sensereader/jaws
            this.accessibilitytype = v;
            nexacro._setAccessibilityType(v);
        };

        _pApplication.set_accessibilitydescreadtype = function (v)
        {
            this.accessibilitydescreadtype = v;
            nexacro._setAccessibilityDescReadType(v);
        };

        _pApplication.set_accessibilitywholereadtype = function (v)
        {
            this.accessibilitywholereadtype = v;
            nexacro._setAccessibilityWholeReadType(v);
        };

        ///////////////////////////////// End accessibility //////////////////////////////////

        _pApplication.set_hithemeid = function (v)
        {
            this.hithemeid = v;
        };

        _pApplication.set_enableevent = function (v)
        {
            this.enableevent = nexacro._toBoolean(v);
        };

        _pApplication.set_enableanimation = function (v)
        {
            this.enableanimation = nexacro._toBoolean(v);
        };

        _pApplication.set_enginesetupkey = function (v)
        {
            this.enginesetupkey = v;
        };

        _pApplication.set_engineurl = function (v)
        {
            this.engineurl = v;
        };

        _pApplication.set_engineversion = function (v)
        {
            this.engineversion = v;
        };

        _pApplication.set_usevml = function (v)
        {
            this.usevml = nexacro._toBoolean(v);
        };

        //engineurl - fullpath 

        //os(windows, windows_7) > device (default)
        //os(ios, ios_5) > device (default, iphone5s)
        _pApplication._updateEngine = function (updateengine)
        {
            var enginesetupkey = "", engineversion = "", engineurl = "";
            if (updateengine)
            {
                var cur_device_str = nexacro.DEVICE.toLowerCase();
                var cur_osversion = nexacro._getOSVersion();   // desktop의 경우 undefined 이기 때문에 toLowerCase() 하면 안됨            
                var cur_os_str = (cur_osversion ? cur_osversion.toLowerCase().replace(/ /g, "_") : "");

                var cur_systype_str = nexacro.SystemType.toLowerCase();
                if (cur_systype_str.indexOf("win") >= 0) cur_systype_str = "windows";
                else if (cur_systype_str.indexOf("ipad") >= 0) cur_systype_str = "iphone";

                var selectos = updateengine[cur_systype_str];  //windows
                if (cur_device_str.length <= 0)
                    cur_device_str = "default";

                if (updateengine[cur_os_str])                  //windows_7, windows_xp
                {
                    selectos = updateengine[cur_os_str];
                }
                else
                {
                    if (selectos[cur_os_str])                 //windows.windows_7, window.windows_xp  
                        selectos = selectos[cur_os_str];
                }

                if (selectos)
                {
                    var selectitem = selectos[cur_device_str];   // windows_7.default or windows.windows_7.default or windows.default 
                    if (selectitem)
                    {
                        enginesetupkey = selectitem.enginesetupkey;
                        engineversion = selectitem.engineversion;
                        engineurl = selectitem.engineurl;
                    }
                }
            }

            if (enginesetupkey.length > 0 && engineurl.length > 0 && engineversion.length > 0)
            {
                var requesturl = this._transfullurl(this._project_url, engineurl);
                nexacro._updateEngine(enginesetupkey, requesturl, engineversion);   // 엔진업데이트 시작시 throw exception
            }

        };


        //"fatal" : 치명적이 에러인 경우 - 0 
        //"error" : 일반적인 에러인 경우 - 1
        //"warn" : 경고인 경우          - 2
        //"info" : 일반 정보인 경우     - 3
        //"debug" : 디버그 정보인 경우  - 4
        _pApplication.set_loglevel = function (v)
        {
            if (v == "fatal")
                this._loglevel = 0;
            else if (v == "error")
                this._loglevel = 1;
            else if (v == "warn")
                this._loglevel = 2;
            else if (v == "info")
                this._loglevel = 3;
            else
                this._loglevel = 4;

            this.loglevel = v;
        };

        //'runtime' : 일반적인 런타임 에러만 onerror 이벤트를 발생시킵니다.
        //'all' : 스크립트 에러도 onerror 이벤트를 발생시킵니다.
        _pApplication.set_errorlevel = function (v)
        {
            this.errorlevel = v;
        };


        _pApplication.set_cookiecachetype = function (v)
        {
            //"cache" 만 지원  "none"은 지원하지 않음 
            //
        };

        _pApplication.set_filesecurelevel = function (v)
        {
            this.filesecurelevel = nexacro._parseInt(v);
        };

        _pApplication.set_fullscreen = function (v)
        {
            this.fullscreen = nexacro._toBoolean(v);
        };

        _pApplication.set_layoutselecttype = function (v)
        {
            this.layoutselecttype = v;
        };

        _pApplication.set_modallockmode = function (v)
        {
            this.modallockmode = v;
        };

        _pApplication.set_mousehovertime = function (v)
        {
            this.mousehovertime = v;
            nexacro._setMouseHovertime(this.mousehovertime);
        };

        _pApplication.set_okclosebutton = function (v)
        {
            this.okclosebutton = v;
        };

        _pApplication.set_usecontextmenu = function (v)
        {
            this.usecontextmenu = v;
        };

        _pApplication._on_loadwaitimage = function (imgurl, w, h)
        {
        }

        _pApplication.set_loadingimage = function (v)
        {
            this.loadingimage = v;
            if (this._is_loaded)
            {
                var imagesize = nexacro._getImageSize(v, this._on_loadwaitimage, this);
            }
        };

        _pApplication.set_rtldirection = function (v)
        {
        	if (this.rtldirection != v)
        	{
        	this.rtldirection = v;

        		this._setRtlDirection(v);
        	}
        };

        _pApplication._setRtlDirection = function (v)
        {
        	var mainframe = this.mainframe;
        	this._rtldirection = v;

        	if (mainframe)
        	{
        		mainframe._setRtlDirection(v);
        	}
        };

        _pApplication.set_layoutautofittype = function (v)
        {
            this.layoutautofittype = v;
        };

        _pApplication._getLoadingImageUrl = function ()
        {
            if (this.loadingimage) return this.loadingimage;
            return this._transfullurl(this._resource_path, this._default_loadingimage);
        }

        _pApplication.reload_theme = function (form, url)
        {
        };

        _pApplication.reload = function ()
        {
        	window.location.reload();
        };

        _pApplication._isPopupFrame = function (id)
        {
            if (this.popupframes.get_item(id) != null)
                return true;
            return false;
        };

        _pApplication._registerPopupFrame = function (id, frame)
        {
            if (this.popupframes.get_item(id) != null)
                return -1;

            return this.popupframes.add_item(id, frame);
        };

        _pApplication._unregisterPopupFrame = function (id)
        {
            this.popupframes.delete_item(id);

            // TODO check 필요한 코드인지?
            this._activeform = null;
        };

        //Multi-LayoutManager 
        _pApplication.getLayoutManager = function ()
        {
            return this._layout_manager;
        };

        
        _pApplication._getFileCache = function (fName)
        {
            var app = application;
            if (app.files && (app.files[fName]))
            {
                return app.files[fName];
            }

            if (fName.trim().indexOf("theme://") >= 0)
            {
                return app.theme[fName];
            }
            return null;
        };

        //PopupComponent 제어

        _pApplication._removeLastPopupComponent = function ()
        {
            this._current_popups.pop();
        };
        _pApplication._removePopupComponent = function (popup_comp)
        {
            // null is clearall
            if (!popup_comp || !popup_comp._is_popup_control)
            {
                this._current_popups = [];
            }
            else
            {
                var popups = this._current_popups;
                var cnt = popups.length;
                if (cnt > 0)
                {
                    var cur_popup = null;
                    var last_popup = null;
                    var root_comp = popup_comp._getRootComponent(popup_comp);
                    for (var i = cnt; i > 0; i--)
                    {
                        cur_popup = popups[i - 1];
                        if (!cur_popup)
                        {
                            break;
                        }
                        if (cur_popup == popup_comp)
                        {
                            this._current_popups = popups.slice(0, i - 1);
                            break;
                        }

                        last_popup = cur_popup;
                        cur_popup = null;
                    }
                }
            }
        };

        _pApplication._appendPopupComponent = function (popup_comp)
        {
            if (!popup_comp || !popup_comp._is_popup_control)
            {
                cur_popup = this._current_popups[0];
                if (cur_popup)
                {
                    cur_popup._closePopup();
                }
                this._current_popups = [];
            }
            else
            {
                var root_comp = popup_comp._getRootComponent(popup_comp);
                var popups = this._current_popups;
                var cnt = popups.length;
                if (cnt > 0)
                {
                    var is_contain = false;
                    var cur_popup = null;
                    var last_popup = null;
                    for (var i = cnt; i > 0; i--)
                    {
                        cur_popup = popups[i - 1];
                        if (!cur_popup)
                        {
                            break;
                        }
                        if (cur_popup._contains(popup_comp))
                        {
                            is_contain = true;
                            if (last_popup)
                            {
                                last_popup._closePopup();
                            }
                            this._current_popups = popups.slice(0, i);
                            break;
                        }

                        last_popup = cur_popup;
                    }
                    if (!is_contain)
                    {
                        var len = this._current_popups.length;
                        for (var i = len - 1; i >= 0; i--)
                        {
                            last_popup = this._current_popups[i];
                            if (last_popup)
                            {
                                last_popup._closePopup();
                            }
                        }
                        this._current_popups = [];
                    }
                }
                this._current_popups.push(popup_comp);
            }
        };
        _pApplication._checkClosePopupComponent = function (target_comp, bCheckSameParent)
        {
            if (!target_comp)
            {
                var len = this._current_popups.length;
                for (var i = len - 1; i >= 0; i--)
                {
                    cur_popup = this._current_popups[i];
                    if (cur_popup)
                    {
                        cur_popup._closePopup();
                    }
                }

                this._current_popups = [];
            }
            else
            {
                var popups = this._current_popups;
                var cnt = popups.length;
                if (cnt > 0)
                {
                    var is_contain = false;
                    var cur_popup = null;
                    var last_popup = null;
                    var child_popups = [];
                    for (var i = cnt; i > 0; i--)
                    {
                        cur_popup = popups[i - 1];
                        if (!cur_popup)
                        {
                            break;
                        }
                        if (bCheckSameParent)
                        {
                            if (cur_popup._contains(target_comp))
                            {
                                // popup안의 component click
                                is_contain = true;

                                for (var j = cnt; j >= i; j--)
                                {
                                    var popup = popups[j - 1];
                                    if (cur_popup != popup && cur_popup._contains(popup))
                                    {
                                        child_popups.push(popups[j - 1]);
                                        popups.splice(j - 1);
                                    }
                                }
                            }
                            else
                            {
                                // popup을 포함한 component click
//                              var root_comp = cur_popup._getRootComponent(cur_popup);   콤보가 subcontrol일 때는 _getRootComponent를 사용하면 콤보가 리턴되지않으므로 아래로 변경. 2015/7/27 cmc
                                var root_comp = cur_popup._getPopupRootComponent(cur_popup);
                                is_contain = root_comp._contains(target_comp);
                            }
                        }
                        else
                        {
                            is_contain = cur_popup._contains(target_comp);
                        }

                        if (is_contain)
                        {
                            break;
                        }
                    }

                    if (!is_contain)
                    {
                        var len = this._current_popups.length;
                        for (var i = len - 1; i >= 0; i--)
                        {
                            last_popup = this._current_popups[i];
                            if (last_popup)
                            {
                                last_popup._closePopup();
                            }
                        }
                        this._current_popups = [];
                    }
                    else if (child_popups.length > 0)
                    {
                        while (child_popups.length > 0)
                        {
                            var popup = child_popups.shift();
                            if (popup)
                            {
                                popup._closePopup();
                            }
                        }
                    }
                }
            }
        };

        _pApplication._appendCommContext = function (context)
        {
            if (!context)
                return;
            this._comm_contextlist.push(context);
        };

        _pApplication._removeCommContext = function (context)
        {
            if (!context)
                return;
            var contexts = this._comm_contextlist;
            var cnt = contexts.length;
            for (var i = 0; i < cnt; i++)
            {
                var cur_context = contexts[i];
                if (cur_context == context)
                {
                    for (var j = i; j < cnt - 1; j++)
                    {
                        contexts[j] = contexts[j + 1];
                    }
                    contexts[cnt - 1] = null;
                    contexts.length = contexts.length - 1;
                    break;
                }
            }
        };

        //------------------------------------------------
        // init
        //------------------------------------------------
        /*
         *  function name : init
         *  description : application init. 
         *     arguments  
            return : result 
         */
        _pApplication.init = function ()
        {
            nexacro._setBrowserErrorMsg();
            return;
        };

        _pApplication._checkLicense = function (strlicenseurl)
        {
            var real_url = this._getServiceLocation(strlicenseurl);
            return nexacro._checkLicense(real_url, this.xadl);
        };

        // Screen Matching
        _pApplication._searchScrInfo = function (simulator_screenid)
        {
            if (!this._screeninfo)
                return null;

            var scr_info_list = this._screeninfo;
            var scr_len = scr_info_list.length;

            var matched_scrinfo = null;

            var cur_type = "desktop";
            switch (nexacro.SystemType.toLowerCase())
            {
                case "win32": case "win64": case "mac": case "linux":
                    cur_type = "desktop";
                    break;
                case "ipad":
                    cur_type = "tablet";
                    break;
                case "iphone": case "winphone":
                    cur_type = "phone";
                    break;
                case "android":
                    if (nexacro.Browser == "Runtime")
                    {
                        cur_type = "tablet";
                        if (nexacro.__isPhone && nexacro.__isPhone())
                            cur_type = "phone"
                    }
                    else
                    {
                        cur_type = "tablet";
	
                        // android mobile 이면 안드로이드 폰.
                        if (nexacro._isMobile())
                            cur_type = "phone";
                    }
                    break;
            }

            var cur_os;
            switch (nexacro.SystemType)
            {
                case "win32": case "win64": case "winphone":
                    cur_os = "windows";
                    break;
                case "ipad": case "iphone":
                    cur_os = "ios";
                    break;
                case "android":
                    cur_os = "android";
                    break;
            }


            // TODO SystemLocale Table 필요 (ko_KR같은 포맷으로 사용시)
            var cur_locale = nexacro._getLocale();



            var monitor_cnt = nexacro._getMonitorCount();
            var monitor_idx = 1;
            for (var i = 0; i < monitor_cnt; i++)
            {
                if (nexacro._isPrimaryMonitor(i))
                    monitor_idx = i;
            }

            var cur_width = nexacro._getScreenWidth(monitor_idx);
            var cur_height = nexacro._getScreenHeight(monitor_idx);
            var cur_orientation = nexacro._getMobileOrientation();
            var is_landscape = false;

            // 2015.01.08 neoarc
            // 아래 (cur_width > cur_height) 는 잘못된 코드임
            // 같은 조건에 portrait인 장비도 존재함.

            if ((cur_width > cur_height) || cur_orientation == 2 || cur_orientation == 3)
                is_landscape = true; // 가로모드

            // 안드로이드 일부에서는 orientation에 따라 screen width,height값이 swap 되는 문제가 있음.
            if (is_landscape && nexacro.OS == "Android")            
            {
                var is_swap_screen = nexacro._searchDeviceExceptionValue("swap_screen");
                if (is_swap_screen)
                {
                    var temp = cur_width;
                    cur_width = cur_height;
                    cur_height = temp;
                }
            }

            // 이 시점에서 cur_width, cur_height는 portrait기준의 screen width,height 값을 갖고 있어야함.

            // 선택 우선순위 type > systemos > systemlocale > width/height
            for (var i = 0; i < scr_len; i++)
            {
                var scr_info = scr_info_list[i];
                scr_info._priority = 0;

                // check simulator
                if (simulator_screenid)
                {
                    if (scr_info.name != simulator_screenid)
                        continue;

                    matched_scrinfo = scr_info;
                }

                // check type (desktop, tablet, phone)
                var type = scr_info.type;
                if (!simulator_screenid && cur_type && type)
                {
                    // type mismatch인 경우 대상에서 완전히 제외
                    scr_info._priority = -100;

                    var type_list = type.toLowerCase().split(",");
                    var type_cnt = type_list.length;
                    var type_found = false;
                    for (var j = 0; j < type_cnt; j++)
                    {
                        if (type_list[j] === cur_type)
                        {
                            scr_info._priority = 100;
                            type_found = true;
                            break;
                        }
                    }

                    if (!type_found)
                        continue;
                }
                
                // check systemos - 미지정시 체크 없음 (모든 os에서 사용가능)
                var os = scr_info.systemos;
                if (!simulator_screenid && cur_os && os)
                {
                    var os_list = os.toLowerCase().split(",");
                    var os_cnt = os_list.length;
                    var os_found = false;
                    for (var j = 0; j < os_cnt; j++)
                    {
                        if (os_list[j] == cur_os)
                        {
                            scr_info._priority += 10;
                            os_found = true;
                            break;
                        }
                    }

                    // systemos를 지정했으나 모두다 이상한 값이면 -> 무시

                    // systemos를 지정했는데 일치하는 값이 없으면?? -> 선택 대상 탈락?
                    if (!os_found &&
                        (os_list.indexOf("windows") >= 0 || os_list.indexOf("ios") >= 0 || os_list.indexOf("android") >= 0)
                        )
                    {
                        continue;
                    }
                }

                // check systemlocale
                var locale = scr_info.locale;
                if (!simulator_screenid && cur_locale && locale)
                {
                    var locale_list = locale.toLowerCase().split(",");
                    var locale_cnt = locale_list.length;
                    var locale_found = false;
                    for (var j = 0; j < locale_cnt; j++)
                    {
                        if (locale_list[j] == cur_locale)
                        {
                            scr_info._priority += 1;
                            locale_found = true;
                            break;
                        }
                    }

                    // TODO check 잘못된 locale인지에 대한 validation 필요?
                    /*
                    if (!locale_found &&
                        (...))
                    {
                        continue;
                    }
                    */
                }

                // check width,height
                var width = scr_info.screenwidth || 0;
                var height = scr_info.screenheight || 0;
                var sizeorientation = scr_info.sizeorientation;
                if (sizeorientation === undefined)
                {
                    if (cur_type == "phone")
                        sizeorientation = "portrait";
                    else if (cur_type == "tablet")
                        sizeorientation = "landscape";
                }

                var swap_device_resolution = false;

                // landscape로 지정한 경우 swap (실제 눈에 보이는 너비를 width로 계산)
                if (sizeorientation == "landscape")
                {
                    // swap width <-> height
                    cur_width = cur_width + cur_height;
                    cur_height = cur_width - cur_height;
                    cur_width = cur_width - cur_height;
                    swap_device_resolution = true;
                }

                scr_info._device_width = cur_width;
                scr_info._width = cur_width - parseInt(width);
                scr_info._height = cur_height - parseInt(height);

                if (!simulator_screenid && scr_info._priority >= 0)
                {
                    /*
                    // desktop은 여러개 지정불가. 따라서 desktop이면 무조건 선택함.
                    if (!matched_scrinfo ||
                        (matched_scrinfo && cur_type == "desktop" && scr_info._priority >= matched_scrinfo._priority))
                    */

                    // desktop의 경우 크기 지정이 의미없던 스펙이 삭제되었기 때문에
                    // mobile과 동일하게 크기를 비교함 (화면 해상도)
                    if (!matched_scrinfo)
                        matched_scrinfo = scr_info;
                    else
                    {
                        // width가 가까운 screen 우선
                        var check_height = false;
                        if (matched_scrinfo._width >= 0)
                        {
                            if (scr_info._width >= 0 && matched_scrinfo._width > scr_info._width)
                                matched_scrinfo = scr_info;
                            else if (matched_scrinfo._width == scr_info._width)
                                check_height = true;
                        }
                        else if (matched_scrinfo._width < 0)
                        {
                            // device width가 screen에 지정한 크기보다 작은 경우 어쩔수 없이 선택되는 상황으로
                            // 해당되는 screen은 우선순위가 없다. (가까운 것을 선택하지 않음)
                            matched_scrinfo = scr_info;
                        }

                        if (check_height)
                        {
                            if (matched_scrinfo.screenheight === undefined && scr_info.screenheight === undefined)
                            {
                                // orientation검사
                                if (is_landscape && scr_info.sizeorientation == "landscape")
                                    matched_scrinfo = scr_info;
                            }
                            else if (matched_scrinfo._height >= 0)
                            {
                                if (scr_info._height >= 0)
                            {
                                    if (matched_scrinfo._height > scr_info._height || 
                                        (matched_scrinfo._height == scr_info._height && is_landscape && scr_info.sizeorientation == "landscape"))
                                    matched_scrinfo = scr_info;
                            }
                            }
                            else if (matched_scrinfo._height < 0)
                            {
                                if (scr_info._height > 0)
                                    matched_scrinfo = scr_info;
                                else if (matched_scrinfo._height <= scr_info._height)
                                    matched_scrinfo = scr_info;
                            }
                        }
                    }
                }

                if (swap_device_resolution)
                {
                    cur_width = cur_width + cur_height;
                    cur_height = cur_width - cur_height;
                    cur_width = cur_width - cur_height;
                }
            }

            if (matched_scrinfo)
                matched_scrinfo._cur_type = cur_type;
            return matched_scrinfo;
        };

        _pApplication._applyScreenAutozoom = function ()
        {
            var curscreen = this._curscreen;
            if (!curscreen)
                return;

            // autozoom은 Phone,Tablet인 경우에 지원
            if (curscreen._cur_type != "phone" && curscreen._cur_type != "tablet")
                return;

            if (curscreen.screenwidth !== undefined && nexacro._toBoolean(curscreen.autozoom) == true)
            {
                // 안드로이드 기본 브라우저 버그로, 320이하 크기인 경우 321로 보정함 (320이하 지원 불가) 현재 원인 불명
                if (parseInt(curscreen.screenwidth) <= 320 &&
                    nexacro.OS == "Android" && nexacro.Browser != "Chrome")
                    curscreen.screenwidth = "321";

                var zoom_fitting_width = Math.abs(parseInt(curscreen.screenwidth));
                //nexacro._zoom_fitting_width = zoom_fitting_width;

                // screeninfo의 width를 실제 device width에 맞춘다.
                nexacro._zoom_factor = curscreen._device_width * 100 / zoom_fitting_width;
            }
        };

        // transaction Method
        //===============================================================================================================================================
        _pApplication.transaction = function (id, url, inDatasetsParam, outDatasetsParam, argsParam, callbackFn, isAsync, datatype, isCompress)
        {
            //bAsync,bBinary,bCompress -- option        
            var real_url = application._getServiceLocation(url);

            var service = this._getServiceObject(url, true);
            this._load_manager.loadDataModule(real_url, id, inDatasetsParam, outDatasetsParam, argsParam, callbackFn, isAsync, datatype, isCompress, service);
        };
        //===============================================================================================================================================

        _pApplication.cancelTransaction = function (id)
        {
            if (!this._load_manager)
                return -1;
            var datalist = this._load_manager.dataList;
            if (!datalist)
                return -1;
            var canceledCnt = 0;

            if (id != undefined)
            {
                var datalistid = (typeof id == "string") ? id.split(",") : id;
                if (datalistid.length > 0)
                {
                    var datalistfilter = [];
                    for (var k = 0; k < datalist.length; k++)
                    {
                        datalistfilter[k] = datalist[k].url;
                    }

                    var datalistfiltered = [];
                    for (var j = 0; datalistfilter.length > j; j++)
                    {
                        var datalistfound = false;
                        for (var i = 0; datalistid.length > i; i++)
                            if (datalistid[i] == datalistfilter[j])
                            {
                                datalistfound = true;
                                break;
                            }
                        if (!datalistfound)
                        {
                            datalistfiltered.push(datalistfilter[j]);
                        }
                    }

                    for (var j = datalistfiltered.length - 1; j >= 0; j--)
                    {
                        for (var i = datalist.length - 1; i >= 0; i--)
                        {
                            if (datalist[i].url == datalistfiltered[j])
                            {
                                datalist = nexacro._removedatalist(datalist, i);
                            }
                        }
                    }
                }
            }

            var datalen = datalist.length;
            for (var j = 0; j < datalen; j++)
            {
                var dataitem = datalist[j];
                var dataitem_handle = dataitem._handle;
                dataitem_handle._user_aborted = true;
                dataitem._is_cancel = true;
                nexacro._cancelLoad(dataitem_handle); 
                canceledCnt++;
            }
        };

        //------------------------------------------------
        // exit
        //------------------------------------------------
        /*
         *  function name : beforeExit
         *  description : exit 할지 여부를 결정한다. 이벤트 처리
         *     arguments
         *  return : cancle 여부
         */
        _pApplication.beforeExit = function ()
        {
            return false;
        };

        /*
         *  function name : exit
         *  description : mainframe 이하의 모든 form과 widget의 form을 close 할지 확인(canclose) 후 close 시나리오 진행한다. 
         *                Modal 창에 대한 처리가 필요함
         *     arguments
         *  return : void
         */
        _pApplication._exit = function ()
        {
            // application.onbeforeexit는 mainframe beforeclose에서 통합호출

            // destroy tray
            this.removeTray();

            // mainframe BeforeClose, Close process
            var mainframe = this.mainframe;
            var msg = mainframe._on_beforeclose();
            if (mainframe._checkAndConfirmClose(msg) == false)
                return false;

            // 모든 창이 닫힘 확정 상태이므로 close confirm 무시
            var child_len = this.popupframes.length;
            for (var i = child_len - 1; i >= 0; i--)
            {
                if (this.popupframes[i]._window)
                this.popupframes[i]._window._ignore_close_confirm = true;
            }

            mainframe._on_close();

            this.on_fire_onexit();

            this._removeProtocols();
            var popup_frame_len = this.popupframes.length;
            for (var i = popup_frame_len - 1; i >= 0; i--)
            {
                var chframe = this.popupframes[i];
                if (chframe && chframe.form)
                {
                    chframe.form.close();
                }
            }
            this.mainframe._destroy();

            this._global_context = null;   // lookup topmost
            nexacro._applicationExit();
        };

        _pApplication.exit = function ()
        {
            // 사용자 호출시 window.close를 같이 수행함.
            if (this._exit() == false)
                return;
            nexacro._applicationExit(true);
        };

        /*
         *  function name : getRealPath
         *  description : 실제로 호출할 full 경로
         *     arguments
         *  strbaseurl : 경로를 변경할 base url
            strtargeturl  : 변경할 url
            strtypdefinitionurl : 적용할 typedefintion url 
         *  return : 변경한 full 경로
         */
        _pApplication.getRealPath = function (strbaseurl, strtargeturl, strtypdefinitionurl)
        {
            var real_path = "";
            return real_path;
        };



        /*
         *  function name : alert
         *  description : alert를 띄우기 위해 필요하다.  Async 지원에 대한 논의가 필요
         *                구현 방법 논의 필요
         *     arguments
         *  return : 
         */
        _pApplication.alert = function (strText, strCaption, strType)
        {
            this._skipDragEventAfterMsgBox = true;
            nexacro._alert(this, strText, strCaption, strType);
        };

        /*
         *  function name : confirm
         *  description : confirm를 띄우기 위해 필요하다. Async 지원에 대한 논의가 필요
         *                   구현 방법 논의 필요
         *     arguments
         *  return : 
         */
        _pApplication.confirm = function (strText, strCaption, strType)
        {
            this._skipDragEventAfterMsgBox = true;
            return nexacro._confirm(this, strText, strCaption, strType);
        };

        /*
         *  function name : userconfirm
         *  description :  작업대상 아님
         *     arguments
         *  return : 
         */
        _pApplication.userconfirm = function (strCaption, strText, strType)
        {
            return true;
        };

        _pApplication.setPrivateProfile = function (key, varValue, common_flag)
        {
            return nexacro._setPrivateProfile(key, varValue, common_flag);
        };

        _pApplication.getPrivateProfile = function (key, common_flag)
        {
            return nexacro._getPrivateProfile(key, common_flag);
        };

        _pApplication.checkLicense = function (licenseurl)
        {
            this._checkLicense(licenseurl);
        };

        _pApplication.loadTypedefition = nexacro._emptyFn;

        _pApplication.on_initApplication = nexacro._emptyFn;
        _pApplication.on_loadGlobalVariables = nexacro._emptyFn;
        _pApplication.on_initEvent = nexacro._emptyFn;
        _pApplication.on_createBodyFrame = nexacro._emptyFn;

        _pApplication.initApplication = function ()
        {
            this.on_initApplication();

            if (this._component_uri)
            {
                this._resource_path = this._transfullurl(this._component_uri, "../resources/");
            }

            // screeninfo 의 attribute 를 application의 property에 적용 
            if (this._curscreen)
            {
                var props = ["name", "type", "screenwidth", "screenheight", "sizeorientation", "themeid", "hithemeid", "autozoom", "description", "zoommin", "zoommax", "systemos", "systemlocale"];
                for (var prop in this._curscreen)
                {
                    if (props.indexOf(prop) < 0 && this["set_" + prop])
                        this["set_" + prop](this._curscreen[prop]);
                }
            }
        };

        _pApplication.loadGlobalVariables = function ()
        {
            this.on_loadGlobalVariables();

            // 미리 저장해둔 globalvalue 값 -> global variable로
            this._addGlobalVariableFromGlobalValue();
        };
        _pApplication.initEvent = function ()
        {
            this.on_initEvent();
        };
        _pApplication.createBodyFrame = function (mainframe)
        {
            this.on_createBodyFrame(mainframe);
        };
        //loadinclude 호출시 
        //adl 
        // include A 
        // include B
        // adl-script    
        //A
        //include A-1
        //include A-2
        //A-script    
        //B
        //include B-1
        //include B-2
        //B-script

        //[0]A-1
        //[1]A-2
        //[2]A-script
        //[3]B-1
        //[4]B-2
        //[5]B-script    
        //[6]adl-script 
        //
        // index 0 번 script 처리됨
        _pApplication._excuteScript = function (context)
        {
            if (context)
            {
                var executescript = context._executescriptlist.shift();
                while (executescript)
                {
                    executescript.fn.call(context);
                    executescript = context._executescriptlist.shift();
                }
            }
        };


        _pApplication.registerScript = function (filename, fn)
        {
            var scriptlist = this._executescriptlist;
            var len = scriptlist.length;

            var register_flag = true;
            for (var i = 0; i < len; i++)
            {
                if (scriptlist[i].url == filename)
                {
                    scriptlist[i].fn = fn;
                    register_flag = false;
                    break;
                }
            }

            if (register_flag)
                this._executescriptlist.push({ "url": filename, "fn": fn });
        };


        _pApplication.addIncludeScript = function (mainurl, url)
        {
            if (url)
            {
                this._includescriptlist.push({ target: mainurl, url: url });
            }
        };

        _pApplication.loadIncludeScript = function (mainurl)
        {
            var includescript;
            var len = this._includescriptlist.length;
            for (var i = 0; i < len; i++)
            {
                includescript = this._includescriptlist[i];
                if (includescript.target == mainurl)
                {
                    // IE9에서 open시 FormBase에 링크된 loadIncludeScript 가 호출될 때,
                    // 함수 내에서 또 this의 함수(_loadInclude)를 호출하면 this가 window로 바뀌는 문제가 있다.
                    // call을 통해 호출하면 문제가 발생하지 않음... why?? 2014.02.14 neoarc

                    this._loadInclude.call(this, mainurl, includescript.url, true);
                    //this._loadInclude(mainurl, includescript.url, true);
                }
            }
        };


        // for runtime
        var _global_context = this;

        //context에 global, local load가 완료된 후에 호출되는 함수
        //compile된 adl안에 구현 되어 있어야 함
        //component를 만들기 시작하는 함수


        _pApplication._on_init = function ()
        {
            //check globalcnt 
            //check localcnt
            if (!this._is_attach_childframe)
            {
                nexacro._initializeGlobalObjects(_global_context);
                this._RegisterClass(_global_context);
            }

            nexacro._observeGlobalEvent(null, "beforeuserconfirm", "onbeforeuserconfirm", this._on_callback_beforeuserconfirm);
            nexacro._observeGlobalEvent(null, "afteruserconfirm", "onafteruserconfirm", this._on_callback_afteruserconfirm);

            nexacro._initApplication();
            this.initApplication();

            if (this.mainframe)
                this.mainframe.createBodyFrame();

            this._excuteScript(this);
            this.initEvent();

            this.on_fire_onloadtypedefinition(this, this._typedefinition_url);
            this.loadGlobalVariables();
            this.on_fire_onloadingglobalvariables(this, this._globalvar_uri);

            var cnt = this._datasets.length;
            for (var i = 0; i < cnt; i++)
            {
                this._datasets[i].on_created();
            }

            if (this.mainframe)
            {
                this.mainframe.createComponent();
            	this.mainframe._setRtlDirection(this._rtldirection);
            	this.mainframe._setLocale(this._locale);
                this.mainframe.on_created();
            }

            cnt = this.widgets.length;
            for (var i = 0; i < cnt; i++)
            {
                this.widgets[i].createComponent();
                this.widgets[i].on_created();
            }

            cnt = this.trays.length;
            for (var i = 0; i < cnt; i++)
            {
                this.trays[i].on_created();
            }

            // load default wait image
            if (!this.loadingimage)
            {
                var loadingimage = this._getLoadingImageUrl();
                loadingimage = nexacro._getImageLocation(loadingimage);
                nexacro._getImageSize(loadingimage, this._on_loadwaitimage, this);
            }

            this._is_loaded = true;
        };

        // TODO check nexacro API로 옮기는게 맞을런지?? ..
        _pApplication._beginCommProgress = function ()
        {
            var mainframe = this.mainframe;
            var statusbar = mainframe ? mainframe.statusbar : null;
            if (statusbar)
            {
                statusbar._beginCommProgress();
            }
        };

        _pApplication._stepCommProgress = function (current, overall)
        {
            var mainframe = this.mainframe;
            var statusbar = mainframe ? mainframe.statusbar : null;
            if (statusbar)
            {
                statusbar._stepCommProgress(current, overall);
            }
        };

        _pApplication._endCommProgress = function ()
        {
            var mainframe = this.mainframe;
            var statusbar = mainframe ? mainframe.statusbar : null;
            if (statusbar)
            {
                statusbar._endCommProgress();
            }
        };

        _pApplication.playAccessibility = function (comp)
        {//need to modify
            if (comp)
            {
                comp._notifyAccessibility();
                return true;
            }
            return false;
        };
        
        _pApplication.deleteCacheDB = function ()
        {
            return nexacro._deleteCacheDB(); //only runtime;
        };

    }


    //---------------------------------------------------------------------------------------
    // Touch & Gesture Manager
    //---------------------------------------------------------------------------------------
    nexacro.TouchManager = function ()
    {
        this._currentTouches = new nexacro.Collection;
        this._fling_list = new nexacro.Collection;
    };

    var _pTouchManager = nexacro.TouchManager.prototype;

    _pTouchManager._tap_timer = null;
    _pTouchManager._dbltap_timer = null;
    _pTouchManager._hold_timer = null;
    _pTouchManager._fling_timer = null;

    // Constants
    _pTouchManager.hold_threshold = 1000;
    _pTouchManager.tap_threshold = 800;
    _pTouchManager.dbltap_threshold = 800;

    _pTouchManager.tap_bound = 5; // touchstart,end 간 이동거리가 멀면 tap으로 처리하지 않음.
    _pTouchManager.dbltap_bound = 30; // 오차범위
    _pTouchManager.unintendedmove_threshold = 6; // 경미한 이동 허용범위
    _pTouchManager.pinch_threshold = 6; // pinch move 진입 최소값
    _pTouchManager.slide_threshold = 9; // slide mode 진입 최소값(px)
    _pTouchManager.slideangle_threshold = 10; // 여러손가락 slide시 최대 차이값(degree)
    _pTouchManager.fling_threshold = 100; // 여러손가락 fling시 최대허용 touchend 시간차 

    // Internal Variables
    _pTouchManager._current_time = -1;
    _pTouchManager._old_time = -1;
    _pTouchManager._start_win = null;
    _pTouchManager._start_elem = null;
    _pTouchManager._start_point = null;
    _pTouchManager._first_tap_elem = null;
    _pTouchManager._first_tap_point = null;
    _pTouchManager._is_first_tap = true;
    _pTouchManager._center_point = null;
    _pTouchManager._first_pinch_range = undefined;
    _pTouchManager._is_longpressed = false;

    _pTouchManager._currentTouches = null;
    _pTouchManager._current_gesture = undefined;
    _pTouchManager._tap_blocked = false;
    _pTouchManager._slide_blocked = false;
    _pTouchManager._pinch_blocked = false;
    _pTouchManager._fling_blocked = false;

    _pTouchManager._slide_history = []; // Recent Slide History (for fling)
    _pTouchManager._slide_touchlen = 0;
    _pTouchManager._fling_minimum_speed = 0.01;
    _pTouchManager._fling_friction = 0.998;
    _pTouchManager._fling_list = null; // FlingHandler list
    _pTouchManager._fling_uid = 0;

    _pTouchManager._scroll_comp = null;
    _pTouchManager._scroll_mode = -1; // 0:none, 1:vert, 2:horz, 3:both
    _pTouchManager._scroll_end = false; // end of scroll flag
    _pTouchManager._scroll_direction = 0; // last scroll direction (vscroll)
    _pTouchManager._scroll_body = false; // body영역 스크롤중인지 여부 flag

    _pTouchManager._allow_default = false; // <-> preventDefault touch events
    _pTouchManager._slide_lock_horz = false;
    _pTouchManager._slide_lock_vert = false;

    // 로직문제를 변수추가로 해결하지 말 것.

    //==== RawTouchEvent Handling ==========================================//
    _pTouchManager.ontouchstart = function (win, elem, touchid, clientX, clientY, screenX, screenY, curtime, orgtime, is_last_changedtouch, first_touchid)
    {
        if (first_touchid != undefined && this._currentTouches.length > 0)
        {
            // touchstart이후 element가 destroy되어 this._currentTouches.length sync가 안맞는 경우.

            // TODO CHECK touch가 유실되는 경우는 여기보다 바깥 레벨에서 처리되는게 맞음.
            var cur_touches = this._currentTouches;
            if (cur_touches[0].touchid != ("_" + first_touchid))
            {
                for (var i = 0; i < cur_touches.length; i++)
                {
                    var tid = cur_touches[i].touchid.slice(1);
                    this.ontouchcancel(null, null, tid);
                }
            }
        }

        if (this._old_time != curtime)
            this._old_time = this._current_time;
        this._current_time = curtime;
        touchid = "_" + String(touchid);

        var x = clientX;
        var y = clientY;
        var is_first = (!this._currentTouches || this._currentTouches.length == 0);
        if (is_first)
        {
            this._start_win = win;
            this._start_elem = elem;
            this._start_point = nexacro.Point.fromEvent(x, y);
            this._start_point.screenX = screenX;
            this._start_point.screenY = screenY;
            this._fling_blocked = false;
        }

        // Update Info (canvasX, canvasY, clientX, clientY는 fire 시점에 계산)
        var touchinfo = new nexacro.TouchInputInfo(elem, "touchstart", touchid, curtime, is_first, screenX, screenY, x, y);
        this._currentTouches.add_item(touchid, touchinfo);

        if (is_first)
        {
            win._curWindowX = clientX; //save x at lbuttondown for track
            win._curWindowY = clientY; //save x at lbuttondown for track
        }

        // ontouchstart Event
        if (is_last_changedtouch)
        {
            this.on_fire_ontouch(0);
        }

        if (is_first)
        {
            // 모든 Fling 중단
            var fling_list = this._fling_list;
            for (var i = 0; i < fling_list.length; i++)
            {
                var fling_handler = fling_list[i];
                fling_handler.stop();
            }

        }

        // Gesture Handling
        if (is_first)
        {
            if (!this._tap_timer)
                this._tap_timer = new nexacro.TouchTimer(win, this._on_tap_timer, this, this.tap_threshold);
            else
                this._tap_timer.start(this.tap_threshold);

            if (!this._dbltap_timer)
                this._dbltap_timer = new nexacro.TouchTimer(win, this._on_dbltap_timer, this, this.dbltap_threshold);
            else
            {
                if (!this._dbltap_timer.isWait()) // First Tap
                {
                    this._is_first_tap = true;
                    this._dbltap_timer.start(this.dbltap_threshold);
                }
                else // Second Tap
                {
                    this._is_first_tap = false;
                }
            }

            if (!this._hold_timer)
                this._hold_timer = new nexacro.TouchTimer(win, this._on_hold_timer, this, this.hold_threshold);
            else
                this._hold_timer.start(this.hold_threshold);

            // pinch zoom시 스크롤을 좀 더 원활하게 하기 위한 방안으로,
            // touchstart 된 위치에 Scrollable component가 없다면 항상 Default를 허용하도록 함.            
            if (!this.checkAvailableScrollableComp(elem))
                this._scroll_body = true;

            // Scroll이 없고 Drag&Drop도 아닌 경우...
            // 또 어떤 경우가 있을지? 항상 허용해도 될지?
        }
        else
        {
            if (this._hold_timer && this._hold_timer.isWait()) this._hold_timer.stop();
            if (this._tap_timer && this._tap_timer.isWait()) this._tap_timer.stop();
            if (this._dbltap_timer && this._dbltap_timer.isWait()) this._dbltap_timer.stop();

            // 2손가락 터치된경우 1손가락 제스쳐는 발생불가능.
            var touchlen = this._currentTouches.length;
            if (touchlen == 2)
            {
                // Calculate Center Point (for pinch)
                var firsttouchinfo = this._currentTouches[0];
                this._center_point = new nexacro.Point((firsttouchinfo._x + x) / 2, (firsttouchinfo._y + y) / 2);

                // pinchzoom 허용모드이면 2손가락이 닿는 순간부터 프레임웍 제어를 벗어나도록함
                if (nexacro._allow_default_pinchzoom)
                {
                    this._allow_default = true;

                    // CHECK TODO 제스쳐 수행중에 두번째 손이 닿으면??

                    this._slide_blocked = true;
                    this._pinch_blocked = true;
                    this._fling_blocked = true;
                    this._scroll_body = false;
                }
            }

            if (this._current_gesture == "slide")
            {
                // TODO check slide 도중 손가락이 추가된 경우. 일단 중단시킴. 
                this._current_gesture = "none";
                this._slide_blocked = true;
            }
        }

        if (is_last_changedtouch)
        {
            if (this.checkInputPreventDefault(elem, this._currentTouches.length == 1, 0))
                return false;
        }

        return true;
    };

    _pTouchManager.ontouchmove = function (win, elem, touchid, clientX, clientY, screenX, screenY, curtime, orgtime, is_last_changedtouch)
    {
        if (this._old_time != curtime)
            this._old_time = this._current_time;
        this._current_time = curtime;
        touchid = "_" + String(touchid);

        var x = clientX;
        var y = clientY;
        var info = this._currentTouches[touchid];
        if (!info)
            return; // critical error

        if (info._x == x && info._y == y)
            return;
        
        // Update Info
        var old_elem = info._elem;
        info._updateInfo(elem, "touchmove", curtime, screenX, screenY, x, y);

        var touchlen = this._currentTouches.length;

        // Drag & Drop (dragmove)
        if (touchlen == 1)
        {
            var dragInfo = nexacro._cur_drag_info;
            var comp, dlgcode;
            var is_drag_return = false;
            if (dragInfo)
            {
                var windowX = clientX;
                var windowY = clientY;
                if (!dragInfo.isDragging)
                {   
                    if (windowX != dragInfo.startX || windowY != dragInfo.startY)
                    {
                        elem = dragInfo.target_elem;
                        comp = win.findComponent(elem, 0, 0);
                        var elem_pos = nexacro._getElementXYInWindow(elem._handle);
                        var canvasX = windowX - elem_pos[0] + comp[1];
                        var canvasY = windowY - elem_pos[1] + comp[2];
                        var ret = comp[0]._on_drag(elem, "touch", false, false, false, canvasX, canvasY, screenX, screenY);
                        if (ret && ret[0] === true)
                        {
                            dragInfo.isDragging = true;
                            dragInfo.target = ret[1];
                            dragInfo.referTarget = ret[2];
                            dragInfo.data = ret[3];
                            dragInfo.userdata = ret[4];
                            comp[0]._on_dragmove(elem, dragInfo.target, dragInfo.referTarget, dragInfo.data, dragInfo.userdata, "touch", false, false, false, canvasX, canvasY, screenX, screenY);
                            // TODO Fire Enter & Leave ?

                            // TouchScroll이나 body영역 scroll보다 drag&drop이 우선되어야함.
                            return true;
                        }
                    }
                    dlgcode = comp[0]._getDlgCode();
                    nexacro._cur_drag_info = null;
                }
                else
                {
                    comp = win.findComponent(elem, 0, 0);
                    if (comp && comp[0])
                    {
                        if (old_elem == elem)
                        {
                            var elem_pos = nexacro._getElementXYInWindow((comp.length == 3) ? elem._handle : comp[0]._control_element._handle);
                            var canvasX = windowX - elem_pos[0] + comp[1];
                            var canvasY = windowY - elem_pos[1] + comp[2];
                            comp[0]._on_dragmove(elem, dragInfo.target, dragInfo.referTarget, dragInfo.data, dragInfo.userdata, "touch", false, false, false, canvasX, canvasY, screenX, screenY);
                        }
                        else
                        {
                            if (old_elem && old_elem._handle)
                            {
                                var from_comp = win.findComponent(old_elem, 0, 0);
                                var elem_pos = nexacro._getElementXYInWindow((from_comp.length != 3) ? old_elem._handle : from_comp[0]._control_element._handle);
                                var canvasX = windowX - elem_pos[0] + from_comp[1];
                                var canvasY = windowY - elem_pos[1] + from_comp[2];
                                from_comp[0]._on_dragleave(old_elem, comp[0], dragInfo.target, dragInfo.referTarget, dragInfo.data,
                                        dragInfo.userdata, "touch", false, false, false, canvasX, canvasY, screenX, screenY);
                            }
                            if (elem && elem._handle)
                            {
                                var from_comp = win.findComponent(old_elem);
                                var elem_pos = nexacro._getElementXYInWindow((comp.length != 3) ? elem._handle : comp[0]._control_element._handle);
                                var canvasX = windowX - elem_pos[0] + comp[1];
                                var canvasY = windowY - elem_pos[1] + comp[2];
                                comp[0]._on_dragenter(elem, from_comp, dragInfo.target, dragInfo.referTarget, dragInfo.data,
                                        dragInfo.userdata, "touch", false, false, false, canvasX, canvasY, screenX, screenY);
                            }
                        }
                    }
                }

                is_drag_return = true;
            }
            else
            {
                comp = win.findComponent(elem, 0, 0);
                if (comp && comp[0])
                    dlgcode = comp[0]._getDlgCode();
            }


            if (!nexacro._cur_drag_info && !(dlgcode && dlgcode.want_touchmove)) // draginfo == null
            {
                    // Android에서 touchmove를 preventDefault 처리 하지 않으면 
                    // 이후 touchmove이벤트가 전혀 발생하지 않고 OS가 처리함.
                var offset_x = info._x - info._oldx;
                var offset_y = info._y - info._oldy;
                var move_dir;
                if (Math.abs(offset_x) > Math.abs(offset_y))
                    move_dir = (offset_x > 0) ? -10 : 10;
                else
                    move_dir = (offset_y > 0) ? -1 : 1;
                if (this._scroll_direction != move_dir)
                    this._scroll_end = false;
                if (this._scroll_body || (this._scroll_end && this._scroll_direction == move_dir))
                {
                    this._slide_blocked = true;
                    this._tap_blocked = true;
                    this._scroll_body = true;
                    return false;
                }
            }

                // ios, input focused -> preventDefault
                if (nexacro.OS == "iOS" &&
                    elem instanceof nexacro.InputElement)
                {
                    // touchmove가 되는 경우 내부로직상 tap은 처리되나
                    // iOS에서 mousedown을 발생시키지 않는다.. -> input 포커스 이동이 안됨.
                    // 이 경우 tap처리도 하지 않아야 할듯.
                    this._tap_blocked = true;
                }

            if (is_drag_return)
                    return true;

            // enabletouchevent=false인 경우 마우스 코드에서 처리
            if (application.enabletouchevent)
            {
                var trackInfo = nexacro._cur_track_info;
                var repeatInfo = nexacro._cur_repeat_info;
                if (repeatInfo)
                {
                    repeatInfo.distX = clientX - repeatInfo.startX;
                    repeatInfo.distY = clientY - repeatInfo.startY;
                    repeatInfo.canvasX = repeatInfo.startCanvasX + repeatInfo.distX;
                    repeatInfo.canvasY = repeatInfo.startCanvasY + repeatInfo.distY;
                }

                if (trackInfo)
                {
                    trackInfo.distX = clientX - trackInfo.startX;
                    trackInfo.distY = clientY - trackInfo.startY;
                    trackInfo.target._on_movetrack(trackInfo.distX, trackInfo.distY, trackInfo.data);
                }
            }
        }

        // ontouchmove Event
        if (is_last_changedtouch)
        {
            this.on_fire_ontouch(1);
        }

        // Gesture Handling
        var is_slide = false;
        var slideinfo = null;
        if (touchlen == 1)
        {
            // Tap, LongPress 처리시 가만히 있어도 조금식 move 되므로 경미한 경우 무시.
            if (this._current_gesture == undefined && !this._slide_blocked)
            {
                var is_intended = this.checkUnintendedMove(info);
                if (is_intended)
                {
                    if (this._hold_timer && this._hold_timer.isWait()) this._hold_timer.stop();
                    if (this._tap_timer && this._tap_timer.isWait()) this._tap_timer.stop();
                    if (this._dbltap_timer && this._dbltap_timer.isWait()) this._dbltap_timer.stop();
                }

                slideinfo = this.checkSlide();
                if (slideinfo)
                    is_slide = true;

                if (slideinfo._lock_horz)
                    this._slide_lock_horz = true;
                if (slideinfo._lock_vert)
                    this._slide_lock_vert = true;
            }
            else if (this._current_gesture == "slide")
            {
                is_slide = true;
                slideinfo = {
                    x: info._x,
                    y: info._y,
                    xacc: info._x - info._startx,
                    yacc: info._y - info._starty,
                    xdelta: parseInt(info._x - info._oldx),
                    ydelta: parseInt(info._y - info._oldy)
                };
             
                if (this._slide_lock_horz)
                {
                    slideinfo.xacc = 0;
                    slideinfo.xdelta = 0;
                }
                if (this._slide_lock_vert)
                {
                    slideinfo.yacc = 0;
                    slideinfo.ydelta = 0;
                }
            }
        }
        else if (info == this._currentTouches[touchlen - 1])
        {
            // 여러 손가락 Gesture는 마지막 손가락 move에서만 처리한다.
            if (touchlen == 2)
            {
                var is_pinch = false;
                var pinchinfo = null;
                if (!this._pinch_blocked)
                {
                    pinchinfo = this.checkPinch(this._currentTouches[0], this._currentTouches[1]);
                    if (pinchinfo !== null)
                        is_pinch = true;
                }

                if (is_pinch)
                {
                    var is_first_pinch = false;
                    var compinfo = this._start_win.findComponent(this._start_elem, 0, 0);
                    if (compinfo && this._current_gesture != "pinch")
                        is_first_pinch = true;

                    this._current_gesture = "pinch";
                    this._slide_blocked = true;
                    if (compinfo)
                        this.on_fire_onpinch(is_first_pinch ? 0 : 1, compinfo, pinchinfo.oldrange, pinchinfo.currange);

                    this._last_pinchinfo = pinchinfo;
                }
            }

            slideinfo = this.checkSlide();
            if (slideinfo)
                is_slide = true;
        }

        if (!this._slide_blocked)
        {
            if (is_slide)
            {
                var is_first_slide = false;
                if (this._current_gesture != "slide")
                    is_first_slide = true;

                // Slide History는 Fling Check에 사용되는데 실제로 slide에 대한 정보가 아닌
                // 좌표+시간 정보를 기록하기때문에 첫 slide인 경우 정보가 하나 누락되고 있었음.
                if (this._slide_history.length == 0)
                {
                    this._slide_history.push({ x: slideinfo.x - slideinfo.xacc, y: slideinfo.y - slideinfo.yacc, t: this._old_time });
                }

                // enabletouchevent=false일때, drag처리를 못하면서 전체 slide처리를 따로 처리해야 한다.
                if (application.enabletouchevent == false && is_first_slide)
                {
                    // Android에서 touchmove를 preventDefault 처리 하지 않으면 
                    // 이후 touchmove이벤트가 전혀 발생하지 않고 OS가 처리함.
                    var offset_x = info._x - info._oldx;
                    var offset_y = info._y - info._oldy;
                    var move_dir;
                    if (Math.abs(offset_x) > Math.abs(offset_y))
                        move_dir = (offset_x > 0) ? -10 : 10;
                    else
                        move_dir = (offset_y > 0) ? -1 : 1;
                    if (this._scroll_direction != move_dir)
                        this._scroll_end = false;
                    if (this._scroll_body || this._scroll_end)
                    {
                        if (this._scroll_body || this._scroll_direction == move_dir)
                        {
                            this._slide_blocked = true;
                            this._tap_blocked = true;
                            this._scroll_body = true;
                            return false;
                        }
                        
                        this._scroll_end = false;
                    }
                }

                this._current_gesture = "slide";
                this._pinch_blocked = true;
                this._tap_blocked = true;
                var startcompinfo = win.findComponent(this._start_elem, 0, 0);
                if (startcompinfo)
                {
                    this.on_fire_onslide(is_first_slide ? 0 : 1, startcompinfo, slideinfo.xacc, slideinfo.yacc, slideinfo.xdelta, slideinfo.ydelta, slideinfo.x, slideinfo.y, info.time);
                }

                this._last_slideinfo = slideinfo;
            }
            else
            {
                // TODO slide가 아닌 경우에도 slide History를 기록하면 좀 더 쉽게 fling이 가능할 것이다.
                // -> 여러 손가락인 경우 여기에 해당할 수 있음 (각 touch가 따로 move처리되기때문에)
            }
        }

        if (is_last_changedtouch)
        {
            if (this.checkInputPreventDefault(elem, this._currentTouches.length, 1))
                return false;
        }

        // body를 스크롤하는 경우, 첫 touchmove 이후 모든 touchmove를 false로 리턴
        if (this._scroll_body == true)
            return false;

        return true;
    };

    _pTouchManager.ontouchend = function (win, elem, touchid, clientX, clientY, screenX, screenY, curtime, orgtime, is_last_changedtouch)
    {
        if (this._old_time != curtime)
            this._old_time = this._current_time;
        this._current_time = curtime;
        touchid = "_" + String(touchid);

        var x = clientX;
        var y = clientY;
        var info = this._currentTouches[touchid];
        var repeatInfo = nexacro._cur_repeat_info;
        var trackInfo = nexacro._cur_track_info;

        if (!info)
        {
            // Critical Error
            //alert("TouchManager.onTouchEnd() Error! please refresh :p");
            if (repeatInfo)
            {
                if (repeatInfo._timer)
                {
                    var _handle = nexacro._getWindowHandle(this._handle);
                    nexacro._clearSystemTimer(_handle, repeatInfo._timer);
                }
                repeatInfo.distX = clientX - repeatInfo.startX;
                repeatInfo.distY = clientY - repeatInfo.startY;
                repeatInfo.target._on_endrepeat(repeatInfo.refer_comp, repeatInfo.distX, repeatInfo.distY, repeatInfo.data);
                nexacro._cur_repeat_info = null;
            }
            if (trackInfo)
            {
                trackInfo.distX = clientX - trackInfo.startX;
                trackInfo.distY = clientY - trackInfo.startY;
                trackInfo.target._on_endtrack(trackInfo.distX, trackInfo.distY, trackInfo.data);
                nexacro._cur_track_info = null;
                
            }
            nexacro._cur_drag_info = null;
            
            return;
        }

        // Update Info
        info._updateInfo(elem, "touchend", curtime, info.screenX, info.screenY, info._x, info._y);

        // Drag & Drop (drop)
        var dragInfo = nexacro._cur_drag_info;
        if (elem && dragInfo && dragInfo.isDragging && application.enabletouchevent) //enabletouchevent == false 일때, mobile에서 drop 두번 발생
        {
            var comp, elem_pos, canvasX, canvasY;
            comp = win.findComponent(elem, 0, 0);
            if (comp && comp[0])
            {
                var windowX = clientX;
                var windowY = clientY;
                elem_pos = nexacro._getElementXYInWindow(elem._handle);
                canvasX = windowX - elem_pos[0] + comp[1];
                canvasY = windowY - elem_pos[1] + comp[2];
                comp[0]._on_drop(elem, dragInfo.target, dragInfo.referTarget, dragInfo.data, dragInfo.userdata,
                    "touch", false, false, false, canvasX, canvasY, screenX, screenY);
            }
        }

        // ontouchend Event
        if (is_last_changedtouch)
        {
            if (repeatInfo)
            {
                if (repeatInfo._timer)
                {
                    var _handle = nexacro._getWindowHandle(win._handle);
                    nexacro._clearSystemTimer(_handle, repeatInfo._timer);
                }
                repeatInfo.distX = clientX - repeatInfo.startX;
                repeatInfo.distY = clientY - repeatInfo.startY;
                repeatInfo.target._on_endrepeat(repeatInfo.refer_comp, repeatInfo.distX, repeatInfo.distY, repeatInfo.data);
                nexacro._cur_repeat_info = null;
            }

            if (trackInfo)
            {
                trackInfo.distX = clientX - trackInfo.startX;
                trackInfo.distY = clientY - trackInfo.startY;
                trackInfo.target._on_endtrack(trackInfo.distX, trackInfo.distY, trackInfo.data);
                nexacro._cur_track_info = null;
            }
            this.on_fire_ontouch(2);

            var comp = win.findComponent(elem, 0, 0);
            if (comp && comp[0] && comp[0]._is_alive)
                comp[0]._on_last_lbuttonup();
        }

        // Gesture Handling
        var touchlen = this._currentTouches.size();
        if (touchlen == 1)
        {
            // touchstart후 너무 많이 move하고 touchend하는 경우 tap block
            // 또는 element가 바뀌는 경우도 block
            // 브라우저가 스크롤 하게 하는 경우도 block
            if (Math.abs(this._currentTouches[0]._startx - this._currentTouches[0]._x) > this._tap_bound ||
                Math.abs(this._currentTouches[0]._starty - this._currentTouches[0]._y) > this._tap_bound ||
                this._start_elem != elem)
                this._tap_blocked = true;

            if (this._hold_timer && this._hold_timer.isWait()) this._hold_timer.stop();
            if (this._tap_timer && this._tap_timer.isWait() && this._tap_blocked == false)
            {
                this._tap_timer.stop();

                var startcompinfo = win.findComponent(this._start_elem, 0, 0);
                if (startcompinfo)
                    this.on_fire_ontap(startcompinfo);

                if (!this._is_first_tap)
                {
                    // 첫 Tap과 너무 먼 곳을 Tap했다면 DblTap이 아님.
                    var range = this.getRange(this._currentTouches[0]._x, this._currentTouches[0]._y, this._first_tap_point.x, this._first_tap_point.y);
                    if (range < this.dbltap_bound)
                    {
                        var firsttapcompinfo = win.findComponent(this._first_tap_elem, 0, 0);
                        if (startcompinfo && startcompinfo[0])
                        {
                            if (firsttapcompinfo && startcompinfo[0] === firsttapcompinfo[0])
                                this.on_fire_ondbltap(startcompinfo);
                        }
                    }
                }
            }
        }

        // 여러손가락을 동시에 뗄 경우. TouchManager.ontouchend는 각각 호출된다.
        // 이 때 ontouchend Event Fire에 내어줄 정보를 위해 currentTouches는 기다렸다 동시에 제거하되
        // 제스쳐 인식을 위해 로직은 각각 처리되어야 함.
        var ret = true;
        if (is_last_changedtouch)
        {
            if (this.checkInputPreventDefault(elem, touchlen, 2))
                ret = false;

            for (var i = 0; i < touchlen; i++)
            {
                var info = this._currentTouches[i];
                if (info.time == this._current_time && info._current_state == "touchend")
                {
                    this._currentTouches.delete_item(info.touchid);
                    touchlen--;
                    i--;

                    if (this._currentTouches.size() == 0)
                    {
                        if (this._current_gesture == "slide" && !this._slide_blocked)
                        {
                            var slideinfo = this._last_slideinfo;
                            var startcompinfo = win.findComponent(this._start_elem, 0, 0);
                            if (startcompinfo)
                            {
                                this.on_fire_onslide(2, startcompinfo, slideinfo.xacc, slideinfo.yacc, slideinfo.xdelta, slideinfo.ydelta, slideinfo.x, slideinfo.y, info.time);
                            }
                        }

                        // 모든 손가락이 떨어졌을때 Fling처리
                        if (!this._fling_blocked)
                        {
                            var flinginfo = this.checkFling();
                            if (flinginfo)
                            {
                                var uid = "_fling" + this._fling_uid;
                                var fling = new nexacro.FlingHandler(uid, this._start_win, this._start_elem, this._scroll_comp, this._scroll_mode, null,
                                    flinginfo.xstartvalue, flinginfo.ystartvalue, flinginfo.xspeed, flinginfo.yspeed, flinginfo.duration,
                                    this._slide_touchlen, this);
                                if (fling._is_alive)
                                {
                                    fling.start();

                                    this._fling_list.add_item(uid, fling);
                                    this._fling_uid++;
                                }
                                else
                                {
                                    delete fling;
                                }
                            }
                        }

                        this._slide_history = [];

                        // 초기화
                        this._current_gesture = undefined;
                        this._tap_blocked = false;
                        this._slide_blocked = false;
                        this._pinch_blocked = false;
                        this._fling_blocked = false;
                        this._first_pinch_range = undefined;
                        this._is_longpressed = false;
                        this._scroll_comp = null;
                        this._scroll_mode = -1;
                        this._last_pinchinfo = null;
                        this._last_slideinfo = null;
                        this._allow_default = false;
                        this._slide_lock_horz = false;
                        this._slide_lock_vert = false;
                        this._scroll_body = false;
                    }
                    else
                    {
                        if (this._current_gesture == "slide" && !this._slide_blocked)
                        {
                            // 여러 손가락 Slide 중, 첫번째 손가락을 뗀 경우
                            if (!this._fling_timer)
                                this._fling_timer = new nexacro.TouchTimer(win, this._on_fling_timer, this, this.fling_threshold);
                            else
                                this._fling_timer.start(this.fling_threshold);
                        }

                        if (this._current_gesture == "pinch" && !this._pinch_blocked)
                        {
                            var pinchinfo = this._last_pinchinfo;
                            var compinfo = this._start_win.findComponent(this._start_elem, 0, 0);
                            if (compinfo)
                                this.on_fire_onpinch(2, compinfo, pinchinfo.currange, pinchinfo.currange);
                        }

                        // 여러 손가락중 일부만 뗀 경우 제스쳐 불가
                        this._pinch_blocked = true;
                        this._slide_blocked = true;
                    }
                }
            }
        }

        nexacro._cur_drag_info = null;
        return ret;
    };

    _pTouchManager.ontouchcancel = function (win, elem, touchid, clientX, clientY, screenX, screenY, curtime, orgtime, is_last_changedtouch)
    {
        if (this._old_time != curtime)
            this._old_time = this._current_time;
        this._current_time = curtime;
        touchid = "_" + String(touchid);

        var info = this._currentTouches[touchid];
        if (!info)
            return; // critical error

        this._currentTouches.delete_item(info.touchid);
        
        if (this._currentTouches.length > 0)
        {
            // 특정 손가락만 취소된 경우 (있을지?) -> 모든 제스쳐 사용 불가
            this._tap_blocked = true;
            this._slide_blocked = true;
            this._pinch_blocked = true;
            this._fling_blocked = true;
            this._scroll_comp = null;
            this._scroll_mode = -1;
            this._scroll_body = false;
        }
        else
        {
            // 마지막 손가락이었던 경우 -> 리셋
            this._slide_history = [];

            // 초기화
            this._current_gesture = undefined;
            this._tap_blocked = false;
            this._slide_blocked = false;
            this._pinch_blocked = false;
            this._fling_blocked = false;
            this._first_pinch_range = undefined;
            this._is_longpressed = false;
            this._scroll_comp = null;
            this._scroll_mode = -1;
            this._last_pinchinfo = null;
            this._last_slideinfo = null;
            this._scroll_body = false;

            // 안드로이드 기본 브라우저 pinchzoom을 시작하면 모두 cancel처리 됨.
            this._allow_default = false;
            this._slide_lock_horz = false;
            this._slide_lock_vert = false;
        }
    };
    
    //==== Gesture Check Routine ==========================================//
    _pTouchManager.checkUnintendedMove = function (info, threshold)
    {
        if (threshold === undefined)
            threshold = this.unintendedmove_threshold;

        // 의도하지 않았을 수준의 움직임인지 체크한다. 감성기능 
        var range1 = this.getRange(info._oldx, info._oldy, info._x, info._y);
        var range2 = this.getRange(info._x, info._y, info._startx, info._starty);
        if (range1 > threshold || range2 > threshold)
        {
            return true;
        }
        return false;
    };

    _pTouchManager.checkPinch = function (info1, info2)
    {
        var pinchinfo = null;
        if (!info1 || !info2)
            return null;

        var is_pinch = false;
        var offset1 = { x: info1._x - info1._oldx, y: info1._y - info1._oldy };
        var offset2 = { x: info2._x - info2._oldx, y: info2._y - info2._oldy };

        // Pinch mode로 들어간 후 부터는 경미한 움직임도 허용한다.
        var pinch_threshold = this.pinch_threshold;
        if (this._current_gesture == "pinch")
            pinch_threshold = 1;

        var range11 = this.getRange(this._center_point.x, this._center_point.y, info1._oldx, info1._oldy);
        var range12 = this.getRange(this._center_point.x, this._center_point.y, info1._x, info1._y);
        var range21 = this.getRange(this._center_point.x, this._center_point.y, info2._oldx, info2._oldy);
        var range22 = this.getRange(this._center_point.x, this._center_point.y, info2._x, info2._y);
        if (this._current_gesture != "pinch")
        {
            if (range12 - range11 < -(pinch_threshold) && range22 - range21 < -(pinch_threshold)) // pinch out (축소)
            {
                is_pinch = true;
            }
            else if (range12 - range11 > pinch_threshold && range22 - range21 > pinch_threshold) // pinch in (확대)
            {
                is_pinch = true;
            }
        }
        else
        {
            if (range11 != range12 || range21 != range22)
                is_pinch = true;
        }

        if (is_pinch)
        {
            var oldrange = this.getRange(info1._oldx, info1._oldy, info2._oldx, info2._oldy);
            var currange = this.getRange(info1._x, info1._y, info2._x, info2._y);
            if (this._first_pinch_range === undefined)
            {
                this._first_pinch_range = oldrange;
            }
            pinchinfo = { oldrange: oldrange, currange: currange };
        }
        return pinchinfo;
    };

    _pTouchManager.checkSlide = function ()
    {
        var touchlen = this._currentTouches.length;
        if (touchlen < 1)
            return false;

        // slide모드가 아닐때 경미한 움직임은 무시
        var is_first = (this._current_gesture != "slide");
        if (is_first)
        {
            var is_intended = false;
            for (var i = 0; i < touchlen; i++)
            {
                var info = this._currentTouches[i];
                if (this.checkUnintendedMove(info, this.slide_threshold))
                {
                    is_intended = true;
                    break;
                }
            }

            if (!is_intended)
            {
                return false;
            }
        }

        var is_slide = false;
        var slideinfo = {};
        if (touchlen == 1)
        {
            slideinfo.x = info._x;
            slideinfo.y = info._y;
            slideinfo.xacc = info._x - info._startx;
            slideinfo.yacc = info._y - info._starty;
            slideinfo.xdelta = parseInt(info._x - info._oldx, 0);
            slideinfo.ydelta = parseInt(info._y - info._oldy, 0);

            // 첫 slide시 가로/세로 이동된 비율차이가 심하면 가로/세로 slide로 확정하도록한다.
            if (is_first)
            {
                // 한번 slide mode가 되면 분석 없이 모든 touchmove가 slide로 처리되므로 flag처리한다.
                if (Math.abs(slideinfo.xacc) > Math.abs(slideinfo.yacc) * 2)
                {
                    slideinfo._lock_vert = true;
                    slideinfo.yacc = 0;
                    slideinfo.ydelta = 0;
                }
                else if (Math.abs(slideinfo.xacc) * 2 < Math.abs(slideinfo.yacc))
                {
                    slideinfo._lock_horz = true;
                    slideinfo.xacc = 0;
                    slideinfo.xdelta = 0;
                }
            }
        }
        else
        {
            var centerpos = { x: 0, y: 0 };
            var acc = { x: 0, y: 0 };
            var offset = { x: 0, y: 0 };
            var angles = [];
            for (var i = 0; i < touchlen; i++)
            {
                var info = this._currentTouches[i];
                centerpos.x += info._x;
                centerpos.y += info._y;
                offset.x += info._x - info._oldx;
                offset.y += info._y - info._oldy;
                acc.x += info._x - info._startx;
                acc.y += info._y - info._starty;
                var angle = this.getAngle(info._oldx, info._oldy, info._x, info._y);
                angles.push(angle);
            }

            // 평균 offset 벡터와 각도 차이가 threshold를 넘지 않으면 모두 같은방향으로 이동한다고 판단
            var average_angle = this.getAngle(0, 0, offset.x, offset.y);
            for (var i = 0; i < touchlen; i++)
            {
                var delta = Math.abs(average_angle - angles[i]);
                if (delta > this.slideangle_threshold)
                    return null;
            }

            slideinfo.x = (centerpos.x / touchlen);
            slideinfo.y = (centerpos.y / touchlen);
            slideinfo.xacc = (acc.x / touchlen);
            slideinfo.yacc = (acc.y / touchlen);
            slideinfo.xdelta = (offset.x / touchlen);
            slideinfo.ydelta = (offset.y / touchlen);
        }
        return slideinfo;
    };

    _pTouchManager.checkFling = function ()
    {
        if (this._slide_history.length <= 1)
            return;

        var flinginfo = { xstartvalue: 0, ystartvalue: 0, xspeed: 0, yspeed: 0, duration: 0 };
        for (axis in { x: 1, y: 1 })
        {
            var flingduration = 0;
            var flingdistance = 0;
            var flingpos;

            // 손을 뗀 순간의 속도 계산. 최소 100ms 간 이동을 체크함
            var history = this._slide_history;
            var historylen = history.length;
            var lastpos = history[historylen - 1];
            var comparepos = history[historylen - 2];
            for (var i = historylen - 3; i >= 0; i--)
            {
                if (lastpos.t - history[i].t > 100)
                    break;
                comparepos = history[i];
            }

            var speed = (lastpos[axis] - comparepos[axis]) / (lastpos.t - comparepos.t);
            if (Math.abs(speed) >= this._fling_minimum_speed)
            {
                flingduration = Math.log(this._fling_minimum_speed / Math.abs(speed)) / Math.log(this._fling_friction);
                flingdistance = speed * (1 - Math.pow(this._fling_friction, flingduration + 1)) / (1 - this._fling_friction);
            }

            flingpos = Math.floor(flingdistance);
            if (axis == "x")
            {
                flinginfo.xstartvalue = flingdistance;
                flinginfo.xspeed = speed;
            }
            if (axis == "y")
            {
                flinginfo.ystartvalue = flingdistance;
                flinginfo.yspeed = speed;
            }

            flinginfo.duration = Math.max(flinginfo.duration, flingduration);
        }

        return flinginfo;
    };

    //==== Fire Touch & Gesture Event functions ==========================================//
    _pTouchManager.on_fire_ontouch = function (eventtype)
    {
        var compinfo = this._start_win.findComponent(this._start_elem, 0, 0);
        if (!compinfo || !compinfo[0])
            return;

        // 모든 changedTouches를 묶어서 fire
        var touchlen = this._currentTouches.length;
        var ret_info = this.getCurrentTouchInputInfo();
        var touchinfos = ret_info.touchinfos;
        var changedtouchinfos = ret_info.changedtouchinfos;
        var firsttouchinfo = ret_info.firsttouchinfo;

        // fire
        if (application.enabletouchevent)
        {
            var ret;
            switch (eventtype)
            {
                case 0:
                    compinfo[0]._on_touchstart(this, touchinfos, changedtouchinfos);
                    break;
                case 1:
                    compinfo[0]._on_touchmove(this, touchinfos, changedtouchinfos);
                    break;
                case 2:
                    ret = compinfo[0]._on_touchend(this, touchinfos, changedtouchinfos);
                    if (ret == true)
                    {
                        // PreventDefault 된 경우 Tap 발생을 막음.
                        // 2손가락 이상인 경우 이미 Tap 발생불가.
                        this._tap_blocked = true;
                    }
                    break;
            }
        }
        else if (firsttouchinfo)
        {
            // EnableTouchEvent = false인 경우 적절한 MouseEvent로 변환하여 Fire
            switch (eventtype)
            {
                case 0:
                    this._start_info = this._start_win._on_touch_to_lbuttondown(firsttouchinfo._elem, "touch", false, false, false, firsttouchinfo._x, firsttouchinfo._y, firsttouchinfo.screenX, firsttouchinfo.screenY);
                    break;
                case 1:
                    // TODO lbuttondown 이전에 발생한 mousemove를 모두 모았다가 이 시점에 fire해주는것이 더 자연스러울지도?

                    if (this._tap_blocked && this._start_win._cur_ldown_elem == null)
                    {
                        // tap이 아닌것이 확실한 touchmove 시점에 lbuttondown을 fire함.
                        this._start_win._on_sys_lbuttondown(firsttouchinfo._elem, "touch", false, false, false, firsttouchinfo._x, firsttouchinfo._y, firsttouchinfo.screenX, firsttouchinfo.screenY);

                        // 스크롤바를 잡아 끄는 경우 fling은 불허
                        var trackInfo = nexacro._cur_track_info;
                        if (trackInfo)
                        {
                            this._fling_blocked = true;
                        }
                    }

                    this._start_win._on_sys_mousemove(firsttouchinfo._elem, "touch", false, false, false, firsttouchinfo._x, firsttouchinfo._y, firsttouchinfo.screenX, firsttouchinfo.screenY);
                    break;
                case 2:
                    if (this._is_longpressed)
                    {
                        this._start_win._on_sys_rbuttonup(firsttouchinfo._elem, "touch", false, false, false, firsttouchinfo._x, firsttouchinfo._y, firsttouchinfo.screenX, firsttouchinfo.screenY, undefined, undefined, undefined, firsttouchinfo._elem);
                    }
                    else if (this._tap_blocked)
                    {
                        this._start_win._on_sys_lbuttonup(firsttouchinfo._elem, "touch", false, false, false, firsttouchinfo._x, firsttouchinfo._y, firsttouchinfo.screenX, firsttouchinfo.screenY, undefined, undefined, undefined, firsttouchinfo._elem);
                    }
                    break;
            }
        }

    };

    _pTouchManager.on_fire_ontap = function (compinfo)
    {
        var info = this._currentTouches[0];
        if (this._is_first_tap)
        {
            this._first_tap_elem = this._start_elem;
            this._first_tap_point = this._start_point;
        }

        if (compinfo && compinfo[0])
        {
            var start_point = this._start_point;
            var elem_pos = nexacro._getElementXYInWindow(this._start_elem._handle);
            var canvasX = start_point.x - elem_pos[0] + compinfo[1];
            var canvasY = start_point.y - elem_pos[1] + compinfo[2];

            if (application.enabletouchevent)
            {
                compinfo[0]._on_tap(this._start_elem, canvasX, canvasY, start_point.screenX, start_point.screenY);
            }
            else
            {
                // 보통의 웹브라우저가 처리하는 것처럼 tap동작시 mousemove, mousedown, mouseup을 처리하도록 변경 2014.11.10
                var ret_info = this.getCurrentTouchInputInfo();
                var firsttouchinfo = ret_info.firsttouchinfo;

                var ret;
                this._start_win._on_sys_mousemove(firsttouchinfo._elem, "touch", false, false, false, firsttouchinfo._x, firsttouchinfo._y, firsttouchinfo.screenX, firsttouchinfo.screenY);
                //                ret = this._start_win._on_sys_lbuttondown(firsttouchinfo._elem, "touch", false, false, false, firsttouchinfo._x, firsttouchinfo._y, firsttouchinfo.screenX, firsttouchinfo.screenY);
                if (this._start_info && this._start_info.cp)
                {
                    //this._start_info.cp._on_lbuttondown(firsttouchinfo._elem, "touch", false, false, false, this._start_info.cX, this._start_info.cY, firsttouchinfo.screenX, firsttouchinfo.screenY);
                    this._start_info.cp._on_touch_lbuttondown(firsttouchinfo._elem, "touch", false, false, false, this._start_info.cX, this._start_info.cY, firsttouchinfo.screenX, firsttouchinfo.screenY, undefined, undefined, undefined, true);

                    delete this._start_info;
                }
                //                if (ret != true)

                this._start_win._on_sys_lbuttonup(firsttouchinfo._elem, "touch", false, false, false, firsttouchinfo._x, firsttouchinfo._y, firsttouchinfo.screenX, firsttouchinfo.screenY, undefined, undefined, undefined, firsttouchinfo._elem);
            }
        }
    };

    _pTouchManager.on_fire_ondbltap = function (compinfo)
    {
        if (this.dbltap_timer && this.dbltap_timer.isWait()) this.dbltap_timer.stop();

        if (compinfo && compinfo[0])
        {
            var start_point = this._first_tap_point;
            var elem_pos = nexacro._getElementXYInWindow(this._start_elem._handle);
            var canvasX = start_point.x - elem_pos[0] + compinfo[1];
            var canvasY = start_point.y - elem_pos[1] + compinfo[2];

            if (application.enabletouchevent)
            {
                compinfo[0]._on_dbltap(this._first_tap_elem, canvasX, canvasY, start_point.screenX, start_point.screenY);
            }
            else
            {
                // 마우스의 경우 더블클릭은 SysDblClick을 사용하는 듯.
                compinfo[0]._on_dblclick(this._first_tap_elem, "lbutton", false, false, false, canvasX, canvasY, start_point.screenX, start_point.screenY);
            }
        }
    };

    _pTouchManager.on_fire_onlongpress = function (compinfo)
    {
        if (compinfo && compinfo[0])
        {
            var ret_info = this.getCurrentTouchInputInfo();
            if (application.enabletouchevent)
            {
                var touchinfos = ret_info.touchinfos;
                compinfo[0]._on_longpress(this._start_elem, touchinfos);
            }
            else
            {
                var firsttouchinfo = ret_info.firsttouchinfo;
                if (firsttouchinfo)
                compinfo[0]._on_rbuttondown(firsttouchinfo._elem, "touch", false, false, false, firsttouchinfo.canvasX, firsttouchinfo.canvasY, firsttouchinfo.screenX, firsttouchinfo.screenY);
            }
        }
    };

    // 0:pinchstart 1:pinch 2:pinchend
    _pTouchManager.on_fire_onpinch = function (eventtype, compinfo, oldrange, currange)
    {
        if (compinfo && compinfo[0])
        {
            var ret_info = this.getCurrentTouchInputInfo();
            var touchinfos = ret_info.touchinfos;

            var accvalue = currange - this._first_pinch_range;
            var deltavalue = currange - oldrange;
            var ret;
            switch (eventtype)
            {
                case 0:
                    ret = compinfo[0]._on_pinchstart(this._start_elem, touchinfos, accvalue, deltavalue, this._first_pinch_range, currange);
                    if (ret == true)
                    {
                        this._pinch_blocked = true;
                        return;
                    }
                    // Default: pinchstart + pinch 동시 발생
                case 1:

                    ret = compinfo[0]._on_pinch(this._start_elem, touchinfos, accvalue, deltavalue, this._first_pinch_range, currange);
                    if (ret == true)
                    {
                        this._pinch_blocked = true;
                        compinfo[0]._on_pinchend(this._start_elem, touchinfos, accvalue, deltavalue, this._first_pinch_range, currange);
                    }
                    break;
                case 2:
                        compinfo[0]._on_pinchend(this._start_elem, touchinfos, accvalue, deltavalue, this._first_pinch_range, currange);
                    break;
            }
        }
    };

    _pTouchManager.on_fire_onslide = function (eventtype, compinfo, xaccvalue, yaccvalue, xdeltavalue, ydeltavalue, x, y, time)
    {
        if (compinfo && compinfo[0])
        {
            var ret_info = this.getCurrentTouchInputInfo();
            var touchinfos = ret_info.touchinfos;

            var ret;
            switch (eventtype)
            {
                case 0:                    
                    ret = compinfo[0]._on_slidestart(this._start_elem, this, touchinfos, xaccvalue, yaccvalue, xdeltavalue, ydeltavalue);
                    if (ret == true)
                    {                        
                        this._slide_blocked = true;
                        return;
                    }
                    // Default: slidestart + slide 동시 발생
                case 1:                    
                    // 내부 스크롤이 끝까지 도달했는지 체크
                    // Slide시 DefaultAction이 수행되지 못하고 Application까지 버블링되면 end of scroll로 판단한다.
                    this._scroll_end = false;

                    // 아예 움직이지 않은 경우 slide 이벤트를 발생시키지 않는다. (잘못된 scroll end 처리가 됨)
                    if (xdeltavalue == 0 && ydeltavalue == 0)
                        break;
                    ret = compinfo[0]._on_slide(this._start_elem, this, touchinfos, xaccvalue, yaccvalue, xdeltavalue, ydeltavalue);
                    if (ret == true)
                    {                        
                        // slide를 PreventDefault 처리 할 경우, slideend 이벤트가 발생되지만
                        // 이 시점에 fling을 내어주기는 어렵다. fling도 하지 않음.

                        // slide를 preventDefault한다고 완전 종료하는건 좀 이상해보인다.
                        // 스펙정리중에 이슈가 됐던것 같은데... 논의 해봐야 할듯....
                        //this._slide_blocked = true;
                        //compinfo[0]._on_slideend(this._start_elem, this, touchinfos, xaccvalue, yaccvalue, xdeltavalue, ydeltavalue);
                        return;
                    }

                    // for Check Fling
                    this._slide_touchlen = touchinfos ? touchinfos.length : 1;
                    if (this._slide_lock_horz)
                        x = this._slide_history[0].x;
                    if (this._slide_lock_vert)
                        y = this._slide_history[0].y;
                    this._slide_history.push({ x: x, y: y, t: time });
                    if (this._slide_history.length > 30)
                        this._slide_history.splice(0, 15);
                    break;
                case 2:
                    compinfo[0]._on_slideend(this._start_elem, this, touchinfos, xaccvalue, yaccvalue, xdeltavalue, ydeltavalue);
                    break;
            }
        }
    };

    _pTouchManager.on_fire_onflingstart = function (elem, compinfo, fling_handler, xstartvalue, ystartvalue, xdeltavalue, ydeltavalue, touchlen)
    {
        if (compinfo && compinfo[0])
        {
            return compinfo[0]._on_flingstart(elem, fling_handler, xstartvalue, ystartvalue, xdeltavalue, ydeltavalue, touchlen);
        }
    };

    _pTouchManager.on_fire_onfling = function (elem, compinfo, fling_handler, xstartvalue, ystartvalue, xdeltavalue, ydeltavalue, touchlen)
    {
        if (compinfo && compinfo[0])
        {
            compinfo[0]._on_fling(elem, fling_handler, xstartvalue, ystartvalue, xdeltavalue, ydeltavalue, touchlen);
        }
    };

    _pTouchManager.on_fire_onflingend = function (elem, compinfo, fling_handler, xstartvalue, ystartvalue, xdeltavalue, ydeltavalue, touchlen)
    {
        if (compinfo && compinfo[0])
        {
            compinfo[0]._on_flingend(elem, fling_handler, xstartvalue, ystartvalue, xdeltavalue, ydeltavalue, touchlen);
        }
    };

    _pTouchManager.onflingend = function (fling_uid)
    {
        if (!fling_uid)
            return;

        this._fling_list.delete_item(fling_uid);
    };

    _pTouchManager.stopFling = function (comp)
    {
        var fling_list = this._fling_list;
        if (fling_list.length == 0)
            return;

        // 손 댄 위치에 겹치는 모든 컴포넌트 fling 중단
        while (comp)
        {
            if (comp._is_application)
                return;

            for (var i = 0; i < fling_list.length; i++)
            {
                var fling_handler = fling_list[i];
                var is_stop = false;
                if (comp == fling_handler._target_comp)
                    is_stop = true;

                if (comp == fling_handler._scroll_comp)
                    is_stop = true;

                if (is_stop)
                    fling_handler.stop();
            }

            comp = comp.parent;
        }
    };

    //==== Gesture Timer ==========================================//
    _pTouchManager._on_tap_timer = function ()
    {

    };

    _pTouchManager._on_dbltap_timer = function ()
    {
        // Tap 초기화
        this._first_tap_elem = null;
        this._is_first_tap = true;
    };

    _pTouchManager._on_hold_timer = function ()
    {
        var compinfo = this._start_win.findComponent(this._start_elem, 0, 0);
        if (compinfo)
        {
            this.on_fire_onlongpress(compinfo);
        }

        this._slide_blocked = true;
        this._fling_blocked = true;
        this._is_longpressed = true;
    };

    _pTouchManager._on_fling_timer = function ()
    {
        this._fling_blocked = true;
    };

    //==== Utility ==========================================//
    _pTouchManager.compareComponent = function (linkedcontrol, focused_comp)
    {
        if (linkedcontrol)
        {
            var post_focus_comp = linkedcontrol;
            while (post_focus_comp)
            {
                var c = post_focus_comp._getLastFocused();
                if (!c || (c && (!c.visible || !c.enable)))
                    c = post_focus_comp._getTabOrderFirst();
                if (!c || !c.visible)
                {
                    break;
                }
                post_focus_comp = c;
            }

            // mousedown 발생 -> 키보드 팝업
            if (post_focus_comp && post_focus_comp._input_element)
            {
                if (focused_comp == post_focus_comp)
                {
                    return true;
                }
                return false;
            }
        }
    };

    _pTouchManager.checkInputPreventDefault = function (elem, touchlen, type)
    {
        // true를 리턴하면 TouchEvent를 preventDefault 하지 않음
        // -> mousedown이 발생하여 caret, keyboard 등이 처리된다.
        if (touchlen != 1)
            return false;

        var focused_comp;
        var linkedcontrol = elem ? elem.linkedcontrol : null;
        if (!linkedcontrol && elem.parent)
        {
            linkedcontrol = elem.parent.linkedcontrol;
            if ((elem instanceof nexacro.InputElement) && linkedcontrol._is_subcontrol)
            {
                linkedcontrol = linkedcontrol._getRootComponent(linkedcontrol);
            }
        }
        while (linkedcontrol && !linkedcontrol._is_focus_accept)
        {
            linkedcontrol = linkedcontrol.parent;
        }

        if (linkedcontrol && linkedcontrol._refform)
        {
            if (linkedcontrol._refform.getFocus)
            {
            focused_comp = linkedcontrol._refform.getFocus();
            }
        }

        var is_focused_input = (focused_comp == linkedcontrol);
        var is_display_elem = (elem && elem._parent_elem) ? (elem._parent_elem instanceof nexacro.InputElement) : false;
             
        
        if (!elem || !(elem instanceof nexacro.InputElement) || is_display_elem)
        {
            // iOS 스크롤이슈: 키보드가 화면을 덮고 있을때.. XP 내부 스크롤이 끝까지 갔다면 전체 화면 스크롤 (키보드가 가리는 영역)
            if (elem)
            {
                if (nexacro.OS == "iOS")
                {
                    // TODO 제거대상 (하드코딩)
                    if (nexacro.WebBrowser && linkedcontrol instanceof nexacro.WebBrowser) // RP 40481
                        return true;

                    if (linkedcontrol)
                    {
                        var dlgcode = linkedcontrol._getDlgCode();
                        if (type == 0 && dlgcode && dlgcode.want_touchstart)
                            return false;

                        if (type == 1 && dlgcode && dlgcode.want_touchmove)
                            return false;
                    }

                    if (this._scroll_end && (type == 0 || type == 1))
                        return true;
                }
                else if (nexacro.OS == "Android")
                {
            // Android 키보드문제: Tap으로 input에 포커스가 들어갈 경우...
            // touchstart에서 preventDefault를 해버리면 키보드가 올라오지 않아 입력 불가.

                    // TODO 제거대상 (하드코딩)
                    if (nexacro.WebBrowser && linkedcontrol instanceof nexacro.WebBrowser) // RP 40481
                        return true;

                if (type == 0)
            {                
                // Tap할 경우 포커스를 받게 될 대상이 Edit계열이면, preventDefault를 하지 않는다.
                if (is_display_elem && elem._parent_elem.enable)
                {
                    // GalaxyNote 8.0 기본 브라우저에서 키보드가 올라오지 않는 문제가 있음.
                    if ((/SHW-M500W/).test(nexacro._getUserAgent()))
                        return false;

                    return true;                    
                }

                        var ret = this.compareComponent(linkedcontrol, focused_comp);
                        if (ret !== undefined)
                            return !ret;                        
                }
                else if (type == 2)
                {
                    if (nexacro.Browser == "Chrome")
                    {
                        return true;
                }
            }
                }
            }

            return false;
        }

        if (nexacro.OS == "iOS")
        {
            switch (type)
            {
                case 0: // touchstart
                    if (is_focused_input)
                        return true;

                    if (this._scroll_end)
                        return true;

                    var ret = this.compareComponent(linkedcontrol, focused_comp);
                    if (ret !== undefined)
                        return !ret;                    
                    break;
                case 1: // touchmove
                    if (this._scroll_end)
                        return true;
                    break;
                case 2: // touchend
                    if (is_focused_input)
                        return true;

                    // TODO Focus되지 않은 Input에 Tap 하는 경우, Tap위치에 바로 Caret 이동 How to??
                    break;
            }
        }
        else if (nexacro.OS == "Android")
        {
            switch (type)
            {
                case 0: // touchstart
                    if (is_focused_input)
                        return true;

                    // TODO 다른 모바일 브라우저 지원시 작업필요
                    // 항상 Default 수행해야 focus안된 input caret을 바로 이동할 수 있음.
                    // -> touchstart에서 바로 mousedown이 fire되서 focus가 이동되지 않는지 체크해야함
                    // -> 현재 Android Chrome은 문제가 없어보임


                    // GalaxyNote 8.0 기본 브라우저에서 키보드가 올라오지 않는 문제가 있음.
                    if ((/SHW-M500W/).test(nexacro._getUserAgent()))
                    {
                        if (focused_comp instanceof nexacro.Grid && elem instanceof nexacro.InputElement)
                            return false;
                    }
                    
                    return true;
                    break;
                case 1: // touchmove
                    //if (is_focused_input)
                    //    return true;

                    if (this._scroll_end)
                        return true;
                    break;
                case 2: // touchend
                    if (is_focused_input)
                        return true;

                    // Focus되지 않은 Input에 Tap 하는 경우, Tap위치에 바로 Caret이 이동되기위해
                    if (this._tap_timer && this._tap_timer.isWait() && !this._tap_blocked)
                        return true;
                    
                    break;
            }
        }

        return false;
    };

    // getCurrentTouchInputInfo()에서는 canvas,client 좌표를 계산하고,
    // first와 changed에 대한 정보만 추가적으로 넘겨준다.
    _pTouchManager.getCurrentTouchInputInfo = function ()
    {
        if (!this._start_elem)
            return null;

        var ret_info = {};
        ret_info.touchinfos = this._currentTouches;
        ret_info.firsttouchinfo = null;
        ret_info.changedtouchinfos = [];

        var compinfo = this._start_win.findComponent(this._start_elem, 0, 0);
        var elem_pos = nexacro._getElementXYInWindow(this._start_elem._handle);
        var infos = [];
        for (var i = 0; i < this._currentTouches.length; i++)
        {
            var info = this._currentTouches[i];
            info.canvasX = info._x - elem_pos[0] + compinfo[1];
            info.canvasY = info._y - elem_pos[1] + compinfo[2];

            var clientXY = compinfo[0]._getClientXY(info.canvasX, info.canvasY);
            info.clientX = clientXY[0];
            info.clientY = clientXY[1];

            if (info.isfirst)
            {
                ret_info.firsttouchinfo = info;
            }

            if (info.time == this._current_time)
            {
                ret_info.changedtouchinfos.push(info);
            }
        }

        return ret_info;
    };

    _pTouchManager.updateTouchInputInfosCanvasXY = function (touchinputinfos, offsetX, offsetY)
    {
        if (!touchinputinfos)
            return;

        var len = touchinputinfos.length;
        for (var i = 0; i < len; i++)
        {
            var touchinputinfo = touchinputinfos[i];
            touchinputinfo.canvasX += offsetX;
            touchinputinfo.canvasY += offsetY;
        };
    };

    _pTouchManager.updateTouchInputInfosClientXY = function (touchinputinfos, comp)
    {
        if (!touchinputinfos)
            return;

        var len = touchinputinfos.length;
        for (var i = 0; i < len; i++)
        {
            var touchinputinfo = touchinputinfos[i];
            var clientXY = comp._getClientXY(touchinputinfo.canvasX, touchinputinfo.canvasY);
            touchinputinfo.clientX = clientXY[0];
            touchinputinfo.clientY = clientXY[1];
        };
    };

    _pTouchManager.getFirstTouchInputInfo = function (touchinputinfos)
    {
        if (!touchinputinfos)
            return;

        var len = touchinputinfos.length;
        for (var i = 0; i < len; i++)
        {
            var touchinputinfo = touchinputinfos[i];
            if (touchinputinfo.isfirst)
                return touchinputinfo;
        };

        return null;
    };

    _pTouchManager.getAngle = function (x1, y1, x2, y2)
    {
        if (x1 == x2 && y1 == y2)
            return 0;

        x2 -= x1;
        y2 -= y1;

        var dA = (x2 * x2) + (y2 * y2);

        // cos A
        var range = Math.sqrt(dA);
        var cosVal = x2 / range;
        var sinVal = y2 / range;

        // radian
        var angle = Math.acos(cosVal);

        // radian to degree (1 degree = pi/180 rad)
        angle *= 180.0;
        angle /= Math.PI;

        if (sinVal < 0)
            angle = 360 - angle;

        while (angle > 360.0)
            angle -= 360.0;
        if (angle > 180.0)
            angle = 360.0 - angle;

        return angle;
    };

    _pTouchManager.getRange = function (x1, y1, x2, y2)
    {
        if (x1 == x2 && y1 == y2)
            return 0;

        x2 -= x1;
        y2 -= y1;
        return Math.sqrt((x2 * x2) + (y2 * y2));
    };

    _pTouchManager.checkAvailableScrollableComp = function (elem)
    {
        if (!elem)
            return false;

        var linkedcontrol = elem.linkedcontrol;
        if (!linkedcontrol && elem.parent)
        {
            linkedcontrol = elem.parent.linkedcontrol;
            if ((elem instanceof nexacro.InputElement) && linkedcontrol._is_subcontrol)
                linkedcontrol = linkedcontrol._getRootComponent(linkedcontrol);
        }

        if (!linkedcontrol)
        {
            while (elem && !linkedcontrol)
            {
                elem = elem.parent;
                linkedcontrol = elem.linkedcontrol;
            }
            if (!linkedcontrol)
            return false;
        }

        var comp = linkedcontrol;
        var dlgcode = comp ? comp._getDlgCode() : null;
        if (dlgcode)
        {
            if (dlgcode.want_touchstart)
                return true;
            if (dlgcode.want_touchmove)
                return true;
        }

        while (comp && !comp._is_application)
        {
            var s;
            s = comp.hscrollbar;
            if (s && s.enable && s._isVisible() && (s.pos < s.max || s.pos > s.min))
            {
                // 가로 스크롤 가능
                return true;
            }

            s = comp.vscrollbar;
            if (s && s.enable && s._isVisible() && (s.pos < s.max || s.pos > s.min))
            {
                // 세로 스크롤 가능
                return true;
            }

            if (comp._is_form && comp.stepcontrol && comp.stepcontrol.stepcount > 1)
            {
                // Step 스크롤 가능
                return true;
            }

            comp = comp.parent;
        }

        // 아무리 상위로 올라가도 스크롤 가능한 컴포넌트가 없음.
        return false;
    };

    delete _pTouchManager;

    //---------------------------------------------------------------------------------------
    // FlingHandler (TouchManager[1]---[0..n]FlingHandler)
    //---------------------------------------------------------------------------------------
    nexacro.FlingHandler = function (id, win, elem, scroll_comp, scroll_mode, touchinfos, totalx, totaly, speedx, speedy, duration, touchlen, touch_manager)
    {
        this._id = id;
        this._touch_manager = touch_manager;

        // totalx,totaly = Scroll처리시 총 이동해야 할 양
        var compinfo = win.findComponent(elem, 0, 0);
        if (compinfo && compinfo[0] && (totalx || totaly))
        {
            this._target_comp = compinfo[0];
            this.totalx = totalx;
            this.totaly = totaly;
            this.speedx = speedx;
            this.speedy = speedy;
            this.duration = duration;
            this.touchlen = touchlen;

            this._target_window = win;
            this._target_elem = elem;
            this._starttime = Date.now();
            this._compinfo = compinfo;
            this._scroll_comp = scroll_comp;
            this._scroll_mode = scroll_mode;
            this._oldspeedx = this._oldspeedy = this._oldcurvevalue = 0.0;

            this._is_alive = true;
        }
        else
        {
            this._is_alive = false;
        }

        if (!nexacro.FlingHandler.prototype._fling_bezier)
        {
            nexacro.FlingHandler.prototype._fling_bezier = new nexacro.CubicBezier(0.1, 0.4, 0.3, 1);
        }
    };

    var _pFlingHandler = nexacro.FlingHandler.prototype;
    //_pFlingHandler._scroll_mode_tts = 0; // 0: timer 1:CSS transform
    _pFlingHandler._fling_interval = 20;
    _pFlingHandler._fling_bezier = null;

    _pFlingHandler.start = function ()
    {
        // flingstart Event
        var touch_manager = this._touch_manager;
        var ret = touch_manager.on_fire_onflingstart(
            this._target_elem, this._compinfo, this,
            this.speedx, this.speedy,
            this.speedx, this.speedy,
            this.touchlen);
        if (ret == true)
        {
            // dead end
            this._touch_manager.onflingend(this._id);
            return;
        }

        // fling Event
        this._flingend_timer = new nexacro.TouchTimer(this._target_window, this._on_flingend_timer, this, this.duration);

        var pThis = this;
        this._fling_timer = new nexacro.AnimationFrame(this._target_comp, function () { pThis._on_fling_frame(); });
            this._fling_timer.start();            
    };

    _pFlingHandler.stop = function ()
    {
        // Fling과 Scroll 모두 중단
        if (this._flingend_timer && this._flingend_timer.isWait())
        {
            this._fling_timer.stop();
            this._flingend_timer.stop();

            // flingend Event
            this.on_fire_onflingend();

            // dead
            this._touch_manager.onflingend(this._id);
        }
    };

    _pFlingHandler._on_fling_timer = function ()
    {
        // Interpolation
        var t = Date.now() - this._starttime;
        if (!this._is_alive)
            return t;

        // Bezier곡선에서 현재 X에 해당하는 Y값 얻기
        var fling_bezier = this._fling_bezier;
        var epsilon = 1.0 / (200.0 * this.duration); // ?
        var solvedX = fling_bezier._getTForCoordinate(t / this.duration, fling_bezier._p1.x, fling_bezier._p2.x, epsilon);
        var c = fling_bezier._getCoordinateForT(solvedX, fling_bezier._p1.y, fling_bezier._p2.y);

        var offset_c = c - this._oldcurvevalue;
        var xdelta = (offset_c * this.speedx);
        var ydelta = (offset_c * this.speedy);

        this._proc_scroll = false; // 각 틱에 해당하는 스크롤을 처리 할 지 여부
        this._touch_manager.on_fire_onfling(this._target_elem, this._compinfo, this, this.speedx, this.speedy, xdelta, ydelta, this.touchlen);

        var scroll_comp = this._scroll_comp;
        if (scroll_comp && this._proc_scroll)
        {
            // Perform Scroll
            var scrolldeltax = (offset_c * this.totalx);
            var scrolldeltay = (offset_c * this.totaly);

            var scroll_mode = this._scroll_mode;
            var scrollbar = scroll_comp.hscrollbar;
            if ((scroll_mode == 3 || scroll_mode == 2) && scrolldeltax && scrollbar && scrollbar.enable)
            {
                scrollbar._setPos(scrollbar.pos - scrolldeltax, "fling");
            }

            scrollbar = scroll_comp.vscrollbar;
            if ((scroll_mode == 3 || scroll_mode == 1) && scrolldeltay && scrollbar && scrollbar.enable)
            {
                scrollbar._setPos(scrollbar.pos - scrolldeltay, "fling");
            }
        }

        this._oldcurvevalue = c;
        return (t / this.duration);
    };

    _pFlingHandler._on_fling_frame = function ()
    {
        var ret = this._on_fling_timer();
        if (ret < 1.0)
        {
            this._fling_timer.start();
        }
    };

    _pFlingHandler.on_fire_onflingend = function ()
    {
        this._touch_manager.on_fire_onflingend(this._target_elem, this._compinfo, this, this.speedx, this.speedy, 0, 0, this.touchlen);
        this._is_alive = false;
    };

    _pFlingHandler._setScrollComp = function (comp)
    {
        if (this._scroll_comp || !comp)
            return;
        this._scroll_comp = comp;
    };

    _pFlingHandler._on_flingend_timer = function ()
    {
        if (this._fling_timer)
        {
            this._fling_timer.stop();
            this._fling_timer.destroy();
        }
        this._flingend_timer.destroy();

        // flingend Event
        this.on_fire_onflingend();

        // dead
        this._touch_manager.onflingend(this._id);
    };


    delete _pFlingHandler;

    //---------------------------------------------------------------------------------------
    // Touch Timer
    //---------------------------------------------------------------------------------------
    nexacro.TouchTimer = function (target, callbackfunc, scope, interval)
    {
        var pThis = this;
        this._callbackfunc = function ()
        {
            pThis.stop();
            callbackfunc.call(scope);
        };
        if (target._getReferenceContext)
        {
            this.context = target._getReferenceContext(); //refcontext는 자기 자신의 context
            this._win_handle = this.context._getWindowHandle();
        }
        else
        {
            this._win_handle = target._handle;
        }

        this._handle = null;

        if (interval != undefined)
        {
            this.start(interval);
        }
    };
    var _pTouchTimer = nexacro.TouchTimer.prototype;

    _pTouchTimer.start = function (interval)
    {
        if (this._handle) this.stop();
        this._handle = nexacro._setSystemTimer(this._win_handle, this._callbackfunc, interval);
    };

    _pTouchTimer.stop = function ()
    {
        if (this._handle)
        {
            nexacro._clearSystemTimer(this._win_handle, this._handle);
            this._handle = null;
        }
    };

    _pTouchTimer.isWait = function ()
    {
        return !!this._handle;
    };

    _pTouchTimer.destroy = function ()
    {
        this.stop();
        this.context = null;
        this._callbackfunc = null;
        this.scope = null;
    };
    delete _pTouchTimer;

    //---------------------------------------------------------------------------------------
    // Cubic Bezier (4point bezier curve): Apple license
    //---------------------------------------------------------------------------------------
    nexacro.CubicBezier = function (p1x, p1y, p2x, p2y)
    {
        // Control Point 좌표값 Validation 삭제 (0 ~ 1 사이값이어야 함)

        // Control points
        this._p1 = { x: p1x, y: p1y };
        this._p2 = { x: p2x, y: p2y };
    };

    var _pCubicBezier = nexacro.CubicBezier.prototype;
    _pCubicBezier._getCoordinateForT = function (t, p1, p2)
    {
        var c = 3 * p1, b = 3 * (p2 - p1) - c, a = 1 - c - b;
        return ((a * t + b) * t + c) * t;
    };

    _pCubicBezier._getCoordinateDerivateForT = function (t, p1, p2)
    {
        var c = 3 * p1, b = 3 * (p2 - p1) - c, a = 1 - c - b;
        return (3 * a * t + 2 * b) * t + c;
    };

    _pCubicBezier._getTForCoordinate = function (c, p1, p2, epsilon)
    {
        if (!isFinite(epsilon) || epsilon <= 0)
        {
            throw new RangeError('"epsilon" must be a number greater than 0.');
        }
        var t2, i, c2, d2;

        // First try a few iterations of Newton's method -- normally very fast.
        for (t2 = c, i = 0; i < 8; i = i + 1)
        {
            c2 = this._getCoordinateForT(t2, p1, p2) - c;
            if (Math.abs(c2) < epsilon)
            {
                return t2;
            }
            d2 = this._getCoordinateDerivateForT(t2, p1, p2);
            if (Math.abs(d2) < 1e-6)
            {
                break;
            }
            t2 = t2 - c2 / d2;
        }

        // Fall back to the bisection method for reliability.
        t2 = c;
        var t0 = 0, t1 = 1;
        if (t2 < t0)
        {
            return t0;
        }
        if (t2 > t1)
        {
            return t1;
        }

        while (t0 < t1)
        {
            c2 = this._getCoordinateForT(t2, p1, p2);
            if (Math.abs(c2 - c) < epsilon)
            {
                return t2;
            }
            if (c > c2)
            {
                t0 = t2;
            } else
            {
                t1 = t2;
            }
            t2 = (t1 - t0) * 0.5 + t0;
        }

        // Failure.
        return t2;
    };

    _pCubicBezier.getPointForT = function (t)
    {
        // Special cases: starting and ending points
        if (t === 0 || t === 1)
        {
            return { x: t, y: t };
        }

        // Check for correct t value (must be between 0 and 1)
        if (t < 0 || t > 1)
        {
            throw new RangeError('"t" must be a number between 0 and 1' + 'Got ' + t + ' instead.');
        }

        return {
            x: this._getCoordinateForT(t, this._p1.x, this._p2.x),
            y: this._getCoordinateForT(t, this._p1.y, this._p2.y)
        };
    };

    _pCubicBezier.getTForX = function (x, epsilon)
    {
        return this._getTForCoordinate(x, this._p1.x, this._p2.x, epsilon);
    };

    _pCubicBezier.getTForY = function (y, epsilon)
    {
        return this._getTForCoordinate(y, this._p1.y, this._p2.y, epsilon);
    };

    _pCubicBezier._getAuxPoints = function (t)
    {
        if (t <= 0 || t >= 1)
        {
            throw new RangeError('"t" must be greater than 0 and lower than 1');
        }

        // First series of auxiliary points
        // First control point of the left curve
        var i0 = { x: t * this._p1.x, y: t * this._p1.y },
			i1 = { x: this._p1.x + t * (this._p2.x - this._p1.x), y: this._p1.y + t * (this._p2.y - this._p1.y) },
			// Second control point of the right curve
			i2 = { x: this._p2.x + t * (1 - this._p2.x), y: this._p2.y + t * (1 - this._p2.y) };

        // Second series of auxiliary points
        // Second control point of the left curve
        var j0 = { x: i0.x + t * (i1.x - i0.x), y: i0.y + t * (i1.y - i0.y) },
			// First control point of the right curve
			j1 = { x: i1.x + t * (i2.x - i1.x), y: i1.y + t * (i2.y - i1.y) };

        // The division point (ending point of left curve, starting point of right curve)
        var k = { x: j0.x + t * (j1.x - j0.x), y: j0.y + t * (j1.y - j0.y) };

        return { i0: i0, i1: i1, i2: i2, j0: j0, j1: j1, k: k };
    };

    _pCubicBezier.divideAtT = function (t)
    {
        if (t < 0 || t > 1)
        {
            throw new RangeError('"t" must be a number between 0 and 1. ' + 'Got ' + t + ' instead.');
        }

        // Special cases t = 0, t = 1: Curve can be cloned for one side, the other
        // side is a linear curve (with duration 0)
        if (t === 0 || t === 1)
        {
            var curves = [];
            curves[t] = CubicBezier.linear();
            curves[1 - t] = this.clone();
            return curves;
        }

        var left = {}, right = {}, points = this._getAuxPoints(t);
        var i0 = points.i0, i2 = points.i2, j0 = points.j0, j1 = points.j1, k = points.k;

        // Normalize derived points, so that the new curves starting/ending point
        // coordinates are (0, 0) respectively (1, 1)
        var factorX = k.x, factorY = k.y;
        left.p1 = { x: i0.x / factorX, y: i0.y / factorY };
        left.p2 = { x: j0.x / factorX, y: j0.y / factorY };
        right.p1 = { x: (j1.x - factorX) / (1 - factorX), y: (j1.y - factorY) / (1 - factorY) };
        right.p2 = { x: (i2.x - factorX) / (1 - factorX), y: (i2.y - factorY) / (1 - factorY) };

        return [
			new nexacro.CubicBezier(left.p1.x, left.p1.y, left.p2.x, left.p2.y),
			new nexacro.CubicBezier(right.p1.x, right.p1.y, right.p2.x, right.p2.y)
        ];
    };

    _pCubicBezier.divideAtX = function (x, epsilon)
    {
        if (x < 0 || x > 1)
        {
            throw new RangeError('"x" must be a number between 0 and 1. ' + 'Got ' + x + ' instead.');
        }

        var t = this.getTForX(x, epsilon);
        return this.divideAtT(t);
    };

    _pCubicBezier.divideAtY = function (y, epsilon)
    {
        if (y < 0 || y > 1)
        {
            throw new RangeError('"y" must be a number between 0 and 1. ' + 'Got ' + y + ' instead.');
        }

        var t = this.getTForY(y, epsilon);
        return this.divideAtT(t);
    };

    _pCubicBezier.clone = function ()
    {
        return new nexacro.CubicBezier(this._p1.x, this._p1.y, this._p2.x, this._p2.y);
    };

    _pCubicBezier.toString = function ()
    {
        return "cubic-bezier(" + [this._p1.x, this._p1.y, this._p2.x, this._p2.y].join(", ") + ")";
    };

    _pCubicBezier.linear = function ()
    {
        return new nexacro.CubicBezier();
    };

    _pCubicBezier.ease = function ()
    {
        return new nexacro.CubicBezier(0.25, 0.1, 0.25, 1.0);
    };
    _pCubicBezier.linear = function ()
    {
        return new nexacro.CubicBezier(0.0, 0.0, 1.0, 1.0);
    };
    _pCubicBezier.easeIn = function ()
    {
        return new nexacro.CubicBezier(0.42, 0, 1.0, 1.0);
    };
    _pCubicBezier.easeOut = function ()
    {
        return new nexacro.CubicBezier(0, 0, 0.58, 1.0);
    };
    _pCubicBezier.easeInOut = function ()
    {
        return new nexacro.CubicBezier(0.42, 0, 0.58, 1.0);
    };

    delete _pCubicBezier;

    //CHECK LKE Framework init 부분은 Docinit 이전에 수행되어야 함, 추후 별도의 파일로 분리해야 하지 않을까 판단됨

    if (!this.application)
    {
        this.system = nexacro.System;
        this.application = nexacro.Application;
        application.init();
    }

} // end of (!nexacro._bInitPlatform)
