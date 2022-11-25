(function() {
var exports = {};
exports.id = "pages/index";
exports.ids = ["pages/index"];
exports.modules = {

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ethereum_factory__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../ethereum/factory */ "./ethereum/factory.js");
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! semantic-ui-react */ "semantic-ui-react");
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Layout */ "./components/Layout.js");
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../routes */ "./routes.js");
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_routes__WEBPACK_IMPORTED_MODULE_5__);

var _jsxFileName = "D:\\hahah\\hack\\pages\\index.js";






class CompetitionIndex extends react__WEBPACK_IMPORTED_MODULE_1__.Component {
  static async getInitialProps() {
    const competitions = await _ethereum_factory__WEBPACK_IMPORTED_MODULE_2__.default.methods.getDeployedCompetitions().call();
    return {
      competitions
    };
  }

  renderCompetitions() {
    const items = this.props.competitions.map(address => {
      return {
        header: address,
        description: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
          children: [" ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("br", {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 20,
            columnNumber: 13
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_routes__WEBPACK_IMPORTED_MODULE_5__.Link, {
            route: `/competitions/${address}`,
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
              children: "View Project"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 22,
              columnNumber: 15
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 21,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 18,
          columnNumber: 11
        }, this),
        fluid: true
      };
    });
    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__.Card.Group, {
      items: items
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 12
    }, this);
  }

  render() {
    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Layout__WEBPACK_IMPORTED_MODULE_4__.default, {
      style: {
        margin: '0',
        padding: '0'
      },
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__.Segment, {
        style: {
          margin: '0',
          background: "black",
          padding: '5'
        },
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__.Grid, {
          columns: 2,
          style: {
            padding: '0'
          },
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__.Grid.Column, {
            style: {
              background: "#481a58"
            },
            align: "center",
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__.Image, {
              src: "https://i.ibb.co/zfxd19D/landing-Page2.jpg",
              size: "large",
              align: "center"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 38,
              columnNumber: 19
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 37,
            columnNumber: 15
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__.Grid.Column, {
            style: {
              background: "#481a58",
              color: "white"
            },
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__.Header, {
              as: "h1",
              style: {
                color: "white",
                paddingLeft: "13px"
              },
              children: "Overview"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 41,
              columnNumber: 17
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__.Segment, {
              style: {
                background: "#481a58",
                color: "white",
                textAlign: "justify"
              },
              children: "Artificial Intelligence (AI) and blockchain are two disruptive technologies proving to be a powerful combination, improving virtually every industry. Research in Artificial Intelligence has come a long way, with many corporations, organizations and individuals greatly benefiting from Machine Learning services. However, corporations, organizations and individuals with problems AI can solve are hesitant to solicit services from third-party agents by sharing their private data to obtain those valuable predictions. Further, research on improving Machine Learning models suggests utilizing larger datasets to obtain better working models. However, handling the labelling of a sufficient amount of data with limited in-house resources is a time-consuming and costly operation. Consequently, businesses prefer crowdsourcing options when labelling data to train Machine Learning models. Also, protecting the business's data is as imperative as protecting the customer's data. It is not in favour of businesses to share their Machine Learning models with those they offer services to, as these models may be proprietary. This proposal focuses on creating a community of machine learning practitioners who can contribute to AI businesses by building models and datasets in a blockchain environment in exchange for a reward. It also permits agents and organizations with problems that could be solved with AI to solicit solutions without sharing their data."
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 44,
              columnNumber: 17
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 40,
            columnNumber: 15
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 36,
          columnNumber: 13
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 35,
        columnNumber: 11
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("br", {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 100,
        columnNumber: 19
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__.Grid, {
        style: {
          border: "1px solid gray"
        },
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__.Grid.Column, {
          floated: "left",
          width: 5,
          style: {
            marginLeft: "10px",
            fontSize: "25px",
            FontFace: "Roboto"
          },
          children: "Open Projects"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 115,
          columnNumber: 23
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__.Grid.Column, {
          floated: "right",
          width: 5,
          style: {
            marginRight: "10px"
          },
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_routes__WEBPACK_IMPORTED_MODULE_5__.Link, {
            route: "/competitions/new",
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__.Button, {
                floated: "right",
                content: "Create Project",
                icon: "add circle",
                primary: true
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 121,
                columnNumber: 25
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 120,
              columnNumber: 26
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 119,
            columnNumber: 25
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 118,
          columnNumber: 23
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 114,
        columnNumber: 20
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("br", {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 133,
        columnNumber: 19
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__.Card.Group, {
        style: {
          justifyContent: "space-around"
        },
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__.Card, {
          style: {
            width: "25%"
          },
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__.Card.Content, {
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__.Image, {
              floated: "right",
              size: "large",
              src: "https://react.semantic-ui.com/images/avatar/large/steve.jpg"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 137,
              columnNumber: 9
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__.Card.Header, {
              children: "Steve Sanders"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 142,
              columnNumber: 9
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__.Card.Meta, {
              children: "Friends of Elliot"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 143,
              columnNumber: 9
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__.Card.Description, {
              children: ["Steve wants to add you to the group ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("strong", {
                children: "best friends"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 145,
                columnNumber: 47
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 144,
              columnNumber: 9
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 136,
            columnNumber: 7
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__.Card.Content, {
            extra: true,
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
              className: "ui two buttons",
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__.Button, {
                basic: true,
                color: "green",
                children: "Approve"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 150,
                columnNumber: 11
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__.Button, {
                basic: true,
                color: "red",
                children: "Decline"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 153,
                columnNumber: 11
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 149,
              columnNumber: 9
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 148,
            columnNumber: 7
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 135,
          columnNumber: 5
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__.Card, {
          style: {
            width: "25%"
          },
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__.Card.Content, {
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__.Image, {
              floated: "right",
              size: "large",
              src: "https://react.semantic-ui.com/images/avatar/large/molly.png"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 161,
              columnNumber: 9
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__.Card.Header, {
              children: "Molly Thomas"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 166,
              columnNumber: 9
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__.Card.Meta, {
              children: "New User"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 167,
              columnNumber: 9
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__.Card.Description, {
              children: ["Molly wants to add you to the group ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("strong", {
                children: "musicians"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 169,
                columnNumber: 47
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 168,
              columnNumber: 9
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 160,
            columnNumber: 7
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__.Card.Content, {
            extra: true,
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
              className: "ui two buttons",
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__.Button, {
                basic: true,
                color: "green",
                children: "Approve"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 174,
                columnNumber: 11
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__.Button, {
                basic: true,
                color: "red",
                children: "Decline"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 177,
                columnNumber: 11
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 173,
              columnNumber: 9
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 172,
            columnNumber: 7
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 159,
          columnNumber: 5
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__.Card, {
          style: {
            width: "25%"
          },
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__.Card.Content, {
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__.Image, {
              floated: "right",
              size: "large",
              src: "https://react.semantic-ui.com/images/avatar/large/jenny.jpg"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 185,
              columnNumber: 9
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__.Card.Header, {
              children: "Jenny Lawrence"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 190,
              columnNumber: 9
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__.Card.Meta, {
              children: "New User"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 191,
              columnNumber: 9
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__.Card.Description, {
              children: "Jenny requested permission to view your contact details"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 192,
              columnNumber: 9
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 184,
            columnNumber: 7
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__.Card.Content, {
            extra: true,
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
              className: "ui two buttons",
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__.Button, {
                basic: true,
                color: "green",
                children: "Approve"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 198,
                columnNumber: 11
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__.Button, {
                basic: true,
                color: "red",
                children: "Decline"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 201,
                columnNumber: 11
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 197,
              columnNumber: 9
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 196,
            columnNumber: 7
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 183,
          columnNumber: 5
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 134,
        columnNumber: 3
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 7
    }, this);
  }

}

/* harmony default export */ __webpack_exports__["default"] = (CompetitionIndex);

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
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = __webpack_require__.X(0, ["components_Layout_js-ethereum_factory_js"], function() { return __webpack_exec__("./pages/index.js"); });
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZXNlYXJjaHByb2ovLi9wYWdlcy9pbmRleC5qcyIsIndlYnBhY2s6Ly9yZXNlYXJjaHByb2ovZXh0ZXJuYWwgXCJuZXh0LXJvdXRlc1wiIiwid2VicGFjazovL3Jlc2VhcmNocHJvai9leHRlcm5hbCBcIm5leHQvaGVhZFwiIiwid2VicGFjazovL3Jlc2VhcmNocHJvai9leHRlcm5hbCBcInJlYWN0XCIiLCJ3ZWJwYWNrOi8vcmVzZWFyY2hwcm9qL2V4dGVybmFsIFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIiLCJ3ZWJwYWNrOi8vcmVzZWFyY2hwcm9qL2V4dGVybmFsIFwic2VtYW50aWMtdWktcmVhY3RcIiIsIndlYnBhY2s6Ly9yZXNlYXJjaHByb2ovZXh0ZXJuYWwgXCJ3ZWIzXCIiXSwibmFtZXMiOlsiQ29tcGV0aXRpb25JbmRleCIsIkNvbXBvbmVudCIsImdldEluaXRpYWxQcm9wcyIsImNvbXBldGl0aW9ucyIsImZhY3RvcnkiLCJjYWxsIiwicmVuZGVyQ29tcGV0aXRpb25zIiwiaXRlbXMiLCJwcm9wcyIsIm1hcCIsImFkZHJlc3MiLCJoZWFkZXIiLCJkZXNjcmlwdGlvbiIsImZsdWlkIiwicmVuZGVyIiwibWFyZ2luIiwicGFkZGluZyIsImJhY2tncm91bmQiLCJjb2xvciIsInBhZGRpbmdMZWZ0IiwidGV4dEFsaWduIiwiYm9yZGVyIiwibWFyZ2luTGVmdCIsImZvbnRTaXplIiwiRm9udEZhY2UiLCJtYXJnaW5SaWdodCIsImp1c3RpZnlDb250ZW50Iiwid2lkdGgiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxNQUFNQSxnQkFBTixTQUErQkMsNENBQS9CLENBQXlDO0FBQ3ZDLGVBQWFDLGVBQWIsR0FBK0I7QUFDN0IsVUFBTUMsWUFBWSxHQUFHLE1BQU1DLHNGQUFBLEdBQTBDQyxJQUExQyxFQUEzQjtBQUNBLFdBQU87QUFBRUY7QUFBRixL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O0FBQUE7QUFBQTtBQUFBLGdCQWpERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FwR0k7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREY7QUFvTEQ7O0FBOU1zQzs7QUFpTnpDLCtEQUFlM0IsZ0JBQWYsRTs7Ozs7Ozs7Ozs7QUN2TkEseUM7Ozs7Ozs7Ozs7O0FDQUEsdUM7Ozs7Ozs7Ozs7O0FDQUEsbUM7Ozs7Ozs7Ozs7O0FDQUEsbUQ7Ozs7Ozs7Ozs7O0FDQUEsK0M7Ozs7Ozs7Ozs7O0FDQUEsa0MiLCJmaWxlIjoicGFnZXMvaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBmYWN0b3J5IGZyb20gXCIuLi9ldGhlcmV1bS9mYWN0b3J5XCI7XHJcbmltcG9ydCB7IENhcmQsIEJ1dHRvbiwgU2VnbWVudCwgRGl2aWRlciwgR3JpZCwgSW1hZ2UsQ29udGFpbmVyLEhlYWRlcn0gZnJvbSBcInNlbWFudGljLXVpLXJlYWN0XCI7XHJcbmltcG9ydCBMYXlvdXQgZnJvbSBcIi4uL2NvbXBvbmVudHMvTGF5b3V0XCI7XHJcbmltcG9ydCB7IExpbmsgfSBmcm9tIFwiLi4vcm91dGVzXCI7XHJcblxyXG5jbGFzcyBDb21wZXRpdGlvbkluZGV4IGV4dGVuZHMgQ29tcG9uZW50IHtcclxuICBzdGF0aWMgYXN5bmMgZ2V0SW5pdGlhbFByb3BzKCkge1xyXG4gICAgY29uc3QgY29tcGV0aXRpb25zID0gYXdhaXQgZmFjdG9yeS5tZXRob2RzLmdldERlcGxveWVkQ29tcGV0aXRpb25zKCkuY2FsbCgpO1xyXG4gICAgcmV0dXJuIHsgY29tcGV0aXRpb25zIH07XHJcbiAgfVxyXG5cclxuICByZW5kZXJDb21wZXRpdGlvbnMoKSB7XHJcbiAgICBjb25zdCBpdGVtcyA9IHRoaXMucHJvcHMuY29tcGV0aXRpb25zLm1hcCgoYWRkcmVzcykgPT4ge1xyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIGhlYWRlcjogYWRkcmVzcyxcclxuICAgICAgICBkZXNjcmlwdGlvbjogKFxyXG4gICAgICAgICAgPHA+XHJcbiAgICAgICAgICAgIHtcIiBcIn1cclxuICAgICAgICAgICAgPGJyIC8+XHJcbiAgICAgICAgICAgIDxMaW5rIHJvdXRlPXtgL2NvbXBldGl0aW9ucy8ke2FkZHJlc3N9YH0+XHJcbiAgICAgICAgICAgICAgPGE+VmlldyBQcm9qZWN0PC9hPlxyXG4gICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICA8L3A+XHJcbiAgICAgICAgKSxcclxuICAgICAgICBmbHVpZDogdHJ1ZSxcclxuICAgICAgfTtcclxuICAgIH0pO1xyXG4gICAgcmV0dXJuIDxDYXJkLkdyb3VwIGl0ZW1zPXtpdGVtc30gLz47XHJcbiAgfVxyXG5cclxuICByZW5kZXIoKSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8TGF5b3V0IHN0eWxlPXt7bWFyZ2luOicwJyxwYWRkaW5nOicwJ319PlxyXG4gICAgICAgICAgPFNlZ21lbnQgc3R5bGU9e3ttYXJnaW46JzAnLGJhY2tncm91bmQ6XCJibGFja1wiLHBhZGRpbmc6JzUnfX0gPlxyXG4gICAgICAgICAgICA8R3JpZCBjb2x1bW5zPXsyfSBzdHlsZT17e3BhZGRpbmc6JzAnfX0+XHJcbiAgICAgICAgICAgICAgPEdyaWQuQ29sdW1uIHN0eWxlPXt7YmFja2dyb3VuZDpcIiM0ODFhNThcIn19IGFsaWduPVwiY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxJbWFnZSBzcmM9J2h0dHBzOi8vaS5pYmIuY28vemZ4ZDE5RC9sYW5kaW5nLVBhZ2UyLmpwZycgc2l6ZT0nbGFyZ2UnIGFsaWduPVwiY2VudGVyXCIgIC8+XHJcbiAgICAgICAgICAgICAgPC9HcmlkLkNvbHVtbj5cclxuICAgICAgICAgICAgICA8R3JpZC5Db2x1bW4gc3R5bGU9e3tiYWNrZ3JvdW5kOlwiIzQ4MWE1OFwiLGNvbG9yOlwid2hpdGVcIn19PlxyXG4gICAgICAgICAgICAgICAgPEhlYWRlciBhcz1cImgxXCIgc3R5bGU9e3tjb2xvcjpcIndoaXRlXCIscGFkZGluZ0xlZnQ6XCIxM3B4XCJ9fT5cclxuICAgICAgICAgICAgICAgICAgT3ZlcnZpZXdcclxuICAgICAgICAgICAgICAgIDwvSGVhZGVyPlxyXG4gICAgICAgICAgICAgICAgPFNlZ21lbnQgc3R5bGU9e3tiYWNrZ3JvdW5kOlwiIzQ4MWE1OFwiLGNvbG9yOlwid2hpdGVcIix0ZXh0QWxpZ246XCJqdXN0aWZ5XCJ9fT5cclxuICAgICAgICAgICAgICAgICAgQXJ0aWZpY2lhbCBJbnRlbGxpZ2VuY2UgKEFJKSBhbmQgYmxvY2tjaGFpbiBhcmUgdHdvIGRpc3J1cHRpdmUgdGVjaG5vbG9naWVzIHByb3ZpbmcgdG8gYmUgYSBwb3dlcmZ1bCBjb21iaW5hdGlvbiwgaW1wcm92aW5nXHJcbnZpcnR1YWxseSBldmVyeSBpbmR1c3RyeS4gUmVzZWFyY2ggaW4gQXJ0aWZpY2lhbCBJbnRlbGxpZ2VuY2UgaGFzIGNvbWUgYSBsb25nIHdheSwgd2l0aCBtYW55IGNvcnBvcmF0aW9ucywgb3JnYW5pemF0aW9ucyBhbmRcclxuaW5kaXZpZHVhbHMgZ3JlYXRseSBiZW5lZml0aW5nIGZyb20gTWFjaGluZSBMZWFybmluZyBzZXJ2aWNlcy4gSG93ZXZlciwgY29ycG9yYXRpb25zLCBvcmdhbml6YXRpb25zIGFuZCBpbmRpdmlkdWFscyB3aXRoXHJcbnByb2JsZW1zIEFJIGNhbiBzb2x2ZSBhcmUgaGVzaXRhbnQgdG8gc29saWNpdCBzZXJ2aWNlcyBmcm9tIHRoaXJkLXBhcnR5IGFnZW50cyBieSBzaGFyaW5nIHRoZWlyIHByaXZhdGUgZGF0YSB0byBvYnRhaW4gdGhvc2VcclxudmFsdWFibGUgcHJlZGljdGlvbnMuIEZ1cnRoZXIsIHJlc2VhcmNoIG9uIGltcHJvdmluZyBNYWNoaW5lIExlYXJuaW5nIG1vZGVscyBzdWdnZXN0cyB1dGlsaXppbmcgbGFyZ2VyIGRhdGFzZXRzIHRvIG9idGFpblxyXG5iZXR0ZXIgd29ya2luZyBtb2RlbHMuIEhvd2V2ZXIsIGhhbmRsaW5nIHRoZSBsYWJlbGxpbmcgb2YgYSBzdWZmaWNpZW50IGFtb3VudCBvZiBkYXRhIHdpdGggbGltaXRlZCBpbi1ob3VzZSByZXNvdXJjZXMgaXMgYVxyXG50aW1lLWNvbnN1bWluZyBhbmQgY29zdGx5IG9wZXJhdGlvbi4gQ29uc2VxdWVudGx5LCBidXNpbmVzc2VzIHByZWZlciBjcm93ZHNvdXJjaW5nIG9wdGlvbnMgd2hlbiBsYWJlbGxpbmcgZGF0YSB0byB0cmFpblxyXG5NYWNoaW5lIExlYXJuaW5nIG1vZGVscy4gQWxzbywgcHJvdGVjdGluZyB0aGUgYnVzaW5lc3MncyBkYXRhIGlzIGFzIGltcGVyYXRpdmUgYXMgcHJvdGVjdGluZyB0aGUgY3VzdG9tZXIncyBkYXRhLiBJdCBpcyBub3RcclxuaW4gZmF2b3VyIG9mIGJ1c2luZXNzZXMgdG8gc2hhcmUgdGhlaXIgTWFjaGluZSBMZWFybmluZyBtb2RlbHMgd2l0aCB0aG9zZSB0aGV5IG9mZmVyIHNlcnZpY2VzIHRvLCBhcyB0aGVzZSBtb2RlbHMgbWF5IGJlXHJcbnByb3ByaWV0YXJ5LiBUaGlzIHByb3Bvc2FsIGZvY3VzZXMgb24gY3JlYXRpbmcgYSBjb21tdW5pdHkgb2YgbWFjaGluZSBsZWFybmluZyBwcmFjdGl0aW9uZXJzIHdobyBjYW4gY29udHJpYnV0ZSB0byBBSVxyXG5idXNpbmVzc2VzIGJ5IGJ1aWxkaW5nIG1vZGVscyBhbmQgZGF0YXNldHMgaW4gYSBibG9ja2NoYWluIGVudmlyb25tZW50IGluIGV4Y2hhbmdlIGZvciBhIHJld2FyZC4gSXQgYWxzbyBwZXJtaXRzIGFnZW50c1xyXG5hbmQgb3JnYW5pemF0aW9ucyB3aXRoIHByb2JsZW1zIHRoYXQgY291bGQgYmUgc29sdmVkIHdpdGggQUkgdG8gc29saWNpdCBzb2x1dGlvbnMgd2l0aG91dCBzaGFyaW5nIHRoZWlyIGRhdGEuXHJcbiAgICAgICAgICAgICAgPC9TZWdtZW50PlxyXG4gICAgICAgICAgICAgIDwvR3JpZC5Db2x1bW4+XHJcbiAgICAgICAgICAgIDwvR3JpZD5cclxuXHJcbiAgICAgICAgICAgIHsvKiA8RGl2aWRlciB2ZXJ0aWNhbD5BbmQ8L0RpdmlkZXI+ICovfVxyXG4gICAgICAgICAgPC9TZWdtZW50PlxyXG5cclxuICAgICAgICB7LyogXHJcbiAgICAgICAgZXhwb3J0IGRlZmF1bHQgRGl2aWRlckV4YW1wbGVWZXJ0aWNhbCAqL31cclxuICAgICAgICAgICAgICAgICAgICB7LyogPGgyPk9iamVjdGl2ZXM8L2gyPntcIiBcIn1cclxuICAgICAgICAgICAgICAgICAgICA8cD5cclxuICAgICAgICAgICAgICAgICAgICAgIFRoaXMgcmVzZWFyY2ggZm9jdXNlcyBvbiBjcmVhdGluZyBhIGNvbW11bml0eSBvZiBtYWNoaW5lIGxlYXJuaW5nXHJcbiAgICAgICAgICAgICAgICAgICAgICBwcmFjdGl0aW9uZXJzIHdobyBjYW4gY29udHJpYnV0ZSB0byBBSSBidXNpbmVzc2VzIGJ5IGJ1aWxkaW5nXHJcbiAgICAgICAgICAgICAgICAgICAgICBtb2RlbHMgYW5kIGRhdGFzZXRzIGluIGEgYmxvY2tjaGFpbiBlbnZpcm9ubWVudCBpbiBleGNoYW5nZSBmb3IgYVxyXG4gICAgICAgICAgICAgICAgICAgICAgcmV3YXJkLiBcclxuICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgICAgICA8cD5cclxuICAgICAgICAgICAgICAgICAgICBJdCBhbHNvIHBlcm1pdHMgb3JnYW5pemF0aW9ucyBhbmQgYWdlbnRzIHdpdGggcHJvYmxlbXNcclxuICAgICAgICAgICAgICAgICAgICAgIHRoYXQgY291bGQgYmUgc29sdmVkIHdpdGggQUkgdG8gc29saWNpdCBzb2x1dGlvbnMgd2l0aG91dCBzaGFyaW5nXHJcbiAgICAgICAgICAgICAgICAgICAgICB0aGVpciBkYXRhLlxyXG4gICAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgICAgICA8cD5cclxuICAgICAgICAgICAgICAgICAgICBUaGlzIHJlc2VhcmNoIHV0aWxpemVzIHRoZSBiZW5lZml0cyBvZiBtdWx0aS1wYXJ0eVxyXG4gICAgICAgICAgICAgICAgICAgICAgY29tcHV0YXRpb24gKE1QQykgdG8gYnVpbGQgTWFjaGluZSBMZWFybmluZyBtb2RlbHMgdGhhdCBwcm92aWRlXHJcbiAgICAgICAgICAgICAgICAgICAgICBwcmVkaWN0aW9ucyBvbiBlbmNyeXB0ZWQgZGF0YS4gSW4gbWFueSBjYXNlcywgaXQgaXMgbm90IGluIGZhdm91clxyXG4gICAgICAgICAgICAgICAgICAgICAgb2YgYnVzaW5lc3NlcyB0byBzaGFyZSB0aGVpciBNYWNoaW5lIExlYXJuaW5nIG1vZGVscyB3aXRoIHRob3NlXHJcbiAgICAgICAgICAgICAgICAgICAgICB0aGV5IG9mZmVyIHNlcnZpY2VzIHRvLCBhcyB0aGVzZSBtb2RlbHMgbWF5IGJlIHByb3ByaWV0YXJ5LiBVc2luZ1xyXG4gICAgICAgICAgICAgICAgICAgICAgTVBDLCBvcmdhbml6YXRpb25zIHRoYXQgc29saWNpdCBzZXJ2aWNlcyBhcmUgbm90IHJlcXVpcmVkIHRvIHNlbmRcclxuICAgICAgICAgICAgICAgICAgICAgIHRoZWlyIGRhdGEgdG8gQUkgYnVzaW5lc3NlczsgZW5jcnlwdGVkIG1vZGVscyBhcmUgc2VudCB0byB0aGVcclxuICAgICAgICAgICAgICAgICAgICAgIG1hY2hpbmVzIHdpdGggdGhlIGRhdGEuIFRoZXJlZm9yZSwgdGhpcyByZXNlYXJjaCBmb2N1c2VzIG9uXHJcbiAgICAgICAgICAgICAgICAgICAgICBwcm92aWRpbmcgZW5jcnlwdGVkIG1vZGVscyB0byBvZmZlciBwcmVkaWN0aW9ucyBvbiBlbmNyeXB0ZWQgZGF0YS5cclxuICAgICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICA8cD5cclxuICAgICAgICAgICAgICAgICAgICBCbG9ja2NoYWluIG9mZmVycyBtYW55IGJlbmVmaXRzLCBzdWNoIGFzIGRlY2VudHJhbGl6YXRpb24sIHBlcnNpc3RlbmNlLCB0cmFuc3BhcmVuY3ksIGFuZCB0cnVzdCwgd2hpY2ggY291bGQgY29tcGxlbWVudCBBcnRpZmljaWFsIEludGVsbGlnZW5jZSB0byBjcmVhdGUgYSBzZWN1cmUgYW5kIHJlbGlhYmxlIGZyYW1ld29yay4gVGhlIG1haW4gb2JqZWN0aXZlcyBpbmNsdWRlOlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgIDx1bD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGxpPkRldmVsb3AgYSBibG9ja2NoYWluIGJhc2VkIGJhc2VkIHByb3RvY29sIGZvciBjcm93ZHNvdXJjaW5nIGRhdGEgYW5kIG1vZGVscyBmcm9tIGNvbnRyaWJ1dG9ycyB3aXRoIGEgcHJvbWlzaW5nIHJld2FyZCBzY2hlbWUuPC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGxpPkJ1aWxkIGEgcGxhdGZvcm0gZm9yIGJ1c2luZXNzZXMgdG8gcHJvdmlkZSBNYWNoaW5lIExlYXJuaW5nIHNlcnZpY2VzIHdoaWxlIG1haW50YWluaW5nIHRoZSBwcml2YWN5IG9mIHRoZWlyIG1vZGVscyBhbmQgY2xpZW50IGRhdGEuPC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGxpPkJ1aWxkIE1hY2hpbmUgTGVhcm5pbmcgTW9kZWxzIHVzaW5nIG11bHRpLXBhcnR5IGNvbXB1dGF0aW9uIChNUEMpLCB0byBkZXZlbG9wIGVuY3J5cHRlZCBtb2RlbHMgdGhhdCBvZmZlciBwcmVkaWN0aW9ucyBvbiBlbmNyeXB0ZWQgZGF0YS4gPC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9wPiAqL31cclxuICAgICAgICAgICAgICAgICAgPGJyLz5cclxuICAgICAgICAgICAgICAgICAgey8qIDxTZWdtZW50IHN0eWxlPXt7anVzdGlmeUNvbnRlbnQ6XCJjZW50ZXJcIn19PlxyXG4gICAgICAgICAgICAgICAgICAgIDxhPlxyXG4gICAgICAgICAgICAgICAgICAgIDxCdXR0b25cclxuICAgICAgICAgICAgICAgICAgICBmbG9hdGVkPVwicmlnaHRcIlxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ9XCJDcmVhdGUgUHJvamVjdFwiXHJcbiAgICAgICAgICAgICAgICAgICAgaWNvbj1cImFkZCBjaXJjbGVcIlxyXG4gICAgICAgICAgICAgICAgICAgIHByaW1hcnlcclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICA8Q29udGFpbmVyIGZsb2F0ZWQ9XCJsZWZ0XCIgc3R5bGU9e3twYWRkaW5nTGVmdDpcIjVweFwiLG1hcmdpbjpcIjAgMFwifX0+XHJcbiAgICAgICAgICAgICAgICAgICAgT3BlbiBQcm9qZWN0c1xyXG4gICAgICAgICAgICAgICAgICAgIDwvQ29udGFpbmVyPlxyXG4gICAgICAgICAgICAgICAgICA8L1NlZ21lbnQ+ICovfVxyXG4gICAgICAgICAgICAgICAgICAgPEdyaWQgc3R5bGU9e3tib3JkZXI6XCIxcHggc29saWQgZ3JheVwifX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8R3JpZC5Db2x1bW4gZmxvYXRlZD0nbGVmdCcgd2lkdGg9ezV9IHN0eWxlPXt7bWFyZ2luTGVmdDpcIjEwcHhcIixmb250U2l6ZTpcIjI1cHhcIixGb250RmFjZTpcIlJvYm90b1wifX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIE9wZW4gUHJvamVjdHNcclxuICAgICAgICAgICAgICAgICAgICAgIDwvR3JpZC5Db2x1bW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8R3JpZC5Db2x1bW4gZmxvYXRlZD0ncmlnaHQnIHdpZHRoPXs1fSBzdHlsZT17e21hcmdpblJpZ2h0OlwiMTBweFwifX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIHJvdXRlPVwiL2NvbXBldGl0aW9ucy9uZXdcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgIDxhPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZmxvYXRlZD1cInJpZ2h0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50PVwiQ3JlYXRlIFByb2plY3RcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGljb249XCJhZGQgY2lyY2xlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBwcmltYXJ5XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvR3JpZC5Db2x1bW4+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICA8YnIgLz5cclxuICA8Q2FyZC5Hcm91cCBzdHlsZT17e2p1c3RpZnlDb250ZW50Olwic3BhY2UtYXJvdW5kXCJ9fT5cclxuICAgIDxDYXJkIHN0eWxlPXt7d2lkdGg6XCIyNSVcIn19PlxyXG4gICAgICA8Q2FyZC5Db250ZW50PlxyXG4gICAgICAgIDxJbWFnZVxyXG4gICAgICAgICAgZmxvYXRlZD0ncmlnaHQnXHJcbiAgICAgICAgICBzaXplPSdsYXJnZSdcclxuICAgICAgICAgIHNyYz0naHR0cHM6Ly9yZWFjdC5zZW1hbnRpYy11aS5jb20vaW1hZ2VzL2F2YXRhci9sYXJnZS9zdGV2ZS5qcGcnXHJcbiAgICAgICAgLz5cclxuICAgICAgICA8Q2FyZC5IZWFkZXI+U3RldmUgU2FuZGVyczwvQ2FyZC5IZWFkZXI+XHJcbiAgICAgICAgPENhcmQuTWV0YT5GcmllbmRzIG9mIEVsbGlvdDwvQ2FyZC5NZXRhPlxyXG4gICAgICAgIDxDYXJkLkRlc2NyaXB0aW9uPlxyXG4gICAgICAgICAgU3RldmUgd2FudHMgdG8gYWRkIHlvdSB0byB0aGUgZ3JvdXAgPHN0cm9uZz5iZXN0IGZyaWVuZHM8L3N0cm9uZz5cclxuICAgICAgICA8L0NhcmQuRGVzY3JpcHRpb24+XHJcbiAgICAgIDwvQ2FyZC5Db250ZW50PlxyXG4gICAgICA8Q2FyZC5Db250ZW50IGV4dHJhPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSd1aSB0d28gYnV0dG9ucyc+XHJcbiAgICAgICAgICA8QnV0dG9uIGJhc2ljIGNvbG9yPSdncmVlbic+XHJcbiAgICAgICAgICAgIEFwcHJvdmVcclxuICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgPEJ1dHRvbiBiYXNpYyBjb2xvcj0ncmVkJz5cclxuICAgICAgICAgICAgRGVjbGluZVxyXG4gICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvQ2FyZC5Db250ZW50PlxyXG4gICAgPC9DYXJkPlxyXG4gICAgPENhcmQgc3R5bGU9e3t3aWR0aDpcIjI1JVwifX0+XHJcbiAgICAgIDxDYXJkLkNvbnRlbnQ+XHJcbiAgICAgICAgPEltYWdlXHJcbiAgICAgICAgICBmbG9hdGVkPSdyaWdodCdcclxuICAgICAgICAgIHNpemU9J2xhcmdlJ1xyXG4gICAgICAgICAgc3JjPSdodHRwczovL3JlYWN0LnNlbWFudGljLXVpLmNvbS9pbWFnZXMvYXZhdGFyL2xhcmdlL21vbGx5LnBuZydcclxuICAgICAgICAvPlxyXG4gICAgICAgIDxDYXJkLkhlYWRlcj5Nb2xseSBUaG9tYXM8L0NhcmQuSGVhZGVyPlxyXG4gICAgICAgIDxDYXJkLk1ldGE+TmV3IFVzZXI8L0NhcmQuTWV0YT5cclxuICAgICAgICA8Q2FyZC5EZXNjcmlwdGlvbj5cclxuICAgICAgICAgIE1vbGx5IHdhbnRzIHRvIGFkZCB5b3UgdG8gdGhlIGdyb3VwIDxzdHJvbmc+bXVzaWNpYW5zPC9zdHJvbmc+XHJcbiAgICAgICAgPC9DYXJkLkRlc2NyaXB0aW9uPlxyXG4gICAgICA8L0NhcmQuQ29udGVudD5cclxuICAgICAgPENhcmQuQ29udGVudCBleHRyYT5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ndWkgdHdvIGJ1dHRvbnMnPlxyXG4gICAgICAgICAgPEJ1dHRvbiBiYXNpYyBjb2xvcj0nZ3JlZW4nPlxyXG4gICAgICAgICAgICBBcHByb3ZlXHJcbiAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgIDxCdXR0b24gYmFzaWMgY29sb3I9J3JlZCc+XHJcbiAgICAgICAgICAgIERlY2xpbmVcclxuICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L0NhcmQuQ29udGVudD5cclxuICAgIDwvQ2FyZD5cclxuICAgIDxDYXJkIHN0eWxlPXt7d2lkdGg6XCIyNSVcIn19PlxyXG4gICAgICA8Q2FyZC5Db250ZW50PlxyXG4gICAgICAgIDxJbWFnZVxyXG4gICAgICAgICAgZmxvYXRlZD0ncmlnaHQnXHJcbiAgICAgICAgICBzaXplPSdsYXJnZSdcclxuICAgICAgICAgIHNyYz0naHR0cHM6Ly9yZWFjdC5zZW1hbnRpYy11aS5jb20vaW1hZ2VzL2F2YXRhci9sYXJnZS9qZW5ueS5qcGcnXHJcbiAgICAgICAgLz5cclxuICAgICAgICA8Q2FyZC5IZWFkZXI+SmVubnkgTGF3cmVuY2U8L0NhcmQuSGVhZGVyPlxyXG4gICAgICAgIDxDYXJkLk1ldGE+TmV3IFVzZXI8L0NhcmQuTWV0YT5cclxuICAgICAgICA8Q2FyZC5EZXNjcmlwdGlvbj5cclxuICAgICAgICAgIEplbm55IHJlcXVlc3RlZCBwZXJtaXNzaW9uIHRvIHZpZXcgeW91ciBjb250YWN0IGRldGFpbHNcclxuICAgICAgICA8L0NhcmQuRGVzY3JpcHRpb24+XHJcbiAgICAgIDwvQ2FyZC5Db250ZW50PlxyXG4gICAgICA8Q2FyZC5Db250ZW50IGV4dHJhPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSd1aSB0d28gYnV0dG9ucyc+XHJcbiAgICAgICAgICA8QnV0dG9uIGJhc2ljIGNvbG9yPSdncmVlbic+XHJcbiAgICAgICAgICAgIEFwcHJvdmVcclxuICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgPEJ1dHRvbiBiYXNpYyBjb2xvcj0ncmVkJz5cclxuICAgICAgICAgICAgRGVjbGluZVxyXG4gICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvQ2FyZC5Db250ZW50PlxyXG4gICAgPC9DYXJkPlxyXG4gIDwvQ2FyZC5Hcm91cD5cclxuXHJcblxyXG4gICAgICAgICAgICAgICAgICB7Lyoge3RoaXMucmVuZGVyQ29tcGV0aXRpb25zKCl9ICovfVxyXG4gICAgICA8L0xheW91dD5cclxuICAgICk7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBDb21wZXRpdGlvbkluZGV4O1xyXG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0LXJvdXRlc1wiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9oZWFkXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJzZW1hbnRpYy11aS1yZWFjdFwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwid2ViM1wiKTs7Il0sInNvdXJjZVJvb3QiOiIifQ==