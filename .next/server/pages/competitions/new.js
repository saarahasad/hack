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






const genderOptions = [{
  key: 'm',
  text: 'Male',
  value: 'male'
}, {
  key: 'f',
  text: 'Female',
  value: 'female'
}, {
  key: 'o',
  text: 'Other',
  value: 'other'
}];

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

    _defineProperty(this, "state", {});

    _defineProperty(this, "handleChange", (e, {
      value
    }) => this.setState({
      value
    }));
  }

  render() {
    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Layout__WEBPACK_IMPORTED_MODULE_3__.default, {
      style: {
        background: "#481a58"
      },
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Container, {
        style: {
          background: "#481a58",
          width: "100%",
          padding: "50px 50px 50px 50px"
        },
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Segment, {
          raised: true,
          style: {
            maxWidth: "15 rem",
            margin: "0 200px 200px 200px",
            background: "#EFF5F5"
          },
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Form, {
            style: {
              padding: "20px"
            },
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h2", {
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("font", {
                color: "#481a58",
                children: "Create Project"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 129,
                columnNumber: 15
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 129,
              columnNumber: 11
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Form.Field, {
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("label", {
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h4", {
                  children: "Name"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 131,
                  columnNumber: 20
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 131,
                columnNumber: 13
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Input, {
                placeholder: "Name of the Service",
                type: "text",
                onChange: this.retrieveFileSampleData
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 132,
                columnNumber: 13
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 130,
              columnNumber: 12
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Form.Field, {
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("label", {
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h4", {
                  children: "Description"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 139,
                  columnNumber: 20
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 139,
                columnNumber: 13
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Input, {
                placeholder: "Description of the Service",
                type: "textarea",
                onChange: this.retrieveFileSampleData
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 140,
                columnNumber: 15
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 138,
              columnNumber: 13
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Form.Field, {
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("label", {
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h4", {
                  children: "Upload Service Banner"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 148,
                  columnNumber: 22
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 148,
                columnNumber: 15
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Input, {
                label: "Image",
                labelPosition: "right",
                type: "file",
                onChange: this.retrieveFileSampleData
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 149,
                columnNumber: 15
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 147,
              columnNumber: 13
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Form.Group, {
              widths: 2,
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Form.Field, {
                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("label", {
                  children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h4", {
                    children: "Accuracy"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 158,
                    columnNumber: 20
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 158,
                  columnNumber: 13
                }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Input, {
                  label: "Percentage",
                  labelPosition: "right",
                  type: "number",
                  onChange: this.retrieveFileSampleData
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 159,
                  columnNumber: 13
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 157,
                columnNumber: 7
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Form.Field, {
                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("label", {
                  children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h4", {
                    children: "Upload Inference Function"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 167,
                    columnNumber: 20
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 167,
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
                lineNumber: 166,
                columnNumber: 5
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 156,
              columnNumber: 5
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Form.Field, {
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("label", {
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h4", {
                  children: "Deposit number"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 173,
                  columnNumber: 20
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 173,
                columnNumber: 13
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Input, {
                label: "wei",
                labelPosition: "right",
                type: "number",
                onChange: this.retrieveFileSampleData
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 174,
                columnNumber: 13
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 172,
              columnNumber: 9
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Form.Group, {
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Form.Field, {
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h4", {
                  children: ["Selected value: ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("font", {
                    color: "blue",
                    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("b", {
                      children: this.state.value
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 184,
                      columnNumber: 50
                    }, this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 184,
                    columnNumber: 31
                  }, this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 184,
                  columnNumber: 11
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 183,
                columnNumber: 9
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Form.Field, {
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Radio, {
                  label: "Image",
                  name: "radioGroup",
                  value: "Image",
                  checked: this.state.value === 'Image',
                  onChange: this.handleChange
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 187,
                  columnNumber: 11
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 186,
                columnNumber: 9
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Form.Field, {
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Radio, {
                  label: "Text",
                  name: "radioGroup",
                  value: "Text",
                  checked: this.state.value === 'Text',
                  onChange: this.handleChange
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 196,
                  columnNumber: 11
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 195,
                columnNumber: 9
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 182,
              columnNumber: 9
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Form.Field, {
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("label", {
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h4", {
                  children: "Upload Sample Data"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 206,
                  columnNumber: 20
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 206,
                columnNumber: 13
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Input, {
                label: "Sample Data",
                labelPosition: "right",
                type: "file",
                onChange: this.retrieveFileSampleData
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 207,
                columnNumber: 13
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 205,
              columnNumber: 9
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Form.Field, {
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("label", {
                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h4", {
                  children: "Deposit number"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 216,
                  columnNumber: 20
                }, this), " "]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 216,
                columnNumber: 13
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Input, {
                label: "wei",
                labelPosition: "right",
                type: "number",
                onChange: this.retrieveFileSampleData
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 217,
                columnNumber: 13
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 215,
              columnNumber: 9
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Button, {
              loading: this.state.loading,
              primary: true,
              children: "Create!"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 225,
              columnNumber: 9
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("br", {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 228,
              columnNumber: 13
            }, this), " ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("br", {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 228,
              columnNumber: 20
            }, this), " ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("br", {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 228,
              columnNumber: 27
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 128,
            columnNumber: 10
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 127,
          columnNumber: 9
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 126,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 125,
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
var __webpack_exports__ = __webpack_require__.X(0, ["vendors-node_modules_ipfs-http-client_src_index_js","components_Layout_js-ethereum_web3_js","ethereum_factory_js"], function() { return __webpack_exec__("./pages/competitions/new.js"); });
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZXNlYXJjaHByb2ovLi9wYWdlcy9jb21wZXRpdGlvbnMvbmV3LmpzIiwid2VicGFjazovL3Jlc2VhcmNocHJvai9leHRlcm5hbCBcIkBpcGxkL2RhZy1jYm9yXCIiLCJ3ZWJwYWNrOi8vcmVzZWFyY2hwcm9qL2V4dGVybmFsIFwiQGlwbGQvZGFnLWpzb25cIiIsIndlYnBhY2s6Ly9yZXNlYXJjaHByb2ovZXh0ZXJuYWwgXCJAaXBsZC9kYWctcGJcIiIsIndlYnBhY2s6Ly9yZXNlYXJjaHByb2ovZXh0ZXJuYWwgXCJhbnktc2lnbmFsXCIiLCJ3ZWJwYWNrOi8vcmVzZWFyY2hwcm9qL2V4dGVybmFsIFwiYmxvYi10by1pdFwiIiwid2VicGFjazovL3Jlc2VhcmNocHJvai9leHRlcm5hbCBcImJyb3dzZXItcmVhZGFibGVzdHJlYW0tdG8taXRcIiIsIndlYnBhY2s6Ly9yZXNlYXJjaHByb2ovZXh0ZXJuYWwgXCJjcnlwdG9cIiIsIndlYnBhY2s6Ly9yZXNlYXJjaHByb2ovZXh0ZXJuYWwgXCJkZWJ1Z1wiIiwid2VicGFjazovL3Jlc2VhcmNocHJvai9leHRlcm5hbCBcImVyci1jb2RlXCIiLCJ3ZWJwYWNrOi8vcmVzZWFyY2hwcm9qL2V4dGVybmFsIFwiaHR0cFwiIiwid2VicGFjazovL3Jlc2VhcmNocHJvai9leHRlcm5hbCBcImh0dHBzXCIiLCJ3ZWJwYWNrOi8vcmVzZWFyY2hwcm9qL2V4dGVybmFsIFwiaXBmcy11dGlscy9zcmMvZW52LmpzXCIiLCJ3ZWJwYWNrOi8vcmVzZWFyY2hwcm9qL2V4dGVybmFsIFwiaXBmcy11dGlscy9zcmMvZmlsZXMvZ2xvYi1zb3VyY2UuanNcIiIsIndlYnBhY2s6Ly9yZXNlYXJjaHByb2ovZXh0ZXJuYWwgXCJpcGZzLXV0aWxzL3NyYy9maWxlcy91cmwtc291cmNlLmpzXCIiLCJ3ZWJwYWNrOi8vcmVzZWFyY2hwcm9qL2V4dGVybmFsIFwiaXBmcy11dGlscy9zcmMvaHR0cC5qc1wiIiwid2VicGFjazovL3Jlc2VhcmNocHJvai9leHRlcm5hbCBcImlzLWlwXCIiLCJ3ZWJwYWNrOi8vcmVzZWFyY2hwcm9qL2V4dGVybmFsIFwiaXQtYWxsXCIiLCJ3ZWJwYWNrOi8vcmVzZWFyY2hwcm9qL2V4dGVybmFsIFwiaXQtZmlyc3RcIiIsIndlYnBhY2s6Ly9yZXNlYXJjaHByb2ovZXh0ZXJuYWwgXCJpdC1sYXN0XCIiLCJ3ZWJwYWNrOi8vcmVzZWFyY2hwcm9qL2V4dGVybmFsIFwiaXQtbWFwXCIiLCJ3ZWJwYWNrOi8vcmVzZWFyY2hwcm9qL2V4dGVybmFsIFwiaXQtcGVla2FibGVcIiIsIndlYnBhY2s6Ly9yZXNlYXJjaHByb2ovZXh0ZXJuYWwgXCJpdC10by1zdHJlYW1cIiIsIndlYnBhY2s6Ly9yZXNlYXJjaHByb2ovZXh0ZXJuYWwgXCJtZXJnZS1vcHRpb25zXCIiLCJ3ZWJwYWNrOi8vcmVzZWFyY2hwcm9qL2V4dGVybmFsIFwibXVsdGlmb3JtYXRzL2Jhc2VzL2Jhc2U2NFwiIiwid2VicGFjazovL3Jlc2VhcmNocHJvai9leHRlcm5hbCBcIm11bHRpZm9ybWF0cy9iYXNpY3NcIiIsIndlYnBhY2s6Ly9yZXNlYXJjaHByb2ovZXh0ZXJuYWwgXCJtdWx0aWZvcm1hdHMvY2lkXCIiLCJ3ZWJwYWNrOi8vcmVzZWFyY2hwcm9qL2V4dGVybmFsIFwibXVsdGlmb3JtYXRzL2hhc2hlcy9pZGVudGl0eVwiIiwid2VicGFjazovL3Jlc2VhcmNocHJvai9leHRlcm5hbCBcIm5leHQtcm91dGVzXCIiLCJ3ZWJwYWNrOi8vcmVzZWFyY2hwcm9qL2V4dGVybmFsIFwibmV4dC9oZWFkXCIiLCJ3ZWJwYWNrOi8vcmVzZWFyY2hwcm9qL2V4dGVybmFsIFwicGFyc2UtZHVyYXRpb25cIiIsIndlYnBhY2s6Ly9yZXNlYXJjaHByb2ovZXh0ZXJuYWwgXCJwcm90b2J1ZmpzL21pbmltYWwuanNcIiIsIndlYnBhY2s6Ly9yZXNlYXJjaHByb2ovZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovL3Jlc2VhcmNocHJvai9leHRlcm5hbCBcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiIiwid2VicGFjazovL3Jlc2VhcmNocHJvai9leHRlcm5hbCBcInNlbWFudGljLXVpLXJlYWN0XCIiLCJ3ZWJwYWNrOi8vcmVzZWFyY2hwcm9qL2V4dGVybmFsIFwic3RyZWFtLXRvLWl0L3NvdXJjZS5qc1wiIiwid2VicGFjazovL3Jlc2VhcmNocHJvai9leHRlcm5hbCBcInVpbnQ4YXJyYXlzL2Zyb20tc3RyaW5nXCIiLCJ3ZWJwYWNrOi8vcmVzZWFyY2hwcm9qL2V4dGVybmFsIFwidWludDhhcnJheXMvdG8tc3RyaW5nXCIiLCJ3ZWJwYWNrOi8vcmVzZWFyY2hwcm9qL2V4dGVybmFsIFwid2ViM1wiIl0sIm5hbWVzIjpbImdlbmRlck9wdGlvbnMiLCJrZXkiLCJ0ZXh0IiwidmFsdWUiLCJwcm9qZWN0SWQiLCJwcm9qZWN0U2VjcmV0IiwiYXV0aCIsIkJ1ZmZlciIsImZyb20iLCJ0b1N0cmluZyIsImNsaWVudCIsImNyZWF0ZSIsImhvc3QiLCJwb3J0IiwicHJvdG9jb2wiLCJoZWFkZXJzIiwiYXV0aG9yaXphdGlvbiIsIkNvbXBldGl0aW9uTmV3IiwiQ29tcG9uZW50IiwibWluaW11bUNvbnRyaWJ1dGlvbiIsImVycm9yTWVzc2FnZSIsImxvYWRpbmciLCJsYWJlbCIsIm5hbWUiLCJkZXNjcmlwdGlvbiIsImZpbGVTYW1wbGVEYXRhIiwiZmlsZUV2YWxGdW5jdGlvbiIsInVybEFyclNhbXBsZURhdGEiLCJ1cmxBcnJFdmFsRnVuY3Rpb24iLCJldmVudCIsInByZXZlbnREZWZhdWx0Iiwic2V0U3RhdGUiLCJ1cmxJbWFnZSIsInJlc3VsdCIsImFkZCIsInN0YXRlIiwidGhlbiIsImNvbnNvbGUiLCJsb2ciLCJwYXRoIiwidXJsRnVuYyIsInJlc3VsdDIiLCJhY2NvdW50cyIsIndlYjMiLCJmYWN0b3J5Iiwic2VuZCIsImVyciIsIm1lc3NhZ2UiLCJlcnJvciIsImUiLCJkYXRhIiwidGFyZ2V0IiwiZmlsZXMiLCJyZWFkZXIiLCJ3aW5kb3ciLCJGaWxlUmVhZGVyIiwicmVhZEFzQXJyYXlCdWZmZXIiLCJvbmxvYWRlbmQiLCJyZW5kZXIiLCJiYWNrZ3JvdW5kIiwid2lkdGgiLCJwYWRkaW5nIiwibWF4V2lkdGgiLCJtYXJnaW4iLCJyZXRyaWV2ZUZpbGVTYW1wbGVEYXRhIiwicmV0cmlldmVGaWxlRXZhbEZ1bmN0aW9uIiwiaGFuZGxlQ2hhbmdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQSxNQUFNQSxhQUFhLEdBQUcsQ0FDcEI7QUFBRUMsS0FBRyxFQUFFLEdBQVA7QUFBWUMsTUFBSSxFQUFFLE1BQWxCO0FBQTBCQyxPQUFLLEVBQUU7QUFBakMsQ0FEb0IsRUFFcEI7QUFBRUYsS0FBRyxFQUFFLEdBQVA7QUFBWUMsTUFBSSxFQUFFLFFBQWxCO0FBQTRCQyxPQUFLLEVBQUU7QUFBbkMsQ0FGb0IsRUFHcEI7QUFBRUYsS0FBRyxFQUFFLEdBQVA7QUFBWUMsTUFBSSxFQUFFLE9BQWxCO0FBQTJCQyxPQUFLLEVBQUU7QUFBbEMsQ0FIb0IsQ0FBdEI7QUFNQTtBQUNBLE1BQU1DLFNBQVMsR0FBRyw2QkFBbEI7QUFDQSxNQUFNQyxhQUFhLEdBQUcsa0NBQXRCO0FBQ0EsTUFBTUMsSUFBSSxHQUNOLFdBQVdDLE1BQU0sQ0FBQ0MsSUFBUCxDQUFZSixTQUFTLEdBQUcsR0FBWixHQUFrQkMsYUFBOUIsRUFBNkNJLFFBQTdDLENBQXNELFFBQXRELENBRGY7QUFHQSxNQUFNQyxNQUFNLEdBQUdDLHdEQUFNLENBQUM7QUFDbEJDLE1BQUksRUFBRSxnQkFEWTtBQUVsQkMsTUFBSSxFQUFFLElBRlk7QUFHbEJDLFVBQVEsRUFBRSxPQUhRO0FBSWxCQyxTQUFPLEVBQUU7QUFDTEMsaUJBQWEsRUFBRVY7QUFEVjtBQUpTLENBQUQsQ0FBckI7O0FBUUEsTUFBTVcsY0FBTixTQUE2QkMsNENBQTdCLENBQXVDO0FBQUE7QUFBQTs7QUFBQSxtQ0FDN0I7QUFDTkMseUJBQW1CLEVBQUUsRUFE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QUE7QUFBQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBRkY7QUE0TEQ7O0FBNVJvQzs7QUErUnZDLCtEQUFlSixjQUFmLEU7Ozs7Ozs7Ozs7O0FDelRBLDRDOzs7Ozs7Ozs7OztBQ0FBLDRDOzs7Ozs7Ozs7OztBQ0FBLDBDOzs7Ozs7Ozs7OztBQ0FBLHdDOzs7Ozs7Ozs7OztBQ0FBLHdDOzs7Ozs7Ozs7OztBQ0FBLDBEOzs7Ozs7Ozs7OztBQ0FBLG9DOzs7Ozs7Ozs7OztBQ0FBLG1DOzs7Ozs7Ozs7OztBQ0FBLHNDOzs7Ozs7Ozs7OztBQ0FBLGtDOzs7Ozs7Ozs7OztBQ0FBLG1DOzs7Ozs7Ozs7OztBQ0FBLG1EOzs7Ozs7Ozs7OztBQ0FBLGlFOzs7Ozs7Ozs7OztBQ0FBLGdFOzs7Ozs7Ozs7OztBQ0FBLG9EOzs7Ozs7Ozs7OztBQ0FBLG1DOzs7Ozs7Ozs7OztBQ0FBLG9DOzs7Ozs7Ozs7OztBQ0FBLHNDOzs7Ozs7Ozs7OztBQ0FBLHFDOzs7Ozs7Ozs7OztBQ0FBLG9DOzs7Ozs7Ozs7OztBQ0FBLHlDOzs7Ozs7Ozs7OztBQ0FBLDBDOzs7Ozs7Ozs7OztBQ0FBLDJDOzs7Ozs7Ozs7OztBQ0FBLHVEOzs7Ozs7Ozs7OztBQ0FBLGlEOzs7Ozs7Ozs7OztBQ0FBLDhDOzs7Ozs7Ozs7OztBQ0FBLDBEOzs7Ozs7Ozs7OztBQ0FBLHlDOzs7Ozs7Ozs7OztBQ0FBLHVDOzs7Ozs7Ozs7OztBQ0FBLDRDOzs7Ozs7Ozs7OztBQ0FBLG1EOzs7Ozs7Ozs7OztBQ0FBLG1DOzs7Ozs7Ozs7OztBQ0FBLG1EOzs7Ozs7Ozs7OztBQ0FBLCtDOzs7Ozs7Ozs7OztBQ0FBLG9EOzs7Ozs7Ozs7OztBQ0FBLHFEOzs7Ozs7Ozs7OztBQ0FBLG1EOzs7Ozs7Ozs7OztBQ0FBLGtDIiwiZmlsZSI6InBhZ2VzL2NvbXBldGl0aW9ucy9uZXcuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IEZvcm0sIEJ1dHRvbiwgSW5wdXQsIE1lc3NhZ2UsIERyb3Bkb3duLFNlbGVjdCwgVGV4dEFyZWEsSW1hZ2UsUmFkaW8sIFNlZ21lbnQsIENvbnRhaW5lcn0gZnJvbSBcInNlbWFudGljLXVpLXJlYWN0XCI7XHJcbmltcG9ydCBMYXlvdXQgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvTGF5b3V0XCI7XHJcbmltcG9ydCBmYWN0b3J5IGZyb20gXCIuLi8uLi9ldGhlcmV1bS9mYWN0b3J5XCI7XHJcbmltcG9ydCB3ZWIzIGZyb20gXCIuLi8uLi9ldGhlcmV1bS93ZWIzXCI7XHJcblxyXG5jb25zdCBnZW5kZXJPcHRpb25zID0gW1xyXG4gIHsga2V5OiAnbScsIHRleHQ6ICdNYWxlJywgdmFsdWU6ICdtYWxlJyB9LFxyXG4gIHsga2V5OiAnZicsIHRleHQ6ICdGZW1hbGUnLCB2YWx1ZTogJ2ZlbWFsZScgfSxcclxuICB7IGtleTogJ28nLCB0ZXh0OiAnT3RoZXInLCB2YWx1ZTogJ290aGVyJyB9LFxyXG5dXHJcblxyXG5pbXBvcnQgeyBjcmVhdGUgfSBmcm9tICdpcGZzLWh0dHAtY2xpZW50J1xyXG5jb25zdCBwcm9qZWN0SWQgPSAnMkc4MjFMR3VkR00yYzhCMzZXR3JKVWNtRndCJztcclxuY29uc3QgcHJvamVjdFNlY3JldCA9ICcyMWNhMTBiOGNlM2JjYjBiNTU2ODMyYmViYjE1MGVlZSc7XHJcbmNvbnN0IGF1dGggPVxyXG4gICAgJ0Jhc2ljICcgKyBCdWZmZXIuZnJvbShwcm9qZWN0SWQgKyAnOicgKyBwcm9qZWN0U2VjcmV0KS50b1N0cmluZygnYmFzZTY0Jyk7XHJcblxyXG5jb25zdCBjbGllbnQgPSBjcmVhdGUoe1xyXG4gICAgaG9zdDogJ2lwZnMuaW5mdXJhLmlvJyxcclxuICAgIHBvcnQ6IDUwMDEsXHJcbiAgICBwcm90b2NvbDogJ2h0dHBzJyxcclxuICAgIGhlYWRlcnM6IHtcclxuICAgICAgICBhdXRob3JpemF0aW9uOiBhdXRoLFxyXG4gICAgfSxcclxufSk7XHJcbmNsYXNzIENvbXBldGl0aW9uTmV3IGV4dGVuZHMgQ29tcG9uZW50IHtcclxuICBzdGF0ZSA9IHtcclxuICAgIG1pbmltdW1Db250cmlidXRpb246IFwiXCIsXHJcbiAgICBlcnJvck1lc3NhZ2U6IFwiXCIsXHJcbiAgICBsb2FkaW5nOiBmYWxzZSxcclxuICAgIGxhYmVsOiBcIlwiLFxyXG4gICAgbmFtZTogXCJcIixcclxuICAgIGRlc2NyaXB0aW9uOiBcIlwiLFxyXG4gICAgZmlsZVNhbXBsZURhdGE6IG51bGwsXHJcbiAgICBmaWxlRXZhbEZ1bmN0aW9uOiBudWxsLFxyXG4gICAgdXJsQXJyU2FtcGxlRGF0YTpcIlwiLFxyXG4gICAgdXJsQXJyRXZhbEZ1bmN0aW9uOlwiXCIsXHJcbiAgfTtcclxuXHJcbiBcclxuICBcclxuICBvblN1Ym1pdCA9IGFzeW5jIChldmVudCkgPT4ge1xyXG4gICAgXHJcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgdGhpcy5zZXRTdGF0ZSh7IGxvYWRpbmc6IHRydWUsIGVycm9yTWVzc2FnZTogXCJcIiB9KTtcclxuXHJcbiAgICB0cnkge1xyXG5cclxuICAgICAgbGV0IHVybEltYWdlID0gJydcclxuICAgICAgbGV0IHJlc3VsdCA9YXdhaXQgY2xpZW50LmFkZCh0aGlzLnN0YXRlLmZpbGVTYW1wbGVEYXRhKVxyXG4gIC50aGVuKHJlc3VsdCA9PiB7XHJcbiAgICBjb25zb2xlLmxvZyhcIndcIityZXN1bHQucGF0aCk7XHJcbiAgICB1cmxJbWFnZT0gJ2h0dHBzOi8vbWwuaW5mdXJhLWlwZnMuaW8vaXBmcy8nKyByZXN1bHQucGF0aDtcclxuICAgIHRoaXMuc2V0U3RhdGUoeyB1cmxBcnJTYW1wbGVEYXRhOnVybEltYWdlfSk7XHJcbiAgICBjb25zb2xlLmxvZyh1cmxJbWFnZSlcclxuXHJcbiAgfSk7XHJcbmNvbnNvbGUubG9nKHJlc3VsdClcclxuXHJcbiAgbGV0IHVybEZ1bmMgPSAnJ1xyXG4gIGxldCByZXN1bHQyID0gYXdhaXQgY2xpZW50LmFkZCh0aGlzLnN0YXRlLmZpbGVFdmFsRnVuY3Rpb24pXHJcbiAgLnRoZW4ocmVzdWx0ID0+IHtcclxuICAgIGNvbnNvbGUubG9nKHJlc3VsdC5wYXRoKTtcclxuICAgIHVybEZ1bmM9ICdodHRwczovL21sLmluZnVyYS1pcGZzLmlvL2lwZnMvJysgcmVzdWx0LnBhdGg7XHJcbiAgICB0aGlzLnNldFN0YXRlKHsgdXJsQXJyRXZhbEZ1bmN0aW9uOnVybEZ1bmN9KTtcclxuICB9KTtcclxuXHJcblxyXG5cclxuXHJcbiAgY29uc29sZS5sb2coXCJTc1wiK3VybEltYWdlLHVybEZ1bmMpXHJcblxyXG4gICAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IGFjY291bnRzID0gYXdhaXQgd2ViMy5ldGguZ2V0QWNjb3VudHMoKTtcclxuICAgICAgICBjb25zb2xlLmxvZyhcImxvZ2dnIGl0XCIrIHRoaXMuc3RhdGUudXJsQXJyU2FtcGxlRGF0YSt0aGlzLnN0YXRlLnVybEFyckV2YWxGdW5jdGlvbilcclxuXHJcbiAgICAgICAgYXdhaXQgZmFjdG9yeS5tZXRob2RzXHJcbiAgICAgICAgICAuY3JlYXRlQ29tcGV0aXRpb24odGhpcy5zdGF0ZS5taW5pbXVtQ29udHJpYnV0aW9uLCB0aGlzLnN0YXRlLm5hbWUsIHRoaXMuc3RhdGUuZGVzY3JpcHRpb24sIHRoaXMuc3RhdGUudXJsQXJyU2FtcGxlRGF0YSAsdGhpcy5zdGF0ZS51cmxBcnJFdmFsRnVuY3Rpb24pXHJcbiAgICAgICAgICAuc2VuZCh7XHJcbiAgICAgICAgICAgIHZhbHVlOiBcIjEwMFwiLFxyXG4gICAgICAgICAgICBmcm9tOiBhY2NvdW50c1swXSxcclxuICAgICAgICAgIH0pO1xyXG4gICAgICB9IGNhdGNoIChlcnIpIHtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHsgZXJyb3JNZXNzYWdlOiBlcnIubWVzc2FnZSB9KTtcclxuICAgICAgfVxyXG4gICAgICBcclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKGVycm9yLm1lc3NhZ2UpO1xyXG4gICAgfVxyXG4gICAgdGhpcy5zZXRTdGF0ZSh7IGxvYWRpbmc6IGZhbHNlIH0pO1xyXG4gIH07XHJcblxyXG4gIHJldHJpZXZlRmlsZVNhbXBsZURhdGEgPSAoZSkgPT4ge1xyXG4gICAgY29uc3QgZGF0YSA9IGUudGFyZ2V0LmZpbGVzWzBdO1xyXG4gICAgY29uc3QgcmVhZGVyID0gbmV3IHdpbmRvdy5GaWxlUmVhZGVyKCk7XHJcbiAgICByZWFkZXIucmVhZEFzQXJyYXlCdWZmZXIoZGF0YSk7XHJcbiAgICByZWFkZXIub25sb2FkZW5kID0gKCkgPT4ge1xyXG4gICAgICBjb25zb2xlLmxvZyhcIkJ1ZmZlciBkYXRhOiBcIiwgQnVmZmVyKHJlYWRlci5yZXN1bHQpKTtcclxuICAgICAgdGhpcy5zZXRTdGF0ZSh7IGZpbGVTYW1wbGVEYXRhOiBCdWZmZXIocmVhZGVyLnJlc3VsdCl9KVxyXG4gICAgfVxyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpOyAgXHJcbiAgfVxyXG5cclxuICByZXRyaWV2ZUZpbGVFdmFsRnVuY3Rpb24gPSAoZSkgPT4ge1xyXG4gICAgY29uc3QgZGF0YSA9IGUudGFyZ2V0LmZpbGVzWzBdO1xyXG4gICAgY29uc3QgcmVhZGVyID0gbmV3IHdpbmRvdy5GaWxlUmVhZGVyKCk7XHJcbiAgICByZWFkZXIucmVhZEFzQXJyYXlCdWZmZXIoZGF0YSk7XHJcblxyXG5cclxuICAgIHJlYWRlci5vbmxvYWRlbmQgPSAoKSA9PiB7XHJcbiAgICAgIGNvbnNvbGUubG9nKFwiQnVmZmVyIGRhdGE6IFwiLCBCdWZmZXIocmVhZGVyLnJlc3VsdCkpO1xyXG4gICAgICB0aGlzLnNldFN0YXRlKHsgZmlsZUV2YWxGdW5jdGlvbjogQnVmZmVyKHJlYWRlci5yZXN1bHQpfSlcclxuICAgIH1cclxuXHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7ICBcclxuICB9XHJcblxyXG4gICBzdGF0ZSA9IHt9XHJcbiAgaGFuZGxlQ2hhbmdlID0gKGUsIHsgdmFsdWUgfSkgPT4gdGhpcy5zZXRTdGF0ZSh7IHZhbHVlIH0pXHJcbiAgXHJcbiAgcmVuZGVyKCkge1xyXG4gICAgcmV0dXJuICggXHJcbiAgICAgICBcclxuICAgICAgPExheW91dCBzdHlsZT17eyBiYWNrZ3JvdW5kOlwiIzQ4MWE1OFwifX0+XHJcbiAgICAgICAgPENvbnRhaW5lciBzdHlsZT17e2JhY2tncm91bmQ6XCIjNDgxYTU4XCIsd2lkdGg6XCIxMDAlXCIscGFkZGluZzpcIjUwcHggNTBweCA1MHB4IDUwcHhcIn19PiBcclxuICAgICAgICA8U2VnbWVudCByYWlzZWQgc3R5bGU9e3ttYXhXaWR0aDogXCIxNSByZW1cIixtYXJnaW46XCIwIDIwMHB4IDIwMHB4IDIwMHB4XCIsYmFja2dyb3VuZDpcIiNFRkY1RjVcIn19PlxyXG4gICAgICAgICA8Rm9ybSBzdHlsZT17eyBwYWRkaW5nOlwiMjBweFwifX0+XHJcbiAgICAgICAgICA8aDI+PGZvbnQgY29sb3I9XCIjNDgxYTU4XCI+Q3JlYXRlIFByb2plY3Q8L2ZvbnQ+PC9oMj5cclxuICAgICAgICAgICA8Rm9ybS5GaWVsZD5cclxuICAgICAgICAgICAgPGxhYmVsPjxoND5OYW1lPC9oND48L2xhYmVsPlxyXG4gICAgICAgICAgICA8SW5wdXRcclxuICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIk5hbWUgb2YgdGhlIFNlcnZpY2VcIlxyXG4gICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5yZXRyaWV2ZUZpbGVTYW1wbGVEYXRhfVxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDwvRm9ybS5GaWVsZD5cclxuICAgICAgICAgICAgPEZvcm0uRmllbGQ+XHJcbiAgICAgICAgICAgIDxsYWJlbD48aDQ+RGVzY3JpcHRpb248L2g0PjwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgPElucHV0XHJcbiAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkRlc2NyaXB0aW9uIG9mIHRoZSBTZXJ2aWNlXCJcclxuICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0YXJlYVwiXHJcbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5yZXRyaWV2ZUZpbGVTYW1wbGVEYXRhfVxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDwvRm9ybS5GaWVsZD4gXHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICA8Rm9ybS5GaWVsZD5cclxuICAgICAgICAgICAgICA8bGFiZWw+PGg0PlVwbG9hZCBTZXJ2aWNlIEJhbm5lcjwvaDQ+PC9sYWJlbD5cclxuICAgICAgICAgICAgICA8SW5wdXRcclxuICAgICAgICAgICAgICAgIGxhYmVsPVwiSW1hZ2VcIlxyXG4gICAgICAgICAgICAgICAgbGFiZWxQb3NpdGlvbj1cInJpZ2h0XCJcclxuICAgICAgICAgICAgICB0eXBlPVwiZmlsZVwiXHJcbiAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMucmV0cmlldmVGaWxlU2FtcGxlRGF0YX1cclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgPC9Gb3JtLkZpZWxkPlxyXG4gICAgPEZvcm0uR3JvdXAgd2lkdGhzPXsyfT5cclxuICAgICAgPEZvcm0uRmllbGQ+XHJcbiAgICAgICAgICAgIDxsYWJlbD48aDQ+QWNjdXJhY3k8L2g0PjwvbGFiZWw+XHJcbiAgICAgICAgICAgIDxJbnB1dFxyXG4gICAgICAgICAgICAgIGxhYmVsPVwiUGVyY2VudGFnZVwiXHJcbiAgICAgICAgICAgICAgbGFiZWxQb3NpdGlvbj1cInJpZ2h0XCJcclxuICAgICAgICAgICAgICB0eXBlPVwibnVtYmVyXCJcclxuICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5yZXRyaWV2ZUZpbGVTYW1wbGVEYXRhfVxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8L0Zvcm0uRmllbGQ+XHJcbiAgICA8Rm9ybS5GaWVsZD5cclxuICAgICAgICAgICAgPGxhYmVsPjxoND5VcGxvYWQgSW5mZXJlbmNlIEZ1bmN0aW9uPC9oND48L2xhYmVsPlxyXG4gICAgICAgICAgICA8SW5wdXQgbGFiZWw9XCJtb2RlbFwiIGxhYmVsUG9zaXRpb249XCJyaWdodFwiIHR5cGU9XCJmaWxlXCIgIG9uQ2hhbmdlPXt0aGlzLnJldHJpZXZlRmlsZUV2YWxGdW5jdGlvbn0gLz5cclxuICAgICAgICAgIDwvRm9ybS5GaWVsZD5cclxuICA8L0Zvcm0uR3JvdXA+ICBcclxuICAgICAgXHJcbiAgICAgICAgPEZvcm0uRmllbGQ+XHJcbiAgICAgICAgICAgIDxsYWJlbD48aDQ+RGVwb3NpdCBudW1iZXI8L2g0PjwvbGFiZWw+XHJcbiAgICAgICAgICAgIDxJbnB1dFxyXG4gICAgICAgICAgICAgIGxhYmVsPVwid2VpXCJcclxuICAgICAgICAgICAgICBsYWJlbFBvc2l0aW9uPVwicmlnaHRcIlxyXG4gICAgICAgICAgICAgIHR5cGU9XCJudW1iZXJcIlxyXG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLnJldHJpZXZlRmlsZVNhbXBsZURhdGF9XHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgIDwvRm9ybS5GaWVsZD5cclxuXHJcbiAgICAgICAgPEZvcm0uR3JvdXA+XHJcbiAgICAgICAgPEZvcm0uRmllbGQ+XHJcbiAgICAgICAgICA8aDQ+U2VsZWN0ZWQgdmFsdWU6IDxmb250IGNvbG9yPVwiYmx1ZVwiPjxiPnt0aGlzLnN0YXRlLnZhbHVlfTwvYj48L2ZvbnQ+PC9oND5cclxuICAgICAgICA8L0Zvcm0uRmllbGQ+XHJcbiAgICAgICAgPEZvcm0uRmllbGQ+XHJcbiAgICAgICAgICA8UmFkaW9cclxuICAgICAgICAgICAgbGFiZWw9J0ltYWdlJ1xyXG4gICAgICAgICAgICBuYW1lPSdyYWRpb0dyb3VwJ1xyXG4gICAgICAgICAgICB2YWx1ZT0nSW1hZ2UnXHJcbiAgICAgICAgICAgIGNoZWNrZWQ9e3RoaXMuc3RhdGUudmFsdWUgPT09ICdJbWFnZSd9XHJcbiAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUNoYW5nZX1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICA8L0Zvcm0uRmllbGQ+XHJcbiAgICAgICAgPEZvcm0uRmllbGQ+XHJcbiAgICAgICAgICA8UmFkaW9cclxuICAgICAgICAgICAgbGFiZWw9J1RleHQnXHJcbiAgICAgICAgICAgIG5hbWU9J3JhZGlvR3JvdXAnXHJcbiAgICAgICAgICAgIHZhbHVlPSdUZXh0J1xyXG4gICAgICAgICAgICBjaGVja2VkPXt0aGlzLnN0YXRlLnZhbHVlID09PSAnVGV4dCd9XHJcbiAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUNoYW5nZX1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICA8L0Zvcm0uRmllbGQ+XHJcbiAgICAgICAgPC9Gb3JtLkdyb3VwPlxyXG4gICAgICAgIDxGb3JtLkZpZWxkPlxyXG4gICAgICAgICAgICA8bGFiZWw+PGg0PlVwbG9hZCBTYW1wbGUgRGF0YTwvaDQ+PC9sYWJlbD5cclxuICAgICAgICAgICAgPElucHV0XHJcbiAgICAgICAgICAgICAgbGFiZWw9XCJTYW1wbGUgRGF0YVwiXHJcbiAgICAgICAgICAgICAgbGFiZWxQb3NpdGlvbj1cInJpZ2h0XCJcclxuICAgICAgICAgICAgICB0eXBlPVwiZmlsZVwiXHJcbiAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMucmV0cmlldmVGaWxlU2FtcGxlRGF0YX1cclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgPC9Gb3JtLkZpZWxkPlxyXG5cclxuICAgICAgICA8Rm9ybS5GaWVsZD5cclxuICAgICAgICAgICAgPGxhYmVsPjxoND5EZXBvc2l0IG51bWJlcjwvaDQ+IDwvbGFiZWw+XHJcbiAgICAgICAgICAgIDxJbnB1dFxyXG4gICAgICAgICAgICAgIGxhYmVsPVwid2VpXCJcclxuICAgICAgICAgICAgICBsYWJlbFBvc2l0aW9uPVwicmlnaHRcIlxyXG4gICAgICAgICAgICAgIHR5cGU9XCJudW1iZXJcIlxyXG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLnJldHJpZXZlRmlsZVNhbXBsZURhdGF9XHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgIDwvRm9ybS5GaWVsZD5cclxuXHJcbiAgICAgICAgPEJ1dHRvbiBsb2FkaW5nPXt0aGlzLnN0YXRlLmxvYWRpbmd9IHByaW1hcnk+XHJcbiAgICAgICAgICAgIENyZWF0ZSFcclxuICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICAgIDxiciAvPiA8YnIgLz4gPGJyIC8+IFxyXG4gICAgICAgIFxyXG4gICAgICAgICAgXHJcbiAgICB7LyogPEZvcm0+XHJcbiAgICAgIDxJbnB1dFxyXG4gICAgICBpY29uPSd0YWdzJ1xyXG4gICAgICBpY29uUG9zaXRpb249J2xlZnQnXHJcbiAgICAgIGxhYmVsPXt7IHRhZzogdHJ1ZSwgY29udGVudDogJ0FkZCBUYWcnIH19XHJcbiAgICAgIGxhYmVsUG9zaXRpb249J3JpZ2h0J1xyXG4gICAgICBwbGFjZWhvbGRlcj0nRW50ZXIgdGFncydcclxuICAgICAgLz5cclxuICAgICAgPEZvcm0uRmllbGRcclxuICAgICAgaWQ9J2Zvcm0tYnV0dG9uLWNvbnRyb2wtcHVibGljJ1xyXG4gICAgICBjb250cm9sPXtCdXR0b259XHJcbiAgICAgIGNvbnRlbnQ9J0FkZCBUYWcnXHJcbiAgICAgIFxyXG4gICAgICAvPlxyXG4gICAgPC9Gb3JtPiAqL31cclxuICA8L0Zvcm0+XHJcblxyXG5cclxuXHJcblxyXG4gICAgICAgIHsvKiA8cD5cclxuICAgICAgICBBIHByb2plY3QgaXMgYSBjb2xsYWJvcmF0aXZlIGVudmlyb25tZW50IHdoZXJlIEFJIGJ1c2luZXNzZXMgY2FuIG9mZmVyIGVuY3J5cHRlZCBNYWNoaW5lIExlYXJuaW5nIHNlcnZpY2VzLCBhbmQgY3Jvd2Rzb3VyY2UgZGF0YSBhbmQgbW9kZWxzLlxyXG4gICAgICAgIDwvcD5cclxuICAgICAgICA8Rm9ybSBvblN1Ym1pdD17dGhpcy5vblN1Ym1pdH0gZXJyb3I9eyEhdGhpcy5zdGF0ZS5lcnJvck1lc3NhZ2V9PlxyXG4gICAgICAgIDxiciAvPlxyXG4gICAgICAgIDxGb3JtLkZpZWxkPlxyXG4gICAgICAgIDxsYWJlbD5OYW1lPC9sYWJlbD5cclxuICAgICAgICA8SW5wdXRcclxuICAgICAgICBsYWJlbFBvc2l0aW9uPVwicmlnaHRcIlxyXG4gICAgICAgIHZhbHVlPXt0aGlzLnN0YXRlLm5hbWV9XHJcbiAgICAgICAgb25DaGFuZ2U9eyhldmVudCkgPT4gdGhpcy5zZXRTdGF0ZSh7IG5hbWU6IGV2ZW50LnRhcmdldC52YWx1ZSB9KX1cclxuICAgICAgICAvPlxyXG4gICAgICAgIDwvRm9ybS5GaWVsZD5cclxuICAgICAgICA8Rm9ybS5GaWVsZD5cclxuICAgICAgICA8bGFiZWw+RGVzY3JpcHRpb248L2xhYmVsPlxyXG4gICAgICAgIDxJbnB1dFxyXG4gICAgICAgIGxhYmVsUG9zaXRpb249XCJyaWdodFwiXHJcbiAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUuZGVzY3JpcHRpb259XHJcbiAgICAgICAgb25DaGFuZ2U9eyhldmVudCkgPT5cclxuICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBkZXNjcmlwdGlvbjogZXZlbnQudGFyZ2V0LnZhbHVlIH0pXHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8+XHJcbiAgICAgICAgPC9Gb3JtLkZpZWxkPlxyXG4gICAgICAgIDxGb3JtLkZpZWxkPlxyXG4gICAgICAgIDxsYWJlbD5SZXdhcmQgRnVuZHM8L2xhYmVsPlxyXG4gICAgICAgIDxJbnB1dFxyXG4gICAgICAgIGxhYmVsPVwid2VpXCJcclxuICAgICAgICBsYWJlbFBvc2l0aW9uPVwicmlnaHRcIlxyXG4gICAgICAgIHZhbHVlPXt0aGlzLnN0YXRlLm1pbmltdW1Db250cmlidXRpb259XHJcbiAgICAgICAgb25DaGFuZ2U9eyhldmVudCkgPT5cclxuICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBtaW5pbXVtQ29udHJpYnV0aW9uOiBldmVudC50YXJnZXQudmFsdWUgfSlcclxuICAgICAgICB9XHJcbiAgICAgICAgLz5cclxuICAgICAgICA8L0Zvcm0uRmllbGQ+XHJcbiAgICAgICAgPGJyIC8+IDxiciAvPlxyXG4gICAgICAgIDxGb3JtLkZpZWxkPlxyXG4gICAgICAgIDxsYWJlbD5VcGxvYWQgRXhhbXBsZSBEYXRhPC9sYWJlbD5cclxuICAgICAgICA8SW5wdXRcclxuICAgICAgICBsYWJlbD1cImRhdGFcIlxyXG4gICAgICAgIGxhYmVsUG9zaXRpb249XCJyaWdodFwiXHJcbiAgICAgICAgICB0eXBlPVwiZmlsZVwiXHJcbiAgICAgICAgICBvbkNoYW5nZT17dGhpcy5yZXRyaWV2ZUZpbGVTYW1wbGVEYXRhfVxyXG4gICAgICAgICAgLz5cclxuICAgICAgICAgIDwvRm9ybS5GaWVsZD5cclxuICAgICAgICAgIFxyXG4gICAgICAgICAgPGJyIC8+IDxiciAvPlxyXG4gICAgICAgICAgPEZvcm0uRmllbGQ+XHJcbiAgICAgICAgICA8bGFiZWw+VXBsb2FkIEluZmVyZW5jZSBGdW5jdGlvbjwvbGFiZWw+XHJcbiAgICAgICAgICA8cD5cclxuICAgICAgICAgIDwvcD5cclxuICAgICAgICAgIDxJbnB1dCBsYWJlbD1cIm1vZGVsXCIgbGFiZWxQb3NpdGlvbj1cInJpZ2h0XCIgdHlwZT1cImZpbGVcIiAgb25DaGFuZ2U9e3RoaXMucmV0cmlldmVGaWxlRXZhbEZ1bmN0aW9ufSAvPlxyXG4gICAgICAgICAgPC9Gb3JtLkZpZWxkPlxyXG4gICAgICAgIDxiciAvPiAqL31cclxuICAgICAgICAgIHsvKiA8TWVzc2FnZSBlcnJvciBoZWFkZXI9XCJPb3BzIVwiIGNvbnRlbnQ9e3RoaXMuc3RhdGUuZXJyb3JNZXNzYWdlfSAvPiAqL31cclxuICAgICAgICAgIFxyXG4gICAgICAgICAgey8qIDwvRm9ybT4gKi99IFxyXG4gICAgICAgIDwvU2VnbWVudD5cclxuICAgICAgPC9Db250YWluZXI+XHJcbiAgICAgIDwvTGF5b3V0PlxyXG4gICAgKTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IENvbXBldGl0aW9uTmV3O1xyXG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAaXBsZC9kYWctY2JvclwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQGlwbGQvZGFnLWpzb25cIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBpcGxkL2RhZy1wYlwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiYW55LXNpZ25hbFwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiYmxvYi10by1pdFwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiYnJvd3Nlci1yZWFkYWJsZXN0cmVhbS10by1pdFwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiY3J5cHRvXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJkZWJ1Z1wiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiZXJyLWNvZGVcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImh0dHBcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImh0dHBzXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJpcGZzLXV0aWxzL3NyYy9lbnYuanNcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImlwZnMtdXRpbHMvc3JjL2ZpbGVzL2dsb2Itc291cmNlLmpzXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJpcGZzLXV0aWxzL3NyYy9maWxlcy91cmwtc291cmNlLmpzXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJpcGZzLXV0aWxzL3NyYy9odHRwLmpzXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJpcy1pcFwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiaXQtYWxsXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJpdC1maXJzdFwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiaXQtbGFzdFwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiaXQtbWFwXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJpdC1wZWVrYWJsZVwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiaXQtdG8tc3RyZWFtXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJtZXJnZS1vcHRpb25zXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJtdWx0aWZvcm1hdHMvYmFzZXMvYmFzZTY0XCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJtdWx0aWZvcm1hdHMvYmFzaWNzXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJtdWx0aWZvcm1hdHMvY2lkXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJtdWx0aWZvcm1hdHMvaGFzaGVzL2lkZW50aXR5XCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0LXJvdXRlc1wiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9oZWFkXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJwYXJzZS1kdXJhdGlvblwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicHJvdG9idWZqcy9taW5pbWFsLmpzXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJzZW1hbnRpYy11aS1yZWFjdFwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwic3RyZWFtLXRvLWl0L3NvdXJjZS5qc1wiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwidWludDhhcnJheXMvZnJvbS1zdHJpbmdcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInVpbnQ4YXJyYXlzL3RvLXN0cmluZ1wiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwid2ViM1wiKTs7Il0sInNvdXJjZVJvb3QiOiIifQ==