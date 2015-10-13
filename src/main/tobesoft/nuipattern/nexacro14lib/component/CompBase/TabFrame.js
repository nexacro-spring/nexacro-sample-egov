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

// 2012.12.17 neoarc; 작업방향에 대해 논의가 필요하여 작업보류 상태임.
/*
if (!nexacro.TabFrame)
{
    //==============================================================================
    // nexacro.TabFrame : Style Part
    //==============================================================================
    nexacro.TabFrame_Style = function (target, id)
    {
        nexacro.Style.call(this, target, id);

        this.buttonbackground = null;
        this.buttongradation = null;
        this.buttonborder = null;
        this.buttonbordertype = null;
        this.buttonpadding = null;
        this.buttonbackgroundimagemode = null;
        this.buttonbuttonmargin = null;
        this.tabindexchangeeffect = null;
        this.tabborder = null;
        this.tabbordertype = null;
    };

    var _pTabFrameStyle = nexacro._createPrototype(nexacro.Style, nexacro.TabFrame_Style);
    nexacro.TabFrame_Style.prototype = _pTabFrameStyle;

    _pTabFrameStyle._type_name = "TabFrameStyle";

    eval(nexacro._createValueAttributeEvalStr("_pTabFrameStyle", "buttonbackground"));
    eval(nexacro._createBackgroundAttributeEvalStr("_pTabFrameStyle", "buttongradation"));
    eval(nexacro._createColorAttributeEvalStr("_pTabFrameStyle", "buttonborder"));
    eval(nexacro._createFontAttributeEvalStr("_pTabFrameStyle", "buttonbordertype"));
    eval(nexacro._createGradationAttributeEvalStr("_pTabFrameStyle", "buttonpadding"));
    eval(nexacro._createBorderAttributeEvalStr("_pTabFrameStyle", "buttonbackgroundimagemode"));
    eval(nexacro._createBordertypeAttributeEvalStr("_pTabFrameStyle", "buttonbuttonmargin"));
    eval(nexacro._createPaddingAttributeEvalStr("_pTabFrameStyle", "tabindexchangeeffect"));
    eval(nexacro._createValueAttributeEvalStr("_pTabFrameStyle", "tabborder"));
    eval(nexacro._createValueAttributeEvalStr("_pTabFrameStyle", "tabbordertype"));

    _pTabFrameStyle.__custom_emptyObject = function ()
    {
        this.buttonbackground = null;
        this.buttongradation = null;
        this.buttonborder = null;
        this.buttonbordertype = null;
        this.buttonpadding = null;
        this.buttonbackgroundimagemode = null;
        this.buttonbuttonmargin = null;
        this.tabindexchangeeffect = null;
        this.tabborder = null;
        this.tabbordertype = null;
    };

    _pTabFrameStyle.__get_custom_style_value = function ()
    {
        var val = "";
        if (this.buttonbackground && this.buttonbackground._is_empty) val += "buttonbackground:" + this.buttonbackground._value + "; ";
        if (this.buttongradation && this.buttongradation._is_empty) val += "buttongradation:" + this.buttongradation._value + "; ";
        if (this.buttonborder && this.buttonborder.is_empty) val += "buttonborder:" + this.buttonborder._value + "; ";
        if (this.buttonbordertype && this.buttonbordertype._is_empty) val += "buttonbordertype:" + this.buttonbordertype._value + "; ";
        if (this.buttonpadding && this.buttonpadding._is_empty) val += "buttonpadding:" + this.buttonpadding._value + "; ";
        if (this.buttonbackgroundimagemode && this.buttonbackgroundimagemode._is_empty) val += "buttonbackgroundimagemode:" + this.buttonbackgroundimagemode._value + "; ";
        if (this.buttonbuttonmargin && this.buttonbuttonmargin._is_empty) val += "buttonbuttonmargin:" + this.buttonbuttonmargin._value + "; ";
        if (this.tabindexchangeeffect && this.tabindexchangeeffect._is_empty) val += "tabindexchangeeffect:" + this.itempadding._value + "; ";
        if (this.tabborder && this.tabborder._is_empty) val += "tabborder:" + this.tabborder._value + "; ";
        if (this.tabbordertype && this.tabbordertype._is_empty) val += "tabbordertype:" + this.tabbordertype._value + "; ";

        return val;
    };

    nexacro.TabFrame_CurrentStyle = function (target, id)
    {
        nexacro.CurrentStyle.call(this, target, id);

        this.buttonbackground = null;
        this.buttongradation = null;
        this.buttonborder = null;
        this.buttonbordertype = null;
        this.buttonpadding = null;
        this.buttonbackgroundimagemode = null;
        this.buttonbuttonmargin = null;
        this.tabindexchangeeffect = null;
        this.tabborder = null;
        this.tabbordertype = null;
    };

    var _pTabFrameCurrentStyle = nexacro._createPrototype(nexacro.CurrentStyle, nexacro.TabFrame_CurrentStyle);
    nexacro.TabFrame_CurrentStyle.prototype = _pTabFrameCurrentStyle;

    _pTabFrameCurrentStyle._type_name = "TabFrameCurrentStyle";

    _pTabFrameCurrentStyle.__custom_emptyObject = _pTabFrameStyle.__custom_emptyObject;
    _pTabFrameCurrentStyle.__get_custom_style_value = _pTabFrameStyle.__get_custom_style_value;

    // end of Frame Style
    _pTabFrameStyle = null;
    _pTabFrameCurrentStyle = null;

  

    //===============================================================
    // nexacro.TabFrame
    //===============================================================
    nexacro.TabFrame = function (id, left, top, right, bottom, parent)
    {
        nexacro.Frame.call(this, id, left, top, right, bottom, parent);

        // -------- internal variable ---------------------//

        // this._event_list = { "onactivate":1, };
    };

    var _pTabFrame = nexacro._createPrototype(nexacro.Frame, nexacro.TabFrame);
    nexacro.TabFrame.prototype = _pTabFrame;

    _pTabFrame._type_name = "TabFrame";

    // default value
    _pTabFrame.tabposition = "top";
    _pTabFrame.tabindex;
    _pTabFrame.tabjustify;
    _pTabFrame.showextrabutton = false;
    _pTabFrame.multiline = false;

    _pTabFrame._tabctrl = null;

    //============================================================================
    // nexacro.TabFrame : Style Part
    //============================================================================
    _pTabFrame._on_apply_custom_pseudo = function (pseudo)
    {
        var c = this.currentstyle;
        var s;
        s = this.on_find_CurrentStyle_buttonbackground(pseudo);
        if (s != c.buttonbackground)
            c.buttonbackground = s;

        s = this.on_find_CurrentStyle_buttongradation(pseudo);
        if (s != c.buttongradation)
            c.buttongradation = s;

        s = this.on_find_CurrentStyle_buttonborder(pseudo);
        if (s != c.buttonborder)
            c.buttonborder = s;

        s = this.on_find_CurrentStyle_buttonbordertype(pseudo);
        if (s != c.buttonbordertype)
            c.buttonbordertype = s;

        s = this.on_find_CurrentStyle_buttonpadding(pseudo);
        if (s != c.buttonpadding)
            c.buttonpadding = s;

        s = this.on_find_CurrentStyle_buttonbackgroundimagemode(pseudo);
        if (s != c.buttonbackgroundimagemode)
            c.buttonbackgroundimagemode = s;

        s = this.on_find_CurrentStyle_buttonmargin(pseudo);
        if (s != c.buttonmargin)
            c.buttonmargin = s;

        s = this.on_find_CurrentStyle_tabindexchangeeffect(pseudo);
        if (s != c.tabindexchangeeffect)
            c.tabindexchangeeffect = s;

        s = this.on_find_CurrentStyle_tabborder(pseudo);
        if (s != c.tabborder)
            c.tabborder = s;

        s = this.on_find_CurrentStyle_tabbordertype(pseudo);
        if (s != c.tabbordertype)
            c.tabbordertype = s;
    };
    _pTabFrame.on_create_custom_style = function ()
    {
        return new nexacro.TabFrame_Style(this);
    };
    _pTabFrame.on_create_custom_currentStyle = function ()
    {
        return new nexacro.TabFrame_CurrentStyle();
    };
    _pTabFrame.on_find_CurrentStyle_buttonbackground = function (pseudo)
    {
        return this._find_pseudo_obj("buttonbackground", pseudo);
    };
    _pTabFrame.on_find_CurrentStyle_buttongradation = function (pseudo)
    {
        return this._find_pseudo_obj("buttongradation", pseudo);
    };
    _pTabFrame.on_find_CurrentStyle_buttonborder = function (pseudo)
    {
        return this._find_pseudo_obj("buttonborder", pseudo);
    };
    _pTabFrame.on_find_CurrentStyle_buttonbordertype = function (pseudo)
    {
        return this._find_pseudo_obj("buttonbordertype", pseudo);
    };
    _pTabFrame.on_find_CurrentStyle_buttonpadding = function (pseudo)
    {
        return this._find_pseudo_obj("buttonpadding", pseudo);
    };
    _pTabFrame.on_find_CurrentStyle_buttonbackgroundimagemode = function (pseudo)
    {
        return this._find_pseudo_obj("buttonbackgroundimagemode", pseudo);
    };
    _pTabFrame.on_find_CurrentStyle_buttonmargin = function (pseudo)
    {
        return this._find_pseudo_obj("buttonmargin", pseudo);
    };
    _pTabFrame.on_find_CurrentStyle_tabindexchangeeffect = function (pseudo)
    {
        return this._find_pseudo_obj("tabindexchangeeffect", pseudo);
    };
    _pTabFrame.on_find_CurrentStyle_tabborder = function (pseudo)
    {
        return this._find_pseudo_obj("tabborder", pseudo);
    };
    _pTabFrame.on_find_CurrentStyle_tabbordertype = function (pseudo)
    {
        return this._find_pseudo_obj("tabbordertype", pseudo);
    };
    _pTabFrame.on_update_style_buttonbackground = function ()
    {
        this.on_apply_style_buttonbackground(this.currentstyle.buttonbackground = this.on_find_CurrentStyle_buttonbackground(this._pseudo));
    };
    _pTabFrame.on_update_style_buttongradation = function ()
    {
        this.on_apply_style_buttongradation(this.currentstyle.buttongradation = this.on_find_CurrentStyle_buttongradation(this._pseudo));
    };
    _pTabFrame.on_update_style_buttonborder = function ()
    {
        this.on_apply_style_buttonborder(this.currentstyle.buttonborder = this.on_find_CurrentStyle_buttonborder(this._pseudo));
    };
    _pTabFrame.on_update_style_buttonbordertype = function ()
    {
        this.on_apply_style_buttonbordertype(this.currentstyle.buttonbordertype = this.on_find_CurrentStyle_buttonbordertype(this._pseudo));
    };
    _pTabFrame.on_update_style_buttonpadding = function ()
    {
        this.on_apply_style_buttonpadding(this.currentstyle.buttonpadding = this.on_find_CurrentStyle_buttonpadding(this._pseudo));
    };
    _pTabFrame.on_update_style_buttonbackgroundimagemode = function ()
    {
        this.on_apply_style_buttonbackgroundimagemode(this.currentstyle.buttonbackgroundimagemode = this.on_find_CurrentStyle_buttonbackgroundimagemode(this._pseudo));
    };
    _pTabFrame.on_update_style_buttonmargin = function ()
    {
        this.on_apply_style_buttonmargin(this.currentstyle.buttonmargin = this.on_find_CurrentStyle_buttonmargin(this._pseudo));
    };
    _pTabFrame.on_update_style_tabindexchangeeffect = function ()
    {
        this.on_apply_style_tabindexchangeeffect(this.currentstyle.tabindexchangeeffect = this.on_find_CurrentStyle_tabindexchangeeffect(this._pseudo));
    };
    _pTabFrame.on_update_style_tabborder = function ()
    {
        this.on_apply_style_tabborder(this.currentstyle.tabborder = this.on_find_CurrentStyle_tabborder(this._pseudo));
    };
    _pTabFrame.on_update_style_tabbordertype = function ()
    {
        this.on_apply_style_tabbordertype(this.currentstyle.tabbordertype = this.on_find_CurrentStyle_tabbordertype(this._pseudo));
    };

    //_pTabFrame.on_apply_style;

    //===============================================================
    // nexacro.TabFrame : Create & Destroy & Update
    //===============================================================

    _pTabFrame.on_change_containerRect = function (width, height)
    {
        nexacro.Frame.prototype.on_change_containerRect.call(this, width, height);

        if (this._tabctrl)
        {
            this._tabctrl.move(this._client_left, this._client_top, this._client_left + width, this._client_top + height);
        }
    };
    _pTabFrame.on_create_contents = function ()
    {
        nexacro.Frame.prototype.on_create_contents.call(this);

        var control_elem = this._control_element;
        if (control_elem)
        {
            this._tabctrl = new nexacro.TabFrameTabCtrl(this.name, 0, 0, 0, 0, this);
            this._tabctrl.createComponent();
        }
    };
    _pTabFrame.on_created_contents = function ()
    {
        nexacro.Frame.prototype.on_created_contents.call(this);

        if (this._tabctrl)
        {
            for (var i = 0; i < this.frames.length; i++)
            {
                var child = this.frames[i];
                this._tabctrl.addChild(child.name, child);
            }
            this._tabctrl.on_create_contents();
        }
    };
    _pTabFrame.on_destroy_contents = function ()
    {
        nexacro.Frame.prototype.on_destroy_contents.call(this);
        
        if (this._tabctrl)
        {
            this._tabctrl.destroyComponent();
            this._tabctrl = null;
        }
    };

    //============================================================================
    // nexacro.TabFrame : Override Part
    //============================================================================
    _pTabFrame._getTitleText = function (brecursive)
    {
        var titletext;
        titletext = this.titletext;

        // TODO

        return titletext;
    };
    _pTabFrame._getStatusText = function (brecursive)
    {
        var statustext;
        statustext = this.statustext;

        // TODO

        //if (brecursive)
        //{
        //    if (this.form && this.form.statustext.length > 0)
        //    {
        //        if (statustext.length > 0)
        //            statustext += " - ";
        //        statustext += this.form.statustext;
        //    }
        //}
        return statustext;
    }

    //===============================================================
    // nexacro.TabFrame : Methods
    //===============================================================
    _pTabFrame.addChild = function (id, obj)
    {
        var ret = nexacro.Frame.prototype.addChild.call(this, id, obj);
        if (ret != -1)
        {
            if (this._tabctrl)
            {
                this._tabctrl.addChild(id, obj);
            }
        }
    }

    delete _pTabFrame;

    //==============================================================================
    // nexacro.TabFramePage
    //==============================================================================
    nexacro.TabFramePage = function (id, left, top, right, bottom, parent)
    {
        nexacro.Frame.call(this, id, left, top, right, bottom, parent);

        // -------- internal variable -------------
    };

    var _pTabFramePage = nexacro._createPrototype(nexacro.Frame, nexacro.TabFramePage);
    nexacro.TabFramePage.prototype = _pTabFramePage;

    _pTabFramePage._type_name = "TabFramePage";

    //==============================================================================
    // nexacro.TabFrameTabCtrl
    //==============================================================================
    nexacro.TabFrameTabCtrl = function (id, left, top, right, bottom, parent)
    {
        nexacro.Tab.call(this, id, left, top, right, bottom, parent);
    };

    var _pTabFrameTabCtrl = nexacro._createPrototype(nexacro.Tab, nexacro.TabFrameTabCtrl);
    nexacro.TabFrameTabCtrl.prototype = _pTabFrameTabCtrl;

    _pTabFrameTabCtrl._type_name = "TabFrameTabCtrl";
    
    //===============================================================
    // nexacro.TabFrameTabCtrl : Style Part
    //===============================================================
    
    // style
    _pTabFrameTabCtrl.on_find_CurrentStyle_buttonbackground = function (pseudo)
    {
        return this.parent.on_find_CurrentStyle_buttonbackground(pseudo);
    };
    _pTabFrameTabCtrl.on_find_CurrentStyle_buttongradation = function (pseudo)
    {
        return this.parent.on_find_CurrentStyle_buttongradation(pseudo);
    };
    _pTabFrameTabCtrl.on_find_CurrentStyle_buttonborder = function (pseudo)
    {
        return this.parent.on_find_CurrentStyle_buttonborder(pseudo);
    };
    _pTabFrameTabCtrl.on_find_CurrentStyle_buttonbordertype = function (pseudo)
    {
        return this.parent.on_find_CurrentStyle_buttonbordertype(pseudo);
    };
    _pTabFrameTabCtrl.on_find_CurrentStyle_buttonpadding = function (pseudo)
    {
        return this.parent.on_find_CurrentStyle_buttonpadding(pseudo);
    };
    _pTabFrameTabCtrl.on_find_CurrentStyle_buttonbackgroundimagemode = function (pseudo)
    {
        return this.parent.on_find_CurrentStyle_buttonbackgroundimagemode(pseudo);
    };
    _pTabFrameTabCtrl.on_find_CurrentStyle_buttonmargin = function (pseudo)
    {
        return this.parent.on_find_CurrentStyle_buttonmargin(pseudo);
    };
    _pTabFrameTabCtrl.on_find_CurrentStyle_tabindexchangeeffect = function (pseudo)
    {
        return this.parent.on_find_CurrentStyle_tabindexchangeeffect(pseudo);
    };
    _pTabFrameTabCtrl.on_find_CurrentStyle_tabborder = function (pseudo)
    {
        return this.parent.on_find_CurrentStyle_tabborder(pseudo);
    };
    _pTabFrameTabCtrl.on_find_CurrentStyle_tabbordertype = function (pseudo)
    {
        return this.parent.on_find_CurrentStyle_tabbordertype(pseudo);
    };
}
*/

