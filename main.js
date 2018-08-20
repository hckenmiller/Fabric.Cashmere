(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./dist/cashmere-examples/esm5/cashmere-examples.js":
/*!**********************************************************!*\
  !*** ./dist/cashmere-examples/esm5/cashmere-examples.js ***!
  \**********************************************************/
/*! exports provided: EXAMPLE_COMPONENTS, EXAMPLE_LIST, CashmereExampleModule, ɵa, ɵb, ɵc, ɵd, ɵe, ɵf, ɵg, ɵh, ɵbz, ɵi, ɵj, ɵk, ɵl, ɵm, ɵn, ɵo, ɵp, ɵq, ɵr, ɵs, ɵt, ɵu, ɵv, ɵw, ɵx, ɵy, ɵba, ɵz, ɵbb, ɵbc, ɵbd, ɵbe, ɵbf, ɵbg, ɵbh, ɵbi, ɵbj, ɵbk, ɵbl, ɵbm, ɵbn, ɵbo, ɵbp, ɵbq, ɵbr, ɵbs, ɵbt, ɵbu, ɵbv, ɵbw, ɵbx, ɵby */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EXAMPLE_COMPONENTS", function() { return EXAMPLE_COMPONENTS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EXAMPLE_LIST", function() { return EXAMPLE_LIST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CashmereExampleModule", function() { return CashmereExampleModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵa", function() { return AccordionOverviewExample; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵb", function() { return ButtonAnchorExample; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵc", function() { return ButtonDisabledExample; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵd", function() { return ButtonIconExample; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵe", function() { return ButtonLinkExample; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵf", function() { return ButtonPrimaryExample; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵg", function() { return ButtonSecondaryExample; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵh", function() { return ButtonSplitExample; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵbz", function() { return CashmereModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵi", function() { return CheckboxDisabledExample; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵj", function() { return CheckboxFormsExample; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵk", function() { return CheckboxStandardExample; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵl", function() { return ChipActionExample; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵm", function() { return ChipBasicExample; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵn", function() { return ChipRowExample; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵo", function() { return ChipSinglerowExample; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵp", function() { return DrawerBasicExample; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵq", function() { return DrawerMenu; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵr", function() { return DrawerOverlayExample; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵs", function() { return DrawerSideExample; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵt", function() { return IconOverviewExample; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵu", function() { return InputDisabledExample; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵv", function() { return InputPrefixExample; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵw", function() { return InputRequiredExample; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵx", function() { return InputSuffixExample; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵy", function() { return ListOverviewExample; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵba", function() { return DialogOverviewExampleDialog; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵz", function() { return ModalOverviewExample; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵbb", function() { return NavbarOverviewExample; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵbc", function() { return PaginationOverviewExample; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵbd", function() { return PicklistSimpleExample; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵbe", function() { return PicklistValuesetExample; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵbf", function() { return PopoverDynamicExample; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵbg", function() { return PopoverOverviewExample; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵbh", function() { return PopoverPlacementExample; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵbi", function() { return ProgressDotsExample; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵbj", function() { return ProgressSpinnerExample; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵbk", function() { return RadioButtonDisabledExample; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵbl", function() { return RadioButtonFormsExample; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵbm", function() { return RadioButtonStandardExample; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵbn", function() { return SelectDisabledExample; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵbo", function() { return SelectFormsExample; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵbp", function() { return SelectStandardExample; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵbq", function() { return SelectValidationExample; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵbr", function() { return SubnavOverviewExample; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵbs", function() { return TableFilterExample; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵbt", function() { return TableOverviewExample; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵbu", function() { return TableSortExample; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵbv", function() { return TabsHorizontalExample; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵbw", function() { return TabsVerticalExample; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵbx", function() { return TileOverviewExample; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵby", function() { return TypeformSurveyOverviewExample; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _healthcatalyst_cashmere__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @healthcatalyst/cashmere */ "./dist/cashmere/esm5/healthcatalyst-cashmere.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");





var CashmereModule = /** @class */ (function () {
    function CashmereModule() {
    }
    return CashmereModule;
}());
CashmereModule.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"], args: [{
                imports: [
                    _healthcatalyst_cashmere__WEBPACK_IMPORTED_MODULE_1__["AccordionModule"],
                    _healthcatalyst_cashmere__WEBPACK_IMPORTED_MODULE_1__["AppSwitcherModule"],
                    _healthcatalyst_cashmere__WEBPACK_IMPORTED_MODULE_1__["BreadcrumbsModule"],
                    _healthcatalyst_cashmere__WEBPACK_IMPORTED_MODULE_1__["ButtonModule"],
                    _healthcatalyst_cashmere__WEBPACK_IMPORTED_MODULE_1__["CheckboxModule"],
                    _healthcatalyst_cashmere__WEBPACK_IMPORTED_MODULE_1__["ChipModule"],
                    _healthcatalyst_cashmere__WEBPACK_IMPORTED_MODULE_1__["DrawerModule"],
                    _healthcatalyst_cashmere__WEBPACK_IMPORTED_MODULE_1__["IconModule"],
                    _healthcatalyst_cashmere__WEBPACK_IMPORTED_MODULE_1__["InputModule"],
                    _healthcatalyst_cashmere__WEBPACK_IMPORTED_MODULE_1__["LabelModule"],
                    _healthcatalyst_cashmere__WEBPACK_IMPORTED_MODULE_1__["ListModule"],
                    _healthcatalyst_cashmere__WEBPACK_IMPORTED_MODULE_1__["ModalModule"],
                    _healthcatalyst_cashmere__WEBPACK_IMPORTED_MODULE_1__["NavbarModule"],
                    _healthcatalyst_cashmere__WEBPACK_IMPORTED_MODULE_1__["PaginationModule"],
                    _healthcatalyst_cashmere__WEBPACK_IMPORTED_MODULE_1__["PicklistModule"],
                    _healthcatalyst_cashmere__WEBPACK_IMPORTED_MODULE_1__["PopoverModule"],
                    _healthcatalyst_cashmere__WEBPACK_IMPORTED_MODULE_1__["ProgressIndicatorsModule"],
                    _healthcatalyst_cashmere__WEBPACK_IMPORTED_MODULE_1__["RadioButtonModule"],
                    _healthcatalyst_cashmere__WEBPACK_IMPORTED_MODULE_1__["SelectModule"],
                    _healthcatalyst_cashmere__WEBPACK_IMPORTED_MODULE_1__["SortModule"],
                    _healthcatalyst_cashmere__WEBPACK_IMPORTED_MODULE_1__["SubnavModule"],
                    _healthcatalyst_cashmere__WEBPACK_IMPORTED_MODULE_1__["TableModule"],
                    _healthcatalyst_cashmere__WEBPACK_IMPORTED_MODULE_1__["TabsModule"],
                    _healthcatalyst_cashmere__WEBPACK_IMPORTED_MODULE_1__["TileModule"],
                    _healthcatalyst_cashmere__WEBPACK_IMPORTED_MODULE_1__["TypeformSurveyModule"]
                ],
                exports: [
                    _healthcatalyst_cashmere__WEBPACK_IMPORTED_MODULE_1__["AccordionModule"],
                    _healthcatalyst_cashmere__WEBPACK_IMPORTED_MODULE_1__["AppSwitcherModule"],
                    _healthcatalyst_cashmere__WEBPACK_IMPORTED_MODULE_1__["BreadcrumbsModule"],
                    _healthcatalyst_cashmere__WEBPACK_IMPORTED_MODULE_1__["ButtonModule"],
                    _healthcatalyst_cashmere__WEBPACK_IMPORTED_MODULE_1__["CheckboxModule"],
                    _healthcatalyst_cashmere__WEBPACK_IMPORTED_MODULE_1__["ChipModule"],
                    _healthcatalyst_cashmere__WEBPACK_IMPORTED_MODULE_1__["DrawerModule"],
                    _healthcatalyst_cashmere__WEBPACK_IMPORTED_MODULE_1__["IconModule"],
                    _healthcatalyst_cashmere__WEBPACK_IMPORTED_MODULE_1__["InputModule"],
                    _healthcatalyst_cashmere__WEBPACK_IMPORTED_MODULE_1__["LabelModule"],
                    _healthcatalyst_cashmere__WEBPACK_IMPORTED_MODULE_1__["ListModule"],
                    _healthcatalyst_cashmere__WEBPACK_IMPORTED_MODULE_1__["ModalModule"],
                    _healthcatalyst_cashmere__WEBPACK_IMPORTED_MODULE_1__["NavbarModule"],
                    _healthcatalyst_cashmere__WEBPACK_IMPORTED_MODULE_1__["PaginationModule"],
                    _healthcatalyst_cashmere__WEBPACK_IMPORTED_MODULE_1__["PicklistModule"],
                    _healthcatalyst_cashmere__WEBPACK_IMPORTED_MODULE_1__["PopoverModule"],
                    _healthcatalyst_cashmere__WEBPACK_IMPORTED_MODULE_1__["ProgressIndicatorsModule"],
                    _healthcatalyst_cashmere__WEBPACK_IMPORTED_MODULE_1__["RadioButtonModule"],
                    _healthcatalyst_cashmere__WEBPACK_IMPORTED_MODULE_1__["SelectModule"],
                    _healthcatalyst_cashmere__WEBPACK_IMPORTED_MODULE_1__["SortModule"],
                    _healthcatalyst_cashmere__WEBPACK_IMPORTED_MODULE_1__["SubnavModule"],
                    _healthcatalyst_cashmere__WEBPACK_IMPORTED_MODULE_1__["TableModule"],
                    _healthcatalyst_cashmere__WEBPACK_IMPORTED_MODULE_1__["TabsModule"],
                    _healthcatalyst_cashmere__WEBPACK_IMPORTED_MODULE_1__["TileModule"],
                    _healthcatalyst_cashmere__WEBPACK_IMPORTED_MODULE_1__["TypeformSurveyModule"]
                ]
            },] },
];
var AccordionOverviewExample = /** @class */ (function () {
    function AccordionOverviewExample() {
        this.alignment = 'left';
        this.hideToolbar = false;
        this.triggerToolbar = true;
        this.triggerButton = 'Toolbar Trigger: On';
    }
    AccordionOverviewExample.prototype.toggleAlign = function () {
        this.alignment = this.alignment === 'left' ? 'right' : 'left';
    };
    AccordionOverviewExample.prototype.toggleToolbar = function () {
        this.hideToolbar = !this.hideToolbar;
    };
    AccordionOverviewExample.prototype.toggleToolbarTrigger = function () {
        this.triggerToolbar = !this.triggerToolbar;
        if (this.triggerToolbar) {
            this.triggerButton = 'Toolbar Trigger: On';
        }
        else {
            this.triggerButton = 'Toolbar Trigger: Off';
        }
    };
    return AccordionOverviewExample;
}());
AccordionOverviewExample.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                selector: 'accordion-overview-example',
                template: "<div class=\"sample-container\">\n    <hc-accordion [triggerAlign]=\"alignment\" [hideToolbar]=\"hideToolbar\" [toolbarTrigger]=\"triggerToolbar\" #accordion>\n        <hc-accordion-toolbar>Toolbar</hc-accordion-toolbar>\n        Content\n    </hc-accordion>\n    <button hc-button (click)=\"accordion.toggle()\" class=\"demo-button\">Toggle</button>\n    <button hc-button (click)=\"toggleAlign()\" class=\"demo-button\">Toggle Alignment</button>\n    <button hc-button (click)=\"toggleToolbar()\" class=\"demo-button\">Toggle Toolbar</button>\n    <button hc-button (click)=\"toggleToolbarTrigger()\" class=\"demo-button\">{{triggerButton}}</button>\n</div>\n",
                styles: [""]
            },] },
];
var ButtonAnchorExample = /** @class */ (function () {
    function ButtonAnchorExample() {
    }
    return ButtonAnchorExample;
}());
ButtonAnchorExample.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                selector: 'button-anchor-example',
                template: "<a hc-button title=\"Primary Anchor Button\" buttonStyle=\"primary\">Primary</a>\n<a hc-button title=\"Destructive Anchor Button\" buttonStyle=\"destructive\">Destructive</a>\n<a hc-button title=\"Disabled Anchor Button\" buttonStyle=\"primary\" disabled>Diasabled</a>\n",
                styles: ["a{margin:10px}"]
            },] },
];
var ButtonDisabledExample = /** @class */ (function () {
    function ButtonDisabledExample() {
    }
    return ButtonDisabledExample;
}());
ButtonDisabledExample.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                selector: 'button-disabled-example',
                template: "<button hc-button title=\"Disabled Button\" buttonStyle=\"primary\" disabled=\"true\">Disabled Button</button>\n",
                styles: ["button{margin:10px}"]
            },] },
];
var ButtonIconExample = /** @class */ (function () {
    function ButtonIconExample() {
    }
    return ButtonIconExample;
}());
ButtonIconExample.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                selector: 'button-icon-example',
                template: "<h3>Buttons with icons</h3>\n<div class=\"btn-row\">\n    <button hc-button title=\"Glyph Button\" buttonStyle=\"primary\">\n        <hc-icon fontSet=\"fa\" fontIcon=\"fa-cog\" class=\"icon-left\"></hc-icon>\n        Options\n        <hc-icon fontSet=\"fa\" fontIcon=\"fa-chevron-down\" class=\"icon-right\" icon-sm></hc-icon>\n    </button>\n    <button hc-button title=\"Glyph Button\" buttonStyle=\"primary-alt\">\n        <hc-icon fontSet=\"fa\" fontIcon=\"fa-undo\" class=\"icon-left\"></hc-icon>\n        Undo\n    </button>\n</div>\n<h3>Icon buttons</h3>\n<div class=\"btn-row\">\n    <button hc-icon-button>\n        <hc-icon fontSet=\"fa\" fontIcon=\"fa-anchor\"></hc-icon>\n    </button>\n    <button hc-icon-button>\n        <hc-icon fontSet=\"fa\" fontIcon=\"fa-snowflake-o\"></hc-icon>\n    </button>\n</div>\n",
                styles: ["h3{margin:12px 0}button:not(:last-child){margin-right:10px}.btn-row{padding:0 15px}btn-row:not(:first-child){margin-bottom:20px}.icon-left{margin-right:5px}.icon-right{margin-left:5px}"]
            },] },
];
var ButtonLinkExample = /** @class */ (function () {
    function ButtonLinkExample() {
    }
    return ButtonLinkExample;
}());
ButtonLinkExample.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                selector: 'button-link-example',
                template: "<button hc-button title=\"Basic Link Button\" buttonStyle=\"link\">Basic Link Button</button>\n<br><br>\n<p>\n    This is an example of an inline <button hc-button title=\"Link Button\" buttonStyle=\"link-inline\">button link</button>.\n</p>\n<br>\n<p>\n    Below is an example of a link style button as a dropdown label:<br><br>\n    <button hc-button title=\"Date Range\" buttonStyle=\"link\" [hcPopover]=\"example\" popperPlacement=\"bottom\">\n        <span class=\"label\">Date Range:</span>\n        <span class=\"value\">\n            <span class=\"hc-font-bold\">Last Month</span> (9/3/17 - 10/3/17)\n        </span>\n        <hc-icon fontSet=\"fa\" fontIcon=\"fa-chevron-down\" class=\"icon-right\" icon-sm></hc-icon>\n    </button>\n</p>\n<hc-popover-content #example>\n    <p>This might contain a date picker, a list of values, input boxes, etc</p>\n</hc-popover-content>\n",
                styles: [""]
            },] },
];
var ButtonPrimaryExample = /** @class */ (function () {
    function ButtonPrimaryExample() {
    }
    return ButtonPrimaryExample;
}());
ButtonPrimaryExample.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                selector: 'button-primary-example',
                template: "<button hc-button title=\"Primary Button\" buttonStyle=\"primary\">Primary</button>\n<button hc-button title=\"Primary-Alt Button\" buttonStyle=\"primary-alt\">Primary Alt</button>\n<button hc-button title=\"Destructive Button\" buttonStyle=\"destructive\">Destructive</button>\n<button hc-button title=\"Neutral Button\" buttonStyle=\"neutral\">Neutral</button>\n",
                styles: ["button{margin:10px}"]
            },] },
];
var ButtonSecondaryExample = /** @class */ (function () {
    function ButtonSecondaryExample() {
    }
    return ButtonSecondaryExample;
}());
ButtonSecondaryExample.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                selector: 'button-secondary-example',
                template: "<button hc-button title=\"Secondary Button\" buttonStyle=\"secondary\">Secondary Button</button>\n",
                styles: ["button{margin:10px}"]
            },] },
];
var ButtonSplitExample = /** @class */ (function () {
    function ButtonSplitExample() {
    }
    return ButtonSplitExample;
}());
ButtonSplitExample.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                selector: 'button-split-example',
                template: "<hc-split-button>\n    Main Button\n    <div hcButtonItem>Button menu</div>\n</hc-split-button>\n<hc-split-button buttonStyle=\"destructive\">\n    Main Button\n    <div hcButtonItem>Button menu</div>\n</hc-split-button>\n<hc-split-button disabled>\n    Disabled Split Button\n    <div hcButtonItem>Button menu</div>\n</hc-split-button>\n",
                styles: ["hc-split-button{margin:10px}"]
            },] },
];
var CheckboxDisabledExample = /** @class */ (function () {
    function CheckboxDisabledExample() {
    }
    return CheckboxDisabledExample;
}());
CheckboxDisabledExample.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                selector: 'checkbox-disabled-example',
                template: "<hc-checkbox id=\"disabled\" disabled=\"true\">Disabled Checkbox</hc-checkbox>\n",
                styles: [""]
            },] },
];
var CheckboxFormsExample = /** @class */ (function () {
    function CheckboxFormsExample() {
    }
    CheckboxFormsExample.prototype.getCheckboxText = function () {
        return (this.isChecked ? 'Disable' : 'Enable') + " Button";
    };
    return CheckboxFormsExample;
}());
CheckboxFormsExample.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                selector: 'checkbox-forms-example',
                template: "<hc-checkbox id=\"ngModel\" [(ngModel)]=\"isChecked\">{{getCheckboxText()}}</hc-checkbox>\n",
                styles: [""]
            },] },
];
var CheckboxStandardExample = /** @class */ (function () {
    function CheckboxStandardExample() {
    }
    return CheckboxStandardExample;
}());
CheckboxStandardExample.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                selector: 'checkbox-standard-example',
                template: "<hc-checkbox id=\"light\">Standard Checkbox</hc-checkbox>\n",
                styles: [""]
            },] },
];
var ChipActionExample = /** @class */ (function () {
    function ChipActionExample() {
    }
    ChipActionExample.prototype.hideChip = function (event) {
        event.target.style.display = 'none';
    };
    return ChipActionExample;
}());
ChipActionExample.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                selector: 'chip-action-example',
                template: "<hc-chip action=\"true\" (click)=\"hideChip($event);\">Action One</hc-chip>\n<hc-chip color=\"red\" action=\"true\" (click)=\"hideChip($event);\">Color Action</hc-chip>\n",
                styles: [""]
            },] },
];
var ChipBasicExample = /** @class */ (function () {
    function ChipBasicExample() {
    }
    return ChipBasicExample;
}());
ChipBasicExample.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                selector: 'chip-basic-example',
                template: "<hc-chip>Basic Chip</hc-chip>\n<hc-chip color=\"red\">\n    <hc-icon fontSet=\"fa\" fontIcon=\"fa-exclamation-triangle\" icon-sm></hc-icon>\n    &nbsp;&nbsp;Alert Chip\n</hc-chip>\n<hc-chip color=\"yellow\">Warning Chip</hc-chip>\n<hc-chip color=\"green\">Success Chip</hc-chip>\n",
                styles: [""]
            },] },
];
var ChipRowExample = /** @class */ (function () {
    function ChipRowExample() {
    }
    ChipRowExample.prototype.hideChip = function (event) {
        event.target.style.display = 'none';
    };
    return ChipRowExample;
}());
ChipRowExample.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                selector: 'chip-row-example',
                template: "<div class=\"chip-row-wrapper\">\n    <hc-chip-row>\n        <hc-chip action=\"true\" (click)=\"hideChip($event);\">Hospital (2)</hc-chip>\n        <hc-chip action=\"true\" (click)=\"hideChip($event);\">MS-DRG (43)</hc-chip>\n        <hc-chip action=\"true\" (click)=\"hideChip($event);\">Payer (11)</hc-chip>\n        <hc-chip action=\"true\" (click)=\"hideChip($event);\">Clinical Program (103)</hc-chip>\n        <hc-chip action=\"true\" (click)=\"hideChip($event);\">Care Process (4)</hc-chip>\n        <hc-chip action=\"true\" (click)=\"hideChip($event);\">Age (1)</hc-chip>\n        <hc-chip action=\"true\" (click)=\"hideChip($event);\">Discharge Status (37)</hc-chip>\n        <hc-chip action=\"true\" (click)=\"hideChip($event);\">Gender (1)</hc-chip>\n        <hc-chip action=\"true\" (click)=\"hideChip($event);\">ER Visit (3)</hc-chip>\n    </hc-chip-row>\n</div>\n",
                styles: [".chip-row-wrapper{display:-webkit-box;display:-ms-flexbox;display:flex}"]
            },] },
];
var ChipSinglerowExample = /** @class */ (function () {
    function ChipSinglerowExample() {
    }
    ChipSinglerowExample.prototype.hideChip = function (event) {
        event.target.style.display = 'none';
    };
    return ChipSinglerowExample;
}());
ChipSinglerowExample.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                selector: 'chip-singlerow-example',
                template: "<div class=\"chip-row-wrapper\">\n    <hc-chip-row wrap=\"false\">\n        <hc-chip action=\"true\" (click)=\"hideChip($event);\">Payer (11)</hc-chip>\n        <hc-chip action=\"true\" (click)=\"hideChip($event);\">Clinical Program (103)</hc-chip>\n        <hc-chip action=\"true\" (click)=\"hideChip($event);\">Care Process (4)</hc-chip>\n        <hc-chip action=\"true\" (click)=\"hideChip($event);\">Discharge Status (37)</hc-chip>\n        <hc-chip action=\"true\" (click)=\"hideChip($event);\">Gender (1)</hc-chip>\n        <hc-chip action=\"true\" (click)=\"hideChip($event);\">ER Visit (3)</hc-chip>\n    </hc-chip-row>\n</div>\n",
                styles: [".chip-row-wrapper{display:-webkit-box;display:-ms-flexbox;display:flex}"]
            },] },
];
var DrawerBasicExample = /** @class */ (function () {
    function DrawerBasicExample() {
    }
    return DrawerBasicExample;
}());
DrawerBasicExample.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                selector: 'drawer-basic-example',
                template: "<div class=\"drawer-container\">\n    <hc-drawer-container>\n        <hc-drawer align=\"left\" #leftDrawer>\n            Left drawer content\n        </hc-drawer>\n        <hc-drawer align=\"right\" #rightDrawer>\n            Right drawer content\n        </hc-drawer>\n        <button hc-button buttonStyle=\"primary\" (click)=\"leftDrawer.toggle()\" class=\"demo-button\">\n            Toggle Left Drawer\n        </button>\n        <button hc-button buttonStyle=\"primary\" (click)=\"rightDrawer.toggle()\" class=\"demo-button\">\n            Toggle Right Drawer\n        </button>\n    </hc-drawer-container>\n</div>\n",
                styles: [".hc-drawer{background-color:#6e6f71;color:#b9babb}"]
            },] },
];
var DrawerMenu = /** @class */ (function () {
    function DrawerMenu() {
    }
    return DrawerMenu;
}());
DrawerMenu.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                selector: 'drawer-filter-menu-example',
                template: "<div class=\"drawer-container\">\n    <hc-drawer-container>\n        <hc-menu-drawer align=\"left\" menuTheme=\"dark-theme\" #leftDrawer>\n            <div hcDrawerToolbar>Filter Sets</div>\n            <hc-drawer-item>\n                <div class=\"drawer-label\">\n                    Clinical Program\n                </div>\n                <hc-icon fontSet=\"fa\" fontIcon=\"fa-plus\"></hc-icon>\n            </hc-drawer-item>\n            <hc-drawer-item>\n                <div class=\"drawer-label\">\n                    Care Process Family\n                </div>\n                <hc-icon fontSet=\"fa\" fontIcon=\"fa-plus\"></hc-icon>\n            </hc-drawer-item>\n            <hc-drawer-item>\n                <div class=\"drawer-label\">\n                    Care Process\n                </div>\n                <hc-icon fontSet=\"fa\" fontIcon=\"fa-plus\"></hc-icon>\n            </hc-drawer-item>\n            <hc-drawer-item>\n                <div class=\"drawer-label\">\n                    Sub-Care Process\n                </div>\n                <hc-icon fontSet=\"fa\" fontIcon=\"fa-plus\"></hc-icon>\n            </hc-drawer-item>\n            <hc-drawer-item>\n                <div class=\"drawer-label\">\n                    MS-DRG\n                </div>\n                <hc-icon fontSet=\"fa\" fontIcon=\"fa-plus\"></hc-icon>\n            </hc-drawer-item>\n            <hc-drawer-item>\n                <div class=\"drawer-label\">\n                    Discharge Status\n                </div>\n                <hc-icon fontSet=\"fa\" fontIcon=\"fa-plus\"></hc-icon>\n            </hc-drawer-item>\n            <hc-drawer-item>\n                <div class=\"drawer-label\">\n                    ER Visit\n                </div>\n                <hc-icon fontSet=\"fa\" fontIcon=\"fa-plus\"></hc-icon>\n            </hc-drawer-item>\n            <hc-drawer-item>\n                <div class=\"drawer-label\">\n                    Payer\n                </div>\n                <hc-icon fontSet=\"fa\" fontIcon=\"fa-plus\"></hc-icon>\n            </hc-drawer-item>\n            <hc-drawer-item>\n                <div class=\"drawer-label\">\n                    Age\n                </div>\n                <hc-icon fontSet=\"fa\" fontIcon=\"fa-plus\"></hc-icon>\n            </hc-drawer-item>\n        </hc-menu-drawer>\n        <div class=\"drawer-content\">\n            <button hc-button buttonStyle=\"primary\" (click)=\"leftDrawer.toggle()\" class=\"demo-button\">\n                Toggle Left Drawer\n            </button>\n        </div>\n    </hc-drawer-container>\n</div>\n",
                styles: [".drawer-content{height:200px}.drawer-label{margin:0 50px 0 0}.fa-plus{color:#00aeff;margin:0 0 0 auto}.hc-drawer-right .drawer-label{margin:0 0 0 50px}.hc-drawer-right .fa-plus{margin:0 auto 0 0}"]
            },] },
];
var DrawerOverlayExample = /** @class */ (function () {
    function DrawerOverlayExample() {
    }
    return DrawerOverlayExample;
}());
DrawerOverlayExample.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                selector: 'drawer-overlay-example',
                template: "<div class=\"drawer-container\">\n    <hc-drawer-container>\n        <hc-drawer align=\"left\" mode=\"over\" #leftOverDrawer>\n            Left drawer content\n        </hc-drawer>\n        <hc-drawer align=\"right\" mode=\"push\" #rightPushDrawer>\n            Right drawer content\n        </hc-drawer>\n        <button hc-button buttonStyle=\"primary\" (click)=\"leftOverDrawer.toggle()\" class=\"demo-button\">\n            Overlay Left Drawer\n        </button>\n        <button hc-button buttonStyle=\"primary\" (click)=\"rightPushDrawer.toggle()\" class=\"demo-button\">\n            Push Right Drawer\n        </button>\n    </hc-drawer-container>\n</div>\n",
                styles: [".hc-drawer{background-color:#6e6f71;color:#b9babb}"]
            },] },
];
var DrawerSideExample = /** @class */ (function () {
    function DrawerSideExample() {
    }
    return DrawerSideExample;
}());
DrawerSideExample.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                selector: 'drawer-side-example',
                template: "<div class=\"drawer-container\">\n    <hc-drawer-container>\n        <hc-drawer align=\"left\" mode=\"side\" opened>\n            Left drawer content\n        </hc-drawer>\n        <hc-drawer align=\"right\" mode=\"side\" opened>\n            Right drawer content\n        </hc-drawer>\n        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla fringilla, leo nec maximus\n        congue, urna libero rutrum risus, sed vulputate metus metus quis purus. Aliquam erat volutpat.\n        Pellentesque dignissim purus diam, gravida scelerisque metus pharetra eu. Integer nisl urna,\n        gravida a fringilla ut, gravida in tortor. Nullam nec arcu maximus, bibendum leo sed, placerat\n        felis. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.\n        Integer ut vulputate eros. Mauris pretium mauris et ligula hendrerit, in bibendum purus\n        vehicula. Proin vel condimentum lorem, nec egestas enim. Phasellus nisi mauris, ornare id mollis\n        eu, iaculis eleifend ante. Praesent ante dui, porta pretium dapibus nec, semper eget enim. Nulla\n        imperdiet, neque eu ultrices maximus, nulla urna feugiat erat, vel aliquam felis dolor vel\n        turpis.\n    </hc-drawer-container>\n</div>\n",
                styles: [".hc-drawer{background-color:#6e6f71;color:#b9babb}"]
            },] },
];
var IconOverviewExample = /** @class */ (function () {
    function IconOverviewExample() {
    }
    return IconOverviewExample;
}());
IconOverviewExample.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                selector: 'icon-overview-example',
                template: "<table class=\"icon-table\">\n    <tr class=\"icon-row\">\n        <td class=\"icon-column\">\n            <hc-icon fontSet=\"fa\" fontIcon=\"fa-snowflake-o\" icon-sm></hc-icon>\n        </td>\n        <td>Small icon</td>\n    </tr>\n    <tr>\n        <td class=\"icon-column\">\n            <hc-icon fontSet=\"fa\" fontIcon=\"fa-snowflake-o\" icon-md></hc-icon>\n        </td>\n        <td>Medium icon (default)</td>\n    </tr>\n    <tr>\n        <td class=\"icon-column\">\n            <hc-icon fontSet=\"fa\" fontIcon=\"fa-snowflake-o\" icon-lg></hc-icon>\n        </td>\n        <td>Large icon</td>\n    </tr>\n</table>\n",
                styles: [".icon-table{vertical-align:middle}.icon-row{height:40px}.icon-column{width:60px;text-align:center}"]
            },] },
];
var InputDisabledExample = /** @class */ (function () {
    function InputDisabledExample() {
    }
    return InputDisabledExample;
}());
InputDisabledExample.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                selector: 'input-disabled-example',
                template: "<div class=\"form-container\">\n    <hc-form-field>\n        <input hcInput placeholder=\"Enter username\" disabled>\n    </hc-form-field>\n</div>\n",
                styles: [".form-container{width:300px}.hc-form-field{width:100%}"]
            },] },
];
var InputPrefixExample = /** @class */ (function () {
    function InputPrefixExample() {
    }
    return InputPrefixExample;
}());
InputPrefixExample.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                selector: 'input-prefix-example',
                template: "<div class=\"form-container\">\n    <hc-form-field>\n        <hc-icon hcPrefix fontSet=\"fa\" fontIcon=\"fa-usd\"></hc-icon>\n        <input hcInput placeholder=\"Enter username\">\n        <hc-icon hcSuffix fontSet=\"fa\" fontIcon=\"fa-user-circle-o\"></hc-icon>\n    </hc-form-field>\n</div>\n",
                styles: [".form-container{width:300px}.hc-form-field{width:100%}"]
            },] },
];
var InputRequiredExample = /** @class */ (function () {
    function InputRequiredExample() {
        this.formDemo = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required);
    }
    return InputRequiredExample;
}());
InputRequiredExample.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                selector: 'input-required-example',
                template: "<div class=\"form-container\">\n    <hc-form-field>\n        <hc-label>Validate an email address</hc-label>\n        <input hcInput [formControl]=\"formDemo\" required>\n        <hc-error>Email address is required</hc-error>\n    </hc-form-field>\n</div>\n",
                styles: [".form-container{width:300px}.hc-form-field{width:100%}"]
            },] },
];
var InputSuffixExample = /** @class */ (function () {
    function InputSuffixExample() {
    }
    return InputSuffixExample;
}());
InputSuffixExample.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                selector: 'input-suffix-example',
                template: "<div class=\"form-container\">\n    <hc-form-field>\n        <input hcInput placeholder=\"Enter username\">\n        <hc-icon hcSuffix fontSet=\"fa\" fontIcon=\"fa-user-circle-o\"></hc-icon>\n    </hc-form-field>\n</div>\n",
                styles: [".form-container{width:300px}.hc-form-field{width:100%}"]
            },] },
];
var ListOverviewExample = /** @class */ (function () {
    function ListOverviewExample() {
    }
    return ListOverviewExample;
}());
ListOverviewExample.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                selector: 'list-overview-example',
                template: "<hc-list>\n    <hc-list-item>\n        <hc-icon fontSet=\"fa\" fontIcon=\"fa-snowflake-o\" hcListIcon></hc-icon>\n        <h4 hcListLine>SnowFlake</h4>\n        <span hcListLine>Second Line</span>\n    </hc-list-item>\n    <hc-list-item>\n        <img src=\"./assets/CashmereLogo.svg\" hcListAvatar>\n        <h4 hcListLine>Address Line 1</h4>\n        <span hcListLine>Address Line 2</span>\n        <hc-icon fontSet=\"fa\" fontIcon=\"fa-plus\"></hc-icon>\n    </hc-list-item>\n</hc-list>\n",
                styles: [".hc-list-avatar{background-color:#f0f8ff}h4{margin:0!important}"]
            },] },
];
var ModalOverviewExample = /** @class */ (function () {
    function ModalOverviewExample(modalService) {
        this.modalService = modalService;
    }
    ModalOverviewExample.prototype.open = function () {
        var _this = this;
        var options = {
            data: 'I got this data from the class that opened me',
            ignoreEscapeKey: true,
            ignoreOverlayClick: true,
            size: 'lg'
        };
        var subModal = this.modalService.open(DialogOverviewExampleDialog, options);
        subModal.result.subscribe(function (res) { return (_this.result = res); });
    };
    ModalOverviewExample.prototype.openTemplate = function (content) {
        var options = {
            data: 'I got this data from the class that opened me (Template version)',
            size: 'lg'
        };
        this.modalService.open(content, options);
    };
    return ModalOverviewExample;
}());
ModalOverviewExample.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                selector: 'modal-overview-example',
                template: "<ng-template #content let-close=\"close\" let-dismiss=\"dismiss\" let-data=\"data\">\n    <hc-modal>\n        <hc-modal-header> Modal Title </hc-modal-header>\n        <hc-modal-body> Data: {{data}}</hc-modal-body>\n        <hc-modal-footer>\n            <button hc-button buttonStyle=\"link\" (click)=\"dismiss()\"> Cancel </button>\n            <button hc-button buttonStyle=\"primary\" (click)=\"close()\"> OK </button>\n        </hc-modal-footer>\n    </hc-modal>\n</ng-template>\n<button hc-button buttonStyle=\"primary\" (click)=\"open()\" class=\"demo-button\">\n    Open Modal from Component\n</button>\n<button hc-button buttonStyle=\"secondary\" (click)=\"openTemplate(content)\" class=\"demo-button\">\n    Open Modal from Template\n</button>\n",
                styles: [""]
            },] },
];
ModalOverviewExample.ctorParameters = function () { return [
    { type: _healthcatalyst_cashmere__WEBPACK_IMPORTED_MODULE_1__["ModalService"], },
]; };
var DialogOverviewExampleDialog = /** @class */ (function () {
    function DialogOverviewExampleDialog(activeModal) {
        this.activeModal = activeModal;
    }
    DialogOverviewExampleDialog.prototype.close = function () {
        this.activeModal.close();
    };
    DialogOverviewExampleDialog.prototype.cancel = function () {
        this.activeModal.dismiss();
    };
    return DialogOverviewExampleDialog;
}());
DialogOverviewExampleDialog.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                selector: 'modal-overview-example-dialog',
                template: "<hc-modal>\n    <hc-modal-header>Modal Header Title</hc-modal-header>\n    <hc-modal-body>Data: {{ activeModal.data }}</hc-modal-body>\n    <hc-modal-footer>\n        <button hc-button buttonStyle=\"link\" (click)=\"cancel()\">Cancel</button>\n        <button hc-button buttonStyle=\"primary\" (click)=\"close()\">Ok</button>\n    </hc-modal-footer>\n</hc-modal>\n"
            },] },
];
DialogOverviewExampleDialog.ctorParameters = function () { return [
    { type: _healthcatalyst_cashmere__WEBPACK_IMPORTED_MODULE_1__["ActiveModal"], },
]; };
var NavbarOverviewExample = /** @class */ (function () {
    function NavbarOverviewExample() {
    }
    return NavbarOverviewExample;
}());
NavbarOverviewExample.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                selector: 'navbar-overview-example',
                template: "<hc-navbar appIcon=\"./assets/CashmereAppLogo.svg\" brandIcon=\"./assets/TriFlame.svg\" user=\"Christine K.\" [homeUri]=\"undefined\" [fixedTop]=\"false\">\n    <hc-navbar-link [active]=\"true\" uri=\"undefined\" linkText=\"Home\"></hc-navbar-link>\n    <hc-navbar-link [active]=\"false\" uri=\"undefined\" linkText=\"Oncology\"></hc-navbar-link>\n    <hc-navbar-link [active]=\"false\" uri=\"undefined\" linkText=\"Surgery\"></hc-navbar-link>\n    <hc-navbar-link [active]=\"false\" uri=\"undefined\" linkText=\"Pediatric\"></hc-navbar-link>\n    <hc-navbar-link [active]=\"false\" uri=\"undefined\" linkText=\"Cardiovascular\"></hc-navbar-link>\n    <hc-navbar-link [active]=\"false\" uri=\"undefined\" linkText=\"Rehabilition\"></hc-navbar-link>\n    <hc-navbar-link [active]=\"false\" uri=\"undefined\" linkText=\"Intensive Care\"></hc-navbar-link>\n    <hc-navbar-icon>\n        <hc-icon fontSet=\"fa\" fontIcon=\"fa-search\"></hc-icon>\n    </hc-navbar-icon>\n    <hc-navbar-icon>\n        <hc-icon fontSet=\"fa\" fontIcon=\"fa-question-circle-o\" [hcPopover]=\"options\"\n                 popperPlacement=\"bottom\"></hc-icon>\n    </hc-navbar-icon>\n</hc-navbar>\n<hc-popover-content #options>\n    <ul class=\"list-options\">\n        <li>\n            <a href=\"https://www.healthcatalyst.com/\" target=\"_blank\">Health Catalyst</a>\n        </li>\n        <li>\n            <a href=\"https://community.healthcatalyst.com/\" target=\"_blank\">Health Catalyst Community</a>\n        </li>\n    </ul>\n</hc-popover-content>\n",
                styles: [""]
            },] },
];
var PaginationOverviewExample = /** @class */ (function () {
    function PaginationOverviewExample() {
        this.totalPages = 16;
        this.currentPage = 8;
    }
    return PaginationOverviewExample;
}());
PaginationOverviewExample.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                selector: 'pagination-overview-example',
                template: "<hc-form-field>\n    <hc-label>Total pages</hc-label>\n    <input hcInput type=\"number\" [(ngModel)]=\"totalPages\">\n</hc-form-field>\n<br>\n<hc-form-field>\n    <hc-label>Current page</hc-label>\n    <input hcInput type=\"number\" [(ngModel)]=\"currentPage\">\n</hc-form-field>\n<br>\n<hc-pagination [totalPages]=\"totalPages\" [(pageNumber)]=\"currentPage\"></hc-pagination>\n",
                styles: [""]
            },] },
];
var PicklistSimpleExample = /** @class */ (function () {
    function PicklistSimpleExample() {
    }
    return PicklistSimpleExample;
}());
PicklistSimpleExample.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                selector: 'picklist-simple-example',
                template: "<hc-picklist\n    [(ngModel)]=\"mySimpleModel\"\n    [simpleOptions]=\"['North', 'South', 'East', 'West']\">\n</hc-picklist>",
                styles: [""]
            },] },
];
var PicklistValuesetExample = /** @class */ (function () {
    function PicklistValuesetExample() {
        this.config = {
            codeIsSignificant: true,
            useValuesets: true,
            options: {
                values: [
                    { code: '001', title: 'Cholera' },
                    { code: '001.0', title: 'Cholera due to vibrio cholerae' },
                    { code: '001.1', title: 'Cholera due to vibrio cholerae el tor' },
                    { code: '001.9', title: 'Cholera, unspecified' },
                    { code: '002', title: 'Typhoid and paratyphoid fevers' },
                    { code: '002.0', title: 'Typhoid fever' },
                    { code: '002.1', title: 'Paratyphoid fever A' },
                    { code: '002.2', title: 'Paratyphoid fever B' },
                    { code: '002.3', title: 'Paratyphoid fever C' },
                    { code: '002.9', title: 'Paratyphoid fever, unspecified' },
                    { code: '003', title: 'Other salmonella infections' },
                    { code: '003.0', title: 'Salmonella gastroenteritis' }
                ],
                valueSets: [
                    {
                        title: 'Cholera Bundle',
                        code: 'bebbf8d1-b4ca-495e-96dd-ed4e2dc32d70',
                        subValueCount: 3,
                        subValues: [
                            { code: '001.0', title: 'Cholera due to vibrio cholerae' },
                            { code: '001.1', title: 'Cholera due to vibrio cholerae el tor' },
                            { code: '001.9', title: 'Cholera, unspecified' }
                        ]
                    },
                    {
                        title: 'Typhoid',
                        code: 'bebbf8d1-b4ca-495e-96dd-ed4e2dc32d69',
                        subValueCount: 5,
                        subValues: [
                            { code: '002', title: 'Typhoid and paratyphoid fevers' },
                            { code: '002.0', title: 'Typhoid fever' },
                            { code: '002.1', title: 'Paratyphoid fever A' },
                            { code: '002.2', title: 'Paratyphoid fever B' },
                            { code: '002.3', title: 'Paratyphoid fever C' }
                        ]
                    }
                ]
            }
        };
    }
    return PicklistValuesetExample;
}());
PicklistValuesetExample.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                selector: 'picklist-valueset-example',
                template: "<hc-picklist\n    [(ngModel)]=\"myModel\"\n    [settings]=\"config\">\n</hc-picklist>",
                styles: [""]
            },] },
];
var PopoverDynamicExample = /** @class */ (function () {
    function PopoverDynamicExample() {
        this.body = 'dynamic content';
    }
    return PopoverDynamicExample;
}());
PopoverDynamicExample.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                selector: 'popover-dynamic-example',
                template: "<p>Enter text into the input below to edit the content of the popover:</p>\n<hc-form-field>\n    <input hcInput [(ngModel)]=\"body\">\n</hc-form-field>\n<button hc-button buttonStyle=\"primary\" [hcPopover]=\"dynamic\" popperPlacement=\"bottom\" [popperCloseOnClickOutside]=\"false\"\n        aria-hidden=\"true\">Click Me\n</button>\n<hc-popover-content #dynamic>\n    <span [(innerText)]=\"body\"></span>\n</hc-popover-content>\n",
                styles: ["button{vertical-align:baseline;margin-left:20px}"]
            },] },
];
var PopoverOverviewExample = /** @class */ (function () {
    function PopoverOverviewExample() {
    }
    return PopoverOverviewExample;
}());
PopoverOverviewExample.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                selector: 'popover-overview-example',
                template: "<div class=\"sample-component\">\n    <button hc-button buttonStyle=\"primary\" [hcPopover]=\"options\" popperPlacement=\"bottom\" class=\"demo-button\" aria-hidden=\"true\">\n        Dropdown\n        <hc-icon fontSet=\"fa\" fontIcon=\"fa-chevron-down\" class=\"icon-right\" icon-sm></hc-icon>\n    </button>\n    <hc-popover-content #options>\n        <ul class=\"list-options\">\n            <li>\n                <a href=\"https://www.healthcatalyst.com/\" target=\"_blank\">Health Catalyst</a>\n            </li>\n            <li>\n                <a href=\"https://community.healthcatalyst.com/\" target=\"_blank\">Health Catalyst Community</a>\n            </li>\n        </ul>\n    </hc-popover-content>\n</div>\n",
                styles: [".icon-right{margin-left:5px}"]
            },] },
];
var PopoverPlacementExample = /** @class */ (function () {
    function PopoverPlacementExample() {
    }
    return PopoverPlacementExample;
}());
PopoverPlacementExample.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                selector: 'popover-placement-example',
                template: "<div class=\"sample-component\">\n    <button hc-button buttonStyle=\"primary\" hcPopover=\"top\" popperPlacement=\"top\" aria-hidden=\"true\" class=\"demo-button\">Top</button>\n    <button hc-button buttonStyle=\"neutral\" hcPopover=\"bottom\" popperPlacement=\"bottom\" aria-hidden=\"true\" class=\"demo-button\">Bottom</button>\n    <button hc-button buttonStyle=\"primary-alt\" hcPopover=\"left\" popperPlacement=\"left\" aria-hidden=\"true\" class=\"demo-button\">Left</button>\n    <button hc-button buttonStyle=\"secondary\" hcPopover=\"right\" popperPlacement=\"right\" aria-hidden=\"true\" class=\"demo-button\">Right</button>\n</div>\n",
                styles: [""]
            },] },
];
var ProgressDotsExample = /** @class */ (function () {
    function ProgressDotsExample() {
        this.dotsColor = 'dark';
        this.dotsMini = false;
        this.dotsCentered = true;
    }
    return ProgressDotsExample;
}());
ProgressDotsExample.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                selector: 'progress-dots-example',
                template: "<div class=\"progress-example\">\n    <!-- Options -->\n    <div class=\"col-1\">\n        <label hc-label>Color</label>\n        <hc-select [(ngModel)]=\"dotsColor\">\n            <option value=\"dark\" [selected]=\"dotsColor === 'dark'\">dark</option>\n            <option value=\"light\" [selected]=\"dotsColor === 'light'\">light</option>\n        </hc-select>\n        <hc-checkbox id=\"checkbox-dots-size\" [(ngModel)]=\"dotsMini\" [checked]=\"dotsMini\">Miniature</hc-checkbox>\n        <hc-checkbox id=\"checkbox-dots-center\" [(ngModel)]=\"dotsCentered\" [checked]=\"dotsCentered\">Centered</hc-checkbox>\n    </div>\n    <!-- Spinner -->\n    <div class=\"col-2\">\n        <div class=\"progress-component-container\" [ngClass]=\"{'dark-bg': dotsColor === 'light'}\">\n            <hc-progress-dots\n                [color]=\"dotsColor\"\n                [isMini]=\"dotsMini\"\n                [isCentered]=\"dotsCentered\"></hc-progress-dots>\n        </div>\n    </div>\n</div>",
                styles: [".progress-example{display:-webkit-box;display:-ms-flexbox;display:flex;margin-top:20px}.col-2{-webkit-box-flex:1;-ms-flex:1 0 auto;flex:1 0 auto;margin-left:20px}.progress-component-container{height:100%;width:100%;position:relative;padding:15px;border:1px solid #e5e5e5}.progress-component-container.dark-bg{background-color:#384655}hc-checkbox,label{margin:20px 0 5px;display:block}"]
            },] },
];
var ProgressSpinnerExample = /** @class */ (function () {
    function ProgressSpinnerExample() {
        this.spinnerIsDeterminate = false;
        this.spinnerProgress = 25;
        this.spinnerColor = 'blue';
        this.spinnerDiameter = 50;
        this.spinnerHasChannel = true;
        this.spinnerCentered = true;
    }
    return ProgressSpinnerExample;
}());
ProgressSpinnerExample.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                selector: 'progress-spinner-example',
                template: "<div class=\"progress-example\">\n    <!-- Options -->\n    <div class=\"col-1\">\n        <label hc-label>Color</label>\n        <hc-select [(ngModel)]=\"spinnerColor\">\n            <option value=\"blue\" [selected]=\"spinnerColor === 'blue'\">blue</option>\n            <option value=\"green\" [selected]=\"spinnerColor === 'green'\">green</option>\n            <option value=\"purple\" [selected]=\"spinnerColor === 'purple'\">purple</option>\n            <option value=\"orange\" [selected]=\"spinnerColor === 'orange'\">orange</option>\n            <option value=\"red\" [selected]=\"spinnerColor === 'red'\">red</option>\n            <option value=\"gray\" [selected]=\"spinnerColor === 'gray'\">gray</option>\n            <option value=\"white\" [selected]=\"spinnerColor === 'white'\">white</option>\n        </hc-select>\n        <label hc-label for=\"diameter\">Diameter</label>\n        <input hc-input type=\"number\" min=\"20\" max=\"250\" class=\"form-control\" id=\"diameter\" [(ngModel)]=\"spinnerDiameter\" name=\"diameter\">\n        <hc-checkbox id=\"checkbox-bg\" [(ngModel)]=\"spinnerHasChannel\" [checked]=\"spinnerHasChannel\">BG Channel</hc-checkbox>\n        <hc-checkbox id=\"checkbox-center\" [(ngModel)]=\"spinnerCentered\" [checked]=\"spinnerCentered\">Centered</hc-checkbox>\n        <hr>\n        <hc-checkbox id=\"checkbox-determinate\" [(ngModel)]=\"spinnerIsDeterminate\">Determinate</hc-checkbox>\n        <label hc-label for=\"name\">Progress (0-100%)</label>\n        <input hc-input type=\"number\" min=\"0\" max=\"100\" class=\"form-control\" id=\"name\" [(ngModel)]=\"spinnerProgress\" [disabled]=\"!spinnerIsDeterminate\" name=\"name\">\n    </div>\n    <!-- Spinner -->\n    <div class=\"col-2\">\n        <div class=\"progress-component-container\" [ngClass]=\"{'dark-bg': spinnerColor === 'white'}\">\n            <hc-progress-spinner\n                [diameter]=\"spinnerDiameter\"\n                [color]=\"spinnerColor\"\n                [hasChannel]=\"spinnerHasChannel\"\n                [isCentered]=\"spinnerCentered\"\n                [isDeterminate]=\"spinnerIsDeterminate\"\n                [progress]=\"spinnerProgress\"></hc-progress-spinner>\n        </div>\n    </div>\n</div>\n",
                styles: [".progress-example{display:-webkit-box;display:-ms-flexbox;display:flex;margin-top:20px}.col-2{-webkit-box-flex:1;-ms-flex:1 0 auto;flex:1 0 auto;margin-left:20px}.progress-component-container{height:100%;width:100%;position:relative;padding:15px;border:1px solid #e5e5e5}.progress-component-container.dark-bg{background-color:#384655}hc-checkbox,label{margin:20px 0 5px;display:block}"]
            },] },
];
var RadioButtonDisabledExample = /** @class */ (function () {
    function RadioButtonDisabledExample() {
    }
    return RadioButtonDisabledExample;
}());
RadioButtonDisabledExample.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                selector: 'radio-button-disabled-example',
                template: "<form>\n    <hc-radio-group [disabled]=\"true\">\n        <hc-radio-button>30 Rock</hc-radio-button>\n        <hc-radio-button>Seinfeld</hc-radio-button>\n    </hc-radio-group>\n</form>\n",
                styles: [""]
            },] },
];
var RadioButtonFormsExample = /** @class */ (function () {
    function RadioButtonFormsExample() {
        this.favoriteShow = 'Silicon Valley';
        this.shows = ['Silicon Valley', 'Game of Thrones', 'Better Call Saul'];
    }
    RadioButtonFormsExample.prototype.reset = function () {
        this.favoriteShow = null;
    };
    return RadioButtonFormsExample;
}());
RadioButtonFormsExample.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                selector: 'radio-button-forms-example',
                template: "<hc-radio-group [(ngModel)]=\"favoriteShow\">\n    <hc-radio-button *ngFor=\"let show of shows\" [value]=\"show\">{{show}}</hc-radio-button>\n</hc-radio-group>\n<p>Current selection: {{favoriteShow ? favoriteShow : 'none'}}</p>\n<button hc-button title=\"Primary-Alt Button\" buttonStyle=\"primary-alt\" (click)=\"reset()\">\n    Clear Selection\n</button>\n",
                styles: [""]
            },] },
];
var RadioButtonStandardExample = /** @class */ (function () {
    function RadioButtonStandardExample() {
    }
    return RadioButtonStandardExample;
}());
RadioButtonStandardExample.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                selector: 'radio-button-standard-example',
                template: "<form>\n    <hc-radio-group>\n        <hc-radio-button value=\"1\" [checked]=\"true\">The Office</hc-radio-button>\n        <hc-radio-button value=\"2\">Parks and Rec</hc-radio-button>\n        <hc-radio-button value=\"3\">Arrested Development</hc-radio-button>\n    </hc-radio-group>\n</form>\n",
                styles: [""]
            },] },
];
var SelectDisabledExample = /** @class */ (function () {
    function SelectDisabledExample() {
    }
    return SelectDisabledExample;
}());
SelectDisabledExample.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                selector: 'select-disabled-example',
                template: "<div class=\"select-sample\">\n    <hc-select disabled=\"true\" placeholder=\"Select a city:\">\n        <option>Philadelphia</option>\n        <option>Atlanta</option>\n    </hc-select>\n</div>\n",
                styles: [".select-sample{max-width:350px;width:100%}"]
            },] },
];
var SelectFormsExample = /** @class */ (function () {
    function SelectFormsExample() {
        this.selectControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('chicken');
    }
    SelectFormsExample.prototype.setTaters = function () {
        this.selectControl.setValue('taters');
    };
    SelectFormsExample.prototype.toggleActive = function () {
        if (this.selectControl.disabled) {
            this.selectControl.enable();
        }
        else {
            this.selectControl.disable();
        }
    };
    return SelectFormsExample;
}());
SelectFormsExample.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                selector: 'select-forms-example',
                template: "<form>\n    <hc-select [formControl]=\"selectControl\">\n        <option value=\"corn\">Corn on the cob</option>\n        <option value=\"chicken\">Deep fried chicken</option>\n        <option value=\"taters\">Mashed taters</option>\n    </hc-select>\n</form>\n<div class=\"action-wrapper\">\n    <button hc-button (click)=\"setTaters()\">\n        Yummy Taters\n    </button>\n    <button hc-button (click)=\"toggleActive()\">\n        Enable/Disable Select\n    </button>\n</div>\n",
                styles: ["form{max-width:350px}button{margin:5px}.action-wrapper:first-child{margin-left:0}"]
            },] },
];
var SelectStandardExample = /** @class */ (function () {
    function SelectStandardExample() {
    }
    return SelectStandardExample;
}());
SelectStandardExample.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                selector: 'select-standard-example',
                template: "<div class=\"select-sample\">\n    <label hc-label>Facility Location:</label>\n    <hc-select placeholder=\"Select a city:\">\n        <option>Philadelphia</option>\n        <option>Atlanta</option>\n        <option>Salt Lake City</option>\n        <option>Chicago</option>\n        <option>Orlando</option>\n    </hc-select>\n</div>\n",
                styles: [".select-sample{max-width:350px;width:100%}"]
            },] },
];
var SelectValidationExample = /** @class */ (function () {
    function SelectValidationExample() {
        this.validCheck = false;
        this.selectControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('');
    }
    SelectValidationExample.prototype.toggleValidate = function () {
        this.validCheck = !this.validCheck;
        if (this.validCheck) {
            this.selectControl.setErrors({ incorrect: true });
        }
        else {
            this.selectControl.setErrors({});
        }
    };
    return SelectValidationExample;
}());
SelectValidationExample.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                selector: 'select-validation-example',
                template: "<div class=\"select-sample\">\n    <label hc-label required=\"true\">Project Status:</label>\n    <hc-select [formControl]=\"selectControl\">\n        <option>Active</option>\n        <option>Inactive</option>\n        <option>In progress</option>\n    </hc-select>\n    <div class=\"form-errors\" *ngIf=\"selectControl.invalid\">\n        This is an example warning for an invalid response\n    </div>\n</div>\n<br>\n<button hc-button title=\"Toggle component validation\" buttonStyle=\"primary\" (click)=\"toggleValidate()\">\n    Toggle Validate\n</button>\n",
                styles: [".select-sample{max-width:350px;width:100%}"]
            },] },
];
var SubnavOverviewExample = /** @class */ (function () {
    function SubnavOverviewExample() {
    }
    return SubnavOverviewExample;
}());
SubnavOverviewExample.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                selector: 'subnav-overview-example',
                template: "<hc-subnav>\n    <div class=\"breadcrumbs\">\n        <a href=\"\">Home</a>\n        <hc-icon fontSet=\"fa\" fontIcon=\"fa-chevron-right\" class=\"breadcrumb-arrow\"></hc-icon>\n        <span class=\"breadcrumb-text\">Example Breadcrumbs</span>\n    </div>\n    <div hcSubnavRight>\n        <button hc-button title=\"Secondary Button\" buttonStyle=\"secondary\">Secondary Action</button>\n        <button hc-button title=\"Primary Button\" buttonStyle=\"primary\">Primary Action</button>\n    </div>\n</hc-subnav>\n",
                styles: ["hc-subnav{min-width:625px}.breadcrumbs{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center}.breadcrumbs a{color:#006d9a}.breadcrumb-arrow{font-size:10px!important;height:10px!important;color:#708090;margin-top:3px;padding-left:5px;padding-right:5px}.breadcrumb-text{color:#5e676f}.hc-button{margin:0 4px}"]
            },] },
];
var ELEMENT_DATA = [
    { position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H' },
    { position: 2, name: 'Helium', weight: 4.0026, symbol: 'He' },
    { position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li' },
    { position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be' },
    { position: 5, name: 'Boron', weight: 10.811, symbol: 'B' },
    { position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C' },
    { position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N' },
    { position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O' },
    { position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F' },
    { position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne' }
];
var TableFilterExample = /** @class */ (function () {
    function TableFilterExample() {
        this.displayedColumns = ['position', 'name', 'weight', 'symbol'];
    }
    TableFilterExample.prototype.ngOnInit = function () {
        this.dataSource = new _healthcatalyst_cashmere__WEBPACK_IMPORTED_MODULE_1__["HcTableDataSource"](ELEMENT_DATA);
    };
    TableFilterExample.prototype.applyFilter = function (filter) {
        this.dataSource.filter = filter.trim().toLowerCase();
    };
    return TableFilterExample;
}());
TableFilterExample.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                selector: 'table-filter-example',
                template: "<hc-form-field>\n    <hc-label>Filter</hc-label>\n    <input hcInput (keyup)=\"applyFilter($event.target.value)\">\n</hc-form-field>\n<table hc-table [dataSource]=\"dataSource\">\n    <!-- Position Column -->\n    <ng-container hcColumnDef=\"position\">\n        <th hc-header-cell *hcHeaderCellDef>No.</th>\n        <td hc-cell *hcCellDef=\"let element\">{{element.position}}</td>\n    </ng-container>\n    <!-- Name Column -->\n    <ng-container hcColumnDef=\"name\">\n        <th hc-header-cell *hcHeaderCellDef>Name</th>\n        <td hc-cell *hcCellDef=\"let element\">{{element.name}}</td>\n    </ng-container>\n    <!-- Weight Column -->\n    <ng-container hcColumnDef=\"weight\">\n        <th hc-header-cell *hcHeaderCellDef>Weight</th>\n        <td hc-cell *hcCellDef=\"let element\">{{element.weight}}</td>\n    </ng-container>\n    <!-- Symbol Column -->\n    <ng-container hcColumnDef=\"symbol\">\n        <th hc-header-cell *hcHeaderCellDef>Symbol</th>\n        <td hc-cell *hcCellDef=\"let element\">{{element.symbol}}</td>\n    </ng-container>\n    <tr hc-header-row *hcHeaderRowDef=\"displayedColumns\"></tr>\n    <tr hc-row *hcRowDef=\"let row; columns: displayedColumns;\"></tr>\n</table>\n",
                styles: ["table{width:100%}"]
            },] },
];
var ELEMENT_DATA$1 = [
    { position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H' },
    { position: 2, name: 'Helium', weight: 4.0026, symbol: 'He' },
    { position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li' },
    { position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be' },
    { position: 5, name: 'Boron', weight: 10.811, symbol: 'B' },
    { position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C' },
    { position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N' },
    { position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O' },
    { position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F' },
    { position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne' }
];
var TableOverviewExample = /** @class */ (function () {
    function TableOverviewExample() {
        this.displayedColumns = ['position', 'name', 'weight', 'symbol'];
        this.dataSource = ELEMENT_DATA$1;
    }
    return TableOverviewExample;
}());
TableOverviewExample.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                selector: 'table-overview-example',
                template: "<table hc-table [dataSource]=\"dataSource\">\n    <!-- Position Column -->\n    <ng-container hcColumnDef=\"position\">\n        <th hc-header-cell *hcHeaderCellDef> No. </th>\n        <td hc-cell *hcCellDef=\"let element\"> {{element.position}} </td>\n    </ng-container>\n    <!-- Name Column -->\n    <ng-container hcColumnDef=\"name\">\n        <th hc-header-cell *hcHeaderCellDef> Name </th>\n        <td hc-cell *hcCellDef=\"let element\"> {{element.name}} </td>\n    </ng-container>\n    <!-- Weight Column -->\n    <ng-container hcColumnDef=\"weight\">\n        <th hc-header-cell *hcHeaderCellDef> Weight </th>\n        <td hc-cell *hcCellDef=\"let element\"> {{element.weight}} </td>\n    </ng-container>\n    <!-- Symbol Column -->\n    <ng-container hcColumnDef=\"symbol\">\n        <th hc-header-cell *hcHeaderCellDef> Symbol </th>\n        <td hc-cell *hcCellDef=\"let element\"> {{element.symbol}} </td>\n    </ng-container>\n    <tr hc-header-row *hcHeaderRowDef=\"displayedColumns\"></tr>\n    <tr hc-row *hcRowDef=\"let row; columns: displayedColumns;\"></tr>\n</table>\n",
                styles: ["table{width:100%}"]
            },] },
];
var ELEMENT_DATA$2 = [
    { position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H' },
    { position: 2, name: 'Helium', weight: 4.0026, symbol: 'He' },
    { position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li' },
    { position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be' },
    { position: 5, name: 'Boron', weight: 10.811, symbol: 'B' },
    { position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C' },
    { position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N' },
    { position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O' },
    { position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F' },
    { position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne' }
];
var TableSortExample = /** @class */ (function () {
    function TableSortExample() {
        this.displayedColumns = ['position', 'name', 'weight', 'symbol'];
    }
    TableSortExample.prototype.ngOnInit = function () {
        this.dataSource = new _healthcatalyst_cashmere__WEBPACK_IMPORTED_MODULE_1__["HcTableDataSource"](ELEMENT_DATA$2);
        this.dataSource.sort = this.sort;
    };
    return TableSortExample;
}());
TableSortExample.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                selector: 'table-sort-example',
                template: "<table hc-table [dataSource]=\"dataSource\" hcSort>\n    <!-- Position Column -->\n    <ng-container hcColumnDef=\"position\">\n        <th hc-header-cell *hcHeaderCellDef hc-sort-header>No.</th>\n        <td hc-cell *hcCellDef=\"let element\">{{element.position}}</td>\n    </ng-container>\n    <!-- Name Column -->\n    <ng-container hcColumnDef=\"name\">\n        <th hc-header-cell *hcHeaderCellDef hc-sort-header>Name</th>\n        <td hc-cell *hcCellDef=\"let element\">{{element.name}}</td>\n    </ng-container>\n    <!-- Weight Column -->\n    <ng-container hcColumnDef=\"weight\">\n        <th hc-header-cell *hcHeaderCellDef hc-sort-header>Weight</th>\n        <td hc-cell *hcCellDef=\"let element\">{{element.weight}}</td>\n    </ng-container>\n    <!-- Symbol Column -->\n    <ng-container hcColumnDef=\"symbol\">\n        <th hc-header-cell *hcHeaderCellDef>Symbol</th>\n        <td hc-cell *hcCellDef=\"let element\">{{element.symbol}}</td>\n    </ng-container>\n    <tr hc-header-row *hcHeaderRowDef=\"displayedColumns\"></tr>\n    <tr hc-row *hcRowDef=\"let row; columns: displayedColumns;\"></tr>\n</table>\n",
                styles: ["table{width:100%}"]
            },] },
];
TableSortExample.propDecorators = {
    "sort": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"], args: [_healthcatalyst_cashmere__WEBPACK_IMPORTED_MODULE_1__["HcSort"],] },],
};
var TabsHorizontalExample = /** @class */ (function () {
    function TabsHorizontalExample() {
    }
    return TabsHorizontalExample;
}());
TabsHorizontalExample.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                selector: 'tabs-horizontal-example',
                template: "<div class=\"tab-demo\">\n    <hc-tab-set direction=\"horizontal\">\n        <hc-tab tabTitle=\"Tab 1\">\n            <div class=\"tab-content\">\n                Tab content 1\n            </div>\n        </hc-tab>\n        <hc-tab tabTitle=\"Tab 2\">\n            <div class=\"tab-content\">\n                Tab content 2\n            </div>\n        </hc-tab>\n        <hc-tab tabTitle=\"Tab 3\">\n            <div class=\"tab-content\">\n                Tab content 3\n            </div>\n        </hc-tab>\n    </hc-tab-set>\n</div>\n",
                styles: [".tab-content{padding:15px}.tab-demo{border:1px solid #e0e0e0}"]
            },] },
];
var TabsVerticalExample = /** @class */ (function () {
    function TabsVerticalExample() {
    }
    return TabsVerticalExample;
}());
TabsVerticalExample.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                selector: 'tabs-vertical-example',
                template: "<div class=\"tab-demo\">\n    <hc-tab-set>\n        <hc-tab tabTitle=\"Tab 1\">\n            <hc-tab-set direction=\"horizontal\">\n                <hc-tab tabTitle=\"Tab 1\">\n                    <div class=\"tab-content\">\n                        Horizontal Tab content 1\n                    </div>\n                </hc-tab>\n                <hc-tab tabTitle=\"Tab 2\">\n                    <div class=\"tab-content\">\n                        Horizontal Tab content 2\n                    </div>\n                </hc-tab>\n                <hc-tab tabTitle=\"Tab 3\">\n                    <div class=\"tab-content\">\n                        Horizontal Tab content 3\n                    </div>\n                </hc-tab>\n            </hc-tab-set>\n        </hc-tab>\n        <hc-tab tabTitle=\"Tab 2\">\n            <div class=\"tab-content\">\n                Vertical Tab content 2\n            </div>\n        </hc-tab>\n        <hc-tab tabTitle=\"Tab 3\">\n            <div class=\"tab-content\">\n                Vertical Tab content 3\n            </div>\n        </hc-tab>\n    </hc-tab-set>\n</div>\n",
                styles: [".tab-content{padding:15px}.tab-demo{border:1px solid #e0e0e0}"]
            },] },
];
var TileOverviewExample = /** @class */ (function () {
    function TileOverviewExample() {
    }
    return TileOverviewExample;
}());
TileOverviewExample.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                selector: 'tile-overview-example',
                template: "<hc-tile>\n    <h5>Example Tile</h5>\n    <p>This paragraph is contained within a <code>hc-tile</code> component.</p>\n</hc-tile>\n",
                styles: [""]
            },] },
];
var TypeformSurveyOverviewExample = /** @class */ (function () {
    function TypeformSurveyOverviewExample() {
        this.surveyUri = 'https://healthcatalyst.typeform.com/to/bGDyIK?productname=Fabric.Cashmere';
    }
    return TypeformSurveyOverviewExample;
}());
TypeformSurveyOverviewExample.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                selector: 'typeform-survey-overview-example',
                template: "<hc-typeform-survey [surveyUri]=\"surveyUri\" #survey></hc-typeform-survey>\n<button hc-button buttonStyle=\"primary\" (click)=\"survey.open()\">\n    Open Survey\n</button>\n",
                styles: [""]
            },] },
];
var EXAMPLE_COMPONENTS = {
    'accordion-overview': {
        title: 'Accordion overview',
        component: AccordionOverviewExample
    },
    'button-anchor': {
        title: 'Anchor Tag Buttons',
        component: ButtonAnchorExample
    },
    'button-disabled': {
        title: 'Disabled Buttons',
        component: ButtonDisabledExample
    },
    'button-icon': {
        title: 'Buttons and icons',
        component: ButtonIconExample
    },
    'button-link': {
        title: 'Buttons styled as links',
        component: ButtonLinkExample
    },
    'button-primary': {
        title: 'Primary Buttons',
        component: ButtonPrimaryExample
    },
    'button-secondary': {
        title: 'Secondary Buttons',
        component: ButtonSecondaryExample
    },
    'button-split': {
        title: 'Split Buttons',
        component: ButtonSplitExample
    },
    'checkbox-disabled': {
        title: 'Disabled Checkbox',
        component: CheckboxDisabledExample
    },
    'checkbox-forms': {
        title: 'Forms Support',
        component: CheckboxFormsExample
    },
    'checkbox-standard': {
        title: 'Standard Checkbox',
        component: CheckboxStandardExample
    },
    'chip-action': {
        title: 'Action Chips',
        component: ChipActionExample
    },
    'chip-basic': {
        title: 'Basic Chips',
        component: ChipBasicExample
    },
    'chip-row': {
        title: 'Chip Rows',
        component: ChipRowExample
    },
    'chip-singlerow': {
        title: 'Chip Rows (Single Row)',
        component: ChipSinglerowExample
    },
    'drawer-basic': {
        title: 'Left and Right Drawers',
        component: DrawerBasicExample
    },
    'drawer-menu': {
        title: 'Filter menu',
        component: DrawerMenu
    },
    'drawer-overlay': {
        title: 'Overlay or Push Content',
        component: DrawerOverlayExample
    },
    'drawer-side': {
        title: 'Side-by-Side Drawers',
        component: DrawerSideExample
    },
    'icon-overview': {
        title: 'Icon overview',
        component: IconOverviewExample
    },
    'input-disabled': {
        title: 'Disabled Input',
        component: InputDisabledExample
    },
    'input-prefix': {
        title: 'Input with Prefix and Suffix',
        component: InputPrefixExample
    },
    'input-required': {
        title: 'Required Input',
        component: InputRequiredExample
    },
    'input-suffix': {
        title: 'Input with Suffix',
        component: InputSuffixExample
    },
    'list-overview': {
        title: 'List overview',
        component: ListOverviewExample
    },
    'modal-overview': {
        title: 'Modal overview',
        component: ModalOverviewExample,
        additionalFiles: ["modal-overview-example-dialog.html"],
        selectorName: 'ModalOverviewExample, DialogOverviewExampleDialog'
    },
    'navbar-overview': {
        title: 'Navbar overview',
        component: NavbarOverviewExample
    },
    'pagination-overview': {
        title: 'Pagination overview',
        component: PaginationOverviewExample
    },
    'picklist-simple': {
        title: 'Picklist simple',
        component: PicklistSimpleExample
    },
    'picklist-valueset': {
        title: 'Picklist valueset',
        component: PicklistValuesetExample
    },
    'popover-dynamic': {
        title: 'Dynamic Content',
        component: PopoverDynamicExample
    },
    'popover-overview': {
        title: 'Popover Overview',
        component: PopoverOverviewExample
    },
    'popover-placement': {
        title: 'Popover Placement',
        component: PopoverPlacementExample
    },
    'progress-dots': {
        title: 'Progress dots',
        component: ProgressDotsExample
    },
    'progress-spinner': {
        title: 'Progress spinner',
        component: ProgressSpinnerExample
    },
    'radio-button-disabled': {
        title: 'Disabled Radio Buttons',
        component: RadioButtonDisabledExample
    },
    'radio-button-forms': {
        title: 'Radio Buttons using Form Controls',
        component: RadioButtonFormsExample
    },
    'radio-button-standard': {
        title: 'Standard Radio Buttons',
        component: RadioButtonStandardExample
    },
    'select-disabled': {
        title: 'Disabled Select Component',
        component: SelectDisabledExample
    },
    'select-forms': {
        title: 'Select using Angular forms',
        component: SelectFormsExample
    },
    'select-standard': {
        title: 'Standard Select Component',
        component: SelectStandardExample
    },
    'select-validation': {
        title: 'Component Validation',
        component: SelectValidationExample
    },
    'subnav-overview': {
        title: 'Subnav overview',
        component: SubnavOverviewExample
    },
    'table-filter': {
        title: 'Table filtering',
        component: TableFilterExample
    },
    'table-overview': {
        title: 'Table overview',
        component: TableOverviewExample
    },
    'table-sort': {
        title: 'Table sorting',
        component: TableSortExample
    },
    'tabs-horizontal': {
        title: 'Horizontal Tabs',
        component: TabsHorizontalExample
    },
    'tabs-vertical': {
        title: 'Vertical and Horizontal Tabs',
        component: TabsVerticalExample
    },
    'tile-overview': {
        title: 'Tile overview',
        component: TileOverviewExample
    },
    'typeform-survey-overview': {
        title: 'Typeform survey overview',
        component: TypeformSurveyOverviewExample
    },
};
var EXAMPLE_LIST = [
    AccordionOverviewExample,
    ButtonAnchorExample,
    ButtonDisabledExample,
    ButtonIconExample,
    ButtonLinkExample,
    ButtonPrimaryExample,
    ButtonSecondaryExample,
    ButtonSplitExample,
    CheckboxDisabledExample,
    CheckboxFormsExample,
    CheckboxStandardExample,
    ChipActionExample,
    ChipBasicExample,
    ChipRowExample,
    ChipSinglerowExample,
    DrawerBasicExample,
    DrawerMenu,
    DrawerOverlayExample,
    DrawerSideExample,
    IconOverviewExample,
    InputDisabledExample,
    InputPrefixExample,
    InputRequiredExample,
    InputSuffixExample,
    ListOverviewExample,
    DialogOverviewExampleDialog, ModalOverviewExample,
    NavbarOverviewExample,
    PaginationOverviewExample,
    PicklistSimpleExample,
    PicklistValuesetExample,
    PopoverDynamicExample,
    PopoverOverviewExample,
    PopoverPlacementExample,
    ProgressDotsExample,
    ProgressSpinnerExample,
    RadioButtonDisabledExample,
    RadioButtonFormsExample,
    RadioButtonStandardExample,
    SelectDisabledExample,
    SelectFormsExample,
    SelectStandardExample,
    SelectValidationExample,
    SubnavOverviewExample,
    TableFilterExample,
    TableOverviewExample,
    TableSortExample,
    TabsHorizontalExample,
    TabsVerticalExample,
    TileOverviewExample,
    TypeformSurveyOverviewExample,
];
var CashmereExampleModule = /** @class */ (function () {
    function CashmereExampleModule() {
    }
    return CashmereExampleModule;
}());
CashmereExampleModule.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"], args: [{
                declarations: EXAMPLE_LIST,
                entryComponents: EXAMPLE_LIST,
                imports: [
                    CashmereModule,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                    _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"]
                ]
            },] },
];


//# sourceMappingURL=cashmere-examples.js.map


/***/ }),

/***/ "./dist/cashmere/esm5/healthcatalyst-cashmere.js":
/*!*******************************************************!*\
  !*** ./dist/cashmere/esm5/healthcatalyst-cashmere.js ***!
  \*******************************************************/
/*! exports provided: AccordionComponent, AccordionModule, AccordionToolbarComponent, AppSwitcherComponent, AppSwitcherModule, AppSwitcherService, BreadcrumbsComponent, BreadcrumbsModule, AnchorComponent, ButtonComponent, ButtonModule, ButtonItemDirective, SplitButtonComponent, SplitButtonClickEvent, CheckboxComponent, CheckboxChangeEvent, CheckboxModule, HcCheckboxRequiredValidatorDirective, ChipComponent, ChipModule, ChipRowComponent, Drawer, DrawerPromiseResult, DrawerModule, DrawerContainer, DrawerToolbar, MenuDrawer, DrawerItem, IconComponent, IconModule, HcFormFieldComponent, InputDirective, InputModule, HcErrorComponent, HcPrefixDirective, HcSuffixDirective, HcLabelComponent, LabelComponent, LabelModule, ListComponent, ListModule, ListItemComponent, ListAvatarDirective, ListIconDirective, ListLineDirective, ActiveModal, ModalComponent, ModalModule, ModalService, HcModal, ModalBodyComponent, ModalFooterComponent, ModalHeaderComponent, ModalOptions, ModalOverlayComponent, ModalWindowComponent, NavbarComponent, NavbarModule, NavbarIconComponent, NavbarLinkComponent, NavbarMobileMenuComponent, PaginationComponent, PaginationModule, EllipsisPipe, PipesModule, PicklistComponent, PicklistModule, PicklistRemoteQueryOptions, PopoverDirective, PopoverModule, PopoverContentComponent, ProgressDotsComponent, ProgressIndicatorsModule, ProgressSpinnerComponent, RadioButtonComponent, RadioGroupDirective, RadioButtonChangeEvent, RadioButtonModule, SelectComponent, SelectModule, SortModule, HcSortHeader, HcSortHeaderIntl, HcSort, hcSortAnimations, SubnavComponent, SubnavModule, SubnavRightDirective, TableModule, HcCellDef, HcHeaderCellDef, HcFooterCellDef, HcColumnDef, HcHeaderCell, HcFooterCell, HcCell, HcHeaderRowDef, HcFooterRowDef, HcRowDef, HcHeaderRow, HcFooterRow, HcRow, HcTable, HcTableDataSource, TabComponent, TabSetComponent, TabsModule, TileComponent, TileModule, TypeformSurveyComponent, TypeformSurveyModule, ɵb, ɵa, ɵd, ɵc, ɵn, ɵk, ɵl, ɵi, ɵj, ɵm, ɵg, ɵh, ɵf, ɵe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccordionComponent", function() { return AccordionComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccordionModule", function() { return AccordionModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccordionToolbarComponent", function() { return AccordionToolbarComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppSwitcherComponent", function() { return AppSwitcherComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppSwitcherModule", function() { return AppSwitcherModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppSwitcherService", function() { return AppSwitcherService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BreadcrumbsComponent", function() { return BreadcrumbsComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BreadcrumbsModule", function() { return BreadcrumbsModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AnchorComponent", function() { return AnchorComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ButtonComponent", function() { return ButtonComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ButtonModule", function() { return ButtonModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ButtonItemDirective", function() { return ButtonItemDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SplitButtonComponent", function() { return SplitButtonComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SplitButtonClickEvent", function() { return SplitButtonClickEvent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CheckboxComponent", function() { return CheckboxComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CheckboxChangeEvent", function() { return CheckboxChangeEvent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CheckboxModule", function() { return CheckboxModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HcCheckboxRequiredValidatorDirective", function() { return HcCheckboxRequiredValidatorDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChipComponent", function() { return ChipComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChipModule", function() { return ChipModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChipRowComponent", function() { return ChipRowComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Drawer", function() { return Drawer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DrawerPromiseResult", function() { return DrawerPromiseResult; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DrawerModule", function() { return DrawerModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DrawerContainer", function() { return DrawerContainer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DrawerToolbar", function() { return DrawerToolbar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuDrawer", function() { return MenuDrawer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DrawerItem", function() { return DrawerItem; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IconComponent", function() { return IconComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IconModule", function() { return IconModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HcFormFieldComponent", function() { return HcFormFieldComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InputDirective", function() { return InputDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InputModule", function() { return InputModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HcErrorComponent", function() { return HcErrorComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HcPrefixDirective", function() { return HcPrefixDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HcSuffixDirective", function() { return HcSuffixDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HcLabelComponent", function() { return HcLabelComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LabelComponent", function() { return LabelComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LabelModule", function() { return LabelModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListComponent", function() { return ListComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListModule", function() { return ListModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListItemComponent", function() { return ListItemComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListAvatarDirective", function() { return ListAvatarDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListIconDirective", function() { return ListIconDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListLineDirective", function() { return ListLineDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActiveModal", function() { return ActiveModal; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalComponent", function() { return ModalComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalModule", function() { return ModalModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalService", function() { return ModalService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HcModal", function() { return HcModal; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalBodyComponent", function() { return ModalBodyComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalFooterComponent", function() { return ModalFooterComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalHeaderComponent", function() { return ModalHeaderComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalOptions", function() { return ModalOptions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalOverlayComponent", function() { return ModalOverlayComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalWindowComponent", function() { return ModalWindowComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarModule", function() { return NavbarModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarIconComponent", function() { return NavbarIconComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarLinkComponent", function() { return NavbarLinkComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarMobileMenuComponent", function() { return NavbarMobileMenuComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaginationComponent", function() { return PaginationComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaginationModule", function() { return PaginationModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EllipsisPipe", function() { return EllipsisPipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PipesModule", function() { return PipesModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PicklistComponent", function() { return PicklistComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PicklistModule", function() { return PicklistModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PicklistRemoteQueryOptions", function() { return PicklistRemoteQueryOptions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PopoverDirective", function() { return PopoverDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PopoverModule", function() { return PopoverModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PopoverContentComponent", function() { return PopoverContentComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProgressDotsComponent", function() { return ProgressDotsComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProgressIndicatorsModule", function() { return ProgressIndicatorsModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProgressSpinnerComponent", function() { return ProgressSpinnerComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RadioButtonComponent", function() { return RadioButtonComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RadioGroupDirective", function() { return RadioGroupDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RadioButtonChangeEvent", function() { return RadioButtonChangeEvent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RadioButtonModule", function() { return RadioButtonModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SelectComponent", function() { return SelectComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SelectModule", function() { return SelectModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SortModule", function() { return SortModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HcSortHeader", function() { return HcSortHeader; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HcSortHeaderIntl", function() { return HcSortHeaderIntl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HcSort", function() { return HcSort; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hcSortAnimations", function() { return hcSortAnimations; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SubnavComponent", function() { return SubnavComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SubnavModule", function() { return SubnavModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SubnavRightDirective", function() { return SubnavRightDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TableModule", function() { return TableModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HcCellDef", function() { return HcCellDef; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HcHeaderCellDef", function() { return HcHeaderCellDef; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HcFooterCellDef", function() { return HcFooterCellDef; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HcColumnDef", function() { return HcColumnDef; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HcHeaderCell", function() { return HcHeaderCell; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HcFooterCell", function() { return HcFooterCell; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HcCell", function() { return HcCell; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HcHeaderRowDef", function() { return HcHeaderRowDef; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HcFooterRowDef", function() { return HcFooterRowDef; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HcRowDef", function() { return HcRowDef; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HcHeaderRow", function() { return HcHeaderRow; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HcFooterRow", function() { return HcFooterRow; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HcRow", function() { return HcRow; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HcTable", function() { return HcTable; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HcTableDataSource", function() { return HcTableDataSource; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TabComponent", function() { return TabComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TabSetComponent", function() { return TabSetComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TabsModule", function() { return TabsModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TileComponent", function() { return TileComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TileModule", function() { return TileModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TypeformSurveyComponent", function() { return TypeformSurveyComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TypeformSurveyModule", function() { return TypeformSurveyModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵb", function() { return HC_CHECKBOX_REQUIRED_VALIDATOR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵa", function() { return hcCheckboxValueAccessor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵd", function() { return PicklistPaneComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵc", function() { return PicklistComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵn", function() { return PicklistActionService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵk", function() { return PicklistFilterLocalService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵl", function() { return PicklistFilterRemoteService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵi", function() { return PicklistFilterService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵj", function() { return PicklistStateService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵm", function() { return PicklistValuesetMovingService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵg", function() { return PicklistService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵh", function() { return WorkTrackerService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵf", function() { return HC_SORT_HEADER_INTL_PROVIDER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵe", function() { return HC_SORT_HEADER_INTL_PROVIDER_FACTORY; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm5/animations.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var popper_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! popper.js */ "./node_modules/popper.js/dist/esm/popper.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/cdk/coercion */ "./node_modules/@angular/cdk/esm5/coercion.es5.js");
/* harmony import */ var _angular_cdk_table__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/cdk/table */ "./node_modules/@angular/cdk/esm5/table.es5.js");
/* harmony import */ var _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/cdk/bidi */ "./node_modules/@angular/cdk/esm5/bidi.es5.js");














function parseBooleanAttribute(value) {
    return value != null && value.toString() !== 'false';
}
var AccordionComponent = /** @class */ (function () {
    function AccordionComponent() {
        this._animationDisabled = false;
        this._currentlyAnimating = false;
        this._hideToolbar = false;
        this._toolbarTrigger = true;
        this.__isOpen = false;
        this.triggerAlign = 'left';
        this.opened = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.openStart = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.closed = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.closeStart = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this._hostClass = true;
    }
    Object.defineProperty(AccordionComponent.prototype, "toolbarTrigger", {
        get: function () {
            return this._toolbarTrigger;
        },
        set: function (doTrigger) {
            this._toolbarTrigger = parseBooleanAttribute(doTrigger);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AccordionComponent.prototype, "hideToolbar", {
        get: function () {
            return this._hideToolbar;
        },
        set: function (hide) {
            this._hideToolbar = parseBooleanAttribute(hide);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AccordionComponent.prototype, "open", {
        get: function () {
            return this._isOpen;
        },
        set: function (opened) {
            this.toggle(parseBooleanAttribute(opened));
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AccordionComponent.prototype, "_isOpen", {
        get: function () {
            return this.__isOpen;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AccordionComponent.prototype, "_alignment", {
        get: function () {
            return this.triggerAlign === 'right' ? 'hc-align-right' : '';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AccordionComponent.prototype, "_pointer", {
        get: function () {
            return this.toolbarTrigger === true ? 'hc-toolbar-pointer' : '';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AccordionComponent.prototype, "_openState", {
        get: function () {
            if (this.__isOpen) {
                return this._animationDisabled ? 'open-instant' : 'open';
            }
            return 'void';
        },
        enumerable: true,
        configurable: true
    });
    AccordionComponent.prototype._animationStart = function (event) {
        this._currentlyAnimating = true;
        var fromState = event.fromState, toState = event.toState;
        if (fromState === 'void' && toState === 'open') {
            this.openStart.emit();
        }
        else if (fromState === 'open' && toState === 'void') {
            this.closeStart.emit();
        }
    };
    AccordionComponent.prototype._animationEnd = function (event) {
        var fromState = event.fromState, toState = event.toState;
        if (fromState === 'void' && toState === 'open') {
            this.opened.emit();
        }
        else if (fromState === 'open' && toState === 'void') {
            this.closed.emit();
        }
        this._currentlyAnimating = false;
    };
    Object.defineProperty(AccordionComponent.prototype, "_isOpened", {
        get: function () {
            return this.__isOpen && !this._currentlyAnimating;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AccordionComponent.prototype, "_isOpening", {
        get: function () {
            return this.__isOpen && this._currentlyAnimating;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AccordionComponent.prototype, "_isClosed", {
        get: function () {
            return !this.__isOpen && !this._currentlyAnimating;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AccordionComponent.prototype, "_isClosing", {
        get: function () {
            return !this.__isOpen && this._currentlyAnimating;
        },
        enumerable: true,
        configurable: true
    });
    AccordionComponent.prototype.ngAfterContentInit = function () {
        this._animationDisabled = false;
    };
    AccordionComponent.prototype._triggerClick = function (event, toolbarClick) {
        if ((toolbarClick && this.toolbarTrigger) || !toolbarClick) {
            event.stopPropagation();
            this.toggle();
        }
    };
    AccordionComponent.prototype.toggleOpen = function () {
        return this.toggle(true);
    };
    AccordionComponent.prototype.toggleClose = function () {
        return this.toggle(false);
    };
    AccordionComponent.prototype.toggle = function (isOpen) {
        if (isOpen === void 0) { isOpen = !this.open; }
        if (!this._currentlyAnimating) {
            this.__isOpen = isOpen;
        }
    };
    return AccordionComponent;
}());
AccordionComponent.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"], args: [{
                selector: 'hc-accordion',
                template: "<div class=\"hc-toolbar-wrapper\" [ngClass]=\"[_pointer, _alignment]\" (click)=\"_triggerClick($event, true)\" *ngIf=\"!hideToolbar\">\n    <button type=\"button\" class=\"hc-accordion-trigger\" (click)=\"_triggerClick($event, false)\"></button>\n    <ng-content select=\"hc-accordion-toolbar\"></ng-content>\n</div>\n<div class=\"hc-accordion-collapse\"\n     [@openState]=\"_openState\"\n     (@openState.start)=\"_animationStart($event)\"\n     (@openState.done)=\"_animationEnd($event)\">\n    <div class=\"hc-accordion-content\">\n        <ng-content></ng-content>\n    </div>\n</div>\n",
                styles: [".hc-accordion{display:block;background:0 0;color:currentColor;-webkit-box-sizing:border-box;box-sizing:border-box}.hc-accordion .hc-toolbar-wrapper{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;-ms-flex-wrap:nowrap;flex-wrap:nowrap}.hc-accordion .hc-toolbar-wrapper.hc-align-right .hc-accordion-trigger{-webkit-box-ordinal-group:2;-ms-flex-order:1;order:1;margin-left:auto}.hc-accordion .hc-toolbar-wrapper.hc-align-right .hc-accordion-toolbar{-webkit-box-ordinal-group:1;-ms-flex-order:0;order:0}.hc-accordion .hc-toolbar-wrapper.hc-toolbar-pointer{cursor:pointer}.hc-accordion .hc-accordion-trigger{position:relative;cursor:pointer}.hc-accordion .hc-accordion-trigger::after{display:block;-webkit-transform:translate(-50%,2px) rotate(46deg);transform:translate(-50%,2px) rotate(46deg);border-top:2px solid;border-left:2px solid;left:50%;content:'';width:8px;height:8px;position:relative}.hc-accordion .hc-accordion-collapse{display:block;overflow:hidden}.hc-accordion.hc-accordion-closed .hc-accordion-trigger::after,.hc-accordion.hc-accordion-closing .hc-accordion-trigger::after{-webkit-transform:translate(-50%,-2px) rotate(-134deg);transform:translate(-50%,-2px) rotate(-134deg)}.hc-accordion-toolbar{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;-ms-flex-wrap:nowrap;flex-wrap:nowrap;white-space:nowrap;-webkit-box-sizing:border-box;box-sizing:border-box;-webkit-box-align:center;-ms-flex-align:center;align-items:center;width:100%;padding:0 10px}.hc-accordion-content{padding:12px;outline:0}.hc-accordion-trigger{height:50px;width:50px;outline:0;background:0 0;border:none;padding:0;color:#00bfff}.hc-accordion-trigger::after{-webkit-transition:-webkit-transform .5s cubic-bezier(.25,.8,.25,1);transition:-webkit-transform .5s cubic-bezier(.25,.8,.25,1);transition:transform .5s cubic-bezier(.25,.8,.25,1);transition:transform .5s cubic-bezier(.25,.8,.25,1),-webkit-transform .5s cubic-bezier(.25,.8,.25,1)}"],
                exportAs: 'hcAccordion',
                animations: [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["trigger"])('openState', [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["state"])('open, open-instant', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({
                            height: '*'
                        })),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["state"])('void', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({
                            height: '0px',
                            visibility: 'hidden'
                        })),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])('void => open-instant', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])('0ms')),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])('void <=> open', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])('400ms ease'))
                    ])
                ],
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None
            },] },
];
AccordionComponent.propDecorators = {
    "triggerAlign": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] },],
    "toolbarTrigger": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] },],
    "hideToolbar": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] },],
    "open": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] },],
    "opened": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"] },],
    "openStart": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"] },],
    "closed": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"] },],
    "closeStart": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"] },],
    "_hostClass": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"], args: ['class.hc-accordion',] },],
    "_isOpened": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"], args: ['class.hc-accordion-opened',] },],
    "_isOpening": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"], args: ['class.hc-accordion-opening',] },],
    "_isClosed": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"], args: ['class.hc-accordion-closed',] },],
    "_isClosing": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"], args: ['class.hc-accordion-closing',] },],
};
var AccordionToolbarComponent = /** @class */ (function () {
    function AccordionToolbarComponent() {
        this._hostClass = true;
    }
    return AccordionToolbarComponent;
}());
AccordionToolbarComponent.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"], args: [{
                selector: 'hc-accordion-toolbar',
                template: '<ng-content></ng-content>',
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush
            },] },
];
AccordionToolbarComponent.propDecorators = {
    "_hostClass": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"], args: ['class.hc-accordion-toolbar',] },],
};
var AccordionModule = /** @class */ (function () {
    function AccordionModule() {
    }
    return AccordionModule;
}());
AccordionModule.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"], args: [{
                imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"]],
                declarations: [AccordionComponent, AccordionToolbarComponent],
                exports: [AccordionComponent, AccordionToolbarComponent]
            },] },
];
var AppSwitcherComponent = /** @class */ (function () {
    function AppSwitcherComponent(appSwitcherService) {
        this.appSwitcherService = appSwitcherService;
        this.brandIcon = '';
        this.brandBg = 'brand';
        this.ngUnsubscribe = new rxjs__WEBPACK_IMPORTED_MODULE_5__["Subject"]();
    }
    AppSwitcherComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.subscription = this.appSwitcherService
            .getApplications()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["takeUntil"])(this.ngUnsubscribe))
            .subscribe(function (response) {
            _this.applications = response.value;
        });
    };
    AppSwitcherComponent.prototype.ngOnDestroy = function () {
        this.ngUnsubscribe.next();
        this.ngUnsubscribe.complete();
    };
    AppSwitcherComponent.prototype.buttonOn = function () {
        this.brandBg = 'brand brandOn';
    };
    AppSwitcherComponent.prototype.buttonOff = function () {
        this.brandBg = 'brand';
    };
    return AppSwitcherComponent;
}());
AppSwitcherComponent.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"], args: [{
                selector: 'hc-app-switcher',
                template: "<div #brand\n     [popperTarget]=\"brand\"\n     [hcPopover]=\"appSwitcherContent\"\n     popperPlacement=\"bottom-start\"\n     [className]=\"brandBg\"\n     (popperOnShown)=\"buttonOn()\"\n     (popperOnHidden)=\"buttonOff()\">\n     <img src=\"{{brandIcon}}\">\n</div>\n<hc-popover-content #appSwitcherContent>\n    <div class=\"popover-content\">\n        <h4>Applications</h4>\n        <pre *ngIf=\"!applications\">loading applications...</pre>\n        <div class=\"apps\">\n            <div class=\"app\" *ngFor=\"let app of applications\">\n                <a class=\"thumbnail\" title=\"{{app.Description}}\" href=\"{{app.ServiceUrl}}\" target=\"_blank\">\n                    <img class=\"popover-icon img-responsive\" src={{app.Icon}}>\n                    <div class=\"title\">{{app?.FriendlyName | ellipsis:18}}</div>\n                </a>\n            </div>\n        </div>\n        <a class=\"all-apps-link\" href={{appSwitcherService.allApplicationsUri}} target=\"_blank\">View all my\n            applications</a>\n    </div>\n</hc-popover-content>\n",
                styles: [":host{height:100%;width:100%}.brand{cursor:pointer;-webkit-transition:background-color .25s ease;transition:background-color .25s ease}.popover-content{max-width:410px}.popover-content>h4{margin:10px 0;padding-bottom:5px;border-bottom:1px solid #ccc}.popover-content .all-apps-link{margin:10px 0;display:block;text-align:right;text-decoration:none;color:#00aeff}.popover-content .apps{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-flow:row wrap;flex-flow:row wrap;-webkit-box-pack:start;-ms-flex-pack:start;justify-content:flex-start}.popover-content .apps .app{-webkit-box-flex:0;-ms-flex:0 0 33%;flex:0 0 33%}.popover-content .apps .app>a{padding:10px;text-decoration:none}.popover-content .apps .app>a>img{width:100px}.popover-content .apps .app .title{text-align:center;color:#333;padding-top:8px;font-weight:600}"]
            },] },
];
AppSwitcherComponent.ctorParameters = function () { return [
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: ['IAppSwitcherService',] },] },
]; };
AppSwitcherComponent.propDecorators = {
    "brandIcon": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] },],
};
var PopoverContentComponent = /** @class */ (function () {
    function PopoverContentComponent(renderer) {
        this.renderer = renderer;
        this._popperOptions = ({
            disableAnimation: false,
            disableDefaultStyling: false,
            placement: 'auto',
            boundariesElement: '',
            trigger: 'hover',
            positionFixed: false,
            popperModifiers: {}
        });
        this._isMouseOver = false;
        this._onHidden = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this._displayType = 'none';
        this._opacity = 0;
    }
    PopoverContentComponent.prototype._onMouseOver = function () {
        this._isMouseOver = true;
    };
    PopoverContentComponent.prototype._showOnLeave = function () {
        this._isMouseOver = false;
        if (this._popperOptions.trigger !== 'hover') {
            return;
        }
        this._hide();
    };
    PopoverContentComponent.prototype._onDocumentResize = function () {
        this._update();
    };
    PopoverContentComponent.prototype.ngOnDestroy = function () {
        if (!this._popperInstance) {
            return;
        }
        ((this._popperInstance)).disableEventListeners();
        this._popperInstance.destroy();
    };
    PopoverContentComponent.prototype._show = function () {
        if (!this._referenceObject) {
            return;
        }
        var popperOptions = ({
            placement: this._popperOptions.placement,
            positionFixed: this._popperOptions.positionFixed,
            modifiers: {
                arrow: {
                    element: this._popperViewRef.nativeElement.querySelector('.arrow')
                }
            }
        });
        var boundariesElement = this._popperOptions.boundariesElement && document.querySelector(this._popperOptions.boundariesElement);
        if (popperOptions.modifiers && boundariesElement) {
            popperOptions.modifiers.preventOverflow = { boundariesElement: boundariesElement };
        }
        popperOptions.modifiers = Object.assign(popperOptions.modifiers, this._popperOptions.popperModifiers);
        this._popperInstance = new popper_js__WEBPACK_IMPORTED_MODULE_6__["default"](this._referenceObject, this._popperViewRef.nativeElement, popperOptions);
        ((this._popperInstance)).enableEventListeners();
        this._scheduleUpdate();
        this._toggleVisibility(true);
        this.globalResize = this.renderer.listen('document', 'resize', this._onDocumentResize.bind(this));
    };
    PopoverContentComponent.prototype._update = function () {
        if (this._popperInstance) {
            ((this._popperInstance)).update();
        }
    };
    PopoverContentComponent.prototype._scheduleUpdate = function () {
        if (this._popperInstance) {
            ((this._popperInstance)).scheduleUpdate();
        }
    };
    PopoverContentComponent.prototype._hide = function () {
        if (this._popperInstance) {
            this._popperInstance.destroy();
        }
        this._toggleVisibility(false);
        this._onHidden.emit();
    };
    PopoverContentComponent.prototype._toggleVisibility = function (state$$1) {
        if (!state$$1) {
            this._opacity = 0;
            this._displayType = 'none';
        }
        else {
            this._opacity = 1;
            this._displayType = 'block';
        }
    };
    PopoverContentComponent.prototype._clearGlobalResize = function () {
        if (this.globalResize && typeof this.globalResize === 'function') {
            this.globalResize();
        }
    };
    return PopoverContentComponent;
}());
PopoverContentComponent.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"], args: [{
                styles: [".popoverContainer{display:none;position:absolute;padding:8px 14px;background-color:#fff;background-clip:padding-box;border:1px solid #fff;border-radius:6px;-webkit-box-shadow:0 2px 10px #a1a1a1;box-shadow:0 2px 10px #a1a1a1;z-index:1900}.popoverContainer.animation{-webkit-animation:150ms ease-out fadein;animation:150ms ease-out fadein}.popoverContainer .arrow{width:0;height:0;border-style:solid;position:absolute;margin:10px}.popoverContainer[x-placement^=bottom],.popoverContainer[x-placement^=left],.popoverContainer[x-placement^=right],.popoverContainer[x-placement^=top]{display:block}.popoverContainer[x-placement^=top]{margin-bottom:5px}.popoverContainer[x-placement^=top] .arrow{border-width:10px 10px 0;border-color:#fff transparent transparent;bottom:-10px;left:calc(50% - $popover-arrow-width);margin-top:0;margin-bottom:0}.popoverContainer[x-placement^=bottom]{margin-top:10px}.popoverContainer[x-placement^=bottom] .arrow{border-width:0 10px 10px;border-color:transparent transparent #fff;top:-10px;left:calc(50% - $popover-arrow-width);margin-top:0;margin-bottom:0}.popoverContainer[x-placement^=right]{margin-left:10px}.popoverContainer[x-placement^=right] .arrow{border-width:10px 10px 10px 0;border-color:transparent #fff transparent transparent;left:-10px;top:calc(50% - $popover-arrow-width);margin-left:0;margin-right:0}.popoverContainer[x-placement^=left]{margin-right:10px}.popoverContainer[x-placement^=left] .arrow{border-width:10px 0 10px 10px;border-color:transparent transparent transparent #fff;right:-10px;top:calc(50% - $popover-arrow-width);margin-left:0;margin-right:0}@-webkit-keyframes fadein{0%{display:none;opacity:0}1%{display:block;opacity:0}100%{display:block;opacity:1}}@keyframes fadein{0%{display:none;opacity:0}1%{display:block;opacity:0}100%{display:block;opacity:1}}:host::ng-deep ul.list-options{padding-left:0;margin:0}:host::ng-deep ul.list-options>li:not(:last-child){border-bottom:1px solid #d7dde4}:host::ng-deep ul.list-options>li{display:block;padding:10px 0;min-width:150px;list-style:none}:host::ng-deep ul.list-options>li button,:host::ng-deep ul.list-options>li>a{text-decoration:none;background-color:#fff;color:#00aeff;font-family:\"Open Sans\",\"Helvetica Neue\",Helvetica,Arial,sans-serif;padding:0;min-width:150px;text-align:left;-webkit-box-pack:left;-ms-flex-pack:left;justify-content:left;border:none;cursor:pointer;font-size:inherit}"],
                selector: 'hc-popover-content',
                template: "<div #popperViewRef\n     [ngClass]=\"{'popoverContainer': !_popperOptions.disableDefaultStyling, 'animation': !_popperOptions.disableAnimation}\"\n     [style.display]=\"_displayType\"\n     [style.opacity]=\"_opacity\"\n     role=\"popper\">\n    <div class=\"inner\">\n        <ng-content></ng-content>\n        {{ _text }}\n    </div>\n    <div class=\"arrow\"></div>\n</div>\n"
            },] },
];
PopoverContentComponent.ctorParameters = function () { return [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], },
]; };
PopoverContentComponent.propDecorators = {
    "_popperViewRef": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"], args: ['popperViewRef',] },],
    "_onMouseOver": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"], args: ['mouseover',] },],
    "_showOnLeave": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"], args: ['mouseleave',] },],
};
var PopoverDirective = /** @class */ (function () {
    function PopoverDirective(viewContainerRef, changeDetectorRef, resolver, renderer) {
        this.viewContainerRef = viewContainerRef;
        this.changeDetectorRef = changeDetectorRef;
        this.resolver = resolver;
        this.renderer = renderer;
        this._popoverContentComponentClass = PopoverContentComponent;
        this._shown = false;
        this._subscriptions = [];
        this.popperDelay = 0;
        this.popperTimeout = 0;
        this.popperTimeoutAfterShow = 0;
        this.popperBoundaries = 'body';
        this.popperCloseOnClickOutside = true;
        this.popperOnShown = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.popperOnHidden = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        PopoverDirective.baseOptions = {
            disableAnimation: false,
            disableDefaultStyling: false,
            placement: undefined,
            trigger: 'click',
            positionFixed: true,
            hideOnClickOutside: true,
            hideOnScroll: false
        };
    }
    PopoverDirective._assignDefined = function (target) {
        var sources = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            sources[_i - 1] = arguments[_i];
        }
        try {
            for (var sources_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__values"])(sources), sources_1_1 = sources_1.next(); !sources_1_1.done; sources_1_1 = sources_1.next()) {
                var source = sources_1_1.value;
                try {
                    for (var _a = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__values"])(Object.keys(source)), _b = _a.next(); !_b.done; _b = _a.next()) {
                        var key = _b.value;
                        var val = source[key];
                        if (val !== undefined) {
                            target[key] = val;
                        }
                    }
                }
                catch (e_1_1) { e_1 = { error: e_1_1 }; }
                finally {
                    try {
                        if (_b && !_b.done && (_c = _a.return)) _c.call(_a);
                    }
                    finally { if (e_1) throw e_1.error; }
                }
            }
        }
        catch (e_2_1) { e_2 = { error: e_2_1 }; }
        finally {
            try {
                if (sources_1_1 && !sources_1_1.done && (_d = sources_1.return)) _d.call(sources_1);
            }
            finally { if (e_2) throw e_2.error; }
        }
        return target;
        var e_2, _d, e_1, _c;
    };
    PopoverDirective.prototype._showOrHideOnClick = function ($event) {
        if (this.popperDisabled || this.popperTrigger !== 'click') {
            return;
        }
        this.toggle();
    };
    PopoverDirective.prototype._showOrHideOnMouseOver = function ($event) {
        if (this.popperDisabled || this.popperTrigger !== 'mousedown') {
            return;
        }
        this.toggle();
    };
    PopoverDirective.prototype._showOnHover = function ($event) {
        if (this.popperDisabled || this.popperTrigger !== 'hover') {
            return;
        }
        this._scheduledShow();
    };
    PopoverDirective.prototype._hideOnClickOutsideHandler = function ($event) {
        if (this.popperDisabled || !this.popperCloseOnClickOutside) {
            return;
        }
        this._scheduledHide($event, this.popperTimeout);
    };
    PopoverDirective.prototype._hideOnScrollHandler = function ($event) {
        if (this.popperDisabled || !this.popperHideOnScroll) {
            return;
        }
        this._scheduledHide($event, this.popperTimeout);
    };
    PopoverDirective.prototype._hideOnLeave = function ($event) {
        if (this.popperDisabled || this.popperTrigger !== 'hover') {
            return;
        }
        this._scheduledHide(null, this.popperTimeout);
    };
    PopoverDirective.prototype.ngOnInit = function () {
        if (typeof this.content === 'string') {
            var text = this.content;
            this.content = this._constructContent();
            this.content._text = text;
        }
        var popperRef = (this.content);
        popperRef._referenceObject = this._getRefElement();
        this._setContentProperties(popperRef);
        this._setDefaults();
        if (this.popperShowOnStart) {
            this._scheduledShow();
        }
    };
    PopoverDirective.prototype.ngOnChanges = function (changes) {
        if (changes['popperDisabled']) {
            if (changes['popperDisabled'].currentValue) {
                this.hide();
            }
        }
    };
    PopoverDirective.prototype.ngOnDestroy = function () {
        this._subscriptions.forEach(function (sub) { return sub.unsubscribe && sub.unsubscribe(); });
        this._subscriptions.length = 0;
        this._clearEventListeners();
    };
    PopoverDirective.prototype.toggle = function () {
        this._shown ? this._scheduledHide(null, this.popperTimeout) : this._scheduledShow();
    };
    PopoverDirective.prototype.show = function () {
        if (this._shown) {
            this._overrideHideTimeout();
            return;
        }
        this._shown = true;
        var popperRef = (this.content);
        var element = this._getRefElement();
        if (popperRef._referenceObject !== element) {
            popperRef._referenceObject = element;
        }
        this._setContentProperties(popperRef);
        popperRef._show();
        this.popperOnShown.emit(this);
        if (this.popperTimeoutAfterShow > 0) {
            this._scheduledHide(null, this.popperTimeoutAfterShow);
        }
        this._globalClick = this.renderer.listen('document', 'click', this._hideOnClickOutsideHandler.bind(this));
        this._globalScroll = this.renderer.listen(this._getScrollParent(this._getRefElement()), 'scroll', this._hideOnScrollHandler.bind(this));
    };
    PopoverDirective.prototype.hide = function () {
        if (!this._shown) {
            this._overrideShowTimeout();
            return;
        }
        this._shown = false;
        if (this._popoverContentComponentRef) {
            this._popoverContentComponentRef.instance._hide();
        }
        else {
            ((this.content))._hide();
        }
        this.popperOnHidden.emit(this);
        this._clearEventListeners();
    };
    PopoverDirective.prototype._scheduledShow = function (delay) {
        var _this = this;
        if (delay === void 0) { delay = this.popperDelay; }
        this._overrideHideTimeout();
        this._scheduledShowTimeout = setTimeout(function () {
            _this.show();
            _this._applyChanges();
        }, delay);
    };
    PopoverDirective.prototype._scheduledHide = function ($event, delay) {
        var _this = this;
        if ($event === void 0) { $event = null; }
        if (delay === void 0) { delay = 0; }
        this._overrideShowTimeout();
        this._scheduledHideTimeout = setTimeout(function () {
            var toElement = $event ? $event.toElement : null;
            var PopoverContentComponentView = ((_this.content))._popperViewRef
                ? ((_this.content))._popperViewRef.nativeElement
                : false;
            if (!PopoverContentComponentView ||
                PopoverContentComponentView === toElement ||
                PopoverContentComponentView.contains(toElement) ||
                ((_this.content))._isMouseOver) {
                return;
            }
            _this.hide();
            _this._applyChanges();
        }, delay);
    };
    PopoverDirective.prototype._getRefElement = function () {
        return this.popperTarget || this.viewContainerRef.element.nativeElement;
    };
    PopoverDirective.prototype._applyChanges = function () {
        this.changeDetectorRef.markForCheck();
        if (this.popperForceDetection) {
            this.changeDetectorRef.detectChanges();
        }
    };
    PopoverDirective.prototype._setDefaults = function () {
        this.popperTrigger = typeof this.popperTrigger === 'undefined' ? PopoverDirective.baseOptions.trigger : this.popperTrigger;
        this.popperHideOnScroll =
            typeof this.popperHideOnScroll === 'undefined' ? PopoverDirective.baseOptions.hideOnScroll : this.popperHideOnScroll;
    };
    PopoverDirective.prototype._clearEventListeners = function () {
        if (this._globalClick && typeof this._globalClick === 'function') {
            this._globalClick();
        }
        if (this._globalScroll && typeof this._globalScroll === 'function') {
            this._globalScroll();
        }
    };
    PopoverDirective.prototype._overrideShowTimeout = function () {
        if (this._scheduledShowTimeout) {
            clearTimeout(this._scheduledShowTimeout);
            this._scheduledHideTimeout = 0;
        }
    };
    PopoverDirective.prototype._overrideHideTimeout = function () {
        if (this._scheduledHideTimeout) {
            clearTimeout(this._scheduledHideTimeout);
            this._scheduledHideTimeout = 0;
        }
    };
    PopoverDirective.prototype._constructContent = function () {
        var factory = this.resolver.resolveComponentFactory(this._popoverContentComponentClass);
        this._popoverContentComponentRef = this.viewContainerRef.createComponent(factory);
        return (this._popoverContentComponentRef.instance);
    };
    PopoverDirective.prototype._setContentProperties = function (popperRef) {
        popperRef._popperOptions = PopoverDirective._assignDefined(popperRef._popperOptions, PopoverDirective.baseOptions, {
            disableAnimation: this.popperDisableAnimation,
            disableDefaultStyling: this.popperDisableStyle,
            placement: this.popperPlacement,
            boundariesElement: this.popperBoundaries,
            trigger: this.popperTrigger,
            positionFixed: this.popperPositionFixed,
            popperModifiers: this.popperModifiers
        });
        this._subscriptions.push(popperRef._onHidden.subscribe(this.hide.bind(this)));
    };
    PopoverDirective.prototype._getScrollParent = function (node) {
        var isElement = node instanceof HTMLElement;
        var overflowY = isElement && window.getComputedStyle(node).overflowY;
        var isScrollable = overflowY !== 'visible' && overflowY !== 'hidden';
        if (!node) {
            return null;
        }
        else if (isScrollable && node.scrollHeight >= node.clientHeight) {
            return node;
        }
        return this._getScrollParent((node.parentNode)) || document;
    };
    return PopoverDirective;
}());
PopoverDirective.baseOptions = ({
    placement: 'auto',
    hideOnClickOutside: true,
    hideOnScroll: false,
    showTrigger: 'hover'
});
PopoverDirective.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"], args: [{
                selector: '[hcPopover]',
                exportAs: 'hcPopover'
            },] },
];
PopoverDirective.ctorParameters = function () { return [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ComponentFactoryResolver"], },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], },
]; };
PopoverDirective.propDecorators = {
    "content": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['hcPopover',] },],
    "popperDisabled": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] },],
    "popperPlacement": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] },],
    "popperTrigger": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] },],
    "popperTarget": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] },],
    "popperDelay": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] },],
    "popperTimeout": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] },],
    "popperTimeoutAfterShow": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] },],
    "popperBoundaries": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] },],
    "popperShowOnStart": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] },],
    "popperCloseOnClickOutside": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] },],
    "popperHideOnScroll": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] },],
    "popperPositionFixed": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] },],
    "popperModifiers": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] },],
    "popperDisableStyle": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] },],
    "popperDisableAnimation": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] },],
    "popperForceDetection": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] },],
    "popperOnShown": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"] },],
    "popperOnHidden": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"] },],
    "_assignDefined": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"], args: ['touchstart', ['$event'],] },],
    "_showOrHideOnClick": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"], args: ['click', ['$event'],] },],
    "_showOrHideOnMouseOver": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"], args: ['touchstart', ['$event'],] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"], args: ['mousedown', ['$event'],] },],
    "_showOnHover": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"], args: ['mouseenter', ['$event'],] },],
    "_hideOnLeave": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"], args: ['touchend', ['$event'],] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"], args: ['touchcancel', ['$event'],] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"], args: ['mouseleave', ['$event'],] },],
};
var PopoverModule = /** @class */ (function () {
    function PopoverModule() {
    }
    return PopoverModule;
}());
PopoverModule.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"], args: [{
                imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"]],
                declarations: [PopoverDirective, PopoverContentComponent],
                exports: [PopoverDirective, PopoverContentComponent],
                entryComponents: [PopoverContentComponent]
            },] },
];
var AppSwitcherService = /** @class */ (function () {
    function AppSwitcherService(http, config) {
        this.http = http;
        this.config = config;
        this.allApplicationsUri = this.config.discoveryServiceUri + "/apps";
    }
    AppSwitcherService.prototype.getApplications = function () {
        var url = this.config.discoveryServiceUri + "/v1/Services/?$filter=DiscoveryType eq 'Application' and IsHidden eq false&$top=12";
        return (this.http.get(url));
    };
    return AppSwitcherService;
}());
AppSwitcherService.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"] },
];
AppSwitcherService.ctorParameters = function () { return [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClient"], },
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: ['IAppSwitcherConfig',] },] },
]; };
var EllipsisPipe = /** @class */ (function () {
    function EllipsisPipe() {
    }
    EllipsisPipe.prototype.transform = function (val, args) {
        if (args === undefined) {
            return val;
        }
        if (!!val && val.length > args) {
            return val.substring(0, args) + '...';
        }
        else {
            return val;
        }
    };
    return EllipsisPipe;
}());
EllipsisPipe.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"], args: [{
                name: 'ellipsis'
            },] },
];
var PipesModule = /** @class */ (function () {
    function PipesModule() {
    }
    return PipesModule;
}());
PipesModule.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"], args: [{
                declarations: [EllipsisPipe],
                exports: [EllipsisPipe]
            },] },
];
var AppSwitcherModule = /** @class */ (function () {
    function AppSwitcherModule() {
    }
    AppSwitcherModule.forRoot = function (config) {
        return {
            ngModule: AppSwitcherModule,
            providers: [
                {
                    provide: 'IAppSwitcherConfig',
                    useValue: config
                }
            ]
        };
    };
    return AppSwitcherModule;
}());
AppSwitcherModule.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"], args: [{
                imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"], PopoverModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClientModule"], PipesModule],
                declarations: [AppSwitcherComponent],
                exports: [AppSwitcherComponent],
                providers: [
                    AppSwitcherService,
                    {
                        provide: 'IAppSwitcherService',
                        useClass: AppSwitcherService
                    }
                ]
            },] },
];
var BreadcrumbsComponent = /** @class */ (function () {
    function BreadcrumbsComponent(activatedRoute, router) {
        this.activatedRoute = activatedRoute;
        this.router = router;
        this._breadcrumbs = [];
        this._backURL = '';
        this._backShow = 'none';
        this._locationLabel = '';
    }
    BreadcrumbsComponent.prototype.ngOnInit = function () {
        var _this = this;
        var root = this.activatedRoute.root;
        this._breadcrumbs = this.getBreadcrumbs(root);
        this._routerSubscription = this.router.events.subscribe(function (event) {
            if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_8__["NavigationEnd"]) {
                _this.setBreadcrumbs();
            }
        });
        this.setBreadcrumbs();
    };
    BreadcrumbsComponent.prototype.setBreadcrumbs = function () {
        var root = this.activatedRoute.root;
        this._breadcrumbs = this.getBreadcrumbs(root);
        if (this._breadcrumbs.length > 1) {
            this._backURL = this._breadcrumbs[this._breadcrumbs.length - 2].url;
            this._backShow = 'inline';
            this._locationLabel = '';
        }
        else if (this._breadcrumbs.length === 1) {
            this._backShow = 'none';
            this._locationLabel = this._breadcrumbs[this._breadcrumbs.length - 1].label;
        }
        else {
            this._backShow = 'none';
            this._locationLabel = '';
        }
    };
    BreadcrumbsComponent.prototype.getBreadcrumbs = function (route, url, breadcrumbs) {
        if (url === void 0) { url = ''; }
        if (breadcrumbs === void 0) { breadcrumbs = []; }
        var ROUTE_DATA_BREADCRUMB = 'breadcrumb';
        var children = route.children;
        if (children.length === 0) {
            return breadcrumbs;
        }
        try {
            for (var children_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__values"])(children), children_1_1 = children_1.next(); !children_1_1.done; children_1_1 = children_1.next()) {
                var child = children_1_1.value;
                if (child.outlet !== _angular_router__WEBPACK_IMPORTED_MODULE_8__["PRIMARY_OUTLET"]) {
                    continue;
                }
                if (!child.snapshot.data.hasOwnProperty(ROUTE_DATA_BREADCRUMB)) {
                    return this.getBreadcrumbs(child, url, breadcrumbs);
                }
                var routeURL = child.snapshot.url.map(function (segment) { return segment.path; }).join('/');
                url += "/" + routeURL;
                var parent = this.activatedRoute.parent;
                var fullURL = '';
                if (parent !== null) {
                    fullURL += '/' + parent.snapshot.url.map(function (segment) { return segment.path; }).join('/');
                }
                fullURL += "" + url;
                var breadcrumb = {
                    label: child.snapshot.data[ROUTE_DATA_BREADCRUMB],
                    params: child.snapshot.params,
                    url: fullURL
                };
                breadcrumbs.push(breadcrumb);
                return this.getBreadcrumbs(child, url, breadcrumbs);
            }
        }
        catch (e_3_1) { e_3 = { error: e_3_1 }; }
        finally {
            try {
                if (children_1_1 && !children_1_1.done && (_a = children_1.return)) _a.call(children_1);
            }
            finally { if (e_3) throw e_3.error; }
        }
        return breadcrumbs;
        var e_3, _a;
    };
    BreadcrumbsComponent.prototype.ngOnDestroy = function () {
        this._routerSubscription.unsubscribe();
    };
    return BreadcrumbsComponent;
}());
BreadcrumbsComponent.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"], args: [{
                selector: 'hc-breadcrumbs',
                template: "<ol class=\"breadcrumb\">\n    <li *ngFor=\"let breadcrumb of _breadcrumbs; let last = last\" class=\"breadcrumb-item\">\n        <a *ngIf=\"!last\" [routerLink]=\"[breadcrumb.url, breadcrumb.params]\" [innerText]=\"breadcrumb.label\"></a>\n        <span *ngIf=\"last\" [innerText]=\"breadcrumb.label\"></span>\n        <i class=\"fa fa-chevron-right breadcrumb-arrow\"></i>\n    </li>\n</ol>\n<div class=\"breadcrumb-responsive-container\">\n    <a [style.display]=\"_backShow\" class=\"breadcrumb-back-button\" [routerLink]=\"_backURL\">\n        <i class=\"fa fa-chevron-left\"></i>\n        <span>&nbsp;Back</span>\n    </a>\n    <span [innerText]=\"_locationLabel\"></span>\n</div>\n"
            },] },
];
BreadcrumbsComponent.ctorParameters = function () { return [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_8__["ActivatedRoute"], },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"], },
]; };
var IconComponent = /** @class */ (function () {
    function IconComponent(elementRef, ariaHidden) {
        this.elementRef = elementRef;
        this._fontIcon = '';
        this._fontSet = '';
        this._previousFontIcon = '';
        this._previousFontSet = '';
        this._hostClass = true;
        if (!ariaHidden) {
            elementRef.nativeElement.setAttribute('aria-hidden', 'true');
        }
    }
    Object.defineProperty(IconComponent.prototype, "fontIcon", {
        get: function () {
            return this._fontIcon;
        },
        set: function (icon) {
            this._fontIcon = this._cleanupFontValue(icon);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(IconComponent.prototype, "fontSet", {
        get: function () {
            return this._fontSet;
        },
        set: function (fontSet) {
            this._fontSet = this._cleanupFontValue(fontSet);
        },
        enumerable: true,
        configurable: true
    });
    IconComponent.prototype.ngOnChanges = function (changes) {
        this._updateFontIcon();
    };
    IconComponent.prototype._updateFontIcon = function () {
        var element = this.elementRef.nativeElement;
        if (this._previousFontIcon !== this._fontIcon) {
            if (this._previousFontIcon) {
                element.classList.remove(this._previousFontIcon);
            }
            if (this._fontIcon) {
                element.classList.add(this._fontIcon);
                this._previousFontIcon = this._fontIcon;
            }
        }
        if (this._previousFontSet !== this._fontSet) {
            if (this._previousFontSet) {
                element.classList.remove(this._previousFontSet);
            }
            if (this._fontSet) {
                element.classList.add(this._fontSet);
                this._previousFontSet = this._fontSet;
            }
        }
    };
    IconComponent.prototype._cleanupFontValue = function (fontValue) {
        return (fontValue || '').trim().split(' ')[0];
    };
    return IconComponent;
}());
IconComponent.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"], args: [{
                selector: 'hc-icon',
                template: '<ng-content></ng-content>',
                styles: ["[icon-sm]{font-size:14px!important;height:14px!important;width:14px!important}[icon-md]{font-size:20px!important;height:20px!important;width:20px!important}[icon-lg]{font-size:36px!important;height:36px!important;width:36px!important}.hc-icon{background-repeat:no-repeat;display:inline-block;fill:currentColor;text-align:center;font-size:20px;height:20px;width:20px}"],
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None
            },] },
];
IconComponent.ctorParameters = function () { return [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], },
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Attribute"], args: ['aria-hidden',] },] },
]; };
IconComponent.propDecorators = {
    "_hostClass": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"], args: ['class.hc-icon',] },],
    "fontIcon": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] },],
    "fontSet": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] },],
};
var IconModule = /** @class */ (function () {
    function IconModule() {
    }
    return IconModule;
}());
IconModule.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"], args: [{
                declarations: [IconComponent],
                exports: [IconComponent]
            },] },
];
var BreadcrumbsModule = /** @class */ (function () {
    function BreadcrumbsModule() {
    }
    return BreadcrumbsModule;
}());
BreadcrumbsModule.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"], args: [{
                imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_8__["RouterModule"], IconModule],
                exports: [BreadcrumbsComponent],
                declarations: [BreadcrumbsComponent]
            },] },
];
var supportedStyles = ['primary', 'primary-alt', 'destructive', 'neutral', 'secondary', 'link', 'link-inline'];
function validateStyleInput(style$$1) {
    if (supportedStyles.indexOf(style$$1) < 0) {
        throw Error('Unsupported style input value: ' + style$$1);
    }
}
var buttonAttributes = ['hc-icon-button', 'hc-button'];
var ButtonComponent = /** @class */ (function () {
    function ButtonComponent(elementRef, renderer) {
        this.elementRef = elementRef;
        this.renderer = renderer;
        this._disabled = false;
        this.buttonStyle = 'primary';
        this.previousStyle = this.buttonStyle;
        try {
            for (var buttonAttributes_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__values"])(buttonAttributes), buttonAttributes_1_1 = buttonAttributes_1.next(); !buttonAttributes_1_1.done; buttonAttributes_1_1 = buttonAttributes_1.next()) {
                var attr = buttonAttributes_1_1.value;
                if (elementRef.nativeElement.hasAttribute(attr)) {
                    renderer.addClass(elementRef.nativeElement, attr);
                }
            }
        }
        catch (e_4_1) { e_4 = { error: e_4_1 }; }
        finally {
            try {
                if (buttonAttributes_1_1 && !buttonAttributes_1_1.done && (_a = buttonAttributes_1.return)) _a.call(buttonAttributes_1);
            }
            finally { if (e_4) throw e_4.error; }
        }
        var e_4, _a;
    }
    Object.defineProperty(ButtonComponent.prototype, "color", {
        get: function () {
            return this.buttonStyle;
        },
        set: function (btnStyle) {
            this.buttonStyle = btnStyle;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ButtonComponent.prototype, "buttonStyle", {
        get: function () {
            return this._style;
        },
        set: function (btnStyle) {
            validateStyleInput(btnStyle);
            this.setHostStyle(btnStyle);
            this.previousStyle = this._style;
            this._style = btnStyle;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ButtonComponent.prototype, "disabled", {
        get: function () {
            return this._disabled;
        },
        set: function (isDisabled) {
            this._disabled = parseBooleanAttribute(isDisabled);
        },
        enumerable: true,
        configurable: true
    });
    ButtonComponent.prototype.focus = function () {
        this.elementRef.nativeElement.focus();
    };
    ButtonComponent.prototype.setHostStyle = function (style$$1) {
        if (this.previousStyle !== style$$1) {
            if (this.previousStyle) {
                this.renderer.removeClass(this.elementRef.nativeElement, this._styleClass(this.previousStyle));
            }
            this.renderer.addClass(this.elementRef.nativeElement, this._styleClass(style$$1));
        }
    };
    ButtonComponent.prototype._styleClass = function (style$$1) {
        return "hc-" + style$$1;
    };
    return ButtonComponent;
}());
ButtonComponent.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"], args: [{
                selector: 'button[hc-button], button[hc-icon-button]',
                template: '<ng-content></ng-content>',
                styles: [".hc-button{display:-webkit-inline-box;display:-ms-inline-flexbox;display:inline-flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;padding:0 20px;height:35px;min-width:150px;font-size:15px;line-height:35px;font-weight:400;text-align:center;white-space:nowrap;vertical-align:middle;-ms-touch-action:manipulation;touch-action:manipulation;cursor:pointer;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;background-image:none;border:none;border-radius:5px;font-family:'Open Sans','Helvetica Neue',Helvetica,Arial,sans-serif}.hc-button[disabled]{cursor:not-allowed}.hc-button:focus{outline:-webkit-focus-ring-color auto 5px;outline-offset:-2px}.hc-button:active{background-image:none;outline:0}.hc-button.hc-primary{color:#fff;background-color:#00a859}.hc-button.hc-primary:hover{background-color:#009750;color:#fff}.hc-button.hc-primary:active{background-color:#008647;color:#fff}.hc-button.hc-primary[disabled],.hc-button.hc-primary[disabled]:active,.hc-button.hc-primary[disabled]:focus,.hc-button.hc-primary[disabled]:hover{background-color:#00a859;opacity:.35}.hc-button.hc-primary-alt{color:#fff;background-color:#6e53a3}.hc-button.hc-primary-alt:hover{background-color:#634b93;color:#fff}.hc-button.hc-primary-alt:active{background-color:#584282;color:#fff}.hc-button.hc-primary-alt[disabled],.hc-button.hc-primary-alt[disabled]:active,.hc-button.hc-primary-alt[disabled]:focus,.hc-button.hc-primary-alt[disabled]:hover{background-color:#6e53a3;opacity:.35}.hc-button.hc-destructive{color:#fff;background-color:#f13c45}.hc-button.hc-destructive:hover{background-color:#d9363e;color:#fff}.hc-button.hc-destructive:active{background-color:#c13037;color:#fff}.hc-button.hc-destructive[disabled],.hc-button.hc-destructive[disabled]:active,.hc-button.hc-destructive[disabled]:focus,.hc-button.hc-destructive[disabled]:hover{background-color:#f13c45;opacity:.35}.hc-button.hc-neutral{color:#fff;background-color:#6d6e70}.hc-button.hc-neutral:hover{background-color:#626365;color:#fff}.hc-button.hc-neutral:active{background-color:#57585a;color:#fff}.hc-button.hc-neutral[disabled],.hc-button.hc-neutral[disabled]:active,.hc-button.hc-neutral[disabled]:focus,.hc-button.hc-neutral[disabled]:hover{background-color:#6d6e70;opacity:.35}.hc-button.hc-secondary{background-color:#f1f1f1;color:#515353;border:2px solid #ccc;height:37px;line-height:33px;padding-right:19px}.hc-button.hc-secondary:hover{background-color:#e5e5e5}.hc-button.hc-secondary:active{background-color:#d9d9d9;color:#fff}.hc-button.hc-secondary[disabled],.hc-button.hc-secondary[disabled]:active,.hc-button.hc-secondary[disabled]:focus,.hc-button.hc-secondary[disabled]:hover{background-color:#f1f1f1;opacity:.35}.hc-button.hc-secondary:hover{color:#333}.hc-button.hc-secondary[disabled]:hover{color:#515353}.hc-button.hc-link,.hc-button.hc-link-inline{background-color:transparent;color:#00aeff;font-weight:600}.hc-button.hc-link .label,.hc-button.hc-link-inline .label{color:#6d6e70;font-weight:400;margin-right:10px}.hc-button.hc-link .value,.hc-button.hc-link-inline .value{color:#333;font-weight:400;margin-right:10px}.hc-button.hc-link-inline:hover,.hc-button.hc-link:hover{color:#33beff}.hc-button.hc-link-inline:active,.hc-button.hc-link:active{color:#008bcc}.hc-button.hc-link-inline[disabled],.hc-button.hc-link-inline[disabled]:active,.hc-button.hc-link-inline[disabled]:focus,.hc-button.hc-link-inline[disabled]:hover,.hc-button.hc-link[disabled],.hc-button.hc-link[disabled]:active,.hc-button.hc-link[disabled]:focus,.hc-button.hc-link[disabled]:hover{opacity:.35;color:#00aeff}.hc-button.hc-link-inline[disabled] .label,.hc-button.hc-link-inline[disabled] .value,.hc-button.hc-link-inline[disabled]:active .label,.hc-button.hc-link-inline[disabled]:active .value,.hc-button.hc-link-inline[disabled]:focus .label,.hc-button.hc-link-inline[disabled]:focus .value,.hc-button.hc-link-inline[disabled]:hover .label,.hc-button.hc-link-inline[disabled]:hover .value,.hc-button.hc-link[disabled] .label,.hc-button.hc-link[disabled] .value,.hc-button.hc-link[disabled]:active .label,.hc-button.hc-link[disabled]:active .value,.hc-button.hc-link[disabled]:focus .label,.hc-button.hc-link[disabled]:focus .value,.hc-button.hc-link[disabled]:hover .label,.hc-button.hc-link[disabled]:hover .value{color:#333}.hc-button.hc-link-inline{padding:0;height:auto;width:auto;min-width:0;font-size:inherit;line-height:inherit;text-align:inherit;white-space:inherit;vertical-align:inherit;font-family:inherit;border:none}.hc-icon-button{display:inline-block;position:relative;height:35px;width:35px;line-height:35px;border-radius:50%;outline:0;border:none;margin:0;padding:0;background:0 0;text-decoration:none;cursor:pointer;white-space:nowrap;text-align:center;vertical-align:baseline}.hc-split-button{display:-webkit-inline-box;display:-ms-inline-flexbox;display:inline-flex}.hc-split-button .hc-split-button-main{margin-right:0;border-bottom-right-radius:0;border-top-right-radius:0;min-width:unset}.hc-split-button .hc-split-button-toggle{min-width:auto;padding:8px 12px;margin-left:0;border-left:1px solid rgba(0,0,0,.12);border-bottom-left-radius:0;border-top-left-radius:0}.hc-split-button .hc-split-button-toggle::after{display:-webkit-box;display:-ms-flexbox;display:flex;height:20px;-webkit-box-align:center;-ms-flex-align:center;align-items:center;font:12px/1 FontAwesome;content:'\\f078'}"],
                host: {
                    '[disabled]': 'disabled || null'
                },
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None
            },] },
];
ButtonComponent.ctorParameters = function () { return [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], },
]; };
ButtonComponent.propDecorators = {
    "color": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] },],
    "buttonStyle": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] },],
    "disabled": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] },],
};
var AnchorComponent = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(AnchorComponent, _super);
    function AnchorComponent(elementRef, renderer) {
        return _super.call(this, elementRef, renderer) || this;
    }
    Object.defineProperty(AnchorComponent.prototype, "_hostAriaDisabled", {
        get: function () {
            return this.disabled ? this.disabled.toString() : 'false';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AnchorComponent.prototype, "_hostTabIndex", {
        get: function () {
            return this.disabled ? -1 : 0;
        },
        enumerable: true,
        configurable: true
    });
    AnchorComponent.prototype._handleClickEvents = function (event) {
        if (this.disabled) {
            event.preventDefault();
            event.stopPropagation();
        }
    };
    return AnchorComponent;
}(ButtonComponent));
AnchorComponent.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"], args: [{
                selector: 'a[hc-button]',
                template: '<ng-content></ng-content>',
                styles: [".hc-button{display:-webkit-inline-box;display:-ms-inline-flexbox;display:inline-flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;padding:0 20px;height:35px;min-width:150px;font-size:15px;line-height:35px;font-weight:400;text-align:center;white-space:nowrap;vertical-align:middle;-ms-touch-action:manipulation;touch-action:manipulation;cursor:pointer;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;background-image:none;border:none;border-radius:5px;font-family:'Open Sans','Helvetica Neue',Helvetica,Arial,sans-serif}.hc-button[disabled]{cursor:not-allowed}.hc-button:focus{outline:-webkit-focus-ring-color auto 5px;outline-offset:-2px}.hc-button:active{background-image:none;outline:0}.hc-button.hc-primary{color:#fff;background-color:#00a859}.hc-button.hc-primary:hover{background-color:#009750;color:#fff}.hc-button.hc-primary:active{background-color:#008647;color:#fff}.hc-button.hc-primary[disabled],.hc-button.hc-primary[disabled]:active,.hc-button.hc-primary[disabled]:focus,.hc-button.hc-primary[disabled]:hover{background-color:#00a859;opacity:.35}.hc-button.hc-primary-alt{color:#fff;background-color:#6e53a3}.hc-button.hc-primary-alt:hover{background-color:#634b93;color:#fff}.hc-button.hc-primary-alt:active{background-color:#584282;color:#fff}.hc-button.hc-primary-alt[disabled],.hc-button.hc-primary-alt[disabled]:active,.hc-button.hc-primary-alt[disabled]:focus,.hc-button.hc-primary-alt[disabled]:hover{background-color:#6e53a3;opacity:.35}.hc-button.hc-destructive{color:#fff;background-color:#f13c45}.hc-button.hc-destructive:hover{background-color:#d9363e;color:#fff}.hc-button.hc-destructive:active{background-color:#c13037;color:#fff}.hc-button.hc-destructive[disabled],.hc-button.hc-destructive[disabled]:active,.hc-button.hc-destructive[disabled]:focus,.hc-button.hc-destructive[disabled]:hover{background-color:#f13c45;opacity:.35}.hc-button.hc-neutral{color:#fff;background-color:#6d6e70}.hc-button.hc-neutral:hover{background-color:#626365;color:#fff}.hc-button.hc-neutral:active{background-color:#57585a;color:#fff}.hc-button.hc-neutral[disabled],.hc-button.hc-neutral[disabled]:active,.hc-button.hc-neutral[disabled]:focus,.hc-button.hc-neutral[disabled]:hover{background-color:#6d6e70;opacity:.35}.hc-button.hc-secondary{background-color:#f1f1f1;color:#515353;border:2px solid #ccc;height:37px;line-height:33px;padding-right:19px}.hc-button.hc-secondary:hover{background-color:#e5e5e5}.hc-button.hc-secondary:active{background-color:#d9d9d9;color:#fff}.hc-button.hc-secondary[disabled],.hc-button.hc-secondary[disabled]:active,.hc-button.hc-secondary[disabled]:focus,.hc-button.hc-secondary[disabled]:hover{background-color:#f1f1f1;opacity:.35}.hc-button.hc-secondary:hover{color:#333}.hc-button.hc-secondary[disabled]:hover{color:#515353}.hc-button.hc-link,.hc-button.hc-link-inline{background-color:transparent;color:#00aeff;font-weight:600}.hc-button.hc-link .label,.hc-button.hc-link-inline .label{color:#6d6e70;font-weight:400;margin-right:10px}.hc-button.hc-link .value,.hc-button.hc-link-inline .value{color:#333;font-weight:400;margin-right:10px}.hc-button.hc-link-inline:hover,.hc-button.hc-link:hover{color:#33beff}.hc-button.hc-link-inline:active,.hc-button.hc-link:active{color:#008bcc}.hc-button.hc-link-inline[disabled],.hc-button.hc-link-inline[disabled]:active,.hc-button.hc-link-inline[disabled]:focus,.hc-button.hc-link-inline[disabled]:hover,.hc-button.hc-link[disabled],.hc-button.hc-link[disabled]:active,.hc-button.hc-link[disabled]:focus,.hc-button.hc-link[disabled]:hover{opacity:.35;color:#00aeff}.hc-button.hc-link-inline[disabled] .label,.hc-button.hc-link-inline[disabled] .value,.hc-button.hc-link-inline[disabled]:active .label,.hc-button.hc-link-inline[disabled]:active .value,.hc-button.hc-link-inline[disabled]:focus .label,.hc-button.hc-link-inline[disabled]:focus .value,.hc-button.hc-link-inline[disabled]:hover .label,.hc-button.hc-link-inline[disabled]:hover .value,.hc-button.hc-link[disabled] .label,.hc-button.hc-link[disabled] .value,.hc-button.hc-link[disabled]:active .label,.hc-button.hc-link[disabled]:active .value,.hc-button.hc-link[disabled]:focus .label,.hc-button.hc-link[disabled]:focus .value,.hc-button.hc-link[disabled]:hover .label,.hc-button.hc-link[disabled]:hover .value{color:#333}.hc-button.hc-link-inline{padding:0;height:auto;width:auto;min-width:0;font-size:inherit;line-height:inherit;text-align:inherit;white-space:inherit;vertical-align:inherit;font-family:inherit;border:none}.hc-icon-button{display:inline-block;position:relative;height:35px;width:35px;line-height:35px;border-radius:50%;outline:0;border:none;margin:0;padding:0;background:0 0;text-decoration:none;cursor:pointer;white-space:nowrap;text-align:center;vertical-align:baseline}.hc-split-button{display:-webkit-inline-box;display:-ms-inline-flexbox;display:inline-flex}.hc-split-button .hc-split-button-main{margin-right:0;border-bottom-right-radius:0;border-top-right-radius:0;min-width:unset}.hc-split-button .hc-split-button-toggle{min-width:auto;padding:8px 12px;margin-left:0;border-left:1px solid rgba(0,0,0,.12);border-bottom-left-radius:0;border-top-left-radius:0}.hc-split-button .hc-split-button-toggle::after{display:-webkit-box;display:-ms-flexbox;display:flex;height:20px;-webkit-box-align:center;-ms-flex-align:center;align-items:center;font:12px/1 FontAwesome;content:'\\f078'}"],
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None
            },] },
];
AnchorComponent.ctorParameters = function () { return [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], },
]; };
AnchorComponent.propDecorators = {
    "_hostAriaDisabled": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"], args: ['attr.aria-disabled',] },],
    "_hostTabIndex": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"], args: ['attr.tabindex',] },],
    "_handleClickEvents": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"], args: ['click', ['$event'],] },],
};
var ButtonItemDirective = /** @class */ (function () {
    function ButtonItemDirective() {
    }
    return ButtonItemDirective;
}());
ButtonItemDirective.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"], args: [{
                selector: '[hcButtonItem]'
            },] },
];
var SplitButtonClickEvent = /** @class */ (function () {
    function SplitButtonClickEvent(source) {
        this.source = source;
    }
    return SplitButtonClickEvent;
}());
var SplitButtonComponent = /** @class */ (function () {
    function SplitButtonComponent(elementRef) {
        this.elementRef = elementRef;
        this._disabled = false;
        this._style = 'primary';
        this.click = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.type = 'button';
    }
    Object.defineProperty(SplitButtonComponent.prototype, "tabIndex", {
        get: function () {
            return this.disabled ? -1 : this._tabIndex;
        },
        set: function (value) {
            this._tabIndex = value == null ? 0 : value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SplitButtonComponent.prototype, "color", {
        get: function () {
            return this.buttonStyle;
        },
        set: function (btnStyle) {
            this.buttonStyle = btnStyle;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SplitButtonComponent.prototype, "buttonStyle", {
        get: function () {
            return this._style;
        },
        set: function (btnStyle) {
            validateStyleInput(btnStyle);
            this._style = btnStyle;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SplitButtonComponent.prototype, "disabled", {
        get: function () {
            return this._disabled;
        },
        set: function (isDisabled) {
            this._disabled = parseBooleanAttribute(isDisabled);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SplitButtonComponent.prototype, "_hostClass", {
        get: function () {
            return true;
        },
        enumerable: true,
        configurable: true
    });
    SplitButtonComponent.prototype._stopClick = function ($event) {
        $event.stopPropagation();
    };
    SplitButtonComponent.prototype.focus = function () {
        this.elementRef.nativeElement.focus();
    };
    SplitButtonComponent.prototype._mainBtnClick = function (event) {
        event.stopPropagation();
        if (!this.disabled) {
            this.click.emit(new SplitButtonClickEvent(this));
        }
    };
    return SplitButtonComponent;
}());
SplitButtonComponent.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"], args: [{
                selector: 'hc-split-button',
                template: "<button hc-button\n        class=\"hc-split-button-main\"\n        [attr.type]=\"type\"\n        [color]=\"color\"\n        [attr.title]=\"title\"\n        [attr.name]=\"name\"\n        [attr.value]=\"value\"\n        [tabIndex]=\"tabIndex\"\n        [disabled]=\"disabled\"\n        (click)=\"_mainBtnClick($event)\">\n    <ng-content></ng-content>\n</button>\n<button hc-button\n        class=\"hc-split-button-toggle\"\n        type=\"button\"\n        [color]=\"color\"\n        (click)=\"_stopClick($event)\"\n        [disabled]=\"disabled\"\n        [hcPopover]=\"buttonMenu\"\n        popperPlacement=\"bottom\">\n</button>\n<hc-popover-content #buttonMenu (click)=\"_stopClick($event)\">\n    <ng-content select=\"[hcButtonItem]\"></ng-content>\n</hc-popover-content>\n",
                styles: [".hc-button{display:-webkit-inline-box;display:-ms-inline-flexbox;display:inline-flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;padding:0 20px;height:35px;min-width:150px;font-size:15px;line-height:35px;font-weight:400;text-align:center;white-space:nowrap;vertical-align:middle;-ms-touch-action:manipulation;touch-action:manipulation;cursor:pointer;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;background-image:none;border:none;border-radius:5px;font-family:'Open Sans','Helvetica Neue',Helvetica,Arial,sans-serif}.hc-button[disabled]{cursor:not-allowed}.hc-button:focus{outline:-webkit-focus-ring-color auto 5px;outline-offset:-2px}.hc-button:active{background-image:none;outline:0}.hc-button.hc-primary{color:#fff;background-color:#00a859}.hc-button.hc-primary:hover{background-color:#009750;color:#fff}.hc-button.hc-primary:active{background-color:#008647;color:#fff}.hc-button.hc-primary[disabled],.hc-button.hc-primary[disabled]:active,.hc-button.hc-primary[disabled]:focus,.hc-button.hc-primary[disabled]:hover{background-color:#00a859;opacity:.35}.hc-button.hc-primary-alt{color:#fff;background-color:#6e53a3}.hc-button.hc-primary-alt:hover{background-color:#634b93;color:#fff}.hc-button.hc-primary-alt:active{background-color:#584282;color:#fff}.hc-button.hc-primary-alt[disabled],.hc-button.hc-primary-alt[disabled]:active,.hc-button.hc-primary-alt[disabled]:focus,.hc-button.hc-primary-alt[disabled]:hover{background-color:#6e53a3;opacity:.35}.hc-button.hc-destructive{color:#fff;background-color:#f13c45}.hc-button.hc-destructive:hover{background-color:#d9363e;color:#fff}.hc-button.hc-destructive:active{background-color:#c13037;color:#fff}.hc-button.hc-destructive[disabled],.hc-button.hc-destructive[disabled]:active,.hc-button.hc-destructive[disabled]:focus,.hc-button.hc-destructive[disabled]:hover{background-color:#f13c45;opacity:.35}.hc-button.hc-neutral{color:#fff;background-color:#6d6e70}.hc-button.hc-neutral:hover{background-color:#626365;color:#fff}.hc-button.hc-neutral:active{background-color:#57585a;color:#fff}.hc-button.hc-neutral[disabled],.hc-button.hc-neutral[disabled]:active,.hc-button.hc-neutral[disabled]:focus,.hc-button.hc-neutral[disabled]:hover{background-color:#6d6e70;opacity:.35}.hc-button.hc-secondary{background-color:#f1f1f1;color:#515353;border:2px solid #ccc;height:37px;line-height:33px;padding-right:19px}.hc-button.hc-secondary:hover{background-color:#e5e5e5}.hc-button.hc-secondary:active{background-color:#d9d9d9;color:#fff}.hc-button.hc-secondary[disabled],.hc-button.hc-secondary[disabled]:active,.hc-button.hc-secondary[disabled]:focus,.hc-button.hc-secondary[disabled]:hover{background-color:#f1f1f1;opacity:.35}.hc-button.hc-secondary:hover{color:#333}.hc-button.hc-secondary[disabled]:hover{color:#515353}.hc-button.hc-link,.hc-button.hc-link-inline{background-color:transparent;color:#00aeff;font-weight:600}.hc-button.hc-link .label,.hc-button.hc-link-inline .label{color:#6d6e70;font-weight:400;margin-right:10px}.hc-button.hc-link .value,.hc-button.hc-link-inline .value{color:#333;font-weight:400;margin-right:10px}.hc-button.hc-link-inline:hover,.hc-button.hc-link:hover{color:#33beff}.hc-button.hc-link-inline:active,.hc-button.hc-link:active{color:#008bcc}.hc-button.hc-link-inline[disabled],.hc-button.hc-link-inline[disabled]:active,.hc-button.hc-link-inline[disabled]:focus,.hc-button.hc-link-inline[disabled]:hover,.hc-button.hc-link[disabled],.hc-button.hc-link[disabled]:active,.hc-button.hc-link[disabled]:focus,.hc-button.hc-link[disabled]:hover{opacity:.35;color:#00aeff}.hc-button.hc-link-inline[disabled] .label,.hc-button.hc-link-inline[disabled] .value,.hc-button.hc-link-inline[disabled]:active .label,.hc-button.hc-link-inline[disabled]:active .value,.hc-button.hc-link-inline[disabled]:focus .label,.hc-button.hc-link-inline[disabled]:focus .value,.hc-button.hc-link-inline[disabled]:hover .label,.hc-button.hc-link-inline[disabled]:hover .value,.hc-button.hc-link[disabled] .label,.hc-button.hc-link[disabled] .value,.hc-button.hc-link[disabled]:active .label,.hc-button.hc-link[disabled]:active .value,.hc-button.hc-link[disabled]:focus .label,.hc-button.hc-link[disabled]:focus .value,.hc-button.hc-link[disabled]:hover .label,.hc-button.hc-link[disabled]:hover .value{color:#333}.hc-button.hc-link-inline{padding:0;height:auto;width:auto;min-width:0;font-size:inherit;line-height:inherit;text-align:inherit;white-space:inherit;vertical-align:inherit;font-family:inherit;border:none}.hc-icon-button{display:inline-block;position:relative;height:35px;width:35px;line-height:35px;border-radius:50%;outline:0;border:none;margin:0;padding:0;background:0 0;text-decoration:none;cursor:pointer;white-space:nowrap;text-align:center;vertical-align:baseline}.hc-split-button{display:-webkit-inline-box;display:-ms-inline-flexbox;display:inline-flex}.hc-split-button .hc-split-button-main{margin-right:0;border-bottom-right-radius:0;border-top-right-radius:0;min-width:unset}.hc-split-button .hc-split-button-toggle{min-width:auto;padding:8px 12px;margin-left:0;border-left:1px solid rgba(0,0,0,.12);border-bottom-left-radius:0;border-top-left-radius:0}.hc-split-button .hc-split-button-toggle::after{display:-webkit-box;display:-ms-flexbox;display:flex;height:20px;-webkit-box-align:center;-ms-flex-align:center;align-items:center;font:12px/1 FontAwesome;content:'\\f078'}"],
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None
            },] },
];
SplitButtonComponent.ctorParameters = function () { return [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], },
]; };
SplitButtonComponent.propDecorators = {
    "click": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"] },],
    "title": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] },],
    "type": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] },],
    "name": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] },],
    "value": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] },],
    "tabIndex": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] },],
    "color": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] },],
    "buttonStyle": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] },],
    "disabled": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] },],
    "_hostClass": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"], args: ['class.hc-split-button',] },],
};
var ButtonModule = /** @class */ (function () {
    function ButtonModule() {
    }
    return ButtonModule;
}());
ButtonModule.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"], args: [{
                imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"], PopoverModule],
                declarations: [AnchorComponent, ButtonComponent, ButtonItemDirective, SplitButtonComponent],
                exports: [AnchorComponent, ButtonComponent, ButtonItemDirective, SplitButtonComponent]
            },] },
];
var nextCheckboxId = 1;
var CheckboxChangeEvent = /** @class */ (function () {
    function CheckboxChangeEvent(source, checked) {
        this.source = source;
        this.checked = checked;
    }
    return CheckboxChangeEvent;
}());
var hcCheckboxValueAccessor = {
    provide: _angular_forms__WEBPACK_IMPORTED_MODULE_9__["NG_VALUE_ACCESSOR"],
    useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["forwardRef"])(function () { return CheckboxComponent; }),
    multi: true
};
var CheckboxComponent = /** @class */ (function () {
    function CheckboxComponent(tabindex, _renderer) {
        this._renderer = _renderer;
        this._uniqueId = "hc-checkbox-" + nextCheckboxId++;
        this._checked = false;
        this._required = false;
        this._disabled = false;
        this.id = this._uniqueId;
        this.name = null;
        this.change = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this._onChangeFunc = function () { };
        this._onTouchFunc = function () { };
        this.tabIndex = parseInt(tabindex, 10) || 0;
    }
    Object.defineProperty(CheckboxComponent.prototype, "_getHostId", {
        get: function () {
            return this.id;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CheckboxComponent.prototype, "_getCheckboxCheckedClass", {
        get: function () {
            return this.checked;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CheckboxComponent.prototype, "_getCheckboxDisabledClass", {
        get: function () {
            return this.disabled;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CheckboxComponent.prototype, "_getCheckboxIndeterminateClass", {
        get: function () {
            return this.indeterminate;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CheckboxComponent.prototype, "required", {
        get: function () {
            return this._required;
        },
        set: function (required) {
            this._required = parseBooleanAttribute(required);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CheckboxComponent.prototype, "disabled", {
        get: function () {
            return this._disabled;
        },
        set: function (isDisabled) {
            this._disabled = parseBooleanAttribute(isDisabled);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CheckboxComponent.prototype, "checked", {
        get: function () {
            return this._checked;
        },
        set: function (checked) {
            if (this._checked === checked) {
                return;
            }
            this._checked = checked;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CheckboxComponent.prototype, "tabIndex", {
        get: function () {
            return this.disabled ? -1 : this._tabIndex;
        },
        set: function (value) {
            this._tabIndex = value == null ? 0 : value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CheckboxComponent.prototype, "_inputId", {
        get: function () {
            return (this.id || this._uniqueId) + "-input";
        },
        enumerable: true,
        configurable: true
    });
    CheckboxComponent.prototype.writeValue = function (value) {
        this.checked = !!value;
    };
    CheckboxComponent.prototype.registerOnChange = function (fn) {
        this._onChangeFunc = fn;
    };
    CheckboxComponent.prototype.registerOnTouched = function (fn) {
        this._onTouchFunc = fn;
    };
    CheckboxComponent.prototype.setDisabledState = function (isDisabled) {
        this.disabled = isDisabled;
        this._renderer.setProperty(this._checkboxInput.nativeElement, 'disabled', isDisabled);
    };
    CheckboxComponent.prototype.toggle = function () {
        this.checked = !this.checked;
    };
    CheckboxComponent.prototype._clickEvent = function (event) {
        event.stopPropagation();
        if (!this.disabled) {
            this.toggle();
            this._emitChangeEvent();
        }
    };
    CheckboxComponent.prototype._stopChangeEvent = function (event) {
        event.stopPropagation();
    };
    CheckboxComponent.prototype._emitChangeEvent = function () {
        this._onChangeFunc(this.checked);
        this.change.emit(new CheckboxChangeEvent(this, this.checked));
    };
    CheckboxComponent.prototype._onBlur = function () {
        this._onTouchFunc();
    };
    return CheckboxComponent;
}());
CheckboxComponent.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"], args: [{
                selector: 'hc-checkbox',
                template: "<div class=\"hc-checkbox-container\">\n    <div class=\"hc-checkbox-content\">\n        <input #checkboxInput\n               type=\"checkbox\"\n               [id]=\"_inputId\"\n               [attr.value]=\"value\"\n               [attr.name]=\"name\"\n               [tabIndex]=\"tabIndex\"\n               [indeterminate]=\"indeterminate\"\n               [disabled]=\"disabled\"\n               [required]=\"required\"\n               [checked]=\"checked\"\n               (change)=\"_stopChangeEvent($event)\"\n               (click)=\"_clickEvent($event)\"\n               (blur)=\"_onBlur()\"/>\n        <label class=\"hc-checkbox-overlay\" [attr.for]=\"_inputId\"></label>\n        <label class=\"hc-checkbox-label\" [attr.for]=\"_inputId\">\n            <ng-content></ng-content>\n        </label>\n    </div>\n</div>\n",
                styles: [".hc-checkbox-container{overflow:hidden}.hc-checkbox-container .hc-checkbox-content{display:-webkit-inline-box;display:-ms-inline-flexbox;display:inline-flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;cursor:pointer}.hc-checkbox-container .hc-checkbox-content label{cursor:pointer}.hc-checkbox-container .hc-checkbox-content:hover .hc-checkbox-overlay{border:2px solid #00aeff}.hc-checkbox-container .hc-checkbox-label{margin-left:12px}.hc-checkbox-container .hc-checkbox-overlay{position:relative;width:22px;height:22px;background-color:#fff;border:2px solid #ccc;border-radius:3px}.hc-checkbox-container .hc-checkbox-overlay:after{content:'';position:absolute;top:3.5px;left:3px;width:12px;height:7px;opacity:0;-webkit-transform:rotate(-45deg);transform:rotate(-45deg);border:3px solid #fff;border-top:none;border-right:none}.hc-checkbox-container input[type=checkbox]{display:none}.hc-checkbox-container input[type=checkbox]:checked+label.hc-checkbox-overlay{background-color:#00aeff;border-color:#00aeff}.hc-checkbox-container input[type=checkbox]:checked+label.hc-checkbox-overlay:after{opacity:1}.hc-checkbox-disabled .hc-checkbox-content{color:#ccc;cursor:not-allowed}.hc-checkbox-disabled .hc-checkbox-content label{cursor:not-allowed}.hc-checkbox-disabled .hc-checkbox-content .hc-checkbox-overlay{background-color:#e0e0e0;border-color:#ccc}"],
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
                providers: [hcCheckboxValueAccessor],
                exportAs: 'hcCheckbox'
            },] },
];
CheckboxComponent.ctorParameters = function () { return [
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Attribute"], args: ['tabindex',] },] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], },
]; };
CheckboxComponent.propDecorators = {
    "value": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] },],
    "indeterminate": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] },],
    "id": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] },],
    "name": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] },],
    "change": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"] },],
    "_checkboxInput": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"], args: ['checkboxInput',] },],
    "_getHostId": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"], args: ['attr.id',] },],
    "_getCheckboxCheckedClass": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"], args: ['class.hc-checkbox-checked',] },],
    "_getCheckboxDisabledClass": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"], args: ['class.hc-checkbox-disabled',] },],
    "_getCheckboxIndeterminateClass": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"], args: ['class.hc-checkbox-indeterminate',] },],
    "required": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] },],
    "disabled": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] },],
    "checked": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] },],
};
var HC_CHECKBOX_REQUIRED_VALIDATOR = {
    provide: _angular_forms__WEBPACK_IMPORTED_MODULE_9__["NG_VALIDATORS"],
    useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["forwardRef"])(function () { return HcCheckboxRequiredValidatorDirective; }),
    multi: true
};
var HcCheckboxRequiredValidatorDirective = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(HcCheckboxRequiredValidatorDirective, _super);
    function HcCheckboxRequiredValidatorDirective() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(HcCheckboxRequiredValidatorDirective.prototype, "isRequired", {
        get: function () {
            return this.required ? '' : null;
        },
        enumerable: true,
        configurable: true
    });
    return HcCheckboxRequiredValidatorDirective;
}(_angular_forms__WEBPACK_IMPORTED_MODULE_9__["CheckboxRequiredValidator"]));
HcCheckboxRequiredValidatorDirective.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"], args: [{
                selector: "hc-checkbox[required][formControlName],\n             hc-checkbox[required][formControl],hc-checkbox[required][ngModel]",
                providers: [HC_CHECKBOX_REQUIRED_VALIDATOR]
            },] },
];
HcCheckboxRequiredValidatorDirective.propDecorators = {
    "isRequired": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"], args: ['attr.required',] },],
};
var CheckboxModule = /** @class */ (function () {
    function CheckboxModule() {
    }
    return CheckboxModule;
}());
CheckboxModule.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"], args: [{
                imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormsModule"]],
                exports: [CheckboxComponent, HcCheckboxRequiredValidatorDirective],
                declarations: [CheckboxComponent, HcCheckboxRequiredValidatorDirective]
            },] },
];
var ChipComponent = /** @class */ (function () {
    function ChipComponent() {
        this._action = false;
        this.color = 'neutral';
    }
    Object.defineProperty(ChipComponent.prototype, "action", {
        get: function () {
            return this._action;
        },
        set: function (isAction) {
            this._action = parseBooleanAttribute(isAction);
        },
        enumerable: true,
        configurable: true
    });
    return ChipComponent;
}());
ChipComponent.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"], args: [{
                selector: 'hc-chip',
                template: "<div [class]=\"color\" [ngClass]=\"{'close': action, 'chip': true}\"><ng-content></ng-content></div>",
                styles: ["@charset \"UTF-8\";.chip{border-radius:6px;height:32px;line-height:32px;font-size:1rem;display:inline-block;padding:0 15px;margin:0 5px 10px;white-space:nowrap}.neutral{color:#333;background-color:#e4e4e4}.red{color:#951c1e;background-color:#efdddd;border:2px solid #e5c6c7;line-height:28px!important}.yellow{color:#ad9335;background-color:#faf3da;border:2px solid #f3e2a3;line-height:28px!important}.green{color:#00a859;background-color:#d9eedf;border:2px solid #bce1c6;line-height:28px!important}.close{cursor:pointer}.close:after{content:'\\f00d';font-family:FontAwesome;font-size:1.07143rem;padding-left:12px;opacity:.4}.chip-row-contents{display:inline-block}.single-row{height:32px;overflow:hidden}.single-row:before{content:'';float:left;width:5px;height:50px}.single-row>:first-child{float:right;width:100%;margin-left:-5px}.single-row:after{content:'\u2026more';box-sizing:content-box;-webkit-box-sizing:content-box;-moz-box-sizing:content-box;float:right;position:relative;top:-40px;left:100%;width:3.5em;margin-left:-3.5em;padding-right:5px;text-align:right}.row-buffer{margin-right:3.5em}"],
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None
            },] },
];
ChipComponent.ctorParameters = function () { return []; };
ChipComponent.propDecorators = {
    "color": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] },],
    "action": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] },],
};
var ChipRowComponent = /** @class */ (function () {
    function ChipRowComponent() {
        this._wrap = true;
    }
    Object.defineProperty(ChipRowComponent.prototype, "wrap", {
        get: function () {
            return this._wrap;
        },
        set: function (doWrap) {
            this._wrap = parseBooleanAttribute(doWrap);
        },
        enumerable: true,
        configurable: true
    });
    return ChipRowComponent;
}());
ChipRowComponent.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"], args: [{
                selector: 'hc-chip-row',
                template: "<div class=\"chip-row-contents\" [ngClass]=\"{'single-row': !wrap}\"><div>\n                    <div class=\"row-buffer\"><ng-content></ng-content></div>\n                </div></div>",
                styles: ["@charset \"UTF-8\";.chip{border-radius:6px;height:32px;line-height:32px;font-size:1rem;display:inline-block;padding:0 15px;margin:0 5px 10px;white-space:nowrap}.neutral{color:#333;background-color:#e4e4e4}.red{color:#951c1e;background-color:#efdddd;border:2px solid #e5c6c7;line-height:28px!important}.yellow{color:#ad9335;background-color:#faf3da;border:2px solid #f3e2a3;line-height:28px!important}.green{color:#00a859;background-color:#d9eedf;border:2px solid #bce1c6;line-height:28px!important}.close{cursor:pointer}.close:after{content:'\\f00d';font-family:FontAwesome;font-size:1.07143rem;padding-left:12px;opacity:.4}.chip-row-contents{display:inline-block}.single-row{height:32px;overflow:hidden}.single-row:before{content:'';float:left;width:5px;height:50px}.single-row>:first-child{float:right;width:100%;margin-left:-5px}.single-row:after{content:'\u2026more';box-sizing:content-box;-webkit-box-sizing:content-box;-moz-box-sizing:content-box;float:right;position:relative;top:-40px;left:100%;width:3.5em;margin-left:-3.5em;padding-right:5px;text-align:right}.row-buffer{margin-right:3.5em}"],
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None
            },] },
];
ChipRowComponent.ctorParameters = function () { return []; };
ChipRowComponent.propDecorators = {
    "wrap": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] },],
};
var ChipModule = /** @class */ (function () {
    function ChipModule() {
    }
    return ChipModule;
}());
ChipModule.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"], args: [{
                imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"]],
                exports: [ChipComponent, ChipRowComponent],
                declarations: [ChipComponent, ChipRowComponent]
            },] },
];
var DrawerPromiseResult = /** @class */ (function () {
    function DrawerPromiseResult(type) {
        this.type = type;
    }
    return DrawerPromiseResult;
}());
var Drawer = /** @class */ (function () {
    function Drawer(elementRef) {
        this.elementRef = elementRef;
        this._openChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.mode = 'push';
        this.align = 'left';
        this.tabindex = -1;
        this._drawerClass = true;
        this._animationStarted = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this._animationDisabled = true;
        this._drawerOpened = false;
        this._resolveAnimationPromise = function () { };
    }
    Object.defineProperty(Drawer.prototype, "openStart", {
        get: function () {
            return this._animationStarted.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["filter"])(function (event) { return event.fromState === 'void' && event.toState === 'open'; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function () { }));
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Drawer.prototype, "closeStart", {
        get: function () {
            return this._animationStarted.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["filter"])(function (event) { return event.fromState === 'open' && event.toState === 'void'; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function () { }));
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Drawer.prototype, "_openStream", {
        get: function () {
            return this._openChange.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["filter"])(function (value) { return value; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function () { }));
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Drawer.prototype, "_closeStream", {
        get: function () {
            return this._openChange.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["filter"])(function (value) { return !value; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function () { }));
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Drawer.prototype, "opened", {
        get: function () {
            return this._drawerOpened;
        },
        set: function (opened) {
            this.toggle(parseBooleanAttribute(opened));
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Drawer.prototype, "_width", {
        get: function () {
            return this.elementRef.nativeElement.offsetWidth;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Drawer.prototype, "_isOpened", {
        get: function () {
            return this._drawerOpened && !this._animationPromise;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Drawer.prototype, "_isOpening", {
        get: function () {
            return this._drawerOpened && !!this._animationPromise;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Drawer.prototype, "_isClosed", {
        get: function () {
            return !this._drawerOpened && !this._animationPromise;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Drawer.prototype, "_isClosing", {
        get: function () {
            return !this._drawerOpened && !!this._animationPromise;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Drawer.prototype, "_isRight", {
        get: function () {
            return this.align === 'right';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Drawer.prototype, "_openState", {
        get: function () {
            if (this._drawerOpened) {
                return this._animationDisabled ? 'open-instant' : 'open';
            }
            return 'void';
        },
        enumerable: true,
        configurable: true
    });
    Drawer.prototype._onAnimationStart = function (event) {
        this._animationStarted.emit(event);
    };
    Drawer.prototype._onAnimationEnd = function (event) {
        this._openChange.next(this.opened);
        if (this._animationPromise) {
            this._resolveAnimationPromise();
            this._resolveAnimationPromise = function () { };
            this._animationPromise = null;
        }
    };
    Drawer.prototype._onKeyDown = function (event) {
        if (event.keyCode === 27) {
            this.toggleClose();
            event.stopPropagation();
        }
    };
    Drawer.prototype.ngAfterContentInit = function () {
        if (this._animationPromise) {
            this._resolveAnimationPromise();
            this._resolveAnimationPromise = function () { };
            this._animationPromise = null;
        }
        this._animationDisabled = false;
    };
    Drawer.prototype.toggleOpen = function () {
        return this.toggle(true);
    };
    Drawer.prototype.toggleClose = function () {
        return this.toggle(false);
    };
    Drawer.prototype.toggle = function (isOpen) {
        var _this = this;
        if (isOpen === void 0) { isOpen = !this.opened; }
        this._drawerOpened = isOpen;
        if (!this._animationPromise) {
            this._drawerOpened = isOpen;
            this._animationPromise = new Promise(function (resolve) {
                _this._resolveAnimationPromise = function () { return resolve(new DrawerPromiseResult(isOpen ? 'open' : 'close')); };
            });
        }
        return this._animationPromise;
    };
    return Drawer;
}());
Drawer.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"], args: [{
                selector: 'hc-drawer',
                template: '<ng-content></ng-content>',
                styles: [".hc-drawer,.hc-menu-drawer{display:block;position:absolute;top:0;bottom:0;outline:0;-webkit-box-sizing:border-box;box-sizing:border-box;height:100%;overflow-y:auto;z-index:3;-webkit-transform:translate3d(-100%,0,0);transform:translate3d(-100%,0,0)}.hc-drawer.hc-drawer-right,.hc-menu-drawer.hc-drawer-right{right:0;-webkit-transform:translate3d(100%,0,0);transform:translate3d(100%,0,0)}.hc-drawer.hc-drawer-opened:not(.drawer-side),.hc-drawer.hc-drawer-opening:not(.drawer-side),.hc-menu-drawer.hc-drawer-opened:not(.drawer-side),.hc-menu-drawer.hc-drawer-opening:not(.drawer-side){-webkit-box-shadow:0 8px 10px -5px rgba(0,0,0,.2),0 16px 24px 2px rgba(0,0,0,.14),0 6px 30px 5px rgba(0,0,0,.12);box-shadow:0 8px 10px -5px rgba(0,0,0,.2),0 16px 24px 2px rgba(0,0,0,.14),0 6px 30px 5px rgba(0,0,0,.12)}.hc-drawer-container{position:relative;z-index:1;display:block;-webkit-box-sizing:border-box;box-sizing:border-box;overflow:hidden}.hc-drawer-content{position:relative;z-index:1;padding:10px 20px;left:0;right:0;display:block;height:100%;overflow:auto;-webkit-transition-duration:.4s;transition-duration:.4s;-webkit-transition-timing-function:cubic-bezier(.25,.8,.25,1);transition-timing-function:cubic-bezier(.25,.8,.25,1);-webkit-transition-property:margin-left,margin-right,-webkit-transform;transition-property:margin-left,margin-right,-webkit-transform;transition-property:transform,margin-left,margin-right;transition-property:transform,margin-left,margin-right,-webkit-transform}"],
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
                animations: [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["trigger"])('openState', [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["state"])('open, open-instant', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({
                            transform: 'translate3d(0, 0, 0)',
                            visibility: 'visible'
                        })),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["state"])('void', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({
                            'box-shadow': 'none',
                            visibility: 'hidden'
                        })),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])('void => open-instant', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])('0ms')),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])('void <=> open, open-instant => void', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])('400ms cubic-bezier(0.25, 0.8, 0.25, 1)'))
                    ])
                ],
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush
            },] },
];
Drawer.ctorParameters = function () { return [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], },
]; };
Drawer.propDecorators = {
    "mode": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] },],
    "align": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] },],
    "openStart": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"] },],
    "closeStart": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"] },],
    "_openStream": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"], args: ['opened',] },],
    "_closeStream": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"], args: ['closed',] },],
    "tabindex": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"] },],
    "_drawerClass": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"], args: ['class.hc-drawer',] },],
    "opened": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] },],
    "_isOpened": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"], args: ['class.hc-drawer-opened',] },],
    "_isOpening": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"], args: ['class.hc-drawer-opening',] },],
    "_isClosed": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"], args: ['class.hc-drawer-closed',] },],
    "_isClosing": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"], args: ['class.hc-drawer-closing',] },],
    "_isRight": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"], args: ['class.hc-drawer-right',] },],
    "_openState": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"], args: ['@openState',] },],
    "_onAnimationStart": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"], args: ['@openState.start', ['$event'],] },],
    "_onAnimationEnd": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"], args: ['@openState.done', ['$event'],] },],
    "_onKeyDown": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"], args: ['keydown', ['$event'],] },],
};
function throwDrawerContainerError(align) {
    throw new Error("A drawer was already declared for 'align=\"" + align + "\"'");
}
var DrawerContainer = /** @class */ (function () {
    function DrawerContainer(_elementRef, _renderer, _ngZone, _changeDetector) {
        this._elementRef = _elementRef;
        this._renderer = _renderer;
        this._ngZone = _ngZone;
        this._changeDetector = _changeDetector;
        this._contentMargins = { left: 0, right: 0 };
        this._doCheckSubject = new rxjs__WEBPACK_IMPORTED_MODULE_5__["Subject"]();
        this._destroyed = new rxjs__WEBPACK_IMPORTED_MODULE_5__["Subject"]();
        this._hostClass = true;
    }
    DrawerContainer.prototype.ngDoCheck = function () {
        var _this = this;
        this._ngZone.runOutsideAngular(function () { return _this._doCheckSubject.next(); });
    };
    DrawerContainer.prototype.ngAfterContentInit = function () {
        var _this = this;
        this._doCheckSubject
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["debounceTime"])(10), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["takeUntil"])(this._destroyed))
            .subscribe(function () { return _this._calculateContentMargins(); });
        this._drawers.changes.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["startWith"])(null)).subscribe(function () {
            _this._validateDrawers();
            _this._drawers.forEach(function (drawer) {
                drawer._animationStarted
                    .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["takeUntil"])(_this._drawers.changes), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["filter"])(function (event) { return event.fromState !== event.toState; }))
                    .subscribe(function () {
                    _this._calculateContentMargins();
                });
                drawer._openChange.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["takeUntil"])(_this._drawers.changes)).subscribe(function (isOpen) {
                    if (isOpen) {
                        _this._setContainerClass(true);
                    }
                    else {
                        _this._setContainerClass(false);
                    }
                });
            });
            if (!_this._drawers.length || _this._isDrawerOpen(_this._leftDrawer) || _this._isDrawerOpen(_this._rightDrawer)) {
                _this._calculateContentMargins();
            }
        });
    };
    DrawerContainer.prototype._isDrawerOpen = function (drawer) {
        return drawer != null && drawer.opened;
    };
    DrawerContainer.prototype.open = function () {
        return Promise.all([this._leftDrawer, this._rightDrawer].map(function (drawer) { return drawer && drawer.toggleOpen(); }));
    };
    DrawerContainer.prototype.close = function () {
        return Promise.all([this._leftDrawer, this._rightDrawer].map(function (drawer) { return drawer && drawer.toggleClose(); }));
    };
    DrawerContainer.prototype._calculateContentMargins = function () {
        var _this = this;
        var left = 0;
        var right = 0;
        if (this._leftDrawer && this._leftDrawer.opened) {
            if (this._leftDrawer.mode === 'side') {
                left += this._leftDrawer._width;
            }
            else if (this._leftDrawer.mode === 'push') {
                left += this._leftDrawer._width;
                right -= this._leftDrawer._width;
            }
        }
        if (this._rightDrawer && this._rightDrawer.opened) {
            if (this._rightDrawer.mode === 'side') {
                right += this._rightDrawer._width;
            }
            else if (this._rightDrawer.mode === 'push') {
                right += this._rightDrawer._width;
                left -= this._rightDrawer._width;
            }
        }
        if (left !== this._contentMargins.left || right !== this._contentMargins.right) {
            this._contentMargins = { left: left, right: right };
            this._ngZone.run(function () { return _this._changeDetector.markForCheck(); });
        }
    };
    DrawerContainer.prototype._validateDrawers = function () {
        try {
            for (var _a = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__values"])(this._drawers.toArray()), _b = _a.next(); !_b.done; _b = _a.next()) {
                var drawer = _b.value;
                if (drawer.align === 'right') {
                    if (this._rightDrawer != null) {
                        throwDrawerContainerError('right');
                    }
                    this._rightDrawer = drawer;
                }
                else {
                    if (this._leftDrawer != null) {
                        throwDrawerContainerError('left');
                    }
                    this._leftDrawer = drawer;
                }
            }
        }
        catch (e_5_1) { e_5 = { error: e_5_1 }; }
        finally {
            try {
                if (_b && !_b.done && (_c = _a.return)) _c.call(_a);
            }
            finally { if (e_5) throw e_5.error; }
        }
        var e_5, _c;
    };
    DrawerContainer.prototype._setContainerClass = function (isOpen) {
        if (isOpen) {
            this._renderer.addClass(this._elementRef.nativeElement, 'hc-drawer-opened');
        }
        else {
            this._renderer.removeClass(this._elementRef.nativeElement, 'hc-drawer-opened');
        }
    };
    DrawerContainer.prototype.ngOnDestroy = function () {
        this._destroyed.next();
        this._destroyed.complete();
        this._doCheckSubject.complete();
    };
    return DrawerContainer;
}());
DrawerContainer.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"], args: [{
                selector: 'hc-drawer-container',
                template: "<ng-content select=\"hc-drawer,hc-menu-drawer\"></ng-content>\n<div class=\"hc-drawer-content\"\n     [style.margin-left.px]=\"_contentMargins.left\"\n     [style.margin-right.px]=\"_contentMargins.right\">\n    <ng-content></ng-content>\n</div>\n",
                styles: [".hc-drawer,.hc-menu-drawer{display:block;position:absolute;top:0;bottom:0;outline:0;-webkit-box-sizing:border-box;box-sizing:border-box;height:100%;overflow-y:auto;z-index:3;-webkit-transform:translate3d(-100%,0,0);transform:translate3d(-100%,0,0)}.hc-drawer.hc-drawer-right,.hc-menu-drawer.hc-drawer-right{right:0;-webkit-transform:translate3d(100%,0,0);transform:translate3d(100%,0,0)}.hc-drawer.hc-drawer-opened:not(.drawer-side),.hc-drawer.hc-drawer-opening:not(.drawer-side),.hc-menu-drawer.hc-drawer-opened:not(.drawer-side),.hc-menu-drawer.hc-drawer-opening:not(.drawer-side){-webkit-box-shadow:0 8px 10px -5px rgba(0,0,0,.2),0 16px 24px 2px rgba(0,0,0,.14),0 6px 30px 5px rgba(0,0,0,.12);box-shadow:0 8px 10px -5px rgba(0,0,0,.2),0 16px 24px 2px rgba(0,0,0,.14),0 6px 30px 5px rgba(0,0,0,.12)}.hc-drawer-container{position:relative;z-index:1;display:block;-webkit-box-sizing:border-box;box-sizing:border-box;overflow:hidden}.hc-drawer-content{position:relative;z-index:1;padding:10px 20px;left:0;right:0;display:block;height:100%;overflow:auto;-webkit-transition-duration:.4s;transition-duration:.4s;-webkit-transition-timing-function:cubic-bezier(.25,.8,.25,1);transition-timing-function:cubic-bezier(.25,.8,.25,1);-webkit-transition-property:margin-left,margin-right,-webkit-transform;transition-property:margin-left,margin-right,-webkit-transform;transition-property:transform,margin-left,margin-right;transition-property:transform,margin-left,margin-right,-webkit-transform}"],
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None
            },] },
];
DrawerContainer.ctorParameters = function () { return [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"], },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], },
]; };
DrawerContainer.propDecorators = {
    "_drawers": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ContentChildren"], args: [Drawer,] },],
    "_hostClass": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"], args: ['class.hc-drawer-container',] },],
};
var DrawerToolbar = /** @class */ (function () {
    function DrawerToolbar() {
        this._hostClass = true;
    }
    return DrawerToolbar;
}());
DrawerToolbar.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"], args: [{
                selector: '[hcDrawerToolbar]'
            },] },
];
DrawerToolbar.propDecorators = {
    "_hostClass": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"], args: ['class.hc-drawer-toolbar',] },],
};
var drawerThemes = ['dark-theme'];
function validateMenuDrawerTheme(menuTheme) {
    if (!drawerThemes.some(function (theme) { return theme === menuTheme; })) {
        throw new Error('Unsupported menuTheme: ' + menuTheme);
    }
}
var MenuDrawer = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(MenuDrawer, _super);
    function MenuDrawer(elementRef, renderer) {
        var _this = _super.call(this, elementRef) || this;
        _this.renderer = renderer;
        _this._previousTheme = null;
        _this._hostClass = true;
        _this.menuTheme = 'dark-theme';
        return _this;
    }
    Object.defineProperty(MenuDrawer.prototype, "menuTheme", {
        get: function () {
            return this._menuTheme;
        },
        set: function (menuStyle) {
            validateMenuDrawerTheme(menuStyle);
            this._setThemeClass(this._themeClass(menuStyle));
            this._previousTheme = this._menuTheme;
            this._menuTheme = menuStyle;
        },
        enumerable: true,
        configurable: true
    });
    MenuDrawer.prototype.ngAfterContentInit = function () {
        _super.prototype.ngAfterContentInit.call(this);
        if (this.toolbar != null) {
            this.renderer.addClass(this.elementRef.nativeElement, 'hc-drawer-toolbar-visible');
        }
        else {
            this.renderer.removeClass(this.elementRef.nativeElement, 'hc-drawer-toolbar-visible');
        }
    };
    MenuDrawer.prototype._themeClass = function (menuStyle) {
        return "hc-menu-drawer-" + menuStyle;
    };
    MenuDrawer.prototype._setThemeClass = function (className) {
        if (this._previousTheme !== className) {
            if (this._previousTheme || this._menuTheme) {
                this.renderer.removeClass(this.elementRef.nativeElement, this._previousTheme || this.menuTheme);
            }
            this.renderer.addClass(this.elementRef.nativeElement, className);
        }
    };
    return MenuDrawer;
}(Drawer));
MenuDrawer.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"], args: [{
                selector: 'hc-menu-drawer',
                template: "<div class=\"hc-menu-drawer-toolbar-container\">\n    <ng-content select=\"[hcDrawerToolbar]\"></ng-content>\n</div>\n<div class=\"hc-menu-drawer-item-container\">\n    <div class=\"drawer-menu\">\n        <ng-content select=\"hc-drawer-item\"></ng-content>\n    </div>\n</div>\n",
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
                styles: [".hc-drawer,.hc-menu-drawer{display:block;position:absolute;top:0;bottom:0;outline:0;-webkit-box-sizing:border-box;box-sizing:border-box;height:100%;overflow-y:auto;z-index:3;-webkit-transform:translate3d(-100%,0,0);transform:translate3d(-100%,0,0)}.hc-drawer.hc-drawer-right,.hc-menu-drawer.hc-drawer-right{right:0;-webkit-transform:translate3d(100%,0,0);transform:translate3d(100%,0,0)}.hc-drawer.hc-drawer-opened:not(.drawer-side),.hc-drawer.hc-drawer-opening:not(.drawer-side),.hc-menu-drawer.hc-drawer-opened:not(.drawer-side),.hc-menu-drawer.hc-drawer-opening:not(.drawer-side){-webkit-box-shadow:0 8px 10px -5px rgba(0,0,0,.2),0 16px 24px 2px rgba(0,0,0,.14),0 6px 30px 5px rgba(0,0,0,.12);box-shadow:0 8px 10px -5px rgba(0,0,0,.2),0 16px 24px 2px rgba(0,0,0,.14),0 6px 30px 5px rgba(0,0,0,.12)}.hc-drawer-container{position:relative;z-index:1;display:block;-webkit-box-sizing:border-box;box-sizing:border-box;overflow:hidden}.hc-drawer-content{position:relative;z-index:1;padding:10px 20px;left:0;right:0;display:block;height:100%;overflow:auto;-webkit-transition-duration:.4s;transition-duration:.4s;-webkit-transition-timing-function:cubic-bezier(.25,.8,.25,1);transition-timing-function:cubic-bezier(.25,.8,.25,1);-webkit-transition-property:margin-left,margin-right,-webkit-transform;transition-property:margin-left,margin-right,-webkit-transform;transition-property:transform,margin-left,margin-right;transition-property:transform,margin-left,margin-right,-webkit-transform}", ".hc-menu-drawer{display:block;overflow:hidden}.hc-menu-drawer.hc-drawer-toolbar-visible .hc-menu-drawer-item-container{height:calc(100% - 52px)}.hc-menu-drawer-toolbar-container{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;font-size:18px;color:#00aeff;background-color:#555d63}.hc-drawer-toolbar{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;-webkit-box-align:center;-ms-flex-align:center;align-items:center;padding:15px 28px;max-height:52px;height:52px;overflow:hidden}.hc-menu-drawer-item-container{background-color:#5e676f;height:100%;overflow-y:auto;padding-right:28px}.hc-drawer-item{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;width:100%;padding:15px 0 15px 15px;color:#fff}.hc-drawer-item:not(:first-child){border-top:1px solid #6b737b;border-bottom:1px solid #6b737b}.hc-drawer-right .hc-menu-drawer-item-container{padding:0 0 0 28px}.hc-drawer-right .hc-drawer-item{padding:15px 15px 15px 0}"],
                animations: [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["trigger"])('openState', [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["state"])('open, open-instant', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({
                            transform: 'translate3d(0, 0, 0)',
                            visibility: 'visible'
                        })),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["state"])('void', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({
                            'box-shadow': 'none',
                            visibility: 'hidden'
                        })),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])('void => open-instant', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])('0ms')),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])('void <=> open, open-instant => void', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])('400ms cubic-bezier(0.25, 0.8, 0.25, 1)'))
                    ])
                ],
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
                providers: [{ provide: Drawer, useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["forwardRef"])(function () { return MenuDrawer; }) }]
            },] },
];
MenuDrawer.ctorParameters = function () { return [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], },
]; };
MenuDrawer.propDecorators = {
    "toolbar": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ContentChild"], args: [DrawerToolbar,] },],
    "menuTheme": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] },],
    "_hostClass": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"], args: ['class.hc-menu-drawer',] },],
};
var DrawerItem = /** @class */ (function () {
    function DrawerItem() {
        this._hostClass = true;
    }
    return DrawerItem;
}());
DrawerItem.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"], args: [{
                selector: 'hc-drawer-item',
                template: '<ng-content></ng-content>',
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None
            },] },
];
DrawerItem.propDecorators = {
    "_hostClass": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"], args: ['class.hc-drawer-item',] },],
};
var exportedComponents = [Drawer, DrawerContainer, MenuDrawer, DrawerItem, DrawerToolbar];
var DrawerModule = /** @class */ (function () {
    function DrawerModule() {
    }
    return DrawerModule;
}());
DrawerModule.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"], args: [{
                imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"]],
                declarations: exportedComponents,
                exports: exportedComponents
            },] },
];
function getUnsupportedHCInputType(type) {
    return new Error("hc-input doesn't support the following type: " + type);
}
var uniqueId = 1;
var unsupportedTypes = ['button', 'checkbox', 'file', 'hidden', 'image', 'radio', 'reset'];
var InputDirective = /** @class */ (function () {
    function InputDirective(_elementRef, _parentForm, _parentFormGroup, _ngControl) {
        this._elementRef = _elementRef;
        this._ngControl = _ngControl;
        this._focused = false;
        this._uniqueInputId = "hc-input-" + uniqueId++;
        this._errorState = false;
        this._type = 'input';
        this._readonly = false;
        this._disabled = false;
        this._required = false;
        this._hostHcInputClass = true;
        this._form = _parentForm || _parentFormGroup;
    }
    Object.defineProperty(InputDirective.prototype, "type", {
        get: function () {
            return this._type;
        },
        set: function (type) {
            if (unsupportedTypes.indexOf(type) > -1) {
                throw getUnsupportedHCInputType(type);
            }
            this._type = type;
            if (!this._isTextArea()) {
                this._elementRef.nativeElement.type = this.type;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(InputDirective.prototype, "id", {
        get: function () {
            return this._id || this._uniqueInputId;
        },
        set: function (id) {
            this._id = id;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(InputDirective.prototype, "readonly", {
        get: function () {
            return this._readonly;
        },
        set: function (isReadOnly) {
            this._readonly = parseBooleanAttribute(isReadOnly);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(InputDirective.prototype, "disabled", {
        get: function () {
            if (this._ngControl && this._ngControl.disabled) {
                return this._ngControl.disabled;
            }
            return this._disabled;
        },
        set: function (isDisabled) {
            this._disabled = parseBooleanAttribute(isDisabled);
            if (this._focused) {
                this._focused = false;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(InputDirective.prototype, "required", {
        get: function () {
            return this._required;
        },
        set: function (required) {
            this._required = parseBooleanAttribute(required);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(InputDirective.prototype, "_hostId", {
        get: function () {
            return this.id;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(InputDirective.prototype, "_hostReadOnly", {
        get: function () {
            return this.readonly;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(InputDirective.prototype, "_hostDisabled", {
        get: function () {
            return this.disabled;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(InputDirective.prototype, "_hostRequired", {
        get: function () {
            return this.required;
        },
        enumerable: true,
        configurable: true
    });
    InputDirective.prototype._onBlur = function () {
        this._changeFocus(false);
    };
    InputDirective.prototype._onFocus = function () {
        this._changeFocus(true);
    };
    Object.defineProperty(InputDirective.prototype, "value", {
        get: function () {
            return this._elementRef.nativeElement.value;
        },
        set: function (value) {
            if (value !== this.value) {
                this._elementRef.nativeElement.value = value;
            }
        },
        enumerable: true,
        configurable: true
    });
    InputDirective.prototype._inputEvent = function () {
    };
    InputDirective.prototype.ngDoCheck = function () {
        if (this._ngControl) {
            this._updateErrorState();
        }
    };
    InputDirective.prototype.focus = function () {
        this._elementRef.nativeElement.focus();
    };
    InputDirective.prototype._changeFocus = function (focused) {
        if (this._focused !== focused && !this.readonly) {
            this._focused = focused;
        }
    };
    InputDirective.prototype._isTextArea = function () {
        return this._elementRef.nativeElement.nodeName.toLowerCase() !== 'textarea';
    };
    InputDirective.prototype._updateErrorState = function () {
        var oldState = this._errorState;
        var newState = !!(this._ngControl &&
            this._ngControl.invalid &&
            (this._ngControl.touched || (this._form && this._form.submitted)));
        if (oldState !== newState) {
            this._errorState = newState;
        }
    };
    return InputDirective;
}());
InputDirective.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"], args: [{
                selector: '[hcInput]'
            },] },
];
InputDirective.ctorParameters = function () { return [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_9__["NgForm"], decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"] },] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormGroupDirective"], decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"] },] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_9__["NgControl"], decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Self"] },] },
]; };
InputDirective.propDecorators = {
    "placeholder": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] },],
    "type": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] },],
    "id": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] },],
    "readonly": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] },],
    "disabled": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] },],
    "required": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] },],
    "_hostHcInputClass": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"], args: ['class.hc-input',] },],
    "_hostId": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"], args: ['attr.id',] },],
    "_hostReadOnly": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"], args: ['readonly',] },],
    "_hostDisabled": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"], args: ['disabled',] },],
    "_hostRequired": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"], args: ['required',] },],
    "_onBlur": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"], args: ['blur',] },],
    "_onFocus": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"], args: ['focus',] },],
    "value": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] },],
    "_inputEvent": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"], args: ['input',] },],
};
var HcErrorComponent = /** @class */ (function () {
    function HcErrorComponent() {
        this._hostClass = true;
    }
    return HcErrorComponent;
}());
HcErrorComponent.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"], args: [{
                selector: 'hc-error',
                template: '<ng-content></ng-content>',
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None
            },] },
];
HcErrorComponent.propDecorators = {
    "_hostClass": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"], args: ['class.hc-error',] },],
};
var HcPrefixDirective = /** @class */ (function () {
    function HcPrefixDirective() {
        this._hostHcPrefixClass = true;
    }
    return HcPrefixDirective;
}());
HcPrefixDirective.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"], args: [{
                selector: '[hcPrefix]'
            },] },
];
HcPrefixDirective.propDecorators = {
    "_hostHcPrefixClass": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"], args: ['class.hc-prefix',] },],
};
var HcSuffixDirective = /** @class */ (function () {
    function HcSuffixDirective() {
        this._hostHcSuffixClass = true;
    }
    return HcSuffixDirective;
}());
HcSuffixDirective.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"], args: [{
                selector: '[hcSuffix]'
            },] },
];
HcSuffixDirective.propDecorators = {
    "_hostHcSuffixClass": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"], args: ['class.hc-suffix',] },],
};
function getInputContainerControlMissing() {
    return new Error("InputContainerComponent must contain a hcInput.\n     Make sure to add hcInput to the native input or textarea element");
}
var HcFormFieldComponent = /** @class */ (function () {
    function HcFormFieldComponent() {
        this._classHcFormFieldClass = true;
    }
    Object.defineProperty(HcFormFieldComponent.prototype, "_disabledClass", {
        get: function () {
            return this._control.disabled;
        },
        enumerable: true,
        configurable: true
    });
    HcFormFieldComponent.prototype.ngAfterContentInit = function () {
        if (!this._control) {
            throw getInputContainerControlMissing();
        }
    };
    HcFormFieldComponent.prototype._shouldShowErrorMessages = function () {
        return this._errorChildren && this._errorChildren.length > 0 && this._control._errorState;
    };
    return HcFormFieldComponent;
}());
HcFormFieldComponent.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"], args: [{
                selector: 'hc-form-field',
                template: "<div class=\"hc-form-field-wrapper\">\n    <span class=\"hc-form-field-label-wrapper\">\n                <label class=\"hc-form-field-label\"\n                       [attr.for]=\"_control.id\">\n                    <ng-content select=\"hc-label\"></ng-content>\n                    <span class=\"hc-required-marker\" aria-hidden=\"true\"\n                          *ngIf=\"(_control.required )&& !_control.disabled\">&nbsp;*</span>\n                </label>\n            </span>\n    <div class=\"hc-form-field-flex\">\n        <div class=\"hc-form-field-prefix\" *ngIf=\"_prefixChildren.length\">\n            <ng-content select=\"[hcPrefix]\"></ng-content>\n        </div>\n        <div class=\"hc-form-field-infix\">\n            <ng-content></ng-content>\n        </div>\n        <div class=\"hc-form-field-suffix\" *ngIf=\"_suffixChildren.length\">\n            <ng-content select=\"[hcSuffix]\"></ng-content>\n        </div>\n    </div>\n    <div class=\"hc-form-field-error-wrapper\" *ngIf=\"_shouldShowErrorMessages()\">\n        <ng-content select=\"hc-error\"></ng-content>\n    </div>\n</div>\n",
                styles: [".hc-form-field{display:inline-block;position:relative;text-align:left;font-size:inherit;font-family:'Open Sans','Helvetica Neue',Helvetica,Arial,sans-serif;font-weight:400;line-height:1.5}.hc-form-field-wrapper{position:relative;border-top:1.5em solid transparent;padding-bottom:1.525em}.hc-form-field-flex{display:-webkit-inline-box;display:-ms-inline-flexbox;display:inline-flex;-webkit-box-align:baseline;-ms-flex-align:baseline;align-items:baseline;-webkit-box-sizing:border-box;box-sizing:border-box;width:100%;padding:0 7px 0 0;border:1.5px solid #ccc;background:#fff}.hc-form-field-prefix,.hc-form-field-suffix{white-space:nowrap;-webkit-box-flex:0;-ms-flex:none;flex:none;position:relative}.hc-form-field-prefix .hc-icon,.hc-form-field-suffix .hc-icon{color:#a1a1a1;font-size:125%;line-height:1.5}.hc-form-field-infix{display:block;position:relative;-webkit-box-flex:1;-ms-flex:auto;flex:auto;min-width:120px;padding:.393em 10px}.hc-form-field-label-wrapper{position:absolute;left:0;-webkit-box-sizing:content-box;box-sizing:content-box;width:100%;height:100%;overflow:hidden;pointer-events:none;top:-1.5em;padding-top:1.5em}.hc-form-field-label-wrapper .hc-icon{width:1em;height:1em;font-size:inherit;vertical-align:baseline}.hc-form-field-label{position:absolute;left:0;font:inherit;font-size:1rem;color:rgba(0,0,0,.6);pointer-events:none;width:100%;white-space:nowrap;text-overflow:ellipsis;overflow:hidden;top:1.893em;-webkit-transform:translateY(-1.893em) scale(1);transform:translateY(-1.893em) scale(1);display:block;-webkit-transform-origin:0 0;transform-origin:0 0}.hc-form-field-error-wrapper{position:absolute;-webkit-box-sizing:border-box;box-sizing:border-box;width:100%;overflow:hidden;margin-top:.53333em;font-size:75%}.hc-error{display:block;color:#cc2027}.hc-form-field-disabled .hc-form-field-flex{cursor:not-allowed;border:1.5px solid #e0e0e0;background-color:#f0f3f6;color:#adadad}.hc-required-marker{color:#f13c45}", ".hc-input{font:inherit;background:inherit;color:currentColor;border:none;outline:0;padding:0;margin:0;width:100%;max-width:100%;vertical-align:bottom;text-align:inherit}.hc-input[disabled]{cursor:not-allowed}.hc-input:-moz-ui-invalid{box-shadow:none}.hc-input::-ms-clear,.hc-input::-ms-reveal{display:none}.hc-input::-webkit-input-placeholder{color:#c0c5cc}.hc-input::placeholder{color:#c0c5cc}.hc-input:-ms-input-placeholder{color:#c0c5cc}.hc-input::-ms-input-placeholder{color:#c0c5cc}.hc-form-field-disabled .hc-form-field-flex{cursor:not-allowed;border:1.5px solid #e0e0e0;background-color:#f0f3f6;color:tint(#333,60%)}textarea.hc-input{resize:vertical;overflow:auto;padding:2px 0;margin:-2px 0}"],
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None
            },] },
];
HcFormFieldComponent.propDecorators = {
    "_control": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ContentChild"], args: [InputDirective,] },],
    "_errorChildren": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ContentChildren"], args: [HcErrorComponent,] },],
    "_prefixChildren": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ContentChildren"], args: [HcPrefixDirective,] },],
    "_suffixChildren": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ContentChildren"], args: [HcSuffixDirective,] },],
    "_classHcFormFieldClass": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"], args: ['class.hc-form-field',] },],
    "_disabledClass": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"], args: ['class.hc-form-field-disabled',] },],
};
var HcLabelComponent = /** @class */ (function () {
    function HcLabelComponent() {
        this._hostHcLabelClass = true;
    }
    return HcLabelComponent;
}());
HcLabelComponent.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"], args: [{
                selector: 'hc-label',
                template: '<ng-content></ng-content>',
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None
            },] },
];
HcLabelComponent.propDecorators = {
    "_hostHcLabelClass": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"], args: ['class.hc-label',] },],
};
var InputModule = /** @class */ (function () {
    function InputModule() {
    }
    return InputModule;
}());
InputModule.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"], args: [{
                imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"]],
                declarations: [HcFormFieldComponent, InputDirective, HcErrorComponent, HcPrefixDirective, HcSuffixDirective, HcLabelComponent],
                exports: [HcFormFieldComponent, InputDirective, HcErrorComponent, HcPrefixDirective, HcSuffixDirective, HcLabelComponent]
            },] },
];
var LabelComponent = /** @class */ (function () {
    function LabelComponent() {
        this.hostClass = true;
        this._required = false;
    }
    Object.defineProperty(LabelComponent.prototype, "required", {
        get: function () {
            return this._required;
        },
        set: function (isRequired) {
            this._required = parseBooleanAttribute(isRequired);
        },
        enumerable: true,
        configurable: true
    });
    return LabelComponent;
}());
LabelComponent.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"], args: [{
                selector: 'label[hc-label]',
                template: "<div [ngClass]=\"{'label-required': _required}\"><ng-content></ng-content></div>",
                styles: [".hc-label{display:block;color:#6d6e70;font-size:1.07143rem;margin-bottom:8px}.label-required:after{content:'*';margin-left:5px;color:#f13c45}"],
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None
            },] },
];
LabelComponent.ctorParameters = function () { return []; };
LabelComponent.propDecorators = {
    "hostClass": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"], args: ['class.hc-label',] },],
    "required": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] },],
};
var LabelModule = /** @class */ (function () {
    function LabelModule() {
    }
    return LabelModule;
}());
LabelModule.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"], args: [{
                imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"]],
                exports: [LabelComponent],
                declarations: [LabelComponent]
            },] },
];
var ListComponent = /** @class */ (function () {
    function ListComponent() {
        this._hostClass = true;
    }
    return ListComponent;
}());
ListComponent.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"], args: [{
                selector: 'hc-list',
                template: "<ng-content></ng-content>\n",
                styles: [".hc-list{display:block}"],
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None
            },] },
];
ListComponent.propDecorators = {
    "_hostClass": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"], args: ['class.hc-list',] },],
};
var ListItemComponent = /** @class */ (function () {
    function ListItemComponent() {
        this._hostClass = true;
    }
    return ListItemComponent;
}());
ListItemComponent.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"], args: [{
                selector: 'hc-list-item',
                template: "<div class=\"hc-list-content\">\n    <ng-content select=\"[hcListAvatar], [hcListIcon]\"></ng-content>\n    <div class=\"hc-list-text\">\n        <ng-content select=\"[hcListLine]\"></ng-content>\n    </div>\n    <ng-content></ng-content>\n</div>\n",
                styles: [".hc-list-item{display:block;height:56px;color:rgba(0,0,0,.87);font-size:16px}.hc-list-content{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;-webkit-box-align:center;-ms-flex-align:center;align-items:center;height:inherit;padding:0 12px}.hc-list-text{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;width:100%;padding-left:16px}.hc-list-avatar,.hc-list-icon{font-size:24px;width:24px;height:24px;padding:4px}.hc-list-avatar{border-radius:50%}.hc-list .hc-list-line{display:block;padding:0;margin:0;font-weight:400;font-size:inherit;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}"],
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None
            },] },
];
ListItemComponent.propDecorators = {
    "_hostClass": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"], args: ['class.hc-list-item',] },],
};
var ListAvatarDirective = /** @class */ (function () {
    function ListAvatarDirective() {
    }
    Object.defineProperty(ListAvatarDirective.prototype, "_hostClass", {
        get: function () {
            return true;
        },
        enumerable: true,
        configurable: true
    });
    return ListAvatarDirective;
}());
ListAvatarDirective.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"], args: [{
                selector: '[hcListAvatar]'
            },] },
];
ListAvatarDirective.propDecorators = {
    "_hostClass": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"], args: ['class.hc-list-avatar',] },],
};
var ListIconDirective = /** @class */ (function () {
    function ListIconDirective() {
        this._hostClass = true;
    }
    return ListIconDirective;
}());
ListIconDirective.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"], args: [{
                selector: '[hcListIcon]'
            },] },
];
ListIconDirective.propDecorators = {
    "_hostClass": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"], args: ['class.hc-list-icon',] },],
};
var ListLineDirective = /** @class */ (function () {
    function ListLineDirective() {
    }
    return ListLineDirective;
}());
ListLineDirective.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"], args: [{
                selector: '[hcListLine]'
            },] },
];
ListLineDirective.propDecorators = {
    "_hostClass": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"], args: ['class.hc-list-line',] },],
};
var ListModule = /** @class */ (function () {
    function ListModule() {
    }
    return ListModule;
}());
ListModule.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"], args: [{
                imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"]],
                declarations: [ListComponent, ListItemComponent, ListAvatarDirective, ListIconDirective, ListLineDirective],
                exports: [ListComponent, ListItemComponent, ListAvatarDirective, ListIconDirective, ListLineDirective]
            },] },
];
var ActiveModal = /** @class */ (function () {
    function ActiveModal() {
    }
    ActiveModal.prototype.close = function (result) { };
    ActiveModal.prototype.dismiss = function () { };
    return ActiveModal;
}());
var ModalComponent = /** @class */ (function () {
    function ModalComponent() {
        this._modalWrapperClass = true;
    }
    return ModalComponent;
}());
ModalComponent.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"], args: [{
                selector: 'hc-modal',
                template: "<ng-content></ng-content>"
            },] },
];
ModalComponent.propDecorators = {
    "_modalWrapperClass": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"], args: ['class.hc-modal-content',] },],
};
var ModalFooterComponent = /** @class */ (function () {
    function ModalFooterComponent() {
        this._modalFooterClass = true;
    }
    return ModalFooterComponent;
}());
ModalFooterComponent.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"], args: [{
                selector: 'hc-modal-footer',
                template: "<ng-content></ng-content>"
            },] },
];
ModalFooterComponent.propDecorators = {
    "_modalFooterClass": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"], args: ['class.hc-modal-footer',] },],
};
var ModalWindowComponent = /** @class */ (function () {
    function ModalWindowComponent(activeModal, el) {
        this.activeModal = activeModal;
        this.el = el;
        this._ignoreOverlayClick = false;
        this._size = 'md';
    }
    ModalWindowComponent.prototype._fadeInOut = function () {
        return _angular_animations__WEBPACK_IMPORTED_MODULE_2__["state"];
    };
    ModalWindowComponent.prototype._overlayClick = function (event) {
        var _this = this;
        var modalContentNotPresent = true;
        var modalWindowTargetIncluded = event.path.findIndex(function (p) { return p === _this.el.nativeElement; }) > -1;
        var classList = event.path.map(function (p) { return p.classList; });
        try {
            for (var classList_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__values"])(classList), classList_1_1 = classList_1.next(); !classList_1_1.done; classList_1_1 = classList_1.next()) {
                var cl = classList_1_1.value;
                if (cl) {
                    if (cl.contains('hc-modal-content')) {
                        modalContentNotPresent = false;
                    }
                }
            }
        }
        catch (e_6_1) { e_6 = { error: e_6_1 }; }
        finally {
            try {
                if (classList_1_1 && !classList_1_1.done && (_a = classList_1.return)) _a.call(classList_1);
            }
            finally { if (e_6) throw e_6.error; }
        }
        if (!this._ignoreOverlayClick && modalContentNotPresent && modalWindowTargetIncluded) {
            this.activeModal.close();
        }
        var e_6, _a;
    };
    return ModalWindowComponent;
}());
ModalWindowComponent.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"], args: [{
                selector: 'hc-modal-window',
                template: "<div [class]=\"'hc-modal hc-modal-' + _size\">\n                     <ng-content></ng-content>\n               </div>",
                styles: [":host{position:fixed;display:-webkit-box;display:-ms-flexbox;display:flex;top:0;right:0;bottom:0;left:0;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center}.hc-modal{max-height:calc(100% - 50px);height:calc(100% - 50px);min-height:135px;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center}.hc-modal-sm{width:300px}.hc-modal-md{width:500px}.hc-modal-lg{width:800px}.hc-modal-xl{width:992px}"],
                animations: [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["trigger"])('fadeInOut', [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["state"])('in', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({ opacity: 1 })),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])('void <=> *', [
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({
                                opacity: 0
                            }),
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])('0.2s ease-in-out')
                        ])
                    ])
                ]
            },] },
];
ModalWindowComponent.ctorParameters = function () { return [
    { type: ActiveModal, },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], },
]; };
ModalWindowComponent.propDecorators = {
    "_ignoreOverlayClick": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] },],
    "_size": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] },],
    "_fadeInOut": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"], args: ['@fadeInOut',] },],
    "_overlayClick": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"], args: ['click', ['$event'],] },],
};
var ModalOverlayComponent = /** @class */ (function () {
    function ModalOverlayComponent(activeModal) {
        this.activeModal = activeModal;
        this._ignoreEscapeKey = false;
    }
    ModalOverlayComponent.prototype._fadeInOut = function () {
        return _angular_animations__WEBPACK_IMPORTED_MODULE_2__["state"];
    };
    ModalOverlayComponent.prototype._escapeKey = function (event) {
        if (!this._ignoreEscapeKey) {
            this.activeModal.close();
        }
    };
    return ModalOverlayComponent;
}());
ModalOverlayComponent.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"], args: [{
                selector: 'hc-modal-overlay',
                template: '',
                styles: [
                    ":host{\n                background-color: #000;\n                position: fixed;\n                top: 0;\n                left: 0;\n                right: 0;\n                bottom: 0;\n                opacity: .5;\n                display: block;\n            }"
                ],
                animations: [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["trigger"])('fadeInOut', [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["state"])('in', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({ opacity: 0.5 })),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])('void <=> *', [
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({
                                opacity: 0
                            }),
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])('0.2s ease-in-out')
                        ])
                    ])
                ]
            },] },
];
ModalOverlayComponent.ctorParameters = function () { return [
    { type: ActiveModal, },
]; };
ModalOverlayComponent.propDecorators = {
    "_ignoreEscapeKey": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] },],
    "_fadeInOut": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"], args: ['@fadeInOut',] },],
    "_escapeKey": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"], args: ['document:keyup.escape', ['$event'],] },],
};
var HcModal = /** @class */ (function () {
    function HcModal() {
        this.result = new rxjs__WEBPACK_IMPORTED_MODULE_5__["Subject"]();
    }
    HcModal.prototype.close = function (result) {
        this.removeModalElements();
        this.result.next(result);
    };
    HcModal.prototype.dismiss = function () {
        this.removeModalElements();
    };
    HcModal.prototype.removeModalElements = function () {
        if (this.window) {
            var windowNativeElement = this.window.location.nativeElement;
            windowNativeElement.parentNode.removeChild(windowNativeElement);
            this.window.destroy();
        }
        if (this.overlay) {
            var overlayNativeElement = this.overlay.location.nativeElement;
            overlayNativeElement.parentNode.removeChild(overlayNativeElement);
            this.overlay.destroy();
        }
        if (this.componentRef) {
            var componentNativeElement = this.componentRef.location.nativeElement;
            componentNativeElement.parentNode.removeChild(componentNativeElement);
            this.componentRef.destroy();
        }
        if (this._removeOpenClass) {
            this._removeOpenClass();
        }
        this.window = null;
        this.overlay = null;
        this.componentRef = null;
        this._removeOpenClass = null;
    };
    return HcModal;
}());
var ModalService = /** @class */ (function () {
    function ModalService(componentFactoryResolver, injector, applicationRef, rendererFactory) {
        this.componentFactoryResolver = componentFactoryResolver;
        this.injector = injector;
        this.applicationRef = applicationRef;
        this._zIndexCounter = 2000;
        this._renderer = rendererFactory.createRenderer(null, null);
    }
    ModalService.prototype.open = function (modalContent, modalOptions) {
        var _this = this;
        var container = document.querySelector('body');
        if (modalOptions) {
            if (modalOptions.container) {
                container = modalOptions.container;
            }
        }
        var hcModal = new HcModal();
        var activeModalContext = new ActiveModal();
        var modalContextInjector = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ReflectiveInjector"].resolveAndCreate([{ provide: ActiveModal, useValue: activeModalContext }], this.injector);
        if (container) {
            this._renderer.addClass(container, 'hc-modal-open');
            hcModal._removeOpenClass = function () { return _this._renderer.removeClass(container, 'hc-modal-open'); };
            var overlay = this.componentFactoryResolver.resolveComponentFactory(ModalOverlayComponent).create(modalContextInjector);
            this._renderer.setStyle(overlay.location.nativeElement, 'z-index', this._zIndexCounter);
            if (modalOptions) {
                overlay.instance._ignoreEscapeKey = modalOptions.ignoreEscapeKey || false;
            }
            this.applicationRef.attachView(overlay.hostView);
            container.appendChild(overlay.location.nativeElement);
            hcModal.overlay = overlay;
            var projectableNodes = void 0;
            if (modalContent instanceof _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]) {
                var embeddedViewRef = modalContent.createEmbeddedView(activeModalContext);
                this.applicationRef.attachView(embeddedViewRef);
                projectableNodes = [embeddedViewRef.rootNodes];
            }
            else {
                var componentRef = this.componentFactoryResolver.resolveComponentFactory(modalContent).create(modalContextInjector);
                this._renderer.addClass(componentRef.location.nativeElement, 'hc-modal-center-component');
                this.applicationRef.attachView(componentRef.hostView);
                hcModal.componentRef = (componentRef);
                projectableNodes = [[componentRef.location.nativeElement]];
            }
            var window = this.componentFactoryResolver
                .resolveComponentFactory(ModalWindowComponent)
                .create(modalContextInjector, projectableNodes);
            this._renderer.setStyle(window.location.nativeElement, 'z-index', this._zIndexCounter + 1);
            if (modalOptions) {
                window.instance._size = modalOptions.size;
                window.instance._ignoreOverlayClick = modalOptions.ignoreOverlayClick || false;
                if (modalOptions.data) {
                    hcModal.data = modalOptions.data;
                    activeModalContext.data = modalOptions.data;
                }
            }
            this.applicationRef.attachView(window.hostView);
            container.appendChild(window.location.nativeElement);
            hcModal.window = window;
        }
        activeModalContext.close = function (result) {
            hcModal.close(result);
        };
        activeModalContext.dismiss = function () { return hcModal.dismiss(); };
        this._zIndexCounter += 2;
        return hcModal;
    };
    return ModalService;
}());
ModalService.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"] },
];
ModalService.ctorParameters = function () { return [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ComponentFactoryResolver"], },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"], },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ApplicationRef"], },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["RendererFactory2"], },
]; };
var ModalHeaderComponent = /** @class */ (function () {
    function ModalHeaderComponent() {
        this._modalHeaderClass = true;
    }
    return ModalHeaderComponent;
}());
ModalHeaderComponent.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"], args: [{
                selector: 'hc-modal-header',
                template: "<ng-content></ng-content>"
            },] },
];
ModalHeaderComponent.propDecorators = {
    "_modalHeaderClass": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"], args: ['class.hc-modal-header',] },],
};
var ModalBodyComponent = /** @class */ (function () {
    function ModalBodyComponent() {
        this._modalBodyClass = true;
    }
    return ModalBodyComponent;
}());
ModalBodyComponent.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"], args: [{
                selector: 'hc-modal-body',
                template: "<ng-content></ng-content>"
            },] },
];
ModalBodyComponent.propDecorators = {
    "_modalBodyClass": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"], args: ['class.hc-modal-body',] },],
};
var ModalModule = /** @class */ (function () {
    function ModalModule() {
    }
    return ModalModule;
}());
ModalModule.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"], args: [{
                imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"]],
                declarations: [
                    ModalOverlayComponent,
                    ModalWindowComponent,
                    ModalHeaderComponent,
                    ModalBodyComponent,
                    ModalFooterComponent,
                    ModalComponent
                ],
                entryComponents: [ModalOverlayComponent, ModalWindowComponent],
                exports: [ModalHeaderComponent, ModalBodyComponent, ModalFooterComponent, ModalComponent],
                providers: [ModalService, ActiveModal]
            },] },
];
var ModalOptions = /** @class */ (function () {
    function ModalOptions() {
        this.size = 'md';
    }
    return ModalOptions;
}());
var NavbarMobileMenuComponent = /** @class */ (function () {
    function NavbarMobileMenuComponent() {
        this._yPos = '-100';
    }
    NavbarMobileMenuComponent.prototype.show = function () {
        this._yPos = '0';
    };
    NavbarMobileMenuComponent.prototype.hide = function () {
        this._yPos = '-100';
    };
    return NavbarMobileMenuComponent;
}());
NavbarMobileMenuComponent.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"], args: [{
                selector: 'hc-navbar-mobile-menu',
                template: "<div class=\"menu-dropdown\" [style.top.%]=\"_yPos\">\n    <ng-content></ng-content>\n    <div class=\"bottomSpacer\"></div>\n    <!--<a *ngIf=\"appSwitcher=='true' && _appSwitcherService?.allApplicationsUri\" class=\"app-switcher\" href={{_appSwitcherService?.allApplicationsUri}}>\n        <hc-icon fontSet=\"fa\" fontIcon=\"fa-th\"></hc-icon>\n        <span>View all my applications</span>\n    </a>-->\n</div>\n",
                styles: [".menu-dropdown{width:100%;background-color:#262f34;margin-top:53px;position:fixed;z-index:1060;padding-top:15px;display:none;-webkit-transition:top .7s ease;transition:top .7s ease}@media (max-width:768px){.menu-dropdown{display:inline}}.app-switcher{height:55px;padding-left:2%;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;color:#c0c5cc;border-top:1px solid #51646f;text-decoration:none;-webkit-transition:background-color .25s ease;transition:background-color .25s ease}.app-switcher:hover{background-color:#1b2225}.app-switcher span{padding-left:33px}.app-switcher hc-icon{padding-left:28px;color:#708090}.bottomSpacer{padding-bottom:15px}:host::ng-deep hr{border:0;height:1px;background-color:#51646f;margin:0 0 0 5%!important}:host::ng-deep hc-list a{text-decoration:none}:host::ng-deep hc-list .hc-list-item{color:#d7dde4;display:block;padding-left:2%;cursor:pointer;-webkit-transition:background-color .25s ease;transition:background-color .25s ease}:host::ng-deep hc-list .hc-list-item:hover{background-color:#1b2225}:host::ng-deep hc-list .hc-list-item:focus{outline:0}:host::ng-deep hc-list .active-link{background-color:#1b2225;color:#fff;font-weight:700;border-left:8px solid #00aeff}:host::ng-deep hc-list .active-link.hc-list-item .hc-list-content{padding-left:4px}"]
            },] },
];
NavbarMobileMenuComponent.ctorParameters = function () { return []; };
var NavbarLinkComponent = /** @class */ (function () {
    function NavbarLinkComponent(el, ref) {
        this.el = el;
        this.ref = ref;
        this._hostClass = 'navbar-item';
        this.exact = false;
        this._hidden = false;
    }
    NavbarLinkComponent.prototype.hide = function () {
        this._hidden = true;
        this.ref.detectChanges();
    };
    NavbarLinkComponent.prototype.show = function () {
        this._hidden = false;
        this.ref.detectChanges();
    };
    NavbarLinkComponent.prototype._getWidth = function () {
        return this.el.nativeElement.scrollWidth;
    };
    return NavbarLinkComponent;
}());
NavbarLinkComponent.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"], args: [{
                selector: 'hc-navbar-link',
                template: "<a *ngIf=\"!_hidden\" title=\"{{linkText}}\" [routerLink]=\"uri\" routerLinkActive=\"active\"\n   [ngClass]=\"{ 'active': this.active === true, 'inactive': this.active === false }\"\n   [routerLinkActiveOptions]=\"{exact: exact}\">\n    {{linkText}}<ng-content></ng-content>\n</a>\n"
            },] },
];
NavbarLinkComponent.ctorParameters = function () { return [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], },
]; };
NavbarLinkComponent.propDecorators = {
    "_hostClass": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"], args: ['class',] },],
    "active": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] },],
    "uri": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] },],
    "linkText": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] },],
    "exact": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] },],
};
var NavbarComponent = /** @class */ (function () {
    function NavbarComponent(el, ref) {
        this.el = el;
        this.ref = ref;
        this.user = '';
        this.appIcon = '';
        this.brandIcon = '';
        this.homeUri = '';
        this.fixedTop = false;
        this._menuOpen = false;
        this._linkWidths = [];
        this._linksMax = 0;
        this._logoWidth = 0;
        this._collapse = false;
        this._logoCondense = false;
        this._moreList = [];
    }
    NavbarComponent.prototype._navResize = function () {
        this._navbarMore._hide();
        this._moreList = [];
        if (this.el.nativeElement.querySelector('.links').clientWidth > 0) {
            var navbarWidth = this.el.nativeElement.querySelector('.navbar').scrollWidth;
            var icons = this.el.nativeElement.querySelector('.icon').scrollWidth;
            var more = 116;
            var switcher = 55;
            var links = this._linksMax;
            if (this._logoWidth === 0) {
                this._logoWidth = this.el.nativeElement.querySelector('.navbar-app').scrollWidth;
            }
            if (navbarWidth <= switcher + this._logoWidth + links + icons) {
                this._logoCondense = true;
                var tempArray = this._navLinks.toArray();
                tempArray.reverse();
                if (navbarWidth <= switcher + (this._logoWidth - 50) + links + icons) {
                    this._collapse = true;
                    tempArray[0].hide();
                    links -= this._linkWidths[0];
                    this._moreList.push({ name: tempArray[0].linkText, uri: tempArray[0].uri });
                    for (var i = 1; i < tempArray.length; i++) {
                        if (navbarWidth <= switcher + (this._logoWidth - 50) + links + more + icons) {
                            tempArray[i].hide();
                            links -= this._linkWidths[i];
                            this._moreList.push({ name: tempArray[i].linkText, uri: tempArray[i].uri });
                        }
                        else {
                            tempArray[i].show();
                        }
                    }
                    this._moreList.reverse();
                }
                else {
                    this._collapse = false;
                    this._navLinks.forEach(function (t) { return t.show(); });
                }
            }
            else {
                this._collapse = false;
                this._logoCondense = false;
                this._navLinks.forEach(function (t) { return t.show(); });
            }
            this.ref.detectChanges();
        }
    };
    NavbarComponent.prototype.ngAfterViewInit = function () {
        var scope = this;
        setTimeout(function () {
            scope._navLinks.forEach(function (t) {
                scope._linksMax += t._getWidth();
                scope._linkWidths.push(t._getWidth());
            });
            scope._linkWidths.reverse();
            scope._navResize();
        }, 100);
    };
    NavbarComponent.prototype._toggleMobileMenu = function () {
        if (this._mobileMenu.first) {
            if (this._menuOpen) {
                this._mobileMenu.first.hide();
                this._menuOpen = false;
            }
            else {
                this._mobileMenu.first.show();
                this._menuOpen = true;
            }
        }
    };
    NavbarComponent.prototype._menuClick = function (event) {
        var clickTarget = event.target.outerHTML;
        if (clickTarget.indexOf('hclistline') >= 0 && clickTarget.indexOf('menu-dropdown') === -1) {
            this._toggleMobileMenu();
        }
    };
    Object.defineProperty(NavbarComponent.prototype, "_mobileMenuIcon", {
        get: function () {
            return this._menuOpen ? 'fa-times' : 'fa-bars';
        },
        enumerable: true,
        configurable: true
    });
    NavbarComponent.prototype._moreClick = function () {
        this._navbarMore._hide();
    };
    return NavbarComponent;
}());
NavbarComponent.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"], args: [{
                selector: 'hc-navbar',
                template: "<nav class=\"navbar\" [ngClass]=\"{'fixed-top': fixedTop}\">\n    <div #defaultbrand class=\"navbar-brand\" *ngIf=\"appswitcherbrand.children.length == 0\">\n        <a [routerLink]=\"homeUri\" class=\"brand no-switcher\">\n            <img src=\"{{brandIcon}}\">\n        </a>\n    </div>\n    <div #appswitcherbrand class=\"navbar-brand\">\n        <ng-content select=\"hc-app-switcher\">\n        </ng-content>\n    </div>\n    <div class=\"navbar-app\" [ngClass]=\"{'logo-condense': _logoCondense}\">\n        <a [routerLink]=\"homeUri\" class=\"app\" *ngIf=\"appIcon\">\n            <img src=\"{{appIcon}}\">\n        </a>\n    </div>\n    <div class=\"links\">\n        <ng-content select=\"hc-navbar-link\"></ng-content>\n        <div class=\"more-links\" title=\"More\" [ngClass]=\"{'hidden': !_collapse}\" [hcPopover]=\"navbarMore\" popperPlacement=\"bottom\">\n            More<hc-icon fontSet=\"fa\" fontIcon=\"fa-chevron-down\" icon-sm></hc-icon>\n        </div>\n    </div>\n    <div class=\"icon links\">\n        <ng-content select=\"hc-navbar-icon\"></ng-content>\n        <div class=\"navbar-item\" *ngIf=\"user\">\n            <span class=\"vertical-separator\"></span>\n        </div>\n        <div class=\"navbar-item\" *ngIf=\"user\">\n            <span>{{user}}</span>\n        </div>\n    </div>\n    <div class=\"mobile-menu\" (click)=\"_toggleMobileMenu()\">\n        <hc-icon fontSet=\"fa\" [fontIcon]=\"_mobileMenuIcon\" icon-md></hc-icon>\n    </div>\n</nav>\n<div (click)=\"_menuClick($event)\">\n    <ng-content select=\"hc-navbar-mobile-menu\"></ng-content>\n</div>\n<hc-popover-content #navbarMore class=\"more-popover\">\n    <ul class=\"list-options\">\n        <li *ngFor=\"let item of _moreList\"><a routerLinkActive=\"active\" [routerLink]=\"item.uri\" (click)=\"_moreClick()\">{{item.name}}</a></li>\n    </ul>\n</hc-popover-content>\n",
                styles: [".navbar.fixed-top::ng-deep{top:0;position:fixed;right:0;left:0;z-index:1070;-webkit-box-shadow:0 2px 6px rgba(0,0,0,.15);box-shadow:0 2px 6px rgba(0,0,0,.15)}.navbar::ng-deep{height:53px;background-color:#384655;display:-webkit-box;display:-ms-flexbox;display:flex;font-size:15px}.navbar::ng-deep .icon.links{margin-left:auto}.navbar::ng-deep .navbar-brand{background-color:#00aeff;width:55px;-ms-flex-preferred-size:auto;flex-basis:auto;height:100%;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center}.navbar::ng-deep .navbar-brand+.navbar-brand{display:none}.navbar::ng-deep .navbar-brand .brand{-webkit-transition:background-color .25s ease;transition:background-color .25s ease;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;height:100%}.navbar::ng-deep .navbar-brand .brand>img{height:37px;width:auto}.navbar::ng-deep .navbar-brand .brand.no-switcher{cursor:default}.navbar::ng-deep .navbar-app{height:100%;padding:0 60px 0 25px;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center}.navbar::ng-deep .navbar-app.logo-condense{padding-right:25px}.navbar::ng-deep .app{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;height:100%}.navbar::ng-deep .app>img{height:30px;width:auto;padding-top:2px}.navbar::ng-deep .links{display:-webkit-box;display:-ms-flexbox;display:flex;list-style-type:none;margin:0;padding:0;overflow:hidden}.navbar::ng-deep .links a{text-decoration:none}.navbar::ng-deep .links .hidden{display:none!important}.navbar::ng-deep .links .navbar-item{padding:0}.navbar::ng-deep .links .navbar-item>a>hc-icon,.navbar::ng-deep .links .navbar-item>hc-icon,.navbar::ng-deep .links .navbar-item>span{height:53px!important;color:#fff;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center}.navbar::ng-deep .links .navbar-item>a>hc-icon:not(.vertical-separator),.navbar::ng-deep .links .navbar-item>hc-icon:not(.vertical-separator),.navbar::ng-deep .links .navbar-item>span:not(.vertical-separator){padding:0 15px;min-width:53px;cursor:pointer;-webkit-transition:background-color .25s;transition:background-color .25s}.navbar::ng-deep .links .navbar-item>a>hc-icon:not(.vertical-separator).inactive:hover,.navbar::ng-deep .links .navbar-item>a>hc-icon:not(.vertical-separator):hover:not(.active),.navbar::ng-deep .links .navbar-item>hc-icon:not(.vertical-separator).inactive:hover,.navbar::ng-deep .links .navbar-item>hc-icon:not(.vertical-separator):hover:not(.active),.navbar::ng-deep .links .navbar-item>span:not(.vertical-separator).inactive:hover,.navbar::ng-deep .links .navbar-item>span:not(.vertical-separator):hover:not(.active){outline:0;color:#fff;background-color:#2e3946}.navbar::ng-deep .links .navbar-item>a>hc-icon.vertical-separator::after,.navbar::ng-deep .links .navbar-item>hc-icon.vertical-separator::after,.navbar::ng-deep .links .navbar-item>span.vertical-separator::after{content:'|';font-size:18px;text-align:center;margin-top:-4px}.navbar::ng-deep .links .navbar-item:not(hc-navbar-icon)>a{display:inline-block;height:100%;-webkit-box-sizing:border-box;box-sizing:border-box;padding:22px 30px 0;text-align:center;color:#ccc;border-bottom:5px solid transparent;-webkit-transition:background-color .25s;transition:background-color .25s}.navbar::ng-deep .links .navbar-item:not(hc-navbar-icon)>a.inactive:hover,.navbar::ng-deep .links .navbar-item:not(hc-navbar-icon)>a:hover:not(.active){outline:0;color:#fff;background-color:#2e3946}.navbar::ng-deep .links .navbar-item:not(hc-navbar-icon)>a.active:not(.inactive),.navbar::ng-deep .links .navbar-item:not(hc-navbar-icon)>a:active{color:#fff;font-weight:600;border-bottom:5px solid #00aeff}.navbar::ng-deep .links .navbar-item:not(hc-navbar-icon)>a:before{display:block;content:attr(title);font-weight:600;height:1px;color:transparent;overflow:hidden;visibility:hidden;margin-bottom:-1px}.navbar::ng-deep .more-links{display:inline-block;white-space:nowrap;cursor:pointer;height:100%;-webkit-box-sizing:border-box;box-sizing:border-box;padding:22px 30px 0;text-align:center;color:#ccc;border-bottom:5px solid transparent;-webkit-transition:background-color .25s;transition:background-color .25s}.navbar::ng-deep .more-links hc-icon{margin-left:5px;vertical-align:top;margin-top:1px;font-size:13px!important}.navbar::ng-deep .more-links.inactive:hover,.navbar::ng-deep .more-links:hover:not(.active){outline:0;color:#fff;background-color:#2e3946}.navbar::ng-deep .more-links:before{display:block;content:attr(title);font-weight:600;height:1px;color:transparent;overflow:hidden;visibility:hidden;margin-bottom:-1px}.navbar::ng-deep .mobile-menu{background-color:#262f34;color:#d7dde4;width:55px;-ms-flex-preferred-size:auto;flex-basis:auto;height:100%;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;margin-left:auto;cursor:pointer;display:none}.navbar::ng-deep .mobile-menu hc-icon{font-size:25px!important;height:25px!important;width:25px!important}@media (max-width:768px){.navbar::ng-deep .links{display:none}.navbar::ng-deep .mobile-menu{display:-webkit-box;display:-ms-flexbox;display:flex}}@media (max-width:576px){.navbar::ng-deep .navbar-brand{display:none}.navbar::ng-deep .navbar-app{padding:0 0 0 5%}}.more-popover a.active{color:#333;cursor:default}"]
            },] },
];
NavbarComponent.ctorParameters = function () { return [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], },
]; };
NavbarComponent.propDecorators = {
    "user": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] },],
    "appIcon": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] },],
    "brandIcon": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] },],
    "homeUri": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] },],
    "fixedTop": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] },],
    "_mobileMenu": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ContentChildren"], args: [NavbarMobileMenuComponent,] },],
    "_navLinks": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ContentChildren"], args: [NavbarLinkComponent,] },],
    "_navbarMore": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"], args: [PopoverContentComponent,] },],
    "_navResize": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"], args: ['window:resize',] },],
};
var NavbarIconComponent = /** @class */ (function () {
    function NavbarIconComponent() {
        this._hostClass = 'navbar-item';
    }
    NavbarIconComponent.prototype.ngOnInit = function () { };
    return NavbarIconComponent;
}());
NavbarIconComponent.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"], args: [{
                selector: 'hc-navbar-icon',
                template: '<ng-content></ng-content>'
            },] },
];
NavbarIconComponent.ctorParameters = function () { return []; };
NavbarIconComponent.propDecorators = {
    "_hostClass": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"], args: ['class',] },],
};
var NavbarModule = /** @class */ (function () {
    function NavbarModule() {
    }
    return NavbarModule;
}());
NavbarModule.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"], args: [{
                imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_8__["RouterModule"], IconModule, PopoverModule],
                declarations: [NavbarComponent, NavbarLinkComponent, NavbarIconComponent, NavbarMobileMenuComponent],
                exports: [NavbarComponent, NavbarLinkComponent, NavbarIconComponent, NavbarMobileMenuComponent]
            },] },
];
var PaginationComponent = /** @class */ (function () {
    function PaginationComponent() {
        this._totalPages = null;
        this._inputPageNumber = null;
        this.__pageNumber = null;
        this.pageNumberChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    Object.defineProperty(PaginationComponent.prototype, "totalPages", {
        get: function () {
            return this._totalPages;
        },
        set: function (value) {
            if (typeof value !== 'number') {
                value = null;
            }
            this._totalPages = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PaginationComponent.prototype, "pageNumber", {
        get: function () {
            return this._inputPageNumber;
        },
        set: function (value) {
            this._inputPageNumber = value;
            this.pageNumberChange.emit(value);
            this._pageNumber = this.sanitize(value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PaginationComponent.prototype, "_pageNumber", {
        get: function () {
            return this.__pageNumber;
        },
        set: function (value) {
            this.__pageNumber = value;
            if (this.pageNumber !== value) {
                this.pageNumber = value;
            }
        },
        enumerable: true,
        configurable: true
    });
    PaginationComponent.prototype.ngOnChanges = function (changes) {
        if (changes["totalPages"] && !changes["inputPageNumber"]) {
            this._pageNumber = 1;
        }
        else if (changes["inputPageNumber"]) {
            var value = changes["inputPageNumber"].currentValue;
            this._pageNumber = this.sanitize(value);
        }
    };
    Object.defineProperty(PaginationComponent.prototype, "_isFirstPage", {
        get: function () {
            return this._pageNumber === 1;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PaginationComponent.prototype, "_isLastPage", {
        get: function () {
            return !!(this.totalPages && this._pageNumber === this.totalPages);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PaginationComponent.prototype, "_visiblePages", {
        get: function () {
            if (!this.totalPages) {
                return [];
            }
            if (this.totalPages <= 9) {
                var visiblePages = [];
                for (var i = 1; i <= this.totalPages; i++) {
                    visiblePages.push(i);
                }
                return visiblePages;
            }
            var n = this.totalPages;
            var p = this._pageNumber || 1;
            if (p < 6) {
                return [1, 2, 3, 4, 5, 6, null, n - 1, n];
            }
            else if (p >= n - 4) {
                return [1, 2, null, n - 5, n - 4, n - 3, n - 2, n - 1, n];
            }
            else {
                return [1, 2, null, p - 1, p, p + 1, null, n - 1, n];
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PaginationComponent.prototype, "_collapsedVisiblePages", {
        get: function () {
            if (!this.totalPages) {
                return [];
            }
            if (this.totalPages <= 5) {
                var visiblePages = [];
                for (var i = 1; i <= this.totalPages; i++) {
                    visiblePages.push(i);
                }
                return visiblePages;
            }
            var n = this.totalPages;
            var p = this._pageNumber || 1;
            if (p < 4) {
                return [1, 2, 3, null, n];
            }
            else if (p >= n - 2) {
                return [1, null, n - 2, n - 1, n];
            }
            else {
                return [1, null, p, null, n];
            }
        },
        enumerable: true,
        configurable: true
    });
    PaginationComponent.prototype._previousPage = function () {
        if (this._isFirstPage) {
            return;
        }
        this._goToPage((this._pageNumber || 1) - 1);
    };
    PaginationComponent.prototype._goToPage = function (pageNum) {
        this._pageNumber = pageNum;
    };
    PaginationComponent.prototype._nextPage = function () {
        if (this._isLastPage) {
            return;
        }
        this._goToPage((this._pageNumber || 1) + 1);
    };
    PaginationComponent.prototype.sanitize = function (pageNumber) {
        if (!!this.totalPages) {
            if (typeof pageNumber !== 'number' || isNaN(pageNumber) || !pageNumber || pageNumber < 1) {
                pageNumber = 1;
            }
            if (pageNumber > this.totalPages) {
                pageNumber = this.totalPages;
            }
        }
        else {
            pageNumber = null;
        }
        return pageNumber;
    };
    return PaginationComponent;
}());
PaginationComponent.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"], args: [{
                selector: 'hc-pagination',
                template: "<button hc-button color=\"secondary\" class=\"hc-page-button hc-left-button\" (click)=\"_previousPage()\" [disabled]=\"!totalPages || _isFirstPage\">\n    <hc-icon fontSet=\"fa\" fontIcon=\"fa-chevron-left\"></hc-icon>&nbsp;\n    <span>PREV</span>\n</button>\n<!-- page navigation buttons to appear normally -->\n<button hc-button color=\"secondary\"\n        class=\"hc-page-button hc-inner-button expanded-page-button\"\n        *ngFor=\"let page of _visiblePages\"\n        [disabled]=\"!page\"\n        [class.currentPage]=\"page === _pageNumber\"\n        (click)=\"_goToPage(page)\">\n    <span *ngIf=\"!!page\">{{page}}</span>\n    <hc-icon *ngIf=\"!page\" fontSet=\"fa\" fontIcon=\"fa-ellipsis-h\"></hc-icon>\n</button>\n<!-- page navigation buttons to appear when space is limited -->\n<button hc-button color=\"secondary\"\n        class=\"hc-page-button hc-inner-button collapsed-page-button\"\n        *ngFor=\"let page of _collapsedVisiblePages\"\n        [disabled]=\"!page\"\n        [class.currentPage]=\"page === _pageNumber\"\n        (click)=\"_goToPage(page)\">\n    <span *ngIf=\"!!page\">{{page}}</span>\n    <hc-icon *ngIf=\"!page\" fontSet=\"fa\" fontIcon=\"fa-ellipsis-h\"></hc-icon>\n</button>\n<button hc-button color=\"secondary\" class=\"hc-page-button hc-right-button\" (click)=\"_nextPage()\" [disabled]=\"!totalPages || _isLastPage\">\n    <span>NEXT</span>&nbsp;\n    <hc-icon fontSet=\"fa\" fontIcon=\"fa-chevron-right\"></hc-icon>\n</button>\n",
                styles: [":host{display:-webkit-inline-box;display:-ms-inline-flexbox;display:inline-flex}:host button{border:2px solid #e0e0e0;background-color:#fff;color:#00aeff;font-weight:700}:host button hc-icon{font-size:13px!important;height:12px!important;width:13px!important}:host button:hover{color:#008bcc}:host button.currentPage{background-color:#00aeff;color:#fff}:host button:focus{outline:0}:host .hc-left-button{border-bottom-right-radius:0;border-top-right-radius:0}:host .hc-right-button{border-bottom-left-radius:0;border-top-left-radius:0;border-left-width:0}:host .hc-inner-button{border-left-width:0;border-radius:0}:host .hc-page-button{min-width:auto;margin-right:0}:host button.hc-inner-button hc-icon{margin-top:7px}:host .expanded-page-button{display:block}:host .collapsed-page-button{display:none}@media (max-width:768px){:host .expanded-page-button{display:none}:host .collapsed-page-button{display:block}}"]
            },] },
];
PaginationComponent.propDecorators = {
    "totalPages": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] },],
    "pageNumber": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] },],
    "pageNumberChange": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"] },],
};
var PaginationModule = /** @class */ (function () {
    function PaginationModule() {
    }
    return PaginationModule;
}());
PaginationModule.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"], args: [{
                imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"], ButtonModule, IconModule],
                declarations: [PaginationComponent],
                exports: [PaginationComponent],
                providers: []
            },] },
];
var PicklistOptionsSource = /** @class */ (function () {
    function PicklistOptionsSource() {
        this.values = new Array();
        this.valueSets = new Array();
        this.isPaged = false;
        this.pageSize = 100;
    }
    PicklistOptionsSource.prototype.optionsAreLocal = function () {
        return !this.getOptions;
    };
    return PicklistOptionsSource;
}());
var PicklistSettings = /** @class */ (function () {
    function PicklistSettings() {
        this.codeIsSignificant = false;
        this.useValuesets = false;
        this.showHeaderText = true;
        this.leftHeaderText = 'Available';
        this.rightHeaderText = 'Selected';
        this.selected = { values: new Array(), valueSets: new Array() };
        this.options = new PicklistOptionsSource();
    }
    return PicklistSettings;
}());
var PicklistRemoteQueryOptions = /** @class */ (function () {
    function PicklistRemoteQueryOptions(picklist, searchTerm, valueTypeToQuery) {
        this.picklist = picklist;
        this.searchTerm = searchTerm;
        this.valueTypeToQuery = valueTypeToQuery;
    }
    return PicklistRemoteQueryOptions;
}());
var PicklistComponent = /** @class */ (function () {
    function PicklistComponent() {
        this.changed = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.picklistSettings = new PicklistSettings();
        this.stringOptions = null;
        this.onChange = function () { };
        this.onTouched = function () { };
    }
    Object.defineProperty(PicklistComponent.prototype, "settings", {
        get: function () {
            return this.picklistSettings;
        },
        set: function (settings) {
            this.reset(settings);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PicklistComponent.prototype, "simpleOptions", {
        get: function () {
            return this.stringOptions;
        },
        set: function (options) {
            this.updateStateFromStringOptions(options);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PicklistComponent.prototype, "showHeaderText", {
        get: function () {
            return this.picklistSettings.showHeaderText;
        },
        set: function (shouldShow) {
            this.update({ showHeaderText: shouldShow });
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PicklistComponent.prototype, "leftHeaderText", {
        get: function () {
            return this.picklistSettings.leftHeaderText;
        },
        set: function (text) {
            this.update({ leftHeaderText: text });
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PicklistComponent.prototype, "rightHeaderText", {
        get: function () {
            return this.picklistSettings.rightHeaderText;
        },
        set: function (text) {
            this.update({ rightHeaderText: text });
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PicklistComponent.prototype, "_leftToRightMoveBtnIsDisabled", {
        get: function () {
            return this._available ? !this._available.isAnySelected() : false;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PicklistComponent.prototype, "value", {
        get: function () {
            if (this.stringOptions) {
                return this.picklistSettings.selected.values.map(function (v) { return v.title; });
            }
            else {
                return this.picklistSettings.selected;
            }
        },
        set: function (model) {
            var selectedValues = { values: [], valueSets: [] };
            if (this.picklistModelisArray(model)) {
                var selected = this.convertStringsToValueOptions(model);
                selectedValues.values = selected || [];
            }
            else {
                selectedValues.values = model.values || [];
                selectedValues.valueSets = model.valueSets || [];
            }
            this.update({ selected: selectedValues });
        },
        enumerable: true,
        configurable: true
    });
    PicklistComponent.prototype.registerOnChange = function (fn) {
        this.onChange = fn;
    };
    PicklistComponent.prototype.registerOnTouched = function (fn) {
        this.onTouched = fn;
    };
    PicklistComponent.prototype.writeValue = function (value) {
        if (value) {
            this.value = value;
        }
    };
    PicklistComponent.prototype.update = function (settings) {
        var updatedSettings = Object.assign(this.picklistSettings, settings);
        this.reset(updatedSettings);
    };
    PicklistComponent.prototype.reset = function (settings) {
        if (settings === void 0) { settings = new PicklistSettings(); }
        this.picklistSettings = Object.assign(new PicklistSettings(), settings);
        this.resetPanes(this.picklistSettings);
        this.setActiveValueType(this.picklistSettings.useValuesets ? 'valueSets' : 'values');
        this.applyChangeToModel();
    };
    PicklistComponent.prototype.setActiveValueType = function (type) {
        if (!this._available) {
            console.warn('Available picklist pane not available yet.');
            return;
        }
        if (!this.settings.useValuesets) {
            type = 'values';
        }
        this._available.valueList.isActive = type === 'values';
        this._available.valueSetList.isActive = type === 'valueSets';
        this._available.selectNone();
        this._available.scrollToTop();
    };
    PicklistComponent.prototype.moveSelectedItems = function (pane) {
        var shouldBreakValuesets = pane === this._confirmed;
        var selectedOptions = pane.listService.moveOutSelectedOptions(shouldBreakValuesets);
        if (pane.companion) {
            pane.companion.listService.addOptions(selectedOptions);
        }
        else {
            console.warn('This pane does not have a companion pane to move the select options in to.');
        }
        pane.filterService.reloadIfEmpty();
        this.applyChangeToModel();
    };
    PicklistComponent.prototype.updateStateFromStringOptions = function (options) {
        var valueOptions = this.convertStringsToValueOptions(options);
        this.stringOptions = options;
        this.update({ options: { values: valueOptions || [] } });
    };
    PicklistComponent.prototype.resetPanes = function (settings) {
        if (!(this._available && this._confirmed)) {
            console.warn('Picklist panes not available yet.');
            return;
        }
        var confirmedSource = new PicklistOptionsSource();
        confirmedSource.values = this.picklistSettings.selected.values.slice(0);
        confirmedSource.valueSets = this.picklistSettings.selected.valueSets.slice(0);
        confirmedSource.getValuesForValueset = this.picklistSettings.options.getValuesForValueset;
        this._confirmed.reset(confirmedSource, this.picklistSettings, this._available, false);
        var availableSource = Object.assign(new PicklistOptionsSource(), this.picklistSettings.options);
        this._available.reset(availableSource, this.picklistSettings, this._confirmed, true);
    };
    PicklistComponent.prototype.applyChangeToModel = function () {
        var _this = this;
        if (!(this._available && this._confirmed)) {
            console.warn('Picklist panes not available yet.');
            return;
        }
        this.picklistSettings.selected.values.length = 0;
        this.picklistSettings.selected.valueSets.length = 0;
        this._confirmed.valueList.options.forEach(function (e) { return _this.picklistSettings.selected.values.push(e.option); });
        this._confirmed.valueSetList.options.forEach(function (e) { return _this.picklistSettings.selected.valueSets.push(e.option); });
        this.changed.emit();
        this.onChange(this.value);
        this.onTouched();
    };
    PicklistComponent.prototype.convertStringsToValueOptions = function (vals) {
        return vals ? vals.map(function (o) { return ({ code: "" + o, title: "" + o }); }) : null;
    };
    PicklistComponent.prototype.picklistModelisArray = function (model) {
        var array = (model);
        return array && array.length !== undefined;
    };
    return PicklistComponent;
}());
PicklistComponent.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"], args: [{
                selector: 'hc-picklist',
                template: "<div class=\"hc-picklist\">\n    <div class=\"pane\">\n        <div class=\"pane-header\">\n            <h2 *ngIf=\"settings.showHeaderText\">{{settings.leftHeaderText}}</h2>\n            <div *ngIf=\"settings.useValuesets\" class=\"hc-tab-bar-horizontal\">\n                <a title=\"Search for Value Sets\"\n                        (click)=\"setActiveValueType('valueSets')\"\n                        class=\"hc-tab-horizontal\"\n                        [ngClass]=\"{'active': _available?.valueSetList.isActive}\">Value Sets</a>\n                <a title=\"Search for Values\"\n                    (click)=\"setActiveValueType('values')\"\n                    class=\"hc-tab-horizontal\"\n                    [ngClass]=\"{'active': _available?.valueList.isActive}\">Values</a>\n            </div>\n        </div>\n        <hc-picklist-pane #availableList\n            emptyMsg=\"No options available.\"\n            (moveSelectedItems)=\"moveSelectedItems($event);\">\n        </hc-picklist-pane>\n    </div>\n    <div class=\"move-btns\">\n        <button hc-button color=\"primary-alt\" type=\"button\" name=\"addBtn\"\n                (click)=\"moveSelectedItems(availableList);\"\n                [disabled]=\"_leftToRightMoveBtnIsDisabled\">\n            <hc-icon icon-sm fontSet=\"fa\" fontIcon=\"fa-arrow-right\"></hc-icon>\n        </button>\n        <button hc-button color=\"primary-alt\" type=\"button\" name=\"removeBtn\"\n                (click)=\"moveSelectedItems(confirmedList);\"\n                [disabled]=\"!_confirmed?.isAnySelected()\">\n            <hc-icon icon-sm fontSet=\"fa\" fontIcon=\"fa-arrow-left\"></hc-icon>\n        </button>\n    </div>\n    <div class=\"pane\">\n        <div class=\"pane-header\">\n            <h2 *ngIf=\"settings.showHeaderText\">{{settings.rightHeaderText}}</h2>\n        </div>\n        <hc-picklist-pane #confirmedList\n            emptyMsg=\"No options selected.\"\n            (moveSelectedItems)=\"moveSelectedItems($event);\">\n        </hc-picklist-pane>\n    </div>\n</div>\n",
                styles: [".hc-picklist{height:100%;min-width:650px;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-flow:row;flex-flow:row;-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between;-webkit-box-align:stretch;-ms-flex-align:stretch;align-items:stretch;overflow:hidden}.hc-picklist .pane{width:45%;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column}.hc-picklist .pane .pane-header{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between;-webkit-box-flex:0;-ms-flex:0 0 30px;flex:0 0 30px}.hc-picklist .pane .pane-header .hc-tab-bar-horizontal{-webkit-box-flex:0;-ms-flex:0 0 auto;flex:0 0 auto;border-bottom:none}.hc-picklist .pane .pane-header .hc-tab-bar-horizontal a{font-size:13px}.hc-picklist .pane .pane-header h2{font-size:16px;font-weight:700;margin:3px 0;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.hc-picklist .pane hc-picklist-pane{display:block;-webkit-box-flex:1;-ms-flex:1 1 auto;flex:1 1 auto;height:calc(100% - 30px)}.hc-picklist .pane hc-picklist-pane.hide{display:none}.hc-picklist .move-btns{padding-top:100px;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-flow:column;flex-flow:column;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-transform-style:preserve-3d;transform-style:preserve-3d;-webkit-transform:translate3d(0,0,0);transform:translate3d(0,0,0)}.hc-picklist .move-btns .hc-button{min-width:0;padding:0;width:30px;height:60px;margin-top:12px}.hc-picklist .move-btns .hc-button .hc-icon{color:#fff}.hc-picklist .move-btns .hc-button[disabled],.hc-picklist .move-btns .hc-button[disabled]:hover{background-color:#ccc;border-color:#ccc}"],
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
                providers: [
                    {
                        provide: _angular_forms__WEBPACK_IMPORTED_MODULE_9__["NG_VALUE_ACCESSOR"],
                        useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["forwardRef"])(function () { return PicklistComponent; }),
                        multi: true
                    }
                ]
            },] },
];
PicklistComponent.propDecorators = {
    "settings": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] },],
    "simpleOptions": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] },],
    "showHeaderText": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] },],
    "leftHeaderText": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] },],
    "rightHeaderText": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] },],
    "_available": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"], args: ['availableList',] },],
    "_confirmed": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"], args: ['confirmedList',] },],
    "changed": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"] },],
};
var WorkTrackerService = /** @class */ (function () {
    function WorkTrackerService() {
    }
    WorkTrackerService.prototype.start = function (task) {
        var working = new rxjs__WEBPACK_IMPORTED_MODULE_5__["ReplaySubject"]();
        working.next(true);
        task()
            .then(function () {
            working.next(false);
        })
            .catch(function () {
            working.next(false);
        });
        return working.asObservable();
    };
    WorkTrackerService.prototype.startObservable = function (task) {
        var working = new rxjs__WEBPACK_IMPORTED_MODULE_5__["ReplaySubject"]();
        var taskSubscription = task();
        working.next(true);
        taskSubscription.add(function () {
            working.next(false);
            taskSubscription.unsubscribe();
        });
        return working.asObservable();
    };
    return WorkTrackerService;
}());
WorkTrackerService.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"] },
];
var FilterableSelectList = /** @class */ (function () {
    function FilterableSelectList(options) {
        if (options === void 0) { options = new Map(); }
        this.options = options;
        this.selectedOptions = new Map();
        this.lastClickedOption = null;
        this.filteredOptions = new Array();
        this.isActive = true;
        this.additionalRemoteOptions = 0;
        this.loadingOptions = Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["from"])([]);
        this.appendingOptions = Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["from"])([]);
        this.codeIsSignificant = false;
    }
    return FilterableSelectList;
}());
var SubSelectList = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(SubSelectList, _super);
    function SubSelectList(parentValueSet, options) {
        if (options === void 0) { options = new Map(); }
        var _this = _super.call(this, options) || this;
        _this.parentValueSet = parentValueSet;
        _this.options = options;
        return _this;
    }
    return SubSelectList;
}(FilterableSelectList));
function isSubList(model) {
    var subList = (model);
    return subList && subList.parentValueSet !== undefined;
}
var SelectListOption = /** @class */ (function () {
    function SelectListOption(option, code) {
        this.option = option;
        this.code = code;
        this.selected = false;
    }
    return SelectListOption;
}());
var ValueListOption = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(ValueListOption, _super);
    function ValueListOption(option, code) {
        return _super.call(this, option, code) || this;
    }
    return ValueListOption;
}(SelectListOption));
var ValueSetListOption = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(ValueSetListOption, _super);
    function ValueSetListOption(option, code) {
        var _this = _super.call(this, option, code) || this;
        _this.showValues = false;
        _this.loadingValues = false;
        _this.subValuesSelectList = new SubSelectList(_this);
        return _this;
    }
    return ValueSetListOption;
}(SelectListOption));
var PicklistValueOptions = /** @class */ (function () {
    function PicklistValueOptions() {
        this.values = new Map();
        this.valueSets = new Map();
    }
    return PicklistValueOptions;
}());
var PicklistFilterLocalService = /** @class */ (function () {
    function PicklistFilterLocalService() {
    }
    PicklistFilterLocalService.prototype.filter = function (list, searchTokens) {
        var _this = this;
        list.filteredOptions = [];
        list.options.forEach(function (item) {
            if (_this.itemHasSearchTokens(list, item, searchTokens)) {
                list.filteredOptions.push(item);
            }
        });
        list.filteredOptions.sort(this.getSortFunc(list));
    };
    PicklistFilterLocalService.prototype.itemHasSearchTokens = function (list, item, searchTokens) {
        var valuesToSearchIn = [item.option.title, list.codeIsSignificant ? item.option.code : ''];
        valuesToSearchIn.filter(function (val) { return !!val; });
        return searchTokens.every(function (token) { return valuesToSearchIn.some(function (value) { return value.toLocaleLowerCase().indexOf(token) > -1; }); });
    };
    PicklistFilterLocalService.prototype.getSortFunc = function (list) {
        var sortField = list.codeIsSignificant ? 'code' : 'title';
        return function (a, b) { return a.option[sortField].localeCompare(b.option[sortField]); };
    };
    return PicklistFilterLocalService;
}());
PicklistFilterLocalService.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"] },
];
var PicklistStateService = /** @class */ (function () {
    function PicklistStateService(localFilterService) {
        this.localFilterService = localFilterService;
        this.picklist = new PicklistSettings();
        this.optionsSource = new PicklistOptionsSource();
        this.valueList = new FilterableSelectList();
        this.valueSetList = new FilterableSelectList();
    }
    PicklistStateService.prototype.reset = function (settings, optionsSource, pane) {
        this.picklist = settings;
        this.pane = pane;
        this.optionsSource = optionsSource;
        this.clearList(this.valueList);
        this.clearList(this.valueSetList);
    };
    PicklistStateService.prototype.updateValueList = function (options, searchTokens) {
        if (searchTokens === void 0) { searchTokens = []; }
        var listOptions = options.map(function (v) { return new ValueListOption(v, v.code); });
        var companionList = this.pane.companion ? this.pane.companion.valueList : null;
        this.valueList.codeIsSignificant = this.pane.codeIsSignificant;
        this.updateList(listOptions, this.valueList, companionList, searchTokens);
    };
    PicklistStateService.prototype.updateValueSetList = function (options, searchTokens) {
        var _this = this;
        if (searchTokens === void 0) { searchTokens = []; }
        var listOptions = new Array();
        var companionList = this.pane.companion ? this.pane.companion.valueSetList : null;
        options.forEach(function (v) {
            var listOption = new ValueSetListOption(v, v.code);
            if (v.subValues && v.subValues.length > 0) {
                var subValueListOptions = v.subValues.map(function (sv) { return new ValueListOption(sv, sv.code); });
                _this.updateList(subValueListOptions, listOption.subValuesSelectList, null, searchTokens);
            }
            listOptions.push(listOption);
        });
        this.updateList(listOptions, this.valueSetList, companionList, searchTokens);
    };
    PicklistStateService.prototype.clearList = function (list) {
        list.options.clear();
        list.filteredOptions.length = 0;
        list.selectedOptions.clear();
        list.lastClickedOption = null;
        list.additionalRemoteOptions = 0;
    };
    PicklistStateService.prototype.updateList = function (options, list, companionList, searchTokens) {
        if (companionList === void 0) { companionList = null; }
        if (searchTokens === void 0) { searchTokens = []; }
        if (!this.optionsSource.isPaged && this.pane.shouldExcludeCompanion && companionList) {
            options = options.filter(function (o) { return !companionList.options.get(o.code); });
        }
        options.forEach(function (o) {
            list.options.set(o.code, o);
            list.filteredOptions.push(o);
        });
        this.localFilterService.filter(list, searchTokens);
    };
    return PicklistStateService;
}());
PicklistStateService.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"] },
];
PicklistStateService.ctorParameters = function () { return [
    { type: PicklistFilterLocalService, },
]; };
var PicklistFilterRemoteService = /** @class */ (function () {
    function PicklistFilterRemoteService(stateService) {
        this.stateService = stateService;
        this.currentValuePage = 1;
        this.currentValueSetPage = 1;
        this.cancelSearch = new rxjs__WEBPACK_IMPORTED_MODULE_5__["Subject"]();
        this.options$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["from"])([]);
    }
    Object.defineProperty(PicklistFilterRemoteService.prototype, "valueList", {
        get: function () {
            return this.stateService.valueList;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PicklistFilterRemoteService.prototype, "valueSetList", {
        get: function () {
            return this.stateService.valueSetList;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PicklistFilterRemoteService.prototype, "searchTerm", {
        get: function () {
            return this.filterService ? this.filterService.searchTerm : '';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PicklistFilterRemoteService.prototype, "cancelSearch$", {
        get: function () {
            return this.cancelSearch.asObservable();
        },
        enumerable: true,
        configurable: true
    });
    PicklistFilterRemoteService.prototype.reset = function (filterService) {
        this.filterService = filterService;
        this.currentValuePage = 1;
        this.currentValueSetPage = 1;
    };
    PicklistFilterRemoteService.prototype.filter = function (type, shouldAppend, selectAllCount) {
        var _this = this;
        if (type === void 0) { type = 'both'; }
        if (shouldAppend === void 0) { shouldAppend = false; }
        if (selectAllCount === void 0) { selectAllCount = null; }
        if (!this.stateService.optionsSource.getOptions) {
            console.warn('Remote query callback not provided for this picklist.');
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["from"])([]).subscribe();
        }
        if (this.options$) {
            this.cancelSearch.next();
        }
        var params = this.buildRemoteQueryParams(type, selectAllCount);
        if (!shouldAppend) {
            this.clearFilteredOptions(type);
        }
        this.resetPagingForSelectAllIfNeeded(selectAllCount);
        this.options$ = this.stateService.optionsSource.getOptions(params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["takeUntil"])(this.cancelSearch$));
        return this.options$.subscribe(function (options) {
            _this.processIncomingRemoteOptions(options, type, shouldAppend);
        }, function () {
            console.warn('Unable to filter options');
            _this.clearLists('both');
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["of"])({});
        }, function () {
            _this.options$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["of"])({});
        });
    };
    PicklistFilterRemoteService.prototype.processIncomingRemoteOptions = function (options, type, shouldAppend) {
        if (type === void 0) { type = 'both'; }
        if (shouldAppend === void 0) { shouldAppend = false; }
        if (!shouldAppend) {
            this.clearLists(type);
        }
        if (this.stateService.optionsSource.isPaged) {
            if (options.pagedValues) {
                this.processPagedValues(options.pagedValues);
            }
            if (options.pagedValueSets) {
                this.processPagedValueSets(options.pagedValueSets);
            }
        }
        else {
            if (options.values) {
                this.stateService.updateValueList(options.values);
            }
            if (options.valueSets) {
                this.stateService.updateValueSetList(options.valueSets);
            }
            this.valueList.additionalRemoteOptions = 0;
            this.valueSetList.additionalRemoteOptions = 0;
        }
    };
    PicklistFilterRemoteService.prototype.processPagedValues = function (pagedValues) {
        this.stateService.updateValueList(pagedValues.values);
        this.valueList.additionalRemoteOptions = pagedValues.totalItems - this.valueList.options.size;
    };
    PicklistFilterRemoteService.prototype.processPagedValueSets = function (pagedValueSets) {
        this.stateService.updateValueSetList(pagedValueSets.values);
        this.valueSetList.additionalRemoteOptions = pagedValueSets.totalItems - this.valueSetList.options.size;
    };
    PicklistFilterRemoteService.prototype.buildRemoteQueryParams = function (type, selectAllCount) {
        if (selectAllCount === void 0) { selectAllCount = null; }
        var params = new PicklistRemoteQueryOptions(this.stateService.picklist, this.searchTerm, type);
        if (type === 'values' || type === 'both') {
            params.valuePageSettings = this.buildPageSettings(this.currentValuePage, selectAllCount);
        }
        if (type === 'valuesets' || type === 'both') {
            params.valueSetPageSettings = this.buildPageSettings(this.currentValueSetPage, selectAllCount);
        }
        return params;
    };
    PicklistFilterRemoteService.prototype.buildPageSettings = function (currentPage, selectAllCount) {
        var pagerSettings = { currentPage: 1, itemsPerPage: this.stateService.optionsSource.pageSize };
        pagerSettings.currentPage = selectAllCount ? 1 : currentPage;
        pagerSettings.itemsPerPage = selectAllCount || pagerSettings.itemsPerPage;
        return pagerSettings;
    };
    PicklistFilterRemoteService.prototype.resetPagingForSelectAllIfNeeded = function (selectAllCount) {
        if (selectAllCount === void 0) { selectAllCount = null; }
        if (selectAllCount) {
            this.currentValuePage = Math.floor(selectAllCount / this.stateService.optionsSource.pageSize);
        }
    };
    PicklistFilterRemoteService.prototype.clearLists = function (type) {
        if (type === 'both' || type === 'values') {
            this.stateService.clearList(this.valueList);
        }
        if (type === 'both' || type === 'valuesets') {
            this.stateService.clearList(this.valueSetList);
        }
    };
    PicklistFilterRemoteService.prototype.clearFilteredOptions = function (type) {
        if (type === 'both' || type === 'values') {
            this.valueList.filteredOptions.length = 0;
        }
        if (type === 'both' || type === 'valuesets') {
            this.valueSetList.filteredOptions.length = 0;
        }
    };
    return PicklistFilterRemoteService;
}());
PicklistFilterRemoteService.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"] },
];
PicklistFilterRemoteService.ctorParameters = function () { return [
    { type: PicklistStateService, },
]; };
var PicklistFilterService = /** @class */ (function () {
    function PicklistFilterService(workTracker, stateService, remoteFilterService, localFilterService) {
        this.workTracker = workTracker;
        this.stateService = stateService;
        this.remoteFilterService = remoteFilterService;
        this.localFilterService = localFilterService;
        this.searchTerm = '';
    }
    Object.defineProperty(PicklistFilterService.prototype, "valueList", {
        get: function () {
            return this.stateService.valueList;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PicklistFilterService.prototype, "valueSetList", {
        get: function () {
            return this.stateService.valueSetList;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PicklistFilterService.prototype, "searchTokens", {
        get: function () {
            return this.searchTerm
                .toLocaleLowerCase()
                .replace(/\s+/g, ' ')
                .split(' ');
        },
        enumerable: true,
        configurable: true
    });
    PicklistFilterService.prototype.reset = function () {
        this.remoteFilterService.reset(this);
        this.searchTerm = '';
    };
    PicklistFilterService.prototype.runFilter = function (searchTerm) {
        var _this = this;
        this.searchTerm = searchTerm;
        if (!this.stateService.optionsSource.isPaged) {
            this.localFilterService.filter(this.valueList, this.searchTokens);
            this.localFilterService.filter(this.valueSetList, this.searchTokens);
        }
        else {
            this.remoteFilterService.currentValuePage = 1;
            this.remoteFilterService.currentValueSetPage = 1;
            var workTracker = this.workTracker.startObservable(function () { return _this.remoteFilterService.filter(); });
            this.showListLoadingIndicators(workTracker, 'both');
        }
    };
    PicklistFilterService.prototype.filterOptionsRemote = function (type, shouldAppend, selectAllCount) {
        if (type === void 0) { type = 'both'; }
        if (shouldAppend === void 0) { shouldAppend = false; }
        if (selectAllCount === void 0) { selectAllCount = null; }
        return this.remoteFilterService.filter(type, shouldAppend, selectAllCount);
    };
    PicklistFilterService.prototype.loadMore = function (type, autoLoadMore) {
        var _this = this;
        if (type === void 0) { type = 'both'; }
        if (autoLoadMore === void 0) { autoLoadMore = false; }
        if (type === 'both' || type === 'values') {
            this.remoteFilterService.currentValuePage++;
        }
        if (type === 'both' || type === 'valuesets') {
            this.remoteFilterService.currentValueSetPage++;
        }
        var loading$ = this.workTracker.startObservable(function () { return _this.filterOptionsRemote(type, true); });
        this.showListLoadingIndicators(loading$, type, !autoLoadMore);
    };
    PicklistFilterService.prototype.loadForSelectAll = function (numberToLoad) {
        var _this = this;
        var loading$ = this.workTracker.startObservable(function () { return _this.filterOptionsRemote('values', false, numberToLoad); });
        this.showListLoadingIndicators(loading$, 'values');
        return loading$;
    };
    PicklistFilterService.prototype.reloadIfEmpty = function () {
        var valuesNeedReload = this.valueList.options.size === 0 && this.valueList.additionalRemoteOptions > 0;
        var valueSetsNeedReload = this.valueSetList.options.size === 0 && this.valueSetList.additionalRemoteOptions > 0;
        if (valuesNeedReload || valueSetsNeedReload) {
            this.runFilter(this.searchTerm);
        }
    };
    PicklistFilterService.prototype.preFilterOptionsForRemoteMode = function (valuesMap, list) {
        var _this = this;
        valuesMap.forEach(function (v) {
            if (!_this.localFilterService.itemHasSearchTokens(list, v, _this.searchTokens)) {
                valuesMap.delete(v.code);
            }
        });
    };
    PicklistFilterService.prototype.showListLoadingIndicators = function (workTracker, type, isAppending) {
        if (type === void 0) { type = 'both'; }
        if (isAppending === void 0) { isAppending = false; }
        if (type === 'both' || type === 'values') {
            this.showLoadingIndicatorForList(this.valueList, workTracker, isAppending);
        }
        if (type === 'both' || type === 'valuesets') {
            this.showLoadingIndicatorForList(this.valueSetList, workTracker, isAppending);
        }
    };
    PicklistFilterService.prototype.showLoadingIndicatorForList = function (list, tracker, isAppending) {
        if (isAppending === void 0) { isAppending = false; }
        if (isAppending) {
            list.appendingOptions = tracker;
        }
        else {
            list.loadingOptions = tracker;
        }
    };
    return PicklistFilterService;
}());
PicklistFilterService.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"] },
];
PicklistFilterService.ctorParameters = function () { return [
    { type: WorkTrackerService, },
    { type: PicklistStateService, },
    { type: PicklistFilterRemoteService, },
    { type: PicklistFilterLocalService, },
]; };
var PicklistValuesetMovingService = /** @class */ (function () {
    function PicklistValuesetMovingService(filterService, stateService) {
        this.filterService = filterService;
        this.stateService = stateService;
    }
    Object.defineProperty(PicklistValuesetMovingService.prototype, "valueList", {
        get: function () {
            return this.stateService.valueList;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PicklistValuesetMovingService.prototype, "valueSetList", {
        get: function () {
            return this.stateService.valueSetList;
        },
        enumerable: true,
        configurable: true
    });
    PicklistValuesetMovingService.prototype.moveOutValuesets = function (optionsToMove, pane, shouldBreakValuesets) {
        var _this = this;
        if (shouldBreakValuesets === void 0) { shouldBreakValuesets = false; }
        this.valueSetList.selectedOptions.forEach(function (v) {
            v.showValues = false;
            optionsToMove.valueSets.set(v.code, v);
            _this.valueSetList.options.delete(v.code);
        });
        this.valueSetList.filteredOptions.forEach(function (valueset) {
            if (valueset.selected || valueset.subValuesSelectList.selectedOptions.size < 1) {
                return;
            }
            if (shouldBreakValuesets) {
                _this.breakValueset(valueset, optionsToMove, pane.companion);
            }
            else {
                _this.moveSubValues(valueset.subValuesSelectList.selectedOptions, pane);
            }
        });
    };
    PicklistValuesetMovingService.prototype.breakValueset = function (valueset, optionsToMove, companionPane) {
        valueset.showValues = false;
        optionsToMove.valueSets.set(valueset.code, valueset);
        this.valueSetList.options.delete(valueset.code);
        var unselectedSubValues = new Map();
        valueset.subValuesSelectList.filteredOptions.filter(function (o) { return !o.selected; }).forEach(function (o) {
            unselectedSubValues.set(o.code, new ValueListOption(o.option, o.code));
        });
        if (!companionPane) {
            return;
        }
        this.moveSubValues(unselectedSubValues, companionPane);
    };
    PicklistValuesetMovingService.prototype.moveSubValues = function (valuesMap, sourcePane) {
        this.removeValuesFromPane(valuesMap, sourcePane);
        if (!sourcePane.companion) {
            return;
        }
        valuesMap.forEach(function (o) {
            ((sourcePane.companion)).valueList.options.set(o.code, new ValueListOption(o.option, o.code));
        });
    };
    PicklistValuesetMovingService.prototype.removeValuesFromPane = function (valuesMap, pane) {
        if (pane.isPaged) {
            this.filterService.preFilterOptionsForRemoteMode(valuesMap, pane.valueList);
        }
        valuesMap.forEach(function (v) {
            var optionDeleted = pane.valueList.options.delete(v.code);
            var optionAlreadyInCompanionList = pane.companion ? pane.companion.valueList.options.has(v.code) : false;
            if (!optionDeleted && pane.isPaged && !optionAlreadyInCompanionList) {
                pane.valueList.additionalRemoteOptions--;
            }
        });
    };
    return PicklistValuesetMovingService;
}());
PicklistValuesetMovingService.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"] },
];
PicklistValuesetMovingService.ctorParameters = function () { return [
    { type: PicklistFilterService, },
    { type: PicklistStateService, },
]; };
var PicklistService = /** @class */ (function () {
    function PicklistService(workTracker, filterService, localFilterService, valuesetMovingService, stateService) {
        this.workTracker = workTracker;
        this.filterService = filterService;
        this.localFilterService = localFilterService;
        this.valuesetMovingService = valuesetMovingService;
        this.stateService = stateService;
    }
    Object.defineProperty(PicklistService.prototype, "pane", {
        get: function () {
            return this.stateService.pane;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PicklistService.prototype, "picklist", {
        get: function () {
            return this.stateService.picklist;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PicklistService.prototype, "optionsSource", {
        get: function () {
            return this.stateService.optionsSource;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PicklistService.prototype, "valueList", {
        get: function () {
            return this.stateService.valueList;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PicklistService.prototype, "valueSetList", {
        get: function () {
            return this.stateService.valueSetList;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PicklistService.prototype, "totalValuesCount", {
        get: function () {
            return this.valueList.options.size + this.valueList.additionalRemoteOptions;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PicklistService.prototype, "totalValueSetsCount", {
        get: function () {
            return this.valueSetList.options.size + this.valueSetList.additionalRemoteOptions;
        },
        enumerable: true,
        configurable: true
    });
    PicklistService.prototype.reset = function (settings, optionsSource, pane) {
        var _this = this;
        this.stateService.reset(settings, optionsSource, pane);
        this.filterService.reset();
        if (this.optionsSource.optionsAreLocal()) {
            this.stateService.updateValueList(this.optionsSource.values);
            this.stateService.updateValueSetList(this.optionsSource.valueSets);
            this.localFilterService.filter(this.valueList, this.filterService.searchTokens);
            this.localFilterService.filter(this.valueSetList, this.filterService.searchTokens);
        }
        else {
            var loading$ = this.workTracker.startObservable(function () { return _this.filterService.filterOptionsRemote(); });
            this.valueList.loadingOptions = loading$;
            this.valueSetList.loadingOptions = loading$;
        }
    };
    PicklistService.prototype.addOptions = function (listOptions) {
        var _this = this;
        if (!this.optionsSource.optionsAreLocal()) {
            this.filterService.preFilterOptionsForRemoteMode(listOptions.values, this.valueList);
            this.filterService.preFilterOptionsForRemoteMode(listOptions.valueSets, this.valueSetList);
        }
        listOptions.values.forEach(function (o) {
            _this.valueList.options.set(o.code, o);
        });
        listOptions.valueSets.forEach(function (o) {
            _this.valueSetList.options.set(o.code, o);
        });
        this.localFilterService.filter(this.valueList, this.filterService.searchTokens);
        this.localFilterService.filter(this.valueSetList, this.filterService.searchTokens);
        this.pane.selectNone();
    };
    PicklistService.prototype.moveOutSelectedOptions = function (shouldBreakValuesets) {
        var _this = this;
        if (shouldBreakValuesets === void 0) { shouldBreakValuesets = false; }
        var optionsToMove = new PicklistValueOptions();
        this.valueList.selectedOptions.forEach(function (o) {
            optionsToMove.values.set(o.code, o);
            _this.valueList.options.delete(o.code);
        });
        this.valuesetMovingService.moveOutValuesets(optionsToMove, this.pane, shouldBreakValuesets);
        this.localFilterService.filter(this.valueList, this.filterService.searchTokens);
        this.localFilterService.filter(this.valueSetList, this.filterService.searchTokens);
        this.pane.selectNone();
        return optionsToMove;
    };
    PicklistService.prototype.loadValuesForValueset = function (valueset) {
        valueset.loadingValues = true;
        if (!this.optionsSource.getValuesForValueset) {
            return;
        }
        this.optionsSource.getValuesForValueset(valueset.option.code).subscribe(function (values) {
            valueset.subValuesSelectList.filteredOptions.length = 0;
            values.forEach(function (v) {
                valueset.subValuesSelectList.filteredOptions.push(new ValueListOption(v, v.code));
            });
        }, function () {
            console.warn('Unable to load values for valueset');
            valueset.showValues = false;
        }, function () {
            valueset.loadingValues = false;
        });
    };
    return PicklistService;
}());
PicklistService.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"] },
];
PicklistService.ctorParameters = function () { return [
    { type: WorkTrackerService, },
    { type: PicklistFilterService, },
    { type: PicklistFilterLocalService, },
    { type: PicklistValuesetMovingService, },
    { type: PicklistStateService, },
]; };
var PicklistActionService = /** @class */ (function () {
    function PicklistActionService(listService) {
        this.listService = listService;
    }
    Object.defineProperty(PicklistActionService.prototype, "valueList", {
        get: function () {
            return this.listService.valueList;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PicklistActionService.prototype, "valueSetList", {
        get: function () {
            return this.listService.valueSetList;
        },
        enumerable: true,
        configurable: true
    });
    PicklistActionService.prototype.onItemClicked = function (event, index, list, item) {
        if (event.shiftKey && list.lastClickedOption && !(item.code === list.lastClickedOption.code)) {
            this.shiftClick(index, list, item, list.lastClickedOption);
        }
        else if (event.ctrlKey) {
            this.ctrlClick(list, item);
        }
        else {
            this.selectNone();
            this.selectItem(list, item);
            list.lastClickedOption = item;
        }
    };
    PicklistActionService.prototype.onItemDoubleClicked = function (event, list, item) {
        this.selectNone();
        this.selectItem(list, item);
    };
    PicklistActionService.prototype.onValuesetCaretClicked = function (event, valueset) {
        if (!valueset.showValues && valueset.subValuesSelectList.filteredOptions.length === 0) {
            this.listService.loadValuesForValueset(valueset);
        }
        valueset.showValues = !valueset.showValues;
    };
    PicklistActionService.prototype.selectAll = function () {
        var _this = this;
        this.valueSetList.filteredOptions.forEach(function (v) {
            _this.clearListSelection(v.subValuesSelectList);
        });
        this.selectAllInList(this.valueList);
        this.selectAllInList(this.valueSetList);
    };
    PicklistActionService.prototype.selectNone = function () {
        var _this = this;
        this.valueSetList.filteredOptions.forEach(function (v) {
            _this.clearListSelection(v.subValuesSelectList);
        });
        this.clearListSelection(this.valueList);
        this.clearListSelection(this.valueSetList);
    };
    PicklistActionService.prototype.selectAllInList = function (list) {
        if (!list.isActive) {
            return;
        }
        list.selectedOptions.clear();
        list.lastClickedOption = null;
        list.filteredOptions.forEach(function (item) {
            item.selected = true;
            list.selectedOptions.set(item.code, item);
        });
    };
    PicklistActionService.prototype.clearListSelection = function (list) {
        list.selectedOptions.clear();
        list.lastClickedOption = null;
        list.filteredOptions.forEach(function (item) {
            item.selected = false;
        });
    };
    PicklistActionService.prototype.shiftClick = function (index, list, item, lastClickedItem) {
        var lastIndex = list.filteredOptions.indexOf(lastClickedItem);
        var largeIndex = Math.max(index, lastIndex);
        var smallIndex = Math.min(index, lastIndex);
        var formerLastClicked = list.lastClickedOption;
        this.selectNone();
        list.lastClickedOption = formerLastClicked;
        for (var i = smallIndex; i <= largeIndex; i++) {
            this.selectItem(list, list.filteredOptions[i]);
        }
    };
    PicklistActionService.prototype.ctrlClick = function (list, item) {
        if (isSubList(list) && list.parentValueSet.selected) {
            this.selectAllInList(list);
            this.deselectItem(this.valueSetList, list.parentValueSet);
            this.deselectItem(list, item);
        }
        else {
            this.toggleItemSelection(list, item);
        }
        list.lastClickedOption = item;
    };
    PicklistActionService.prototype.deselectItem = function (list, item) {
        item.selected = false;
        list.selectedOptions.delete(item.code);
    };
    PicklistActionService.prototype.selectItem = function (list, item) {
        item.selected = true;
        list.selectedOptions.set(item.code, item);
    };
    PicklistActionService.prototype.toggleItemSelection = function (list, item) {
        if (item.selected) {
            this.deselectItem(list, item);
        }
        else {
            this.selectItem(list, item);
        }
    };
    return PicklistActionService;
}());
PicklistActionService.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"] },
];
PicklistActionService.ctorParameters = function () { return [
    { type: PicklistService, },
]; };
var PicklistPaneComponent = /** @class */ (function () {
    function PicklistPaneComponent(listService, actionService, filterService) {
        this.listService = listService;
        this.actionService = actionService;
        this.filterService = filterService;
        this.emptyMsg = 'No options';
        this.moveSelectedItems = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.companion = null;
        this.shouldExcludeCompanion = false;
        this.codeIsSignificant = false;
        this.searchTerm = '';
        this.searchTermStream = new rxjs__WEBPACK_IMPORTED_MODULE_5__["Subject"]();
        this.selectAllWasLastClicked = false;
        this.selectAllLimit = 2000;
    }
    PicklistPaneComponent.prototype.reset = function (source, settings, companion, excludeCompanion) {
        if (excludeCompanion === void 0) { excludeCompanion = false; }
        this.companion = companion;
        this.shouldExcludeCompanion = excludeCompanion;
        this.codeIsSignificant = settings.codeIsSignificant;
        this.selectAllWasLastClicked = false;
        this.searchTerm = '';
        this.wireUpSearch();
        this.listService.reset(settings, source, this);
    };
    Object.defineProperty(PicklistPaneComponent.prototype, "valueList", {
        get: function () {
            return this.listService.valueList;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PicklistPaneComponent.prototype, "valueSetList", {
        get: function () {
            return this.listService.valueSetList;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PicklistPaneComponent.prototype, "isPaged", {
        get: function () {
            return this.listService.optionsSource.isPaged;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PicklistPaneComponent.prototype, "optionsAvailableCount", {
        get: function () {
            return this.PicklistValueOptionsTotal + this.valueSetOptionsTotal;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PicklistPaneComponent.prototype, "PicklistValueOptionsTotal", {
        get: function () {
            return this.valueList.isActive ? this.listService.totalValuesCount : 0;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PicklistPaneComponent.prototype, "valueSetOptionsTotal", {
        get: function () {
            return this.valueSetList.isActive ? this.listService.totalValueSetsCount : 0;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PicklistPaneComponent.prototype, "optionsShowingCount", {
        get: function () {
            var valueListShowing = this.valueList.isActive ? this.valueList.filteredOptions.length : 0;
            var valueSetListShowing = this.valueSetList.isActive ? this.valueSetList.filteredOptions.length : 0;
            return valueListShowing + valueSetListShowing;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PicklistPaneComponent.prototype, "showTooManyToSelectAllMsg", {
        get: function () {
            var serverMatches = this.valueList.additionalRemoteOptions;
            return (this.selectAllWasLastClicked &&
                Number.isFinite(serverMatches) &&
                serverMatches + this.valueList.options.size > this.selectAllLimit);
        },
        enumerable: true,
        configurable: true
    });
    PicklistPaneComponent.prototype.shouldShowList = function (list) {
        return list.isActive && (list.filteredOptions.length > 0 || list.additionalRemoteOptions > 0);
    };
    PicklistPaneComponent.prototype.listIsFilteredToEmpty = function (list) {
        return list.options.size > 0 && list.filteredOptions.length === 0 && list.isActive;
    };
    PicklistPaneComponent.prototype.isAnySelected = function () {
        var topLevelListHasSelection = this.valueList.selectedOptions.size > 0 || this.valueSetList.selectedOptions.size > 0;
        var subListHasSelection = this.valueSetList.filteredOptions.some(function (o) { return o.subValuesSelectList.selectedOptions.size > 0; });
        return topLevelListHasSelection || subListHasSelection;
    };
    PicklistPaneComponent.prototype.focusSearch = function () {
        if (this.searchInputEl) {
            this.searchInputEl.nativeElement.focus();
        }
    };
    PicklistPaneComponent.prototype.scrollToTop = function () {
        if (this.listContainerEl) {
            this.listContainerEl.nativeElement.scrollTop = 0;
        }
    };
    PicklistPaneComponent.prototype.onSearchKeyup = function () {
        this.selectNone();
        this.searchTermStream.next(this.searchTerm);
    };
    PicklistPaneComponent.prototype.onItemClicked = function (event, index, list, item) {
        this.selectAllWasLastClicked = false;
        event.stopPropagation();
        this.actionService.onItemClicked(event, index, list, item);
    };
    PicklistPaneComponent.prototype.preventIEHighlightBug = function () {
        document.onselectstart = function () {
            return false;
        };
        setTimeout(function () {
            document.onselectstart = function () { return null; };
        }, 0);
    };
    PicklistPaneComponent.prototype.onValuesetCaretClicked = function (event, valueset) {
        this.selectAllWasLastClicked = false;
        event.stopPropagation();
        this.actionService.onValuesetCaretClicked(event, valueset);
    };
    PicklistPaneComponent.prototype.triggerLoadMore = function (type) {
        this.selectAllWasLastClicked = false;
        this.filterService.loadMore(type);
    };
    PicklistPaneComponent.prototype.onItemDoubleClicked = function (event, list, item) {
        this.selectAllWasLastClicked = false;
        event.stopPropagation();
        this.actionService.onItemDoubleClicked(event, list, item);
        this.moveSelectedItems.emit(this);
    };
    PicklistPaneComponent.prototype.selectAll = function () {
        this.selectAllWasLastClicked = true;
        var shouldLoadMoreBeforeSelectAll = this.valueList.additionalRemoteOptions && this.valueList.options.size < this.selectAllLimit;
        if (this.pagingValueList() && shouldLoadMoreBeforeSelectAll) {
            var totalMatches = this.valueList.additionalRemoteOptions + this.valueList.options.size;
            var numberToLoad = totalMatches > this.selectAllLimit ? this.selectAllLimit : totalMatches;
            this.loadAndSelectAll(numberToLoad);
        }
        else {
            this.actionService.selectAll();
        }
    };
    PicklistPaneComponent.prototype.selectNone = function () {
        this.selectAllWasLastClicked = false;
        this.actionService.selectNone();
    };
    PicklistPaneComponent.prototype.loadAndSelectAll = function (numberToLoad) {
        var _this = this;
        this.filterService.loadForSelectAll(numberToLoad).subscribe(function () {
            _this.actionService.selectAllInList(_this.valueList);
        });
    };
    PicklistPaneComponent.prototype.pagingValueList = function () {
        return this.isPaged && this.shouldShowList(this.valueList) && !this.shouldShowList(this.valueSetList);
    };
    PicklistPaneComponent.prototype.wireUpSearch = function () {
        var _this = this;
        this.searchTermStream.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["debounceTime"])(300), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["distinctUntilChanged"])()).subscribe(function (t) {
            _this.filterService.runFilter(t);
            _this.selectNone();
        });
    };
    return PicklistPaneComponent;
}());
PicklistPaneComponent.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"], args: [{
                selector: 'hc-picklist-pane',
                template: "<div class=\"hc-picklist-pane\">\n    <div class=\"picklist-controls\">\n        <hc-form-field>\n            <input hcInput #searchInput (keyup)=\"onSearchKeyup()\" [(ngModel)]=\"searchTerm\" type=\"text\" placeholder=\"Search\" >\n            <hc-icon hcSuffix fontSet=\"fa\" fontIcon=\"fa-search\"></hc-icon>\n        </hc-form-field>\n        <div class=\"second-row-controls\">\n            <div class=\"hc-type-em\">\n                Showing {{optionsShowingCount.toLocaleString()}} of {{optionsAvailableCount.toLocaleString()}}\n            </div>\n            <div>\n                <button type=\"button\" class=\"btn-text-link\" (click)=\"selectAll()\" [disabled]=\"valueList.filteredOptions.length === 0 && valueSetList.filteredOptions.length === 0\">\n                    Select All\n                </button>\n                <button type=\"button\" class=\"btn-text-link\" (click)=\"selectNone()\" [disabled]=\"!isAnySelected()\">\n                    Select None\n                </button>\n            </div>\n        </div>\n    </div>\n    <div class=\"list-container\" #listContainer>\n        <!-- Valuesets -->\n        <div *ngIf=\"valueSetList.isActive && (valueSetList.loadingOptions | async)\" class=\"loading-list\"><hc-progress-dots></hc-progress-dots></div>\n        <table *ngIf=\"shouldShowList(valueSetList) && !(valueSetList.loadingOptions | async)\" class=\"hc-table hc-table-small hc-no-hover-table valueset-table\">\n            <tbody>\n                <!-- Header, shown when both values and valuesets are sitting in list at same time -->\n                <tr *ngIf=\"shouldShowList(valueSetList) && shouldShowList(valueList)\"><th colspan=\"2\">Value Sets</th></tr>\n                <!-- Value set List Items -->\n                <tr *ngFor=\"let item of valueSetList.filteredOptions; let idx=index;\"\n                    (mousedown)=\"preventIEHighlightBug()\"\n                    (click)=\"onItemClicked($event, idx, valueSetList, item);\"\n                    (dblclick)=\"onItemDoubleClicked($event, valueSetList, item);\"\n                    [ngClass]=\"{'hc-row-selected': item.selected}\"\n                    class=\"valueset-option value-option-row\"><td>\n                        <div>\n                            <span class=\"valueset-value-toggle\" (click)=\"onValuesetCaretClicked($event, item)\">\n                                <hc-icon icon-sm class=\"values-caret\" fontSet=\"fa\" [ngClass]=\"{'showing-values': item.showValues}\" fontIcon=\"fa-caret-right\"></hc-icon>\n                                <hc-icon icon-sm class=\"vs-folder\" fontSet=\"fa\" [fontIcon]=\"item.showValues ? 'fa-folder-open-o' : 'fa-folder-o'\"></hc-icon>\n                            </span>\n                            <!-- TODO: more deets for the valueset -->\n                            <span class=\"vs-title\">{{item.option.title || \"Untitled\"}} ({{item.option.subValueCount}})</span>\n                        </div>\n                        <div>\n                            <!-- Value set Values List (closed by default) -->\n                            <table *ngIf=\"item.showValues\" class=\"valueset-sublist-table hc-table\"><tbody>\n                                <tr *ngIf=\"item.loadingValues\" class=\"loading-subvals\"><hc-progress-dots></hc-progress-dots></tr>\n                                <tr *ngFor=\"let subItem of item.subValuesSelectList.filteredOptions; let idx=index;\"\n                                    (mousedown)=\"preventIEHighlightBug()\"\n                                    (click)=\"onItemClicked($event, idx, item.subValuesSelectList, subItem);\"\n                                    (dblclick)=\"onItemDoubleClicked($event, item.subValuesSelectList, subItem);\"\n                                    class=\"value-option-row hc-tr\"\n                                    [ngClass]=\"{'hc-row-selected': subItem.selected}\"><td>\n                                        <span *ngIf=\"codeIsSignificant\" class=\"valueset-code\">{{subItem.option.code}}</span>\n                                        <span>{{subItem.option.title || \"Untitled\"}}</span>\n                                    </td>\n                                </tr>\n                            </tbody></table>\n                        </div>\n                </td></tr>\n                <!-- Load More link for value sets, available when paging -->\n                <tr *ngIf=\"isPaged && optionsShowingCount < optionsAvailableCount\" class=\"text-center value-option-row load-more-row\">\n                    <a class=\"text-link\" (click)=\"triggerLoadMore('valuesets')\" *ngIf=\"!(valueSetList.appendingOptions | async)\">Load More</a>\n                    <hc-progress-dots *ngIf=\"valueSetList.appendingOptions | async\"></hc-progress-dots>\n                </tr>\n            </tbody>\n        </table>\n        <!-- Values -->\n        <div *ngIf=\"valueList.isActive && (valueList.loadingOptions | async)\" class=\"loading-list\"><hc-progress-dots></hc-progress-dots></div>\n        <table *ngIf=\"shouldShowList(valueList) && !(valueList.loadingOptions | async)\" class=\"hc-table hc-table-small hc-no-hover-table\" [ngClass]=\"{'no-code-column': !codeIsSignificant}\">\n            <tbody>\n                <!-- Header, shown when both values and valuesets are sitting in list at same time -->\n                <tr *ngIf=\"shouldShowList(valueSetList) && shouldShowList(valueList)\"><th colspan=\"2\">Individual Values</th></tr>\n                <!-- Show when user clicked \"select all\", and there are more options on server, but too many to load in at once -->\n                <tr *ngIf=\"showTooManyToSelectAllMsg\" class=\"value-option-row select-all-matches-row\">\n                    <td colspan=\"2\">\n                        <span class=\"hc-type-bold\">{{valueList.selectedOptions.size}} Selected.</span>\n                        <span>Too many results to select all.</span>\n                    </td>\n                </tr>\n                <!-- Value List Items -->\n                <tr *ngFor=\"let item of valueList.filteredOptions; let idx=index;\"\n                    (mousedown)=\"preventIEHighlightBug()\"\n                    (click)=\"onItemClicked($event, idx, valueList, item);\"\n                    (dblclick)=\"onItemDoubleClicked($event, valueList, item);\"\n                    class=\"value-option-row\"\n                    [ngClass]=\"{'hc-row-selected': item.selected}\">\n                        <td *ngIf=\"codeIsSignificant\" class=\"col-code\">{{item.option.code}}</td>\n                        <td class=\"col-title\">{{item.option.title || \"Untitled\"}}</td>\n                </tr>\n                <!-- Load More link for values, available when paging -->\n                <tr *ngIf=\"isPaged && optionsShowingCount < optionsAvailableCount\" class=\"text-center value-option-row load-more-row\">\n                    <a class=\"text-link\" (click)=\"triggerLoadMore('values')\" *ngIf=\"!(valueList.appendingOptions | async)\">Load More</a>\n                    <hc-progress-dots *ngIf=\"valueList.appendingOptions | async\"></hc-progress-dots>\n                </tr>\n            </tbody>\n        </table>\n        <!-- Empty table -->\n        <div class=\"empty-table-msg hc-type-em\" *ngIf=\"!shouldShowList(valueSetList) && !shouldShowList(valueList) && !(valueList.loadingOptions | async) && !(valueSetList.loadingOptions | async)\">\n                <span *ngIf=\"listIsFilteredToEmpty(valueList) || listIsFilteredToEmpty(valueSetList); else emptyMessage\">Nothing matches your search.</span>\n                <span><ng-template #emptyMessage>{{emptyMsg}}</ng-template></span>\n        </div>\n    </div>\n</div>\n",
                styles: [".hc-picklist-pane{height:100%;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-flow:column;flex-flow:column}.hc-picklist-pane .hc-form-field-wrapper{border:none;padding-bottom:0}.hc-picklist-pane .picklist-controls{-webkit-box-flex:0;-ms-flex:0 0 auto;flex:0 0 auto;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-flow:column;flex-flow:column;font-size:12px}.hc-picklist-pane .picklist-controls .second-row-controls{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between;-webkit-box-align:center;-ms-flex-align:center;align-items:center;margin:15px 0 2px}.hc-picklist-pane .picklist-controls button{font-family:'Open Sans',sans-serif;margin-left:10px}.hc-picklist-pane .picklist-controls button.btn-text-link{font-size:12px;color:#00aeff;background:0 0;border:none;padding:0;text-align:left;cursor:pointer}.hc-picklist-pane .picklist-controls button.btn-text-link:hover{text-decoration:underline;color:#009de6}.hc-picklist-pane .picklist-controls button.btn-text-link:active{outline:0;-webkit-box-shadow:none;box-shadow:none;text-decoration:underline;color:#008bcc}.hc-picklist-pane .picklist-controls button.btn-text-link[disabled]{text-decoration:none;opacity:1;color:#c0c5cc;cursor:default}.hc-picklist-pane .loading-list{height:100%;border:1px solid #d7dde4}.hc-picklist-pane .list-container{-webkit-box-flex:1;-ms-flex:1 1 300px;flex:1 1 300px;border:1px solid #d7dde4;background-color:#fff;overflow-y:scroll;position:relative}.hc-picklist-pane .list-container table.hc-table .value-option-row{font-weight:400;line-height:1.1;-webkit-touch-callout:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:default}.hc-picklist-pane .list-container table.hc-table .select-all-matches-row{text-align:center;background-color:#f9efce;border-color:#fff;color:#846b11}.hc-picklist-pane .list-container table.hc-table .load-more-row{display:block;height:36px;font-size:12px;text-align:center;font-weight:700;padding:11px}.hc-picklist-pane .list-container table.hc-table .load-more-row a{cursor:pointer}.hc-picklist-pane .list-container table.hc-table th{background-color:#e0e6ec;font-weight:400;font-style:italic;border-top:1px solid #d0dae3;border-bottom:1px solid #d0dae3;font-size:12px}.hc-picklist-pane .list-container table.hc-table tbody{border:0}.hc-picklist-pane .list-container table.hc-table tr td.col-code{word-break:normal;width:20%}.hc-picklist-pane .list-container table.hc-table.valueset-table td,.hc-picklist-pane .list-container table.hc-table.valueset-table th,.hc-picklist-pane .list-container table.hc-table.valueset-table tr{display:block;width:100%}.hc-picklist-pane .list-container .empty-table-msg{position:absolute;height:100%;width:100%;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center}.hc-picklist-pane .valueset-option .valueset-value-toggle{cursor:pointer;color:#00aeff;-webkit-transform:color .2s;transform:color .2s}.hc-picklist-pane .valueset-option .valueset-value-toggle:hover{color:#006899}.hc-picklist-pane .valueset-option .valueset-value-toggle .vs-folder{position:relative;left:-3px}.hc-picklist-pane .valueset-option .valueset-value-toggle .values-caret:before{position:relative;top:-1px;display:inline-block;-webkit-transition:-webkit-transform .2s;transition:-webkit-transform .2s;transition:transform .2s;transition:transform .2s,-webkit-transform .2s;font-size:13px}.hc-picklist-pane .valueset-option .valueset-value-toggle .values-caret.showing-values:before{-webkit-transform:rotate(90deg);transform:rotate(90deg)}.hc-picklist-pane .valueset-option.hc-row-selected .values-caret,.hc-picklist-pane .valueset-option.hc-row-selected .vs-folder{color:#fff}.hc-picklist-pane .valueset-option .loading-subvals{height:40px}.hc-picklist-pane .valueset-sublist-table{margin:10px 0 20px;border:1px solid #d7dfe7;overflow:hidden;border-radius:3px;border-collapse:separate;font-size:13px}.hc-picklist-pane .valueset-code{margin-right:5px}"],
                providers: [
                    PicklistService,
                    PicklistStateService,
                    PicklistValuesetMovingService,
                    PicklistActionService,
                    PicklistFilterService,
                    PicklistFilterRemoteService,
                    PicklistFilterLocalService,
                    WorkTrackerService
                ],
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None
            },] },
];
PicklistPaneComponent.ctorParameters = function () { return [
    { type: PicklistService, },
    { type: PicklistActionService, },
    { type: PicklistFilterService, },
]; };
PicklistPaneComponent.propDecorators = {
    "emptyMsg": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] },],
    "moveSelectedItems": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"] },],
    "listContainerEl": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"], args: ['listContainer',] },],
    "searchInputEl": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"], args: ['search',] },],
};
var ProgressSpinnerComponent = /** @class */ (function () {
    function ProgressSpinnerComponent() {
        this.isCentered = true;
        this.hasChannel = true;
        this.isDeterminate = false;
        this._rightCircleTransform = '';
        this._leftCircleTransform = '';
        this._rightCircleTransition = '';
        this._leftCircleTransition = '';
        this._progress = 0;
        this._diameter = 0;
        this._minDiameter = 20;
        this._maxDiameter = 250;
    }
    Object.defineProperty(ProgressSpinnerComponent.prototype, "progress", {
        get: function () {
            return this._progress;
        },
        set: function (progress) {
            this.setProgress(progress);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ProgressSpinnerComponent.prototype, "diameter", {
        get: function () {
            return this._diameter;
        },
        set: function (diameter) {
            this._diameter = Math.min(Math.max(this._minDiameter, diameter), this._maxDiameter);
        },
        enumerable: true,
        configurable: true
    });
    ProgressSpinnerComponent.prototype.setProgress = function (progress) {
        progress = Math.min(100, progress);
        progress = Math.max(0, progress);
        this.setProgressTransition(progress);
        this.setProgressTransform(progress);
        this._progress = progress;
    };
    ProgressSpinnerComponent.prototype.setProgressTransition = function (progress) {
        var sizeBasedTime = this.diameter > 150 ? 0.6 : 0.4;
        var timing = Math.abs(progress - this._progress) > 40 ? sizeBasedTime : sizeBasedTime / 2;
        var halfTime = timing / 2;
        if ((progress <= 50 && this._progress <= 50) || (progress >= 51 && this._progress >= 51)) {
            this._leftCircleTransition = "transform " + timing + "s ease-in-out 0s";
            this._rightCircleTransition = "transform " + timing + "s ease-in-out 0s";
        }
        else if (progress <= 50 && this._progress >= 51) {
            this._leftCircleTransition = "transform " + halfTime + "s ease-in 0s";
            this._rightCircleTransition = "transform " + halfTime + "s ease-out " + (halfTime - 0.001) + "s";
        }
        else if (progress >= 51 && this._progress <= 50) {
            this._leftCircleTransition = "transform " + halfTime + "s ease-out " + (halfTime - 0.001) + "s";
            this._rightCircleTransition = "transform " + halfTime + "s ease-in 0s";
        }
    };
    ProgressSpinnerComponent.prototype.setProgressTransform = function (progress) {
        if (progress <= 50) {
            var rightDegrees = progress / 50 * 180 - 135;
            this._rightCircleTransform = "rotate(" + rightDegrees + "deg)";
            this._leftCircleTransform = "rotate(135deg)";
        }
        else if (progress >= 51) {
            var leftDegrees = (progress - 50) / 50 * 180 + 135;
            this._leftCircleTransform = "rotate(" + leftDegrees + "deg)";
            this._rightCircleTransform = 'rotate(45deg)';
        }
    };
    return ProgressSpinnerComponent;
}());
ProgressSpinnerComponent.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"], args: [{
                selector: 'hc-progress-spinner',
                template: "<div class=\"hc-spinner-container\" [ngClass]=\"{'center-spinner': isCentered }\">\n    <div class=\"hc-spinner\"\n        [ngClass]=\"{'indeterminate-spin': !isDeterminate, 'large-spinner': diameter >= 150 }\"\n        [style.width.px]=\"diameter\"\n        [style.height.px]=\"diameter\"\n        [style.marginTop.px]=\"isCentered ? diameter / -2 : 0\"\n        [style.marginLeft.px]=\"isCentered ? diameter / -2 : 0\">\n        <div class=\"spinner-layer spinner-{{color}}\" [ngClass]=\"{'spinner-base': hasChannel }\">\n            <div class=\"circle base-circle\"></div>\n            <div class=\"circle-clipper left\"><div class=\"circle\" [style.transform]=\"_leftCircleTransform\" [style.transition]=\"_leftCircleTransition\"></div>\n            </div><div class=\"gap-patch\"><div class=\"circle\"></div>\n            </div><div class=\"circle-clipper right\"><div class=\"circle\" [style.transform]=\"_rightCircleTransform\" [style.transition]=\"_rightCircleTransition\"></div></div>\n        </div>\n    </div>\n</div>"
            },] },
];
ProgressSpinnerComponent.propDecorators = {
    "color": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] },],
    "isCentered": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] },],
    "hasChannel": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] },],
    "isDeterminate": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] },],
    "progress": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] },],
    "diameter": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] },],
};
var ProgressDotsComponent = /** @class */ (function () {
    function ProgressDotsComponent() {
        this.color = 'dark';
        this.isCentered = true;
        this.isMini = false;
    }
    return ProgressDotsComponent;
}());
ProgressDotsComponent.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"], args: [{
                selector: 'hc-progress-dots',
                template: "<div class=\"hc-dots-container\" [ngClass]=\"{'center-dots': isCentered }\">\n    <div class=\"hc-dots-loader\" [ngClass]=\"{'loader-light': color === 'light', 'loader-mini': isMini}\">\n        <div class=\"loader-animate\"></div>\n    </div>\n</div>"
            },] },
];
ProgressDotsComponent.propDecorators = {
    "color": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] },],
    "isCentered": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] },],
    "isMini": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] },],
};
var ProgressIndicatorsModule = /** @class */ (function () {
    function ProgressIndicatorsModule() {
    }
    return ProgressIndicatorsModule;
}());
ProgressIndicatorsModule.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"], args: [{
                imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"]],
                exports: [ProgressSpinnerComponent, ProgressDotsComponent],
                declarations: [ProgressSpinnerComponent, ProgressDotsComponent]
            },] },
];
var PicklistModule = /** @class */ (function () {
    function PicklistModule() {
    }
    return PicklistModule;
}());
PicklistModule.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"], args: [{
                imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormsModule"], ButtonModule, IconModule, InputModule, ProgressIndicatorsModule],
                declarations: [PicklistPaneComponent, PicklistComponent],
                exports: [PicklistPaneComponent, PicklistComponent]
            },] },
];
var nextUniqueId = 0;
var RadioGroupDirective = /** @class */ (function () {
    function RadioGroupDirective(_cdRef) {
        this._cdRef = _cdRef;
        this.change = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this._value = null;
        this._name = "hc-radio-group-" + nextUniqueId++;
        this._disabled = false;
        this._required = false;
        this._initialized = false;
        this._selected = null;
        this._onChangeFn = function () { };
        this._onTouchFn = function () { };
    }
    Object.defineProperty(RadioGroupDirective.prototype, "name", {
        get: function () {
            return this._name;
        },
        set: function (value) {
            this._name = value;
            this._updateRadioButtonNames();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RadioGroupDirective.prototype, "value", {
        get: function () {
            return this._value;
        },
        set: function (newValue) {
            if (this._value !== newValue) {
                this._value = newValue;
                this._updateSelectedRadio();
                this._checkSelectedRadio();
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RadioGroupDirective.prototype, "disabled", {
        get: function () {
            return this._disabled;
        },
        set: function (value) {
            this._disabled = parseBooleanAttribute(value);
            this._markRadiosForCheck();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RadioGroupDirective.prototype, "required", {
        get: function () {
            return this._required;
        },
        set: function (value) {
            this._required = parseBooleanAttribute(value);
            this._markRadiosForCheck();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RadioGroupDirective.prototype, "selected", {
        get: function () {
            return this._selected;
        },
        set: function (button) {
            this._selected = button;
            this.value = button ? button.value : null;
            this._checkSelectedRadio();
        },
        enumerable: true,
        configurable: true
    });
    RadioGroupDirective.prototype.ngAfterContentInit = function () {
        this._initialized = true;
    };
    RadioGroupDirective.prototype.writeValue = function (value) {
        this.value = value;
        this._cdRef.markForCheck();
    };
    RadioGroupDirective.prototype.registerOnChange = function (fn) {
        this._onChangeFn = fn;
    };
    RadioGroupDirective.prototype.registerOnTouched = function (fn) {
        this._onTouchFn = fn;
    };
    RadioGroupDirective.prototype._touch = function () {
        if (this._onTouchFn) {
            this._onTouchFn();
        }
    };
    RadioGroupDirective.prototype._emitChangeEvent = function () {
        if (this._initialized) {
            this.change.emit(new RadioButtonChangeEvent(this._selected, this.value));
        }
    };
    RadioGroupDirective.prototype._markRadiosForCheck = function () {
        if (this._radios) {
            this._radios.forEach(function (radio) { return radio._markForCheck(); });
        }
    };
    RadioGroupDirective.prototype._updateSelectedRadio = function () {
        var _this = this;
        var isAlreadySelected = this._selected !== null && this._selected.value === this._value;
        if (this._radios && !isAlreadySelected) {
            this._selected = null;
            this._radios.forEach(function (radio) {
                radio.checked = _this.value === radio.value;
                if (radio.checked) {
                    _this._selected = radio;
                }
            });
        }
    };
    RadioGroupDirective.prototype._checkSelectedRadio = function () {
        if (this._selected && !this._selected.checked) {
            this._selected.checked = true;
        }
    };
    RadioGroupDirective.prototype._updateRadioButtonNames = function () {
        var _this = this;
        if (this._radios) {
            this._radios.forEach(function (radio) {
                radio.name = _this.name;
            });
        }
    };
    return RadioGroupDirective;
}());
RadioGroupDirective.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"], args: [{
                selector: 'hc-radio-group',
                providers: [
                    {
                        provide: _angular_forms__WEBPACK_IMPORTED_MODULE_9__["NG_VALUE_ACCESSOR"],
                        useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["forwardRef"])(function () { return RadioGroupDirective; }),
                        multi: true
                    }
                ],
                exportAs: 'hcRadioGroup'
            },] },
];
RadioGroupDirective.ctorParameters = function () { return [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], },
]; };
RadioGroupDirective.propDecorators = {
    "change": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"] },],
    "_radios": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ContentChildren"], args: [Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["forwardRef"])(function () { return RadioButtonComponent; }), { descendants: true },] },],
    "name": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] },],
    "value": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] },],
    "disabled": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] },],
    "required": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] },],
};
var RadioButtonChangeEvent = /** @class */ (function () {
    function RadioButtonChangeEvent(source, value) {
        this.source = source;
        this.value = value;
    }
    return RadioButtonChangeEvent;
}());
var RadioButtonComponent = /** @class */ (function () {
    function RadioButtonComponent(radioGroup, cdRef) {
        this.cdRef = cdRef;
        this._uniqueId = "hc-radio-button-" + nextUniqueId++;
        this.id = this._uniqueId;
        this.change = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this._checked = false;
        this._value = null;
        this._required = false;
        this._disabled = false;
        this.radioGroup = radioGroup;
    }
    Object.defineProperty(RadioButtonComponent.prototype, "value", {
        get: function () {
            return this._value;
        },
        set: function (value) {
            if (this._value !== value) {
                this._value = value;
                if (this.radioGroup !== null && !this.checked) {
                    this.checked = this.radioGroup.value === value;
                }
                else if (this.radioGroup !== null && this.checked) {
                    this.radioGroup.selected = this;
                }
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RadioButtonComponent.prototype, "_getHostId", {
        get: function () {
            return this._uniqueId;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RadioButtonComponent.prototype, "required", {
        get: function () {
            return this._required || (this.radioGroup != null && this.radioGroup.required);
        },
        set: function (required) {
            this._required = parseBooleanAttribute(required);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RadioButtonComponent.prototype, "disabled", {
        get: function () {
            return this._disabled || (this.radioGroup != null && this.radioGroup.disabled);
        },
        set: function (isDisabled) {
            this._disabled = parseBooleanAttribute(isDisabled);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RadioButtonComponent.prototype, "checked", {
        get: function () {
            return this._checked;
        },
        set: function (value) {
            var newCheckedState = parseBooleanAttribute(value);
            if (this._checked !== newCheckedState) {
                this._checked = newCheckedState;
                if (newCheckedState && this.radioGroup && this.radioGroup.value !== this.value) {
                    this.radioGroup.selected = this;
                }
                else if (!newCheckedState && this.radioGroup && this.radioGroup.value === this.value) {
                    this.radioGroup.selected = null;
                }
                this.cdRef.markForCheck();
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RadioButtonComponent.prototype, "_inputId", {
        get: function () {
            if (this.id) {
                return this.id;
            }
            return this._uniqueId + "-input";
        },
        enumerable: true,
        configurable: true
    });
    RadioButtonComponent.prototype.ngOnInit = function () {
        if (this.radioGroup !== null) {
            this.checked = this.radioGroup.value === this._value;
            this.name = this.radioGroup.name;
        }
    };
    RadioButtonComponent.prototype._onInputClick = function (event) {
        event.stopPropagation();
    };
    RadioButtonComponent.prototype._onInputChange = function (event) {
        event.stopPropagation();
        var valueChanged = this.radioGroup && this.value !== this.radioGroup.value;
        this.checked = true;
        this._emitChangeEvent();
        if (this.radioGroup !== null) {
            this.radioGroup._onChangeFn(this.value);
            this.radioGroup._touch();
            if (valueChanged) {
                this.radioGroup._emitChangeEvent();
            }
        }
    };
    RadioButtonComponent.prototype._emitChangeEvent = function () {
        this.change.emit(new RadioButtonChangeEvent(this, this.value));
    };
    RadioButtonComponent.prototype._markForCheck = function () {
        this.cdRef.markForCheck();
    };
    return RadioButtonComponent;
}());
RadioButtonComponent.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"], args: [{
                selector: 'hc-radio-button',
                template: "<label class=\"hc-radio-container\" [ngClass]=\"{'disabled': disabled}\">\n    <input type=\"radio\"\n           [id]=\"_inputId\"\n           [attr.value]=\"value\"\n           [attr.name]=\"name\"\n           [disabled]=\"disabled\"\n           [required]=\"required\"\n           [checked]=\"checked\"\n           (change)=\"_onInputChange($event)\"\n           (click)=\"_onInputClick($event)\"/>\n    <span class=\"hc-radio-overlay\"></span>\n    <div class=\"hc-radio-content\">\n        <ng-content></ng-content>\n    </div>\n</label>\n",
                styles: [".hc-radio-container{display:block;position:relative;padding-left:35px;margin-bottom:12px;cursor:pointer;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.hc-radio-container:hover input~.hc-radio-overlay{border-color:#00aeff}.hc-radio-container input{position:absolute;opacity:0;cursor:pointer}.hc-radio-container input:checked~.hc-radio-overlay{background-color:#00aeff;border-color:#00aeff}.hc-radio-container input:checked~.hc-radio-overlay:after{display:block}.hc-radio-container .hc-radio-overlay{position:absolute;top:0;left:0;height:22px;width:22px;border:2px solid #ccc;background-color:#fff;border-radius:50%}.hc-radio-container .hc-radio-overlay:after{top:5px;left:5px;width:8px;height:8px;border-radius:50%;background:#fff;content:'';position:absolute;display:none}.hc-radio-container .hc-radio-content{padding-top:3px}.hc-radio-container.disabled{cursor:not-allowed;color:#ccc}.hc-radio-container.disabled:hover input~.hc-radio-overlay{border-color:#ccc}.hc-radio-container.disabled input:checked~.hc-radio-overlay{background-color:#e0e0e0;border-color:#ccc}.hc-radio-container.disabled .hc-radio-overlay{background-color:#e0e0e0}.hc-radio-container.disabled .hc-radio-overlay:after{background:#e0e0e0}"],
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush
            },] },
];
RadioButtonComponent.ctorParameters = function () { return [
    { type: RadioGroupDirective, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"] },] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], },
]; };
RadioButtonComponent.propDecorators = {
    "id": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] },],
    "name": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] },],
    "change": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"] },],
    "value": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] },],
    "_getHostId": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"], args: ['attr.id',] },],
    "required": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] },],
    "disabled": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] },],
    "checked": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] },],
};
var RadioButtonModule = /** @class */ (function () {
    function RadioButtonModule() {
    }
    return RadioButtonModule;
}());
RadioButtonModule.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"], args: [{
                imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"]],
                exports: [RadioButtonComponent, RadioGroupDirective],
                declarations: [RadioButtonComponent, RadioGroupDirective],
                providers: []
            },] },
];
var SelectComponent = /** @class */ (function () {
    function SelectComponent() {
        this._disabled = false;
        this._required = false;
        this._value = '';
        this._hostClass = true;
        this.onChange = function () { };
        this.onTouched = function () { };
    }
    Object.defineProperty(SelectComponent.prototype, "disabled", {
        get: function () {
            return this._disabled;
        },
        set: function (isDisabled) {
            this._disabled = parseBooleanAttribute(isDisabled);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SelectComponent.prototype, "required", {
        get: function () {
            return this._required;
        },
        set: function (isRequired) {
            this._required = parseBooleanAttribute(isRequired);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SelectComponent.prototype, "value", {
        get: function () {
            return this._value;
        },
        set: function (val) {
            if (val !== this._value) {
                this._value = val;
                this.onChange(val);
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SelectComponent.prototype, "_disabledClass", {
        get: function () {
            return this.disabled;
        },
        enumerable: true,
        configurable: true
    });
    SelectComponent.prototype.registerOnChange = function (fn) {
        this.onChange = fn;
    };
    SelectComponent.prototype.registerOnTouched = function (fn) {
        this.onTouched = fn;
    };
    SelectComponent.prototype.writeValue = function (value) {
        this._value = value;
    };
    SelectComponent.prototype.setDisabledState = function (isDisabled) {
        this.disabled = isDisabled;
    };
    return SelectComponent;
}());
SelectComponent.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"], args: [{
                selector: 'hc-select',
                template: "<div class=\"hc-select-container\">\n    <span class=\"hc-select-chevron\"></span>\n    <select class=\"hc-select-input\"\n            [disabled]=\"disabled\"\n            (change)=\"value = $event.target.value\"\n            [value]=\"value\"\n            [required]=\"required\">\n        <option *ngIf=\"placeholder\" value=\"\" selected disabled hidden>{{placeholder}}</option>\n        <ng-content select=\"option\"></ng-content>\n    </select>\n</div>\n",
                styles: [".hc-select{display:inline-block;width:100%}.hc-select.ng-invalid .hc-select-input{border:2px solid #f13c45}.hc-select-container{position:relative}.hc-select-chevron{position:absolute;top:0;right:0;height:35px;width:35px;line-height:35px;text-align:center;pointer-events:none}.hc-select-chevron:after{content:'\\f078';font-family:FontAwesome;color:#00aeff;pointer-events:none;-webkit-box-sizing:border-box;box-sizing:border-box}.hc-select-input{font:inherit;color:#333;background-color:#fff;font-size:1rem;padding-left:7px;padding-right:50px;border:1.5px solid #ccc;border-radius:0;height:35px;width:100%;-webkit-appearance:none;-moz-appearance:none;cursor:pointer}.hc-select-input::-ms-expand{display:none}.hc-select-input[disabled]{cursor:not-allowed;border:1.5px solid #e0e0e0;background-color:#f0f3f6;color:#adadad}.hc-select-disabled .hc-select-chevron{color:#99dfff}"],
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
                providers: [
                    {
                        provide: _angular_forms__WEBPACK_IMPORTED_MODULE_9__["NG_VALUE_ACCESSOR"],
                        useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["forwardRef"])(function () { return SelectComponent; }),
                        multi: true
                    }
                ]
            },] },
];
SelectComponent.propDecorators = {
    "placeholder": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] },],
    "disabled": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] },],
    "required": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] },],
    "value": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] },],
    "_hostClass": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"], args: ['class.hc-select',] },],
    "_disabledClass": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"], args: ['class.hc-select-disabled',] },],
};
var SelectModule = /** @class */ (function () {
    function SelectModule() {
    }
    return SelectModule;
}());
SelectModule.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"], args: [{
                imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"]],
                exports: [SelectComponent],
                declarations: [SelectComponent]
            },] },
];
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
function getSortDuplicateSortableIdError(id) {
    return Error("Cannot have two HcSortables with the same id (" + id + ").");
}
function getSortHeaderNotContainedWithinSortError() {
    return Error("HcSortHeader must be placed within a parent element with the HcSort directive.");
}
function getSortHeaderMissingIdError() {
    return Error("HcSortHeader must be provided with a unique id.");
}
function getSortInvalidDirectionError(direction) {
    return Error(direction + " is not a valid sort direction ('asc' or 'desc').");
}
var HcSort = /** @class */ (function () {
    function HcSort() {
        var _this = this;
        this.sortables = new Map();
        this._stateChanges = new rxjs__WEBPACK_IMPORTED_MODULE_5__["Subject"]();
        this.start = 'asc';
        this._direction = '';
        this._disabled = false;
        this.sortChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this._isInitialized = false;
        this._pendingSubscribers = [];
        this.initialized = new rxjs__WEBPACK_IMPORTED_MODULE_5__["Observable"](function (subscriber) {
            if (_this._isInitialized) {
                _this._notifySubscriber(subscriber);
            }
            else {
                ((_this._pendingSubscribers)).push(subscriber);
            }
        });
    }
    Object.defineProperty(HcSort.prototype, "direction", {
        get: function () {
            return this._direction;
        },
        set: function (direction) {
            if (Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["isDevMode"])() && direction && direction !== 'asc' && direction !== 'desc') {
                throw getSortInvalidDirectionError(direction);
            }
            this._direction = direction;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(HcSort.prototype, "disableClear", {
        get: function () {
            return this._disableClear;
        },
        set: function (v) {
            this._disableClear = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_10__["coerceBooleanProperty"])(v);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(HcSort.prototype, "disabled", {
        get: function () {
            return this._disabled;
        },
        set: function (value) {
            this._disabled = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_10__["coerceBooleanProperty"])(value);
        },
        enumerable: true,
        configurable: true
    });
    HcSort.prototype._markInitialized = function () {
        if (this._isInitialized) {
            throw Error('This directive has already been marked as initialized and ' + 'should not be called twice.');
        }
        this._isInitialized = true;
        ((this._pendingSubscribers)).forEach(this._notifySubscriber);
        this._pendingSubscribers = null;
    };
    HcSort.prototype._notifySubscriber = function (subscriber) {
        subscriber.next();
        subscriber.complete();
    };
    HcSort.prototype.register = function (sortable) {
        if (!sortable.id) {
            throw getSortHeaderMissingIdError();
        }
        if (this.sortables.has(sortable.id)) {
            throw getSortDuplicateSortableIdError(sortable.id);
        }
        this.sortables.set(sortable.id, sortable);
    };
    HcSort.prototype.deregister = function (sortable) {
        this.sortables.delete(sortable.id);
    };
    HcSort.prototype.sort = function (sortable) {
        if (this.active !== sortable.id) {
            this.active = sortable.id;
            this.direction = sortable.start ? sortable.start : this.start;
        }
        else {
            this.direction = this.getNextSortDirection(sortable);
        }
        this.sortChange.emit({ active: this.active, direction: this.direction });
    };
    HcSort.prototype.getNextSortDirection = function (sortable) {
        if (!sortable) {
            return '';
        }
        var disableClear = sortable.disableClear != null ? sortable.disableClear : this.disableClear;
        var sortDirectionCycle = getSortDirectionCycle(sortable.start || this.start, disableClear);
        var nextDirectionIndex = sortDirectionCycle.indexOf(this.direction) + 1;
        if (nextDirectionIndex >= sortDirectionCycle.length) {
            nextDirectionIndex = 0;
        }
        return sortDirectionCycle[nextDirectionIndex];
    };
    HcSort.prototype.ngOnInit = function () {
        this._markInitialized();
    };
    HcSort.prototype.ngOnChanges = function () {
        this._stateChanges.next();
    };
    HcSort.prototype.ngOnDestroy = function () {
        this._stateChanges.complete();
    };
    return HcSort;
}());
HcSort.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"], args: [{
                selector: '[hcSort]',
                exportAs: 'hcSort'
            },] },
];
HcSort.propDecorators = {
    "active": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['hcSortActive',] },],
    "start": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['hcSortStart',] },],
    "direction": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['hcSortDirection',] },],
    "disableClear": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['hcSortDisableClear',] },],
    "disabled": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['hcSortDisabled',] },],
    "sortChange": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"], args: ['hcSortChange',] },],
};
function getSortDirectionCycle(start, disableClear) {
    var sortOrder = ['asc', 'desc'];
    if (start === 'desc') {
        sortOrder.reverse();
    }
    if (!disableClear) {
        sortOrder.push('');
    }
    return sortOrder;
}
var animationDurationEnter = '225ms';
var animationCurveStandard = 'cubic-bezier(0.4,0.0,0.2,1)';
var SORT_ANIMATION_TRANSITION = animationDurationEnter + ' ' + animationCurveStandard;
var hcSortAnimations = {
    indicator: Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["trigger"])('indicator', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["state"])('active-asc, asc', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({ transform: 'translateY(0px)' })),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["state"])('active-desc, desc', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({ transform: 'translateY(10px)' })),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])('active-asc <=> active-desc', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])(SORT_ANIMATION_TRANSITION))
    ]),
    leftPointer: Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["trigger"])('leftPointer', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["state"])('active-asc, asc', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({ transform: 'rotate(-45deg)' })),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["state"])('active-desc, desc', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({ transform: 'rotate(45deg)' })),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])('active-asc <=> active-desc', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])(SORT_ANIMATION_TRANSITION))
    ]),
    rightPointer: Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["trigger"])('rightPointer', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["state"])('active-asc, asc', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({ transform: 'rotate(45deg)' })),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["state"])('active-desc, desc', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({ transform: 'rotate(-45deg)' })),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])('active-asc <=> active-desc', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])(SORT_ANIMATION_TRANSITION))
    ]),
    arrowOpacity: Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["trigger"])('arrowOpacity', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["state"])('desc-to-active, asc-to-active, active', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({ opacity: 1 })),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["state"])('desc-to-hint, asc-to-hint, hint', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({ opacity: 0.54 })),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["state"])('hint-to-desc, active-to-desc, desc, hint-to-asc, active-to-asc, asc, void', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({ opacity: 0 })),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])('* => asc, * => desc, * => active, * => hint, * => void', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])('0ms')),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])('* <=> *', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])(SORT_ANIMATION_TRANSITION))
    ]),
    arrowPosition: Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["trigger"])('arrowPosition', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])('* => desc-to-hint, * => desc-to-active', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])(SORT_ANIMATION_TRANSITION, Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["keyframes"])([Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({ transform: 'translateY(-25%)' }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({ transform: 'translateY(0)' })]))),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])('* => hint-to-desc, * => active-to-desc', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])(SORT_ANIMATION_TRANSITION, Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["keyframes"])([Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({ transform: 'translateY(0)' }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({ transform: 'translateY(25%)' })]))),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])('* => asc-to-hint, * => asc-to-active', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])(SORT_ANIMATION_TRANSITION, Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["keyframes"])([Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({ transform: 'translateY(25%)' }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({ transform: 'translateY(0)' })]))),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])('* => hint-to-asc, * => active-to-asc', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])(SORT_ANIMATION_TRANSITION, Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["keyframes"])([Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({ transform: 'translateY(0)' }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({ transform: 'translateY(-25%)' })]))),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["state"])('desc-to-hint, asc-to-hint, hint, desc-to-active, asc-to-active, active', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({ transform: 'translateY(0)' })),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["state"])('hint-to-desc, active-to-desc, desc', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({ transform: 'translateY(-25%)' })),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["state"])('hint-to-asc, active-to-asc, asc', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({ transform: 'translateY(25%)' }))
    ]),
    allowChildren: Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["trigger"])('allowChildren', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])('* <=> *', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["query"])('@*', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animateChild"])(), { optional: true })])])
};
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
var HcSortHeaderIntl = /** @class */ (function () {
    function HcSortHeaderIntl() {
        this.changes = new rxjs__WEBPACK_IMPORTED_MODULE_5__["Subject"]();
        this.sortButtonLabel = function (id) {
            return "Change sorting for " + id;
        };
    }
    return HcSortHeaderIntl;
}());
HcSortHeaderIntl.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"], args: [{ providedIn: 'root' },] },
];
HcSortHeaderIntl.ngInjectableDef = Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["defineInjectable"])({ factory: function HcSortHeaderIntl_Factory() { return new HcSortHeaderIntl(); }, token: HcSortHeaderIntl, providedIn: "root" });
function HC_SORT_HEADER_INTL_PROVIDER_FACTORY(parentIntl) {
    return parentIntl || new HcSortHeaderIntl();
}
var HC_SORT_HEADER_INTL_PROVIDER = {
    provide: HcSortHeaderIntl,
    deps: [[new _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"](), new _angular_core__WEBPACK_IMPORTED_MODULE_1__["SkipSelf"](), HcSortHeaderIntl]],
    useFactory: HC_SORT_HEADER_INTL_PROVIDER_FACTORY
};
var HcSortHeader = /** @class */ (function () {
    function HcSortHeader(_intl, changeDetectorRef, _sort, _cdkColumnDef) {
        var _this = this;
        this._intl = _intl;
        this._sort = _sort;
        this._cdkColumnDef = _cdkColumnDef;
        this._showIndicatorHint = false;
        this._arrowDirection = '';
        this._disableViewStateAnimation = false;
        this.arrowPosition = 'after';
        this._disabled = false;
        if (!_sort) {
            throw getSortHeaderNotContainedWithinSortError();
        }
        this._rerenderSubscription = Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["merge"])(_sort.sortChange, _sort._stateChanges, _intl.changes).subscribe(function () {
            if (_this._isSorted()) {
                _this._updateArrowDirection();
            }
            if (!_this._isSorted() && _this._viewState && _this._viewState.toState === 'active') {
                _this._disableViewStateAnimation = false;
                _this._setAnimationTransitionState({ fromState: 'active', toState: _this._arrowDirection });
            }
            changeDetectorRef.markForCheck();
        });
    }
    Object.defineProperty(HcSortHeader.prototype, "disableClear", {
        get: function () {
            return this._disableClear;
        },
        set: function (v) {
            this._disableClear = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_10__["coerceBooleanProperty"])(v);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(HcSortHeader.prototype, "disabled", {
        get: function () {
            return this._disabled;
        },
        set: function (value) {
            this._disabled = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_10__["coerceBooleanProperty"])(value);
        },
        enumerable: true,
        configurable: true
    });
    HcSortHeader.prototype.ngOnInit = function () {
        if (!this.id && this._cdkColumnDef) {
            this.id = this._cdkColumnDef.name;
        }
        this._updateArrowDirection();
        this._setAnimationTransitionState({ toState: this._isSorted() ? 'active' : this._arrowDirection });
        this._sort.register(this);
    };
    HcSortHeader.prototype.ngOnDestroy = function () {
        this._sort.deregister(this);
        this._rerenderSubscription.unsubscribe();
    };
    HcSortHeader.prototype._setIndicatorHintVisible = function (visible) {
        if (this._isDisabled() && visible) {
            return;
        }
        this._showIndicatorHint = visible;
        if (!this._isSorted()) {
            this._updateArrowDirection();
            if (this._showIndicatorHint) {
                this._setAnimationTransitionState({ fromState: this._arrowDirection, toState: 'hint' });
            }
            else {
                this._setAnimationTransitionState({ fromState: 'hint', toState: this._arrowDirection });
            }
        }
    };
    HcSortHeader.prototype._setAnimationTransitionState = function (viewState) {
        this._viewState = viewState;
        if (this._disableViewStateAnimation) {
            this._viewState = { toState: viewState.toState };
        }
    };
    HcSortHeader.prototype._handleClick = function () {
        if (this._isDisabled()) {
            return;
        }
        this._sort.sort(this);
        if (this._viewState.toState === 'hint' || this._viewState.toState === 'active') {
            this._disableViewStateAnimation = true;
        }
        var viewState = this._isSorted()
            ? { fromState: this._arrowDirection, toState: 'active' }
            : { fromState: 'active', toState: this._arrowDirection };
        this._setAnimationTransitionState(viewState);
        this._showIndicatorHint = false;
    };
    HcSortHeader.prototype._isSorted = function () {
        return this._sort.active === this.id && (this._sort.direction === 'asc' || this._sort.direction === 'desc');
    };
    HcSortHeader.prototype._getArrowDirectionState = function () {
        return "" + (this._isSorted() ? 'active-' : '') + this._arrowDirection;
    };
    HcSortHeader.prototype._getArrowViewState = function () {
        var fromState = this._viewState.fromState;
        return (fromState ? fromState + "-to-" : '') + this._viewState.toState;
    };
    HcSortHeader.prototype._updateArrowDirection = function () {
        this._arrowDirection = this._isSorted() ? this._sort.direction : this.start || this._sort.start;
    };
    HcSortHeader.prototype._isDisabled = function () {
        return this._sort.disabled || this.disabled;
    };
    HcSortHeader.prototype._getAriaSortAttribute = function () {
        if (!this._isSorted()) {
            return null;
        }
        return this._sort.direction === 'asc' ? 'ascending' : 'descending';
    };
    return HcSortHeader;
}());
HcSortHeader.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"], args: [{
                selector: '[hc-sort-header]',
                exportAs: 'hcSortHeader',
                template: "<div class=\"hc-sort-header-container\"\n     [class.hc-sort-header-sorted]=\"_isSorted()\"\n     [class.hc-sort-header-position-before]=\"arrowPosition === 'before'\">\n  <button class=\"hc-sort-header-button\" type=\"button\"\n          [attr.disabled]=\"_isDisabled() || null\"\n          [attr.aria-label]=\"_intl.sortButtonLabel(id)\"\n          (focus)=\"_setIndicatorHintVisible(true)\"\n          (blur)=\"_setIndicatorHintVisible(false)\">\n    <ng-content></ng-content>\n  </button>\n  <!-- Disable animations while a current animation is running -->\n  <div class=\"hc-sort-header-arrow\"\n       [@arrowOpacity]=\"_getArrowViewState()\"\n       [@arrowPosition]=\"_getArrowViewState()\"\n       [@allowChildren]=\"_getArrowDirectionState()\"\n       (@arrowPosition.start)=\"_disableViewStateAnimation = true\"\n       (@arrowPosition.done)=\"_disableViewStateAnimation = false\">\n    <div class=\"hc-sort-header-stem\"></div>\n    <div class=\"hc-sort-header-indicator\" [@indicator]=\"_getArrowDirectionState()\">\n      <div class=\"hc-sort-header-pointer-left\" [@leftPointer]=\"_getArrowDirectionState()\"></div>\n      <div class=\"hc-sort-header-pointer-right\" [@rightPointer]=\"_getArrowDirectionState()\"></div>\n      <div class=\"hc-sort-header-pointer-middle\"></div>\n    </div>\n  </div>\n</div>\n",
                styles: [".hc-sort-header-container{display:-webkit-box;display:-ms-flexbox;display:flex;cursor:pointer;-webkit-box-align:center;-ms-flex-align:center;align-items:center}.hc-sort-header-disabled .hc-sort-header-container{cursor:default}.hc-sort-header-position-before{-webkit-box-orient:horizontal;-webkit-box-direction:reverse;-ms-flex-direction:row-reverse;flex-direction:row-reverse}.hc-sort-header-button{border:none;background:0 0;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;padding:0;cursor:inherit;outline:0;font:inherit;color:currentColor}.hc-sort-header-arrow{height:12px;width:12px;min-width:12px;position:relative;display:-webkit-box;display:-ms-flexbox;display:flex;opacity:0}.hc-sort-header-arrow,[dir=rtl] .hc-sort-header-position-before .hc-sort-header-arrow{margin:0 0 0 6px}.hc-sort-header-position-before .hc-sort-header-arrow,[dir=rtl] .hc-sort-header-arrow{margin:0 6px 0 0}.hc-sort-header-stem{background:currentColor;height:10px;width:2px;margin:auto;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center}@media screen and (-ms-high-contrast:active){.hc-sort-header-stem{width:0;border-left:2px solid}}.hc-sort-header-indicator{width:100%;height:2px;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;position:absolute;top:0;left:0}.hc-sort-header-pointer-middle{margin:auto;height:2px;width:2px;background:currentColor;-webkit-transform:rotate(45deg);transform:rotate(45deg)}@media screen and (-ms-high-contrast:active){.hc-sort-header-pointer-middle{width:0;height:0;border-top:2px solid;border-left:2px solid}}.hc-sort-header-pointer-left,.hc-sort-header-pointer-right{background:currentColor;width:6px;height:2px;position:absolute;top:0}@media screen and (-ms-high-contrast:active){.hc-sort-header-pointer-left,.hc-sort-header-pointer-right{width:0;height:0;border-left:6px solid;border-top:2px solid}}.hc-sort-header-pointer-left{-webkit-transform-origin:right;transform-origin:right;left:0}.hc-sort-header-pointer-right{-webkit-transform-origin:left;transform-origin:left;right:0}"],
                host: {
                    '(click)': '_handleClick()',
                    '(mouseenter)': '_setIndicatorHintVisible(true)',
                    '(longpress)': '_setIndicatorHintVisible(true)',
                    '(mouseleave)': '_setIndicatorHintVisible(false)',
                    '[attr.aria-sort]': '_getAriaSortAttribute()',
                    '[class.hc-sort-header-disabled]': '_isDisabled()'
                },
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
                animations: [
                    hcSortAnimations.indicator,
                    hcSortAnimations.leftPointer,
                    hcSortAnimations.rightPointer,
                    hcSortAnimations.arrowOpacity,
                    hcSortAnimations.arrowPosition,
                    hcSortAnimations.allowChildren
                ]
            },] },
];
HcSortHeader.ctorParameters = function () { return [
    { type: HcSortHeaderIntl, },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], },
    { type: HcSort, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"] },] },
    { type: _angular_cdk_table__WEBPACK_IMPORTED_MODULE_11__["CdkColumnDef"], decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"] },] },
]; };
HcSortHeader.propDecorators = {
    "id": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['hc-sort-header',] },],
    "arrowPosition": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] },],
    "start": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] },],
    "disableClear": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] },],
    "disabled": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] },],
};
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
var SortModule = /** @class */ (function () {
    function SortModule() {
    }
    return SortModule;
}());
SortModule.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"], args: [{
                imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"]],
                exports: [HcSort, HcSortHeader],
                declarations: [HcSort, HcSortHeader],
                providers: [HC_SORT_HEADER_INTL_PROVIDER]
            },] },
];
var SubnavComponent = /** @class */ (function () {
    function SubnavComponent() {
        this._hostClass = true;
        this.fixedTop = false;
    }
    return SubnavComponent;
}());
SubnavComponent.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"], args: [{
                selector: 'hc-subnav',
                template: "<ng-content></ng-content>"
            },] },
];
SubnavComponent.ctorParameters = function () { return []; };
SubnavComponent.propDecorators = {
    "_hostClass": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"], args: ['class.subnav',] },],
    "fixedTop": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"], args: ['class.fixed-top',] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] },],
};
var SubnavRightDirective = /** @class */ (function () {
    function SubnavRightDirective() {
        this._hostClass = true;
    }
    return SubnavRightDirective;
}());
SubnavRightDirective.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"], args: [{
                selector: '[hcSubnavRight]'
            },] },
];
SubnavRightDirective.propDecorators = {
    "_hostClass": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"], args: ['class.subnav-right',] },],
};
var SubnavModule = /** @class */ (function () {
    function SubnavModule() {
    }
    return SubnavModule;
}());
SubnavModule.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"], args: [{
                imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"]],
                exports: [SubnavComponent, SubnavRightDirective],
                declarations: [SubnavComponent, SubnavRightDirective]
            },] },
];
var HcTable = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(HcTable, _super);
    function HcTable(_differs, _changeDetectorRef, _elementRef, role, _dir) {
        var _this = _super.call(this, _differs, _changeDetectorRef, _elementRef, role, _dir) || this;
        _this._differs = _differs;
        _this._changeDetectorRef = _changeDetectorRef;
        _this._elementRef = _elementRef;
        _this._dir = _dir;
        _this.stickyCssClass = 'hc-table-sticky';
        return _this;
    }
    return HcTable;
}(_angular_cdk_table__WEBPACK_IMPORTED_MODULE_11__["CdkTable"]));
HcTable.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"], args: [{
                selector: 'hc-table, table[hc-table]',
                exportAs: 'matTable',
                template: _angular_cdk_table__WEBPACK_IMPORTED_MODULE_11__["CDK_TABLE_TEMPLATE"],
                styles: ["hc-table{display:block}"],
                host: {
                    class: 'hc-table'
                },
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush
            },] },
];
HcTable.ctorParameters = function () { return [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"], },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], },
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Attribute"], args: ['role',] },] },
    { type: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_12__["Directionality"], decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"] },] },
]; };
var HcCellDef = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(HcCellDef, _super);
    function HcCellDef() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return HcCellDef;
}(_angular_cdk_table__WEBPACK_IMPORTED_MODULE_11__["CdkCellDef"]));
HcCellDef.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"], args: [{
                selector: '[hcCellDef]',
                providers: [{ provide: _angular_cdk_table__WEBPACK_IMPORTED_MODULE_11__["CdkCellDef"], useExisting: HcCellDef }]
            },] },
];
var HcHeaderCellDef = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(HcHeaderCellDef, _super);
    function HcHeaderCellDef() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return HcHeaderCellDef;
}(_angular_cdk_table__WEBPACK_IMPORTED_MODULE_11__["CdkHeaderCellDef"]));
HcHeaderCellDef.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"], args: [{
                selector: '[hcHeaderCellDef]',
                providers: [{ provide: _angular_cdk_table__WEBPACK_IMPORTED_MODULE_11__["CdkHeaderCellDef"], useExisting: HcHeaderCellDef }]
            },] },
];
var HcFooterCellDef = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(HcFooterCellDef, _super);
    function HcFooterCellDef() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return HcFooterCellDef;
}(_angular_cdk_table__WEBPACK_IMPORTED_MODULE_11__["CdkFooterCellDef"]));
HcFooterCellDef.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"], args: [{
                selector: '[hcFooterCellDef]',
                providers: [{ provide: _angular_cdk_table__WEBPACK_IMPORTED_MODULE_11__["CdkFooterCellDef"], useExisting: HcFooterCellDef }]
            },] },
];
var HcColumnDef = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(HcColumnDef, _super);
    function HcColumnDef() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return HcColumnDef;
}(_angular_cdk_table__WEBPACK_IMPORTED_MODULE_11__["CdkColumnDef"]));
HcColumnDef.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"], args: [{
                selector: '[hcColumnDef]',
                providers: [{ provide: _angular_cdk_table__WEBPACK_IMPORTED_MODULE_11__["CdkColumnDef"], useExisting: HcColumnDef }]
            },] },
];
HcColumnDef.propDecorators = {
    "name": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['hcColumnDef',] },],
    "sticky": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] },],
    "stickyEnd": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] },],
};
var HcHeaderCell = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(HcHeaderCell, _super);
    function HcHeaderCell(columnDef, elementRef) {
        var _this = _super.call(this, columnDef, elementRef) || this;
        elementRef.nativeElement.classList.add("hc-column-" + columnDef.cssClassFriendlyName);
        return _this;
    }
    return HcHeaderCell;
}(_angular_cdk_table__WEBPACK_IMPORTED_MODULE_11__["CdkHeaderCell"]));
HcHeaderCell.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"], args: [{
                selector: 'hc-header-cell, th[hc-header-cell]',
                host: {
                    class: 'hc-header-cell',
                    role: 'columnheader'
                }
            },] },
];
HcHeaderCell.ctorParameters = function () { return [
    { type: _angular_cdk_table__WEBPACK_IMPORTED_MODULE_11__["CdkColumnDef"], },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], },
]; };
var HcFooterCell = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(HcFooterCell, _super);
    function HcFooterCell(columnDef, elementRef) {
        var _this = _super.call(this, columnDef, elementRef) || this;
        elementRef.nativeElement.classList.add("hc-column-" + columnDef.cssClassFriendlyName);
        return _this;
    }
    return HcFooterCell;
}(_angular_cdk_table__WEBPACK_IMPORTED_MODULE_11__["CdkFooterCell"]));
HcFooterCell.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"], args: [{
                selector: 'hc-footer-cell, td[hc-footer-cell]',
                host: {
                    class: 'hc-footer-cell',
                    role: 'gridcell'
                }
            },] },
];
HcFooterCell.ctorParameters = function () { return [
    { type: _angular_cdk_table__WEBPACK_IMPORTED_MODULE_11__["CdkColumnDef"], },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], },
]; };
var HcCell = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(HcCell, _super);
    function HcCell(columnDef, elementRef) {
        var _this = _super.call(this, columnDef, elementRef) || this;
        elementRef.nativeElement.classList.add("hc-column-" + columnDef.cssClassFriendlyName);
        return _this;
    }
    return HcCell;
}(_angular_cdk_table__WEBPACK_IMPORTED_MODULE_11__["CdkCell"]));
HcCell.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"], args: [{
                selector: 'hc-cell, td[hc-cell]',
                host: {
                    class: 'hc-cell',
                    role: 'gridcell'
                }
            },] },
];
HcCell.ctorParameters = function () { return [
    { type: _angular_cdk_table__WEBPACK_IMPORTED_MODULE_11__["CdkColumnDef"], },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], },
]; };
var HcHeaderRowDef = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(HcHeaderRowDef, _super);
    function HcHeaderRowDef() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return HcHeaderRowDef;
}(_angular_cdk_table__WEBPACK_IMPORTED_MODULE_11__["CdkHeaderRowDef"]));
HcHeaderRowDef.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"], args: [{
                selector: '[hcHeaderRowDef]',
                providers: [{ provide: _angular_cdk_table__WEBPACK_IMPORTED_MODULE_11__["CdkHeaderRowDef"], useExisting: HcHeaderRowDef }],
                inputs: ['columns: hcHeaderRowDef', 'sticky: hcHeaderRowDefSticky']
            },] },
];
var HcFooterRowDef = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(HcFooterRowDef, _super);
    function HcFooterRowDef() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return HcFooterRowDef;
}(_angular_cdk_table__WEBPACK_IMPORTED_MODULE_11__["CdkFooterRowDef"]));
HcFooterRowDef.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"], args: [{
                selector: '[hcFooterRowDef]',
                providers: [{ provide: _angular_cdk_table__WEBPACK_IMPORTED_MODULE_11__["CdkFooterRowDef"], useExisting: HcFooterRowDef }],
                inputs: ['columns: hcFooterRowDef', 'sticky: hcFooterRowDefSticky']
            },] },
];
var HcRowDef = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(HcRowDef, _super);
    function HcRowDef() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return HcRowDef;
}(_angular_cdk_table__WEBPACK_IMPORTED_MODULE_11__["CdkRowDef"]));
HcRowDef.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"], args: [{
                selector: '[hcRowDef]',
                providers: [{ provide: _angular_cdk_table__WEBPACK_IMPORTED_MODULE_11__["CdkRowDef"], useExisting: HcRowDef }],
                inputs: ['columns: hcRowDefColumns', 'when: hcRowDefWhen']
            },] },
];
var HcHeaderRow = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(HcHeaderRow, _super);
    function HcHeaderRow() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return HcHeaderRow;
}(_angular_cdk_table__WEBPACK_IMPORTED_MODULE_11__["CdkHeaderRow"]));
HcHeaderRow.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"], args: [{
                selector: 'hc-header-row, tr[hc-header-row]',
                template: _angular_cdk_table__WEBPACK_IMPORTED_MODULE_11__["CDK_ROW_TEMPLATE"],
                host: {
                    class: 'hc-header-row',
                    role: 'row'
                },
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
                exportAs: 'hcHeaderRow',
                providers: [{ provide: _angular_cdk_table__WEBPACK_IMPORTED_MODULE_11__["CdkHeaderRow"], useExisting: HcHeaderRow }]
            },] },
];
var HcFooterRow = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(HcFooterRow, _super);
    function HcFooterRow() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return HcFooterRow;
}(_angular_cdk_table__WEBPACK_IMPORTED_MODULE_11__["CdkFooterRow"]));
HcFooterRow.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"], args: [{
                selector: 'hc-footer-row, tr[hc-footer-row]',
                template: _angular_cdk_table__WEBPACK_IMPORTED_MODULE_11__["CDK_ROW_TEMPLATE"],
                host: {
                    class: 'hc-footer-row',
                    role: 'row'
                },
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
                exportAs: 'hcFooterRow',
                providers: [{ provide: _angular_cdk_table__WEBPACK_IMPORTED_MODULE_11__["CdkFooterRow"], useExisting: HcFooterRow }]
            },] },
];
var HcRow = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(HcRow, _super);
    function HcRow() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return HcRow;
}(_angular_cdk_table__WEBPACK_IMPORTED_MODULE_11__["CdkRow"]));
HcRow.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"], args: [{
                selector: 'hc-row, tr[hc-row]',
                template: _angular_cdk_table__WEBPACK_IMPORTED_MODULE_11__["CDK_ROW_TEMPLATE"],
                host: {
                    class: 'hc-row',
                    role: 'row'
                },
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
                exportAs: 'hcRow',
                providers: [{ provide: _angular_cdk_table__WEBPACK_IMPORTED_MODULE_11__["CdkRow"], useExisting: HcRow }]
            },] },
];
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
var EXPORTED_DECLARATIONS = [
    HcTable,
    HcHeaderCellDef,
    HcHeaderRowDef,
    HcColumnDef,
    HcCellDef,
    HcRowDef,
    HcFooterCellDef,
    HcFooterRowDef,
    HcHeaderCell,
    HcCell,
    HcFooterCell,
    HcHeaderRow,
    HcRow,
    HcFooterRow
];
var TableModule = /** @class */ (function () {
    function TableModule() {
    }
    return TableModule;
}());
TableModule.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"], args: [{
                imports: [_angular_cdk_table__WEBPACK_IMPORTED_MODULE_11__["CdkTableModule"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"]],
                exports: EXPORTED_DECLARATIONS,
                declarations: EXPORTED_DECLARATIONS
            },] },
];
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
var MAX_SAFE_INTEGER = 9007199254740991;
var HcTableDataSource = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(HcTableDataSource, _super);
    function HcTableDataSource(initialData) {
        if (initialData === void 0) { initialData = []; }
        var _this = _super.call(this) || this;
        _this._renderData = new rxjs__WEBPACK_IMPORTED_MODULE_5__["BehaviorSubject"]([]);
        _this._filter = new rxjs__WEBPACK_IMPORTED_MODULE_5__["BehaviorSubject"]('');
        _this._renderChangesSubscription = rxjs__WEBPACK_IMPORTED_MODULE_5__["Subscription"].EMPTY;
        _this.sortingDataAccessor = function (data, sortHeaderId) {
            var value = data[sortHeaderId];
            if (Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_10__["_isNumberValue"])(value)) {
                var numberValue = Number(value);
                return numberValue < MAX_SAFE_INTEGER ? numberValue : value;
            }
            return value;
        };
        _this.sortData = function (data, sort) {
            var active = sort.active;
            var direction = sort.direction;
            if (!active || direction === '') {
                return data;
            }
            return data.sort(function (a, b) {
                var valueA = _this.sortingDataAccessor(a, active);
                var valueB = _this.sortingDataAccessor(b, active);
                var comparatorResult = 0;
                if (valueA != null && valueB != null) {
                    if (valueA > valueB) {
                        comparatorResult = 1;
                    }
                    else if (valueA < valueB) {
                        comparatorResult = -1;
                    }
                }
                else if (valueA != null) {
                    comparatorResult = 1;
                }
                else if (valueB != null) {
                    comparatorResult = -1;
                }
                return comparatorResult * (direction === 'asc' ? 1 : -1);
            });
        };
        _this.filterPredicate = function (data, filter$$1) {
            var accumulator = function (currentTerm, key) { return currentTerm + data[key]; };
            var dataStr = Object.keys(data)
                .reduce(accumulator, '')
                .toLowerCase();
            var transformedFilter = filter$$1.trim().toLowerCase();
            return dataStr.indexOf(transformedFilter) !== -1;
        };
        _this._data = new rxjs__WEBPACK_IMPORTED_MODULE_5__["BehaviorSubject"](initialData);
        _this._updateChangeSubscription();
        return _this;
    }
    Object.defineProperty(HcTableDataSource.prototype, "data", {
        get: function () {
            return this._data.value;
        },
        set: function (data) {
            this._data.next(data);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(HcTableDataSource.prototype, "filter", {
        get: function () {
            return this._filter.value;
        },
        set: function (filter$$1) {
            this._filter.next(filter$$1);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(HcTableDataSource.prototype, "sort", {
        get: function () {
            return this._sort;
        },
        set: function (sort) {
            this._sort = sort;
            this._updateChangeSubscription();
        },
        enumerable: true,
        configurable: true
    });
    HcTableDataSource.prototype._updateChangeSubscription = function () {
        var _this = this;
        var sortChange = this._sort
            ? Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["merge"])(this._sort.sortChange, this._sort.initialized)
            : Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["of"])(null);
        var dataStream = this._data;
        var filteredData = Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["combineLatest"])(dataStream, this._filter).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (_a) {
            var _b = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__read"])(_a, 1), data = _b[0];
            return _this._filterData(data);
        }));
        var orderedData = Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["combineLatest"])(filteredData, sortChange).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (_a) {
            var _b = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__read"])(_a, 1), data = _b[0];
            return _this._orderData(data);
        }));
        var paginatedData = Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["combineLatest"])(orderedData)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (_a) {
            var _b = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__read"])(_a, 1), data = _b[0];
            return data;
        }));
        this._renderChangesSubscription.unsubscribe();
        this._renderChangesSubscription = paginatedData.subscribe(function (data) { return _this._renderData.next(data); });
    };
    HcTableDataSource.prototype._filterData = function (data) {
        var _this = this;
        this.filteredData = !this.filter ? data : data.filter(function (obj) { return _this.filterPredicate(obj, _this.filter); });
        return this.filteredData;
    };
    HcTableDataSource.prototype._orderData = function (data) {
        if (!this.sort) {
            return data;
        }
        return this.sortData(data.slice(), this.sort);
    };
    HcTableDataSource.prototype.connect = function () {
        return this._renderData;
    };
    HcTableDataSource.prototype.disconnect = function () { };
    return HcTableDataSource;
}(_angular_cdk_table__WEBPACK_IMPORTED_MODULE_11__["DataSource"]));
var TabComponent = /** @class */ (function () {
    function TabComponent() {
        this.tabTitle = '';
        this._active = false;
    }
    return TabComponent;
}());
TabComponent.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"], args: [{
                template: "<div [hidden]=\"!_active\">\n             <ng-content></ng-content>\n             </div>",
                selector: "hc-tab",
                styles: []
            },] },
];
TabComponent.propDecorators = {
    "tabTitle": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] },],
    "routerLink": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] },],
};
function throwErrorForMissingRouterLink(tabsWithoutRouterLink) {
    var tabTitles = tabsWithoutRouterLink.map(function (tab) { return tab.tabTitle; });
    throw Error("Routerlink missing on " + tabTitles.join(','));
}
var TabSetComponent = /** @class */ (function () {
    function TabSetComponent(router, route) {
        this.router = router;
        this.route = route;
        this._routerEnabled = false;
        this.direction = 'vertical';
    }
    TabSetComponent.prototype.ngAfterContentInit = function () {
        var _this = this;
        this.defaultToFirstTab();
        this.checkForRouterUse();
        this._tabs.changes.subscribe(function () {
            _this.defaultToFirstTab();
            _this.checkForRouterUse();
        });
    };
    TabSetComponent.prototype._setActive = function (tab) {
        this._tabs.forEach(function (t) { return (t._active = false); });
        tab._active = true;
    };
    TabSetComponent.prototype.defaultToFirstTab = function () {
        var _this = this;
        if (!this._tabs.find(function (tab) { return tab._active; })) {
            setTimeout(function () { return _this._setActive(_this._tabs.first); });
        }
    };
    TabSetComponent.prototype.checkForRouterUse = function () {
        if (this._tabs.length === 0) {
            return;
        }
        var countUsingRouter = this._tabs.filter(function (tab) { return tab.routerLink !== undefined; }).length;
        if (countUsingRouter > 0 && countUsingRouter < this._tabs.length) {
            var tabsMissingRouterLink = this._tabs.filter(function (tab) { return tab.routerLink === undefined; });
            throwErrorForMissingRouterLink(tabsMissingRouterLink);
        }
        if (countUsingRouter === this._tabs.length) {
            this._routerEnabled = true;
            this.defaultToFirstRoute();
        }
    };
    TabSetComponent.prototype.defaultToFirstRoute = function () {
        var _this = this;
        var foundRoute = this._tabs
            .map(function (tab) { return tab.routerLink; })
            .map(function (routerLink) { return _this.mapRouterLinkToString(routerLink); })
            .find(function (routerLink) {
            var currentRoute = _this.router.url;
            return currentRoute === routerLink || currentRoute.indexOf(routerLink + "/") > -1;
        });
        if (foundRoute) {
            return;
        }
        var firstRoute = this.mapRouterLinkToString(this._tabs.first.routerLink);
        this.router.navigate([firstRoute], { relativeTo: this.route });
    };
    TabSetComponent.prototype.mapRouterLinkToString = function (routerLink) {
        if (routerLink instanceof Array) {
            routerLink = routerLink.join('/').replace('//', '/');
        }
        return routerLink;
    };
    return TabSetComponent;
}());
TabSetComponent.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"], args: [{
                selector: "hc-tab-set",
                template: "<div class=\"hc-{{direction}}-tab-container\">\n    <div class=\"hc-tab-bar-{{direction}}\">\n        <div *ngFor=\"let tab of _tabs\" class=\"hc-tab-width\">\n            <a *ngIf=\"_routerEnabled\" class=\"hc-tab-{{direction}} hc-text-ellipsis\"\n               [routerLink]=\"tab.routerLink\"\n               routerLinkActive=\"active\"\n               (click)=\"_setActive(tab)\">\n                {{tab.tabTitle}}\n            </a>\n            <a *ngIf=\"!_routerEnabled\" class=\"hc-tab-{{direction}} hc-text-ellipsis\"\n               [class.active]=\"tab._active\"\n               (click)=\"_setActive(tab)\">\n                {{tab.tabTitle}}\n            </a>\n        </div>\n    </div>\n    <div class=\"hc-tab-content-{{direction}}\">\n        <router-outlet *ngIf=\"_routerEnabled\"></router-outlet>\n        <ng-content *ngIf=\"!_routerEnabled\"></ng-content>\n    </div>\n</div>\n",
                styles: [".hc-horizontal-tab-container{height:auto;width:100%}.hc-vertical-tab-container{height:100%;width:100%;display:-webkit-box;display:-ms-flexbox;display:flex}.hc-tab-bar-vertical{padding:15px 0;background-color:#fff;width:20%}.hc-tab-vertical{background-color:#fff;color:#333;padding:20px;display:block;text-decoration:none}.hc-tab-vertical:hover{cursor:pointer}.hc-tab-vertical.active{background-color:#f0f3f6;border-left:8px solid #00aeff;color:#00aeff;font-weight:600;padding-left:12px}.hc-tab-content-vertical{background-color:#f0f3f6;width:80%}.hc-tab-bar-horizontal{background-color:inherit;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;border-bottom:1px solid #c0c5cc}.hc-tab-width{min-width:0}.hc-tab-horizontal{background-color:inherit;color:#333;font-size:14px;padding:10px 20px;text-decoration:none;display:block;min-width:100px;text-align:center}.hc-tab-horizontal:hover{cursor:pointer}.hc-tab-horizontal.active{border-bottom:4px solid #00aeff;color:#333;font-weight:700}.hc-tab-content-horizontal{background-color:inherit;width:100%;height:100%;overflow:auto}"]
            },] },
];
TabSetComponent.ctorParameters = function () { return [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"], },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_8__["ActivatedRoute"], },
]; };
TabSetComponent.propDecorators = {
    "_tabs": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ContentChildren"], args: [TabComponent,] },],
    "direction": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] },],
};
var TabsModule = /** @class */ (function () {
    function TabsModule() {
    }
    return TabsModule;
}());
TabsModule.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"], args: [{
                imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_8__["RouterModule"]],
                declarations: [TabComponent, TabSetComponent],
                exports: [TabComponent, TabSetComponent]
            },] },
];
var TileComponent = /** @class */ (function () {
    function TileComponent() {
    }
    return TileComponent;
}());
TileComponent.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"], args: [{
                selector: 'hc-tile',
                template: "<ng-content></ng-content>",
                styles: [".hc-tile{width:100%;-webkit-box-sizing:border-box;box-sizing:border-box;padding:30px 35px;background-color:#fff;border-radius:5px;display:block;-webkit-box-shadow:0 2px 5px rgba(0,0,0,.2);box-shadow:0 2px 5px rgba(0,0,0,.2);margin-bottom:30px}:host{width:100%;-webkit-box-sizing:border-box;box-sizing:border-box;padding:30px 35px;background-color:#fff;border-radius:5px;display:block;-webkit-box-shadow:0 2px 5px rgba(0,0,0,.2);box-shadow:0 2px 5px rgba(0,0,0,.2);margin-bottom:30px}"]
            },] },
];
TileComponent.ctorParameters = function () { return []; };
var TileModule = /** @class */ (function () {
    function TileModule() {
    }
    return TileModule;
}());
TileModule.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"], args: [{
                imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"]],
                exports: [TileComponent],
                declarations: [TileComponent]
            },] },
];
function throwErrorForMissingSurveyUri() {
    throw Error("SurveyUri must be specified on element hc-typeform-survey");
}
var TypeformSurveyComponent = /** @class */ (function () {
    function TypeformSurveyComponent() {
        this._id = 'typef_orm_share';
    }
    TypeformSurveyComponent.prototype.open = function () {
        if (!document.getElementById(this._id)) {
            this.getScripts();
        }
        else {
            ((window)).typeformEmbed.makePopup(this.surveyUri, {
                mode: 'drawer_right',
                autoOpen: true,
                opacity: 100,
                autoClose: 0,
                hideScrollbars: true
            });
        }
    };
    TypeformSurveyComponent.prototype.getScripts = function () {
        if (!this.surveyUri) {
            throwErrorForMissingSurveyUri();
        }
        var embedScript, firstScript;
        if (!document.getElementById(this._id)) {
            embedScript = document.createElement('script');
            embedScript.id = this._id;
            embedScript.src = "https://embed.typeform.com/embed.js";
            firstScript = document.getElementsByTagName.call(document, 'script')[0];
            if (firstScript.parentNode) {
                firstScript.parentNode.insertBefore(embedScript, firstScript);
            }
        }
    };
    return TypeformSurveyComponent;
}());
TypeformSurveyComponent.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"], args: [{
                selector: 'hc-typeform-survey',
                template: "<a class=\"typeform-share link\"\n                [href]=\"surveyUri\"\n                data-mode=\"drawer_right\"\n                data-auto-open=\"true\"\n                data-submit-close-delay=\"0\"\n                target=\"_blank\"\n                rel=\"noopener\">\n              </a>\n              ",
                styles: []
            },] },
];
TypeformSurveyComponent.propDecorators = {
    "surveyUri": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] },],
};
var TypeformSurveyModule = /** @class */ (function () {
    function TypeformSurveyModule() {
    }
    return TypeformSurveyModule;
}());
TypeformSurveyModule.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"], args: [{
                imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"]],
                exports: [TypeformSurveyComponent],
                declarations: [TypeformSurveyComponent]
            },] },
];


//# sourceMappingURL=healthcatalyst-cashmere.js.map


/***/ }),

/***/ "./node_modules/raw-loader/index.js!./guides/contribution-guide.md":
/*!****************************************************************!*\
  !*** ./node_modules/raw-loader!./guides/contribution-guide.md ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "# Guidelines for Contribution\n\n###### Last updated March 10, 2018\n\n:::\n\n##### All May Contribute\n\nWe would love for you to contribute to Cashmere and be part of the community making this project better! To get started, follow the [Getting Started guide](http://cashmere.healthcatalyst.net/guides/getting-started).\n:::\n\n:::\n\n#### Setup Environment\n\n1.  Install the latest version of `node` with at _least_ version 8.9.\n2.  Fork the `@healthcatalyst/cashmere` repo.\n3.  Run `npm install -g commitizen`, which helps you with writing angular style commit messages.\n4.  Clone your fork.\n    Recommendation: name your git remotes `upstream` for `@healthcatalyst/cashmere`\n5.  From the root of the project, run `npm install`.\n\n:::\n\n:::\n\n##### Contributing to Cashmere\n\nBefore you submit your pull request (PR), consider the following guidelines:\n\n*   Search [GitHub](https://github.com/HealthCatalyst/Fabric.Cashmere/pulls) for an open or closed PR that relates to your submission. You don't want to duplicate effort.\n*   Development happens on the `dev` branch and `master` is used to create a new release\n*   From the dev branch create a new branch. Here is a good [guide](https://gist.github.com/Chaser324/ce0505fbed06b947d962) if you're just getting started.\n*   Verify all changes look and function properly in different browsers and at different resolutions.\n*   Run the following commands:\n    *   `ng lint` should result in `All files pass linting`\n    *   `ng test` should result in `All tests passing`\n    *   `npm run build` should pass and build the library successfully\n*   New components and directives must be accompanied by:\n    *   A component demonstrating the functionality; this component should be added to the demo app's routes\n    *   Unit tests demonstrating that it functions as intended\n*   A new component should adhere to the [Health Catalyst style](http://cashmere.healthcatalyst.net).\n*   When creating a PR you must set the base branch to dev(master is for release only)\n*   \"Squash and merge\" a PR to complete it.\n\n:::\n\n:::\n\n#### Commit Message Guidelines\n\nWe have very precise rules over how our git commit messages can be formatted. This leads to **more\nreadable messages** that are easy to follow when looking through the **project history**. But also,\nwe use the git commit messages to **generate the Angular Material change log**.\n\n(To help with creating commit messages you can use the tool `commitizen` and using `git cz` when you want to commit)\n\n### Commit Message Format\n\nEach commit message consists of a **header**, a **body** and a **footer**. The header has a special\nformat that includes a **type**, a **scope** and a **subject**:\n\n```\n<type>(<scope>): <subject>\n<BLANK LINE>\n<body>\n<BLANK LINE>\n<footer>\n```\n\nThe **header** is mandatory and the **scope** of the header is optional.\n\nAny line of the commit message cannot be longer 100 characters! This allows the message to be easier\nto read on GitHub as well as in various git tools.\n\n### Revert\n\nIf the commit reverts a previous commit, it should begin with `revert:`, followed by the header of\nthe reverted commit. In the body it should say: `This reverts commit <hash>.`, where the hash is\nthe SHA of the commit being reverted.\n\n### Type\n\nMust be one of the following:\n\n*   **feat**: A new feature\n*   **fix**: A bug fix\n*   **docs**: Documentation only changes\n*   **style**: Changes that do not affect the meaning of the code (white-space, formatting, missing\n    semi-colons, etc)\n*   **refactor**: A code change that neither fixes a bug nor adds a feature\n*   **perf**: A code change that improves performance\n*   **test**: Adding missing tests or correcting existing tests\n*   **build**: Changes that affect the build system, CI configuration or external dependencies\n    (example scopes: gulp, broccoli, npm)\n*   **chore**: Other changes that don't modify `src` or `test` files\n\n### Scope\n\nThe scope could be anything specifying place of the commit change. For example\n`button`, `dialog`, etc.\n\n### Subject\n\nThe subject contains succinct description of the change:\n\n*   use the imperative, present tense: \"change\" not \"changed\" nor \"changes\"\n*   don't capitalize first letter\n*   no dot (.) at the end\n\n### Body\n\nJust as in the **subject**, use the imperative, present tense: \"change\" not \"changed\" nor \"changes\".\nThe body should include the motivation for the change and contrast this with previous behavior.\n\n### Footer\n\nThe footer should contain any information about **Breaking Changes** and is also the place to\nreference GitHub issues that this commit **Closes**.\n\n**Breaking Changes** should start with the word `BREAKING CHANGE:` with a space or two newlines.\nThe rest of the commit message is then used for this.\n\nA detailed explanation can be found in this [document](https://github.com/angular/angular.js/blob/master/DEVELOPERS.md#-git-commit-guidelines).\n\n:::\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./guides/getting-started.md":
/*!*************************************************************!*\
  !*** ./node_modules/raw-loader!./guides/getting-started.md ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "# Getting Started\n\n###### Last updated August 2, 2018\n\n:::\n\n##### Setting up the project\n\n#### Step 1. Install the npm module.\n\n```BASH\nnpm i --save @healthcatalyst/cashmere\n```\n\n#### Install peer dependencies on [Popper.js](https://popper.js.org/), [@angular/cdk](https://material.angular.io/cdk), [Font Awesome](https://fontawesome.com), and [Open Sans](https://fonts.google.com/specimen/Open+Sans) (optional).\n\n```BASH\nnpm install --save popper.js @angular/cdk font-awesome npm-font-open-sans\n```\n\n#### Step 2. Create a module to hold Cashmere components.\n\nCreate a module that will hold the Cashmere components that your app will need. Place all the components in the exports field of the NgModule annotation.\n\n```typescript\nimport {NgModule} from '@angular/core';\nimport {BreadcrumbsModule, ButtonModule, CheckboxModule, IconModule} from '@healthcatalyst/cashmere';\n\n@NgModule({\n    exports: [BreadcrumbsModule, ButtonModule, CheckboxModule, IconModule]\n})\nexport class CashmereModule {}\n```\n\n_By creating a module that holds all of Cashmere's components you will keep things more organized and you won't have references throughout your code base for the same components._\n\nNow what you can do is import the Cashmere module into your SharedModule.\n\n```typescript\n@NgModule({\n    exports: [CommonModule, CashmereModule]\n})\nexport class SharedModule {}\n```\n\nAnywhere you import the Shared module, all of the Cashmere components will be made available to you.\n\n#### Step 3. Add the styles.\n\nImport baseline scss file into your app's global style sheet `(src/styles.scss)`\n\n```\n@import \"~@healthcatalyst/cashmere/scss/cashmere\";\n```\n\n#### Step 4. Add references to dependencies.\n\nAdd a reference to Popper.js to scripts option within `angular.json`.\n\n```json\n\"projects\": {\n    \"<ProjectName>\": {\n      \"architect\": {\n        \"build\": {\n          \"builder\": \"@angular-devkit/build-angular:browser\",\n          \"options\": {\n            \"scripts\": [\n                \"../node_modules/popper.js/dist/umd/popper.js\"\n            ]\n          }\n        }\n      }\n    }\n  }\n```\n\nAdd a reference to Font Awesome ([official instructions](https://github.com/angular/angular-cli/blob/master/docs/documentation/stories/include-font-awesome.md)) and Open Sans by adding it via the styles option inside your project's build target options in `angular.json`\n\n```json\n\"projects\": {\n    \"<ProjectName>\": {\n      \"architect\": {\n        \"build\": {\n          \"builder\": \"@angular-devkit/build-angular:browser\",\n          \"options\": {\n            \"styles\": [\n                \"../node_modules/font-awesome/css/font-awesome.css\",\n                \"../node_modules/npm-font-open-sans/open-sans.css\",\n                \"src/styles.scss\"\n            ]\n          }\n        }\n      }\n    }\n  }\n```\n\n:::\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./guides/help-menu.md":
/*!*******************************************************!*\
  !*** ./node_modules/raw-loader!./guides/help-menu.md ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "# Help Menu Guide\n\n###### Last updated August 6, 2018\n\n:::\n\n##### Overview\n\nAll Health Catalyst apps should include a help menu in their navbar. This guide provides a standard menu for the content that should appear in that menu. A standard menu provides users with a consistent experience—they know what to expect from Health Catalyst applications. It also gives them the support and information they need to use the app.\n:::\n\n:::\n\n##### How to include in the navbar\n\nUsing the `hc-navbar` component, the help menu is included as a `hc-navbar-icon` that stays pinned to the right side and triggers a popover:\n\n```\n<hc-navbar-icon>\n    <hc-icon fontSet=\"fa\" fontIcon=\"fa-question-circle-o\"\n        [hcPopover]=\"helpMenu\" popperPlacement=\"bottom\"></hc-icon>\n</hc-navbar-icon>\n```\n\n:::\n\n:::\n\n##### What items should go in the menu?\n\nYou may not have all these items available. However, include what you have in this order:\n\n*   **Help Topics** (if available—reach out to the Content Team for support)\n*   **Release Notes** (if applicable, again reach out to the Content Team for support)\n*   **About** (a modal containing app reference information - see the [associated style page](https://cashmere.healthcatalyst.net/styles/about) for guidelines)\n*   **Health Catalyst Community** (link to community space specific to the app)\n*   **Send us your feedback** (see the [User Feedback Guide](https://cashmere.healthcatalyst.net/guides/user-feedback))\n\n:::\n\n:::\n\n##### Example Popover\n\nThe following example includes all of the above elements:\n\n```\n<hc-popover-content #helpMenu>\n    <ul class=\"list-options\">\n        <li>\n            <a href=\"\" target=\"_blank\">Help Topics</a>\n        </li>\n        <li>\n            <a href=\"\" target=\"_blank\">Release Notes</a>\n        </li>\n        <li>\n            <button (click)=\"aboutClick($event)\">About</button>\n        </li>\n        <li>\n            <a href=\"https://community.healthcatalyst.com/\" target=\"_blank\">Health Catalyst Community</a>\n        </li>\n        <li>\n           <button (click)=\"feedbackClick($event)\">Send us your feedback</button>\n        </li>\n    </ul>\n</hc-popover-content>\n```\n\n:::\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./guides/styles/about-modal.md":
/*!****************************************************************!*\
  !*** ./node_modules/raw-loader!./guides/styles/about-modal.md ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "# App \"About\" Modal\n\n###### Last updated August 15, 2018\n\n:::\n\n##### Overview\n\nAn \"About\" modal should be included with every application as place to store important statistical information. It is typically triggered from an item in the [help menu](https://cashmere.healthcatalyst.net/guides/help-menu). This is often used in troubleshooting when a user needs to identify specifics about their app instance. At a minimum, the About modal should contain:\n\n*   **App Name** - usually an SVG and usually paired with a logo\n*   **Version Number** - the primary element of the modal, should be easy to find\n*   **Copyright** - usually included in the footer\n*   **Terms and Conditions** - part of the footer and links to our [website terms page](https://www.healthcatalyst.com/terms-conditions/)\n*   **Privacy Policy** - paired with Terms in the footer and links to our [website privacy page](https://www.healthcatalyst.com/privacy-policy/)\n\nBeyond these items, other app specific information may include \"web server\", \"database name\", \"metadata server\" or other data related items.\n:::\n\n:::\n\n##### Example\n\nThe following code snippet leverages styles in the `about-modal.scss` stylesheet and can be used as a starting point which you can build on to create an About modal specific to your app. Note that the content below should be displayed in a [hc-modal](https://cashmere.healthcatalyst.net/components/modal/).\n\n```html\n<div class=\"about-modal-content\">\n    <div class=\"about-header\">\n        <div class=\"about-triflame\"></div>\n        <div>\n            <img src=\"./assets/Cashmere_About.svg\" class=\"about-app-title\" alt=\"\" />\n            <div class=\"about-version\">\n                Version 5.0.0.0\n            </div>\n        </div>\n    </div>\n    <div class=\"about-reference\">\n        <div>\n            <hc-icon fontSet=\"fa\" fontIcon=\"fa-cloud\" icon-lg></hc-icon>\n            <div>\n                <strong>Web Server</strong>\n                <div class=\"about-reference-detail\">HC2370</div>\n            </div>\n        </div>\n        <div>\n            <hc-icon fontSet=\"fa\" fontIcon=\"fa-server\" icon-lg></hc-icon>\n            <div>\n                <strong>Metadata Server</strong>\n                <div class=\"about-reference-detail\">localhost</div>\n            </div>\n        </div>\n        <div>\n            <hc-icon fontSet=\"fa\" fontIcon=\"fa-database\" icon-lg></hc-icon>\n            <div>\n                <strong>Database Name</strong>\n                <div class=\"about-reference-detail\">EDWAdmin</div>\n            </div>\n        </div>\n    </div>\n    <div class=\"about-footer\">\n        Copyright 2018 <a href=\"https://www.healthcatalyst.com/\">Health Catalyst</a>. All rights reserved\n        <br>\n        <a href=\"https://www.healthcatalyst.com/terms-conditions/\">Terms and Conditions</a>  |  <a href=\"https://www.healthcatalyst.com/privacy-policy/\">Privacy Policy</a>\n    </div>\n</div>\n<hr>\n<div class=\"about-close-container\">\n    <button hc-button class=\"about-close\">Close</button>\n</div>\n```\n\n:::\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./guides/styles/breadcrumbs.md":
/*!****************************************************************!*\
  !*** ./node_modules/raw-loader!./guides/styles/breadcrumbs.md ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "# Breadcrumbs\r\n\r\n###### Last updated May 15, 2018\r\n\r\n:::\r\n\r\n##### Example\r\n\r\nAdd `.subnav` class to the root element with an `<ol>` element with `.breadcrumb` class as a child. Each `<li>` child should have a `.breadcrumb-item` class with either a `<span>` or `<a>`\r\n\r\n```html\r\n<div class=\"subnav\">\r\n    <ol class=\"breadcrumb\">\r\n        <li class=\"breadcrumb-item\">\r\n            <a href=\"/styles/breadcrumbs#\">First</a>\r\n            <i class=\"fa fa-chevron-right breadcrumb-arrow\"></i>\r\n        </li>\r\n        <li class=\"breadcrumb-item\">\r\n            <a href=\"/styles/breadcrumbs#\">Second</a>\r\n            <i class=\"fa fa-chevron-right breadcrumb-arrow\"></i>\r\n        </li>\r\n        <li class=\"breadcrumb-item\">\r\n            <span>Third</span>\r\n            <i class=\"fa fa-chevron-right breadcrumb-arrow\"></i>\r\n        </li>\r\n    </ol>\r\n    <div class=\"breadcrumb-responsive-container\">\r\n        <a class=\"breadcrumb-back-button\">\r\n            <i class=\"fa fa-chevron-left\"></i>\r\n            <span>Back</span>\r\n        </a>\r\n    </div>\r\n</div>\r\n```\r\n\r\n:::\r\n\r\n<div class=\"subnav\">\r\n    <ol class=\"breadcrumb\">\r\n        <li class=\"breadcrumb-item\">\r\n            <a href=\"/styles/breadcrumbs#\">First</a>\r\n            <i class=\"fa fa-chevron-right breadcrumb-arrow\"></i>\r\n        </li>\r\n        <li class=\"breadcrumb-item\">\r\n            <a href=\"/styles/breadcrumbs#\">Second</a>\r\n            <i class=\"fa fa-chevron-right breadcrumb-arrow\"></i>\r\n        </li>\r\n        <li class=\"breadcrumb-item\">\r\n            <span>Third</span>\r\n            <i class=\"fa fa-chevron-right breadcrumb-arrow\"></i>\r\n        </li>\r\n    </ol>\r\n    <div class=\"breadcrumb-responsive-container\">\r\n        <a class=\"breadcrumb-back-button\">\r\n            <i class=\"fa fa-chevron-left\"></i>\r\n            <span>Back</span>\r\n        </a>\r\n    </div>\r\n</div>\r\n<br>\r\n<br>\r\n\r\n:::\r\n\r\n##### Responsive\r\n\r\nOn smaller phone sized devices the `.breadcrumb` element will be hidden and in its place `.breadcrumb-responsive-container` will show. This container can have anything that would be suitable for smaller screens. Responsive behavior can be disabled by adding `.disable-responsive` to each the `.breadcrumb` and `.breadcrumb-responsive-container` element\r\n:::\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./guides/styles/code.md":
/*!*********************************************************!*\
  !*** ./node_modules/raw-loader!./guides/styles/code.md ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":::\n\n##### Code Font\n\nDisplay source code in a monospace font. The Cashmere site uses the following: `font-family: Consolas, Menlo, \"Ubuntu Mono\", monospace;`\n:::\n\n:::\n\n##### Code Blocks\n\nInclude line numbers for blocks of code longer than than three lines. Line numbers should be:\n\n*   The same font size as the code\n*   In a light gray color so they aren't distracting\n\n```html\n<hc-list>\n    <hc-list-item>\n        <hc-icon fontSet=\"fa\" fontIcon=\"fa-snowflake-o\" hcListIcon></hc-icon>\n        <h4 hcListLine>SnowFlake</h4>\n        <span hcListLine>Second Line</span>\n    </hc-list-item>\n</hc-list>\n```\n\n:::\n\n:::\n\n##### Syntax Highlighting\n\nSyntax highlighting makes blocks of code more readable. The **\"GitHub Gist\"** theme in the highlight.js library is our recommended highlighter. Visit [https://highlightjs.org/static/demo](https://highlightjs.org/static/demo) for details.\n\n:::\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./guides/styles/error-pages.md":
/*!****************************************************************!*\
  !*** ./node_modules/raw-loader!./guides/styles/error-pages.md ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "# Error Pages\n\n###### Last updated March 12, 2018\n\n:::\n\n##### Overview\n\nOne of the most common errors users can come across while working with web apps is a 404 or Page Not Found error. This error often occurs when the user follows a broken link or if they type in a website address that doesn’t exist. A 404 page error appears when a website is active, but the specific page within it doesn’t exist. This guide illustrates the our styling for error pages - which may be used for 404 errors or extended to any other errors that an app needs to catch.\n:::\n\n:::\n\n##### Layout\n\nThe error page should include the app's `hc-navbar` but without any of the navbar-links active. The page background should be set to `$slate-gray-100` with the error message centered horizontally and positioned 25% from the top of the page. Styles for the error message have been included in the error-page.scss file. Below is example markup to create the error message displayed beneath this tile.\n\n```html\n<div class=\"error-tile\">\n    <div class=\"content-column\">\n        <div class=\"error-img\"></div>\n    </div>\n    <div class=\"content-column\">\n        <div class=\"error-header-code\">404</div>\n        <div class=\"error-message\">\n            Sorry, we can't find the page you're looking for!\n        </div>\n    </div>\n    <hr>\n    <div class=\"error-button\">Go to Homepage</div>\n</div>\n```\n\n:::\n\n<br>\n<div class=\"error-tile\">\n    <div class=\"content-column\">\n        <div class=\"error-img\"></div>\n    </div>\n    <div class=\"content-column\">\n        <div class=\"error-header-code\">404</div>\n        <div class=\"error-message\">\n            Sorry, we can't find the page you're looking for!\n        </div>\n    </div>\n    <hr>\n    <div style=\"display: flex\"><div class=\"error-button\">Go to Homepage</div></div>\n</div>\n<br><br><br>\n\n:::\n\n##### Alternate Classes\n\nFor errors that need to display a string of text rather than an error code, the class `error-header-string` may be used instead. For longer error messages (a full sentence or more), the `error-message-light` class should be used. For access errors, an alternate image is available using the `access-error-img` class.\n\n```html\n<div class=\"content-column\">\n    <div class=\"access-error-img\"></div>\n</div>\n<div class=\"content-column\">\n    <div class=\"error-header-string\">Access Denied</div>\n    <div class=\"error-message-light\">\n        Looks like you are missing permissions to access this resource.\n        Please contact your systems administrator.\n    </div>\n</div>\n```\n\n:::\n\n<br>\n<div class=\"error-tile\">\n    <div class=\"content-column\">\n        <div class=\"access-error-img\"></div>\n    </div>\n    <div class=\"content-column\">\n        <div class=\"error-header-string\">Access Denied</div>\n        <div class=\"error-message-light\">Looks like you are missing permissions to access this resource. Please contact your systems administrator.</div>\n    </div>\n    <hr>\n    <div style=\"display: flex\"><div class=\"error-button\">Go to Homepage</div></div>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./guides/styles/login-page.md":
/*!***************************************************************!*\
  !*** ./node_modules/raw-loader!./guides/styles/login-page.md ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "# Login Page\r\n\r\n:::\r\n\r\n##### Overview\r\n\r\nThe login styles provide a unified experience when a user first enters an application. The following examples can be customized for each applications needs. The component is mobile friendly and will adapt for smaller screen sizes.\r\n\r\nThe library does not ship with image assets, so the following images will need to be downloaded: [Logo](https://raw.githubusercontent.com/HealthCatalyst/Fabric.Cashmere/master/docs/assets/HC_logo.svg) and [Background](https://raw.githubusercontent.com/HealthCatalyst/Fabric.Cashmere/master/docs/assets/login_bg.jpg)\r\n\r\n:::\r\n<br>\r\n\r\n<div class=\"hc-login-container\" style=\"height:650px; background-image: url(../assets/login_bg.jpg)\">\r\n  <div class=\"hc-login\">\r\n    <div class=\"logo\">\r\n      <img src=\"../assets/HC_logo.svg\" alt=\"Health Catalyst Logo\">\r\n    </div>\r\n    <form>\r\n      <label for=\"email\">Email</label>\r\n      <input class=\"login-input\" required name=\"email\" type=\"text\" placeholder=\"Enter Full Email\">\r\n      <label for=\"email\">Password</label>\r\n      <a href=\"#\" class=\"forgot-password\">Forgot Password</a>\r\n      <input class=\"login-input\" required name=\"password\" type=\"password\">\r\n      <input value=\"Log in\" class=\"login-button\" type=\"submit\">\r\n    </form>\r\n    <div class=\"privacy\">By signing in you agree to our\r\n      <br>\r\n      <a href=\"#\">Terms of Use</a> and\r\n      <a href=\"#\">Privacy Statement</a>\r\n    </div>\r\n    <div class=\"new-to-catalyst\">\r\n      <span>New to Health Catalyst?</span>\r\n    </div>\r\n    <a href=\"#\" class=\"new-account\">Create a new acount</a>\r\n  </div>\r\n  <div class=\"hc-login-footer\">\r\n    <ul>\r\n      <li>\r\n        <a href=\"https://www.healthcatalyst.com/terms-conditions/\"> Terms of Use </a>\r\n      </li>\r\n      <li>\r\n        <a href=\"https://www.healthcatalyst.com/privacy-policy/\">Privacy</a>\r\n      </li>\r\n      <li>\r\n        <a href=\"https://www.healthcatalyst.com\">HealthCatalyst.com</a>\r\n      </li>\r\n    </ul>\r\n  </div>\r\n</div>\r\n<br>\r\n<br>\r\n<br>\r\n\r\n:::\r\n\r\n##### Layout\r\n\r\nTo accomidate most needs, these styles can be used with or without angular. The examples just give an outline and can be customized as needed\r\n<br>\r\n<br>\r\n\r\n##### HTML and CSS version\r\n\r\nThe following example does not use angular but a post css Preprocesser is needed. Here are general steps to setup and use these styles:\r\n\r\n*   Install and set css preprocessor like [gulp sass](https://github.com/dlmanning/gulp-sass) or [webpack with sass](https://github.com/webpack-contrib/sass-loader)\r\n*   Install cashmere npm package\r\n*   Import styles `@import \"~@healthcatalyst/cashmere/scss/login-page\";`\r\n*   Use html markup as needed\r\n\r\n```html\r\n<div class=\"hc-login-container\" style=\"background-image: url(../assets/login_bg.jpg)\">\r\n  <div class=\"hc-login\">\r\n    <div class=\"logo\">\r\n      <img src=\"../assets/HC_logo.svg\" alt=\"Health Catalyst Logo\">\r\n    </div>\r\n    <form>\r\n      <label for=\"email\">Email</label>\r\n      <input class=\"login-input\" required name=\"email\" type=\"text\" placeholder=\"Enter Full Email\">\r\n      <label for=\"email\">Password</label>\r\n      <a href=\"#\" class=\"forgot-password\">Forgot Password</a>\r\n      <input class=\"login-input\" required name=\"password\" type=\"password\">\r\n      <input value=\"Log in\" class=\"login-button\" type=\"submit\">\r\n    </form>\r\n    <div class=\"privacy\">By signing in you agree to our\r\n      <br>\r\n      <a href=\"#\">Terms of Use</a> and\r\n      <a href=\"#\">Privacy Statement</a>\r\n    </div>\r\n    <div class=\"new-to-catalyst\">\r\n      <span>New to Health Catalyst?</span>\r\n    </div>\r\n    <a href=\"#\" class=\"new-account\">Create a new acount</a>\r\n  </div>\r\n  <div class=\"hc-login-footer\">\r\n    <ul>\r\n      <li>\r\n        <a href=\"https://www.healthcatalyst.com/terms-conditions/\"> Terms of Use </a>\r\n      </li>\r\n      <li>\r\n        <a href=\"https://www.healthcatalyst.com/privacy-policy/\">Privacy</a>\r\n      </li>\r\n      <li>\r\n        <a href=\"https://www.healthcatalyst.com\">HealthCatalyst.com</a>\r\n      </li>\r\n    </ul>\r\n  </div>\r\n</div>\r\n```\r\n\r\n##### Angular version using Cashmere components\r\n\r\nThe following example uses angular and cashmere and is the preffered method. It uses `ButtonModule` and `InputModule` and must be imported into the app.module\r\n\r\n```html\r\n<div class=\"hc-login-container\" style=\"background-image: url(../assets/login_bg.jpg)\">\r\n  <div class=\"hc-login\">\r\n    <div class=\"logo\">\r\n      <img src=\"../assets/HC_logo.svg\" alt=\"Health Catalyst Logo\">\r\n    </div>\r\n    <div>\r\n      <hc-form-field>\r\n        <hc-label>Email</hc-label>\r\n        <input hcInput required>\r\n      </hc-form-field>\r\n      <hc-form-field>\r\n        <hc-label>Password</hc-label>\r\n        <input type=\"password\" hcInput required>\r\n      </hc-form-field>\r\n      <a href=\"#\" class=\"forgot-password\" hidden=\"hidden\">Forgot Password</a>\r\n      <button hc-button class=\"login-button\">Log in</button>\r\n    </div>\r\n    <div class=\"privacy\">By signing in you agree to our\r\n      <br>\r\n      <a href=\"#\">Terms of Use</a> and\r\n      <a href=\"#\">Privacy Statement</a>\r\n    </div>\r\n    <div class=\"new-to-catalyst\">\r\n      <span>New to Health Catalyst?</span>\r\n    </div>\r\n    <a href=\"#\" class=\"new-account\">Create a new acount</a>\r\n  </div>\r\n  <div class=\"hc-login-footer\">\r\n    <ul>\r\n      <li>\r\n        <a href=\"https://www.healthcatalyst.com/terms-conditions/\"> Terms of Use </a>\r\n      </li>\r\n      <li>\r\n        <a href=\"https://www.healthcatalyst.com/privacy-policy/\">Privacy</a>\r\n      </li>\r\n      <li>\r\n        <a href=\"https://www.healthcatalyst.com\">HealthCatalyst.com</a>\r\n      </li>\r\n    </ul>\r\n  </div>\r\n</div>\r\n```\r\n\r\n:::\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./guides/submit-an-issue.md":
/*!*************************************************************!*\
  !*** ./node_modules/raw-loader!./guides/submit-an-issue.md ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "# Submit an Issue\n\n###### Last updated March 15, 2018\n\n:::\n\n##### Found a Bug?\n\nBefore you [submit an issue](https://github.com/HealthCatalyst/Fabric.Cashmere/issues), search the archive. Maybe your question was already answered.\n\nIf your issue appears to be a bug and hasn't been reported, open a new issue. Help us maximize the effort we spend fixing issues and adding new features by not reporting duplicate issues. Providing the following information increases the chances your issue is dealt with quickly:\n\n*   **Overview of the issue**. If an error is being thrown, a non-minified stack trace helps.\n*   **Angular and Cashmere version**. Note which versions are affected.\n*   **Motivation or use case**. Explain what you are trying to do and why the current behavior is a bug for you.\n*   **Browsers and operating systems**. Answer \"Is this a problem with all browsers?\"\n*   **Reproduce the error**. Provide a live example (using CodePen, JsBin, Plunker, etc.) or a unambiguous set of steps.\n*   **Screenshots**. Due to the visual nature of Cashmere, screenshots help the team triage issues far more quickly than a text description.\n*   **Related issues**. Answer \"Has a similar issue been reported before?\"\n*   **Suggest a fix**. If you can't fix the bug yourself, point to what might be causing the problem (e.g., a line of code or commit).\n\nEven better, submit a pull request with a fix!\n:::\n\n:::\n\n##### Want a Feature?\n\nRequest a new feature by submitting an issue to our [GitHub Repository](https://github.com/HealthCatalyst/Fabric.Cashmere/issues). If you would like to implement a new feature, please submit an issue with a proposal for your work first to be sure we can use it. Please consider what kind of change it is:\n\n*   For a major feature, first open an issue and outline your proposal so it can be discussed. This also allows us to better coordinate our efforts, prevent duplicate work, and help you craft the change so it is successfully accepted into the project.\n*   Small features can be crafted and directly submitted as a pull request.\n\n:::\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./guides/supported-browsers.md":
/*!****************************************************************!*\
  !*** ./node_modules/raw-loader!./guides/supported-browsers.md ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "# Supported Browsers\n\n###### Last updated March 13, 2018\n\n:::\n\n##### Browser support table\n\nTo support a more unifed and better user experience, Health Catalyst should aim to align the target browser compatibility. Along with a better experience, consistent compatibility helps push Health Catalyst products into the future vision of working in a tool switcher.\n\n|                                                                                          |                             | <img src=\"./assets/windows.png\" alt=\"Windows\" style=\"width: 50px;\"/> **Windows** | <img src=\"./assets/mac.png\" alt=\"Mac\" style=\"width: 50px;\"/> **Mac** |\n| ---------------------------------------------------------------------------------------: | :-------------------------- | :------------------------------------------------------------------------------: | :------------------------------------------------------------------: |\n|                       <img src=\"./assets/chrome.png\" alt=\"Chrome\" style=\"width: 50px;\"/> | Google Chrome               |                                      Latest                                      |                                Latest                                |\n| <img src=\"./assets/internet-explorer.png\" alt=\"Internet Explorer\" style=\"width: 50px;\"/> | Microsoft Internet Explorer |                                      Latest                                      |                                Latest                                |\n|                           <img src=\"./assets/edge.png\" alt=\"Edge\" style=\"width: 50px;\"/> | Microsoft Edge              |                                      Latest                                      |                                                                      |\n|                     <img src=\"./assets/firefox.png\" alt=\"FireFox\" style=\"width: 50px;\"/> | Mozilla Firefox             |                                      Latest                                      |                                Latest                                |\n|                       <img src=\"./assets/safari.png\" alt=\"Safari\" style=\"width: 50px;\"/> | Apple Safari                |                                                                                  |                                Latest                                |\n\n:::\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./guides/user-feedback.md":
/*!***********************************************************!*\
  !*** ./node_modules/raw-loader!./guides/user-feedback.md ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "# User Feedback Guide\n\n###### Last updated May 21, 2018\n\n:::\n\n##### Overview\n\nThe purpose of this guide is to explain the methodologies and mechanisms for gathering qualitative user feedback. It will also provide general templates for body copy that can be used for user prompts.\n:::\n\n:::\n\n##### Why Collect User Feedback?\n\nImplementing a feedback mechanism into the product is critical to continually striving to build a better product that best meets the needs of your users. It is important to have a couple different feedback mechanisms within a product, including a volunteered mechanism (where they can click on “Give Feedback” from the Help menu or somewhere else) and a timed mechanism (a pop up that appears in the product on some cadence such as every X number of logins). These can be the same questions or different ones. In addition, users can be invited to provide feedback via email by providing a link to the same survey as the in-page popup survey. This is more personal and can yield higher response rates in certain situations.\n:::\n\n:::\n\n##### Qualitative Feedback vs. Quantitative Telemetry\n\nQuantitative usage metrics and qualitative customer satisfaction data are complimentary and should be used hand in hand. The usage data helps us understand the overall volume of use as well as what aspects/features of the product are being used and how. Qualitative data can help fill in the “why” behind quantitative metrics.\n:::\n\n:::\n\n##### User Satisfaction\n\nAfter a user has had enough time to explore and utilize the product, they will then be able to provide a meaningful satisfaction rating (asking too soon will yield inaccurate results). A 7 point scale is often used to gauge user satisfaction, and many also opt for a 9 or 11 point scale. The scale you choose comes down to a tradeoff between ease of use for the respondent (generally it’s easier to answer on a 7 point scale than an 11 point one) and robustness of results (an 11 point scale gives a larger continuum so over time you can more easily see if the needle is moving). User satisfaction is often rolled up to a “satisfaction score” for the product and tracked by the organization as a key metric for sustainability and growth. This can be represented as an average score or “top two box” score (percent of users who are “very” and “extremely” satisfied).\n:::\n\n:::\n\n##### Net Promoter Score®\n\nThe Net Promoter Score® (NPS) is likely the most widely utilized approach to gathering feedback for digital products. The question under the NPS methodology is “How likely are you to recommend [insert product or service name] to a friend or colleague?” This methodology is founded upon a lot of research showing that people will go so far as to recommend a product when they are satisfied with it themselves. So it takes satisfaction one step further. It is a metric of enthusiasm and happiness with a product. Oftentimes a second free text question is used following the NPS® question. This question asks the user why they gave the rating they did, which reveals what’s making them very happy or unhappy. The NPS methodology uses a 0 to 11-point scale, where respondents scoring 0 to 6 are considered “Detractors”, 7 and 8 are considered “Passives” and 9 and 10 are considered “Promoters”. To calculate NPS, the percent of Detractors is subtracted from the percent of Promoters. This score is represented as a negative or positive number (not a percent; a common error). This score can then be used to compare a company or product to past performance or benchmarks. One caution regarding NPS is that small sample sizes can result in volatility when tracked over time which can raise red flags unnecessarily. Arguably, several hundred respondents are a necessary guidepost to be able to reliably track the NPS metric. However, on an individual level or with smaller sample sizes, it is still highly useful to understand whether an individual is a Promoter, Passive or Detractor or to track the percent who are likely to recommend the product (e.g., percent who answer 8,9 or 10).\n:::\n\n:::\n\n##### Frequency of Gathering Feedback\n\nThere is no rule of thumb that applies to all situations in terms of how often to gather feedback. In general, a team should make meaningful changes or improvements to the product in between surveying users. It also depends on the length of the survey. If it is a longer form, more comprehensive satisfaction survey that will take a user 5-10 minutes to complete, perhaps asking annually is best. But if the survey is brief and more of a “pulse” that takes respondents 2 minutes or less, asking **monthly or quarterly** could be acceptable without giving respondents fatigue.\n:::\n\n:::\n\n##### Asking for Feedback in App\n\nIt has become common practice to ask users to complete a short form satisfaction survey directly within an application. Guidelines for frequency are explained in the above tile. An app will typically prompt their users via a modal dialog on launch. A basic template for the prompt is as follows:\n\n**Prompt header:**\nHelp us improve [product name]\n\n**Body text:**\nWe'd love to hear about your experience with [product name]. Please take 1-2 minutes to share your feedback and help us improve the application.\n\n**Confirm button text:**\nProvide Feedback\n\n**Dismiss button text:**\nNo thanks\n\nAfter agreeing to provide user feedback, it is recommended that the [Typeform Survey](https://cashmere.healthcatalyst.net/components/typeform-survey) component be used to collect in app feedback.\n:::\n\n:::\n\n##### Asking for Feedback via Email\n\nWith any survey it is important to achieve the highest response rate possible. A personalized invitation to take the survey is generally going to yield the highest response rate. If the product is in alpha or beta phases at a client, for example, having the product team reach out to users directly on an individual level may be best. If you choose to send the users a personal email asking them to click through to the survey, here is a template as a starting point:\n\n_Health Catalyst would like your feedback to help inform improvements to [product name]. It is very important that we hear from you to ensure that [product name] is meeting your needs and helping you to continue to excel as a data-driven organization. Health Catalyst will use your feedback to inform necessary upgrades. The [product name] Survey is anonymous and will take you about 1-3 minutes to complete._\n\n_Please click here to take the survey: {link}_\n\n_If you have any questions, please feel free to reach out to me. Thank you for completing the survey by {date}._\n\nHowever, it is not always practical to take this personalized approach, especially with more mature products that have a lot of users. In that case MailChimp or another centralized tool that can send automated emails are a good option.\n\n:::\n"

/***/ }),

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routes.module.ts":
/*!**************************************!*\
  !*** ./src/app/app-routes.module.ts ***!
  \**************************************/
/*! exports provided: AppRoutesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutesModule", function() { return AppRoutesModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    { path: 'home', component: _home_home_component__WEBPACK_IMPORTED_MODULE_1__["HomeComponent"] },
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: '**', redirectTo: 'home' }
];
var AppRoutesModule = /** @class */ (function () {
    function AppRoutesModule() {
    }
    AppRoutesModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]]
        })
    ], AppRoutesModule);
    return AppRoutesModule;
}());



/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<hc-navbar appIcon=\"./assets/CashmereAppLogo.svg\" brandIcon=\"./assets/TriFlame.svg\" homeUri=\"/home\" fixedTop=\"true\">\n    <hc-navbar-link uri=\"/home\" linkText=\"Home\"></hc-navbar-link>\n    <hc-navbar-link uri=\"/styles\" linkText=\"Styles\"></hc-navbar-link>\n    <hc-navbar-link uri=\"/components\" linkText=\"Components\"></hc-navbar-link>\n    <hc-navbar-link uri=\"/guides/getting-started\" linkText=\"Guides\"></hc-navbar-link>\n    <hc-navbar-icon>\n        <a title=\"View on GitHub\" href=\"https://github.com/HealthCatalyst/Fabric.Cashmere\" target=\"blank\">\n            <hc-icon fontSet=\"fa\" fontIcon=\"fa-github\" icon-lg></hc-icon>\n        </a>\n    </hc-navbar-icon>\n    <hc-navbar-mobile-menu appSwitcher=\"false\">\n        <hc-list>\n            <hc-list-item routerLink=\"/home\" routerLinkActive=\"active-link\">\n                <span hcListLine>Home</span>\n            </hc-list-item>\n            <hc-list-item routerLink=\"/styles\" routerLinkActive=\"active-link\">\n                <span hcListLine>Styles</span>\n            </hc-list-item>\n            <hc-list-item routerLink=\"/components\" routerLinkActive=\"active-link\">\n                <span hcListLine>Components</span>\n            </hc-list-item>\n            <hc-list-item routerLink=\"/guides/getting-started\" routerLinkActive=\"active-link\">\n                <span hcListLine>Guides</span>\n            </hc-list-item>\n        </hc-list>\n        <hr>\n        <hc-list>\n            <a href=\"https://github.com/HealthCatalyst/Fabric.Cashmere\">\n                <hc-list-item>\n                    <span hcListLine>View on GitHub</span>\n               </hc-list-item>\n           </a>\n        </hc-list>\n    </hc-navbar-mobile-menu>\n</hc-navbar>\n\n<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
    }
    AppComponent.prototype.ngOnInit = function () { };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'hc-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html")
        }),
        __metadata("design:paramtypes", [])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _styles_styles_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./styles/styles.module */ "./src/app/styles/styles.module.ts");
/* harmony import */ var _guides_guides_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./guides/guides.module */ "./src/app/guides/guides.module.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _app_routes_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app-routes.module */ "./src/app/app-routes.module.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _core_core_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./core/core.module */ "./src/app/core/core.module.ts");
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/components.module */ "./src/app/components/components.module.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"],
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__["BrowserModule"],
                _core_core_module__WEBPACK_IMPORTED_MODULE_8__["CoreModule"],
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_7__["SharedModule"],
                _components_components_module__WEBPACK_IMPORTED_MODULE_9__["ComponentsModule"],
                _styles_styles_module__WEBPACK_IMPORTED_MODULE_2__["StylesModule"],
                _guides_guides_module__WEBPACK_IMPORTED_MODULE_3__["GuidesModule"],
                _app_routes_module__WEBPACK_IMPORTED_MODULE_6__["AppRoutesModule"]
            ],
            declarations: [_app_component__WEBPACK_IMPORTED_MODULE_1__["AppComponent"], _home_home_component__WEBPACK_IMPORTED_MODULE_10__["HomeComponent"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_1__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/component-viewer/component-api/component-api.component.html":
/*!****************************************************************************************!*\
  !*** ./src/app/components/component-viewer/component-api/component-api.component.html ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"content\">\n    <hc-doc-viewer documentUrl=\"assets/docs/api/cashmere-{{componentViewer.docItem?.id}}.html\"></hc-doc-viewer>\n</div>\n\n"

/***/ }),

/***/ "./src/app/components/component-viewer/component-api/component-api.component.ts":
/*!**************************************************************************************!*\
  !*** ./src/app/components/component-viewer/component-api/component-api.component.ts ***!
  \**************************************************************************************/
/*! exports provided: ComponentApiComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComponentApiComponent", function() { return ComponentApiComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _component_viewer_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../component-viewer.component */ "./src/app/components/component-viewer/component-viewer.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ComponentApiComponent = /** @class */ (function () {
    function ComponentApiComponent(componentViewer) {
        this.componentViewer = componentViewer;
    }
    ComponentApiComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            template: __webpack_require__(/*! ./component-api.component.html */ "./src/app/components/component-viewer/component-api/component-api.component.html")
        }),
        __metadata("design:paramtypes", [_component_viewer_component__WEBPACK_IMPORTED_MODULE_1__["ComponentViewerComponent"]])
    ], ComponentApiComponent);
    return ComponentApiComponent;
}());



/***/ }),

/***/ "./src/app/components/component-viewer/component-examples/component-examples.component.html":
/*!**************************************************************************************************!*\
  !*** ./src/app/components/component-viewer/component-examples/component-examples.component.html ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"content\">\n    <hc-example-viewer *ngFor=\"let example of componentViewer.docItem?.examples\"\n                       [example]=\"example\">\n    </hc-example-viewer>\n</div>\n"

/***/ }),

/***/ "./src/app/components/component-viewer/component-examples/component-examples.component.scss":
/*!**************************************************************************************************!*\
  !*** ./src/app/components/component-viewer/component-examples/component-examples.component.scss ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".hc-tile:first-of-type {\n  margin-top: 20px; }\n"

/***/ }),

/***/ "./src/app/components/component-viewer/component-examples/component-examples.component.ts":
/*!************************************************************************************************!*\
  !*** ./src/app/components/component-viewer/component-examples/component-examples.component.ts ***!
  \************************************************************************************************/
/*! exports provided: ComponentExamplesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComponentExamplesComponent", function() { return ComponentExamplesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _component_viewer_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../component-viewer.component */ "./src/app/components/component-viewer/component-viewer.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ComponentExamplesComponent = /** @class */ (function () {
    function ComponentExamplesComponent(componentViewer) {
        this.componentViewer = componentViewer;
    }
    ComponentExamplesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            template: __webpack_require__(/*! ./component-examples.component.html */ "./src/app/components/component-viewer/component-examples/component-examples.component.html"),
            styles: [__webpack_require__(/*! ./component-examples.component.scss */ "./src/app/components/component-viewer/component-examples/component-examples.component.scss")]
        }),
        __metadata("design:paramtypes", [_component_viewer_component__WEBPACK_IMPORTED_MODULE_1__["ComponentViewerComponent"]])
    ], ComponentExamplesComponent);
    return ComponentExamplesComponent;
}());



/***/ }),

/***/ "./src/app/components/component-viewer/component-examples/example-viewer/example-viewer.component.html":
/*!*************************************************************************************************************!*\
  !*** ./src/app/components/component-viewer/component-examples/example-viewer/example-viewer.component.html ***!
  \*************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"hc-tile\">\n    <h3 class=\"docs-api-h3\">{{exampleTitle}}</h3>\n    <hc-tab-set direction=\"horizontal\">\n        <hc-tab [tabTitle]=\"ext\" *ngFor=\"let ext of ['Example', 'HTML', 'Typescript', 'CSS']\">\n\n            <div class=\"example-buffer\" *ngIf=\"ext == 'Example'\"></div>\n\n            <ng-container #vc></ng-container>\n\n            <pre class=\"html hljs xml\" *ngIf=\"ext != 'Example'\">\n                <hc-doc-viewer [documentUrl]=\"exampleFileUrl(ext)\">\n                </hc-doc-viewer>\n            </pre>\n        </hc-tab>\n    </hc-tab-set>\n</div>\n"

/***/ }),

/***/ "./src/app/components/component-viewer/component-examples/example-viewer/example-viewer.component.scss":
/*!*************************************************************************************************************!*\
  !*** ./src/app/components/component-viewer/component-examples/example-viewer/example-viewer.component.scss ***!
  \*************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".tab-content {\n  padding: 10px 20px; }\n"

/***/ }),

/***/ "./src/app/components/component-viewer/component-examples/example-viewer/example-viewer.component.ts":
/*!***********************************************************************************************************!*\
  !*** ./src/app/components/component-viewer/component-examples/example-viewer/example-viewer.component.ts ***!
  \***********************************************************************************************************/
/*! exports provided: ExampleViewerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExampleViewerComponent", function() { return ExampleViewerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _healthcatalyst_cashmere_examples__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @healthcatalyst/cashmere-examples */ "./dist/cashmere-examples/esm5/cashmere-examples.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ExampleViewerComponent = /** @class */ (function () {
    function ExampleViewerComponent(_componentFactoryResolver, httpClient) {
        this._componentFactoryResolver = _componentFactoryResolver;
        this.httpClient = httpClient;
    }
    Object.defineProperty(ExampleViewerComponent.prototype, "example", {
        get: function () {
            return this._example;
        },
        set: function (example) {
            var _this = this;
            this._example = example;
            this._exampleData = _healthcatalyst_cashmere_examples__WEBPACK_IMPORTED_MODULE_1__["EXAMPLE_COMPONENTS"][example];
            setTimeout(function () { return _this._attachComponentToOutlet(); });
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ExampleViewerComponent.prototype, "exampleTitle", {
        get: function () {
            return this._exampleData.title;
        },
        enumerable: true,
        configurable: true
    });
    ExampleViewerComponent.prototype._attachComponentToOutlet = function () {
        if (this._demoContainer.length > 0) {
            this._demoContainer.clear();
        }
        var resolvedFactory = this._componentFactoryResolver.resolveComponentFactory(this._exampleData.component);
        this._demoContainer.createComponent(resolvedFactory, 0, this._demoContainer.parentInjector);
    };
    ExampleViewerComponent.prototype.exampleFileUrl = function (ext) {
        if (ext === 'Typescript') {
            ext = 'ts';
        }
        return "/assets/docs/examples/" + this.example + "-example-" + ext.toLowerCase() + ".html";
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('vc', { read: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"] }),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"])
    ], ExampleViewerComponent.prototype, "_demoContainer", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String),
        __metadata("design:paramtypes", [String])
    ], ExampleViewerComponent.prototype, "example", null);
    ExampleViewerComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'hc-example-viewer',
            template: __webpack_require__(/*! ./example-viewer.component.html */ "./src/app/components/component-viewer/component-examples/example-viewer/example-viewer.component.html"),
            styles: [__webpack_require__(/*! ./example-viewer.component.scss */ "./src/app/components/component-viewer/component-examples/example-viewer/example-viewer.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"], _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], ExampleViewerComponent);
    return ExampleViewerComponent;
}());



/***/ }),

/***/ "./src/app/components/component-viewer/component-usage/component-usage.component.html":
/*!********************************************************************************************!*\
  !*** ./src/app/components/component-viewer/component-usage/component-usage.component.html ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<hc-tile>\n    <hc-doc-viewer documentUrl=\"assets/docs/usage/{{componentViewer.docItem?.id}}.html\"></hc-doc-viewer>\n</hc-tile>\n"

/***/ }),

/***/ "./src/app/components/component-viewer/component-usage/component-usage.component.scss":
/*!********************************************************************************************!*\
  !*** ./src/app/components/component-viewer/component-usage/component-usage.component.scss ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "hc-tile {\n  margin-top: 20px; }\n"

/***/ }),

/***/ "./src/app/components/component-viewer/component-usage/component-usage.component.ts":
/*!******************************************************************************************!*\
  !*** ./src/app/components/component-viewer/component-usage/component-usage.component.ts ***!
  \******************************************************************************************/
/*! exports provided: ComponentUsageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComponentUsageComponent", function() { return ComponentUsageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _component_viewer_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../component-viewer.component */ "./src/app/components/component-viewer/component-viewer.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ComponentUsageComponent = /** @class */ (function () {
    function ComponentUsageComponent(componentViewer) {
        this.componentViewer = componentViewer;
    }
    ComponentUsageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            template: __webpack_require__(/*! ./component-usage.component.html */ "./src/app/components/component-viewer/component-usage/component-usage.component.html"),
            styles: [__webpack_require__(/*! ./component-usage.component.scss */ "./src/app/components/component-viewer/component-usage/component-usage.component.scss")]
        }),
        __metadata("design:paramtypes", [_component_viewer_component__WEBPACK_IMPORTED_MODULE_1__["ComponentViewerComponent"]])
    ], ComponentUsageComponent);
    return ComponentUsageComponent;
}());



/***/ }),

/***/ "./src/app/components/component-viewer/component-viewer.component.html":
/*!*****************************************************************************!*\
  !*** ./src/app/components/component-viewer/component-viewer.component.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"demo-content\">\n    <h1>{{docItem.name}}</h1>\n    <hc-tab-set direction=\"horizontal\">\n        <hc-tab *ngFor=\"let section of sections\" [tabTitle]=\"section\" [routerLink]=\"section.toLowerCase()\"></hc-tab>\n    </hc-tab-set>\n</div>\n"

/***/ }),

/***/ "./src/app/components/component-viewer/component-viewer.component.scss":
/*!*****************************************************************************!*\
  !*** ./src/app/components/component-viewer/component-viewer.component.scss ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "h1 {\n  margin-top: 20px;\n  margin-bottom: 15px; }\n"

/***/ }),

/***/ "./src/app/components/component-viewer/component-viewer.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/components/component-viewer/component-viewer.component.ts ***!
  \***************************************************************************/
/*! exports provided: ComponentViewerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComponentViewerComponent", function() { return ComponentViewerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _core_document_items_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/document-items.service */ "./src/app/core/document-items.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ComponentViewerComponent = /** @class */ (function () {
    function ComponentViewerComponent(activatedRoute, docItems) {
        this.activatedRoute = activatedRoute;
        this.docItems = docItems;
    }
    ComponentViewerComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.params.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (params) { return params['id']; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (id) { return _this.docItems.getItemById(id); })).subscribe(function (docItem) {
            _this.docItem = docItem;
            var availableSections = ['API'];
            if (_this.docItem) {
                var examples = _this.docItem.examples;
                if (examples && examples.length > 0) {
                    availableSections = ['Examples', 'API'];
                }
                if (_this.docItem.usageDoc) {
                    availableSections.push('Usage');
                }
                _this.sections = new Set(availableSections);
            }
        });
    };
    ComponentViewerComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            template: __webpack_require__(/*! ./component-viewer.component.html */ "./src/app/components/component-viewer/component-viewer.component.html"),
            styles: [__webpack_require__(/*! ./component-viewer.component.scss */ "./src/app/components/component-viewer/component-viewer.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"], _core_document_items_service__WEBPACK_IMPORTED_MODULE_1__["DocumentItemsService"]])
    ], ComponentViewerComponent);
    return ComponentViewerComponent;
}());



/***/ }),

/***/ "./src/app/components/component-viewer/shared/document-viewer/document-viewer.component.scss":
/*!***************************************************************************************************!*\
  !*** ./src/app/components/component-viewer/shared/document-viewer/document-viewer.component.scss ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* set standard relative layering for components */\n/* set standard relative layering for components */\n/* set standard relative layering for components */\n.hc-doc-viewer {\n  display: block; }\n.hc-tile:first-of-type {\n  margin-top: 20px; }\n.docs-api-h3 {\n  font-size: 1.07142857rem;\n  text-transform: uppercase;\n  color: #006d9a;\n  font-weight: 600;\n  margin: 0 0 20px 0; }\n.docs-api-h4 {\n  font-size: 1.57142857rem;\n  font-weight: 600;\n  margin: 20px 0 0 0; }\n.docs-api-h5 {\n  text-transform: unset;\n  color: #333;\n  font-weight: 600;\n  font-size: 1.14285714rem;\n  margin: 30px 0 5px 0; }\n.docs-api-class-extends-clauses {\n  font-size: 1.42857143rem;\n  font-weight: 300; }\n.docs-api-directive-selectors {\n  margin: 20px 0 20px 0; }\n.docs-api-properties-table {\n  font-size: 0.92857143rem;\n  margin-bottom: 40px; }\n.docs-api-properties-table p {\n    font-size: 0.92857143rem; }\n.docs-api-properties-header-row th {\n  padding-bottom: 8px;\n  text-align: left; }\n.docs-api-properties-name-cell {\n  font-family: Consolas, Menlo, 'Ubuntu Mono', monospace; }\n.docs-api-properties-name-cell code {\n    font-size: 0.92857143rem;\n    background-color: unset;\n    border-radius: unset;\n    padding: unset;\n    font-weight: unset;\n    line-height: unset; }\n.directive-spacer {\n  display: block;\n  height: 20px; }\n.docs-api-method-table th {\n  color: #a94c9d;\n  font-family: Consolas, Menlo, 'Ubuntu Mono', monospace;\n  padding-top: 20px;\n  text-align: left; }\n.docs-api-method-table td {\n  padding-top: 5px;\n  border-bottom: none; }\n.docs-api-method-table p {\n  font-size: 0.92857143rem; }\n.docs-api-method-table code {\n  font-size: 0.92857143rem;\n  color: #333;\n  background-color: unset;\n  border-radius: unset;\n  padding: unset;\n  font-weight: unset;\n  line-height: unset; }\n.docs-api-method-parameters-header-cell,\n.docs-api-method-returns-header-cell {\n  padding-left: 25px;\n  padding-top: 0 !important;\n  color: #333 !important;\n  font-family: 'Open Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif !important; }\n.docs-api-method-parameter-name {\n  padding-left: 25px;\n  margin-bottom: 0;\n  margin-top: 0; }\n.docs-api-method-parameter-type,\n.docs-api-method-returns-type {\n  font-size: 0.85714286rem !important; }\n.docs-api-method-returns-type {\n  padding-left: 25px !important; }\n.docs-api-method-name-cell {\n  border-top: 1px dashed #e0e0e0 !important; }\n.example-buffer {\n  margin-top: 20px;\n  display: block; }\n.docs-api-property-name {\n  margin: 0; }\n"

/***/ }),

/***/ "./src/app/components/component-viewer/shared/document-viewer/document-viewer.component.ts":
/*!*************************************************************************************************!*\
  !*** ./src/app/components/component-viewer/shared/document-viewer/document-viewer.component.ts ***!
  \*************************************************************************************************/
/*! exports provided: DocumentViewerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DocumentViewerComponent", function() { return DocumentViewerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* tslint:disable:use-host-property-decorator */
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DocumentViewerComponent = /** @class */ (function () {
    function DocumentViewerComponent(http, element) {
        this.http = http;
        this.element = element;
    }
    Object.defineProperty(DocumentViewerComponent.prototype, "documentUrl", {
        set: function (docUrl) {
            this.fetchDocument(docUrl);
        },
        enumerable: true,
        configurable: true
    });
    DocumentViewerComponent.prototype.fetchDocument = function (docUrl) {
        var _this = this;
        this.http.get(docUrl, { responseType: 'text' }).subscribe(function (doc) { return _this.updateDocument(doc); });
    };
    DocumentViewerComponent.prototype.updateDocument = function (docHtml) {
        this.element.nativeElement.innerHTML = docHtml;
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String),
        __metadata("design:paramtypes", [String])
    ], DocumentViewerComponent.prototype, "documentUrl", null);
    DocumentViewerComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'hc-doc-viewer',
            template: '',
            styles: [__webpack_require__(/*! ./document-viewer.component.scss */ "./src/app/components/component-viewer/shared/document-viewer/document-viewer.component.scss")],
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
            host: {
                '[class.hc-doc-viewer]': 'true'
            }
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]])
    ], DocumentViewerComponent);
    return DocumentViewerComponent;
}());



/***/ }),

/***/ "./src/app/components/components-router.module.ts":
/*!********************************************************!*\
  !*** ./src/app/components/components-router.module.ts ***!
  \********************************************************/
/*! exports provided: ComponentsRouterModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComponentsRouterModule", function() { return ComponentsRouterModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _components_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components.component */ "./src/app/components/components.component.ts");
/* harmony import */ var _component_viewer_component_viewer_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./component-viewer/component-viewer.component */ "./src/app/components/component-viewer/component-viewer.component.ts");
/* harmony import */ var _component_viewer_component_api_component_api_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./component-viewer/component-api/component-api.component */ "./src/app/components/component-viewer/component-api/component-api.component.ts");
/* harmony import */ var _component_viewer_component_examples_component_examples_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./component-viewer/component-examples/component-examples.component */ "./src/app/components/component-viewer/component-examples/component-examples.component.ts");
/* harmony import */ var _component_viewer_component_usage_component_usage_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./component-viewer/component-usage/component-usage.component */ "./src/app/components/component-viewer/component-usage/component-usage.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var routes = [
    {
        path: 'components',
        component: _components_component__WEBPACK_IMPORTED_MODULE_2__["ComponentsComponent"],
        children: [
            {
                path: ':id',
                component: _component_viewer_component_viewer_component__WEBPACK_IMPORTED_MODULE_3__["ComponentViewerComponent"],
                children: [
                    { path: 'api', component: _component_viewer_component_api_component_api_component__WEBPACK_IMPORTED_MODULE_4__["ComponentApiComponent"], pathMatch: 'full' },
                    { path: 'examples', component: _component_viewer_component_examples_component_examples_component__WEBPACK_IMPORTED_MODULE_5__["ComponentExamplesComponent"], pathMatch: 'full' },
                    { path: 'usage', component: _component_viewer_component_usage_component_usage_component__WEBPACK_IMPORTED_MODULE_6__["ComponentUsageComponent"], pathMatch: 'full' },
                    { path: '**', redirectTo: 'examples' }
                ]
            }
        ]
    }
];
var ComponentsRouterModule = /** @class */ (function () {
    function ComponentsRouterModule() {
    }
    ComponentsRouterModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]]
        })
    ], ComponentsRouterModule);
    return ComponentsRouterModule;
}());



/***/ }),

/***/ "./src/app/components/components.component.html":
/*!******************************************************!*\
  !*** ./src/app/components/components.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<hc-subnav class=\"responsive-subnav\" fixedTop=\"true\">\n    <div class=\"subnav-container\">\n        <span class=\"subnav-label\">Components: </span>\n        <span class=\"subnav-select\">\n            <hc-select [(ngModel)]=\"thisPage\" (ngModelChange)=\"selectUpdate($event)\">\n                <option *ngFor=\"let option of docItems\" [value]=\"option.id\" [selected]=\"option.id === thisPage\">{{option.name}}</option>\n            </hc-select>\n        </span>\n    </div>\n</hc-subnav>\n<hc-tab-set class=\"full-height\">\n    <hc-tab *ngFor=\"let docItem of docItems\" [tabTitle]=\"docItem.name\" [routerLink]=\"docItem.id\"></hc-tab>\n</hc-tab-set>\n"

/***/ }),

/***/ "./src/app/components/components.component.ts":
/*!****************************************************!*\
  !*** ./src/app/components/components.component.ts ***!
  \****************************************************/
/*! exports provided: ComponentsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComponentsComponent", function() { return ComponentsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _core_document_items_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../core/document-items.service */ "./src/app/core/document-items.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ComponentsComponent = /** @class */ (function () {
    function ComponentsComponent(docItemService, activatedRoute, router) {
        var _this = this;
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.thisPage = '';
        this.selectOptions = [];
        this.unsubscribe = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
        this.docItems = docItemService.getDocItems();
        // Listen for vertical tab bar navigation and update the select component
        router.events.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["takeUntil"])(this.unsubscribe)).subscribe(function (event) {
            if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__["NavigationEnd"]) {
                if (activatedRoute.firstChild) {
                    _this.thisPage = activatedRoute.firstChild.snapshot.params['id'];
                }
            }
        });
    }
    // Handle changes to the select component and navigate
    ComponentsComponent.prototype.selectUpdate = function (event) {
        this.router.navigate(['/components/' + event]);
    };
    ComponentsComponent.prototype.ngOnDestroy = function () {
        this.unsubscribe.next();
        this.unsubscribe.complete();
    };
    ComponentsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'hc-demo-components',
            template: __webpack_require__(/*! ./components.component.html */ "./src/app/components/components.component.html")
        }),
        __metadata("design:paramtypes", [_core_document_items_service__WEBPACK_IMPORTED_MODULE_1__["DocumentItemsService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], ComponentsComponent);
    return ComponentsComponent;
}());



/***/ }),

/***/ "./src/app/components/components.module.ts":
/*!*************************************************!*\
  !*** ./src/app/components/components.module.ts ***!
  \*************************************************/
/*! exports provided: ComponentsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComponentsModule", function() { return ComponentsModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _component_viewer_component_viewer_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./component-viewer/component-viewer.component */ "./src/app/components/component-viewer/component-viewer.component.ts");
/* harmony import */ var _component_viewer_component_api_component_api_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./component-viewer/component-api/component-api.component */ "./src/app/components/component-viewer/component-api/component-api.component.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _component_viewer_component_examples_component_examples_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./component-viewer/component-examples/component-examples.component */ "./src/app/components/component-viewer/component-examples/component-examples.component.ts");
/* harmony import */ var _component_viewer_component_examples_example_viewer_example_viewer_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./component-viewer/component-examples/example-viewer/example-viewer.component */ "./src/app/components/component-viewer/component-examples/example-viewer/example-viewer.component.ts");
/* harmony import */ var _component_viewer_shared_document_viewer_document_viewer_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./component-viewer/shared/document-viewer/document-viewer.component */ "./src/app/components/component-viewer/shared/document-viewer/document-viewer.component.ts");
/* harmony import */ var _healthcatalyst_cashmere_examples__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @healthcatalyst/cashmere-examples */ "./dist/cashmere-examples/esm5/cashmere-examples.js");
/* harmony import */ var _component_viewer_component_usage_component_usage_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./component-viewer/component-usage/component-usage.component */ "./src/app/components/component-viewer/component-usage/component-usage.component.ts");
/* harmony import */ var _components_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components.component */ "./src/app/components/components.component.ts");
/* harmony import */ var _components_router_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components-router.module */ "./src/app/components/components-router.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











var ComponentsModule = /** @class */ (function () {
    function ComponentsModule() {
    }
    ComponentsModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_shared_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"], _healthcatalyst_cashmere_examples__WEBPACK_IMPORTED_MODULE_7__["CashmereExampleModule"], _components_router_module__WEBPACK_IMPORTED_MODULE_10__["ComponentsRouterModule"]],
            declarations: [
                _components_component__WEBPACK_IMPORTED_MODULE_9__["ComponentsComponent"],
                _component_viewer_component_viewer_component__WEBPACK_IMPORTED_MODULE_1__["ComponentViewerComponent"],
                _component_viewer_component_api_component_api_component__WEBPACK_IMPORTED_MODULE_2__["ComponentApiComponent"],
                _component_viewer_shared_document_viewer_document_viewer_component__WEBPACK_IMPORTED_MODULE_6__["DocumentViewerComponent"],
                _component_viewer_component_examples_component_examples_component__WEBPACK_IMPORTED_MODULE_4__["ComponentExamplesComponent"],
                _component_viewer_component_examples_example_viewer_example_viewer_component__WEBPACK_IMPORTED_MODULE_5__["ExampleViewerComponent"],
                _component_viewer_component_usage_component_usage_component__WEBPACK_IMPORTED_MODULE_8__["ComponentUsageComponent"]
            ]
        })
    ], ComponentsModule);
    return ComponentsModule;
}());



/***/ }),

/***/ "./src/app/core/core.module.ts":
/*!*************************************!*\
  !*** ./src/app/core/core.module.ts ***!
  \*************************************/
/*! exports provided: CoreModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoreModule", function() { return CoreModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _document_items_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./document-items.service */ "./src/app/core/document-items.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var CoreModule = /** @class */ (function () {
    function CoreModule() {
    }
    CoreModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            providers: [_document_items_service__WEBPACK_IMPORTED_MODULE_1__["DocumentItemsService"]]
        })
    ], CoreModule);
    return CoreModule;
}());



/***/ }),

/***/ "./src/app/core/document-items.service.ts":
/*!************************************************!*\
  !*** ./src/app/core/document-items.service.ts ***!
  \************************************************/
/*! exports provided: DocumentItemsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DocumentItemsService", function() { return DocumentItemsService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var docs = [
    { id: 'accordion', name: 'Accordion', examples: ['accordion-overview'] },
    { id: 'breadcrumbs', name: 'Breadcrumbs', usageDoc: true },
    {
        id: 'button',
        name: 'Button',
        examples: ['button-primary', 'button-split', 'button-secondary', 'button-disabled', 'button-anchor', 'button-link', 'button-icon']
    },
    {
        id: 'checkbox',
        name: 'Checkbox',
        examples: ['checkbox-standard', 'checkbox-disabled', 'checkbox-forms']
    },
    {
        id: 'chip',
        name: 'Chip',
        examples: ['chip-basic', 'chip-action', 'chip-row', 'chip-singlerow']
    },
    {
        id: 'drawer',
        name: 'Drawer',
        examples: ['drawer-basic', 'drawer-overlay', 'drawer-side', 'drawer-menu']
    },
    { id: 'icon', name: 'Icon', examples: ['icon-overview'] },
    {
        id: 'input',
        name: 'Input',
        usageDoc: true,
        examples: ['input-required', 'input-suffix', 'input-prefix', 'input-disabled']
    },
    { id: 'list', name: 'List', examples: ['list-overview'] },
    { id: 'modal', name: 'Modal', examples: ['modal-overview'] },
    { id: 'navbar', name: 'Navbar', examples: ['navbar-overview'] },
    {
        id: 'pagination',
        name: 'Pagination',
        usageDoc: true,
        examples: ['pagination-overview']
    },
    { id: 'picklist', name: 'Picklist', examples: ['picklist-simple', 'picklist-valueset'], usageDoc: true },
    {
        id: 'popover',
        name: 'Popover',
        examples: ['popover-overview', 'popover-placement', 'popover-dynamic']
    },
    { id: 'progress-indicators', name: 'Progress Indicators', examples: ['progress-spinner', 'progress-dots'], usageDoc: true },
    {
        id: 'radio-button',
        name: 'Radio button',
        examples: ['radio-button-standard', 'radio-button-disabled', 'radio-button-forms']
    },
    {
        id: 'select',
        name: 'Select',
        examples: ['select-standard', 'select-disabled', 'select-validation', 'select-forms']
    },
    {
        id: 'sort',
        name: 'Sort',
        usageDoc: true
    },
    { id: 'subnav', name: 'Subnav', examples: ['subnav-overview'] },
    {
        id: 'table',
        name: 'Table',
        examples: ['table-overview', 'table-sort', 'table-filter'],
        usageDoc: true
    },
    {
        id: 'tabs',
        name: 'Tabs',
        examples: ['tabs-horizontal', 'tabs-vertical']
    },
    { id: 'tile', name: 'Tile', examples: ['tile-overview'] },
    { id: 'typeform-survey', name: 'Typeform survey', examples: ['typeform-survey-overview'] }
];
var DocumentItemsService = /** @class */ (function () {
    function DocumentItemsService() {
    }
    DocumentItemsService.prototype.getDocItems = function () {
        return docs;
    };
    DocumentItemsService.prototype.getItemById = function (id) {
        return docs.find(function (doc) { return doc.id === id; });
    };
    DocumentItemsService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])()
    ], DocumentItemsService);
    return DocumentItemsService;
}());



/***/ }),

/***/ "./src/app/guides/guide/guide.component.html":
/*!***************************************************!*\
  !*** ./src/app/guides/guide/guide.component.html ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"demo-content\" [hcMarkdown]=\"document\"></div>"

/***/ }),

/***/ "./src/app/guides/guide/guide.component.ts":
/*!*************************************************!*\
  !*** ./src/app/guides/guide/guide.component.ts ***!
  \*************************************************/
/*! exports provided: GuideComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GuideComponent", function() { return GuideComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _guides_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../guides.service */ "./src/app/guides/guides.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var GuideComponent = /** @class */ (function () {
    function GuideComponent(activatedRoute, guidesService) {
        this.activatedRoute = activatedRoute;
        this.guidesService = guidesService;
        this.document = '';
    }
    GuideComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.paramMap.subscribe(function (queryParams) {
            var route = queryParams.get('id');
            var selectedGuide = _this.guidesService.guides.find(function (guide) { return guide.route === route; });
            if (selectedGuide) {
                _this.document = selectedGuide.document;
            }
        });
    };
    GuideComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'hc-guide',
            template: __webpack_require__(/*! ./guide.component.html */ "./src/app/guides/guide/guide.component.html"),
            styles: [
                "\ntd,th {\n    vertical-align:middle;\n}\n    "
            ]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _guides_service__WEBPACK_IMPORTED_MODULE_1__["GuidesService"]])
    ], GuideComponent);
    return GuideComponent;
}());



/***/ }),

/***/ "./src/app/guides/guides-routes.module.ts":
/*!************************************************!*\
  !*** ./src/app/guides/guides-routes.module.ts ***!
  \************************************************/
/*! exports provided: GuidesRoutesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GuidesRoutesModule", function() { return GuidesRoutesModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _guides_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./guides.component */ "./src/app/guides/guides.component.ts");
/* harmony import */ var _guide_guide_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./guide/guide.component */ "./src/app/guides/guide/guide.component.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var routes = [
    {
        path: 'guides',
        component: _guides_component__WEBPACK_IMPORTED_MODULE_1__["GuidesComponent"],
        children: [
            {
                path: ':id',
                component: _guide_guide_component__WEBPACK_IMPORTED_MODULE_2__["GuideComponent"]
            }
        ]
    }
];
var GuidesRoutesModule = /** @class */ (function () {
    function GuidesRoutesModule() {
    }
    GuidesRoutesModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]]
        })
    ], GuidesRoutesModule);
    return GuidesRoutesModule;
}());



/***/ }),

/***/ "./src/app/guides/guides.component.html":
/*!**********************************************!*\
  !*** ./src/app/guides/guides.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<hc-subnav class=\"responsive-subnav\" fixedTop=\"true\">\n    <div class=\"subnav-container\">\n        <span class=\"subnav-label\">Guides: </span>\n        <span class=\"subnav-select\">\n            <hc-select [(ngModel)]=\"thisPage\" (ngModelChange)=\"selectUpdate($event)\">\n                <option *ngFor=\"let option of selectOptions\" [value]=\"option\" [selected]=\"option === thisPage\">{{option}}</option>\n            </hc-select>\n        </span>\n    </div>\n</hc-subnav>\n<hc-tab-set class=\"full-height\">\n    <hc-tab *ngFor=\"let guide of guidesService.guides\" [tabTitle]=\"guide.title\" [routerLink]=\"['/guides/', guide.route]\">\n    </hc-tab>\n</hc-tab-set>\n"

/***/ }),

/***/ "./src/app/guides/guides.component.ts":
/*!********************************************!*\
  !*** ./src/app/guides/guides.component.ts ***!
  \********************************************/
/*! exports provided: GuidesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GuidesComponent", function() { return GuidesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _guides_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./guides.service */ "./src/app/guides/guides.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var GuidesComponent = /** @class */ (function () {
    function GuidesComponent(guidesService, activatedRoute, router) {
        this.guidesService = guidesService;
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.thisPage = '';
        this.selectOptions = [];
        this.unsubscribe = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
    }
    GuidesComponent.prototype.ngOnInit = function () {
        var _this = this;
        // Listen for vertical tab bar navigation and update the select component
        this.router.events.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["takeUntil"])(this.unsubscribe)).subscribe(function (event) {
            if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__["NavigationEnd"]) {
                for (var _i = 0, _a = _this.guidesService.guides; _i < _a.length; _i++) {
                    var entry = _a[_i];
                    if (event.url === "/guides/" + entry.route) {
                        _this.thisPage = entry.title;
                        break;
                    }
                }
            }
        });
        // Populate the responsive select component with the router information
        for (var _i = 0, _a = this.guidesService.guides; _i < _a.length; _i++) {
            var entry = _a[_i];
            this.selectOptions.push(entry.title);
        }
    };
    // Handle changes to the select component and navigate
    GuidesComponent.prototype.selectUpdate = function (event) {
        for (var _i = 0, _a = this.guidesService.guides; _i < _a.length; _i++) {
            var entry = _a[_i];
            if (event === entry.title) {
                this.router.navigate(['/guides/' + entry.route]);
                break;
            }
        }
    };
    GuidesComponent.prototype.ngOnDestroy = function () {
        this.unsubscribe.next();
        this.unsubscribe.complete();
    };
    GuidesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'hc-guides',
            template: __webpack_require__(/*! ./guides.component.html */ "./src/app/guides/guides.component.html")
        }),
        __metadata("design:paramtypes", [_guides_service__WEBPACK_IMPORTED_MODULE_1__["GuidesService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], GuidesComponent);
    return GuidesComponent;
}());



/***/ }),

/***/ "./src/app/guides/guides.module.ts":
/*!*****************************************!*\
  !*** ./src/app/guides/guides.module.ts ***!
  \*****************************************/
/*! exports provided: GuidesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GuidesModule", function() { return GuidesModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _guides_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./guides.component */ "./src/app/guides/guides.component.ts");
/* harmony import */ var _guide_guide_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./guide/guide.component */ "./src/app/guides/guide/guide.component.ts");
/* harmony import */ var _guides_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./guides.service */ "./src/app/guides/guides.service.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _guides_routes_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./guides-routes.module */ "./src/app/guides/guides-routes.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var GuidesModule = /** @class */ (function () {
    function GuidesModule() {
    }
    GuidesModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"], _guides_routes_module__WEBPACK_IMPORTED_MODULE_5__["GuidesRoutesModule"]],
            declarations: [_guides_component__WEBPACK_IMPORTED_MODULE_1__["GuidesComponent"], _guide_guide_component__WEBPACK_IMPORTED_MODULE_2__["GuideComponent"]],
            providers: [_guides_service__WEBPACK_IMPORTED_MODULE_3__["GuidesService"]]
        })
    ], GuidesModule);
    return GuidesModule;
}());



/***/ }),

/***/ "./src/app/guides/guides.service.ts":
/*!******************************************!*\
  !*** ./src/app/guides/guides.service.ts ***!
  \******************************************/
/*! exports provided: GuidesService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GuidesService", function() { return GuidesService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var GuidesService = /** @class */ (function () {
    function GuidesService() {
        this.guides = [
            {
                title: 'Getting Started',
                route: 'getting-started',
                document: __webpack_require__(/*! raw-loader!../../../guides/getting-started.md */ "./node_modules/raw-loader/index.js!./guides/getting-started.md")
            },
            {
                title: 'Guidelines for Contribution',
                route: 'contribution-guide',
                document: __webpack_require__(/*! raw-loader!../../../guides/contribution-guide.md */ "./node_modules/raw-loader/index.js!./guides/contribution-guide.md")
            },
            {
                title: 'Help Menu',
                route: 'help-menu',
                document: __webpack_require__(/*! raw-loader!../../../guides/help-menu.md */ "./node_modules/raw-loader/index.js!./guides/help-menu.md")
            },
            {
                title: 'Submit an Issue',
                route: 'submit-an-issue',
                document: __webpack_require__(/*! raw-loader!../../../guides/submit-an-issue.md */ "./node_modules/raw-loader/index.js!./guides/submit-an-issue.md")
            },
            {
                title: 'Supported Browsers',
                route: 'supported-browsers',
                document: __webpack_require__(/*! raw-loader!../../../guides/supported-browsers.md */ "./node_modules/raw-loader/index.js!./guides/supported-browsers.md")
            },
            {
                title: 'User Feedback',
                route: 'user-feedback',
                document: __webpack_require__(/*! raw-loader!../../../guides/user-feedback.md */ "./node_modules/raw-loader/index.js!./guides/user-feedback.md")
            }
        ];
    }
    GuidesService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])()
    ], GuidesService);
    return GuidesService;
}());



/***/ }),

/***/ "./src/app/home/home.component.html":
/*!******************************************!*\
  !*** ./src/app/home/home.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<header>\n    <span class=\"headerLeft\">\n        <img src=\"./assets/CashmereLogo.svg\" alt=\"Fabric.Cashmere Logo\"/>\n    </span>\n    <span class=\"headerRight\">\n        <img src=\"./assets/FabricCashmere.svg\" alt=\"Fabric.Cashmere Title\"/>\n        <p class=\"headerCopy\">Health Catalyst's living style guide for Angular</p>\n        <button hc-button title=\"Learn more about Cashmere\" color=\"primary\" routerLink=\"/guides\">Get Started</button>\n    </span>\n</header>\n<main>\n    <section>\n        <span class=\"sectionOneImg\"><img src=\"./assets/CashmereHome_UX.png\" alt=\"Cashmere UX Illustration\"/></span>\n        <span class=\"sectionOneTextWrapper sectionCenter\">\n            <div class=\"sectionOneText\">\n                <h2>Consistent User Experience</h2>\n                <p>Our users expect that our applications will look and feel consistent with one another.  By leveraging Cashmere components you’re ensuring the best possible UX for our users.</p>\n            </div>\n        </span>\n    </section>\n    <section class=\"sectionTwo\">\n        <span class=\"sectionCenter\">\n            <div class=\"sectionTwoText\">\n                <h2>Maximum Efficiency</h2>\n                <p>Developers are always being crunched for time, and Cashmere is here to help.  Keep the focus of sprints on the functionality that makes your app unique rather than rebuilding components that you can easily pull from our library.</p>\n            </div>\n        </span>\n        <span class=\"sectionCenter sectionTwoImg\">\n            <img src=\"./assets/CashmereHome_Efficiency.png\" alt=\"Cashmere Efficiency Illustration\"/>\n        </span>\n    </section>\n    <section>\n        <span class=\"sectionThreeImg\"><img src=\"./assets/CashmereHome_Grassroots.png\" alt=\"Cashmere Grassroots Illustration\"/></span>\n        <span class=\"sectionThreeTextWrapper sectionCenter\">\n            <div class=\"sectionThreeText\">\n                <h2>Grassroots Spirit</h2>\n                <p>Cashmere is a crowd-sourced library and represents the best efforts of our entire dev team.  Use these components with confidence knowing they have been fully vetted.  And if you see opportunities for improvement, <a href=\"https://github.com/HealthCatalyst/Fabric.Cashmere\">get involved and contribute</a>!</p>\n            </div>\n        </span>\n    </section>\n    <section><button hc-button title=\"Learn more about Cashmere\" color=\"primary\" routerLink=\"/guides\">Get Started</button></section>\n</main>\n"

/***/ }),

/***/ "./src/app/home/home.component.scss":
/*!******************************************!*\
  !*** ./src/app/home/home.component.scss ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* set standard relative layering for components */\n/* set standard relative layering for components */\nheader {\n  max-width: 720px;\n  margin: 50px auto 60px auto; }\nbutton {\n  width: 180px; }\na,\na:visited {\n  color: #00aeff; }\nh2 {\n  margin-bottom: 20px;\n  font-weight: 600;\n  font-size: 24px;\n  line-height: 1.4; }\np {\n  line-height: 1.4; }\n.headerLeft {\n  display: inline-block;\n  padding-left: 40px;\n  padding-right: 80px;\n  vertical-align: middle; }\n.headerLeft img {\n  height: 190px;\n  width: auto; }\n.headerCopy {\n  font-weight: 300;\n  margin-top: 0;\n  margin-bottom: 25px; }\n.headerRight {\n  display: inline-block;\n  padding-right: 40px;\n  vertical-align: middle; }\n.headerRight img {\n  height: 55px;\n  width: auto; }\n@media (max-width: 768px) {\n  header {\n    margin: 30px auto 40px auto;\n    display: block;\n    text-align: center; }\n  .headerLeft {\n    padding: 0;\n    display: flex; }\n  .headerLeft img {\n    margin: auto;\n    padding-top: 20px; }\n  .headerRight {\n    text-align: center;\n    padding: 0;\n    margin: 20px; }\n  .headerRight img {\n    height: unset; }\n  h2 {\n    margin: 10px 0 15px 0; } }\nmain {\n  background-color: #fafafa;\n  width: 100%;\n  border-top-width: 2px;\n  border-top-color: #eaeaea;\n  border-top-style: solid;\n  align-content: center;\n  padding-top: 60px; }\nsection {\n  max-width: 1024px;\n  margin: auto;\n  padding-left: 20px;\n  padding-right: 20px;\n  display: flex;\n  padding-bottom: 80px; }\nsection button {\n  margin: auto; }\n.sectionCenter {\n  display: flex;\n  align-items: center;\n  max-height: 320px; }\n.sectionOneText {\n  padding-left: 100px; }\n.sectionOneTextWrapper {\n  max-height: 370px; }\n.sectionOneImg {\n  width: 100%; }\n.sectionOneImg img {\n  max-width: 432px;\n  width: 100%;\n  height: auto; }\n.sectionTwo {\n  padding-bottom: 30px; }\n.sectionTwoText {\n  padding-right: 20%;\n  margin-bottom: 40px; }\n.sectionTwoImg {\n  width: 100%;\n  max-width: 280px; }\n.sectionTwoImg img {\n  max-width: 293px;\n  width: 100%;\n  height: auto; }\n.sectionThreeText {\n  padding-left: 15%; }\n.sectionThreeTextWrapper {\n  max-height: 472px; }\n.sectionThreeImg {\n  width: 100%;\n  max-width: 300px; }\n.sectionThreeImg img {\n  max-width: 261px;\n  width: 100%;\n  height: auto; }\n.getStarted {\n  margin: auto;\n  display: table; }\n@media (max-width: 768px) {\n  main {\n    text-align: center; }\n  section {\n    margin: 0;\n    display: block;\n    text-align: center;\n    padding: 0 0 50px 0; }\n  section span {\n    width: 100%; }\n  .sectionCenter {\n    max-height: unset;\n    padding-bottom: 20px;\n    display: unset; }\n  .sectionOneImg img,\n  .sectionTwoImg img,\n  .sectionThreeImg img {\n    display: inline-block;\n    width: 70% !important; }\n  .sectionTwoImg img {\n    padding-top: 30px; }\n  .sectionThreeImg img {\n    padding-bottom: 30px; }\n  .sectionOneText {\n    padding: 0;\n    margin: 40px 40px 0 40px; }\n  .sectionTwoText,\n  .sectionThreeText {\n    padding: 0;\n    margin: 0 40px 20px 40px; } }\n"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () { };
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'hc-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.scss */ "./src/app/home/home.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/shared/cashmere.module.ts":
/*!*******************************************!*\
  !*** ./src/app/shared/cashmere.module.ts ***!
  \*******************************************/
/*! exports provided: CashmereModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CashmereModule", function() { return CashmereModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _healthcatalyst_cashmere__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @healthcatalyst/cashmere */ "./dist/cashmere/esm5/healthcatalyst-cashmere.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var CashmereModule = /** @class */ (function () {
    function CashmereModule() {
    }
    CashmereModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            exports: [
                _healthcatalyst_cashmere__WEBPACK_IMPORTED_MODULE_1__["AccordionModule"],
                _healthcatalyst_cashmere__WEBPACK_IMPORTED_MODULE_1__["AppSwitcherModule"],
                _healthcatalyst_cashmere__WEBPACK_IMPORTED_MODULE_1__["BreadcrumbsModule"],
                _healthcatalyst_cashmere__WEBPACK_IMPORTED_MODULE_1__["ButtonModule"],
                _healthcatalyst_cashmere__WEBPACK_IMPORTED_MODULE_1__["CheckboxModule"],
                _healthcatalyst_cashmere__WEBPACK_IMPORTED_MODULE_1__["ChipModule"],
                _healthcatalyst_cashmere__WEBPACK_IMPORTED_MODULE_1__["DrawerModule"],
                _healthcatalyst_cashmere__WEBPACK_IMPORTED_MODULE_1__["IconModule"],
                _healthcatalyst_cashmere__WEBPACK_IMPORTED_MODULE_1__["InputModule"],
                _healthcatalyst_cashmere__WEBPACK_IMPORTED_MODULE_1__["LabelModule"],
                _healthcatalyst_cashmere__WEBPACK_IMPORTED_MODULE_1__["ListModule"],
                _healthcatalyst_cashmere__WEBPACK_IMPORTED_MODULE_1__["ModalModule"],
                _healthcatalyst_cashmere__WEBPACK_IMPORTED_MODULE_1__["NavbarModule"],
                _healthcatalyst_cashmere__WEBPACK_IMPORTED_MODULE_1__["PaginationModule"],
                _healthcatalyst_cashmere__WEBPACK_IMPORTED_MODULE_1__["PicklistModule"],
                _healthcatalyst_cashmere__WEBPACK_IMPORTED_MODULE_1__["PopoverModule"],
                _healthcatalyst_cashmere__WEBPACK_IMPORTED_MODULE_1__["ProgressIndicatorsModule"],
                _healthcatalyst_cashmere__WEBPACK_IMPORTED_MODULE_1__["RadioButtonModule"],
                _healthcatalyst_cashmere__WEBPACK_IMPORTED_MODULE_1__["SelectModule"],
                _healthcatalyst_cashmere__WEBPACK_IMPORTED_MODULE_1__["SubnavModule"],
                _healthcatalyst_cashmere__WEBPACK_IMPORTED_MODULE_1__["TabsModule"],
                _healthcatalyst_cashmere__WEBPACK_IMPORTED_MODULE_1__["TileModule"],
                _healthcatalyst_cashmere__WEBPACK_IMPORTED_MODULE_1__["TypeformSurveyModule"]
            ]
        })
    ], CashmereModule);
    return CashmereModule;
}());



/***/ }),

/***/ "./src/app/shared/markdown/markdown.directive.ts":
/*!*******************************************************!*\
  !*** ./src/app/shared/markdown/markdown.directive.ts ***!
  \*******************************************************/
/*! exports provided: MarkdownDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MarkdownDirective", function() { return MarkdownDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var markdown_it__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! markdown-it */ "./node_modules/markdown-it/index.js");
/* harmony import */ var markdown_it__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(markdown_it__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var markdown_it_container__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! markdown-it-container */ "./node_modules/markdown-it-container/index.js");
/* harmony import */ var markdown_it_container__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(markdown_it_container__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var highlight_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! highlight.js */ "./node_modules/highlight.js/lib/index.js");
/* harmony import */ var highlight_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(highlight_js__WEBPACK_IMPORTED_MODULE_3__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var MarkdownDirective = /** @class */ (function () {
    function MarkdownDirective(el) {
        this.el = el;
        this.highlight = true;
        this.lineNumbers = true;
    }
    MarkdownDirective.prototype.ngOnChanges = function (changes) {
        var md = new markdown_it__WEBPACK_IMPORTED_MODULE_1__({ html: true });
        // plugin to markdown-it to interpret :::
        md.use(markdown_it_container__WEBPACK_IMPORTED_MODULE_2__, 'hc-tile', {
            validate: function (params) {
                // markdown-it-container allows multiple ::: containers
                // This function allows you to validate this is the one you want
                // We only have one, so always validate
                return true;
            }
        });
        this.el.nativeElement.innerHTML = md.render(this.hcMarkdown, { sanitize: this.sanitize });
        if (this.highlight) {
            var preTags = this.el.nativeElement.getElementsByTagName('pre');
            for (var _i = 0, preTags_1 = preTags; _i < preTags_1.length; _i++) {
                var pre = preTags_1[_i];
                pre.classList.add(pre.getElementsByTagName('code')[0].className.split('-')[1]);
                this.removeLines(pre);
                Object(highlight_js__WEBPACK_IMPORTED_MODULE_3__["highlightBlock"])(pre);
                if (this.lineNumbers) {
                    this.addLines(pre);
                }
            }
        }
    };
    MarkdownDirective.prototype.removeLines = function (pre) {
        var span = pre.querySelector('span.line-number');
        if (span) {
            pre.removeChild(span);
        }
    };
    MarkdownDirective.prototype.addLines = function (pre) {
        pre.innerHTML = "<span class=\"line-number\"></span>" + pre.innerHTML + "<span class=\"cl\"></span>";
        var num = pre.innerHTML.split(/\n/).length;
        if (num > 2) {
            for (var j = 1; j < num; j++) {
                var lineNum = pre.getElementsByTagName('span')[0];
                lineNum.innerHTML += "<span>" + j + "</span>";
            }
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], MarkdownDirective.prototype, "hcMarkdown", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean)
    ], MarkdownDirective.prototype, "sanitize", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean)
    ], MarkdownDirective.prototype, "highlight", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean)
    ], MarkdownDirective.prototype, "lineNumbers", void 0);
    MarkdownDirective = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"])({
            selector: '[hcMarkdown]'
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]])
    ], MarkdownDirective);
    return MarkdownDirective;
}());



/***/ }),

/***/ "./src/app/shared/shared.module.ts":
/*!*****************************************!*\
  !*** ./src/app/shared/shared.module.ts ***!
  \*****************************************/
/*! exports provided: SharedModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedModule", function() { return SharedModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _markdown_markdown_directive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./markdown/markdown.directive */ "./src/app/shared/markdown/markdown.directive.ts");
/* harmony import */ var _cashmere_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./cashmere.module */ "./src/app/shared/cashmere.module.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var SharedModule = /** @class */ (function () {
    function SharedModule() {
    }
    SharedModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]],
            declarations: [_markdown_markdown_directive__WEBPACK_IMPORTED_MODULE_2__["MarkdownDirective"]],
            exports: [_markdown_markdown_directive__WEBPACK_IMPORTED_MODULE_2__["MarkdownDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _cashmere_module__WEBPACK_IMPORTED_MODULE_3__["CashmereModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"]]
        })
    ], SharedModule);
    return SharedModule;
}());



/***/ }),

/***/ "./src/app/styles/about/about-modal.component.html":
/*!*********************************************************!*\
  !*** ./src/app/styles/about/about-modal.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"demo-content\">\n    <div [hcMarkdown]=\"document\"></div>\n</div>\n\n<div class=\"error-tile\">\n    <div class=\"about-modal-content\">\n        <div class=\"about-header\">\n            <div class=\"about-triflame\"></div>\n            <div>\n                <img src=\"./assets/Cashmere_About.svg\" class=\"about-app-title\" alt=\"\" />\n                <div class=\"about-version\">\n                    Version 5.0.0.0\n                </div>\n            </div>\n        </div>\n        <div class=\"about-reference\">\n            <div>\n                <hc-icon fontSet=\"fa\" fontIcon=\"fa-cloud\" icon-lg></hc-icon>\n                <div>\n                    <strong>Web Server</strong>\n                    <div class=\"about-reference-detail\">HC2370</div>\n                </div>\n            </div>\n            <div>\n                <hc-icon fontSet=\"fa\" fontIcon=\"fa-server\" icon-lg></hc-icon>\n                <div>\n                    <strong>Metadata Server</strong>\n                    <div class=\"about-reference-detail\">localhost</div>\n                </div>\n            </div>\n            <div>\n                <hc-icon fontSet=\"fa\" fontIcon=\"fa-database\" icon-lg></hc-icon>\n                <div>\n                    <strong>Database Name</strong>\n                    <div class=\"about-reference-detail\">EDWAdmin</div>\n                </div>\n            </div>\n        </div>\n        <div class=\"about-footer\">\n            Copyright 2018 <a href=\"https://www.healthcatalyst.com/\">Health Catalyst</a>. All rights reserved\n            <br>\n            <a href=\"https://www.healthcatalyst.com/terms-conditions/\">Terms and Conditions</a>  |  <a href=\"https://www.healthcatalyst.com/privacy-policy/\">Privacy Policy</a>\n        </div>\n    </div>\n    <hr>\n    <div class=\"about-close-container\">\n        <button hc-button class=\"about-close\">Close</button>\n    </div>\n</div>\n\n<div class=\"footer-padding\">\n"

/***/ }),

/***/ "./src/app/styles/about/about-modal.component.scss":
/*!*********************************************************!*\
  !*** ./src/app/styles/about/about-modal.component.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".demo-content {\n  padding-bottom: 20px; }\n\n.footer-padding {\n  height: 60px;\n  display: block; }\n"

/***/ }),

/***/ "./src/app/styles/about/about-modal.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/styles/about/about-modal.component.ts ***!
  \*******************************************************/
/*! exports provided: AboutModalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutModalComponent", function() { return AboutModalComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AboutModalComponent = /** @class */ (function () {
    function AboutModalComponent() {
        this.document = __webpack_require__(/*! raw-loader!../../../../guides/styles/about-modal.md */ "./node_modules/raw-loader/index.js!./guides/styles/about-modal.md");
    }
    AboutModalComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'hc-about-modal',
            template: __webpack_require__(/*! ./about-modal.component.html */ "./src/app/styles/about/about-modal.component.html"),
            styles: [__webpack_require__(/*! ./about-modal.component.scss */ "./src/app/styles/about/about-modal.component.scss")]
        })
    ], AboutModalComponent);
    return AboutModalComponent;
}());



/***/ }),

/***/ "./src/app/styles/breadcrumbs/breadcrumbs-style-demo.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/styles/breadcrumbs/breadcrumbs-style-demo.component.ts ***!
  \************************************************************************/
/*! exports provided: BreadcrumbsStyleDemoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BreadcrumbsStyleDemoComponent", function() { return BreadcrumbsStyleDemoComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var BreadcrumbsStyleDemoComponent = /** @class */ (function () {
    function BreadcrumbsStyleDemoComponent() {
        this.lastModified = new Date(document.lastModified);
        this.document = __webpack_require__(/*! raw-loader!../../../../guides/styles/breadcrumbs.md */ "./node_modules/raw-loader/index.js!./guides/styles/breadcrumbs.md");
    }
    BreadcrumbsStyleDemoComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'hc-breadcrumbs-style-demo',
            template: "\n        <div class=\"demo-content\">\n            <div [hcMarkdown]=\"document\"></div>\n        </div>"
        })
    ], BreadcrumbsStyleDemoComponent);
    return BreadcrumbsStyleDemoComponent;
}());



/***/ }),

/***/ "./src/app/styles/chart/barchart/barchart.component.scss":
/*!***************************************************************!*\
  !*** ./src/app/styles/chart/barchart/barchart.component.scss ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* set standard relative layering for components */\n/* set standard relative layering for components */\n/* set standard relative layering for components */\n.chart-tooltip {\n  position: absolute;\n  font-size: 0.85714286rem;\n  line-height: 1.4;\n  display: block;\n  padding: 10px 15px 10px 10px;\n  background: #fff;\n  color: #6d6e70;\n  border: 1px solid #6d6e70;\n  border-radius: 5px;\n  pointer-events: none;\n  box-shadow: 1px 2px 6px rgba(0, 0, 0, 0.18); }\n.chart-tooltip .tooltip-header {\n    font-size: 0.92857143rem;\n    font-weight: 600; }\n/* set standard relative layering for components */\n/* set standard relative layering for components */\n.d3-bar-chart {\n  width: 100%;\n  height: 400px; }\n.d3-bar-chart .axis line {\n  stroke: #cccccc; }\n.d3-bar-chart .tick:first-of-type line {\n  stroke: #333; }\n.d3-bar-chart .axis .axis-label {\n  fill: #333;\n  font-family: \"Open Sans\", \"Helvetica Neue\", Helvetica, Arial, sans-serif;\n  font-size: 11px;\n  text-align: center; }\n.d3-bar-chart .bars .green-bar {\n  fill: #00a859; }\n.d3-bar-chart .bars .green-bar:hover {\n    fill: #008f4b; }\n.d3-bar-chart .bars .blue-bar {\n  fill: #00aeff; }\n.d3-bar-chart .bars .blue-bar:hover {\n    fill: #009de6; }\n.d3-bar-chart .bars .purple-bar {\n  fill: #6e53a3; }\n.d3-bar-chart .bars .purple-bar:hover {\n    fill: #634a92; }\n.tip-green {\n  border: 1px solid #00a859 !important; }\n.tip-green .tooltip-header {\n    color: #00a859; }\n.tip-blue {\n  border: 1px solid #00aeff !important; }\n.tip-blue .tooltip-header {\n    color: #00aeff; }\n.tip-purple {\n  border: 1px solid #6e53a3 !important; }\n.tip-purple .tooltip-header {\n    color: #6e53a3; }\n"

/***/ }),

/***/ "./src/app/styles/chart/barchart/barchart.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/styles/chart/barchart/barchart.component.ts ***!
  \*************************************************************/
/*! exports provided: BarchartComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BarchartComponent", function() { return BarchartComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var d3__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! d3 */ "./node_modules/d3/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var BarchartComponent = /** @class */ (function () {
    function BarchartComponent() {
        this.margin = { top: 20, bottom: 45, left: 30, right: 20 };
    }
    BarchartComponent.prototype.onResize = function () {
        if (this.data) {
            this.updateChart();
        }
    };
    BarchartComponent.prototype.ngOnInit = function () {
        this.createChart();
        if (this.data) {
            this.updateChart();
        }
    };
    BarchartComponent.prototype.createChart = function () {
        var element = this.chartContainer.nativeElement;
        this.width = element.offsetWidth - this.margin.left - this.margin.right;
        this.height = element.offsetHeight - this.margin.top - this.margin.bottom;
        this.svg = d3__WEBPACK_IMPORTED_MODULE_1__["select"](element)
            .append('svg')
            .attr('width', element.offsetWidth)
            .attr('height', element.offsetHeight);
        // define X & Y domains
        var xDomain = this.data.map(function (d) { return d[0]; });
        var xGroupDomain = ['0', '1', '2'];
        var yDomain = [0, 100];
        this.xScale = d3__WEBPACK_IMPORTED_MODULE_1__["scaleBand"]()
            .padding(0.1)
            .domain(xDomain)
            .rangeRound([0, this.width]);
        this.xGroups = d3__WEBPACK_IMPORTED_MODULE_1__["scaleBand"]()
            .padding(0.1)
            .domain(xGroupDomain)
            .rangeRound([0, this.xScale.bandwidth()]);
        this.yScale = d3__WEBPACK_IMPORTED_MODULE_1__["scaleLinear"]()
            .domain(yDomain)
            .range([this.height, 0]);
        // x & y axis
        this.xAxis = this.svg
            .append('g')
            .attr('class', 'axis axis-x')
            .attr('transform', "translate(" + this.margin.left + ", " + (this.margin.top + this.height) + ")")
            .call(d3__WEBPACK_IMPORTED_MODULE_1__["axisBottom"](this.xScale)
            .tickSize(0)
            .tickPadding(10));
        this.yAxis = this.svg
            .append('g')
            .attr('class', 'axis axis-y')
            .attr('transform', "translate(" + this.margin.left + ", " + this.margin.top + ")")
            .call(d3__WEBPACK_IMPORTED_MODULE_1__["axisLeft"](this.yScale)
            .tickSizeInner(-this.width)
            .tickSizeOuter(0)
            .tickPadding(10));
        // chart plot area
        this.chart = this.svg
            .append('g')
            .attr('class', 'bars')
            .attr('transform', "translate(" + this.margin.left + ", " + this.margin.top + ")");
        // Define the div for the tooltip
        this.tip = d3__WEBPACK_IMPORTED_MODULE_1__["select"]('body')
            .append('div')
            .attr('class', 'chart-tooltip')
            .style('opacity', 0);
    };
    BarchartComponent.prototype.updateChart = function () {
        var _this = this;
        var self = this;
        var barColors = ['green-bar', 'blue-bar', 'purple-bar'];
        var barTips = ['tip-green', 'tip-blue', 'tip-purple'];
        var barNames = ['Cardiology', 'Orthopedics', 'Oncology'];
        // update dimensions
        var element = this.chartContainer.nativeElement;
        this.width = element.offsetWidth - this.margin.left - this.margin.right;
        this.height = element.offsetHeight - this.margin.top - this.margin.bottom;
        this.svg.attr('width', element.offsetWidth).attr('height', element.offsetHeight);
        // update scales
        var xDomain = this.data.map(function (d) { return d[0]; });
        var xGroupDomain = ['0', '1', '2'];
        var yDomain = [0, 100];
        this.xScale = d3__WEBPACK_IMPORTED_MODULE_1__["scaleBand"]()
            .padding(0.1)
            .domain(xDomain)
            .rangeRound([0, this.width]);
        this.xGroups = d3__WEBPACK_IMPORTED_MODULE_1__["scaleBand"]()
            .padding(0.1)
            .domain(xGroupDomain)
            .rangeRound([0, this.xScale.bandwidth()]);
        this.yScale = d3__WEBPACK_IMPORTED_MODULE_1__["scaleLinear"]()
            .domain(yDomain)
            .range([this.height, 0]);
        // update x & y axis
        this.xAxis.call(d3__WEBPACK_IMPORTED_MODULE_1__["axisBottom"](this.xScale)
            .tickSize(0)
            .tickPadding(10));
        this.yAxis.call(d3__WEBPACK_IMPORTED_MODULE_1__["axisLeft"](this.yScale)
            .tickSizeInner(-this.width)
            .tickSizeOuter(0)
            .tickPadding(10));
        this.yAxis.select('.domain').remove();
        this.yAxis.selectAll('.tick:not(:first-of-type) line').attr('stroke-dasharray', '2,2');
        this.xAxis.selectAll('text').remove();
        this.xAxis.selectAll('.axis-label').remove();
        this.xAxis
            .selectAll('.tick')
            .append('foreignObject')
            .attr('class', 'axis-label')
            .attr('x', -(this.xScale.bandwidth() / 2))
            .attr('y', 10)
            .attr('width', this.xScale.bandwidth())
            .attr('height', 24)
            .html(function (d) { return d; });
        // update chart plot area
        this.svg.select('.bars').remove();
        this.chart = this.svg
            .append('g')
            .attr('class', 'bars')
            .attr('transform', "translate(" + this.margin.left + ", " + this.margin.top + ")");
        // add bar groups
        var bar = this.chart
            .selectAll('.bars')
            .data(this.data)
            .enter()
            .append('g')
            .attr('class', 'group')
            .attr('name', function (d) { return d[0]; })
            .attr('transform', function (d) {
            return 'translate(' + self.xScale(d[0]) + ',0)';
        });
        // add new bars
        bar
            .selectAll('rect')
            .data(function (d) {
            return d.slice(1);
        })
            .enter()
            .append('rect')
            .attr('class', function (d, i) { return barColors[i]; })
            .attr('x', function (d, i) { return self.xGroups(i); })
            .attr('width', this.xGroups.bandwidth())
            .attr('y', function (d) { return _this.yScale(d); })
            .attr('height', function (d) { return _this.height - _this.yScale(d); });
        // add mouseover tooltips
        bar
            .selectAll('rect')
            .on('mouseover', function (d, i) {
            var groupName = d3__WEBPACK_IMPORTED_MODULE_1__["select"](this.parentNode).attr('name');
            self.tip
                .transition()
                .duration(200)
                .style('opacity', 1)
                .attr('class', 'chart-tooltip ' + barTips[i]);
            self.tip
                .html('<div class="tooltip-header">' + barNames[i] + '</div>' + groupName + ': <strong>' + d + '</strong>')
                .style('left', d3__WEBPACK_IMPORTED_MODULE_1__["event"].pageX + 'px')
                .style('top', d3__WEBPACK_IMPORTED_MODULE_1__["event"].pageY - 28 + 'px');
        })
            .on('mouseout', function (d) {
            self.tip
                .transition()
                .duration(500)
                .style('opacity', 0);
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('chart'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], BarchartComponent.prototype, "chartContainer", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], BarchartComponent.prototype, "data", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('window:resize'),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], BarchartComponent.prototype, "onResize", null);
    BarchartComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'hc-demo-barchart',
            template: "<div class=\"d3-bar-chart\" #chart></div>",
            styles: [__webpack_require__(/*! ./barchart.component.scss */ "./src/app/styles/chart/barchart/barchart.component.scss")],
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None
        }),
        __metadata("design:paramtypes", [])
    ], BarchartComponent);
    return BarchartComponent;
}());



/***/ }),

/***/ "./src/app/styles/chart/chart-demo.component.html":
/*!********************************************************!*\
  !*** ./src/app/styles/chart/chart-demo.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ng-template #content let-close=\"close\" let-dismiss=\"dismiss\" let-data=\"data\">\n    <hc-modal>\n        <hc-modal-header>{{modalHeader}}</hc-modal-header>\n        <hc-modal-body>{{data}}</hc-modal-body>\n        <hc-modal-footer>\n            <button hc-button buttonStyle=\"link\" (click)=\"dismiss()\"> Cancel </button>\n            <button hc-button color=\"primary\" (click)=\"close()\"> OK </button>\n        </hc-modal-footer>\n    </hc-modal>\n</ng-template>\n\n<div class=\"demo-content\">\n    <h1>Charts and Data Visualization</h1>\n    <h6>Last updated {{lastModified | date:'longDate'}}</h6>\n\n    <hc-tile>\n        <h5>Overview</h5>\n        <p>Entire bookshelves could be filled with all that has been written about best practices for data visualization.\n            The styles presented here don't seek to rewrite any of those books, but instead are primarily aimed at maximizing\n            readability and consistency in our charts.  But if you are looking for an excellent, no-nonsense guide for improving\n            your visualizations, we highly recommend Scott Berinato's <a href=\"http://a.co/9uDIcKr\" target=\"blank\">Good Charts</a>.</p>\n    </hc-tile>\n\n    <hc-tile>\n        <div class=\"header-row\">\n            <span class=\"header-dropdown\" [hcPopover]=\"options\" popperPlacement=\"bottom\">\n                <h2 class=\"chart-header dropdown\">Patient Readmissions</h2>\n            </span>\n            <span class=\"header-right\">\n                <hc-icon fontSet=\"fa\" fontIcon=\"fa-share-alt\" (click)=\"chartShare(content,'Share Chart')\"></hc-icon>\n                <hc-icon fontSet=\"fa\" fontIcon=\"fa-info-circle\" (click)=\"chartInfo(content, 'Chart Information')\"></hc-icon>\n            </span>\n        </div>\n        <hc-popover-content #options>\n            <ul class=\"list-options\">\n                <li>Patient Readmissions</li>\n                <li><button>Inpatient Mortality Rate</button></li>\n                <li><button>Average Length of Stay</button></li>\n                <li><button>Time to Service</button></li>\n            </ul>\n        </hc-popover-content>\n        <div *ngIf=\"loading\" class=\"bar-loader\">\n            <hc-progress-spinner diameter=\"50\" color=\"green\"></hc-progress-spinner>\n        </div>\n        <div *ngIf=\"chartData\">\n            <hc-demo-barchart [data]=\"chartData\"></hc-demo-barchart>\n            <div class=\"swatch-row bar\">\n                <span class=\"swatch-label\"><span class=\"swatch green\"></span>Cardiology</span>\n                <span class=\"swatch-label\"><span class=\"swatch blue\"></span>Orthopedics</span>\n                <span class=\"swatch-label\"><span class=\"swatch purple\"></span>Oncology</span>\n            </div>\n        </div>\n    </hc-tile>\n\n    <hc-tile>\n        <h5>Chart Layout</h5>\n        <p>A strong line should be used for the primary axis. The secondary axis should not have a line, but include lighter dotted\n            grid lines for each tick.  <code>$chart-font-family</code> and <code>$chart-font-size</code> are used for ticks on each axis.\n            The primary axis labels may be truncated using ellipses or rotated for longer names.  The dotted grid lines should be set\n            to <code>attr(\"stroke-dasharray\", \"2,2\");</code>.</p>\n\n        <p>Charts should have a <code>&#x3C;h2&#x3E;</code> header that describes the data being visualized. Secondary information in the\n            header should be set to <code>font-weight: 300;</code>. Headers may also be used as dropdowns for users to select from a list of\n            visualizations to display.  The right side of chart headers may be used for a row of <code>hc-icon</code> elements for additional\n            functionality such as share, info, export, etc.\n        </p>\n        <div class=\"palette-row\">\n            <hc-swatch-demo-component hex=\"#333333\" name=\"axis-text\"></hc-swatch-demo-component>\n            <hc-swatch-demo-component hex=\"#333333\" name=\"axis-lines\"></hc-swatch-demo-component>\n            <hc-swatch-demo-component hex=\"#cccccc\" name=\"grid-lines\"></hc-swatch-demo-component>\n            <hc-swatch-demo-component hex=\"#a1a1a1\" name=\"chart-header-icons\"></hc-swatch-demo-component>\n        </div>\n    </hc-tile>\n\n    <hc-tile>\n        <h5>Data Colors</h5>\n        <p>To determine what colors should be used together in charts, you should determine what the data is trying to convey. If\n            it’s a normal reporting chart for general use, blues and cool colors should be used to keep consistency. If the data in\n            a normal report chart needs separation, use a mix of <a routerLink=\"/styles/color\" routerLinkActive=\"active\">HC colors</a>. Grays should be used for either showing a benchmark\n            or previous years to contrast the difference of the current year.</p>\n    </hc-tile>\n\n    <hc-tile>\n        <div class=\"header-row\">\n            <h2 class=\"chart-header\">Utilization <span class=\"light\">(over time)</span></h2>\n            <span class=\"header-right\">\n                <hc-icon fontSet=\"fa\" fontIcon=\"fa-share-alt\" (click)=\"chartShare(content,'Share Chart')\"></hc-icon>\n                <hc-icon fontSet=\"fa\" fontIcon=\"fa-info-circle\" (click)=\"chartInfo(content, 'Chart Information')\"></hc-icon>\n            </span>\n        </div>\n        <div *ngIf=\"loading\" class=\"bar-loader\">\n            <hc-progress-spinner diameter=\"50\" color=\"purple\"></hc-progress-spinner>\n        </div>\n        <div *ngIf=\"lineData\">\n            <hc-demo-linechart [data]=\"lineData\"></hc-demo-linechart>\n            <div class=\"swatch-row\">\n                <span class=\"swatch-label\"><span class=\"swatch purple\"></span>Millrock Hospital</span>\n                <span class=\"swatch-label\"><span class=\"swatch gray\"></span>Touchstone Benchmark</span>\n            </div>\n        </div>\n    </hc-tile>\n\n    <hc-tile>\n        <h5>Line Charts</h5>\n        <p>Line plots should have a thickeness of 2px. All data points should be indicated with a 6px radius circle.  The circle\n            should have the same color as the plot and a 2px white stroke. Tooltips should be included on the circles so that\n            users can hover for more detailed information.\n        </p>\n    </hc-tile>\n\n    <hc-tile>\n        <h5>Tooltips</h5>\n        <p>All charts should include the ability for a user to hover over a data point and view more information. The <code>charts-tooltip</code>\n            css class is included for tooltip formatting. Tooltips should include the data set name as a header, the domain name as a label,\n            and then the value in bold text.  The border of the tooltip and the header name should be set to the same color as the data element\n            being highlighted. The highlighted element should have its color dimmed using a 5% <code>darken()</code>.\n        </p>\n\n        <pre><code>&#x3C;div class=&#x27;chart-tooltip&#x27;&#x3E;\n    &#x3C;div class=&#x27;tooltip-header&#x27;&#x3E;Data Set Name:&#x3C;/div&#x3E;\n    Domain Label: &#x3C;strong&#x3E;Data Value&#x3C;/strong&#x3E;\n&#x3C;/div&#x3E;</code></pre>\n    </hc-tile>\n\n</div>\n"

/***/ }),

/***/ "./src/app/styles/chart/chart-demo.component.scss":
/*!********************************************************!*\
  !*** ./src/app/styles/chart/chart-demo.component.scss ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* set standard relative layering for components */\n/* set standard relative layering for components */\n/* set standard relative layering for components */\n.chart-tooltip {\n  position: absolute;\n  font-size: 0.85714286rem;\n  line-height: 1.4;\n  display: block;\n  padding: 10px 15px 10px 10px;\n  background: #fff;\n  color: #6d6e70;\n  border: 1px solid #6d6e70;\n  border-radius: 5px;\n  pointer-events: none;\n  box-shadow: 1px 2px 6px rgba(0, 0, 0, 0.18); }\n.chart-tooltip .tooltip-header {\n    font-size: 0.92857143rem;\n    font-weight: 600; }\n/* set standard relative layering for components */\n/* set standard relative layering for components */\n/* set standard relative layering for components */\n.bar-loader {\n  height: 400px; }\n.swatch-label {\n  font-size: 0.78571429rem;\n  color: #6d6e70;\n  display: flex;\n  margin: 5px 15px; }\n.swatch {\n  display: inline-block;\n  width: 20px;\n  height: 12px;\n  margin-right: 10px;\n  border-radius: 2px; }\n.swatch.green {\n  background-color: #00a859; }\n.swatch.blue {\n  background-color: #00aeff; }\n.swatch.purple {\n  background-color: #6e53a3; }\n.swatch.gray {\n  background-color: #cccccc; }\n.swatch-row {\n  display: flex;\n  flex-wrap: wrap;\n  align-items: center;\n  justify-content: center;\n  margin-top: 10px; }\n.swatch-row.bar {\n  margin-top: 0 !important; }\n.palette-row {\n  display: flex; }\n.palette-row + .palette-row {\n    margin-top: 40px; }\n@media (max-width: 576px) {\n  .palette-row {\n    display: block; }\n  .header-right {\n    display: none; } }\nhc-swatch-demo-component {\n  flex: 1 1 auto;\n  width: 14%;\n  margin-right: 2%; }\n.chart-header {\n  display: inline; }\n.chart-header .light {\n    font-weight: 300; }\n.chart-header.dropdown:after {\n    content: '\\f078';\n    font-family: FontAwesome;\n    font-size: 20px;\n    color: #00aeff;\n    margin-left: 20px;\n    vertical-align: text-top;\n    font-weight: 400; }\n.header-row {\n  display: flex;\n  align-items: baseline;\n  color: #a1a1a1;\n  margin-bottom: 10px; }\n.header-dropdown {\n  cursor: pointer; }\n.header-right {\n  margin-left: auto;\n  margin-right: 0; }\n.header-right hc-icon {\n    margin-left: 20px;\n    cursor: pointer; }\n.header-right hc-icon:hover {\n      color: #7b7b7b; }\n.hc-modal-body {\n  line-height: 1.4; }\n"

/***/ }),

/***/ "./src/app/styles/chart/chart-demo.component.ts":
/*!******************************************************!*\
  !*** ./src/app/styles/chart/chart-demo.component.ts ***!
  \******************************************************/
/*! exports provided: ChartDemoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChartDemoComponent", function() { return ChartDemoComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _healthcatalyst_cashmere__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @healthcatalyst/cashmere */ "./dist/cashmere/esm5/healthcatalyst-cashmere.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ChartDemoComponent = /** @class */ (function () {
    function ChartDemoComponent(modalService) {
        this.modalService = modalService;
        this.lastModified = new Date(document.lastModified);
        this.loading = true;
        this.modalHeader = 'Chart Information';
        this.hospitals = ['Millrock Physician Group', 'Memorial Physician Group', 'St. Johns Physician Group', 'University Physician Group'];
    }
    ChartDemoComponent.prototype.ngOnInit = function () {
        var _this = this;
        // give everything a chance to get loaded before starting the animation to reduce choppiness
        setTimeout(function () {
            _this.generateData();
            _this.loading = false;
        }, 2000);
    };
    ChartDemoComponent.prototype.generateData = function () {
        this.chartData = [];
        this.lineData = [];
        for (var i = 0; i < 4; i++) {
            this.chartData.push([
                this.hospitals[i],
                Math.floor(Math.random() * 100),
                Math.floor(Math.random() * 100),
                Math.floor(Math.random() * 100)
            ]);
        }
        for (var j = 0; j < 10 + Math.floor(Math.random() * 15); j++) {
            this.lineData.push([
                new Date(2016 + Math.floor(j / 12), j % 12),
                Math.floor(Math.random() * 100),
                40 + Math.floor(Math.random() * 20)
            ]);
        }
    };
    ChartDemoComponent.prototype.chartInfo = function (content, headerName) {
        var options = {
            data: "This is an example of a supporting info box associated with a chart. An info box can be used to provide\n                supporting information about the data set, algorithms used, how the data was collected, etc.  Viewers new\n                to an application may not be as willing to trust data being presented at face value, so info boxes like this\n                are a way to alleviate concerns about data quality.",
            size: 'md'
        };
        this.modalHeader = headerName;
        this.modalService.open(content, options);
    };
    ChartDemoComponent.prototype.chartShare = function (content, headerName) {
        var options = {
            data: "Additional options for charts may be included in the header icon row.  This may include functionality\n                for sharing, exporting, etc.",
            size: 'md'
        };
        this.modalHeader = headerName;
        this.modalService.open(content, options);
    };
    ChartDemoComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'hc-chart-demo',
            template: __webpack_require__(/*! ./chart-demo.component.html */ "./src/app/styles/chart/chart-demo.component.html"),
            styles: [__webpack_require__(/*! ./chart-demo.component.scss */ "./src/app/styles/chart/chart-demo.component.scss")]
        }),
        __metadata("design:paramtypes", [_healthcatalyst_cashmere__WEBPACK_IMPORTED_MODULE_1__["ModalService"]])
    ], ChartDemoComponent);
    return ChartDemoComponent;
}());



/***/ }),

/***/ "./src/app/styles/chart/linechart/linechart.component.scss":
/*!*****************************************************************!*\
  !*** ./src/app/styles/chart/linechart/linechart.component.scss ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* set standard relative layering for components */\n/* set standard relative layering for components */\n/* set standard relative layering for components */\n.chart-tooltip {\n  position: absolute;\n  font-size: 0.85714286rem;\n  line-height: 1.4;\n  display: block;\n  padding: 10px 15px 10px 10px;\n  background: #fff;\n  color: #6d6e70;\n  border: 1px solid #6d6e70;\n  border-radius: 5px;\n  pointer-events: none;\n  box-shadow: 1px 2px 6px rgba(0, 0, 0, 0.18); }\n.chart-tooltip .tooltip-header {\n    font-size: 0.92857143rem;\n    font-weight: 600; }\n/* set standard relative layering for components */\n/* set standard relative layering for components */\n.d3-line-chart {\n  width: 100%;\n  height: 400px; }\n.d3-line-chart .axis line {\n  stroke: #cccccc; }\n.d3-line-chart .tick:first-of-type line {\n  stroke: #333; }\n.d3-line-chart .axis text {\n  fill: #333;\n  font-family: \"Open Sans\", \"Helvetica Neue\", Helvetica, Arial, sans-serif;\n  font-size: 11px; }\n.tip-purple {\n  border: 1px solid #6e53a3; }\n.tip-purple .tooltip-header {\n    color: #6e53a3; }\n.tip-gray {\n  border: 1px solid #6d6e70; }\n.tip-gray .tooltip-header {\n    color: #6d6e70; }\n.d3-line-chart .primary-line {\n  stroke: #6e53a3; }\n.d3-line-chart .primary-scatter circle {\n  fill: #6e53a3;\n  stroke: #fff;\n  stroke-width: 2px; }\n.d3-line-chart .primary-scatter circle:hover {\n    fill: #4c3970; }\n.d3-line-chart .secondary-line {\n  stroke: #cccccc; }\n.d3-line-chart .secondary-scatter circle {\n  fill: #cccccc;\n  stroke: #fff;\n  stroke-width: 2px; }\n.d3-line-chart .secondary-scatter circle:hover {\n    fill: #a6a6a6; }\n"

/***/ }),

/***/ "./src/app/styles/chart/linechart/linechart.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/styles/chart/linechart/linechart.component.ts ***!
  \***************************************************************/
/*! exports provided: LinechartComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LinechartComponent", function() { return LinechartComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var d3__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! d3 */ "./node_modules/d3/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var LinechartComponent = /** @class */ (function () {
    function LinechartComponent() {
        this.margin = { top: 20, bottom: 60, left: 40, right: 20 };
    }
    LinechartComponent.prototype.onResize = function () {
        this.updateChart();
    };
    LinechartComponent.prototype.ngOnInit = function () {
        this.createChart();
        if (this.data) {
            this.updateChart();
        }
    };
    LinechartComponent.prototype.createChart = function () {
        var element = this.chartContainer.nativeElement;
        var self = this;
        this.width = element.offsetWidth - this.margin.left - this.margin.right;
        this.height = element.offsetHeight - this.margin.top - this.margin.bottom;
        this.svg = d3__WEBPACK_IMPORTED_MODULE_1__["select"](element)
            .append('svg')
            .attr('width', element.offsetWidth)
            .attr('height', element.offsetHeight);
        // create scales
        this.xScale = d3__WEBPACK_IMPORTED_MODULE_1__["scaleTime"]().range([0, this.width]);
        this.yScale = d3__WEBPACK_IMPORTED_MODULE_1__["scaleLinear"]().range([this.height, 0]);
        // x & y axis
        this.xAxis = this.svg
            .append('g')
            .attr('class', 'axis axis-x')
            .attr('transform', "translate(" + this.margin.left + ", " + (this.margin.top + this.height) + ")")
            .call(d3__WEBPACK_IMPORTED_MODULE_1__["axisBottom"](this.xScale));
        this.yAxis = this.svg
            .append('g')
            .attr('class', 'axis axis-y')
            .attr('transform', "translate(" + this.margin.left + ", " + this.margin.top + ")")
            .call(d3__WEBPACK_IMPORTED_MODULE_1__["axisLeft"](this.yScale));
    };
    LinechartComponent.prototype.updateChart = function () {
        // update dimensions
        var element = this.chartContainer.nativeElement;
        var self = this;
        this.width = element.offsetWidth - this.margin.left - this.margin.right;
        this.height = element.offsetHeight - this.margin.top - this.margin.bottom;
        this.svg.attr('width', element.offsetWidth).attr('height', element.offsetHeight);
        // update scales
        this.xScale = d3__WEBPACK_IMPORTED_MODULE_1__["scaleTime"]().range([0, this.width]);
        this.yScale = d3__WEBPACK_IMPORTED_MODULE_1__["scaleLinear"]().range([this.height, 0]);
        this.xScale.domain(d3__WEBPACK_IMPORTED_MODULE_1__["extent"](this.data, function (d) {
            return d[0];
        }));
        this.yScale.domain([0, 100]);
        this.xAxis.call(d3__WEBPACK_IMPORTED_MODULE_1__["axisBottom"](this.xScale)
            .tickSize(0)
            .tickFormat(d3__WEBPACK_IMPORTED_MODULE_1__["timeFormat"]('%b %Y')));
        this.yAxis.call(d3__WEBPACK_IMPORTED_MODULE_1__["axisLeft"](this.yScale)
            .tickSizeInner(-this.width)
            .tickSizeOuter(0)
            .tickPadding(10));
        this.yAxis.select('.domain').remove();
        this.yAxis.selectAll('.tick:not(:first-of-type) line').attr('stroke-dasharray', '2,2');
        this.xAxis.selectAll('text').attr('transform', function (d) {
            return 'translate(' + (10 + this.getBBox().height * -2) + ',' + (10 + this.getBBox().height) + ')rotate(-60)';
        });
        var line = d3__WEBPACK_IMPORTED_MODULE_1__["line"]()
            .x(function (d) {
            return self.xScale(d[0]);
        })
            .y(function (d) {
            return self.yScale(d[1]);
        });
        var line2 = d3__WEBPACK_IMPORTED_MODULE_1__["line"]()
            .x(function (d) {
            return self.xScale(d[0]);
        })
            .y(function (d) {
            return self.yScale(d[2]);
        });
        // secondary line
        this.svg.select('.secondary-line').remove();
        this.svg
            .append('path')
            .attr('class', 'secondary-line')
            .attr('transform', "translate(" + this.margin.left + ", " + this.margin.top + ")")
            .attr('fill', 'none')
            .attr('stroke-linejoin', 'round')
            .attr('stroke-linecap', 'round')
            .attr('stroke-width', 2)
            .datum(self.data)
            .attr('d', line2);
        // Add the secondary line scatterplot
        this.svg.select('.secondary-scatter').remove();
        this.dotsSecondary = this.svg
            .append('g')
            .attr('class', 'secondary-scatter')
            .attr('transform', "translate(" + this.margin.left + ", " + this.margin.top + ")");
        this.dotsSecondary
            .selectAll('dot')
            .data(self.data)
            .enter()
            .append('circle')
            .attr('r', 6)
            .attr('cx', function (d) {
            return self.xScale(d[0]);
        })
            .attr('cy', function (d) {
            return self.yScale(d[2]);
        });
        // primary line
        this.svg.select('.primary-line').remove();
        this.chart = this.svg
            .append('path')
            .attr('class', 'primary-line')
            .attr('transform', "translate(" + this.margin.left + ", " + this.margin.top + ")")
            .attr('fill', 'none')
            .attr('stroke-linejoin', 'round')
            .attr('stroke-linecap', 'round')
            .attr('stroke-width', 2)
            .datum(self.data)
            .attr('d', line);
        // Add the primary line scatterplot
        this.svg.select('.primary-scatter').remove();
        this.dotsPrimary = this.svg
            .append('g')
            .attr('class', 'primary-scatter')
            .attr('transform', "translate(" + this.margin.left + ", " + this.margin.top + ")");
        this.dotsPrimary
            .selectAll('dot')
            .data(self.data)
            .enter()
            .append('circle')
            .attr('r', 6)
            .attr('cx', function (d) {
            return self.xScale(d[0]);
        })
            .attr('cy', function (d) {
            return self.yScale(d[1]);
        });
        var tip = d3__WEBPACK_IMPORTED_MODULE_1__["select"]('.chart-tooltip');
        // add mouseover tooltips to primary scatterplot
        this.dotsPrimary
            .selectAll('circle')
            .on('mouseover', function (d) {
            var tempDate = new Date(d[0]);
            var dateArray = tempDate.toString().split(' ');
            tip
                .transition()
                .duration(200)
                .style('opacity', 1)
                .attr('class', 'chart-tooltip tip-purple');
            tip
                .html('<div class="tooltip-header">Millrock Hospital</div>' +
                dateArray[1] +
                ' ' +
                dateArray[3] +
                ': <strong>' +
                d[1] +
                '</strong>')
                .style('left', d3__WEBPACK_IMPORTED_MODULE_1__["event"].pageX + 15 + 'px')
                .style('top', d3__WEBPACK_IMPORTED_MODULE_1__["event"].pageY - 28 + 'px');
        })
            .on('mouseout', function (d) {
            tip
                .transition()
                .duration(500)
                .style('opacity', 0);
        });
        // add mouseover tooltips to secondary scatterplot
        this.dotsSecondary
            .selectAll('circle')
            .on('mouseover', function (d) {
            var tempDate = new Date(d[0]);
            var dateArray = tempDate.toString().split(' ');
            tip
                .transition()
                .duration(200)
                .style('opacity', 1)
                .attr('class', 'chart-tooltip tip-gray');
            tip
                .html('<div class="tooltip-header">Touchstone Benchmark</div>' +
                dateArray[1] +
                ' ' +
                dateArray[3] +
                ': <strong>' +
                d[2] +
                '</strong>')
                .style('left', d3__WEBPACK_IMPORTED_MODULE_1__["event"].pageX + 15 + 'px')
                .style('top', d3__WEBPACK_IMPORTED_MODULE_1__["event"].pageY - 28 + 'px');
        })
            .on('mouseout', function (d) {
            tip
                .transition()
                .duration(500)
                .style('opacity', 0);
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('chart'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], LinechartComponent.prototype, "chartContainer", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], LinechartComponent.prototype, "data", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('window:resize'),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], LinechartComponent.prototype, "onResize", null);
    LinechartComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'hc-demo-linechart',
            template: "<div class=\"d3-line-chart\" #chart></div>",
            styles: [__webpack_require__(/*! ./linechart.component.scss */ "./src/app/styles/chart/linechart/linechart.component.scss")],
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None
        }),
        __metadata("design:paramtypes", [])
    ], LinechartComponent);
    return LinechartComponent;
}());



/***/ }),

/***/ "./src/app/styles/code/code-demo.component.html":
/*!******************************************************!*\
  !*** ./src/app/styles/code/code-demo.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"demo-content\">\n    <h1>Code Display Guidelines</h1>\n    <h6>Last updated {{lastModified | date:'longDate'}}</h6>\n\n    <hc-tile>\n        <h5>Overview</h5>\n        <p>Source code often needs to be included within app documentation or within apps themselves.\n            The following are guidelines on how to style code used in these instances, both inline or\n            within larger code blocks. The primary goal of code styling is differentiate it from the\n            surrounding body copy and ensure it is easily readable. Both types of code have a background-color\n            set to <code>$block-text-background</code>.</p>\n    </hc-tile>\n\n    <hc-tile>\n        <h5>Elements</h5>\n        <table class=\"api-table\">\n            <tr>\n                <td>\n                    <code>Inline code</code>\n                </td>\n                <td>\n                    <code>&lt;code&gt;&lt;/code&gt;</code>\n                </td>\n                <td>\n                    <ul>\n                        <li><span class=\"type-label\">Font-size</span>1rem</li>\n                        <li><span class=\"type-label\">Line Height</span>140%</li>\n                    </ul>\n                </td>\n                <td>\n                    <ul>\n                        <li><span class=\"type-label\">Weight</span>400</li>\n                        <li><span class=\"type-label\">Color</span>$magenta</li>\n                    </ul>\n                </td>\n            </tr>\n            <tr>\n                <td>\n                    <pre><code>Code blocks</code></pre>\n                </td>\n                <td>\n                    <code>&lt;pre&gt;&lt;code&gt;&lt;/code&gt;&lt;/pre&gt;</code>\n                </td>\n                <td>\n                    <ul>\n                        <li><span class=\"type-label\">Font-size</span>1rem</li>\n                        <li><span class=\"type-label\">Line Height</span>140%</li>\n                    </ul>\n                </td>\n                <td>\n                    <ul>\n                        <li><span class=\"type-label\">Weight</span>400</li>\n                        <li><span class=\"type-label\">Color</span>$text</li>\n                    </ul>\n                </td>\n            </tr>\n        </table>\n    </hc-tile>\n\n    <div [hcMarkdown]=\"document\"></div>\n</div>\n"

/***/ }),

/***/ "./src/app/styles/code/code-demo.component.ts":
/*!****************************************************!*\
  !*** ./src/app/styles/code/code-demo.component.ts ***!
  \****************************************************/
/*! exports provided: CodeDemoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CodeDemoComponent", function() { return CodeDemoComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var CodeDemoComponent = /** @class */ (function () {
    function CodeDemoComponent() {
        this.lastModified = new Date(document.lastModified);
        this.document = __webpack_require__(/*! raw-loader!../../../../guides/styles/code.md */ "./node_modules/raw-loader/index.js!./guides/styles/code.md");
    }
    CodeDemoComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'hc-code',
            template: __webpack_require__(/*! ./code-demo.component.html */ "./src/app/styles/code/code-demo.component.html"),
            styles: ['.api-table li { margin: 15px 0; }']
        })
    ], CodeDemoComponent);
    return CodeDemoComponent;
}());



/***/ }),

/***/ "./src/app/styles/color/color-demo.component.html":
/*!********************************************************!*\
  !*** ./src/app/styles/color/color-demo.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"demo-content\">\n    <h1>Health Catalyst Brand Colors</h1>\n    <h6>Last updated {{lastModified | date:'longDate'}}</h6>\n\n    <hc-tile>\n        <h5>Overview</h5>\n        <p>Following are the suggested colors for use within your application. Some expansion beyond the general palette is\n        acceptable as long as the\n        additional colors are similar in value/saturation. It's recommended that you import the colors and leverage the\n        sass variables.</p>\n    </hc-tile>\n\n    <hc-tile>\n        <h5>Primary Palette</h5>\n        <p>The primary colors used for branding, calls to action (buttons, links, etc), and other accents.</p>\n        <div class=\"palette-row primary\">\n            <hc-swatch-demo-component hex=\"#00aeff\" name=\"blue\" [isLarge]=\"true\"></hc-swatch-demo-component>\n            <hc-swatch-demo-component hex=\"#00a859\" name=\"green\" [isLarge]=\"true\"></hc-swatch-demo-component>\n            <hc-swatch-demo-component hex=\"#6e53a3\" name=\"purple\" [isLarge]=\"true\"></hc-swatch-demo-component>\n            <hc-swatch-demo-component hex=\"#f13c45\" name=\"red\" [isLarge]=\"true\"></hc-swatch-demo-component>\n            <hc-swatch-demo-component hex=\"#f8961d\" name=\"orange\" [isLarge]=\"true\"></hc-swatch-demo-component>\n        </div>\n    </hc-tile>\n\n    <hc-tile>\n        <h5>Neutral Palette</h5>\n        <p>The colors used for backgrounds, text, etc.</p>\n        <div class=\"palette-row\">\n            <hc-swatch-demo-component hex=\"#ffffff\" name=\"white\" [needsBorder]=\"true\"></hc-swatch-demo-component>\n            <hc-swatch-demo-component hex=\"#000000\" name=\"black\"></hc-swatch-demo-component>\n            <hc-swatch-demo-component hex=\"#333333\" name=\"offblack\"></hc-swatch-demo-component>\n            <hc-swatch-demo-component hex=\"rgba(0, 0, 0, 0.1)\" name=\"shadow\"></hc-swatch-demo-component>\n            <hc-swatch-demo-component hex=\"#006d9a\" name=\"dark-blue\"></hc-swatch-demo-component>\n            <hc-swatch-demo-component hex=\"#384655\" name=\"charcoal-blue\"></hc-swatch-demo-component>\n        </div>\n        <div class=\"palette-row\">\n            <hc-swatch-demo-component hex=\"#f0f3f6\" name=\"slate-gray-100\"></hc-swatch-demo-component>\n            <hc-swatch-demo-component hex=\"#d7dde4\" name=\"slate-gray-200\"></hc-swatch-demo-component>\n            <hc-swatch-demo-component hex=\"#c0c5cc\" name=\"slate-gray-300\"></hc-swatch-demo-component>\n            <hc-swatch-demo-component hex=\"#708090\" name=\"slate-gray-400\"></hc-swatch-demo-component>\n            <hc-swatch-demo-component hex=\"#5e676f\" name=\"slate-gray-500\"></hc-swatch-demo-component>\n            <hc-swatch-demo-component hex=\"#4f565c\" name=\"slate-gray-600\"></hc-swatch-demo-component>\n        </div>\n        <div class=\"palette-row\">\n            <hc-swatch-demo-component hex=\"#f1f1f1\" name=\"gray-100\"></hc-swatch-demo-component>\n            <hc-swatch-demo-component hex=\"#e0e0e0\" name=\"gray-200\"></hc-swatch-demo-component>\n            <hc-swatch-demo-component hex=\"#cccccc\" name=\"gray-300\"></hc-swatch-demo-component>\n            <hc-swatch-demo-component hex=\"#a1a1a1\" name=\"gray-400\"></hc-swatch-demo-component>\n            <hc-swatch-demo-component hex=\"#6d6e70\" name=\"gray-500\"></hc-swatch-demo-component>\n            <hc-swatch-demo-component hex=\"#515353\" name=\"gray-600\"></hc-swatch-demo-component>\n        </div>\n    </hc-tile>\n\n    <hc-tile>\n        <h5>Secondary Palette</h5>\n        <p>Additional options for accent colors.</p>\n        <div class=\"palette-row\">\n            <hc-swatch-demo-component hex=\"#951c1e\" name=\"ruby-red\"></hc-swatch-demo-component>\n            <hc-swatch-demo-component hex=\"#cc2027\" name=\"deep-red\"></hc-swatch-demo-component>\n            <hc-swatch-demo-component hex=\"#f05323\" name=\"red-orange\"></hc-swatch-demo-component>\n            <hc-swatch-demo-component hex=\"#a94c9d\" name=\"magenta\"></hc-swatch-demo-component>\n            <hc-swatch-demo-component hex=\"#ef4767\" name=\"pink\"></hc-swatch-demo-component>\n            <hc-swatch-demo-component hex=\"#f8c8db\" name=\"light-pink\"></hc-swatch-demo-component>\n        </div>\n        <div class=\"palette-row\">\n            <hc-swatch-demo-component hex=\"#007bff\" name=\"azure\"></hc-swatch-demo-component>\n            <hc-swatch-demo-component hex=\"#00acac\" name=\"teal\"></hc-swatch-demo-component>\n            <hc-swatch-demo-component hex=\"#006c4e\" name=\"dark-green\"></hc-swatch-demo-component>\n            <hc-swatch-demo-component hex=\"#9fd4ae\" name=\"light-green\"></hc-swatch-demo-component>\n            <hc-swatch-demo-component hex=\"#553e36\" name=\"brown\"></hc-swatch-demo-component>\n            <hc-swatch-demo-component hex=\"#776c7f\" name=\"purple-gray\"></hc-swatch-demo-component>\n        </div>\n        <div class=\"palette-row\">\n            <hc-swatch-demo-component hex=\"#f5ed56\" name=\"yellow\"></hc-swatch-demo-component>\n            <hc-swatch-demo-component hex=\"#e7c447\" name=\"yellow-orange\"></hc-swatch-demo-component>\n            <hc-swatch-demo-component hex=\"#ebba82\" name=\"tan\"></hc-swatch-demo-component>\n            <hc-swatch-demo-component hex=\"\" name=\"\"></hc-swatch-demo-component>\n            <hc-swatch-demo-component hex=\"\" name=\"\"></hc-swatch-demo-component>\n            <hc-swatch-demo-component hex=\"\" name=\"\"></hc-swatch-demo-component>\n        </div>\n    </hc-tile>\n\n    <hc-tile>\n        <h5>General Color Variables</h5>\n        <p class=\"description\">\n            Some general-use color variables, referencing variables above, to decouple color name from an intended purpose.\n        </p>\n\n        <ul class=\"color-var-list\">\n            <li><span class=\"mini-swatch\" [style.backgroundColor]=\"'#00aeff'\"></span><strong>$primary-brand</strong> - $blue\n            </li>\n            <li><span class=\"mini-swatch\" [style.backgroundColor]=\"'#00a859'\"></span><strong>$primary-action</strong> -\n                $green\n            </li>\n            <li><span class=\"mini-swatch\" [style.backgroundColor]=\"'#6e53a3'\"></span><strong>$primary-alt-action</strong> -\n                $purple\n            </li>\n            <li><span class=\"mini-swatch\" [style.backgroundColor]=\"'#f13c45'\"></span><strong>$destructive-action</strong> -\n                $red\n            </li>\n            <li><span class=\"mini-swatch\" [style.backgroundColor]=\"'#a1a1a1'\"></span><strong>$neutral-action</strong> -\n                $gray-400\n            </li>\n            <li><span class=\"mini-swatch\" [style.backgroundColor]=\"'#cc2027'\"></span><strong>$error</strong> - $deep-red\n            </li>\n            <li><span class=\"mini-swatch\" [style.backgroundColor]=\"'#333333'\"></span><strong>$text</strong> - $offblack</li>\n        </ul>\n    </hc-tile>\n\n    <hc-tile>\n        <h5>Stratifying and Adding Colors</h5>\n        <p class=\"description\">\n            There may be times that a product will need to expand the color palette, or use a variation on\n            exisiting colors. In these cases we recommend one of two approaches:\n        </p>\n\n        <ol>\n            <li>If importing the sass variables into your application, first try manipulating an existing color variable\n                using the built in sass functions\n                <code>darken()</code> or <code>lighten()</code>, or the library provided <code>shade()</code> or <code>tint()</code>\n                functions.\n\n                <pre><code>&#x00040;import &quot;../colors&quot;;\n\n.my-component &#123;\n    background-color: darken($slate-gray-100, 5%);\n    color: tint($dark-blue, 5%);\n&#125;</code></pre>\n\n            </li>\n            <li>If that doesn't suffice, or you are not using the sass variables, try using\n                <a href=\"https://coolors.co/6e53a3-d7dde4-00aeff-00a859-006d9a\" target=\"_blank\">coolors.co</a>\n                to help you stratify the base colors above or to generate new colors that fit within the color scheme. This\n                color tool will also help you determine when you should use dark or light text on top of your color.\n            </li>\n        </ol>\n    </hc-tile>\n\n</div>\n"

/***/ }),

/***/ "./src/app/styles/color/color-demo.component.scss":
/*!********************************************************!*\
  !*** ./src/app/styles/color/color-demo.component.scss ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* set standard relative layering for components */\n/* set standard relative layering for components */\n/* set standard relative layering for components */\n.palette-row {\n  display: flex; }\n.palette-row + .palette-row {\n    margin-top: 40px; }\n@media (max-width: 576px) {\n  .palette-row {\n    display: block; } }\nhc-swatch-demo-component {\n  flex: 1 1 auto;\n  width: 14%;\n  margin-right: 2%; }\n.primary .swatch-container {\n  width: 18%;\n  margin-right: 2%; }\n.primary .swatch-container:last-child {\n    margin-right: 0; }\n.swatch-stack {\n  width: 45%;\n  margin-right: 10%; }\n.swatch-stack:last-child {\n    margin-right: 0; }\n.swatch-stack .swatch-container {\n    width: 100%;\n    text-align: right;\n    display: flex; }\n.swatch-stack .swatch {\n    flex: 1 1 0;\n    margin-left: 10px; }\n.color-var-list li {\n  margin: 10px 0 10px 24px; }\n.color-var-list .mini-swatch {\n  display: inline-block;\n  height: 30px;\n  width: 100px;\n  position: relative;\n  top: 10px;\n  border-radius: 5px;\n  margin-right: 10px; }\n.color-var-list .color-ref {\n  color: #a1a1a1; }\n"

/***/ }),

/***/ "./src/app/styles/color/color-demo.component.ts":
/*!******************************************************!*\
  !*** ./src/app/styles/color/color-demo.component.ts ***!
  \******************************************************/
/*! exports provided: ColorDemoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ColorDemoComponent", function() { return ColorDemoComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var ColorDemoComponent = /** @class */ (function () {
    function ColorDemoComponent() {
        this.lastModified = new Date(document.lastModified);
    }
    ColorDemoComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'hc-color-demo',
            template: __webpack_require__(/*! ./color-demo.component.html */ "./src/app/styles/color/color-demo.component.html"),
            styles: [__webpack_require__(/*! ./color-demo.component.scss */ "./src/app/styles/color/color-demo.component.scss")]
        })
    ], ColorDemoComponent);
    return ColorDemoComponent;
}());



/***/ }),

/***/ "./src/app/styles/color/swatch-demo.component.html":
/*!*********************************************************!*\
  !*** ./src/app/styles/color/swatch-demo.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"swatch-container\">\n    <div class=\"swatch\" [ngClass]=\"{'large': isLarge, 'add-border': needsBorder}\" [style.backgroundColor]=\"hex\"></div>\n    <div *ngIf=\"name\">${{name}}</div>\n    <div class=\"hex\">{{hex}}</div>\n</div>"

/***/ }),

/***/ "./src/app/styles/color/swatch-demo.component.scss":
/*!*********************************************************!*\
  !*** ./src/app/styles/color/swatch-demo.component.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".swatch-container {\n  text-align: center;\n  width: 100%;\n  margin-top: 15px; }\n  .swatch-container .hex {\n    font-size: 13px;\n    line-height: 1.4;\n    color: #a1a1a1; }\n  .swatch-container .swatch {\n    height: 50px;\n    border-radius: 5px;\n    margin-bottom: 5px; }\n  .swatch-container .swatch.add-border {\n      border: 1px solid #e0e0e0; }\n  .swatch-container .swatch.large {\n      height: 100px; }\n"

/***/ }),

/***/ "./src/app/styles/color/swatch-demo.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/styles/color/swatch-demo.component.ts ***!
  \*******************************************************/
/*! exports provided: SwatchDemoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SwatchDemoComponent", function() { return SwatchDemoComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SwatchDemoComponent = /** @class */ (function () {
    function SwatchDemoComponent() {
        this.isLarge = false;
        this.needsBorder = false;
    }
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], SwatchDemoComponent.prototype, "name", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], SwatchDemoComponent.prototype, "hex", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], SwatchDemoComponent.prototype, "isLarge", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], SwatchDemoComponent.prototype, "needsBorder", void 0);
    SwatchDemoComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'hc-swatch-demo-component',
            template: __webpack_require__(/*! ./swatch-demo.component.html */ "./src/app/styles/color/swatch-demo.component.html"),
            styles: [__webpack_require__(/*! ./swatch-demo.component.scss */ "./src/app/styles/color/swatch-demo.component.scss")]
        })
    ], SwatchDemoComponent);
    return SwatchDemoComponent;
}());



/***/ }),

/***/ "./src/app/styles/error/error-pages.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/styles/error/error-pages.component.ts ***!
  \*******************************************************/
/*! exports provided: ErrorPagesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErrorPagesComponent", function() { return ErrorPagesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var ErrorPagesComponent = /** @class */ (function () {
    function ErrorPagesComponent() {
        this.document = __webpack_require__(/*! raw-loader!../../../../guides/styles/error-pages.md */ "./node_modules/raw-loader/index.js!./guides/styles/error-pages.md");
    }
    ErrorPagesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'hc-error-pages',
            template: "<div class=\"demo-content\"><div [hcMarkdown]=\"document\"></div></div>"
        })
    ], ErrorPagesComponent);
    return ErrorPagesComponent;
}());



/***/ }),

/***/ "./src/app/styles/login/login-page.component.ts":
/*!******************************************************!*\
  !*** ./src/app/styles/login/login-page.component.ts ***!
  \******************************************************/
/*! exports provided: LoginPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPageComponent", function() { return LoginPageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var LoginPageComponent = /** @class */ (function () {
    function LoginPageComponent() {
        this.document = __webpack_require__(/*! raw-loader!../../../../guides/styles/login-page.md */ "./node_modules/raw-loader/index.js!./guides/styles/login-page.md");
    }
    LoginPageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'hc-login-page',
            template: "<div class=\"demo-content\"><div [hcMarkdown]=\"document\"></div></div>"
        })
    ], LoginPageComponent);
    return LoginPageComponent;
}());



/***/ }),

/***/ "./src/app/styles/styles-routes.module.ts":
/*!************************************************!*\
  !*** ./src/app/styles/styles-routes.module.ts ***!
  \************************************************/
/*! exports provided: StylesRoutesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StylesRoutesModule", function() { return StylesRoutesModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _styles_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styles.component */ "./src/app/styles/styles.component.ts");
/* harmony import */ var _color_color_demo_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./color/color-demo.component */ "./src/app/styles/color/color-demo.component.ts");
/* harmony import */ var _table_table_demo_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./table/table-demo.component */ "./src/app/styles/table/table-demo.component.ts");
/* harmony import */ var _typography_typography_demo_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./typography/typography-demo.component */ "./src/app/styles/typography/typography-demo.component.ts");
/* harmony import */ var _code_code_demo_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./code/code-demo.component */ "./src/app/styles/code/code-demo.component.ts");
/* harmony import */ var _chart_chart_demo_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./chart/chart-demo.component */ "./src/app/styles/chart/chart-demo.component.ts");
/* harmony import */ var _error_error_pages_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./error/error-pages.component */ "./src/app/styles/error/error-pages.component.ts");
/* harmony import */ var _login_login_page_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./login/login-page.component */ "./src/app/styles/login/login-page.component.ts");
/* harmony import */ var _about_about_modal_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./about/about-modal.component */ "./src/app/styles/about/about-modal.component.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _breadcrumbs_breadcrumbs_style_demo_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./breadcrumbs/breadcrumbs-style-demo.component */ "./src/app/styles/breadcrumbs/breadcrumbs-style-demo.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};












var routes = [
    {
        path: 'styles',
        component: _styles_component__WEBPACK_IMPORTED_MODULE_1__["StylesComponent"],
        children: [
            {
                path: 'about',
                component: _about_about_modal_component__WEBPACK_IMPORTED_MODULE_9__["AboutModalComponent"],
                data: { title: 'About Modal' }
            },
            {
                path: 'breadcrumbs',
                component: _breadcrumbs_breadcrumbs_style_demo_component__WEBPACK_IMPORTED_MODULE_11__["BreadcrumbsStyleDemoComponent"],
                data: { title: 'Breadcrumbs' }
            },
            {
                path: 'color',
                component: _color_color_demo_component__WEBPACK_IMPORTED_MODULE_2__["ColorDemoComponent"],
                data: { title: 'Colors' }
            },
            {
                path: 'table',
                component: _table_table_demo_component__WEBPACK_IMPORTED_MODULE_3__["TableDemoComponent"],
                data: { title: 'Tables' }
            },
            {
                path: 'chart',
                component: _chart_chart_demo_component__WEBPACK_IMPORTED_MODULE_6__["ChartDemoComponent"],
                data: { title: 'Charts' }
            },
            {
                path: 'typography',
                component: _typography_typography_demo_component__WEBPACK_IMPORTED_MODULE_4__["TypographyDemoComponent"],
                data: { title: 'Typography' }
            },
            {
                path: 'code',
                component: _code_code_demo_component__WEBPACK_IMPORTED_MODULE_5__["CodeDemoComponent"],
                data: { title: 'Code' }
            },
            {
                path: 'error',
                component: _error_error_pages_component__WEBPACK_IMPORTED_MODULE_7__["ErrorPagesComponent"],
                data: { title: 'Error Pages' }
            },
            {
                path: 'login',
                component: _login_login_page_component__WEBPACK_IMPORTED_MODULE_8__["LoginPageComponent"],
                data: { title: 'Login Page' }
            },
            {
                path: '**',
                redirectTo: 'about'
            }
        ]
    }
];
var StylesRoutesModule = /** @class */ (function () {
    function StylesRoutesModule() {
    }
    StylesRoutesModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_10__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]]
        })
    ], StylesRoutesModule);
    return StylesRoutesModule;
}());



/***/ }),

/***/ "./src/app/styles/styles.component.html":
/*!**********************************************!*\
  !*** ./src/app/styles/styles.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<hc-subnav class=\"responsive-subnav\" fixedTop=\"true\">\n    <div class=\"subnav-container\">\n        <span class=\"subnav-label\">Styles: </span>\n        <span class=\"subnav-select\">\n            <hc-select [(ngModel)]=\"thisPage\" (ngModelChange)=\"selectUpdate($event)\">\n                <option *ngFor=\"let option of selectOptions\" [value]=\"option\" [selected]=\"option === thisPage\">{{option}}</option>\n            </hc-select>\n        </span>\n    </div>\n</hc-subnav>\n<hc-tab-set class=\"full-height\">\n    <hc-tab tabTitle=\"About Modal\" routerLink=\"/styles/about\">\n        About Modal\n    </hc-tab>\n    <hc-tab tabTitle=\"Breadcrumbs\" routerLink=\"/styles/breadcrumbs\">\n        Breadcrumbs\n    </hc-tab>\n    <hc-tab tabTitle=\"Charts\" routerLink=\"/styles/chart\">\n        Charts\n    </hc-tab>\n    <hc-tab tabTitle=\"Code\" routerLink=\"/styles/code\">\n        Code\n    </hc-tab>\n    <hc-tab tabTitle=\"Colors\" routerLink=\"/styles/color\">\n        Colors\n    </hc-tab>\n    <hc-tab tabTitle=\"Error Pages\" routerLink=\"/styles/error\">\n        Error Pages\n    </hc-tab>\n    <hc-tab tabTitle=\"Login Page\" routerLink=\"/styles/login\">\n        Login Page\n    </hc-tab>\n    <hc-tab tabTitle=\"Tables\" routerLink=\"/styles/table\">\n        Tables\n    </hc-tab>\n    <hc-tab tabTitle=\"Typography\" routerLink=\"/styles/typography\">\n        Typography\n    </hc-tab>\n</hc-tab-set>\n"

/***/ }),

/***/ "./src/app/styles/styles.component.ts":
/*!********************************************!*\
  !*** ./src/app/styles/styles.component.ts ***!
  \********************************************/
/*! exports provided: StylesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StylesComponent", function() { return StylesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var StylesComponent = /** @class */ (function () {
    function StylesComponent(activatedRoute, router) {
        var _this = this;
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.thisPage = '';
        this.selectOptions = [];
        this.unsubscribe = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        // Listen for vertical tab bar navigation and update the select component
        this.router.events.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["takeUntil"])(this.unsubscribe)).subscribe(function (event) {
            if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["NavigationEnd"]) {
                if (activatedRoute.firstChild) {
                    _this.thisPage = activatedRoute.firstChild.snapshot.data['title'];
                }
            }
        });
        // Populate the responsive select component with the router information
        var root = this.activatedRoute.routeConfig;
        if (root && root.children) {
            for (var _i = 0, _a = root.children; _i < _a.length; _i++) {
                var entry = _a[_i];
                if (entry.data && entry.data.title) {
                    this.selectOptions.push(entry.data.title);
                }
            }
        }
        this.selectOptions.sort();
    }
    // Handle changes to the select component and navigate
    StylesComponent.prototype.selectUpdate = function (event) {
        var root = this.activatedRoute.routeConfig;
        if (root && root.children) {
            for (var _i = 0, _a = root.children; _i < _a.length; _i++) {
                var entry = _a[_i];
                if (entry.data && event === entry.data.title) {
                    this.router.navigate(['/styles/' + entry.path]);
                    break;
                }
            }
        }
    };
    StylesComponent.prototype.ngOnDestroy = function () {
        this.unsubscribe.next();
        this.unsubscribe.complete();
    };
    StylesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'hc-demo-styles',
            template: __webpack_require__(/*! ./styles.component.html */ "./src/app/styles/styles.component.html")
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], StylesComponent);
    return StylesComponent;
}());



/***/ }),

/***/ "./src/app/styles/styles.module.ts":
/*!*****************************************!*\
  !*** ./src/app/styles/styles.module.ts ***!
  \*****************************************/
/*! exports provided: StylesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StylesModule", function() { return StylesModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _color_color_demo_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./color/color-demo.component */ "./src/app/styles/color/color-demo.component.ts");
/* harmony import */ var _table_table_demo_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./table/table-demo.component */ "./src/app/styles/table/table-demo.component.ts");
/* harmony import */ var _color_swatch_demo_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./color/swatch-demo.component */ "./src/app/styles/color/swatch-demo.component.ts");
/* harmony import */ var _typography_typography_demo_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./typography/typography-demo.component */ "./src/app/styles/typography/typography-demo.component.ts");
/* harmony import */ var _code_code_demo_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./code/code-demo.component */ "./src/app/styles/code/code-demo.component.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _chart_chart_demo_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./chart/chart-demo.component */ "./src/app/styles/chart/chart-demo.component.ts");
/* harmony import */ var _chart_barchart_barchart_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./chart/barchart/barchart.component */ "./src/app/styles/chart/barchart/barchart.component.ts");
/* harmony import */ var _chart_linechart_linechart_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./chart/linechart/linechart.component */ "./src/app/styles/chart/linechart/linechart.component.ts");
/* harmony import */ var _error_error_pages_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./error/error-pages.component */ "./src/app/styles/error/error-pages.component.ts");
/* harmony import */ var _about_about_modal_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./about/about-modal.component */ "./src/app/styles/about/about-modal.component.ts");
/* harmony import */ var _login_login_page_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./login/login-page.component */ "./src/app/styles/login/login-page.component.ts");
/* harmony import */ var _styles_routes_module__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./styles-routes.module */ "./src/app/styles/styles-routes.module.ts");
/* harmony import */ var _breadcrumbs_breadcrumbs_style_demo_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./breadcrumbs/breadcrumbs-style-demo.component */ "./src/app/styles/breadcrumbs/breadcrumbs-style-demo.component.ts");
/* harmony import */ var _styles_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./styles.component */ "./src/app/styles/styles.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
















var StylesModule = /** @class */ (function () {
    function StylesModule() {
    }
    StylesModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_shared_shared_module__WEBPACK_IMPORTED_MODULE_6__["SharedModule"], _styles_routes_module__WEBPACK_IMPORTED_MODULE_13__["StylesRoutesModule"]],
            declarations: [
                _styles_component__WEBPACK_IMPORTED_MODULE_15__["StylesComponent"],
                _color_color_demo_component__WEBPACK_IMPORTED_MODULE_1__["ColorDemoComponent"],
                _table_table_demo_component__WEBPACK_IMPORTED_MODULE_2__["TableDemoComponent"],
                _color_swatch_demo_component__WEBPACK_IMPORTED_MODULE_3__["SwatchDemoComponent"],
                _typography_typography_demo_component__WEBPACK_IMPORTED_MODULE_4__["TypographyDemoComponent"],
                _code_code_demo_component__WEBPACK_IMPORTED_MODULE_5__["CodeDemoComponent"],
                _chart_chart_demo_component__WEBPACK_IMPORTED_MODULE_7__["ChartDemoComponent"],
                _chart_barchart_barchart_component__WEBPACK_IMPORTED_MODULE_8__["BarchartComponent"],
                _chart_linechart_linechart_component__WEBPACK_IMPORTED_MODULE_9__["LinechartComponent"],
                _error_error_pages_component__WEBPACK_IMPORTED_MODULE_10__["ErrorPagesComponent"],
                _login_login_page_component__WEBPACK_IMPORTED_MODULE_12__["LoginPageComponent"],
                _about_about_modal_component__WEBPACK_IMPORTED_MODULE_11__["AboutModalComponent"],
                _breadcrumbs_breadcrumbs_style_demo_component__WEBPACK_IMPORTED_MODULE_14__["BreadcrumbsStyleDemoComponent"]
            ]
        })
    ], StylesModule);
    return StylesModule;
}());



/***/ }),

/***/ "./src/app/styles/table/table-demo.component.html":
/*!********************************************************!*\
  !*** ./src/app/styles/table/table-demo.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"demo-content\">\n    <h1>Data Tables</h1>\n    <h6>Last updated {{lastModified | date:'longDate'}}</h6>\n\n    <hc-tile>\n        <h5>Basic Example</h5>\n        <p>Add the base class\n            <code>.hc-table</code> to an HTML\n            <code>&lt;table&gt;</code> to get the default Catalyst table stylings.</p>\n        <table class=\"hc-table\">\n            <thead>\n                <tr>\n                    <th>First Name</th>\n                    <th>Last Name</th>\n                    <th>MRN</th>\n                    <th>Birth Date</th>\n                    <th>Payor</th>\n                </tr>\n            </thead>\n            <tbody>\n                <tr>\n                    <td>Samuel</td>\n                    <td>Walker</td>\n                    <td>Z1223334444</td>\n                    <td>Mar 27, 1978</td>\n                    <td>MetLife</td>\n                </tr>\n                <tr>\n                    <td>Whitney</td>\n                    <td>Allen</td>\n                    <td>Z5223335555</td>\n                    <td>Jan 14, 1954</td>\n                    <td>New York Life</td>\n                </tr>\n                <tr>\n                    <td>Kendra</td>\n                    <td>Jacobs</td>\n                    <td>Z6223336666</td>\n                    <td>Aug 27, 1990</td>\n                    <td>Prudential Financial</td>\n                </tr>\n                <tr>\n                    <td>Gerald</td>\n                    <td>Lynch</td>\n                    <td>Z7223337777</td>\n                    <td>Mar 15, 1981</td>\n                    <td>MetLife</td>\n                </tr>\n            </tbody>\n        </table>\n\n        <pre>\n        <code>\n    &lt;table class=&quot;hc-table&quot;&gt;\n        &lt;thead&gt;\n            &lt;tr&gt;\n                &lt;th&gt;First Name&lt;/th&gt;\n                &lt;th&gt;Last Name&lt;/th&gt;\n                &lt;th&gt;MRN&lt;/th&gt;\n                &lt;th&gt;Birth Date&lt;/th&gt;\n                &lt;th&gt;Payor&lt;/th&gt;\n            &lt;/tr&gt;\n        &lt;/thead&gt;\n        &lt;tbody&gt;\n            &lt;tr&gt;\n                &lt;td&gt;Samuel&lt;/td&gt;\n                &lt;td&gt;Walker&lt;/td&gt;\n                &lt;td&gt;Z1223334444&lt;/td&gt;\n                &lt;td&gt;Mar 27, 1978&lt;/td&gt;\n                &lt;td&gt;MetLife&lt;/td&gt;\n            &lt;/tr&gt;\n            &lt;tr&gt;\n                &lt;td&gt;Whitney&lt;/td&gt;\n                &lt;td&gt;Allen&lt;/td&gt;\n                &lt;td&gt;Z5223335555&lt;/td&gt;\n                &lt;td&gt;Jan 14, 1954&lt;/td&gt;\n                &lt;td&gt;New York Life&lt;/td&gt;\n            &lt;/tr&gt;\n            ...\n        &lt;/tbody&gt;\n    &lt;/table&gt;\n        </code>\n        </pre>\n    </hc-tile>\n\n    <hc-tile>\n        <h5>Sorting Indicators</h5>\n        <p>Add\n            <code>.hc-col-sortable</code> to a\n            <code>&lt;th&gt;</code> so that it appears sortable.</p>\n        <ul>\n            <li>Use\n                <code>.hc-active-sort</code> to designate the currently sorted column</li>\n            <li>Use\n                <code>.hc-sort-asc</code> and\n                <code>.hc-sort-desc</code> to designate sort direction</li>\n            <li>For a left aligned sort indicator, use\n                <code>.hc-col-sortable-left</code>\n            </li>\n        </ul>\n        <br>\n        <table class=\"hc-table\">\n            <thead>\n                <tr>\n                    <th class=\"hc-col-sortable\">Sortable</th>\n                    <th class=\"hc-col-sortable hc-active-sort hc-sort-asc\">Active Sort (Ascending)</th>\n                    <th>Nope</th>\n                    <th class=\"hc-col-sortable hc-active-sort hc-sort-desc\">Active Sort (Descending)</th>\n                    <th class=\"hc-col-sortable-left\">Left aligned</th>\n                </tr>\n            </thead>\n            <tbody>\n                <tr>\n                    <td>Samuel</td>\n                    <td>Walker</td>\n                    <td>Z1223334444</td>\n                    <td>Mar 27, 1978</td>\n                    <td>MetLife</td>\n                </tr>\n                <tr>\n                    <td>Whitney</td>\n                    <td>Allen</td>\n                    <td>Z5223335555</td>\n                    <td>Jan 14, 1954</td>\n                    <td>New York Life</td>\n                </tr>\n                <tr>\n                    <td>Kendra</td>\n                    <td>Jacobs</td>\n                    <td>Z6223336666</td>\n                    <td>Aug 27, 1990</td>\n                    <td>Prudential Financial</td>\n                </tr>\n            </tbody>\n        </table>\n\n        <pre>\n        <code>\n    &lt;table class=&quot;hc-table&quot;&gt;\n        &lt;thead&gt;\n            &lt;tr&gt;\n            &lt;th class=&quot;hc-col-sortable&quot;&gt;Sortable&lt;/th&gt;\n            &lt;th class=&quot;hc-col-sortable hc-active-sort hc-sort-asc&quot;&gt;Active Sort (Ascending)&lt;/th&gt;\n            &lt;th&gt;Nope&lt;/th&gt;\n            &lt;th class=&quot;hc-col-sortable hc-active-sort hc-sort-desc&quot;&gt;Active Sort (Descending)&lt;/th&gt;\n            &lt;th class=&quot;hc-col-sortable-left&quot;&gt;Left aligned&lt;/th&gt;\n            &lt;/tr&gt;\n        &lt;/thead&gt;\n        ...\n    &lt;/table&gt;\n        </code>\n        </pre>\n    </hc-tile>\n\n    <hc-tile>\n        <h5>Condensed Table</h5>\n        <p>Add\n            <code>.hc-table-small</code> (in addition to\n            <code>.hc-table</code>) for a smaller table.</p>\n        <br>\n        <table class=\"hc-table hc-table-small\">\n            <thead>\n                <tr>\n                    <th>First Name</th>\n                    <th>Last Name</th>\n                    <th>MRN</th>\n                    <th>Birth Date</th>\n                    <th>Payor</th>\n                </tr>\n            </thead>\n            <tbody>\n                <tr>\n                    <td>Samuel</td>\n                    <td>Walker</td>\n                    <td>Z1223334444</td>\n                    <td>Mar 27, 1978</td>\n                    <td>MetLife</td>\n                </tr>\n                <tr>\n                    <td>Whitney</td>\n                    <td>Allen</td>\n                    <td>Z5223335555</td>\n                    <td>Jan 14, 1954</td>\n                    <td>New York Life</td>\n                </tr>\n                <tr>\n                    <td>Kendra</td>\n                    <td>Jacobs</td>\n                    <td>Z6223336666</td>\n                    <td>Aug 27, 1990</td>\n                    <td>Prudential Financial</td>\n                </tr>\n            </tbody>\n        </table>\n\n        <pre>\n        <code>\n    &lt;table class=&quot;hc-table hc-table-small&quot;&gt;\n        ...\n    &lt;/table&gt;\n        </code>\n        </pre>\n    </hc-tile>\n\n    <hc-tile>\n        <h5>Selected Row</h5>\n        <p>Add\n            <code>.hc-row-selected</code> to a\n            <code>&lt;tr&gt;</code> so it appears selected.</p>\n        <p>Also, you can add <code>.hc-action-row</code> to a <code>&lt;tr&gt;</code> or <code>.hc-action-table</code> to a <code>&lt;table&gt;</code> to get a blue hover effect on rows.</p>\n        <br>\n        <table class=\"hc-table hc-action-table\">\n            <thead>\n                <tr>\n                    <th>First Name</th>\n                    <th>Last Name</th>\n                    <th>MRN</th>\n                    <th>Birth Date</th>\n                    <th>Payor</th>\n                </tr>\n            </thead>\n            <tbody>\n                <tr>\n                    <td>Samuel</td>\n                    <td>Walker</td>\n                    <td>Z1223334444</td>\n                    <td>Mar 27, 1978</td>\n                    <td>MetLife</td>\n                </tr>\n                <tr class=\"hc-row-selected\">\n                    <td>Whitney</td>\n                    <td>Allen</td>\n                    <td>Z5223335555</td>\n                    <td>Jan 14, 1954</td>\n                    <td>New York Life</td>\n                </tr>\n                <tr>\n                    <td>Kendra</td>\n                    <td>Jacobs</td>\n                    <td>Z6223336666</td>\n                    <td>Aug 27, 1990</td>\n                    <td>Prudential Financial</td>\n                </tr>\n            </tbody>\n        </table>\n\n        <pre>\n        <code>\n    &lt;table class=&quot;hc-table hc-action-table&quot;&gt;\n        ...\n        &lt;tr class=&quot;hc-row-selected&quot;&gt;...&lt;/tr&gt;\n        ...\n    &lt;/table&gt;\n        </code>\n        </pre>\n    </hc-tile>\n\n    <hc-tile>\n        <h5>Borders</h5>\n        <p>Add\n            <code>.hc-table-borders</code> (in addition to\n            <code>.hc-table</code>) for borders all around.</p>\n        <br>\n        <table class=\"hc-table hc-table-borders\">\n            <thead>\n                <tr>\n                    <th>First Name</th>\n                    <th>Last Name</th>\n                    <th>MRN</th>\n                    <th>Birth Date</th>\n                    <th>Payor</th>\n                </tr>\n            </thead>\n            <tbody>\n                <tr>\n                    <td>Samuel</td>\n                    <td>Walker</td>\n                    <td>Z1223334444</td>\n                    <td>Mar 27, 1978</td>\n                    <td>MetLife</td>\n                </tr>\n                <tr>\n                    <td>Whitney</td>\n                    <td>Allen</td>\n                    <td>Z5223335555</td>\n                    <td>Jan 14, 1954</td>\n                    <td>New York Life</td>\n                </tr>\n                <tr>\n                    <td>Kendra</td>\n                    <td>Jacobs</td>\n                    <td>Z6223336666</td>\n                    <td>Aug 27, 1990</td>\n                    <td>Prudential Financial</td>\n                </tr>\n            </tbody>\n        </table>\n\n        <pre>\n        <code>\n        &lt;table class=&quot;hc-table hc-table-borders&quot;&gt;\n            ...\n        &lt;/table&gt;\n            </code>\n        </pre>\n\n        <br>\n\n        <p>You can also use <code>.hc-cell-borders</code> at the <code>&lt;td&gt;</code> or <code>&lt;th&gt;</code> level.</p>\n        <br>\n        <table class=\"hc-table\">\n            <thead>\n                <tr>\n                    <th class=\"hc-cell-borders\">Borders!</th>\n                    <th>Name</th>\n                    <th>MRN</th>\n                    <th>Birth Date</th>\n                    <th>Payor</th>\n                </tr>\n            </thead>\n            <tbody>\n                <tr>\n                    <td class=\"hc-cell-borders\">Borders!</td>\n                    <td>Samuel Walker</td>\n                    <td>Z1223334444</td>\n                    <td>Mar 27, 1978</td>\n                    <td>MetLife</td>\n                </tr>\n                <tr>\n                    <td class=\"hc-cell-borders\">Borders!</td>\n                    <td>Whitney Allen</td>\n                    <td>Z5223335555</td>\n                    <td>Jan 14, 1954</td>\n                    <td>New York Life</td>\n                </tr>\n                <tr>\n                    <td class=\"hc-cell-borders\">Borders!</td>\n                    <td>Kendra Jacobs</td>\n                    <td>Z6223336666</td>\n                    <td>Aug 27, 1990</td>\n                    <td>Prudential Financial</td>\n                </tr>\n            </tbody>\n        </table>\n    </hc-tile>\n</div>\n"

/***/ }),

/***/ "./src/app/styles/table/table-demo.component.ts":
/*!******************************************************!*\
  !*** ./src/app/styles/table/table-demo.component.ts ***!
  \******************************************************/
/*! exports provided: TableDemoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TableDemoComponent", function() { return TableDemoComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var TableDemoComponent = /** @class */ (function () {
    function TableDemoComponent() {
        this.lastModified = new Date(document.lastModified);
    }
    TableDemoComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'hc-table-demo',
            template: __webpack_require__(/*! ./table-demo.component.html */ "./src/app/styles/table/table-demo.component.html")
        })
    ], TableDemoComponent);
    return TableDemoComponent;
}());



/***/ }),

/***/ "./src/app/styles/typography/typography-demo.component.html":
/*!******************************************************************!*\
  !*** ./src/app/styles/typography/typography-demo.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"demo-content\">\n    <h1>Typography Guidelines</h1>\n    <h6>Last updated {{lastModified | date:'longDate'}}</h6>\n\n    <hc-tile>\n        <h5>Fonts</h5>\n\n        <h4>Open Sans</h4>\n        <em>Our primary font for all things web.</em>\n        <p>\n            <a href=\"https://fonts.google.com/specimen/Open+Sans\" target=\"_blank\">https://fonts.google.com/specimen/Open+Sans</a>\n        </p>\n\n        <h4>Flexo</h4>\n        <em>The Health Catalyst corporate font. Only to be used for product names displayed in the header</em>\n        <img id=\"logo\" alt=\"cashmere app logo\" src=\"./assets/CashmereAppLogo.svg\">\n    </hc-tile>\n\n    <hc-tile>\n        <h5>Elements</h5>\n        <table class=\"api-table\">\n            <tr>\n                <td>\n                    <h1 class=\"no-margin\">h1. Page Title</h1>\n                </td>\n                <td>\n                    <code>&lt;h1&gt;&lt;/h1&gt;</code>\n                </td>\n                <td>\n                    <ul>\n                        <li>\n                            <span class=\"type-label\">Font-size</span>2.571rem or 36px</li>\n                        <li>\n                            <span class=\"type-label\">Line Height</span>1.2</li>\n                    </ul>\n                </td>\n                <td width=\"150px\">\n                    <ul>\n                        <li>\n                            <span class=\"type-label\">Weight</span>300</li>\n                        <li>\n                            <span class=\"type-label\">Color</span>$text</li>\n                    </ul>\n                </td>\n            </tr>\n            <tr>\n                <td>\n                    <h2 class=\"no-margin\">h2. Subtitle</h2>\n                </td>\n                <td>\n                    <code>&lt;h2&gt;&lt;/h2&gt;</code>\n                </td>\n                <td>\n                    <ul>\n                        <li>\n                            <span class=\"type-label\">Font-size</span>1.571rem or 22px</li>\n                        <li>\n                            <span class=\"type-label\">Line Height</span>1.5</li>\n                    </ul>\n                </td>\n                <td>\n                    <ul>\n                        <li>\n                            <span class=\"type-label\">Weight</span>600</li>\n                        <li>\n                            <span class=\"type-label\">Color</span>$text</li>\n                    </ul>\n                </td>\n            </tr>\n            <tr>\n                <td>\n                    <h3 class=\"no-margin\">h3. Section Title</h3>\n                </td>\n                <td>\n                    <code>&lt;h3&gt;&lt;/h3&gt;</code>\n                </td>\n                <td>\n                    <ul>\n                        <li>\n                            <span class=\"type-label\">Font-size</span>1.285 or 18px</li>\n                        <li>\n                            <span class=\"type-label\">Line Height</span>1.5</li>\n                    </ul>\n                </td>\n                <td>\n                    <ul>\n                        <li>\n                            <span class=\"type-label\">Weight</span>600</li>\n                        <li>\n                            <span class=\"type-label\">Color</span>$text</li>\n                    </ul>\n                </td>\n            </tr>\n            <tr>\n                <td>\n                    <h4 class=\"no-margin\">h4. Mini Header</h4>\n                </td>\n                <td>\n                    <code>&lt;h4&gt;&lt;/h4&gt;</code>\n                </td>\n                <td>\n                    <ul>\n                        <li>\n                            <span class=\"type-label\">Font-size</span>1rem or 14px</li>\n                        <li>\n                            <span class=\"type-label\">Line Height</span>1.5</li>\n                    </ul>\n                </td>\n                <td>\n                    <ul>\n                        <li>\n                            <span class=\"type-label\">Weight</span>600</li>\n                        <li>\n                            <span class=\"type-label\">Color</span>$text</li>\n                    </ul>\n                </td>\n            </tr>\n            <tr>\n                <td>\n                    <p class=\"no-margin\">p. Paragraph</p>\n                </td>\n                <td>\n                    <code>&lt;p&gt;&lt;/p&gt;</code>\n                </td>\n                <td>\n                    <ul>\n                        <li>\n                            <span class=\"type-label\">Font-size</span>1.143rem or 16px</li>\n                        <li>\n                            <span class=\"type-label\">Line Height</span>1.5</li>\n                    </ul>\n                </td>\n                <td>\n                    <ul>\n                        <li>\n                            <span class=\"type-label\">Weight</span>300</li>\n                        <li>\n                            <span class=\"type-label\">Color</span>$text</li>\n                    </ul>\n                </td>\n            </tr>\n            <tr>\n                <td>\n                    <a href=\"#\">a. Anchor</a>\n                </td>\n                <td>\n                    <code>&lt;a href=&quot;...&quot;&gt;&lt;/a&gt;</code>\n                </td>\n                <td>\n                    <ul>\n                        <li>\n                            <span class=\"type-label\">Font-size</span>inherit</li>\n                        <li>\n                            <span class=\"type-label\">Line Height</span>inherit</li>\n                    </ul>\n                </td>\n                <td>\n                    <ul>\n                        <li>\n                            <span class=\"type-label\">Weight</span>inherit</li>\n                        <li>\n                            <span class=\"type-label\">Color</span>$primary-brand</li>\n                    </ul>\n                </td>\n            </tr>\n            <tr>\n                <td>\n                    <em>em. Emphasised</em>\n                </td>\n                <td>\n                    <code>&lt;em&gt;&lt;/em&gt;</code>\n                    <span class=\"type-label\">or</span>\n                    <code>.hc-font-em</code>\n                </td>\n                <td>\n                    <ul>\n                        <li>\n                            <span class=\"type-label\">Font-size</span>inherit</li>\n                        <li>\n                            <span class=\"type-label\">Line Height</span>inherit</li>\n                    </ul>\n                </td>\n                <td>\n                    <ul>\n                        <li>\n                            <span class=\"type-label\">Weight</span>inherit</li>\n                        <li>\n                            <span class=\"type-label\">Color</span>$gray-500</li>\n                    </ul>\n                </td>\n            </tr>\n            <tr>\n                <td>\n                    <strong>strong. Strong importance</strong>\n                </td>\n                <td>\n                    <code>&lt;strong&gt;&lt;/strong&gt;</code>\n                    or\n                    <code>.hc-font-weight-bold</code>\n                </td>\n                <td>\n                    <ul>\n                        <li>\n                            <span class=\"type-label\">Font-size</span>inherit</li>\n                        <li>\n                            <span class=\"type-label\">Line Height</span>inherit</li>\n                    </ul>\n                </td>\n                <td>\n                    <ul>\n                        <li>\n                            <span class=\"type-label\">Weight</span>600</li>\n                        <li>\n                            <span class=\"type-label\">Color</span>inherit</li>\n                    </ul>\n                </td>\n            </tr>\n        </table>\n    </hc-tile>\n\n    <hc-tile>\n        <h5>Sizes</h5>\n        <table class=\"api-table\">\n            <tr>\n                <td>\n                    <span class=\"hc-font-xsm\">Extra small</span>\n                </td>\n                <td>\n                    <code>.hc-font-xsm</code>\n                </td>\n                <td>\n                    <span class=\"type-label\">Font-size</span>12px\n                </td>\n            </tr>\n            <tr>\n                <td>\n                    <span class=\"hc-font-sm\">Small</span>\n                </td>\n                <td>\n                    <code>.hc-font-sm</code>\n                </td>\n                <td>\n                    <span class=\"type-label\">Font-size</span>14px\n                </td>\n            </tr>\n            <tr>\n                <td>\n                    <span class=\"hc-font-md\">Medium</span>\n                </td>\n                <td>\n                    <code>.hc-font-md</code>\n                </td>\n                <td>\n                    <span class=\"type-label\">Font-size</span>16px\n                </td>\n            </tr>\n            <tr>\n                <td>\n                    <span class=\"hc-font-lg\">Large</span>\n                </td>\n                <td>\n                    <code>.hc-font-lg</code>\n                </td>\n                <td>\n                    <span class=\"type-label\">Font-size</span>18px\n                </td>\n            </tr>\n            <tr>\n                <td>\n                    <span class=\"hc-font-xlg\">Extra Large</span>\n                </td>\n                <td>\n                    <code>.hc-font-xlg</code>\n                </td>\n                <td>\n                    <span class=\"type-label\">Font-size</span>22px\n                </td>\n            </tr>\n        </table>\n    </hc-tile>\n\n    <hc-tile>\n        <h5>Weights</h5>\n        <table class=\"api-table\">\n            <tr>\n                <td>\n                    <span class=\"hc-font-light\">Light</span>\n                </td>\n                <td>\n                    <code>.hc-font-light</code>\n                </td>\n                <td>\n                    <span class=\"type-label\">Font-weight</span>300\n                </td>\n            </tr>\n            <tr>\n                <td>\n                    <span class=\"hc-font-reg\">Regular</span>\n                </td>\n                <td>\n                    <code>.hc-font-reg</code>\n                </td>\n                <td>\n                    <span class=\"type-label\">Font-weight</span>400\n                </td>\n            </tr>\n            <tr>\n                <td>\n                    <span class=\"hc-font-bold\">Bold</span>\n                </td>\n                <td>\n                    <code>.hc-font-bold</code>\n                </td>\n                <td>\n                    <span class=\"type-label\">Font-weight</span>600\n                </td>\n            </tr>\n            <tr>\n                <td>\n                    <span class=\"hc-font-xbold\">Extra bold</span>\n                </td>\n                <td>\n                    <code>.hc-font-xbold</code>\n                </td>\n                <td>\n                    <span class=\"type-label\">Font-weight</span>700\n                </td>\n            </tr>\n        </table>\n    </hc-tile>\n\n    <hc-tile>\n        <h5>Case</h5>\n        <table class=\"api-table\">\n            <tr>\n                <td>\n                    <span class=\"hc-text-titlecase\">Title case styled text</span>\n                </td>\n                <td>\n                    <code>.hc-text-titlecase</code>\n                </td>\n                <td>\n                    <span class=\"type-label\">text-transform</span>capitalize\n                </td>\n            </tr>\n            <tr>\n                <td>\n                    <span class=\"hc-text-uppercase\">Uppercase styled text</span>\n                </td>\n                <td>\n                    <code>.hc-text-uppercase</code>\n                </td>\n                <td>\n                    <span class=\"type-label\">text-transform</span>uppercase\n                </td>\n            </tr>\n            <tr>\n                <td>\n                    <span class=\"hc-text-lowercase\">Lowercase styled text</span>\n                </td>\n                <td>\n                    <code>.hc-text-lowercase</code>\n                </td>\n                <td>\n                    <span class=\"type-label\">text-transform</span>lowercase\n                </td>\n            </tr>\n        </table>\n    </hc-tile>\n\n    <hc-tile>\n        <h5>Ellipsis</h5>\n        <p>For truncating a single line of text based on the width of it's containing div, use <code>.hc-text-ellipsis</code>,\n            which is a helper class for the following commonly repeated css:\n        </p>\n        <pre><code>\n    overflow: hidden;\n    text-overflow: ellipsis;\n    white-space: nowrap;\n        </code></pre>\n        <div class=\"hc-text-ellipsis ellipsis-example-block\">An example of ellipsis in action</div>\n        <p>For cases where you'd like to truncate to certain number of characters, a pipe would be the way to go.</p>\n    </hc-tile>\n\n    <hc-tile>\n        <h5>Articles</h5>\n        <p>The <code>&lt;article&gt;</code> tag surrounds copy in product documentation. This copy is often denser than what's ideal for application UIs. In limited instances, elements of product documentation require unique typography treatment.</p>\n        <h3>Article lists</h3>\n        <p>Formatting is provided for nested lists in <code>&lt;article&gt;</code> and <code>&lt;article&gt;&lt;table&gt;</code> blocks\n        using either the <code>&lt;ul&gt;</code> or <code>&lt;ol&gt;</code> tags. Lists in tables are more compact than lists in paragraphs. For example, the <code>font-size</code> is <code>1rem</code> or <code>14px</code> and margins and padding are tighter.</p>\n        <h4>ul. Unordered List</h4>\n        <article>\n            <ul>\n                <li>Item 1</li>\n                <li>Item 2\n                    <ul>\n                        <li>Item 3</li>\n                        <li>Item 4\n                            <ul>\n                                <li>Item 5</li>\n                                <li>Item 6</li>\n                            </ul>\n                        </li>\n                    </ul>\n                </li>\n            </ul>\n        </article>\n\n        <h4 class=\"h4-subsequent\">ol. Ordered List</h4>\n        <article>\n            <ol>\n                <li>Item 1</li>\n                <li>Item 2\n                    <ol>\n                        <li>Item 3</li>\n                        <li>Item 4\n                            <ol>\n                                <li>Item 5</li>\n                                <li>Item 6</li>\n                            </ol>\n                        </li>\n                    </ol>\n                </li>\n            </ol>\n        </article>\n\n    <pre><code>&lt;article&gt;\n    &lt;ul&gt;\n        &lt;li&gt;Item 1&lt;/li&gt;\n        &lt;li&gt;Item 2\n            &lt;ul&gt;\n                &lt;li&gt;Item 3&lt;/li&gt;\n                &lt;li&gt;Item 4\n                    &lt;ul&gt;\n                        &lt;li&gt;Item 5&lt;/li&gt;\n                        &lt;li&gt;Item 6&lt;/li&gt;\n                    &lt;/ul&gt;\n                &lt;/li&gt;\n            &lt;/ul&gt;\n        &lt;/li&gt;\n    &lt;/ul&gt;\n&lt;/article&gt;</code></pre>\n\n    </hc-tile>\n\n    <hc-tile>\n        <h5>Font Size</h5>\n        <p>\n            The default font of the body is\n            <code>14px</code> and all other font sizes are based off that using\n            <a href=\"https://developer.mozilla.org/en-US/docs/Web/CSS/font-size#Rems\">rems</a> or relative ems that are relative the the font size of the html element.\n        </p>\n        <table class=\"hc-table\">\n            <thead>\n                <tr>\n                    <th>px Size</th>\n                    <th>rem</th>\n                </tr>\n            </thead>\n            <tbody>\n                <tr>\n                    <td>8px</td>\n                    <td>0.5714rem</td>\n                </tr>\n                <tr>\n                    <td>9px </td>\n                    <td>0.6429rem</td>\n                </tr>\n                <tr>\n                    <td>10px</td>\n                    <td>0.7143rem</td>\n                </tr>\n                <tr>\n                    <td>11px</td>\n                    <td>0.7857rem</td>\n                </tr>\n                <tr>\n                    <td>12px</td>\n                    <td>0.8571rem</td>\n                </tr>\n                <tr>\n                    <td>13px</td>\n                    <td>0.9286rem</td>\n                </tr>\n                <tr>\n                    <td>14px\n                        <strong>(base)</strong>\n                    </td>\n                    <td>1rem</td>\n                </tr>\n                <tr>\n                    <td>15px</td>\n                    <td>1.071rem</td>\n                </tr>\n                <tr>\n                    <td>16px</td>\n                    <td>1.143rem</td>\n                </tr>\n                <tr>\n                    <td>20px</td>\n                    <td>1.429rem</td>\n                </tr>\n                <tr>\n                    <td>22px </td>\n                    <td>1.571rem</td>\n                </tr>\n                <tr>\n                    <td>24px</td>\n                    <td>1.714rem</td>\n                </tr>\n                <tr>\n                    <td>32px</td>\n                    <td>2.286rem</td>\n                </tr>\n                <tr>\n                    <td>36px</td>\n                    <td>2.571rem</td>\n                </tr>\n            </tbody>\n        </table>\n    </hc-tile>\n\n    <hc-tile>\n        <h5>Sass Text Utilities</h5>\n        <p> Save yourself the trouble of looking up or recalculating rem sizes using the\n            <code>fontSize()</code> sass mixin.</p>\n        <pre><code>@import &#39;../node_modules/cashmere/sass/cashmere&#39;;\n.some-class {{ '{' }}\n    @include fontSize(16px); // generates font-size: 1.143rem;\n{{ '}' }}</code></pre>\n    </hc-tile>\n</div>\n"

/***/ }),

/***/ "./src/app/styles/typography/typography-demo.component.scss":
/*!******************************************************************!*\
  !*** ./src/app/styles/typography/typography-demo.component.scss ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".api-table li {\n  margin: 15px 0; }\n\nh1.no-margin,\nh2.no-margin,\nh3.no-margin,\nh4.no-margin,\np.no-margin {\n  margin: 0; }\n\n.demo-content ul {\n  margin: 0; }\n\n.demo-content li {\n  margin: 0; }\n\n.demo-content h3 {\n  margin: 30px 0 0; }\n\n.ellipsis-example-block {\n  width: 175px;\n  padding: 20px;\n  resize: both;\n  border: 1px solid #c0c5cc; }\n\n#logo {\n  background-color: #384655;\n  width: 400px;\n  margin-top: 15px;\n  padding: 10px 40px; }\n\n.list-table {\n  border-top: 1px solid #c0c5cc;\n  border-bottom: 1px solid #c0c5cc;\n  margin-top: 20px;\n  margin-bottom: 20px; }\n\n.list-table-heading {\n  margin-top: 0px; }\n\n.demo-content ul li:first-child,\n.demo-content ol li:first-child {\n  margin-top: 6px; }\n\n.h4-subsequent {\n  margin-top: 0px; }\n"

/***/ }),

/***/ "./src/app/styles/typography/typography-demo.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/styles/typography/typography-demo.component.ts ***!
  \****************************************************************/
/*! exports provided: TypographyDemoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TypographyDemoComponent", function() { return TypographyDemoComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var TypographyDemoComponent = /** @class */ (function () {
    function TypographyDemoComponent() {
        this.lastModified = new Date(document.lastModified);
    }
    TypographyDemoComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'hc-typography',
            template: __webpack_require__(/*! ./typography-demo.component.html */ "./src/app/styles/typography/typography-demo.component.html"),
            styles: [__webpack_require__(/*! ./typography-demo.component.scss */ "./src/app/styles/typography/typography-demo.component.scss")]
        })
    ], TypographyDemoComponent);
    return TypographyDemoComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])()
    .bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/travis/build/HealthCatalyst/Fabric.Cashmere/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map