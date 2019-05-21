webpackJsonp([1],{

/***/ 109:
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
webpackEmptyAsyncContext.id = 109;

/***/ }),

/***/ 150:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/tabs/tabs.module": [
		274,
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
webpackAsyncContext.id = 150;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 193:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__program_program__ = __webpack_require__(272);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__play_play__ = __webpack_require__(273);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__connection_connection__ = __webpack_require__(270);
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
    function TabsPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.connectionTab = __WEBPACK_IMPORTED_MODULE_4__connection_connection__["a" /* ConnectionPage */];
        this.playTab = __WEBPACK_IMPORTED_MODULE_3__play_play__["a" /* PlayPage */];
        this.programTab = __WEBPACK_IMPORTED_MODULE_2__program_program__["a" /* ProgramPage */];
    }
    TabsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad TabsPage');
    };
    TabsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-tabs',template:/*ion-inline-start:"/Users/konstantinvogel/prototyping/ionic-stuff/cube-bt-controller/src/pages/tabs/tabs.html"*/'<ion-tabs>\n    <ion-tab [root]="connectionTab" tabTitle="Connection"></ion-tab>\n    <ion-tab [root]="programTab" tabTitle="Program"></ion-tab>\n    <ion-tab [root]="playTab" tabTitle="Connection" ></ion-tab>\n</ion-tabs>\n'/*ion-inline-end:"/Users/konstantinvogel/prototyping/ionic-stuff/cube-bt-controller/src/pages/tabs/tabs.html"*/,
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */]) === "function" && _b || Object])
    ], TabsPage);
    return TabsPage;
    var _a, _b;
}());

//# sourceMappingURL=tabs.js.map

/***/ }),

/***/ 195:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(218);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 218:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_geolocation__ = __webpack_require__(261);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__(269);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_status_bar__ = __webpack_require__(191);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_splash_screen__ = __webpack_require__(192);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_connection_connection__ = __webpack_require__(270);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_program_program__ = __webpack_require__(272);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_native_bluetooth_serial__ = __webpack_require__(194);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_tabs_tabs__ = __webpack_require__(193);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_play_play__ = __webpack_require__(273);
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
                })
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
                __WEBPACK_IMPORTED_MODULE_5__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_6__ionic_native_splash_screen__["a" /* SplashScreen */],
                __WEBPACK_IMPORTED_MODULE_3__ionic_native_geolocation__["a" /* Geolocation */],
                __WEBPACK_IMPORTED_MODULE_9__ionic_native_bluetooth_serial__["a" /* BluetoothSerial */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["v" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicErrorHandler */] },
            ],
            schemas: [__WEBPACK_IMPORTED_MODULE_1__angular_core__["i" /* CUSTOM_ELEMENTS_SCHEMA */]]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 269:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(191);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(192);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_tabs_tabs__ = __webpack_require__(193);
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

/***/ 270:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConnectionPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_bluetooth_serial__ = __webpack_require__(194);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__models_bluetoothDevice__ = __webpack_require__(271);
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
        Object.assign(input, { "action": "procedure_add" }, device.global, device.play, { "timelapse": device.procedureTimeLapse });
        this.bluetooth.write(JSON.stringify(input)).then(function success(response) {
            console.log("Succesfully sent settings object");
            transferSuccess = true;
        });
    };
    ConnectionPage.prototype.sendProcedureTest = function () {
        var input = {
            "mode": "procedure",
            "command": [
                {
                    "effect": 1,
                    "time": 10,
                    "color": { hue: 100, saturation: 255, value: 255 },
                    feature1: 100,
                    feature2: 100
                },
                {
                    "effect": 2,
                    "time": 10,
                    "color": { hue: 100, saturation: 255, value: 255 },
                    feature1: 100,
                    feature2: 100
                },
                {
                    "effect": 3,
                    "time": 10,
                    "color": { hue: 100, saturation: 255, value: 255 },
                    feature1: 100,
                    feature2: 100
                },
                {
                    "effect": 4,
                    "time": 10,
                    "color": { hue: 100, saturation: 255, value: 255 },
                    feature1: 100,
                    feature2: 100
                },
                {
                    "effect": 5,
                    "time": 10,
                    "color": { hue: 100, saturation: 255, value: 255 },
                    feature1: 100,
                    feature2: 100
                },
                {
                    "effect": 6,
                    "time": 10,
                    "color": { hue: 100, saturation: 255, value: 255 },
                    feature1: 100,
                    feature2: 100
                },
                {
                    "effect": 7,
                    "time": 10,
                    "color": { hue: 100, saturation: 255, value: 255 },
                    feature1: 100,
                    feature2: 100
                },
            ]
        };
        this.bluetooth.write(JSON.stringify(input)).then(function success(response) {
            console.log("Succesfully sent settings object");
        });
    };
    ConnectionPage.prototype.sendPlayTest = function () {
        var input = {
            "mode": "play",
            "command": { "effect": 1, "color": { hue: 100, saturation: 255, value: 255 }, feature1: 100, feature2: 100 },
        };
        this.bluetooth.write(JSON.stringify(input)).then(function success(response) {
            console.log("Succesfully sent settings object");
        });
    };
    ConnectionPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-connection',template:/*ion-inline-start:"/Users/konstantinvogel/prototyping/ionic-stuff/cube-bt-controller/src/pages/connection/connection.html"*/'<!--\n  Generated template for the ConnectionPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n    <ion-navbar>\n        <ion-title>Connection</ion-title>\n    </ion-navbar>\n\n</ion-header>\n\n<ion-content>\n\n    <ion-list>\n        <ion-list-header>\n            <button *ngIf="!isScanning" (click)="checkBluetooth()" item-end ion-button clear large>\n                <ion-icon name="sync"></ion-icon>\n            </button>\n        </ion-list-header>\n        <ion-item *ngIf="isScanning" text-center>\n            <ion-spinner name="dots"></ion-spinner>\n        </ion-item>\n        <ion-item>\n            <ion-select *ngIf="!isScanning" style="max-width:100%" placeholder="Select a device to connect to"\n                        (ionChange)="connectToDevice($event)">\n                <h2>Nearby Devices</h2>\n                <ion-option *ngFor="let device of bluetoothDevices" value={{device.macAddress}}>{{device.name ?\n                    device.name : device.macAddress}}\n                </ion-option>\n            </ion-select>\n        </ion-item>\n\n        <div [hidden]="!showDeviceControl">\n            <ion-list-header>Configuration for:{{currentDevice.macAddress}}\n\n            </ion-list-header>\n            <ion-item>\n                <button ion-button color="success">Procedures\n                </button>\n            </ion-item>\n            <h2>Mode Settings</h2>\n            <ion-grid>\n                <ion-row>\n                    <ion-col col-3>\n                        <ion-icon float-left class="playbutton playbutton-previous" large name="arrow-dropleft"\n                                  (click)="previousMode()"></ion-icon>\n                    </ion-col>\n                    <ion-col align-items-center col-6>\n                        <ion-select align-items-center class="mode-select" [(ngModel)]="currentDevice.play.mode"\n                                    style="max-width:100%">\n                            <ion-option value="1">Mode 1</ion-option>\n                            <ion-option value="2">Mode 2</ion-option>\n                            <ion-option value="3">Mode 3</ion-option>\n                            <ion-option value="4">Mode 4</ion-option>\n                            <ion-option value="5">Mode 5</ion-option>\n                            <ion-option value="6">Mode 6</ion-option>\n                            <ion-option value="7">Mode 7</ion-option>\n                            <ion-option value="8">Mode 8</ion-option>\n                        </ion-select>\n                    </ion-col>\n                    <ion-col col-3>\n                        <ion-icon (click)="nextMode()" float-right class="playbutton playbutton-next" large\n                                  name="arrow-dropright"></ion-icon>\n                    </ion-col>\n                </ion-row>\n            </ion-grid>\n            <h2>Global Settings</h2>\n            <ion-row>\n                <ion-col col-3></ion-col>\n\n                <ion-col col-6>\n                    <ion-item>\n                        <ion-label>Speed</ion-label>\n                        <ion-range [debounce]="500" color="dark" [(ngModel)]="currentDevice.global.speed" min="0"\n                                   max="255"\n                                   (ionChange)="triggerTransfer()" pin="true"></ion-range>\n                    </ion-item>\n                </ion-col>\n                <ion-col col-3></ion-col>\n\n            </ion-row>\n            <ion-row>\n                <ion-col col-3></ion-col>\n                <ion-col col-6>\n                    <ion-item>\n                        <ion-label>Hue</ion-label>\n                        <ion-range [debounce]="500" [(ngModel)]="currentDevice.global.color.hue" min="0" max="255"\n                                   (ionChange)="triggerTransfer()" pin="true"></ion-range>\n                    </ion-item>\n                </ion-col>\n                <ion-col col-3></ion-col>\n\n            </ion-row>\n            <ion-row>\n                <ion-col col-3></ion-col>\n                <ion-col col-6>\n\n                    <ion-item>\n                        <ion-label>Saturation</ion-label>\n                        <ion-range [debounce]="500" [(ngModel)]="currentDevice.global.color.saturation" min="0"\n                                   max="255"\n                                   (ionChange)="triggerTransfer()" pin="true"></ion-range>\n                    </ion-item>\n                </ion-col>\n                <ion-col col-3></ion-col>\n\n            </ion-row>\n            <ion-row>\n                <ion-col col-3></ion-col>\n                <ion-col col-6>\n                    <ion-item>\n                        <ion-label>Value</ion-label>\n                        <ion-range [debounce]="500" [(ngModel)]="currentDevice.global.color.value" min="0" max="255"\n                                   (ionChange)="triggerTransfer()" pin="true"></ion-range>\n                    </ion-item>\n                </ion-col>\n                <ion-col col-3></ion-col>\n\n            </ion-row>\n            <ion-item>\n                <button ion-button color="success" (click)="transferConfiguration()">Transfer Changes\n                </button>\n            </ion-item>\n            <ion-item>\n                <button ion-button color="success" (click)="addToProcedure()">Add to Procedure\n                </button>\n                <ion-range [debounce]="500" [(ngModel)]="currentDevice.procedureTimeLapse" min="0" max="20"\n                           (ionChange)="triggerTransfer()" pin="true"></ion-range>\n            </ion-item>\n\n            <ion-item>\n                <ion-checkbox [(ngModel)]="triggerAutomatically">Trigger Automatically</ion-checkbox>\n            </ion-item>\n\n            <ion-item>\n                <button ion-button color="success" (click)="sendProcedureTest()">Send Procedure Test\n                </button>\n                <button ion-button color="success" (click)="sendPlayTest()">Send play Test\n                </button>\n            </ion-item>\n        </div>\n    </ion-list>\n</ion-content>\n'/*ion-inline-end:"/Users/konstantinvogel/prototyping/ionic-stuff/cube-bt-controller/src/pages/connection/connection.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_bluetooth_serial__["a" /* BluetoothSerial */]])
    ], ConnectionPage);
    return ConnectionPage;
}());

//# sourceMappingURL=connection.js.map

/***/ }),

/***/ 271:
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
        this.procedureTimeLapse = 10;
    }
    return BluetoothDevice;
}());

//# sourceMappingURL=bluetoothDevice.js.map

/***/ }),

/***/ 272:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProgramPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(27);
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
    function ProgramPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    ProgramPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ProgramPage');
    };
    ProgramPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-program',template:/*ion-inline-start:"/Users/konstantinvogel/prototyping/ionic-stuff/cube-bt-controller/src/pages/program/program.html"*/'<!--\n  Generated template for the ProgramPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Program</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n</ion-content>\n'/*ion-inline-end:"/Users/konstantinvogel/prototyping/ionic-stuff/cube-bt-controller/src/pages/program/program.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */]])
    ], ProgramPage);
    return ProgramPage;
}());

//# sourceMappingURL=program.js.map

/***/ }),

/***/ 273:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PlayPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(27);
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
    function PlayPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    PlayPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad PlayPage');
    };
    PlayPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-play',template:/*ion-inline-start:"/Users/konstantinvogel/prototyping/ionic-stuff/cube-bt-controller/src/pages/play/play.html"*/'<!--\n  Generated template for the PlayPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Play</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n</ion-content>\n'/*ion-inline-end:"/Users/konstantinvogel/prototyping/ionic-stuff/cube-bt-controller/src/pages/play/play.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */]])
    ], PlayPage);
    return PlayPage;
}());

//# sourceMappingURL=play.js.map

/***/ })

},[195]);
//# sourceMappingURL=main.js.map