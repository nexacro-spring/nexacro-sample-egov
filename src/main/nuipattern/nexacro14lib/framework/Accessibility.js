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
// SenseReader type
//==============================================================================
if (application._enableaccessibility)
{
	if (nexacro._accessibilitytype != application._accessibilitytype)
	{
		nexacro._accessibilitytype = application._accessibilitytype;
		nexacro._attachAccessibilityComponentFunctions();
	}

	if (nexacro._accessibilitytype == 2)
	{
		///////////////////////////////////////////////////////////
		// TODO : Implement SenseReader Utility function
		///////////////////////////////////////////////////////////
		nexacro.AccessibilityUtil.GridHotkeyList = {};
		nexacro.AccessibilityUtil.GridHotkeyList[nexacro.Event.KEY_CTRL + " " + nexacro.Event.KEY_ALT + " " + nexacro.Event.KEY_HOME] = nexacro.AccessibilityUtil.Hotkey.FIRSTCELLINROW;
		nexacro.AccessibilityUtil.GridHotkeyList[nexacro.Event.KEY_CTRL + " " + nexacro.Event.KEY_ALT + " " + nexacro.Event.KEY_END] = nexacro.AccessibilityUtil.Hotkey.LASTCELLINROW;
		nexacro.AccessibilityUtil.GridHotkeyList[nexacro.Event.KEY_CTRL + " " + nexacro.Event.KEY_ALT + " " + nexacro.Event.KEY_PAGE_UP] = nexacro.AccessibilityUtil.Hotkey.FIRSTCELLINCOLUMN;
		nexacro.AccessibilityUtil.GridHotkeyList[nexacro.Event.KEY_CTRL + " " + nexacro.Event.KEY_ALT + " " + nexacro.Event.KEY_PAGE_DOWN] = nexacro.AccessibilityUtil.Hotkey.LASTCELLINCOLUMN;

		nexacro.AccessibilityUtil._usetooltip = false;

		nexacro.AccessibilityUtil.getAccessibilityLabel = function (elem)
		{
			var strLabel = "";

			if (elem && elem.linkedcontrol)
			{
				strLabel = elem.accessibility_label;
			}
			return strLabel;
		};

		nexacro.AccessibilityUtil.getAccessibilityAction = function (elem)
		{
			var strAction = "";
			if (elem)
			{
				strAction = elem.accessibility_action;
			}
			return strAction;
		};

		nexacro.AccessibilityUtil.getAccessibilityDescription = function (elem)
		{
			var strDescription = "";
			if (elem)
			{
				strDescription = elem.accessibility_description;
			}
			return strDescription;
		};

		nexacro.AccessibilityUtil.setDOMNodeLabel = function (node, label)
		{
			node.innerText = label;
		};

		nexacro.AccessibilityUtil.getAccessibilityAdditionalLabel = function (elem)
		{
			var strAdditionalLabel = "";
			if (elem)
			{
				var comp = elem.linkedcontrol;
				strAdditionalLabel = comp._on_getAccessibilityAdditionalLabel() + comp._on_getAccessibilityAdditionalRole();
			}
			return strAdditionalLabel;
		};
	}
		//==============================================================================
		// JAWS type
		//==============================================================================
	else if (nexacro._accessibilitytype == 3)
	{
		///////////////////////////////////////////////////////////
		// TODO : Implement JAWS Utility function
		///////////////////////////////////////////////////////////
		nexacro.AccessibilityUtil.GridHotkeyList = {};
		nexacro.AccessibilityUtil.GridHotkeyList[nexacro.Event.KEY_CTRL + " " + nexacro.Event.KEY_ALT + " " + nexacro.Event.KEY_HOME] = nexacro.AccessibilityUtil.Hotkey.FIRSTCELL;
		nexacro.AccessibilityUtil.GridHotkeyList[nexacro.Event.KEY_CTRL + " " + nexacro.Event.KEY_ALT + " " + nexacro.Event.KEY_END] = nexacro.AccessibilityUtil.Hotkey.LASTCELL;
		nexacro.AccessibilityUtil.GridHotkeyList[nexacro.Event.KEY_CTRL + " " + nexacro.Event.KEY_ALT + " " + nexacro.Event.KEY_SHIFT + " " + nexacro.Event.KEY_UP] = nexacro.AccessibilityUtil.Hotkey.FIRSTCELLINCOLUMN;
		nexacro.AccessibilityUtil.GridHotkeyList[nexacro.Event.KEY_CTRL + " " + nexacro.Event.KEY_ALT + " " + nexacro.Event.KEY_SHIFT + " " + nexacro.Event.KEY_DOWN] = nexacro.AccessibilityUtil.Hotkey.LASTCELLINCOLUMN;
		nexacro.AccessibilityUtil.GridHotkeyList[nexacro.Event.KEY_CTRL + " " + nexacro.Event.KEY_ALT + " " + nexacro.Event.KEY_SHIFT + " " + nexacro.Event.KEY_LEFT] = nexacro.AccessibilityUtil.Hotkey.FIRSTCELLINROW;
		nexacro.AccessibilityUtil.GridHotkeyList[nexacro.Event.KEY_CTRL + " " + nexacro.Event.KEY_ALT + " " + nexacro.Event.KEY_SHIFT + " " + nexacro.Event.KEY_RIGHT] = nexacro.AccessibilityUtil.Hotkey.LASTCELLINROW;

		nexacro.AccessibilityUtil._usetooltip = true;

		nexacro.AccessibilityUtil.getAccessibilityLabel = function (elem)
		{
			var strLabel = "";
			if (elem)
			{
				strLabel = elem.accessibility_label;
			}
			return strLabel;
		};

		nexacro.AccessibilityUtil.getAccessibilityAction = function (elem)
		{
			var strAction = "";
			if (elem)
			{
				strAction = elem.accessibility_action;
			}
			return strAction;
		};

		nexacro.AccessibilityUtil.getAccessibilityDescription = function (elem)
		{
			var strDescription = "";
			if (elem)
			{
				strDescription = elem.accessibility_description;
			}
			return strDescription;
		};

		nexacro.AccessibilityUtil.setDOMNodeLabel = function (node, label)
		{
			node.setAttribute("aria-live", "assertive");
			node.innerHTML = label;
		};
	}
		//==============================================================================
		// Standard type
		//==============================================================================
	else
	{
		///////////////////////////////////////////////////////////
		// TODO : Implement Standard Utility function
		///////////////////////////////////////////////////////////

		//allow jaws' hotkey
		nexacro.AccessibilityUtil.GridHotkeyList = {};
		nexacro.AccessibilityUtil.GridHotkeyList[nexacro.Event.KEY_CTRL + " " + nexacro.Event.KEY_ALT + " " + nexacro.Event.KEY_HOME] = nexacro.AccessibilityUtil.Hotkey.FIRSTCELL;
		nexacro.AccessibilityUtil.GridHotkeyList[nexacro.Event.KEY_CTRL + " " + nexacro.Event.KEY_ALT + " " + nexacro.Event.KEY_END] = nexacro.AccessibilityUtil.Hotkey.LASTCELL;
		nexacro.AccessibilityUtil.GridHotkeyList[nexacro.Event.KEY_CTRL + " " + nexacro.Event.KEY_ALT + " " + nexacro.Event.KEY_SHIFT + " " + nexacro.Event.KEY_UP] = nexacro.AccessibilityUtil.Hotkey.FIRSTCELLINCOLUMN;
		nexacro.AccessibilityUtil.GridHotkeyList[nexacro.Event.KEY_CTRL + " " + nexacro.Event.KEY_ALT + " " + nexacro.Event.KEY_SHIFT + " " + nexacro.Event.KEY_DOWN] = nexacro.AccessibilityUtil.Hotkey.LASTCELLINCOLUMN;
		nexacro.AccessibilityUtil.GridHotkeyList[nexacro.Event.KEY_CTRL + " " + nexacro.Event.KEY_ALT + " " + nexacro.Event.KEY_SHIFT + " " + nexacro.Event.KEY_LEFT] = nexacro.AccessibilityUtil.Hotkey.FIRSTCELLINROW;
		nexacro.AccessibilityUtil.GridHotkeyList[nexacro.Event.KEY_CTRL + " " + nexacro.Event.KEY_ALT + " " + nexacro.Event.KEY_SHIFT + " " + nexacro.Event.KEY_RIGHT] = nexacro.AccessibilityUtil.Hotkey.LASTCELLINROW;

		nexacro.AccessibilityUtil._usetooltip = true;

		nexacro.AccessibilityUtil.getAccessibilityLabel = function (elem)
		{
			var strLabel = "";
			if (elem)
			{
				strLabel = elem.accessibility_label;
			}
			return strLabel;
		};

		nexacro.AccessibilityUtil.getAccessibilityAction = function (elem)
		{
			var strAction = "";
			if (elem)
			{
				strAction = elem.accessibility_action;
			}
			return strAction;
		};

		nexacro.AccessibilityUtil.getAccessibilityDescription = function (elem)
		{
			var strDescription = "";
			if (elem)
			{
				strDescription = elem.accessibility_description;
			}
			return strDescription;
		};

		nexacro.AccessibilityUtil.setDOMNodeLabel = function (node, label)
		{
			node.setAttribute("aria-live", "assertive");
			node.innerHTML = label;
		};
	}

	nexacro.AccessibilityUtil.checkComponentHotkey = function (obj, keyCode, altKey, ctrlKey, shiftKey)
	{
		var strHotkey = "";
		var hotkeyList = null;

		if (ctrlKey)
		{
			strHotkey = strHotkey + nexacro.Event.KEY_CTRL + " ";
		}
		if (altKey)
		{
			strHotkey = strHotkey + nexacro.Event.KEY_ALT + " ";
		}
		if (shiftKey)
		{
			strHotkey = strHotkey + nexacro.Event.KEY_SHIFT + " ";
		}

		strHotkey = strHotkey + keyCode;

		if (obj instanceof nexacro.Grid)
		{
			hotkeyList = nexacro.AccessibilityUtil.GridHotkeyList;
		}

		if (hotkeyList)
		{
			return hotkeyList[strHotkey];
		}

		return nexacro.AccessibilityUtil.Hotkey.NONE;
	};

	nexacro.AccessibilityUtil.isUseTooltipText = function ()
	{
		if (nexacro._enableaccessibility && !nexacro.AccessibilityUtil._usetooltip)
		{
			return false;
		}
		return true;
	}

	nexacro._createFrameNode = nexacro._destroyFrameNode = nexacro._emptyFn;
}