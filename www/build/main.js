webpackJsonp([4],{

/***/ 100:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConnectionPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_bluetooth_serial__ = __webpack_require__(153);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__models_bluetoothDevice__ = __webpack_require__(252);
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
    function ConnectionPage(navCtrl, navParams, bt) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.bt = bt;
        this.peripheral = {};
        this.showDeviceControl = false;
        this.transferSucceeded = false;
        this.triggerAutomatically = false;
        this.bluetooth = bt;
        this.bluetoothDevices = [];
        this.currentDevice = new __WEBPACK_IMPORTED_MODULE_3__models_bluetoothDevice__["a" /* BluetoothDevice */]();
        this.zone = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["N" /* NgZone */]({ enableLongStackTrace: false });
        this.currentDevice.connected = true;
        this.showDeviceControl = true;
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
        this.bluetooth.discoverUnpaired().then(function success(data) {
            if (data) {
                component.bluetoothDevices = [];
                data.forEach(function (device) {
                    var newDevice = new __WEBPACK_IMPORTED_MODULE_3__models_bluetoothDevice__["a" /* BluetoothDevice */]();
                    newDevice.name = device.name ? device.name : null;
                    newDevice.uuid = device.id;
                    newDevice.macAddress = device.address;
                    newDevice.connected = false;
                    component.bluetoothDevices.push(newDevice);
                });
            }
            console.log("finished scanning...");
            component.isScanning = false;
            console.log(data);
        }, function error(error) {
            console.log(error);
        });
    };
    ConnectionPage.prototype.nextMode = function () {
        this.currentDevice.nextMode();
    };
    ConnectionPage.prototype.previousMode = function () {
        this.currentDevice.previousMode();
    };
    ConnectionPage.prototype.checkBluetooth = function () {
        var comp = this;
        this.disconnectFromDevice(null);
        this.bluetooth.isEnabled().then(function success(response) {
            comp.discoverUnpaired();
        }, function error() {
            comp.bluetooth.enable();
        });
    };
    ConnectionPage.prototype.connectToDevice = function (unpairedDevice) {
        var _this = this;
        this.bluetooth.connect(unpairedDevice);
        this.bluetooth.connect(unpairedDevice).subscribe(function (peripheral) { return _this.onConnected(peripheral, unpairedDevice); }, function (peripheral) { return _this.onConnectionFail(unpairedDevice); });
    };
    ConnectionPage.prototype.disconnectFromDevice = function (pairedDevice) {
        this.bluetooth.disconnect();
        if (pairedDevice) {
            pairedDevice.connected = false;
        }
    };
    ConnectionPage.prototype.onConnected = function (peripheral, unpairedDevice) {
        var _this = this;
        this.zone.run(function () {
            _this.currentDevice.connected = true;
            _this.currentDevice.macAddress = unpairedDevice;
            _this.showDeviceControl = true;
        });
    };
    ConnectionPage.prototype.onConnectionFail = function (unpairedDevice) {
        unpairedDevice.connected = false;
    };
    ConnectionPage.prototype.triggerTransfer = function () {
        if (this.triggerAutomatically) {
            console.log("triggered");
            this.transferConfiguration();
        }
    };
    ConnectionPage.prototype.transferConfiguration = function () {
        var transferSuccess = this.transferSucceeded;
        var device = this.currentDevice;
        var input = {};
        Object.assign(input, { global: device.global }, device.play);
        this.bluetooth.write(JSON.stringify(input)).then(function success(response) {
            console.log("Succesfully sent settings object");
            transferSuccess = true;
        });
    };
    ConnectionPage.prototype.addToProcedure = function () {
        var transferSuccess = this.transferSucceeded;
        var device = this.currentDevice;
        var input = {};
        Object.assign(input, { "action": "procedure_add" }, device.global, device.play);
        this.bluetooth.write(JSON.stringify(input)).then(function success(response) {
            console.log("Succesfully sent settings object");
            transferSuccess = true;
        });
    };
    ConnectionPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-connection',template:/*ion-inline-start:"/Users/konstantinvogel/prototyping/ionic-stuff/cube-bt-controller/src/pages/connection/connection.html"*/'<!--\n  Generated template for the ConnectionPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n    <ion-navbar>\n        <ion-title>Connection</ion-title>\n    </ion-navbar>\n\n</ion-header>\n\n<ion-content>\n    <ion-list>\n        <ion-list-header>\n            <button *ngIf="!isScanning" (click)="checkBluetooth()" item-end ion-button clear large>\n                <ion-icon name="sync"></ion-icon>\n            </button>\n        </ion-list-header>\n        <ion-item *ngIf="isScanning" text-center>\n            <ion-spinner name="dots"></ion-spinner>\n        </ion-item>\n        <ion-item>\n            <ion-select *ngIf="!isScanning" style="max-width:100%" placeholder="Select a device to connect to"\n                        (ionChange)="connectToDevice($event)">\n                <h2>Nearby Devices</h2>\n                <ion-option *ngFor="let device of bluetoothDevices" value={{device.macAddress}}>{{device.name ?\n                    device.name : device.macAddress}}\n                </ion-option>\n            </ion-select>\n        </ion-item>\n\n        <div [hidden]="!showDeviceControl">\n            <ion-list-header>Configuration for:{{currentDevice.macAddress}}\n\n            </ion-list-header>\n            <ion-item>\n                <button ion-button color="success">Procedures\n                </button>\n            </ion-item>            <h2>Mode Settings</h2>\n            <ion-grid>\n                <ion-row>\n                    <ion-col col-3>\n                        <ion-icon float-left class="playbutton playbutton-previous" large name="arrow-dropleft"\n                                  (click)="previousMode()"></ion-icon>\n                    </ion-col>\n                    <ion-col align-items-center col-6>\n                        <ion-select align-items-center class="mode-select" [(ngModel)]="currentDevice.play.mode"\n                                    style="max-width:100%">\n                            <ion-option value="1">Mode 1</ion-option>\n                            <ion-option value="2">Mode 2</ion-option>\n                            <ion-option value="3">Mode 3</ion-option>\n                            <ion-option value="4">Mode 4</ion-option>\n                            <ion-option value="5">Mode 5</ion-option>\n                            <ion-option value="6">Mode 6</ion-option>\n                            <ion-option value="7">Mode 7</ion-option>\n                            <ion-option value="8">Mode 8</ion-option>\n                        </ion-select>\n                    </ion-col>\n                    <ion-col col-3>\n                        <ion-icon (click)="nextMode()" float-right class="playbutton playbutton-next" large\n                                  name="arrow-dropright"></ion-icon>\n                    </ion-col>\n                </ion-row>\n            </ion-grid>\n            <h2>Global Settings</h2>\n            <ion-row>\n                <ion-col col-3></ion-col>\n\n                <ion-col col-6>\n                    <ion-item>\n                        <ion-label>Speed</ion-label>\n                        <ion-range [debounce]="500" color="dark" [(ngModel)]="currentDevice.global.speed" min="0"\n                                   max="255"\n                                   (ionChange)="triggerTransfer()" pin="true"></ion-range>\n                    </ion-item>\n                </ion-col>\n                <ion-col col-3></ion-col>\n\n            </ion-row>\n            <ion-row>\n                <ion-col col-3></ion-col>\n                <ion-col col-6>\n                    <ion-item>\n                        <ion-label>Hue</ion-label>\n                        <ion-range [debounce]="500" [(ngModel)]="currentDevice.global.color.hue" min="0" max="255"\n                                   (ionChange)="triggerTransfer()" pin="true"></ion-range>\n                    </ion-item>\n                </ion-col>\n                <ion-col col-3></ion-col>\n\n            </ion-row>\n            <ion-row>\n                <ion-col col-3></ion-col>\n                <ion-col col-6>\n\n                    <ion-item>\n                        <ion-label>Saturation</ion-label>\n                        <ion-range [debounce]="500" [(ngModel)]="currentDevice.global.color.saturation" min="0"\n                                   max="255"\n                                   (ionChange)="triggerTransfer()" pin="true"></ion-range>\n                    </ion-item>\n                </ion-col>\n                <ion-col col-3></ion-col>\n\n            </ion-row>\n            <ion-row>\n                <ion-col col-3></ion-col>\n                <ion-col col-6>\n                    <ion-item>\n                        <ion-label>Value</ion-label>\n                        <ion-range [debounce]="500" [(ngModel)]="currentDevice.global.color.value" min="0" max="255"\n                                   (ionChange)="triggerTransfer()" pin="true"></ion-range>\n                    </ion-item>\n                </ion-col>\n                <ion-col col-3></ion-col>\n\n            </ion-row>\n            <ion-item>\n                <button ion-button color="success" (click)="transferConfiguration()">Transfer Changes\n                </button>\n            </ion-item>\n            <ion-item>\n                <button ion-button color="success" (click)="addToProcedure()">Add to Procedure\n                </button>\n            </ion-item>\n\n            <ion-item>\n                <ion-checkbox [(ngModel)]="triggerAutomatically">Trigger Automatically</ion-checkbox>\n            </ion-item>\n        </div>\n    </ion-list>\n</ion-content>\n'/*ion-inline-end:"/Users/konstantinvogel/prototyping/ionic-stuff/cube-bt-controller/src/pages/connection/connection.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_bluetooth_serial__["a" /* BluetoothSerial */]])
    ], ConnectionPage);
    return ConnectionPage;
}());

//# sourceMappingURL=connection.js.map

/***/ }),

/***/ 101:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProcedurePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models_procedure__ = __webpack_require__(253);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__models_mode__ = __webpack_require__(254);
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
 * Generated class for the ProcedurePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ProcedurePage = /** @class */ (function () {
    function ProcedurePage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.newProcedureEntry = new __WEBPACK_IMPORTED_MODULE_3__models_mode__["a" /* Mode */]();
        this.procedure = new __WEBPACK_IMPORTED_MODULE_2__models_procedure__["a" /* Procedure */]();
        this.listOfModes = [];
        var exampleMode = new __WEBPACK_IMPORTED_MODULE_3__models_mode__["a" /* Mode */]();
        exampleMode.modeName = "1234";
        this.listOfModes.push(exampleMode);
    }
    ProcedurePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ProcedurePage');
    };
    ProcedurePage.prototype.addProcedureEntry = function (mode) {
        this.listOfModes.push(mode);
    };
    ProcedurePage.prototype.removeProcedureEntry = function (mode) {
    };
    ProcedurePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-procedure',template:/*ion-inline-start:"/Users/konstantinvogel/prototyping/ionic-stuff/cube-bt-controller/src/pages/procedure/procedure.html"*/'<!--\n  Generated template for the ProcedurePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>procedure</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <ion-list>\n    <ion-item *ngFor="let entry of listOfModes">\n        {{entry ? entry.modeName : ""}}\n    </ion-item>\n  </ion-list>\n      <ion-grid>\n        <ion-row>\n          <ion-col col-3>\n\n          </ion-col>\n          <ion-col align-items-center col-6>\n            <ion-select align-items-center class="mode-select" [(ngModel)]="newProcedureEntry.modeName"\n                        style="max-width:100%">\n              <ion-option value="1">Mode 1</ion-option>\n              <ion-option value="2">Mode 2</ion-option>\n              <ion-option value="3">Mode 3</ion-option>\n              <ion-option value="4">Mode 4</ion-option>\n              <ion-option value="5">Mode 5</ion-option>\n              <ion-option value="6">Mode 6</ion-option>\n              <ion-option value="7">Mode 7</ion-option>\n              <ion-option value="8">Mode 8</ion-option>\n            </ion-select>\n          </ion-col>\n          <ion-col col-3>\n\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n      <ion-row>\n        <ion-col col-3></ion-col>\n\n        <ion-col col-6>\n            <ion-label>Speed</ion-label>\n            <ion-range [debounce]="500" color="dark" [(ngModel)]="newProcedureEntry.speed" min="0"\n                       max="255"\n                       pin="true"></ion-range>\n        </ion-col>\n        <ion-col col-3></ion-col>\n\n      </ion-row>\n      <ion-row>\n        <ion-col col-3></ion-col>\n        <ion-col col-6>\n            <ion-label>Hue</ion-label>\n            <ion-range [debounce]="500" [(ngModel)]="newProcedureEntry.color.hue" min="0" max="255"\n                       pin="true"></ion-range>\n        </ion-col>\n        <ion-col col-3></ion-col>\n\n      </ion-row>\n      <ion-row>\n        <ion-col col-3></ion-col>\n        <ion-col col-6>\n\n            <ion-label>Saturation</ion-label>\n            <ion-range [debounce]="500" [(ngModel)]="newProcedureEntry.color.saturation" min="0"\n                       max="255"\n                        pin="true"></ion-range>\n        </ion-col>\n        <ion-col col-3></ion-col>\n\n      </ion-row>\n      <ion-row>\n        <ion-col col-3></ion-col>\n        <ion-col col-6>\n            <ion-label>Value</ion-label>\n            <ion-range [debounce]="500" [(ngModel)]="newProcedureEntry.color.value" min="0" max="255"\n                       pin="true"></ion-range>\n        </ion-col>\n        <ion-col col-3></ion-col>\n\n      </ion-row>\n        <button ion-button color="success" (click)="addProcedureEntry(newProcedureEntry)">Transfer Changes\n        </button>\n</ion-content>\n'/*ion-inline-end:"/Users/konstantinvogel/prototyping/ionic-stuff/cube-bt-controller/src/pages/procedure/procedure.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], ProcedurePage);
    return ProcedurePage;
}());

//# sourceMappingURL=procedure.js.map

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
	"../pages/connection/connection.module": [
		274,
		3
	],
	"../pages/play/play.module": [
		275,
		1
	],
	"../pages/procedure/procedure.module": [
		276,
		2
	],
	"../pages/tabs/tabs.module": [
		277,
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

/***/ 196:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(219);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 219:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_geolocation__ = __webpack_require__(272);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__(273);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_status_bar__ = __webpack_require__(194);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_splash_screen__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_connection_connection__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_bluetooth_serial__ = __webpack_require__(153);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_procedure_procedure__ = __webpack_require__(101);
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
                __WEBPACK_IMPORTED_MODULE_7__pages_connection_connection__["a" /* ConnectionPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_procedure_procedure__["a" /* ProcedurePage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/connection/connection.module#ConnectionPageModule', name: 'ConnectionPage', segment: 'connection', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/play/play.module#PlayPageModule', name: 'PlayPage', segment: 'play', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/procedure/procedure.module#ProcedurePageModule', name: 'ProcedurePage', segment: 'procedure', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/tabs/tabs.module#TabsPageModule', name: 'TabsPage', segment: 'tabs', priority: 'low', defaultHistory: [] }
                    ]
                }),
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_7__pages_connection_connection__["a" /* ConnectionPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_procedure_procedure__["a" /* ProcedurePage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_5__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_6__ionic_native_splash_screen__["a" /* SplashScreen */],
                __WEBPACK_IMPORTED_MODULE_3__ionic_native_geolocation__["a" /* Geolocation */],
                __WEBPACK_IMPORTED_MODULE_8__ionic_native_bluetooth_serial__["a" /* BluetoothSerial */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["v" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicErrorHandler */] }
            ],
            schemas: [__WEBPACK_IMPORTED_MODULE_1__angular_core__["i" /* CUSTOM_ELEMENTS_SCHEMA */]]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 252:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BluetoothDevice; });
var BluetoothDevice = /** @class */ (function () {
    function BluetoothDevice() {
        this.mode = 1;
        this.global = {
            speed: 100,
            color: { hue: 255, saturation: 255, value: 255 }
        };
        this.play = {
            mode: 1,
            feature1: 100,
            feature2: 100
        };
        this.nextMode = function () {
            if (this.play.mode == 8) {
                this.play.mode = 1;
            }
            else {
                this.play.mode++;
            }
        };
        this.previousMode = function () {
            if (this.play.mode == 1) {
                this.play.mode = 8;
            }
            else {
                this.play.mode--;
            }
        };
        this.modes = [
            {
                "mode": 1,
                "feature1": 125,
                "feature2": 125,
                "speed": 100,
                color: { hue: 100, saturation: 255, value: 255 },
                "useLocal": false
            },
            {
                "mode": 2,
                "feature1": 125,
                "feature2": 125,
                "speed": 100,
                color: { hue: 100, saturation: 255, value: 255 },
                "useLocal": false
            }
        ];
    }
    return BluetoothDevice;
}());

//# sourceMappingURL=bluetoothDevice.js.map

/***/ }),

/***/ 253:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Procedure; });
var Procedure = /** @class */ (function () {
    function Procedure() {
    }
    return Procedure;
}());

//# sourceMappingURL=procedure.js.map

/***/ }),

/***/ 254:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Mode; });
var Mode = /** @class */ (function () {
    function Mode() {
        this.modeName = "test";
    }
    return Mode;
}());

//# sourceMappingURL=mode.js.map

/***/ }),

/***/ 273:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(194);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_connection_connection__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_procedure_procedure__ = __webpack_require__(101);
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
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_connection_connection__["a" /* ConnectionPage */];
        this.initializeApp();
        this.pages = [
            { title: 'Connection', component: __WEBPACK_IMPORTED_MODULE_4__pages_connection_connection__["a" /* ConnectionPage */] },
            { title: 'Procedure', component: __WEBPACK_IMPORTED_MODULE_5__pages_procedure_procedure__["a" /* ProcedurePage */] }
        ];
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
    MyApp.prototype.openPage = function (page) {
        this.rootPage = page;
        this.nav.push(__WEBPACK_IMPORTED_MODULE_5__pages_procedure_procedure__["a" /* ProcedurePage */]);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */])
    ], MyApp.prototype, "nav", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"/Users/konstantinvogel/prototyping/ionic-stuff/cube-bt-controller/src/app/app.html"*/'<ion-menu [content]="content">\n  <ion-header>\n    <ion-toolbar>\n      <ion-title>Menu</ion-title>\n    </ion-toolbar>\n  </ion-header>\n\n  <ion-content>\n    <ion-list>\n      <button menuClose ion-item *ngFor="let p of pages" (click)="openPage(p)">\n        {{p.title}}\n      </button>\n    </ion-list>\n  </ion-content>\n\n</ion-menu>\n\n<!-- Disable swipe-to-go-back because it\'s poor UX to combine STGB with side menus -->\n<ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>'/*ion-inline-end:"/Users/konstantinvogel/prototyping/ionic-stuff/cube-bt-controller/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ })

},[196]);
//# sourceMappingURL=main.js.map