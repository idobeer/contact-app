webpackJsonp([0],{

/***/ 104:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_contacts__ = __webpack_require__(181);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__add_contact_add_contact__ = __webpack_require__(320);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_auth_service__ = __webpack_require__(78);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_contact_service__ = __webpack_require__(339);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_angularfire2_firestore__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_angularfire2_firestore___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_angularfire2_firestore__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};







var HomePage = /** @class */ (function () {
    function HomePage(afs, platform, navCtrl, auth, contacts, contactService) {
        this.afs = afs;
        this.platform = platform;
        this.navCtrl = navCtrl;
        this.auth = auth;
        this.contacts = contacts;
        this.contactService = contactService;
        this.addContactPage = __WEBPACK_IMPORTED_MODULE_3__add_contact_add_contact__["a" /* AddContactPage */];
        this.contact = {
            name: '',
            number: '',
            custEmail: '',
            custUid: '',
        };
        this.user = this.auth.afAuth.auth.currentUser;
        this.onNotification();
        this.userDoc = this.afs.doc("Users/" + this.user.email);
    }
    HomePage.prototype.onNotification = function () {
        return __awaiter(this, void 0, void 0, function () {
            var self, e_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        self = this;
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, this.platform.ready()];
                    case 2:
                        _a.sent();
                        if (typeof FCMPlugin != 'undefined') {
                            //FCMPlugin.subscribeToTopic('all');
                            FCMPlugin.getToken(function (token) {
                                self.userDoc.update({
                                    deviceToken: token,
                                    uid: self.user.uid
                                });
                            });
                            FCMPlugin.onNotification(function (data) {
                                if (data.wasTapped) {
                                    var contact = self.contacts.create();
                                    contact.name = new __WEBPACK_IMPORTED_MODULE_2__ionic_native_contacts__["b" /* ContactName */](null, data.name);
                                    contact.phoneNumbers = [new __WEBPACK_IMPORTED_MODULE_2__ionic_native_contacts__["a" /* ContactField */]('mobile', data.number)];
                                    contact.save().then(function () { return alert('Contact saved!'); }, function (error) { return console.error('Error saving contact.', error); });
                                    //alert( JSON.stringify(data) );
                                }
                                else {
                                    var contact = self.contacts.create();
                                    contact.name = new __WEBPACK_IMPORTED_MODULE_2__ionic_native_contacts__["b" /* ContactName */](null, data.name);
                                    contact.phoneNumbers = [new __WEBPACK_IMPORTED_MODULE_2__ionic_native_contacts__["a" /* ContactField */]('mobile', data.number)];
                                    contact.save().then(function () { return alert('Contact saved!'); }, function (error) { return console.error('Error saving contact.', error); });
                                }
                            }, function (error) { return console.error(error); });
                            FCMPlugin.onTokenRefresh(function (token) {
                                alert(token);
                            });
                            //FCMPlugin.unsubscribeFromTopic('topicExample');
                        }
                        return [3 /*break*/, 4];
                    case 3:
                        e_1 = _a.sent();
                        console.error(e_1);
                        return [3 /*break*/, 4];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    HomePage.prototype.syncContacts = function () {
        var _this = this;
        this.contacts.find(['displayName', 'name', 'phoneNumbers'], { filter: "", multiple: true, hasPhoneNumber: true })
            .then(function (contacts) {
            var contactsLength = 5;
            for (var i = 0; i < contactsLength; i++) {
                if (contacts[i].displayName !== null && contacts[i].phoneNumbers) {
                    //var contact = {}
                    _this.contact.name = contacts[i].displayName;
                    _this.contact.number = contacts[i].phoneNumbers[0] && contacts[i].phoneNumbers[0].value;
                    _this.contact.custEmail = _this.user.email;
                    _this.contact.custUid = _this.user.uid;
                    _this.contactService.addContact(_this.contact);
                }
            }
        });
    };
    HomePage.prototype.logout = function () {
        this.auth.signOut();
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"F:\santu\apps\contact-manage-app\src\pages\home\home.html"*/'<ion-header>\n\n  <ion-navbar color="primary">    \n\n\n\n    <ion-title>\n\n      WhatsPush\n\n    </ion-title>\n\n\n\n    <ion-buttons end>\n\n      <button [navPush]="addContactPage" ion-button>\n\n        <ion-icon name="add"></ion-icon>\n\n      </button>      \n\n    </ion-buttons>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n  <div class="home-hello">\n\n		<img src="https://1.cms.s81c.com/sites/default/files/2017-10/mobile-app-builder-card_0.png" />\n\n\n\n		<div class="hello-title" text-wrap padding>\n\n			<h1>Idobeer.io</h1>\n\n			Bengaluru, India\n\n		</div>\n\n	</div>\n\n\n\n	<ion-row>\n\n		<ion-card class="quick-action" (click)="syncContacts()">\n\n			<ion-card-content>\n\n				<ion-icon name="sync"></ion-icon>\n\n				<span margin>Sync Contacts</span>\n\n			</ion-card-content>\n\n		</ion-card>\n\n	</ion-row>\n\n\n\n	<ion-row>\n\n		<ion-card class="quick-action" (click)="logout()">\n\n			<ion-card-content>\n\n				<ion-icon name="log-out"></ion-icon>\n\n				<span margin>Logout</span>\n\n			</ion-card-content>\n\n		</ion-card>\n\n	</ion-row>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"F:\santu\apps\contact-manage-app\src\pages\home\home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_6_angularfire2_firestore__["AngularFirestore"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Platform */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_4__services_auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_contacts__["c" /* Contacts */], __WEBPACK_IMPORTED_MODULE_5__services_contact_service__["a" /* ContactService */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 232:
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
webpackEmptyAsyncContext.id = 232;

/***/ }),

/***/ 274:
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
webpackEmptyAsyncContext.id = 274;

/***/ }),

/***/ 319:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_home__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_auth_service__ = __webpack_require__(78);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__signup_signup__ = __webpack_require__(341);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var LoginPage = /** @class */ (function () {
    function LoginPage(navCtrl, auth, fb) {
        this.navCtrl = navCtrl;
        this.auth = auth;
        this.loginForm = fb.group({
            email: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["g" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_1__angular_forms__["g" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["g" /* Validators */].email])],
            password: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["g" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_1__angular_forms__["g" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["g" /* Validators */].minLength(6)])]
        });
    }
    LoginPage.prototype.login = function () {
        var _this = this;
        var data = this.loginForm.value;
        if (!data.email) {
            return;
        }
        var credentials = {
            email: data.email,
            password: data.password
        };
        this.auth.signInWithEmail(credentials)
            .then(function () { return _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__home_home__["a" /* HomePage */]); }, function (error) { return _this.loginError = error.message; });
    };
    LoginPage.prototype.signup = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__signup_signup__["a" /* SignupPage */]);
    };
    LoginPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-login',template:/*ion-inline-start:"F:\santu\apps\contact-manage-app\src\pages\login\login.html"*/'<ion-header>\n	<ion-navbar color="primary">\n		<button ion-button menuToggle>\n			<ion-icon name="menu"></ion-icon>\n		</button>\n		<ion-title>Log in</ion-title>\n	</ion-navbar>\n</ion-header>\n\n<ion-content>\n	<form (ngSubmit)="login()" [formGroup]="loginForm">\n		<ion-list inset>\n\n			<ion-item [ngClass]="{ invalid: emailErrors.hasError(\'*\', [\'touched\', \'dirty\']) }">\n				<ion-input type="text" placeholder="Email" formControlName="email"></ion-input>\n			</ion-item>\n\n			<div ngxErrors="email" #emailErrors="ngxErrors">\n				<div [ngxError]="[\'email\', \'required\']" [when]="[\'touched\', \'dirty\']">It should be a valid email</div>\n			</div>\n\n			<ion-item [ngClass]="{ invalid: passwordErrors.hasError(\'*\', [\'touched\']) }">\n				<ion-input type="password" placeholder="Password" formControlName="password"></ion-input>\n			</ion-item>\n\n			<div ngxErrors="password" #passwordErrors="ngxErrors">\n				<div [ngxError]="[\'minlength\', \'required\']" [when]="[\'touched\']">It should be at least 5 characters</div>\n			</div>\n		</ion-list>\n\n		<div padding-horizontal>\n			<div class="form-error">{{loginError}}</div>\n\n			<button ion-button full type="submit" [disabled]="!loginForm.valid">Log in</button>\n			<div class="login-footer">\n				<p>					\n					If you\'re a new user, please sign up.\n				</p>\n			</div>\n\n			<ion-list>\n				<button ion-button icon-left block clear (click)="signup()">\n					<ion-icon name="person-add"></ion-icon>\n					Sign up\n				</button>\n			</ion-list>\n		</div>\n	</form>\n</ion-content>\n'/*ion-inline-end:"F:\santu\apps\contact-manage-app\src\pages\login\login.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_4__services_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormBuilder */]])
    ], LoginPage);
    return LoginPage;
}());

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 320:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddContactPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_contacts__ = __webpack_require__(181);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AddContactPage = /** @class */ (function () {
    function AddContactPage(fb, contacts) {
        this.contacts = contacts;
        this.contactform = fb.group({
            firstName: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["g" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_1__angular_forms__["g" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["g" /* Validators */].minLength(3)])],
            lastName: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["g" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_1__angular_forms__["g" /* Validators */].minLength(3)])],
            contactNumber: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["g" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_1__angular_forms__["g" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["g" /* Validators */].minLength(10), __WEBPACK_IMPORTED_MODULE_1__angular_forms__["g" /* Validators */].maxLength(10)])]
        });
    }
    AddContactPage.prototype.createContact = function () {
        var _this = this;
        var newCnt = this.contacts.create();
        newCnt.name = new __WEBPACK_IMPORTED_MODULE_2__ionic_native_contacts__["b" /* ContactName */](null, this.contactnamefname, this.contactnamelname);
        newCnt.phoneNumbers = [new __WEBPACK_IMPORTED_MODULE_2__ionic_native_contacts__["a" /* ContactField */]('mobile', this.contactnumber)];
        newCnt.save().then(function () {
            alert('Contact saved!');
        }).catch(function (error) {
            _this.contactError = error.message;
        }); /*.then(
              () => alert('Contact saved!'),
              (error: any) => error => this.contactError = error.message
          );*/
    };
    AddContactPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-add-contact',template:/*ion-inline-start:"F:\santu\apps\contact-manage-app\src\pages\add-contact\add-contact.html"*/'<ion-header>\n  <ion-navbar color="primary">\n    <ion-title>Add Contact</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <form (ngSubmit)="createContact()" [formGroup]="contactform">\n    <ion-list inset>\n\n      <ion-item [ngClass]="{ invalid: firstNameErrors.hasError(\'*\', [\'touched\']) }">\n        <ion-input type="text" [(ngModel)]="contactnamefname" placeholder="FirstName" formControlName="firstName"></ion-input>\n      </ion-item>\n\n      <div ngxErrors="firstName" #firstNameErrors="ngxErrors">\n        <div [ngxError]="[\'minlength\', \'required\']" [when]="[\'touched\']">It should be at least 3 characters</div>\n      </div>\n\n      <ion-item [ngClass]="{ invalid: lastNameErrors.hasError(\'*\', [\'touched\']) }">\n        <ion-input type="text" [(ngModel)]="contactnamelname" placeholder="lastName" formControlName="lastName"></ion-input>\n      </ion-item>\n\n      <div ngxErrors="lastName" #lastNameErrors="ngxErrors">\n        <div [ngxError]="[\'minlength\']" [when]="[\'touched\']">It should be at least 3 characters</div>\n      </div>\n\n      <ion-item [ngClass]="{ invalid: contactNumberErrors.hasError(\'*\', [\'touched\']) }">\n        <ion-input type="text" [(ngModel)]="contactnumber" placeholder="contactNumber" formControlName="contactNumber"></ion-input>\n      </ion-item>\n\n      <div ngxErrors="contactNumber" #contactNumberErrors="ngxErrors">\n        <div [ngxError]="[\'minlength\', \'maxlenth\', \'required\']" [when]="[\'touched\']">It should be 10 digits</div>\n      </div>\n    </ion-list>\n\n    <div padding-horizontal>\n      <div class="form-error">{{contactError}}</div>\n\n      <button ion-button full type="submit" [disabled]="!contactform.valid">Add Contact</button>\n    </div>\n\n  </form>\n  \n</ion-content>\n\n'/*ion-inline-end:"F:\santu\apps\contact-manage-app\src\pages\add-contact\add-contact.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_contacts__["c" /* Contacts */]])
    ], AddContactPage);
    return AddContactPage;
}());

//# sourceMappingURL=add-contact.js.map

/***/ }),

/***/ 339:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_firestore__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_firestore___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_angularfire2_firestore__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ContactService = /** @class */ (function () {
    function ContactService(afs) {
        //this.contacts = this.afs.collection('contacts').valueChanges();
        this.afs = afs;
        //this.contactsCollection = this.afs.collection('users-contacts', ref => ref.orderBy('name','asc'));
        this.contactsCollection = this.afs.collection('users-contacts');
        this.contacts = this.contactsCollection.snapshotChanges().map(function (changes) {
            return changes.map(function (a) {
                var data = a.payload.doc.data();
                data.id = a.payload.doc.id;
                return data;
            });
        });
    }
    ContactService.prototype.getContacts = function () {
        return this.contacts;
    };
    ContactService.prototype.addContact = function (contact) {
        this.contactsCollection.add(contact);
    };
    ContactService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_angularfire2_firestore__["AngularFirestore"]])
    ], ContactService);
    return ContactService;
}());

//# sourceMappingURL=contact.service.js.map

/***/ }),

/***/ 341:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignupPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_home__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_auth_service__ = __webpack_require__(78);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var SignupPage = /** @class */ (function () {
    function SignupPage(fb, navCtrl, auth) {
        this.navCtrl = navCtrl;
        this.auth = auth;
        this.form = fb.group({
            email: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["g" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_1__angular_forms__["g" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["g" /* Validators */].email])],
            password: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["g" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_1__angular_forms__["g" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["g" /* Validators */].minLength(6)])]
        });
    }
    SignupPage.prototype.signup = function () {
        var _this = this;
        var data = this.form.value;
        var credentials = {
            email: data.email,
            password: data.password
        };
        this.auth.signUp(credentials).then(function () { return _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__home_home__["a" /* HomePage */]); }, function (error) { return _this.signupError = error.message; });
    };
    SignupPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'as-page-signup',template:/*ion-inline-start:"F:\santu\apps\contact-manage-app\src\pages\signup\signup.html"*/'<ion-header>\n	<ion-navbar color="primary">\n		<ion-title>Sign up</ion-title>\n	</ion-navbar>\n</ion-header>\n\n<ion-content>\n\n	<form (ngSubmit)="signup()" [formGroup]="form">\n		<ion-list inset>\n\n			<ion-item [ngClass]="{ invalid: emailErrors.hasError(\'*\', [\'touched\']) }">\n				<ion-input type="text" placeholder="Email" formControlName="email"></ion-input>\n			</ion-item>\n\n			<div ngxErrors="email" #emailErrors="ngxErrors">\n				<div [ngxError]="[\'email\', \'required\']" [when]="[\'touched\']">It should be a valid email</div>\n			</div>\n\n			<ion-item [ngClass]="{ invalid: passwordErrors.hasError(\'*\', [\'touched\']) }">\n				<ion-input type="password" placeholder="Password" formControlName="password"></ion-input>\n			</ion-item>\n\n			<div ngxErrors="password" #passwordErrors="ngxErrors">\n				<div [ngxError]="[\'minlength\', \'required\']" [when]="[\'touched\']">It should be at least 6 characters</div>\n			</div>\n		</ion-list>\n\n		<div padding-horizontal>\n			<div class="form-error">{{signupError}}</div>\n\n			<button ion-button full type="submit" [disabled]="!form.valid">Sign up</button>\n		</div>\n	</form>\n</ion-content>\n'/*ion-inline-end:"F:\santu\apps\contact-manage-app\src\pages\signup\signup.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_4__services_auth_service__["a" /* AuthService */]])
    ], SignupPage);
    return SignupPage;
}());

//# sourceMappingURL=signup.js.map

/***/ }),

/***/ 342:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(343);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(464);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 464:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(314);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(316);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_contacts__ = __webpack_require__(181);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ultimate_ngxerrors__ = __webpack_require__(513);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_component__ = __webpack_require__(527);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_home_home__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_add_contact_add_contact__ = __webpack_require__(320);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_login_login__ = __webpack_require__(319);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_signup_signup__ = __webpack_require__(341);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_angularfire2__ = __webpack_require__(633);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_angularfire2___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_12_angularfire2__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_angularfire2_auth__ = __webpack_require__(321);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_angularfire2_auth___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_13_angularfire2_auth__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__environments_environment__ = __webpack_require__(634);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__services_auth_service__ = __webpack_require__(78);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16_angularfire2_firestore__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16_angularfire2_firestore___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_16_angularfire2_firestore__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__services_contact_service__ = __webpack_require__(339);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__ionic_native_fcm__ = __webpack_require__(635);
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
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_8__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_add_contact_add_contact__["a" /* AddContactPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_signup_signup__["a" /* SignupPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_6__ultimate_ngxerrors__["a" /* NgxErrorsModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["f" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* MyApp */], {}, {
                    links: []
                }),
                __WEBPACK_IMPORTED_MODULE_12_angularfire2__["AngularFireModule"].initializeApp(__WEBPACK_IMPORTED_MODULE_14__environments_environment__["a" /* environment */].firebase),
                __WEBPACK_IMPORTED_MODULE_16_angularfire2_firestore__["AngularFirestoreModule"]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_8__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_add_contact_add_contact__["a" /* AddContactPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_signup_signup__["a" /* SignupPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
                __WEBPACK_IMPORTED_MODULE_5__ionic_native_contacts__["c" /* Contacts */],
                __WEBPACK_IMPORTED_MODULE_18__ionic_native_fcm__["a" /* FCM */],
                __WEBPACK_IMPORTED_MODULE_13_angularfire2_auth__["AngularFireAuth"],
                __WEBPACK_IMPORTED_MODULE_17__services_contact_service__["a" /* ContactService */],
                __WEBPACK_IMPORTED_MODULE_15__services_auth_service__["a" /* AuthService */],
                __WEBPACK_IMPORTED_MODULE_16_angularfire2_firestore__["AngularFirestore"],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* IonicErrorHandler */] }
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 527:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pages_components_list_components_list_page__ = __webpack_require__(528);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_status_bar__ = __webpack_require__(316);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_splash_screen__ = __webpack_require__(314);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_login_login__ = __webpack_require__(319);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_auth_service__ = __webpack_require__(78);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_home_home__ = __webpack_require__(104);
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
    function MyApp(app, platform, menu, statusBar, splashScreen, auth) {
        this.statusBar = statusBar;
        this.splashScreen = splashScreen;
        this.auth = auth;
        this.menu = menu;
        this.app = app;
        this.platform = platform;
        this.splashScreen = splashScreen;
        this.initializeApp();
        // set our app's pages
        this.pages = [
            { title: 'Home', component: __WEBPACK_IMPORTED_MODULE_7__pages_home_home__["a" /* HomePage */], icon: 'home' },
            { title: 'Components', component: __WEBPACK_IMPORTED_MODULE_2__pages_components_list_components_list_page__["a" /* ComponentsListPage */], icon: 'grid' },
        ];
    }
    MyApp.prototype.initializeApp = function () {
        var _this = this;
        this.platform.ready().then(function () {
            _this.statusBar.styleDefault();
            _this.splashScreen.hide();
        });
        this.auth.afAuth.authState
            .subscribe(function (user) {
            if (user) {
                _this.rootPage = __WEBPACK_IMPORTED_MODULE_7__pages_home_home__["a" /* HomePage */];
            }
            else {
                _this.rootPage = __WEBPACK_IMPORTED_MODULE_5__pages_login_login__["a" /* LoginPage */];
            }
        }, function () {
            _this.rootPage = __WEBPACK_IMPORTED_MODULE_5__pages_login_login__["a" /* LoginPage */];
        });
    };
    MyApp.prototype.login = function () {
        this.menu.close();
        this.auth.signOut();
        this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_5__pages_login_login__["a" /* LoginPage */]);
    };
    MyApp.prototype.logout = function () {
        this.menu.close();
        this.auth.signOut();
        this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_7__pages_home_home__["a" /* HomePage */]);
    };
    MyApp.prototype.openPage = function (page) {
        this.menu.close();
        this.nav.setRoot(page.component);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Nav */])
    ], MyApp.prototype, "nav", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"F:\santu\apps\contact-manage-app\src\app\app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n\n'/*ion-inline-end:"F:\santu\apps\contact-manage-app\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* App */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* MenuController */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_4__ionic_native_splash_screen__["a" /* SplashScreen */],
            __WEBPACK_IMPORTED_MODULE_6__services_auth_service__["a" /* AuthService */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 528:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ComponentsListPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__actionsheet_components_actionsheet_page__ = __webpack_require__(529);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__alerts_components_alerts_page__ = __webpack_require__(530);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__badges_components_badges_page__ = __webpack_require__(531);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__buttons_components_buttons_page__ = __webpack_require__(532);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__cards_components_cards_page__ = __webpack_require__(533);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__checkbox_components_checkbox_page__ = __webpack_require__(534);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__floating_action_buttons_components_floating_action_buttons_page__ = __webpack_require__(535);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__gestures_components_gestures_page__ = __webpack_require__(536);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__grid_components_grid_page__ = __webpack_require__(537);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__icons_components_icons_page__ = __webpack_require__(538);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__inputs_components_inputs_list_page__ = __webpack_require__(539);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};













var ComponentsListPage = /** @class */ (function () {
    function ComponentsListPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    ComponentsListPage.prototype.actionsheetTapped = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__actionsheet_components_actionsheet_page__["a" /* ComponentsActionSheetPage */]);
    };
    ComponentsListPage.prototype.alertsTapped = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__alerts_components_alerts_page__["a" /* ComponentsAlertsPage */]);
    };
    ComponentsListPage.prototype.badgesTapped = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__badges_components_badges_page__["a" /* ComponentsBadgesPage */]);
    };
    ComponentsListPage.prototype.buttonsTapped = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__buttons_components_buttons_page__["a" /* ComponentsButtonsPage */]);
    };
    ComponentsListPage.prototype.cardsTapped = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__cards_components_cards_page__["a" /* ComponentsCardsPage */]);
    };
    ComponentsListPage.prototype.checkboxTapped = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_7__checkbox_components_checkbox_page__["a" /* ComponentsCheckboxPage */]);
    };
    ComponentsListPage.prototype.floatingActionButtonsTapped = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_8__floating_action_buttons_components_floating_action_buttons_page__["a" /* ComponentsFloatingActionButtonsPage */]);
    };
    ComponentsListPage.prototype.gesturesTapped = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_9__gestures_components_gestures_page__["a" /* ComponentsGesturesPage */]);
    };
    ComponentsListPage.prototype.gridTapped = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_10__grid_components_grid_page__["a" /* ComponentsGridPage */]);
    };
    ComponentsListPage.prototype.iconsTapped = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_11__icons_components_icons_page__["a" /* ComponentsIconsPage */]);
    };
    ComponentsListPage.prototype.inputsTapped = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_12__inputs_components_inputs_list_page__["a" /* ComponentsInputsListPage */]);
    };
    ComponentsListPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"F:\santu\apps\contact-manage-app\src\pages\components\list\components.list.html"*/'<ion-header>\n	<ion-navbar>\n		<button ion-button menuToggle>\n			<ion-icon name="menu"></ion-icon>\n		</button>\n		<ion-title>Components</ion-title>\n	</ion-navbar>\n</ion-header>\n\n<ion-content padding>\n	<ion-list>\n		<ion-item (click)="actionsheetTapped()">\n			Action Sheet\n		</ion-item>\n		<ion-item (click)="alertsTapped()">\n			Alerts\n		</ion-item>\n		<ion-item (click)="badgesTapped()">\n			Badges\n		</ion-item>\n		<ion-item (click)="buttonsTapped()">\n			Buttons\n		</ion-item>\n		<ion-item (click)="cardsTapped()">\n			Cards\n		</ion-item>\n		<ion-item (click)="checkboxTapped()">\n			Checkbox\n		</ion-item>\n		<ion-item (click)="floatingActionButtonsTapped()">\n			Floating Action Buttons\n		</ion-item>\n		<ion-item (click)="gesturesTapped()">\n			Gestures\n		</ion-item>\n		<ion-item (click)="gridTapped()">\n			Grid\n		</ion-item>\n		<ion-item (click)="iconsTapped()">\n			Icons\n		</ion-item>\n		<ion-item (click)="inputsTapped()">\n			Inputs\n		</ion-item>\n	</ion-list>\n</ion-content>\n'/*ion-inline-end:"F:\santu\apps\contact-manage-app\src\pages\components\list\components.list.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */]])
    ], ComponentsListPage);
    return ComponentsListPage;
}());

//# sourceMappingURL=components.list.page.js.map

/***/ }),

/***/ 529:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ComponentsActionSheetPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(38);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ComponentsActionSheetPage = /** @class */ (function () {
    function ComponentsActionSheetPage(platform, actionsheetCtrl) {
        this.platform = platform;
        this.actionsheetCtrl = actionsheetCtrl;
    }
    ComponentsActionSheetPage.prototype.openActionSheet = function () {
        var actionSheet = this.actionsheetCtrl.create({
            title: 'Select an action',
            buttons: [
                {
                    text: 'Delete',
                    role: 'destructive',
                    icon: !this.platform.is('ios') ? 'trash' : null,
                    handler: function () {
                        console.log('Delete clicked');
                    }
                },
                {
                    text: 'Share',
                    icon: !this.platform.is('ios') ? 'share' : null,
                    handler: function () {
                        console.log('Share clicked');
                    }
                },
                {
                    text: 'Play',
                    icon: !this.platform.is('ios') ? 'arrow-dropright-circle' : null,
                    handler: function () {
                        console.log('Play clicked');
                    }
                },
                {
                    text: 'Favorite',
                    icon: !this.platform.is('ios') ? 'heart-outline' : null,
                    handler: function () {
                        console.log('Favorite clicked');
                    }
                },
                {
                    text: 'Cancel',
                    role: 'cancel',
                    icon: !this.platform.is('ios') ? 'close' : null,
                    handler: function () {
                        console.log('Cancel clicked');
                    }
                }
            ]
        });
        actionSheet.present();
    };
    ComponentsActionSheetPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"F:\santu\apps\contact-manage-app\src\pages\components\actionsheet\components.actionsheet.html"*/'<ion-header>\n	<ion-navbar>\n		<ion-title>Action Sheet</ion-title>\n	</ion-navbar>\n</ion-header>\n\n<ion-content padding>\n	<button ion-button block (click)="openActionSheet()">\n		Show Action Sheet\n	</button>\n</ion-content>\n'/*ion-inline-end:"F:\santu\apps\contact-manage-app\src\pages\components\actionsheet\components.actionsheet.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* ActionSheetController */]])
    ], ComponentsActionSheetPage);
    return ComponentsActionSheetPage;
}());

//# sourceMappingURL=components.actionsheet.page.js.map

/***/ }),

/***/ 530:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ComponentsAlertsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(38);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ComponentsAlertsPage = /** @class */ (function () {
    function ComponentsAlertsPage(alertCtrl) {
        this.alertCtrl = alertCtrl;
    }
    ComponentsAlertsPage.prototype.doAlert = function () {
        var alert = this.alertCtrl.create({
            title: 'Alert!',
            message: 'This is some important information!',
            buttons: ['Ok']
        });
        alert.present();
    };
    ComponentsAlertsPage.prototype.doPrompt = function () {
        var prompt = this.alertCtrl.create({
            title: 'Password',
            message: 'Enter your password to login',
            inputs: [
                {
                    name: 'password',
                    placeholder: 'Password'
                },
            ],
            buttons: [
                {
                    text: 'Cancel',
                    handler: function (data) {
                        console.log('Cancel clicked');
                    }
                },
                {
                    text: 'Login',
                    handler: function (data) {
                        console.log('Login clicked');
                    }
                }
            ]
        });
        prompt.present();
    };
    ComponentsAlertsPage.prototype.doConfirmation = function () {
        var confirmation = this.alertCtrl.create({
            title: 'Confirmation',
            message: 'Are you sure you want to delete this item?',
            buttons: [
                {
                    text: 'No',
                    handler: function () {
                        console.log('No clicked');
                    }
                },
                {
                    text: 'Yes',
                    handler: function () {
                        console.log('Yes clicked');
                    }
                }
            ]
        });
        confirmation.present();
    };
    ComponentsAlertsPage.prototype.doRadioAlert = function () {
        var _this = this;
        var radioAlert = this.alertCtrl.create();
        radioAlert.setTitle('Select color');
        radioAlert.addInput({
            type: 'radio',
            label: 'Blue',
            value: 'blue',
            checked: true
        });
        radioAlert.addInput({
            type: 'radio',
            label: 'Green',
            value: 'green'
        });
        radioAlert.addInput({
            type: 'radio',
            label: 'Red',
            value: 'red'
        });
        radioAlert.addInput({
            type: 'radio',
            label: 'Yellow',
            value: 'yellow'
        });
        radioAlert.addInput({
            type: 'radio',
            label: 'Purple',
            value: 'purple'
        });
        radioAlert.addInput({
            type: 'radio',
            label: 'White',
            value: 'white'
        });
        radioAlert.addInput({
            type: 'radio',
            label: 'Black',
            value: 'black'
        });
        radioAlert.addButton('Cancel');
        radioAlert.addButton({
            text: 'Ok',
            handler: function (data) {
                console.log('Radio data:', data);
                _this.testRadioOpen = false;
                _this.testRadioResult = data;
            }
        });
        radioAlert.present().then(function () {
            _this.testRadioOpen = true;
        });
    };
    ComponentsAlertsPage.prototype.doCheckboxAlert = function () {
        var _this = this;
        var checkboxAlert = this.alertCtrl.create();
        checkboxAlert.setTitle('Which fruits you like?');
        checkboxAlert.addInput({
            type: 'checkbox',
            label: 'Apple',
            value: 'apple',
            checked: true
        });
        checkboxAlert.addInput({
            type: 'checkbox',
            label: 'Banana',
            value: 'banana'
        });
        checkboxAlert.addInput({
            type: 'checkbox',
            label: 'Kiwi',
            value: 'kiwi'
        });
        checkboxAlert.addInput({
            type: 'checkbox',
            label: 'Strawberry',
            value: 'strawberry'
        });
        checkboxAlert.addInput({
            type: 'checkbox',
            label: 'Pineapple',
            value: 'pineapple'
        });
        checkboxAlert.addButton('Cancel');
        checkboxAlert.addButton({
            text: 'Okay',
            handler: function (data) {
                console.log('Checkbox data:', data);
                _this.testCheckboxOpen = false;
                _this.testCheckboxResult = data;
            }
        });
        checkboxAlert.present().then(function () {
            _this.testCheckboxOpen = true;
        });
    };
    ComponentsAlertsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"F:\santu\apps\contact-manage-app\src\pages\components\alerts\components.alerts.html"*/'<ion-header>\n	<ion-navbar>\n		<ion-title>Alerts</ion-title>\n	</ion-navbar>\n</ion-header>\n\n<ion-content padding>\n	<button ion-button color="dark" block (click)="doAlert()">\n		Show Basic Alert\n	</button>\n	<button ion-button color="secondary" block (click)="doPrompt()">\n		Show Prompt Alert\n	</button>\n	<button ion-button color="danger" block (click)="doConfirmation()">\n		Show Confirmation Alert\n	</button>\n	<button ion-button color="light" block (click)="doRadioAlert()">\n		Show Radio Alert\n	</button>\n	<button ion-button color="primary" block (click)="doCheckboxAlert()">\n		Show Checkbox Alert\n	</button>\n</ion-content>\n'/*ion-inline-end:"F:\santu\apps\contact-manage-app\src\pages\components\alerts\components.alerts.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */]])
    ], ComponentsAlertsPage);
    return ComponentsAlertsPage;
}());

//# sourceMappingURL=components.alerts.page.js.map

/***/ }),

/***/ 531:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ComponentsBadgesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var ComponentsBadgesPage = /** @class */ (function () {
    function ComponentsBadgesPage() {
    }
    ComponentsBadgesPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"F:\santu\apps\contact-manage-app\src\pages\components\badges\components.badges.html"*/'<ion-header>\n	<ion-navbar>\n		<ion-title>Badges</ion-title>\n	</ion-navbar>\n</ion-header>\n\n<ion-content>\n\n	<ion-card>\n\n		<img src="assets/img/bjork-live.jpg"/>\n\n		<ion-card-content>\n			<h2 class="card-title">\n				Björk\n			</h2>\n			<p>\n				Björk first came to prominence as one of the lead vocalists of the avant pop Icelandic sextet the\n				Sugarcubes, but when...\n			</p>\n		</ion-card-content>\n\n		<ion-item>\n			<ion-icon name=\'musical-notes\' item-left style="color: #d03e84"></ion-icon>\n			Albums\n			<ion-badge item-right>9</ion-badge>\n		</ion-item>\n\n		<ion-item>\n			<ion-icon name=\'logo-twitter\' item-left style="color: #55acee"></ion-icon>\n			Followers\n			<ion-badge item-right>260k</ion-badge>\n		</ion-item>\n\n	</ion-card>\n\n</ion-content>\n'/*ion-inline-end:"F:\santu\apps\contact-manage-app\src\pages\components\badges\components.badges.html"*/
        })
    ], ComponentsBadgesPage);
    return ComponentsBadgesPage;
}());

//# sourceMappingURL=components.badges.page.js.map

/***/ }),

/***/ 532:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ComponentsButtonsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var ComponentsButtonsPage = /** @class */ (function () {
    function ComponentsButtonsPage() {
    }
    ComponentsButtonsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"F:\santu\apps\contact-manage-app\src\pages\components\buttons\components.buttons.html"*/'<ion-header>\n	<ion-navbar>\n		<ion-title>Buttons</ion-title>\n	</ion-navbar>\n</ion-header>\n\n<ion-content padding>\n	<div>\n		<button ion-button color="light">Light</button>\n	</div>\n	<div>\n		<button ion-button>Default</button>\n	</div>\n	<div>\n		<button ion-button color="secondary">Secondary</button>\n	</div>\n	<div>\n		<button ion-button color="danger">Danger</button>\n	</div>\n	<div>\n		<button ion-button color="dark">Dark</button>\n	</div>\n	<div>\n		<button ion-button color="light" outline>Light</button>\n	</div>\n	<div>\n		<button ion-button outline>Default</button>\n	</div>\n	<div>\n		<button ion-button color="secondary" outline>Secondary</button>\n	</div>\n	<div>\n		<button ion-button color="danger" outline>Danger</button>\n	</div>\n	<div>\n		<button ion-button color="dark" outline>Dark</button>\n	</div>\n	<div>\n		<button ion-button color="light" clear>Light</button>\n	</div>\n	<div>\n		<button ion-button clear>Default</button>\n	</div>\n	<div>\n		<button ion-button color="secondary" clear>Secondary</button>\n	</div>\n	<div>\n		<button ion-button color="danger" clear>Danger</button>\n	</div>\n	<div>\n		<button ion-button color="dark" clear>Dark</button>\n	</div>\n	<div>\n		<button ion-button color="light" round>Light</button>\n	</div>\n	<div>\n		<button ion-button round>Default</button>\n	</div>\n	<div>\n		<button ion-button color="secondary" round>Secondary</button>\n	</div>\n	<div>\n		<button ion-button color="danger" round>Danger</button>\n	</div>\n	<div>\n		<button ion-button color="dark" round>Dark</button>\n	</div>\n	<div>\n		<button ion-button color="light" block>Light</button>\n	</div>\n	<div>\n		<button ion-button block>Default</button>\n	</div>\n	<div>\n		<button ion-button color="secondary" block>Secondary</button>\n	</div>\n	<div>\n		<button ion-button color="danger" block>Danger</button>\n	</div>\n	<div>\n		<button ion-button color="dark" block>Dark</button>\n	</div>\n	<div>\n		<button ion-button color="light" full>Light</button>\n	</div>\n	<div>\n		<button ion-button full>Default</button>\n	</div>\n	<div>\n		<button ion-button color="secondary" full>Secondary</button>\n	</div>\n	<div>\n		<button ion-button color="danger" full>Danger</button>\n	</div>\n	<div>\n		<button ion-button color="dark" full>Dark</button>\n	</div>\n	<div>\n		<button ion-button color="light" small>Light Small</button>\n	</div>\n	<div>\n		<button ion-button small>Default Small</button>\n	</div>\n	<div>\n		<button ion-button color="secondary">Secondary Medium</button>\n	</div>\n	<div>\n		<button ion-button color="danger" medium>Danger Medium</button>\n	</div>\n	<div>\n		<button ion-button color="dark" large>Dark Large</button>\n	</div>\n	<div>\n		<button ion-button color="dark" round icon-left>\n			<ion-icon name=\'construct\'></ion-icon>\n			Tools\n		</button>\n		<button ion-button color="dark" clear icon-only>\n			<ion-icon name=\'hammer\'></ion-icon>\n		</button>\n	</div>\n</ion-content>\n'/*ion-inline-end:"F:\santu\apps\contact-manage-app\src\pages\components\buttons\components.buttons.html"*/
        })
    ], ComponentsButtonsPage);
    return ComponentsButtonsPage;
}());

//# sourceMappingURL=components.buttons.page.js.map

/***/ }),

/***/ 533:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ComponentsCardsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var ComponentsCardsPage = /** @class */ (function () {
    function ComponentsCardsPage() {
    }
    ComponentsCardsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"F:\santu\apps\contact-manage-app\src\pages\components\cards\components.cards.html"*/'<ion-header>\n	<ion-navbar>\n		<ion-title>Cards</ion-title>\n	</ion-navbar>\n</ion-header>\n\n<ion-content>\n	<ion-card>\n		<ion-card-content>\n			This is just your basic card with some text to boot.\n		</ion-card-content>\n	</ion-card>\n\n	<ion-card>\n		<ion-card-header>\n			Header\n		</ion-card-header>\n		<ion-card-content>\n			This is a card with some text and a header.\n		</ion-card-content>\n	</ion-card>\n\n	<ion-card>\n		<ion-card-header>\n			List In Card\n		</ion-card-header>\n\n		<ion-list>\n			<button ion-item>\n				<ion-icon name=\'cart\' item-left></ion-icon>\n				Shopping\n			</button>\n\n			<button ion-item>\n				<ion-icon name=\'medical\' item-left></ion-icon>\n				Hospital\n			</button>\n\n			<button ion-item>\n				<ion-icon name=\'cafe\' item-left></ion-icon>\n				Cafe\n			</button>\n\n			<button ion-item>\n				<ion-icon name=\'paw\' item-left></ion-icon>\n				Dog Park\n			</button>\n\n			<button ion-item>\n				<ion-icon name=\'beer\' item-left></ion-icon>\n				Pub\n			</button>\n\n			<button ion-item>\n				<ion-icon name=\'planet\' item-left></ion-icon>\n				Space\n			</button>\n		</ion-list>\n	</ion-card>\n\n	<ion-card>\n		<img src="assets/img/bjork-live.jpg"/>\n		<ion-card-content>\n			<ion-card-title>\n				Björk\n			</ion-card-title>\n			<p>\n				Björk first came to prominence as one of the lead vocalists of the avant pop Icelandic sextet the\n				Sugarcubes, but when...\n			</p>\n		</ion-card-content>\n		<ion-row no-padding>\n			<ion-col>\n				<button ion-button clear small color="danger" icon-left>\n					<ion-icon name=\'star\'></ion-icon>\n					Favorite\n				</button>\n			</ion-col>\n			<ion-col text-center>\n				<button ion-button clear small color="danger" icon-left>\n					<ion-icon name=\'musical-notes\'></ion-icon>\n					Listen\n				</button>\n			</ion-col>\n			<ion-col text-right>\n				<button ion-button clear small color="danger" icon-left>\n					<ion-icon name=\'share-alt\'></ion-icon>\n					Share\n				</button>\n			</ion-col>\n		</ion-row>\n	</ion-card>\n	<div class="card-background-page">\n		<ion-card>\n			<img src="assets/img/bjork-live.jpg"/>\n			<div class="card-title">Björk</div>\n			<div class="card-subtitle">9 Albums</div>\n		</ion-card>\n	</div>\n	<ion-card>\n		<ion-item>\n			<ion-avatar item-left>\n				<img src="assets/img/marty-avatar.png">\n			</ion-avatar>\n			<h2>Marty McFly</h2>\n			<p>November 5, 1955</p>\n		</ion-item>\n\n		<img src="assets/img/advance-card-bttf.png">\n\n		<ion-card-content>\n			<p>Wait a minute. Wait a minute, Doc. Uhhh... Are you telling me that you built a time machine... out of a\n				DeLorean?! Whoa. This is heavy.</p>\n		</ion-card-content>\n\n		<ion-row no-padding>\n			<ion-col>\n				<button ion-button clear small color="primary" icon-left>\n					<ion-icon name=\'thumbs-up\'></ion-icon>\n					12 Likes\n				</button>\n			</ion-col>\n			<ion-col text-center>\n				<button ion-button clear small color="primary" icon-left>\n					<ion-icon name=\'text\'></ion-icon>\n					4 Comments\n				</button>\n			</ion-col>\n			<ion-col center text-center>\n				<ion-note>\n					11h ago\n				</ion-note>\n			</ion-col>\n		</ion-row>\n	</ion-card>\n</ion-content>\n'/*ion-inline-end:"F:\santu\apps\contact-manage-app\src\pages\components\cards\components.cards.html"*/
        })
    ], ComponentsCardsPage);
    return ComponentsCardsPage;
}());

//# sourceMappingURL=components.cards.page.js.map

/***/ }),

/***/ 534:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ComponentsCheckboxPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var ComponentsCheckboxPage = /** @class */ (function () {
    function ComponentsCheckboxPage() {
    }
    ComponentsCheckboxPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"F:\santu\apps\contact-manage-app\src\pages\components\checkbox\components.checkbox.html"*/'<ion-header>\n	<ion-navbar>\n		<ion-title>Checkbox</ion-title>\n	</ion-navbar>\n</ion-header>\n\n<ion-content>\n	<ion-list>\n		<ion-list-header>\n			Items List\n		</ion-list-header>\n\n		<ion-item>\n			<ion-label>Item 1</ion-label>\n			<ion-checkbox color="dark" checked="true"></ion-checkbox>\n		</ion-item>\n\n		<ion-item>\n			<ion-label>Item 2</ion-label>\n			<ion-checkbox></ion-checkbox>\n		</ion-item>\n\n		<ion-item>\n			<ion-label>Item 3</ion-label>\n			<ion-checkbox value="item 3" disabled="true"></ion-checkbox>\n		</ion-item>\n	</ion-list>\n</ion-content>\n'/*ion-inline-end:"F:\santu\apps\contact-manage-app\src\pages\components\checkbox\components.checkbox.html"*/
        })
    ], ComponentsCheckboxPage);
    return ComponentsCheckboxPage;
}());

//# sourceMappingURL=components.checkbox.page.js.map

/***/ }),

/***/ 535:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ComponentsFloatingActionButtonsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var ComponentsFloatingActionButtonsPage = /** @class */ (function () {
    function ComponentsFloatingActionButtonsPage() {
    }
    ComponentsFloatingActionButtonsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"F:\santu\apps\contact-manage-app\src\pages\components\floating-action-buttons\components.floating-action-buttons.html"*/'<ion-header>\n	<ion-navbar>\n		<ion-title>\n			FABs\n		</ion-title>\n	</ion-navbar>\n</ion-header>\n\n<ion-content>\n\n	<ion-fab top right edge>\n		<button ion-fab color="vibrant" mini>\n			<ion-icon name="add"></ion-icon>\n		</button>\n		<ion-fab-list>\n			<button ion-fab>\n				<ion-icon name="logo-facebook"></ion-icon>\n			</button>\n			<button ion-fab>\n				<ion-icon name="logo-twitter"></ion-icon>\n			</button>\n			<button ion-fab>\n				<ion-icon name="logo-vimeo"></ion-icon>\n			</button>\n			<button ion-fab>\n				<ion-icon name="logo-googleplus"></ion-icon>\n			</button>\n		</ion-fab-list>\n	</ion-fab>\n\n	<ion-fab right bottom>\n		<button ion-fab color="light">\n			<ion-icon name="arrow-dropleft"></ion-icon>\n		</button>\n		<ion-fab-list side="left">\n			<button ion-fab>\n				<ion-icon name="logo-facebook"></ion-icon>\n			</button>\n			<button ion-fab>\n				<ion-icon name="logo-twitter"></ion-icon>\n			</button>\n			<button ion-fab>\n				<ion-icon name="logo-vimeo"></ion-icon>\n			</button>\n			<button ion-fab>\n				<ion-icon name="logo-googleplus"></ion-icon>\n			</button>\n		</ion-fab-list>\n	</ion-fab>\n\n	<ion-fab left top>\n		<button ion-fab color="secondary">\n			<ion-icon name="arrow-dropright"></ion-icon>\n		</button>\n		<ion-fab-list side="right">\n			<button ion-fab>\n				<ion-icon name="logo-facebook"></ion-icon>\n			</button>\n			<button ion-fab>\n				<ion-icon name="logo-twitter"></ion-icon>\n			</button>\n			<button ion-fab>\n				<ion-icon name="logo-vimeo"></ion-icon>\n			</button>\n			<button ion-fab>\n				<ion-icon name="logo-googleplus"></ion-icon>\n			</button>\n		</ion-fab-list>\n	</ion-fab>\n\n	<ion-fab left bottom>\n		<button ion-fab color="dark">\n			<ion-icon name="arrow-dropup"></ion-icon>\n		</button>\n		<ion-fab-list side="top">\n			<button ion-fab>\n				<ion-icon name="logo-facebook"></ion-icon>\n			</button>\n			<button ion-fab>\n				<ion-icon name="logo-twitter"></ion-icon>\n			</button>\n			<button ion-fab>\n				<ion-icon name="logo-vimeo"></ion-icon>\n			</button>\n			<button ion-fab>\n				<ion-icon name="logo-googleplus"></ion-icon>\n			</button>\n		</ion-fab-list>\n	</ion-fab>\n\n	<ion-fab center middle>\n		<button ion-fab color="danger">\n			<ion-icon name="md-share"></ion-icon>\n		</button>\n		<ion-fab-list side="top">\n			<button ion-fab color="primary">\n				<ion-icon name="logo-vimeo"></ion-icon>\n			</button>\n		</ion-fab-list>\n		<ion-fab-list side="bottom">\n			<button ion-fab color="secondary">\n				<ion-icon name="logo-facebook"></ion-icon>\n			</button>\n		</ion-fab-list>\n		<ion-fab-list side="left">\n			<button ion-fab color="light">\n				<ion-icon name="logo-googleplus"></ion-icon>\n			</button>\n		</ion-fab-list>\n		<ion-fab-list side="right">\n			<button ion-fab color="dark">\n				<ion-icon name="logo-twitter"></ion-icon>\n			</button>\n		</ion-fab-list>\n	</ion-fab>\n\n	<ion-fab right middle>\n		<button ion-fab color="danger">\n			<ion-icon name="add"></ion-icon>\n		</button>\n	</ion-fab>\n</ion-content>\n'/*ion-inline-end:"F:\santu\apps\contact-manage-app\src\pages\components\floating-action-buttons\components.floating-action-buttons.html"*/
        })
    ], ComponentsFloatingActionButtonsPage);
    return ComponentsFloatingActionButtonsPage;
}());

//# sourceMappingURL=components.floating-action-buttons.page.js.map

/***/ }),

/***/ 536:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ComponentsGesturesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var ComponentsGesturesPage = /** @class */ (function () {
    function ComponentsGesturesPage() {
        this.press = 0;
        this.pan = 0;
        this.swipe = 0;
        this.tap = 0;
    }
    ComponentsGesturesPage.prototype.pressEvent = function (e) {
        this.press++;
    };
    ComponentsGesturesPage.prototype.panEvent = function (e) {
        this.pan++;
    };
    ComponentsGesturesPage.prototype.swipeEvent = function (e) {
        this.swipe++;
    };
    ComponentsGesturesPage.prototype.tapEvent = function (e) {
        this.tap++;
    };
    ComponentsGesturesPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"F:\santu\apps\contact-manage-app\src\pages\components\gestures\components.gestures.html"*/'<ion-header>\n	<ion-navbar>\n		<ion-title>Gestures</ion-title>\n	</ion-navbar>\n</ion-header>\n\n<ion-content>\n\n	<ion-card (tap)="tapEvent($event)">\n		<ion-item>\n			Tapped: {{tap}} times\n		</ion-item>\n	</ion-card>\n\n	<ion-card (press)="pressEvent($event)">\n		<ion-item>\n			Pressed: {{press}} times\n		</ion-item>\n	</ion-card>\n\n	<ion-card (pan)="panEvent($event)">\n		<ion-item>\n			Panned: {{pan}} times\n		</ion-item>\n	</ion-card>\n\n	<ion-card (swipe)="swipeEvent($event)">\n		<ion-item>\n			Swiped: {{swipe}} times\n		</ion-item>\n	</ion-card>\n\n</ion-content>\n'/*ion-inline-end:"F:\santu\apps\contact-manage-app\src\pages\components\gestures\components.gestures.html"*/
        })
    ], ComponentsGesturesPage);
    return ComponentsGesturesPage;
}());

//# sourceMappingURL=components.gestures.page.js.map

/***/ }),

/***/ 537:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ComponentsGridPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var ComponentsGridPage = /** @class */ (function () {
    function ComponentsGridPage() {
    }
    ComponentsGridPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"F:\santu\apps\contact-manage-app\src\pages\components\grid\components.grid.html"*/'<ion-header>\n	<ion-navbar>\n		<ion-title>Grid</ion-title>\n	</ion-navbar>\n</ion-header>\n\n<ion-content class="grid-page">\n	<ion-row>\n		<ion-col>\n			<div>col</div>\n		</ion-col>\n		<ion-col>\n			<div>col</div>\n		</ion-col>\n		<ion-col>\n			<div>col</div>\n		</ion-col>\n		<ion-col>\n			<div>\n				col<br>\n				3 lines<br>\n				of text<br>\n			</div>\n		</ion-col>\n	</ion-row>\n\n	<ion-row center>\n		<ion-col>\n			<div>col</div>\n		</ion-col>\n		<ion-col>\n			<div>col</div>\n		</ion-col>\n		<ion-col>\n			<div>col</div>\n		</ion-col>\n		<ion-col>\n			<div>\n				col<br>\n				3 lines<br>\n				center<br>\n			</div>\n		</ion-col>\n	</ion-row>\n\n	<ion-row center>\n		<ion-col offset-25>\n			<div>col</div>\n		</ion-col>\n		<ion-col>\n			<div>col</div>\n		</ion-col>\n		<ion-col>\n			<div>\n				col<br>\n				3 lines<br>\n				center<br>\n			</div>\n		</ion-col>\n	</ion-row>\n\n	<ion-row baseline>\n		<ion-col offset-50>\n			<div>col</div>\n		</ion-col>\n		<ion-col>\n			<div>\n				col<br>\n				3 lines<br>\n				baseline<br>\n			</div>\n		</ion-col>\n	</ion-row>\n\n	<ion-row baseline>\n		<ion-col offset-75>\n			<div>\n				col<br>\n				2 lines<br>\n			</div>\n		</ion-col>\n	</ion-row>\n\n\n</ion-content>\n'/*ion-inline-end:"F:\santu\apps\contact-manage-app\src\pages\components\grid\components.grid.html"*/
        })
    ], ComponentsGridPage);
    return ComponentsGridPage;
}());

//# sourceMappingURL=components.grid.page.js.map

/***/ }),

/***/ 538:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ComponentsIconsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var ComponentsIconsPage = /** @class */ (function () {
    function ComponentsIconsPage() {
    }
    ComponentsIconsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"F:\santu\apps\contact-manage-app\src\pages\components\icons\components.icons.html"*/'<ion-header>\n	<ion-navbar>\n		<ion-title>Icons</ion-title>\n	</ion-navbar>\n</ion-header>\n\n<ion-content text-center class="icons-page">\n\n	<ion-row>\n		<ion-col>\n			<ion-icon name="ionic" color="primary"></ion-icon>\n		</ion-col>\n		<ion-col>\n			<ion-icon name="logo-angular"></ion-icon>\n		</ion-col>\n		<ion-col>\n			<ion-icon name="heart" color="danger"></ion-icon>\n		</ion-col>\n		<ion-col>\n			<ion-icon name="ionitron" color="primary"></ion-icon>\n		</ion-col>\n\n		<ion-col>\n			<ion-icon name="happy" color="vibrant"></ion-icon>\n		</ion-col>\n		<ion-col>\n			<ion-icon name="people"></ion-icon>\n		</ion-col>\n		<ion-col>\n			<ion-icon name="person"></ion-icon>\n		</ion-col>\n		<ion-col>\n			<ion-icon name="contact"></ion-icon>\n		</ion-col>\n\n		<ion-col>\n			<ion-icon name="apps"></ion-icon>\n		</ion-col>\n		<ion-col>\n			<ion-icon name="lock"></ion-icon>\n		</ion-col>\n		<ion-col>\n			<ion-icon name="key" color="bright"></ion-icon>\n		</ion-col>\n		<ion-col>\n			<ion-icon name="unlock"></ion-icon>\n		</ion-col>\n\n		<ion-col>\n			<ion-icon name="map" color="secondary"></ion-icon>\n		</ion-col>\n		<ion-col>\n			<ion-icon name="navigate"></ion-icon>\n		</ion-col>\n		<ion-col>\n			<ion-icon name="pin"></ion-icon>\n		</ion-col>\n		<ion-col>\n			<ion-icon name="locate"></ion-icon>\n		</ion-col>\n\n		<ion-col>\n			<ion-icon name="mic"></ion-icon>\n		</ion-col>\n		<ion-col>\n			<ion-icon name="musical-notes" color="vibrant"></ion-icon>\n		</ion-col>\n		<ion-col>\n			<ion-icon name="volume-up"></ion-icon>\n		</ion-col>\n		<ion-col>\n			<ion-icon name="microphone"></ion-icon>\n		</ion-col>\n\n		<ion-col>\n			<ion-icon name="cafe" color="bright"></ion-icon>\n		</ion-col>\n		<ion-col>\n			<ion-icon name="calculator"></ion-icon>\n		</ion-col>\n		<ion-col>\n			<ion-icon name="bus"></ion-icon>\n		</ion-col>\n		<ion-col>\n			<ion-icon name="wine" color="danger"></ion-icon>\n		</ion-col>\n\n		<ion-col>\n			<ion-icon name="camera"></ion-icon>\n		</ion-col>\n		<ion-col>\n			<ion-icon name="image" color="secondary"></ion-icon>\n		</ion-col>\n		<ion-col>\n			<ion-icon name="star" color="bright"></ion-icon>\n		</ion-col>\n		<ion-col>\n			<ion-icon name="pin"></ion-icon>\n		</ion-col>\n\n		<ion-col>\n			<ion-icon name="arrow-dropup-circle" color="vibrant"></ion-icon>\n		</ion-col>\n		<ion-col>\n			<ion-icon name="arrow-back"></ion-icon>\n		</ion-col>\n		<ion-col>\n			<ion-icon name="arrow-dropdown"></ion-icon>\n		</ion-col>\n		<ion-col>\n			<ion-icon name="arrow-forward"></ion-icon>\n		</ion-col>\n\n		<ion-col>\n			<ion-icon name="cloud"></ion-icon>\n		</ion-col>\n		<ion-col>\n			<ion-icon name="sunny" color="bright"></ion-icon>\n		</ion-col>\n		<ion-col>\n			<ion-icon name="umbrella"></ion-icon>\n		</ion-col>\n		<ion-col>\n			<ion-icon name="rainy" color="primary"></ion-icon>\n		</ion-col>\n	</ion-row>\n\n</ion-content>\n'/*ion-inline-end:"F:\santu\apps\contact-manage-app\src\pages\components\icons\components.icons.html"*/
        })
    ], ComponentsIconsPage);
    return ComponentsIconsPage;
}());

//# sourceMappingURL=components.icons.page.js.map

/***/ }),

/***/ 539:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ComponentsInputsListPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__fixed_labels_components_inputs_fixed_labels_page__ = __webpack_require__(540);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__floating_labels_components_inputs_floating_labels_page__ = __webpack_require__(541);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__inline_labels_components_inputs_inline_labels_page__ = __webpack_require__(542);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__inset_labels_components_inputs_inset_labels_page__ = __webpack_require__(543);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__placeholder_labels_components_inputs_placeholder_labels_page__ = __webpack_require__(544);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__stacked_labels_components_inputs_stacked_labels_page__ = __webpack_require__(545);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var ComponentsInputsListPage = /** @class */ (function () {
    function ComponentsInputsListPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    ComponentsInputsListPage.prototype.fixedLabelsTapped = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__fixed_labels_components_inputs_fixed_labels_page__["a" /* ComponentsInputsFixedLabelsPage */]);
    };
    ComponentsInputsListPage.prototype.floatingLabelsTapped = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__floating_labels_components_inputs_floating_labels_page__["a" /* ComponentsInputsFloatingLabelsPage */]);
    };
    ComponentsInputsListPage.prototype.inlineLabelsTapped = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__inline_labels_components_inputs_inline_labels_page__["a" /* ComponentsInputsInlineLabelsPage */]);
    };
    ComponentsInputsListPage.prototype.insetLabelsTapped = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__inset_labels_components_inputs_inset_labels_page__["a" /* ComponentsInputsInsetLabelsPage */]);
    };
    ComponentsInputsListPage.prototype.placeholderLabelsTapped = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__placeholder_labels_components_inputs_placeholder_labels_page__["a" /* ComponentsInputsPlaceholderLabelsPage */]);
    };
    ComponentsInputsListPage.prototype.stackedLabelsTapped = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_7__stacked_labels_components_inputs_stacked_labels_page__["a" /* ComponentsInputsStackedLabelsPage */]);
    };
    ComponentsInputsListPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"F:\santu\apps\contact-manage-app\src\pages\components\inputs\components.inputs-list.html"*/'<ion-header>\n	<ion-navbar>\n		<ion-title>Inputs</ion-title>\n	</ion-navbar>\n</ion-header>\n\n<ion-content padding>\n	<ion-list>\n		<ion-item (click)="fixedLabelsTapped()">\n			Fixed Labels\n		</ion-item>\n		<ion-item (click)="floatingLabelsTapped()">\n			Floating Labels\n		</ion-item>\n		<ion-item (click)="inlineLabelsTapped()">\n			Inline Labels\n		</ion-item>\n		<ion-item (click)="insetLabelsTapped()">\n			Inset Labels\n		</ion-item>\n		<ion-item (click)="placeholderLabelsTapped()">\n			Placeholder Labels\n		</ion-item>\n		<ion-item (click)="stackedLabelsTapped()">\n			Stacked Labels\n		</ion-item>\n	</ion-list>\n</ion-content>\n'/*ion-inline-end:"F:\santu\apps\contact-manage-app\src\pages\components\inputs\components.inputs-list.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */]])
    ], ComponentsInputsListPage);
    return ComponentsInputsListPage;
}());

//# sourceMappingURL=components.inputs-list.page.js.map

/***/ }),

/***/ 540:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ComponentsInputsFixedLabelsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var ComponentsInputsFixedLabelsPage = /** @class */ (function () {
    function ComponentsInputsFixedLabelsPage() {
    }
    ComponentsInputsFixedLabelsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"F:\santu\apps\contact-manage-app\src\pages\components\inputs\fixed-labels\components.inputs.fixed-labels.html"*/'<ion-header>\n	<ion-navbar>\n		<ion-title>Fixed Labels</ion-title>\n	</ion-navbar>\n</ion-header>\n\n<ion-content>\n\n	<ion-list>\n\n		<ion-item>\n			<ion-label fixed>Username</ion-label>\n			<ion-input type="text"></ion-input>\n		</ion-item>\n\n		<ion-item>\n			<ion-label fixed>Password</ion-label>\n			<ion-input type="password"></ion-input>\n		</ion-item>\n\n	</ion-list>\n\n	<div padding>\n		<button ion-button color="primary" block>Sign In</button>\n	</div>\n\n\n</ion-content>\n'/*ion-inline-end:"F:\santu\apps\contact-manage-app\src\pages\components\inputs\fixed-labels\components.inputs.fixed-labels.html"*/
        })
    ], ComponentsInputsFixedLabelsPage);
    return ComponentsInputsFixedLabelsPage;
}());

//# sourceMappingURL=components.inputs.fixed-labels.page.js.map

/***/ }),

/***/ 541:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ComponentsInputsFloatingLabelsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var ComponentsInputsFloatingLabelsPage = /** @class */ (function () {
    function ComponentsInputsFloatingLabelsPage() {
    }
    ComponentsInputsFloatingLabelsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"F:\santu\apps\contact-manage-app\src\pages\components\inputs\floating-labels\components.inputs.floating-labels.html"*/'<ion-header>\n	<ion-navbar>\n		<ion-title>Floating Labels</ion-title>\n	</ion-navbar>\n</ion-header>\n\n<ion-content>\n\n	<ion-list>\n\n		<ion-item>\n			<ion-label floating>Username</ion-label>\n			<ion-input type="text" value=""></ion-input>\n		</ion-item>\n\n		<ion-item>\n			<ion-label floating>Password</ion-label>\n			<ion-input type="password" value=""></ion-input>\n		</ion-item>\n\n	</ion-list>\n\n	<div padding>\n		<button ion-button color="primary" block>Sign In</button>\n	</div>\n\n</ion-content>\n'/*ion-inline-end:"F:\santu\apps\contact-manage-app\src\pages\components\inputs\floating-labels\components.inputs.floating-labels.html"*/
        })
    ], ComponentsInputsFloatingLabelsPage);
    return ComponentsInputsFloatingLabelsPage;
}());

//# sourceMappingURL=components.inputs.floating-labels.page.js.map

/***/ }),

/***/ 542:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ComponentsInputsInlineLabelsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var ComponentsInputsInlineLabelsPage = /** @class */ (function () {
    function ComponentsInputsInlineLabelsPage() {
    }
    ComponentsInputsInlineLabelsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"F:\santu\apps\contact-manage-app\src\pages\components\inputs\inline-labels\components.inputs.inline-labels.html"*/'<ion-header>\n	<ion-navbar>\n		<ion-title>Inline Labels</ion-title>\n	</ion-navbar>\n</ion-header>\n\n<ion-content>\n\n	<ion-list>\n\n		<ion-item>\n			<ion-label>Username</ion-label>\n			<ion-input type="text" value=""></ion-input>\n		</ion-item>\n\n		<ion-item>\n			<ion-label>Password</ion-label>\n			<ion-input type="password" value=""></ion-input>\n		</ion-item>\n\n	</ion-list>\n\n	<div padding>\n		<button ion-button color="primary" block>Sign In</button>\n	</div>\n\n</ion-content>\n'/*ion-inline-end:"F:\santu\apps\contact-manage-app\src\pages\components\inputs\inline-labels\components.inputs.inline-labels.html"*/
        })
    ], ComponentsInputsInlineLabelsPage);
    return ComponentsInputsInlineLabelsPage;
}());

//# sourceMappingURL=components.inputs.inline-labels.page.js.map

/***/ }),

/***/ 543:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ComponentsInputsInsetLabelsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var ComponentsInputsInsetLabelsPage = /** @class */ (function () {
    function ComponentsInputsInsetLabelsPage() {
    }
    ComponentsInputsInsetLabelsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"F:\santu\apps\contact-manage-app\src\pages\components\inputs\inset-labels\components.inputs.inset-labels.html"*/'<ion-header>\n	<ion-navbar>\n		<ion-title>Inset Labels</ion-title>\n	</ion-navbar>\n</ion-header>\n\n<ion-content>\n	<ion-list inset>\n\n		<ion-item>\n			<ion-label>Username</ion-label>\n			<ion-input type="text" value=""></ion-input>\n		</ion-item>\n\n		<ion-item>\n			<ion-label>Password</ion-label>\n			<ion-input type="password" value=""></ion-input>\n		</ion-item>\n\n	</ion-list>\n\n	<div padding>\n		<button ion-button color="primary" block>Sign In</button>\n	</div>\n</ion-content>\n'/*ion-inline-end:"F:\santu\apps\contact-manage-app\src\pages\components\inputs\inset-labels\components.inputs.inset-labels.html"*/
        })
    ], ComponentsInputsInsetLabelsPage);
    return ComponentsInputsInsetLabelsPage;
}());

//# sourceMappingURL=components.inputs.inset-labels.page.js.map

/***/ }),

/***/ 544:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ComponentsInputsPlaceholderLabelsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var ComponentsInputsPlaceholderLabelsPage = /** @class */ (function () {
    function ComponentsInputsPlaceholderLabelsPage() {
    }
    ComponentsInputsPlaceholderLabelsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"F:\santu\apps\contact-manage-app\src\pages\components\inputs\placeholder-labels\components.inputs.placeholder-labels.html"*/'<ion-header>\n	<ion-navbar>\n		<ion-title>Placeholder Labels</ion-title>\n	</ion-navbar>\n</ion-header>\n\n<ion-content>\n\n	<ion-list>\n\n		<ion-item>\n			<ion-input type="text" placeholder="Username"></ion-input>\n		</ion-item>\n\n		<ion-item>\n			<ion-input type="password" placeholder="Password"></ion-input>\n		</ion-item>\n\n	</ion-list>\n\n	<div padding>\n		<button ion-button color="primary" block>Sign In</button>\n	</div>\n\n</ion-content>\n'/*ion-inline-end:"F:\santu\apps\contact-manage-app\src\pages\components\inputs\placeholder-labels\components.inputs.placeholder-labels.html"*/
        })
    ], ComponentsInputsPlaceholderLabelsPage);
    return ComponentsInputsPlaceholderLabelsPage;
}());

//# sourceMappingURL=components.inputs.placeholder-labels.page.js.map

/***/ }),

/***/ 545:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ComponentsInputsStackedLabelsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var ComponentsInputsStackedLabelsPage = /** @class */ (function () {
    function ComponentsInputsStackedLabelsPage() {
    }
    ComponentsInputsStackedLabelsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"F:\santu\apps\contact-manage-app\src\pages\components\inputs\stacked-labels\components.inputs.stacked-labels.html"*/'<ion-header>\n	<ion-navbar>\n		<ion-title>Stacked Labels</ion-title>\n	</ion-navbar>\n</ion-header>\n\n<ion-content>\n	<ion-list>\n\n		<ion-item>\n			<ion-label stacked>Username</ion-label>\n			<ion-input type="text"></ion-input>\n		</ion-item>\n\n		<ion-item>\n			<ion-label stacked>Password</ion-label>\n			<ion-input type="password"></ion-input>\n		</ion-item>\n\n	</ion-list>\n\n	<div padding>\n		<button ion-button color="primary" block>Sign In</button>\n	</div>\n\n</ion-content>\n'/*ion-inline-end:"F:\santu\apps\contact-manage-app\src\pages\components\inputs\stacked-labels\components.inputs.stacked-labels.html"*/
        })
    ], ComponentsInputsStackedLabelsPage);
    return ComponentsInputsStackedLabelsPage;
}());

//# sourceMappingURL=components.inputs.stacked-labels.page.js.map

/***/ }),

/***/ 634:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
var environment = {
    firebase: {
        apiKey: "AIzaSyBiJ_KZd7K5l6-SUNaoMiU3JnBatbzwaD8",
        authDomain: "beerapp-46b6c.firebaseapp.com",
        databaseURL: "https://beerapp-46b6c.firebaseio.com",
        projectId: "beerapp-46b6c",
        storageBucket: "beerapp-46b6c.appspot.com",
        messagingSenderId: "415860793255"
    }
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ 78:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_auth__ = __webpack_require__(321);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_auth___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_angularfire2_auth__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AuthService = /** @class */ (function () {
    function AuthService(afAuth) {
        var _this = this;
        this.afAuth = afAuth;
        afAuth.authState.subscribe(function (user) {
            _this.user = user;
        });
    }
    AuthService.prototype.signInWithEmail = function (credentials) {
        console.log('Sign in with email');
        return this.afAuth.auth.signInWithEmailAndPassword(credentials.email, credentials.password);
    };
    AuthService.prototype.signUp = function (credentials) {
        return this.afAuth.auth.createUserWithEmailAndPassword(credentials.email, credentials.password);
    };
    Object.defineProperty(AuthService.prototype, "authenticated", {
        get: function () {
            return this.user !== null;
        },
        enumerable: true,
        configurable: true
    });
    AuthService.prototype.getEmail = function () {
        return this.user && this.user.email;
    };
    AuthService.prototype.signOut = function () {
        return this.afAuth.auth.signOut();
    };
    AuthService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_angularfire2_auth__["AngularFireAuth"]])
    ], AuthService);
    return AuthService;
}());

//# sourceMappingURL=auth.service.js.map

/***/ })

},[342]);
//# sourceMappingURL=main.js.map