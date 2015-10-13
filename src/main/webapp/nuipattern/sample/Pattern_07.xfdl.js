(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        this.on_create = function()
        {
            // Declare Reference
            var obj = null;
            
            if (Form == this.constructor) {
                this.set_name("FileUpDownloadRUNTIME");
                this.set_classname("FileUpDownload");
                this.set_titletext("File Up&Down");
                this._setFormPosition(0,0,800,400);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_files", this);
            obj.set_firefirstcount("0");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"fileid\" type=\"STRING\" size=\"256\"/><Column id=\"fileimg\" type=\"STRING\" size=\"256\"/><Column id=\"filename\" type=\"STRING\" size=\"256\"/><Column id=\"filetype\" type=\"STRING\" size=\"256\"/><Column id=\"filesize\" type=\"INT\" size=\"256\"/><Column id=\"tranfilesize\" type=\"INT\" size=\"256\"/><Column id=\"prog\" type=\"INT\" size=\"256\"/><Column id=\"rmimg\" type=\"STRING\" size=\"256\"/><Column id=\"status\" type=\"STRING\" size=\"256\"/><Column id=\"filekey\" type=\"STRING\" size=\"256\"/><Column id=\"downcnt\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_delfiles", this);
            obj.set_firefirstcount("0");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"filename\" type=\"STRING\" size=\"256\"/><Column id=\"index\" type=\"INT\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_download", this);
            obj.set_firefirstcount("0");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"fileid\" type=\"STRING\" size=\"256\"/><Column id=\"fileimg\" type=\"STRING\" size=\"256\"/><Column id=\"filename\" type=\"STRING\" size=\"256\"/><Column id=\"filesize\" type=\"INT\" size=\"256\"/><Column id=\"prog\" type=\"INT\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_input", this);
            obj.set_firefirstcount("0");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"name\" type=\"STRING\" size=\"256\"/><Column id=\"city\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"name\">홍길동</Col><Col id=\"city\">Seoul</Col></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_output", this);
            obj.set_firefirstcount("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Static("st_bg", "absolute", "42", "86", "480", "258", null, null, this);
            obj.set_taborder("2");
            obj.style.set_background("#f4f8fcff");
            obj.style.set_border("1 solid #a4bed4ff");
            obj.style.set_bordertype("round 5 5");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_files", "absolute", "44", "134", "460", "202", null, null, this);
            obj.set_taborder("20");
            obj.set_binddataset("ds_files");
            obj.set_autofittype("col");
            obj.style.set_border("1 solid #a4bed4ff");
            obj.style.set_bordertype("round 5 5");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"60\"/><Column size=\"344\"/><Column size=\"38\"/></Columns><Rows><Row size=\"28\"/><Row size=\"22\"/></Rows><Band id=\"body\" style=\"selectline:0 none #e4e5e9ff,0 none #808080ff,1 solid #9da4aeff,0 solid #9da4aeff;selectbackground:#ffffffff;selectfont:antialias 9 Verdana;selectcolor:#46586eff;cellline:0 none #e4e5e9ff,0 none #808080ff,1 solid #9da4aeff,0 solid #9da4aeff;cellfont:antialias 9 Verdana;cellpadding:3 5 3 5;cellbackground:#ffffffff;cellbackground2:#ffffffff;cellcolor2:#46586eff;\"><Cell rowspan=\"2\" displaytype=\"image\" style=\"cursor:pointer;\" text=\"bind:fileimg\"/><Cell col=\"1\" style=\"align:left middle;line:0 none #808080ff ;cursor: ;selectline:0 none #808080ff ;\" expr=\"expr:comp.parent.getFileNameWithSize(dataset, currow)\" tooltiptext=\"expr:comp.parent.getFileNameWithSize(dataset, currow)\"/><Cell col=\"2\" rowspan=\"2\" displaytype=\"image\" style=\"cursor:hand;selectfont:antialias 9 Verdana;\" text=\"bind:rmimg\"/><Cell row=\"1\" col=\"1\" displaytype=\"expr:(prog &lt; 100)?((prog &lt; 0)?'normal':'bar'):'normal'\" style=\"align:left middle;font:antialias 9 Verdana;cursor: ;\" text=\"bind:prog\" expr=\"expr:(prog &lt; 100)?((prog &lt; 0)?'Error!':prog + '%'):'완료'\" tooltiptext=\"Upload Progress\"/></Band></Format><Format id=\"format1\"><Columns><Column size=\"40\"/><Column size=\"344\"/><Column size=\"38\"/></Columns><Rows><Row size=\"50\"/></Rows><Band id=\"body\" style=\"selectline:0 none #e4e5e9ff,0 none #808080ff,1 solid #9da4aeff,0 solid #9da4aeff;selectbackground:#ffffffff;selectfont:antialias 9 Verdana;selectcolor:#46586eff;cellline:0 none #e4e5e9ff,0 none #808080ff,1 solid #9da4aeff,0 solid #9da4aeff;cellpadding:3 5 3 5;cellbackground:#ffffffff;cellbackground2:#ffffffff;cellcolor2:#46586eff;\"><Cell displaytype=\"image\" style=\"cursor:hand;\" text=\"bind:fileimg\"/><Cell col=\"1\" style=\"align:left middle;line:0 none #e4e5e9ff,0 none #808080ff,1 solid #9da4aeff,0 solid #9da4aeff;selectline:0 none #e4e5e9ff,0 none #808080ff,1 solid #9da4aeff,0 solid #9da4aeff;\" text=\"expr:comp.parent.getFileNameWithSize(dataset, currow)\" tooltiptext=\"expr:comp.parent.getFileNameWithSize(dataset, currow)\"/><Cell col=\"2\" displaytype=\"image\" style=\"cursor:hand;\" text=\"bind:rmimg\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("st_helpMessage", "absolute", "46", "136", "455", "198", null, null, this);
            obj.set_taborder("32");
            obj.set_text("마우스로 파일을 끌어오세요.");
            obj.style.set_background("white");
            obj.style.set_border("2 dashed crimson");
            obj.style.set_bordertype("round 5 5");
            obj.style.set_align("center middle");
            obj.style.set_font("bold antialias 13 Verdana");
            obj.style.set_opacity("60");
            this.addChild(obj.name, obj);

            obj = new Static("st_title00", "absolute", "34", "32", "454", "38", null, null, this);
            obj.set_taborder("19");
            obj.set_text("File Upload");
            obj.set_cssclass("sta_WF_title");
            this.addChild(obj.name, obj);

            obj = new ImageViewer("img_loading", "absolute", "183", "214", "200", "60", null, null, this);
            obj.set_taborder("22");
            obj.set_visible("false");
            obj.style.set_background("transparent URL('images::fileUpDownload/loading.gif')");
            obj.style.set_border("1 solid darkgray");
            obj.style.set_bordertype("round 5 5");
            this.addChild(obj.name, obj);

            obj = new Static("st_downloadTitle", "absolute", "544", "86", "457", "38", null, null, this);
            obj.set_taborder("23");
            obj.set_text("File Download");
            obj.set_visible("false");
            obj.set_cssclass("sta_WF_title");
            this.addChild(obj.name, obj);

            obj = new Static("st_downloadBg", "absolute", "544", "123", "236", "221", null, null, this);
            obj.set_taborder("24");
            obj.style.set_background("#f4f8fcff");
            obj.style.set_border("1 solid #a4bed4ff");
            obj.style.set_bordertype("round 5 5");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_download", "absolute", "552", "134", "218", "200", null, null, this);
            obj.set_taborder("25");
            obj.set_binddataset("ds_download");
            obj.set_autofittype("col");
            obj.style.set_border("1 solid #a4bed4ff");
            obj.style.set_bordertype("round 5 5");
            obj.set_visible("false");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"60\"/><Column size=\"340\"/></Columns><Rows><Row size=\"28\"/><Row size=\"22\"/></Rows><Band id=\"body\" style=\"selectline:0 none #e4e5e9ff,0 none #808080ff,1 solid #9da4aeff,0 solid #9da4aeff;selectbackground:#ffffffff;selectfont:antialias 9 Verdana;selectcolor:#46586eff;cellline:0 none #e4e5e9ff,0 none #808080ff,1 solid #9da4aeff,0 solid #9da4aeff;cellpadding:3 5 3 5;cellbackground:#ffffffff;cellbackground2:#ffffffff;cellcolor2:#46586eff;\"><Cell rowspan=\"2\" displaytype=\"image\" style=\"align:center middle;cursor:hand;\" text=\"bind:fileimg\"/><Cell col=\"1\" style=\"align:left middle;line:0 none #808080ff ;cursor:hand;selectline:0 none #808080ff ;\" expr=\"expr:comp.parent.getFileNameWithSize(dataset, currow)\" tooltiptext=\"expr:comp.parent.getFileNameWithSize(dataset, currow)\"/><Cell row=\"1\" col=\"1\" displaytype=\"expr:(prog &lt; 1)?'normal':'bar'\" text=\"bind:prog\" expr=\"expr:(prog &lt; 1)?'':prog+'%'\" tooltiptext=\"Download Progress\"/></Band></Format><Format id=\"format1\"><Columns><Column size=\"60\"/><Column size=\"340\"/></Columns><Rows><Row size=\"28\"/><Row size=\"22\"/></Rows><Band id=\"body\" style=\"selectline:0 none #e4e5e9ff,0 none #808080ff,1 solid #9da4aeff,0 solid #9da4aeff;selectbackground:#ffffffff;selectfont:antialias 9 Verdana;selectcolor:#46586eff;cellline:0 none #e4e5e9ff,0 none #808080ff,1 solid #9da4aeff,0 solid #9da4aeff;cellpadding:3 5 3 5;cellbackground:#ffffffff;cellbackground2:#ffffffff;cellcolor2:#46586eff;\"><Cell rowspan=\"2\" displaytype=\"image\" style=\"align:center middle;cursor:hand;\" text=\"bind:fileimg\"/><Cell col=\"1\" rowspan=\"2\" style=\"align:left middle;line:0 none #e4e5e9ff,0 none #808080ff,1 solid #9da4aeff,0 solid #9da4aeff;cursor:hand;selectline:0 none #e4e5e9ff,0 none #808080ff,1 solid #9da4aeff,0 solid #9da4aeff;\" expr=\"expr:comp.parent.getFileNameWithSize(dataset, currow)\" tooltiptext=\"expr:comp.parent.getFileNameWithSize(dataset, currow)\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Button("btn_selectFiles", "absolute", "183", "96", "118", "30", null, null, this);
            obj.set_taborder("26");
            obj.set_text("Add Files...");
            obj.style.set_background("#1abd9cff URL('images::fileUpDownload/file_btn_AddFiles.png') 12 48");
            obj.style.set_border("0 none #808080ff");
            obj.style.set_color("white");
            obj.style.set_padding("0 0 0 30");
            obj.style.set_align("left middle");
            obj.style.set_font("bold antialias 10 Verdana");
            this.addChild(obj.name, obj);

            obj = new Button("btn_clearAll", "absolute", "307", "96", "110", "30", null, null, this);
            obj.set_taborder("27");
            obj.set_text("Delete All");
            obj.style.set_background("#eb707eff URL('images::fileUpDownload/file_btn_DeleteAll.png') 13 48");
            obj.style.set_border("0 none #808080ff");
            obj.style.set_color("white");
            obj.style.set_padding("0 0 0 30");
            obj.style.set_align("left middle");
            obj.style.set_font("bold antialias 10 Verdana");
            this.addChild(obj.name, obj);

            obj = new Button("btn_save", "absolute", "424", "96", "75", "30", null, null, this);
            obj.set_taborder("28");
            obj.set_text("Save");
            obj.style.set_background("#298ae1ff URL('images::fileUpDownload/file_btn_Save.png') 15 48");
            obj.style.set_border("0 none #808080ff");
            obj.style.set_color("white");
            obj.style.set_padding("0 0 0 30");
            obj.style.set_align("left middle");
            obj.style.set_font("bold antialias 10 Verdana");
            this.addChild(obj.name, obj);

            obj = new ExtFileUpload("extUpload", "absolute", "548", "8", "100", "85", null, null, this);
            obj.style.set_border("1 solid #808080ff");
            obj.set_multiselect("false");
            this.addChild(obj.name, obj);

            obj = new ExtFileDownload("extDownload", "absolute", "696", "8", "100", "85", null, null, this);
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 800, 400, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("FileUpDownload");
            		p.set_titletext("File Up&Down");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information

            
            // Remove Reference
            obj = null;
        };
        

        
        // User Script
        this.registerScript("Pattern_07.xfdl", function() {
        /***********************************************************************
         * 01. 업무구분 : File Upload&Download
         * 02. 화면명   : Pattern_07.xfdl
         * 03. 그룹설명 : 
         * 04. 작성일   :
         * 05. 작성자   :
         * 06. 수정이력 :
         ***********************************************************************
         *     수정일     작성자   내용
         ***********************************************************************
         *
         ***********************************************************************
        */

        /***********************************************************************
         * Script Include 
         ***********************************************************************/
        this.extUp;     //file upload object
        this.extDown;   //file download object
        this.fileConfig = { 
        		host : "http://localhost:8080/nexacro-sample/",
        		uploadUrl : "advancedUploadFiles.do",
        		//downloadUrl : "jsp/downloadFile.jsp?fileName=",
        		downloadUrl : "advancedDownloadFile.do?fileName=",
        		deleteUrl : "advancedDeleteFiles.do",
        		downImage : "images::fileUpDownload/img_file.png",
        		delImage : "images::fileUpDownload/btn_del.png",
        		allowTypes : ["jpg","jpeg","gif","png","bmp","txt","zip","7z","gzip","doc","docx","ppt","pptx","xls","xlsx","pdf"],
        		maxCount : 10,
        		maxSize : "200MB",
        		maxTotalSize : "200MB"
        	};
        	
        //아이콘별 확장자 목록.
        this.iconInfo = {
        		file_icon_ZIP: ["zip","rar","7z"],
        		file_icon_IMG: ["jpg", "jpeg", "gif", "png", "bmp"],
        		file_icon_TXT: ["txt", "xml"],
        		file_icon_DOC: ["doc", "docx"],
        		file_icon_XLS: ["xls", "xlsx"],
        		file_icon_PPT: ["ppt", "pptx"],
        		file_icon_PDF: ["pdf"],
        		file_icon_ETC: ["etc"] //위 확장자 목록에 일치하지 않을 경우. default icon
        	};
        	 
        	 
        //확장자별 아이콘 정보	 
        this.extToIcon = {}; 	 
        	 
        	 

        //XHR2 진행처리용
        this.tranFiles = {
        	added : [],				// 업로드 파일 정보
        	downloaded : [],		// 다운로드 파일 정보
        	transferFileSize : 0,	// 현재까지 전송된 파일 크기
        	transferFileIndex : 0,	// 현재 전송중인 파일 인덱스
        	preFileSizeSum : 0		// 현재까지 전송된 파일크기 합계
        };

        
        this.transferType = "all";

        
        this.FileUpDownloadRuntime_onload = function(obj,e)
        {
        	this.initFile();
        }

        
        /**
         * File upload/download 샘플실행을 위한 초기화
         * 
         *
         */
        this.initFile = function()
        {
        	//확장자별 파일아이콘 설정.
        	this.initExtToIcon();
        	
        	var extUp = this.extUpload;
        	this.extUp = extUp;
        	
        	extUp.set_multiselect(true);
        	extUp.setResponseZone(this, this.st_helpMessage, this.grd_files);	
        	
        	this.extDown = this.extDownload;
        		

        	//==============================================
        	//	브라우저별 기능 표시
        	//==============================================	
        	//Drag and Drop 미지원 브라우저 확인.
        	if(extUp.support.FileAPI == false) 
        	{
        		this.st_helpMessage.set_visible(false);
        		
        		this.st_support_dnd.style.set_color("red");
        		this.st_support_dnd.set_text("• Drag and Drop 미지원");
        	}
        	
        	//XHR2와 FileAPI 지원하지 않을 경우 그리드 format 변경. ex) file 전송량 표시용 progress bar
        	if (!extUp.support.XHR2)
        	{
        		this.grd_files.setFormat("format1");
        		this.grd_download.setFormat("format1");
        		
        		this.st_support_progressBar.style.set_color("red");
        		this.st_support_progressBar.set_text("• ProgressBar 미지원");
        	}	
        	
        	
        	//Multiple File Selection.
        	if (!extUp.support.MultipleInput)
        	{
        		this.st_support_multiple.style.set_color("red");
        		this.st_support_multiple.set_text("• File 다중선택 미지원");
        	}
        	else
        	{
                //safari5 multiple 파일 추가시 파일사이즈 0 버그 - 단건방식으로 처리
                //nexacro.BrowserVersion은 5.1.7에서 5만 리턴함.		
        		if ((this.extUp.multipleinput == true) && ((nexacro.Browser == "Safari") && (nexacro.BrowserVersion == 5)))
        		{
        		   this.st_support_multiple.style.set_color("blue");
        		   this.st_support_multiple.set_text("• File 다중선택 지원(※Safari 버그로 단건 처리)");
        		}		
        	}	

        }

        

        //=============================================
        //              파일 추가
        //=============================================
        //파일추가 버튼
        this.btn_selectFiles_onclick = function(obj,e)
        {
        	this.extUp.addFiles();
        	
        	if(this.st_helpMessage.visible)	
        	{
        		this.st_helpMessage.set_visible(false);
        	}	
        }

        

        //=============================================
        //              파일 삭제
        //=============================================
        //(그리드)첨부파일 삭제 아이콘 클릭
        this.grd_files_oncellclick = function(obj,e)
        {
        	var rmCellIdx = 2;
        	
        	//trace("e.cell=" + e.cell + ", rmCellIdx=" + rmCellIdx);
        	
        	if (e.cell == rmCellIdx)
        	{
        		this.removeFile(e.row);
        	}
        	
        }

        
        /**
         * 파일 삭제
         * @param {number} row 삭제대상 row
         */
        this.removeFile = function(row)
        {
        	if (Eco.isEmpty(row) || row < 0)
        	{
        		return;
        	}
        	

        	var dsFiles = this.ds_files;
        	
        	//해당 row의 rowtype이 normal이면 서버에서 삭제로직 추가.
        	//업로드가 성공한 후에는 ExtFileUpload에 존재하는 파일 정보가 사라진 상태.
        	if(dsFiles.getRowType(row) == 2) //수정된 상태
        	{
        		var fileId = dsFiles.getColumn(row, "fileid");
        		
        		trace("fileId="+fileId  + ", row="+row );
        		
        		//ExtFileUpDownload에서 내부적으로 가지고 있는 file정보 삭제.
        		this.extUp.removeFile(fileId);		
        		dsFiles.deleteRow(row);
        	}
        	else
        	{
        		dsFiles.deleteRow(row);
        		//업로드된 파일은 서버에서 삭제하기 위한 별도처리 필요.
        		alert("업로드된 파일을 서버에서 삭제하기 위한 별도처리 필요.");
        	}
        	
        	this.grd_files.redraw(); //그리드 갱신이 안되는 버그로 인해 redraw 처리. 2014.09.03 버전	

        
        }

        

        //파일 전체삭제 버튼
        this.btn_clearAll_onclick = function(obj,e)
        {
        	this.extUp.removeAll();	
        	this.ds_files.clearData();
        	this.grd_files.redraw(); //그리드 갱신이 안되는 버그로 인해 redraw 처리. 2014.09.03 버전
        	
        	//server에서 삭제하는 로직은 별도처리 해야함.
        }

        
        //=============================================
        //              파일 업로드 
        //=============================================

        //파일저장 버튼
        this.btn_save_onclick = function(obj,e)
        {
        	if(!this.isUpdateDataset(this.ds_files))
        	{
        		alert("변경된 내역이 없습니다");
        	}
        	else
        	{
        		this.uploadFiles();
        	}

        }

        /**
         * 업로드 할 대상 파일을 추출하고, 업로드 처리한다.
         */
        this.uploadFiles = function()
        {
        	var i, len, rowtype, 
        		type, fileid, addFileLen,
        		ds_files = this.ds_files;
        		
        	var extUp = this.extUp;	
        	addFileLen = extUp.getAddedFileLength() || 0;
        	
        	trace("\n\n== START uploadFiles addFileLen:" + addFileLen);
        	
        	if (addFileLen > 0)
        	{
        		if (!extUp.support.XHR2 || !extUp.support.FileAPI)
        		{
        			if (!this.img_loading.visible)
        			{
        				var topform = Eco.XComp.getTopLevelForm(this);
        				var l = Math.round((topform.getOffsetWidth() - this.img_loading.getOffsetWidth())/2);
        				var t = Math.round((topform.getOffsetHeight() - this.img_loading.getOffsetHeight())/2);
        				
        				this.img_loading.move(l, t, this.img_loading.getOffsetWidth(), this.img_loading.getOffsetHeight());
        				this.img_loading.set_visible(true);
        			}
        		}
        		
        		this.initProgressbar("upload");
        		
        		var url = this.fileConfig.host + this.fileConfig.uploadUrl;
        		
        		/*
        		런타임에서는 url parameter 설정만 가능!
        		
        		HTML5는 아래 내용 참고
        			//  upload files
        			//  @param {=string} path upload url 정보. default는 상단의 extUp.set_uploadurl()에서 설정한 정보.
        			//  @param {string} inDatasetsParam input dataset 정보
        			//  @param {string} outDatasetsParam output dataset 정보
        			//  @param {string} transferType 전송유형.(all: 대상파일을 한번에 전송(defalut), each: 개별 전송)
        			//  @param {number} datatype data 전송방식. 0:XML, 1:Binary(Runtime only), 2:SSV		
        			
        			Runtime에서는 extUpload_onsuccess 이벤트의 e.datasets에서 업로드된 파일 정보를 수신하고
        			HTML5는 parameter "ds_download=ds_output"로 정보를 수신함.			
        		*/
        		
        		
        		extUp.upload(url, "","ds_output=ds_output", this.transferType, 0);		
        		
         		//this.transferType = "each";
         		//extUp.upload(url, "ds_input=ds_input","", this.transferType, 0);
        	}
        }

        
        //=============================================
        //              파일 다운로드 
        //=============================================

        //다운로드 그리드 셀클릭
        this.grd_download_oncellclick = function(obj,e)
        {
        	this.downloadFile(e.row);
        }

        

        /**
         * 파일 다운로드 함수
         * @param {number} row 다운로드 대상 row
         */
        this.downloadFile = function(row)
        {
        	if (Eco.isEmpty(row) || row < 0)
        	{
        		return;
        	}
        	
        	var ds_download = this.ds_download;
        		var	fileId,
        			fileName,
        			fileSize = 0,
        			fileInfo,
        			downloadUrl;
        		
        	var tranFiles = this.tranFiles;
        	tranFiles.downloaded = [];
        	
        	//progressbar 초기화
        	ds_download.setColumn(row, "prog", 0);
        	
        	
        	
        	fileId = ds_download.getColumn(row, "fileid");
        	fileName = ds_download.getColumn(row, "filename");
        	fileSize = ds_download.getColumn(row, "filesize");
        	fileInfo = {"id": fileId, "name": fileName, "size": fileSize, "row": row};
        	
        	tranFiles.downloaded.push(fileInfo);
        	var downloadUrl = this.fileConfig.host + this.fileConfig.downloadUrl;
        	
        	trace("downloadUrl=" + downloadUrl);
        	
        	/*
        	 * download file
        	 * @param {string} url 다운로드 fullPath url
        	 * @param {string} filename 파일저장시 적용할 file name.(지원가능한 브라우저만 적용됨. 런타임 미지원)
        	 * @return {boolean} 다운로드 성공여부
        	 */ 
        	var encodeFileName = escape(encodeURIComponent(fileName));
        	this.extDown.download(downloadUrl + encodeFileName, fileName);		
        }

        
        //=============================================
        //              ExtFileUpload Event 
        //=============================================

        /**
         * 파일 다이얼로그를 통해 파일을 선택했을 때 발생하는 이벤트입니다.
         * @param {ExtFileUpload} obj ExtFileUpload
         * @param {nexacro.ExtFileUploadChangeEventInfo} e ExtFileUploadChangeEventInfo
         */
        this.extUpload_onchange = function(obj,e)
        {
        	//trace("extUpload_onchange index=" + e.index + ", newvalue=" + e.newvalue   + ", oldvalue=" + e.oldvalue);
        	trace("extUpload_onchange index=" + e.index + ", files=" + e.files);
        	var ds = this.ds_files;
        	var index = e.index;
         	var fileList = e.files;
         	var fileCount = fileList.length;
         	var fileSupport = (this.extUp.support.XHR2 && this.extUp.support.FileAPI);
        	
        	for(var i=0; i<fileCount; i++)
        	{
        		var file = fileList[i];
        		var fileId   = file.id;
        		var fileName = file.name;
                var fileSize = file.size;
                var fileType = file.type;
                			
                trace( "   fileId="+fileId + ",fileName="+fileName + ",fileSize="+fileSize + ",fileType="+fileType);			
                			
        		var dsCount = ds.getRowCount();
        		var cond;
        		if (fileSupport)
        		{
        			var totalSize = ds.getSum("filesize") + fileSize;
        			cond = {"name" : fileName, "length" : dsCount, "size" : fileSize, "totalSize" : totalSize};
        		}
        		else
        		{
        			cond = {"name" : fileName, "length" : dsCount};
        		}
        		
        		//var cond = {"name" : fileName, "length" : dsCount};
        		var valid = this.validateFile(cond);
        		
        		//파일 유형 에러
        		if (valid == 0)
        		{
        			this.extUp.removeFile(fileId);
        			return;
        		}
        		else if (valid == -1) //최대 파일첨부가능 건수 또는 size 에러.
        		{
        			this.extUp.removeFile(fileId);
        			return;
        		}
        		
        		
        		var findRow = ds.findRow("filename", fileName);

        		if(findRow > -1) {
        			alert("중복된 파일명이 존재합니다.  " + fileName);
        			this.extUp.removeFile(fileId);
        			return;			
        		}
        		
        		// 업로드 파일 정보 데이타 구성
        		var addidx = ds.addRow();
        		var downImage = this.getFileIcon(fileName); 
        		ds.setColumn(addidx, "fileimg", downImage);
        		ds.setColumn(addidx, "fileid", fileId);
        		ds.setColumn(addidx, "filename", fileName);
        		
        		if(fileSize > 0)
        		{
        			ds.setColumn(addidx, "filesize", fileSize);
        		}
        		
        		
        		ds.setColumn(addidx, "filetype", fileType);
        		ds.setColumn(addidx, "prog", 0);
        		ds.setColumn(addidx, "rmimg", this.fileConfig.delImage);		
        	}
        	
        }

        

        /*
         *   통신 성공시에 발생하는 이벤트입니다
         */
        this.extUpload_onsuccess = function(obj,e)
        {
        	trace("\n\n >>>> e.type=" + e.type);
        	trace("extUpload_onsuccess errorcode=" + e.errorcode + ", errormsg=" + e.errormsg   + ", datasets=" + e.datasets + ", url=" + e.url);
        		
        	trace("ds_output::"+this.ds_output.saveXML());	
        		
        	if (this.img_loading.visible)
        	{
        		this.img_loading.set_visible(false);
        	}
        	
        	this.ds_files.applyChange();
        	
        	trace("e.datasets::"+e.datasets);
        	
        	if(e.datasets)
        	{
        		var outputDatasets = e.datasets;
        		if(outputDatasets.length == 0) return;
        		
        		var outDs = outputDatasets[0];
        		var ds = this.ds_download;
        		
        		//개별전송 처리로직
        		if(this.transferType == "each") {
        			if (this.extUp.support.XHR2) {
        				var row = ds.addRow();
        				ds.copyRow(row, outDs, 0);
        				
        			} else {
        				ds.copyData(outDs);
        			}		
        		
        		} else {
        			ds.copyData(outDs);
        		
        		}		
        	}
        	
        	trace("visible true>>>>>>>1");
        	
        	this.setDownloadFileIcon();	
        	
        	trace("visible true>>>>>>>2");
        	
        	this.st_downloadTitle.set_visible(true);
        	this.st_downloadBg.set_visible(true);
        	this.grd_download.set_visible(true);	
        }

        
        /**
         *   통신 오류 시 발생하는 이벤트입니다
         */
        this.extUpload_onerror = function(obj,e)
        {
          //런타임에서 e.errortype; <-- 원하는 type이 아닌 error object 가 전송됨.

        	alert("에러발생 \extUpload_onerror index=" + e.index  + ", errortype=" + e.errortype   + "\n, statuscode=" + e.statuscode + ", requesturi=" + e.requesturi);
        	
        	if (this.img_loading.visible)
        	{
        		this.img_loading.set_visible(false);
        	}	
        	
        }

        
        /**
         * [HTML5 Only] XMLHttpRequest 통신시 readystate 속성 변경 event
         * @param {ExtFileUpload} obj ExtFileUpload
         * @param {ExtFileReadystateChangEventInfo} e ExtFileReadystateChangEventInfo
         */
        this.extUpload_onreadystatechange = function(obj,e)
        {
        	trace("extUpload_onreadystatechange readyState=" + e.readyState + ", status=" + e.status);
        	//trace(this.name + ", " + this.parent.name + ", ok extUpload_onreadystatechange called " + e.readyState + ", " + e.status);
        	
        	if(e.readyState == 4 ){
        		if(e.status != 200) {
        			trace("extUpload_onreadystatechange > Fail request!!");
        			//TODO
        			//에러 발생에 따른 UI 처리
        			
        			var ds = this.ds_files;
        			var count = ds.rowcount;
        			for(var i=0; i<count; i++)
        			{
        				ds.setColumn(i, "prog", -1);
        			}
        			
        		} else if(e.status == 200) {
        			//trace("Success request.");
        		}
        	}	
        }

        

        

        /**
         * [HTML5 Only] XMLHttpRequest가 데이터를 보내거나 받는 동안 서버에서 정의된 간격으로 발생합니다.
         * file upload & download 진행시 progress bar 처리용
         * @param {ExtFileUpload} obj ExtFileUpload
         * @param {ExtFileProgress} e ExtFileProgress
         */
        this.extUpload_onprogress = function(obj,e)
        {
        	//trace("\n### extUpload_onprogress " + e.type + "," + e.loaded + ",e.lengthComputable=" +e.lengthComputable +", e.fileId=" + e.fileId);

        	var addedFile = obj.getAddedFile(),
        		addedFileLength = addedFile.length || 0;
        	
        	if (e.lengthComputable && (addedFileLength > 0))
        	{
        		//개별파일 전송시. "each"
        		var fileId = e.fileId;
        		if(fileId){
        			var currentFileSize = e.loaded; // 현재까지 전송된 전체 사이즈
        			var totalFileSize = e.total;   // 전체 사이즈
        					
        			var ds = this.ds_files;
        			var row = ds.findRow("filename", fileId);
        			var transferFileRate = Math.floor((currentFileSize / totalFileSize) * 100);

        			ds.setColumn(row, "prog", transferFileRate);
        			ds.setColumn(row, "filesize", totalFileSize);
        			ds.setColumn(row, "tranfilesize", currentFileSize);					
        		
        			return;
        		}
        		
        		
        		var transferFileSize,			// 파일 전송 사이즈
        			transferFileRate,			// 파일 전송 진행율
        			transferFile,				// 파일
        			currentFileId,				// 파일 ID
        			currentFileSize,			// 파일 크기
        			currentFileName,			// 파일명
        			ds_files = this.ds_files,
        			dsRow = -1;

        		var tranFiles = this.tranFiles;
        		// 현재까지 전송된 전체 사이즈
        		tranFiles.transferFileSize = e.loaded;
        		
        		// 현재까지 전송된 크기가 이전파일 크기 합계보다 크면 진행바 상태 표시를 반복 수행
        		while ((tranFiles.transferFileSize > tranFiles.preFileSizeSum) && (tranFiles.transferFileIndex < addedFileLength))
        		{
        			currentFileId = addedFile[tranFiles.transferFileIndex].id;
        			dsRow = ds_files.findRow("fileid", currentFileId);
        			
        			transferFile = addedFile[tranFiles.transferFileIndex].file;
        			currentFileSize = transferFile.size;
        			currentFileName = transferFile.name;
        			
        			ds_files.setColumn(dsRow, "filesize", currentFileSize);
        		
        			transferFileSize = tranFiles.transferFileSize - tranFiles.preFileSizeSum;
        			transferFileRate = Math.floor((transferFileSize / currentFileSize) * 100);
        			
        			
        			trace("@@@@ transferFileRate="+transferFileRate + ", e.loaded="+e.loaded + ",e.total="+e.total + ",transferFileSize="+transferFileSize);
        			
        			// 현재 파일 전송이 완료되지 않은 경우는 다음 onStatus 이벤트 호출 대기
        			if (transferFileRate < 100)
        			{	
        				ds_files.setColumn(dsRow, "prog", transferFileRate);
        				ds_files.setColumn(dsRow, "tranfilesize", transferFileSize);
        				
        				break;
        			}
        			
        			// 현재 파일 전송 완료 또는 초과하는 경우는 현재 전송파일 완료 진행 처리후 while 반복문 로직 수행
        			if (transferFileRate >= 100)
        			{
        				transferFileSize = currentFileSize;	// 현재 파일 전송 사이즈
        				transferFileRate = 100;	// 현재 파일 전송 진행율
        				
        				ds_files.setColumn(dsRow, "prog", transferFileRate);
        				ds_files.setColumn(dsRow, "filesize", currentFileSize);
        				ds_files.setColumn(dsRow, "tranfilesize", transferFileSize);
        				
        				// 다음 전송 파일 정보 설정
        				tranFiles.preFileSizeSum += currentFileSize;	// 이전 파일 사이즈 합계
        				tranFiles.transferFileIndex++;
        				
        				if (tranFiles.transferFileIndex >= addedFileLength)
        				{
        					break;
        				}
        			}
        		}
        		
        	}
        }

        //=============================================
        //              ExtFileDownload Event 
        //=============================================
        /**
         *   통신 오류 시 발생하는 이벤트입니다
         */
        this.extDownload_onerror = function(obj,e)
        {
          //런타임에서 e.errortype; <-- 원하는 type이 아닌 error object 가 전송됨.

        	
        	alert("에러발생 \extDownload_onerror index=" + e.index  + ", errortype=" + e.errortype   + "\n, statuscode=" + e.statuscode + ", requesturi=" + e.requesturi);
        	
        	this.resetTranFilesInfo();
        	
        	if (this.img_loading.visible)
        	{
        		this.img_loading.set_visible(false);
        	}	
        	
        }

        
        /**
         *   다운로드 성공시에 발생하는 이벤트입니다
         */
        this.extDownload_onsuccess = function(obj,e)
        {
        	trace("	 ★ extFileDownload_onsuccess url=" + e.url);
        	
        	this.resetTranFilesInfo();

        	if (this.img_loading.visible)
        	{
        		this.img_loading.set_visible(false);
        	}
        	
        	if(!Eco.isEmpty(e.url))
        	{
        		alert("Successfully downloaded.");
        	}
        	else
        	{
        		alert("다운로드 실패");
        	}
        	
        }

        
        this.resetTranFilesInfo = function()
        {
        	var downFiles = this.tranFiles.downloaded;
        	
        	Eco.array.removeAt(downFiles, 0);		// 다운 파일 삭제
        	this.tranFiles.downloaded = [];	

        }

        

        /**
         * [HTML5 Only] XMLHttpRequest가 데이터를 보내거나 받는 동안 서버에서 정의된 간격으로 발생합니다.
         * file upload & download 진행시 progress bar 처리용
         * @param {ExtFileUpload} obj ExtFileUpload
         * @param {ExtFileProgress} e ExtFileProgress
         */
        this.extDownload_onprogress = function(obj,e)
        {
        	trace("extDownload_onprogress " + e.type + "," + e.loaded);
        	if (e.lengthComputable)
        	{
        		var status,									 // 파일 전송 진행율
        			currentFileSize,						 // 파일 크기
        			transferCurrentFileSize,				 // 파일 전송 사이즈
        			downFiles = this.tranFiles.downloaded,	 // 다운로드 대상 파일 목록
        			currentRow = -1,
        			ds_download = this.ds_download;
        			
        		status = Math.floor((e.loaded / e.total) * 100);
        		
        		currentFileSize = downFiles[0].size;
        		currentRow = downFiles[0].row;
        		
        		transferCurrentFileSize = Math.floor(currentFileSize * (status / 100));
        		
        		trace(" download 진행: prog=" + status + ",tranfilesize="+transferCurrentFileSize+", filesize="+  currentFileSize);
        		ds_download.setColumn(currentRow, "prog", status);
        		ds_download.setColumn(currentRow, "filesize", currentFileSize);
        		ds_download.setColumn(currentRow, "tranfilesize", transferCurrentFileSize);
        	}

        }

        
        //=============================================
        //              Function 
        //=============================================
        /**
         * 진행바 초기화
         * @param {string} type 초기화 type
         */
        this.initProgressbar = function(type)
        {	
        	if (type == "upload")
        	{
        		this.tranFiles.preFileSizeSum = 0;
        		this.tranFiles.transferFileIndex = 0;
        	}
        }

        

        /**
         * upload file 정보 초기화.
         * @param {number} errorcode error code
         */
        this.resetUploadFiles = function(errorcode)
        {
        	var fileid,
        		addIdx = -1,
        		ds_files = this.ds_files,
        		ds_download = this.ds_download,
        		addedFiles = this.tranFiles.added,
        		pThis = this,
        		rtn = true,
        		filesize = 0, 
        		totalSize = 0,
        		cond,
        		grd_files = this.grd_files,
        		rmCellIdx = 4,
        		delImage = this.fileConfig.delImage;
        	var extUp = this.extUp;
        	Eco.array.forEach(addedFiles, function(object, index) {
        		fileid = object.id;
        		addIdx = ds_files.findRow("fileid", fileid);
        		
        		if (addIdx > -1)
        		{
        			extUp.removeFile(fileid);
        			
        			if (!extUp.support.XHR2 || !extUp.support.FileAPI)
        			{
        				filesize = ds_download.getColumn(0, "filesize") || 0;	// 무조건 단건임
        				totalSize = ds_files.getSum("filesize") + filesize;
        				
        				cond = {"size" : filesize, "totalSize" : totalSize};
        				if (errorcode < 0 || pThis.validateFile(cond) < 1)
        				{
        					pThis.resetRemoveFiles(addIdx);
        					ds_download.clear();
        					object = null;
        					rtn = false;
        					return rtn;
        				}
        				
        				if (!Eco.isEmpty(filesize) && filesize > 0)
        				{
        					ds_files.setColumn(addIdx, "filesize", filesize);
        				}
        				rmCellIdx = 3;
        			}
        			
        			ds_files.setColumn(addIdx, "rmimg", delImage);
        			
        			object = null;
        		}
        	}, this);
        	
        	// 수정모드시 별도 추가 로직 필요.
        	this.tranFiles.added = [];
        	return rtn;
        }

        

        /**
         * 다운로드 파일의 확장자에 해당하는 이미지 설정.
         */
        this.setDownloadFileIcon = function()
        {
        	var ds = this.ds_download;
        	var count = ds.rowcount;
        	for(var i=0; i<count; i++)
        	{
        		var fileName = ds.getColumn(i, "filename");
        		
        		var icon = this.getFileIcon(fileName); 
        		ds.setColumn(i, "fileimg", icon);
        	}
        }

        

        /**
         * 파일 확장자에 해당하는 이미지경로 반환.
         * @param {string} fileName file name
         * @return {string} image full path
        */
        this.getFileIcon = function(fileName)
        {
        	if(Eco.isEmpty(fileName)) return;
        	
        	fileName = fileName.toLowerCase();
        	var ext = (/[.]/.exec(fileName)) ? /[^.]+$/.exec(fileName) : undefined;
        	var icon = this.extToIcon[ext];
        	
        	if(icon == undefined) ext = "etc";

        	return "images::fileUpDownload/" + this.extToIcon[ext] + ".png";
        }

        /**
         * 파일 확장자에 이미지 정보를 구성한다.
        */
        this.initExtToIcon = function()
        {
        	var extToIcon = this.extToIcon;
        	var iconInfo = this.iconInfo;

        	for (var name in iconInfo) {
        		var len = iconInfo[name].length;
        		for (var i=0; i<len; i++) 
        		{
        			extToIcon[iconInfo[name][i]] = name;
        		}
        	}

        }

        

        /**
        * 파일 추가시 validate 체크
        * @param {object} cond 체크 대상
        */
        this.validateFile = function(cond)
        {
        	var rtn = 1;
        	Eco.object.Each(cond, function(prop, val, object) {
        		var result = "";
        		if (prop == "name")
        		{
        			var fileExt = val.slice(val.lastIndexOf(".")+1).toLowerCase();
        			if(!Eco.array.contains(this.fileConfig.allowTypes, fileExt))
        			{
        				alert("'" + fileExt + "' 유형의 파일은 업로드가 불가능합니다. [" + val + "]");
        				rtn = 0;
        				return false;
        			}
        			/* fileAPI file.type, mime type  - http://www.iana.org/assignments/media-types
        			console.log("file.type:" + file.type);
        			if(!file.type.match("image.*")) 
        			{
        				return 0;
        			}
        			*/
        		}
        		else if (prop == "length")
        		{
        			if (val >= this.fileConfig.maxCount)
        			{
        				alert(this.fileConfig.maxCount + "건 이상의 파일 업로드는 허용되지 않습니다.");
        				rtn = -1;
        				return false;
        			}	
        		}
        		else if (prop == "size")
        		{	
        			if (!isNaN(val) && (val >= this.sizeToByte(this.fileConfig.maxSize)))
        			{
        				alert(this.fileConfig.maxSize + " 이상의 파일 업로드는 허용되지 않습니다.");
        				rtn = 0;
        				return false;
        			}
        		}
        		else if (prop == "totalSize")
        		{	
        			if (!isNaN(val) && (val >= this.sizeToByte(this.fileConfig.maxTotalSize)))
        			{
        				alert(this.fileConfig.maxTotalSize + " 이상의 파일 업로드는 허용되지 않습니다.");
        				rtn = -1;
        				return false;
        			}
        		}
        	}, this);
        	
        	return rtn;
        }

        
        /**
         * byte를 size로 변환처리한다.
         * @param {number} filesize file size
         * @param {string} type 표시형태
         * @return {string} file size
         */
        this.bytesToSize = function(filesize,type)
        {
        	if (Eco.isEmpty(filesize)) return;
        	
            var size = filesize  + " bytes",
                multiples = ["KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"],
                idx = 0, 
                approx = 0;
        	
            for (idx = 0, approx = filesize / 1024; approx > 1; approx /= 1024, idx++) 
            {
                if (type == 1)
                {
                    size = approx.toFixed(2) + multiples[idx] + " (" + filesize + " bytes)";
                }
                else if (type == 2)
                {
                    size = approx.toFixed(2);
                }
                else
                {
                    size = approx.toFixed(2) + multiples[idx];
                }
            }
          
            return size;
        }

        /**
         * size를 byte로 변환처리한다.
         * @param {number} fileSize file size
         * @return {number} file size
         */
        this.sizeToByte = function(fileSize) 
        {
        	var unit = fileSize.match(/[^\d]+/g),
        		size = fileSize.match(/\d+/);

        	unit = unit ? unit[0].toLowerCase() : "";
        	size = size ? size[0] : fileSize;
        	
        	if (unit == "mb") 
        	{
        		return size * 1024 * 1024;
        	}
        	else if (unit == "gb") 
        	{
        		return size * 1024 * 1024 * 1024;
        	}
        	else if (unit == "tb") 
        	{
        		return size * 1024 * 1024 * 1024 * 1024;
        	}
        	else if (unit == "") 
        	{
        		return size;
        	}
        	else 
        	{
        		return fileSize;
        	}
        }

        

        
        /**
         * 데이터셋 변경유무 확인
         * @param {dataset} ds Dataset
         * @return {boolean} Dataset update 여부
        */
        this.isUpdateDataset = function(ds)
        {
        	if(Eco.isEmpty(ds)) 
        	{
        		return false;
        	}
        	
        	if(ds.getRowCount() < 1) return false;
        	
        	if (ds.getDeletedRowCount() > 0) 
        	{
        		return true;
        		
        	}
        	
        	if (ds.findRowExpr("(this.getRowType(rowidx)==Dataset.ROWTYPE_UPDATE)||(this.getRowType(rowidx)==Dataset.ROWTYPE_INSERT)") > -1) 
        	{
        		return true;
        	}
        	
        	return false;
        }

        

        /**
         * file명과 size를 반환한다.
         * @param {number} rowIndex Dataset current row
         * @return {string} file + size
        */
        this.getFileNameWithSize = function(ds,rowIndex)
        {
        	
        	var fileName = ds.getColumn(rowIndex, "filename");
        	if(Eco.isEmpty(fileName)) return "";
        	
        	var fileSize = ds.getColumn(rowIndex, "filesize");
        	
        	if(Eco.isEmpty(fileSize))
        	{
        		return fileName;
        	}

        	var displayFileSize = this.bytesToSize(fileSize);
        	
        	return fileName + " (" + displayFileSize + ")";
        }

        this.ds_output_onload = function(obj,e)
        {
        	alert(this.ds_output.saveXML());
        }
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.ds_output.addEventHandler("onload", this.ds_output_onload, this);
            this.addEventHandler("onload", this.FileUpDownloadRuntime_onload, this);
            this.grd_files.addEventHandler("oncellclick", this.grd_files_oncellclick, this);
            this.grd_download.addEventHandler("oncellclick", this.grd_download_oncellclick, this);
            this.btn_selectFiles.addEventHandler("onclick", this.btn_selectFiles_onclick, this);
            this.btn_clearAll.addEventHandler("onclick", this.btn_clearAll_onclick, this);
            this.btn_save.addEventHandler("onclick", this.btn_save_onclick, this);
            this.extUpload.addEventHandler("onchange", this.extUpload_onchange, this);
            this.extUpload.addEventHandler("onerror", this.extUpload_onerror, this);
            this.extUpload.addEventHandler("onprogress", this.extUpload_onprogress, this);
            this.extUpload.addEventHandler("onreadystatechange", this.extUpload_onreadystatechange, this);
            this.extUpload.addEventHandler("onsuccess", this.extUpload_onsuccess, this);
            this.extDownload.addEventHandler("onerror", this.extDownload_onerror, this);
            this.extDownload.addEventHandler("onprogress", this.extDownload_onprogress, this);
            this.extDownload.addEventHandler("onsuccess", this.extDownload_onsuccess, this);

        };

        this.loadIncludeScript("Pattern_07.xfdl");

       
    };
}
)();
