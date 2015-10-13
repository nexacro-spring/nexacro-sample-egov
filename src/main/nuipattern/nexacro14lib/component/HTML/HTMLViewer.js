/*
 * HTMLViewer Component at XPLATFORM ( This component is not supported for Runtime environment )
 *
 * property (It will support the properties of the component base.)
 *	- html : get or sets html to be displayed on the component.
 *	- scrollbars : Please refer to the manual. (Div.scrollbars)
 *	- autofittype : To fit the size of the html contents, 
 *                  to adjust the height or width of the component. (none/width/height/both).
 * 
 * Copyright (c) 2014 EcoSystem of TOBESOFT
 * Licensed Free under XPLATFORM.
*/

if (!nexacro.HTMLViewer)
{
    //==============================================================================
    // TOBE.HTMLViewer_Style
    //==============================================================================
    nexacro.HTMLViewer_Style = function (target)
    {
        nexacro.Style.call(this);

        if (target)
        {
            this._target = target;
        }
    };
    
    var _pHTMLViewerStyle = nexacro._createPrototype(nexacro.Style);
    nexacro.HTMLViewer_Style.prototype = _pHTMLViewerStyle;
    _pHTMLViewerStyle._type = "TOBEHTMLViewerStyle";

    _pHTMLViewerStyle.__custom_emptyObject = function ()
    {
    };

    _pHTMLViewerStyle.__get_custom_style_value = function ()
    {
    };

    //==============================================================================
    // nexacro.HTMLViewer_CurrentStyle
    //==============================================================================
    nexacro.HTMLViewer_CurrentStyle = function ()
    {
        nexacro.CurrentStyle.call(this);
    };

    var _pHTMLViewerCurrentStyle = nexacro._createPrototype(nexacro.CurrentStyle);
    nexacro.HTMLViewer_CurrentStyle.prototype = _pHTMLViewerCurrentStyle;

    _pHTMLViewerCurrentStyle._type = "TOBEHTMLViewerCurrentStyle";

    _pHTMLViewerCurrentStyle.__custom_emptyObject = _pHTMLViewerStyle.__custom_emptyObject;
    _pHTMLViewerCurrentStyle.__get_custom_style_value = _pHTMLViewerStyle.__get_custom_style_value;

    //end of HTMLViewer Style
    delete _pHTMLViewerStyle;
    delete _pHTMLViewerCurrentStyle;


    //==============================================================================
    // nexacro.HTMLViewer
    //==============================================================================
    nexacro.HTMLViewer = function (id, position, left, top, width, height, right, bottom, parent)
    {
        nexacro.Component.call(this, id, position, left, top, width, height, right, bottom, parent);

        this.html = "";
        this.autofittype = "none"; // width, height, both, none
        this.scrollbars = "autoboth";

        //------------- internal variable --------------//		
		this._scrollbars = 3;
		this._is_scrollable = true;
        this._elem = null;
        this._apply_client_padding = false;
        
        this._is_focus_accept = false;
        this._accessibility_role = "htmlviewer";
        
        this._init_left = null;
        this._init_top = null;
        this._init_width = null;
        this._init_height = null;
        this._init_right = null;
        this._init_bottom = null;
        
		this._content_width = null;
		this._content_height = null;
		this._checkLoadImageTimer = null;
    };

    var _pHTMLViewer = nexacro._createPrototype(nexacro.Component);
    nexacro.HTMLViewer.prototype = _pHTMLViewer;

    _pHTMLViewer._type = "TOBEHTMLViewer";
    _pHTMLViewer._type_name = "HTMLViewer";


    // ====================================================================
    // nexacro.HTMLViewer : Style Part
    // ====================================================================

    // ====================================================================
    // nexacro.HTMLViewer : Create & Update
    // ====================================================================
    _pHTMLViewer.on_create_contents = function ()
    {
        var control = this.getElement();
        if (control)
        {
            this._elem = new nexacro.Element(control);            
		}
    };

    _pHTMLViewer.on_created_contents = function ()
    {
        var elem = this._elem;
        if (elem)
        {
            elem.create();
        }
        
        this._init_left = this.left;
        this._init_top = this.top;
        this._init_width = this.width;
        this._init_height = this.height;
        this._init_right = this.right;
        this._init_bottom = this.bottom;
        
        if ( this.html.length > 0 )
        {
            this.on_apply_html();
        }
        else
        {
			this.on_apply_autofittype();
        }
    };

    _pHTMLViewer.on_destroy_contents = function ()
    {
        var elem = this._elem;
        if (elem)
        {
            elem.destroy();
            this._elem = null;
        }
        elem = null;
    };

    _pHTMLViewer.on_change_containerRect = function (width, height)
    {
        var elem = this._elem;
        if (elem && this._is_created )
        {
			this._setElementPositionSize(width, height);
        }
    };

    _pHTMLViewer.on_create_custom_style = function ()
    {
        return new nexacro.HTMLViewer_Style(this);
    };

    _pHTMLViewer.on_create_custom_currentStyle = function ()
    {
        return new nexacro.HTMLViewer_CurrentStyle();
    };
    
    //===============================================================
    // nexacro.HTMLViewer : Override
    //===============================================================
    _pHTMLViewer.on_apply_custom_pseudo = function (pseudo)
    {
        var curstyle = this.currentstyle;

        var padding = this.on_find_CurrentStyle_padding(pseudo);
        if (curstyle.padding != padding)
        {
            curstyle.padding = padding;
            this.on_apply_style_padding(padding);
        }
    };

	_pHTMLViewer.on_apply_style_padding = function (padding)
	{
        var elem = this._elem;
        if (elem)
        {
			this._setElementPositionSize(this._client_width, this._client_height);
        }
	};

    _pHTMLViewer.on_getBindableProperties = function ()
    {
        return "html";
    };
    
    _pHTMLViewer.on_init_bindSource = function (columnid, propid, ds)
    {
        if (propid == "html")
        {
            this.set_html("");
            return true;
        }
    };    

    _pHTMLViewer.on_change_bindSource = function (propid, ds, row, col, index)
    {
        if (propid == "html")
        {
			this.set_html(ds.getColumn(row, col));
			return true;
        }

        return false;
    };
    
    _pHTMLViewer.on_vscroll = function (obj, e)
    {
        if (this.onvscroll && this.onvscroll._has_handlers)
        {
            e.fromobject = this;
            this.onvscroll._fireEvent(this, e);
        }

        var elem = this._elem;
        if (elem)
        {
            nexacro.__setDOMNodeVScrollPos(elem._handle, e.pos);
        }

        return true;
    };

    _pHTMLViewer.on_hscroll = function (obj, e)
    {
        if (this.onhscroll && this.onhscroll._has_handlers)
        {
            e.fromobject = this;
            this.onhscroll._fireEvent(this, e);
        }

        var elem = this._elem;
        if (elem)
        {
            nexacro.__setDOMNodeHScrollPos(elem._handle, e.pos);
        }

        return true;
    };    
    
    // ====================================================================
    // nexacro.HTMLViewer : Property
    // ====================================================================
	_pHTMLViewer.set_html = function (v)
	{
		if (v != this.html)
		{
			this.html = v;
			this.on_apply_html();
		}
	};

    _pHTMLViewer.on_apply_html = function ()
    {
        var elem = this._elem;
        if ( elem )
        {
			elem.setElementSize(0, 0);
			elem.setElementVisible(false);
			
            var html = this.html;
            
            if (nexacro._isNull(html))
            {
                html = "";
            }
            else
            {
                html = nexacro._toString(html);
            }
            
            var handle = elem._handle;
            
            handle.style.width = "auto";
            handle.style.height = "auto";
			
			handle.innerHTML = html;
			
			var checkLoadImage = false;
			var image;
			var images = handle.getElementsByTagName("img");
			var width, height;
			for (var i=0,len=images.length; i<len; i++)
			{
				image = images[i];
				width = image.getAttribute("width");
				height = image.getAttribute("height");				
				if ( !width && !height )
				{
					checkLoadImage = true;
					break;
				}
			}
			
			if ( checkLoadImage )
			{
				var timer = this._checkLoadImageTimer;
				if ( !timer )
				{
					timer = new nexacro.CallbackTimer(this, this._callbackLoadImageTimer, 100);
					
					this._checkLoadImageTimer = timer;
				}
				timer.start();
			}
			else
			{
				this._update_element();
			}
        }
    };
    
	_pHTMLViewer.set_autofittype = function (v)
	{
		if (v != this.autofittype)
		{
			if ( nexacro._isNull(v) )
			{
				v = "none";
			}
			this.autofittype = v;
			this.on_apply_autofittype();
			this._update_scroll();
		}
	};

    _pHTMLViewer.on_apply_autofittype = function ()
    {
		var control = this.getElement();
        var elem = this._elem;
        if (control && elem)
        {
            var autofittype = this.autofittype;
            var left = this.left;
            var top = this.top;
            var width = null;
            var height = null;
            var right = null;
            var bottom = null;
			
			var pseudo = this._pseudo;
			var border = this.on_find_CurrentStyle_border(pseudo);
			var padding = this.on_find_CurrentStyle_padding(pseudo);

            if ( autofittype == "both" )
            {
				width = this._content_width;
				width += (border ? border._getBorderWidth() : 0);
				width += (padding ? padding._getPaddingWidth() : 0);
				
				height = this._content_height;
				height += (border ? border._getBorderHeight() : 0);
				height += (padding ? padding._getPaddingHeight() : 0);
			}
			else if ( autofittype == "height" )
			{
				width = this._init_width;
				
				height = this._content_height;
				height += (border ? border._getBorderHeight() : 0);
				height += (padding ? padding._getPaddingHeight() : 0);	
				
				if ( this.hscrollbar )
				{
					height += this.hscrollbar._adjust_height;
				}
			}
			else if ( autofittype == "width" )
			{
				width = this._content_width;
				width += (border ? border._getBorderWidth() : 0);
				width += (padding ? padding._getPaddingWidth() : 0);
				
				if ( this.vscrollbar )
				{
					width += this.vscrollbar._adjust_width;
				}
				
				height = this._init_height;
			}
			else
			{				
				width = this._init_width;
				height = this._init_height;
				right = this._init_right;
				bottom = this._init_bottom;
			}

			this.move(left, top, width, height, right, bottom);
        }
    };    
        
    // ====================================================================
    // nexacro.HTMLViewer : Methods
    // ==================================================================== 
    
    // ====================================================================
    // nexacro.HTMLViewer : Event Handlers
    // ====================================================================    
    
    // ====================================================================
    // nexacro.HTMLViewer : Logical Part
    // ====================================================================
    _pHTMLViewer._setElementPositionSize = function(width, height)
    {
		var elem = this._elem;
		if ( elem )
		{
			var padding = this.on_find_CurrentStyle_padding(this._pseudo);

			width = width - padding._getPaddingWidth();
			height = height - padding._getPaddingHeight();

			elem.setElementPosition(padding.left, padding.top);
			elem.setElementSize(width, height);
		}
    };
    
    _pHTMLViewer._callbackLoadImageTimer = function ()
	{
		var elem = this._elem;
		var handle = elem._handle;
		var images = handle.getElementsByTagName("img");
		var len = images.length;
		var completeLen = 0;
		for (var i=0; i<len; i++)
		{
			if ( images[i].complete )
			{
				completeLen++;
			}
		}
		
		if ( completeLen == len )
		{
			this._checkLoadImageTimer.stop();
			this._update_element();
		}
	};
	
    _pHTMLViewer._update_element = function ()
    {
		var elem = this._elem;
		if ( elem )
		{
			var handle = elem._handle;    
			this._content_width = handle.offsetWidth;
			this._content_height = handle.offsetHeight;
						
			this.on_apply_autofittype();
			this._update_scroll();
			
			this._setElementPositionSize(this._client_width, this._client_height);
			
			elem.setElementVisible(true);
		}
	};
       
    _pHTMLViewer._update_scroll = function ()
    {
        var control = this.getElement();
        var elem = this._elem;
        if (control && elem)
        {
			var scrollWidth = this._content_width;
			var scrollHeight = this._content_height;

			var pseudo = this._pseudo;
			var border = this.on_find_CurrentStyle_border(pseudo);
			var padding = this.on_find_CurrentStyle_padding(pseudo);

			if ( scrollWidth > this._client_width )
			{
				scrollWidth += (border ? border._getBorderWidth() : 0);
				scrollWidth += (padding ? padding._getPaddingWidth() : 0);
			}
			if ( scrollHeight > this._client_height )
			{
				scrollHeight += (border ? border._getBorderWidth() : 0);
				scrollHeight += (padding ? padding._getPaddingWidth() : 0);
			}			

            control.setElementScrollMaxSize(scrollWidth, scrollHeight);
            
			this._onResetScrollBar();
        }
    };  
}