(function() {
var exports = {};
exports.id = "pages/competitions/new";
exports.ids = ["pages/competitions/new"];
exports.modules = {

/***/ "./pages/competitions/new.js":
/*!***********************************!*\
  !*** ./pages/competitions/new.js ***!
  \***********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! semantic-ui-react */ "semantic-ui-react");
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/Layout */ "./components/Layout.js");
/* harmony import */ var _ethereum_factory__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../ethereum/factory */ "./ethereum/factory.js");
/* harmony import */ var _ethereum_web3__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../ethereum/web3 */ "./ethereum/web3.js");
/* harmony import */ var ipfs_http_client__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ipfs-http-client */ "./node_modules/ipfs-http-client/src/index.js");

var _jsxFileName = "D:\\hahah\\hack\\pages\\competitions\\new.js";

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }







const projectId = '2G821LGudGM2c8B36WGrJUcmFwB';
const projectSecret = '21ca10b8ce3bcb0b556832bebb150eee';
const auth = 'Basic ' + Buffer.from(projectId + ':' + projectSecret).toString('base64');
const client = (0,ipfs_http_client__WEBPACK_IMPORTED_MODULE_6__.create)({
  host: 'ipfs.infura.io',
  port: 5001,
  protocol: 'https',
  headers: {
    authorization: auth
  }
});

class CompetitionNew extends react__WEBPACK_IMPORTED_MODULE_1__.Component {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "state", {
      minimumContribution: "",
      errorMessage: "",
      loading: false,
      label: "",
      name: "",
      description: "",
      fileSampleData: null,
      fileEvalFunction: null,
      urlArrSampleData: "",
      urlArrEvalFunction: ""
    });

    _defineProperty(this, "onSubmit", async event => {
      event.preventDefault();
      this.setState({
        loading: true,
        errorMessage: ""
      });

      try {
        let urlImage = '';
        let result = await client.add(this.state.fileSampleData).then(result => {
          console.log("w" + result.path);
          urlImage = 'https://ml.infura-ipfs.io/ipfs/' + result.path;
          this.setState({
            urlArrSampleData: urlImage
          });
          console.log(urlImage);
        });
        console.log(result);
        let urlFunc = '';
        let result2 = await client.add(this.state.fileEvalFunction).then(result => {
          console.log(result.path);
          urlFunc = 'https://ml.infura-ipfs.io/ipfs/' + result.path;
          this.setState({
            urlArrEvalFunction: urlFunc
          });
        });
        console.log("Ss" + urlImage, urlFunc);

        try {
          const accounts = await _ethereum_web3__WEBPACK_IMPORTED_MODULE_5__.default.eth.getAccounts();
          console.log("loggg it" + this.state.urlArrSampleData + this.state.urlArrEvalFunction);
          await _ethereum_factory__WEBPACK_IMPORTED_MODULE_4__.default.methods.createCompetition(this.state.minimumContribution, this.state.name, this.state.description, this.state.urlArrSampleData, this.state.urlArrEvalFunction).send({
            value: "100",
            from: accounts[0]
          });
        } catch (err) {
          this.setState({
            errorMessage: err.message
          });
        }
      } catch (error) {
        console.log(error.message);
      }

      this.setState({
        loading: false
      });
    });

    _defineProperty(this, "retrieveFileSampleData", e => {
      const data = e.target.files[0];
      const reader = new window.FileReader();
      reader.readAsArrayBuffer(data);

      reader.onloadend = () => {
        console.log("Buffer data: ", Buffer(reader.result));
        this.setState({
          fileSampleData: Buffer(reader.result)
        });
      };

      e.preventDefault();
    });

    _defineProperty(this, "retrieveFileEvalFunction", e => {
      const data = e.target.files[0];
      const reader = new window.FileReader();
      reader.readAsArrayBuffer(data);

      reader.onloadend = () => {
        console.log("Buffer data: ", Buffer(reader.result));
        this.setState({
          fileEvalFunction: Buffer(reader.result)
        });
      };

      e.preventDefault();
    });
  }

  render() {
    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Layout__WEBPACK_IMPORTED_MODULE_3__.default, {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h3", {
        children: "Create Project "
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 117,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
        children: "A project is a collaborative environment where AI businesses can offer encrypted Machine Learning services, and crowdsource data and models."
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 118,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Form, {
        onSubmit: this.onSubmit,
        error: !!this.state.errorMessage,
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("br", {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 122,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Form.Field, {
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("label", {
            children: "Name"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 124,
            columnNumber: 13
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Input, {
            labelPosition: "right",
            value: this.state.name,
            onChange: event => this.setState({
              name: event.target.value
            })
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 125,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 123,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Form.Field, {
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("label", {
            children: "Description"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 132,
            columnNumber: 13
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Input, {
            labelPosition: "right",
            value: this.state.description,
            onChange: event => this.setState({
              description: event.target.value
            })
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 133,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 131,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Form.Field, {
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("label", {
            children: "Reward Funds"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 142,
            columnNumber: 13
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Input, {
            label: "wei",
            labelPosition: "right",
            value: this.state.minimumContribution,
            onChange: event => this.setState({
              minimumContribution: event.target.value
            })
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 143,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 141,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("br", {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 152,
          columnNumber: 11
        }, this), " ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("br", {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 152,
          columnNumber: 18
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Form.Field, {
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("label", {
            children: "Upload Example Data"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 154,
            columnNumber: 13
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Input, {
            label: "data",
            labelPosition: "right",
            type: "file",
            onChange: this.retrieveFileSampleData
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 155,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 153,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("br", {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 163,
          columnNumber: 11
        }, this), " ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("br", {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 163,
          columnNumber: 18
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Form.Field, {
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("label", {
            children: "Upload Inference Function"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 165,
            columnNumber: 13
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 166,
            columnNumber: 13
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Input, {
            label: "model",
            labelPosition: "right",
            type: "file",
            onChange: this.retrieveFileEvalFunction
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 168,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 164,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("br", {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 170,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Message, {
          error: true,
          header: "Oops!",
          content: this.state.errorMessage
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 171,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Button, {
          loading: this.state.loading,
          primary: true,
          children: "Create!"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 172,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("br", {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 175,
          columnNumber: 11
        }, this), " ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("br", {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 175,
          columnNumber: 18
        }, this), " ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("br", {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 175,
          columnNumber: 25
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 121,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 116,
      columnNumber: 7
    }, this);
  }

}

/* harmony default export */ __webpack_exports__["default"] = (CompetitionNew);

/***/ }),

/***/ "@ipld/dag-cbor":
/*!*********************************!*\
  !*** external "@ipld/dag-cbor" ***!
  \*********************************/
/***/ (function(module) {

"use strict";
module.exports = require("@ipld/dag-cbor");;

/***/ }),

/***/ "@ipld/dag-json":
/*!*********************************!*\
  !*** external "@ipld/dag-json" ***!
  \*********************************/
/***/ (function(module) {

"use strict";
module.exports = require("@ipld/dag-json");;

/***/ }),

/***/ "@ipld/dag-pb":
/*!*******************************!*\
  !*** external "@ipld/dag-pb" ***!
  \*******************************/
/***/ (function(module) {

"use strict";
module.exports = require("@ipld/dag-pb");;

/***/ }),

/***/ "any-signal":
/*!*****************************!*\
  !*** external "any-signal" ***!
  \*****************************/
/***/ (function(module) {

"use strict";
module.exports = require("any-signal");;

/***/ }),

/***/ "blob-to-it":
/*!*****************************!*\
  !*** external "blob-to-it" ***!
  \*****************************/
/***/ (function(module) {

"use strict";
module.exports = require("blob-to-it");;

/***/ }),

/***/ "browser-readablestream-to-it":
/*!***********************************************!*\
  !*** external "browser-readablestream-to-it" ***!
  \***********************************************/
/***/ (function(module) {

"use strict";
module.exports = require("browser-readablestream-to-it");;

/***/ }),

/***/ "crypto":
/*!*************************!*\
  !*** external "crypto" ***!
  \*************************/
/***/ (function(module) {

"use strict";
module.exports = require("crypto");;

/***/ }),

/***/ "debug":
/*!************************!*\
  !*** external "debug" ***!
  \************************/
/***/ (function(module) {

"use strict";
module.exports = require("debug");;

/***/ }),

/***/ "err-code":
/*!***************************!*\
  !*** external "err-code" ***!
  \***************************/
/***/ (function(module) {

"use strict";
module.exports = require("err-code");;

/***/ }),

/***/ "http":
/*!***********************!*\
  !*** external "http" ***!
  \***********************/
/***/ (function(module) {

"use strict";
module.exports = require("http");;

/***/ }),

/***/ "https":
/*!************************!*\
  !*** external "https" ***!
  \************************/
/***/ (function(module) {

"use strict";
module.exports = require("https");;

/***/ }),

/***/ "ipfs-utils/src/env.js":
/*!****************************************!*\
  !*** external "ipfs-utils/src/env.js" ***!
  \****************************************/
/***/ (function(module) {

"use strict";
module.exports = require("ipfs-utils/src/env.js");;

/***/ }),

/***/ "ipfs-utils/src/files/glob-source.js":
/*!******************************************************!*\
  !*** external "ipfs-utils/src/files/glob-source.js" ***!
  \******************************************************/
/***/ (function(module) {

"use strict";
module.exports = require("ipfs-utils/src/files/glob-source.js");;

/***/ }),

/***/ "ipfs-utils/src/files/url-source.js":
/*!*****************************************************!*\
  !*** external "ipfs-utils/src/files/url-source.js" ***!
  \*****************************************************/
/***/ (function(module) {

"use strict";
module.exports = require("ipfs-utils/src/files/url-source.js");;

/***/ }),

/***/ "ipfs-utils/src/http.js":
/*!*****************************************!*\
  !*** external "ipfs-utils/src/http.js" ***!
  \*****************************************/
/***/ (function(module) {

"use strict";
module.exports = require("ipfs-utils/src/http.js");;

/***/ }),

/***/ "is-ip":
/*!************************!*\
  !*** external "is-ip" ***!
  \************************/
/***/ (function(module) {

"use strict";
module.exports = require("is-ip");;

/***/ }),

/***/ "it-all":
/*!*************************!*\
  !*** external "it-all" ***!
  \*************************/
/***/ (function(module) {

"use strict";
module.exports = require("it-all");;

/***/ }),

/***/ "it-first":
/*!***************************!*\
  !*** external "it-first" ***!
  \***************************/
/***/ (function(module) {

"use strict";
module.exports = require("it-first");;

/***/ }),

/***/ "it-last":
/*!**************************!*\
  !*** external "it-last" ***!
  \**************************/
/***/ (function(module) {

"use strict";
module.exports = require("it-last");;

/***/ }),

/***/ "it-map":
/*!*************************!*\
  !*** external "it-map" ***!
  \*************************/
/***/ (function(module) {

"use strict";
module.exports = require("it-map");;

/***/ }),

/***/ "it-peekable":
/*!******************************!*\
  !*** external "it-peekable" ***!
  \******************************/
/***/ (function(module) {

"use strict";
module.exports = require("it-peekable");;

/***/ }),

/***/ "it-to-stream":
/*!*******************************!*\
  !*** external "it-to-stream" ***!
  \*******************************/
/***/ (function(module) {

"use strict";
module.exports = require("it-to-stream");;

/***/ }),

/***/ "merge-options":
/*!********************************!*\
  !*** external "merge-options" ***!
  \********************************/
/***/ (function(module) {

"use strict";
module.exports = require("merge-options");;

/***/ }),

/***/ "multiformats/bases/base64":
/*!********************************************!*\
  !*** external "multiformats/bases/base64" ***!
  \********************************************/
/***/ (function(module) {

"use strict";
module.exports = require("multiformats/bases/base64");;

/***/ }),

/***/ "multiformats/basics":
/*!**************************************!*\
  !*** external "multiformats/basics" ***!
  \**************************************/
/***/ (function(module) {

"use strict";
module.exports = require("multiformats/basics");;

/***/ }),

/***/ "multiformats/cid":
/*!***********************************!*\
  !*** external "multiformats/cid" ***!
  \***********************************/
/***/ (function(module) {

"use strict";
module.exports = require("multiformats/cid");;

/***/ }),

/***/ "multiformats/hashes/identity":
/*!***********************************************!*\
  !*** external "multiformats/hashes/identity" ***!
  \***********************************************/
/***/ (function(module) {

"use strict";
module.exports = require("multiformats/hashes/identity");;

/***/ }),

/***/ "next-routes":
/*!******************************!*\
  !*** external "next-routes" ***!
  \******************************/
/***/ (function(module) {

"use strict";
module.exports = require("next-routes");;

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/head");;

/***/ }),

/***/ "parse-duration":
/*!*********************************!*\
  !*** external "parse-duration" ***!
  \*********************************/
/***/ (function(module) {

"use strict";
module.exports = require("parse-duration");;

/***/ }),

/***/ "protobufjs/minimal.js":
/*!****************************************!*\
  !*** external "protobufjs/minimal.js" ***!
  \****************************************/
/***/ (function(module) {

"use strict";
module.exports = require("protobufjs/minimal.js");;

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ (function(module) {

"use strict";
module.exports = require("react");;

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ (function(module) {

"use strict";
module.exports = require("react/jsx-dev-runtime");;

/***/ }),

/***/ "semantic-ui-react":
/*!************************************!*\
  !*** external "semantic-ui-react" ***!
  \************************************/
/***/ (function(module) {

"use strict";
module.exports = require("semantic-ui-react");;

/***/ }),

/***/ "stream-to-it/source.js":
/*!*****************************************!*\
  !*** external "stream-to-it/source.js" ***!
  \*****************************************/
/***/ (function(module) {

"use strict";
module.exports = require("stream-to-it/source.js");;

/***/ }),

/***/ "uint8arrays/from-string":
/*!******************************************!*\
  !*** external "uint8arrays/from-string" ***!
  \******************************************/
/***/ (function(module) {

"use strict";
module.exports = require("uint8arrays/from-string");;

/***/ }),

/***/ "uint8arrays/to-string":
/*!****************************************!*\
  !*** external "uint8arrays/to-string" ***!
  \****************************************/
/***/ (function(module) {

"use strict";
module.exports = require("uint8arrays/to-string");;

/***/ }),

/***/ "web3":
/*!***********************!*\
  !*** external "web3" ***!
  \***********************/
/***/ (function(module) {

"use strict";
module.exports = require("web3");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = __webpack_require__.X(0, ["vendors-node_modules_ipfs-http-client_src_index_js","components_Layout_js-ethereum_factory_js"], function() { return __webpack_exec__("./pages/competitions/new.js"); });
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZXNlYXJjaHByb2ovLi9wYWdlcy9jb21wZXRpdGlvbnMvbmV3LmpzIiwid2VicGFjazovL3Jlc2VhcmNocHJvai9leHRlcm5hbCBcIkBpcGxkL2RhZy1jYm9yXCIiLCJ3ZWJwYWNrOi8vcmVzZWFyY2hwcm9qL2V4dGVybmFsIFwiQGlwbGQvZGFnLWpzb25cIiIsIndlYnBhY2s6Ly9yZXNlYXJjaHByb2ovZXh0ZXJuYWwgXCJAaXBsZC9kYWctcGJcIiIsIndlYnBhY2s6Ly9yZXNlYXJjaHByb2ovZXh0ZXJuYWwgXCJhbnktc2lnbmFsXCIiLCJ3ZWJwYWNrOi8vcmVzZWFyY2hwcm9qL2V4dGVybmFsIFwiYmxvYi10by1pdFwiIiwid2VicGFjazovL3Jlc2VhcmNocHJvai9leHRlcm5hbCBcImJyb3dzZXItcmVhZGFibGVzdHJlYW0tdG8taXRcIiIsIndlYnBhY2s6Ly9yZXNlYXJjaHByb2ovZXh0ZXJuYWwgXCJjcnlwdG9cIiIsIndlYnBhY2s6Ly9yZXNlYXJjaHByb2ovZXh0ZXJuYWwgXCJkZWJ1Z1wiIiwid2VicGFjazovL3Jlc2VhcmNocHJvai9leHRlcm5hbCBcImVyci1jb2RlXCIiLCJ3ZWJwYWNrOi8vcmVzZWFyY2hwcm9qL2V4dGVybmFsIFwiaHR0cFwiIiwid2VicGFjazovL3Jlc2VhcmNocHJvai9leHRlcm5hbCBcImh0dHBzXCIiLCJ3ZWJwYWNrOi8vcmVzZWFyY2hwcm9qL2V4dGVybmFsIFwiaXBmcy11dGlscy9zcmMvZW52LmpzXCIiLCJ3ZWJwYWNrOi8vcmVzZWFyY2hwcm9qL2V4dGVybmFsIFwiaXBmcy11dGlscy9zcmMvZmlsZXMvZ2xvYi1zb3VyY2UuanNcIiIsIndlYnBhY2s6Ly9yZXNlYXJjaHByb2ovZXh0ZXJuYWwgXCJpcGZzLXV0aWxzL3NyYy9maWxlcy91cmwtc291cmNlLmpzXCIiLCJ3ZWJwYWNrOi8vcmVzZWFyY2hwcm9qL2V4dGVybmFsIFwiaXBmcy11dGlscy9zcmMvaHR0cC5qc1wiIiwid2VicGFjazovL3Jlc2VhcmNocHJvai9leHRlcm5hbCBcImlzLWlwXCIiLCJ3ZWJwYWNrOi8vcmVzZWFyY2hwcm9qL2V4dGVybmFsIFwiaXQtYWxsXCIiLCJ3ZWJwYWNrOi8vcmVzZWFyY2hwcm9qL2V4dGVybmFsIFwiaXQtZmlyc3RcIiIsIndlYnBhY2s6Ly9yZXNlYXJjaHByb2ovZXh0ZXJuYWwgXCJpdC1sYXN0XCIiLCJ3ZWJwYWNrOi8vcmVzZWFyY2hwcm9qL2V4dGVybmFsIFwiaXQtbWFwXCIiLCJ3ZWJwYWNrOi8vcmVzZWFyY2hwcm9qL2V4dGVybmFsIFwiaXQtcGVla2FibGVcIiIsIndlYnBhY2s6Ly9yZXNlYXJjaHByb2ovZXh0ZXJuYWwgXCJpdC10by1zdHJlYW1cIiIsIndlYnBhY2s6Ly9yZXNlYXJjaHByb2ovZXh0ZXJuYWwgXCJtZXJnZS1vcHRpb25zXCIiLCJ3ZWJwYWNrOi8vcmVzZWFyY2hwcm9qL2V4dGVybmFsIFwibXVsdGlmb3JtYXRzL2Jhc2VzL2Jhc2U2NFwiIiwid2VicGFjazovL3Jlc2VhcmNocHJvai9leHRlcm5hbCBcIm11bHRpZm9ybWF0cy9iYXNpY3NcIiIsIndlYnBhY2s6Ly9yZXNlYXJjaHByb2ovZXh0ZXJuYWwgXCJtdWx0aWZvcm1hdHMvY2lkXCIiLCJ3ZWJwYWNrOi8vcmVzZWFyY2hwcm9qL2V4dGVybmFsIFwibXVsdGlmb3JtYXRzL2hhc2hlcy9pZGVudGl0eVwiIiwid2VicGFjazovL3Jlc2VhcmNocHJvai9leHRlcm5hbCBcIm5leHQtcm91dGVzXCIiLCJ3ZWJwYWNrOi8vcmVzZWFyY2hwcm9qL2V4dGVybmFsIFwibmV4dC9oZWFkXCIiLCJ3ZWJwYWNrOi8vcmVzZWFyY2hwcm9qL2V4dGVybmFsIFwicGFyc2UtZHVyYXRpb25cIiIsIndlYnBhY2s6Ly9yZXNlYXJjaHByb2ovZXh0ZXJuYWwgXCJwcm90b2J1ZmpzL21pbmltYWwuanNcIiIsIndlYnBhY2s6Ly9yZXNlYXJjaHByb2ovZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovL3Jlc2VhcmNocHJvai9leHRlcm5hbCBcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiIiwid2VicGFjazovL3Jlc2VhcmNocHJvai9leHRlcm5hbCBcInNlbWFudGljLXVpLXJlYWN0XCIiLCJ3ZWJwYWNrOi8vcmVzZWFyY2hwcm9qL2V4dGVybmFsIFwic3RyZWFtLXRvLWl0L3NvdXJjZS5qc1wiIiwid2VicGFjazovL3Jlc2VhcmNocHJvai9leHRlcm5hbCBcInVpbnQ4YXJyYXlzL2Zyb20tc3RyaW5nXCIiLCJ3ZWJwYWNrOi8vcmVzZWFyY2hwcm9qL2V4dGVybmFsIFwidWludDhhcnJheXMvdG8tc3RyaW5nXCIiLCJ3ZWJwYWNrOi8vcmVzZWFyY2hwcm9qL2V4dGVybmFsIFwid2ViM1wiIl0sIm5hbWVzIjpbInByb2plY3RJZCIsInByb2plY3RTZWNyZXQiLCJhdXRoIiwiQnVmZmVyIiwiZnJvbSIsInRvU3RyaW5nIiwiY2xpZW50IiwiY3JlYXRlIiwiaG9zdCIsInBvcnQiLCJwcm90b2NvbCIsImhlYWRlcnMiLCJhdXRob3JpemF0aW9uIiwiQ29tcGV0aXRpb25OZXciLCJDb21wb25lbnQiLCJtaW5pbXVtQ29udHJpYnV0aW9uIiwiZXJyb3JNZXNzYWdlIiwibG9hZGluZyIsImxhYmVsIiwibmFtZSIsImRlc2NyaXB0aW9uIiwiZmlsZVNhbXBsZURhdGEiLCJmaWxlRXZhbEZ1bmN0aW9uIiwidXJsQXJyU2FtcGxlRGF0YSIsInVybEFyckV2YWxGdW5jdGlvbiIsImV2ZW50IiwicHJldmVudERlZmF1bHQiLCJzZXRTdGF0ZSIsInVybEltYWdlIiwicmVzdWx0IiwiYWRkIiwic3RhdGUiLCJ0aGVuIiwiY29uc29sZSIsImxvZyIsInBhdGgiLCJ1cmxGdW5jIiwicmVzdWx0MiIsImFjY291bnRzIiwid2ViMyIsImZhY3RvcnkiLCJzZW5kIiwidmFsdWUiLCJlcnIiLCJtZXNzYWdlIiwiZXJyb3IiLCJlIiwiZGF0YSIsInRhcmdldCIsImZpbGVzIiwicmVhZGVyIiwid2luZG93IiwiRmlsZVJlYWRlciIsInJlYWRBc0FycmF5QnVmZmVyIiwib25sb2FkZW5kIiwicmVuZGVyIiwib25TdWJtaXQiLCJyZXRyaWV2ZUZpbGVTYW1wbGVEYXRhIiwicmV0cmlldmVGaWxlRXZhbEZ1bmN0aW9uIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBLE1BQU1BLFNBQVMsR0FBRyw2QkFBbEI7QUFDQSxNQUFNQyxhQUFhLEdBQUcsa0NBQXRCO0FBQ0EsTUFBTUMsSUFBSSxHQUNOLFdBQVdDLE1BQU0sQ0FBQ0MsSUFBUCxDQUFZSixTQUFTLEdBQUcsR0FBWixHQUFrQkMsYUFBOUIsRUFBNkNJLFFBQTdDLENBQXNELFFBQXRELENBRGY7QUFHQSxNQUFNQyxNQUFNLEdBQUdDLHdEQUFNLENBQUM7QUFDbEJDLE1BQUksRUFBRSxnQkFEWTtBQUVsQkMsTUFBSSxFQUFFLElBRlk7QUFHbEJDLFVBQVEsRUFBRSxPQUhRO0FBSWxCQyxTQUFPLEVBQUU7QUFDTEMsaUJBQWEsRUFBRVY7QUFEVjtBQUpTLENBQUQsQ0FBckI7O0FBUUEsTUFBTVcsY0FBTixTQUE2QkMsNENBQTdCLENBQXVDO0FBQUE7QUFBQTs7QUFBQSxtQ0FDN0I7QUFDTkMseUJBQW1CLEVBQUUsRUFEZjtBQUVOQyxrQkFBWSxFQUFFLEVBRlI7QUFHTkMsYUFBTyxFQUFFLEtBSEg7QUFJTkMsV0FBSyxFQUFFLEVBSkQ7QUFLTkMsVUFBSSxFQUFFLEVBTEE7QUFNTkMsaUJBQVcsRUFBRSxFQU5QO0FBT05DLG9CQUFjLEVBQUUsSUFQVjtBQVFOQyxzQkFBZ0IsRUFBRSxJQVJaO0FBU05DLHNCQUFnQixFQUFDLEVBVFg7QUFVTkMsd0JBQWtCLEVBQUM7QUFWYixLQUQ2Qjs7QUFBQSxzQ0FnQjFCLE1BQU9DLEtBQVAsSUFBaUI7QUFFMUJBLFdBQUssQ0FBQ0MsY0FBTjtBQUNBLFdBQUtDLFFBQUwsQ0FBYztBQUFFVixlQUFPLEVBQUUsSUFBWDtBQUFpQkQsb0JBQVksRUFBRTtBQUEvQixPQUFkOztBQUVBLFVBQUk7QUFF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Ozs7Ozs7Ozs7QUNBQSx3Qzs7Ozs7Ozs7Ozs7QUNBQSx3Qzs7Ozs7Ozs7Ozs7QUNBQSwwRDs7Ozs7Ozs7Ozs7QUNBQSxvQzs7Ozs7Ozs7Ozs7QUNBQSxtQzs7Ozs7Ozs7Ozs7QUNBQSxzQzs7Ozs7Ozs7Ozs7QUNBQSxrQzs7Ozs7Ozs7Ozs7QUNBQSxtQzs7Ozs7Ozs7Ozs7QUNBQSxtRDs7Ozs7Ozs7Ozs7QUNBQSxpRTs7Ozs7Ozs7Ozs7QUNBQSxnRTs7Ozs7Ozs7Ozs7QUNBQSxvRDs7Ozs7Ozs7Ozs7QUNBQSxtQzs7Ozs7Ozs7Ozs7QUNBQSxvQzs7Ozs7Ozs7Ozs7QUNBQSxzQzs7Ozs7Ozs7Ozs7QUNBQSxxQzs7Ozs7Ozs7Ozs7QUNBQSxvQzs7Ozs7Ozs7Ozs7QUNBQSx5Qzs7Ozs7Ozs7Ozs7QUNBQSwwQzs7Ozs7Ozs7Ozs7QUNBQSwyQzs7Ozs7Ozs7Ozs7QUNBQSx1RDs7Ozs7Ozs7Ozs7QUNBQSxpRDs7Ozs7Ozs7Ozs7QUNBQSw4Qzs7Ozs7Ozs7Ozs7QUNBQSwwRDs7Ozs7Ozs7Ozs7QUNBQSx5Qzs7Ozs7Ozs7Ozs7QUNBQSx1Qzs7Ozs7Ozs7Ozs7QUNBQSw0Qzs7Ozs7Ozs7Ozs7QUNBQSxtRDs7Ozs7Ozs7Ozs7QUNBQSxtQzs7Ozs7Ozs7Ozs7QUNBQSxtRDs7Ozs7Ozs7Ozs7QUNBQSwrQzs7Ozs7Ozs7Ozs7QUNBQSxvRDs7Ozs7Ozs7Ozs7QUNBQSxxRDs7Ozs7Ozs7Ozs7QUNBQSxtRDs7Ozs7Ozs7Ozs7QUNBQSxrQyIsImZpbGUiOiJwYWdlcy9jb21wZXRpdGlvbnMvbmV3LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBGb3JtLCBCdXR0b24sIElucHV0LCBNZXNzYWdlLCBEcm9wZG93biB9IGZyb20gXCJzZW1hbnRpYy11aS1yZWFjdFwiO1xyXG5pbXBvcnQgTGF5b3V0IGZyb20gXCIuLi8uLi9jb21wb25lbnRzL0xheW91dFwiO1xyXG5pbXBvcnQgZmFjdG9yeSBmcm9tIFwiLi4vLi4vZXRoZXJldW0vZmFjdG9yeVwiO1xyXG5pbXBvcnQgd2ViMyBmcm9tIFwiLi4vLi4vZXRoZXJldW0vd2ViM1wiO1xyXG5cclxuaW1wb3J0IHsgY3JlYXRlIH0gZnJvbSAnaXBmcy1odHRwLWNsaWVudCdcclxuY29uc3QgcHJvamVjdElkID0gJzJHODIxTEd1ZEdNMmM4QjM2V0dySlVjbUZ3Qic7XHJcbmNvbnN0IHByb2plY3RTZWNyZXQgPSAnMjFjYTEwYjhjZTNiY2IwYjU1NjgzMmJlYmIxNTBlZWUnO1xyXG5jb25zdCBhdXRoID1cclxuICAgICdCYXNpYyAnICsgQnVmZmVyLmZyb20ocHJvamVjdElkICsgJzonICsgcHJvamVjdFNlY3JldCkudG9TdHJpbmcoJ2Jhc2U2NCcpO1xyXG5cclxuY29uc3QgY2xpZW50ID0gY3JlYXRlKHtcclxuICAgIGhvc3Q6ICdpcGZzLmluZnVyYS5pbycsXHJcbiAgICBwb3J0OiA1MDAxLFxyXG4gICAgcHJvdG9jb2w6ICdodHRwcycsXHJcbiAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgYXV0aG9yaXphdGlvbjogYXV0aCxcclxuICAgIH0sXHJcbn0pO1xyXG5jbGFzcyBDb21wZXRpdGlvbk5ldyBleHRlbmRzIENvbXBvbmVudCB7XHJcbiAgc3RhdGUgPSB7XHJcbiAgICBtaW5pbXVtQ29udHJpYnV0aW9uOiBcIlwiLFxyXG4gICAgZXJyb3JNZXNzYWdlOiBcIlwiLFxyXG4gICAgbG9hZGluZzogZmFsc2UsXHJcbiAgICBsYWJlbDogXCJcIixcclxuICAgIG5hbWU6IFwiXCIsXHJcbiAgICBkZXNjcmlwdGlvbjogXCJcIixcclxuICAgIGZpbGVTYW1wbGVEYXRhOiBudWxsLFxyXG4gICAgZmlsZUV2YWxGdW5jdGlvbjogbnVsbCxcclxuICAgIHVybEFyclNhbXBsZURhdGE6XCJcIixcclxuICAgIHVybEFyckV2YWxGdW5jdGlvbjpcIlwiLFxyXG4gIH07XHJcblxyXG4gXHJcbiAgXHJcbiAgb25TdWJtaXQgPSBhc3luYyAoZXZlbnQpID0+IHtcclxuICAgIFxyXG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgIHRoaXMuc2V0U3RhdGUoeyBsb2FkaW5nOiB0cnVlLCBlcnJvck1lc3NhZ2U6IFwiXCIgfSk7XHJcblxyXG4gICAgdHJ5IHtcclxuXHJcbiAgICAgIGxldCB1cmxJbWFnZSA9ICcnXHJcbiAgICAgIGxldCByZXN1bHQgPWF3YWl0IGNsaWVudC5hZGQodGhpcy5zdGF0ZS5maWxlU2FtcGxlRGF0YSlcclxuICAudGhlbihyZXN1bHQgPT4ge1xyXG4gICAgY29uc29sZS5sb2coXCJ3XCIrcmVzdWx0LnBhdGgpO1xyXG4gICAgdXJsSW1hZ2U9ICdodHRwczovL21sLmluZnVyYS1pcGZzLmlvL2lwZnMvJysgcmVzdWx0LnBhdGg7XHJcbiAgICB0aGlzLnNldFN0YXRlKHsgdXJsQXJyU2FtcGxlRGF0YTp1cmxJbWFnZX0pO1xyXG4gICAgY29uc29sZS5sb2codXJsSW1hZ2UpXHJcblxyXG4gIH0pO1xyXG5jb25zb2xlLmxvZyhyZXN1bHQpXHJcblxyXG4gIGxldCB1cmxGdW5jID0gJydcclxuICBsZXQgcmVzdWx0MiA9IGF3YWl0IGNsaWVudC5hZGQodGhpcy5zdGF0ZS5maWxlRXZhbEZ1bmN0aW9uKVxyXG4gIC50aGVuKHJlc3VsdCA9PiB7XHJcbiAgICBjb25zb2xlLmxvZyhyZXN1bHQucGF0aCk7XHJcbiAgICB1cmxGdW5jPSAnaHR0cHM6Ly9tbC5pbmZ1cmEtaXBmcy5pby9pcGZzLycrIHJlc3VsdC5wYXRoO1xyXG4gICAgdGhpcy5zZXRTdGF0ZSh7IHVybEFyckV2YWxGdW5jdGlvbjp1cmxGdW5jfSk7XHJcbiAgfSk7XHJcblxyXG5cclxuXHJcblxyXG4gIGNvbnNvbGUubG9nKFwiU3NcIit1cmxJbWFnZSx1cmxGdW5jKVxyXG5cclxuICAgICAgdHJ5IHtcclxuICAgICAgICBjb25zdCBhY2NvdW50cyA9IGF3YWl0IHdlYjMuZXRoLmdldEFjY291bnRzKCk7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJsb2dnZyBpdFwiKyB0aGlzLnN0YXRlLnVybEFyclNhbXBsZURhdGErdGhpcy5zdGF0ZS51cmxBcnJFdmFsRnVuY3Rpb24pXHJcblxyXG4gICAgICAgIGF3YWl0IGZhY3RvcnkubWV0aG9kc1xyXG4gICAgICAgICAgLmNyZWF0ZUNvbXBldGl0aW9uKHRoaXMuc3RhdGUubWluaW11bUNvbnRyaWJ1dGlvbiwgdGhpcy5zdGF0ZS5uYW1lLCB0aGlzLnN0YXRlLmRlc2NyaXB0aW9uLCB0aGlzLnN0YXRlLnVybEFyclNhbXBsZURhdGEgLHRoaXMuc3RhdGUudXJsQXJyRXZhbEZ1bmN0aW9uKVxyXG4gICAgICAgICAgLnNlbmQoe1xyXG4gICAgICAgICAgICB2YWx1ZTogXCIxMDBcIixcclxuICAgICAgICAgICAgZnJvbTogYWNjb3VudHNbMF0sXHJcbiAgICAgICAgICB9KTtcclxuICAgICAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGVycm9yTWVzc2FnZTogZXJyLm1lc3NhZ2UgfSk7XHJcbiAgICAgIH1cclxuICAgICAgXHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICBjb25zb2xlLmxvZyhlcnJvci5tZXNzYWdlKTtcclxuICAgIH1cclxuICAgIHRoaXMuc2V0U3RhdGUoeyBsb2FkaW5nOiBmYWxzZSB9KTtcclxuICB9O1xyXG5cclxuICByZXRyaWV2ZUZpbGVTYW1wbGVEYXRhID0gKGUpID0+IHtcclxuICAgIGNvbnN0IGRhdGEgPSBlLnRhcmdldC5maWxlc1swXTtcclxuICAgIGNvbnN0IHJlYWRlciA9IG5ldyB3aW5kb3cuRmlsZVJlYWRlcigpO1xyXG4gICAgcmVhZGVyLnJlYWRBc0FycmF5QnVmZmVyKGRhdGEpO1xyXG4gICAgcmVhZGVyLm9ubG9hZGVuZCA9ICgpID0+IHtcclxuICAgICAgY29uc29sZS5sb2coXCJCdWZmZXIgZGF0YTogXCIsIEJ1ZmZlcihyZWFkZXIucmVzdWx0KSk7XHJcbiAgICAgIHRoaXMuc2V0U3RhdGUoeyBmaWxlU2FtcGxlRGF0YTogQnVmZmVyKHJlYWRlci5yZXN1bHQpfSlcclxuICAgIH1cclxuICAgIGUucHJldmVudERlZmF1bHQoKTsgIFxyXG4gIH1cclxuXHJcbiAgcmV0cmlldmVGaWxlRXZhbEZ1bmN0aW9uID0gKGUpID0+IHtcclxuICAgIGNvbnN0IGRhdGEgPSBlLnRhcmdldC5maWxlc1swXTtcclxuICAgIGNvbnN0IHJlYWRlciA9IG5ldyB3aW5kb3cuRmlsZVJlYWRlcigpO1xyXG4gICAgcmVhZGVyLnJlYWRBc0FycmF5QnVmZmVyKGRhdGEpO1xyXG5cclxuXHJcbiAgICByZWFkZXIub25sb2FkZW5kID0gKCkgPT4ge1xyXG4gICAgICBjb25zb2xlLmxvZyhcIkJ1ZmZlciBkYXRhOiBcIiwgQnVmZmVyKHJlYWRlci5yZXN1bHQpKTtcclxuICAgICAgdGhpcy5zZXRTdGF0ZSh7IGZpbGVFdmFsRnVuY3Rpb246IEJ1ZmZlcihyZWFkZXIucmVzdWx0KX0pXHJcbiAgICB9XHJcblxyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpOyAgXHJcbiAgfVxyXG5cclxuICBcclxuICByZW5kZXIoKSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8TGF5b3V0PlxyXG4gICAgICAgIDxoMz5DcmVhdGUgUHJvamVjdCA8L2gzPlxyXG4gICAgICAgIDxwPlxyXG4gICAgICAgIEEgcHJvamVjdCBpcyBhIGNvbGxhYm9yYXRpdmUgZW52aXJvbm1lbnQgd2hlcmUgQUkgYnVzaW5lc3NlcyBjYW4gb2ZmZXIgZW5jcnlwdGVkIE1hY2hpbmUgTGVhcm5pbmcgc2VydmljZXMsIGFuZCBjcm93ZHNvdXJjZSBkYXRhIGFuZCBtb2RlbHMuXHJcbiAgICAgICAgPC9wPlxyXG4gICAgICAgIDxGb3JtIG9uU3VibWl0PXt0aGlzLm9uU3VibWl0fSBlcnJvcj17ISF0aGlzLnN0YXRlLmVycm9yTWVzc2FnZX0+XHJcbiAgICAgICAgICA8YnIgLz5cclxuICAgICAgICAgIDxGb3JtLkZpZWxkPlxyXG4gICAgICAgICAgICA8bGFiZWw+TmFtZTwvbGFiZWw+XHJcbiAgICAgICAgICAgIDxJbnB1dFxyXG4gICAgICAgICAgICAgIGxhYmVsUG9zaXRpb249XCJyaWdodFwiXHJcbiAgICAgICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUubmFtZX1cclxuICAgICAgICAgICAgICBvbkNoYW5nZT17KGV2ZW50KSA9PiB0aGlzLnNldFN0YXRlKHsgbmFtZTogZXZlbnQudGFyZ2V0LnZhbHVlIH0pfVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgPC9Gb3JtLkZpZWxkPlxyXG4gICAgICAgICAgPEZvcm0uRmllbGQ+XHJcbiAgICAgICAgICAgIDxsYWJlbD5EZXNjcmlwdGlvbjwvbGFiZWw+XHJcbiAgICAgICAgICAgIDxJbnB1dFxyXG4gICAgICAgICAgICAgIGxhYmVsUG9zaXRpb249XCJyaWdodFwiXHJcbiAgICAgICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUuZGVzY3JpcHRpb259XHJcbiAgICAgICAgICAgICAgb25DaGFuZ2U9eyhldmVudCkgPT5cclxuICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBkZXNjcmlwdGlvbjogZXZlbnQudGFyZ2V0LnZhbHVlIH0pXHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgPC9Gb3JtLkZpZWxkPlxyXG4gICAgICAgICAgPEZvcm0uRmllbGQ+XHJcbiAgICAgICAgICAgIDxsYWJlbD5SZXdhcmQgRnVuZHM8L2xhYmVsPlxyXG4gICAgICAgICAgICA8SW5wdXRcclxuICAgICAgICAgICAgICBsYWJlbD1cIndlaVwiXHJcbiAgICAgICAgICAgICAgbGFiZWxQb3NpdGlvbj1cInJpZ2h0XCJcclxuICAgICAgICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS5taW5pbXVtQ29udHJpYnV0aW9ufVxyXG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZXZlbnQpID0+XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgbWluaW11bUNvbnRyaWJ1dGlvbjogZXZlbnQudGFyZ2V0LnZhbHVlIH0pXHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgPC9Gb3JtLkZpZWxkPlxyXG4gICAgICAgICAgPGJyIC8+IDxiciAvPlxyXG4gICAgICAgICAgPEZvcm0uRmllbGQ+XHJcbiAgICAgICAgICAgIDxsYWJlbD5VcGxvYWQgRXhhbXBsZSBEYXRhPC9sYWJlbD5cclxuICAgICAgICAgICAgPElucHV0XHJcbiAgICAgICAgICAgICAgbGFiZWw9XCJkYXRhXCJcclxuICAgICAgICAgICAgICBsYWJlbFBvc2l0aW9uPVwicmlnaHRcIlxyXG4gICAgICAgICAgICAgIHR5cGU9XCJmaWxlXCJcclxuICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5yZXRyaWV2ZUZpbGVTYW1wbGVEYXRhfVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgPC9Gb3JtLkZpZWxkPlxyXG4gICAgICAgICAgXHJcbiAgICAgICAgICA8YnIgLz4gPGJyIC8+XHJcbiAgICAgICAgICA8Rm9ybS5GaWVsZD5cclxuICAgICAgICAgICAgPGxhYmVsPlVwbG9hZCBJbmZlcmVuY2UgRnVuY3Rpb248L2xhYmVsPlxyXG4gICAgICAgICAgICA8cD5cclxuICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICA8SW5wdXQgbGFiZWw9XCJtb2RlbFwiIGxhYmVsUG9zaXRpb249XCJyaWdodFwiIHR5cGU9XCJmaWxlXCIgIG9uQ2hhbmdlPXt0aGlzLnJldHJpZXZlRmlsZUV2YWxGdW5jdGlvbn0gLz5cclxuICAgICAgICAgIDwvRm9ybS5GaWVsZD5cclxuICAgICAgICAgIDxiciAvPlxyXG4gICAgICAgICAgPE1lc3NhZ2UgZXJyb3IgaGVhZGVyPVwiT29wcyFcIiBjb250ZW50PXt0aGlzLnN0YXRlLmVycm9yTWVzc2FnZX0gLz5cclxuICAgICAgICAgIDxCdXR0b24gbG9hZGluZz17dGhpcy5zdGF0ZS5sb2FkaW5nfSBwcmltYXJ5PlxyXG4gICAgICAgICAgICBDcmVhdGUhXHJcbiAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgIDxiciAvPiA8YnIgLz4gPGJyIC8+XHJcbiAgICAgICAgPC9Gb3JtPlxyXG4gICAgICA8L0xheW91dD5cclxuICAgICk7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBDb21wZXRpdGlvbk5ldztcclxuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQGlwbGQvZGFnLWNib3JcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBpcGxkL2RhZy1qc29uXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAaXBsZC9kYWctcGJcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImFueS1zaWduYWxcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImJsb2ItdG8taXRcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImJyb3dzZXItcmVhZGFibGVzdHJlYW0tdG8taXRcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImNyeXB0b1wiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiZGVidWdcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImVyci1jb2RlXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJodHRwXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJodHRwc1wiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiaXBmcy11dGlscy9zcmMvZW52LmpzXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJpcGZzLXV0aWxzL3NyYy9maWxlcy9nbG9iLXNvdXJjZS5qc1wiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiaXBmcy11dGlscy9zcmMvZmlsZXMvdXJsLXNvdXJjZS5qc1wiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiaXBmcy11dGlscy9zcmMvaHR0cC5qc1wiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiaXMtaXBcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIml0LWFsbFwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiaXQtZmlyc3RcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIml0LWxhc3RcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIml0LW1hcFwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiaXQtcGVla2FibGVcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIml0LXRvLXN0cmVhbVwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibWVyZ2Utb3B0aW9uc1wiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibXVsdGlmb3JtYXRzL2Jhc2VzL2Jhc2U2NFwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibXVsdGlmb3JtYXRzL2Jhc2ljc1wiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibXVsdGlmb3JtYXRzL2NpZFwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibXVsdGlmb3JtYXRzL2hhc2hlcy9pZGVudGl0eVwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC1yb3V0ZXNcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvaGVhZFwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicGFyc2UtZHVyYXRpb25cIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInByb3RvYnVmanMvbWluaW1hbC5qc1wiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwic2VtYW50aWMtdWktcmVhY3RcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInN0cmVhbS10by1pdC9zb3VyY2UuanNcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInVpbnQ4YXJyYXlzL2Zyb20tc3RyaW5nXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJ1aW50OGFycmF5cy90by1zdHJpbmdcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIndlYjNcIik7OyJdLCJzb3VyY2VSb290IjoiIn0=