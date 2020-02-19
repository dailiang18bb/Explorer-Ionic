(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["detail-detail-module"],{

/***/ "./src/app/detail/detail.module.ts":
/*!*****************************************!*\
  !*** ./src/app/detail/detail.module.ts ***!
  \*****************************************/
/*! exports provided: DetailPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetailPageModule", function() { return DetailPageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/index.js");
/* harmony import */ var _detail_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./detail.page */ "./src/app/detail/detail.page.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var routes = [
    {
        path: '',
        component: _detail_page__WEBPACK_IMPORTED_MODULE_5__["DetailPage"]
    }
];
var DetailPageModule = /** @class */ (function () {
    function DetailPageModule() {
    }
    DetailPageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)
            ],
            declarations: [_detail_page__WEBPACK_IMPORTED_MODULE_5__["DetailPage"]]
        })
    ], DetailPageModule);
    return DetailPageModule;
}());



/***/ }),

/***/ "./src/app/detail/detail.page.html":
/*!*****************************************!*\
  !*** ./src/app/detail/detail.page.html ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"home\" class=\"show-back-button\"></ion-back-button>\n    </ion-buttons>\n    <ion-title>{{wikiTerm}}</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content padding>\n\n  <!-- <button (click)=\"stopSpeaking()\" >Stop</button> -->\n  <!-- <button (click)=\"splitWikiContent()\">Stop</button> -->\n\n\n  <!-- <p>{{speakingFlag}}</p> -->\n\n  <ion-card class=\"content-card\">\n    <ion-card-header class=\"content-card-header\" color=\"primary\">\n      <p>Brief\n        <ion-icon id=\"speak-icon-1\" name=\"volume-high\" (click)=\"speak(deleteTag(wikiSummaryArray[0]),'speak-icon-1')\"></ion-icon>\n      </p>\n    </ion-card-header>\n\n    <ion-card-content class=\"content-card-content\" id=\"first-card\">\n    </ion-card-content>\n  </ion-card>\n\n  <ion-card class=\"content-card\">\n    <ion-card-header class=\"content-card-header\" color=\"primary\">\n      <p>\n        Summary\n        <ion-icon id=\"speak-icon-2\" name=\"volume-high\" (click)=\"speak(deleteTag(wikiSummaryArray[1]),'speak-icon-2')\"></ion-icon>\n      </p>\n    </ion-card-header>\n    <ion-card-content class=\"content-card-content\" id=\"second-card\">\n    </ion-card-content>\n  </ion-card>\n\n  <ion-card class=\"content-card\">\n      <ion-card-header class=\"content-card-header\" color=\"primary\">\n        <p>\n          More\n          <ion-icon id=\"speak-icon-3\" name=\"volume-high\" (click)=\"speak(deleteTag(wikiSummaryArray[2]),'speak-icon-3')\"></ion-icon>\n        </p>\n      </ion-card-header>\n      <ion-card-content class=\"content-card-content\" id=\"third-card\">\n      </ion-card-content>\n    </ion-card>\n\n\n\n\n  <!-- <p id=\"demo\"></p> -->\n\n</ion-content>"

/***/ }),

/***/ "./src/app/detail/detail.page.scss":
/*!*****************************************!*\
  !*** ./src/app/detail/detail.page.scss ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".content-card {\n  margin: 0;\n  margin-bottom: 16px; }\n\n.content-card-header {\n  font-size: 18px;\n  padding: 8px; }\n\n.content-card-header ion-icon {\n  font-size: 28px;\n  vertical-align: bottom; }\n\n.content-card-header p {\n  margin: 0; }\n\n.content-card-content {\n  padding: 8px; }\n\n#second-card {\n  padding: 0; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9jaGFybGVzL1N0dWR5LzIwMThfRkFMTC9DUzY0MSBNb2JpbGUgV2ViIERldmVsb3BtZW50L0Fzc2lnbm1lbnRzL0ZpbmFsIFByb2plY3QvZXhwbG9yZXIvc3JjL2FwcC9kZXRhaWwvZGV0YWlsLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNJLFVBQVM7RUFDVCxvQkFBbUIsRUFDdEI7O0FBRUQ7RUFDSSxnQkFBZTtFQUNmLGFBQVksRUFDZjs7QUFFRDtFQUNJLGdCQUFlO0VBQ2YsdUJBQXNCLEVBQ3pCOztBQUVEO0VBQ0ksVUFBUyxFQUNaOztBQUVEO0VBQ0ksYUFBWSxFQUNmOztBQUdEO0VBQ0UsV0FBVSxFQUNYIiwiZmlsZSI6InNyYy9hcHAvZGV0YWlsL2RldGFpbC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcblxuLmNvbnRlbnQtY2FyZHtcbiAgICBtYXJnaW46IDA7XG4gICAgbWFyZ2luLWJvdHRvbTogMTZweDtcbn1cblxuLmNvbnRlbnQtY2FyZC1oZWFkZXJ7XG4gICAgZm9udC1zaXplOiAxOHB4O1xuICAgIHBhZGRpbmc6IDhweDtcbn1cblxuLmNvbnRlbnQtY2FyZC1oZWFkZXIgaW9uLWljb257XG4gICAgZm9udC1zaXplOiAyOHB4O1xuICAgIHZlcnRpY2FsLWFsaWduOiBib3R0b207XG59XG5cbi5jb250ZW50LWNhcmQtaGVhZGVyIHB7XG4gICAgbWFyZ2luOiAwO1xufVxuXG4uY29udGVudC1jYXJkLWNvbnRlbnR7XG4gICAgcGFkZGluZzogOHB4O1xufVxuXG5cbiNzZWNvbmQtY2FyZHtcbiAgcGFkZGluZzogMDtcbn1cblxuXG4iXX0= */"

/***/ }),

/***/ "./src/app/detail/detail.page.ts":
/*!***************************************!*\
  !*** ./src/app/detail/detail.page.ts ***!
  \***************************************/
/*! exports provided: DetailPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetailPage", function() { return DetailPage; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _vision_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../vision-service.service */ "./src/app/vision-service.service.ts");
/* harmony import */ var _ionic_native_text_to_speech_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic-native/text-to-speech/ngx */ "./node_modules/@ionic-native/text-to-speech/ngx/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
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




var DetailPage = /** @class */ (function () {
    function DetailPage(route, visionService, tts) {
        this.route = route;
        this.visionService = visionService;
        this.tts = tts;
        this.speakingFlag = false;
        this.speakOriginalColorFlag = true;
    }
    DetailPage.prototype.ngOnInit = function () {
        this.wikiTerm = this.route.snapshot.paramMap.get('keyword');
        this.goWiki(this.wikiTerm);
    };
    DetailPage.prototype.goWiki = function (term) {
        return __awaiter(this, void 0, void 0, function () {
            var basewikiSummaryUrl, url;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        basewikiSummaryUrl = 'https://en.wikipedia.org/api/rest_v1/page/mobile-sections/';
                        term = term.replace(/\s+/g, '_');
                        url = basewikiSummaryUrl + term;
                        console.log(url);
                        return [4 /*yield*/, this.visionService.getSummaryRequest(url)
                                .subscribe(function (result) {
                                _this.wikiSummaryJson = result;
                                console.log(_this.wikiSummaryJson);
                                _this.wikiSummary = _this.wikiSummaryJson.lead.sections[0].text;
                                console.log(_this.wikiSummary);
                                _this.repairLink();
                                _this.wikiSummaryArray = _this.splitWikiContent();
                                console.log("this.wikiSummaryArray ::: " + _this.wikiSummaryArray);
                                _this.showWikiSummary();
                            }, function (err) {
                                console.error(err);
                            })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    DetailPage.prototype.repairLink = function () {
        var regex = /(<a href=\")/g;
        // let v = this.wikiSummary.match(regex);
        this.wikiSummary = this.wikiSummary.replace(regex, '<a href="https://en.wikipedia.org');
    };
    DetailPage.prototype.showWikiSummary = function () {
        // document.getElementById("demo").innerHTML = this.wikiSummary;
        // ####
        document.getElementById("first-card").innerHTML = this.wikiSummaryArray[0];
        document.getElementById("second-card").innerHTML = this.wikiSummaryArray[1];
        document.getElementById("third-card").innerHTML = this.wikiSummaryArray[2];
    };
    DetailPage.prototype.speak = function (speakContent, iconID) {
        var speakingButton = document.getElementById(iconID);
        this.changeColor(speakingButton);
        if (this.speakingFlag) {
            this.stopSpeaking();
        }
        else {
            this.speakingFlag = true;
            var TTSOptions = {
                /** text to speak */
                text: speakContent,
                /** a string like 'en-US', 'zh-CN', etc */
                locale: 'en-US',
                /** speed rate, 0 ~ 1 */
                rate: 1,
            };
            this.tts.speak(TTSOptions)
                .then(function () {
                console.log('Success');
            })
                .catch(function (reason) { return console.log(reason); });
        }
    };
    DetailPage.prototype.changeColor = function (element) {
        if (this.speakOriginalColorFlag) {
            this.speakOriginalColor = element.style.color;
            this.speakOriginalColorFlag = false;
        }
        if (element.style.color == this.speakOriginalColor) {
            element.style.color = 'orange';
        }
        else {
            element.style.color = this.speakOriginalColor;
        }
    };
    DetailPage.prototype.stopSpeaking = function () {
        this.tts.speak("");
        this.speakingFlag = false;
    };
    DetailPage.prototype.splitWikiContent = function () {
        // let regex = /(\r\n|\r|\n){2}/g;
        var regex = /\n\n/g;
        // let regex = /(<table|<\/table>)/g;
        // let regex = /(<\/p>)/g;
        var result = this.wikiSummary.split(regex);
        result = result.filter(function (entry) { return entry.trim() != ''; });
        console.log(result);
        return result;
    };
    DetailPage.prototype.deleteTag = function (sentences) {
        var regexTag = /<[^>]*>/g;
        return sentences.replace(regexTag, '');
    };
    DetailPage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-detail',
            template: __webpack_require__(/*! ./detail.page.html */ "./src/app/detail/detail.page.html"),
            styles: [__webpack_require__(/*! ./detail.page.scss */ "./src/app/detail/detail.page.scss")],
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _vision_service_service__WEBPACK_IMPORTED_MODULE_2__["VisionServiceService"],
            _ionic_native_text_to_speech_ngx__WEBPACK_IMPORTED_MODULE_3__["TextToSpeech"]])
    ], DetailPage);
    return DetailPage;
}());



/***/ })

}]);
//# sourceMappingURL=detail-detail-module.js.map