self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var D_hahah_hack_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/regenerator */ "./node_modules/next/node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var D_hahah_hack_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(D_hahah_hack_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var D_hahah_hack_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var D_hahah_hack_node_modules_next_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var D_hahah_hack_node_modules_next_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var D_hahah_hack_node_modules_next_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/inherits */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var D_hahah_hack_node_modules_next_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var D_hahah_hack_node_modules_next_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _ethereum_factory__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../ethereum/factory */ "./ethereum/factory.js");
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! semantic-ui-react */ "./node_modules/semantic-ui-react/dist/es/index.js");
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../components/Layout */ "./components/Layout.js");
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../routes */ "./routes.js");
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_routes__WEBPACK_IMPORTED_MODULE_11__);
/* module decorator */ module = __webpack_require__.hmd(module);








var _jsxFileName = "D:\\hahah\\hack\\pages\\index.js";

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0,D_hahah_hack_node_modules_next_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7__.default)(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0,D_hahah_hack_node_modules_next_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7__.default)(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0,D_hahah_hack_node_modules_next_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_6__.default)(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }







var CompetitionIndex = /*#__PURE__*/function (_Component) {
  (0,D_hahah_hack_node_modules_next_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__.default)(CompetitionIndex, _Component);

  var _super = _createSuper(CompetitionIndex);

  function CompetitionIndex() {
    (0,D_hahah_hack_node_modules_next_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_3__.default)(this, CompetitionIndex);

    return _super.apply(this, arguments);
  }

  (0,D_hahah_hack_node_modules_next_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_4__.default)(CompetitionIndex, [{
    key: "renderCompetitions",
    value: function renderCompetitions() {
      var _this = this;

      var items = this.props.competitions.map(function (address) {
        return {
          header: address,
          description: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("p", {
            children: [" ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("br", {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 20,
              columnNumber: 13
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_routes__WEBPACK_IMPORTED_MODULE_11__.Link, {
              route: "/competitions/".concat(address),
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("a", {
                children: "View Project"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 22,
                columnNumber: 15
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 21,
              columnNumber: 13
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 18,
            columnNumber: 11
          }, _this),
          fluid: true
        };
      });
      return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_12__.Card.Group, {
        items: items
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 29,
        columnNumber: 12
      }, this);
    }
  }, {
    key: "render",
    value: function render() {
      return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_components_Layout__WEBPACK_IMPORTED_MODULE_10__.default, {
        style: {
          margin: '0',
          padding: '0'
        },
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_12__.Segment, {
          style: {
            margin: '0',
            background: "black",
            padding: '5'
          },
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_12__.Grid, {
            columns: 2,
            style: {
              padding: '0'
            },
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_12__.Grid.Column, {
              style: {
                background: "#481a58"
              },
              align: "center",
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_12__.Image, {
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
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_12__.Grid.Column, {
              style: {
                background: "#481a58",
                color: "white"
              },
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_12__.Header, {
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
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_12__.Segment, {
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
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("br", {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 100,
          columnNumber: 19
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_12__.Grid, {
          style: {
            border: "1px solid gray"
          },
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_12__.Grid.Column, {
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
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_12__.Grid.Column, {
            floated: "right",
            width: 5,
            style: {
              marginRight: "10px"
            },
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_routes__WEBPACK_IMPORTED_MODULE_11__.Link, {
              route: "/competitions/new",
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("a", {
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_12__.Button, {
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
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("br", {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 133,
          columnNumber: 19
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_12__.Card.Group, {
          style: {
            justifyContent: "space-around"
          },
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_12__.Card, {
            style: {
              width: "25%"
            },
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_12__.Card.Content, {
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_12__.Image, {
                floated: "right",
                size: "large",
                src: "https://react.semantic-ui.com/images/avatar/large/steve.jpg"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 137,
                columnNumber: 9
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_12__.Card.Header, {
                children: "Steve Sanders"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 142,
                columnNumber: 9
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_12__.Card.Meta, {
                children: "Friends of Elliot"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 143,
                columnNumber: 9
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_12__.Card.Description, {
                children: ["Steve wants to add you to the group ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("strong", {
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
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_12__.Card.Content, {
              extra: true,
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
                className: "ui two buttons",
                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_12__.Button, {
                  basic: true,
                  color: "green",
                  children: "Approve"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 150,
                  columnNumber: 11
                }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_12__.Button, {
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
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_12__.Card, {
            style: {
              width: "25%"
            },
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_12__.Card.Content, {
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_12__.Image, {
                floated: "right",
                size: "large",
                src: "https://react.semantic-ui.com/images/avatar/large/molly.png"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 161,
                columnNumber: 9
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_12__.Card.Header, {
                children: "Molly Thomas"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 166,
                columnNumber: 9
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_12__.Card.Meta, {
                children: "New User"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 167,
                columnNumber: 9
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_12__.Card.Description, {
                children: ["Molly wants to add you to the group ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("strong", {
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
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_12__.Card.Content, {
              extra: true,
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
                className: "ui two buttons",
                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_12__.Button, {
                  basic: true,
                  color: "green",
                  children: "Approve"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 174,
                  columnNumber: 11
                }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_12__.Button, {
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
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_12__.Card, {
            style: {
              width: "25%"
            },
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_12__.Card.Content, {
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_12__.Image, {
                floated: "right",
                size: "large",
                src: "https://react.semantic-ui.com/images/avatar/large/jenny.jpg"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 185,
                columnNumber: 9
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_12__.Card.Header, {
                children: "Jenny Lawrence"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 190,
                columnNumber: 9
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_12__.Card.Meta, {
                children: "New User"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 191,
                columnNumber: 9
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_12__.Card.Description, {
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
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_12__.Card.Content, {
              extra: true,
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
                className: "ui two buttons",
                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_12__.Button, {
                  basic: true,
                  color: "green",
                  children: "Approve"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 198,
                  columnNumber: 11
                }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_12__.Button, {
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
  }], [{
    key: "getInitialProps",
    value: function () {
      var _getInitialProps = (0,D_hahah_hack_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__.default)( /*#__PURE__*/D_hahah_hack_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {
        var competitions;
        return D_hahah_hack_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return _ethereum_factory__WEBPACK_IMPORTED_MODULE_9__.default.methods.getDeployedCompetitions().call();

              case 2:
                competitions = _context.sent;
                return _context.abrupt("return", {
                  competitions: competitions
                });

              case 4:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      function getInitialProps() {
        return _getInitialProps.apply(this, arguments);
      }

      return getInitialProps;
    }()
  }]);

  return CompetitionIndex;
}(react__WEBPACK_IMPORTED_MODULE_8__.Component);

/* harmony default export */ __webpack_exports__["default"] = (CompetitionIndex);

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOlsiQ29tcGV0aXRpb25JbmRleCIsIml0ZW1zIiwicHJvcHMiLCJjb21wZXRpdGlvbnMiLCJtYXAiLCJhZGRyZXNzIiwiaGVhZGVyIiwiZGVzY3JpcHRpb24iLCJmbHVpZCIsIm1hcmdpbiIsInBhZGRpbmciLCJiYWNrZ3JvdW5kIiwiY29sb3IiLCJwYWRkaW5nTGVmdCIsInRleHRBbGlnbiIsImJvcmRlciIsIm1hcmdpbkxlZnQiLCJmb250U2l6ZSIsIkZvbnRGYWNlIiwibWFyZ2luUmlnaHQiLCJqdXN0aWZ5Q29udGVudCIsIndpZHRoIiwiZmFjdG9yeSIsImNhbGwiLCJDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0lBRU1BLGdCOzs7Ozs7Ozs7Ozs7O3lDQU1pQjtBQUFBOztBQUNuQixVQUFNQyxLQUFLLEdBQUcsS0FBS0MsS0FBTCxDQUFXQyxZQUFYLENBQXdCQyxHQUF4QixDQUE0QixVQUFDQyxPQUFELEVBQWE7QUFDckQsZUFBTztBQUNMQyxnQkFBTSxFQUFFRCxPQURIO0FBRUxFLHFCQUFXLGVBQ1Q7QUFBQSx1QkFDRyxHQURILGVBRUU7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFGRixlQUdFLDhEQUFDLDBDQUFEO0FBQU0sbUJBQUssMEJBQW1CRixPQUFuQixDQUFYO0FBQUEscUNBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQUhGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFIRztBQVdMRyxlQUFLLEVBQUU7QUFYRixTQUFQO0FBYUQsT0FkYSxDQUFkO0FBZUEsMEJBQU8sOERBQUMsMERBQUQ7QUFBWSxhQUFLLEVBQUVQO0FBQW5CO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FBUDtBQUNE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QUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHNCQVBGLGVBUUUsOERBQUMsZ0VBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsc0JBUkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQURGLGVBYUUsOERBQUMsNERBQUQ7QUFBYyxtQkFBSyxNQUFuQjtBQUFBLHFDQUNFO0FBQUsseUJBQVMsRUFBQyxnQkFBZjtBQUFBLHdDQUNFLDhEQUFDLHNEQUFEO0FBQVEsdUJBQUssTUFBYjtBQUFjLHVCQUFLLEVBQUMsT0FBcEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsd0JBREYsZUFJRSw4REFBQyxzREFBRDtBQUFRLHVCQUFLLE1BQWI7QUFBYyx1QkFBSyxFQUFDLEtBQXBCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHdCQUpGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBYkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQWpERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBcEdJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURGO0FBb0xEOzs7Ozs7Ozs7Ozt1QkE1TTRCQyxzRkFBQSxHQUEwQ0MsSUFBMUMsRTs7O0FBQXJCcEIsNEI7aURBQ0M7QUFBRUEsOEJBQVksRUFBWkE7QUFBRixpQjs7Ozs7Ozs7Ozs7Ozs7Ozs7OztFQUhvQnFCLDRDOztBQWlOL0IsK0RBQWV4QixnQkFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC5iYWExZGNiYzY4YTI0MDNjOTZhMy5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgZmFjdG9yeSBmcm9tIFwiLi4vZXRoZXJldW0vZmFjdG9yeVwiO1xyXG5pbXBvcnQgeyBDYXJkLCBCdXR0b24sIFNlZ21lbnQsIERpdmlkZXIsIEdyaWQsIEltYWdlLENvbnRhaW5lcixIZWFkZXJ9IGZyb20gXCJzZW1hbnRpYy11aS1yZWFjdFwiO1xyXG5pbXBvcnQgTGF5b3V0IGZyb20gXCIuLi9jb21wb25lbnRzL0xheW91dFwiO1xyXG5pbXBvcnQgeyBMaW5rIH0gZnJvbSBcIi4uL3JvdXRlc1wiO1xyXG5cclxuY2xhc3MgQ29tcGV0aXRpb25JbmRleCBleHRlbmRzIENvbXBvbmVudCB7XHJcbiAgc3RhdGljIGFzeW5jIGdldEluaXRpYWxQcm9wcygpIHtcclxuICAgIGNvbnN0IGNvbXBldGl0aW9ucyA9IGF3YWl0IGZhY3RvcnkubWV0aG9kcy5nZXREZXBsb3llZENvbXBldGl0aW9ucygpLmNhbGwoKTtcclxuICAgIHJldHVybiB7IGNvbXBldGl0aW9ucyB9O1xyXG4gIH1cclxuXHJcbiAgcmVuZGVyQ29tcGV0aXRpb25zKCkge1xyXG4gICAgY29uc3QgaXRlbXMgPSB0aGlzLnByb3BzLmNvbXBldGl0aW9ucy5tYXAoKGFkZHJlc3MpID0+IHtcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICBoZWFkZXI6IGFkZHJlc3MsXHJcbiAgICAgICAgZGVzY3JpcHRpb246IChcclxuICAgICAgICAgIDxwPlxyXG4gICAgICAgICAgICB7XCIgXCJ9XHJcbiAgICAgICAgICAgIDxiciAvPlxyXG4gICAgICAgICAgICA8TGluayByb3V0ZT17YC9jb21wZXRpdGlvbnMvJHthZGRyZXNzfWB9PlxyXG4gICAgICAgICAgICAgIDxhPlZpZXcgUHJvamVjdDwvYT5cclxuICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgPC9wPlxyXG4gICAgICAgICksXHJcbiAgICAgICAgZmx1aWQ6IHRydWUsXHJcbiAgICAgIH07XHJcbiAgICB9KTtcclxuICAgIHJldHVybiA8Q2FyZC5Hcm91cCBpdGVtcz17aXRlbXN9IC8+O1xyXG4gIH1cclxuXHJcbiAgcmVuZGVyKCkge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPExheW91dCBzdHlsZT17e21hcmdpbjonMCcscGFkZGluZzonMCd9fT5cclxuICAgICAgICAgIDxTZWdtZW50IHN0eWxlPXt7bWFyZ2luOicwJyxiYWNrZ3JvdW5kOlwiYmxhY2tcIixwYWRkaW5nOic1J319ID5cclxuICAgICAgICAgICAgPEdyaWQgY29sdW1ucz17Mn0gc3R5bGU9e3twYWRkaW5nOicwJ319PlxyXG4gICAgICAgICAgICAgIDxHcmlkLkNvbHVtbiBzdHlsZT17e2JhY2tncm91bmQ6XCIjNDgxYTU4XCJ9fSBhbGlnbj1cImNlbnRlclwiPlxyXG4gICAgICAgICAgICAgICAgICA8SW1hZ2Ugc3JjPSdodHRwczovL2kuaWJiLmNvL3pmeGQxOUQvbGFuZGluZy1QYWdlMi5qcGcnIHNpemU9J2xhcmdlJyBhbGlnbj1cImNlbnRlclwiICAvPlxyXG4gICAgICAgICAgICAgIDwvR3JpZC5Db2x1bW4+XHJcbiAgICAgICAgICAgICAgPEdyaWQuQ29sdW1uIHN0eWxlPXt7YmFja2dyb3VuZDpcIiM0ODFhNThcIixjb2xvcjpcIndoaXRlXCJ9fT5cclxuICAgICAgICAgICAgICAgIDxIZWFkZXIgYXM9XCJoMVwiIHN0eWxlPXt7Y29sb3I6XCJ3aGl0ZVwiLHBhZGRpbmdMZWZ0OlwiMTNweFwifX0+XHJcbiAgICAgICAgICAgICAgICAgIE92ZXJ2aWV3XHJcbiAgICAgICAgICAgICAgICA8L0hlYWRlcj5cclxuICAgICAgICAgICAgICAgIDxTZWdtZW50IHN0eWxlPXt7YmFja2dyb3VuZDpcIiM0ODFhNThcIixjb2xvcjpcIndoaXRlXCIsdGV4dEFsaWduOlwianVzdGlmeVwifX0+XHJcbiAgICAgICAgICAgICAgICAgIEFydGlmaWNpYWwgSW50ZWxsaWdlbmNlIChBSSkgYW5kIGJsb2NrY2hhaW4gYXJlIHR3byBkaXNydXB0aXZlIHRlY2hub2xvZ2llcyBwcm92aW5nIHRvIGJlIGEgcG93ZXJmdWwgY29tYmluYXRpb24sIGltcHJvdmluZ1xyXG52aXJ0dWFsbHkgZXZlcnkgaW5kdXN0cnkuIFJlc2VhcmNoIGluIEFydGlmaWNpYWwgSW50ZWxsaWdlbmNlIGhhcyBjb21lIGEgbG9uZyB3YXksIHdpdGggbWFueSBjb3Jwb3JhdGlvbnMsIG9yZ2FuaXphdGlvbnMgYW5kXHJcbmluZGl2aWR1YWxzIGdyZWF0bHkgYmVuZWZpdGluZyBmcm9tIE1hY2hpbmUgTGVhcm5pbmcgc2VydmljZXMuIEhvd2V2ZXIsIGNvcnBvcmF0aW9ucywgb3JnYW5pemF0aW9ucyBhbmQgaW5kaXZpZHVhbHMgd2l0aFxyXG5wcm9ibGVtcyBBSSBjYW4gc29sdmUgYXJlIGhlc2l0YW50IHRvIHNvbGljaXQgc2VydmljZXMgZnJvbSB0aGlyZC1wYXJ0eSBhZ2VudHMgYnkgc2hhcmluZyB0aGVpciBwcml2YXRlIGRhdGEgdG8gb2J0YWluIHRob3NlXHJcbnZhbHVhYmxlIHByZWRpY3Rpb25zLiBGdXJ0aGVyLCByZXNlYXJjaCBvbiBpbXByb3ZpbmcgTWFjaGluZSBMZWFybmluZyBtb2RlbHMgc3VnZ2VzdHMgdXRpbGl6aW5nIGxhcmdlciBkYXRhc2V0cyB0byBvYnRhaW5cclxuYmV0dGVyIHdvcmtpbmcgbW9kZWxzLiBIb3dldmVyLCBoYW5kbGluZyB0aGUgbGFiZWxsaW5nIG9mIGEgc3VmZmljaWVudCBhbW91bnQgb2YgZGF0YSB3aXRoIGxpbWl0ZWQgaW4taG91c2UgcmVzb3VyY2VzIGlzIGFcclxudGltZS1jb25zdW1pbmcgYW5kIGNvc3RseSBvcGVyYXRpb24uIENvbnNlcXVlbnRseSwgYnVzaW5lc3NlcyBwcmVmZXIgY3Jvd2Rzb3VyY2luZyBvcHRpb25zIHdoZW4gbGFiZWxsaW5nIGRhdGEgdG8gdHJhaW5cclxuTWFjaGluZSBMZWFybmluZyBtb2RlbHMuIEFsc28sIHByb3RlY3RpbmcgdGhlIGJ1c2luZXNzJ3MgZGF0YSBpcyBhcyBpbXBlcmF0aXZlIGFzIHByb3RlY3RpbmcgdGhlIGN1c3RvbWVyJ3MgZGF0YS4gSXQgaXMgbm90XHJcbmluIGZhdm91ciBvZiBidXNpbmVzc2VzIHRvIHNoYXJlIHRoZWlyIE1hY2hpbmUgTGVhcm5pbmcgbW9kZWxzIHdpdGggdGhvc2UgdGhleSBvZmZlciBzZXJ2aWNlcyB0bywgYXMgdGhlc2UgbW9kZWxzIG1heSBiZVxyXG5wcm9wcmlldGFyeS4gVGhpcyBwcm9wb3NhbCBmb2N1c2VzIG9uIGNyZWF0aW5nIGEgY29tbXVuaXR5IG9mIG1hY2hpbmUgbGVhcm5pbmcgcHJhY3RpdGlvbmVycyB3aG8gY2FuIGNvbnRyaWJ1dGUgdG8gQUlcclxuYnVzaW5lc3NlcyBieSBidWlsZGluZyBtb2RlbHMgYW5kIGRhdGFzZXRzIGluIGEgYmxvY2tjaGFpbiBlbnZpcm9ubWVudCBpbiBleGNoYW5nZSBmb3IgYSByZXdhcmQuIEl0IGFsc28gcGVybWl0cyBhZ2VudHNcclxuYW5kIG9yZ2FuaXphdGlvbnMgd2l0aCBwcm9ibGVtcyB0aGF0IGNvdWxkIGJlIHNvbHZlZCB3aXRoIEFJIHRvIHNvbGljaXQgc29sdXRpb25zIHdpdGhvdXQgc2hhcmluZyB0aGVpciBkYXRhLlxyXG4gICAgICAgICAgICAgIDwvU2VnbWVudD5cclxuICAgICAgICAgICAgICA8L0dyaWQuQ29sdW1uPlxyXG4gICAgICAgICAgICA8L0dyaWQ+XHJcblxyXG4gICAgICAgICAgICB7LyogPERpdmlkZXIgdmVydGljYWw+QW5kPC9EaXZpZGVyPiAqL31cclxuICAgICAgICAgIDwvU2VnbWVudD5cclxuXHJcbiAgICAgICAgey8qIFxyXG4gICAgICAgIGV4cG9ydCBkZWZhdWx0IERpdmlkZXJFeGFtcGxlVmVydGljYWwgKi99XHJcbiAgICAgICAgICAgICAgICAgICAgey8qIDxoMj5PYmplY3RpdmVzPC9oMj57XCIgXCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgPHA+XHJcbiAgICAgICAgICAgICAgICAgICAgICBUaGlzIHJlc2VhcmNoIGZvY3VzZXMgb24gY3JlYXRpbmcgYSBjb21tdW5pdHkgb2YgbWFjaGluZSBsZWFybmluZ1xyXG4gICAgICAgICAgICAgICAgICAgICAgcHJhY3RpdGlvbmVycyB3aG8gY2FuIGNvbnRyaWJ1dGUgdG8gQUkgYnVzaW5lc3NlcyBieSBidWlsZGluZ1xyXG4gICAgICAgICAgICAgICAgICAgICAgbW9kZWxzIGFuZCBkYXRhc2V0cyBpbiBhIGJsb2NrY2hhaW4gZW52aXJvbm1lbnQgaW4gZXhjaGFuZ2UgZm9yIGFcclxuICAgICAgICAgICAgICAgICAgICAgIHJld2FyZC4gXHJcbiAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgPHA+XHJcbiAgICAgICAgICAgICAgICAgICAgSXQgYWxzbyBwZXJtaXRzIG9yZ2FuaXphdGlvbnMgYW5kIGFnZW50cyB3aXRoIHByb2JsZW1zXHJcbiAgICAgICAgICAgICAgICAgICAgICB0aGF0IGNvdWxkIGJlIHNvbHZlZCB3aXRoIEFJIHRvIHNvbGljaXQgc29sdXRpb25zIHdpdGhvdXQgc2hhcmluZ1xyXG4gICAgICAgICAgICAgICAgICAgICAgdGhlaXIgZGF0YS5cclxuICAgICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgPHA+XHJcbiAgICAgICAgICAgICAgICAgICAgVGhpcyByZXNlYXJjaCB1dGlsaXplcyB0aGUgYmVuZWZpdHMgb2YgbXVsdGktcGFydHlcclxuICAgICAgICAgICAgICAgICAgICAgIGNvbXB1dGF0aW9uIChNUEMpIHRvIGJ1aWxkIE1hY2hpbmUgTGVhcm5pbmcgbW9kZWxzIHRoYXQgcHJvdmlkZVxyXG4gICAgICAgICAgICAgICAgICAgICAgcHJlZGljdGlvbnMgb24gZW5jcnlwdGVkIGRhdGEuIEluIG1hbnkgY2FzZXMsIGl0IGlzIG5vdCBpbiBmYXZvdXJcclxuICAgICAgICAgICAgICAgICAgICAgIG9mIGJ1c2luZXNzZXMgdG8gc2hhcmUgdGhlaXIgTWFjaGluZSBMZWFybmluZyBtb2RlbHMgd2l0aCB0aG9zZVxyXG4gICAgICAgICAgICAgICAgICAgICAgdGhleSBvZmZlciBzZXJ2aWNlcyB0bywgYXMgdGhlc2UgbW9kZWxzIG1heSBiZSBwcm9wcmlldGFyeS4gVXNpbmdcclxuICAgICAgICAgICAgICAgICAgICAgIE1QQywgb3JnYW5pemF0aW9ucyB0aGF0IHNvbGljaXQgc2VydmljZXMgYXJlIG5vdCByZXF1aXJlZCB0byBzZW5kXHJcbiAgICAgICAgICAgICAgICAgICAgICB0aGVpciBkYXRhIHRvIEFJIGJ1c2luZXNzZXM7IGVuY3J5cHRlZCBtb2RlbHMgYXJlIHNlbnQgdG8gdGhlXHJcbiAgICAgICAgICAgICAgICAgICAgICBtYWNoaW5lcyB3aXRoIHRoZSBkYXRhLiBUaGVyZWZvcmUsIHRoaXMgcmVzZWFyY2ggZm9jdXNlcyBvblxyXG4gICAgICAgICAgICAgICAgICAgICAgcHJvdmlkaW5nIGVuY3J5cHRlZCBtb2RlbHMgdG8gb2ZmZXIgcHJlZGljdGlvbnMgb24gZW5jcnlwdGVkIGRhdGEuXHJcbiAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgPHA+XHJcbiAgICAgICAgICAgICAgICAgICAgQmxvY2tjaGFpbiBvZmZlcnMgbWFueSBiZW5lZml0cywgc3VjaCBhcyBkZWNlbnRyYWxpemF0aW9uLCBwZXJzaXN0ZW5jZSwgdHJhbnNwYXJlbmN5LCBhbmQgdHJ1c3QsIHdoaWNoIGNvdWxkIGNvbXBsZW1lbnQgQXJ0aWZpY2lhbCBJbnRlbGxpZ2VuY2UgdG8gY3JlYXRlIGEgc2VjdXJlIGFuZCByZWxpYWJsZSBmcmFtZXdvcmsuIFRoZSBtYWluIG9iamVjdGl2ZXMgaW5jbHVkZTpcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICA8dWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5EZXZlbG9wIGEgYmxvY2tjaGFpbiBiYXNlZCBiYXNlZCBwcm90b2NvbCBmb3IgY3Jvd2Rzb3VyY2luZyBkYXRhIGFuZCBtb2RlbHMgZnJvbSBjb250cmlidXRvcnMgd2l0aCBhIHByb21pc2luZyByZXdhcmQgc2NoZW1lLjwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5CdWlsZCBhIHBsYXRmb3JtIGZvciBidXNpbmVzc2VzIHRvIHByb3ZpZGUgTWFjaGluZSBMZWFybmluZyBzZXJ2aWNlcyB3aGlsZSBtYWludGFpbmluZyB0aGUgcHJpdmFjeSBvZiB0aGVpciBtb2RlbHMgYW5kIGNsaWVudCBkYXRhLjwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5CdWlsZCBNYWNoaW5lIExlYXJuaW5nIE1vZGVscyB1c2luZyBtdWx0aS1wYXJ0eSBjb21wdXRhdGlvbiAoTVBDKSwgdG8gZGV2ZWxvcCBlbmNyeXB0ZWQgbW9kZWxzIHRoYXQgb2ZmZXIgcHJlZGljdGlvbnMgb24gZW5jcnlwdGVkIGRhdGEuIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvcD4gKi99XHJcbiAgICAgICAgICAgICAgICAgIDxici8+XHJcbiAgICAgICAgICAgICAgICAgIHsvKiA8U2VnbWVudCBzdHlsZT17e2p1c3RpZnlDb250ZW50OlwiY2VudGVyXCJ9fT5cclxuICAgICAgICAgICAgICAgICAgICA8YT5cclxuICAgICAgICAgICAgICAgICAgICA8QnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgZmxvYXRlZD1cInJpZ2h0XCJcclxuICAgICAgICAgICAgICAgICAgICBjb250ZW50PVwiQ3JlYXRlIFByb2plY3RcIlxyXG4gICAgICAgICAgICAgICAgICAgIGljb249XCJhZGQgY2lyY2xlXCJcclxuICAgICAgICAgICAgICAgICAgICBwcmltYXJ5XHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgPENvbnRhaW5lciBmbG9hdGVkPVwibGVmdFwiIHN0eWxlPXt7cGFkZGluZ0xlZnQ6XCI1cHhcIixtYXJnaW46XCIwIDBcIn19PlxyXG4gICAgICAgICAgICAgICAgICAgIE9wZW4gUHJvamVjdHNcclxuICAgICAgICAgICAgICAgICAgICA8L0NvbnRhaW5lcj5cclxuICAgICAgICAgICAgICAgICAgPC9TZWdtZW50PiAqL31cclxuICAgICAgICAgICAgICAgICAgIDxHcmlkIHN0eWxlPXt7Ym9yZGVyOlwiMXB4IHNvbGlkIGdyYXlcIn19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPEdyaWQuQ29sdW1uIGZsb2F0ZWQ9J2xlZnQnIHdpZHRoPXs1fSBzdHlsZT17e21hcmdpbkxlZnQ6XCIxMHB4XCIsZm9udFNpemU6XCIyNXB4XCIsRm9udEZhY2U6XCJSb2JvdG9cIn19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBPcGVuIFByb2plY3RzXHJcbiAgICAgICAgICAgICAgICAgICAgICA8L0dyaWQuQ29sdW1uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPEdyaWQuQ29sdW1uIGZsb2F0ZWQ9J3JpZ2h0JyB3aWR0aD17NX0gc3R5bGU9e3ttYXJnaW5SaWdodDpcIjEwcHhcIn19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8TGluayByb3V0ZT1cIi9jb21wZXRpdGlvbnMvbmV3XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICA8YT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGZsb2F0ZWQ9XCJyaWdodFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY29udGVudD1cIkNyZWF0ZSBQcm9qZWN0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBpY29uPVwiYWRkIGNpcmNsZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcHJpbWFyeVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L0dyaWQuQ29sdW1uPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgPGJyIC8+XHJcbiAgPENhcmQuR3JvdXAgc3R5bGU9e3tqdXN0aWZ5Q29udGVudDpcInNwYWNlLWFyb3VuZFwifX0+XHJcbiAgICA8Q2FyZCBzdHlsZT17e3dpZHRoOlwiMjUlXCJ9fT5cclxuICAgICAgPENhcmQuQ29udGVudD5cclxuICAgICAgICA8SW1hZ2VcclxuICAgICAgICAgIGZsb2F0ZWQ9J3JpZ2h0J1xyXG4gICAgICAgICAgc2l6ZT0nbGFyZ2UnXHJcbiAgICAgICAgICBzcmM9J2h0dHBzOi8vcmVhY3Quc2VtYW50aWMtdWkuY29tL2ltYWdlcy9hdmF0YXIvbGFyZ2Uvc3RldmUuanBnJ1xyXG4gICAgICAgIC8+XHJcbiAgICAgICAgPENhcmQuSGVhZGVyPlN0ZXZlIFNhbmRlcnM8L0NhcmQuSGVhZGVyPlxyXG4gICAgICAgIDxDYXJkLk1ldGE+RnJpZW5kcyBvZiBFbGxpb3Q8L0NhcmQuTWV0YT5cclxuICAgICAgICA8Q2FyZC5EZXNjcmlwdGlvbj5cclxuICAgICAgICAgIFN0ZXZlIHdhbnRzIHRvIGFkZCB5b3UgdG8gdGhlIGdyb3VwIDxzdHJvbmc+YmVzdCBmcmllbmRzPC9zdHJvbmc+XHJcbiAgICAgICAgPC9DYXJkLkRlc2NyaXB0aW9uPlxyXG4gICAgICA8L0NhcmQuQ29udGVudD5cclxuICAgICAgPENhcmQuQ29udGVudCBleHRyYT5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ndWkgdHdvIGJ1dHRvbnMnPlxyXG4gICAgICAgICAgPEJ1dHRvbiBiYXNpYyBjb2xvcj0nZ3JlZW4nPlxyXG4gICAgICAgICAgICBBcHByb3ZlXHJcbiAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgIDxCdXR0b24gYmFzaWMgY29sb3I9J3JlZCc+XHJcbiAgICAgICAgICAgIERlY2xpbmVcclxuICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L0NhcmQuQ29udGVudD5cclxuICAgIDwvQ2FyZD5cclxuICAgIDxDYXJkIHN0eWxlPXt7d2lkdGg6XCIyNSVcIn19PlxyXG4gICAgICA8Q2FyZC5Db250ZW50PlxyXG4gICAgICAgIDxJbWFnZVxyXG4gICAgICAgICAgZmxvYXRlZD0ncmlnaHQnXHJcbiAgICAgICAgICBzaXplPSdsYXJnZSdcclxuICAgICAgICAgIHNyYz0naHR0cHM6Ly9yZWFjdC5zZW1hbnRpYy11aS5jb20vaW1hZ2VzL2F2YXRhci9sYXJnZS9tb2xseS5wbmcnXHJcbiAgICAgICAgLz5cclxuICAgICAgICA8Q2FyZC5IZWFkZXI+TW9sbHkgVGhvbWFzPC9DYXJkLkhlYWRlcj5cclxuICAgICAgICA8Q2FyZC5NZXRhPk5ldyBVc2VyPC9DYXJkLk1ldGE+XHJcbiAgICAgICAgPENhcmQuRGVzY3JpcHRpb24+XHJcbiAgICAgICAgICBNb2xseSB3YW50cyB0byBhZGQgeW91IHRvIHRoZSBncm91cCA8c3Ryb25nPm11c2ljaWFuczwvc3Ryb25nPlxyXG4gICAgICAgIDwvQ2FyZC5EZXNjcmlwdGlvbj5cclxuICAgICAgPC9DYXJkLkNvbnRlbnQ+XHJcbiAgICAgIDxDYXJkLkNvbnRlbnQgZXh0cmE+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J3VpIHR3byBidXR0b25zJz5cclxuICAgICAgICAgIDxCdXR0b24gYmFzaWMgY29sb3I9J2dyZWVuJz5cclxuICAgICAgICAgICAgQXBwcm92ZVxyXG4gICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICA8QnV0dG9uIGJhc2ljIGNvbG9yPSdyZWQnPlxyXG4gICAgICAgICAgICBEZWNsaW5lXHJcbiAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9DYXJkLkNvbnRlbnQ+XHJcbiAgICA8L0NhcmQ+XHJcbiAgICA8Q2FyZCBzdHlsZT17e3dpZHRoOlwiMjUlXCJ9fT5cclxuICAgICAgPENhcmQuQ29udGVudD5cclxuICAgICAgICA8SW1hZ2VcclxuICAgICAgICAgIGZsb2F0ZWQ9J3JpZ2h0J1xyXG4gICAgICAgICAgc2l6ZT0nbGFyZ2UnXHJcbiAgICAgICAgICBzcmM9J2h0dHBzOi8vcmVhY3Quc2VtYW50aWMtdWkuY29tL2ltYWdlcy9hdmF0YXIvbGFyZ2UvamVubnkuanBnJ1xyXG4gICAgICAgIC8+XHJcbiAgICAgICAgPENhcmQuSGVhZGVyPkplbm55IExhd3JlbmNlPC9DYXJkLkhlYWRlcj5cclxuICAgICAgICA8Q2FyZC5NZXRhPk5ldyBVc2VyPC9DYXJkLk1ldGE+XHJcbiAgICAgICAgPENhcmQuRGVzY3JpcHRpb24+XHJcbiAgICAgICAgICBKZW5ueSByZXF1ZXN0ZWQgcGVybWlzc2lvbiB0byB2aWV3IHlvdXIgY29udGFjdCBkZXRhaWxzXHJcbiAgICAgICAgPC9DYXJkLkRlc2NyaXB0aW9uPlxyXG4gICAgICA8L0NhcmQuQ29udGVudD5cclxuICAgICAgPENhcmQuQ29udGVudCBleHRyYT5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ndWkgdHdvIGJ1dHRvbnMnPlxyXG4gICAgICAgICAgPEJ1dHRvbiBiYXNpYyBjb2xvcj0nZ3JlZW4nPlxyXG4gICAgICAgICAgICBBcHByb3ZlXHJcbiAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgIDxCdXR0b24gYmFzaWMgY29sb3I9J3JlZCc+XHJcbiAgICAgICAgICAgIERlY2xpbmVcclxuICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L0NhcmQuQ29udGVudD5cclxuICAgIDwvQ2FyZD5cclxuICA8L0NhcmQuR3JvdXA+XHJcblxyXG5cclxuICAgICAgICAgICAgICAgICAgey8qIHt0aGlzLnJlbmRlckNvbXBldGl0aW9ucygpfSAqL31cclxuICAgICAgPC9MYXlvdXQ+XHJcbiAgICApO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ29tcGV0aXRpb25JbmRleDtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==