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

if (!nexacro.Device)
{
    // common interface, Platform 별 API 구현은 Device API(DeviceObjs_HTML5/DeviceObjs_Runtime) 파일에 있음.
    if (!nexacro._init_deviceobjs_api)
    {
        // FileDialog
        nexacro._createFileDialogObject = nexacro._emptyFn;
        nexacro._setFileDialogHandleDefaultExtension = nexacro._emptyFn;
        nexacro._setFileDialogHandleFilter = nexacro._emptyFn;
        nexacro._setFileDialogHandleFilterIndex = nexacro._emptyFn;
        nexacro._setFileDialogHandleAsync = nexacro._emptyFn;
        nexacro._openFileDialogHandle = nexacro._emptyFn;

        // VirtualFile
        nexacro._createVirtualFileObject = nexacro._emptyFn;
        nexacro._setVirtualFileHandleFileName = nexacro._emptyFn;
        nexacro._setVirtualFileHandleFullPath = nexacro._emptyFn;
        nexacro._setVirtualFileHandlePath = nexacro._emptyFn;
        nexacro._openVirtualFileHandle = nexacro._emptyFn;
        nexacro._closeVirtualFileHandle = nexacro._emptyFn;
        nexacro._readVirtualFileHandle = nexacro._emptyFn;
        nexacro._readlineVirtualFileHandle = nexacro._emptyFn;
        nexacro._seekVirtualFileHandle = nexacro._emptyFn;
        nexacro._writeVirtualFileHandle = nexacro._emptyFn;
        nexacro._removeVirtualFileHandle = nexacro._emptyFn;
        nexacro._getFileListVirtualFileHandle = nexacro._emptyFn;
        nexacro._getFileSizeVirtualFileHandle = nexacro._emptyFn;
        nexacro._isExistVirtualFileHandle = nexacro._emptyFn;
        nexacro._createDirectoryVirtualFileHandle = nexacro._emptyFn;
        nexacro._deleteDirectoryVirtualFileHandle = nexacro._emptyFn;
        nexacro._renameDirectoryVirtualFileHandle = nexacro._emptyFn;

        nexacro._showModalSync = nexacro._emptyFn;
        nexacro._showModalWindow = nexacro._emptyFn;

        nexacro._attachChildFrame = function (_cur_win, _doc, key, adl_url, div_id, fdl_url)
        {
            nexacro.__attachChildFrame(_cur_win, _doc, key, adl_url, div_id, fdl_url);
        };

        // Widget
        nexacro._setIconWidget = nexacro._emptyFn;
        nexacro._setTopmostWidget = nexacro._emptyFn;
    }
        
    //==============================================================================
    // nexacro.FileDialog
    // 로컬시스템의 파일을 찾거나 저장하기 위해 사용되는  파일선택 대화상자(File Dialog) Object
    //==============================================================================
    if (!nexacro.FileDialog)
    {
        nexacro.FileDialog = function (id, parent)
        {
            this.id = this.name = id;
            if (parent)
            {
                this.parent = parent;
                var curFrame = parent._getOwnerFrame();
                if (curFrame._window)
                    this._winhandle = curFrame._window._handle;
                else
                    this._winhandle = nexacro._getMainWindowHandle();
            }

            // set property
            this.defaultextension = true;//확장자 없이 저장할 때 확장자 자동붙임 기능의 사용여부 default : true
            this.filter = "";			 //FileDialog 파일리스트에 출력할 확장자 지정 (복수가능)
            this.filterindex = 0; 		 //filter목록에서 사용자가 선택한 filter의 index 값
            this.async = "true";

            this._event_list = {
                "onclose": 1, "onerror": 1
            };

            this.onclose = null;
            this.onerror = null;

            // ----------------- internal variable ------------------ // 
            this._handle = nexacro._createFileDialogObject(this);
            //this._win_handle = null;

        };

        // const option
        nexacro.FileDialog.LOAD = 1; //하나의 파일을 읽기 위해서 가져옵니다.
        nexacro.FileDialog.SAVE = 2; //하나의 파일을 쓰기  위해서 가져옵니다.
        nexacro.FileDialog.MULTILOAD = 3; //하나 이상의 파일을 읽기 위해서 가져옵니다.
        nexacro.FileDialog.SELFOLDER = 4; //폴더를 선택합니다.

        var _pFileDialog = nexacro.FileDialog.prototype = nexacro._createPrototype(nexacro.EventSinkObject, nexacro.FileDialog);
        
        _pFileDialog._type_name = "FileDialog";

        // -- Override
        _pFileDialog.on_created = function ()
        {

        }

        _pFileDialog.destroy = function ()
        {
            if (this._handle)
            {
                this._handle = null;
            }

            return true;
        }

        //===============================================================
        // nexacro.FileDialog : Properties
        //===============================================================
        _pFileDialog.set_defaultextension = function (v)
        {
            if (this.pramck_filedialog_defaultextension(v))
            {
                v = nexacro._toBoolean(v);
                this.defaultextension = v;
                nexacro._setFileDialogHandleDefaultExtension(this, v);

                return true;
            }
            else
            {
                return false;
            }
        }

        _pFileDialog.set_filter = function (v)
        {
            if (this.pramck_filedialog_filter(v))
            {
                var filterarr = v.split("|");
                var f_len = filterarr.length;
                if (f_len < 2)
                {
                    return false;
                }

                if ((f_len % 2 == 1) && filterarr[f_len - 1] != "")
                {
                    return false;
                }

                var normalize = /[\*].[a-zA-Z0-9가-힣\*]/gi;

                for (var i = 0; i < f_len; i++)
                {
                    if (i % 2 == 1)
                    {
                        if (normalize.test(filterarr[i]) == false)
                        {
                            return false;
                        }
                        normalize.lastIndex = 0;
                    }
                }
                this.filter = v;
                nexacro._setFileDialogHandleFilter(this, v);

                return true;
            }
            else
            {
                return false;
            }
        }

        _pFileDialog.set_filterindex = function (v)
        {
            if (this.pramck_filedialog_numbercheck(v))
            {
                this.filterindex = v;
                nexacro._setFileDialogHandleFilterIndex(this, v);

                return true;
            }
            else
            {
                return false;
            }
        }

        _pFileDialog.set_async = function (v)
        {
            if (v == "true" || v == "false" || v == true || v == false)
            {
                v = nexacro._toBoolean(v);
                this.async = v;
                nexacro._setFileDialogHandleAsync(this, v);

                return true;
            }
            else
            {
                return false;
            }
        }

        //===============================================================
        // nexacro.FileDialog : Methods
        //===============================================================
        _pFileDialog.open = function (strTitle, constOpenMode, strInitialPath, strFileName)
        {
            if (strInitialPath == null && strFileName == null)
            {
                strInitialPath = "%USERAPP%";
                strFileName = "";
            }
            else if (strFileName == null)
            {
                strFileName = "";
            }
            else if (strFileName != null)
            {
            }
            else
            {
                return false;
            }

            //파라미터 체크
            if (!this.pramck_filedialogOpen(strTitle, constOpenMode, strInitialPath, strFileName))
            {
                return false;
            }

            if (this.filter == "")
            {
                var filter = "All(*.*)|*.*|";

                this.filter = filter;
                this.set_filter(filter);
            }
           
            var filterarr = this.filter.split("|");
           
            if (this.defaultextension == true && this.filterindex >= (filterarr.length / 2))
            {
                return false;
            }

            if (this._handle)
            {
                nexacro._openFileDialogHandle(this, strTitle, constOpenMode, strInitialPath, strFileName);
            }

            return true;
        };

        //===============================================================
        // nexacro.FileDialog : Event Handlers
        //===============================================================
        _pFileDialog.on_close = function (reason, path, virtualfiles)
        {
            var _virtualFile = virtualfiles;
            var arr = new Array(_virtualFile.length);

            for (var i = 0; i < _virtualFile.length; i++)
            {
                var obj = new nexacro.VirtualFile("VirtualFile", "");

                obj.filename = _virtualFile[i].filename;
                obj.fullpath = _virtualFile[i].fullpath;
                obj.path = _virtualFile[i].path;
                arr[i] = obj;
                
                if (obj._handle)
                {
                    obj._handle = null;
                }                    
            }

            var e = new nexacro.FileDialogEventInfo("onclose", reason, path, arr);
            this.on_fire_onclose(this, e);
        };

        _pFileDialog.on_fire_onclose = function (objFileDialog, eFileDialogEventInfo)
        {
            if (this.onclose && this.onclose._has_handlers)
            {
                return this.onclose._fireEvent(this, eFileDialogEventInfo);
            }
            return true;
        };

        //===============================================================
        // nexacro.FileDialog : Logical Part
        //===============================================================
        _pFileDialog.pramck_filedialog_defaultextension = function (property)
        {
            if (property == null || typeof (property) == "undefined" || typeof (property) != "boolean")
            {
                if (property.toLowerCase() == 'true' || property.toLowerCase() == 'false')
                    return true;
                 else             
                    return false;            
            }
            else
            {
                return true;
            }
        }

        _pFileDialog.pramck_filedialog_filter = function (property)
        {
            if (property == null || typeof (property) == "undefined" || typeof (property) != "string")
            {
                return false;
            }
            else
            {
                return true;
            }
        }

        _pFileDialog.pramck_filedialog_numbercheck = function (property)
        {
            if (property == null || typeof (property) == "undefined")
            {
                return false;
            }

            if (!this._publicNumCheck(property))
            {
                return false;
            }
            return true;
        }

        _pFileDialog.pramck_filedialogOpen = function (strTitle, constOpenMode, strInitialPath, strFileName)
        {
            if (strTitle == null || typeof (strTitle) == "undefined")
            {
                return false;
            }

            if (constOpenMode == null || typeof (constOpenMode) == "undefined")
            {
                return false;
            }
            else
            {
                if (!this._publicNumCheck(constOpenMode))
                {
                    return false;
                }

                if (constOpenMode > 4 || constOpenMode < 1)
                {
                    return false;
                }
            }

            if (strInitialPath == null || typeof (strInitialPath) == "undefined")
            {
                return false;
            }

            if (strFileName == null || typeof (strFileName) == "undefined")
            {
                return false;
            }

            return true;
        }

        _pFileDialog._publicNumCheck = function (v)
        {
            try
            {
                var strlength = v.toString().split(" ").join("");
            }
            catch (e)
            {
                return false;
            }

            if (strlength.length == 0)
            {
                return false;
            }

            try
            {
                var numberss = Number(v.toString());
            }
            catch (e)
            {
                return false;
            }

            if ((+numberss) != (+numberss))
            {
                return false;
            }

            return true;
        }

        delete _pFileDialog;

    }
    
    //==============================================================================
    // nexacro.Event.FileDialogEventInfo
    // 파일 선택상자를 닫았을 때 발생하는 이벤트에서 사용되는 EventInfo Object
    //==============================================================================
    if (!nexacro.FileDialogEventInfo)
    {
        nexacro.FileDialogEventInfo = function (strEventId, strReason, strPath, arrVirtualfiles)
        {
            this.eventid = strEventId;												// 이벤트ID
            this.reason = strReason;												// 이벤트 발생분류 코드
            this.path = strPath;													// 선택한 디렉토리 경로
            this.virtualfiles = arrVirtualfiles;									// 선택한 파일(VirtualFile)의 Array
        }
        var _pFileDialogEventInfo = nexacro.FileDialogEventInfo.prototype = nexacro._createPrototype(nexacro.Event, nexacro.FileDialogEventInfo);
        
        _pFileDialogEventInfo._type_name = "FileDialogEventInfo";

        delete _pFileDialogEventInfo;
    }
}
    //==============================================================================
    // 10. VirtualFile
    //==============================================================================

    //==============================================================================
    // nexacro.VirtualFile
    // 로컬시스템의 파일을 찾거나 저장하기 위해 사용되는  파일선택 대화상자(File Dialog) Object
//==============================================================================
if (!nexacro.Device || nexacro.OS == "Android")
{
    if (!nexacro.VirtualFile)
    {
        nexacro.VirtualFile = function (id, parent)
        {
            this.id = this.name = id;
            if (parent)
                this.parent = parent;

            // property 
            this.filename = "";				// 오픈할 파일이름
            this.fullpath = "";				// 오픈할 파일의 로컬 전체 경로 : filename + path
            this.path = "";				 	// 오픈할 파일의 로컬 경로  
            this.async = "true";

            this._event_list = {
                "onsuccess": 1, "onerror": 1
            };

            this._ref_file = null;

            this.onsuccess = null;
            this.onerror = null;

            // ----------------- internal variable ------------------ // 
            this._handle = nexacro._createVirtualFileObject(this);
        };

        //- Open Option Flags
        nexacro.VirtualFile.openRead = 0x0001;
        nexacro.VirtualFile.openWrite = 0x0002;
        nexacro.VirtualFile.openAppend = 0x0010;
        nexacro.VirtualFile.openCreate = 0x1000;
        nexacro.VirtualFile.openText = 0x0100;
        nexacro.VirtualFile.openBinary = 0x0200;

        //- Seek Option Flags
        nexacro.VirtualFile.seekBegin = 0x0000;
        nexacro.VirtualFile.seekCurrent = 0x0001;
        nexacro.VirtualFile.seekEnd = 0x0002;

        //- Find File Options Flags
        nexacro.VirtualFile.findAll = 0x0001;
        nexacro.VirtualFile.findFileOnly = 0x0002;
        nexacro.VirtualFile.findDirectoryOnly = 0x0003;
        nexacro.VirtualFile.findCaseless = 0x0010;

        var _pVirtualFile = nexacro.VirtualFile.prototype = nexacro._createPrototype(nexacro.EventSinkObject, nexacro.VirtualFile);
        
        _pVirtualFile._type_name = "VirtualFile";

        // -- Override
        _pVirtualFile.on_created = function ()
        {
            
        }

        _pVirtualFile.destroy = function ()
        {
            if (this._ref_file)
            {
                this._ref_file = null;
            }
            if (this._handle)
            {
                this._handle = null;
            }

            return true;
        }
    
        //===============================================================
        // nexacro.AsyncVFile : Properties
        //===============================================================
        _pVirtualFile.set_filename = function (v)
        {            
            if (this.pramck_virtualproperty(v))
            {
                this.filename = v;
                nexacro._setVirtualFileHandleFileName(this, v);

                return true;
            }
            else
            {
                return false;
            }            
        }

        _pVirtualFile.set_fullpath = function (v)
        {            
            if (this.pramck_virtualproperty(v))
            {
                this.fullpath = v;
                nexacro._setVirtualFileHandleFullPath(this, v);

                return true;
            }
            else
            {
                return false;
            }            
        }

        _pVirtualFile.set_path = function (v)
        {            
            if (this.pramck_virtualproperty(v))
            {
                this.path = v;
                nexacro._setVirtualFileHandlePath(this, v);

                return true;
            }
            else
            {
                return false;
            }            
        }

        _pVirtualFile.set_async = function (v)
        {
            if (v == "true" || v == "false" || v == true || v == false)
            {
                v = nexacro._toBoolean(v);
                this.async = v;
                v = nexacro._toBoolean(v);
                nexacro._setVirtualFileHandleAsync(this, v);
                return true;
            }
            else
            {
                return false;
            }           
        }
     
        // ReadOnly
        _pVirtualFile.set_filename = nexacro._emptyFn;
        _pVirtualFile.set_fullpath = nexacro._emptyFn;
        _pVirtualFile.set_path = nexacro._emptyFn;
                
        //===============================================================
        // nexacro.AsyncVFile : Methods
        //===============================================================

        // 지정된 파일을 연다
        _pVirtualFile.open = function (strFileName, nOptions)
        {
            var nConstOptions = ""; //필수
            var nFiletype = ""; //파일 type        
            var fullpath = "";

            if (strFileName == null)
            {
                nConstOptions = strFileName;
            }
            else if (strFileName != null)
            {
                nConstOptions = nOptions;
                fullpath = strFileName; // this.fullpath  설정

                fullpath = fullpath.split("\\").join("/");
                this.fullpath = fullpath;
                this.set_fullpath(fullpath);
            }
            else
            {
                return false;
            }

            // this.path 설정        
            var index_path = fullpath.lastIndexOf("/");
            if (index_path == -1)
            {
                index_path = fullpath.lastIndexOf("%");
            }
            var path = path = fullpath.substring(0, index_path + 1);

            this.path = path;
            this.set_path(path);

            var index_name = fullpath.lastIndexOf("/");
            if (index_name == -1)
            {
                index_name = fullpath.lastIndexOf("%");
            }
            var filename = fullpath.substring(index_name + 1, fullpath.length);

            this.filename = filename;
            this.set_filename(filename);

            if (!this.pramck_open(path, nConstOptions))
            {
                return false;
            }
            
            if (this._handle)
            {
                nexacro._openVirtualFileHandle(this, strFileName, nConstOptions);
            }
            return true;
        };

        // 오픈한 파일을 닫는다
        _pVirtualFile.close = function ()
        {
            if (this._handle)
            {
                nexacro._closeVirtualFileHandle(this);
            }
        }
        // 파일의 내용을 지정된 길이만큼 읽는다
        _pVirtualFile.read = function (nLength, strCharset)
        {
            var _nLen = -1; // 옵션
            var _strCharset = "utf-8"; //옵션

            if (arguments.length == 1)
            {
                _nLen = nLength || -1;
            }
            else if (arguments.length == 2)
            {
                _nLen = nLength;
                _strCharset = strCharset;
            }

            if (!this.pramck_Read(_nLen))
            {
                return false;
            }

            if (this._handle)
            {
                nexacro._readVirtualFileHandle(this, _nLen, _strCharset);
            }
            return true;
        }
        // 파일의 내용을 한줄씩 읽는다
        _pVirtualFile.readLine = function (strDelimeter, strCharset)
        {
            var _strDelimeter = "";//옵션
            var _strCharset = "utf-8"; //옵션
            if (arguments.length == 1)
            {
                _strDelimeter = strDelimeter;
            }
            else if (arguments.length == 2)
            {
                _strDelimeter = strDelimeter;
                _strCharset = strCharset;
            }
            if (!this.pramck_ReadLine(_strDelimeter))
            {
                return false;
            }

            if (this._handle)
            {
                nexacro._readlineVirtualFileHandle(this, _strDelimeter, _strCharset);
            }
            return true;
        }      
        // 파일의 읽기/쓰기 위치를 이동한다
        _pVirtualFile.seek = function (nOffset, nOption)
        {
            var _nOffset = "";//필수
            var _nOption = "";//옵션

            if (arguments.length == 1)
            {
                _nOffset = nOffset;
                _nOption = VirtualFile.seekCurrent; //디폴트 파일의  현재 위치
            }
            else if (arguments.length == 2)
            {
                _nOffset = nOffset;
                _nOption = nOption;
            }
            if (!this.paramck_Seek(_nOffset, _nOption))
            {
                return false;
            }

            if (this._handle)
            {
                nexacro._seekVirtualFileHandle(this, _nOffset, _nOption);
            }
            return true;
        }       
        // 파일에 지정된 문자열을 저장한다
        _pVirtualFile.write = function (varData, strCharset)
        {
            var _varData = varData; // 필수
            var _strCharset = "utf-8"; // 옵션

            if (typeof (_varData) == "undefined" || _varData.length == 0)
            {
                return false;
            }
            if (arguments.length == 2)
            {
                _strCharset = strCharset;
            }

            if (this._handle)
            {
                nexacro._writeVirtualFileHandle(this, _varData, _strCharset);
            }
            return true;
        }        
        // 주어진 경로의 파일 또는 VirtualFile을 삭제한다
        _pVirtualFile.remove = function (strFilePath)
        {
            var _strFilePath = ""; //필수           
            if (strFilePath instanceof nexacro.VirtualFile)
            { //VirtualFile 입력시 Virtual의 풀패스 사용
                _strFilePath = strFilePath.fullpath;
            }
            else
            {
                _strFilePath = strFilePath;
            }
            if (!this.pramck_Delete(_strFilePath))
            {
                return false;
            }
                       
            if (this._handle)
            {
                nexacro._removeVirtualFileHandle(this, _strFilePath);
            }           
            return true;           
        }      
        // 지정된 경로의 파일목록을 얻는다
        _pVirtualFile.getFileList = function (strPath, strSearchExpr, nOptions)
        {
            var _strPath = strPath;//필수
            var _strSearchExpr = strSearchExpr;//필수
            var nConstOptions = nOptions;//옵션

            if (typeof (nConstOptions) == "undefined")
            {
                nConstOptions = VirtualFile.findAll;
            }

            if (strPath == null || strSearchExpr == null || !this.pramck_GetFileList(_strPath, _strSearchExpr, nConstOptions))
            {
                return false;
            }

            if (arguments.length < 2)
            {
                return false;
            }
                       
            if (this._handle)
            {               
                nexacro._getFileListVirtualFileHandle(this, _strPath, _strSearchExpr, nConstOptions);
            }
            return true;
        }       
        //  오픈한 파일 사이즈를 얻는다, 없으면 프로퍼티 풀패스
        _pVirtualFile.getFileSize = function ()
        {
            var ret = 0;

            //if (typeof (this.fullpath) == "undefined" || this.fullpath == "")
            //{
            //    return ret;
            //}

            if (this._handle)
            {
                if (this.fullpath != null && this.fullpath != "")
                {
                    ret = nexacro._getFileSizeVirtualFileHandle(this, this.fullpath);
                }
            }
            else
            {
                if (this._ref_file)
                {
                    ret = this._ref_file.size;
                }
            }
            return ret;
        }
        // 지정한 파일 혹은 경로가 존재하는지 확인한다
        _pVirtualFile.isExist = function (strPath)
        {
            if (!this.pramck_IsExist(strPath))
            {               
                return false;
            }
                        
            if (this._handle)
            {
                nexacro._isExistVirtualFileHandle(this, strPath);
            }
            return true;
        }

        _pVirtualFile.createDirectory = function (strPath, bAllCreate)
        {
            if (!this.pramck_IsExist(strPath))
            {
                return false;
            }

            if (arguments.length == 1)
            {
                this.strPath = strPath;
                this.bAllCreate = false;
            }
            else if (arguments.length == 2)
            {
                this.strPath = strPath;
                this.bAllCreate = bAllCreate;
            }
            else
            {
                return false;
            }
                      
            if (this._handle)
            {
                nexacro._createDirectoryVirtualFileHandle(this, strPath, this.bAllCreate);
            }
            return true;
        }

        _pVirtualFile.deleteDirectory = function (strPath, bAllChild)
        {
            if (!this.pramck_IsExist(strPath))
            {
                return false;
            }

            if (arguments.length == 1)
            {
                this.strPath = strPath;
                this.bAllChild = false;
            }
            else if (arguments.length == 2)
            {
                this.strPath = strPath;
                this.bAllChild = bAllChild;
            }
            else
            {
                return false;
            }
                                  
            if (this._handle)
            {
                nexacro._deleteDirectoryVirtualFileHandle(this, strPath, this.bAllChild);
            }
            return true;
        }
        
        _pVirtualFile.renameDirectory = function (strPath, strNewName)
        {
            if (!this.pramck_IsExist(strPath))
            {
                trace("_pVirtualFile.renameDirector 00");
                return false;
            }

            if (!this.paramck_folderName(strNewName))
            {
                trace("_pVirtualFile.renameDirector 01");
                return false;
            }

            if (strNewName == null)
            {
                trace("_pVirtualFile.renameDirector 02");
                return false;
            }

            

            this.strPath = strPath;
            this.strNewName = strNewName;
                           
            if (this._handle)
            {
                nexacro._renameDirectoryVirtualFileHandle(this, strPath, strNewName);
            }
            return true;

        }
         
        //===============================================================
        // nexacro.AsyncVFile : Event Handlers
        //===============================================================
        _pVirtualFile.on_success = function (reason, textdata, bindata, fileattributelist, filesize, fileisexist)
        {
            var _textdata = "";
            var _bindata = "";
            var temptxtlen = 0;
            var tempbinlen = 0;

            if (textdata)
                temptxtlen = textdata.length;
            if (bindata)
                tempbinlen = bindata.length;

            if (temptxtlen > 0)
            {               
                _textdata = textdata.replace(/\&amp\;/g, "&");
                _textdata = _textdata.replace(/\&lt\;/g, "<");
                _textdata = _textdata.replace(/\&gt\;/g, ">");
                _textdata = _textdata.replace(/\&quot\;/g, "\"");
                _textdata = _textdata.replace(/\&apos\;/g, "'");
                _textdata = _textdata.replace(/\&\#32\;/g, " ");
                _textdata = _textdata.replace(/\&\#13\;/g, "\r");
                _textdata = _textdata.replace(/\&\#10\;/g, "\n");
                _textdata = _textdata.replace(/\&\#9\;/g, "\t");
            }
            else if (tempbinlen > 0)
            {
                _bindata = bindata.replace(/\&amp\;/g, "&");
                _bindata = _bindata.replace(/\&lt\;/g, "<");
                _bindata = _bindata.replace(/\&gt\;/g, ">");
                _bindata = _bindata.replace(/\&quot\;/g, "\"");
                _bindata = _bindata.replace(/\&apos\;/g, "'");
                _bindata = _bindata.replace(/\&\#32\;/g, " ");
                _bindata = _bindata.replace(/\&\#13\;/g, "\r");
                _bindata = _bindata.replace(/\&\#10\;/g, "\n");
                _bindata = _bindata.replace(/\&\#9\;/g, "\t");
            }
           
            var e = new nexacro.VirtualFileEventInfo("onsuccess", reason, _textdata, _bindata, fileattributelist, filesize, fileisexist);
            this.on_fire_onsuccess(this, e);
        };

        _pVirtualFile.on_fire_onsuccess = function (objAsyncVFile, eAsyncVFileEventInfo)
        {
            if (this.onsuccess && this.onsuccess._has_handlers)
            {
                return this.onsuccess._fireEvent(this, eAsyncVFileEventInfo);
            }
            return true;
        };

        _pVirtualFile.on_error = function (errorcode, errormsg)
        {
            var e = new nexacro.VirtualFileErrorEventInfo("onerror", errorcode, errormsg);
            this.on_fire_onerror(this, e);
        };

        _pVirtualFile.on_fire_onerror = function (objAsyncVFile, eAsyncVFileErrorEventInfo)
        {
            if (this.onerror && this.onerror._has_handlers)
            {
                return this.onerror._fireEvent(this, eAsyncVFileErrorEventInfo);
            }
            return true;
        };

        //===============================================================
        // nexacro.AsyncVFile : Logical Part
        //===============================================================
        _pVirtualFile.paramck_folderName = function (strName)
        {
            if (strName == null)
            {
                return false;
            }

            if (strName.match(/[\"/:*?<>|]/))
            {
                return false;
            }
                        
            return true;
        }

        _pVirtualFile.pramck_virtualproperty = function (property)
        {
            if (typeof (property) == "undefined" || property == "" || property == null)
            {
                return false;
            }
            else
            {
                return true;
            }
        }

        _pVirtualFile.pramck_open = function (strFileName, nOptions)
        {
            if (nOptions == null)
            {
                if (typeof (strFileName) == "undefined" || strFileName == "" || strFileName == null)
                {
                    return false;
                }

                if (!this._publicNumCheck(strFileName))
                {
                    return false;
                }
                return true;
            }

            if (strFileName == null || typeof (strFileName) == "undefined")
            {
                return false;
            }

            if (nOptions == null || typeof (nOptions) == "undefined")
            {
                return false;
            }

            if (!this._publicNumCheck(nOptions))
            {
                return false;
            }
            return true;
        }

        _pVirtualFile.pramck_Read = function (nLength)
        {
            if (nLength == null || typeof (nLength) == "undefined")
            {
                return false;
            }

            if (!this._publicNumCheck(nLength))
            {
                return false;
            }
            return true;
        }

        _pVirtualFile.pramck_ReadLine = function (strDelimeter)
        {
            if (strDelimeter == null || typeof (strDelimeter) == "undefined" || typeof (strDelimeter) != "string")
            {
                return false;
            }

            return true;
        }

        _pVirtualFile.paramck_Seek = function (nOffset, nOption)
        {
            if (nOffset == null || typeof (nOffset) == "undefined")
            {
                return false;
            }

            if (nOption == null || typeof (nOption) == "undefined")
            {
                return false;
            }

            if (!this._publicNumCheck(nOffset))
            {
                return false;
            }
            return true;
        }

        _pVirtualFile.pramck_Delete = function (strFilePath)
        {
            if (strFilePath == null || typeof (strFilePath) == "undefined" || strFilePath == "")
            {
                return false;
            }
            else
            {
                return true;
            }
        }

        _pVirtualFile.pramck_IsExist = function (strPath)
        {
            if (strPath == null || typeof (strPath) == "undefined" || strPath == "" || typeof (strPath) != "string")
            {
                return false;
            }
            else
            {
                return true;
            }
        }

        _pVirtualFile.pramck_GetFileList = function (strPath, strSearchExpr, constOption)
        {
            if (strPath == null || typeof (strPath) == "undefined" || strPath == "" || typeof (strPath) != "string")
            {
                return false;
            }

            if (strSearchExpr == null || typeof (strSearchExpr) == "undefined" || strSearchExpr == "" || typeof (strSearchExpr) != "string")
            {
                return false;
            }

            if (constOption == null || typeof (constOption) == "undefined" || constOption == "")
            {
                return false;
            }

            if (!this._publicNumCheck(constOption))
            {
                return false;
            }
            return true;
        }

        _pVirtualFile._publicNumCheck = function (v)
        {
            try
            {
                var strlength = v.toString().split(" ").join("");
            }
            catch (e)
            {
                return false;
            }

            if (strlength.length == 0)
            {
                return false;
            }

            try
            {
                var numberss = Number(v.toString());
            }
            catch (e)
            {
                return false;
            }

            if ((+numberss) != (+numberss))
            {
                return false;
            }

            return true;
        }

        _pVirtualFile._setRefFile = function (file)
        {
            this._ref_file = file;
            this.filename = file.name;
        }

        delete _pVirtualFile;
    }

    //==============================================================================
    // nexacro.Event.VirtualFileEventInfo
    // 가상파일에 요청된 작업이 성공했을 때 발생되는 이벤트에서 사용되는 EventInfo Object
    //==============================================================================
    if (!nexacro.VirtualFileEventInfo)
    {
        nexacro.VirtualFileEventInfo = function (strEventId, strReason, strTextdata, strBinarydata, strFilelist, strFilesize, strExist)
        {
            this.eventid = strEventId;												// 이벤트ID
            this.reason = strReason;												// 이벤트 발생분류 코드
            this.textdata = strTextdata;											// 읽어들인 텍스트 데이터
            this.binarydata = strBinarydata;										// 읽어들인 바이너리 데이터

            //trace("===> strFilelist : " + strFilelist);

            var jsonObject = eval('(' + strFilelist + ')');
            if (jsonObject == undefined)
            {
                this.fileattributelist = "";
            }
            else
            {
                var fileattrlist = jsonObject.fileattrlist;
                var tempArr = new Array(fileattrlist.length);

                for (var i = 0; i < fileattrlist.length; i++)
                {
                    tempArr[i] = new nexacro.FileAttribute(fileattrlist[i]);
                }
                this.fileattributelist = tempArr;									// 지정된 결로의 파일목록
            }
            this.filesize = strFilesize;											// 오픈한 파일의 크기 또는 없으면 setterfullpath 값의 사이즈 
            this.fileisexist = strExist;										    // 지정된 파일 또는 폴더 존재여부

        }
        var _pVirtualFileEventInfo = nexacro.VirtualFileEventInfo.prototype = nexacro._createPrototype(nexacro.Event, nexacro.VirtualFileEventInfo);
        
        _pVirtualFileEventInfo._type_name = "VirtualFileEventInfo";

        delete _pVirtualFileEventInfo;
    }

    //==============================================================================
    // nexacro.VirtualFileErrorEventInfo
    // 가상파일에 요청된 작업이 실패했을 때 발생되는 이벤트에서 사용되는 EventInfo Object
    //==============================================================================
    if (!nexacro.VirtualFileErrorEventInfo)
    {
        nexacro.VirtualFileErrorEventInfo = function (strEventId, intErrorCode, strErrorMsg)
        {
            this.id = this.eventid = strEventId;									// 이벤트ID            
            this.errortype = "ObjectError";
            this.statuscode = intErrorCode;											// 오류코드 : integer 로 된 errorcode 
            this.errormsg = strErrorMsg;											// 오류메세지 : string으로 된 errormsg 
        }
        var _pVirtualFileErrorEventInfo = nexacro.VirtualFileErrorEventInfo.prototype = nexacro._createPrototype(nexacro.Event, nexacro.VirtualFileErrorEventInfo);
        
        _pVirtualFileErrorEventInfo._type_name = "VirtualFileErrorEventInfo";

        delete _pVirtualFileErrorEventInfo;
    }

    //==============================================================================
    // nexacro.FileAttribute
    // 파일을 읽거나 쓰기위해 사용되는 가상파일 Object
    //==============================================================================
    if (!nexacro.FileAttribute)
    {
        nexacro.FileAttribute = function (jsonObj)
        {
            this.accesstime = jsonObj.accesstime;										// 파일 또는 디렉토리의 마지막 엑세스 시간을 반환합니다.
            this.createtime = jsonObj.createtime;										// 파일 또는 디렉토리의 생성 시간을 반환합니다.
            this.filename = jsonObj.filename;											// 파일 또는 디렉토리의 이름을 반환합니다.
            this.groupid = jsonObj.groupid;												// 파일 또는 디렉토리의 소유자 그룹정보를 문자열로 반환합니다.
            this.modifytime = jsonObj.modifytime;										// 파일 또는 디렉토리의 마지막으로 수정된 시간을 반환합니다.
            this.size = jsonObj.size;													// 파일 크기를 byte 단위로 반환합니다.
            this.userid = jsonObj.userid;												// 파일 또는 디렉토리의 소유자 ID를 문자열로 반환합니다.
            this.isdirectory = jsonObj.isdirectory;										// 디렉토리인지 여부를 반환합니다.
            this.isreadonly = jsonObj.isreadonly;										// 파일 또는 디렉토리가 읽기전용인지 여부를 반환합니다.
        }
        var _pFileAttribute = nexacro.FileAttribute.prototype = nexacro._createPrototype(nexacro.EventSinkObject, nexacro.FileAttribute);
        
        _pFileAttribute._type_name = "FileAttribute";

        _pFileAttribute.on_created = function ()
        {
        }

        _pFileAttribute.isDirectory = function ()
        {
            return this.isdirectory;
        }

        _pFileAttribute.isReadOnly = function ()
        {
            return this.isreadonly;
        }

        delete _pFileAttribute;
    }

    //==============================================================================
    // nexacro.Application
    // For Widget
    //==============================================================================
    if (nexacro.Application) {
        nexacro.Application.setIconWidget = function (strWidgetId, strWidgetIconPath) {
            nexacro._setIconWidget(strWidgetId, strWidgetIconPath);
        };

        nexacro.Application.setTopmostWidget = function (strWidgetId, bWidgetTopmost) {
            nexacro._setTopmostWidget(strWidgetId, bWidgetTopmost);
        };
    }
}
