define(function(require, exports) {
    class HistoryCanvas {
        constructor(container) {
            this.container = container;
            this.canvas = document.createElement('canvas');

            // this.width = this.canvas.width = 785;
            // this.height = this.canvas.height = 800;
            this.canvas.id = 'canvas';
            this.canvas.className = 'canvas';
            this.canvas.style.lineHeight = '24px';
            $(this.container).html(this.canvas);
            this.ctx = this.canvas.getContext('2d');
            this.executionArray = [];
        }
        // drawImage(...params) {
        //     this.ctx.drawImage(...params);
        //     if (pushToHistory) {
        //         this.executionArray.push({
        //             method: 'drawImage',
        //             params: params
        //         });
        //     }
        // }
        _drawCanvasRect(params) {
            let { pushToHistory, x, y, width, height } = params;
            this.ctx.strokeStyle = "#FF6633";
            this.ctx.fillStyle = "rgb(255, 248, 190, 0.5)";
            this.ctx.lineWidth = 3;
            this.ctx.beginPath();
            this.ctx.rect(x, y, width, height);
            // this.ctx.fillRect(x, y, width, height);
            this.ctx.stroke();
            this.ctx.restore();
            if (pushToHistory) {
                this.executionArray.push({
                    method: '_drawCanvasRect',
                    params: params
                });
            }
        }
        _drawCanvasText(params) {
            let { pushToHistory, x, y, text } = params;
            this.ctx.fillStyle = "#FF6633";
            this.ctx.beginPath();
            this.ctx.font = '22px Arial';
            this.ctx.fillText(text, x, y);
            this.ctx.restore();
            if (pushToHistory) {
                this.executionArray.push({
                    method: '_drawCanvasText',
                    params: params
                });
            }
        }
        _drawMultilineText(textarea) {
            let textArr = textarea.innerText.split('\n');
            let length = textArr.length;
            textArr.forEach((text, index) => {
                this._drawCanvasText({
                    pushToHistory: true,
                    x: this.startX,
                    y: this.startY + index * this.lineHeight,
                    text: text,
                    withNext: index === 0 && length > 1 ? true : false
                });
            })
        }
        _drawCanvasArrow(params) {
            let { pushToHistory, startX, startY, endX, endY, theta, headlen, width, color } = params;
            theta = typeof (theta) != 'undefined' ? theta : 30;
            headlen = typeof (theta) != 'undefined' ? headlen : 10;
            width = typeof (width) != 'undefined' ? width : 1;
            color = typeof (color) != 'color' ? color : '#000';
            // 计算各角度和对应的P2,P3坐标
            var angle = Math.atan2(startY - endY, startX - endX) * 180 / Math.PI,
                angle1 = (angle + theta) * Math.PI / 180,
                angle2 = (angle - theta) * Math.PI / 180,
                topX = headlen * Math.cos(angle1),
                topY = headlen * Math.sin(angle1),
                botX = headlen * Math.cos(angle2),
                botY = headlen * Math.sin(angle2);
            this.ctx.save();
            this.ctx.beginPath();
            var arrowX = startX - topX,
                arrowY = startY - topY;
            this.ctx.moveTo(arrowX, arrowY);
            this.ctx.moveTo(startX, startY);
            this.ctx.lineTo(endX, endY);
            arrowX = endX + topX;
            arrowY = endY + topY;
            this.ctx.moveTo(arrowX, arrowY);
            this.ctx.lineTo(endX, endY);
            arrowX = endX + botX;
            arrowY = endY + botY;
            this.ctx.lineTo(arrowX, arrowY);
            this.ctx.strokeStyle = color;
            this.ctx.lineWidth = width;
            this.ctx.stroke();
            this.ctx.restore();
            if (pushToHistory) {
                this.executionArray.push({
                    method: '_drawCanvasArrow',
                    params: params
                });
            }
        }
        clearCanvas() {
            this.ctx.clearRect(0, 0, this.width, this.height);
        }
        undo() {
            if (this.executionArray.length > 0) {
                // 清空画布
                this.clearCanvas();
                // 删除当前操作
                let next = this.executionArray.pop();
                while (next && next.params.withNext) {
                    next = this.executionArray.pop();
                }
                // 逐个执行绘图动作进行重绘
                for (let exe of this.executionArray) {
                    this[exe.method](Object.assign({}, exe.params, { pushToHistory: false }))
                }
            }
        }
        undoAll() {
            this.executionArray = [];
            this.clearCanvas();
        }
        repaint() {
            for (let exe of this.executionArray) {
                this[exe.method](Object.assign({}, exe.params, { pushToHistory: false }))
            }
        }
    }
    class EventCanvas extends HistoryCanvas {
        // super(canvasToFeed, feedContainer);
        constructor(canvasToFeed, feedContainer) {
            super(feedContainer);
            this.startX = 0;
            this.startY = 0;
            this.endX = 0;
            this.endY = 0;
            this.flag = false;
            this.graphHeight = 0;
            this.graphWidth = 0;
            if (canvasToFeed) {
                this.image = new Image();
                this.image.src = canvasToFeed.toDataURL("image/png");
                this.image.onload = () => {
                    this.width = this.canvas.width = canvasToFeed.width;
                    this.height = this.canvas.height = canvasToFeed.height;
                    this.container.style.width = this.image.width + 15 + "px";
                    this.canvas.style.backgroundImage = `url(${this.image.src})`;
                    this._offsetTop = this._getOffsetToBody(this.canvas).top;
                    this._offsetLeft = this._getOffsetToBody(this.canvas).left;
                };
            } else {
                // TODO 不传canvas data的情况，暂时未用到
            }
            this._scrollTop = 0;
            this._scrollLeft = 0;

            this.lineHeight = (this.canvas && parseInt(window.getComputedStyle(this.canvas).lineHeight)) || parseInt(window.getComputedStyle(document.body).lineHeight);
        }
        $(id) {
            return document.getElementById(id);
        }
        _bindMouseEvent(eventType, fn) {
            this.container["on" + eventType] = fn;
        }
        _getOffsetToBody(el) {
            let offsetparent = el.offsetParent;
            let offset = {
                left: el.offsetLeft,
                top: el.offsetTop
            };
            while (offsetparent) {
                offset.left += offsetparent.offsetLeft;
                offset.top += offsetparent.offsetTop;
                offsetparent = offsetparent.offsetParent;
            }
            return offset;
        }
        _initScrollDistanceAtStart(e) {
            var evt = window.event || e;
            this._scrollTop = this.container.scrollTop;
            this._scrollLeft = this.container.scrollLeft;
            this.startX = evt.clientX + this._scrollLeft - this._offsetLeft;
            this.startY = evt.clientY + this._scrollTop - this._offsetTop;
            this.endX = undefined;
            this.endY = undefined;
        }
        _updateMovingParams(e) {
            var evt = window.event || e;
            this.endY = evt.clientY - this._offsetTop + this._scrollTop;
            this.endX = evt.clientX - this._offsetLeft + this._scrollLeft;
            this.graphWidth = this.endX - this.startX;
            this.graphHeight = this.endY - this.startY;
        }
        _clearTempDiv() {
            let htmlList = this.container.getElementsByClassName("temp-text");
            var cls = [...htmlList]
            cls.forEach((item) => {
                item.parentNode.removeChild(item);
            });
        }
        drawRect() {
            this.canvas.style.cursor = 'crosshair';
            this._clearTempDiv();
            this._bindMouseEvent('mousedown', (e) => {
                this.flag = true;
                this._initScrollDistanceAtStart(e);
            });
            this._bindMouseEvent('mousemove', (e) => {
                if (this.flag) {
                    try {
                        this._updateMovingParams(e);
                        this.clearCanvas();
                        this.repaint();
                        this._drawCanvasRect({
                            pushToHistory: false,
                            x: this.startX,
                            y: this.startY,
                            width: this.graphWidth,
                            height: this.graphHeight
                        });
                    } catch (e) {
                        console.error(e);
                    }
                }
            });
            this._bindMouseEvent('mouseup', (e) => {
                if (!this.flag) return;
                if (this.tempDiv) {
                    container.removeChild(this.tempDiv);
                }
                this.clearCanvas();
                this.repaint();
                this._drawCanvasRect({
                    pushToHistory: true,
                    x: this.startX,
                    y: this.startY,
                    width: this.endX - this.startX,
                    height: this.endY - this.startY
                });
                this.flag = false;
            })
        }
        _debunce() {
            var timer;
            var _this = this;
            return function () {
                if (timer) {
                    return
                }
                timer = setTimeout(() => {
                    _this._drawArrow({
                        pushToHistory: false,
                        startX: _this.startX, startY: _this.startY, endX: _this.endX, endY: _this.endY, theta: 30, headlen: 30, width: 10, color: '#f36'
                    });
                    timer = undefined;
                }, 50);
            }

        }
        drawArrow() {
            this.canvas.style.cursor = 'crosshair';
            this._clearTempDiv();
            this._bindMouseEvent('mousedown', (e) => {
                this.flag = true;
                this._initScrollDistanceAtStart();
            })
            this._bindMouseEvent('mousemove', (e) => {
                if (this.flag) {
                    this._updateMovingParams(e);
                    this.clearCanvas();
                    this.repaint();
                    this._drawCanvasArrow({
                        pushToHistory: false,
                        startX: this.startX, startY: this.startY, endX: this.endX, endY: this.endY, theta: 25, headlen: 25, width: 3, color: '#FF6633'
                    });
                }

            })
            this._bindMouseEvent('mouseup', (e) => {
                if (!this.flag) return;
                if (this.endX === undefined || this.endY === undefined) {
                    this.flag = false;
                    return;
                }
                this._drawCanvasArrow({
                    pushToHistory: true,
                    startX: this.startX, startY: this.startY, endX: this.endX, endY: this.endY, theta: 25, headlen: 25, width: 3, color: '#FF6633'
                });
                this.flag = false;
            });
        }
        drawText() {
            this.canvas.style.cursor = 'text';
            var textarea = document.createElement('div');
            textarea.setAttribute('contenteditable', "true")
            textarea.className = 'temp-text';

            this.container.appendChild(textarea);

            this._bindMouseEvent('mousedown', (e) => {
                setTimeout(() => {
                    textarea.focus();
                });
                // 初次点击，移动文本框到点击位置
                if (textarea && textarea.innerText === '' && e.target !== textarea) {
                    this._initScrollDistanceAtStart();
                    if (this.startX <= 0 || this.startY <= 0) return;
                    textarea.style.transform = `translate3d(${this.startX}px, ${this.startY - 20}px, 0)`;
                    textarea.style.display = 'block';
                    return;
                }
                if (textarea && textarea.innerText !== '' && e.target !== textarea) {
                    // 文本框有内容时，未点击原文本框，则将原文本框内容绘制到canvas，并清空文本框，且移动到新点击的位置
                    this._drawMultilineText(textarea);
                    if (textarea) {
                        textarea.innerText = '';
                        this._initScrollDistanceAtStart();
                        textarea.style.transform = `translate3d(${this.startX + 8}px, ${this.startY - 6}px, 0)`;
                    }
                }
            });
            textarea.addEventListener('blur', (e) => {
                if (textarea.innerText !== '') {
                    this._drawMultilineText(textarea);
                }
                if (textarea) {
                    textarea.innerText = '';
                    this._initScrollDistanceAtStart();
                    textarea.style.display = 'none';
                }
            }, false)
            window.addEventListener('click', (e) => {
                if (e.target !== this.canvas && e.target !== textarea && e.target !== this.container) {
                    if (textarea.innerText !== '') {
                        this._drawMultilineText(textarea);
                    }
                    if (textarea) {
                        textarea.innerText = '';
                        this._initScrollDistanceAtStart();
                        textarea.style.display = 'none';
                    }
                }
            })

        }
    }

    class FeedbackCanvas extends EventCanvas{
        constructor(canvasToFeed, options) {
            if (!options.feedContainer || !options) {
                if ($('#feedback-container').length > 0) {
                    options.feedContainer = $('#feedback-container');
                } else {
                    options.feedContainer = $(`<div class="feedback-wrapper" id="feedback-container">
                        <div class="container" id="container"></div>
                        <div class="tools-container">
                            <div class="toolbar">
                                <button class="image-edit-btn rect" data-type="rect" style="pointer-events: all; opacity: 1;">矩形工具</button>
                                <button class="image-edit-btn arrow" data-type="arrow" style="pointer-events: all; opacity: 1;">箭头工具</button>
                                <button class="image-edit-btn text" data-type="text" style="pointer-events: all; opacity: 1;">文本工具</button>
                                <span class="split"></span>
                                <button class="image-edit-btn revert" data-type="revert">撤销</button>
                                <button class="image-edit-btn cancle" data-type="revertAll">取消</button>
                                <button class="image-edit-btn sure" data-type="sure">确定</button>
                                <span></span>
                            </div>
                        </div>
                    </div>`);
                }
                $('body').append(options.feedContainer);
            }
            super(canvasToFeed, $("#container")[0]);
            this.feedContainer = options.feedContainer;
            if (options.toolEvents) {
                this.toolEvents = options.toolEvents;
            }
            // this.feedContainer.show();
            this.bindDrawToolEvent();
        }
        bindDrawToolEvent() {
            var _this = this;
            $(".image-edit-btn").each((index, item) => {
                switch ($(item).attr("data-type")) {
                    case "rect":
                        $(item).bind("click", function () {
                            _this.drawRect();
                            (_this.toolEvents && _this.toolEvents.rect_cb) && _this.toolEvents.rect_cb();
                        });
                        break;
                    case "arrow":
                        $(item).bind("click", function () {
                            _this.drawArrow();
                            (_this.toolEvents && _this.toolEvents.arrow_cb) && _this.toolEvents.arrow_cb();
                        });
                        break;
                    case "text":
                        $(item).bind("click", function () {
                            _this.drawText();
                            (_this.toolEvents && _this.toolEvents.text_cb) && _this.toolEvents.text_cb();
                        });
                        break;
                    case "revert":
                        $(item).bind("click", function () {
                            _this.undo();
                            (_this.toolEvents && _this.toolEvents.undo_cb) && _this.toolEvents.undo_cb();
                        });
                        break;
                    case "revertAll":
                        $(item).bind("click", function () {
                            _this.undoAll();
                            (_this.toolEvents && _this.toolEvents.revertall_cb) && _this.toolEvents.revertall_cb();
                            _this.feedContainer.hide();
                        });
                        break;
                    case "sure":
                        $(item).click(function (e) {
                            _this.feedContainer.hide();
                            (_this.toolEvents && _this.toolEvents.sure_cb) && _this.toolEvents.sure_cb();
                        });
                        break;
                    default:
                        return;
                }
            });
        }
    }
    window.FeedbackCanvas = FeedbackCanvas;
});
