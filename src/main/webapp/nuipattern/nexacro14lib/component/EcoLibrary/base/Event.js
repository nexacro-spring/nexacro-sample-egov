/**
 * @fileoverview
 * XComp 관련 event add, remove 할 때 사용하는 helper
 */

if ( !JsNamespace.exist("Eco.XComp.Event") )
{
	/**
	 * 
	 * @description
	 * XComp 관련 event add, remove 할 때 사용하는 helper<br>
	 * 그 외 dragging 처리를 용이하게 하는 makeDraggable, repeat처리를 용이하게 하는 makeRepeatable 과 <br>
	 * 부드러운 animation 처리를 위한 requestAnimationFrame, cancelAnimationFrame 기능을 포함한다.
	 * 
	 * @namespace
	 * @name Eco.XComp.Event
	 * @memberof! <global>
	 */	 
	JsNamespace.declare("Eco.XComp.Event", {
	
		/**
		 * 주어진 XComp을 가지고 주어진 events 정보로 eventHandler함수들을 추가한다.<br>
		 * 두번째 events는 이벤트명=eventHandler함수로 이루어진 object collection이다.<br>
		 * event가 fire할 때 eventHandler함수가 호출되는데 그 함수 내부의 this는 주어진 scope가 된다.<br>
		 * @example
		 *
		 * this.onLbuttonDownHandler = function(obj, e)
		 * {
		 *    trace(this)//Form
		 * }
		 * this.onLbuttonUpHandler = function(obj, e)
		 * {
		 *    trace(this)//Form
		 * }
		 *
		 * var events = {"onlbuttondown": this.onLbuttonDownHandler, "onlbuttonup": this.onLbuttonUpHandler};
		 *
		 * Eco.XComp.Event.add(this.st_sample01, events, this);
		 *
		 * @param {XComp} XComp events 설정할 대상 XComp.
		 * @param {object} events 이벤트명=eventHandler함수로 정의된 object collection.
		 * @param {*} scope scope로 설정할 대상으로 eventHandler 내부 루틴에 this에 해당하는 값
		 * @memberOf Eco.XComp.Event
		 */	
		"add": function(XComp, events, scope)
		{
			for (var type in events)
			{
				if ( events.hasOwnProperty(type) )
				{
					XComp.addEventHandler(type, events[type], scope);
				}
			}
		},
		
		/**
		 * 주어진 XComp을 가지고 주어진 events 정보로 eventHandler함수들을 제거한다.<br>
		 * 두번째 events는 이벤트명=eventHandler함수로 이루어진 object collection이다.
		 * @example
		 *
		 * this.onLbuttonDownHandler = function(obj, e)
		 * {
		 *    trace(this)//Form
		 * }
		 * this.onLbuttonUpHandler = function(obj, e)
		 * {
		 *    trace(this)//Form
		 * }
		 *
		 * var events = {"onlbuttondown": this.onLbuttonDownHandler, "onlbuttonup": this.onLbuttonUpHandler};
		 *
		 * Eco.XComp.Event.remove(this.st_sample01, events, this);
		 *
		 * @param {XComp} XComp events 설정할 대상 XComp.
		 * @param {object} events 이벤트명=eventHandler함수로 정의된 object collection.
		 * @param {*} scope scope로 설정할 대상으로 eventHandler 내부 루틴에 this에 해당하는 값
		 * @memberOf Eco.XComp.Event
		**/		
		"remove": function(XComp, events, scope)
		{
			for (var type in events)
			{
				if ( events.hasOwnProperty(type) )
				{			
					XComp.removeEventHandler(type, events[type], scope);
				}
			}
		},
		
		/**
		 * 주어진 XComp에 drag 기능를 설정한다.<br>
		 * 두번째 param 값은 function이거나, object type으로 값이 주어져야 한다.<br>
		 * function이면 dragging 되는 시점에 호출되는 함수로 설정된다.<br>
		 * object이면 object.start, object.end, object.dragging 으로 각각 함수값이 주어지는데.<br>
		 * start는 drag시작되는 시점에 호출되는 함수로 return 값이 false 일 경우 드래그를 실행하지 않는다.<br>
		 * end는 drag종료되는 시점에 호출되는 함수<br>
		 * dragging는 dragging 하는 시점에 계속 호출되는 함수이다.<br>
		 * 네번째 param인 addArgs로 주어지는 array는 함수 호출시에 추가되는 arguments이다.<br>
		 * 각 함수의 arguments은 다음과 같다.<br>
		 * start                      | end                       | dragging <br>
		 * ------------------------------------------------------------------------------------------------------<br>
		 * addArgs[0], addArg[1], ... |addArgs[0], addArg[1], ... |offsetX, offsetY, addArgs[0], addArg[1], ...<br>
		 * <br>
		 * 세번째 param인 scope는 호출되는 함수 내부의 this 로 지정되며 만약 scope를 생략하면 this는 form이 된다.<br>
		 * offsetX, offsetY param 값은 dragging이 발생하는 시점의 x, y기준으로 그 다음에 발생되는 dragging 시점의 x, y 값의 차이가 주어지는데<br>
		 * 만약 다섯번째 isOffsetFromStart 값을 true로 주어지면 offsetX, offsetY 는 최초 drag가 시작되는 시점의 x, y 기준으로 dragging 발생하는 x, y 값의 차이가 주어진다.<br>
		 * 여섯 번째 delayTask 값을 true로 주어지면 dragging 함수 호출 하여 루틴이 실행되고 있는 중에 다시 dragging 함수가 호출하게 되면 호출를 생략하는 하는 처리이다.
		 * @example
		 *
		 * // 1) 2번째 인자를 function 으로 선언 시 drag 진행 시점에 정의된 함수가 호출된다.
		 * Eco.XComp.Event.makeDraggable(this.st_sample02, this.onDragging, this, [this.st_sample02]);
		 *
		 * // 2) 2번째 인자를 object 로 선언 시 drag 시작, 진행, 종료 시점에 정의된 함수가 호출된다.
		 * var draggingFunc = {
		 *      'start': this.onDragStart,
		 *      'dragging': this.onDragging,
		 *      'end': this.onDragEnd
		 * };
		 * Eco.XComp.Event.makeDraggable(this.st_sample02, draggingFunc, this, [this.st_sample02]);		 
		 *
		 * // drag start 시점에 처리할 함수
		 * this.onDragStart = function(comp)
		 * {	
		 *     trace(comp.name + " Drag Start !!");
		 *	   comp.set_text("Drag Start !!");
		 * }
		 *
		 * // dragging 시점에 처리할 루틴을 정의한 함수
		 * this.onDragging = function(offsetX, offsetY, obj)
		 * {
		 *     var x = obj.getOffsetLeft() + offsetX,
		 *         y = obj.getOffsetTop() + offsetY;	
		 *
		 *     obj.move(x, y);
		 * }
		 *
		 * @param {XComp} XComp draggable하고자 하는 xcomp.
		 * @param {object|function} draggingFunc dragging 처리 루틴에 해당하는 함수들.
		 * @param {*=} scope scope로 설정할 대상.
		 * @param {array=} addArgs 설정된 함수 호출시 추가할 arguments을 array로 설정.
		 * @param {boolean=} isOffsetFromStart offsetX, offsetY arguments의 drag시작 시점을 기준할 것인지 여부.
		 * @param {boolean=} delayTask 반복되어지는 dragging함수 호출을 중간에 겹치면 delay할 것인지 여부
		 * @memberOf Eco.XComp.Event
		**/
		"makeDraggable": function(XComp, draggingFunc, scope, addArgs, isOffsetFromStart, delayTask)
		{
			if ( Eco.isObject(draggingFunc) )
			{
				XComp._dragFuncs = {
					"draggingFunc": draggingFunc.dragging,
					"draggingStartFunc": draggingFunc.start,
					"draggingEndFunc": draggingFunc.end,
					"args": addArgs,
					"isOffsetFromStart": isOffsetFromStart
					};
			}
			else
			{
				XComp._dragFuncs = {
					"draggingFunc": draggingFunc,
					"args": addArgs,
					"isOffsetFromStart": isOffsetFromStart
					};
			}
			Eco.XComp.Event.add(XComp,
					{
						"onlbuttondown": Eco.XComp.Event._dragDownHandler,
						"onlbuttonup": Eco.XComp.Event._dragUpHandler
					}, scope);
			
			XComp.__scope = scope;
			
			if ( delayTask )
			{
				XComp._delayDragProc = true;
			}
			else
			{
				XComp._delayDragProc = null;
			}
		},

		/**
		 * 주어진 XComp에 drag 기능를 해제한다.
		 * @example
		 *
		 * Eco.XComp.Event.clearDraggable(this.st_sample02);
		 *
		 * @param {XComp} XComp draggable기능을 해제하는 xcomp.
		 * @memberOf Eco.XComp.Event
		**/
		"clearDraggable": function(XComp)
		{
			if ( XComp._dragFuncs )
			{
				XComp._dragFuncs = null;
				XComp._delayDragProc = null;
				Eco.XComp.Event.remove(XComp,
						{
							"onlbuttondown": Eco.XComp.Event._dragDownHandler,
							"onlbuttonup": Eco.XComp.Event._dragUpHandler
						});
						
				var topForm = Eco.XComp.getTopLevelForm(XComp.parent);
				var uniqueId = XComp._unique_id;
				
				var hasDragComp = false;
				var dragComps = topForm.__makeDraggableTargets;
				
				for (var id in dragComps)
				{
					if ( dragComps.hasOwnProperty(id) )
					{
						if ( id == uniqueId )
						{
							delete dragComps[id];
						}
						else
						{
							hasDragComp = true;
						}
					}
				}
				
				// top form에 drag comp가 없다면 핸들러 및 속성 제거
				if ( !hasDragComp && topForm.findEventHandler("onmousemove", Eco.XComp.Event._dragMoveHandler) > -1 )
				{
					topForm.__makeDraggableTargets = null;
					topForm.__makeDraggableCurComp = null;
					
					delete topForm.__makeDraggableTargets;						
					delete topForm.__makeDraggableCurComp;
					
					topForm.removeEventHandler("onmousemove", Eco.XComp.Event._dragMoveHandler);
				}
			}
		},

		/**
		 * dragging 기능을 처리하기 위해 내부적으로 설정하는 onlbuttondown event의 handler함수
		 * @param {XComp} obj 발생한 event의 XComp.
		 * @param {EventInfo} e EventInfo 객체.
		 * @private
		 * @memberOf Eco.XComp.Event
		**/
		"_dragDownHandler": function(obj, e)
		{
			var topForm = Eco.XComp.getTopLevelForm(obj.parent);
			if ( topForm.findEventHandler("onmousemove", Eco.XComp.Event._dragMoveHandler) < 0 )
			{
				topForm.addEventHandler("onmousemove", Eco.XComp.Event._dragMoveHandler);
			}
			
			// top form 에 drag 대상 컴포넌트로 지정하기 위해 추가
			if ( !topForm.__makeDraggableTargets )
			{
				topForm.__makeDraggableTargets = {};			
			}
			
			topForm.__makeDraggableTargets[obj._unique_id] = true;	
			
			// 버튼의 mousemove 이벤트를 topform 에 발생하도록
			// (Form.Div.Button 과 같은 중첩의 경우 버블링이 안된다.)
			Eco.XComp.Event._lockMouseEvent(topForm);
			
			var pt = {x:e.screenX, y:e.screenY};
			obj._drag = {
				"startPt": pt,
				"offsetX": 0,
				"offsetY": 0,
				"isOffsetFromStart": false
			};
		
			// drag 대상으로 지정
			topForm.__makeDraggableCurComp = obj;
			
			// scope 가 없으면 topForm 지정
			if ( !obj.__scope )
			{
				obj.__scope = topForm;
			}
			
			var func = obj._dragFuncs,
				addArgs;

			if ( func )
			{
				if ( func.isOffsetFromStart === true ) obj._drag.isOffsetFromStart = true;
				addArgs = func.args;
				func = func.draggingStartFunc;
			}
			if ( func )
			{
				var args = [];
				if ( addArgs )
				{
					args = args.concat(addArgs);
				}
				
				// [2013.11.13] 리턴값에 따라 드래그 실행 중지
				var ret = func.apply(this, args);
				if ( ret === false )
				{
					obj._drag = null;
				}
			}
		},

		/**
		 * dragging 기능을 처리하기 위해 내부적으로 설정하는 onlbuttonup event의 handler함수
		 * @param {XComp} obj 발생한 event의 XComp.
		 * @param {EventInfo} e EventInfo 객체.
		 * @private
		 * @memberOf Eco.XComp.Event
		**/
		"_dragUpHandler": function(obj, e)
		{
			var drag = obj._drag;
			
			// drag 대상 초기화
			var topForm = Eco.XComp.getTopLevelForm(obj.parent);
			topForm.__makeDraggableCurComp = null;

			if ( drag )
			{
				Eco.XComp.Event.cancelAnimationFrame(obj._reqDragId);//func
				obj._reqDragId = null;
				obj._drag = null;
				var func = obj._dragFuncs,
					addArgs;

				if ( func )
				{
					addArgs = func.args;
					func = func.draggingEndFunc;
				}
				if ( func )
				{
					var args = [];
					if ( addArgs )
					{
						args = args.concat(addArgs);
					}
					func.apply(this, args);
				}
			}
		},

		/**
		 * dragging 기능을 처리하기 위해 내부적으로 설정하는 onmousemove event의 handler함수
		 * @param {Form} form mouse move가 발생한 top form.
		 * @param {EventInfo} e EventInfo 객체.
		 * @private
		 * @memberOf Eco.XComp.Event
		**/
		"_dragMoveHandler": function(form, e)
		{
			// 현재 drag 중인 대상 comp
			var obj = form.__makeDraggableCurComp;
			if ( obj )
			{
				var drag = obj._drag;
				if ( drag )
				{
					obj._dragCurPt = {x:e.screenX, y:e.screenY};
					if ( obj._delayDragProc )
					{
						Eco.XComp.Event.cancelAnimationFrame(obj._reqDragId); //func
						obj._reqDragId = null;
					}
					
					obj._reqDragId = Eco.XComp.Event.requestAnimationFrame(Eco.XComp.Event._dragProcess, obj.__scope, obj); //func, scope(default: topForm), func's arguments
				}
			}
		},
		
		/**
		 * dragging 기능을 처리하기 위해 내부적으로 설정하는 함수
		 * @param {XComp} obj dragging 발생한 XComp.
		 * @private
		 * @memberOf Eco.XComp.Event
		**/
		"_dragProcess": function(obj)
		{
			var pt = obj._dragCurPt,
				drag = obj._drag;

			if ( drag == null ) return;
			
			drag.offsetX = pt.x - drag.startPt.x;
			drag.offsetY = pt.y - drag.startPt.y;
			
			if ( !drag.isOffsetFromStart )
			{
				drag.startPt = pt;
			}
			var func = obj._dragFuncs,
				addArgs;

			if ( func )
			{
				addArgs = func.args;
				func = func.draggingFunc;
			}
			if ( func )
			{
				var args = [drag.offsetX, drag.offsetY];
				if ( addArgs )
				{
					args = args.concat(addArgs);
				}
				func.apply(this, args);
			}
		},
		
		/**
		 * 전체 화면상에 마우스를 locking 하여 강제로 대상 컴포넌트의 마우스 이벤트로 호출하게 한다.
		 *
		 * @param {XComp} XComp 마우스이벤트를 대체하고자 하는 xcomp.
		 * @private
		 * @memberOf Eco.XComp.Event
		*/
		"_lockMouseEvent": function(comp)
		{
			var win = comp._getWindow();
			win._mouseLockComp = comp;
			win._on_sys_lbuttonup = Eco.XComp.Event._on_default_sys_lbuttonup;
			win._on_sys_mousemove = Eco.XComp.Event._on_default_sys_mousemove;
		},
		
		/**
		 * locking시에 window _on_sys_lbuttonup 함수를 이것으로 대처함.
		 * @private
		 * @memberOf Eco.XComp.Event
		*/
		"_on_default_sys_lbuttonup": function(elem, strButton, altKey, ctrlKey, shiftKey, windowX, windowY, screenX, screenY)
		{
			//elem = this._mouseLockComp._control_element;
			nexacro.Window.prototype._on_default_sys_lbuttonup.call(this, elem, strButton, altKey, ctrlKey, shiftKey, windowX, windowY, screenX, screenY);
			this._on_sys_lbuttonup = nexacro.Window.prototype._on_default_sys_lbuttonup;
			this._on_sys_mousemove = nexacro.Window.prototype._on_default_sys_mousemove;
			
			this._mouseLockComp = null;
		},

		/**
		 * locking시에 window _on_sys_mousemove 함수를 이것으로 대처함.
		 * @private
		 * @memberOf Eco.XComp.Event
		*/
		"_on_default_sys_mousemove": function(elem, strButton, altKey, ctrlKey, shiftKey, windowX, windowY, screenX, screenY)
		{
			elem = this._mouseLockComp._control_element;
			nexacro.Window.prototype._on_default_sys_mousemove.call(this, elem, strButton, altKey, ctrlKey, shiftKey, windowX, windowY, screenX, screenY);
		},
		
		/**
		 * 주어진 XComp에 repeat 기능를 설정한다.<br>
		 * 두번째 param 값은 function이거나, object type으로 값이 주어져야 한다.<br>
		 * function이면 repeating 되는 시점에 호출되는 함수로 설정된다.<br>
		 * object이면 object.start, object.end, object.repeating, object.repeatingStop으로 각각 함수값이 주어지는데.<br>
		 * start는 mouse down되는 시점에 호출되는 함수<br>
		 * end는 mouse up되는 시점에 호출되는 함수<br>
		 * repeating는 repeating 하는 시점에 계속 호출되는 함수이다.<br>
		 * repeatingStop는 mouse 누른 상태에서 마우스가 XComp 영역을 벗어나면 repeating 멈추게 되는데 이 멈추는 시점에 호출되는 함수이다.<br>
		 * 네번째 param인 addArgs로 주어지는 array는 함수 호출시에 추가되는 arguments이다.<br>
		 * 각 함수의 arguments은 다음과 같다.<br>
		 * start                            | end                       | repeating                       | repeatingStop<br>
		 * ----------------------------------------------------------------------------------------------------------------------------<br>
		 * x, y, addArgs[0], addArg[1], ... |addArgs[0], addArg[1], ... |x, y, addArgs[0], addArg[1], ... |addArgs[0], addArg[1], ... <br>
		 * <br>
		 * 세번째 param인 scope는 호출되는 함수 내부의 this값에 해당한다.<br>
		 * 만약 scope를 생략하면 this는 form이 된다.<br>
		 * x, y param 값은 start, repeating이 발생하는 시점의 마우스 x, y값인데 좌표기준은 XComp.parent 기준으로 처리된다.
		 * @example
		 *
		 * // 1) 2번째 인자를 function 으로 선언 시 repeat 진행 시점에 정의된 함수가 호출된다.
		 * Eco.XComp.Event.makeRepeatable(this.btn_repeat, this.onRepeating, this, [ds, this.grd_sample]);
		 *
		 * // 2) 2번째 인자를 object 로 선언 시 repeat 시작, 진행, 중단, 종료 시점에 정의된 함수가 호출된다.
		 * var repeatFunc = {
		 *      'start': this.onRepeatStart,
		 *      'repeating': this.onRepeating,
		 *      'end': this.onRepeatEnd
		 * };
		 * Eco.XComp.Event.makeRepeatable(this.btn_repeat, repeatFunc, this, [ds, this.grd_sample]);	 
		 *
		 * // repeating 시작 시점에 처리할 루틴을 정의한 함수
		 * this.onRepeatStart = function(comp)
		 * {	
		 *     trace("onRepeatStart");
		 * }
		 *
		 * // repeating 시점에 처리할 루틴을 정의한 함수
		 * this.onRepeating = function(offsetX, offsetY, obj)
		 * {
		 *     trace("onRepeating");
		 * }
		 *
		 * // repeating 중단 시점에 처리할 루틴을 정의한 함수
		 * this.onRepeatingStop = function(offsetX, offsetY, obj)
		 * {
		 *     trace("onRepeatingStop");
		 * }
		 *
		 * // repeating 종료 시점에 처리할 루틴을 정의한 함수
		 * this.onRepeatEnd = function(offsetX, offsetY, obj)
		 * {
		 *     trace("onRepeatEnd");
		 * }
		 *
		 * @param {XComp} XComp repeatable하고자 하는 xcomp.
		 * @param {object|function} repeatFunc repeating 처리 루틴에 해당하는 함수들.
		 * @param {*=} scope scope로 설정할 대상.
		 * @param {array=} args 설정된 함수 호출시 추가할 arguments을 array로 설정.
		 * @memberOf Eco.XComp.Event
		**/
		"makeRepeatable": function(XComp, repeatFunc, scope, args)
		{
			if ( Eco.isObject(repeatFunc) )
			{
				XComp._repeatFuncs = {
					"repeatStartFunc": repeatFunc.start,
					"repeatEndFunc": repeatFunc.end,
					"repeatingFunc": repeatFunc.repeating,
					"repeatStopFunc": repeatFunc.repeatingStop,
					"args": args
					};
			}
			else
			{
				XComp._repeatFuncs = {
					"repeatingFunc": repeatFunc,
					"args": args
					};
			}
			Eco.XComp.Event.add(XComp,
					{
						"onlbuttondown": Eco.XComp.Event._repeatDownHandler,
						"onlbuttonup": Eco.XComp.Event._repeatUpHandler,
						"onmouseenter": Eco.XComp.Event._repeatEnterHandler,
						"onmouseleave": Eco.XComp.Event._repeatLeaveHandler
					}, scope);
		},

		/**
		 * 주어진 XComp에 repeatable 기능를 해제한다.
		 * @param {XComp} XComp repeatable기능을 해제하는 xcomp.
		 * @example
		 *
		 * Eco.XComp.Event.clearRepeatable(this.btn_repeat);
		 *		 
		 * @memberOf Eco.XComp.Event
		**/
		"clearRepeatable": function(XComp)
		{
			if ( XComp._repeatFuncs )
			{
				XComp._repeatFuncs = null;
				Eco.XComp.Event.remove(XComp,
						{
							"onlbuttondown": Eco.XComp.Event._repeatDownHandler,
							"onlbuttonup": Eco.XComp.Event._repeatUpHandler,
							"onmouseenter": Eco.XComp.Event._repeatEnterHandler,
							"onmouseleave": Eco.XComp.Event._repeatLeaveHandler
						});
			}
		},

		/**
		 * repeating 기능을 취소하기 위해 내부적으로 사용하는 함수.
		 * @param {XComp} XComp repeating 기능을 취소하고자 하는 XComp.
		 * @private
		 * @memberOf Eco.XComp.Event
		**/
		"_cancelRepeatable": function(XComp)
		{
			var repeat = XComp._repeat;
			if ( repeat )
			{
				Eco.XComp.Event.cancelAnimationFrame(XComp._reqRepeatId);
				XComp._reqRepeatId = null;
				XComp._repeat = null;
			}
		},

		/**
		 * repeating 기능을 처리하기 위해 내부적으로 설정하는 onlbuttondown event의 handler함수
		 * @param {XComp} obj 발생한 event의 XComp.
		 * @param {EventInfo} e EventInfo 객체.
		 * @private
		 * @memberOf Eco.XComp.Event
		**/
		"_repeatDownHandler": function(obj, e)
		{
			Eco.XComp.Event.add(obj, {"onmousemove": Eco.XComp.Event._repeatMoveHandler}, this);
			
			var xy = Eco.XComp.PositionSize.convertXY(obj.parent, [e.clientX, e.clientY], obj);
			obj._repeat = {
				"curPoint": {x:xy[0], y:xy[1]}
			};			

			var func = obj._repeatFuncs,
				args, addArgs;

			if ( func )
			{
				addArgs = func.args;
				func = func.repeatStartFunc;
				if ( !func )
				{
					func = null;
				}
			}

			if ( func )
			{
				var pt = obj._repeat.curPoint;
				args = [pt.x, pt.y];
				if ( addArgs )
				{
					args = args.concat(addArgs);
				}
				func.apply(this, args);
			}

			Eco.XComp.Event._repeatProcess.call(this, obj);
		},

		/**
		 * repeating 기능을 처리하기 위해 내부적으로 설정하는 onlbuttonup event의 handler함수
		 * @param {XComp} obj 발생한 event의 XComp.
		 * @param {EventInfo} e EventInfo 객체.
		 * @private
		 * @memberOf Eco.XComp.Event
		**/
		"_repeatUpHandler": function(obj, e)
		{
			Eco.XComp.Event._cancelRepeatable(obj);
			
			Eco.XComp.Event.remove(obj, {"onmousemove": Eco.XComp.Event._repeatMoveHandler}, this);
						
			var func = obj._repeatFuncs,
				addArgs;
			if ( func )
			{
				addArgs = func.args;
				func = func.repeatEndFunc;
				if ( !func )
				{
					func = null;
				}
			}

			if ( func )
			{
				if ( !addArgs )
				{
					addArgs = [];
				}
				func.apply(this, addArgs);
			}
		},
		
		/**
		 * repeating 기능을 처리하기 위해 내부적으로 설정하는 onmouseenter event의 handler함수
		 * @param {XComp} obj 발생한 event의 XComp.
		 * @param {EventInfo} e EventInfo 객체.
		 * @private
		 * @memberOf Eco.XComp.Event
		**/
		"_repeatEnterHandler": function(obj, e)
		{
			var repeat = obj._repeat;
			if ( repeat && repeat.curPoint )
			{
				var xy = Eco.XComp.PositionSize.convertXY(obj.parent, [e.clientX, e.clientY], obj);
				repeat.curPoint = {x:xy[0], y:xy[1]};
				if ( obj._reqRepeatId === null )
				{
					Eco.XComp.Event._repeatProcess.call(this, obj);
				}
			}
			else // repeat 처리 함수에서 obj enable false처리되는 경우 고려.
			{
				obj._repeat = null;
			}
		},
		
		/**
		 * repeating 기능을 처리하기 위해 내부적으로 설정하는 onmousemove event의 handler함수
		 * @param {XComp} obj 발생한 event의 XComp.
		 * @param {EventInfo} e EventInfo 객체.
		 * @private
		 * @memberOf Eco.XComp.Event
		**/
		"_repeatMoveHandler": function(obj, e)
		{
			var repeat = obj._repeat;
			if ( repeat && repeat.curPoint )
			{
				var xy = Eco.XComp.PositionSize.convertXY(obj.parent, [e.clientX, e.clientY], obj);
				repeat.curPoint = {x:xy[0], y:xy[1]};
			}
			else
			{
				obj._repeat = null;
			}		
		},
		
		/**
		 * repeating 기능을 처리하기 위해 내부적으로 설정하는 onmouseleave event의 handler함수
		 * @param {XComp} obj 발생한 event의 XComp.
		 * @param {EventInfo} e EventInfo 객체.
		 * @private
		 * @memberOf Eco.XComp.Event
		**/		
		"_repeatLeaveHandler": function(obj, e)
		{
			var repeat = obj._repeat;
			if ( repeat && repeat.curPoint )
			{
				Eco.XComp.Event.cancelAnimationFrame(obj._reqRepeatId);
				obj._reqRepeatId = null;
				var func = obj._repeatFuncs,
					addArgs;
				if ( func )
				{
					addArgs = func.args;
					func = func.repeatStopFunc;
					if ( !func )
					{
						func = null;
					}
				}

				if ( func )
				{
					if ( !addArgs )
					{
						addArgs = [];
					}
					func.apply(this, addArgs);
				}
			}
			else // repeat 처리 함수에서 obj enable false처리되는 경우 고려.
			{
				obj._repeat = null;
			}
		},

		/**
		 * repeating 기능을 처리하기 위해 내부적으로 설정하는 함수<br>
		 * 이 함수는 XCompEvent.requestAnimationFrame을 통해 호출되는데 내부적으로 timer 호출이 된다.<br>
		 * 이렇게 호출하는 것은 repeating 중간에 화면 render가 존재하면 smooth하게 처리되는 이점이 있다.
		 * @param {XComp} obj repeating 발생한 XComp.
		 * @private
		 * @memberOf Eco.XComp.Event
		**/
		"_repeatProcess": function(obj)
		{
			obj._reqRepeatId = Eco.XComp.Event.requestAnimationFrame(Eco.XComp.Event._repeatProcess, this, obj); //func, scope(default: topForm), func's arguments

			var func = obj._repeatFuncs,
				args, addArgs;

			if ( func )
			{
				addArgs = func.args;
				func = func.repeatingFunc;
				if ( !func )
				{
					func = null;
				}
			}

			if ( func )
			{
				var repeat = obj._repeat;
				if ( repeat && repeat.curPoint )
				{
					args = [repeat.curPoint.x, repeat.curPoint.y];
				}
				else
				{
					args = [-1, -1];
				}
				if ( addArgs )
				{
					args = args.concat(addArgs);
				}
				func.apply(this, args);
			}
		},

		/**
		 * requestAnimationFrame 기능<br>
		 * callback 함수 내부의 this는 주어진 scope가 된다.<br>
		 * func 내부 루틴에서 화면 render가 존재하면 smooth하게 처리되는 이점이 있다.
		 * 실행하고자 하는 루프 function 에서 requestAnimationFrame 을 호출하고 callback 함수로
		 * 자기 자신을 호출하는 recursive 방식을 사용한다.
		 * @example
		 *
		 * this.renderLoop = function()
		 * {
		 * 	   // something animation code
		 * 	
		 *     var reqId = Eco.XComp.Event.requestAnimationFrame(this.renderLoop, this);
		 * }
		 *
		 * this.renderLoop();
		 *
		 * @param {function} callback 콜백 함수
		 * @param {*} scope callback 함수 내부에서 this 로 사용할 개체.
		 * @param {...} 호출하는 함수의 arguments
		 * @return {number} request id.
		 * @memberOf Eco.XComp.Event
		**/
		"requestAnimationFrame": function(callback, scope)
		{
			var args;
			if ( arguments.length > 2 ) //callback, scope, ....
			{
				args = Eco.array.toArray(arguments, 2);
			}
			else
			{
				args = [];
			}
			
			var isRuntime = nexacro._init_platform_runtime;
			var useSetTimeout = Eco.XComp.Event._requestAnimationFrameUseSetTimer;
			if( useSetTimeout === undefined ) useSetTimeout = false;
			
			var rAF = Eco.XComp.Event._requestAnimationFrame;
			if ( !rAF )
			{
				 // Runtime
				if ( isRuntime )
				{
					// 현재 Runtime 에는 requestAnimationFrame 이 없으므로 timer 를 이용한다.
					// (현재 성능이 썩 좋지 않다... 엔진에 기능 추가될 예정임)
					rAF = function(form, callback, lastTimeRef) {
						var lastTime = lastTimeRef.lastTime;
						var currTime = (Date.now ? Date.now() : (new Date).getTime());
						var interval = (1000/60) + lastTime - currTime;
						
						if ( interval < 0 ) interval = 0;
					
						var id = nexacro.OnceCallbackTimer.callonce(form, function(){
							lastTimeRef.lastTime = (Date.now ? Date.now() : (new Date).getTime());
							callback();
						}, interval);
						
						return id;
					};
				}
				else	// HTML
				{
					// HTML - 브라우저별로 requestAnimationFrame 가 다를 수 있으므로 체크한다.
					var context = JsNamespace.getGlobalContext();
					rAF = context.requestAnimationFrame;
					if ( !rAF )
					{
						var vendors = ['ms', 'moz', 'webkit', 'o'];
						for(var x = 0; x < vendors.length && !rAF; ++x) {
							rAF = context[vendors[x]+'RequestAnimationFrame'];
						}
						if ( !rAF )
						{
							rAF = function(callback, lastTimeRef) {
								var lastTime = lastTimeRef.lastTime;
								var currTime = (Date.now ? Date.now() : (new Date).getTime());
								var interval = (1000/60) + lastTime - currTime;
								
								if ( interval < 0 ) interval = 0;

								var id = context.setTimeout(function(){
									lastTimeRef.lastTime = (Date.now ? Date.now() : (new Date).getTime());
									callback();
								}, interval);
								
								return id;
							};
							
							Eco.XComp.Event._requestAnimationFrameUseSetTimer = true;
							useSetTimeout = true;
						}
					}
				}
				
				Eco.XComp.Event._requestAnimationFrame = rAF;
			}
			
			/*
				RequestAnimationFrame 이 없는 브라우저(런타임 포함)에 유사 기능을
				사용하기 위해 timer 를 사용하는데 시간 계산을 위한 lastTime 이
				필요하다. 동일한 callback에 대해 하나의 lastTime 값이 필요하므로
				속성으로 추가하여 사용하고 cancelAnimationFrame 에서 삭제한다.
			*/
			if ( !Eco.XComp.Event._requestAnimationFrameLastTimeInfo )
			{
				Eco.XComp.Event._requestAnimationFrameLastTimeInfo = {};
			}
						
			var id;
			if ( isRuntime )
			{
				var form = Eco.XComp.Event._getRequestAnimationFrameForm(scope);
				var callbackString = callback.toString();
				var lastTimeRef = Eco.XComp.Event._requestAnimationFrameLastTimeInfo[callbackString];
				if ( lastTimeRef === undefined )
				{	
					Eco.XComp.Event._requestAnimationFrameLastTimeInfo[callback.toString()] = {'lastTime': 0, 'timers':[]};
					lastTimeRef = Eco.XComp.Event._requestAnimationFrameLastTimeInfo[callbackString];
				}
				
				var timer = rAF(form, function() { callback.apply(scope, args); }, lastTimeRef);
				
				id = timer._handle;
				
				// cancel 시 제거할 대상을 위해 지정
				lastTimeRef.id = id;
				lastTimeRef.timers.push(timer);
			}
			else if ( useSetTimeout )
			{
				var callbackString = callback.toString();
				var lastTimeRef = Eco.XComp.Event._requestAnimationFrameLastTimeInfo[callback.toString()];
				if ( lastTimeRef === undefined )
				{	
					Eco.XComp.Event._requestAnimationFrameLastTimeInfo[callbackString] = {'lastTime': 0};
					lastTimeRef = Eco.XComp.Event._requestAnimationFrameLastTimeInfo[callbackString];
				}
				
				id = rAF(function() { callback.apply(scope, args); }, lastTimeRef);
				
				// cancel 시 제거할 대상을 위해 지정
				lastTimeRef.id = id;				
			}
			else
			{
				id = rAF(function() { callback.apply(scope, args); });
			}
						
			return id;
		},
		
		/**
		 * requsetAnimationFrame 기능이 없는 런타임을 위한 것으로<br>
		 * scope 의 ReferenceContext 통해 form 을 찾고 없으면 mainframe의 첫번째 폼을 찾아서 반환.
		 * @param {*} scope requestAnimationFrame 호출시 지정한 scope.
		 * @private
		 * @memberOf Eco.XComp.Event
		**/		
		"_getRequestAnimationFrameForm": function(scope)
		{
			var form;					
			if ( scope._getReferenceContext )
			{
				// scope ==> Form, Component
				form = scope._getReferenceContext();
			}
			else
			{
				var c = application.mainframe.all[0];
				do {
					if ( c instanceof ChildFrame )
					{
						break;
					}
					c = c.all[0];
				}
				while ( true )
				
				form = c.form;
			}
			return form;
		},
		
		/**
		 * requestAnimationFrame 호출한 것을 중지하고자 할때 사용하는 함수.<br>
		 * requestAnimationFrame의 return 값으로 id값이 나온다. 이것을 이 함수 argument로 넘겨준다.
		 * @example
		 * 
		 * Eco.XComp.Event.cancelAnimationFrame(reqId);
		 *
		 * @param {number} id requestAnimationFrame id.
		 * @memberOf Eco.XComp.Event
		**/
		"cancelAnimationFrame": function(id)
		{			
			var cAF = Eco.XComp.Event._cancelAnimationFrame;
			
			if ( !cAF )
			{
				// Runtime
				if ( nexacro._init_platform_runtime )
				{
					cAF = function(id) {
						var lastTimeInfo = Eco.XComp.Event._requestAnimationFrameLastTimeInfo;
						if ( lastTimeInfo )
						{
							for (var p in lastTimeInfo)
							{
								if ( lastTimeInfo.hasOwnProperty(p) )
								{
									if ( id == lastTimeInfo[p].id )
									{
										var timers = lastTimeInfo[p].timers;
										for (var i=0,len=timers.length; i<len ; i++)
										{
											timers[i].destroy();
											timers[i] = null;
										}
										
										lastTimeInfo[p] = null;
										delete lastTimeInfo[p];			
										break;
									}
								}
							}
						}
					};
				}
				else
				{
					var context = JsNamespace.getGlobalContext();
					cAF = context.cancelAnimationFrame;
					
					if ( !cAF )
					{
						var vendors = ['ms', 'moz', 'webkit', 'o'];
						for(var x = 0; x < vendors.length && !cAF; ++x) {
							cAF = context[vendors[x]+'CancelAnimationFrame'] 
                               || context[vendors[x]+'CancelRequestAnimationFrame'];
						}
						
						if ( !cAF )
						{
							cAF = function(id) {
							
								context.clearTimeout(id);
								
								var lastTimeInfo = Eco.XComp.Event._requestAnimationFrameLastTimeInfo;
								if ( lastTimeInfo )
								{
									for (var p in lastTimeInfo)
									{
										if ( lastTimeInfo.hasOwnProperty(p) )
										{
											if ( id == lastTimeInfo[p].id )
											{
												lastTimeInfo[p] = null;
												delete lastTimeInfo[p];
												break;
											}
										}
									}
								}
							};
						}
					} // end if ( !cAF )
					
				}
				
				Eco.XComp.Event._cancelAnimationFrame = cAF;
			}
			
			cAF(id);
		}
		
	});
}
