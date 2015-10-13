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
// nexacro.PopupDiv
//==============================================================================
if (!nexacro.PopupDiv)
{
    nexacro.PopupDiv = function (id, position, left, top, width, height, right, bottom, parent)
    {
        nexacro.Div.call(this, id, position, left, top, width, height, right, bottom, parent);

        this.callbackfunction = null;
        this.visible = false;  // component'base is true but popup'base is false

        this._isSelfStyle = true;
        this._isSelfClass = true;
        this._is_window = true;

        this._attached_comp = this;
        this._is_init = false;
        this.returnvalue = "";
        this._track_on = false;

        this._event_list =
            {
                "onclick": 1, "ondblclick": 1, "onkeypress": 1, "onkeydown": 1, "onkeyup": 1, "onkillfocus": 1, "onsetfocus": 1,
                "ondrag": 1, "ondragenter": 1, "ondragleave": 1, "ondragmove": 1, "ondrop": 1, "onlbuttondown": 1, "onlbuttonup": 1,
                "onload": 1, "onmouseenter": 1, "onmouseleave": 1, "onmousemove": 1, "onmove": 1, "onsize": 1, "onrbuttondown": 1, "onrbuttonup": 1,
                "oncloseup":1, "onpopup":1, "onlayoutchanged":1, "canlayoutchange":1,
                "onmousewheel": 1, "onmousedown": 1, "onmouseup": 1,
                "onvscroll": 1, "onhscroll": 1,
                // Touch,TouchGesture
                "ontouchstart": 1, "ontouchmove": 1, "ontouchend": 1,
                "ontap": 1, "ondbltap": 1, "onpinchstart": 1, "onpinch": 1, "onpinchend": 1,
                "onflingstart": 1, "onfling": 1, "onflingend": 1,
                "onlongpress": 1, "onslidestart": 1, "onslide": 1, "onslideend": 1, "onzoom": 1
            };
        this._accessibility_role = "form";
    };
    var _pPopupDiv = nexacro._createPrototype(nexacro.Div, nexacro.PopupDiv);
    nexacro.PopupDiv.prototype = _pPopupDiv;
    _pPopupDiv._type_name = "PopupDiv";

    _pPopupDiv._is_popup_control = true;
    _pPopupDiv._is_selfclose = true;
    _pPopupDiv._default_zindex = nexacro._zindex_popup;
    _pPopupDiv._track_capture = true;
    

    // ====================================================================
    // nexacro.PopupDiv : Create & Update & Destory
    // ====================================================================    
    _pPopupDiv.on_create_control_element = function (parent_elem)
    {
        //if (!parent_elem) return null;

        var control_elem;
        if (this._is_scrollable)
        {
            control_elem = this.on_create_popupscrollable_control_element(parent_elem);
        }
        else
        {
            control_elem = this.on_create_popup_control_element(parent_elem); // popup
        }
        if (control_elem && this._default_zindex > 0)
        {
            control_elem.setElementZIndex(this._default_zindex);
        }

        return control_elem;
    };

    _pPopupDiv.on_created = function (_window)
    {
        // 기본작업
        nexacro.Div.prototype.on_created.call(this, _window);

        // 팝업에 대한 작업
        nexacro.PopupComponent.prototype.on_created.call(this, _window);
        this._refform = this; //need to modify
    };

    _pPopupDiv.destroyComponent = nexacro.PopupComponent.prototype.destroyComponent;
    _pPopupDiv.set_visible = function (v)
    {
        if (this._track_on)
        {
            nexacro.PopupComponent.prototype.set_visible.apply(this, arguments);
        }
    }

    _pPopupDiv.on_update_position = function (resize_flag, move_flag)
    {
        if (this.visible || !nexacro._allow_default_pinchzoom)
        {
            nexacro.Div.prototype.on_update_position.call(this, resize_flag, move_flag);
        }
        else
        {
            // 팝업이 화면에 보이지 않아도 body의 스크롤 영역을 차지하게 되기때문에 작게 만들어 구석으로 배치
            var control_elem = this._control_element;
            if (control_elem)
            {
                control_elem.setElementPosition(0, 0);
                control_elem.setElementSize(1, 1);
                
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
        }        
    };
        
    _pPopupDiv.on_fire_onpopup = function (obj)
    {
        if (this.onpopup && this.onpopup._has_handlers)
        {
            var evt = new nexacro.EventInfo(obj);
            evt.eventid = "onpopup";
            return this.onpopup._fireEvent(this, evt);
        }
        return false;
    };

    _pPopupDiv.on_fire_onmove = function (left, top)
    {
        if (this.onmove && this.onmove._has_handlers)
        {
            var evt = new nexacro.MoveEventInfo(this, "onmove", left, top);           
            return this.onmove._fireEvent(this, evt);
        }
        return false;
    };


    _pPopupDiv.on_fire_oncloseup = function (obj)
    {
        if (this.callbackfunction)
        {
            this.callbackfunction.call(this.parent, this.id, this.returnvalue);
        }
        if (this.oncloseup && this.oncloseup._has_handlers)
        {
            var evt = new nexacro.EventInfo(obj);
            evt.eventid = "oncloseup";
            return this.oncloseup._fireEvent(this, evt);
        }
        return false;
    };

    // ===============================================================================
    // nexacro.PopupDiv : Method
    // ===============================================================================    
    _pPopupDiv.trackPopup = function (left, top, width, height, callbackfn)
    {        
        this.returnvalue = "";
        if (width == null && height == null) 
        {
            width = this._adjust_width;
            height = this._adjust_height;
        }

        var _left = +left;
        var _top = +top;
        var _width = +width;
        var _height = +height;
        var mainframe = this._getMainFrame();

        var m_c_width = mainframe._adjust_width;
        var m_c_height = mainframe._adjust_height;

        if (_left + _width > m_c_width)
        {
            var left_width = _left - _width;
            if (left_width > 0)
            {
                _left = left_width;
            }
            else
            {
                _left = m_c_width - _width;
            }
        }

        if (_top + _height > m_c_height)
        {
            var t_temp = m_c_height - _height;
            if (t_temp < 0)
            {
                _top = 0;
                _height = m_c_height;
            }
            else
            {
                _top = t_temp;
            }
        }
        this._track_on = true;        
        if (this._is_loading)
        {
            this._wait_pop_position = {obj:null, left:_left, top:_top, width:_width, height:_height};
        }
        else
        {
            this._popup(_left, _top, _width, _height);            
        }

        if (callbackfn && typeof callbackfn == "string")
        {
            this.callbackfunction = this.parent[callbackfn];
        }
        else
        {
            this.callbackfunction = undefined;
        }
                
        this.setFocus();

        this.on_fire_onpopup(this);               
        
        var _window = this._getWindow();
        if (_window && this._track_capture)
        {
            _window._setCaptureLock(this, true, false);
        }

        return (this.async ? true : this.returnvalue);
    };
    _pPopupDiv.trackPopupByComponent = function (obj, left, top, width, height, callbackfn)
    {
        this.returnvalue = "";

        if (width == null && height == null) 
        {
            width = this._adjust_width;
            height = this._adjust_height;
        }

        if (callbackfn && typeof callbackfn == "string")
        {
            this.callbackfunction = this.parent[callbackfn];
        }
        else
        {
            this.callbackfunction = undefined;
        }

        this._track_on = true;
        if (this._is_loading)
        {
            this._wait_pop_position = { obj:obj, left: left, top: top, width: width, height: height };
        }
        else
        {
            this._popupBy(obj, left, top, width, height);
        }        
        this.setFocus();

        this.on_fire_onpopup(this);

        var _window = this._getWindow();
        if (_window && this._track_capture)
        {
            _window._setCaptureLock(this, true, false);
        }

        return (this.async ? true : this.returnvalue);
    };

    _pPopupDiv.closePopup = function (retvalue)
    {        
        this.returnvalue = retvalue;
        if (this.visible)
        {
            this._closePopup(true);
            return true;
        }
        return false;
    };
    // ===============================================================================
    // nexacro.PopupDiv : Overriding
    // ===============================================================================


    // ===============================================================================
    // nexacro.PopupDiv : Logical part
    // ===============================================================================

    _pPopupDiv._getAllPos = function ()
    {
        var parent = this;
        var all_left = 0;
        var all_top = 0;
        while (parent)
        {
            if (parent._adjust_left != null)
            {
                all_left += parent._adjust_left;
                all_top += parent._adjust_top;
            }
            parent = parent.parent;
        }
        return { left: all_left, top: all_top };
    }


    _pPopupDiv.isPopup = nexacro.PopupComponent.prototype._is_popup;
    _pPopupDiv._popup = nexacro.PopupComponent.prototype._popup;
    _pPopupDiv._popupBy = nexacro.PopupComponent.prototype._popupBy;
    _pPopupDiv._getWindowHandle = nexacro.PopupComponent.prototype._getWindowHandle;
    _pPopupDiv._getWindow = nexacro.PopupComponent.prototype._getWindow;
    _pPopupDiv._findOwnerElementHandle = nexacro.PopupComponent.prototype._findOwnerElementHandle;

    _pPopupDiv._closePopup = function ()
    {
        var _window = this._getWindow();
        if (_window && this._track_capture)
        {
            _window._releaseCaptureLock(this);
        }

        nexacro.PopupComponent.prototype._closePopup.apply(this, arguments);
        this._track_on = false;
    }

    _pPopupDiv._isPopupVisible = function ()
    {
        return this.visible;
    };

    _pPopupDiv._getMainFrame = function ()
    {
        var pThis = this;
        while (pThis && !pThis._is_main)
        {
            pThis = pThis.parent;
        }
        return pThis;
    };

    _pPopupDiv._control_popup = function (_left, _top, _width, _height)
    {
        var mainframe = this._getMainFrame();

        var m_c_width = mainframe._adjust_width;
        var m_c_height = mainframe._adjust_height;

        if (_left + _width > m_c_width)
        {
            var left_width = _left - _width;
            if (left_width > 0)
            {
                _left = left_width;
            }
            else
            {
                _left = m_c_width - _width;
            }
        }

        if (_top + _height > m_c_height)
        {
            _top = m_c_height - _height;
        }
        this._popup(_left, _top, _width, _height);
    }


    _pPopupDiv._clearEventListener = function (evt_id)
    {
        if (this._is_init && application.getActiveForm())
        {
            var formEventList = application.getActiveForm()._event_list;
            if (!formEventList[evt_id])
            {
                return;
            }
        }
        nexacro.EventSinkObject.prototype._clearEventListener.apply(this, arguments);
    };

    _pPopupDiv._on_init = function ()
    {
        this._is_init = true;
        nexacro.FormBase.prototype._on_init.apply(this, arguments);
        this._is_init = false;
    };

    _pPopupDiv._on_load = function () // for async trackpopup
    {
        var ret = nexacro.Form.prototype._on_load.apply(this, arguments);

        var popup_info = this._wait_pop_position;
        if (popup_info)
        {
            if (popup_info.obj)
            {
                this._popupBy(popup_info.obj, popup_info.left, popup_info.top, popup_info.width, popup_info.height);

            }
            else
            {
                this._popup(popup_info.left, popup_info.top, popup_info.width, popup_info.height);
            }

            popup_info = null;
            delete this._wait_pop_position;
        }

        return ret;
    };

    // event overriding
    // popupdiv가 띄워져 있을때는 부모(Form) 휠이 동작 되면 안됨
    _pPopupDiv._on_bubble_mousewheel = function (elem, wheelDeltaX, wheelDeltaY, button, alt_key, ctrl_key, shift_key, canvasX, canvasY, screenX, screenY, event_bubbles, fire_comp, refer_comp, bScroll)
    {
        if (!this._is_alive) return;

        if (event_bubbles === undefined) //this is fire_comp or subcontrol
        {
            if (!refer_comp)
            {
                refer_comp = this;
                if (!refer_comp._is_reference_control)
                {
                    refer_comp = this._getReferenceComponent(refer_comp);
                }
            }

            if (this.visible && this._isEnable())
            {
                var clientXY = this._getClientXY(canvasX, canvasY);
                event_bubbles = this.on_fire_user_onmousewheel(wheelDeltaX, wheelDeltaY, button, alt_key, ctrl_key, shift_key, screenX, screenY, canvasX, canvasY, clientXY[0], clientXY[0], this, refer_comp);

                var pThis = this._getFromComponent(this);

                if (event_bubbles !== true)
                {
                    if (!pThis.onmousewheel || (pThis.onmousewheel && !pThis.onmousewheel.defaultprevented))
                    {
                        var ret = this.on_fire_sys_onmousewheel(wheelDeltaX, wheelDeltaY, button, alt_key, ctrl_key, shift_key, screenX, screenY, canvasX, canvasY, clientXY[0], clientXY[0], this, refer_comp);

                        if (ret) return false;

                        if (this.vscrollbar && this.vscrollbar.enable)
                        {
                            var vscrollbar = this.vscrollbar;
                            var old_vpos = vscrollbar._pos;
                            this._setVScrollDefaultAction(vscrollbar, wheelDeltaY);
                            var new_vpos = vscrollbar._pos;
                            if (old_vpos != new_vpos) return false;
                        }

                        if (nexacro.OSVersion == "Mac OS")
                        {
                            if (this.hscrollbar && this.hscrollbar.enable)
                            {
                                var hscrollbar = this.hscrollbar;
                                var old_hpos = hscrollbar._pos;
                                this._setHScrollDefaultAction(hscrollbar, wheelDeltaX);
                                var new_hpos = hscrollbar._pos;
                                if (old_hpos != new_hpos) return false;
                            }
                        }

                        return;
                    }

                    // 아래코드는 현재 동작x (아래코드는 부모(Form)쪽 wheel이 동작됨)
                    if (event_bubbles === false) event_bubbles = undefined;

                    if (!pThis.onmousewheel || (pThis.onmousewheel && !pThis.onmousewheel.stoppropagation))
                    {
                        if (this.parent && !this.parent._is_application)
                        {
                            // 버블링 여부는 컴포넌트에서 결정한다.
                            var canvas = this._getRecalcCanvasXY(elem, canvasX, canvasY);

                            canvasX = canvas[0];
                            canvasY = canvas[1];

                            if (this._is_subcontrol)
                            {
                                return this.parent._on_bubble_mousewheel(elem, wheelDeltaX, wheelDeltaY, button, alt_key, ctrl_key, shift_key, canvasX, canvasY, screenX, screenY, event_bubbles, null, refer_comp, bScroll);
                            }
                            else
                            {
                                return this.parent._on_bubble_mousewheel(elem, wheelDeltaX, wheelDeltaY, button, alt_key, ctrl_key, shift_key, canvasX, canvasY, screenX, screenY, false, this, refer_comp, bScroll);
                            }
                        }
                    }
                }
            }
        }
        else
        {
            if (this.visible && this._isEnable())
            {
                var clientXY = this._getClientXY(canvasX, canvasY);

                event_bubbles = this.on_fire_user_onmousewheel(wheelDeltaX, wheelDeltaY, button, alt_key, ctrl_key, shift_key, screenX, screenY, canvasX, canvasY, clientXY[0], clientXY[0], fire_comp, refer_comp);

                var pThis = this._getFromComponent(this);

                if (event_bubbles !== true)
                {
                    if (!pThis.onmousewheel || (pThis.onmousewheel && !pThis.onmousewheel.defaultprevented))
                    {
                        var ret = this.on_fire_sys_onmousewheel(wheelDeltaX, wheelDeltaY, button, alt_key, ctrl_key, shift_key, screenX, screenY, canvasX, canvasY, clientXY[0], clientXY[0], fire_comp, refer_comp);

                        if (ret) return false;

                        if (this._isWheelScrollable(wheelDeltaY) && this.vscrollbar && this.vscrollbar.enable)
                        {
                            var vscrollbar = this.vscrollbar;
                            var old_vpos = vscrollbar._pos;
                            this._setVScrollDefaultAction(vscrollbar, wheelDeltaY);
                            var new_vpos = vscrollbar._pos;
                            if (old_vpos != new_vpos) return false;
                        }

                        if (nexacro.OSVersion == "Mac OS")
                        {
                            if (this._isWheelScrollable(wheelDeltaX) && this.hscrollbar && this.hscrollbar.enable)
                            {
                                var hscrollbar = this.hscrollbar;
                                var old_hpos = hscrollbar._pos;
                                this._setHScrollDefaultAction(hscrollbar, wheelDeltaX);
                                var new_hpos = hscrollbar._pos;
                                if (old_hpos != new_hpos) return false;
                            }
                        }

                        return;
                    }
                    // 아래코드는 현재 동작x (아래 코드는 부모(Form)쪽 wheel이 동작됨)
                    if (!pThis.onmousewheel || (pThis.onmousewheel && !pThis.onmousewheel.stoppropagation))
                    {
                        if (this.parent && !this.parent._is_application)
                        {
                            // 버블링 여부는 컴포넌트에서 결정한다.
                            canvasX += this._adjust_left - this._scroll_left || 0;
                            canvasY += this._adjust_top - this._scroll_top || 0;
                            return this.parent._on_bubble_mousewheel(elem, wheelDeltaX, wheelDeltaY, button, alt_key, ctrl_key, shift_key, canvasX, canvasY, screenX, screenY, false, fire_comp, refer_comp, bScroll);
                        }
                    }
                }
            }
        }
    };

    _pPopupDiv.on_fire_sys_onslide = function (elem, touch_manager, touchinfos, xaccvalue, yaccvalue, xdeltavalue, ydeltavalue, from_comp, from_refer_comp)
    {
        nexacro.Component.prototype.on_fire_sys_onslide.call(this, elem, touch_manager, touchinfos, xaccvalue, yaccvalue, xdeltavalue, ydeltavalue, from_comp, from_refer_comp);

        return true;
    }

    delete _pPopupDiv;


    // ====================================================================
    // nexacro.PopupDivCtrl
    // ====================================================================

    nexacro.PopupDivCtrl = function (id, left, top, right, bottom, parent)
    {
        nexacro.PopupDiv.call(this, id, left, top, right, bottom, parent);
    };
    var _pPopupDivCtrl = nexacro.PopupDivCtrl.prototype = nexacro._createPrototype(nexacro.PopupDiv, nexacro.PopupDivCtrl);

    _pPopupDivCtrl._is_subcontrol = true;

    nexacro._setForControlStyleFinder(_pPopupDivCtrl);

    delete _pPopupDivCtrl;
}