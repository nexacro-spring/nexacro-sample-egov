//CSS=theme.css
    
(function() {
  return function() {
    var obj;   
    
    obj = new nexacro.Style_accessibility("","true","all","","","");
    this._addCss("MainFrame", "accessibility", obj, ["normal"]);
    this._addCss("TitleBarControl", "accessibility", obj, ["normal"]);
    this._addCss("TitleBarControl>#minbutton", "accessibility", obj, ["normal"]);
    this._addCss("TitleBarControl>#maxbutton", "accessibility", obj, ["normal"]);
    this._addCss("TitleBarControl>#normalbutton", "accessibility", obj, ["normal"]);
    this._addCss("TitleBarControl>#closebutton", "accessibility", obj, ["normal"]);
    this._addCss("StatusbarControl", "accessibility", obj, ["normal"]);
    this._addCss("StatusbarControl>#progressbar", "accessibility", obj, ["normal"]);
    this._addCss("StatusbarControl>#zoomcombo", "accessibility", obj, ["normal"]);
    this._addCss("StatusbarForm>#zoomcombo>#comboedit", "accessibility", obj, ["normal"]);
    this._addCss("StatusbarControl>#zoomcombo>#dropbutton", "accessibility", obj, ["normal"]);
    this._addCss("Form", "accessibility", obj, ["normal"]);
    this._addCss("VScrollBar", "accessibility", obj, ["normal"]);
    this._addCss("VScrollBar>#incbutton", "accessibility", obj, ["normal"]);
    this._addCss("VScrollBar>#decbutton", "accessibility", obj, ["normal"]);
    this._addCss("VScrollBar>#trackbar", "accessibility", obj, ["normal"]);
    this._addCss("VScrollBarControl", "accessibility", obj, ["normal"]);
    this._addCss("VScrollBarControl>#incbutton", "accessibility", obj, ["normal"]);
    this._addCss("VScrollBarControl>#decbutton", "accessibility", obj, ["normal"]);
    this._addCss("VScrollBarControl>#trackbar", "accessibility", obj, ["normal"]);
    this._addCss("HScrollBar", "accessibility", obj, ["normal"]);
    this._addCss("HScrollBar>#incbutton", "accessibility", obj, ["normal"]);
    this._addCss("HScrollBar>#decbutton", "accessibility", obj, ["normal"]);
    this._addCss("HScrollBar>#trackbar", "accessibility", obj, ["normal"]);
    this._addCss("HScrollBarControl", "accessibility", obj, ["normal"]);
    this._addCss("HScrollBarControl>#incbutton", "accessibility", obj, ["normal"]);
    this._addCss("HScrollBarControl>#decbutton", "accessibility", obj, ["normal"]);
    this._addCss("HScrollBarControl>#trackbar", "accessibility", obj, ["normal"]);
    this._addCss("Button", "accessibility", obj, ["normal"]);
    this._addCss("ButtonControl", "accessibility", obj, ["normal"]);
    this._addCss("Spin", "accessibility", obj, ["normal"]);
    this._addCss("Spin>#spinedit", "accessibility", obj, ["normal"]);
    this._addCss("Spin>#spinupbutton", "accessibility", obj, ["normal"]);
    this._addCss("Spin>#spindownbutton", "accessibility", obj, ["normal"]);
    this._addCss("SpinControl", "accessibility", obj, ["normal"]);
    this._addCss("SpinControl>#spinedit", "accessibility", obj, ["normal"]);
    this._addCss("SpinControl>#spinupbutton", "accessibility", obj, ["normal"]);
    this._addCss("SpinControl>#spindownbutton", "accessibility", obj, ["normal"]);
    this._addCss("CheckBox", "accessibility", obj, ["normal"]);
    this._addCss("CheckBoxControl", "accessibility", obj, ["normal"]);
    this._addCss("Radio", "accessibility", obj, ["normal"]);
    this._addCss("RadioControl", "accessibility", obj, ["normal"]);
    this._addCss("ListBox", "accessibility", obj, ["normal"]);
    this._addCss("ListBoxControl", "accessibility", obj, ["normal"]);
    this._addCss("Menu", "accessibility", obj, ["normal"]);
    this._addCss("MenuControl", "accessibility", obj, ["normal"]);
    this._addCss("ImageViewer", "accessibility", obj, ["normal"]);
    this._addCss("ImageViewerControl", "accessibility", obj, ["normal"]);
    this._addCss("GroupBox", "accessibility", obj, ["normal"]);
    this._addCss("GroupBoxControl", "accessibility", obj, ["normal"]);
    this._addCss("ProgressBar", "accessibility", obj, ["normal"]);
    this._addCss("ProgressBarControl", "accessibility", obj, ["normal"]);
    this._addCss("Calendar", "accessibility", obj, ["normal"]);
    this._addCss("Calendar>#dropbutton", "accessibility", obj, ["normal"]);
    this._addCss("Calendar>#calendaredit", "accessibility", obj, ["normal", "mouseover", "focused", "disabled"]);
    this._addCss("Calendar>#spinupbutton", "accessibility", obj, ["normal"]);
    this._addCss("Calendar>#spindownbutton", "accessibility", obj, ["normal"]);
    this._addCss("CalendarControl", "accessibility", obj, ["normal"]);
    this._addCss("CalendarControl>#dropbutton", "accessibility", obj, ["normal"]);
    this._addCss("CalendarControl>#calendaredit", "accessibility", obj, ["normal", "mouseover", "focused", "selected"]);
    this._addCss("CalendarControl>#calendar0edit", "accessibility", obj, ["disabled"]);
    this._addCss("CalendarControl>#spinupbutton", "accessibility", obj, ["normal"]);
    this._addCss("CalendarControl>#spindownbutton", "accessibility", obj, ["normal"]);
    this._addCss("Tab", "accessibility", obj, ["normal"]);
    this._addCss("Tab>#extrabutton", "accessibility", obj, ["normal"]);
    this._addCss("TabControl", "accessibility", obj, ["normal"]);
    this._addCss("TabControl>#extrabutton", "accessibility", obj, ["normal"]);
    this._addCss("Grid>#controlcheckbox", "accessibility", obj, ["normal"]);
    this._addCss("DivControl", "accessibility", obj, ["normal"]);
    this._addCss("PopupDiv", "accessibility", obj, ["normal"]);

    obj = new nexacro.Style_background("","theme://images/Titlebar_bg.png","repeat-x","0","0","0","0","true");
    this._addCss("MainFrame", "background", obj, ["normal"]);
    this._addCss("TitleBarControl", "background", obj, ["normal"]);

    obj = new nexacro.Style_border("2","solid","#666666ff","");
    this._addCss("MainFrame", "border", obj, ["normal"]);

    obj = new nexacro.Style_bordertype("round","6","6","true","true","true","true");
    this._addCss("MainFrame", "bordertype", obj, ["normal"]);

    obj = new nexacro.Style_color("#444444");
    this._addCss("MainFrame", "color", obj, ["normal"]);
    this._addCss("Edit", "color", obj, ["readonly"]);
    this._addCss("TextArea", "color", obj, ["readonly"]);
    this._addCss("MaskEdit", "color", obj, ["readonly"]);
    this._addCss("Combo", "color", obj, ["readonly", "readonly>#comboedit"]);

    obj = new nexacro.Style_font("");
    this._addCss("MainFrame", "font", obj, ["normal"]);
    this._addCss("TitleBarControl>#minbutton", "font", obj, ["normal"]);
    this._addCss("TitleBarControl>#maxbutton", "font", obj, ["normal"]);
    this._addCss("TitleBarControl>#normalbutton", "font", obj, ["normal"]);
    this._addCss("TitleBarControl>#closebutton", "font", obj, ["normal"]);
    this._addCss("StatusbarControl>#zoomcombo>#dropbutton", "font", obj, ["normal"]);
    this._addCss("VScrollBar", "font", obj, ["normal"]);
    this._addCss("VScrollBar>#incbutton", "font", obj, ["normal"]);
    this._addCss("VScrollBar>#decbutton", "font", obj, ["normal"]);
    this._addCss("VScrollBar>#trackbar", "font", obj, ["normal"]);
    this._addCss("VScrollBarControl", "font", obj, ["normal"]);
    this._addCss("VScrollBarControl>#incbutton", "font", obj, ["normal"]);
    this._addCss("VScrollBarControl>#decbutton", "font", obj, ["normal"]);
    this._addCss("VScrollBarControl>#trackbar", "font", obj, ["normal"]);
    this._addCss("HScrollBar", "font", obj, ["normal"]);
    this._addCss("HScrollBar>#incbutton", "font", obj, ["normal"]);
    this._addCss("HScrollBar>#decbutton", "font", obj, ["normal"]);
    this._addCss("HScrollBar>#trackbar", "font", obj, ["normal"]);
    this._addCss("HScrollBarControl", "font", obj, ["normal"]);
    this._addCss("HScrollBarControl>#incbutton", "font", obj, ["normal"]);
    this._addCss("HScrollBarControl>#decbutton", "font", obj, ["normal"]);
    this._addCss("HScrollBarControl>#trackbar", "font", obj, ["normal"]);
    this._addCss("Button", "font", obj, ["normal"]);
    this._addCss("ButtonControl", "font", obj, ["normal"]);
    this._addCss("Spin", "font", obj, ["normal"]);
    this._addCss("Spin>#spinedit", "font", obj, ["normal"]);
    this._addCss("Spin>#spinupbutton", "font", obj, ["normal"]);
    this._addCss("Spin>#spindownbutton", "font", obj, ["normal"]);
    this._addCss("SpinControl", "font", obj, ["normal"]);
    this._addCss("SpinControl>#spinedit", "font", obj, ["normal"]);
    this._addCss("SpinControl>#spinupbutton", "font", obj, ["normal"]);
    this._addCss("SpinControl>#spindownbutton", "font", obj, ["normal"]);
    this._addCss("CheckBox", "font", obj, ["normal"]);
    this._addCss("CheckBoxControl", "font", obj, ["normal"]);
    this._addCss("Radio", "font", obj, ["normal"]);
    this._addCss("RadioControl", "font", obj, ["normal"]);
    this._addCss("ListBox", "font", obj, ["normal"]);
    this._addCss("ListBoxControl", "font", obj, ["normal"]);
    this._addCss("ImageViewer", "font", obj, ["normal"]);
    this._addCss("ImageViewerControl", "font", obj, ["normal"]);
    this._addCss("GroupBox", "font", obj, ["normal"]);
    this._addCss("GroupBoxControl", "font", obj, ["normal"]);
    this._addCss("ProgressBar", "font", obj, ["normal"]);
    this._addCss("ProgressBarControl", "font", obj, ["normal"]);
    this._addCss("Calendar>#dropbutton", "font", obj, ["normal"]);
    this._addCss("Calendar>#calendaredit", "font", obj, ["normal", "mouseover", "focused", "disabled"]);
    this._addCss("Calendar>#spinupbutton", "font", obj, ["normal"]);
    this._addCss("Calendar>#spindownbutton", "font", obj, ["normal"]);
    this._addCss("Calendar>#popupcalendar>#prevbutton", "font", obj, ["normal"]);
    this._addCss("Calendar>#popupcalendar>#nextbutton", "font", obj, ["normal"]);
    this._addCss("Calendar>#popupcalendar>#yearspin>#spinupbutton", "font", obj, ["normal"]);
    this._addCss("Calendar>#popupcalendar>#yearspin>#spindownbutton", "font", obj, ["normal"]);
    this._addCss("Calendar>#popupcalendar>#monthspin>#spinupbutton", "font", obj, ["normal"]);
    this._addCss("Calendar>#popupcalendar>#monthspin>#spindownbutton", "font", obj, ["normal"]);
    this._addCss("CalendarControl>#dropbutton", "font", obj, ["normal"]);
    this._addCss("CalendarControl>#calendaredit", "font", obj, ["normal", "mouseover", "focused", "selected"]);
    this._addCss("CalendarControl>#calendar0edit", "font", obj, ["disabled"]);
    this._addCss("CalendarControl>#spinupbutton", "font", obj, ["normal"]);
    this._addCss("CalendarControl>#spindownbutton", "font", obj, ["normal"]);
    this._addCss("CalendarControl>#popupcalendar>#prevbutton", "font", obj, ["normal"]);
    this._addCss("CalendarControl>#popupcalendar>#nextbutton", "font", obj, ["normal"]);
    this._addCss("CalendarControl>#popupcalendar>#yearspin>#spinupbutton", "font", obj, ["normal"]);
    this._addCss("CalendarControl>#popupcalendar>#yearspin>#spindownbutton", "font", obj, ["normal"]);
    this._addCss("CalendarControl>#popupcalendar>#monthspin>#spinupbutton", "font", obj, ["normal"]);
    this._addCss("CalendarControl>#popupcalendar>#monthspin>#spindownbutton", "font", obj, ["normal"]);
    this._addCss("Tab", "font", obj, ["normal"]);
    this._addCss("TabControl", "font", obj, ["normal"]);
    this._addCss("DivControl", "font", obj, ["normal"]);
    this._addCss("PopupDiv", "font", obj, ["normal"]);
    this._addCss("FileDownload", "font", obj, ["normal"]);
    this._addCss("FileDownloadControl", "font", obj, ["normal"]);

    obj = new nexacro.Style_gradation("");
    this._addCss("MainFrame", "gradation", obj, ["normal"]);
    this._addCss("TitleBarControl", "gradation", obj, ["normal"]);
    this._addCss("TitleBarControl>#minbutton", "gradation", obj, ["normal"]);
    this._addCss("TitleBarControl>#maxbutton", "gradation", obj, ["normal"]);
    this._addCss("TitleBarControl>#normalbutton", "gradation", obj, ["normal"]);
    this._addCss("TitleBarControl>#closebutton", "gradation", obj, ["normal"]);
    this._addCss("StatusbarControl", "gradation", obj, ["normal"]);
    this._addCss("StatusbarControl>#progressbar", "gradation", obj, ["normal"]);
    this._addCss("StatusbarControl>#zoomcombo", "gradation", obj, ["normal"]);
    this._addCss("StatusbarForm>#zoomcombo>#comboedit", "gradation", obj, ["normal"]);
    this._addCss("Form", "gradation", obj, ["normal"]);
    this._addCss("VScrollBar", "gradation", obj, ["normal"]);
    this._addCss("VScrollBarControl", "gradation", obj, ["normal"]);
    this._addCss("HScrollBar", "gradation", obj, ["normal"]);
    this._addCss("HScrollBarControl", "gradation", obj, ["normal"]);
    this._addCss("Spin", "gradation", obj, ["normal"]);
    this._addCss("Spin>#spinedit", "gradation", obj, ["normal"]);
    this._addCss("SpinControl", "gradation", obj, ["normal"]);
    this._addCss("SpinControl>#spinedit", "gradation", obj, ["normal"]);
    this._addCss("CheckBox", "gradation", obj, ["normal"]);
    this._addCss("CheckBoxControl", "gradation", obj, ["normal"]);
    this._addCss("Radio", "gradation", obj, ["normal"]);
    this._addCss("RadioControl", "gradation", obj, ["normal"]);
    this._addCss("ListBox", "gradation", obj, ["normal"]);
    this._addCss("ListBoxControl", "gradation", obj, ["normal"]);
    this._addCss("ImageViewer", "gradation", obj, ["normal"]);
    this._addCss("ImageViewerControl", "gradation", obj, ["normal"]);
    this._addCss("GroupBox", "gradation", obj, ["normal"]);
    this._addCss("GroupBoxControl", "gradation", obj, ["normal"]);
    this._addCss("ProgressBar", "gradation", obj, ["normal"]);
    this._addCss("ProgressBarControl", "gradation", obj, ["normal"]);
    this._addCss("DatePicker", "gradation", obj, ["normal"]);
    this._addCss("DatePickerControl", "gradation", obj, ["normal"]);
    this._addCss("Calendar", "gradation", obj, ["normal"]);
    this._addCss("Calendar>#dropbutton", "gradation", obj, ["normal"]);
    this._addCss("Calendar>#calendaredit", "gradation", obj, ["normal", "mouseover", "focused", "disabled"]);
    this._addCss("Calendar>#popupcalendar>#prevbutton", "gradation", obj, ["normal"]);
    this._addCss("Calendar>#popupcalendar>#nextbutton", "gradation", obj, ["normal"]);
    this._addCss("Calendar>#popupcalendar>#yearspin", "gradation", obj, ["normal", "mouseover", "focused"]);
    this._addCss("Calendar>#popupcalendar>#yearspin>#spinupbutton", "gradation", obj, ["normal"]);
    this._addCss("Calendar>#popupcalendar>#yearspin>#spindownbutton", "gradation", obj, ["normal"]);
    this._addCss("Calendar>#popupcalendar>#monthspin", "gradation", obj, ["normal", "mouseover", "focused"]);
    this._addCss("Calendar>#popupcalendar>#monthspin>#spinedit", "gradation", obj, ["normal"]);
    this._addCss("Calendar>#popupcalendar>#monthspin>#spinupbutton", "gradation", obj, ["normal"]);
    this._addCss("Calendar>#popupcalendar>#monthspin>#spindownbutton", "gradation", obj, ["normal"]);
    this._addCss("CalendarControl", "gradation", obj, ["normal"]);
    this._addCss("CalendarControl>#dropbutton", "gradation", obj, ["normal"]);
    this._addCss("CalendarControl>#calendaredit", "gradation", obj, ["normal", "mouseover", "focused", "selected"]);
    this._addCss("CalendarControl>#calendar0edit", "gradation", obj, ["disabled"]);
    this._addCss("CalendarControl>#popupcalendar>#prevbutton", "gradation", obj, ["normal"]);
    this._addCss("CalendarControl>#popupcalendar>#nextbutton", "gradation", obj, ["normal"]);
    this._addCss("CalendarControl>#popupcalendar>#yearspin", "gradation", obj, ["normal", "mouseover", "focused"]);
    this._addCss("CalendarControl>#popupcalendar>#yearspin>#spinupbutton", "gradation", obj, ["normal"]);
    this._addCss("CalendarControl>#popupcalendar>#yearspin>#spindownbutton", "gradation", obj, ["normal"]);
    this._addCss("CalendarControl>#popupcalendar>#monthspin", "gradation", obj, ["normal", "mouseover", "focused"]);
    this._addCss("CalendarControl>#popupcalendar>#monthspin>#spinedit", "gradation", obj, ["normal"]);
    this._addCss("CalendarControl>#popupcalendar>#monthspin>#spinupbutton", "gradation", obj, ["normal"]);
    this._addCss("CalendarControl>#popupcalendar>#monthspin>#spindownbutton", "gradation", obj, ["normal"]);
    this._addCss("Tab", "gradation", obj, ["normal"]);
    this._addCss("TabControl", "gradation", obj, ["normal"]);
    this._addCss("Grid", "gradation", obj, ["normal"]);
    this._addCss("Grid>#head", "gradation", obj, ["normal"]);
    this._addCss("Grid>#body", "gradation", obj, ["normal", "disabled"]);
    this._addCss("Grid>#summ", "gradation", obj, ["normal"]);
    this._addCss("Grid>#summary", "gradation", obj, ["normal"]);
    this._addCss("Grid>#controlcheckbox", "gradation", obj, ["normal"]);
    this._addCss("DivControl", "gradation", obj, ["normal"]);
    this._addCss("PopupDiv", "gradation", obj, ["normal"]);
    this._addCss("Step", "gradation", obj, ["normal"]);
    this._addCss("StepControl", "gradation", obj, ["normal"]);
    this._addCss("FileUpload", "gradation", obj, ["normal"]);
    this._addCss("FileUploadControl", "gradation", obj, ["normal"]);

    obj = new nexacro.Style_value("28");
    this._addCss("MainFrame", "menubarheight", obj, ["normal"]);

    obj = new nexacro.Style_value("");
    this._addCss("MainFrame", "opacity", obj, ["normal"]);
    this._addCss("TitleBarControl", "opacity", obj, ["normal"]);
    this._addCss("TitleBarControl>#minbutton", "opacity", obj, ["normal"]);
    this._addCss("TitleBarControl>#maxbutton", "opacity", obj, ["normal"]);
    this._addCss("TitleBarControl>#normalbutton", "opacity", obj, ["normal"]);
    this._addCss("TitleBarControl>#closebutton", "opacity", obj, ["normal"]);
    this._addCss("StatusbarControl>#progressbar", "opacity", obj, ["normal"]);
    this._addCss("StatusbarControl>#zoomcombo", "opacity", obj, ["normal"]);
    this._addCss("StatusbarForm>#zoomcombo>#comboedit", "opacity", obj, ["normal"]);
    this._addCss("StatusbarControl>#zoomcombo>#dropbutton", "opacity", obj, ["normal"]);
    this._addCss("Form", "opacity", obj, ["normal"]);
    this._addCss("VScrollBar", "opacity", obj, ["normal"]);
    this._addCss("VScrollBar>#incbutton", "opacity", obj, ["normal"]);
    this._addCss("VScrollBar>#decbutton", "opacity", obj, ["normal"]);
    this._addCss("VScrollBar>#trackbar", "opacity", obj, ["normal"]);
    this._addCss("VScrollBarControl", "opacity", obj, ["normal"]);
    this._addCss("VScrollBarControl>#incbutton", "opacity", obj, ["normal"]);
    this._addCss("VScrollBarControl>#decbutton", "opacity", obj, ["normal"]);
    this._addCss("VScrollBarControl>#trackbar", "opacity", obj, ["normal"]);
    this._addCss("HScrollBar", "opacity", obj, ["normal"]);
    this._addCss("HScrollBar>#incbutton", "opacity", obj, ["normal"]);
    this._addCss("HScrollBar>#decbutton", "opacity", obj, ["normal"]);
    this._addCss("HScrollBar>#trackbar", "opacity", obj, ["normal"]);
    this._addCss("HScrollBarControl", "opacity", obj, ["normal"]);
    this._addCss("HScrollBarControl>#incbutton", "opacity", obj, ["normal"]);
    this._addCss("HScrollBarControl>#decbutton", "opacity", obj, ["normal"]);
    this._addCss("HScrollBarControl>#trackbar", "opacity", obj, ["normal"]);
    this._addCss("Button", "opacity", obj, ["normal"]);
    this._addCss("ButtonControl", "opacity", obj, ["normal"]);
    this._addCss("Spin", "opacity", obj, ["normal"]);
    this._addCss("Spin>#spinedit", "opacity", obj, ["normal"]);
    this._addCss("Spin>#spinupbutton", "opacity", obj, ["normal"]);
    this._addCss("Spin>#spindownbutton", "opacity", obj, ["normal"]);
    this._addCss("SpinControl", "opacity", obj, ["normal"]);
    this._addCss("SpinControl>#spinedit", "opacity", obj, ["normal"]);
    this._addCss("SpinControl>#spinupbutton", "opacity", obj, ["normal"]);
    this._addCss("SpinControl>#spindownbutton", "opacity", obj, ["normal"]);
    this._addCss("CheckBox", "opacity", obj, ["normal"]);
    this._addCss("CheckBoxControl", "opacity", obj, ["normal"]);
    this._addCss("Radio", "opacity", obj, ["normal"]);
    this._addCss("RadioControl", "opacity", obj, ["normal"]);
    this._addCss("ListBox", "opacity", obj, ["normal"]);
    this._addCss("ListBoxControl", "opacity", obj, ["normal"]);
    this._addCss("Menu", "opacity", obj, ["normal"]);
    this._addCss("MenuControl", "opacity", obj, ["normal"]);
    this._addCss("GroupBox", "opacity", obj, ["normal"]);
    this._addCss("GroupBoxControl", "opacity", obj, ["normal"]);
    this._addCss("ProgressBar", "opacity", obj, ["normal"]);
    this._addCss("ProgressBarControl", "opacity", obj, ["normal"]);
    this._addCss("DatePicker", "opacity", obj, ["normal"]);
    this._addCss("DatePickerControl", "opacity", obj, ["normal"]);
    this._addCss("Calendar", "opacity", obj, ["normal"]);
    this._addCss("Calendar>#dropbutton", "opacity", obj, ["normal"]);
    this._addCss("Calendar>#spinupbutton", "opacity", obj, ["normal"]);
    this._addCss("Calendar>#spindownbutton", "opacity", obj, ["normal"]);
    this._addCss("Calendar>#popupcalendar>#prevbutton", "opacity", obj, ["normal"]);
    this._addCss("Calendar>#popupcalendar>#nextbutton", "opacity", obj, ["normal"]);
    this._addCss("Calendar>#popupcalendar>#yearspin", "opacity", obj, ["normal", "mouseover", "focused"]);
    this._addCss("Calendar>#popupcalendar>#monthspin", "opacity", obj, ["normal", "mouseover", "focused"]);
    this._addCss("Calendar>#popupcalendar>#monthspin>#spinedit", "opacity", obj, ["normal"]);
    this._addCss("CalendarControl", "opacity", obj, ["normal"]);
    this._addCss("CalendarControl>#dropbutton", "opacity", obj, ["normal"]);
    this._addCss("CalendarControl>#spinupbutton", "opacity", obj, ["normal"]);
    this._addCss("CalendarControl>#spindownbutton", "opacity", obj, ["normal"]);
    this._addCss("CalendarControl>#popupcalendar>#prevbutton", "opacity", obj, ["normal"]);
    this._addCss("CalendarControl>#popupcalendar>#nextbutton", "opacity", obj, ["normal"]);
    this._addCss("CalendarControl>#popupcalendar>#yearspin", "opacity", obj, ["normal", "mouseover", "focused"]);
    this._addCss("CalendarControl>#popupcalendar>#monthspin", "opacity", obj, ["normal", "mouseover", "focused"]);
    this._addCss("CalendarControl>#popupcalendar>#monthspin>#spinedit", "opacity", obj, ["normal"]);
    this._addCss("Tab", "opacity", obj, ["normal"]);
    this._addCss("TabControl", "opacity", obj, ["normal"]);
    this._addCss("Grid", "opacity", obj, ["normal"]);
    this._addCss("Grid>#controlcheckbox", "opacity", obj, ["normal"]);
    this._addCss("DivControl", "opacity", obj, ["normal"]);
    this._addCss("PopupDiv", "opacity", obj, ["normal"]);
    this._addCss("Step", "opacity", obj, ["normal"]);
    this._addCss("StepControl", "opacity", obj, ["normal"]);
    this._addCss("FileUpload", "opacity", obj, ["normal"]);
    this._addCss("FileUploadControl", "opacity", obj, ["normal"]);
    this._addCss("FileDownload", "opacity", obj, ["normal"]);
    this._addCss("FileDownloadControl", "opacity", obj, ["normal"]);

    obj = new nexacro.Style_value("");
    this._addCss("MainFrame", "openstatuseffect", obj, ["normal"]);

    obj = new nexacro.Style_value("26");
    this._addCss("MainFrame", "statusbarheight", obj, ["normal"]);

    obj = new nexacro.Style_value("24");
    this._addCss("MainFrame", "titlebarheight", obj, ["normal"]);

    obj = new nexacro.Style_border("2","solid","#235798ff","");
    this._addCss("MainFrame", "border", obj, ["deactivate"]);

    obj = new nexacro.Style_align("left top");
    this._addCss("ChildFrame", "align", obj, ["normal"]);
    this._addCss("FrameSet", "align", obj, ["normal"]);
    this._addCss("VFrameSet", "align", obj, ["normal"]);
    this._addCss("HFrameSet", "align", obj, ["normal"]);
    this._addCss("TextArea", "align", obj, ["normal"]);
    this._addCss("Grid>#controltextarea", "align", obj, ["normal"]);

    obj = new nexacro.Style_background("","","","0","0","0","0","true");
    this._addCss("ChildFrame", "background", obj, ["normal"]);
    this._addCss("TitleBarControl>#minbutton", "background", obj, ["normal", "mouseover", "pushed"]);
    this._addCss("TitleBarControl>#maxbutton", "background", obj, ["normal", "mouseover", "pushed"]);
    this._addCss("TitleBarControl>#normalbutton", "background", obj, ["normal", "mouseover", "pushed"]);
    this._addCss("TitleBarControl>#closebutton", "background", obj, ["normal", "mouseover", "pushed"]);
    this._addCss("StatusbarControl>#progressbar", "background", obj, ["normal"]);
    this._addCss("StatusbarForm>#zoomcombo>#comboedit", "background", obj, ["normal"]);
    this._addCss("Static", "background", obj, ["normal", "focused"]);
    this._addCss("CheckBox", "background", obj, ["normal", "mouseover", "selected", "focused", "pushed"]);
    this._addCss("CheckBoxControl", "background", obj, ["normal", "mouseover", "selected", "focused", "pushed"]);
    this._addCss("Radio", "background", obj, ["normal"]);
    this._addCss("RadioControl", "background", obj, ["normal"]);
    this._addCss("Combo>#comboedit", "background", obj, ["normal", "mouseover", "pushed", "focused"]);
    this._addCss("Calendar", "background", obj, ["readonly"]);
    this._addCss("Calendar>#dropbutton", "background", obj, ["normal"]);
    this._addCss("Calendar>#calendaredit", "background", obj, ["normal", "mouseover", "focused", "disabled"]);
    this._addCss("Calendar>#popupcalendar>#prevbutton", "background", obj, ["normal"]);
    this._addCss("Calendar>#popupcalendar>#nextbutton", "background", obj, ["normal"]);
    this._addCss("Calendar>#popupcalendar>#yearspin", "background", obj, ["normal", "mouseover", "focused"]);
    this._addCss("Calendar>#popupcalendar>#yearspin>#spinupbutton", "background", obj, ["normal"]);
    this._addCss("Calendar>#popupcalendar>#yearspin>#spindownbutton", "background", obj, ["normal"]);
    this._addCss("Calendar>#popupcalendar>#monthspin>#spinupbutton", "background", obj, ["normal"]);
    this._addCss("Calendar>#popupcalendar>#monthspin>#spindownbutton", "background", obj, ["normal"]);
    this._addCss("CalendarControl", "background", obj, ["readonly"]);
    this._addCss("CalendarControl>#dropbutton", "background", obj, ["normal"]);
    this._addCss("CalendarControl>#calendaredit", "background", obj, ["normal", "mouseover", "focused", "selected"]);
    this._addCss("CalendarControl>#calendar0edit", "background", obj, ["disabled"]);
    this._addCss("CalendarControl>#popupcalendar>#prevbutton", "background", obj, ["normal"]);
    this._addCss("CalendarControl>#popupcalendar>#nextbutton", "background", obj, ["normal"]);
    this._addCss("CalendarControl>#popupcalendar>#yearspin", "background", obj, ["normal", "mouseover", "focused"]);
    this._addCss("CalendarControl>#popupcalendar>#yearspin>#spinupbutton", "background", obj, ["normal"]);
    this._addCss("CalendarControl>#popupcalendar>#yearspin>#spindownbutton", "background", obj, ["normal"]);
    this._addCss("CalendarControl>#popupcalendar>#monthspin>#spinupbutton", "background", obj, ["normal"]);
    this._addCss("CalendarControl>#popupcalendar>#monthspin>#spindownbutton", "background", obj, ["normal"]);
    this._addCss("Tab", "background", obj, ["normal"]);
    this._addCss("Tab>#extrabutton", "background", obj, ["normal"]);
    this._addCss("TabControl", "background", obj, ["normal"]);
    this._addCss("TabControl>#extrabutton", "background", obj, ["normal"]);
    this._addCss("Grid", "background", obj, ["normal"]);
    this._addCss("Grid>#controlcombo>#comboedit", "background", obj, ["normal", "mouseover", "pushed", "selected", "focused"]);
    this._addCss("Grid>#controlcheckbox", "background", obj, ["normal"]);
    this._addCss("Grid>#controlexpand", "background", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("Grid>#controlcalendar>#calendaredit", "background", obj, ["normal"]);
    this._addCss("Div", "background", obj, ["normal"]);
    this._addCss("DivControl", "background", obj, ["normal"]);
    this._addCss("PopupDiv", "background", obj, ["normal"]);
    this._addCss("Step", "background", obj, ["normal"]);
    this._addCss("StepControl", "background", obj, ["normal"]);
    this._addCss("FileUpload", "background", obj, ["normal"]);
    this._addCss("FileUploadControl", "background", obj, ["normal"]);

    obj = new nexacro.Style_border("0","none","","");
    this._addCss("ChildFrame", "border", obj, ["normal"]);
    this._addCss("FrameSet", "border", obj, ["normal"]);
    this._addCss("VFrameSet", "border", obj, ["normal"]);
    this._addCss("HFrameSet", "border", obj, ["normal"]);
    this._addCss("StatusbarForm>#zoomcombo>#comboedit", "border", obj, ["normal"]);
    this._addCss("Form", "border", obj, ["normal"]);
    this._addCss("VScrollBar", "border", obj, ["normal"]);
    this._addCss("VScrollBarControl", "border", obj, ["normal"]);
    this._addCss("HScrollBar", "border", obj, ["normal"]);
    this._addCss("HScrollBarControl", "border", obj, ["normal"]);
    this._addCss("Static", "border", obj, ["normal", "focused"]);
    this._addCss("Button.btn_MDI_close", "border", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("Button.btn_MDI_spinup", "border", obj, ["normal", "mouseover", "pushed", "selected", "focused", "disabled"]);
    this._addCss("Button.btn_MDI_spindn", "border", obj, ["normal", "mouseover", "pushed", "selected", "focused", "disabled"]);
    this._addCss("Button.btn_MDI_screenmax", "border", obj, ["normal", "mouseover", "pushed", "selected", "focused", "disabled"]);
    this._addCss("Button.btn_MDI_screenpop", "border", obj, ["normal", "mouseover", "pushed", "selected", "focused", "disabled"]);
    this._addCss("Button.btn_MDI_screenH", "border", obj, ["normal", "mouseover", "pushed", "selected", "focused", "disabled"]);
    this._addCss("Button.btn_MDI_screenV", "border", obj, ["normal", "mouseover", "pushed", "selected", "focused", "disabled"]);
    this._addCss("Button.btn_MDI_screenclose", "border", obj, ["normal", "mouseover", "pushed", "selected", "focused", "disabled"]);
    this._addCss("Spin>#spinedit", "border", obj, ["normal", "disabled"]);
    this._addCss("SpinControl>#spinedit", "border", obj, ["normal", "disabled"]);
    this._addCss("CheckBox", "border", obj, ["normal", "mouseover", "selected", "focused", "pushed"]);
    this._addCss("CheckBoxControl", "border", obj, ["normal", "mouseover", "selected", "focused", "pushed"]);
    this._addCss("Radio", "border", obj, ["normal"]);
    this._addCss("RadioControl", "border", obj, ["normal"]);
    this._addCss("Combo>#comboedit", "border", obj, ["disabled"]);
    this._addCss("Combo>#dropbutton", "border", obj, ["normal"]);
    this._addCss("Menu", "border", obj, ["normal"]);
    this._addCss("MenuControl", "border", obj, ["normal"]);
    this._addCss("Calendar", "border", obj, ["readonly"]);
    this._addCss("Calendar>#dropbutton", "border", obj, ["normal"]);
    this._addCss("Calendar>#calendaredit", "border", obj, ["normal", "mouseover", "focused", "disabled"]);
    this._addCss("Calendar>#popupcalendar>#prevbutton", "border", obj, ["normal"]);
    this._addCss("Calendar>#popupcalendar>#nextbutton", "border", obj, ["normal"]);
    this._addCss("Calendar>#popupcalendar>#yearspin", "border", obj, ["normal", "mouseover", "focused"]);
    this._addCss("Calendar>#popupcalendar>#yearspin>#spinupbutton", "border", obj, ["normal"]);
    this._addCss("Calendar>#popupcalendar>#yearspin>#spindownbutton", "border", obj, ["normal"]);
    this._addCss("Calendar>#popupcalendar>#monthspin", "border", obj, ["normal", "mouseover", "focused"]);
    this._addCss("Calendar>#popupcalendar>#monthspin>#spinedit", "border", obj, ["normal"]);
    this._addCss("Calendar>#popupcalendar>#monthspin>#spinupbutton", "border", obj, ["normal"]);
    this._addCss("Calendar>#popupcalendar>#monthspin>#spindownbutton", "border", obj, ["normal"]);
    this._addCss("CalendarControl", "border", obj, ["readonly"]);
    this._addCss("CalendarControl>#dropbutton", "border", obj, ["normal"]);
    this._addCss("CalendarControl>#calendaredit", "border", obj, ["normal", "mouseover", "focused", "selected"]);
    this._addCss("CalendarControl>#calendar0edit", "border", obj, ["disabled"]);
    this._addCss("CalendarControl>#popupcalendar>#prevbutton", "border", obj, ["normal"]);
    this._addCss("CalendarControl>#popupcalendar>#nextbutton", "border", obj, ["normal"]);
    this._addCss("CalendarControl>#popupcalendar>#yearspin", "border", obj, ["normal", "mouseover", "focused"]);
    this._addCss("CalendarControl>#popupcalendar>#yearspin>#spinupbutton", "border", obj, ["normal"]);
    this._addCss("CalendarControl>#popupcalendar>#yearspin>#spindownbutton", "border", obj, ["normal"]);
    this._addCss("CalendarControl>#popupcalendar>#monthspin", "border", obj, ["normal", "mouseover", "focused"]);
    this._addCss("CalendarControl>#popupcalendar>#monthspin>#spinedit", "border", obj, ["normal"]);
    this._addCss("CalendarControl>#popupcalendar>#monthspin>#spinupbutton", "border", obj, ["normal"]);
    this._addCss("CalendarControl>#popupcalendar>#monthspin>#spindownbutton", "border", obj, ["normal"]);
    this._addCss("Tab>#extrabutton", "border", obj, ["normal"]);
    this._addCss("TabControl>#extrabutton", "border", obj, ["normal"]);
    this._addCss("Grid>#head", "border", obj, ["normal"]);
    this._addCss("Grid>#body", "border", obj, ["normal", "disabled"]);
    this._addCss("Grid>#controlcombo>#comboedit", "border", obj, ["disabled"]);
    this._addCss("Grid>#controlcombo>#dropbutton", "border", obj, ["normal"]);
    this._addCss("Grid>#controlcheckbox", "border", obj, ["normal"]);
    this._addCss("Grid>#controlexpand", "border", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("Grid>#controlcalendar>#calendaredit", "border", obj, ["normal", "disabled"]);
    this._addCss("Grid>#controlcalendar>#dropbutton", "border", obj, ["normal"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar>#prevbutton", "border", obj, ["normal"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar>#nextbutton", "border", obj, ["normal"]);
    this._addCss("Div", "border", obj, ["normal"]);
    this._addCss("Step", "border", obj, ["normal"]);
    this._addCss("StepControl", "border", obj, ["normal"]);
    this._addCss("FileUpload", "border", obj, ["normal"]);
    this._addCss("FileUploadControl", "border", obj, ["normal"]);
    this._addCss("Button.btn_WF_schArea", "border", obj, ["normal", "mouseover", "pushed", "selected", "focused"]);

    obj = new nexacro.Style_bordertype("normal","0","0","true","true","true","true");
    this._addCss("ChildFrame", "bordertype", obj, ["normal"]);
    this._addCss("FrameSet", "bordertype", obj, ["normal"]);
    this._addCss("VFrameSet", "bordertype", obj, ["normal"]);
    this._addCss("HFrameSet", "bordertype", obj, ["normal"]);
    this._addCss("TitleBarControl", "bordertype", obj, ["normal"]);
    this._addCss("TitleBarControl>#minbutton", "bordertype", obj, ["normal"]);
    this._addCss("TitleBarControl>#maxbutton", "bordertype", obj, ["normal"]);
    this._addCss("TitleBarControl>#normalbutton", "bordertype", obj, ["normal"]);
    this._addCss("TitleBarControl>#closebutton", "bordertype", obj, ["normal"]);
    this._addCss("Form", "bordertype", obj, ["normal"]);
    this._addCss("VScrollBar", "bordertype", obj, ["normal"]);
    this._addCss("VScrollBarControl", "bordertype", obj, ["normal"]);
    this._addCss("HScrollBar", "bordertype", obj, ["normal"]);
    this._addCss("HScrollBarControl", "bordertype", obj, ["normal"]);
    this._addCss("Edit", "bordertype", obj, ["normal"]);
    this._addCss("MaskEdit", "bordertype", obj, ["normal"]);
    this._addCss("Button.btn_WF_MDIS", "bordertype", obj, ["normal", "mouseover", "pushed", "selected", "focused", "disabled"]);
    this._addCss("Button.btn_WF_MDI", "bordertype", obj, ["normal", "mouseover", "pushed", "selected", "focused", "disabled"]);
    this._addCss("Button.btn_MDI_close", "bordertype", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("Button.btn_MDI_spinup", "bordertype", obj, ["normal", "mouseover", "pushed", "selected", "focused", "disabled"]);
    this._addCss("Button.btn_MDI_spindn", "bordertype", obj, ["normal", "mouseover", "pushed", "selected", "focused", "disabled"]);
    this._addCss("Button.btn_MDI_screenmax", "bordertype", obj, ["normal", "mouseover", "pushed", "selected", "focused", "disabled"]);
    this._addCss("Button.btn_MDI_screenpop", "bordertype", obj, ["normal", "mouseover", "pushed", "selected", "focused", "disabled"]);
    this._addCss("Button.btn_MDI_screenH", "bordertype", obj, ["normal", "mouseover", "pushed", "selected", "focused", "disabled"]);
    this._addCss("Button.btn_MDI_screenV", "bordertype", obj, ["normal", "mouseover", "pushed", "selected", "focused", "disabled"]);
    this._addCss("Button.btn_MDI_screenclose", "bordertype", obj, ["normal", "mouseover", "pushed", "selected", "focused", "disabled"]);
    this._addCss("Spin", "bordertype", obj, ["normal"]);
    this._addCss("SpinControl", "bordertype", obj, ["normal"]);
    this._addCss("ListBox", "bordertype", obj, ["normal"]);
    this._addCss("ListBoxControl", "bordertype", obj, ["normal"]);
    this._addCss("Combo", "bordertype", obj, ["normal"]);
    this._addCss("Combo>#dropbutton", "bordertype", obj, ["normal"]);
    this._addCss("Combo>#combolist", "bordertype", obj, ["normal"]);
    this._addCss("ImageViewer", "bordertype", obj, ["normal"]);
    this._addCss("ImageViewerControl", "bordertype", obj, ["normal"]);
    this._addCss("DatePicker", "bordertype", obj, ["normal"]);
    this._addCss("DatePickerControl", "bordertype", obj, ["normal"]);
    this._addCss("Calendar", "bordertype", obj, ["normal"]);
    this._addCss("Calendar>#popupcalendar>#prevbutton", "bordertype", obj, ["normal"]);
    this._addCss("Calendar>#popupcalendar>#yearspin", "bordertype", obj, ["normal", "mouseover", "focused"]);
    this._addCss("Calendar>#popupcalendar>#yearspin>#spinupbutton", "bordertype", obj, ["normal"]);
    this._addCss("Calendar>#popupcalendar>#yearspin>#spindownbutton", "bordertype", obj, ["normal"]);
    this._addCss("Calendar>#popupcalendar>#monthspin", "bordertype", obj, ["normal", "mouseover", "focused"]);
    this._addCss("Calendar>#popupcalendar>#monthspin>#spinupbutton", "bordertype", obj, ["normal"]);
    this._addCss("Calendar>#popupcalendar>#monthspin>#spindownbutton", "bordertype", obj, ["normal"]);
    this._addCss("CalendarControl", "bordertype", obj, ["normal"]);
    this._addCss("CalendarControl>#popupcalendar>#prevbutton", "bordertype", obj, ["normal"]);
    this._addCss("CalendarControl>#popupcalendar>#yearspin", "bordertype", obj, ["normal", "mouseover", "focused"]);
    this._addCss("CalendarControl>#popupcalendar>#yearspin>#spinupbutton", "bordertype", obj, ["normal"]);
    this._addCss("CalendarControl>#popupcalendar>#yearspin>#spindownbutton", "bordertype", obj, ["normal"]);
    this._addCss("CalendarControl>#popupcalendar>#monthspin", "bordertype", obj, ["normal", "mouseover", "focused"]);
    this._addCss("CalendarControl>#popupcalendar>#monthspin>#spinupbutton", "bordertype", obj, ["normal"]);
    this._addCss("CalendarControl>#popupcalendar>#monthspin>#spindownbutton", "bordertype", obj, ["normal"]);
    this._addCss("Tab", "bordertype", obj, ["normal"]);
    this._addCss("TabControl", "bordertype", obj, ["normal"]);
    this._addCss("Grid", "bordertype", obj, ["normal"]);
    this._addCss("Grid>#controledit", "bordertype", obj, ["normal"]);
    this._addCss("Grid>#controlmaskedit", "bordertype", obj, ["normal"]);
    this._addCss("Grid>#controlcombo", "bordertype", obj, ["normal"]);
    this._addCss("Grid>#controlcombo>#dropbutton", "bordertype", obj, ["normal"]);
    this._addCss("Grid>#controlcombo>#combolist", "bordertype", obj, ["normal"]);
    this._addCss("Grid>#controlexpand", "bordertype", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar>#prevbutton", "bordertype", obj, ["normal"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar>#nextbutton", "bordertype", obj, ["normal"]);
    this._addCss("Grid.grd_LF_SubMenu", "bordertype", obj, ["normal"]);
    this._addCss("Div", "bordertype", obj, ["normal"]);
    this._addCss("Step", "bordertype", obj, ["normal"]);
    this._addCss("StepControl", "bordertype", obj, ["normal"]);
    this._addCss("FileUpload", "bordertype", obj, ["normal"]);
    this._addCss("FileUploadControl", "bordertype", obj, ["normal"]);
    this._addCss("Div.div_WF_searchBg", "bordertype", obj, ["normal"]);
    this._addCss("Div.div_WF_GrdMsg", "bordertype", obj, ["normal"]);
    this._addCss("Button.btn_WF_schArea", "bordertype", obj, ["normal", "mouseover", "pushed", "selected", "focused"]);

    obj = new nexacro.Style_background("#ffffffff","","","0","0","0","0","true");
    this._addCss("FrameSet", "background", obj, ["normal"]);
    this._addCss("VFrameSet", "background", obj, ["normal"]);
    this._addCss("HFrameSet", "background", obj, ["normal"]);
    this._addCss("Combo>#dropbutton", "background", obj, ["normal"]);
    this._addCss("Grid>#controlcombo>#dropbutton", "background", obj, ["normal"]);

    obj = new nexacro.Style_align("left middle");
    this._addCss("TitleBarControl", "align", obj, ["normal"]);
    this._addCss("StatusbarControl", "align", obj, ["normal"]);
    this._addCss("StatusbarControl>#zoomcombo", "align", obj, ["normal"]);
    this._addCss("StatusbarForm>#zoomcombo>#comboedit", "align", obj, ["normal"]);
    this._addCss("StatusbarControl>#zoomcombo>#combolist", "align", obj, ["normal"]);
    this._addCss("Static", "align", obj, ["normal", "focused"]);
    this._addCss("Edit", "align", obj, ["normal"]);
    this._addCss("Button.btn_WF_MDIS", "align", obj, ["normal", "mouseover", "pushed", "selected", "focused", "disabled"]);
    this._addCss("Button.btn_WF_MDI", "align", obj, ["normal", "mouseover", "pushed", "selected", "focused", "disabled"]);
    this._addCss("CheckBox", "align", obj, ["normal", "mouseover", "selected", "focused", "pushed"]);
    this._addCss("CheckBoxControl", "align", obj, ["normal", "mouseover", "selected", "focused", "pushed"]);
    this._addCss("Radio", "align", obj, ["normal"]);
    this._addCss("RadioControl", "align", obj, ["normal"]);
    this._addCss("ListBox", "align", obj, ["normal"]);
    this._addCss("ListBoxControl", "align", obj, ["normal"]);
    this._addCss("Combo", "align", obj, ["normal"]);
    this._addCss("Combo>#comboedit", "align", obj, ["normal", "mouseover", "pushed", "focused"]);
    this._addCss("Combo>#combolist", "align", obj, ["normal"]);
    this._addCss("Calendar", "align", obj, ["normal"]);
    this._addCss("Calendar>#popupcalendar>#yearspin", "align", obj, ["normal", "mouseover", "focused"]);
    this._addCss("Calendar>#popupcalendar>#monthspin", "align", obj, ["normal", "mouseover", "focused"]);
    this._addCss("Calendar>#popupcalendar>#monthspin>#spinedit", "align", obj, ["normal"]);
    this._addCss("CalendarControl", "align", obj, ["normal"]);
    this._addCss("CalendarControl>#popupcalendar>#yearspin", "align", obj, ["normal", "mouseover", "focused"]);
    this._addCss("CalendarControl>#popupcalendar>#monthspin", "align", obj, ["normal", "mouseover", "focused"]);
    this._addCss("CalendarControl>#popupcalendar>#monthspin>#spinedit", "align", obj, ["normal"]);
    this._addCss("Grid>#controledit", "align", obj, ["normal"]);
    this._addCss("Grid>#controlcombo", "align", obj, ["normal"]);
    this._addCss("Grid>#controlcombo>#comboedit", "align", obj, ["normal", "mouseover", "pushed", "selected", "focused"]);
    this._addCss("Grid>#controlcombo>#combolist", "align", obj, ["normal"]);
    this._addCss("Grid>#controlcheckbox", "align", obj, ["normal"]);
    this._addCss("Grid>#controlcalendar", "align", obj, ["normal"]);
    this._addCss("Grid>#controlcalendar>#calendaredit", "align", obj, ["normal"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar>#prevbutton", "align", obj, ["normal"]);
    this._addCss("Grid.grd_LF_SubMenu", "align", obj, ["normal"]);
    this._addCss("FileUpload", "align", obj, ["normal"]);
    this._addCss("FileUploadControl", "align", obj, ["normal"]);
    this._addCss("Static.sta_WF_schTitle", "align", obj, ["normal"]);
    this._addCss("Static.sta_WF_title", "align", obj, ["normal"]);
    this._addCss("Static.sta_WF_msg", "align", obj, ["normal"]);
    this._addCss("Static.sta_WF_ReftMsg", "align", obj, ["normal"]);

    obj = new nexacro.Style_border("0","none","#808080ff","");
    this._addCss("TitleBarControl", "border", obj, ["normal"]);
    this._addCss("TitleBarControl>#minbutton", "border", obj, ["normal", "mouseover", "pushed"]);
    this._addCss("TitleBarControl>#maxbutton", "border", obj, ["normal", "mouseover", "pushed"]);
    this._addCss("TitleBarControl>#normalbutton", "border", obj, ["normal", "mouseover", "pushed"]);
    this._addCss("TitleBarControl>#closebutton", "border", obj, ["normal", "mouseover", "pushed"]);

    obj = new nexacro.Style_value("");
    this._addCss("TitleBarControl", "cursor", obj, ["normal"]);
    this._addCss("TitleBarControl>#minbutton", "cursor", obj, ["normal"]);
    this._addCss("TitleBarControl>#maxbutton", "cursor", obj, ["normal"]);
    this._addCss("TitleBarControl>#normalbutton", "cursor", obj, ["normal"]);
    this._addCss("TitleBarControl>#closebutton", "cursor", obj, ["normal"]);
    this._addCss("StatusbarControl", "cursor", obj, ["normal"]);
    this._addCss("StatusbarControl>#progressbar", "cursor", obj, ["normal"]);
    this._addCss("StatusbarControl>#zoomcombo", "cursor", obj, ["normal"]);
    this._addCss("StatusbarForm>#zoomcombo>#comboedit", "cursor", obj, ["normal"]);
    this._addCss("StatusbarControl>#zoomcombo>#dropbutton", "cursor", obj, ["normal"]);
    this._addCss("Form", "cursor", obj, ["normal"]);
    this._addCss("VScrollBar", "cursor", obj, ["normal"]);
    this._addCss("VScrollBar>#incbutton", "cursor", obj, ["normal"]);
    this._addCss("VScrollBar>#decbutton", "cursor", obj, ["normal"]);
    this._addCss("VScrollBar>#trackbar", "cursor", obj, ["normal"]);
    this._addCss("VScrollBarControl", "cursor", obj, ["normal"]);
    this._addCss("VScrollBarControl>#incbutton", "cursor", obj, ["normal"]);
    this._addCss("VScrollBarControl>#decbutton", "cursor", obj, ["normal"]);
    this._addCss("VScrollBarControl>#trackbar", "cursor", obj, ["normal"]);
    this._addCss("HScrollBar", "cursor", obj, ["normal"]);
    this._addCss("HScrollBar>#incbutton", "cursor", obj, ["normal"]);
    this._addCss("HScrollBar>#decbutton", "cursor", obj, ["normal"]);
    this._addCss("HScrollBar>#trackbar", "cursor", obj, ["normal"]);
    this._addCss("HScrollBarControl", "cursor", obj, ["normal"]);
    this._addCss("HScrollBarControl>#incbutton", "cursor", obj, ["normal"]);
    this._addCss("HScrollBarControl>#decbutton", "cursor", obj, ["normal"]);
    this._addCss("HScrollBarControl>#trackbar", "cursor", obj, ["normal"]);
    this._addCss("Spin", "cursor", obj, ["normal"]);
    this._addCss("Spin>#spinedit", "cursor", obj, ["normal"]);
    this._addCss("Spin>#spinupbutton", "cursor", obj, ["normal"]);
    this._addCss("Spin>#spindownbutton", "cursor", obj, ["normal"]);
    this._addCss("SpinControl", "cursor", obj, ["normal"]);
    this._addCss("SpinControl>#spinedit", "cursor", obj, ["normal"]);
    this._addCss("SpinControl>#spinupbutton", "cursor", obj, ["normal"]);
    this._addCss("SpinControl>#spindownbutton", "cursor", obj, ["normal"]);
    this._addCss("CheckBox", "cursor", obj, ["normal"]);
    this._addCss("CheckBoxControl", "cursor", obj, ["normal"]);
    this._addCss("Radio", "cursor", obj, ["normal"]);
    this._addCss("RadioControl", "cursor", obj, ["normal"]);
    this._addCss("ListBox", "cursor", obj, ["normal"]);
    this._addCss("ListBoxControl", "cursor", obj, ["normal"]);
    this._addCss("Combo", "cursor", obj, ["normal"]);
    this._addCss("Menu", "cursor", obj, ["normal"]);
    this._addCss("MenuControl", "cursor", obj, ["normal"]);
    this._addCss("ImageViewer", "cursor", obj, ["normal"]);
    this._addCss("ImageViewerControl", "cursor", obj, ["normal"]);
    this._addCss("GroupBox", "cursor", obj, ["normal"]);
    this._addCss("GroupBoxControl", "cursor", obj, ["normal"]);
    this._addCss("ProgressBar", "cursor", obj, ["normal"]);
    this._addCss("ProgressBarControl", "cursor", obj, ["normal"]);
    this._addCss("DatePicker", "cursor", obj, ["normal"]);
    this._addCss("DatePickerControl", "cursor", obj, ["normal"]);
    this._addCss("Calendar", "cursor", obj, ["normal"]);
    this._addCss("Calendar>#dropbutton", "cursor", obj, ["normal"]);
    this._addCss("Calendar>#calendaredit", "cursor", obj, ["normal", "mouseover", "focused", "disabled"]);
    this._addCss("Calendar>#spinupbutton", "cursor", obj, ["normal"]);
    this._addCss("Calendar>#spindownbutton", "cursor", obj, ["normal"]);
    this._addCss("Calendar>#popupcalendar>#prevbutton", "cursor", obj, ["normal"]);
    this._addCss("Calendar>#popupcalendar>#nextbutton", "cursor", obj, ["normal"]);
    this._addCss("Calendar>#popupcalendar>#yearspin", "cursor", obj, ["normal", "mouseover", "focused"]);
    this._addCss("Calendar>#popupcalendar>#yearspin>#spinupbutton", "cursor", obj, ["normal"]);
    this._addCss("Calendar>#popupcalendar>#yearspin>#spindownbutton", "cursor", obj, ["normal"]);
    this._addCss("Calendar>#popupcalendar>#monthspin", "cursor", obj, ["normal", "mouseover", "focused"]);
    this._addCss("Calendar>#popupcalendar>#monthspin>#spinedit", "cursor", obj, ["normal"]);
    this._addCss("Calendar>#popupcalendar>#monthspin>#spinupbutton", "cursor", obj, ["normal"]);
    this._addCss("Calendar>#popupcalendar>#monthspin>#spindownbutton", "cursor", obj, ["normal"]);
    this._addCss("CalendarControl", "cursor", obj, ["normal"]);
    this._addCss("CalendarControl>#dropbutton", "cursor", obj, ["normal"]);
    this._addCss("CalendarControl>#calendaredit", "cursor", obj, ["normal", "mouseover", "focused", "selected"]);
    this._addCss("CalendarControl>#calendar0edit", "cursor", obj, ["disabled"]);
    this._addCss("CalendarControl>#spinupbutton", "cursor", obj, ["normal"]);
    this._addCss("CalendarControl>#spindownbutton", "cursor", obj, ["normal"]);
    this._addCss("CalendarControl>#popupcalendar>#prevbutton", "cursor", obj, ["normal"]);
    this._addCss("CalendarControl>#popupcalendar>#nextbutton", "cursor", obj, ["normal"]);
    this._addCss("CalendarControl>#popupcalendar>#yearspin", "cursor", obj, ["normal", "mouseover", "focused"]);
    this._addCss("CalendarControl>#popupcalendar>#yearspin>#spinupbutton", "cursor", obj, ["normal"]);
    this._addCss("CalendarControl>#popupcalendar>#yearspin>#spindownbutton", "cursor", obj, ["normal"]);
    this._addCss("CalendarControl>#popupcalendar>#monthspin", "cursor", obj, ["normal", "mouseover", "focused"]);
    this._addCss("CalendarControl>#popupcalendar>#monthspin>#spinedit", "cursor", obj, ["normal"]);
    this._addCss("CalendarControl>#popupcalendar>#monthspin>#spinupbutton", "cursor", obj, ["normal"]);
    this._addCss("CalendarControl>#popupcalendar>#monthspin>#spindownbutton", "cursor", obj, ["normal"]);
    this._addCss("Tab", "cursor", obj, ["normal"]);
    this._addCss("TabControl", "cursor", obj, ["normal"]);
    this._addCss("Grid", "cursor", obj, ["normal"]);
    this._addCss("Grid>#controlcombo", "cursor", obj, ["normal"]);
    this._addCss("Grid>#controlcheckbox", "cursor", obj, ["normal"]);
    this._addCss("Grid>#controlcalendar", "cursor", obj, ["normal"]);
    this._addCss("DivControl", "cursor", obj, ["normal"]);
    this._addCss("PopupDiv", "cursor", obj, ["normal"]);
    this._addCss("FileUpload", "cursor", obj, ["normal"]);
    this._addCss("FileUploadControl", "cursor", obj, ["normal"]);
    this._addCss("FileDownload", "cursor", obj, ["normal"]);
    this._addCss("FileDownloadControl", "cursor", obj, ["normal"]);

    obj = new nexacro.Style_color("#333333");
    this._addCss("TitleBarControl", "color", obj, ["normal"]);
    this._addCss("Button.btn_WF_MDIS", "color", obj, ["normal", "mouseover", "pushed", "selected", "focused", "disabled"]);
    this._addCss("Button.btn_WF_MDI", "color", obj, ["pushed", "focused", "selected"]);
    this._addCss("ListBox", "color", obj, ["selected"]);
    this._addCss("ListBoxControl", "color", obj, ["selected"]);
    this._addCss("Calendar", "color", obj, ["normal"]);
    this._addCss("CalendarControl", "color", obj, ["normal"]);

    obj = new nexacro.Style_font("9 Dotum");
    this._addCss("TitleBarControl", "font", obj, ["normal"]);
    this._addCss("StatusbarForm>#zoomcombo>#comboedit", "font", obj, ["normal"]);
    this._addCss("Form", "font", obj, ["normal"]);
    this._addCss("Static", "font", obj, ["normal", "focused"]);
    this._addCss("Edit", "font", obj, ["normal"]);
    this._addCss("TextArea", "font", obj, ["normal"]);
    this._addCss("MaskEdit", "font", obj, ["normal"]);
    this._addCss("Combo", "font", obj, ["normal"]);
    this._addCss("Combo>#combolist", "font", obj, ["normal"]);
    this._addCss("Grid", "font", obj, ["normal"]);
    this._addCss("Grid>#controledit", "font", obj, ["normal"]);
    this._addCss("Grid>#controltextarea", "font", obj, ["normal"]);
    this._addCss("Grid>#controlmaskedit", "font", obj, ["normal"]);
    this._addCss("Grid>#controlbutton", "font", obj, ["normal"]);
    this._addCss("Grid>#controlcombo", "font", obj, ["normal"]);
    this._addCss("Grid>#controlcombo>#combolist", "font", obj, ["normal"]);
    this._addCss("Grid>#controlcheckbox", "font", obj, ["normal"]);
    this._addCss("Grid>#controlcalendar", "font", obj, ["normal"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar", "font", obj, ["normal"]);

    obj = new nexacro.Style_value("URL('theme://images/nexacro_logo.png')");
    this._addCss("TitleBarControl", "icon", obj, ["normal"]);

    obj = new nexacro.Style_padding("");
    this._addCss("TitleBarControl", "padding", obj, ["normal"]);
    this._addCss("TitleBarControl>#minbutton", "padding", obj, ["normal"]);
    this._addCss("TitleBarControl>#maxbutton", "padding", obj, ["normal"]);
    this._addCss("TitleBarControl>#normalbutton", "padding", obj, ["normal"]);
    this._addCss("TitleBarControl>#closebutton", "padding", obj, ["normal"]);
    this._addCss("StatusbarControl>#zoomcombo>#dropbutton", "padding", obj, ["normal"]);
    this._addCss("Form", "padding", obj, ["normal"]);
    this._addCss("VScrollBar", "padding", obj, ["normal"]);
    this._addCss("VScrollBarControl", "padding", obj, ["normal"]);
    this._addCss("HScrollBar", "padding", obj, ["normal"]);
    this._addCss("HScrollBarControl", "padding", obj, ["normal"]);
    this._addCss("Button", "padding", obj, ["normal"]);
    this._addCss("ButtonControl", "padding", obj, ["normal"]);
    this._addCss("Spin>#spinupbutton", "padding", obj, ["normal"]);
    this._addCss("Spin>#spindownbutton", "padding", obj, ["normal"]);
    this._addCss("SpinControl>#spinupbutton", "padding", obj, ["normal"]);
    this._addCss("SpinControl>#spindownbutton", "padding", obj, ["normal"]);
    this._addCss("ListBox", "padding", obj, ["normal"]);
    this._addCss("ListBoxControl", "padding", obj, ["normal"]);
    this._addCss("Menu", "padding", obj, ["normal"]);
    this._addCss("MenuControl", "padding", obj, ["normal"]);
    this._addCss("ImageViewer", "padding", obj, ["normal"]);
    this._addCss("ImageViewerControl", "padding", obj, ["normal"]);
    this._addCss("ProgressBar", "padding", obj, ["normal"]);
    this._addCss("ProgressBarControl", "padding", obj, ["normal"]);
    this._addCss("Calendar>#dropbutton", "padding", obj, ["normal"]);
    this._addCss("Calendar>#calendaredit", "padding", obj, ["normal", "mouseover", "focused", "disabled"]);
    this._addCss("Calendar>#spinupbutton", "padding", obj, ["normal"]);
    this._addCss("Calendar>#spindownbutton", "padding", obj, ["normal"]);
    this._addCss("Calendar>#popupcalendar>#prevbutton", "padding", obj, ["normal"]);
    this._addCss("Calendar>#popupcalendar>#nextbutton", "padding", obj, ["normal"]);
    this._addCss("Calendar>#popupcalendar>#yearspin>#spinupbutton", "padding", obj, ["normal"]);
    this._addCss("Calendar>#popupcalendar>#yearspin>#spindownbutton", "padding", obj, ["normal"]);
    this._addCss("Calendar>#popupcalendar>#monthspin>#spinupbutton", "padding", obj, ["normal"]);
    this._addCss("Calendar>#popupcalendar>#monthspin>#spindownbutton", "padding", obj, ["normal"]);
    this._addCss("CalendarControl>#dropbutton", "padding", obj, ["normal"]);
    this._addCss("CalendarControl>#calendaredit", "padding", obj, ["normal", "mouseover", "focused", "selected"]);
    this._addCss("CalendarControl>#calendar0edit", "padding", obj, ["disabled"]);
    this._addCss("CalendarControl>#spinupbutton", "padding", obj, ["normal"]);
    this._addCss("CalendarControl>#spindownbutton", "padding", obj, ["normal"]);
    this._addCss("CalendarControl>#popupcalendar>#prevbutton", "padding", obj, ["normal"]);
    this._addCss("CalendarControl>#popupcalendar>#nextbutton", "padding", obj, ["normal"]);
    this._addCss("CalendarControl>#popupcalendar>#yearspin>#spinupbutton", "padding", obj, ["normal"]);
    this._addCss("CalendarControl>#popupcalendar>#yearspin>#spindownbutton", "padding", obj, ["normal"]);
    this._addCss("CalendarControl>#popupcalendar>#monthspin>#spinupbutton", "padding", obj, ["normal"]);
    this._addCss("CalendarControl>#popupcalendar>#monthspin>#spindownbutton", "padding", obj, ["normal"]);
    this._addCss("Tab", "padding", obj, ["normal"]);
    this._addCss("TabControl", "padding", obj, ["normal"]);
    this._addCss("DivControl", "padding", obj, ["normal"]);
    this._addCss("PopupDiv", "padding", obj, ["normal"]);
    this._addCss("FileUpload", "padding", obj, ["normal"]);
    this._addCss("FileUploadControl", "padding", obj, ["normal"]);
    this._addCss("FileDownload", "padding", obj, ["normal"]);
    this._addCss("FileDownloadControl", "padding", obj, ["normal"]);

    obj = new nexacro.Style_shadow("");
    this._addCss("TitleBarControl", "shadow", obj, ["normal"]);
    this._addCss("TitleBarControl>#minbutton", "shadow", obj, ["normal"]);
    this._addCss("TitleBarControl>#maxbutton", "shadow", obj, ["normal"]);
    this._addCss("TitleBarControl>#normalbutton", "shadow", obj, ["normal"]);
    this._addCss("TitleBarControl>#closebutton", "shadow", obj, ["normal"]);
    this._addCss("StatusbarControl", "shadow", obj, ["normal"]);
    this._addCss("StatusbarControl>#progressbar", "shadow", obj, ["normal"]);
    this._addCss("StatusbarControl>#zoomcombo", "shadow", obj, ["normal"]);
    this._addCss("StatusbarForm>#zoomcombo>#comboedit", "shadow", obj, ["normal"]);
    this._addCss("StatusbarControl>#zoomcombo>#dropbutton", "shadow", obj, ["normal"]);
    this._addCss("Form", "shadow", obj, ["normal"]);
    this._addCss("VScrollBar", "shadow", obj, ["normal"]);
    this._addCss("VScrollBar>#incbutton", "shadow", obj, ["normal"]);
    this._addCss("VScrollBar>#decbutton", "shadow", obj, ["normal"]);
    this._addCss("VScrollBar>#trackbar", "shadow", obj, ["normal"]);
    this._addCss("VScrollBarControl", "shadow", obj, ["normal"]);
    this._addCss("VScrollBarControl>#incbutton", "shadow", obj, ["normal"]);
    this._addCss("VScrollBarControl>#decbutton", "shadow", obj, ["normal"]);
    this._addCss("VScrollBarControl>#trackbar", "shadow", obj, ["normal"]);
    this._addCss("HScrollBar", "shadow", obj, ["normal"]);
    this._addCss("HScrollBar>#incbutton", "shadow", obj, ["normal"]);
    this._addCss("HScrollBar>#decbutton", "shadow", obj, ["normal"]);
    this._addCss("HScrollBar>#trackbar", "shadow", obj, ["normal"]);
    this._addCss("HScrollBarControl", "shadow", obj, ["normal"]);
    this._addCss("HScrollBarControl>#incbutton", "shadow", obj, ["normal"]);
    this._addCss("HScrollBarControl>#decbutton", "shadow", obj, ["normal"]);
    this._addCss("HScrollBarControl>#trackbar", "shadow", obj, ["normal"]);
    this._addCss("Button", "shadow", obj, ["normal"]);
    this._addCss("ButtonControl", "shadow", obj, ["normal"]);
    this._addCss("Spin", "shadow", obj, ["normal"]);
    this._addCss("Spin>#spinedit", "shadow", obj, ["normal"]);
    this._addCss("Spin>#spinupbutton", "shadow", obj, ["normal"]);
    this._addCss("Spin>#spindownbutton", "shadow", obj, ["normal"]);
    this._addCss("SpinControl", "shadow", obj, ["normal"]);
    this._addCss("SpinControl>#spinedit", "shadow", obj, ["normal"]);
    this._addCss("SpinControl>#spinupbutton", "shadow", obj, ["normal"]);
    this._addCss("SpinControl>#spindownbutton", "shadow", obj, ["normal"]);
    this._addCss("CheckBox", "shadow", obj, ["normal"]);
    this._addCss("CheckBoxControl", "shadow", obj, ["normal"]);
    this._addCss("Radio", "shadow", obj, ["normal"]);
    this._addCss("RadioControl", "shadow", obj, ["normal"]);
    this._addCss("ListBox", "shadow", obj, ["normal"]);
    this._addCss("ListBoxControl", "shadow", obj, ["normal"]);
    this._addCss("Menu", "shadow", obj, ["normal"]);
    this._addCss("MenuControl", "shadow", obj, ["normal"]);
    this._addCss("ImageViewer", "shadow", obj, ["normal"]);
    this._addCss("ImageViewerControl", "shadow", obj, ["normal"]);
    this._addCss("GroupBox", "shadow", obj, ["normal"]);
    this._addCss("GroupBoxControl", "shadow", obj, ["normal"]);
    this._addCss("ProgressBar", "shadow", obj, ["normal"]);
    this._addCss("ProgressBarControl", "shadow", obj, ["normal"]);
    this._addCss("DatePicker", "shadow", obj, ["normal"]);
    this._addCss("DatePickerControl", "shadow", obj, ["normal"]);
    this._addCss("Calendar", "shadow", obj, ["normal"]);
    this._addCss("Calendar>#dropbutton", "shadow", obj, ["normal"]);
    this._addCss("Calendar>#calendaredit", "shadow", obj, ["normal", "mouseover", "focused", "disabled"]);
    this._addCss("Calendar>#spinupbutton", "shadow", obj, ["normal"]);
    this._addCss("Calendar>#spindownbutton", "shadow", obj, ["normal"]);
    this._addCss("Calendar>#popupcalendar>#prevbutton", "shadow", obj, ["normal"]);
    this._addCss("Calendar>#popupcalendar>#nextbutton", "shadow", obj, ["normal"]);
    this._addCss("Calendar>#popupcalendar>#yearspin", "shadow", obj, ["normal", "mouseover", "focused"]);
    this._addCss("Calendar>#popupcalendar>#yearspin>#spinupbutton", "shadow", obj, ["normal"]);
    this._addCss("Calendar>#popupcalendar>#yearspin>#spindownbutton", "shadow", obj, ["normal"]);
    this._addCss("Calendar>#popupcalendar>#monthspin", "shadow", obj, ["normal", "mouseover", "focused"]);
    this._addCss("Calendar>#popupcalendar>#monthspin>#spinedit", "shadow", obj, ["normal"]);
    this._addCss("Calendar>#popupcalendar>#monthspin>#spinupbutton", "shadow", obj, ["normal"]);
    this._addCss("Calendar>#popupcalendar>#monthspin>#spindownbutton", "shadow", obj, ["normal"]);
    this._addCss("CalendarControl", "shadow", obj, ["normal"]);
    this._addCss("CalendarControl>#dropbutton", "shadow", obj, ["normal"]);
    this._addCss("CalendarControl>#calendaredit", "shadow", obj, ["normal", "mouseover", "focused", "selected"]);
    this._addCss("CalendarControl>#calendar0edit", "shadow", obj, ["disabled"]);
    this._addCss("CalendarControl>#spinupbutton", "shadow", obj, ["normal"]);
    this._addCss("CalendarControl>#spindownbutton", "shadow", obj, ["normal"]);
    this._addCss("CalendarControl>#popupcalendar>#prevbutton", "shadow", obj, ["normal"]);
    this._addCss("CalendarControl>#popupcalendar>#nextbutton", "shadow", obj, ["normal"]);
    this._addCss("CalendarControl>#popupcalendar>#yearspin", "shadow", obj, ["normal", "mouseover", "focused"]);
    this._addCss("CalendarControl>#popupcalendar>#yearspin>#spinupbutton", "shadow", obj, ["normal"]);
    this._addCss("CalendarControl>#popupcalendar>#yearspin>#spindownbutton", "shadow", obj, ["normal"]);
    this._addCss("CalendarControl>#popupcalendar>#monthspin", "shadow", obj, ["normal", "mouseover", "focused"]);
    this._addCss("CalendarControl>#popupcalendar>#monthspin>#spinedit", "shadow", obj, ["normal"]);
    this._addCss("CalendarControl>#popupcalendar>#monthspin>#spinupbutton", "shadow", obj, ["normal"]);
    this._addCss("CalendarControl>#popupcalendar>#monthspin>#spindownbutton", "shadow", obj, ["normal"]);
    this._addCss("Tab", "shadow", obj, ["normal"]);
    this._addCss("TabControl", "shadow", obj, ["normal"]);
    this._addCss("DivControl", "shadow", obj, ["normal"]);
    this._addCss("PopupDiv", "shadow", obj, ["normal"]);
    this._addCss("Step", "shadow", obj, ["normal"]);
    this._addCss("StepControl", "shadow", obj, ["normal"]);
    this._addCss("FileUpload", "shadow", obj, ["normal"]);
    this._addCss("FileUploadControl", "shadow", obj, ["normal"]);
    this._addCss("FileDownload", "shadow", obj, ["normal"]);
    this._addCss("FileDownloadControl", "shadow", obj, ["normal"]);

    obj = new nexacro.Style_align("");
    this._addCss("TitleBarControl", "stepalign", obj, ["normal"]);
    this._addCss("StatusbarControl", "stepalign", obj, ["normal"]);
    this._addCss("Form", "stepalign", obj, ["normal"]);
    this._addCss("Tab", "stepalign", obj, ["normal"]);
    this._addCss("TabControl", "stepalign", obj, ["normal"]);
    this._addCss("DivControl", "stepalign", obj, ["normal"]);
    this._addCss("PopupDiv", "stepalign", obj, ["normal"]);

    obj = new nexacro.Style_value("");
    this._addCss("TitleBarControl", "stepshowtype", obj, ["normal"]);
    this._addCss("StatusbarControl", "stepshowtype", obj, ["normal"]);
    this._addCss("Form", "stepshowtype", obj, ["normal"]);
    this._addCss("Tab", "stepshowtype", obj, ["normal"]);
    this._addCss("TabControl", "stepshowtype", obj, ["normal"]);
    this._addCss("DivControl", "stepshowtype", obj, ["normal"]);
    this._addCss("PopupDiv", "stepshowtype", obj, ["normal"]);

    obj = new nexacro.Style_align("");
    this._addCss("TitleBarControl>#minbutton", "align", obj, ["normal"]);
    this._addCss("TitleBarControl>#maxbutton", "align", obj, ["normal"]);
    this._addCss("TitleBarControl>#normalbutton", "align", obj, ["normal"]);
    this._addCss("TitleBarControl>#closebutton", "align", obj, ["normal"]);
    this._addCss("StatusbarControl>#zoomcombo>#dropbutton", "align", obj, ["normal"]);
    this._addCss("Form", "align", obj, ["normal"]);
    this._addCss("VScrollBar", "align", obj, ["normal"]);
    this._addCss("VScrollBarControl", "align", obj, ["normal"]);
    this._addCss("HScrollBar", "align", obj, ["normal"]);
    this._addCss("HScrollBarControl", "align", obj, ["normal"]);
    this._addCss("Spin>#spinupbutton", "align", obj, ["normal"]);
    this._addCss("Spin>#spindownbutton", "align", obj, ["normal"]);
    this._addCss("SpinControl>#spinupbutton", "align", obj, ["normal"]);
    this._addCss("SpinControl>#spindownbutton", "align", obj, ["normal"]);
    this._addCss("Calendar>#dropbutton", "align", obj, ["normal"]);
    this._addCss("Calendar>#calendaredit", "align", obj, ["normal", "mouseover", "focused", "disabled"]);
    this._addCss("Calendar>#spinupbutton", "align", obj, ["normal"]);
    this._addCss("Calendar>#spindownbutton", "align", obj, ["normal"]);
    this._addCss("Calendar>#popupcalendar>#prevbutton", "align", obj, ["normal"]);
    this._addCss("Calendar>#popupcalendar>#nextbutton", "align", obj, ["normal"]);
    this._addCss("Calendar>#popupcalendar>#yearspin>#spinupbutton", "align", obj, ["normal"]);
    this._addCss("Calendar>#popupcalendar>#yearspin>#spindownbutton", "align", obj, ["normal"]);
    this._addCss("Calendar>#popupcalendar>#monthspin>#spinupbutton", "align", obj, ["normal"]);
    this._addCss("Calendar>#popupcalendar>#monthspin>#spindownbutton", "align", obj, ["normal"]);
    this._addCss("CalendarControl>#dropbutton", "align", obj, ["normal"]);
    this._addCss("CalendarControl>#calendaredit", "align", obj, ["normal", "mouseover", "focused", "selected"]);
    this._addCss("CalendarControl>#calendar0edit", "align", obj, ["disabled"]);
    this._addCss("CalendarControl>#spinupbutton", "align", obj, ["normal"]);
    this._addCss("CalendarControl>#spindownbutton", "align", obj, ["normal"]);
    this._addCss("CalendarControl>#popupcalendar>#prevbutton", "align", obj, ["normal"]);
    this._addCss("CalendarControl>#popupcalendar>#nextbutton", "align", obj, ["normal"]);
    this._addCss("CalendarControl>#popupcalendar>#yearspin>#spinupbutton", "align", obj, ["normal"]);
    this._addCss("CalendarControl>#popupcalendar>#yearspin>#spindownbutton", "align", obj, ["normal"]);
    this._addCss("CalendarControl>#popupcalendar>#monthspin>#spinupbutton", "align", obj, ["normal"]);
    this._addCss("CalendarControl>#popupcalendar>#monthspin>#spindownbutton", "align", obj, ["normal"]);
    this._addCss("Tab>#extrabutton", "align", obj, ["normal"]);
    this._addCss("TabControl>#extrabutton", "align", obj, ["normal"]);

    obj = new nexacro.Style_color("");
    this._addCss("TitleBarControl>#minbutton", "color", obj, ["normal"]);
    this._addCss("TitleBarControl>#maxbutton", "color", obj, ["normal"]);
    this._addCss("TitleBarControl>#normalbutton", "color", obj, ["normal"]);
    this._addCss("TitleBarControl>#closebutton", "color", obj, ["normal"]);
    this._addCss("StatusbarControl>#zoomcombo>#dropbutton", "color", obj, ["normal"]);
    this._addCss("VScrollBar", "color", obj, ["normal"]);
    this._addCss("VScrollBar>#incbutton", "color", obj, ["normal"]);
    this._addCss("VScrollBar>#decbutton", "color", obj, ["normal"]);
    this._addCss("VScrollBar>#trackbar", "color", obj, ["normal"]);
    this._addCss("VScrollBarControl", "color", obj, ["normal"]);
    this._addCss("VScrollBarControl>#incbutton", "color", obj, ["normal"]);
    this._addCss("VScrollBarControl>#decbutton", "color", obj, ["normal"]);
    this._addCss("VScrollBarControl>#trackbar", "color", obj, ["normal"]);
    this._addCss("HScrollBar", "color", obj, ["normal"]);
    this._addCss("HScrollBar>#incbutton", "color", obj, ["normal"]);
    this._addCss("HScrollBar>#decbutton", "color", obj, ["normal"]);
    this._addCss("HScrollBar>#trackbar", "color", obj, ["normal"]);
    this._addCss("HScrollBarControl", "color", obj, ["normal"]);
    this._addCss("HScrollBarControl>#incbutton", "color", obj, ["normal"]);
    this._addCss("HScrollBarControl>#decbutton", "color", obj, ["normal"]);
    this._addCss("HScrollBarControl>#trackbar", "color", obj, ["normal"]);
    this._addCss("Button", "color", obj, ["normal"]);
    this._addCss("ButtonControl", "color", obj, ["normal"]);
    this._addCss("Spin", "color", obj, ["normal"]);
    this._addCss("Spin>#spinedit", "color", obj, ["normal"]);
    this._addCss("Spin>#spinupbutton", "color", obj, ["normal"]);
    this._addCss("Spin>#spindownbutton", "color", obj, ["normal"]);
    this._addCss("SpinControl", "color", obj, ["normal"]);
    this._addCss("SpinControl>#spinedit", "color", obj, ["normal"]);
    this._addCss("SpinControl>#spinupbutton", "color", obj, ["normal"]);
    this._addCss("SpinControl>#spindownbutton", "color", obj, ["normal"]);
    this._addCss("CheckBox", "color", obj, ["normal"]);
    this._addCss("CheckBoxControl", "color", obj, ["normal"]);
    this._addCss("Radio", "color", obj, ["normal"]);
    this._addCss("RadioControl", "color", obj, ["normal"]);
    this._addCss("ListBox", "color", obj, ["normal"]);
    this._addCss("ListBoxControl", "color", obj, ["normal"]);
    this._addCss("ImageViewer", "color", obj, ["normal"]);
    this._addCss("ImageViewerControl", "color", obj, ["normal"]);
    this._addCss("ProgressBar", "color", obj, ["normal"]);
    this._addCss("ProgressBarControl", "color", obj, ["normal"]);
    this._addCss("Calendar>#dropbutton", "color", obj, ["normal"]);
    this._addCss("Calendar>#calendaredit", "color", obj, ["normal", "mouseover", "focused", "disabled"]);
    this._addCss("Calendar>#spinupbutton", "color", obj, ["normal"]);
    this._addCss("Calendar>#spindownbutton", "color", obj, ["normal"]);
    this._addCss("Calendar>#popupcalendar>#prevbutton", "color", obj, ["normal"]);
    this._addCss("Calendar>#popupcalendar>#nextbutton", "color", obj, ["normal"]);
    this._addCss("Calendar>#popupcalendar>#yearspin>#spinupbutton", "color", obj, ["normal"]);
    this._addCss("Calendar>#popupcalendar>#yearspin>#spindownbutton", "color", obj, ["normal"]);
    this._addCss("Calendar>#popupcalendar>#monthspin>#spinupbutton", "color", obj, ["normal"]);
    this._addCss("Calendar>#popupcalendar>#monthspin>#spindownbutton", "color", obj, ["normal"]);
    this._addCss("CalendarControl>#dropbutton", "color", obj, ["normal"]);
    this._addCss("CalendarControl>#calendaredit", "color", obj, ["normal", "mouseover", "focused", "selected"]);
    this._addCss("CalendarControl>#calendar0edit", "color", obj, ["disabled"]);
    this._addCss("CalendarControl>#spinupbutton", "color", obj, ["normal"]);
    this._addCss("CalendarControl>#spindownbutton", "color", obj, ["normal"]);
    this._addCss("CalendarControl>#popupcalendar>#prevbutton", "color", obj, ["normal"]);
    this._addCss("CalendarControl>#popupcalendar>#nextbutton", "color", obj, ["normal"]);
    this._addCss("CalendarControl>#popupcalendar>#yearspin>#spinupbutton", "color", obj, ["normal"]);
    this._addCss("CalendarControl>#popupcalendar>#yearspin>#spindownbutton", "color", obj, ["normal"]);
    this._addCss("CalendarControl>#popupcalendar>#monthspin>#spinupbutton", "color", obj, ["normal"]);
    this._addCss("CalendarControl>#popupcalendar>#monthspin>#spindownbutton", "color", obj, ["normal"]);
    this._addCss("DivControl", "color", obj, ["normal"]);
    this._addCss("PopupDiv", "color", obj, ["normal"]);
    this._addCss("FileDownload", "color", obj, ["normal"]);
    this._addCss("FileDownloadControl", "color", obj, ["normal"]);

    obj = new nexacro.Style_value("URL('theme://images/btn_Titlebar_min.png')");
    this._addCss("TitleBarControl>#minbutton", "image", obj, ["normal"]);

    obj = new nexacro.Style_align("");
    this._addCss("TitleBarControl>#minbutton", "imagealign", obj, ["normal"]);
    this._addCss("TitleBarControl>#maxbutton", "imagealign", obj, ["normal"]);
    this._addCss("TitleBarControl>#normalbutton", "imagealign", obj, ["normal"]);
    this._addCss("TitleBarControl>#closebutton", "imagealign", obj, ["normal"]);
    this._addCss("VScrollBar>#trackbar", "imagealign", obj, ["normal"]);
    this._addCss("VScrollBarControl>#trackbar", "imagealign", obj, ["normal"]);
    this._addCss("HScrollBar>#decbutton", "imagealign", obj, ["normal"]);
    this._addCss("HScrollBar>#trackbar", "imagealign", obj, ["normal"]);
    this._addCss("HScrollBarControl>#decbutton", "imagealign", obj, ["normal"]);
    this._addCss("HScrollBarControl>#trackbar", "imagealign", obj, ["normal"]);
    this._addCss("Button", "imagealign", obj, ["normal"]);
    this._addCss("ButtonControl", "imagealign", obj, ["normal"]);
    this._addCss("Calendar>#popupcalendar>#yearspin>#spinupbutton", "imagealign", obj, ["normal"]);
    this._addCss("Calendar>#popupcalendar>#yearspin>#spindownbutton", "imagealign", obj, ["normal"]);
    this._addCss("Calendar>#popupcalendar>#monthspin>#spinupbutton", "imagealign", obj, ["normal"]);
    this._addCss("Calendar>#popupcalendar>#monthspin>#spindownbutton", "imagealign", obj, ["normal"]);
    this._addCss("CalendarControl>#popupcalendar>#yearspin>#spinupbutton", "imagealign", obj, ["normal"]);
    this._addCss("CalendarControl>#popupcalendar>#yearspin>#spindownbutton", "imagealign", obj, ["normal"]);
    this._addCss("CalendarControl>#popupcalendar>#monthspin>#spinupbutton", "imagealign", obj, ["normal"]);
    this._addCss("CalendarControl>#popupcalendar>#monthspin>#spindownbutton", "imagealign", obj, ["normal"]);

    obj = new nexacro.Style_value("URL('theme://images/btn_Titlebar_min_O.png')");
    this._addCss("TitleBarControl>#minbutton", "image", obj, ["mouseover"]);

    obj = new nexacro.Style_value("URL('theme://images/btn_Titlebar_min_P.png')");
    this._addCss("TitleBarControl>#minbutton", "image", obj, ["pushed"]);

    obj = new nexacro.Style_value("URL('theme://images/btn_Titlebar_max.png')");
    this._addCss("TitleBarControl>#maxbutton", "image", obj, ["normal"]);

    obj = new nexacro.Style_value("URL('theme://images/btn_Titlebar_max_O.png')");
    this._addCss("TitleBarControl>#maxbutton", "image", obj, ["mouseover"]);

    obj = new nexacro.Style_value("URL('theme://images/btn_Titlebar_max_P.png')");
    this._addCss("TitleBarControl>#maxbutton", "image", obj, ["pushed"]);

    obj = new nexacro.Style_value("URL('theme://images/btn_Titlebar_normal.png')");
    this._addCss("TitleBarControl>#normalbutton", "image", obj, ["normal"]);

    obj = new nexacro.Style_value("URL('theme://images/btn_Titlebar_normal_O.png')");
    this._addCss("TitleBarControl>#normalbutton", "image", obj, ["mouseover"]);

    obj = new nexacro.Style_value("URL('theme://images/btn_Titlebar_normal_P.png')");
    this._addCss("TitleBarControl>#normalbutton", "image", obj, ["pushed"]);

    obj = new nexacro.Style_value("URL('theme://images/btn_Titlebar_close.png')");
    this._addCss("TitleBarControl>#closebutton", "image", obj, ["normal"]);

    obj = new nexacro.Style_value("URL('theme://images/btn_Titlebar_close_O.png')");
    this._addCss("TitleBarControl>#closebutton", "image", obj, ["mouseover"]);

    obj = new nexacro.Style_value("URL('theme://images/btn_Titlebar_close_P.png')");
    this._addCss("TitleBarControl>#closebutton", "image", obj, ["pushed"]);

    obj = new nexacro.Style_background("#f2f2efff","","","0","0","0","0","true");
    this._addCss("StatusbarControl", "background", obj, ["normal"]);

    obj = new nexacro.Style_border("1","solid","#a8a8a2ff","","0","none","","","0","none","","","0","none","","");
    this._addCss("StatusbarControl", "border", obj, ["normal"]);

    obj = new nexacro.Style_bordertype("round","3","3","false","false","true","true");
    this._addCss("StatusbarControl", "bordertype", obj, ["normal"]);

    obj = new nexacro.Style_color("#46463d");
    this._addCss("StatusbarControl", "color", obj, ["normal"]);

    obj = new nexacro.Style_font("9 dotum");
    this._addCss("StatusbarControl", "font", obj, ["normal"]);
    this._addCss("StatusbarControl>#progressbar", "font", obj, ["normal"]);
    this._addCss("StatusbarControl>#zoomcombo", "font", obj, ["normal"]);
    this._addCss("StatusbarControl>#zoomcombo>#combolist", "font", obj, ["normal"]);
    this._addCss("Button", "font", obj, ["mouseover"]);
    this._addCss("ButtonControl", "font", obj, ["mouseover"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar>#nextbutton", "font", obj, ["normal"]);

    obj = new nexacro.Style_value("URL('theme://images/img_grip.png')");
    this._addCss("StatusbarControl", "gripimage", obj, ["normal"]);

    obj = new nexacro.Style_padding("0 0 0 12");
    this._addCss("StatusbarControl", "padding", obj, ["normal"]);

    obj = new nexacro.Style_value("5");
    this._addCss("StatusbarControl", "progressbargab", obj, ["normal"]);

    obj = new nexacro.Style_value("21");
    this._addCss("StatusbarControl", "progressbarheight", obj, ["normal"]);

    obj = new nexacro.Style_value("260");
    this._addCss("StatusbarControl", "progressbarwidth", obj, ["normal"]);

    obj = new nexacro.Style_value("10");
    this._addCss("StatusbarControl", "zoomcombogap", obj, ["normal"]);

    obj = new nexacro.Style_value("21");
    this._addCss("StatusbarControl", "zoomcomboheight", obj, ["normal"]);

    obj = new nexacro.Style_value("80");
    this._addCss("StatusbarControl", "zoomcombowidth", obj, ["normal"]);

    obj = new nexacro.Style_align("center middle");
    this._addCss("StatusbarControl>#progressbar", "align", obj, ["normal"]);
    this._addCss("VScrollBar>#incbutton", "align", obj, ["normal"]);
    this._addCss("VScrollBar>#decbutton", "align", obj, ["normal"]);
    this._addCss("VScrollBar>#trackbar", "align", obj, ["normal"]);
    this._addCss("VScrollBarControl>#incbutton", "align", obj, ["normal"]);
    this._addCss("VScrollBarControl>#decbutton", "align", obj, ["normal"]);
    this._addCss("VScrollBarControl>#trackbar", "align", obj, ["normal"]);
    this._addCss("HScrollBar>#incbutton", "align", obj, ["normal"]);
    this._addCss("HScrollBar>#decbutton", "align", obj, ["normal"]);
    this._addCss("HScrollBar>#trackbar", "align", obj, ["normal"]);
    this._addCss("HScrollBarControl>#incbutton", "align", obj, ["normal"]);
    this._addCss("HScrollBarControl>#decbutton", "align", obj, ["normal"]);
    this._addCss("HScrollBarControl>#trackbar", "align", obj, ["normal"]);
    this._addCss("Button", "align", obj, ["normal"]);
    this._addCss("ButtonControl", "align", obj, ["normal"]);
    this._addCss("ImageViewer", "align", obj, ["normal"]);
    this._addCss("ImageViewerControl", "align", obj, ["normal"]);
    this._addCss("ProgressBar", "align", obj, ["normal"]);
    this._addCss("ProgressBarControl", "align", obj, ["normal"]);
    this._addCss("DatePicker", "align", obj, ["normal"]);
    this._addCss("DatePickerControl", "align", obj, ["normal"]);
    this._addCss("Grid", "align", obj, ["normal"]);
    this._addCss("Grid>#controlbutton", "align", obj, ["normal"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar", "align", obj, ["normal"]);
    this._addCss("Div", "align", obj, ["normal"]);
    this._addCss("DivControl", "align", obj, ["normal"]);
    this._addCss("PopupDiv", "align", obj, ["normal"]);
    this._addCss("Step", "align", obj, ["normal"]);
    this._addCss("StepControl", "align", obj, ["normal"]);
    this._addCss("FileDownload", "align", obj, ["normal"]);
    this._addCss("FileDownloadControl", "align", obj, ["normal"]);
    this._addCss("Button.btn_WF_CRUD", "align", obj, ["normal", "mouseover", "pushed", "selected", "focused"]);

    obj = new nexacro.Style_color("#cdcdc8ff");
    this._addCss("StatusbarControl>#progressbar", "barcolor", obj, ["normal"]);

    obj = new nexacro.Style_gradation("");
    this._addCss("StatusbarControl>#progressbar", "bargradation", obj, ["normal"]);
    this._addCss("ProgressBar", "bargradation", obj, ["normal"]);
    this._addCss("ProgressBarControl", "bargradation", obj, ["normal"]);

    obj = new nexacro.Style_value("normal");
    this._addCss("StatusbarControl>#progressbar", "bartype", obj, ["normal"]);

    obj = new nexacro.Style_border("1","solid","#a8a8a2ff","");
    this._addCss("StatusbarControl>#progressbar", "border", obj, ["normal"]);

    obj = new nexacro.Style_bordertype("","0","0","true","true","true","true");
    this._addCss("StatusbarControl>#progressbar", "bordertype", obj, ["normal"]);
    this._addCss("StatusbarControl>#zoomcombo", "bordertype", obj, ["normal"]);
    this._addCss("StatusbarForm>#zoomcombo>#comboedit", "bordertype", obj, ["normal"]);
    this._addCss("StatusbarControl>#zoomcombo>#dropbutton", "bordertype", obj, ["normal"]);
    this._addCss("VScrollBar>#incbutton", "bordertype", obj, ["normal"]);
    this._addCss("VScrollBar>#decbutton", "bordertype", obj, ["normal"]);
    this._addCss("VScrollBar>#trackbar", "bordertype", obj, ["normal"]);
    this._addCss("VScrollBarControl>#incbutton", "bordertype", obj, ["normal"]);
    this._addCss("VScrollBarControl>#decbutton", "bordertype", obj, ["normal"]);
    this._addCss("VScrollBarControl>#trackbar", "bordertype", obj, ["normal"]);
    this._addCss("HScrollBar>#incbutton", "bordertype", obj, ["normal"]);
    this._addCss("HScrollBar>#decbutton", "bordertype", obj, ["normal"]);
    this._addCss("HScrollBar>#trackbar", "bordertype", obj, ["normal"]);
    this._addCss("HScrollBarControl>#incbutton", "bordertype", obj, ["normal"]);
    this._addCss("HScrollBarControl>#decbutton", "bordertype", obj, ["normal"]);
    this._addCss("HScrollBarControl>#trackbar", "bordertype", obj, ["normal"]);
    this._addCss("Spin>#spinedit", "bordertype", obj, ["normal"]);
    this._addCss("Spin>#spinupbutton", "bordertype", obj, ["normal"]);
    this._addCss("Spin>#spindownbutton", "bordertype", obj, ["normal"]);
    this._addCss("SpinControl>#spinedit", "bordertype", obj, ["normal"]);
    this._addCss("SpinControl>#spinupbutton", "bordertype", obj, ["normal"]);
    this._addCss("SpinControl>#spindownbutton", "bordertype", obj, ["normal"]);
    this._addCss("CheckBox", "bordertype", obj, ["normal"]);
    this._addCss("CheckBoxControl", "bordertype", obj, ["normal"]);
    this._addCss("Radio", "bordertype", obj, ["normal"]);
    this._addCss("RadioControl", "bordertype", obj, ["normal"]);
    this._addCss("Menu", "bordertype", obj, ["normal"]);
    this._addCss("MenuControl", "bordertype", obj, ["normal"]);
    this._addCss("ProgressBar", "bordertype", obj, ["normal"]);
    this._addCss("ProgressBarControl", "bordertype", obj, ["normal"]);
    this._addCss("Calendar>#dropbutton", "bordertype", obj, ["normal"]);
    this._addCss("Calendar>#calendaredit", "bordertype", obj, ["normal", "mouseover", "focused", "disabled"]);
    this._addCss("Calendar>#spinupbutton", "bordertype", obj, ["normal"]);
    this._addCss("Calendar>#spindownbutton", "bordertype", obj, ["normal"]);
    this._addCss("Calendar>#popupcalendar>#nextbutton", "bordertype", obj, ["normal"]);
    this._addCss("Calendar>#popupcalendar>#monthspin>#spinedit", "bordertype", obj, ["normal"]);
    this._addCss("CalendarControl>#dropbutton", "bordertype", obj, ["normal"]);
    this._addCss("CalendarControl>#calendaredit", "bordertype", obj, ["normal", "mouseover", "focused", "selected"]);
    this._addCss("CalendarControl>#calendar0edit", "bordertype", obj, ["disabled"]);
    this._addCss("CalendarControl>#spinupbutton", "bordertype", obj, ["normal"]);
    this._addCss("CalendarControl>#spindownbutton", "bordertype", obj, ["normal"]);
    this._addCss("CalendarControl>#popupcalendar>#nextbutton", "bordertype", obj, ["normal"]);
    this._addCss("CalendarControl>#popupcalendar>#monthspin>#spinedit", "bordertype", obj, ["normal"]);
    this._addCss("Grid>#body", "bordertype", obj, ["normal", "disabled"]);
    this._addCss("Grid>#summ", "bordertype", obj, ["normal"]);
    this._addCss("Grid>#summary", "bordertype", obj, ["normal"]);
    this._addCss("Grid>#controlcheckbox", "bordertype", obj, ["normal"]);
    this._addCss("Grid>#controlcalendar", "bordertype", obj, ["normal"]);
    this._addCss("DivControl", "bordertype", obj, ["normal"]);
    this._addCss("PopupDiv", "bordertype", obj, ["normal"]);

    obj = new nexacro.Style_color("#444444ff");
    this._addCss("StatusbarControl>#progressbar", "color", obj, ["normal"]);

    obj = new nexacro.Style_value("forward");
    this._addCss("StatusbarControl>#progressbar", "direction", obj, ["normal"]);
    this._addCss("ProgressBar", "direction", obj, ["normal"]);
    this._addCss("ProgressBarControl", "direction", obj, ["normal"]);

    obj = new nexacro.Style_value("");
    this._addCss("StatusbarControl>#progressbar", "endimage", obj, ["normal"]);
    this._addCss("ProgressBar", "endimage", obj, ["normal"]);
    this._addCss("ProgressBarControl", "endimage", obj, ["normal"]);

    obj = new nexacro.Style_padding("1 1 1 1");
    this._addCss("StatusbarControl>#progressbar", "padding", obj, ["normal"]);
    this._addCss("StatusbarControl>#zoomcombo", "padding", obj, ["normal"]);

    obj = new nexacro.Style_value("");
    this._addCss("StatusbarControl>#progressbar", "progressimage", obj, ["normal"]);

    obj = new nexacro.Style_value("true");
    this._addCss("StatusbarControl>#progressbar", "smooth", obj, ["normal"]);
    this._addCss("ProgressBar", "smooth", obj, ["normal"]);
    this._addCss("ProgressBarControl", "smooth", obj, ["normal"]);

    obj = new nexacro.Style_value("");
    this._addCss("StatusbarControl>#progressbar", "startimage", obj, ["normal"]);
    this._addCss("ProgressBar", "startimage", obj, ["normal"]);
    this._addCss("ProgressBarControl", "startimage", obj, ["normal"]);

    obj = new nexacro.Style_background("#f2f2efff","theme://images/ico_zoomcombo.png","","0","0","0","50","true");
    this._addCss("StatusbarControl>#zoomcombo", "background", obj, ["normal"]);

    obj = new nexacro.Style_border("1","solid","#a8a8a2ff","");
    this._addCss("StatusbarControl>#zoomcombo", "border", obj, ["normal"]);
    this._addCss("StatusbarControl>#zoomcombo>#dropbutton", "border", obj, ["normal"]);
    this._addCss("StatusbarControl>#zoomcombo>#combolist", "border", obj, ["normal"]);
    this._addCss("VScrollBar>#incbutton", "border", obj, ["normal", "mouseover"]);
    this._addCss("VScrollBar>#decbutton", "border", obj, ["normal", "mouseover"]);
    this._addCss("VScrollBar>#trackbar", "border", obj, ["normal", "mouseover"]);
    this._addCss("VScrollBarControl>#incbutton", "border", obj, ["normal", "mouseover"]);
    this._addCss("VScrollBarControl>#decbutton", "border", obj, ["normal", "mouseover"]);
    this._addCss("VScrollBarControl>#trackbar", "border", obj, ["normal", "mouseover"]);
    this._addCss("HScrollBar>#incbutton", "border", obj, ["normal", "mouseover"]);
    this._addCss("HScrollBar>#decbutton", "border", obj, ["normal", "mouseover"]);
    this._addCss("HScrollBar>#trackbar", "border", obj, ["normal", "mouseover"]);
    this._addCss("HScrollBarControl>#incbutton", "border", obj, ["normal", "mouseover"]);
    this._addCss("HScrollBarControl>#decbutton", "border", obj, ["normal", "mouseover"]);
    this._addCss("HScrollBarControl>#trackbar", "border", obj, ["normal", "mouseover"]);
    this._addCss("Spin>#spinupbutton", "border", obj, ["normal"]);
    this._addCss("Spin>#spindownbutton", "border", obj, ["normal"]);
    this._addCss("SpinControl>#spinupbutton", "border", obj, ["normal"]);
    this._addCss("SpinControl>#spindownbutton", "border", obj, ["normal"]);
    this._addCss("Calendar>#spinupbutton", "border", obj, ["normal"]);
    this._addCss("Calendar>#spindownbutton", "border", obj, ["normal"]);
    this._addCss("CalendarControl>#spinupbutton", "border", obj, ["normal"]);
    this._addCss("CalendarControl>#spindownbutton", "border", obj, ["normal"]);
    this._addCss("Tab>#spinupbutton", "border", obj, ["normal", "mouseover", "pushed"]);
    this._addCss("Tab>#spindownbutton", "border", obj, ["normal", "mouseover", "pushed"]);
    this._addCss("TabControl>#spinupbutton", "border", obj, ["normal", "mouseover", "pushed"]);
    this._addCss("TabControl>#spindownbutton", "border", obj, ["normal", "mouseover", "pushed"]);

    obj = new nexacro.Style_value("16");
    this._addCss("StatusbarControl>#zoomcombo", "buttonsize", obj, ["normal"]);

    obj = new nexacro.Style_color("#5a280b");
    this._addCss("StatusbarControl>#zoomcombo", "color", obj, ["normal"]);
    this._addCss("StatusbarForm>#zoomcombo>#comboedit", "color", obj, ["normal"]);
    this._addCss("Menu", "color", obj, ["normal"]);
    this._addCss("MenuControl", "color", obj, ["normal"]);
    this._addCss("GroupBox", "color", obj, ["normal"]);
    this._addCss("GroupBoxControl", "color", obj, ["normal"]);

    obj = new nexacro.Style_accessibility("","true","all","","","");
    this._addCss("StatusbarControl>#zoomcombo", "itemaccessibility", obj, ["normal"]);
    this._addCss("Radio", "itemaccessibility", obj, ["normal"]);
    this._addCss("RadioControl", "itemaccessibility", obj, ["normal"]);
    this._addCss("ListBox", "itemaccessibility", obj, ["normal"]);
    this._addCss("ListBoxControl", "itemaccessibility", obj, ["normal"]);
    this._addCss("Menu", "itemaccessibility", obj, ["normal"]);
    this._addCss("MenuControl", "itemaccessibility", obj, ["normal"]);

    obj = new nexacro.Style_background("#ffffffff","","","0","0","0","0","true");
    this._addCss("StatusbarControl>#zoomcombo", "itembackground", obj, ["normal"]);
    this._addCss("StatusbarControl>#zoomcombo>#combolist", "itembackground", obj, ["normal"]);
    this._addCss("ListBox", "itembackground", obj, ["normal"]);
    this._addCss("ListBoxControl", "itembackground", obj, ["normal"]);
    this._addCss("Combo>#combolist", "itembackground", obj, ["normal"]);
    this._addCss("Grid>#controlcombo>#combolist", "itembackground", obj, ["normal"]);

    obj = new nexacro.Style_border("0","none","","");
    this._addCss("StatusbarControl>#zoomcombo", "itemborder", obj, ["normal"]);
    this._addCss("StatusbarControl>#zoomcombo>#combolist", "itemborder", obj, ["normal"]);
    this._addCss("Combo>#combolist", "itemborder", obj, ["normal"]);
    this._addCss("Menu", "itemborder", obj, ["normal"]);
    this._addCss("MenuControl", "itemborder", obj, ["normal"]);
    this._addCss("Grid>#controlcombo>#combolist", "itemborder", obj, ["normal"]);

    obj = new nexacro.Style_bordertype("","0","0","true","true","true","true");
    this._addCss("StatusbarControl>#zoomcombo", "itembordertype", obj, ["normal"]);
    this._addCss("Radio", "itembordertype", obj, ["normal"]);
    this._addCss("RadioControl", "itembordertype", obj, ["normal"]);
    this._addCss("ListBox", "itembordertype", obj, ["normal"]);
    this._addCss("ListBoxControl", "itembordertype", obj, ["normal"]);

    obj = new nexacro.Style_color("#6e6e63");
    this._addCss("StatusbarControl>#zoomcombo", "itemcolor", obj, ["normal"]);
    this._addCss("StatusbarControl>#zoomcombo>#combolist", "itemcolor", obj, ["normal"]);

    obj = new nexacro.Style_font("");
    this._addCss("StatusbarControl>#zoomcombo", "itemfont", obj, ["normal"]);

    obj = new nexacro.Style_gradation("");
    this._addCss("StatusbarControl>#zoomcombo", "itemgradation", obj, ["normal"]);
    this._addCss("Radio", "itemgradation", obj, ["normal"]);
    this._addCss("RadioControl", "itemgradation", obj, ["normal"]);
    this._addCss("ListBox", "itemgradation", obj, ["normal"]);
    this._addCss("ListBoxControl", "itemgradation", obj, ["normal"]);
    this._addCss("Menu", "itemgradation", obj, ["normal"]);
    this._addCss("MenuControl", "itemgradation", obj, ["normal"]);

    obj = new nexacro.Style_value("20");
    this._addCss("StatusbarControl>#zoomcombo", "itemheight", obj, ["normal"]);
    this._addCss("StatusbarControl>#zoomcombo>#combolist", "itemheight", obj, ["normal"]);
    this._addCss("ListBox", "itemheight", obj, ["normal"]);
    this._addCss("ListBoxControl", "itemheight", obj, ["normal"]);
    this._addCss("Combo>#combolist", "itemheight", obj, ["normal"]);
    this._addCss("Grid>#controlcombo>#combolist", "itemheight", obj, ["normal"]);
    this._addCss("FileUpload", "itemheight", obj, ["normal"]);
    this._addCss("FileUploadControl", "itemheight", obj, ["normal"]);

    obj = new nexacro.Style_padding("0 5 0 8");
    this._addCss("StatusbarControl>#zoomcombo", "itempadding", obj, ["normal"]);
    this._addCss("StatusbarControl>#zoomcombo>#combolist", "itempadding", obj, ["normal"]);

    obj = new nexacro.Style_background("#f2f2efff","","","0","0","0","0","true");
    this._addCss("StatusbarControl>#zoomcombo", "itembackground", obj, ["mouseover"]);

    obj = new nexacro.Style_color("#5a280b");
    this._addCss("StatusbarControl>#zoomcombo", "itemcolor", obj, ["mouseover", "selected"]);

    obj = new nexacro.Style_background("#e0e0d9ff","","","0","0","0","0","true");
    this._addCss("StatusbarControl>#zoomcombo", "itembackground", obj, ["selected"]);

    obj = new nexacro.Style_padding("0 0 0 20");
    this._addCss("StatusbarForm>#zoomcombo>#comboedit", "padding", obj, ["normal"]);

    obj = new nexacro.Style_background("@gradation","theme://images/img_drop_N.png","stretch","6","6","0","0","true");
    this._addCss("StatusbarControl>#zoomcombo>#dropbutton", "background", obj, ["normal"]);

    obj = new nexacro.Style_gradation("linear 0,0 #ffffff 0,100 #e3e3dd");
    this._addCss("StatusbarControl>#zoomcombo>#dropbutton", "gradation", obj, ["normal", "pushed"]);

    obj = new nexacro.Style_value("URL('theme://images/btn_drop_N.png')");
    this._addCss("StatusbarControl>#zoomcombo>#dropbutton", "image", obj, ["normal"]);

    obj = new nexacro.Style_align("center middle");
    this._addCss("StatusbarControl>#zoomcombo>#dropbutton", "imagealign", obj, ["normal"]);
    this._addCss("VScrollBar>#decbutton", "imagealign", obj, ["normal"]);
    this._addCss("VScrollBarControl>#decbutton", "imagealign", obj, ["normal"]);
    this._addCss("HScrollBar>#incbutton", "imagealign", obj, ["normal"]);
    this._addCss("HScrollBarControl>#incbutton", "imagealign", obj, ["normal"]);
    this._addCss("Spin>#spinupbutton", "imagealign", obj, ["normal"]);
    this._addCss("Spin>#spindownbutton", "imagealign", obj, ["normal"]);
    this._addCss("SpinControl>#spinupbutton", "imagealign", obj, ["normal"]);
    this._addCss("SpinControl>#spindownbutton", "imagealign", obj, ["normal"]);
    this._addCss("Combo>#dropbutton", "imagealign", obj, ["normal"]);
    this._addCss("Calendar>#spinupbutton", "imagealign", obj, ["normal"]);
    this._addCss("Calendar>#spindownbutton", "imagealign", obj, ["normal"]);
    this._addCss("Calendar>#popupcalendar>#prevbutton", "imagealign", obj, ["normal"]);
    this._addCss("Calendar>#popupcalendar>#nextbutton", "imagealign", obj, ["normal"]);
    this._addCss("CalendarControl>#spinupbutton", "imagealign", obj, ["normal"]);
    this._addCss("CalendarControl>#spindownbutton", "imagealign", obj, ["normal"]);
    this._addCss("CalendarControl>#popupcalendar>#prevbutton", "imagealign", obj, ["normal"]);
    this._addCss("CalendarControl>#popupcalendar>#nextbutton", "imagealign", obj, ["normal"]);
    this._addCss("Tab>#extrabutton", "imagealign", obj, ["normal"]);
    this._addCss("Tab>#spinupbutton", "imagealign", obj, ["normal"]);
    this._addCss("Tab>#spindownbutton", "imagealign", obj, ["normal"]);
    this._addCss("TabControl>#extrabutton", "imagealign", obj, ["normal"]);
    this._addCss("TabControl>#spinupbutton", "imagealign", obj, ["normal"]);
    this._addCss("TabControl>#spindownbutton", "imagealign", obj, ["normal"]);
    this._addCss("Grid>#controlcombo>#dropbutton", "imagealign", obj, ["normal"]);
    this._addCss("Grid>#controlexpand", "imagealign", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("Button.btn_WF_schArea", "imagealign", obj, ["normal", "mouseover", "pushed", "selected", "focused"]);

    obj = new nexacro.Style_background("@gradation","theme://images/img_drop_O.png","stretch","6","6","0","0","true");
    this._addCss("StatusbarControl>#zoomcombo>#dropbutton", "background", obj, ["mouseover"]);

    obj = new nexacro.Style_gradation("linear 0,0 #ddddd6 0,100 #acaca6");
    this._addCss("StatusbarControl>#zoomcombo>#dropbutton", "gradation", obj, ["mouseover"]);

    obj = new nexacro.Style_value("URL('theme://images/btn_drop_O.png')");
    this._addCss("StatusbarControl>#zoomcombo>#dropbutton", "image", obj, ["mouseover", "pushed"]);

    obj = new nexacro.Style_background("#e1e1daff","","","0","0","0","0","true");
    this._addCss("StatusbarControl>#zoomcombo>#dropbutton", "background", obj, ["pushed"]);
    this._addCss("Spin>#spinupbutton", "background", obj, ["pushed"]);
    this._addCss("Spin>#spindownbutton", "background", obj, ["pushed"]);
    this._addCss("SpinControl>#spinupbutton", "background", obj, ["pushed"]);
    this._addCss("SpinControl>#spindownbutton", "background", obj, ["pushed"]);
    this._addCss("Calendar>#spinupbutton", "background", obj, ["pushed"]);
    this._addCss("Calendar>#spindownbutton", "background", obj, ["pushed"]);
    this._addCss("CalendarControl>#spinupbutton", "background", obj, ["pushed"]);
    this._addCss("CalendarControl>#spindownbutton", "background", obj, ["pushed"]);

    obj = new nexacro.Style_background("#ffffffff","","","0","0","0","0","true");
    this._addCss("StatusbarControl>#zoomcombo>#combolist", "background", obj, ["normal"]);
    this._addCss("Edit", "background", obj, ["normal"]);
    this._addCss("TextArea", "background", obj, ["normal"]);
    this._addCss("MaskEdit", "background", obj, ["normal"]);
    this._addCss("Button.btn_WF_MDI", "background", obj, ["pushed", "focused", "selected"]);
    this._addCss("Spin", "background", obj, ["normal"]);
    this._addCss("SpinControl", "background", obj, ["normal"]);
    this._addCss("ListBox", "background", obj, ["normal"]);
    this._addCss("ListBoxControl", "background", obj, ["normal"]);
    this._addCss("Combo", "background", obj, ["normal", "mouseover", "focused", "pushed"]);
    this._addCss("Combo>#combolist", "background", obj, ["normal"]);
    this._addCss("ImageViewer", "background", obj, ["normal"]);
    this._addCss("ImageViewerControl", "background", obj, ["normal"]);
    this._addCss("GroupBox", "background", obj, ["normal"]);
    this._addCss("GroupBoxControl", "background", obj, ["normal"]);
    this._addCss("ProgressBar", "background", obj, ["disabled"]);
    this._addCss("ProgressBarControl", "background", obj, ["disabled"]);
    this._addCss("DatePicker", "background", obj, ["normal"]);
    this._addCss("DatePickerControl", "background", obj, ["normal"]);
    this._addCss("Calendar", "background", obj, ["normal"]);
    this._addCss("Calendar>#popupcalendar>#monthspin", "background", obj, ["normal", "mouseover", "focused"]);
    this._addCss("Calendar>#popupcalendar>#monthspin>#spinedit", "background", obj, ["normal"]);
    this._addCss("CalendarControl", "background", obj, ["normal"]);
    this._addCss("CalendarControl>#popupcalendar>#monthspin", "background", obj, ["normal", "mouseover", "focused"]);
    this._addCss("CalendarControl>#popupcalendar>#monthspin>#spinedit", "background", obj, ["normal"]);
    this._addCss("Grid>#body", "background", obj, ["normal", "disabled"]);
    this._addCss("Grid>#controledit", "background", obj, ["normal"]);
    this._addCss("Grid>#controltextarea", "background", obj, ["normal"]);
    this._addCss("Grid>#controlmaskedit", "background", obj, ["normal"]);
    this._addCss("Grid>#controlcombo", "background", obj, ["normal", "mouseover", "pushed", "focused"]);
    this._addCss("Grid>#controlcombo>#combolist", "background", obj, ["normal"]);
    this._addCss("Grid>#controlcalendar", "background", obj, ["normal"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar", "background", obj, ["normal"]);

    obj = new nexacro.Style_color("#6e6e63");
    this._addCss("StatusbarControl>#zoomcombo>#combolist", "color", obj, ["normal"]);

    obj = new nexacro.Style_background("","","","0","0","0","0","true");
    this._addCss("Form", "background", obj, ["normal"]);
    this._addCss("Spin>#spinedit", "background", obj, ["normal"]);
    this._addCss("SpinControl>#spinedit", "background", obj, ["normal"]);

    obj = new nexacro.Style_color("#46463dff");
    this._addCss("Form", "color", obj, ["normal"]);

    obj = new nexacro.Style_value("10");
    this._addCss("VScrollBar", "barminsize", obj, ["normal"]);
    this._addCss("VScrollBarControl", "barminsize", obj, ["normal"]);
    this._addCss("HScrollBar", "barminsize", obj, ["normal"]);
    this._addCss("HScrollBarControl", "barminsize", obj, ["normal"]);

    obj = new nexacro.Style_value("");
    this._addCss("VScrollBar", "baroutsize", obj, ["normal"]);
    this._addCss("VScrollBarControl", "baroutsize", obj, ["normal"]);
    this._addCss("HScrollBar", "baroutsize", obj, ["normal"]);
    this._addCss("HScrollBarControl", "baroutsize", obj, ["normal"]);

    obj = new nexacro.Style_value("13");
    this._addCss("VScrollBar", "decbtnsize", obj, ["normal"]);
    this._addCss("VScrollBarControl", "decbtnsize", obj, ["normal"]);
    this._addCss("HScrollBar", "decbtnsize", obj, ["normal"]);
    this._addCss("HScrollBarControl", "decbtnsize", obj, ["normal"]);

    obj = new nexacro.Style_value("");
    this._addCss("VScrollBar", "imgoutsize", obj, ["normal"]);
    this._addCss("VScrollBarControl", "imgoutsize", obj, ["normal"]);
    this._addCss("HScrollBar", "imgoutsize", obj, ["normal"]);
    this._addCss("HScrollBarControl", "imgoutsize", obj, ["normal"]);

    obj = new nexacro.Style_value("13");
    this._addCss("VScrollBar", "incbtnsize", obj, ["normal"]);
    this._addCss("VScrollBarControl", "incbtnsize", obj, ["normal"]);
    this._addCss("HScrollBar", "incbtnsize", obj, ["normal"]);
    this._addCss("HScrollBarControl", "incbtnsize", obj, ["normal"]);

    obj = new nexacro.Style_background("#ecece8ff","","","0","0","0","0","true");
    this._addCss("VScrollBar", "background", obj, ["normal"]);
    this._addCss("VScrollBarControl", "background", obj, ["normal"]);
    this._addCss("HScrollBar", "background", obj, ["normal"]);
    this._addCss("HScrollBarControl", "background", obj, ["normal"]);

    obj = new nexacro.Style_value("13");
    this._addCss("VScrollBar", "scrollbarsize", obj, ["normal"]);
    this._addCss("VScrollBarControl", "scrollbarsize", obj, ["normal"]);
    this._addCss("HScrollBar", "scrollbarsize", obj, ["normal"]);
    this._addCss("HScrollBarControl", "scrollbarsize", obj, ["normal"]);

    obj = new nexacro.Style_value("");
    this._addCss("VScrollBar", "trackbarsize", obj, ["normal"]);
    this._addCss("VScrollBarControl", "trackbarsize", obj, ["normal"]);
    this._addCss("HScrollBar", "trackbarsize", obj, ["normal"]);
    this._addCss("HScrollBarControl", "trackbarsize", obj, ["normal"]);

    obj = new nexacro.Style_value("50");
    this._addCss("VScrollBar", "opacity", obj, ["disabled"]);
    this._addCss("VScrollBarControl", "opacity", obj, ["disabled"]);
    this._addCss("HScrollBar", "opacity", obj, ["disabled"]);
    this._addCss("HScrollBarControl", "opacity", obj, ["disabled"]);
    this._addCss("Button", "opacity", obj, ["disabled"]);
    this._addCss("ButtonControl", "opacity", obj, ["disabled"]);
    this._addCss("Button.btn_MDI_spinup", "opacity", obj, ["disabled"]);
    this._addCss("Button.btn_MDI_spindn", "opacity", obj, ["disabled"]);
    this._addCss("Button.btn_MDI_screenmax", "opacity", obj, ["disabled"]);
    this._addCss("Button.btn_MDI_screenpop", "opacity", obj, ["disabled"]);
    this._addCss("Button.btn_MDI_screenH", "opacity", obj, ["disabled"]);
    this._addCss("Button.btn_MDI_screenV", "opacity", obj, ["disabled"]);
    this._addCss("Button.btn_MDI_screenclose", "opacity", obj, ["disabled"]);
    this._addCss("Combo", "opacity", obj, ["readonly>#dropbutton"]);
    this._addCss("ImageViewer", "opacity", obj, ["disabled"]);
    this._addCss("ImageViewerControl", "opacity", obj, ["disabled"]);
    this._addCss("Calendar>#popupcalendar>#yearspin>#spinupbutton", "opacity", obj, ["normal"]);
    this._addCss("Calendar>#popupcalendar>#yearspin>#spindownbutton", "opacity", obj, ["normal"]);
    this._addCss("Calendar>#popupcalendar>#monthspin>#spinupbutton", "opacity", obj, ["normal"]);
    this._addCss("Calendar>#popupcalendar>#monthspin>#spindownbutton", "opacity", obj, ["normal"]);
    this._addCss("CalendarControl>#popupcalendar>#yearspin>#spinupbutton", "opacity", obj, ["normal"]);
    this._addCss("CalendarControl>#popupcalendar>#yearspin>#spindownbutton", "opacity", obj, ["normal"]);
    this._addCss("CalendarControl>#popupcalendar>#monthspin>#spinupbutton", "opacity", obj, ["normal"]);
    this._addCss("CalendarControl>#popupcalendar>#monthspin>#spindownbutton", "opacity", obj, ["normal"]);
    this._addCss("Tab>#spinupbutton", "opacity", obj, ["disabled"]);
    this._addCss("Tab>#spindownbutton", "opacity", obj, ["disabled"]);
    this._addCss("TabControl>#spinupbutton", "opacity", obj, ["disabled"]);
    this._addCss("TabControl>#spindownbutton", "opacity", obj, ["disabled"]);
    this._addCss("Step", "opacity", obj, ["disabled"]);
    this._addCss("StepControl", "opacity", obj, ["disabled"]);
    this._addCss("FileUpload", "opacity", obj, ["disabled"]);
    this._addCss("FileUploadControl", "opacity", obj, ["disabled"]);
    this._addCss("FileDownload", "opacity", obj, ["disabled"]);
    this._addCss("FileDownloadControl", "opacity", obj, ["disabled"]);

    obj = new nexacro.Style_background("@gradation","","","0","0","0","0","true");
    this._addCss("VScrollBar>#incbutton", "background", obj, ["normal", "mouseover", "pushed", "disabled"]);
    this._addCss("VScrollBar>#decbutton", "background", obj, ["normal", "mouseover", "pushed", "disabled"]);
    this._addCss("VScrollBar>#trackbar", "background", obj, ["normal", "mouseover", "pushed"]);
    this._addCss("VScrollBarControl>#incbutton", "background", obj, ["normal", "mouseover", "pushed", "disabled"]);
    this._addCss("VScrollBarControl>#decbutton", "background", obj, ["normal", "mouseover", "pushed", "disabled"]);
    this._addCss("VScrollBarControl>#trackbar", "background", obj, ["normal", "mouseover", "pushed"]);
    this._addCss("HScrollBar>#incbutton", "background", obj, ["normal", "mouseover", "pushed", "disabled"]);
    this._addCss("HScrollBar>#decbutton", "background", obj, ["normal", "mouseover", "pushed", "disabled"]);
    this._addCss("HScrollBar>#trackbar", "background", obj, ["normal", "mouseover", "pushed"]);
    this._addCss("HScrollBarControl>#incbutton", "background", obj, ["normal", "mouseover", "pushed", "disabled"]);
    this._addCss("HScrollBarControl>#decbutton", "background", obj, ["normal", "mouseover", "pushed", "disabled"]);
    this._addCss("HScrollBarControl>#trackbar", "background", obj, ["normal", "mouseover", "pushed"]);
    this._addCss("Button", "background", obj, ["normal"]);
    this._addCss("ButtonControl", "background", obj, ["normal"]);
    this._addCss("Button.btn_WF_MDI", "background", obj, ["mouseover"]);
    this._addCss("Spin>#spinupbutton", "background", obj, ["normal"]);
    this._addCss("Spin>#spindownbutton", "background", obj, ["normal"]);
    this._addCss("SpinControl>#spinupbutton", "background", obj, ["normal"]);
    this._addCss("SpinControl>#spindownbutton", "background", obj, ["normal"]);
    this._addCss("Combo>#dropbutton", "background", obj, ["mouseover", "focused", "selected", "pushed"]);
    this._addCss("Calendar>#spinupbutton", "background", obj, ["normal"]);
    this._addCss("Calendar>#spindownbutton", "background", obj, ["normal"]);
    this._addCss("CalendarControl>#spinupbutton", "background", obj, ["normal"]);
    this._addCss("CalendarControl>#spindownbutton", "background", obj, ["normal"]);
    this._addCss("Tab>#spinupbutton", "background", obj, ["normal"]);
    this._addCss("Tab>#spindownbutton", "background", obj, ["normal"]);
    this._addCss("TabControl>#spinupbutton", "background", obj, ["normal"]);
    this._addCss("TabControl>#spindownbutton", "background", obj, ["normal"]);
    this._addCss("Grid>#controlbutton", "background", obj, ["normal"]);
    this._addCss("Grid>#controlcombo>#dropbutton", "background", obj, ["mouseover", "focused", "selected", "pushed"]);
    this._addCss("FileDownload", "background", obj, ["normal"]);
    this._addCss("FileDownloadControl", "background", obj, ["normal"]);
    this._addCss("Button.btn_WF_schArea", "background", obj, ["mouseover", "pushed"]);
    this._addCss("Button.btn_WF_CRUD", "background", obj, ["normal", "mouseover", "pushed", "selected", "focused"]);

    obj = new nexacro.Style_gradation("linear 0,0 #fbfbfa 100,0 #deded7");
    this._addCss("VScrollBar>#incbutton", "gradation", obj, ["normal"]);
    this._addCss("VScrollBar>#decbutton", "gradation", obj, ["normal"]);
    this._addCss("VScrollBar>#trackbar", "gradation", obj, ["normal"]);
    this._addCss("VScrollBarControl>#incbutton", "gradation", obj, ["normal"]);
    this._addCss("VScrollBarControl>#decbutton", "gradation", obj, ["normal"]);
    this._addCss("VScrollBarControl>#trackbar", "gradation", obj, ["normal"]);

    obj = new nexacro.Style_value("URL('theme://images/btn_vinc_N.png')");
    this._addCss("VScrollBar>#incbutton", "image", obj, ["normal"]);
    this._addCss("VScrollBarControl>#incbutton", "image", obj, ["normal"]);

    obj = new nexacro.Style_align("cetner middle");
    this._addCss("VScrollBar>#incbutton", "imagealign", obj, ["normal"]);
    this._addCss("VScrollBarControl>#incbutton", "imagealign", obj, ["normal"]);

    obj = new nexacro.Style_padding("0 0 0 0");
    this._addCss("VScrollBar>#incbutton", "padding", obj, ["normal"]);
    this._addCss("VScrollBar>#decbutton", "padding", obj, ["normal"]);
    this._addCss("VScrollBar>#trackbar", "padding", obj, ["normal"]);
    this._addCss("VScrollBarControl>#incbutton", "padding", obj, ["normal"]);
    this._addCss("VScrollBarControl>#decbutton", "padding", obj, ["normal"]);
    this._addCss("VScrollBarControl>#trackbar", "padding", obj, ["normal"]);
    this._addCss("HScrollBar>#incbutton", "padding", obj, ["normal"]);
    this._addCss("HScrollBar>#decbutton", "padding", obj, ["normal"]);
    this._addCss("HScrollBar>#trackbar", "padding", obj, ["normal"]);
    this._addCss("HScrollBarControl>#incbutton", "padding", obj, ["normal"]);
    this._addCss("HScrollBarControl>#decbutton", "padding", obj, ["normal"]);
    this._addCss("HScrollBarControl>#trackbar", "padding", obj, ["normal"]);
    this._addCss("Spin", "padding", obj, ["normal"]);
    this._addCss("SpinControl", "padding", obj, ["normal"]);
    this._addCss("CheckBox", "padding", obj, ["normal", "mouseover", "selected", "focused", "pushed"]);
    this._addCss("CheckBoxControl", "padding", obj, ["normal", "mouseover", "selected", "focused", "pushed"]);
    this._addCss("Radio", "padding", obj, ["normal"]);
    this._addCss("RadioControl", "padding", obj, ["normal"]);
    this._addCss("DatePicker", "padding", obj, ["normal"]);
    this._addCss("DatePickerControl", "padding", obj, ["normal"]);
    this._addCss("Calendar", "padding", obj, ["normal"]);
    this._addCss("Calendar>#popupcalendar>#monthspin>#spinedit", "padding", obj, ["normal"]);
    this._addCss("CalendarControl", "padding", obj, ["normal"]);
    this._addCss("CalendarControl>#popupcalendar>#monthspin>#spinedit", "padding", obj, ["normal"]);
    this._addCss("Grid>#controlcheckbox", "padding", obj, ["normal"]);
    this._addCss("Static.sta_WF_title", "padding", obj, ["normal"]);
    this._addCss("Static.sta_WF_ReftMsg", "padding", obj, ["normal"]);

    obj = new nexacro.Style_gradation("linear 0,0 #ddddd6 100,0 #aeaea8");
    this._addCss("VScrollBar>#incbutton", "gradation", obj, ["mouseover"]);
    this._addCss("VScrollBar>#decbutton", "gradation", obj, ["mouseover"]);
    this._addCss("VScrollBar>#trackbar", "gradation", obj, ["mouseover"]);
    this._addCss("VScrollBarControl>#incbutton", "gradation", obj, ["mouseover"]);
    this._addCss("VScrollBarControl>#decbutton", "gradation", obj, ["mouseover"]);
    this._addCss("VScrollBarControl>#trackbar", "gradation", obj, ["mouseover"]);

    obj = new nexacro.Style_value("URL('theme://images/btn_vinc_O.png')");
    this._addCss("VScrollBar>#incbutton", "image", obj, ["mouseover"]);
    this._addCss("VScrollBarControl>#incbutton", "image", obj, ["mouseover"]);

    obj = new nexacro.Style_gradation("linear 0,0 #dbdbd4 100,0 #aeaea8");
    this._addCss("VScrollBar>#incbutton", "gradation", obj, ["pushed"]);
    this._addCss("VScrollBar>#decbutton", "gradation", obj, ["pushed"]);
    this._addCss("VScrollBar>#trackbar", "gradation", obj, ["pushed"]);
    this._addCss("VScrollBarControl>#incbutton", "gradation", obj, ["pushed"]);
    this._addCss("VScrollBarControl>#decbutton", "gradation", obj, ["pushed"]);
    this._addCss("VScrollBarControl>#trackbar", "gradation", obj, ["pushed"]);

    obj = new nexacro.Style_border("1","solid","#909085ff","");
    this._addCss("VScrollBar>#incbutton", "border", obj, ["pushed"]);
    this._addCss("VScrollBar>#decbutton", "border", obj, ["pushed"]);
    this._addCss("VScrollBar>#trackbar", "border", obj, ["pushed"]);
    this._addCss("VScrollBarControl>#incbutton", "border", obj, ["pushed"]);
    this._addCss("VScrollBarControl>#decbutton", "border", obj, ["pushed"]);
    this._addCss("VScrollBarControl>#trackbar", "border", obj, ["pushed"]);
    this._addCss("HScrollBar>#incbutton", "border", obj, ["pushed"]);
    this._addCss("HScrollBar>#decbutton", "border", obj, ["pushed"]);
    this._addCss("HScrollBar>#trackbar", "border", obj, ["pushed"]);
    this._addCss("HScrollBarControl>#incbutton", "border", obj, ["pushed"]);
    this._addCss("HScrollBarControl>#decbutton", "border", obj, ["pushed"]);
    this._addCss("HScrollBarControl>#trackbar", "border", obj, ["pushed"]);

    obj = new nexacro.Style_value("URL('theme://images/btn_vinc_P.png')");
    this._addCss("VScrollBar>#incbutton", "image", obj, ["pushed"]);
    this._addCss("VScrollBarControl>#incbutton", "image", obj, ["pushed"]);

    obj = new nexacro.Style_gradation("linear 0,0 #f5f5f3 100,0 #e5e5df");
    this._addCss("VScrollBar>#incbutton", "gradation", obj, ["disabled"]);
    this._addCss("VScrollBar>#decbutton", "gradation", obj, ["disabled"]);
    this._addCss("VScrollBarControl>#incbutton", "gradation", obj, ["disabled"]);
    this._addCss("VScrollBarControl>#decbutton", "gradation", obj, ["disabled"]);

    obj = new nexacro.Style_border("1","solid","#cacac5ff","");
    this._addCss("VScrollBar>#incbutton", "border", obj, ["disabled"]);
    this._addCss("VScrollBar>#decbutton", "border", obj, ["disabled"]);
    this._addCss("VScrollBarControl>#incbutton", "border", obj, ["disabled"]);
    this._addCss("VScrollBarControl>#decbutton", "border", obj, ["disabled"]);
    this._addCss("HScrollBar>#incbutton", "border", obj, ["disabled"]);
    this._addCss("HScrollBar>#decbutton", "border", obj, ["disabled"]);
    this._addCss("HScrollBarControl>#incbutton", "border", obj, ["disabled"]);
    this._addCss("HScrollBarControl>#decbutton", "border", obj, ["disabled"]);

    obj = new nexacro.Style_value("URL('theme://images/btn_vinc_D.png')");
    this._addCss("VScrollBar>#incbutton", "image", obj, ["disabled"]);
    this._addCss("VScrollBarControl>#incbutton", "image", obj, ["disabled"]);

    obj = new nexacro.Style_value("URL('theme://images/btn_vdec_N.png')");
    this._addCss("VScrollBar>#decbutton", "image", obj, ["normal"]);
    this._addCss("VScrollBarControl>#decbutton", "image", obj, ["normal"]);

    obj = new nexacro.Style_value("URL('theme://images/btn_vdec_O.png')");
    this._addCss("VScrollBar>#decbutton", "image", obj, ["mouseover"]);
    this._addCss("VScrollBarControl>#decbutton", "image", obj, ["mouseover"]);

    obj = new nexacro.Style_value("URL('theme://images/btn_vdec_P.png')");
    this._addCss("VScrollBar>#decbutton", "image", obj, ["pushed"]);
    this._addCss("VScrollBarControl>#decbutton", "image", obj, ["pushed"]);

    obj = new nexacro.Style_value("URL('theme://images/btn_vdec_D.png')");
    this._addCss("VScrollBar>#decbutton", "image", obj, ["disabled"]);
    this._addCss("VScrollBarControl>#decbutton", "image", obj, ["disabled"]);

    obj = new nexacro.Style_value("");
    this._addCss("VScrollBar>#trackbar", "image", obj, ["normal"]);
    this._addCss("VScrollBarControl>#trackbar", "image", obj, ["normal"]);
    this._addCss("HScrollBar>#trackbar", "image", obj, ["normal"]);
    this._addCss("HScrollBarControl>#trackbar", "image", obj, ["normal"]);
    this._addCss("Button", "image", obj, ["normal"]);
    this._addCss("ButtonControl", "image", obj, ["normal"]);

    obj = new nexacro.Style_gradation("linear 0,0 #fbfbfa 0,100 #deded7");
    this._addCss("HScrollBar>#incbutton", "gradation", obj, ["normal"]);
    this._addCss("HScrollBar>#decbutton", "gradation", obj, ["normal"]);
    this._addCss("HScrollBar>#trackbar", "gradation", obj, ["normal"]);
    this._addCss("HScrollBarControl>#incbutton", "gradation", obj, ["normal"]);
    this._addCss("HScrollBarControl>#decbutton", "gradation", obj, ["normal"]);
    this._addCss("HScrollBarControl>#trackbar", "gradation", obj, ["normal"]);

    obj = new nexacro.Style_value("URL('theme://images/btn_hinc_N.png')");
    this._addCss("HScrollBar>#incbutton", "image", obj, ["normal"]);
    this._addCss("HScrollBarControl>#incbutton", "image", obj, ["normal"]);

    obj = new nexacro.Style_gradation("linear 0,0 #ddddd6 0,100 #aeaea8");
    this._addCss("HScrollBar>#incbutton", "gradation", obj, ["mouseover"]);
    this._addCss("HScrollBar>#decbutton", "gradation", obj, ["mouseover"]);
    this._addCss("HScrollBar>#trackbar", "gradation", obj, ["mouseover"]);
    this._addCss("HScrollBarControl>#incbutton", "gradation", obj, ["mouseover"]);
    this._addCss("HScrollBarControl>#decbutton", "gradation", obj, ["mouseover"]);
    this._addCss("HScrollBarControl>#trackbar", "gradation", obj, ["mouseover"]);

    obj = new nexacro.Style_value("URL('theme://images/btn_hinc_O.png')");
    this._addCss("HScrollBar>#incbutton", "image", obj, ["mouseover"]);
    this._addCss("HScrollBarControl>#incbutton", "image", obj, ["mouseover"]);

    obj = new nexacro.Style_gradation("linear 0,0 #dbdbd4 0,100 #aeaea8");
    this._addCss("HScrollBar>#incbutton", "gradation", obj, ["pushed"]);
    this._addCss("HScrollBar>#decbutton", "gradation", obj, ["pushed"]);
    this._addCss("HScrollBar>#trackbar", "gradation", obj, ["pushed"]);
    this._addCss("HScrollBarControl>#incbutton", "gradation", obj, ["pushed"]);
    this._addCss("HScrollBarControl>#decbutton", "gradation", obj, ["pushed"]);
    this._addCss("HScrollBarControl>#trackbar", "gradation", obj, ["pushed"]);

    obj = new nexacro.Style_value("URL('theme://images/btn_hinc_P.png')");
    this._addCss("HScrollBar>#incbutton", "image", obj, ["pushed"]);
    this._addCss("HScrollBarControl>#incbutton", "image", obj, ["pushed"]);

    obj = new nexacro.Style_gradation("linear 0,0 #f5f5f3 0,100 #e5e5df");
    this._addCss("HScrollBar>#incbutton", "gradation", obj, ["disabled"]);
    this._addCss("HScrollBar>#decbutton", "gradation", obj, ["disabled"]);
    this._addCss("HScrollBarControl>#incbutton", "gradation", obj, ["disabled"]);
    this._addCss("HScrollBarControl>#decbutton", "gradation", obj, ["disabled"]);

    obj = new nexacro.Style_value("URL('theme://images/btn_hinc_D.png')");
    this._addCss("HScrollBar>#incbutton", "image", obj, ["disabled"]);
    this._addCss("HScrollBarControl>#incbutton", "image", obj, ["disabled"]);

    obj = new nexacro.Style_value("URL('theme://images/btn_hdec_N.png')");
    this._addCss("HScrollBar>#decbutton", "image", obj, ["normal"]);
    this._addCss("HScrollBarControl>#decbutton", "image", obj, ["normal"]);

    obj = new nexacro.Style_value("URL('theme://images/btn_hdec_O.png')");
    this._addCss("HScrollBar>#decbutton", "image", obj, ["mouseover"]);
    this._addCss("HScrollBarControl>#decbutton", "image", obj, ["mouseover"]);

    obj = new nexacro.Style_value("URL('theme://images/btn_hdec_P.png')");
    this._addCss("HScrollBar>#decbutton", "image", obj, ["pushed"]);
    this._addCss("HScrollBarControl>#decbutton", "image", obj, ["pushed"]);

    obj = new nexacro.Style_value("URL('theme://images/btn_hdec_D.png')");
    this._addCss("HScrollBar>#decbutton", "image", obj, ["disabled"]);
    this._addCss("HScrollBarControl>#decbutton", "image", obj, ["disabled"]);

    obj = new nexacro.Style_color("#222222");
    this._addCss("Static", "color", obj, ["normal", "focused"]);
    this._addCss("Edit", "color", obj, ["normal"]);
    this._addCss("TextArea", "color", obj, ["normal"]);
    this._addCss("MaskEdit", "color", obj, ["normal"]);
    this._addCss("Combo", "color", obj, ["normal"]);
    this._addCss("Combo>#comboedit", "color", obj, ["normal", "mouseover", "pushed", "focused"]);
    this._addCss("Grid>#controledit", "color", obj, ["normal"]);
    this._addCss("Grid>#controltextarea", "color", obj, ["normal"]);
    this._addCss("Grid>#controlmaskedit", "color", obj, ["normal"]);
    this._addCss("Grid>#controlcombo", "color", obj, ["normal"]);
    this._addCss("Grid>#controlcombo>#comboedit", "color", obj, ["normal", "mouseover", "pushed", "selected", "focused"]);
    this._addCss("Grid>#controlcalendar", "color", obj, ["normal"]);
    this._addCss("Grid>#controlcalendar>#calendaredit", "color", obj, ["normal"]);
    this._addCss("Div", "color", obj, ["normal"]);

    obj = new nexacro.Style_color("#888888");
    this._addCss("Static", "color", obj, ["disabled"]);
    this._addCss("Edit", "color", obj, ["disabled"]);
    this._addCss("TextArea", "color", obj, ["disabled"]);
    this._addCss("MaskEdit", "color", obj, ["disabled"]);
    this._addCss("Combo>#comboedit", "color", obj, ["disabled"]);
    this._addCss("Grid>#controledit", "color", obj, ["disabled"]);
    this._addCss("Grid>#controltextarea", "color", obj, ["disabled"]);
    this._addCss("Grid>#controlmaskedit", "color", obj, ["disabled"]);
    this._addCss("Grid>#controlcombo>#comboedit", "color", obj, ["disabled"]);
    this._addCss("Grid>#controlcalendar", "color", obj, ["disabled"]);
    this._addCss("Grid>#controlcalendar>#calendaredit", "color", obj, ["disabled"]);

    obj = new nexacro.Style_border("1","solid","#d8d8d8ff","");
    this._addCss("Edit", "border", obj, ["normal", "disabled"]);
    this._addCss("TextArea", "border", obj, ["normal", "disabled"]);
    this._addCss("MaskEdit", "border", obj, ["normal"]);
    this._addCss("Combo", "border", obj, ["normal", "disabled"]);
    this._addCss("Grid>#controledit", "border", obj, ["normal", "disabled"]);
    this._addCss("Grid>#controltextarea", "border", obj, ["normal", "disabled"]);
    this._addCss("Grid>#controlmaskedit", "border", obj, ["normal"]);
    this._addCss("Grid>#controlcombo", "border", obj, ["normal", "disabled"]);
    this._addCss("Grid>#controlcalendar", "border", obj, ["normal", "disabled"]);

    obj = new nexacro.Style_padding("0 5 0 5");
    this._addCss("Edit", "padding", obj, ["normal"]);
    this._addCss("MaskEdit", "padding", obj, ["normal"]);
    this._addCss("Combo>#comboedit", "padding", obj, ["normal", "mouseover", "pushed", "focused"]);
    this._addCss("Grid>#controlmaskedit", "padding", obj, ["normal"]);
    this._addCss("Grid>#controlcombo>#comboedit", "padding", obj, ["normal", "mouseover", "pushed", "selected", "focused"]);

    obj = new nexacro.Style_value("#3d517b");
    this._addCss("Edit", "selectbackground", obj, ["normal"]);
    this._addCss("TextArea", "selectbackground", obj, ["normal"]);
    this._addCss("MaskEdit", "selectbackground", obj, ["normal"]);

    obj = new nexacro.Style_color("#ffffff");
    this._addCss("Edit", "selectcolor", obj, ["normal"]);
    this._addCss("TextArea", "selectcolor", obj, ["normal"]);
    this._addCss("MaskEdit", "selectcolor", obj, ["normal"]);
    this._addCss("Combo>#comboedit", "selectcolor", obj, ["normal", "mouseover", "pushed", "focused"]);
    this._addCss("Grid>#controledit", "selectcolor", obj, ["normal"]);
    this._addCss("Grid>#controltextarea", "selectcolor", obj, ["normal"]);
    this._addCss("Grid>#controlmaskedit", "selectcolor", obj, ["normal"]);
    this._addCss("Grid>#controlcombo>#comboedit", "selectcolor", obj, ["normal", "mouseover", "pushed", "selected", "focused"]);
    this._addCss("Grid>#controlcalendar>#calendaredit", "selectcolor", obj, ["normal"]);

    obj = new nexacro.Style_border("1","solid","#224181ff","");
    this._addCss("Edit", "border", obj, ["mouseover", "focused"]);
    this._addCss("TextArea", "border", obj, ["mouseover", "focused"]);
    this._addCss("MaskEdit", "border", obj, ["mouseover", "focused"]);
    this._addCss("Combo", "border", obj, ["mouseover", "focused", "pushed"]);
    this._addCss("Combo>#combolist", "border", obj, ["mouseover", "focused", "selected"]);
    this._addCss("Grid>#controledit", "border", obj, ["mouseover", "focused"]);
    this._addCss("Grid>#controltextarea", "border", obj, ["mouseover", "focused"]);
    this._addCss("Grid>#controlmaskedit", "border", obj, ["mouseover", "focused"]);
    this._addCss("Grid>#controlcombo", "border", obj, ["mouseover", "pushed", "focused"]);
    this._addCss("Grid>#controlcombo>#combolist", "border", obj, ["mouseover", "focused", "selected"]);
    this._addCss("Grid>#controlcalendar", "border", obj, ["mouseover", "pushed"]);

    obj = new nexacro.Style_background("#f5f5f5ff","","","0","0","0","0","true");
    this._addCss("Edit", "background", obj, ["disabled"]);
    this._addCss("TextArea", "background", obj, ["disabled"]);
    this._addCss("MaskEdit", "background", obj, ["disabled"]);
    this._addCss("Combo", "background", obj, ["disabled"]);
    this._addCss("Combo>#dropbutton", "background", obj, ["disabled"]);
    this._addCss("Grid>#controledit", "background", obj, ["disabled"]);
    this._addCss("Grid>#controltextarea", "background", obj, ["disabled"]);
    this._addCss("Grid>#controlmaskedit", "background", obj, ["disabled"]);
    this._addCss("Grid>#controlcombo", "background", obj, ["disabled"]);
    this._addCss("Grid>#controlcombo>#dropbutton", "background", obj, ["disabled"]);
    this._addCss("Grid>#controlcalendar", "background", obj, ["disabled"]);
    this._addCss("Grid>#controlcalendar>#calendaredit", "background", obj, ["disabled"]);

    obj = new nexacro.Style_background("#ecececff","","","0","0","0","0","true");
    this._addCss("Edit", "background", obj, ["readonly"]);
    this._addCss("TextArea", "background", obj, ["readonly"]);
    this._addCss("MaskEdit", "background", obj, ["readonly"]);
    this._addCss("Combo", "background", obj, ["readonly", "readonly>#comboedit"]);

    obj = new nexacro.Style_border("1","solid","#aaaaaaff","");
    this._addCss("Edit", "border", obj, ["readonly"]);
    this._addCss("TextArea", "border", obj, ["readonly"]);
    this._addCss("MaskEdit", "border", obj, ["readonly"]);
    this._addCss("Combo", "border", obj, ["readonly"]);

    obj = new nexacro.Style_padding("5 5 5 5");
    this._addCss("TextArea", "padding", obj, ["normal"]);
    this._addCss("Grid>#controltextarea", "padding", obj, ["normal"]);
    this._addCss("Step", "padding", obj, ["normal"]);
    this._addCss("StepControl", "padding", obj, ["normal"]);

    obj = new nexacro.Style_value("3");
    this._addCss("TextArea", "linespace", obj, ["normal"]);
    this._addCss("Grid>#controltextarea", "linespace", obj, ["normal"]);

    obj = new nexacro.Style_align("right middle");
    this._addCss("MaskEdit", "align", obj, ["normal"]);
    this._addCss("Spin", "align", obj, ["normal"]);
    this._addCss("Spin>#spinedit", "align", obj, ["normal"]);
    this._addCss("SpinControl", "align", obj, ["normal"]);
    this._addCss("SpinControl>#spinedit", "align", obj, ["normal"]);
    this._addCss("Grid>#controlmaskedit", "align", obj, ["normal"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar>#nextbutton", "align", obj, ["normal"]);

    obj = new nexacro.Style_border("1","solid","#cacacaff","");
    this._addCss("MaskEdit", "border", obj, ["disabled"]);
    this._addCss("Grid>#controlmaskedit", "border", obj, ["disabled"]);

    obj = new nexacro.Style_border("1","solid","#999999ff","");
    this._addCss("Button", "border", obj, ["normal"]);
    this._addCss("ButtonControl", "border", obj, ["normal"]);

    obj = new nexacro.Style_bordertype("round","3","3","true","true","true","true");
    this._addCss("Button", "bordertype", obj, ["normal"]);
    this._addCss("ButtonControl", "bordertype", obj, ["normal"]);
    this._addCss("FileDownload", "bordertype", obj, ["normal"]);
    this._addCss("FileDownloadControl", "bordertype", obj, ["normal"]);

    obj = new nexacro.Style_value("hand");
    this._addCss("Button", "cursor", obj, ["normal"]);
    this._addCss("ButtonControl", "cursor", obj, ["normal"]);
    this._addCss("Button.btn_WF_MDIS", "cursor", obj, ["normal", "mouseover", "pushed", "selected", "focused", "disabled"]);
    this._addCss("Button.btn_WF_MDI", "cursor", obj, ["normal", "mouseover", "pushed", "selected", "focused", "disabled"]);
    this._addCss("Combo>#dropbutton", "cursor", obj, ["normal"]);
    this._addCss("Grid>#controlbutton", "cursor", obj, ["normal"]);
    this._addCss("Grid>#controlcombo>#dropbutton", "cursor", obj, ["normal"]);
    this._addCss("Grid>#controlcalendar>#dropbutton", "cursor", obj, ["normal"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar", "cursor", obj, ["normal"]);
    this._addCss("Grid.grd_LF_SubMenu", "cursor", obj, ["normal"]);
    this._addCss("Step", "cursor", obj, ["normal"]);
    this._addCss("StepControl", "cursor", obj, ["normal"]);

    obj = new nexacro.Style_gradation("linear 0,0 #fefefe 0,100 #dfdfd6");
    this._addCss("Button", "gradation", obj, ["normal"]);
    this._addCss("ButtonControl", "gradation", obj, ["normal"]);

    obj = new nexacro.Style_color("#354bc8ff");
    this._addCss("Button", "color", obj, ["mouseover"]);
    this._addCss("ButtonControl", "color", obj, ["mouseover"]);

    obj = new nexacro.Style_gradation("linear 0,0 #dfdfd6 0,100 #fefefe");
    this._addCss("Button", "gradation", obj, ["pushed"]);
    this._addCss("ButtonControl", "gradation", obj, ["pushed"]);

    obj = new nexacro.Style_background("#faf9f8ff","","","0","0","0","0","true");
    this._addCss("Button.btn_WF_MDIS", "background", obj, ["normal", "mouseover", "pushed", "selected", "focused", "disabled"]);

    obj = new nexacro.Style_border("0","none","","","1","solid","#e1dedbff","","0","none","","","0","none","","");
    this._addCss("Button.btn_WF_MDIS", "border", obj, ["normal", "mouseover", "pushed", "selected", "focused", "disabled"]);
    this._addCss("Button.btn_WF_MDI", "border", obj, ["normal", "mouseover", "pushed", "selected", "focused", "disabled"]);

    obj = new nexacro.Style_padding("0 15 0 15");
    this._addCss("Button.btn_WF_MDIS", "padding", obj, ["normal", "mouseover", "pushed", "selected", "focused", "disabled"]);
    this._addCss("Button.btn_WF_MDI", "padding", obj, ["normal", "mouseover", "pushed", "selected", "focused", "disabled"]);

    obj = new nexacro.Style_font("bold underline 9 Dotum");
    this._addCss("Button.btn_WF_MDIS", "font", obj, ["normal", "mouseover", "pushed", "selected", "focused", "disabled"]);
    this._addCss("Button.btn_WF_MDI", "font", obj, ["pushed", "focused", "selected"]);

    obj = new nexacro.Style_background("#f5f4f3ff","","","0","0","0","0","true");
    this._addCss("Button.btn_WF_MDI", "background", obj, ["normal", "mouseover", "pushed", "selected", "focused", "disabled"]);
    this._addCss("Div.div_WF_GrdMsg", "background", obj, ["normal"]);

    obj = new nexacro.Style_font("bold 9 Dotum");
    this._addCss("Button.btn_WF_MDI", "font", obj, ["normal", "mouseover", "pushed", "selected", "focused", "disabled"]);
    this._addCss("Static.sta_WF_title", "font", obj, ["normal"]);
    this._addCss("Button.btn_WF_CRUD", "font", obj, ["normal", "mouseover", "pushed", "selected", "focused"]);

    obj = new nexacro.Style_color("#6d6d6c");
    this._addCss("Button.btn_WF_MDI", "color", obj, ["normal", "mouseover", "pushed", "selected", "focused", "disabled"]);

    obj = new nexacro.Style_gradation("linear 0,0 #ffffff 0,100 #f7f5f4");
    this._addCss("Button.btn_WF_MDI", "gradation", obj, ["mouseover"]);

    obj = new nexacro.Style_color("#585756");
    this._addCss("Button.btn_WF_MDI", "color", obj, ["mouseover"]);

    obj = new nexacro.Style_background("#f2f0efff","","","0","0","0","0","true");
    this._addCss("Button.btn_WF_MDI", "background", obj, ["disabled"]);

    obj = new nexacro.Style_color("#afaead");
    this._addCss("Button.btn_WF_MDI", "color", obj, ["disabled"]);

    obj = new nexacro.Style_background("","theme://images/btn_MDItab_extra.png","","0","0","50","50","true");
    this._addCss("Button.btn_MDI_close", "background", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);

    obj = new nexacro.Style_background("","theme://images/btn_MDItab_extra_F.png","","0","0","50","50","true");
    this._addCss("Button.btn_MDI_close", "background", obj, ["mouseover", "pushed", "focused", "selected"]);

    obj = new nexacro.Style_background("","theme://images/btn_MDI_spinup_N.png","","0","0","0","0","true");
    this._addCss("Button.btn_MDI_spinup", "background", obj, ["normal", "mouseover", "pushed", "selected", "focused", "disabled"]);

    obj = new nexacro.Style_background("","theme://images/btn_MDI_spinup_O.png","","0","0","0","0","true");
    this._addCss("Button.btn_MDI_spinup", "background", obj, ["mouseover"]);

    obj = new nexacro.Style_background("","theme://images/btn_MDI_spinup_P.png","","0","0","0","0","true");
    this._addCss("Button.btn_MDI_spinup", "background", obj, ["pushed", "selected"]);

    obj = new nexacro.Style_background("","theme://images/btn_MDI_spinup_F.png","","0","0","0","0","true");
    this._addCss("Button.btn_MDI_spinup", "background", obj, ["focused"]);

    obj = new nexacro.Style_background("","theme://images/btn_MDI_spindn_N.png","","0","0","0","0","true");
    this._addCss("Button.btn_MDI_spindn", "background", obj, ["normal", "mouseover", "pushed", "selected", "focused", "disabled"]);

    obj = new nexacro.Style_background("","theme://images/btn_MDI_spindn_O.png","","0","0","0","0","true");
    this._addCss("Button.btn_MDI_spindn", "background", obj, ["mouseover"]);

    obj = new nexacro.Style_background("","theme://images/btn_MDI_spindn_P.png","","0","0","0","0","true");
    this._addCss("Button.btn_MDI_spindn", "background", obj, ["pushed"]);
    this._addCss("utton.btn_MDI_spindn", "background", obj, ["selected"]);

    obj = new nexacro.Style_background("","theme://images/btn_MDI_spindn_F.png","","0","0","0","0","true");
    this._addCss("Button.btn_MDI_spindn", "background", obj, ["focused"]);

    obj = new nexacro.Style_background("","theme://images/btn_MDI_screenMax_N.png","","0","0","0","0","true");
    this._addCss("Button.btn_MDI_screenmax", "background", obj, ["normal", "mouseover", "pushed", "selected", "focused", "disabled"]);

    obj = new nexacro.Style_background("","theme://images/btn_MDI_screenMax_O.png","","0","0","0","0","true");
    this._addCss("Button.btn_MDI_screenmax", "background", obj, ["mouseover"]);

    obj = new nexacro.Style_background("","theme://images/btn_MDI_screenMax_P.png","","0","0","0","0","true");
    this._addCss("Button.btn_MDI_screenmax", "background", obj, ["pushed", "selected"]);

    obj = new nexacro.Style_background("","theme://images/btn_MDI_screenMax_F.png","","0","0","0","0","true");
    this._addCss("Button.btn_MDI_screenmax", "background", obj, ["focused"]);

    obj = new nexacro.Style_background("","theme://images/btn_MDI_screenPop_N.png","","0","0","0","0","true");
    this._addCss("Button.btn_MDI_screenpop", "background", obj, ["normal", "mouseover", "pushed", "selected", "focused", "disabled"]);

    obj = new nexacro.Style_background("","theme://images/btn_MDI_screenPop_O.png","","0","0","0","0","true");
    this._addCss("Button.btn_MDI_screenpop", "background", obj, ["mouseover"]);

    obj = new nexacro.Style_background("","theme://images/btn_MDI_screenPop_P.png","","0","0","0","0","true");
    this._addCss("Button.btn_MDI_screenpop", "background", obj, ["pushed", "selected"]);

    obj = new nexacro.Style_background("","theme://images/btn_MDI_screenPop_F.png","","0","0","0","0","true");
    this._addCss("Button.btn_MDI_screenpop", "background", obj, ["focused"]);

    obj = new nexacro.Style_background("","theme://images/btn_MDI_screenH_N.png","","0","0","0","0","true");
    this._addCss("Button.btn_MDI_screenH", "background", obj, ["normal", "mouseover", "pushed", "selected", "focused", "disabled"]);

    obj = new nexacro.Style_background("","theme://images/btn_MDI_screenH_O.png","","0","0","0","0","true");
    this._addCss("Button.btn_MDI_screenH", "background", obj, ["mouseover"]);

    obj = new nexacro.Style_background("","theme://images/btn_MDI_screenH_P.png","","0","0","0","0","true");
    this._addCss("Button.btn_MDI_screenH", "background", obj, ["pushed", "selected"]);

    obj = new nexacro.Style_background("","theme://images/btn_MDI_screenH_F.png","","0","0","0","0","true");
    this._addCss("Button.btn_MDI_screenH", "background", obj, ["focused"]);

    obj = new nexacro.Style_background("","theme://images/btn_MDI_screenV_N.png","","0","0","0","0","true");
    this._addCss("Button.btn_MDI_screenV", "background", obj, ["normal", "mouseover", "pushed", "selected", "focused", "disabled"]);

    obj = new nexacro.Style_background("","theme://images/btn_MDI_screenV_O.png","","0","0","0","0","true");
    this._addCss("Button.btn_MDI_screenV", "background", obj, ["mouseover"]);

    obj = new nexacro.Style_background("","theme://images/btn_MDI_screenV_P.png","","0","0","0","0","true");
    this._addCss("Button.btn_MDI_screenV", "background", obj, ["pushed", "selected"]);

    obj = new nexacro.Style_background("","theme://images/btn_MDI_screenV_F.png","","0","0","0","0","true");
    this._addCss("Button.btn_MDI_screenV", "background", obj, ["focused"]);

    obj = new nexacro.Style_background("","theme://images/btn_MDI_screenClose_N.png","","0","0","0","0","true");
    this._addCss("Button.btn_MDI_screenclose", "background", obj, ["normal", "mouseover", "pushed", "selected", "focused", "disabled"]);

    obj = new nexacro.Style_background("","theme://images/btn_MDI_screenClose_O.png","","0","0","0","0","true");
    this._addCss("Button.btn_MDI_screenclose", "background", obj, ["mouseover"]);

    obj = new nexacro.Style_background("","theme://images/btn_MDI_screenClose_P.png","","0","0","0","0","true");
    this._addCss("Button.btn_MDI_screenclose", "background", obj, ["pushed", "selected"]);

    obj = new nexacro.Style_background("","theme://images/btn_MDI_screenClose_F.png","","0","0","0","0","true");
    this._addCss("Button.btn_MDI_screenclose", "background", obj, ["focused"]);

    obj = new nexacro.Style_border("1","solid","#a6a6a9ff","","1","solid","#d5d5d5ff","","1","solid","#d5d5d5ff","","1","solid","#a6a6a9ff","");
    this._addCss("Spin", "border", obj, ["normal"]);
    this._addCss("SpinControl", "border", obj, ["normal"]);
    this._addCss("ListBox", "border", obj, ["normal"]);
    this._addCss("ListBoxControl", "border", obj, ["normal"]);
    this._addCss("Calendar", "border", obj, ["normal"]);
    this._addCss("CalendarControl", "border", obj, ["normal"]);

    obj = new nexacro.Style_value("right");
    this._addCss("Spin", "buttonalign", obj, ["normal"]);
    this._addCss("SpinControl", "buttonalign", obj, ["normal"]);

    obj = new nexacro.Style_value("18");
    this._addCss("Spin", "buttonsize", obj, ["normal"]);
    this._addCss("SpinControl", "buttonsize", obj, ["normal"]);

    obj = new nexacro.Style_background("#fbf8f1ff","","","0","0","0","0","true");
    this._addCss("Spin", "background", obj, ["mouseover", "focused", "pushed", "readonly"]);
    this._addCss("SpinControl", "background", obj, ["mouseover", "focused", "pushed", "readonly"]);
    this._addCss("Calendar", "background", obj, ["mouseover", "selected"]);
    this._addCss("Calendar>#popupcalendar>#yearspin>#spinedit", "background", obj, ["mouseover", "focused"]);
    this._addCss("Calendar>#popupcalendar>#monthspin>#spinedit", "background", obj, ["mouseover", "focused"]);
    this._addCss("CalendarControl", "background", obj, ["mouseover", "selected"]);
    this._addCss("CalendarControl>#popupcalendar>#yearspin>#spinedit", "background", obj, ["mouseover", "focused"]);
    this._addCss("CalendarControl>#popupcalendar>#monthspin>#spinedit", "background", obj, ["mouseover", "focused"]);

    obj = new nexacro.Style_border("1","solid","#89785eff","","1","solid","#c6a469ff","","1","solid","#c6a469ff","","1","solid","#89785eff","");
    this._addCss("Spin", "border", obj, ["mouseover", "focused", "pushed"]);
    this._addCss("SpinControl", "border", obj, ["mouseover", "focused", "pushed"]);
    this._addCss("Calendar", "border", obj, ["mouseover", "selected"]);
    this._addCss("CalendarControl", "border", obj, ["mouseover", "selected"]);

    obj = new nexacro.Style_background("#f7f7f7ff","","","0","0","0","0","true");
    this._addCss("Spin", "background", obj, ["disabled"]);
    this._addCss("Spin>#spinedit", "background", obj, ["disabled"]);
    this._addCss("SpinControl", "background", obj, ["disabled"]);
    this._addCss("SpinControl>#spinedit", "background", obj, ["disabled"]);
    this._addCss("ListBox", "background", obj, ["disabled"]);
    this._addCss("ListBoxControl", "background", obj, ["disabled"]);
    this._addCss("Calendar", "background", obj, ["disabled"]);
    this._addCss("CalendarControl", "background", obj, ["disabled"]);

    obj = new nexacro.Style_border("1","solid","#d5d5d5ff","");
    this._addCss("Spin", "border", obj, ["disabled"]);
    this._addCss("SpinControl", "border", obj, ["disabled"]);
    this._addCss("ListBox", "border", obj, ["disabled"]);
    this._addCss("ListBoxControl", "border", obj, ["disabled"]);
    this._addCss("ProgressBar", "border", obj, ["disabled"]);
    this._addCss("ProgressBarControl", "border", obj, ["disabled"]);
    this._addCss("Calendar", "border", obj, ["disabled"]);
    this._addCss("CalendarControl", "border", obj, ["disabled"]);

    obj = new nexacro.Style_color("#999999");
    this._addCss("Spin", "color", obj, ["disabled"]);
    this._addCss("Spin>#spinedit", "color", obj, ["disabled"]);
    this._addCss("SpinControl", "color", obj, ["disabled"]);
    this._addCss("SpinControl>#spinedit", "color", obj, ["disabled"]);
    this._addCss("CheckBox", "color", obj, ["disabled"]);
    this._addCss("CheckBoxControl", "color", obj, ["disabled"]);
    this._addCss("Radio", "color", obj, ["disabled"]);
    this._addCss("RadioControl", "color", obj, ["disabled"]);
    this._addCss("ListBox", "color", obj, ["disabled"]);
    this._addCss("ListBoxControl", "color", obj, ["disabled"]);
    this._addCss("ProgressBar", "color", obj, ["disabled"]);
    this._addCss("ProgressBarControl", "color", obj, ["disabled"]);
    this._addCss("Calendar", "color", obj, ["disabled"]);
    this._addCss("CalendarControl", "color", obj, ["disabled"]);

    obj = new nexacro.Style_border("0","solid","#ffffff00","");
    this._addCss("Spin", "border", obj, ["readonly"]);
    this._addCss("SpinControl", "border", obj, ["readonly"]);

    obj = new nexacro.Style_value("0");
    this._addCss("Spin", "buttonsize", obj, ["readonly"]);
    this._addCss("SpinControl", "buttonsize", obj, ["readonly"]);
    this._addCss("Calendar", "buttonsize", obj, ["readonly"]);
    this._addCss("CalendarControl", "buttonsize", obj, ["readonly"]);

    obj = new nexacro.Style_padding("0 3 0 0");
    this._addCss("Spin>#spinedit", "padding", obj, ["normal"]);
    this._addCss("SpinControl>#spinedit", "padding", obj, ["normal"]);

    obj = new nexacro.Style_gradation("linear 0,0 #ffffff 0,100 #e7e7e2");
    this._addCss("Spin>#spinupbutton", "gradation", obj, ["normal"]);
    this._addCss("Spin>#spindownbutton", "gradation", obj, ["normal"]);
    this._addCss("SpinControl>#spinupbutton", "gradation", obj, ["normal"]);
    this._addCss("SpinControl>#spindownbutton", "gradation", obj, ["normal"]);
    this._addCss("Calendar>#spinupbutton", "gradation", obj, ["normal"]);
    this._addCss("Calendar>#spindownbutton", "gradation", obj, ["normal"]);
    this._addCss("CalendarControl>#spinupbutton", "gradation", obj, ["normal"]);
    this._addCss("CalendarControl>#spindownbutton", "gradation", obj, ["normal"]);

    obj = new nexacro.Style_value("URL('theme://images/btn_spinup_N.png')");
    this._addCss("Spin>#spinupbutton", "image", obj, ["normal"]);
    this._addCss("SpinControl>#spinupbutton", "image", obj, ["normal"]);
    this._addCss("Calendar>#spinupbutton", "image", obj, ["normal"]);
    this._addCss("CalendarControl>#spinupbutton", "image", obj, ["normal"]);

    obj = new nexacro.Style_gradation("linear 0,0 #ddddd6 0,100 #b3b3ad");
    this._addCss("Spin>#spinupbutton", "gradation", obj, ["mouseover"]);
    this._addCss("Spin>#spindownbutton", "gradation", obj, ["mouseover"]);
    this._addCss("SpinControl>#spinupbutton", "gradation", obj, ["mouseover"]);
    this._addCss("SpinControl>#spindownbutton", "gradation", obj, ["mouseover"]);
    this._addCss("Calendar>#spinupbutton", "gradation", obj, ["mouseover"]);
    this._addCss("Calendar>#spindownbutton", "gradation", obj, ["mouseover"]);
    this._addCss("CalendarControl>#spinupbutton", "gradation", obj, ["mouseover"]);
    this._addCss("CalendarControl>#spindownbutton", "gradation", obj, ["mouseover"]);

    obj = new nexacro.Style_value("URL('theme://images/btn_spinup_O.png')");
    this._addCss("Spin>#spinupbutton", "image", obj, ["mouseover", "pushed"]);
    this._addCss("SpinControl>#spinupbutton", "image", obj, ["mouseover", "pushed"]);
    this._addCss("Calendar>#spinupbutton", "image", obj, ["mouseover", "pushed"]);
    this._addCss("CalendarControl>#spinupbutton", "image", obj, ["mouseover", "pushed"]);

    obj = new nexacro.Style_border("1","solid","#cfcfccff","");
    this._addCss("Spin>#spinupbutton", "border", obj, ["disabled"]);
    this._addCss("Spin>#spindownbutton", "border", obj, ["disabled"]);
    this._addCss("SpinControl>#spinupbutton", "border", obj, ["disabled"]);
    this._addCss("SpinControl>#spindownbutton", "border", obj, ["disabled"]);
    this._addCss("Calendar>#spinupbutton", "border", obj, ["disabled"]);
    this._addCss("Calendar>#spindownbutton", "border", obj, ["disabled"]);
    this._addCss("CalendarControl>#spinupbutton", "border", obj, ["disabled"]);
    this._addCss("CalendarControl>#spindownbutton", "border", obj, ["disabled"]);

    obj = new nexacro.Style_value("URL('theme://images/btn_spinup_D.png')");
    this._addCss("Spin>#spinupbutton", "image", obj, ["disabled"]);
    this._addCss("SpinControl>#spinupbutton", "image", obj, ["disabled"]);
    this._addCss("Calendar>#spinupbutton", "image", obj, ["disabled"]);
    this._addCss("CalendarControl>#spinupbutton", "image", obj, ["disabled"]);

    obj = new nexacro.Style_value("URL('theme://images/btn_spindown_N.png')");
    this._addCss("Spin>#spindownbutton", "image", obj, ["normal"]);
    this._addCss("SpinControl>#spindownbutton", "image", obj, ["normal"]);
    this._addCss("Calendar>#spindownbutton", "image", obj, ["normal"]);
    this._addCss("CalendarControl>#spindownbutton", "image", obj, ["normal"]);

    obj = new nexacro.Style_value("URL('theme://images/btn_spindown_O.png')");
    this._addCss("Spin>#spindownbutton", "image", obj, ["mouseover", "pushed"]);
    this._addCss("SpinControl>#spindownbutton", "image", obj, ["mouseover", "pushed"]);
    this._addCss("Calendar>#spindownbutton", "image", obj, ["mouseover", "pushed"]);
    this._addCss("CalendarControl>#spindownbutton", "image", obj, ["mouseover", "pushed"]);

    obj = new nexacro.Style_gradation("linear 0,0 #fbfbfb 0,100 #efefec");
    this._addCss("Spin>#spindownbutton", "gradation", obj, ["disabled"]);
    this._addCss("SpinControl>#spindownbutton", "gradation", obj, ["disabled"]);
    this._addCss("Calendar>#spinupbutton", "gradation", obj, ["disabled"]);
    this._addCss("Calendar>#spindownbutton", "gradation", obj, ["disabled"]);
    this._addCss("CalendarControl>#spinupbutton", "gradation", obj, ["disabled"]);
    this._addCss("CalendarControl>#spindownbutton", "gradation", obj, ["disabled"]);

    obj = new nexacro.Style_value("URL('theme://images/btn_spindown_D.png')");
    this._addCss("Spin>#spindownbutton", "image", obj, ["disabled"]);
    this._addCss("SpinControl>#spindownbutton", "image", obj, ["disabled"]);
    this._addCss("Calendar>#spindownbutton", "image", obj, ["disabled"]);
    this._addCss("CalendarControl>#spindownbutton", "image", obj, ["disabled"]);

    obj = new nexacro.Style_value("left center");
    this._addCss("CheckBox", "buttonalign", obj, ["normal", "mouseover", "selected", "focused", "pushed"]);
    this._addCss("Radio", "buttonalign", obj, ["normal"]);

    obj = new nexacro.Style_background("@gradation","","","0","0","0","0","true");
    this._addCss("CheckBox", "buttonbackground", obj, ["normal", "mouseover", "selected", "focused", "pushed"]);
    this._addCss("CheckBoxControl", "buttonbackground", obj, ["normal", "mouseover", "selected", "focused", "pushed"]);
    this._addCss("Radio", "buttonbackground", obj, ["normal"]);
    this._addCss("RadioControl", "buttonbackground", obj, ["normal"]);
    this._addCss("Tab", "buttonbackground", obj, ["normal"]);
    this._addCss("TabControl", "buttonbackground", obj, ["normal"]);
    this._addCss("Step", "buttonbackground", obj, ["normal"]);
    this._addCss("StepControl", "buttonbackground", obj, ["normal"]);
    this._addCss("FileUpload", "buttonbackground", obj, ["normal"]);
    this._addCss("FileUploadControl", "buttonbackground", obj, ["normal"]);

    obj = new nexacro.Style_value("1 solid #999999");
    this._addCss("CheckBox", "buttonborder", obj, ["normal"]);
    this._addCss("FileUpload", "buttonborder", obj, ["normal"]);

    obj = new nexacro.Style_bordertype("","0","0","true","true","true","true");
    this._addCss("CheckBox", "buttonbordertype", obj, ["normal"]);
    this._addCss("CheckBoxControl", "buttonbordertype", obj, ["normal"]);
    this._addCss("Grid>#controlcheckbox", "buttonbordertype", obj, ["normal"]);

    obj = new nexacro.Style_gradation("linear 0,0 #c5d1d9 100,100 #ebf1f5");
    this._addCss("CheckBox", "buttongradation", obj, ["normal"]);
    this._addCss("CheckBoxControl", "buttongradation", obj, ["normal"]);
    this._addCss("Radio", "buttongradation", obj, ["normal"]);
    this._addCss("RadioControl", "buttongradation", obj, ["normal"]);

    obj = new nexacro.Style_value("URL('theme://images/img_check.png')");
    this._addCss("CheckBox", "buttonimage", obj, ["normal", "mouseover", "selected", "focused", "pushed"]);
    this._addCss("CheckBoxControl", "buttonimage", obj, ["normal", "mouseover", "selected", "focused", "pushed"]);

    obj = new nexacro.Style_value("15");
    this._addCss("CheckBox", "buttonsize", obj, ["normal", "mouseover", "selected", "focused", "pushed"]);
    this._addCss("CheckBoxControl", "buttonsize", obj, ["normal", "mouseover", "selected", "focused", "pushed"]);
    this._addCss("Radio", "buttonsize", obj, ["normal"]);
    this._addCss("RadioControl", "buttonsize", obj, ["normal"]);
    this._addCss("Step", "buttonsize", obj, ["normal"]);
    this._addCss("StepControl", "buttonsize", obj, ["normal"]);

    obj = new nexacro.Style_padding("0 0 0 3");
    this._addCss("CheckBox", "textpadding", obj, ["normal", "mouseover", "selected", "focused", "pushed"]);
    this._addCss("CheckBoxControl", "textpadding", obj, ["normal", "mouseover", "selected", "focused", "pushed"]);
    this._addCss("Radio", "textpadding", obj, ["normal"]);
    this._addCss("RadioControl", "textpadding", obj, ["normal"]);

    obj = new nexacro.Style_value("1 solid #1e7cc4");
    this._addCss("CheckBox", "buttonborder", obj, ["mouseover", "selected", "focused", "pushed"]);

    obj = new nexacro.Style_gradation("linear 0,0 #99cfef 100,100 #e4f1f9");
    this._addCss("CheckBox", "buttongradation", obj, ["mouseover", "selected", "focused", "pushed"]);
    this._addCss("CheckBoxControl", "buttongradation", obj, ["mouseover", "selected", "focused", "pushed"]);
    this._addCss("Radio", "buttongradation", obj, ["mouseover"]);
    this._addCss("RadioControl", "buttongradation", obj, ["mouseover"]);

    obj = new nexacro.Style_value("URL('theme://images/img_check_D.png')");
    this._addCss("CheckBox", "buttonimage", obj, ["disabled"]);
    this._addCss("CheckBoxControl", "buttonimage", obj, ["disabled"]);

    obj = new nexacro.Style_value("1 solid #b1c0cb");
    this._addCss("CheckBox", "buttonborder", obj, ["disabled"]);
    this._addCss("Tab", "buttonborder", obj, ["disabled"]);

    obj = new nexacro.Style_gradation("linear 0,0 #e9edf1 100,100 #e9edf1");
    this._addCss("CheckBox", "buttongradation", obj, ["disabled"]);
    this._addCss("CheckBoxControl", "buttongradation", obj, ["disabled"]);
    this._addCss("Radio", "buttongradation", obj, ["disabled"]);
    this._addCss("RadioControl", "buttongradation", obj, ["disabled"]);

    obj = new nexacro.Style_value("left center");
    this._addCss("CheckBoxControl", "buttonalign", obj, ["normal", "mouseover", "selected", "focused", "pushed"]);
    this._addCss("RadioControl", "buttonalign", obj, ["normal"]);
    this._addCss("Grid>#controlcheckbox", "buttonalign", obj, ["normal"]);

    obj = new nexacro.Style_value("1 solid #999999");
    this._addCss("CheckBoxControl", "buttonborder", obj, ["normal"]);
    this._addCss("RadioControl", "buttonborder", obj, ["normal"]);
    this._addCss("FileUploadControl", "buttonborder", obj, ["normal"]);

    obj = new nexacro.Style_value("1 solid #1e7cc4");
    this._addCss("CheckBoxControl", "buttonborder", obj, ["mouseover", "selected", "focused", "pushed"]);
    this._addCss("RadioControl", "buttonborder", obj, ["mouseover"]);

    obj = new nexacro.Style_value("1 solid #b1c0cb");
    this._addCss("CheckBoxControl", "buttonborder", obj, ["disabled"]);
    this._addCss("RadioControl", "buttonborder", obj, ["disabled"]);
    this._addCss("TabControl", "buttonborder", obj, ["disabled"]);

    obj = new nexacro.Style_value("1 solid #999999");
    this._addCss("Radio", "buttonborder", obj, ["normal"]);

    obj = new nexacro.Style_value("URL('theme://images/btn_radio_N.png')");
    this._addCss("Radio", "buttonimage", obj, ["normal"]);
    this._addCss("RadioControl", "buttonimage", obj, ["normal"]);

    obj = new nexacro.Style_background("","","","0","0","0","0","true");
    this._addCss("Radio", "itembackground", obj, ["normal"]);
    this._addCss("RadioControl", "itembackground", obj, ["normal"]);

    obj = new nexacro.Style_border("");
    this._addCss("Radio", "itemborder", obj, ["normal"]);
    this._addCss("RadioControl", "itemborder", obj, ["normal"]);

    obj = new nexacro.Style_padding("");
    this._addCss("Radio", "itempadding", obj, ["normal"]);
    this._addCss("RadioControl", "itempadding", obj, ["normal"]);

    obj = new nexacro.Style_value("1 solid #1e7cc4");
    this._addCss("Radio", "buttonborder", obj, ["mouseover"]);

    obj = new nexacro.Style_value("URL('theme://images/btn_radio_D.png')");
    this._addCss("Radio", "buttonimage", obj, ["disabled"]);
    this._addCss("RadioControl", "buttonimage", obj, ["disabled"]);

    obj = new nexacro.Style_value("1 solid #b1c0cb");
    this._addCss("Radio", "buttonborder", obj, ["disabled"]);

    obj = new nexacro.Style_border("1","solid","#ffffffff","");
    this._addCss("ListBox", "itemborder", obj, ["normal"]);
    this._addCss("ListBoxControl", "itemborder", obj, ["normal"]);

    obj = new nexacro.Style_padding("0 2 0 6");
    this._addCss("ListBox", "itempadding", obj, ["normal"]);
    this._addCss("ListBoxControl", "itempadding", obj, ["normal"]);

    obj = new nexacro.Style_background("#b9ecffff","","","0","0","0","0","true");
    this._addCss("ListBox", "itembackground", obj, ["mouseover"]);
    this._addCss("ListBoxControl", "itembackground", obj, ["mouseover"]);

    obj = new nexacro.Style_border("1","solid","#a7daecff","");
    this._addCss("ListBox", "itemborder", obj, ["mouseover"]);
    this._addCss("ListBoxControl", "itemborder", obj, ["mouseover"]);

    obj = new nexacro.Style_background("@gradation","","","0","0","0","0","true");
    this._addCss("ListBox", "itembackground", obj, ["selected"]);
    this._addCss("ListBoxControl", "itembackground", obj, ["selected"]);
    this._addCss("Menu", "itembackground", obj, ["selected", "focused"]);
    this._addCss("MenuControl", "itembackground", obj, ["selected", "focused"]);

    obj = new nexacro.Style_gradation("linear 0,0 #94bdd5 0,100 #3a9fdc [45% #52ace2][50% #3da2df]");
    this._addCss("ListBox", "itemgradation", obj, ["selected"]);
    this._addCss("ListBoxControl", "itemgradation", obj, ["selected"]);

    obj = new nexacro.Style_border("1","solid","#4485adff","");
    this._addCss("ListBox", "itemborder", obj, ["selected"]);
    this._addCss("ListBoxControl", "itemborder", obj, ["selected"]);

    obj = new nexacro.Style_background("#f7f7f7ff","","","0","0","0","0","true");
    this._addCss("ListBox", "itembackground", obj, ["disabled"]);
    this._addCss("ListBoxControl", "itembackground", obj, ["disabled"]);

    obj = new nexacro.Style_border("1","solid","#f7f7f7ff","");
    this._addCss("ListBox", "itemborder", obj, ["disabled"]);
    this._addCss("ListBoxControl", "itemborder", obj, ["disabled"]);

    obj = new nexacro.Style_value("20");
    this._addCss("Combo", "buttonsize", obj, ["normal"]);
    this._addCss("Grid>#controlcombo", "buttonsize", obj, ["normal"]);

    obj = new nexacro.Style_border("0","none","","","1","solid","#c2c8d5ff","","0","none","","","0","none","","");
    this._addCss("Combo>#comboedit", "border", obj, ["normal", "mouseover", "pushed", "focused"]);
    this._addCss("Grid>#controlcombo>#comboedit", "border", obj, ["normal", "mouseover", "pushed", "selected", "focused"]);

    obj = new nexacro.Style_value("#3d517b");
    this._addCss("Combo>#comboedit", "selectbackground", obj, ["normal", "mouseover", "pushed", "focused"]);
    this._addCss("Grid>#controledit", "selectbackground", obj, ["normal"]);
    this._addCss("Grid>#controltextarea", "selectbackground", obj, ["normal"]);
    this._addCss("Grid>#controlmaskedit", "selectbackground", obj, ["normal"]);
    this._addCss("Grid>#controlcombo>#comboedit", "selectbackground", obj, ["normal", "mouseover", "pushed", "selected", "focused"]);
    this._addCss("Grid>#controlcalendar>#calendaredit", "selectbackground", obj, ["normal"]);

    obj = new nexacro.Style_value("theme://images/btn_combo_N.gif");
    this._addCss("Combo>#dropbutton", "image", obj, ["normal"]);
    this._addCss("Grid>#controlcombo>#dropbutton", "image", obj, ["normal"]);

    obj = new nexacro.Style_gradation("linear 0,0 #ffffff 0,100 #f6f7f9");
    this._addCss("Combo>#dropbutton", "gradation", obj, ["mouseover", "focused", "selected"]);
    this._addCss("Grid>#controlcombo>#dropbutton", "gradation", obj, ["mouseover", "focused", "selected"]);

    obj = new nexacro.Style_value("theme://images/btn_combo_O.gif");
    this._addCss("Combo>#dropbutton", "image", obj, ["mouseover", "focused", "selected", "pushed"]);
    this._addCss("Grid>#controlcombo>#dropbutton", "image", obj, ["mouseover", "focused", "selected", "pushed"]);

    obj = new nexacro.Style_gradation("linear 0,0 #f6f7f9 0,100 #fdfefe");
    this._addCss("Combo>#dropbutton", "gradation", obj, ["pushed"]);
    this._addCss("Grid>#controlcombo>#dropbutton", "gradation", obj, ["pushed"]);

    obj = new nexacro.Style_value("theme://images/btn_combo_D.gif");
    this._addCss("Combo>#dropbutton", "image", obj, ["disabled"]);
    this._addCss("Grid>#controlcombo>#dropbutton", "image", obj, ["disabled"]);

    obj = new nexacro.Style_border("1","solid","#b2b9c8ff","");
    this._addCss("Combo>#combolist", "border", obj, ["normal"]);
    this._addCss("Grid>#controlcombo>#combolist", "border", obj, ["normal"]);

    obj = new nexacro.Style_color("#5b6271");
    this._addCss("Combo>#combolist", "color", obj, ["normal"]);
    this._addCss("Grid>#controlcombo>#combolist", "color", obj, ["normal"]);

    obj = new nexacro.Style_bordertype("normal","0","0","true","true","true","true");
    this._addCss("Combo>#combolist", "itembordertype", obj, ["normal"]);
    this._addCss("Menu", "itembordertype", obj, ["normal"]);
    this._addCss("MenuControl", "itembordertype", obj, ["normal"]);
    this._addCss("Grid>#controlcombo>#combolist", "itembordertype", obj, ["normal"]);

    obj = new nexacro.Style_padding("0 5 0 3");
    this._addCss("Combo>#combolist", "itempadding", obj, ["normal"]);
    this._addCss("Grid>#controlcombo>#combolist", "itempadding", obj, ["normal"]);

    obj = new nexacro.Style_background("#eceff4ff","","","0","0","0","0","true");
    this._addCss("Combo>#combolist", "itembackground", obj, ["mouseover"]);
    this._addCss("Grid>#controlcombo>#combolist", "itembackground", obj, ["mouseover"]);

    obj = new nexacro.Style_color("#224181");
    this._addCss("Combo>#combolist", "itemcolor", obj, ["mouseover"]);
    this._addCss("Grid>#controlcombo>#combolist", "itemcolor", obj, ["mouseover"]);

    obj = new nexacro.Style_background("#6a7597ff","","","0","0","0","0","true");
    this._addCss("Combo>#combolist", "itembackground", obj, ["selected"]);
    this._addCss("Grid>#controlcombo>#combolist", "itembackground", obj, ["selected"]);

    obj = new nexacro.Style_color("#ffffff");
    this._addCss("Combo>#combolist", "color", obj, ["selected"]);
    this._addCss("Tab", "color", obj, ["selected", "focused"]);
    this._addCss("TabControl", "color", obj, ["selected", "focused"]);
    this._addCss("Grid>#controlcombo>#combolist", "color", obj, ["selected"]);
    this._addCss("Button.btn_WF_CRUD", "color", obj, ["normal", "mouseover", "pushed", "selected", "focused"]);

    obj = new nexacro.Style_border("0","none","","","1","solid","#aaaaaaff","","0","none","","","0","none","","");
    this._addCss("Combo", "border", obj, ["readonly>#comboedit"]);

    obj = new nexacro.Style_value("");
    this._addCss("Menu", "autohotkey", obj, ["normal"]);
    this._addCss("MenuControl", "autohotkey", obj, ["normal"]);

    obj = new nexacro.Style_background("@gradation","theme://images/img_TP_GNB_GuideLine.png","stretch","10","2","0","0","true");
    this._addCss("Menu", "background", obj, ["normal"]);
    this._addCss("MenuControl", "background", obj, ["normal"]);

    obj = new nexacro.Style_value("URL('theme://images/ico_menu_check.png')");
    this._addCss("Menu", "checkboximage", obj, ["normal"]);
    this._addCss("MenuControl", "checkboximage", obj, ["normal"]);

    obj = new nexacro.Style_value("URL('theme://images/ico_expand_N.png')");
    this._addCss("Menu", "expandimage", obj, ["normal"]);
    this._addCss("MenuControl", "expandimage", obj, ["normal"]);

    obj = new nexacro.Style_font("bold 10 Dotum");
    this._addCss("Menu", "font", obj, ["normal"]);
    this._addCss("MenuControl", "font", obj, ["normal"]);

    obj = new nexacro.Style_gradation("linear 0,0 #efefebff 0,100 #d9d9d1ff");
    this._addCss("Menu", "gradation", obj, ["normal"]);
    this._addCss("MenuControl", "gradation", obj, ["normal"]);

    obj = new nexacro.Style_align("");
    this._addCss("Menu", "itemalign", obj, ["normal"]);
    this._addCss("MenuControl", "itemalign", obj, ["normal"]);

    obj = new nexacro.Style_background("","theme://images/img_TP_GNB_N.png","stretch","10","2","0","0","true");
    this._addCss("Menu", "itembackground", obj, ["normal"]);
    this._addCss("MenuControl", "itembackground", obj, ["normal"]);

    obj = new nexacro.Style_padding("0 30 0 30");
    this._addCss("Menu", "itempadding", obj, ["normal"]);
    this._addCss("MenuControl", "itempadding", obj, ["normal"]);

    obj = new nexacro.Style_background("#f2f2efff","","","0","0","0","0","true");
    this._addCss("Menu", "popupbackground", obj, ["normal"]);
    this._addCss("MenuControl", "popupbackground", obj, ["normal"]);

    obj = new nexacro.Style_border("1","solid","#a8a8a2ff","");
    this._addCss("Menu", "popupborder", obj, ["normal"]);
    this._addCss("MenuControl", "popupborder", obj, ["normal"]);

    obj = new nexacro.Style_bordertype("normal","0","0","true","true","true","true");
    this._addCss("Menu", "popupbordertype", obj, ["normal"]);
    this._addCss("MenuControl", "popupbordertype", obj, ["normal"]);
    this._addCss("Calendar", "popupbordertype", obj, ["normal"]);
    this._addCss("CalendarControl", "popupbordertype", obj, ["normal"]);
    this._addCss("Grid>#controlcalendar", "popupbordertype", obj, ["normal"]);

    obj = new nexacro.Style_color("#46463d");
    this._addCss("Menu", "popupcolor", obj, ["normal"]);
    this._addCss("MenuControl", "popupcolor", obj, ["normal"]);

    obj = new nexacro.Style_font("9 Dotum");
    this._addCss("Menu", "popupfont", obj, ["normal"]);
    this._addCss("MenuControl", "popupfont", obj, ["normal"]);

    obj = new nexacro.Style_gradation("");
    this._addCss("Menu", "popupgradation", obj, ["normal"]);
    this._addCss("MenuControl", "popupgradation", obj, ["normal"]);
    this._addCss("Calendar", "popupgradation", obj, ["normal"]);
    this._addCss("CalendarControl", "popupgradation", obj, ["normal"]);

    obj = new nexacro.Style_background("#f2f2efff","","","0","0","0","0","true");
    this._addCss("Menu", "popupitembackground", obj, ["normal"]);
    this._addCss("MenuControl", "popupitembackground", obj, ["normal"]);

    obj = new nexacro.Style_border("1","solid","#fcfcfbff","","1","solid","#fcfcfbff","","1","solid","#e7e7e2ff","","1","solid","#fcfcfbff","");
    this._addCss("Menu", "popupitemborder", obj, ["normal"]);
    this._addCss("MenuControl", "popupitemborder", obj, ["normal"]);

    obj = new nexacro.Style_bordertype("normal","0","0","true","true","true","true");
    this._addCss("Menu", "popupitembordertype", obj, ["normal"]);
    this._addCss("MenuControl", "popupitembordertype", obj, ["normal"]);

    obj = new nexacro.Style_gradation("");
    this._addCss("Menu", "popupitemgradation", obj, ["normal"]);
    this._addCss("MenuControl", "popupitemgradation", obj, ["normal"]);

    obj = new nexacro.Style_value("20");
    this._addCss("Menu", "popupitemheight", obj, ["normal"]);
    this._addCss("MenuControl", "popupitemheight", obj, ["normal"]);

    obj = new nexacro.Style_padding("1 6 1 8");
    this._addCss("Menu", "popupitempadding", obj, ["normal", "mouseover"]);
    this._addCss("MenuControl", "popupitempadding", obj, ["normal", "mouseover"]);

    obj = new nexacro.Style_padding("2 0 2 0");
    this._addCss("Menu", "popuppadding", obj, ["normal", "mouseover"]);
    this._addCss("MenuControl", "popuppadding", obj, ["normal", "mouseover"]);

    obj = new nexacro.Style_value("");
    this._addCss("Menu", "popuptype", obj, ["normal"]);
    this._addCss("MenuControl", "popuptype", obj, ["normal"]);

    obj = new nexacro.Style_background("","theme://images/img_TP_GNB_O.png","stretch","10","2","0","0","true");
    this._addCss("Menu", "itembackground", obj, ["mouseover"]);
    this._addCss("MenuControl", "itembackground", obj, ["mouseover"]);

    obj = new nexacro.Style_font("bold 9 dotum");
    this._addCss("Menu", "itemfont", obj, ["mouseover"]);
    this._addCss("MenuControl", "itemfont", obj, ["mouseover"]);

    obj = new nexacro.Style_color("#3f4e60ff");
    this._addCss("Menu", "itemcolor", obj, ["mouseover"]);
    this._addCss("MenuControl", "itemcolor", obj, ["mouseover"]);

    obj = new nexacro.Style_color("#0065b2");
    this._addCss("Menu", "color", obj, ["mouseover", "selected", "focused"]);
    this._addCss("MenuControl", "color", obj, ["mouseover", "selected", "focused"]);
    this._addCss("Tab", "color", obj, ["mouseover"]);
    this._addCss("TabControl", "color", obj, ["mouseover"]);

    obj = new nexacro.Style_background("@gradation","","","0","0","0","0","true");
    this._addCss("Menu", "popupitembackground", obj, ["mouseover"]);
    this._addCss("MenuControl", "popupitembackground", obj, ["mouseover"]);

    obj = new nexacro.Style_gradation("linear 0,0 #94bdd5 0,100 #2f89cd [48% #4da3db][50% #3696d7]");
    this._addCss("Menu", "popupitemgradation", obj, ["mouseover"]);
    this._addCss("MenuControl", "popupitemgradation", obj, ["mouseover"]);

    obj = new nexacro.Style_border("1","solid","#ffffff00","");
    this._addCss("Menu", "popupitemborder", obj, ["mouseover"]);
    this._addCss("MenuControl", "popupitemborder", obj, ["mouseover"]);

    obj = new nexacro.Style_font("9 dotum");
    this._addCss("Menu", "popupfont", obj, ["mouseover"]);
    this._addCss("MenuControl", "popupfont", obj, ["mouseover"]);

    obj = new nexacro.Style_color("#ffffff");
    this._addCss("Menu", "popupcolor", obj, ["mouseover"]);
    this._addCss("MenuControl", "popupcolor", obj, ["mouseover"]);

    obj = new nexacro.Style_value("URL('theme://images/ico_expand_O.png')");
    this._addCss("Menu", "expandimage", obj, ["mouseover"]);
    this._addCss("MenuControl", "expandimage", obj, ["mouseover"]);

    obj = new nexacro.Style_gradation("linear 0,0 #f3f3f0 0,100 #919181");
    this._addCss("Menu", "itemgradation", obj, ["selected", "focused"]);
    this._addCss("MenuControl", "itemgradation", obj, ["selected", "focused"]);

    obj = new nexacro.Style_color("#7a7a7a");
    this._addCss("Menu", "itemcolor", obj, ["disabled"]);
    this._addCss("MenuControl", "itemcolor", obj, ["disabled"]);

    obj = new nexacro.Style_color("#999999");
    this._addCss("Menu", "popupcolor", obj, ["disabled"]);
    this._addCss("MenuControl", "popupcolor", obj, ["disabled"]);

    obj = new nexacro.Style_border("1","solid","#e5e5e5ff","");
    this._addCss("ImageViewer", "border", obj, ["normal"]);
    this._addCss("ImageViewerControl", "border", obj, ["normal"]);

    obj = new nexacro.Style_value("100");
    this._addCss("ImageViewer", "opacity", obj, ["normal"]);
    this._addCss("ImageViewerControl", "opacity", obj, ["normal"]);

    obj = new nexacro.Style_border("1","solid","#c6a469ff","");
    this._addCss("ImageViewer", "border", obj, ["mouseover", "focused"]);
    this._addCss("ImageViewerControl", "border", obj, ["mouseover", "focused"]);
    this._addCss("GroupBox", "border", obj, ["normal"]);
    this._addCss("GroupBoxControl", "border", obj, ["normal"]);

    obj = new nexacro.Style_bordertype("round","10","10","true","true","true","true");
    this._addCss("GroupBox", "bordertype", obj, ["normal"]);
    this._addCss("GroupBoxControl", "bordertype", obj, ["normal"]);

    obj = new nexacro.Style_background("","","","0","0","0","0","true");
    this._addCss("GroupBox", "titlebackground", obj, ["normal"]);
    this._addCss("GroupBoxControl", "titlebackground", obj, ["normal"]);

    obj = new nexacro.Style_gradation("");
    this._addCss("GroupBox", "titlegradation", obj, ["normal"]);
    this._addCss("GroupBoxControl", "titlegradation", obj, ["normal"]);

    obj = new nexacro.Style_value("URL('theme://images/img_grouptitle.png')");
    this._addCss("GroupBox", "titleimage", obj, ["normal"]);
    this._addCss("GroupBoxControl", "titleimage", obj, ["normal"]);

    obj = new nexacro.Style_align("lefttext middle");
    this._addCss("GroupBox", "titleimagealign", obj, ["normal"]);
    this._addCss("GroupBoxControl", "titleimagealign", obj, ["normal"]);

    obj = new nexacro.Style_value("");
    this._addCss("GroupBox", "titleview", obj, ["normal"]);
    this._addCss("GroupBoxControl", "titleview", obj, ["normal"]);

    obj = new nexacro.Style_border("1","solid","#ccccccff","");
    this._addCss("GroupBox", "border", obj, ["disabled"]);
    this._addCss("GroupBoxControl", "border", obj, ["disabled"]);

    obj = new nexacro.Style_color("#aaaaaa");
    this._addCss("GroupBox", "color", obj, ["disabled"]);
    this._addCss("GroupBoxControl", "color", obj, ["disabled"]);

    obj = new nexacro.Style_value("URL('theme://images/img_grouptitle_D.png')");
    this._addCss("GroupBox", "titleimage", obj, ["disabled"]);
    this._addCss("GroupBoxControl", "titleimage", obj, ["disabled"]);

    obj = new nexacro.Style_background("#f7f7f5ff","","","0","0","0","0","true");
    this._addCss("ProgressBar", "background", obj, ["normal"]);
    this._addCss("ProgressBarControl", "background", obj, ["normal"]);

    obj = new nexacro.Style_color("");
    this._addCss("ProgressBar", "barcolor", obj, ["normal"]);
    this._addCss("ProgressBarControl", "barcolor", obj, ["normal"]);

    obj = new nexacro.Style_value("image");
    this._addCss("ProgressBar", "bartype", obj, ["normal"]);
    this._addCss("ProgressBarControl", "bartype", obj, ["normal"]);

    obj = new nexacro.Style_border("1","solid","#999999ff","");
    this._addCss("ProgressBar", "border", obj, ["normal"]);
    this._addCss("ProgressBarControl", "border", obj, ["normal"]);
    this._addCss("FileDownload", "border", obj, ["normal"]);
    this._addCss("FileDownloadControl", "border", obj, ["normal"]);

    obj = new nexacro.Style_value("URL('theme://images/img_progress.png')");
    this._addCss("ProgressBar", "progressimage", obj, ["normal"]);
    this._addCss("ProgressBarControl", "progressimage", obj, ["normal"]);

    obj = new nexacro.Style_value("URL('theme://images/img_progress_D.png')");
    this._addCss("ProgressBar", "progressimage", obj, ["disabled"]);
    this._addCss("ProgressBarControl", "progressimage", obj, ["disabled"]);

    obj = new nexacro.Style_border("1","solid","#d5d5d5ff","","1","solid","#a6a6a9ff","","1","solid","#a6a6a9ff","","1","solid","#d5d5d5ff","");
    this._addCss("DatePicker", "border", obj, ["normal"]);
    this._addCss("DatePickerControl", "border", obj, ["normal"]);

    obj = new nexacro.Style_font("antialias 9 Arial");
    this._addCss("DatePicker", "font", obj, ["normal"]);
    this._addCss("DatePickerControl", "font", obj, ["normal"]);

    obj = new nexacro.Style_color("#405980");
    this._addCss("DatePicker", "color", obj, ["normal"]);
    this._addCss("DatePickerControl", "color", obj, ["normal"]);

    obj = new nexacro.Style_padding("37 5 5 5");
    this._addCss("DatePicker", "ncpadding", obj, ["normal"]);
    this._addCss("DatePickerControl", "ncpadding", obj, ["normal"]);

    obj = new nexacro.Style_value("yyyy.MM");
    this._addCss("DatePicker", "headerformat", obj, ["normal"]);
    this._addCss("DatePickerControl", "headerformat", obj, ["normal"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar", "headerformat", obj, ["normal"]);

    obj = new nexacro.Style_value("일 월 화 수 목 금 토");
    this._addCss("DatePicker", "weekformat", obj, ["normal"]);
    this._addCss("DatePickerControl", "weekformat", obj, ["normal"]);

    obj = new nexacro.Style_value("22,22");
    this._addCss("DatePicker", "daysize", obj, ["normal"]);
    this._addCss("DatePickerControl", "daysize", obj, ["normal"]);

    obj = new nexacro.Style_color("#333333");
    this._addCss("DatePicker", "daycolor", obj, ["normal"]);
    this._addCss("DatePickerControl", "daycolor", obj, ["normal"]);
    this._addCss("Calendar", "daycolor", obj, ["normal"]);
    this._addCss("CalendarControl", "daycolor", obj, ["normal"]);

    obj = new nexacro.Style_background("#ffffffff","","","0","0","0","0","true");
    this._addCss("DatePicker", "daybackground", obj, ["normal"]);
    this._addCss("DatePickerControl", "daybackground", obj, ["normal"]);
    this._addCss("Calendar", "daybackground", obj, ["normal"]);
    this._addCss("CalendarControl", "daybackground", obj, ["normal"]);
    this._addCss("Grid>#controlcalendar", "daybackground", obj, ["normal"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar", "daybackground", obj, ["normal"]);

    obj = new nexacro.Style_gradation("");
    this._addCss("DatePicker", "daygradation", obj, ["normal", "mouseover", "selected"]);
    this._addCss("DatePickerControl", "daygradation", obj, ["normal", "mouseover", "selected"]);
    this._addCss("Calendar", "daygradation", obj, ["normal"]);
    this._addCss("CalendarControl", "daygradation", obj, ["normal"]);

    obj = new nexacro.Style_border("1","solid","#ffffffff","");
    this._addCss("DatePicker", "dayborder", obj, ["normal"]);
    this._addCss("DatePickerControl", "dayborder", obj, ["normal"]);
    this._addCss("Calendar", "dayborder", obj, ["normal"]);
    this._addCss("CalendarControl", "dayborder", obj, ["normal"]);

    obj = new nexacro.Style_bordertype("normal","0","0","true","true","true","true");
    this._addCss("DatePicker", "daybordertype", obj, ["normal", "mouseover", "selected"]);
    this._addCss("DatePickerControl", "daybordertype", obj, ["normal", "mouseover", "selected"]);
    this._addCss("Calendar", "daybordertype", obj, ["normal"]);
    this._addCss("CalendarControl", "daybordertype", obj, ["normal"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar", "daybordertype", obj, ["normal"]);

    obj = new nexacro.Style_font("antialias 9 Arial");
    this._addCss("DatePicker", "dayfont", obj, ["normal"]);
    this._addCss("DatePickerControl", "dayfont", obj, ["normal"]);

    obj = new nexacro.Style_value("35");
    this._addCss("DatePicker", "headerheight", obj, ["normal"]);
    this._addCss("DatePickerControl", "headerheight", obj, ["normal"]);

    obj = new nexacro.Style_color("#444444");
    this._addCss("DatePicker", "headercolor", obj, ["normal"]);
    this._addCss("DatePickerControl", "headercolor", obj, ["normal"]);

    obj = new nexacro.Style_background("#ffffffff","","","0","0","0","0","true");
    this._addCss("DatePicker", "headerbackground", obj, ["normal"]);
    this._addCss("DatePickerControl", "headerbackground", obj, ["normal"]);

    obj = new nexacro.Style_gradation("");
    this._addCss("DatePicker", "headergradation", obj, ["normal"]);
    this._addCss("DatePickerControl", "headergradation", obj, ["normal"]);

    obj = new nexacro.Style_border("0","none","","");
    this._addCss("DatePicker", "headerborder", obj, ["normal"]);
    this._addCss("DatePickerControl", "headerborder", obj, ["normal"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar", "headerborder", obj, ["normal"]);

    obj = new nexacro.Style_bordertype("normal","0","0","true","true","true","true");
    this._addCss("DatePicker", "headerbordertype", obj, ["normal"]);
    this._addCss("DatePickerControl", "headerbordertype", obj, ["normal"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar", "headerbordertype", obj, ["normal"]);

    obj = new nexacro.Style_font("antialias 11 Arial");
    this._addCss("DatePicker", "headerfont", obj, ["normal"]);
    this._addCss("DatePickerControl", "headerfont", obj, ["normal"]);

    obj = new nexacro.Style_background("#ffffffff","","","0","0","0","0","true");
    this._addCss("DatePicker", "bodybackground", obj, ["normal"]);
    this._addCss("DatePickerControl", "bodybackground", obj, ["normal"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar", "bodybackground", obj, ["normal"]);

    obj = new nexacro.Style_gradation("");
    this._addCss("DatePicker", "bodygradation", obj, ["normal"]);
    this._addCss("DatePickerControl", "bodygradation", obj, ["normal"]);

    obj = new nexacro.Style_border("0","none","","");
    this._addCss("DatePicker", "bodyborder", obj, ["normal"]);
    this._addCss("DatePickerControl", "bodyborder", obj, ["normal"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar", "bodyborder", obj, ["normal"]);

    obj = new nexacro.Style_bordertype("normal","0","0","true","true","true","true");
    this._addCss("DatePicker", "bodybordertype", obj, ["normal"]);
    this._addCss("DatePickerControl", "bodybordertype", obj, ["normal"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar", "bodybordertype", obj, ["normal"]);

    obj = new nexacro.Style_color("#333333");
    this._addCss("DatePicker", "weekcolor", obj, ["normal"]);
    this._addCss("DatePickerControl", "weekcolor", obj, ["normal"]);

    obj = new nexacro.Style_background("#f0f5faff","theme://images/bg_CalWeek.png","repeat-x","0","0","0","0","true");
    this._addCss("DatePicker", "weekbackground", obj, ["normal"]);
    this._addCss("DatePickerControl", "weekbackground", obj, ["normal"]);

    obj = new nexacro.Style_gradation("");
    this._addCss("DatePicker", "weekgradation", obj, ["normal"]);
    this._addCss("DatePickerControl", "weekgradation", obj, ["normal"]);

    obj = new nexacro.Style_font("antialias 9 Arial,Dotum");
    this._addCss("DatePicker", "weekfont", obj, ["normal"]);
    this._addCss("DatePickerControl", "weekfont", obj, ["normal"]);

    obj = new nexacro.Style_color("#ffffff");
    this._addCss("DatePicker", "todaycolor", obj, ["normal"]);
    this._addCss("DatePickerControl", "todaycolor", obj, ["normal"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar", "todaycolor", obj, ["normal"]);

    obj = new nexacro.Style_background("","theme://images/bg_CalToday.png","stretch","1","1","0","0","true");
    this._addCss("DatePicker", "todaybackground", obj, ["normal"]);
    this._addCss("DatePickerControl", "todaybackground", obj, ["normal"]);

    obj = new nexacro.Style_gradation("");
    this._addCss("DatePicker", "todaygradation", obj, ["normal"]);
    this._addCss("DatePickerControl", "todaygradation", obj, ["normal"]);

    obj = new nexacro.Style_border("1","solid","#995a00ff","");
    this._addCss("DatePicker", "todayborder", obj, ["normal"]);
    this._addCss("DatePickerControl", "todayborder", obj, ["normal"]);

    obj = new nexacro.Style_bordertype("normal","0","0","true","true","true","true");
    this._addCss("DatePicker", "todaybordertype", obj, ["normal"]);
    this._addCss("DatePickerControl", "todaybordertype", obj, ["normal"]);

    obj = new nexacro.Style_font("antialias bold 9 Arial");
    this._addCss("DatePicker", "todayfont", obj, ["normal"]);
    this._addCss("DatePickerControl", "todayfont", obj, ["normal"]);

    obj = new nexacro.Style_background("#ffffffff","","","0","0","0","0","true");
    this._addCss("DatePicker", "saturdaybackground", obj, ["normal"]);
    this._addCss("DatePickerControl", "saturdaybackground", obj, ["normal"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar", "saturdaybackground", obj, ["normal"]);

    obj = new nexacro.Style_gradation("");
    this._addCss("DatePicker", "saturdaygradation", obj, ["normal"]);
    this._addCss("DatePickerControl", "saturdaygradation", obj, ["normal"]);

    obj = new nexacro.Style_border("1","solid","#ffffff00","");
    this._addCss("DatePicker", "saturdayborder", obj, ["normal"]);
    this._addCss("DatePickerControl", "saturdayborder", obj, ["normal"]);

    obj = new nexacro.Style_bordertype("","0","0","true","true","true","true");
    this._addCss("DatePicker", "saturdaybordertype", obj, ["normal"]);
    this._addCss("DatePickerControl", "saturdaybordertype", obj, ["normal"]);

    obj = new nexacro.Style_font("antialias 9 Arial");
    this._addCss("DatePicker", "saturdayfont", obj, ["normal"]);
    this._addCss("DatePickerControl", "saturdayfont", obj, ["normal"]);

    obj = new nexacro.Style_color("#669933");
    this._addCss("DatePicker", "saturdaycolor", obj, ["normal"]);
    this._addCss("DatePickerControl", "saturdaycolor", obj, ["normal"]);

    obj = new nexacro.Style_background("#ffffffff","","","0","0","0","0","true");
    this._addCss("DatePicker", "sundaybackground", obj, ["normal"]);
    this._addCss("DatePickerControl", "sundaybackground", obj, ["normal"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar", "sundaybackground", obj, ["normal"]);

    obj = new nexacro.Style_gradation("");
    this._addCss("DatePicker", "sundaygradation", obj, ["normal"]);
    this._addCss("DatePickerControl", "sundaygradation", obj, ["normal"]);

    obj = new nexacro.Style_border("1","solid","#ffffff00","");
    this._addCss("DatePicker", "sundayborder", obj, ["normal"]);
    this._addCss("DatePickerControl", "sundayborder", obj, ["normal"]);

    obj = new nexacro.Style_bordertype("","0","0","true","true","true","true");
    this._addCss("DatePicker", "sundaybordertype", obj, ["normal"]);
    this._addCss("DatePickerControl", "sundaybordertype", obj, ["normal"]);

    obj = new nexacro.Style_color("#f0770a");
    this._addCss("DatePicker", "sundaycolor", obj, ["normal"]);
    this._addCss("DatePickerControl", "sundaycolor", obj, ["normal"]);

    obj = new nexacro.Style_font("antialias 9 Arial");
    this._addCss("DatePicker", "sundayfont", obj, ["normal"]);
    this._addCss("DatePickerControl", "sundayfont", obj, ["normal"]);

    obj = new nexacro.Style_color("#ffffff");
    this._addCss("DatePicker", "daycolor", obj, ["mouseover", "selected"]);
    this._addCss("DatePickerControl", "daycolor", obj, ["mouseover", "selected"]);
    this._addCss("Calendar", "daycolor", obj, ["selected"]);
    this._addCss("CalendarControl", "daycolor", obj, ["selected"]);
    this._addCss("Grid>#controlcalendar", "daycolor", obj, ["selected"]);

    obj = new nexacro.Style_background("","theme://images/bg_daybackground_O.png","stretch","1","1","0","0","true");
    this._addCss("DatePicker", "daybackground", obj, ["mouseover"]);
    this._addCss("DatePickerControl", "daybackground", obj, ["mouseover"]);
    this._addCss("Calendar", "daybackground", obj, ["mouseover"]);
    this._addCss("CalendarControl", "daybackground", obj, ["mouseover"]);

    obj = new nexacro.Style_border("1","solid","#9eb9caff","");
    this._addCss("DatePicker", "dayborder", obj, ["mouseover"]);
    this._addCss("DatePickerControl", "dayborder", obj, ["mouseover"]);

    obj = new nexacro.Style_font("antialias bold 9 Arial");
    this._addCss("DatePicker", "dayfont", obj, ["mouseover", "selected"]);
    this._addCss("DatePickerControl", "dayfont", obj, ["mouseover", "selected"]);
    this._addCss("Calendar", "dayfont", obj, ["mouseover", "selected"]);
    this._addCss("CalendarControl", "dayfont", obj, ["mouseover", "selected"]);

    obj = new nexacro.Style_color("#ffffff");
    this._addCss("DatePicker", "saturdaycolor", obj, ["mouseover", "selected"]);
    this._addCss("DatePickerControl", "saturdaycolor", obj, ["mouseover", "selected"]);

    obj = new nexacro.Style_background("","theme://images/bg_daybackground_O.png","stretch","1","1","0","0","true");
    this._addCss("DatePicker", "saturdaybackground", obj, ["mouseover"]);
    this._addCss("DatePickerControl", "saturdaybackground", obj, ["mouseover"]);

    obj = new nexacro.Style_border("1","solid","#9eb9caff","");
    this._addCss("DatePicker", "saturdayborder", obj, ["mouseover"]);
    this._addCss("DatePickerControl", "saturdayborder", obj, ["mouseover"]);

    obj = new nexacro.Style_bordertype("normal","0","0","true","true","true","true");
    this._addCss("DatePicker", "saturdaybordertype", obj, ["mouseover", "selected"]);
    this._addCss("DatePickerControl", "saturdaybordertype", obj, ["mouseover", "selected"]);

    obj = new nexacro.Style_font("antialias bold 9 Arial");
    this._addCss("DatePicker", "saturdayfont", obj, ["mouseover", "selected"]);
    this._addCss("DatePickerControl", "saturdayfont", obj, ["mouseover", "selected"]);

    obj = new nexacro.Style_color("#ffffff");
    this._addCss("DatePicker", "sundaycolor", obj, ["mouseover", "selected"]);
    this._addCss("DatePickerControl", "sundaycolor", obj, ["mouseover", "selected"]);

    obj = new nexacro.Style_background("","theme://images/bg_daybackground_O.png","stretch","1","1","0","0","true");
    this._addCss("DatePicker", "sundaybackground", obj, ["mouseover"]);
    this._addCss("DatePickerControl", "sundaybackground", obj, ["mouseover"]);

    obj = new nexacro.Style_border("1","solid","#9eb9caff","");
    this._addCss("DatePicker", "sundayborder", obj, ["mouseover"]);
    this._addCss("DatePickerControl", "sundayborder", obj, ["mouseover"]);

    obj = new nexacro.Style_bordertype("normal","0","0","true","true","true","true");
    this._addCss("DatePicker", "sundaybordertype", obj, ["mouseover", "selected"]);
    this._addCss("DatePickerControl", "sundaybordertype", obj, ["mouseover", "selected"]);

    obj = new nexacro.Style_font("antialias bold 9 Arial");
    this._addCss("DatePicker", "sundayfont", obj, ["mouseover", "selected"]);
    this._addCss("DatePickerControl", "sundayfont", obj, ["mouseover", "selected"]);

    obj = new nexacro.Style_background("","theme://images/bg_daybackground_S.png","stretch","1","1","0","0","true");
    this._addCss("DatePicker", "daybackground", obj, ["selected"]);
    this._addCss("DatePickerControl", "daybackground", obj, ["selected"]);
    this._addCss("Calendar", "daybackground", obj, ["selected"]);
    this._addCss("CalendarControl", "daybackground", obj, ["selected"]);

    obj = new nexacro.Style_border("1","solid","#045c92ff","");
    this._addCss("DatePicker", "dayborder", obj, ["selected"]);
    this._addCss("DatePickerControl", "dayborder", obj, ["selected"]);

    obj = new nexacro.Style_background("","theme://images/bg_daybackground_S.png","stretch","1","1","0","0","true");
    this._addCss("DatePicker", "saturdaybackground", obj, ["selected"]);
    this._addCss("DatePickerControl", "saturdaybackground", obj, ["selected"]);

    obj = new nexacro.Style_border("1","solid","#045c92ff","");
    this._addCss("DatePicker", "saturdayborder", obj, ["selected"]);
    this._addCss("DatePickerControl", "saturdayborder", obj, ["selected"]);

    obj = new nexacro.Style_background("","theme://images/bg_daybackground_S.png","stretch","1","1","0","0","true");
    this._addCss("DatePicker", "sundaybackground", obj, ["selected"]);
    this._addCss("DatePickerControl", "sundaybackground", obj, ["selected"]);

    obj = new nexacro.Style_border("1","solid","#045c92ff","");
    this._addCss("DatePicker", "sundayborder", obj, ["selected"]);
    this._addCss("DatePickerControl", "sundayborder", obj, ["selected"]);

    obj = new nexacro.Style_value("");
    this._addCss("Calendar", "buttonsize", obj, ["normal"]);
    this._addCss("CalendarControl", "buttonsize", obj, ["normal"]);

    obj = new nexacro.Style_font("");
    this._addCss("Calendar", "dayfont", obj, ["normal"]);
    this._addCss("CalendarControl", "dayfont", obj, ["normal"]);

    obj = new nexacro.Style_value("22 22");
    this._addCss("Calendar", "daysize", obj, ["normal"]);
    this._addCss("CalendarControl", "daysize", obj, ["normal"]);

    obj = new nexacro.Style_font("antialias bold 9 Arial");
    this._addCss("Calendar", "font", obj, ["normal"]);
    this._addCss("CalendarControl", "font", obj, ["normal"]);

    obj = new nexacro.Style_background("#ffffffff","","","0","0","0","0","true");
    this._addCss("Calendar", "popupbackground", obj, ["normal"]);
    this._addCss("CalendarControl", "popupbackground", obj, ["normal"]);
    this._addCss("Grid>#controlcalendar", "popupbackground", obj, ["normal"]);

    obj = new nexacro.Style_border("1","solid","#d5d5d5ff","","1","solid","#a6a6a9ff","","1","solid","#a6a6a9ff","","1","solid","#d5d5d5ff","");
    this._addCss("Calendar", "popupborder", obj, ["normal"]);
    this._addCss("CalendarControl", "popupborder", obj, ["normal"]);

    obj = new nexacro.Style_value("166 198");
    this._addCss("Calendar", "popupsize", obj, ["normal"]);
    this._addCss("CalendarControl", "popupsize", obj, ["normal"]);

    obj = new nexacro.Style_border("1","solid","#9daeb9ff","");
    this._addCss("Calendar", "dayborder", obj, ["mouseover"]);
    this._addCss("CalendarControl", "dayborder", obj, ["mouseover"]);

    obj = new nexacro.Style_color("#000000");
    this._addCss("Calendar", "daycolor", obj, ["mouseover"]);
    this._addCss("CalendarControl", "daycolor", obj, ["mouseover"]);

    obj = new nexacro.Style_border("1","solid","#055d93ff","");
    this._addCss("Calendar", "dayborder", obj, ["selected"]);
    this._addCss("CalendarControl", "dayborder", obj, ["selected"]);

    obj = new nexacro.Style_value("URL('theme://images/btn_CalDrop.png')");
    this._addCss("Calendar>#dropbutton", "image", obj, ["normal"]);
    this._addCss("CalendarControl>#dropbutton", "image", obj, ["normal"]);

    obj = new nexacro.Style_align("right middle");
    this._addCss("Calendar>#dropbutton", "imagealign", obj, ["normal"]);
    this._addCss("CalendarControl>#dropbutton", "imagealign", obj, ["normal"]);
    this._addCss("Grid>#controlcalendar>#dropbutton", "imagealign", obj, ["normal"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar>#nextbutton", "imagealign", obj, ["normal"]);

    obj = new nexacro.Style_value("URL('theme://images/btn_CalDrop_D.png')");
    this._addCss("Calendar>#dropbutton", "image", obj, ["disabled"]);
    this._addCss("CalendarControl>#dropbutton", "image", obj, ["disabled"]);

    obj = new nexacro.Style_value("");
    this._addCss("Calendar>#calendaredit", "opaciyt", obj, ["normal", "mouseover", "focused", "disabled"]);
    this._addCss("CalendarControl>#calendaredit", "opaciyt", obj, ["normal", "mouseover", "focused", "selected"]);
    this._addCss("CalendarControl>#calendar0edit", "opaciyt", obj, ["disabled"]);

    obj = new nexacro.Style_value("URL('theme://images/btn_prev_N.png')");
    this._addCss("Calendar>#popupcalendar>#prevbutton", "image", obj, ["normal"]);
    this._addCss("CalendarControl>#popupcalendar>#prevbutton", "image", obj, ["normal"]);

    obj = new nexacro.Style_value("URL('theme://images/btn_prev_O.png')");
    this._addCss("Calendar>#popupcalendar>#prevbutton", "image", obj, ["mouseover"]);
    this._addCss("CalendarControl>#popupcalendar>#prevbutton", "image", obj, ["mouseover"]);

    obj = new nexacro.Style_value("URL('theme://images/btn_prev_P.png')");
    this._addCss("Calendar>#popupcalendar>#prevbutton", "image", obj, ["pushed"]);
    this._addCss("CalendarControl>#popupcalendar>#prevbutton", "image", obj, ["pushed"]);

    obj = new nexacro.Style_value("30");
    this._addCss("Calendar>#popupcalendar>#prevbutton", "opacity", obj, ["disabled"]);
    this._addCss("Calendar>#popupcalendar>#nextbutton", "opacity", obj, ["disabled"]);
    this._addCss("CalendarControl>#popupcalendar>#prevbutton", "opacity", obj, ["disabled"]);
    this._addCss("CalendarControl>#popupcalendar>#nextbutton", "opacity", obj, ["disabled"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar>#prevbutton", "opacity", obj, ["disabled"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar>#nextbutton", "opacity", obj, ["disabled"]);

    obj = new nexacro.Style_value("URL('theme://images/btn_next_N.png')");
    this._addCss("Calendar>#popupcalendar>#nextbutton", "image", obj, ["normal"]);
    this._addCss("CalendarControl>#popupcalendar>#nextbutton", "image", obj, ["normal"]);

    obj = new nexacro.Style_value("URL('theme://images/btn_next_O.png')");
    this._addCss("Calendar>#popupcalendar>#nextbutton", "image", obj, ["mouseover"]);
    this._addCss("CalendarControl>#popupcalendar>#nextbutton", "image", obj, ["mouseover"]);

    obj = new nexacro.Style_value("URL('theme://images/btn_next_P.png')");
    this._addCss("Calendar>#popupcalendar>#nextbutton", "image", obj, ["pushed"]);
    this._addCss("CalendarControl>#popupcalendar>#nextbutton", "image", obj, ["pushed"]);

    obj = new nexacro.Style_value("");
    this._addCss("Calendar>#popupcalendar>#yearspin", "buttonalign", obj, ["normal", "mouseover", "focused"]);
    this._addCss("Calendar>#popupcalendar>#monthspin", "buttonalign", obj, ["normal", "mouseover", "focused"]);
    this._addCss("CalendarControl>#popupcalendar>#yearspin", "buttonalign", obj, ["normal", "mouseover", "focused"]);
    this._addCss("CalendarControl>#popupcalendar>#monthspin", "buttonalign", obj, ["normal", "mouseover", "focused"]);

    obj = new nexacro.Style_value("8");
    this._addCss("Calendar>#popupcalendar>#yearspin", "buttonsize", obj, ["normal", "mouseover", "focused"]);
    this._addCss("Calendar>#popupcalendar>#monthspin", "buttonsize", obj, ["normal", "mouseover", "focused"]);
    this._addCss("CalendarControl>#popupcalendar>#yearspin", "buttonsize", obj, ["normal", "mouseover", "focused"]);
    this._addCss("CalendarControl>#popupcalendar>#monthspin", "buttonsize", obj, ["normal", "mouseover", "focused"]);

    obj = new nexacro.Style_color("#505050");
    this._addCss("Calendar>#popupcalendar>#yearspin", "color", obj, ["normal", "mouseover", "focused"]);
    this._addCss("Calendar>#popupcalendar>#monthspin", "color", obj, ["normal", "mouseover", "focused"]);
    this._addCss("Calendar>#popupcalendar>#monthspin>#spinedit", "color", obj, ["normal"]);
    this._addCss("CalendarControl>#popupcalendar>#yearspin", "color", obj, ["normal", "mouseover", "focused"]);
    this._addCss("CalendarControl>#popupcalendar>#monthspin", "color", obj, ["normal", "mouseover", "focused"]);
    this._addCss("CalendarControl>#popupcalendar>#monthspin>#spinedit", "color", obj, ["normal"]);

    obj = new nexacro.Style_font("bold antialias 9 Arial");
    this._addCss("Calendar>#popupcalendar>#yearspin", "font", obj, ["normal", "mouseover", "focused"]);
    this._addCss("Calendar>#popupcalendar>#monthspin", "font", obj, ["normal", "mouseover", "focused"]);
    this._addCss("Calendar>#popupcalendar>#monthspin>#spinedit", "font", obj, ["normal"]);
    this._addCss("CalendarControl>#popupcalendar>#yearspin", "font", obj, ["normal", "mouseover", "focused"]);
    this._addCss("CalendarControl>#popupcalendar>#monthspin", "font", obj, ["normal", "mouseover", "focused"]);
    this._addCss("CalendarControl>#popupcalendar>#monthspin>#spinedit", "font", obj, ["normal"]);

    obj = new nexacro.Style_value("URL('theme://images/btn_CalSpinUp.png')");
    this._addCss("Calendar>#popupcalendar>#yearspin>#spinupbutton", "image", obj, ["normal"]);
    this._addCss("Calendar>#popupcalendar>#monthspin>#spinupbutton", "image", obj, ["normal"]);
    this._addCss("CalendarControl>#popupcalendar>#yearspin>#spinupbutton", "image", obj, ["normal"]);
    this._addCss("CalendarControl>#popupcalendar>#monthspin>#spinupbutton", "image", obj, ["normal"]);

    obj = new nexacro.Style_value("90");
    this._addCss("Calendar>#popupcalendar>#yearspin>#spinupbutton", "opacity", obj, ["mouseover"]);
    this._addCss("Calendar>#popupcalendar>#yearspin>#spindownbutton", "opacity", obj, ["mouseover"]);
    this._addCss("Calendar>#popupcalendar>#monthspin>#spinupbutton", "opacity", obj, ["mouseover"]);
    this._addCss("Calendar>#popupcalendar>#monthspin>#spindownbutton", "opacity", obj, ["mouseover"]);
    this._addCss("CalendarControl>#popupcalendar>#yearspin>#spinupbutton", "opacity", obj, ["mouseover"]);
    this._addCss("CalendarControl>#popupcalendar>#yearspin>#spindownbutton", "opacity", obj, ["mouseover"]);
    this._addCss("CalendarControl>#popupcalendar>#monthspin>#spinupbutton", "opacity", obj, ["mouseover"]);
    this._addCss("CalendarControl>#popupcalendar>#monthspin>#spindownbutton", "opacity", obj, ["mouseover"]);

    obj = new nexacro.Style_value("70");
    this._addCss("Calendar>#popupcalendar>#yearspin>#spinupbutton", "opacity", obj, ["pushed"]);
    this._addCss("Calendar>#popupcalendar>#yearspin>#spindownbutton", "opacity", obj, ["pushed"]);
    this._addCss("Calendar>#popupcalendar>#monthspin>#spinupbutton", "opacity", obj, ["pushed"]);
    this._addCss("Calendar>#popupcalendar>#monthspin>#spindownbutton", "opacity", obj, ["pushed"]);
    this._addCss("CalendarControl>#popupcalendar>#yearspin>#spinupbutton", "opacity", obj, ["pushed"]);
    this._addCss("CalendarControl>#popupcalendar>#yearspin>#spindownbutton", "opacity", obj, ["pushed"]);
    this._addCss("CalendarControl>#popupcalendar>#monthspin>#spinupbutton", "opacity", obj, ["pushed"]);
    this._addCss("CalendarControl>#popupcalendar>#monthspin>#spindownbutton", "opacity", obj, ["pushed"]);

    obj = new nexacro.Style_value("URL('theme://images/btn_CalSpinDown.png')");
    this._addCss("Calendar>#popupcalendar>#yearspin>#spindownbutton", "image", obj, ["normal"]);
    this._addCss("Calendar>#popupcalendar>#monthspin>#spindownbutton", "image", obj, ["normal"]);
    this._addCss("CalendarControl>#popupcalendar>#yearspin>#spindownbutton", "image", obj, ["normal"]);
    this._addCss("CalendarControl>#popupcalendar>#monthspin>#spindownbutton", "image", obj, ["normal"]);

    obj = new nexacro.Style_padding("0 -2 0 -1");
    this._addCss("Calendar>#popupcalendar>#monthspin", "padding", obj, ["normal", "mouseover", "focused"]);
    this._addCss("CalendarControl>#popupcalendar>#monthspin", "padding", obj, ["normal", "mouseover", "focused"]);

    obj = new nexacro.Style_border("1","solid","#9f8f71ff","","1","solid","#d5d5d5ff","","1","solid","#d5d5d5ff","","1","solid","#d5d5d5ff","");
    this._addCss("Tab", "border", obj, ["normal"]);
    this._addCss("TabControl", "border", obj, ["normal"]);

    obj = new nexacro.Style_value("1 solid #a8a8a2");
    this._addCss("Tab", "buttonborder", obj, ["normal"]);

    obj = new nexacro.Style_bordertype("round","3","3","true","true","false","false");
    this._addCss("Tab", "buttonbordertype", obj, ["normal"]);
    this._addCss("TabControl", "buttonbordertype", obj, ["normal"]);

    obj = new nexacro.Style_gradation("liner 0,0 #feffff 0,100 #e1e1df [60% #f2f2ef][70% #ecece9]");
    this._addCss("Tab", "buttongradation", obj, ["normal"]);
    this._addCss("TabControl", "buttongradation", obj, ["normal"]);

    obj = new nexacro.Style_padding("5 10 4 10");
    this._addCss("Tab", "buttonpadding", obj, ["normal", "selected", "focused"]);
    this._addCss("TabControl", "buttonpadding", obj, ["normal", "selected", "focused"]);

    obj = new nexacro.Style_color("#777777");
    this._addCss("Tab", "color", obj, ["normal"]);
    this._addCss("TabControl", "color", obj, ["normal"]);

    obj = new nexacro.Style_line("0","none","","");
    this._addCss("Tab", "focusborder", obj, ["normal"]);
    this._addCss("TabControl", "focusborder", obj, ["normal"]);

    obj = new nexacro.Style_value("");
    this._addCss("Tab", "showextrabutton", obj, ["normal"]);
    this._addCss("TabControl", "showextrabutton", obj, ["normal"]);

    obj = new nexacro.Style_value("1 solid #9f8f71");
    this._addCss("Tab", "buttonborder", obj, ["mouseover"]);

    obj = new nexacro.Style_background("#9f8f71ff","","","0","0","0","0","true");
    this._addCss("Tab", "buttonbackground", obj, ["selected", "focused"]);
    this._addCss("TabControl", "buttonbackground", obj, ["selected", "focused"]);

    obj = new nexacro.Style_value("1 solid #ffffff00");
    this._addCss("Tab", "buttonborder", obj, ["selected", "focused"]);

    obj = new nexacro.Style_color("#889caa");
    this._addCss("Tab", "color", obj, ["disabled"]);
    this._addCss("TabControl", "color", obj, ["disabled"]);

    obj = new nexacro.Style_background("#dfe4e8ff","","","0","0","0","0","true");
    this._addCss("Tab", "buttonbackground", obj, ["disabled"]);
    this._addCss("TabControl", "buttonbackground", obj, ["disabled"]);

    obj = new nexacro.Style_value("URL('theme://images/btn_extra.png')");
    this._addCss("Tab>#extrabutton", "image", obj, ["normal"]);
    this._addCss("TabControl>#extrabutton", "image", obj, ["normal"]);

    obj = new nexacro.Style_padding("2 0 0 0");
    this._addCss("Tab>#extrabutton", "padding", obj, ["normal"]);
    this._addCss("TabControl>#extrabutton", "padding", obj, ["normal"]);

    obj = new nexacro.Style_bordertype("round","2","2","true","false","true","false");
    this._addCss("Tab>#spinupbutton", "bordertype", obj, ["normal"]);
    this._addCss("TabControl>#spinupbutton", "bordertype", obj, ["normal"]);

    obj = new nexacro.Style_gradation("linear 0,0 #ffffff 0,100 #deded7");
    this._addCss("Tab>#spinupbutton", "gradation", obj, ["normal"]);
    this._addCss("Tab>#spindownbutton", "gradation", obj, ["normal"]);
    this._addCss("TabControl>#spinupbutton", "gradation", obj, ["normal"]);
    this._addCss("TabControl>#spindownbutton", "gradation", obj, ["normal"]);

    obj = new nexacro.Style_value("URL('theme://images/btn_tabspinup_N.png')");
    this._addCss("Tab>#spinupbutton", "image", obj, ["normal"]);
    this._addCss("TabControl>#spinupbutton", "image", obj, ["normal"]);

    obj = new nexacro.Style_gradation("linear 0,0 #ddddd6 0,100 #adada7");
    this._addCss("Tab>#spinupbutton", "gradation", obj, ["mouseover"]);
    this._addCss("Tab>#spindownbutton", "gradation", obj, ["mouseover"]);
    this._addCss("TabControl>#spinupbutton", "gradation", obj, ["mouseover"]);
    this._addCss("TabControl>#spindownbutton", "gradation", obj, ["mouseover"]);

    obj = new nexacro.Style_value("URL('theme://images/btn_tabspinup_O.png')");
    this._addCss("Tab>#spinupbutton", "image", obj, ["mouseover", "pushed"]);
    this._addCss("TabControl>#spinupbutton", "image", obj, ["mouseover", "pushed"]);

    obj = new nexacro.Style_background("#a8a8a2ff","","","0","0","0","0","true");
    this._addCss("Tab>#spinupbutton", "background", obj, ["pushed"]);
    this._addCss("Tab>#spindownbutton", "background", obj, ["pushed"]);
    this._addCss("TabControl>#spinupbutton", "background", obj, ["pushed"]);
    this._addCss("TabControl>#spindownbutton", "background", obj, ["pushed"]);

    obj = new nexacro.Style_bordertype("round","2","2","false","true","false","true");
    this._addCss("Tab>#spindownbutton", "bordertype", obj, ["normal"]);
    this._addCss("TabControl>#spindownbutton", "bordertype", obj, ["normal"]);

    obj = new nexacro.Style_value("URL('theme://images/btn_tabspindn_N.png')");
    this._addCss("Tab>#spindownbutton", "image", obj, ["normal"]);
    this._addCss("TabControl>#spindownbutton", "image", obj, ["normal"]);

    obj = new nexacro.Style_value("URL('theme://images/btn_tabspindn_O.png')");
    this._addCss("Tab>#spindownbutton", "image", obj, ["mouseover", "pushed"]);
    this._addCss("TabControl>#spindownbutton", "image", obj, ["mouseover", "pushed"]);

    obj = new nexacro.Style_value("1 solid #a8a8a2");
    this._addCss("TabControl", "buttonborder", obj, ["normal"]);

    obj = new nexacro.Style_value("1 solid #9f8f71");
    this._addCss("TabControl", "buttonborder", obj, ["mouseover"]);

    obj = new nexacro.Style_value("1 solid #ffffff00");
    this._addCss("TabControl", "buttonborder", obj, ["selected", "focused"]);

    obj = new nexacro.Style_border("1","solid","#3b67cfff","","1","solid","#ccd0d9ff","","1","solid","#ccd0d9ff","","1","solid","#ccd0d9ff","");
    this._addCss("Grid", "border", obj, ["normal"]);

    obj = new nexacro.Style_color("#646464");
    this._addCss("Grid", "color", obj, ["normal"]);

    obj = new nexacro.Style_border("");
    this._addCss("Grid", "line", obj, ["normal"]);

    obj = new nexacro.Style_value("");
    this._addCss("Grid", "linetype", obj, ["normal"]);

    obj = new nexacro.Style_border("");
    this._addCss("Grid", "selectline", obj, ["normal"]);
    this._addCss("Grid>#head", "selectline", obj, ["normal"]);
    this._addCss("Grid>#summ", "selectline", obj, ["normal"]);
    this._addCss("Grid>#summary", "selectline", obj, ["normal"]);

    obj = new nexacro.Style_value("");
    this._addCss("Grid", "selectlinetype", obj, ["normal"]);
    this._addCss("Grid>#head", "selectlinetype", obj, ["normal"]);
    this._addCss("Grid>#body", "selectlinetype", obj, ["normal", "disabled"]);
    this._addCss("Grid>#summ", "selectlinetype", obj, ["normal"]);
    this._addCss("Grid>#summary", "selectlinetype", obj, ["normal"]);

    obj = new nexacro.Style_value("theme://images/ico_WF_treeexpand.png");
    this._addCss("Grid", "treeopenbuttonimage", obj, ["normal"]);

    obj = new nexacro.Style_value("theme://images/ico_WF_treecollapse.png");
    this._addCss("Grid", "treeclosebuttonimage", obj, ["normal"]);

    obj = new nexacro.Style_value("theme://images/ico_WF_treeopen.png");
    this._addCss("Grid", "treecollapseimage", obj, ["normal"]);

    obj = new nexacro.Style_value("theme://images/ico_WF_treehide.png");
    this._addCss("Grid", "treeexpandimage", obj, ["normal"]);

    obj = new nexacro.Style_value("theme://images/ico_item.png");
    this._addCss("Grid", "treeitemimage", obj, ["normal"]);
    this._addCss("Grid.grd_LF_SubMenu", "treeitemimage", obj, ["normal"]);

    obj = new nexacro.Style_line("1","dotted","#666666ff","");
    this._addCss("Grid", "treelinetype", obj, ["normal"]);

    obj = new nexacro.Style_background("#e7eaf2ff","","","0","0","0","0","true");
    this._addCss("Grid>#head", "background", obj, ["normal"]);

    obj = new nexacro.Style_bordertype("normal","0","0","true","true","true","true");
    this._addCss("Grid>#head", "bordertype", obj, ["normal"]);
    this._addCss("Grid>#controlcalendar>#dropbutton", "bordertype", obj, ["normal"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar", "bordertype", obj, ["normal"]);

    obj = new nexacro.Style_align("center middle");
    this._addCss("Grid>#head", "cellalign", obj, ["normal"]);
    this._addCss("Grid>#body", "cellalign", obj, ["normal", "disabled"]);

    obj = new nexacro.Style_background("#e7eaf2ff","","","0","0","0","0","true");
    this._addCss("Grid>#head", "cellbackground", obj, ["normal"]);

    obj = new nexacro.Style_background("#f2f3f7ff","","","0","0","0","0","true");
    this._addCss("Grid>#head", "cellbackground2", obj, ["normal"]);

    obj = new nexacro.Style_color("#0b3ca8");
    this._addCss("Grid>#head", "cellcolor", obj, ["normal"]);

    obj = new nexacro.Style_color("#585a66");
    this._addCss("Grid>#head", "cellcolor2", obj, ["normal"]);

    obj = new nexacro.Style_font("9 Dotum");
    this._addCss("Grid>#head", "cellfont", obj, ["normal"]);
    this._addCss("Grid>#body", "cellfont", obj, ["normal", "disabled"]);
    this._addCss("Grid>#summ", "cellfont", obj, ["normal"]);
    this._addCss("Grid>#summary", "cellfont", obj, ["normal"]);
    this._addCss("Grid.grd_LF_SubMenu>#body", "cellfont", obj, ["normal"]);

    obj = new nexacro.Style_gradation("");
    this._addCss("Grid>#head", "cellgradation", obj, ["normal"]);
    this._addCss("Grid>#body", "cellgradation", obj, ["normal", "disabled"]);
    this._addCss("Grid>#summ", "cellgradation", obj, ["normal"]);
    this._addCss("Grid>#summary", "cellgradation", obj, ["normal"]);

    obj = new nexacro.Style_gradation("");
    this._addCss("Grid>#head", "cellgradation2", obj, ["normal"]);
    this._addCss("Grid>#body", "cellgradation2", obj, ["normal", "disabled"]);
    this._addCss("Grid>#summ", "cellgradation2", obj, ["normal"]);
    this._addCss("Grid>#summary", "cellgradation2", obj, ["normal"]);

    obj = new nexacro.Style_border("1","solid","#ccd1d7ff","");
    this._addCss("Grid>#head", "cellline", obj, ["normal"]);

    obj = new nexacro.Style_value("");
    this._addCss("Grid>#head", "celllinetype", obj, ["normal"]);
    this._addCss("Grid>#body", "celllinetype", obj, ["normal", "disabled"]);
    this._addCss("Grid>#summ", "celllinetype", obj, ["normal"]);
    this._addCss("Grid>#summary", "celllinetype", obj, ["normal"]);

    obj = new nexacro.Style_padding("");
    this._addCss("Grid>#head", "cellpadding", obj, ["normal"]);
    this._addCss("Grid>#summ", "cellpadding", obj, ["normal"]);
    this._addCss("Grid>#summary", "cellpadding", obj, ["normal"]);

    obj = new nexacro.Style_value("");
    this._addCss("Grid>#head", "cellheight", obj, ["normal"]);

    obj = new nexacro.Style_value("");
    this._addCss("Grid>#head", "selectbackground", obj, ["normal"]);
    this._addCss("Grid>#summ", "selectbackground", obj, ["normal"]);
    this._addCss("Grid>#summary", "selectbackground", obj, ["normal"]);

    obj = new nexacro.Style_border("");
    this._addCss("Grid>#head", "selectborder", obj, ["normal"]);
    this._addCss("Grid>#summ", "selectborder", obj, ["normal"]);
    this._addCss("Grid>#summary", "selectborder", obj, ["normal"]);

    obj = new nexacro.Style_color("");
    this._addCss("Grid>#head", "selectcolor", obj, ["normal"]);
    this._addCss("Grid>#summ", "selectcolor", obj, ["normal"]);
    this._addCss("Grid>#summary", "selectcolor", obj, ["normal"]);

    obj = new nexacro.Style_font("");
    this._addCss("Grid>#head", "selectfont", obj, ["normal"]);
    this._addCss("Grid>#summ", "selectfont", obj, ["normal"]);
    this._addCss("Grid>#summary", "selectfont", obj, ["normal"]);

    obj = new nexacro.Style_gradation("");
    this._addCss("Grid>#head", "selectgradation", obj, ["normal"]);
    this._addCss("Grid>#body", "selectgradation", obj, ["normal", "disabled"]);
    this._addCss("Grid>#summ", "selectgradation", obj, ["normal"]);
    this._addCss("Grid>#summary", "selectgradation", obj, ["normal"]);

    obj = new nexacro.Style_font("bold 9 Dotum");
    this._addCss("Grid>#head", "cellfont", obj, ["focused", "selected", "mouseover"]);

    obj = new nexacro.Style_font("underline bold 9 Dotum");
    this._addCss("Grid>#head", "selectfont", obj, ["focused", "selected", "mouseover"]);

    obj = new nexacro.Style_background("#ffffffff","","","0","0","0","0","true");
    this._addCss("Grid>#body", "cellbackground", obj, ["normal", "disabled"]);
    this._addCss("Grid.grd_LF_SubMenu>#body", "cellbackground", obj, ["normal", "disabled"]);

    obj = new nexacro.Style_background("","","","0","0","0","0","true");
    this._addCss("Grid>#body", "cellbackground2", obj, ["normal", "disabled"]);

    obj = new nexacro.Style_color("#555555");
    this._addCss("Grid>#body", "cellcolor", obj, ["normal", "disabled"]);

    obj = new nexacro.Style_color("");
    this._addCss("Grid>#body", "cellcolor2", obj, ["normal", "disabled"]);
    this._addCss("Grid>#summ", "cellcolor2", obj, ["normal"]);
    this._addCss("Grid>#summary", "cellcolor2", obj, ["normal"]);

    obj = new nexacro.Style_border("0","none","","","1","solid","#ececeeff","","1","solid","#ececeeff","","0","none","","");
    this._addCss("Grid>#body", "cellline", obj, ["normal", "disabled"]);

    obj = new nexacro.Style_padding("0 5 0 5");
    this._addCss("Grid>#body", "cellpadding", obj, ["normal", "disabled"]);

    obj = new nexacro.Style_value("#dce6fc");
    this._addCss("Grid>#body", "selectbackground", obj, ["normal", "disabled"]);

    obj = new nexacro.Style_border("0","none","","");
    this._addCss("Grid>#body", "selectborder", obj, ["normal", "disabled"]);
    this._addCss("Grid.grd_LF_SubMenu>#body", "selectborder", obj, ["normal"]);

    obj = new nexacro.Style_color("#575b64");
    this._addCss("Grid>#body", "selectcolor", obj, ["normal", "disabled"]);

    obj = new nexacro.Style_font("9 Dotum");
    this._addCss("Grid>#body", "selectfont", obj, ["normal", "disabled"]);

    obj = new nexacro.Style_border("1","solid","#cdd7ebff","");
    this._addCss("Grid>#body", "selectline", obj, ["normal", "disabled"]);

    obj = new nexacro.Style_background("#f6f7faff","","","0","0","0","0","true");
    this._addCss("Grid>#body", "cellbackground", obj, ["mouseover"]);

    obj = new nexacro.Style_background("#f6f7faff","","","0","0","0","0","true");
    this._addCss("Grid>#body", "cellbackground2", obj, ["mouseover"]);

    obj = new nexacro.Style_color("#5f5f60");
    this._addCss("Grid>#body", "cellcolor", obj, ["mouseover"]);

    obj = new nexacro.Style_background("#ffe9cbff","","","0","0","0","0","true");
    this._addCss("Grid>#summ", "background", obj, ["normal"]);
    this._addCss("Grid>#summary", "background", obj, ["normal"]);

    obj = new nexacro.Style_border("");
    this._addCss("Grid>#summ", "border", obj, ["normal"]);
    this._addCss("Grid>#summary", "border", obj, ["normal"]);

    obj = new nexacro.Style_align("");
    this._addCss("Grid>#summ", "cellalign", obj, ["normal"]);
    this._addCss("Grid>#summary", "cellalign", obj, ["normal"]);

    obj = new nexacro.Style_background("#f9f2e9ff","","","0","0","0","0","true");
    this._addCss("Grid>#summ", "cellbackground", obj, ["normal"]);

    obj = new nexacro.Style_background("#f9f2e9ff","","","0","0","0","0","true");
    this._addCss("Grid>#summ", "cellbackground2", obj, ["normal"]);

    obj = new nexacro.Style_color("#654725");
    this._addCss("Grid>#summ", "cellcolor", obj, ["normal"]);

    obj = new nexacro.Style_border("1","solid","#e6e0d9ff","","0","none","","","1","solid","#e6e0d9ff","","0","none","","");
    this._addCss("Grid>#summ", "cellline", obj, ["normal"]);

    obj = new nexacro.Style_background("","","","0","0","0","0","true");
    this._addCss("Grid>#summary", "cellbackground", obj, ["normal"]);

    obj = new nexacro.Style_background("","","","0","0","0","0","true");
    this._addCss("Grid>#summary", "cellbackground2", obj, ["normal"]);

    obj = new nexacro.Style_color("#61401d");
    this._addCss("Grid>#summary", "cellcolor", obj, ["normal"]);

    obj = new nexacro.Style_border("1","solid","#ecd8bdff","","0","none","","","1","solid","#ecd8bdff","","0","none","","");
    this._addCss("Grid>#summary", "cellline", obj, ["normal"]);

    obj = new nexacro.Style_padding("0 3 0 3");
    this._addCss("Grid>#controledit", "padding", obj, ["normal"]);

    obj = new nexacro.Style_gradation("linear 0,0 #ffffff 0,100 #f3f3f3");
    this._addCss("Grid>#controlbutton", "gradation", obj, ["normal"]);

    obj = new nexacro.Style_border("1","solid","#5d72aeff","");
    this._addCss("Grid>#controlbutton", "border", obj, ["normal"]);

    obj = new nexacro.Style_bordertype("round","2","2","true","true","true","true");
    this._addCss("Grid>#controlbutton", "bordertype", obj, ["normal"]);
    this._addCss("Button.btn_WF_CRUD", "bordertype", obj, ["normal", "mouseover", "pushed", "selected", "focused"]);

    obj = new nexacro.Style_color("#112e6f");
    this._addCss("Grid>#controlbutton", "color", obj, ["normal"]);

    obj = new nexacro.Style_gradation("linear 0,0 #ffffff 0,100 #e7e7e7");
    this._addCss("Grid>#controlbutton", "gradation", obj, ["mouseover"]);

    obj = new nexacro.Style_border("1","solid","#0066daff","");
    this._addCss("Grid>#controlbutton", "border", obj, ["mouseover", "pushed", "selected"]);

    obj = new nexacro.Style_gradation("linear 0,0 #e2e2e2 0,100 #fefefe");
    this._addCss("Grid>#controlbutton", "gradation", obj, ["pushed"]);

    obj = new nexacro.Style_gradation("linear 0,0 #ffffff 0,100 #e3effc");
    this._addCss("Grid>#controlbutton", "gradation", obj, ["selected", "focused"]);

    obj = new nexacro.Style_border("1","solid","#003b7fff","");
    this._addCss("Grid>#controlbutton", "border", obj, ["focused"]);

    obj = new nexacro.Style_gradation("linear 0,0 #f0f0f0 0,100 #e4e4e4");
    this._addCss("Grid>#controlbutton", "gradation", obj, ["disabled"]);

    obj = new nexacro.Style_border("1","solid","#c4c4c4ff","");
    this._addCss("Grid>#controlbutton", "border", obj, ["disabled"]);

    obj = new nexacro.Style_color("#90949e");
    this._addCss("Grid>#controlbutton", "color", obj, ["disabled"]);

    obj = new nexacro.Style_background("","theme://images/chk_bg_N.png","","0","0","0","0","true");
    this._addCss("Grid>#controlcheckbox", "buttonbackground", obj, ["normal"]);

    obj = new nexacro.Style_value("0 none #808080");
    this._addCss("Grid>#controlcheckbox", "buttonborder", obj, ["normal", "disabled"]);

    obj = new nexacro.Style_gradation("");
    this._addCss("Grid>#controlcheckbox", "buttongradation", obj, ["normal"]);

    obj = new nexacro.Style_value("theme://images/chk_ico_O.png");
    this._addCss("Grid>#controlcheckbox", "buttonimage", obj, ["normal"]);

    obj = new nexacro.Style_value("14");
    this._addCss("Grid>#controlcheckbox", "buttonsize", obj, ["normal"]);

    obj = new nexacro.Style_color("#6e6e6e");
    this._addCss("Grid>#controlcheckbox", "color", obj, ["normal"]);

    obj = new nexacro.Style_padding("0 0 0 2");
    this._addCss("Grid>#controlcheckbox", "textpadding", obj, ["normal"]);

    obj = new nexacro.Style_background("","theme://images/chk_bg_O.png","","0","0","0","0","true");
    this._addCss("Grid>#controlcheckbox", "buttonbackground", obj, ["mouseover", "selected", "focused", "pushed"]);

    obj = new nexacro.Style_background("","theme://images/chk_bg_D.png","","0","0","0","0","true");
    this._addCss("Grid>#controlcheckbox", "buttonbackground", obj, ["disabled"]);

    obj = new nexacro.Style_value("theme://images/chk_ico_D.png");
    this._addCss("Grid>#controlcheckbox", "buttonimage", obj, ["disabled"]);

    obj = new nexacro.Style_background("#eceff4ff","","","0","0","0","0","true");
    this._addCss("Grid>#controlcheckbox", "background", obj, ["readonly"]);

    obj = new nexacro.Style_border("1","solid","#c2c8d5ff","");
    this._addCss("Grid>#controlcheckbox", "border", obj, ["readonly"]);

    obj = new nexacro.Style_color("#555c6a");
    this._addCss("Grid>#controlcheckbox", "color", obj, ["readonly"]);

    obj = new nexacro.Style_value("theme://frame/img_LF_search.png");
    this._addCss("Grid>#controlexpand", "image", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);

    obj = new nexacro.Style_value("23");
    this._addCss("Grid>#controlcalendar", "buttonsize", obj, ["normal"]);

    obj = new nexacro.Style_color("#666666");
    this._addCss("Grid>#controlcalendar", "daycolor", obj, ["normal"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar", "daycolor", obj, ["normal"]);

    obj = new nexacro.Style_border("0","none","","");
    this._addCss("Grid>#controlcalendar", "dayborder", obj, ["normal"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar", "dayborder", obj, ["normal"]);

    obj = new nexacro.Style_bordertype("normal","0","0","true","true","true","true");
    this._addCss("Grid>#controlcalendar", "daybordertype", obj, ["normal"]);

    obj = new nexacro.Style_font("9 Dotum");
    this._addCss("Grid>#controlcalendar", "dayfont", obj, ["normal"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar", "dayfont", obj, ["normal"]);

    obj = new nexacro.Style_border("1","solid","#bdc6d6ff","");
    this._addCss("Grid>#controlcalendar", "popupborder", obj, ["normal"]);

    obj = new nexacro.Style_value("30 22");
    this._addCss("Grid>#controlcalendar", "daysize", obj, ["normal"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar", "daysize", obj, ["normal"]);

    obj = new nexacro.Style_value("212 186");
    this._addCss("Grid>#controlcalendar", "popupsize", obj, ["normal"]);

    obj = new nexacro.Style_value("true");
    this._addCss("Grid>#controlcalendar", "usetrailingday", obj, ["normal"]);

    obj = new nexacro.Style_color("#c7c7c7");
    this._addCss("Grid>#controlcalendar", "trailingdaycolor", obj, ["normal"]);

    obj = new nexacro.Style_background("","theme://images/bg_Cal_over.png","","0","0","0","0","true");
    this._addCss("Grid>#controlcalendar", "daybackground", obj, ["mouseover", "pushed"]);

    obj = new nexacro.Style_background("","theme://images/bg_Cal_click.png","","0","0","0","0","true");
    this._addCss("Grid>#controlcalendar", "daybackground", obj, ["selected"]);

    obj = new nexacro.Style_color("#c7c7c7");
    this._addCss("Grid>#controlcalendar", "daycolor", obj, ["disabled"]);

    obj = new nexacro.Style_padding("0 0 0 5");
    this._addCss("Grid>#controlcalendar>#calendaredit", "padding", obj, ["normal"]);
    this._addCss("Static.sta_WF_msg", "padding", obj, ["normal"]);
    this._addCss("Static.sta_WF_ReftMsg", "padding", obj, ["normal"]);

    obj = new nexacro.Style_background("#ebedf0ff","","","0","0","0","0","true");
    this._addCss("Grid>#controlcalendar>#dropbutton", "background", obj, ["normal"]);

    obj = new nexacro.Style_value("theme://images/btn_WFDA_calendar_N.png");
    this._addCss("Grid>#controlcalendar>#dropbutton", "image", obj, ["normal"]);

    obj = new nexacro.Style_value("theme://images/btn_WFDA_calendar_O.png");
    this._addCss("Grid>#controlcalendar>#dropbutton", "image", obj, ["mouseover", "selected", "focused"]);

    obj = new nexacro.Style_value("theme://images/btn_WFDA_calendar_P.png");
    this._addCss("Grid>#controlcalendar>#dropbutton", "image", obj, ["pushed"]);

    obj = new nexacro.Style_value("theme://images/btn_WFDA_calendar_D.png");
    this._addCss("Grid>#controlcalendar>#dropbutton", "image", obj, ["disabled"]);

    obj = new nexacro.Style_border("1","solid","#bdc6d6ff","");
    this._addCss("Grid>#controlcalendar>#popupcalendar", "border", obj, ["normal"]);

    obj = new nexacro.Style_color("#666666");
    this._addCss("Grid>#controlcalendar>#popupcalendar", "color", obj, ["normal"]);
    this._addCss("Grid.grd_LF_SubMenu", "color", obj, ["normal"]);

    obj = new nexacro.Style_padding("30 0 0 0");
    this._addCss("Grid>#controlcalendar>#popupcalendar", "ncpadding", obj, ["normal"]);

    obj = new nexacro.Style_value("30");
    this._addCss("Grid>#controlcalendar>#popupcalendar", "headerheight", obj, ["normal"]);

    obj = new nexacro.Style_color("#ffffff");
    this._addCss("Grid>#controlcalendar>#popupcalendar", "headercolor", obj, ["normal"]);

    obj = new nexacro.Style_background("#6a7186ff","","","0","0","0","0","true");
    this._addCss("Grid>#controlcalendar>#popupcalendar", "headerbackground", obj, ["normal"]);

    obj = new nexacro.Style_font("bold 10 Dotum");
    this._addCss("Grid>#controlcalendar>#popupcalendar", "headerfont", obj, ["normal"]);

    obj = new nexacro.Style_color("#ffffff");
    this._addCss("Grid>#controlcalendar>#popupcalendar", "weekcolor", obj, ["normal"]);

    obj = new nexacro.Style_background("#88a7e2ff","","","0","0","0","0","true");
    this._addCss("Grid>#controlcalendar>#popupcalendar", "weekbackground", obj, ["normal"]);

    obj = new nexacro.Style_font("9 Dotum");
    this._addCss("Grid>#controlcalendar>#popupcalendar", "weekfont", obj, ["normal"]);

    obj = new nexacro.Style_value("");
    this._addCss("Grid>#controlcalendar>#popupcalendar", "weekformat", obj, ["normal"]);

    obj = new nexacro.Style_background("#5a6a98ff","","","0","0","0","0","true");
    this._addCss("Grid>#controlcalendar>#popupcalendar", "todaybackground", obj, ["normal"]);

    obj = new nexacro.Style_border("0","none","","");
    this._addCss("Grid>#controlcalendar>#popupcalendar", "todayborder", obj, ["normal"]);

    obj = new nexacro.Style_bordertype("normal","0","0","true","true","true","true");
    this._addCss("Grid>#controlcalendar>#popupcalendar", "todaybordertype", obj, ["normal"]);

    obj = new nexacro.Style_font("9 Dotum");
    this._addCss("Grid>#controlcalendar>#popupcalendar", "todayfont", obj, ["normal"]);

    obj = new nexacro.Style_border("0","none","","");
    this._addCss("Grid>#controlcalendar>#popupcalendar", "saturdayborder", obj, ["normal"]);

    obj = new nexacro.Style_bordertype("normal","0","0","true","true","true","true");
    this._addCss("Grid>#controlcalendar>#popupcalendar", "saturdaybordertype", obj, ["normal"]);

    obj = new nexacro.Style_font("9 Dotum");
    this._addCss("Grid>#controlcalendar>#popupcalendar", "saturdayfont", obj, ["normal"]);

    obj = new nexacro.Style_color("#666666");
    this._addCss("Grid>#controlcalendar>#popupcalendar", "saturdaycolor", obj, ["normal"]);

    obj = new nexacro.Style_border("0","none","","");
    this._addCss("Grid>#controlcalendar>#popupcalendar", "sundayborder", obj, ["normal"]);

    obj = new nexacro.Style_bordertype("normal","0","0","true","true","true","true");
    this._addCss("Grid>#controlcalendar>#popupcalendar", "sundaybordertype", obj, ["normal"]);

    obj = new nexacro.Style_color("#f74444");
    this._addCss("Grid>#controlcalendar>#popupcalendar", "sundaycolor", obj, ["normal"]);

    obj = new nexacro.Style_font("9 Dotum");
    this._addCss("Grid>#controlcalendar>#popupcalendar", "sundayfont", obj, ["normal"]);

    obj = new nexacro.Style_background("","theme://images/bg_Cal_over.png","","0","0","0","0","true");
    this._addCss("Grid>#controlcalendar>#popupcalendar", "saturdaybackground", obj, ["mouseover", "focused"]);

    obj = new nexacro.Style_background("","theme://images/bg_Cal_over.png","","0","0","0","0","true");
    this._addCss("Grid>#controlcalendar>#popupcalendar", "sundaybackground", obj, ["mouseover", "focused"]);

    obj = new nexacro.Style_background("","theme://images/bg_Cal_click.png","","0","0","0","0","true");
    this._addCss("Grid>#controlcalendar>#popupcalendar", "saturdaybackground", obj, ["selected"]);

    obj = new nexacro.Style_background("","theme://images/bg_Cal_click.png","","0","0","0","0","true");
    this._addCss("Grid>#controlcalendar>#popupcalendar", "sundaybackground", obj, ["selected"]);

    obj = new nexacro.Style_background("#6a7186ff","","","0","0","0","0","true");
    this._addCss("Grid>#controlcalendar>#popupcalendar>#prevbutton", "background", obj, ["normal"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar>#nextbutton", "background", obj, ["normal"]);

    obj = new nexacro.Style_value("theme://images/btn_CalPrev_N.png");
    this._addCss("Grid>#controlcalendar>#popupcalendar>#prevbutton", "image", obj, ["normal"]);

    obj = new nexacro.Style_align("left middle");
    this._addCss("Grid>#controlcalendar>#popupcalendar>#prevbutton", "imagealign", obj, ["normal"]);

    obj = new nexacro.Style_value("theme://images/btn_CalPrev_O.png");
    this._addCss("Grid>#controlcalendar>#popupcalendar>#prevbutton", "image", obj, ["mouseover"]);

    obj = new nexacro.Style_value("theme://images/btn_CalPrev_P.png");
    this._addCss("Grid>#controlcalendar>#popupcalendar>#prevbutton", "image", obj, ["pushed"]);

    obj = new nexacro.Style_value("theme://images/btn_CalPrev_F.png");
    this._addCss("Grid>#controlcalendar>#popupcalendar>#prevbutton", "image", obj, ["focused"]);

    obj = new nexacro.Style_value("theme://images/btn_CalNext_N.png");
    this._addCss("Grid>#controlcalendar>#popupcalendar>#nextbutton", "image", obj, ["normal"]);

    obj = new nexacro.Style_value("theme://images/btn_CalNext_O.png");
    this._addCss("Grid>#controlcalendar>#popupcalendar>#nextbutton", "image", obj, ["mouseover"]);

    obj = new nexacro.Style_value("theme://images/btn_CalNext_P.png");
    this._addCss("Grid>#controlcalendar>#popupcalendar>#nextbutton", "image", obj, ["pushed"]);

    obj = new nexacro.Style_value("theme://images/btn_CalNext_F.png");
    this._addCss("Grid>#controlcalendar>#popupcalendar>#nextbutton", "image", obj, ["focused"]);

    obj = new nexacro.Style_border("1","solid","#e1dedbff","","0","none","","","0","none","","","0","none","","");
    this._addCss("Grid.grd_LF_SubMenu", "border", obj, ["normal"]);

    obj = new nexacro.Style_line("0","none","","");
    this._addCss("Grid.grd_LF_SubMenu", "treelinetype", obj, ["normal"]);

    obj = new nexacro.Style_background("#ffffffff","","","0","0","0","0","true");
    this._addCss("Grid.grd_LF_SubMenu>#body", "cellbackground2", obj, ["normal"]);

    obj = new nexacro.Style_border("0","none","","");
    this._addCss("Grid.grd_LF_SubMenu>#body", "cellline", obj, ["normal"]);

    obj = new nexacro.Style_value("normal");
    this._addCss("Grid.grd_LF_SubMenu>#body", "celllinetype", obj, ["normal"]);

    obj = new nexacro.Style_color("#666666");
    this._addCss("Grid.grd_LF_SubMenu>#body", "cellcolor", obj, ["normal"]);

    obj = new nexacro.Style_padding("0 0 0 0");
    this._addCss("Grid.grd_LF_SubMenu>#body", "cellpadding", obj, ["normal"]);

    obj = new nexacro.Style_value("#ffffff");
    this._addCss("Grid.grd_LF_SubMenu>#body", "selectbackground", obj, ["normal"]);

    obj = new nexacro.Style_color("#092d97");
    this._addCss("Grid.grd_LF_SubMenu>#body", "selectcolor", obj, ["normal"]);

    obj = new nexacro.Style_font("bold 9 Dotum underline");
    this._addCss("Grid.grd_LF_SubMenu>#body", "selectfont", obj, ["normal"]);

    obj = new nexacro.Style_border("0","none","","");
    this._addCss("Grid.grd_LF_SubMenu>#body", "selectline", obj, ["normal"]);

    obj = new nexacro.Style_background("#eff1faff","","","0","0","0","0","true");
    this._addCss("Grid.grd_LF_SubMenu>#body", "cellbackground", obj, ["mouseover", "pushed"]);

    obj = new nexacro.Style_color("#092d97");
    this._addCss("Grid.grd_LF_SubMenu>#body", "cellcolor", obj, ["mouseover", "pushed"]);

    obj = new nexacro.Style_background("#edeffaff","","","0","0","0","0","true");
    this._addCss("Grid.grd_LF_SubMenu>#body", "cellbackground", obj, ["pushed"]);

    obj = new nexacro.Style_color("#b2b2b2");
    this._addCss("Grid.grd_LF_SubMenu>#body", "cellcolor", obj, ["disabled"]);

    obj = new nexacro.Style_border("1","solid","#cdcdcdff","");
    this._addCss("DivControl", "border", obj, ["normal"]);
    this._addCss("PopupDiv", "border", obj, ["normal"]);

    obj = new nexacro.Style_value("1px solid #868686ff");
    this._addCss("Step", "buttonborder", obj, ["normal"]);

    obj = new nexacro.Style_bordertype("round","7","7","true","true","true","true");
    this._addCss("Step", "buttonbordertype", obj, ["normal"]);
    this._addCss("StepControl", "buttonbordertype", obj, ["normal"]);

    obj = new nexacro.Style_gradation("linear 0,0 #fdfdfd 0,100 #f0f0f0");
    this._addCss("Step", "buttongradation", obj, ["normal"]);
    this._addCss("StepControl", "buttongradation", obj, ["normal"]);

    obj = new nexacro.Style_value("theme://images/btn_radio_N.png");
    this._addCss("Step", "buttonimage", obj, ["normal"]);
    this._addCss("StepControl", "buttonimage", obj, ["normal"]);

    obj = new nexacro.Style_padding("0 5 0 5");
    this._addCss("Step", "buttonpadding", obj, ["normal"]);
    this._addCss("StepControl", "buttonpadding", obj, ["normal"]);

    obj = new nexacro.Style_color("#3f3f3f");
    this._addCss("Step", "color", obj, ["normal"]);
    this._addCss("StepControl", "color", obj, ["normal"]);

    obj = new nexacro.Style_font("bold");
    this._addCss("Step", "font", obj, ["normal"]);
    this._addCss("StepControl", "font", obj, ["normal"]);

    obj = new nexacro.Style_value("1px solid #868686ff");
    this._addCss("StepControl", "buttonborder", obj, ["normal"]);

    obj = new nexacro.Style_bordertype("round","3","3","true","true","true","true");
    this._addCss("FileUpload", "buttonbordertype", obj, ["normal"]);
    this._addCss("FileUploadControl", "buttonbordertype", obj, ["normal"]);

    obj = new nexacro.Style_color("#333333");
    this._addCss("FileUpload", "buttoncolor", obj, ["normal"]);
    this._addCss("FileUploadControl", "buttoncolor", obj, ["normal"]);

    obj = new nexacro.Style_font("");
    this._addCss("FileUpload", "buttonfont", obj, ["normal"]);
    this._addCss("FileUploadControl", "buttonfont", obj, ["normal"]);

    obj = new nexacro.Style_gradation("linear 0,0 #fefefe 0,100 #ecece5");
    this._addCss("FileUpload", "buttongradation", obj, ["normal"]);
    this._addCss("FileUploadControl", "buttongradation", obj, ["normal"]);

    obj = new nexacro.Style_padding("0 0 0 0");
    this._addCss("FileUpload", "buttonpadding", obj, ["normal"]);
    this._addCss("FileUploadControl", "buttonpadding", obj, ["normal"]);

    obj = new nexacro.Style_value("70");
    this._addCss("FileUpload", "buttonsize", obj, ["normal"]);
    this._addCss("FileUploadControl", "buttonsize", obj, ["normal"]);

    obj = new nexacro.Style_value("File add");
    this._addCss("FileUpload", "buttontext", obj, ["normal"]);
    this._addCss("FileUploadControl", "buttontext", obj, ["normal"]);

    obj = new nexacro.Style_color("#8a8c9dff");
    this._addCss("FileUpload", "color", obj, ["normal"]);
    this._addCss("FileUploadControl", "color", obj, ["normal"]);

    obj = new nexacro.Style_background("#ffffffff","","","0","0","0","0","true");
    this._addCss("FileUpload", "editbackground", obj, ["normal"]);
    this._addCss("FileUploadControl", "editbackground", obj, ["normal"]);

    obj = new nexacro.Style_border("1","solid","#a6a6a9ff","","1","solid","#d5d5d5ff","","1","solid","#d5d5d5ff","","1","solid","#a6a6a9ff","");
    this._addCss("FileUpload", "editborder", obj, ["normal"]);
    this._addCss("FileUploadControl", "editborder", obj, ["normal"]);

    obj = new nexacro.Style_bordertype("normal","0","0","true","true","true","true");
    this._addCss("FileUpload", "editbordertype", obj, ["normal"]);
    this._addCss("FileUploadControl", "editbordertype", obj, ["normal"]);

    obj = new nexacro.Style_color("#333333");
    this._addCss("FileUpload", "editcolor", obj, ["normal"]);
    this._addCss("FileUploadControl", "editcolor", obj, ["normal"]);

    obj = new nexacro.Style_font("");
    this._addCss("FileUpload", "editfont", obj, ["normal"]);
    this._addCss("FileUploadControl", "editfont", obj, ["normal"]);

    obj = new nexacro.Style_gradation("");
    this._addCss("FileUpload", "editgradation", obj, ["normal"]);
    this._addCss("FileUploadControl", "editgradation", obj, ["normal"]);

    obj = new nexacro.Style_padding("0 5 0 5");
    this._addCss("FileUpload", "editpadding", obj, ["normal"]);
    this._addCss("FileUploadControl", "editpadding", obj, ["normal"]);

    obj = new nexacro.Style_font("9 bold Dotum");
    this._addCss("FileUpload", "font", obj, ["normal"]);
    this._addCss("FileUploadControl", "font", obj, ["normal"]);

    obj = new nexacro.Style_gradation("linear 0,0 #ecece5 0,100 #fefefe");
    this._addCss("FileUpload", "buttongradation", obj, ["pushed"]);
    this._addCss("FileUploadControl", "buttongradation", obj, ["pushed"]);

    obj = new nexacro.Style_blur("");
    this._addCss("FileDownload", "blur", obj, ["normal"]);
    this._addCss("FileDownloadControl", "blur", obj, ["normal"]);

    obj = new nexacro.Style_gradation("linear 0,0 #fefefe 0,100 #ecece5");
    this._addCss("FileDownload", "gradation", obj, ["normal"]);
    this._addCss("FileDownloadControl", "gradation", obj, ["normal"]);

    obj = new nexacro.Style_value("");
    this._addCss("FileDownload", "linespace", obj, ["normal"]);
    this._addCss("FileDownloadControl", "linespace", obj, ["normal"]);

    obj = new nexacro.Style_gradation("linear 0,0 #ecece5 0,100 #fefefe");
    this._addCss("FileDownload", "gradation", obj, ["pushed"]);
    this._addCss("FileDownloadControl", "gradation", obj, ["pushed"]);

    obj = new nexacro.Style_background("#f2f3f7ff","","","0","0","0","0","true");
    this._addCss("Div.div_WF_searchBg", "background", obj, ["normal"]);

    obj = new nexacro.Style_border("1","solid","#e0e0e0ff","");
    this._addCss("Div.div_WF_searchBg", "border", obj, ["normal"]);

    obj = new nexacro.Style_background("","theme://images/ico_bullet.gif","","0","0","0","50","true");
    this._addCss("Static.sta_WF_schTitle", "background", obj, ["normal"]);

    obj = new nexacro.Style_color("#000000");
    this._addCss("Static.sta_WF_schTitle", "color", obj, ["normal"]);

    obj = new nexacro.Style_font("9 Gulim");
    this._addCss("Static.sta_WF_schTitle", "font", obj, ["normal"]);

    obj = new nexacro.Style_padding("0 0 0 9");
    this._addCss("Static.sta_WF_schTitle", "padding", obj, ["normal"]);

    obj = new nexacro.Style_color("#415079");
    this._addCss("Static.sta_WF_title", "color", obj, ["normal"]);

    obj = new nexacro.Style_align("right bottom");
    this._addCss("Static.sta_WF_GridFound", "align", obj, ["normal"]);

    obj = new nexacro.Style_color("#a93800");
    this._addCss("Static.sta_WF_GridFound", "color", obj, ["normal"]);

    obj = new nexacro.Style_font("bold 8 Gulim");
    this._addCss("Static.sta_WF_GridFound", "font", obj, ["normal"]);

    obj = new nexacro.Style_padding("0 0 3 0");
    this._addCss("Static.sta_WF_GridFound", "padding", obj, ["normal"]);
    this._addCss("Static.sta_WF_GridFound2", "padding", obj, ["normal"]);

    obj = new nexacro.Style_align("left bottom");
    this._addCss("Static.sta_WF_GridFound2", "align", obj, ["normal"]);

    obj = new nexacro.Style_color("#6d7385");
    this._addCss("Static.sta_WF_GridFound2", "color", obj, ["normal"]);

    obj = new nexacro.Style_font("8 Gulim");
    this._addCss("Static.sta_WF_GridFound2", "font", obj, ["normal"]);
    this._addCss("Static.sta_WF_msg", "font", obj, ["normal"]);
    this._addCss("Static.sta_WF_ReftMsg", "font", obj, ["normal"]);

    obj = new nexacro.Style_border("1","solid","#ccd0d9ff","");
    this._addCss("Div.div_WF_GrdMsg", "border", obj, ["normal"]);

    obj = new nexacro.Style_color("#5f5f5f");
    this._addCss("Static.sta_WF_msg", "color", obj, ["normal"]);
    this._addCss("Static.sta_WF_ReftMsg", "color", obj, ["normal"]);

    obj = new nexacro.Style_background("#9da2b3ff","","","0","0","0","0","true");
    this._addCss("Button.btn_WF_schArea", "background", obj, ["normal", "mouseover", "pushed", "selected", "focused"]);

    obj = new nexacro.Style_value("URL('theme://images/btn_WF_SearchN.png')");
    this._addCss("Button.btn_WF_schArea", "image", obj, ["normal", "mouseover", "pushed", "selected", "focused"]);

    obj = new nexacro.Style_gradation("linear 0,0 #969cb0 0,100 #858ca1");
    this._addCss("Button.btn_WF_schArea", "gradation", obj, ["mouseover"]);

    obj = new nexacro.Style_value("URL('theme://images/btn_WF_SearchO.png')");
    this._addCss("Button.btn_WF_schArea", "image", obj, ["mouseover", "pushed"]);

    obj = new nexacro.Style_gradation("linear 0,0 #6a7080 0,100 #80879a [80% #7b8194]");
    this._addCss("Button.btn_WF_schArea", "gradation", obj, ["pushed"]);

    obj = new nexacro.Style_gradation("linear 0,0 #6d799b 0,100 #626d8f");
    this._addCss("Button.btn_WF_CRUD", "gradation", obj, ["normal", "mouseover", "pushed", "selected", "focused"]);

    obj = new nexacro.Style_border("1","solid","#4a5e97ff","");
    this._addCss("Button.btn_WF_CRUD", "border", obj, ["normal", "mouseover", "pushed", "selected", "focused"]);

    obj = new nexacro.Style_gradation("linear 0,0 #8690ac 0,100 #667296");
    this._addCss("Button.btn_WF_CRUD", "gradation", obj, ["mouseover"]);

    obj = new nexacro.Style_border("1","solid","#334169ff","");
    this._addCss("Button.btn_WF_CRUD", "border", obj, ["mouseover"]);

    obj = new nexacro.Style_gradation("linear 0,0 #3e93ec 0,100 #3e93ec");
    this._addCss("Button.btn_WF_CRUD", "gradation", obj, ["pushed"]);

    obj = new nexacro.Style_border("1","solid","#2777d3ff","");
    this._addCss("Button.btn_WF_CRUD", "border", obj, ["pushed"]);

    obj = null;
    
//[add theme images]
  };
})();
