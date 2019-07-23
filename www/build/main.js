webpackJsonp([1],{

/***/ 102:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Mode; });
var Mode = /** @class */ (function () {
    function Mode(modeName, speed, feature1, feature2, feature3, color, timelapse, modeNumber) {
        this.modeName = "test";
        this.modeNumber = 1;
        this.nextMode = function () {
            if (this.modeNumber == 25) {
                this.modeNumber = 1;
            }
            else {
                this.modeNumber++;
            }
        };
        this.previousMode = function () {
            if (this.modeNumber == 1) {
                this.modeNumber = 25;
            }
            else {
                this.modeNumber--;
            }
        };
        this.modeName = modeName;
        this.speed = speed;
        this.feature1 = feature1;
        this.feature2 = feature2;
        this.feature3 = feature3;
        this.color = color;
        this.timelapse = timelapse;
        this.modeNumber = modeNumber;
    }
    Mode.prototype.modeTo8Bit = function (array, index) {
        array[index++] = this.modeNumber;
        array[index++] = this.color.hue;
        array[index++] = this.color.saturation;
        array[index++] = this.color.value;
        array[index++] = this.speed;
        array[index++] = this.feature1;
        array[index++] = this.feature2;
        if (this.timelapse) {
            array[index++] = this.timelapse;
        }
        return array;
    };
    Mode.prototype.getInt64Bytes = function (input) {
        return input & (255);
    };
    Mode.prototype.playTo8Bit = function () {
        var array = new Uint8Array(12);
        //let array = new Uint8Array(1000);
        array[0] = 12;
        array[1] = 19;
        array[2] = 91;
        array[3] = 8;
        array[4] = 1;
        array = this.modeTo8Bit(array, 5);
        console.log(array.length);
        console.log(array[array.length - 1]);
        return array;
    };
    return Mode;
}());

//# sourceMappingURL=mode.js.map

/***/ }),

/***/ 111:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 111;

/***/ }),

/***/ 152:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/tabs/tabs.module": [
		280,
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 152;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 195:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__program_program__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__play_play__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__connection_connection__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_connection_connection__ = __webpack_require__(40);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






/**
 * Generated class for the TabsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var TabsPage = /** @class */ (function () {
    function TabsPage(navCtrl, navParams, connectionProvider) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.connectionProvider = connectionProvider;
        this.connectionTab = __WEBPACK_IMPORTED_MODULE_4__connection_connection__["a" /* ConnectionPage */];
        this.playTab = __WEBPACK_IMPORTED_MODULE_3__play_play__["a" /* PlayPage */];
        this.programTab = __WEBPACK_IMPORTED_MODULE_2__program_program__["a" /* ProgramPage */];
        this.connection = connectionProvider;
    }
    TabsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad TabsPage');
    };
    TabsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-tabs',template:/*ion-inline-start:"/Users/konstantinvogel/prototyping/ionic-stuff/cube-bt-controller/src/pages/tabs/tabs.html"*/'<ion-tabs>\n    <ion-tab [root]="connectionTab" tabTitle="Connection"></ion-tab>\n    <ion-tab [enable]="connection.currentDevice.connected"  [root]="playTab" tabTitle="Play" ></ion-tab>\n    <ion-tab [enable]="connection.currentDevice.connected" [root]="programTab" tabTitle="Program"></ion-tab>\n</ion-tabs>\n'/*ion-inline-end:"/Users/konstantinvogel/prototyping/ionic-stuff/cube-bt-controller/src/pages/tabs/tabs.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */], __WEBPACK_IMPORTED_MODULE_5__providers_connection_connection__["a" /* ConnectionProvider */]])
    ], TabsPage);
    return TabsPage;
}());

//# sourceMappingURL=tabs.js.map

/***/ }),

/***/ 196:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProgramPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_connection_connection__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__models_procedure__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__models_mode__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_storage__ = __webpack_require__(200);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






/**
 * Generated class for the ProgramPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ProgramPage = /** @class */ (function () {
    function ProgramPage(navCtrl, navParams, provider, storage) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.provider = provider;
        this.storage = storage;
        this.transfering = false;
        this.connectionProvider = provider;
        this.currentMode = new __WEBPACK_IMPORTED_MODULE_4__models_mode__["a" /* Mode */]("test", 100, 100, 100, 100, { hue: 255, saturation: 255, value: 255 }, 10, 1);
        this.zone = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["N" /* NgZone */]({ enableLongStackTrace: false });
        this.storage.get("program").then(function (program) {
            console.log("Program found in storage!");
            console.log(program);
            if (program == null) {
                _this.connectionProvider.currentDevice.program = _this.currentProgram = new __WEBPACK_IMPORTED_MODULE_3__models_procedure__["a" /* Procedure */]();
            }
            else {
                _this.connectionProvider.currentDevice.program = _this.currentProgram = program;
            }
        }, function (error) {
            console.log("no program found using default program!");
            _this.connectionProvider.currentDevice.program = _this.currentProgram = new __WEBPACK_IMPORTED_MODULE_3__models_procedure__["a" /* Procedure */]();
        });
    }
    ProgramPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ProgramPage');
    };
    ProgramPage.prototype.addToProgram = function () {
        var _this = this;
        this.zone.run(function () {
            _this.currentProgram.entry.push(_this.currentMode);
            _this.currentMode = new __WEBPACK_IMPORTED_MODULE_4__models_mode__["a" /* Mode */]("test", 100, 100, 100, 100, { hue: 255, saturation: 255, value: 255 }, 10, 1);
        });
        console.log("added currentMode:");
        console.log(this.currentMode);
        console.log("to current program:");
        console.log(this.currentProgram);
    };
    ;
    ProgramPage.prototype.playProgram = function () {
        var input = this.currentProgram.programTo8Bit();
        this.transfering = true;
        var component = this;
        this.connectionProvider.transfer(input).then(function success(response) {
            console.log("Succesfully sent settings object");
            setTimeout(function () {
                component.transfering = false;
            }, 1000);
        });
    };
    ProgramPage.prototype.saveProgram = function () {
        var input = this.currentProgram.saveProgram();
        this.transfering = true;
        var component = this;
        this.connectionProvider.transfer(input).then(function success(response) {
            console.log("Succesfully sent settings object");
            setTimeout(function () {
                component.transfering = false;
            }, 1000);
        });
    };
    ProgramPage.prototype.addProgramToStorage = function () {
        this.storage.set("program", this.currentProgram);
    };
    ProgramPage.prototype.removeFromProgram = function (mode) {
        var _this = this;
        this.zone.run(function () {
            var index = _this.currentProgram.entry.indexOf(mode);
            _this.currentProgram.entry.splice(index, 1);
        });
    };
    ProgramPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-program',template:/*ion-inline-start:"/Users/konstantinvogel/prototyping/ionic-stuff/cube-bt-controller/src/pages/program/program.html"*/'<!--\n  Generated template for the ProgramPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n    <ion-navbar>\n        <ion-title>Program</ion-title>\n    </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n    <div>\n        <ion-list-header>Programs for:{{connectionProvider.currentDevice.macAddress}}\n\n        </ion-list-header>\n        <ion-list>\n            <ion-item *ngFor="let mode of currentProgram?.entry">\n                <ion-label>\n                    M:{{mode.modeNumber}}-F1:{{mode.feature1}}-S:{{mode.speed}}-T:{{mode.timelapse}}\n                    <ion-icon (click)="removeFromProgram(mode)" name="close"></ion-icon>\n                </ion-label>\n            </ion-item>\n        </ion-list>\n        <h2>Mode Settings</h2>\n        <ion-grid>\n            <ion-row>\n                <ion-col col-3>\n                    <ion-icon float-left class="playbutton playbutton-previous" large name="arrow-dropleft"\n                              (click)="currentMode.previousMode()"></ion-icon>\n                </ion-col>\n                <ion-col align-items-center col-6>\n                    <ion-select align-items-center class="mode-select" [(ngModel)]="currentMode.modeNumber"\n                                style="max-width:100%">\n                        <ion-option value="1">Mode 1</ion-option>\n                        <ion-option value="2">Mode 2</ion-option>\n                        <ion-option value="3">Mode 3</ion-option>\n                        <ion-option value="4">Mode 4</ion-option>\n                        <ion-option value="5">Mode 5</ion-option>\n                        <ion-option value="6">Mode 6</ion-option>\n                        <ion-option value="7">Mode 7</ion-option>\n                        <ion-option value="8">Mode 8</ion-option>\n                        <ion-option value="9">Mode 9</ion-option>\n                        <ion-option value="10">Mode 10</ion-option>\n                        <ion-option value="11">Mode 11</ion-option>\n                        <ion-option value="12">Mode 12</ion-option>\n                        <ion-option value="13">Mode 13</ion-option>\n                        <ion-option value="14">Mode 14</ion-option>\n                        <ion-option value="15">Mode 15</ion-option>\n                        <ion-option value="16">Mode 16</ion-option>\n                        <ion-option value="17">Mode 17</ion-option>\n                        <ion-option value="18">Mode 18</ion-option>\n                        <ion-option value="19">Mode 19</ion-option>\n                        <ion-option value="20">Mode 20</ion-option>\n                        <ion-option value="21">Mode 21</ion-option>\n                        <ion-option value="22">Mode 22</ion-option>\n                        <ion-option value="23">Mode 23</ion-option>\n                        <ion-option value="24">Mode 24</ion-option>\n                        <ion-option value="25">Mode 25</ion-option>\n\n\n                    </ion-select>\n                </ion-col>\n                <ion-col col-3>\n                    <ion-icon (click)="currentMode.nextMode()" float-right class="playbutton playbutton-next" large\n                              name="arrow-dropright"></ion-icon>\n                </ion-col>\n            </ion-row>\n\n            <ion-row>\n                <ion-col col-8>\n                    <ion-label>Hue\n                        <ion-badge>{{currentMode.color.hue}}</ion-badge>\n                    </ion-label>\n                    <ion-range [debounce]="500" [(ngModel)]="currentMode.color.hue" min="0" max="255"></ion-range>\n                </ion-col>\n                <ion-col col-4>\n\n                </ion-col>\n            </ion-row>\n            <ion-row>\n                <ion-col col-8>\n\n                    <ion-label>Saturation\n                        <ion-badge>{{currentMode.color.saturation}}</ion-badge>\n                    </ion-label>\n                    <ion-range [debounce]="500" [(ngModel)]="currentMode.color.saturation" min="0"\n                               max="255"></ion-range>\n\n                </ion-col>\n                <ion-col col-4>\n                </ion-col>\n\n            </ion-row>\n            <ion-row>\n                <ion-col col-8>\n                    <ion-label>Value\n                        <ion-badge> {{currentMode.color.value}}</ion-badge>\n                    </ion-label>\n                    <ion-range [debounce]="500" [(ngModel)]="currentMode.color.value" min="0" max="255"></ion-range>\n                </ion-col>\n                <ion-col col-4>\n                </ion-col>\n            </ion-row>\n\n            <ion-row>\n                <ion-col col-8>\n                    <ion-label>Feature1\n                        <ion-badge>{{currentMode.feature1}}</ion-badge>\n                    </ion-label>\n                    <ion-range [debounce]="500" [(ngModel)]="currentMode.feature1" min="0" max="255"></ion-range>\n                </ion-col>\n                <ion-col col-4>\n                </ion-col>\n            </ion-row>\n            <ion-row>\n                <ion-col col-8>\n                    <ion-label>Feature2\n                        <ion-badge>{{currentMode.feature2}}</ion-badge>\n                    </ion-label>\n                    <ion-range [debounce]="500" [(ngModel)]="currentMode.feature2" min="0" max="255"></ion-range>\n                </ion-col>\n                <ion-col col-4>\n                </ion-col>\n            </ion-row>\n            <ion-row>\n                <ion-col col-8>\n\n                    <ion-label>Speed\n                        <ion-badge>{{currentMode.speed}}</ion-badge>\n                    </ion-label>\n                    <ion-range [debounce]="500" color="dark" [(ngModel)]="currentMode.speed" min="0"\n                               max="255"></ion-range>\n                </ion-col>\n                <ion-col col-4>\n                </ion-col>\n            </ion-row>\n            <ion-row>\n                <ion-col col-8>\n                    <ion-label>Time\n                        <ion-badge>{{currentMode.timelapse}}</ion-badge>\n                    </ion-label>\n                    <ion-range [debounce]="500" color="dark" [(ngModel)]="currentMode.timelapse" min="0"\n                               max="255"\n                               pin="true"></ion-range>\n                </ion-col>\n                <ion-col col-4>\n                </ion-col>\n            </ion-row>\n        </ion-grid>\n\n        <ion-item>\n            <button ion-button color="success" (click)="addToProgram()">Add to Program</button>\n            <button ion-button color="success" [disabled]="transfering" (click)="playProgram()">Play Program</button>\n        </ion-item>\n        <ion-item>\n            <button ion-button color="success" [disabled]="transfering" (click)="saveProgram()">Save Program</button>\n<!--\n            <button ion-button color="success" (click)="addProgramToStorage()">Save to Storage</button>\n-->\n        </ion-item>\n\n    </div>\n\n</ion-content>\n'/*ion-inline-end:"/Users/konstantinvogel/prototyping/ionic-stuff/cube-bt-controller/src/pages/program/program.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_connection_connection__["a" /* ConnectionProvider */], __WEBPACK_IMPORTED_MODULE_5__ionic_storage__["b" /* Storage */]])
    ], ProgramPage);
    return ProgramPage;
}());

//# sourceMappingURL=program.js.map

/***/ }),

/***/ 197:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BluetoothDevice; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__mode__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__procedure__ = __webpack_require__(198);


var BluetoothDevice = /** @class */ (function () {
    function BluetoothDevice() {
        this.mode = 1;
        this.playMode = new __WEBPACK_IMPORTED_MODULE_0__mode__["a" /* Mode */]("test", 100, 100, 100, 100, { hue: 255, saturation: 255, value: 255 }, null, 1);
        this.program = new __WEBPACK_IMPORTED_MODULE_1__procedure__["a" /* Procedure */]();
    }
    return BluetoothDevice;
}());

//# sourceMappingURL=bluetoothDevice.js.map

/***/ }),

/***/ 198:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Procedure; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__mode__ = __webpack_require__(102);

var Procedure = /** @class */ (function () {
    function Procedure() {
        this.entry = [];
        this.entry.push(new __WEBPACK_IMPORTED_MODULE_0__mode__["a" /* Mode */]("asd", 255, 255, 0, 0, { hue: 23, saturation: 25, value: 255 }, 60, 15));
        this.entry.push(new __WEBPACK_IMPORTED_MODULE_0__mode__["a" /* Mode */]("asd", 55, 55, 0, 0, { hue: 50, saturation: 255, value: 255 }, 60, 17));
        this.entry.push(new __WEBPACK_IMPORTED_MODULE_0__mode__["a" /* Mode */]("asd", 90, 150, 0, 0, { hue: 39, saturation: 47, value: 255 }, 60, 21));
        this.entry.push(new __WEBPACK_IMPORTED_MODULE_0__mode__["a" /* Mode */]("asd", 255, 255, 0, 0, { hue: 178, saturation: 180, value: 255 }, 60, 10));
        this.entry.push(new __WEBPACK_IMPORTED_MODULE_0__mode__["a" /* Mode */]("asd", 255, 230, 0, 0, { hue: 0, saturation: 150, value: 255 }, 60, 13));
        this.entry.push(new __WEBPACK_IMPORTED_MODULE_0__mode__["a" /* Mode */]("asd", 200, 190, 0, 0, { hue: 255, saturation: 255, value: 255 }, 60, 16));
        this.entry.push(new __WEBPACK_IMPORTED_MODULE_0__mode__["a" /* Mode */]("asd", 100, 255, 0, 0, { hue: 190, saturation: 140, value: 255 }, 120, 2));
        this.entry.push(new __WEBPACK_IMPORTED_MODULE_0__mode__["a" /* Mode */]("asd", 255, 255, 0, 0, { hue: 255, saturation: 255, value: 255 }, 60, 17));
        this.entry.push(new __WEBPACK_IMPORTED_MODULE_0__mode__["a" /* Mode */]("asd", 180, 18, 0, 0, { hue: 0, saturation: 90, value: 255 }, 45, 10));
        this.entry.push(new __WEBPACK_IMPORTED_MODULE_0__mode__["a" /* Mode */]("asd", 100, 30, 0, 0, { hue: 0, saturation: 125, value: 200 }, 30, 6));
        this.entry.push(new __WEBPACK_IMPORTED_MODULE_0__mode__["a" /* Mode */]("asd", 180, 18, 0, 0, { hue: 90, saturation: 90, value: 255 }, 60, 10));
        this.entry.push(new __WEBPACK_IMPORTED_MODULE_0__mode__["a" /* Mode */]("asd", 43, 255, 0, 0, { hue: 39, saturation: 47, value: 255 }, 60, 14));
        this.entry.push(new __WEBPACK_IMPORTED_MODULE_0__mode__["a" /* Mode */]("asd", 100, 255, 0, 0, { hue: 255, saturation: 140, value: 190 }, 60, 2));
        this.entry.push(new __WEBPACK_IMPORTED_MODULE_0__mode__["a" /* Mode */]("asd", 180, 255, 0, 0, { hue: 0, saturation: 90, value: 255 }, 60, 10));
        this.entry.push(new __WEBPACK_IMPORTED_MODULE_0__mode__["a" /* Mode */]("asd", 90, 0, 0, 0, { hue: 100, saturation: 185, value: 255 }, 40, 20));
    }
    Procedure.prototype.programTo8Bit = function () {
        var array = new Uint8Array(8 * this.entry.length + 5);
        array[0] = 12;
        array[1] = 19;
        array[2] = 91;
        array[3] = array.length - 4;
        array[4] = 2;
        array = this.modesToBytes(array);
        console.log(array.length);
        console.log(array[array.length - 1]);
        return array;
    };
    Procedure.prototype.saveProgram = function () {
        var array = new Uint8Array(5);
        array[0] = 12;
        array[1] = 19;
        array[2] = 91;
        array[3] = 1;
        array[4] = 3;
        return array;
    };
    Procedure.prototype.modesToBytes = function (array) {
        var index = 5;
        this.entry.forEach(function (mode) {
            array = mode.modeTo8Bit(array, index);
            index = index + 8;
        });
        return array;
    };
    Procedure.prototype.procedureToJson = function () {
        /**let JSONObject = {
            modes: []
        };
        this.entry.forEach(function (mode) {
            JSONObject.modes.push({modeNumber: mode.modeNumber, speed: mode.speed, })
        });**/
        return JSON.stringify(this);
    };
    Procedure.prototype.intToByte = function (input) {
        return input & (255);
    };
    return Procedure;
}());

//# sourceMappingURL=procedure.js.map

/***/ }),

/***/ 202:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PlayPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_connection_connection__ = __webpack_require__(40);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the PlayPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var PlayPage = /** @class */ (function () {
    function PlayPage(navCtrl, navParams, provider) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.provider = provider;
        this.triggerAutomatically = true;
        this.transferSucceeded = false;
        this.transfering = false;
        this.connectionProvider = provider;
        this.zone = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["N" /* NgZone */]({ enableLongStackTrace: false });
    }
    PlayPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad PlayPage');
    };
    PlayPage.prototype.sendPlay = function () {
        var component = this;
        this.transfering = true;
        var input = this.connectionProvider.currentDevice.playMode.playTo8Bit();
        this.connectionProvider.transfer(input).then(function success(response) {
            console.log("Succesfully sent settings object");
        });
        setTimeout(function () {
            component.transfering = false;
        }, 1000);
    };
    PlayPage.prototype.triggerTransfer = function () {
        if (this.triggerAutomatically) {
            console.log("triggered");
            this.sendPlay();
        }
    };
    PlayPage.prototype.addPlayToProgram = function () {
        this.connectionProvider.currentDevice.program.entry.push(this.connectionProvider.currentDevice.playMode);
    };
    PlayPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-play',template:/*ion-inline-start:"/Users/konstantinvogel/prototyping/ionic-stuff/cube-bt-controller/src/pages/play/play.html"*/'<!--\n  Generated template for the PlayPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n    <ion-navbar>\n        <ion-title>Play</ion-title>\n    </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n    <div>\n        <ion-list-header>Configuration for:{{connectionProvider.currentDevice.macAddress}}\n\n        </ion-list-header>\n\n        <h2>Mode Settings</h2>\n        <ion-grid>\n            <ion-row>\n                <ion-col col-3>\n                    <ion-icon float-left class="playbutton playbutton-previous" large name="arrow-dropleft"\n                              (ionChange)="triggerTransfer()"\n                              (click)="connectionProvider.currentDevice.playMode.previousMode()"></ion-icon>\n                </ion-col>\n                <ion-col align-items-center col-6>\n                    <ion-select (ionChange)="triggerTransfer()" align-items-center class="mode-select"\n                                [(ngModel)]="connectionProvider.currentDevice.playMode.modeNumber"\n                                style="max-width:100%">\n                        <ion-option value="1">Mode 1</ion-option>\n                        <ion-option value="2">Mode 2</ion-option>\n                        <ion-option value="3">Mode 3</ion-option>\n                        <ion-option value="4">Mode 4</ion-option>\n                        <ion-option value="5">Mode 5</ion-option>\n                        <ion-option value="6">Mode 6</ion-option>\n                        <ion-option value="7">Mode 7</ion-option>\n                        <ion-option value="8">Mode 8</ion-option>\n                        <ion-option value="9">Mode 9</ion-option>\n                        <ion-option value="10">Mode 10</ion-option>\n                        <ion-option value="11">Mode 11</ion-option>\n                        <ion-option value="12">Mode 12</ion-option>\n                        <ion-option value="13">Mode 13</ion-option>\n                        <ion-option value="14">Mode 14</ion-option>\n                        <ion-option value="15">Mode 15</ion-option>\n                        <ion-option value="16">Mode 16</ion-option>\n                        <ion-option value="17">Mode 17</ion-option>\n                        <ion-option value="18">Mode 18</ion-option>\n                        <ion-option value="19">Mode 19</ion-option>\n                        <ion-option value="20">Mode 20</ion-option>\n                        <ion-option value="21">Mode 21</ion-option>\n                        <ion-option value="22">Mode 22</ion-option>\n                        <ion-option value="23">Mode 23</ion-option>\n                        <ion-option value="24">Mode 24</ion-option>\n                        <ion-option value="25">Mode 25</ion-option>\n                    </ion-select>\n                </ion-col>\n                <ion-col col-3>\n                    <ion-icon (click)="connectionProvider.currentDevice.playMode.nextMode()" float-right\n                              class="playbutton playbutton-next" large\n                              (ionChange)="triggerTransfer()" name="arrow-dropright"></ion-icon>\n                </ion-col>\n            </ion-row>\n            <ion-row>\n                <ion-col col-8>\n                    <ion-label>Hue\n                        <ion-badge>{{connectionProvider.currentDevice.playMode.color.hue}}</ion-badge>\n                    </ion-label>\n                    <ion-range [debounce]="500"\n                               [(ngModel)]="connectionProvider.currentDevice.playMode.color.hue"\n                               min="0" max="255"\n                               (ionChange)="triggerTransfer()"></ion-range>\n                </ion-col>\n                <ion-col col-4>\n                </ion-col>\n\n            </ion-row>\n            <ion-row>\n                <ion-col col-8>\n                    <ion-label>Saturation\n                        <ion-badge> {{connectionProvider.currentDevice.playMode.color.saturation}}</ion-badge>\n                    </ion-label>\n                    <ion-range [debounce]="500"\n                               [(ngModel)]="connectionProvider.currentDevice.playMode.color.saturation" min="0"\n                               max="255"\n                               (ionChange)="triggerTransfer()"></ion-range>\n                </ion-col>\n                <ion-col col-4>\n                </ion-col>\n\n            </ion-row>\n            <ion-row>\n                <ion-col col-8>\n                    <ion-label>Value\n                        <ion-badge> {{connectionProvider.currentDevice.playMode.color.value}}</ion-badge>\n                    </ion-label>\n                    <ion-range [debounce]="500"\n                               [(ngModel)]="connectionProvider.currentDevice.playMode.color.value"\n                               min="0" max="255"\n                               (ionChange)="triggerTransfer()"></ion-range>\n                </ion-col>\n                <ion-col col-4>\n                </ion-col>\n            </ion-row>\n            <ion-row>\n                <ion-col col-8>\n                    <ion-label>Speed\n                        <ion-badge> {{connectionProvider.currentDevice.playMode.speed}}</ion-badge>\n                    </ion-label>\n                    <ion-range [debounce]="500" color="dark"\n                               [(ngModel)]="connectionProvider.currentDevice.playMode.speed" min="0"\n                               max="255"\n                               (ionChange)="triggerTransfer()"></ion-range>\n                </ion-col>\n                <ion-col col-4>\n                </ion-col>\n            </ion-row>\n            <ion-row>\n\n                <ion-col col-8>\n                    <ion-label>Feature 1\n                        <ion-badge> {{connectionProvider.currentDevice.playMode.feature1}}</ion-badge>\n                    </ion-label>\n                    <ion-range [debounce]="500" color="dark"\n                               [(ngModel)]="connectionProvider.currentDevice.playMode.feature1" min="0"\n                               max="255"\n                               (ionChange)="triggerTransfer()"></ion-range>\n                </ion-col>\n                <ion-col col-4>\n                </ion-col>\n            </ion-row>\n            <ion-row>\n                <ion-col col-8>\n                    <ion-label>Feature2\n                        <ion-badge>{{connectionProvider.currentDevice.playMode.feature2}}</ion-badge>\n                    </ion-label>\n                    <ion-range [debounce]="500" [(ngModel)]="connectionProvider.currentDevice.playMode.feature2" min="0" max="255"></ion-range>\n                </ion-col>\n                <ion-col col-4>\n                </ion-col>\n            </ion-row>\n        </ion-grid>\n\n        <ion-item>\n            <button ion-button color="success" [disabled]="transfering" (click)="sendPlay()">Transfer\n            </button>\n        </ion-item>\n\n\n\n    </div>\n\n</ion-content>\n'/*ion-inline-end:"/Users/konstantinvogel/prototyping/ionic-stuff/cube-bt-controller/src/pages/play/play.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_connection_connection__["a" /* ConnectionProvider */]])
    ], PlayPage);
    return PlayPage;
}());

//# sourceMappingURL=play.js.map

/***/ }),

/***/ 203:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConnectionPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models_bluetoothDevice__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_connection_connection__ = __webpack_require__(40);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/**
 * Generated class for the ConnectionPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ConnectionPage = /** @class */ (function () {
    function ConnectionPage(navCtrl, navParams, connectionProvider) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.connectionProvider = connectionProvider;
        this.peripheral = {};
        this.showDeviceControl = false;
        this.transferSucceeded = false;
        this.triggerAutomatically = false;
        this.bluetoothProvider = connectionProvider;
        this.bluetoothDevices = [];
        this.currentDevice = new __WEBPACK_IMPORTED_MODULE_2__models_bluetoothDevice__["a" /* BluetoothDevice */]();
        this.zone = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["N" /* NgZone */]({ enableLongStackTrace: false });
        //this.currentDevice.connected = true;
        //this.showDeviceControl = true;
    }
    ConnectionPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ConnectionPage');
        this.isScanning = false;
        this.checkBluetooth();
        //this.listConnectedDevices();
        //this.discoverUnpaired();
    };
    ConnectionPage.prototype.discoverUnpaired = function () {
        this.isScanning = true;
        var component = this;
        console.log("currently scanning...");
        this.bluetoothProvider.scanForDevices().then(function success(data) {
            if (data) {
                component.bluetoothDevices = [];
                data.forEach(function (device) {
                    var newDevice = new __WEBPACK_IMPORTED_MODULE_2__models_bluetoothDevice__["a" /* BluetoothDevice */]();
                    newDevice.name = device.name ? device.name : null;
                    newDevice.uuid = device.id;
                    newDevice.macAddress = device.address;
                    newDevice.connected = false;
                    component.bluetoothDevices.push(newDevice);
                    component.bluetoothProvider.bluetoothDevices.push(newDevice);
                });
            }
            console.log("finished scanning...");
            component.isScanning = false;
            console.log(data);
        }, function error(error) {
            console.log(error);
        });
    };
    ConnectionPage.prototype.checkBluetooth = function () {
        var component = this;
        this.disconnectFromDevice(null);
        this.connectionProvider.bt.isEnabled().then(function success(response) {
            component.discoverUnpaired();
        }, function error() {
            component.connectionProvider.bt.enable();
        });
    };
    ConnectionPage.prototype.connectToDevice = function (unpairedDevice) {
        var _this = this;
        this.zone.run(function () {
            _this.bluetoothProvider.connectToDevice(unpairedDevice);
        });
    };
    ConnectionPage.prototype.disconnectFromDevice = function (pairedDevice) {
        var _this = this;
        this.zone.run(function () {
            _this.bluetoothProvider.disconnectFromDevice(pairedDevice);
            if (pairedDevice) {
                _this.currentDevice = new __WEBPACK_IMPORTED_MODULE_2__models_bluetoothDevice__["a" /* BluetoothDevice */]();
                pairedDevice.connected = false;
            }
        });
    };
    ConnectionPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-connection',template:/*ion-inline-start:"/Users/konstantinvogel/prototyping/ionic-stuff/cube-bt-controller/src/pages/connection/connection.html"*/'<!--\n  Generated template for the ConnectionPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n    <ion-navbar>\n        <ion-title>Connection</ion-title>\n    </ion-navbar>\n\n</ion-header>\n\n<ion-content>\n\n    <ion-list>\n        <ion-list-header>\n            <button *ngIf="!isScanning" (click)="checkBluetooth()" item-end ion-button clear large>\n                <ion-icon name="sync"></ion-icon>\n            </button>\n        </ion-list-header>\n        <ion-item *ngIf="isScanning" text-center>\n            <ion-spinner name="dots"></ion-spinner>\n        </ion-item>\n        <ion-item>\n            <ion-select *ngIf="!isScanning" style="max-width:100%" placeholder="Select a device to connect to"\n                        (ionChange)="connectToDevice($event)">\n                <h2>Nearby Devices</h2>\n                <ion-option *ngFor="let device of bluetoothDevices" value={{device.macAddress}}>{{device.name ?\n                    device.name : device.macAddress}}\n                </ion-option>\n            </ion-select>\n        </ion-item>\n\n        <ion-item *ngIf="this.bluetoothProvider.currentDevice.connected">\n            Connected to {{this.bluetoothProvider.currentDevice.macAddress}}\n            <button ion-button color="success" (click)="disconnectFromDevice(this.bluetoothProvider.currentDevice)">Disconnect</button>\n        </ion-item>\n\n    </ion-list>\n</ion-content>\n'/*ion-inline-end:"/Users/konstantinvogel/prototyping/ionic-stuff/cube-bt-controller/src/pages/connection/connection.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */], __WEBPACK_IMPORTED_MODULE_3__providers_connection_connection__["a" /* ConnectionProvider */]])
    ], ConnectionPage);
    return ConnectionPage;
}());

//# sourceMappingURL=connection.js.map

/***/ }),

/***/ 204:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(205);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(227);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 227:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_geolocation__ = __webpack_require__(270);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__(278);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_status_bar__ = __webpack_require__(193);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_splash_screen__ = __webpack_require__(194);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_connection_connection__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_program_program__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_native_bluetooth_serial__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_tabs_tabs__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_play_play__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__providers_connection_connection__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__ionic_storage__ = __webpack_require__(200);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};














var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_10__pages_tabs_tabs__["a" /* TabsPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_play_play__["a" /* PlayPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_connection_connection__["a" /* ConnectionPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_program_program__["a" /* ProgramPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/tabs/tabs.module#TabsPageModule', name: 'TabsPage', segment: 'tabs', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_13__ionic_storage__["a" /* IonicStorageModule */].forRoot()
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_7__pages_connection_connection__["a" /* ConnectionPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_program_program__["a" /* ProgramPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_tabs_tabs__["a" /* TabsPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_play_play__["a" /* PlayPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_12__providers_connection_connection__["a" /* ConnectionProvider */],
                __WEBPACK_IMPORTED_MODULE_5__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_6__ionic_native_splash_screen__["a" /* SplashScreen */],
                __WEBPACK_IMPORTED_MODULE_3__ionic_native_geolocation__["a" /* Geolocation */],
                __WEBPACK_IMPORTED_MODULE_9__ionic_native_bluetooth_serial__["a" /* BluetoothSerial */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["v" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_12__providers_connection_connection__["a" /* ConnectionProvider */],
            ],
            schemas: [__WEBPACK_IMPORTED_MODULE_1__angular_core__["i" /* CUSTOM_ELEMENTS_SCHEMA */]]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 278:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(193);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(194);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_tabs_tabs__ = __webpack_require__(195);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.platform = platform;
        this.statusBar = statusBar;
        this.splashScreen = splashScreen;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_tabs_tabs__["a" /* TabsPage */];
        this.initializeApp();
    }
    MyApp.prototype.initializeApp = function () {
        var _this = this;
        this.platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            _this.statusBar.styleDefault();
            _this.splashScreen.hide();
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */])
    ], MyApp.prototype, "nav", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"/Users/konstantinvogel/prototyping/ionic-stuff/cube-bt-controller/src/app/app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"/Users/konstantinvogel/prototyping/ionic-stuff/cube-bt-controller/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 40:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConnectionProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_bluetoothDevice__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_bluetooth_serial__ = __webpack_require__(199);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/*
  Generated class for the ConnectionProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var ConnectionProvider = /** @class */ (function () {
    function ConnectionProvider(bt) {
        this.bt = bt;
        this.bluetoothDevices = [];
        this.currentDevice = new __WEBPACK_IMPORTED_MODULE_1__models_bluetoothDevice__["a" /* BluetoothDevice */]();
        console.log('Hello ConnectionProvider Provider');
        this.bluetooth = bt;
        this.zone = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["N" /* NgZone */]({ enableLongStackTrace: false });
    }
    ConnectionProvider.prototype.scanForDevices = function () {
        console.log("currently scanning...");
        return this.bluetooth.discoverUnpaired();
    };
    ConnectionProvider.prototype.checkBluetooth = function () {
        var provider = this;
        this.disconnectFromDevice(null);
        this.bluetooth.isEnabled().then(function success(response) {
            provider.scanForDevices();
        }, function error() {
            provider.bluetooth.enable();
        });
    };
    ConnectionProvider.prototype.connectToDevice = function (unpairedDevice) {
        var _this = this;
        this.bluetooth.connect(unpairedDevice);
        this.bluetooth.connect(unpairedDevice).subscribe(function (peripheral) { return _this.onConnected(peripheral, unpairedDevice); }, function (peripheral) { return _this.onConnectionFail(unpairedDevice); });
    };
    ConnectionProvider.prototype.disconnectFromDevice = function (pairedDevice) {
        this.bluetooth.disconnect();
        if (pairedDevice) {
            pairedDevice.connected = false;
        }
    };
    ConnectionProvider.prototype.onConnected = function (peripheral, unpairedDevice) {
        var _this = this;
        this.zone.run(function () {
            _this.currentDevice.connected = true;
            _this.currentDevice.macAddress = unpairedDevice;
        });
    };
    ConnectionProvider.prototype.onConnectionFail = function (unpairedDevice) {
        unpairedDevice.connected = false;
    };
    ConnectionProvider.prototype.transfer = function (input) {
        return this.bluetooth.write(input);
    };
    ConnectionProvider.prototype.listConnectedDevices = function () {
        return this.bluetooth.list();
    };
    ConnectionProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__ionic_native_bluetooth_serial__["a" /* BluetoothSerial */]])
    ], ConnectionProvider);
    return ConnectionProvider;
}());

//# sourceMappingURL=connection.js.map

/***/ })

},[204]);
//# sourceMappingURL=main.js.map