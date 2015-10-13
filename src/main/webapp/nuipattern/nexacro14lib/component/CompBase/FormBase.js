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

if (!nexacro.Form)
{
    //===============================================================
    // nexacro.LayoutChangeEventInfo
    //===============================================================
    nexacro.LayoutChangeEventInfo = function (obj, id, curlayout_name, newlayout_name, cur_width, new_width, cur_height, new_height)
    {
        this.id = this.eventid = id || "onlayoutchanged";
        this.fromobject = this.fromreferenceobject = obj;

        this.bubbles = true;

        this.oldlayout = curlayout_name;
        this.newlayout = newlayout_name;
        this.oldlayoutwidth = cur_width;
        this.newlayoutwidth = new_width;
        this.oldlayoutheight = cur_height;
        this.newlayoutheight = new_height;
    };

    var _pLayoutChangeEventInfo = nexacro._createPrototype(nexacro.Event, nexacro.LayoutChangeEventInfo);
    nexacro.LayoutChangeEventInfo.prototype = _pLayoutChangeEventInfo;
    
    _pLayoutChangeEventInfo._type_name = "LayoutChangeEventInfo";

    delete _pLayoutChangeEventInfo;


    //===============================================================
    // nexacro.DeviceButtonEventInfo
    //===============================================================
    nexacro.DeviceButtonEventInfo = function (obj, e)
    {
        this.eventid = "ondevicebutton";
        this.fromobject = obj;
        this.fromreferenceobject = obj;
        this.button = e.button;
    };
    var _pDeviceButtonEventInfo = nexacro._createPrototype(nexacro.Event, nexacro.DeviceButtonEventInfo);
    nexacro.DeviceButtonEventInfo.prototype = _pDeviceButtonEventInfo;

    _pDeviceButtonEventInfo._type_name = "DeviceButtonEventInfo";

    delete _pDeviceButtonEventInfo;

    //==============================================================================
    // nexacro.BindItem
    //==============================================================================
    nexacro.BindItem = function (name, compid, propid, dsid, columnid)
    {
        nexacro.Object.call(this);
        this.name = name || "";
        this.compid = compid || "";
        this.propid = propid || "";
        this.datasetid = dsid || "";
        this.columnid = columnid || "";

        /* internal variable */
        this._en_type = 1; // readonly
        this._dataset = null;
        this._comp = null;
    };

    var _pBindItem = nexacro.BindItem.prototype = nexacro._createPrototype(nexacro.Object, nexacro.BindItem);
    _pBindItem._type_name = "BindItem";

    //==============================================================================
    // nexacro.BindItem : Properties
    //==============================================================================
    _pBindItem.set_name = function (v)
    {
        if (v && this.name != v)
        {
            this.name = v;
        }
    };

    _pBindItem.set_compid = function (v)
    {
        if (v && this.compid != v)
        {
            this.compid = v;
        }
    };

    _pBindItem.set_propid = function (v)
    {
        if (v && this.propid != v)
        {
            this.propid = v;
        }
    };

    _pBindItem.set_datasetid = function (v)
    {
        if (v && this.datasetid != v)
        {
            this.datasetid = v;
        }
    };

    _pBindItem.set_columnid = function (v)
    {
        if (v && this.columnid != v)
        {
            this.columnid = v;
        }
    };

    //==============================================================================
    // nexacro.BindItem  : Methods
    //==============================================================================
    _pBindItem.init = function (name, compid, propid, datasetid, columnid)
    {
        this.set_name(name);
        this.set_compid(compid);
        this.set_propid(propid);
        this.set_datasetid(datasetid);
        this.set_columnid(columnid);
    };

    _pBindItem.destroy = function ()
    {
        this._dataset = null;
        this._comp = null;

        nexacro.Object.prototype.destroy.call(this);
    };

    _pBindItem.bind = function ()
    {
        if (this.parent && !this.parent._is_loading)
        {
            if (this.compid == "" || this.propid == "" || this.datasetid == "" || this.columnid == "") return;
            this.parent._bind_manager._setBinditem(this, false);
            this.parent._bind_manager._notify(this);
        }
    };

    //===============================================================
    // nexacro.ScrollBar : Logical Part
    //===============================================================
    _pBindItem._checkType = function (propid)
    {
        if (typeof propid == "string" && propid == this.propid)
        {
            this._en_type = 2;
        }
    };
    delete _pBindItem;

    //==============================================================================
    // nexacro.BindManager
    //==============================================================================
    nexacro.BindManager = function (form)
    {
        nexacro.Object.call(this);
        this.datasets = {};
        this.exception = "";

        /* internal variable */
        this._form = form;
    };

    var _pBindManager = nexacro.BindManager.prototype = nexacro._createPrototype(nexacro.Object, nexacro.BindManager);

    _pBindManager._type_name = "BindManager";


    _pBindManager.destroy = function ()
    {
        this.datasets = null;
        this._form = null;

        nexacro.Object.prototype.destroy.call(this);
    }

    //===============================================================
    // nexacro.BindManager : Event Handlers
    //===============================================================
    /*_pBindManager.exception;*/
    _pBindManager.on_changevalue = function (obj, e)
    {
        var prop_id = e.propid;
        var bind_item = this._FindBindItem(obj, prop_id);
        var val = e.val;
        if (bind_item && bind_item._en_type == 2)
        { //CYBIND_TYPE_SIMPLE
            // found
            this.exception = obj;

            var ds = bind_item._dataset;
            var row_idx = ds.rowposition;
            var col = ds._getDataColIndex(bind_item.columnid);
            if (col !== undefined)
            {
                var ret = ds.setColumn(row_idx, col, val);
                if (ret == true)
                {
                    var real_value = ds.getColumn(row_idx, col);
                    if (real_value != val)
                    {
                        val = real_value;
                    }
                    this.exception = null;
                    return true;
                }
                else
                {
                    this.exception = null;
                    return false;
                }
            }
        }
        this.exception = null;
        return true;
    };

    //Dataset Event
    //////////////////////////////////////////////////////////////////////
    _pBindManager.on_valuechanged = function (obj, e)
    {

        var ds = obj;
        var row = e.row;
        var col = e.col;
        var col_id = e.columnid;
        var val = e.newvalue;
        if (ds.rowposition == row || row < 0)
        {
            if (col < 0) return this._notifyAll(ds.name, null, -1, true, null);
            else return this._notifyAll(ds.name, col_id, col, false, val);
        }
        return true;
    };

    _pBindManager.on_load = function (obj, e)
    {
        var ds = obj;
        if (ds.rowcount == 0 && e.reason == 0)
        {
            return this._notifyAll(ds.name, null, -1, true, null);
        }
        return true;
    };


    //===============================================================
    // nexacro.BindManager : Logical Part
    //===============================================================
    _pBindManager._delayBinds = function ()
    {
        var len = this._form.binds.length;
        for (var sx = 0; sx < len; sx++)
        {
            var bind_item = this._form.binds[sx];
            if (bind_item._dataset)
                continue;

            this._setBinditem(bind_item, false);
            this._notify(bind_item);
        }
    };

    _pBindManager._setBinditem = function (bind_item, close_flag)
    {
        if (!bind_item) return;

        var binds = this._form.binds;
        var ds_id = bind_item.datasetid;

        var ds = bind_item._dataset;
        var comp = bind_item._comp;
        if (!bind_item._dataset)
            ds = this._form._getDatasetObject(bind_item.datasetid);
        if (!bind_item._comp)
            comp = this._form._findChildObject(bind_item.compid);

        if (!ds || !comp) return;

        if (!close_flag)
        {
            bind_item._dataset = ds;
            bind_item._comp = comp;
            bind_item._checkType(comp.on_getBindableProperties());

            if (this.datasets[ds_id])
            {
                this.datasets[ds_id].push(bind_item);
            }
            else
            {
                this.datasets[ds_id] = [];
                this.datasets[ds_id].push(bind_item);
                ds.setEventHandler("onload", this.on_load, this);
                ds.setEventHandler("onvaluechanged", this.on_valuechanged, this);
            }

            // assign event
            if (!comp._bind_event)
            {
                comp._bind_event = new nexacro.EventListener("onbinditem");
                comp._bind_event._setHandler(this, this.on_changevalue);
            }
        }
        else
        {
            if (this.datasets[ds_id])
            {
                var cidx = nexacro._indexOf(this.datasets[ds_id], bind_item);
                if (cidx > -1)
                {
                    this.datasets[ds_id].splice(cidx, 1);
                    if (this.datasets[ds_id].length == 0)
                    {
                        ds.removeEventHandler("onload", this.on_load, this);
                        ds.removeEventHandler("onvaluechanged", this.on_valuechanged, this);
                        delete this.datasets[ds_id];
                    }
                }
            }
            if (comp._bind_event)
            {
                comp._bind_event._removeHandler(this, this.on_changevalue);
                delete comp._bind_event;
            }
        }

    };

    _pBindManager._FindBindItem = function (comp, propid)
    {
        for (var sx = 0; sx < this._form.binds.length; sx++)
        {
            var bind_item = this._form.binds[sx];
            if (bind_item._comp == comp && bind_item.propid == propid && bind_item.datasetid && bind_item.columnid)
            {
                return bind_item;
            }
        }
        return null;
    };

    _pBindManager._dettachSBindItem = function (comp)
    {
        if (!comp._bind_event) return;

        comp._bind_event._removeHandler(this);
        var binds = this._form.binds;
        var cnt = binds.length;
        for (var i = 0; i < cnt; i++)
        {
            if (binds[i]._comp == comp)
            {
                var datasetid = binds[i].datasetid;
                if (this.datasets[datasetid])
                {
                    var cidx = nexacro._indexOf(this.datasets[datasetid], binds[i]);
                    if (cidx > -1)
                    {
                        this.datasets[datasetid][cidx].destroy();
                        this.datasets[datasetid].splice(cidx, 1);
                    }
                    binds[i]._comp = null;
                }
            }
        }
    };


    _pBindManager._notify = function (bindItem)
    {
        var ds = bindItem._dataset;
        var comp = bindItem._comp;

        if (ds && comp)
        {
            var row_idx = ds.rowposition;

            if (bindItem._en_type == 2)
            { // CYBIND_TYPE_SIMPLE
                if (comp.enable)
                {
                    if (row_idx < 0)
                    {
                        comp._setEnable(false);
                    }
                    else
                    {
                        comp._setEnable(true);
                    }
                }
                var col = ds._getDataColIndex(bindItem.columnid);
                if (col >= 0 && comp.on_change_bindSource)
                {
                    comp.on_change_bindSource(bindItem.propid, bindItem._dataset, row_idx, col, -1);
                }
            }
            else
            { // read only type
                if (bindItem.columnid && bindItem.columnid != "")
                {
                    var col = ds._getDataColIndex(bindItem.columnid);
                    var val = ds.getColumn(row_idx, col);
                    if (bindItem.propid)
                    {
                        if (comp["set_" + bindItem.propid])
                            comp["set_" + bindItem.propid](val);
                        else if (comp.style && comp.style["set_" + bindItem.propid])
                            comp.style["set_" + bindItem.propid](val);
                    }
                }
            }
        }
    };

    _pBindManager._notifyAll = function (ds_id, col_id, col, all_flag, val)
    {
        var arr_bind = this.datasets[ds_id];
        var bind_item = null;
        var row_idx = -1;

        if (!arr_bind)
            return true;

        for (var sx = 0; sx < arr_bind.length; sx++)
        {
            bind_item = arr_bind[sx];
            if (!bind_item._dataset)
            {
                continue;
            }

            if (bind_item.columnid == "")
            {
                continue;
            }

            var ds = bind_item._dataset;
            row_idx = ds.rowposition;
            var comp = bind_item._comp;

            if (comp)
            {
                if (bind_item._en_type == 2)
                { //CYBIND_TYPE_SIMPLE
                    if (all_flag)
                    {
                        if (comp.enable && comp._isPropEnable())
                        {
                            if (row_idx < 0)
                            {
                                comp._setEnable(false);
                            }
                            else
                            {
                                comp._setEnable(true);
                            }
                        }
                        else if (!comp.enable)
                        {
                            if (row_idx >= 0)
                            {
                                comp._setEnable(true);
                            }
                        }
                        col = ds._getDataColIndex(bind_item.columnid);

                        if (col >= 0)
                        {
                            if (comp.on_change_bindSource)
                                comp.on_change_bindSource(bind_item.propid, bind_item._dataset, row_idx, col, -1);
                        }
                        else
                        {
                            if (comp.on_init_bindSource)    // 바인딩된 dataset이 변경되어 바인딩이 끊어지는 경우 갱신이 필요함. 
                                comp.on_init_bindSource(bind_item.columnid, bind_item.propid, bind_item._dataset);
                        }
                    }
                    else
                    {
                        if (col >= 0)
                        {
                            if (bind_item.columnid == col_id && comp.on_change_bindSource)
                                comp.on_change_bindSource(bind_item.propid, bind_item._dataset, row_idx, col, -1);
                        }
                        else
                        {
                            if (bind_item.columnid == col_id && comp.on_init_bindSource)    // 바인딩된 dataset이 변경되어 바인딩이 끊어지는 경우 갱신이 필요함. 
                                comp.on_init_bindSource(bind_item.columnid, bind_item.propid, bind_item._dataset);
                        }
                    }
                }
                else
                { // read only type
                    var val0;
                    if (all_flag)
                    {
                        col = ds._getDataColIndex(bind_item.columnid);
                        val0 = ds.getColumn(row_idx, col);
                    }
                    else
                    {
                        if (col_id == bind_item.columnid)
                        {
                            val0 = val;
                        }
                        else
                        {
                            continue;
                        }
                    }
                    if (bind_item.propid)
                    {
                        if (comp["set_" + bind_item.propid])
                            comp["set_" + bind_item.propid](val0);
                        else if (comp.style && comp.style["set_" + bind_item.propid])
                            comp.style["set_" + bind_item.propid](val0);
                    }
                }
            }
        }
        return true;
    };

    delete _pBindManager;

    //==============================================================================
    // nexacro.FormBase 
    //==============================================================================
    nexacro.FormBase = function (id, position, left, top, width, height, right, bottom, parent)
    {
        nexacro.Component.call(this, id, position, left, top, width, height, right, bottom, parent);

        // form's Collections
        // all is special Collection - direct access not allowed
        this.all = new nexacro.Collection();
        this.components = new nexacro.Collection();
        this.objects = new nexacro.Collection();
        this.binds = new nexacro.Collection();
        this._bind_manager = new nexacro.BindManager(this);
        this._layout_list = new nexacro.Collection();

        this.scrollbars = "autoboth";
        this.dragscrolltype = "all";

        /* internal variable */
        // new css containers
        this._css_selectors = { _has_items: false, _has_attr_items: false };
        this._cssfinder_cache = {};

        
        this._child_list = [];

        this._refform = this;
        this._scrollbars = 3; 

       
        this._load_manager = new nexacro.LoadManager(this);
        this._timerManager = new nexacro.TimerManager(this);

        this._executescriptlist = [];
        this._includescriptlist = [];

        this._apply_client_padding = false;

        this._hotkey_list = []; // Hotkey 사용하는 Component와 Hotkey정보 리스트
        this._load_callbacklist = []; //통신 sync call시 application fire_onload 후에 호출해줘야 되는 subform list

        // status
        this._is_form = true;
        this._is_loaded = false;
        this._is_completed = false;
        this._is_async = false;
        this._is_scrollable = true;

        this._url = "";           // Form Full Url
        this._base_url = "";      // Form Base Url

        this._last_focused = null;
        this._hittest_type = "";

        // LayoutManager
        this._default_layout = null;
        this._current_layout_name = "default";
        this._cur_real_layout = "default";

        this._obj_mousemove = null;

        this._locale = ""	// locale
    };

    var _pFormBase = nexacro.FormBase.prototype = nexacro._createPrototype(nexacro.Component, nexacro.FormBase);

    // overide nexacro.Object
    _pFormBase._type_name = "FormBase";

    //===============================================================
    // nexacro.FormBase : Create & Destroy & Update
    //===============================================================
    _pFormBase.on_create = nexacro._emptyFn;

    _pFormBase.on_create_control_element = function (parent_elem)
    {
        if (!parent_elem) return null;

        var control_elem;
        if (this._is_scrollable)
            control_elem = this.on_create_scrollable_control_element(parent_elem);
        else
            control_elem = this.on_create_normal_control_element(parent_elem);

        return control_elem;
    };

    _pFormBase.createComponent = function (bCreateOnly)
    {
        if (this._is_loading)
            return;

        var parent_elem = null;
        if (!this._is_window)
        {
            parent_elem = this.parent ? this.parent._control_element : null;
            if (!parent_elem)
            {
                return false;
            }
        }

        var control_elem = this._control_element;
        if (!control_elem)
        {
            control_elem = this.on_create_control_element(parent_elem);
            if (this._is_nc_control)
            {
                control_elem._is_nc_element = true;
            }

            // 이 시점에
            // elem.client_width = 0 이기때문에
            // comp._client_width = 0 이다.
            // this 아래에 또 layout을 갖는 컴포넌트가 있을 경우 제대로 된 layout을 찾을 수 없다.
            // -> initControl 이후에 LayoutManager 초기화 수행
            //this._initLayoutManager();

            //init child components                       
            var pseudo = this._getResultPseudo(this._status, this._pseudo);
            this._initControl(control_elem, pseudo);

            this._initLayoutManager();

            this._initContents(control_elem, pseudo);
            if (this.tooltiptext)
                this.on_apply_prop_tooltip();

            if (this.positionstep != null)
                this.on_apply_positionstep(this.positionstep);

            if (this._hittest_type)
            {
                control_elem.setElementHittestType(this._hittest_type);
            }

            if (!bCreateOnly && (this._is_window || parent_elem._handle))
            {
                var _window = this._getWindow();
                this.on_created(_window);
            }
        }
        else
        {
            //init child components     
            if (parent_elem && parent_elem._handle)
            {
                parent_elem.appendChildElement(control_elem);
                control_elem.parent = this;

                this._initLayoutManager();

                var pseudo = this._getResultPseudo(this._status, this._pseudo);
                this._initControl(control_elem, pseudo);
                this._initContents(control_elem, pseudo);

                if (this.tooltiptext)
                    this.on_apply_prop_tooltip();

                if (!bCreateOnly)
                {
                    var window = this._getWindow();
                    this.on_created(window);
                }
            }
            else
            {
                var pseudo = this._getResultPseudo(this._status, this._pseudo);
                this._initControl(control_elem, pseudo);
                this._initContents(control_elem, pseudo);
                if (this.tooltiptext)
                    this.on_apply_prop_tooltip();
            }
        }
        return true;
    };

    _pFormBase.on_create_contents = function ()
    {
        var comps = this.components;
        var len = comps.length;

        for (var i = 0; i < len; i++)
        {
            comps[i].createComponent(true);
        }
    };

    // this Function create Object's Inner Elements
    // -- All Componets overide this function
    _pFormBase.on_created_contents = function ()
    {
        var len = this.objects.length;
        var i = 0;
        for (i = 0; i < len; i++)
        {
            this.objects[i].on_created();
        }

        var comps = this.components;
        len = comps.length;
        for (i = 0; i < len; i++)
        {
            comps[i].on_created();
        }

        if (this.stepcontrol)
        {
            this.stepcontrol.on_created();
        }

        // reset Scroll
        if (this._is_scrollable)
        {
            this.resetScroll();
            var control_elem = this._control_element;
            if (control_elem && this.stepcontrol)
                control_elem.setElementHScrollPos(control_elem.client_width * control_elem._step_index);
        }
                
        control_elem = null;
        comps = null;
                
        nexacro._refreshWindow(this._getWindow()._handle);
    };

    _pFormBase.on_destroy_contents = function ()
    {
        if (this._timerManager)
        {
            this._timerManager.destroy();
            this._timerManager = null;
        }

        if (this._load_manager)
        {
            var load_manager = this._load_manager;
            var tr_list = load_manager.transactionList;
            if (tr_list)
            {
                for (var i = tr_list.length - 1; i >= 0; i--)
                {
                    var tr_item = tr_list[i];
                    if (tr_item._usewaitcursor)
                        tr_item._hideWaitCursor(this);

                    tr_item = null;
                }

                tr_list = null;
            }
            this._load_manager.destroy();
            this._load_manager = null;
        }

        var binds = this.binds;
        var len = binds.length;
        for (var i = 0; i < len; i++)
        {
            var bindname = binds.get_id(i);
            this._bind_manager._setBinditem(binds.get_item(bindname), true);
            this[bindname] = null;
        }

        var components = this.components;
        len = components.length;

        for (var i = 0; i < len; i++)
        {
            var compname = components.get_id(0);
            if (this[compname])
            {
                if (this[compname]._destroy)
                {
                    this[compname]._destroy();
                    this[compname] = null;
                }
            }
        }

        var objects = this.objects;
        len = objects.length;
        for (var i = 0; i < len; i++)
        {
            var objname = objects.get_id(0);
            if (this[objname])
            {
                if (this[objname].destroy)
                    this[objname].destroy();

                objects.delete_item(objname);
                delete this[objname];
                this[objname] = null;

            }
        }

        var layouts = this._layout_list;
        len = layouts.length;
        for (var i = 0; i < len; i++)
        {
            var layout = layouts.get_id(0);
            if (layout)
            {
                if (layouts[layout].destroy)
                    layouts[layout].destroy();
                layouts.delete_item(layout);
            }
        }

        if (this._bind_manager)
        {
            this._bind_manager.destroy();
            this._bind_manager = null;
        }

        this.all.clear();
        this.all = null;
        this.components.clear();
        this.components = null;
        this.objects.clear();
        this.objects = null;
        this.binds.clear();
        this.binds = null;
        this._layout_list.clear();
        this._layout_list = null;

        this._css_selectors = null;
        this._cssfinder_cache = null;
        this._child_list = null;

        this._executescriptlist = null;
        this._includescriptlist = null;
        this._hotkey_list = null;
        this._load_callbacklist = null;
        this._css_finder = null;
        this._ref_css_finder = null;
        this._find_csslist = null;
        if (this._default_layout)
        {
            if (this._default_layout.destroy)
            {
                this._default_layout.destroy();
            }
            this._default_layout = null;
        }

        this._obj_mousemove = null;
    };

    _pFormBase._clearUserFunctions = function ()
    {
        var objPrototype = null;
        if (this._type_name == "Div") objPrototype = nexacro.Div.prototype;
        else if (this._type_name == "Tab") objPrototype = nexacro.Tab.prototype;
        else if (this._type_name == "Tabpage") objPrototype = nexacro.Tabpage.prototype;
        else if (this._type_name == "PopupDiv") objPrototype = nexacro.PopupDiv.prototype;
        else if (this instanceof nexacro.Tab) objPrototype = nexacro.Tab.prototype;
        else if (this instanceof nexacro.Tabpage) objPrototype = nexacro.Tabpage.prototype;
        else if (this instanceof nexacro.PopupDiv) objPrototype = nexacro.PopupDiv.prototype;
        else if (this instanceof nexacro.Div) objPrototype = nexacro.Div.prototype;
        else if (this instanceof nexacro.Form) objPrototype = nexacro.Form.prototype;
        else if (this instanceof nexacro.Frame) objPrototype = nexacro.Frame.prototype;

        for (var func in this)
        {
            if (typeof this[func] === "function" && objPrototype && !objPrototype[func])
            {
                this[func] = null;
            }
        }
    };
    // url change 시  - form의 element는 파괴하지 않는다.

    _pFormBase._clear = function ()
    {
        var control_elem = this.getElement();
        if (control_elem)
        {
            this._is_init = true;
            this._pseudo = "normal";
            this.currentstyle._empty();
            this._control_pseudo = "";
            this._contents_pseudo = "";

            this._clearEventListeners();

            if (this._timerManager && this._timerManager.timerList.length > 0)
                this._timerManager.clearAll();

            //control_elem._removeFromContainer(); //[REQ_34257] 2014-05-28 go() when preload
            control_elem.clearContents();

            if (this.stepcontrol)
            {
                this._destroyStepControl();
                delete this.stepcontrol;
            }

            var binds = this.binds;
            var len = binds.length;
            for (var i = 0; i < len; i++)
            {
                var bindname = binds.get_id(i);
                this._bind_manager._setBinditem(binds.get_item(bindname), true);
                delete this[bindname];
            }


            var components = this.components;
            var objects = this.objects;

            this.all = new nexacro.Collection();
            this.components = new nexacro.Collection();
            this.objects = new nexacro.Collection();             
                        
            len = components.length;
            for (var i = 0; i < len; i++)
            {
                var compname = components.get_id(i);
                if (this[compname])
                {
                    if (this[compname]._destroy)
                        this[compname]._destroy();
                }
            }
            components.clear();

            len = objects.length;
            for (var i = 0; i < len; i++)
            {
                var objname = objects.get_id(i);
                if (this[objname])
                {
                    if (this[objname].destroy)
                        this[objname].destroy();
                    delete this[objname];
                }
            }
            objects.clear();
            this.all.clear();
            this.components.clear();
            this.objects.clear();
            this.binds.clear();
            
            this._hotkey_list = [];
            
            if (this._is_scrollable)
            {
                this.resetScroll();
            }
        }
        this._is_created = false;
    };

    //===============================================================
    // nexacro.FormBase : Load
    //===============================================================

    // Application의 함수를 연결해서 쓰는 경우, 함수를 2depth 진입하면
    // this가 window로 바뀌는 문제가 있어서 사용시 주의가 필요함 (참고: Application.loadIncludeScript)
    _pFormBase.on_initEvent = nexacro._emptyFn;
    _pFormBase._loadInclude = _pApplication._loadInclude;
    _pFormBase._init = nexacro._emptyFn;
    _pFormBase.loadIncludeScript = nexacro._emptyFn;
    _pFormBase.loadPreloadList = nexacro._emptyFn;
   // _pFormBase._addCss = _pApplication._addCss;
   // _pFormBase._make_find_csslist = _pApplication._make_find_csslist;
    _pFormBase._excuteScript = _pApplication._excuteScript;
    _pFormBase.registerScript = _pApplication.registerScript;
    _pFormBase.addIncludeScript = _pApplication.addIncludeScript;
    _pFormBase.loadIncludeScript = _pApplication.loadIncludeScript;

    _pFormBase._make_find_csslist = function ()
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

                // open창은 html에서 성능상의 문제로 별도로 csslist를 관리하기 때문에 find csslist 탐색중단
                // 나머지 popup frame은 해당없음 (runtime only이므로 성능차이가 없음)
                if (pThis._is_frame && pThis._is_popup_frame && pThis._window_type != 5)  //for popupframe
                {
                    break;
                }
                else if (pThis.parent == null && !pThis._is_application)
                {
                    pThis = application;                  
                }                
                else
                {
                    pThis = pThis.parent;                    
                }
            }
            this._find_csslist = css_list;
        }
        return css_list;
    };

    _pFormBase._addCss = function (objtype, styleProp, styleobj, pseudoarr)
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

    _pFormBase.create = function ()
    {
        this.on_create();
    };

    _pFormBase.initEvent = function ()
    {
        this.on_initEvent();
    };

    //context에 global, local load가 완료된 후에 호출되는 함수
    //compile된 fdl안에 구현 되어 있어야 함
    //component를 만들기 시작하는 함수
    _pFormBase._on_init = function ()
    {
        //create sub object && addchild
        if (this._is_created)
        {
            this._clear();
        }

        // Div 생성과 동시에 form이 로딩되는 경우 created=false이다.
        // 따라서 created여부와 상관없이 event를 clear해야 한다. 
        if (this._is_loading) // TODO check 항상 true일 듯 한데..
        {
            this._clearEventListeners();
            // 동적으로 생성된 event도 지우고 있음. 
            // 사용자 설정 event 안나오는 문제 때문에 추가한 코드 
            // 일단 이벤트가 url로 콜한 form과 div 두개다 이벤트가 나오는 문제 때문에 주석처리함
        }

        //div의 style 적용작업
        this._init();
        this.create();

        this._is_loading = false;

        //for autosize
        if (this.parent && this.parent.form == this)
        {
            this.parent._loadedForm();
        }

        this._excuteScript(this);
        this.initEvent();

        this._is_loaded = true;
    };

    _pFormBase._addPreloadList = function (type, url, id, args)
    {
        if (!url) return;

        var fullurl;
        var service = application._getServiceObject(url);
        if (type == "data")
        {
            fullurl = application._getServiceLocation(url, this._base_url);            
            this._load_manager.addPreloadItem(type, fullurl, id, args, service);
        }
        else
        {
            fullurl = application._getFDLLocation(url, this._base_url);            
            this._load_manager.addPreloadItem(type, fullurl, this, null, service);
        }
    };

    //===============================================================
    // nexacro.FormBase : Override
    //===============================================================


    _pFormBase._findForm = function (comp)
    {
        return this;
    };

    _pFormBase._getReferenceContext = function ()
    {
        return this;
    };

	// GetDlgCode 컴포넌트가 어떤 키를 처리하길 원하는지의 여부 .. 
    _pFormBase._getDlgCode = function (keycode, altKey, ctrlKey, shiftKey)
    {
    	// Ex)
    	// want_tab:true    : Tab키를 눌러도 포커스 이동을 하지 않음 (Grid,TextArea)
    	// want_return:true : Enter키를 눌러도 DefaultButton 처리를 하지 않음 (Menu,PopupMenu,Grid,TextArea)
    	// want_escape:true : ............... EscapeButton 처리를 하지 않음
    	// want_chars       : 미사용
    	// want_arrows      : 미사용
    	var last_focused_comp = this._getLastFocused();
    	if (last_focused_comp && last_focused_comp != this)
    	{
    		return last_focused_comp._getDlgCode(keycode, altKey, ctrlKey, shiftKey);
    	}
    	return { want_tab: false, want_return: false, want_escape: false, want_chars: false, want_arrows: false };
    };


    _pFormBase.setSize = function (width, height)
    {
        if (this._adjust_width != width || this._adjust_height != height)
        {
            this._adjustPosition(this.left, this.top, null, null, width, height, this.parent._client_width, this.parent._client_height);
            var control_elem = this._control_element;
            if (control_elem)
            {
                control_elem.setElementSize(width, height);
                this._updateClientSize(control_elem);
            }
        }
    };

    _pFormBase._waitCursor = function (wait_flag, context)
    {
        var ownerframe = this.getOwnerFrame();
        if (ownerframe)
        {
            ownerframe._waitCursor(wait_flag, context);
        }
    };

    //===============================================================
    // nexacro.FormBase : Methods
    //===============================================================
    _pFormBase._destroy = function ()
    {
        // Framework 내부에서 destroy할 때는 _destroy 사용
        if (!this._is_alive)
            return;

        return this.destroyComponent();
    };

    _pFormBase.destroy = function ()
    {
        // 사용자가 직접 호출한 경우라고 가정한다.
        if (!this._is_alive)
            return;

        var confirm_message = this._on_beforeclose();
        if (this._checkAndConfirmClose(confirm_message) == false)
            return false;

        if (this._window)
            this._window._ignore_close_confirm = true;

        this._on_close();

        return this.destroyComponent();
    };

    _pFormBase.loadCss = function (url, base_url, async)
    {        
        //경로 설정하는 api 필요
        if (url)
        {
            if (!base_url)
                base_url = this._base_url;
            var cssurl = [];
            cssurl.push(application._getServiceLocation(url, base_url));
            cssurl.push(".js");

            var service = application._getServiceObject(url);
            this._load_manager.loadCssModule(cssurl.join(""), null, async, service);
        }
    };

    _pFormBase.move = function (left, top, width, height, right, bottom, noneUpdate)
    {
        var control_elem = this.getElement();

        var old_left = this._adjust_left;
        var old_top = this._adjust_top;
        var old_width = this._adjust_width;
        var old_height = this._adjust_height;
        var bsize = false, bmove = false;
        var update = false;

        var parent = this.parent;
        if (parent)
            this._adjustPosition(left, top, right, bottom, width, height, parent._client_width, parent._client_height);
        else
            this._adjustPosition(left, top, right, bottom, width, height, null, null);

        if (this._adjust_width != old_width || this._adjust_height != old_height)
        {
            bsize = true;
            if (old_width == 0 || old_height == 0)
                update = true;
        }
        if (this._adjust_left != old_left || this._adjust_top != old_top)
        {
            bmove = true;
        }
        this.on_update_position(bsize, bmove);

        if (this._layout_list && this._layout_list.length > 0)
        {
            this._checkValidLayout();
        }

        if (update)
        {
            this.currentstyle._empty();
            this._control_pseudo = "";
        }

        this._updateControl(control_elem);
        this._updateContents(control_elem);

    };

    _pFormBase.resize = function (w, h) 
	{
	    if (w < 0 || h < 0)
	        return;

	    if (w == this._adjust_width && h == this._adjust_height)
	    { 	                   
	        var control_elem = this.getElement();
	        if (control_elem && control_elem._handle && control_elem._vml_elem)
	        {
	            control_elem._refreshVMLContainerElement(control_elem, control_elem._vml_elem);
	        }
	        return;
	    }
        var old_width = this._adjust_width;
        var old_height = this._adjust_height;

		var bsize = false;
        if(old_width != this._adjust_left+w || old_height != this._adjust_top+h)
		{
            this.width = w;
            this.height = h;
			bsize = true;
        }

        this._update_position(bsize, false);

        if (this._layout_list && this._layout_list.length > 0)
        {
            this._checkValidLayout();
        }
    };

    _pFormBase.confirm = function (strText, strCaption, strType)
    {
        var win = this._getWindow();
        if (!win)
            return;

        application._skipDragEventAfterMsgBox = true;
        
        return nexacro._confirm(win.frame, strText, strCaption, strType);
    };

    _pFormBase.alert = function (strText, strCaption, strType)
    {
        var win = this._getWindow();
        if (!win)
            return;

        application._skipDragEventAfterMsgBox = true;

        nexacro._alert(win.frame, strText, strCaption, strType);
    };

    _pFormBase.getOwnerFrame = function ()
    {
        var frame = null;
        if (this.parent && !(this.parent instanceof nexacro.Frame))
        {
            frame = this.parent.getOwnerFrame();
        }
        else
        {
            frame = this.parent;
        }
        return frame;
    };

    _pFormBase.lookup = function (name)
    {
        for (var f = this; (f != null) ; f = (f.opener || f.parent))
        {
            if (name in f)
                return f[name];
        }
    };

    _pFormBase.lookupSetter = function (name, fnname)
    {
        if (!fnname)
            fnname = "set_" + name;
        for (var f = this; (f != null) ; f = (f.opener || f.parent))
        {
            var fn = f[fnname];
            if (fn)
            {
                return new nexacro.SetterBinder(f, name, fn);
            }
            if (name in f)
            {
                return new nexacro.PropBinder(f, name);
            }
        }
        return null;
    };

    _pFormBase.lookupFunc = function (name)
    {
        for (var f = this; (f != null) ; f = (f.opener || f.parent))
        {
            var fn = f[name];
            if (fn)
            {
                return new nexacro.FuncBinder(f, fn);
            }
        }
        return null;
    };

    _pFormBase.getLayoutInfo = function (name, key)
    {
        var layout = this._layout_list[name];
        if (layout)
        {
            return layout[key];
        }
        return;
    };

    _pFormBase.getLayoutInfo = function (name, key)
    {
        var layout = this._layout_list[name];
        if (layout)
        {
            return layout[key];
        }
        return;
    };

    //===============================================================
    // nexacro.FormBase : Event Handlers
    //===============================================================
    _pFormBase._on_activate = function ()
    {
        if (this.visible && this._isEnable() && this.enableevent)
        {
            this.on_fire_onactivate();
        }
    };

    _pFormBase._on_deactivate = function ()
    {
        if (this.visible && this._isEnable() && this.enableevent)
        {
            this.on_fire_ondeactivate();
        }
    };

    _pFormBase.on_fire_onactivate = function ()
    {
        if (this.onactivate && this.onactivate._has_handlers)
        {
            var evt = new nexacro.ActivateEventInfo(this, "onactivate", true, this, this);
            this.onactivate._fireEvent(this, evt);
        }
    };

    _pFormBase.on_fire_ondeactivate = function ()
    {
        if (this.ondeactivate && this.ondeactivate._has_handlers)
        {
            var evt = new nexacro.ActivateEventInfo(this, "ondeactivate", false, this, this);
            this.ondeactivate._fireEvent(this, evt);
        }
    };

    _pFormBase._on_beforeclose = function (root_closing_comp)
    {
        if (!this._is_alive || (this._is_form && !this._is_loaded))
            return;

        if (!root_closing_comp)
            root_closing_comp = this;
        var msg = "";

        // 모든 하위 form계열 beforeclose 호출
        var components = this.components;
        var len = components.length;
        for (var i = 0; i < len; i++)
        {
            var comp = components[i];
            if (!(comp instanceof nexacro.FormBase))
                continue;

            var comp_msg = comp._on_beforeclose(root_closing_comp);
            msg = this._appendBeforeCloseMsg(msg, comp_msg);
            }

        // self
        var self_msg = this._on_bubble_beforeclose(root_closing_comp);
        msg = this._appendBeforeCloseMsg(msg, self_msg);

        return msg;
    };

    _pFormBase._on_bubble_beforeclose = function (root_closing_comp, event_bubbles, fire_comp, refer_comp)
    {
        var first_call = false;
        if (event_bubbles === undefined) // firecomp
        {
            first_call = true;
            fire_comp = this;
            if (!refer_comp)
                refer_comp = this;
        }

        var msg = "";
        if (this.visible && this._isEnable())
        {
            if (this.enableevent)
            {
                if (first_call)
                    event_bubbles = false;

                msg = this.on_fire_onbeforeclose(this, fire_comp, refer_comp, root_closing_comp);
            }
        }

        // TODO check Form계열 close Event 버블링여부는 논의중.
        var bubbled_msg = "";
        if ((!this.onbeforeclose || (this.onbeforeclose && !this.onbeforeclose.stoppropagation)) && event_bubbles !== true && this.parent && !this.parent._is_application)
        {
            bubbled_msg = this.parent._on_bubble_beforeclose(root_closing_comp, event_bubbles, fire_comp, refer_comp);
        }

        return this._appendBeforeCloseMsg(msg, bubbled_msg);
    };

    _pFormBase._on_close = function ()
    {
        if (!this._is_alive || (this._is_form && !this._is_loaded))
            return true;

        var components = this.components;
        var len = components.length;
        for (var i = 0; i < len; i++)
        {
            var comp = components[i];
            if (!(comp instanceof nexacro.FormBase))
                continue;

            comp._on_close();
        }

        this._on_bubble_close();
    };

    _pFormBase._on_bubble_close = function (event_bubbles, fire_comp, refer_comp)
    {
        var first_call = false;
        if (event_bubbles === undefined) // firecomp
        {
            first_call = true;
            fire_comp = this;
            if (!refer_comp)
                refer_comp = this;
        }

        if (this.visible && this._isEnable())
        {
            if (this.enableevent)
            {
                if (first_call)
                    event_bubbles = false;

                this.on_fire_onclose(this, fire_comp, refer_comp);
            }
        }

        // TODO check Form계열 close Event 버블링여부는 논의중.
        var parent = this.parent;
        if (parent) // parent._is_frame
        {
            if ((!this.onclose || (this.onclose && !this.onclose.stoppropagation)) && event_bubbles !== true && !parent._is_application)
            {
                return parent._on_bubble_close(event_bubbles, fire_comp, refer_comp);
            }
        }
    };

    _pFormBase.on_fire_onbeforeclose = function (obj, from_comp, refer_comp, root_closing_comp)
    {
        if (this.onbeforeclose && this.onbeforeclose._has_handlers)
        {
            var evt = new nexacro.CloseEventInfo(obj, "onbeforeclose", from_comp, refer_comp, root_closing_comp);
            return this.onbeforeclose._fireEvent(this, evt);
        }
    };

    _pFormBase.on_fire_onclose = function (obj, from_comp, refer_comp)
    {
        if (this.onclose && this.onclose._has_handlers)
        {
            var evt = new nexacro.CloseEventInfo(obj, "onclose", from_comp, refer_comp);
            return this.onclose._fireEvent(this, evt);
        }
        return true;
    };

    //===============================================================
    // nexacro.FormBase : Logical Part
    //===============================================================

    _pFormBase.loadForm = function (formurl, async, reload, baseurl)
    {
        if (this._load_manager)
        {
            var url = application._getFDLLocation(formurl, baseurl);
            this._url = url;
            this._base_url = nexacro._getBaseUrl(url);

            if (this._load_manager)
                this._load_manager.clearAllLoad();

            this._clearUserFunctions();

            this._is_loading = true;
            if (this.parent._is_frame && this.parent.form == this)
            {
                // ChildFrame > Form   
                application._registerLoadforms(this);
            }

            this._clearCssInfo();

            var service = application._getServiceObject(formurl);
            var ret = this._load_manager.loadMainModule(url, undefined, async, reload, service);
        }
    };

    //CHECK
    _pFormBase.getParentContext = function ()
    {

    };

    _pFormBase._getFormBaseUrl = function ()
    {
        return this._base_url;
    };

    _pFormBase._clearCssInfo = function (exceptcssselector)
    {
        this._css_finder = null;
        this._ref_css_finder = null;
        this._cssfinder_cache = {};
        this._find_csslist = null;
        if (!exceptcssselector)
        {
            this._css_selectors = null;
            this._css_selectors = { _has_items: false, _has_attr_items: false };
        }
        
    };

    //return real object - parent.child syntex 
    _pFormBase._findChildObject = function (queryid)
    {
        var npos = queryid.indexOf(".");
        if (npos > 0)
        {
            var querythis = queryid.substring(0, npos).trim();
            querythis = this[querythis];
            if (querythis)
            {
                return querythis._findChildObject(queryid.substring(npos + 1, queryid.length).trim());
            }
        }
        else
        {
            return this[queryid];
        }
    };

    //parent  application 
    _pFormBase._getDatasetObject = function (queryid)
    {
        var _ds = this[queryid];
        var p = (this.opener || this.parent);
        if (_ds == null && p && p != application)
        {
            _ds = p._getDatasetObject(queryid);
        }

        if (_ds == null)
            _ds = application[queryid];

        return _ds;
    };
    // Override for component __applyers

    // Tab키로 포커스 이동시 다음 대상이 자기자신이면, 자기 자신에서 멈춰야 하는지 여부 체크
    _pFormBase._checkContainerTabFocus = function ()
    {
        // true: 자기자신에서 focus를 멈춤
        if (this._is_form && nexacro._enableaccessibility && this._isAccessibilityEnable() == true)
            return true;
        
        // false: First TabOrder Child까지 Focus 진입
        return false;
    };

    _pFormBase._checkContainerHeadingFocus = function ()
    {
        // true: 자기자신에서 focus를 멈춤
        if (this._is_form && nexacro._enableaccessibility && this._isAccessibilityEnable() == true && this._isAccessibilityRoleHeading())
            return true;

        // false: First TabOrder Child까지 Focus 진입
        return false;
    };


    _pFormBase._getTabOrderLast = function (bAccessibility, bEditable, edittype, bComposite)
        {
        var ar = this._getSortedDecendants(this, true, bAccessibility);
        var child;
        for (var i = ar.length - 1; i >= 0; i--)
        {
            child = ar[i];
            if (bEditable)
            {
                if (child._isEditableComponent(edittype))
                    return child;
                else if (bComposite && child._is_form)
                {
                    var comp = child._getTabOrderLast(bAccessibility, bEditable, edittype, bComposite);
                    if (comp)
                        return comp;
                }                    
            }
            else if (bAccessibility)
            {
                if (child._isAccessibilityEnable())
                    return child;
                else if (child._is_form)
                    return child._getTabOrderLast(true);
            }
            else if (child.on_get_prop_tabstop())
                return child;
        }
        return null;
    };

    _pFormBase._getHeadingOrderLast = function ()
    {
        var ar = this._getSortedDecendants(this, true, true);
        var child;
        for (var i = ar.length - 1; i >= 0; i--)
        {
            child = ar[i];

            if (child._isAccessibilityRoleHeading())
            {
            	return child;
            }
            else if (child._is_form)
            {
            	var comp = child._getHeadingOrderLast();
            	if (comp)
            	{
            		return comp;
            	}
            }
        }
        return null;
    };


    _pFormBase._getTabOrderFirst = function (bAccessibility, bEditable, edittype, bComposite)
    {
        var ar = this._getSortedDecendants(this, true, bAccessibility);
        var child;
        for (var i = 0; i < ar.length; i++)
        {
            child = ar[i];
            if (bEditable)
            {
                if (child._isEditableComponent(edittype))
                    return child;
                else if (bComposite && child._is_form)
                {
                    var comp = child._getTabOrderFirst(bAccessibility, bEditable, edittype, bComposite);
                    if (comp)
                        return comp;
                }
            }
            else if (bAccessibility)
            {
                if (child._isAccessibilityEnable())
                    return child;
                else if (child._is_form)
                    return child._getTabOrderFirst(true);
            }
            else if (child.on_get_prop_tabstop())
                return child;
        }
        return null;
    };

    _pFormBase._getHeadingOrderFirst = function ()
    {
        var ar = this._getSortedDecendants(this, true, true);
        var child;
        for (var i = 0; i < ar.length; i++)
        {
        	child = ar[i];

        	if (child._isAccessibilityRoleHeading())
        	{
        		return child;
        	}
        	else if (child._is_form)
        	{
        		var comp = child._getHeadingOrderFirst();
        		if (comp)
        		{
        			return comp;
        		}
        	}
        }
        return null;
    };

    _pFormBase._getTabOrderNext = function (current, direction, bAccessibility, bEditable, edittype, bhotkey, bComposite)
    {
        if (current && current._is_form && direction > 0 && !bhotkey)
        {
            var current_first_child = current._getTabOrderFirst(bAccessibility, bEditable, edittype);
            if (current._last_focused == null && current_first_child != null)
                return current_first_child;
        }

        var ar = this._getSortedDecendants(this, true, bAccessibility);
        var cur_idx = nexacro._indexOf(ar, current._getRootComponent(current));
        if (cur_idx < 0)
            return null;

        var child;
        if (direction > 0)
        {
            for (var i = cur_idx + direction; i < ar.length; i++)
            {
                child = ar[i];
                if (bEditable)
                {
                    if (child._isEditableComponent(edittype))
                        return child;
                    else if (bComposite && child._is_form)
                    {
                        var comp = child._getTabOrderFirst(bAccessibility, bEditable, edittype, bComposite);
                        if (comp)
                            return comp;
                    }
                }
                else if (bAccessibility)
                {
                    if (child._isAccessibilityEnable())
                        return child;
                    else if (child._is_form && child._child_list.length)
                        return child;
                    else if (child._isItemAccessibilityEnable())
                        return child;
                }
                else if (child.on_get_prop_tabstop())
                    return child;
            }
        }
        else if (direction < 0)
        {
            for (var i = cur_idx + direction; i >= 0; i--)
            {
                child = ar[i];
                if (bEditable)
                {
                    if (child._isEditableComponent(edittype))
                        return child;
                    else if (bComposite && child._is_form)
                    {
                        var comp = child._getTabOrderLast(bAccessibility, bEditable, edittype, bComposite);
                        if (comp)
                            return comp;
                    }
                }
                else if (bAccessibility)
                {
                    if (child._isAccessibilityEnable())
                        return child;
                    else if (child._is_form && child._child_list.length)
                        return child;
                    else if (child._isItemAccessibilityEnable())
                        return child;
                }
                else if (child.on_get_prop_tabstop())
                    return child;
            }
        }
        if (bEditable)
        {
            if (direction > 0)
            {
                for (var i = 0 ; i < cur_idx - direction; i++)
                {
                    child = ar[i];
                    if (bEditable)
                    {
                        if (child._isEditableComponent(edittype))
                            return child;
                        else if (bComposite && child._is_form)
                        {
                            var comp = child._getTabOrderFirst(bAccessibility, bEditable, edittype, bComposite);
                            if (comp)
                                return comp;
                        }
                    }
                }
            }
            else if (direction < 0)
            {
                for (var i = ar.length -1 ; i > cur_idx; i--)
                {
                    child = ar[i];
                    if (bEditable)
                    {
                        if (child._isEditableComponent(edittype))
                            return child;
                        else if (bComposite && child._is_form)
                        {
                            var comp = child._getTabOrderLast(bAccessibility, bEditable, edittype, bComposite);
                            if (comp)
                                return comp;
                        }
                            
                    }
                }
            }
        }
        return null;
    };

    _pFormBase._getHeadingOrderNext = function (current, direction)
    {
        if (current && current._is_form) // && direction > 0)
        {
            if (current._last_focused)
            {
                var comp = current._getHeadingOrderNext(current._last_focused, direction);
                if (comp)
                    return comp;
                else
                    current._last_focused = null;
            }
            else if (current._last_focused == null)
            {
                if (direction == 1)
                {
                    var comp = current._getHeadingOrderFirst(true);
                }
                else
                    var comp = current._getHeadingOrderLast(true);
                if (comp)
                    return comp;
            }
        }

        var ar = this._getSortedDecendants(this, true, true, null);
        var cur_idx = nexacro._indexOf(ar, current._getRootComponent(current));
        if (cur_idx < 0)
            return null;

        var child;
        if (direction > 0)
        {
            for (var i = cur_idx + direction; i < ar.length; i++)
            {
                child = ar[i];

                if (child._isAccessibilityRoleHeading())
                    return child;
                else if (child && child._is_form)
                {
                    var current_first_child = child._getHeadingOrderFirst(true);
                    if (current_first_child)
                        return current_first_child;
                }
            }
        }
        else if (direction < 0)
        {
            for (var i = cur_idx + direction; i >= 0; i--)
            {
                child = ar[i];
                if (child._isAccessibilityRoleHeading())
                    return child;
                else if (child && child._is_form)
                {
                    var current_first_child = child._getHeadingOrderLast(true);
                    if (current_first_child)
                        return current_first_child;
                }
            }
        }
        return null;
    };
    
    _pFormBase._getSortedDecendants = function (p, include_not_tabstop, bAccessibility)//, arEdit)
    {
        // tabstop=false인 컴포넌트에서 Tab 이동시 필요하다. 
        if (include_not_tabstop === undefined)
            include_not_tabstop = false;

        var ar = [];
        var comps = p.components;
        if (comps)
        {
        var comp_len = comps.length;
        for (var i = 0; i < comp_len; i++)
        {
            var comp = comps[i];
                if (!comp || !comp._is_created || !comp.visible || (comp._isEnable && !comp._isEnable() || !comp.enable) || comp._popup)
                continue;
            /*
            if (bAccessibility)
            {
                if (!comp._isAccessibilityEnable())
                        continue;
                }              
            */
            if (!bAccessibility && !include_not_tabstop && !comp.on_get_prop_tabstop())
                continue;

            var tabidx = comp._taborder;
            if (tabidx < 0)
                tabidx = 0; //continue;
            var j = ar.length;
            while (j > 0 && ar[j - 1]._taborder > tabidx)
            {
                ar[j] = ar[j - 1];
                j--;
            }
            ar[j] = comp;
        }
        }
        return ar;
    };
    
    _pFormBase.addLayout = function (name, obj)
    {
        if (!obj) return;

        if (name == "default")
        {
            this._default_layout = obj;
        }
        else if (application._screeninfo == null || (obj.screenid == ""))
        {
            this._layout_list.add_item(name, obj);
        }
        else if (application._curscreen)
        {
            // 미지정시 모든 스크린에서 사용 가능
            if (!obj.screenid || obj.screenid == "")
            {
                this._layout_list.add_item(name, obj);
                return;
            }

            var screenid_list = obj.screenid.split(',');
            var cnt = screenid_list.length;
            for (var i = 0; i < cnt; i++)
            {
                if (application._curscreen.name == screenid_list[i])
                {
                    this._layout_list.add_item(name, obj);
                    break;
                }
            }
        }
    };


    _pFormBase._setPos = function (left, top)
    {
        if (this._adjust_left != left || this._adjust_top != top)
        {
            this._adjust_left = this.left = left;
            this._adjust_top = this.top = top;

            if (this.parent)
                this._adjustPosition(this.left, this.top, this.right, this.bottom, this.width, this.height, this.parent._client_width, this.parent._client_height);
            else
                this._adjustPosition(this.left, this.top, this.right, this.bottom, this.width, this.height, 0, 0);

            this.on_update_position(false, true);
        }
    };

    _pFormBase._setSize = function (width, height)
    {
        if (this._adjust_width != width || this._adjust_height != height)
        {
            this._adjust_width = this.width = width;
            this._adjust_height = this.height = height;

            if (this.parent)
                this._adjustPosition(this.left, this.top, this.right, this.bottom, this.width, this.height, this.parent._client_width, this.parent._client_height);
            else
                this._adjustPosition(this.left, this.top, this.right, this.bottom, this.width, this.height, 0, 0);

            this.on_update_position(true, false);
        }
    };

    _pFormBase._initLayoutManager = function ()
    {
        var layout_name = "default";
        var layout_list_len = this._layout_list.length;
        if (layout_list_len > 0)
        {
            var old_layout_name = this._current_layout_name;
            this._current_layout_name = "";
            this._cur_real_layout = "";

            var xy = { cx: this._adjust_width, cy: this._adjust_height };
            var idx = application.getLayoutManager().checkValid(this, xy);

            layout_list_len = this._layout_list.length;
            if (this._layout_list[layout_list_len - 1].name != "default")
            {
                this._layout_list.add_item("default", this._default_layout);
                layout_list_len = this._layout_list.length;
            }

            if (idx >= 0)
            {
                var ret;
                var old_layout = this._layout_list[old_layout_name];
                var new_layout = this._layout_list[idx];
                var oldwidth = 0, oldheight = 0;
                oldwidth = old_layout ? old_layout.width : 0;
                oldheight = old_layout ? old_layout.height : 0;

                if (old_layout_name != new_layout.name)
                    ret = this.on_fire_canlayoutchange(this, "canlayoutchange", old_layout_name, new_layout.name, oldwidth, new_layout.width, oldheight, new_layout.height);

                if (ret === true || ret === undefined)
                {
                    application.getLayoutManager().loadLayout(this, null, new_layout);

                    if (old_layout_name != new_layout.name)
                        this.on_fire_onlayoutchanged(this, "onlayoutchanged", old_layout_name, new_layout.name, oldwidth, new_layout.width, oldheight, new_layout.height);

                    this._current_layout_name = new_layout.name;
                    this._cur_real_layout = new_layout.name;
                }
                else
                {
                    if (old_layout_name)
                    {
                        layout_name = old_layout_name;
                    }

                    this._current_layout_name = layout_name;
                    this._cur_real_layout = layout_name;
                }
            }
        }
        else if (layout_list_len <= 0 && this._default_layout)
        {
            application.getLayoutManager().loadLayout(this, null, this._default_layout, this._default_layout);

            this._current_layout_name = layout_name;
            this._cur_real_layout = layout_name;
        }
    };

    _pFormBase._checkValidLayout = function ()
    {
        var pManager = application.getLayoutManager();
        if (pManager)
        {
            var old_layout_name = this._current_layout_name;
            var new_layout = null;
            var xy = { cx: this._adjust_width, cy: this._adjust_height };
            var new_idx = pManager.checkValid(this, xy);

            if (new_idx > -1)
            {
                new_layout = this._layout_list[new_idx];
            }
            else
            {
                return pManager.getCurrentLayout(this);
            }

            if (new_layout && old_layout_name != new_layout.name)
            {
                var len = this.all.length;
                for (var i = 0; i < len; i++)
                {
                    if (this.all[i]._is_form && this.all[i]._layout_list.length > 0)
                    {
                        this.all[i]._checkValidLayout(xy);
                    }
                }

                var old_layout = this._layout_list[old_layout_name];
                var oldwidth = 0, oldheight = 0;
                oldwidth = old_layout ? old_layout.width : 0;
                oldheight = old_layout ? old_layout.height : 0;
                var ret = this.on_fire_canlayoutchange(this, "canlayoutchange", old_layout_name, new_layout.name, oldwidth, new_layout.width, oldheight, new_layout.height);
                if (ret === true || ret === undefined)
                {
                    if (new_layout.name != "default")
                    {
                        pManager.changeLayout(this, this._default_layout);
                    }

                    pManager.changeLayout(this, new_layout);

                    this.on_fire_onlayoutchanged(this, "onlayoutchanged", old_layout_name, new_layout.name, oldwidth, new_layout.width, oldheight, new_layout.height);
                }

                if (this._is_scrollable)
                {
                    this.resetScroll();
                }

                return new_layout;
            }
        }
    };

    _pFormBase._on_prepare_stepcontents = function (old_stepcount, old_stepindex, new_stepcount, new_stepindex)
    {
        var control_elem = this.getElement();
        if (control_elem)
        {
            if (this._is_created && (old_stepcount > 0 || new_stepcount > 0))
            {
                var comps = this.components;
                var comp_len = comps.length;
                for (var i = 0; i < comp_len; i++)
                {
                    var comp_elem = comps[i].getElement();
                    control_elem.removeChildElement(comp_elem);
                }
            }

            control_elem.setElementStepCount(new_stepcount);
            control_elem.setElementStepIndex(new_stepindex);
            if (new_stepindex > -1 && control_elem._step_count > new_stepindex)
            {
                control_elem.setElementHScrollPos(control_elem.client_width * new_stepindex);
            }
        }

        if (this.stepcontrol)
            this._destroyStepControl();
    };

    _pFormBase._on_refresh_stepcontents = function (old_stepcount, old_stepindex, new_stepcount, new_stepindex)
    {
        var control_elem = this.getElement();
        if (control_elem)
        {
            if (this._is_created && (old_stepcount > 0 || new_stepcount > 0))
            {
                var comps = this.components;
                var comp_len = comps.length;
                for (var i = 0; i < comp_len; i++)
                {
                    var comp_elem = comps[i].getElement();
                    control_elem.appendChildElement(comp_elem);
                }
            }
        }

        if (new_stepcount > 0)
        {
            if (!this.stepcontrol)
                this._createStepControl(new_stepcount, new_stepindex);

            if (this._is_created)
            {
                this.stepcontrol.on_created();
            }
        }
    };

    _pFormBase._createStepControl = function (stepcnt, stepidx)
    {
        if (!this.stepcontrol)
        {
            var step_ctrl = new nexacro.StepCtrl("stepcontrol", "absolute", 0, 0, 0, 0, null, null, this);
            step_ctrl.createComponent(true);
            step_ctrl.set_stepcount(stepcnt);
            step_ctrl.set_stepindex(stepidx);

            this.stepcontrol = step_ctrl;

            this._updateStepControlSize();
            this._setEventHandler("onstepchanged", this._on_stepchanged, this);
        }
    };

    _pFormBase._destroyStepControl = function ()
    {
        var step_ctrl = this.stepcontrol;
        if (step_ctrl)
        {
            step_ctrl.destroy();
            this.stepcontrol = null;
        }
    };

    _pFormBase._updateStepControlSize = function ()
    {
        var step_ctrl = this.stepcontrol;
        if (step_ctrl)
        {
            this.on_update_style_stepalign();
        }
    };

    _pFormBase._on_stepchanged = function (obj, e)
    {
        // stepindex가 바뀌는 모든 상황
        var stepcontrol = this.stepcontrol;
        var control_elem = this.getElement();
        if (stepcontrol && control_elem)
        {
            // Touch Slide로 바뀐 경우 이미 애니메이션 종료 시점임.
            var zoomFactor = this.getZoom() / 100;
            var client_width = control_elem.client_width / zoomFactor;

            var is_invalid_pos = (control_elem.scroll_left != (client_width * stepcontrol.stepindex));
            if (!is_invalid_pos)
                return;

            this._createStepChangeAnimation(stepcontrol.stepindex, 400);
        }
    };

    _pFormBase.on_fire_sys_onslidestart = function (elem, touch_manager, touchinfos, xaccvalue, yaccvalue, xdeltavalue, ydeltavalue, from_comp, from_refer_comp)
    {
        if (this.stepcontrol && this._stepchange_info)
        {
            // 스크롤 중에 또 잡아 끌면 취소
            this._on_cancel_stepchange_animation();
        }
        return nexacro.Component.prototype.on_fire_sys_onslidestart.call(this, elem, touch_manager, touchinfos, xaccvalue, yaccvalue, xdeltavalue, ydeltavalue, from_comp, from_refer_comp);
    };

    _pFormBase.on_fire_sys_onslideend = function (elem, touch_manager, touchinfos, xaccvalue, yaccvalue, xdeltavalue, ydeltavalue, from_comp, from_refer_comp)
    {
        // 내가 slide로 인한 스크롤 대상이고
        if (touch_manager && touch_manager._scroll_comp == this)
        {
            var control_elem = this.getElement();
            var stepcontrol = this.stepcontrol;
            if (!control_elem || !stepcontrol)
                return;
          
            // 현재 Step index와 정확히 일치하는 화면을 보고 있는 것이 아니라면
            var zoomFactor = this.getZoom() / 100;
            var client_width = control_elem.client_width / zoomFactor;

            var is_invalid_pos = (control_elem.scroll_left != (client_width * stepcontrol.stepindex));
            if (!is_invalid_pos)
                return;

            var duration = 400;

            // 어디까지 스크롤 할것인가?

            // 1. 단순히 생각하면 그냥 가까운쪽
            var target_pos = control_elem.scroll_left - (client_width / 2);

            // 2. fling인 경우 좀 멀어도 가산점을 줌.
            var flinginfo = touch_manager.checkFling();
            if (flinginfo)
            {
                var flingfactor = 3;
                var flingdistance = flinginfo.xstartvalue | 0; // fling 처리시 이동가능한 거리

                // TODO check 한번에 여러 Step 넘어갈 수 있게 할까?
                if (flingdistance < -(client_width / flingfactor))
                    flingdistance = -(client_width / flingfactor);
                if (flingdistance > (client_width / flingfactor))
                    flingdistance = (client_width / flingfactor);

                target_pos -= flingdistance;
            }

            var target_index = nexacro.round(target_pos / (client_width) + 0.5);

            var ret = stepcontrol.set_stepindex(target_index);

            if (!ret)
            {
                control_elem.setElementHScrollPos(client_width * stepcontrol.stepindex);
            }
          
            // 아직 fling 되기 전임. Fling이 발생하지 않도록 처리함.
            touch_manager._fling_blocked = true;
        }
        else
        {
            // 기본 호출
            return nexacro.Component.prototype.on_fire_sys_onslideend.call(this, elem, touch_manager, touchinfos, xaccvalue, yaccvalue, xdeltavalue, ydeltavalue, from_comp, from_refer_comp);
        }

        // slideend는 return 값이 의미가 없음
        return false;
    };

    _pFormBase._createStepChangeAnimation = function (target_index, duration)
    {
        if (this._stepchange_info)
        {
            this._on_cancel_stepchange_animation();
        }

        var control_elem = this.getElement();
        if (control_elem)
        {
            var info = {};
            info.is_alive = true;
            info.target_index = target_index;
            info.starttime = new Date().getTime();
            info.duration = duration;
            var zoomFactor = this.getZoom() / 100;
            var hscroll_step = control_elem.hscroll_limit / (control_elem._step_count-1); 
            info.startpos = control_elem.scroll_left;
            info.endpos = hscroll_step * target_index;

            if (this.style.stepshowtype == "action")
            {
                var stepcontrol = this.stepcontrol;
                if (stepcontrol)
                {
                    stepcontrol.set_visible(true);
                }
            }

            var pThis = this;
            info.timer = new nexacro.AnimationFrame(this, function () { pThis._on_stepchange_animation(); });
            info.timer.start();

            this._stepchange_info = info;
        }
    };

    _pFormBase._on_stepchange_animation = function ()
    {
        var control_elem = this.getElement();
        if (!control_elem)
            return;

        var info = this._stepchange_info;
        if (info && info.is_alive)
        {
            var t = new Date().getTime() -info.starttime; // 0 ~ duration
            var d = info.duration;
            var q = t / d - 1;
            var c = Math.min((q*q*q+1), 1); // Curve3Out Interpolation
            var curpos = info.startpos + ((info.endpos - info.startpos) * c);
                       
            control_elem.setElementHScrollPos(curpos);
            if (t >= info.duration)
            {
                this._on_end_stepchange_animation();
            }
            else
            {
                info.timer.start();
            }
        }
    };

    _pFormBase._on_end_stepchange_animation = function ()
    {
        var info = this._stepchange_info;
        if (!info)
            return;

        info.is_alive = false;
        if (info.timer)
            info.timer.stop();

        var control_elem = this.getElement();
        var stepcontrol = this.stepcontrol;
        if (control_elem && stepcontrol)
        {
            var new_index = info.target_index;
            delete info;

            control_elem.setElementStepIndex(new_index);
            var hscroll_step = control_elem.hscroll_limit / (control_elem._step_count - 1);
            control_elem.setElementHScrollPos(hscroll_step * new_index);

            var comps = this.components;
            var comp_len = comps.length;
            for (var i = 0; i < comp_len; i++)
            {
                comps[i].on_apply_positionstep(comps[i].positionstep);
            }

            this.on_apply_style_stepshowtype(this.style.stepshowtype);
            this._stepchange_info = null;
        }
    };

    _pFormBase._on_cancel_stepchange_animation = function ()
    {
        // 수행도중 다른 Animation 요청이 있으면....
        var info = this._stepchange_info;
        if (!info)
            return;

        info.is_alive = false;
        if (info.timer)
            info.timer.stop();
        delete info;
        this._stepchange_info = null;
    };

    // Tab키로 포커스 이동시 대상 탐색을 위한 api
    _pFormBase._searchNextTabFocus = function (current, bSearchFromFirst, opt_force_cycle, bAccessibility, bhotkey)
    {
        var opt_cycle = (opt_force_cycle == undefined) ? (application._tabkeycirculation == 0) : opt_force_cycle;
        var opt_container_focus = nexacro._enableaccessibility;

        // my child중 누군가를 기준으로 탐색
        var temp, ret, next;
        var my_tapstop_childs = this._getSortedDecendants(this, undefined, bAccessibility);
        var my_tabstop_child_cnt = my_tapstop_childs ? my_tapstop_childs.length : 0;
        if (my_tabstop_child_cnt > 0 && current && !bSearchFromFirst)
        {
            next = this._getTabOrderNext(current, true, bAccessibility, undefined, undefined, bhotkey);
            if (opt_cycle && !next && this._isPopupVisible())
                next = this._getTabOrderFirst(bAccessibility);
            if (!next)
            {
                // 한바퀴 다 돈 경우
                var parent = this.parent;
                var parent_tabstop_childs = parent._getSortedDecendants(this.parent, undefined, bAccessibility);
                var parent_tabstop_child_cnt = parent_tabstop_childs ? parent_tabstop_childs.length : 0;
                if (!opt_cycle && (parent._is_frame || this._is_window))
                {
                    // "마지막 컴포넌트 입니다."
                    ret = [null, this, 1];
                }
                else if (parent._is_form && parent_tabstop_child_cnt > 0)
                {
                    ret = parent._searchNextTabFocus(this, false, undefined, bAccessibility, bhotkey);
                }
                else
                {
                    // Parent가 form이 아닌 경우? 이건 무슨 경우 인지..
                    next = this._getTabOrderFirst(bAccessibility);
                }
            }
        }
        else
        {
            // this 자체가 focus되어있는 경우
            next = this._getTabOrderFirst(bAccessibility);
            if (!next)
            {
                // 텅빈 div인 경우
                if (this.parent._is_form)
                    ret = this.parent._searchNextTabFocus(this, undefined, undefined, bAccessibility, bhotkey);
                else
                    ret = null;
            }
        }

        if (next && !ret)
        {
            var next_tabstop_childs = (next._is_form ? next._getSortedDecendants(next, undefined, bAccessibility) : null);
            var next_tabstop_child_cnt = next_tabstop_childs ? next_tabstop_childs.length : 0;
            if (next._is_form && bAccessibility && next._checkContainerTabFocus() == true)
            {
                ret = [next];
            }
            else if (next._is_form && next_tabstop_child_cnt > 0)
            {
                ret = next._searchNextTabFocus(null, true, undefined, bAccessibility, bhotkey);
            }
            else
            {
                ret = [next];
            }
        }

        return ret;
    };

    _pFormBase._searchNextHeadingFocus = function (current, bSearchFromFirst, opt_force_cycle)
    {
        var opt_cycle = (opt_force_cycle == undefined) ? (application._tabkeycirculation == 0) : opt_force_cycle;
        var opt_container_focus = nexacro._enableaccessibility;

        // my child중 누군가를 기준으로 탐색
        var temp, ret, next;
        var my_tapstop_childs = this._getSortedDecendants(this, undefined, true);
        var my_tabstop_child_cnt = my_tapstop_childs ? my_tapstop_childs.length : 0;
        if (my_tabstop_child_cnt > 0 && current && !bSearchFromFirst)
        {
            next = this._getHeadingOrderNext(current, 1);
            if (opt_cycle && !next && this._isPopupVisible())
                next = this._getHeadingOrderFirst();
            if (!next)
            {
                // 한바퀴 다 돈 경우
                var parent = this.parent;
                var parent_tabstop_childs = parent._getSortedDecendants(this.parent, undefined, true);
                var parent_tabstop_child_cnt = parent_tabstop_childs ? parent_tabstop_childs.length : 0;
                if (!opt_cycle && (parent._is_frame || this._is_window))
                {
                    // "마지막 컴포넌트 입니다."
                    ret = [null, this, 1];
                }
                else if (parent._is_form && parent_tabstop_child_cnt > 0)
                {
                    ret = parent._searchNextHeadingFocus(this);
                }
                else
                {
                    // Parent가 form이 아닌 경우? 이건 무슨 경우 인지..
                    next = this._getHeadingOrderFirst();
                }
            }
        }
        else
        {
            // this 자체가 focus되어있는 경우
            next = this._getHeadingOrderFirst();
            if (!next)
            {
                // 텅빈 div인 경우
                if (this.parent._is_form)
                    ret = this.parent._searchNextHeadingFocus(this);
                else
                    ret = null;
            }
        }

        if (next && !ret)
        {
            var next_tabstop_childs = (next._is_form ? next._getSortedDecendants(next, undefined, true) : null);
            var next_tabstop_child_cnt = next_tabstop_childs ? next_tabstop_childs.length : 0;
            if (next._is_form && next._checkContainerHeadingFocus() == true)
            {
                ret = [next];
            }
            else if (next._is_form && next_tabstop_child_cnt > 0)
            {
                ret = next._searchNextHeadingFocus(null, true);
            }
            else
            {
                ret = [next];
            }
        }

        return ret;
    };


    _pFormBase._searchPrevTabFocus = function (current, bSearchFromLast, opt_force_cycle, bAccessibility, bhotkey)
    {
        var opt_cycle = (opt_force_cycle == undefined) ? (application._tabkeycirculation == 0) : opt_force_cycle;
        var opt_container_focus = nexacro._enableaccessibility;

        var temp, ret, next;
        var my_tapstop_childs = this._getSortedDecendants(this, undefined, bAccessibility);
        var my_tabstop_child_cnt = my_tapstop_childs ? my_tapstop_childs.length : 0;
        if (my_tabstop_child_cnt && current && !bSearchFromLast)
        {
            next = this._getTabOrderNext(current, -1, bAccessibility, undefined, undefined, bhotkey);

            // PopupDiv 내부 순환
            if (opt_cycle && !next && this._isPopupVisible())
                next = this._getTabOrderLast(bAccessibility);
            if (!next)
            {
                // 한바퀴 다 돈 경우
                var parent_tabstop_childs = this.parent._getSortedDecendants(this.parent, undefined, bAccessibility);
                var parent_tabstop_child_cnt = parent_tabstop_childs ? parent_tabstop_childs.length : 0;
                var parent_comps = this.parent.components;
                if (opt_cycle == false && (this.parent._is_frame || this._is_window))
                    ret = [null, this, -1];
                //else if (!bAccessibility && this._type_name == "Tabpage")
                //    ret = [this.parent];
                else if (bAccessibility && this._checkContainerTabFocus() == true && this.parent._is_form)
                    ret = [this];
                else if (this.parent._is_form && parent_tabstop_child_cnt > 0)
                    ret = this.parent._searchPrevTabFocus(this, undefined, undefined, bAccessibility, bhotkey);
                else
                    next = this._getTabOrderLast(bAccessibility);
            }
        }
        else
        {
            // Div인데 Child가 없거나, 
            // Div의 Next Comp에서 이동하는 경우..
            if (!bSearchFromLast)
            {
                if (this instanceof nexacro.PopupDiv)
                    next = this._getTabOrderLast(bAccessibility);
                else if (this.parent._is_form)
                    ret = this.parent._searchPrevTabFocus(this, undefined, undefined, bAccessibility, bhotkey);
                else
                    ret = null;
            }

            if (!ret)
            {
                next = this._getTabOrderLast(bAccessibility);
                if (!next && ret !== null)
                {
                    if (bAccessibility && opt_container_focus && this._checkContainerTabFocus() == true)
                        ret = [this];
                    else if (this.parent._is_form)
                        ret = this.parent._searchPrevTabFocus(this, undefined, undefined, bAccessibility, bhotkey);
                    else
                        ret = null;
                }
            }
        }

        if (next && !ret)
        {
            var next_tabstop_childs = (next._is_form ? next._getSortedDecendants(next, undefined, bAccessibility) : null);
            var next_tabstop_child_cnt = next_tabstop_childs ? next_tabstop_childs.length : 0;

            if (next._is_form && next_tabstop_child_cnt > 0)
                ret = next._searchPrevTabFocus(null, true, undefined, bAccessibility, bhotkey);
            else
                ret = [next];
        }

        return ret;
    };


    _pFormBase._searchPrevHeadingFocus = function (current, bSearchFromLast, opt_force_cycle)
    {
        var opt_cycle = (opt_force_cycle == undefined) ? (application._tabkeycirculation == 0) : opt_force_cycle;
        var opt_container_focus = nexacro._enableaccessibility;

        var temp, ret, next;
        var my_tapstop_childs = this._getSortedDecendants(this, undefined, true);
        var my_tabstop_child_cnt = my_tapstop_childs ? my_tapstop_childs.length : 0;
        if (my_tabstop_child_cnt && current && !bSearchFromLast)
        {
            next = this._getHeadingOrderNext(current, -1);

            // PopupDiv 내부 순환
            if (opt_cycle && !next && this._isPopupVisible())
                next = this._getHeadingOrderLast();
            if (!next)
            {
                // 한바퀴 다 돈 경우
                var parent_tabstop_childs = this.parent._getSortedDecendants(this.parent, undefined, true);
                var parent_tabstop_child_cnt = parent_tabstop_childs ? parent_tabstop_childs.length : 0;
                var parent_comps = this.parent.components;
                if (opt_cycle == false && (this.parent._is_frame || this._is_window))
                    ret = [null, this, -1];
                else if (opt_container_focus && this._type_name == "Tabpage")
                    ret = [this.parent];
                else if (opt_container_focus && this._checkContainerHeadingFocus() == true)
                    ret = [this];
                else if (this.parent._is_form && parent_tabstop_child_cnt > 0)
                    ret = this.parent._searchPrevHeadingFocus(this);
                else
                    next = this._getHeadingOrderLast();
            }
        }
        else
        {
            // Div인데 Child가 없거나, 
            // Div의 Next Comp에서 이동하는 경우..
            if (!bSearchFromLast)
            {
                if (this.parent._is_form)
                    ret = this.parent._searchPrevTabFocus(this);
                else
                    ret = null;
            }

            if (!ret)
            {
                next = this._getTabOrderLast();
                if (!next && ret !== null)
                {
                    if (this.parent._is_form)
                        ret = this.parent._searchPrevHeadingFocus(this);
                    else
                        ret = null;
                }
            }
        }

        if (next && !ret)
        {
            var next_tabstop_childs = (next._is_form ? next._getSortedDecendants(next, undefined, true) : null);
            var next_tabstop_child_cnt = next_tabstop_childs ? next_tabstop_childs.length : 0;
            if (next._is_form && next_tabstop_child_cnt > 0)
                ret = next._searchPrevHeadingFocus(null, true);
            else
                ret = [next];
        }

        return ret;
    };

    _pFormBase._processArrowKey = function (bdown, newfocus_comp)
    {
        if (newfocus_comp[0] instanceof nexacro.Form && newfocus_comp[0]._last_focused)
        {
            var win = this._getWindow();
            win._removeFromCurrentFocusPath(newfocus_comp[0]._last_focused);
        }
        var dir = 2;
        if (!bdown)
            dir = 3;
        newfocus_comp[0]._setFocus(true, dir, false);
        if (application.accessibilityfirstovertext && newfocus_comp[0] == this._getTabOrderFirst())
        {
            var comp = newfocus_comp[0];
            var _label = comp._getAccessibilityReadLabel() + " " + application.accessibilityfirstovertext;
            comp.getElement().notifyAccessibility(_label, "focus");
        }
        else if (application.accessibilitylastovertext && newfocus_comp[0] == this._getTabOrderLast())
        {
            var comp = newfocus_comp[0];
            var _label = comp._getAccessibilityReadLabel() + " " + application.accessibilitylastovertext;
            comp.getElement().notifyAccessibility(_label, "focus");
        }
    };

    _pFormBase._processHotkey = function (keycode, altKey, ctrlKey, shiftKey, obj)
    {
        // for tab
        var parent = null;
        if (obj) parent = obj.parent;

        // hotkey는 mainform에 등록됨.
        // this가 form이 아닌경우 있음(form을 상속받은 component인경우)
        var _form = this._getMainForm();
        var hotkey_list = _form ? _form._hotkey_list : this._hotkey_list;
        for (var i = 0; i < hotkey_list.length; i++)
        {
            var hotkey_info = hotkey_list[i];
            if (hotkey_info[1] == keycode &&
                hotkey_info[2] == altKey &&
                hotkey_info[3] == ctrlKey &&
                hotkey_info[4] == shiftKey)
            {
                var comp = hotkey_info[0];
                // for tab(현재 보이는 tabpage의 component hotkey가 동작되어야함)
                //if (parent && parent instanceof nexacro.Tabpage && obj != comp && comp.parent instanceof nexacro.Tabpage)
                if (comp.parent instanceof nexacro.Tabpage)
                {
                    if (comp.parent._index != comp.parent.parent.tabindex)
                    {
                        continue;
                    }
                }

                /**
                    같은 hotkey로 여러개가 등록되어있을때, 현재 포커스된 위치의 단축키를 동작시킨다.
                    [hotkey 동작 순서]
                    1. 현재 포커스된 콤포넌트의 hotkey
                    2. 포커스된 콤포넌트와 같은 부모를 가진 콤포넌트의 hotkey (먼저 등록된 순)
                    3. 먼저 등록된 hotkey
                 */
                if (obj && comp && comp.parent)
                {
                    if (obj.name != comp.name || obj.parent.name != comp.parent.name)
                    {
                        var ctflag = false;
                        for (var j = (i + 1) ; j < hotkey_list.length; j++)
                        {
                            if ((obj.name == hotkey_list[j][0].name && obj.parent.name == hotkey_list[j][0].parent.name) ||
                                (hotkey_list[j][0].parent && obj.parent == hotkey_list[j][0].parent && hotkey_list[j][0].enable))
                            {
                                i = (j - 1);
                                j = hotkey_list.length;
                                ctflag = true;
                            }
                        }
                        if (ctflag) continue;
                    }
                }

                if (!comp.enable) continue;

                var p = comp.parent;
                do
                {
                    if (p instanceof nexacro.FormBase)
                        break;

                    p = p.parent;
                } while (p);

                if (!p.enable) return true;


                comp._on_hotkey(keycode, altKey, ctrlKey, shiftKey);
                return true;
            }
        }

        // Modal인 경우만 return 하도록.. Modeless는 허용.
        if (this._is_frame && this._is_window && (this._window_type == 1 || this._window_type == 4))
            return;

        var owner_frame = this.getOwnerFrame();
        if (owner_frame)
        {
            return owner_frame._processHotkey(keycode, altKey, ctrlKey, shiftKey);
        }
    };

    _pFormBase._appendBeforeCloseMsg = function (current_message, new_message)
    {
        if (typeof (new_message) == "boolean")
            new_message = nexacro._toString(new_message);
        
        if (new_message === undefined || new_message == "" || new_message === null)
            return current_message;

        if (current_message === undefined || current_message === null)
            current_message = "";
        else if (current_message != "")
            current_message += "\n";

        return (current_message + new_message);
    };

    _pFormBase._checkAndConfirmClose = function (confirm_message)
    {
        if (confirm_message === undefined || confirm_message == "" || confirm_message === null)
            return true;

        if (this._window && this._window._ignore_close_confirm)
            return true;

        return nexacro._confirm(this, confirm_message);
    };
    
    _pFormBase._onResetScrollBar = function ()
    {
        if (!this._is_scrollable) return;

        var control_elem = this._control_element;
        if (control_elem)
        {
            var new_hbar = false;
            var new_vbar = false;

            var scroll_default_size = nexacro.Component.SCROLLBAR_DEFAULT_SIZE;
            var hscroll_size = scroll_default_size;
            var vscroll_size = scroll_default_size;

            // check scrollbar's visible/enable
            var show_type = 0; // 0: none, 1:auto, 2:fix, 3:always show, 4:overlap
            var bShowVScroll = false;
            var bShowHScroll = false;

            var scrollbars = this._scrollbars;
            if (this.getStepCount() > 0 && 
                (scrollbars == 0 || scrollbars == 1 || scrollbars == 4 || scrollbars == 16))
                scrollbars = 2;

            switch (scrollbars)
            {
                case 0:
                    // nexacro.ScrollBar.SCROLLTYPE_NONE
                    break;
                case 1:
                    // nexacro.ScrollBar.SCROLLTYPE_AUTOVERT
                    bShowVScroll = true;
                    show_type = 1;
                    break;
                case 2:
                    // nexacro.ScrollBar.SCROLLTYPE_AUTOHORZ
                    bShowHScroll = true;
                    show_type = 1;
                    break;
                case 3:
                    // nexacro.ScrollBar.SCROLLTYPE_AUTOBOTH
                    bShowVScroll = true;
                    bShowHScroll = true;
                    show_type = 1;
                    break;
                case 4:
                    // nexacro.ScrollBar.SCROLLTYPE_FIXEDVERT
                    bShowVScroll = true;
                    show_type = 2;
                    break;
                case 8:
                    // nexacro.ScrollBar.SCROLLTYPE_FIXEDHORZ
                    bShowHScroll = true;
                    show_type = 2;
                    break;
                case 12:
                    // nexacro.ScrollBar.SCROLLTYPE_FIXEDBOTH
                    bShowVScroll = true;
                    bShowHScroll = true;
                    show_type = 2;
                    break;
                case 16:
                    // nexacro.ScrollBar.SCROLLTYPE_ALWAYSVERT
                    bShowVScroll = true;
                    bShowHScroll = true;
                    show_type = 31;
                    break;
                case 32:
                    // nexacro.ScrollBar.SCROLLTYPE_ALWAYSHORZ
                    bShowVScroll = true;
                    bShowHScroll = true;
                    show_type = 32;
                    break;
            }

            if (bShowHScroll && !this.hscrollbar)
            {                
                this.hscrollbar = this._createHScrollBar(scroll_default_size);
                if (this.hscrollbar.scrollbarsize > 0)
                {
                    hscroll_size = this.hscrollbar.scrollbarsize;
                    this.hscrollbar.resize(control_elem.client_width, hscroll_size);
                }
                new_hbar = true;
            }
            else if (bShowHScroll && this.hscrollbar)
            {
                if (this.hscrollbar.scrollbarsize > 0)
                {
                	hscroll_size = this.hscrollbar.scrollbarsize;
                    this.hscrollbar.resize(control_elem.client_width, hscroll_size);
                    control_elem._hscroll_height = hscroll_size;
                }
            }
            else if (!bShowHScroll && this.hscrollbar)
            {
                this.hscrollbar.destroy();
                this.hscrollbar = null;
            }

            if (bShowVScroll && !this.vscrollbar)
            {
                this.vscrollbar = this._createVScrollBar(scroll_default_size);
                if (this.vscrollbar.scrollbarsize > 0)
                {
                    vscroll_size = this.vscrollbar.scrollbarsize;
                    this.vscrollbar.resize(vscroll_size, control_elem.client_height);
                }
                new_vbar = true;
            }
            else if (bShowVScroll && this.vscrollbar)
            {
                if (this.vscrollbar.scrollbarsize > 0)
                {
                	vscroll_size = this.vscrollbar.scrollbarsize;
                    this.vscrollbar.resize(vscroll_size, control_elem.client_height);
                    control_elem._vscroll_width = vscroll_size;
                }
            }
            else if (!bShowVScroll && this.vscrollbar)
            {
                this.vscrollbar.destroy();
                this.vscrollbar = null;
            }
            
            control_elem.setScrollControls(this.hscrollbar, this.vscrollbar, hscroll_size, vscroll_size, show_type);

            if (new_hbar || this.getStepCount() > 0)
            {
                this.hscrollbar.createComponent();
            }
            if (new_vbar)
            {
                this.vscrollbar.createComponent();
            }

            if (control_elem._handle)
            {
                if (this.hscrollbar && !this.hscrollbar._is_created)
                    this.hscrollbar.on_created();
                if (this.vscrollbar && !this.vscrollbar._is_created)
                    this.vscrollbar.on_created();
            }

            this._updateClientSize(control_elem);
        }
    };
    
    delete _pFormBase;

    //==============================================================================
    // nexacro.Form Style 정의 
    //==============================================================================
    nexacro.Form_Style = function (target)
    {
        nexacro.Style.call(this, target);
    };

    var _pFormStyle = nexacro._createPrototype(nexacro.Style, nexacro.Form_Style);
    nexacro.Form_Style.prototype = _pFormStyle;
    
    eval(nexacro._createAlignAttributeEvalStr("_pFormStyle", "stepalign"));
    eval(nexacro._createValueAttributeEvalStr("_pFormStyle", "stepshowtype"));

    // custom Part
    _pFormStyle.__custom_emptyObject = function ()
    {
        this.stepalign = null;
        this.stepshowtype = null;
    };
    _pFormStyle.__get_custom_style_value = function ()
    {
        var val = "";
        if (this.stepalign && !this.stepalign._is_empty) val += "stepalign:" + this.stepalign._value + "; ";
        if (this.stepshowtype && !this.stepshowtype._is_empty) val += "stepshowtype:" + this.stepshowtype._value + "; ";
        return val;
    };

    //---------------------------------------------------------------
    nexacro.Form_CurrentStyle = function ()
    {
        nexacro.CurrentStyle.call(this);
        this.stepalign = null;
        this.stepshowtype = null;
    };

    var _pFormCurrentStyle = nexacro._createPrototype(nexacro.CurrentStyle, nexacro.Form_CurrentStyle);
    nexacro.Form_CurrentStyle.prototype = _pFormCurrentStyle;
       

    _pFormCurrentStyle.__custom_emptyObject = _pFormStyle.__custom_emptyObject;
    _pFormCurrentStyle.__get_custom_style_value = _pFormStyle.__get_custom_style_value;

    // end of Button Style
    delete _pFormStyle;;
    delete _pFormCurrentStyle;


    //==============================================================================
    // nexacro.Form
    //==============================================================================
    nexacro.Form = function (id, position, left, top, width, height, right, bottom, parent)
    {
        nexacro.FormBase.call(this, id, position, left, top, width, height, right, bottom, parent, true);

        // property
        this.inheritanceid = "";
        this.layout = ""; // layout
        this.opener = null; // read only
        this.resizebutton = null; // read only
        this.statustext = "";
        this.titletext = "";
        this.classname = "";
        this.cachelevel = "";
        this.version = "";
        this.layoutautofittype = undefined;
        this.locale = "";

        /* event list */
        this._event_list = {
            "onclick": 1, "ondblclick": 1, "onkillfocus": 1, "onsetfocus": 1,
            "onkeypress": 1, "onkeydown": 1, "onkeyup": 1,
            "onlbuttondown": 1, "onlbuttonup": 1, "onrbuttondown": 1, "onrbuttonup": 1,
            "onmouseenter": 1, "onmouseleave": 1, "onmousemove": 1, "onmousewheel": 1,
            "ondrag": 1, "ondragenter": 1, "ondragleave": 1, "ondragmove": 1, "ondrop": 1,
            "onmove": 1, "onsize": 1,
            //"ongesture": 1,
            "ontouch": 1,
            //added event
            "onvscroll": 1, "onhscroll": 1, "onactivate": 1, "onbeforeclose": 1,
            "onclose": 1, "ondeactivate": 1, "onsyscommand": 1, "ontimer": 1, "oninit": 1, "onload": 1,
            "canlayoutchange": 1, "canstepchange": 1, "onlayoutchanged": 1, "onstepchanged": 1,
            "ondevicebuttonup": 1,
            // Touch,TouchGesture
            "ontouchstart": 1, "ontouchmove": 1, "ontouchend": 1,
            "ontap": 1, "ondbltap": 1, "onpinchstart": 1, "onpinch": 1, "onpinchend": 1,
            "onflingstart": 1, "onfling": 1, "onflingend": 1,
            "onlongpress": 1, "onslidestart": 1, "onslide": 1, "onslideend": 1, "onzoom": 1,

            "onorientationchange": 1
        };

        /* internal variable */
        this._url = "";
        this._init_width = 0;
        this._init_height = 0;
        this._defaultbutton = null;
        this._escapebutton = null;
        this._accessibility_role = "form";//Accessibility      
        this._zoomFactor = undefined;
        this._autofittedZoomFactor = undefined;

        this._is_init = true;
        this._is_closing = false;

    };

    var _pForm = nexacro._createPrototype(nexacro.FormBase, nexacro.Form);
    nexacro.Form.prototype = _pForm;

    // overide nexacro.Object
    _pForm._type_name = "Form";

    nexacro.Form_default_stepshowtype = nexacro._getCachedStyleObj("stepshowtype", "always");

    //==============================================================================
    // nexacro.Form : Style Part
    //==============================================================================
    _pForm.on_create_custom_style = function ()
    {
        return new nexacro.Form_Style(this);
    };

    _pForm.on_create_custom_currentStyle = function ()
    {
        return new nexacro.Form_CurrentStyle();
    };

    _pForm.on_apply_custom_pseudo = function (pseudo)
    {
        var curstyle = this.currentstyle;
        var stepalign = this.on_find_CurrentStyle_stepalign(pseudo);
        if (curstyle.stepalign != stepalign)
        {
            curstyle.stepalign = stepalign;
            this.on_apply_style_stepalign(stepalign);
        }

        var stepshowtype = this.on_find_CurrentStyle_stepshowtype(pseudo);
        if (curstyle.stepshowtype != stepshowtype)
        {
            curstyle.stepshowtype = stepshowtype;
            this.on_apply_style_stepshowtype(stepshowtype);
        }
    };

    _pForm.on_apply_custom_css = function (pseudo)
    {
        var components = this.components;
        if (components)
        {
            for (var i = 0; i < components.length; i++)
            {
                var comp = components[i];
                comp.on_apply_prop_class(comp[i], pseudo);
            }
        }
    };
    //---------------------------------------------------------------
    _pForm.on_find_CurrentStyle_stepalign = function (pseudo)
    {
        var align = this._find_pseudo_obj("stepalign", pseudo, "align");
        return align ? align : nexacro.Component._default_step_align;
    };
    _pForm.on_find_CurrentStyle_stepshowtype = function (pseudo)
    {
        var stepshowtype = this._find_pseudo_obj("stepshowtype", pseudo, "value");
        return stepshowtype || nexacro.Form_default_stepshowtype;
    };

    //---------------------------------------------------------------
    _pForm.on_update_style_stepalign = function ()
    {
        var align = this.on_find_CurrentStyle_stepalign(this._pseudo);
        this.currentstyle.stepalign = align;
        this.on_apply_style_stepalign(align);
    };

    _pForm.on_update_style_stepshowtype = function ()
    {
        var showtype = this.on_find_CurrentStyle_stepshowtype(this._pseudo);
        this.currentstyle.stepshowtype = showtype;
        this.on_apply_style_stepshowtype(showtype);
    };

    _pForm.on_apply_style_stepalign = function (stepalign)
    {
        var control_elem = this.getElement();
        var step_ctrl = this.stepcontrol;
        if (control_elem && step_ctrl)
        {
            var form_left = this._adjust_left;
            var form_top = this._adjust_top;
            var btn_size = step_ctrl._getButtonSize();
            var btn_area = step_ctrl._getButtonAreaSize(step_ctrl.stepcount, btn_size);

            var halign = stepalign.halign;
            var valign = stepalign.valign;
            var left, top;

            switch (halign)
            {
                case "left":
                    left = 0;
                    break;
                case "center":
                    left = (this._adjust_width - btn_area.width) / 2;
                    break;
                case "right":
                    left = this._adjust_width - btn_area.width;
                    break;
            }

            switch (valign)
            {
                case "top":
                    top = 0;
                    break;
                case "middle":
                    top = (this._adjust_height - btn_area.height) / 2;
                    break;
                case "bottom":
                    top = this._adjust_height - btn_area.height;
                    break;
            }

            step_ctrl.move(left, top, btn_area.width, btn_area.height, null, null);
        }
    };

    _pForm.on_apply_style_stepshowtype = function (stepshowtype)
    {
        var stepcontrol = this.stepcontrol;
        if (stepcontrol && stepshowtype)
        {
            var type = stepshowtype.value;
            switch (type)
            {
                case "action":
                    stepcontrol.set_visible(false);
                    break;
                case "always":
                default:
                    stepcontrol.set_visible(true);
                    break;
            }
        }
    }

    _pForm.on_get_style_accessibility_label = function ()
    {
        return this.titletext;
    };

    // tabstop 대상이 되는 컴포넌트 Sort시 호출된다.
    // form계열은 true여도 자기자신이 tabstop이 아닐수도 있다. (child중에 있는경우)
    _pForm.on_get_prop_tabstop = function ()
    {
        /*
        // 인터페이스 이름과 용도가 이상함. 2013.12.09 neoarc
        if (!this.tabstop)
            return false;
        else
        {
                // 나 자신이 tabstop 대상은 아니지만, 내부로 진입 가능한 상황
                // 내부에 Div가 계속 있는 경우 재귀호출된다.

                // 나 자신을 Sorting 대상에 포함시켜야 내부로 진입할수 있다.
                // 나 자신이 걸러지는 로직은 searchNext/PrevTabFocus API 내부에서 처리.
                    return true;
            //var my_tabstop_childs = this._getSortedDecendants(this);
            //if (my_tabstop_childs && my_tabstop_childs.length > 0)
            //    return true;
        }
        */  //2014.11.12 포커스 구조변경으로 주석처리 예외상황에 대비해 남겨둠- Snare 

        return this.tabstop;
    };


    //===============================================================
    // nexacro.Form : Create & Destroy & Update
    //===============================================================
    _pForm.on_created = function (_window)
    {
        var ret = nexacro.FormBase.prototype.on_created.call(this, _window);

        // form autofit 처리
        // Desktop은 autofit 대상 제외 (항상)
        if (!nexacro._isDesktop() && this.parent && this.parent._is_frame && this.parent.form == this)
        {
            this._fitLayoutToParent();
        }

        return ret;
    };

    _pForm.on_update_position = function (resize_flag, move_flag)
    {
        var control_elem = this._control_element;
        if (control_elem)
        {
            control_elem.setElementPosition(this._adjust_left, this._adjust_top);

            if (resize_flag)
            {
                // form의 크기가 바뀌는 시점에 right,bottom 또는 % 좌표를 사용하는 child가 있을경우
                // 정렬 전에 scrollbar가 생길지 여부를 확정할 수가 없다.
                // (nexacro platform의 element는 max offset 값만 관리하기 때문에)
                
                // scrollbar가 생길지의 여부만 판단하기 위해 100% 기준 100% 이하인 값을 빼고
                // 최대 container size를 계산한다.

                // 무조건 리셋할것이 아니고 미리 계산할 방법이 필요하다..
                //control_elem.container_maxwidth = 0;
                //control_elem.container_maxheight = 0;
                var val = this._calcScrollMaxSize();
                control_elem.container_maxwidth = val.w;
                control_elem.container_maxheight = val.h;
            }

            // elem.setElementSize
            //    elem._updateClientSize 를 수행
            //    -> elem._inner_width와 elem.container_maxwidth 등을 통해
            //       스크롤바가 보일지 여부, client size 조절
            //       스크롤바 크기 결정
            //       스크롤 정보 설정
            control_elem.setElementSize(this._adjust_width, this._adjust_height); // <-스크롤 갱신			

            // _updateClientSize
            //    client 크기 갱신 (element기준으로)
            //    child 컴포넌트 move처리 (adjustPosition 수행됨)
            //    _onRecalcScrollSize 호출
            //    -> 내 client 크기
            this._updateClientSize(control_elem);

            if (move_flag)
            {
                this.on_fire_onmove(this._adjust_left, this._adjust_top);
            }
            if (resize_flag)
            {
                this.on_fire_onsize(this._adjust_width, this._adjust_height);
            }
        }
    };

    _pForm.on_change_containerRect = function (width, height)
    {        
        var _move_scroll = false;
        var comps = this.components;        
        if (nexacro.OS == "Android" && this.vscrollbar && this.vscrollbar.visible)
        {
            _move_scroll = true;
            var comp_bottom;
            var comp_scroll_pos;
            var last_comp = this._getLastFocused();
            var form_bottom = this.getOffsetBottom();
        }

        // 바뀐 client크기로 모든 child comp를 업데이트
        for (var i = 0, n = comps.length; i < n; i++)
        {
            var comp = comps[i];
            var control_elem = comp.getElement();
            if (control_elem)
            {                
                if (_move_scroll && comp instanceof nexacro.Edit)
                {   
                    comp_bottom = comp.getOffsetBottom();
                    comp_scroll_pos = comp_bottom - form_bottom;                    
                    if (this.vscrollbar.pos < comp_scroll_pos && form_bottom < comp_bottom && last_comp == comp)                    
                    {                        
                        this.vscrollbar.set_pos(comp_scroll_pos);                        
                    }
                }
                comp.move(comp.left, comp.top, comp.width, comp.height, comp.right, comp.bottom);
            }
        }

        if (this.stepcontrol)
        {
            this._updateStepControlSize();
        }
        this._onRecalcScrollSize();
    };



    //===============================================================
    // nexacro.Form : Load
    //===============================================================
    //ie6 에서 cache되어 있는 화면을 가져올때 sync 처럼 동작하는 현상이 있어
    //application의 onload event 후에 form의 onload event를 발생시키기 위해 
    //application에 onload event 후에 호출할 form callbacklist를 달아놓는다.

    _pForm._on_load = function (obj, url)
    {
        if (!this._load_callbacklist) return;

        var parent_foraddcallback = this.parent;
        if (this.parent && this.parent.form == this)
        {
            parent_foraddcallback = application;  //childframe의 경우만 application에 추가하고 나머지는 parent form에 추가
        }

        if (parent_foraddcallback && parent_foraddcallback._addLoadCallbacklist)
        {
            var pthis = this;
            var ret = parent_foraddcallback._addLoadCallbacklist({ target: pthis, callback: pthis._on_loadcallback, url: this.url });
            if (!ret)
            {
                this._on_loadcallback(obj, url);
            }
        }

    };

    _pForm._addLoadCallbacklist = function (item)
    {
        if (!this._is_loaded && this._url && this._url.length > 0)  //parent가 contents인 경우에 처리 
        {
            if (!this.parent._load_callbacklist)
                this.parent._load_callbacklist = [];
            this._load_callbacklist.push(item);
            return true;
        }
        return false;
    };


    _pForm._on_loadcallback = function (obj, url)
    {
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
                    item.callback.call(target, target, url);
            }
            callbacklist.splice(0, n);
        }

        if (this.binds)
        {
            for (var i = 0; i < this.binds.length; i++)
            {
                this.binds[i].bind();
            }
        }
        this.on_fire_oninit(this);
        this.createComponent(true);

        var _window;
        if (!this._is_created)
        {
            _window = this._getWindow();
            this.on_created(_window);
        }

        var ret = this.on_fire_onload(obj, url);
        // focus와 상관없이 load되는 경우 activate가 되야 함. 
        if (!(this instanceof nexacro.Tabpage))
        {
            this._on_activate();
        }

        // for setfocus
        var parent = this.parent;
        if (parent)
        {
            if (parent._is_frame && parent.form == this)
            {
                // ChildFrame > Form
                parent._createdForm();
                application._notifyLoadforms(this);
            }
            else
            {  
                if (!_window)
                    _window = this._getRootWindow();

                if (_window && _window.frame && _window.frame._activate == true)
                {
                    var cur_focus_paths = _window.getCurrentFocusPaths();
                    if (cur_focus_paths && nexacro._indexOf(cur_focus_paths, this) > -1)
                    {
                        if (this instanceof nexacro.Tabpage)
                        {
                        this._on_activate();
                        }

                        // TODO API로?
                        if (nexacro._enableaccessibility && nexacro._accessibilitywholereadtype > 1)
                        {
                            // Focus를 Div로 유지
                            this._setFocus();
                            this._playAccessibilityWholeReadLabel("wholeread");
                        }
                        else
                        {
                            // Focus를 Div의 First TabOrder까지 진입
                            this._on_focus(true);
                        }
                    }
                    else if (nexacro._enableaccessibility && nexacro._accessibilitywholereadtype > 1 && this instanceof nexacro.Div)
                    {
                        this._playAccessibilityWholeReadLabel("wholeread");
                    }
                }
            }
        }
        return ret;
    };

    //==============================================================================
    // nexacro.Form : Properties
    //==============================================================================
    _pForm.set_opener = nexacro._emptyFn;

    _pForm.set_inheritanceid = function (v)
    {
        //To Do
    };

    _pForm.set_layout = function (v)
    {
        //To Do
    };

    _pForm.set_statustext = function (v)
    {
        if (this.parent && this.parent._is_frame)
        {
            if (this.statustext != v)
            {
                this.statustext = v;
                this.parent._applyStatusText();
            }
        }
    };

    _pForm.set_titletext = function (v)
    {

        this._setAccessibilityLabel(v);

        if (this.parent && this.parent._is_frame)
        {
            if (this.titletext != v)
            {
                this.titletext = v;
                this.parent._applyTitleText();
            }
        }
    };

    _pForm.set_classname = function (v)
    {
        return; //cssclass와는 무관하므로 막아야 하나 툴에서 넣어주고 있어 일단 임시로 리턴만 넣겠음.;

        if (this.classname != v)
        {
            this.classname = v;
        }
    };

    _pForm.set_cachelevel = function (v)
    {
        //To Do
    };

    _pForm.set_version = function (v)
    {
        //To Do
        ;
    };

    /*
    none : 동작안함
    vert : 수직방향으로만 동작
    horz : 수평방향으로만 동작
    both : 수직,수평방향으로만 동작
    all  : 수직,수평,대각선 방향 모두 동작 (default)
    */
    _pForm.set_dragscrolltype = function (v)
    {
        var enums = ["none", "vert", "horz", "both", "all"];
        if (this.dragscrolltype != v)
        {
            if (nexacro._indexOf(enums, v) >= 0)
            {
                this.dragscrolltype = v;
            }
            else
            {
                // TODO Error 잘못된 값
            }
        }
    };

    _pForm.set_layoutautofittype = function (v)
    {
        this.layoutautofittype = v;
    };

    _pForm.on_apply_prop_enable = function (v)
    {
        nexacro.Component.prototype.on_apply_prop_enable.call(this, v);

        var comps = this.components;

        for (var i = 0, n = comps.length; i < n; i++)
        {
            var comp = comps[i];            
            comp._setEnable(v);            
        }
    };

    _pForm.on_apply_prop_rtldirection = function ()
    {
    	nexacro.Component.prototype.on_apply_prop_rtldirection.call(this);

    	var control_elem = this._control_element;
    	if (control_elem)
    	{
    		this.on_change_containerRect(control_elem.client_width, control_elem.client_height);
    	}

    	var comps = this.components;
    	var _rtldirection = this._rtldirection;

    	for (var i = 0, n = comps.length; i < n; i++)
    	{
    		var comp = comps[i];
    		if (comp._is_form)
    		{
    			comp.on_apply_prop_rtldirection(_rtldirection);
    		}
    		comp._setRtlDirection(_rtldirection);
    	}
    };

    _pForm.set_locale = function (v)
    {
    	if (v != this.locale)
    	{
    	    this.locale = v;
    	    if (this._locale != v)
    	    {
    	        this._locale = v;
    	        this.on_apply_locale();
    	    }
    	}
    };

    _pForm.on_apply_locale = function ()
    {
    	var comps = this.components;

    	for (var i = 0, n = comps.length; i < n; i++)
    	{
    		var comp = comps[i];
    		comp._setLocale(this._locale);
    	}
    };

    //===============================================================
    // nexacro.Form : Event Handlers
    //===============================================================

    _pForm.on_fire_sys_onrbuttonup = function (button, alt_key, ctrl_key, shift_key, screenX, screenY, canvasX, canvasY, clientX, clientY, from_comp, from_refer_comp) // 2013-09-04 pss - eventflow 
    {
        var ret = nexacro.Component.prototype.on_fire_sys_onrbuttonup.call(this, button, alt_key, ctrl_key, shift_key, screenX, screenY, canvasX, canvasY, clientX, clientY, from_comp, from_refer_comp);

        if (application._quickview_mode && ret !== true && this.parent instanceof nexacro.ChildFrame)
        {
			//Edit류는 contextmenu를 띄워야 하기 땜에 quickview메뉴를 띄우지 않도록 수정.
			if(from_refer_comp && !from_refer_comp._input_element)
				return nexacro._showQuickviewMenu(this, screenX, screenY);
        }
        return ret;
    };


    _pForm.on_fire_oninit = function (obj)
    {
        if (this._is_init && this.oninit && this.oninit._has_handlers)
        {
            this._is_init = false;
            var evt = new nexacro.Event(obj, "oninit");
            return this.oninit._fireEvent(this, evt);
        }
        return true;
    };

    _pForm.on_fire_canstepchange = function (obj)
    {
        if (this.canstepchange && this.canstepchange._has_handlers)
        {
            var evt = new nexacro.StepChangeEventInfo(obj, "canstepchange", obj._prestepindex, obj._poststepindex);
            return this.canstepchange._fireCheckEvent(this, evt);
        }
    };

    _pForm.on_fire_onstepchanged = function (obj)
    {
        if (this.onstepchanged && this.onstepchanged._has_handlers)
        {
            var evt = new nexacro.StepChangeEventInfo(obj, "onstepchanged", obj._prestepindex, obj._poststepindex);
            return this.onstepchanged._fireEvent(this, evt);
        }
    };

    _pForm.on_fire_canlayoutchange = function (obj, eventid, curlayoutname, newlayoutname, curlayoutwidth, newlayoutwidth, curlayoutheight, newlayoutheight)
    {
        if (this.canlayoutchange && this.canlayoutchange._has_handlers)
        {
            var evt = new nexacro.LayoutChangeEventInfo(obj, eventid, curlayoutname, newlayoutname, curlayoutwidth, newlayoutwidth, curlayoutheight, newlayoutheight);
            return this.canlayoutchange._fireCheckEvent(this, evt);
        }
        return true;
    };

    _pForm.on_fire_onlayoutchanged = function (obj, eventid, curlayoutname, newlayoutname, curlayoutwidth, newlayoutwidth, curlayoutheight, newlayoutheight)
    {
        if (this.onlayoutchanged && this.onlayoutchanged._has_handlers)
        {
            var evt = new nexacro.LayoutChangeEventInfo(obj, eventid, curlayoutname, newlayoutname, curlayoutwidth, newlayoutwidth, curlayoutheight, newlayoutheight);
            return this.onlayoutchanged._fireEvent(this, evt);
        }
        return true;
    };

    _pForm.on_fire_onbeforelayoutchange = function (obj, eventid, curlayout, newlayout)
    {
        if (this.onbeforelayoutchange && this.onbeforelayoutchange._has_handlers)
        {
            var evt = new nexacro.LayoutChangeEventInfo(obj, eventid, curlayout, newlayout);
            return this.onbeforelayoutchange._fireEvent(this, evt);
        }
        return true;
    };

    _pForm.on_fire_onload = function (obj, url)
    {
        if (this.onload && this.onload._has_handlers)
        {
            this._bFireLoadEvent = true;
            var evt = new nexacro.LoadEventInfo(obj, "onload", url);
            var ret = this.onload._fireEvent(this, evt);
            this._bFireLoadEvent = false;
            evt.destroy();
            evt = null;
            return ret;
        }
        return true;
    };

    _pForm.on_fire_ondevicebuttonup = function (obj, e)
    {
        if (this.ondevicebuttonup && this.ondevicebuttonup._has_handlers)
        {
            var evt = new nexacro.DeviceButtonEventInfo(obj, e);
            return this.ondevicebuttonup._fireEvent(this, evt);
        }
        return true;
    };

    _pForm._on_devicebuttonup = function (e)
    {
        var ret = this.on_fire_ondevicebuttonup(this, e);
        if (!ret && this.parent && this.parent instanceof nexacro.Form)
            return this.parent._on_devicebuttonup(e);
        return ret;
    };


    _pForm.on_fire_user_onkeydown = function (keycode, alt_key, ctrl_key, shift_key, fire_comp, refer_comp)
    {
        if (!this._is_alive)
            return;

        var focusedComp = refer_comp; // 이미 focus가 옮겨갔을 수 있기때문에 refer_comp


        // TODO check Tab,Enter,Esc는 keydown보다 먼저 처리되어야 하는것이 아닌지? (PretranslateMsg)
        if (!focusedComp)
            focusedComp = this.getFocus();
        if (!focusedComp)
            focusedComp = this;
        if (focusedComp)
        {
            // Pass SubControl
            focusedComp = focusedComp._getRootComponent(focusedComp);
        }

        var dlgc = focusedComp._getDlgCode(keycode, alt_key, ctrl_key, shift_key);

        if (keycode == nexacro.Event.KEY_TAB)
        {
            if (dlgc.want_tab == false) // tab을 직접 처리하는 컴포넌트는 제외
            {
                var newfocus_comp;
                if (!shift_key)
                    newfocus_comp = this._searchNextTabFocus(this._last_focused, undefined, undefined, false);
                else
                    newfocus_comp = this._searchPrevTabFocus(this._last_focused, undefined, undefined, false);

                if (newfocus_comp && newfocus_comp[0])
                {
                    if (newfocus_comp[0] instanceof nexacro.Form && newfocus_comp[0]._last_focused)
                    {
                        var win = this._getWindow();
                        win._removeFromCurrentFocusPath(newfocus_comp[0]._last_focused);
                    }

                    // newfocus_comp가 최종 포커스 받을 대상이 된다.
                    // newfocus_comp가 Container Type인 경우, 내부 컴포넌트가 모두 포커스를 받을 수 없는
                    // 상황이다. 이 경우 더이상 내부로 진입시키면 안된다. -> block_inner_focus = true                   
                    newfocus_comp[0]._setFocus(true, (!shift_key ? 0 : 1), true);
                }
                else if (newfocus_comp && newfocus_comp[2] == -1)
                {
                    var comp = this._last_focused;
                    if (comp) //크롬에서 읽어주지 않아 3번째 파라미터 "notify"를 줌.
                    {
                        comp.getElement().notifyAccessibility(application.accessibilityfirstovertext);
                    }
                }
                else if (newfocus_comp && newfocus_comp[2] == 1)
                {
                    var comp = this._last_focused;
                    if (comp)
                    {
                        comp.getElement().notifyAccessibility(application.accessibilitylastovertext);
                    }

                }

                // focus 관리를 Frame Window 단위로 변경함 
                var root_window = this._getRootWindow();
                root_window._keydown_element._event_stop = true;

                return true; // bubble되어 또 호출되면 안됨. 
            }
        }
        else if (keycode == nexacro.Event.KEY_RETURN)
        {
            // Button에 Focus된 경우 Focus된 Button이 클릭되어야 함. 이 동작은 dlgcode로 처리 want_return=true
            if (dlgc.want_return == false)
            {
                if (this instanceof nexacro.Form)
                {
                    // TODO check 팝업 컴포넌트인경우 팝업되어있으면 Defaultbutton보다 우선으로 EnterKey를 받아야함.
                    //            Calendar,Combo,Menu,Grid
                    var is_popup = focusedComp._isPopupVisible(); // 팝업이고 팝업되어있는상태이면
                    if (!is_popup && this._defaultbutton && this._defaultbutton.enableevent && this._defaultbutton._isEnable())
                    {
                        // visible=false는 click제외 대상이 아님 
                        this._defaultbutton.click();
                    }
                }
            }
        }
        else if (keycode == nexacro.Event.KEY_ESC)
        {
            // Transcantion 취소 
            // -> 통신 취소가 되었을때는 EscapeButton을 처리하지 않아야 한다.

            // 현재 Window에 포함된 모든 Form,Div의 Transaction을 중단한다.
            if (nexacro._stopTransaction(this, 1) <= 0 && dlgc.want_escape == false)
            {
                if (this instanceof nexacro.Form)
                {
                    if (this._escapebutton && this._escapebutton.enableevent && this._escapebutton._isEnable())
                        this._escapebutton.click();
                }
            }
        }
        else if (nexacro._enableaccessibility && keycode == nexacro.Event.KEY_DOWN)// && !alt_key && !ctrl_key && !shift_key) // || keycode == nexacro.Event.KEY_UP)
        {
            //****  if (keycode == nexacro.Event.KEY_TAB) 윗부분과 동기화되어야됨
            if (dlgc.want_arrows == false) // tab을 직접 처리하는 컴포넌트는 제외
            {
                var newfocus_comp = this._searchNextTabFocus(this._last_focused, undefined, undefined, true);
                if (newfocus_comp && newfocus_comp[0])
                {
                    if (newfocus_comp[0] instanceof nexacro.Form && newfocus_comp[0]._last_focused)
                    {
                        var win = this._getWindow();
                        win._removeFromCurrentFocusPath(newfocus_comp[0]._last_focused);
                    }

                    newfocus_comp[0]._setFocus(true, 2, true);
                }
                // focus 관리를 Frame Window 단위로 변경함 
                var root_window = this._getRootWindow();
                root_window._keydown_element._event_stop = true;
                return true; // bubble되어 또 호출되면 안됨. 
            }
        }
        else if (nexacro._enableaccessibility && keycode == nexacro.Event.KEY_UP)// && !alt_key && !ctrl_key && !shift_key)
        {
            if (dlgc.want_arrows == false) // arrow를 직접 처리하는 컴포넌트는 제외
            {
                var newfocus_comp = this._searchPrevTabFocus(this._last_focused, undefined, undefined, true);
                if (newfocus_comp && newfocus_comp[0])
                {
                    if (newfocus_comp[0] instanceof nexacro.Form && newfocus_comp[0]._last_focused)
                    {
                        var win = this._getWindow();
                        win._removeFromCurrentFocusPath(newfocus_comp[0]._last_focused);
                    }

                    newfocus_comp[0]._setFocus(true, 3, true);
                }
                var root_window = this._getRootWindow();
                root_window._keydown_element._event_stop = true;
                return true; // bubble되어 또 호출되면 안됨. 
            }
        }

        var ret = nexacro.Component.prototype.on_fire_user_onkeydown.call(this, keycode, alt_key, ctrl_key, shift_key, this, refer_comp);

        // 후처리 해야 하는 항목 임. 상단의 enter, esc, hotkey의 처리는 논의후 처리 예정 
        if (!this.onkeydown || (this.onkeydown && !this.onkeydown.defaultprevented))
        {
            if (keycode == nexacro.Event.KEY_LEFT || keycode == nexacro.Event.KEY_RIGHT)
            {
                if (this.hscrollbar && this.hscrollbar.visible && ctrl_key == true)
                {
                    if (dlgc.want_arrows == false) // arrowkey를 직접 처리하는 컴포넌트는 제외
                    {
                        var line = this.hscrollbar.line;
                        if (line <= 0)
                            line = this.hscrollbar._linedown;
                        if (keycode == nexacro.Event.KEY_LEFT)
                            line *= -1;
                        this.hscrollbar.set_pos(this.hscrollbar.pos + line);
                        return true;
                    }
                }
            }
            else if (keycode == nexacro.Event.KEY_UP || keycode == nexacro.Event.KEY_DOWN)
            {
                if (this.vscrollbar && this.vscrollbar.visible && ctrl_key == true)
                {
                    if (dlgc.want_arrows == false) // arrowkey를 직접 처리하는 컴포넌트는 제외
                    {
                        var line = this.vscrollbar.line;
                        if (line <= 0)
                            line = this.vscrollbar._linedown;
                        if (keycode == nexacro.Event.KEY_UP)
                            line *= -1;

                        this.vscrollbar.set_pos(this.vscrollbar.pos + line);
                        return true;
                    }
                }
            }
        }

        return ret;
    };

    _pForm._on_activate = function ()
    {
        if (!this.parent)
            return;

        var owner_frame = this.getOwnerFrame();
        if (!owner_frame || !owner_frame._activate)
            return;

        nexacro.FormBase.prototype._on_activate.call(this);
    };

    _pForm._on_deactivate = function ()
    {
        if (!this.parent)
            return;

        var owner_frame = this.getOwnerFrame();
        if (!owner_frame || !owner_frame._activate)
            return;

        nexacro.FormBase.prototype._on_deactivate.call(this);
    };

    _pForm.on_vscroll = function (obj, e)
    {
        if (this.onvscroll && this.onvscroll._has_handlers)
        {
            e.fromobject = this;
            this.onvscroll._fireEvent(this, e);
        }

        var control_elem = this._control_element;
        if (control_elem)
        {
            control_elem.setElementVScrollPos(e.pos);
        }

        return true;
    };

    _pForm.on_hscroll = function (obj, e)
    {
        if (this.onhscroll && this.onhscroll._has_handlers)
        {
            e.fromobject = this;
            this.onhscroll._fireEvent(this, e);
        }

        var control_elem = this._control_element;
        if (control_elem)
        {
            control_elem.setElementHScrollPos(e.pos);
        }

        return true;
    };
   
    _pForm._on_orientationchange = function (orientation)
    {
        this.on_fire_onorientationchange(orientation);
    };

    _pForm.on_fire_onorientationchange = function (orientation)
    {
        if (this.onorientationchange && this.onorientationchange._has_handlers)
        {
            var evt = new nexacro.OrientationChangeEventInfo(this, "onorientationchange", orientation);
            this.onorientationchange._fireEvent(this, evt);
        }
    };
   
    //===============================================================
    // nexacro.Form : Methods
    //===============================================================

    _pForm.addChild = function (id, obj)
    {
        var ret = -1;

        if (id && id.length <= 0)
        {
            return -1; 
        }
        if (!obj)
        {
            throw nexacro.MakeReferenceError(this, "reference_not_define", id);
        }

        if (this[id])
        {
            throw nexacro.MakeNativeError(this, "native_exist_id", id);
        }

        obj.parent = this;
        obj._refform = this;

        this[id] = obj;
        this.all.add_item(id, obj);

        if (this.visible && !this._real_visible) obj._real_visible = false;
        else obj._real_visible = this.visible;

        if (obj._is_component)
        {
            ret = this.components.add_item(id, obj);
            this._child_list.push(obj);
            if (obj._is_alive && obj._is_created)
                this._control_element.appendChildElement(obj.getElement());

            obj._setRtlDirection(this._rtldirection);
        }
        else if (obj instanceof nexacro.BindItem)
        {
            ret = this.binds.add_item(id, obj);
        }
        else
        {
            ret = this.objects.add_item(id, obj);
        }
        return ret;
    };

    _pForm.resetScroll = function ()
    {
        this._onRecalcScrollSize();
        this._onResetScrollBar();
    };

    _pForm.close = function (arg)
    {
        if (this._is_closing) return;
        this._is_closing = true;
        // MainForm 만 허용
        if (!this.parent || !this.parent._is_frame)
            return;

        this.setWaitCursor(false, null);

        var childframe = this.parent;

        var confirm_message = childframe._on_beforeclose();
        if (childframe._checkAndConfirmClose(confirm_message) == false)
        {
            this._is_closing = false;
            return false;
        }

        // OpenWindow인 경우 이미 확인을 마친 상태
        if (childframe._window)
            childframe._window._ignore_close_confirm = true;

        childframe._on_close();

        if (typeof (arg) == "object")
            arg = null;

        if (this.parent) this.parent._closeForm(arg);
        this._is_closing = false;
    };

    _pForm.getFirstComponent = function (no_composite_flag)
    {
        if (no_composite_flag !== true) no_composite_flag = false;

        var first = this._getTabOrderFirst(false, false);
        if (no_composite_flag)
        {// allow composite component
            if (first._is_form)
                return first._getTabOrderFirst(false, false);
        }
        return first;
    };

    _pForm.getLastComponent = function (no_composite_flag)
    {
        if (no_composite_flag !== true) no_composite_flag = false;

        var last = this._getTabOrderLast(false, false);
        if (no_composite_flag)
        {// allow composite component
            if (last._is_form)
                return last._getTabOrderLast(false, false);
        }
        return last;
    };

    _pForm.getNextComponent = function (comp, no_composite_flag)
    {
        if (no_composite_flag !== true) no_composite_flag = false;
        
        var pThis = comp.parent;
        var next = pThis._getTabOrderNext(comp, 1, false, false);
        if (next == undefined) next = pThis.getFirstComponent(no_composite_flag, false, false);
        if (no_composite_flag) // allow composite component
        {
            pThis = next;
            if (next._is_form)
            {
                var next_c = next._getTabOrderNext(comp, 1, false, false);
                if (next_c)
                    return next_c;
                next_c = next._getTabOrderFirst(false, false);
                if (next_c)
                    return next_c;
            }
        }
        return next;
    };

    _pForm.getPrevComponent = function (comp, no_composite_flag)
    {
        if (no_composite_flag !== true) no_composite_flag = false;

        var pThis = comp.parent;
        var prev = pThis._getTabOrderNext(comp, -1, false, false);
        if (no_composite_flag) // allow composite component
        {
            pThis = prev;
            if (prev._is_form)
            {
                var prev_c = prev._getTabOrderNext(comp, -1, false, false);
                if (prev_c)
                    return prev_c;
                prev_c = prev._getTabOrderLast(false, false);
                if (prev_c)
                    return prev_c;
            }
        }
        return prev;
    };

    //Accessibility 관련 메서드
    _pForm.getFirstAccessibilityComponent = function (no_composite_flag)
    {
        if (no_composite_flag !== true) no_composite_flag = false;

        var first = this._getTabOrderFirst(true, false);
        if (!first._isAccessibilityEnable()) first = this.getNextAccessibilityComponent(first, no_composite_flag);
        if (no_composite_flag)
        {// allow composite component
            if (first._is_form)
                return first._getTabOrderFirst(true, false);
        }
        return first;
    };

    _pForm.getLastAccessibilityComponent = function (no_composite_flag)
    {
        if (no_composite_flag !== true) no_composite_flag = false;

        var last = this._getTabOrderLast(true, false);
        if (!last._isAccessibilityEnable()) last = this.getPrevAccessibilityComponent(last, no_composite_flag);
        if (no_composite_flag)
        {// allow composite component
            if (last._is_form)
                return last._getTabOrderLast(true,false);
        }
        return last;
    };

    _pForm.getNextAccessibilityComponent = function (comp, no_composite_flag)
    {
        if (no_composite_flag !== true) no_composite_flag = false;
        if (comp)
        {
            var pThis = comp.parent;
            var next = pThis._getTabOrderNext(comp, 1, true, false);
            if (next == undefined && !nexacro._enableaccessibility) next = pThis.getFirstComponent(no_composite_flag);
            if (no_composite_flag) // allow composite component
            {
                pThis = next;
                if (next._is_form)
                {
                    var next_c = next._getTabOrderNext(comp, 1, true, false);
                    if (next_c)
                        return next_c;
                    next_c = next._getTabOrderFirst(true, false);
                    if (next_c)
                        return next_c;
                }
            }
            return next;
        }
        return undefined;
    };

    _pForm.getPrevAccessibilityComponent = function (comp, no_composite_flag)
    {
        if (no_composite_flag !== true) no_composite_flag = false;

        if (comp)
        {
            var pThis = comp.parent;
            var prev = pThis._getTabOrderNext(comp, -1, true, false);
            if (prev == undefined && !nexacro._enableaccessibility) prev = pThis.getLastComponent(no_composite_flag);
            if (no_composite_flag) // allow composite component
            {
                pThis = prev;
                if (prev._is_form)
                {
                    var prev_c = prev._getTabOrderNext(comp, -1, true, false);
                    if (prev_c)
                        return prev_c;
                    prev_c = prev._getTabOrderLast(true, false);
                    if (prev_c)
                        return prev_c;
                }
            }
            return prev;
        }
        return undefined;
    };
    
    _pForm.getNextEditableComponent = function (comp, edittype, no_composite_flag)
    {
        if (no_composite_flag !== true)  no_composite_flag = false;
        if (comp)
        {
            var pThis = comp.parent;
            var next = pThis._getTabOrderNext(comp, 1, false, true, edittype, undefined, no_composite_flag);
            if (next == undefined) next = pThis._getTabOrderNext(comp, 1, false, true, "All", undefined, no_composite_flag);
            if (next == undefined) next = pThis.getFirstEditableComponent(edittype, no_composite_flag);

            return next;
        }
        return undefined;
    };

    _pForm.getPrevEditableComponent = function (comp, edittype, no_composite_flag)
    {
        if (no_composite_flag !== true) no_composite_flag = false;

        if (comp)
        {
            var pThis = comp.parent;
            var prev = pThis._getTabOrderNext(comp, -1, false, true, edittype, undefined, no_composite_flag);
            if (prev == undefined) prev = pThis._getTabOrderNext(comp, -1, false, true, "All", undefined, no_composite_flag);
            if (prev == undefined) prev = pThis.getLastEditableComponent(edittype, no_composite_flag);

            return prev;
        }
        return undefined;
    };

    _pForm.getFirstEditableComponent = function (edittype, no_composite_flag)
    {
        if (no_composite_flag !== true) no_composite_flag = false;

        var first = this._getTabOrderFirst(false, true, edittype, no_composite_flag);
        if (!first) first = this._getTabOrderFirst(false, true, "All", no_composite_flag);
        return first;
    };

    _pForm.getLastEditableComponent = function (edittype, no_composite_flag)
    {
        if (no_composite_flag !== true) no_composite_flag = false;

        var last = this._getTabOrderLast(false, true, edittype, no_composite_flag);
        if (!last) last = this._getTabOrderLast(false, true, "All", no_composite_flag);
        return last;
    };

    _pForm._getNextHeadingComponent = function (current)
    {
        var arcomp = this._searchNextHeadingFocus(current);
        if (arcomp)
            return arcomp[0];
    };

    _pForm._getPrevHeadingComponent = function (current)
    {
        var arcomp = this._searchPrevHeadingFocus(current);
        if (arcomp)
            return arcomp[0];
    };

    _pForm.getFocus = function ()
    {
        // TODO check 컴포넌트에서 사용하는곳이 있을지
        //return this._last_focused;

        // TODO Form내 focus를 얻는것이 아니고 Platform전체에서 Focus를 가진 컴포넌트를 리턴해야함.

        var last_focus = this._find_lastFocused();
        if (last_focus == null)
            return this;
        return last_focus;
    };

    _pForm.getZoom = function ()
    {
        var control_elem = this._control_element;
        if (control_elem && control_elem.getZoom)
        {
            return (this._zoomFactor !== undefined) ? this._zoomFactor : control_elem.getZoom();
        }

        return 100;
    };

    _pForm.setZoom = function (v)
    {
        var prevZoomFactor = this.getZoom();
        if (typeof v == "string" && v.charAt(v.length - 1) == "%")
            v = v.slice(0, v.length - 1);

        // autofit 처리시 정확히 fit하기 위해 실수값 허용으로 변경
        v = parseFloat(v);

        var control_elem = this._control_element;
        if (control_elem)
        {
            // 미리 child 정렬을 위해 값을 보관
            this._zoomFactor = v;
            
            // zoom을 수행하기 전에 zoom될 크기에 맞게 내부 컴포넌트를 재정렬한다.
            control_elem.container_maxwidth = 0;
            control_elem.container_maxheight = 0;
            control_elem.setElementScrollMaxSize(0, 0);
                        
            //this._adjust_width = 0;
            //this._adjust_height = 0;

            this._client_width = 0;
            this._client_height = 0;
            this._updateClientSize(control_elem);

            // zoom 및 scroll 정보 갱신
            control_elem.setZoom(v);
            nexacro._applyZoomEdge(control_elem, v);

            var popups = application._current_popups;
            var len = popups.length;
            for (var i = 0; i < len; i++)
            {
                if (this._contains(popups[i]))
                    popups[i].parent._applyZoomPopup();
            }
        }

        return prevZoomFactor;
    };

    _pForm.go = function (v)
    {
        if (this._url != v)
        {
            if (this._url != "")
            {
                var confirm_message = this._on_beforeclose();
                if (this._checkAndConfirmClose(confirm_message) == false)
                    return;
                this._on_close();
            }

            this._url = v;
            this._base_url = nexacro._getBaseUrl(v);
            this._apply_formurl();
        }
    };

    _pForm.hasPopupFrame = function ()
    {
        return false;
    };

    _pForm.insertChild = function (idx, id, obj)
    {
        if (id && id.length <= 0)
        {
            return -1; 
        }
        if (!obj)
        {
            return -1; 
        }
        if (this[id])
        {
            return -1; 
        }

        obj.parent = this;
        obj._refform = this;

        this[id] = obj;
        this.all.add_item(id, obj);
        if (obj._is_component)
        {
            ret = this.components.insert_item(idx, id, obj);
            this._child_list.push(obj);
        }
        else if (obj instanceof nexacro.BindItem)
        {
            ret = this.binds.insert_item(idx, id, obj);
        }
        else
        {
            ret = this.objects.insert_item(idx, id, obj);
        }

        // addChild는 스크롤을 자동으로 갱신하지 않음.
        // 사용자가 resetScroll을 호출했을때 갱신해야 함.
        // -> RecalcScroll 금지

        return ret;
    };

    _pForm.isValidObject = function (target)
    {
        if (typeof target == "string")
        {
            if (this[target]) return true;
        }
        else if (target instanceof Object)
        {
            var len = this.all.length;
            for (var i = 0; i < len; i++)
                if (this.all[i] == target) return true;
        }
        else
        {
            if (nexacro._indexOf(this.all, target) > -1) return true;
        }
        return false;
    };

    _pForm.killTimer = function (nTimerID)
    {
        this._timerManager.deleteTimer(nTimerID);
    };

    _pForm.setTimer = function (nTimerID, nElapse)
    {
        var timer = new nexacro.EventTimer(this, nTimerID, nElapse);
        timer.start();
    };

    _pForm.loadStyle = function (url, bclear)
    {
        if ((typeof (url) != "string") || url.length == 0)
        {
            return;
        }
        bclear = bclear == false ? false : true;
        var exceptcssselector = true;
        
        if (bclear)
        {
            exceptcssselector = false;
        }

        this._clearCssInfo(exceptcssselector)
            
        var base_url = this._base_url;
        var cssurl = [];
        cssurl.push(application._getServiceLocation(url, base_url));
        cssurl.push(".js");
           
        var service = application._getServiceObject(url);
        this._load_manager.reloadCssModule(cssurl.join(""), null, false, service);
        
        this._apply_formstyle(this);
    };

    _pForm.reload = function ()
    {
       
        var _win = this._getRootWindow();
        _win._removeFromCurrentFocusPath(this._last_focused, true);

        //이전 component의 focus를 가지면 안됨.
        var _win = this._getWindow();
        _win.clearCurrentFocusPaths();

        this._last_focused = null;

        // TODO check; Reload할때도 beforeclose,close 이벤트가 나가야 하나? 

        this._url = this.parent._formurl;
        this._base_url = nexacro._getBaseUrl(this._url);
        this._apply_formurl();
    };

    _pForm.removeChild = function (id)
    {
        if (!id || id.length <= 0)
        {
            return null;
        }
        if (!this[id])
        {
            return null;
        }
        var obj = this[id];

        if (obj._is_component)
        {
            var is_focused = false;
            var _window = this._getWindow();
            if (_window)
                is_focused = (_window._indexOfCurrentFocusPaths(obj) > -1);
                        
            // TODO check DefaultButton remove시 null 처리. 9.2확인 필요
            if (this._defaultbutton == obj)
                this._defaultbutton = null;
            if (this._escapebutton == obj)
                this._escapebutton = null;

            if (this._is_alive && obj._control_element)
            {
                obj._control_element._removeFromContainer();
            }

            if (this._bind_manager)
            this._bind_manager._dettachSBindItem(obj);

            if (this._overedobj == obj)
                this._overedobj = null;

            this.components.delete_item(id);
            var cidx = nexacro._indexOf(this._child_list, obj);
            if (cidx > -1)
            {                
                this._child_list.splice(cidx, 1);
            }

            if (is_focused && this._is_alive)
            {
                if (obj instanceof nexacro.Form)
                {
                    // deactivate 처리
                    obj._on_deactivate();
                }

                // Focus된 컴포넌트가 사라지는 Case처리 
                _window._removeFromCurrentFocusPath(obj, true);
                _window._last_focused_elem = this._control_element;

                // Visible/Enable AutoFocus
                this._on_focus(true);
            }
        }
        else if (obj instanceof nexacro.BindItem)
        {
            this._bind_manager._setBinditem(obj, true);
            this.binds.delete_item(id);
        }
        else
        {
            this.objects.delete_item(id);
        }

        //obj._window = null;
        obj.parent = null;
        delete this[id];
        this.all.delete_item(id);

        return obj;
    };

    _pForm.setWaitCursor = function (wait_flag, forcely_flag)
    {
        var wait = wait_flag;
        var forcely = forcely_flag;
        if (wait == undefined) wait = true;
        if (forcely == undefined) forcely = false;

        if (!forcely && !application.usewaitcursor) return;

        var window = this._getWindow();
        if (window)
        {
            if (wait_flag || application._com_waiting)
            {
                window._cancelEvent();
            }
        }
        this._waitCursor(wait, null); // 통신이 아니므로 Context=null
    };

    _pForm.sleep = function (nMilliseconds)
    {
        var then = new Date().getTime();
        var now = then;

        while ((now - then) < nMilliseconds)
        {
            now = new Date().getTime();
        }
    };

    _pForm.transaction = function (id, url, inDatasetsParam, outDatasetsParam, argsParam, callbackFn, isAsync, datatype, isCompress)
    {
        var realurl = application._getServiceLocation(url, this._base_url);        
        var service = application._getServiceObject(url, true);
        var window = this._getWindow();
        if (window)
            window._cancelEvent();
        this._load_manager.loadDataModule(realurl, id, inDatasetsParam, outDatasetsParam, argsParam, callbackFn, isAsync, datatype, isCompress, service);
    };

    _pForm.cancelTransaction = function (id)
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
       
        this._stopTransaction(true);
    };

    _pForm.updateWindow = function ()
    {
        // To Do
    };

    _pForm.getStepCount = function ()
    {
        var step_ctrl = this.stepcontrol;
        if (step_ctrl)
        {
            return step_ctrl.stepcount;
        }
    };

    _pForm.setStepIndex = function (index)
    {
        var step_ctrl = this.stepcontrol;
        if (step_ctrl)
        {
            return step_ctrl.set_stepindex(index);
        }
    };

    _pForm.applyChange = function ()
    {
        // TODO getFocus로 가져와야 하는게 아닌지? 
        var comp = this._last_focused;
        if (!comp)
            return;
        comp.applyto_bindSource("value", comp.value);

        // BindManager.exception 처리되었기때문에 따로 Notify 한다.
        var binds = this.binds;
        var len = binds.length;
        for (var i = 0; i < len; i++)
        {
            var bind_item = binds[i];
            if (bind_item._comp == comp && bind_item.propid == "value")
            {
                this._bind_manager._notify(bind_item);
                return;
            }
        }
    };

    //===============================================================
    // nexacro.Form : Logical Part
    //===============================================================
    _pForm._setFormPosition = function (left, top, width, height)
    {        
        this._init_width = width;
        this._init_height = height;
    };

    // 새로 만듬 2013.02.06 neoarc. right,bottom은 이격값이 아닌 절대좌표임.
    _pForm._resetScrollPos = function (target_comp, left, top, right, bottom, focus_direction)
    {
        if (this._is_frame || !this._control_element)
            return;

        // 1. right,bottom을 보이게 하는 것이 최우선
        // 2. right,bottom이 보일경우 left,top을 보이도록한다.
        //    -> 이때 right,bottom이 가려져선 안된다.
        var hscroll = this.hscrollbar;
        var vscroll = this.vscrollbar;

        var client_width, client_height;
        client_width = this._client_width;
        client_height = this._client_height;

        var hpos = 0;
        var vpos = 0;

        if (hscroll && hscroll.visible)
        {
            hpos = hscroll.pos;
           
            if (left - hpos < client_width && right - hpos > client_width)
            {
                // Left는 보이고 Right는 Form 밖인 경우
                if (focus_direction == 1 && right - left > client_width)
                hscroll.set_pos(right - client_width);
                else
                    hscroll.set_pos(left);
            }
            else if (hpos > left)
            {
                // Left가 Form의 왼쪽을 넘어간 경우
                // Right가 가려지지 않을 정도만 스크롤한다.

                //tabkey 로 들어오는 경우 left 기준
                //shifttabkey로 들어오는 경우 right 기준
                if (focus_direction == 1 && right - left > client_width)                    
                    hscroll.set_pos(right - client_width);
                else
                    hscroll.set_pos(left);
            }
            else if (left - hpos > client_width)
            {
                // Left가 Form의 오른쪽을 넘어간 경우
                if (focus_direction == 1 && right - left > client_width)
                hscroll.set_pos(right - client_width);
                else
                    hscroll.set_pos(left);                    
            }
            hpos = hscroll.pos;
        }

        if (vscroll && vscroll.visible)
        {
            vpos = vscroll.pos;
            if (top - vpos < client_height && bottom - vpos > client_height)
            {
                // Top은 보이고 Bottom이 Form 밖인 경우
                if (focus_direction == 1 && bottom - top > client_height)
                vscroll.set_pos(bottom - client_height);
                else
                    vscroll.set_pos(top);
            }
            else if (vpos > top)
            {
                // Top이 Form의 위를 넘어간 경우
                // Bottom이 가려지지 않을 정도만 스크롤한다.
                if (focus_direction == 1 && bottom - top > client_height)
                    vscroll.set_pos(bottom - client_height);
                else
                    vscroll.set_pos(top);
            }
            else if (top - vpos > client_height)
            {
                // Top이 Form의 아래를 넘어간 경우
                if (focus_direction == 1 && bottom - top > client_height)
                vscroll.set_pos(bottom - client_height);
                else
                    vscroll.set_pos(top);
            }
            vpos = vscroll.pos;
        }

        // 나 기준에서 보일만큼 땡겼지만 내 부모에 의해 안보일수 있음.
        // 내 기준 좌표로 변환해서 상위로 올림.
        left = this._adjust_left + left - hpos;
        top = this._adjust_top + top - vpos;
        right = this._adjust_left + right - hpos;
        bottom = this._adjust_top + bottom - vpos;

        if (!this._is_popup_control && this.parent && this.parent != this)
        {
            this.parent._resetScrollPos(this, left, top, right, bottom, focus_direction);
        }
    };



    _pForm._setDragMove = function (v, is_windowframe)
    {
        this._is_track = v;
        if (v && is_windowframe)
            this._hittest_type = "caption";
        else
            this._hittest_type = "none";

        if (this._control_element)
            this._control_element.setElementHittestType(this._hittest_type);
    };

    _pForm._on_starttrack = function ()
    {
        if (!this._is_alive) return;
        var ownerframe = this.getOwnerFrame();
        if (ownerframe)
            ownerframe._on_titlebar_starttrack()
    };

    _pForm._on_endtrack = function (x, y, dragdata)
    {
        if (!this._is_alive) return;
        var ownerframe = this.getOwnerFrame();
        if (ownerframe)
            ownerframe._on_titlebar_endtrack(x, y, dragdata);
    };

    _pForm._on_movetrack = function (x, y, dragdata)
    {
        if (!this._is_alive) return;
        var ownerframe = this.getOwnerFrame();
        if (ownerframe)
            ownerframe._on_titlebar_movetrack(x, y, dragdata);
    };

    _pForm._setSize = function (width, height)
    {
        var control_elem = this.getElement();
        var w = this._adjust_width;
        var h = this._adjust_height;
        var left = this._adjust_left;
        var top = this._adjust_top;

        if (w != width || h != height)
        {
            var update = false;
            if (w == 0 || h == 0)
                update = true;
            
            this.width = this._adjust_width = width;
            this.height = this._adjust_height = height;

            if (this.parent)
                this._adjustPosition(this.left, this.top, this.right, this.bottom, this.width, this.height, this.parent._client_width, this.parent._client_height);
            else
                this._adjustPosition(this.left, this.top, this.right, this.bottom, this.width, this.height, 0, 0);

            // max scroll은 child comp에 의해 결정되어야 함
            /*
            if (control_elem)
                control_elem.setElementScrollMaxSize(width, height);
            */

            //this.on_update_position(true, false);

            // form 자신의 layout change 발생
            if (this._layout_list && this._layout_list.length > 0)
            {
                var layout = this._checkValidLayout();
                if (layout)
                {
                    control_elem = layout._form.getElement();
                    if (control_elem)
                    {
                        control_elem.setElementSize(width, height);
                        this._updateClientSize(control_elem);
                    }
                }
            }

            // client 크기 갱신
            // child component 이동 (div layout change 발생)
            this.on_update_position(true, false);

            if (control_elem && update)
            {
                this.currentstyle._empty();
                this._control_pseudo = "";

                var pseudo = this._getResultPseudo(this._status, this._pseudo);                
                this._updateControl(control_elem, pseudo);
                this._updateContents(control_elem, pseudo);
            }
        }
    };
        
    // is_cancel    - true:  canceltransaction에서 호출 될때 
    //               - false: esc에 의한 호출
    _pForm._stopTransaction = function (is_cancel)
    {
        if (!this._load_manager)
            return -1;
        var datalist = this._load_manager.dataList;
        if (!datalist)
            return -1;

        var trlist = this._load_manager.transactionList;
        var idx = 0;
        var pre_len = datalist.length;
        var canceledCnt = 0;
        while (idx < datalist.length)
        {
            var dataitem = datalist[idx];
            if (!dataitem)
            {
                idx++;
                continue;
            }

            var dataitem_handle = dataitem._handle;
            if (!dataitem_handle)
            {
                idx++;
                continue;
            }

            if (dataitem._is_cancel || dataitem._is_process)
            {
                idx++;
                pre_len = datalist.length;
                continue;
            }

            if (!is_cancel)
            {
                dataitem_handle._user_aborted = false;
                var tritem = trlist[idx];
                if (tritem)
                {
                    var ret = tritem.on_error(-1, "comm_stop_transaction_byesc", nexacro._communicationStatusTable["stop"], "");
                    if (ret)
                    {
                        dataitem._is_process = true;
                        dataitem_handle._user_aborted = undefined;
                        idx++;
                        continue;
                    }
                }
            }

            dataitem_handle._user_aborted = true;
            dataitem._is_cancel = true;


            if (nexacro.Browser == "Runtime")
            {
                nexacro._cancelLoad(dataitem_handle);
            }
            else
            {
                // 일반 브라우저에서 정상적으로 cancelLoad가 되면 두번째 on_error에서 아무런 동작안함.
                // 강제로 on_error을 호출 이유? transaction주소 잘못준경우 waitcursor가 계속 떠있음.
                // 일부 브라우저의 특정상황에서 cancelLoad에서 처리 못하는 경우있음
                // (abort()호출하면 callback함수 수행이 안됨)
                nexacro._cancelLoad(dataitem_handle);
                tritem.on_error(0, "comm_cancel_byuser");
                dataitem_handle = null;
                dataitem = null;
            }

            canceledCnt++;

            if (pre_len == datalist.length)
                idx++;
            else
            {
                idx = 0;
                pre_len = datalist.length;
            }
        }


        return canceledCnt;
    };

    _pForm._onRecalcScrollSize = function (fromComp)
    {
        var control_elem = this._control_element;
        if (this._is_scrollable && control_elem)
        {
            var w = 0, h = 0;
            if (!fromComp)
            {
                var comps = this.components;
                var zoom_factor = this.getZoom() / 100;
                var org_maxwidth = this._client_width / zoom_factor;
                var org_maxheight = this._client_height / zoom_factor;

                for (var i = 0, n = comps.length; i < n; i++)
                {
                    var comp = comps[i];
                    if (comp && comp.visible)
                    {
                        var offsetright = comp.getOffsetRight();
                        var offsetbottom = comp.getOffsetBottom();

                        w = Math.max(w, offsetright);
                        h = Math.max(h, offsetbottom);
                    }
                }

                if (org_maxwidth || org_maxheight)
                {
                    if (org_maxwidth <= -1)
                        w = -1;
                    //else
                    //    w = Math.max(w, org_maxwidth);

                    if (org_maxheight <= -1)
                        h = -1;
                    //else
                    //    h = Math.max(h, org_maxheight);
                }

                control_elem.setElementScrollMaxSize(w, h);
            }
            else if (fromComp.visible)
            {
                
                var curMaxWidth = control_elem.container_maxwidth;
                var curMaxHeight = control_elem.container_maxheight;

                var offsetRight = fromComp.getOffsetRight();
                var offsetBottom = fromComp.getOffsetBottom();

                if (curMaxWidth < offsetRight || curMaxHeight < offsetBottom)
                {
                    w = Math.max(curMaxWidth, offsetRight);
                    h = Math.max(curMaxHeight, offsetBottom);
                    control_elem.setElementScrollMaxSize(w, h);
                }
            }
        }
    };

    // right,bottom 또는 % 좌표를 갖는 child를 제외하고 확실한 좌표값을 갖는
    _pForm._calcScrollMaxSize = function ()
    {
        var control_elem = this._control_element;
        if (this._is_scrollable && control_elem)
        {
            var _w = 0, _h = 0;
            var comps = this.components;
            for (var i = 0, n = comps.length; i < n; i++)
            {
                var comp = comps[i];
                if (comp && comp.visible)
                {
                    var offsets = comp._getFixedOffsetValue();
                    _w = Math.max(_w, offsets.right);
                    _h = Math.max(_h, offsets.bottom);
                }
            }

            return { w: _w, h: _h };
        }
        return { w: -1, h: -1 };
    };

    _pForm._dragEnd = function (info)
    {
        var control_elem = this.getElement();
        if (control_elem)
        {
            var stepcontrol = this.stepcontrol;
            if (stepcontrol)
            {
                var step_count = control_elem._step_count;
                var step_index = control_elem._step_index;
                var direction = info.direction;
                if (step_count > 0)
                {
                    var new_index = -1;
                    if (direction == "L")
                    {
                        new_index = step_index + 1;
                    }
                    else if (direction == "R")
                    {
                        new_index = step_index - 1;
                    }
                    if (new_index < 0 || new_index >= step_count)
                    {
                        return;
                    }
                    stepcontrol.set_stepindex(new_index);
                }
            }
        }
    };

    _pForm._getDefaultButton = function ()
    {
        var comps = this.components;
        if (comps)
        {
            var comp;
            for (var i = 0; i < comps.length; i++)
            {
                comp = comps[i];
                if (comp._is_form)
                {
                    var btn = comp._getDefaultButton();
                    if (btn) return btn;
                }
                else if (nexacro._toBoolean(comp.defaultbutton))
                {
                    return comp;
                }
            }
        }
        return null;
    };

    _pForm._getEscapeButton = function ()
    {
        var comps = this.components;
        if (comps)
        {
            var comp;
            for (var i = 0; i < comps.length; i++)
            {
                comp = comps[i];
                if (comp._is_form)
                {
                    var btn = comp._getEscapeButton();
                    if (btn) return btn;
                }
                else if (nexacro._toBoolean(comp.escapebutton))
                {
                    return comp;
                }
            }
        }
        return null;
    };

    _pForm._getLayoutAutofitType = function ()
    {
        var ret = this.layoutautofittype;
        if (ret === undefined)
            ret = application.layoutautofittype;
        
        return ret;
    };

    // do autofit
    _pForm._fitLayoutToParent = function ()
    {
        // form autofit 처리
        var controlelem = this.getElement();
        if (this._getLayoutAutofitType() == "width" && controlelem)
        {
            var init_width = this._init_width;

            // MLM에 의해 Layout이 적용되어있으면 Layout의 width가 init_width라고 봐야 함.
            if (this._current_layout_name != "default")
            {
                var layout = application.getLayoutManager().getCurrentLayout(this);
                init_width = parseInt(layout.width);
            }

            if (init_width != 0)
            {
                // 세로 스크롤바가 생기면 원하는 결과가 나오질 않는다...

                var old_vscroll_visible = this.vscrollbar && this.vscrollbar._isVisible();
                var old_hscroll_visible = this.hscrollbar && this.hscrollbar._isVisible();

                var client_width = controlelem.client_width;
                var zoom_factor = client_width * 100 / init_width;

                this.setZoom(zoom_factor);

                var cur_vscroll_visible = this.vscrollbar && this.vscrollbar._isVisible();
                var cur_hscroll_visible = this.hscrollbar && this.hscrollbar._isVisible();

                // 아래 두가지 케이스에 대해 다시 업데이트
                if ((!old_hscroll_visible && cur_hscroll_visible) ||
                    (old_vscroll_visible && !cur_vscroll_visible))
                {
                    // 1. 가로 스크롤이 없었다가 생긴 경우
                    // 2. 세로 스크롤이 있었다가 사라진 경우
                    client_width = controlelem.client_width;
                    zoom_factor = client_width * 100 / init_width;

                    this.setZoom(zoom_factor);
                }

                this._autofittedZoomFactor = zoom_factor;
            }
        }
    };

    // __applyers
    _pForm._apply_formurl = function ()
    {
        this._clear();
        if (this._url)
        {
            this.loadForm(this._url, true, true);
            this.set_visible(true);
        }
    };

    _pForm._apply_formstyle = function (obj)
    {
        for (var i = 0; i < obj.components.length; i++)
        {
            var comp = obj.components[i];
            if (comp)
            {
                comp.currentstyle._empty();
                comp._control_pseudo = "";
                comp._contents_pseudo = "";
                comp._css_finder = null;
                comp._ref_css_finder = null;
                if (comp._is_form)
                {
                    comp.on_apply_pseudo("");
                    this._apply_formstyle(comp);
                }
                else
                {
                    comp.on_apply_pseudo("");
                }
            }
        }

        this._control_pseudo = "";
        this._contents_pseudo = "";
        this.on_apply_pseudo("");
    };


    _pForm._apply_stepcount = function ()
    {
        var stepctrl = this.stepcontrol;

        if (stepctrl)
        {             
            this._on_prepare_stepcontents(stepctrl._prestepcount, stepctrl._prestepindex, stepctrl.stepcount, stepctrl.stepindex);
            this._on_refresh_stepcontents(stepctrl._prestepcount, stepctrl._prestepindex, stepctrl.stepcount, stepctrl.stepindex);
        }
    }

    _pForm._getAccessibilityWholeReadLabel = function ()
    {
        var readlabel = "";
        var ar = this._getSortedDecendants(this, true, true);
        for (var i = 0; i < ar.length; i++)
        {
            comp = ar[i];
            if (comp._isAccessibilityEnable())
            {
                var label = comp._getAccessibilityReadLabel(true);
                if (label)
                {
                    label.trim();
                    if (label && label.length > 0)
                        readlabel += label + " ";
                }
            }
        }
        return readlabel;
    };

    _pForm._playAccessibilityWholeReadLabel = function (type)
    {
        var control = this.getElement();
        if (control)
        {
        var label = this._getAccessibilityWholeReadLabel();
        control.notifyAccessibility(label, type);
        }

    };


    delete _pForm;
}

