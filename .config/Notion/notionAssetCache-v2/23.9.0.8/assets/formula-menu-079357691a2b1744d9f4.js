(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{jAkY:function(e,t,r){"use strict";r.r(t);var n=r("pVnL"),o=r.n(n),s=r("gcR/"),i=r.n(s),a=r("lSNA"),l=r.n(a),d=(r("3bBZ"),r("q1tI")),p=r.n(d),u=r("VOS9"),c=r("LEzx");class m extends c.a{getInitialState(){return{value:"",html:"",query:""}}}var h=m,f=r("wldR"),g=(r("SYor"),r("LvDl")),y=r.n(g),v=r("LeVO"),b=r("rlmE"),S=r("pxbK"),M=r("9OwC"),x=r("Sb6f"),w=r("nFzZ"),C=r("PQqx"),T=r("VyA+"),k=r("zmp8"),N=r("Ng05"),F=(r("UxlC"),r("yZWr"));function I(e,t){if(!e)return"";const r=function e(t,r){if(!t)return;if("conditional"===t.type)return new L.expression.node.ConditionalNode(e(t.condition,r),e(t.true,r),e(t.false,r));if("constant"===t.type)return new L.expression.node.ConstantNode(t.value,t.value_type);if("function"===t.type)return new L.expression.node.FunctionNode(new L.expression.node.SymbolNode(t.name),(t.args||[]).map(t=>e(t,r)));if("operator"===t.type)return new L.expression.node.OperatorNode(t.operator,t.name,(t.args||[]).map(t=>e(t,r)));if("property"===t.type){const e=r[t.id],n=e?e.name:t.name;return new L.expression.node.FunctionNode("prop",[new L.expression.node.ConstantNode(n,"string")])}if("symbol"===t.type)return new L.expression.node.SymbolNode(t.name)}(e,t);if(!r)return"";const n=r.toString({parenthesis:"auto",handler:(e,t)=>{if(e.isOperatorNode&&"not"===e.fn)return"not ".concat(e.args[0].toString(t))}});return n.replace(/\n/g,"\\n").replace(/\t/g,"\\t")}const L=r.n(F).a.create();L.import(r("LPs6")),L.import(r("78Py")),L.import(r("9TFD")),L.import(r("Poiv"));const E=Object(w.k)(M.c,e=>e.value),z=Object(w.k)(M.h,e=>e.apply),P=Object(w.k)(M.e,e=>e.apply);L.import(E,{override:!0}),L.import(z,{override:!0}),L.import(P,{override:!0}),L.config({predictable:!0});r("E9XD");var O=r("qr6c"),R=r.n(O),W=r("qzno"),D=r("vl8/");const H=/(.+) \(char (\d+)\)/,A=[{regex:/Syntax error in part (.+)$/,translate:(e,t)=>e.formatMessage({id:"mathParseHelpers.syntax.error",defaultMessage:"Syntax error in part {token}"},{token:t})},{regex:/End of (?:matrix|string) ([\]\"\']) expected/,translate:(e,t)=>e.formatMessage({id:"mathParseHelpers.tokenExpected.error",defaultMessage:"{token} expected"},{token:t})},{regex:/Parenthesis ([\)\]]) expected/,translate:(e,t)=>e.formatMessage({id:"mathParseHelpers.tokenExpected.error",defaultMessage:"{token} expected"},{token:t})},{regex:/Unexpected (?:operator|part) (.+)$/,translate:(e,t)=>e.formatMessage({id:"mathParseHelpers.unexpected.error",defaultMessage:"Unexpected {token}"},{token:t})}];function B(e,t,r){const n=e.replace(/\\n/g,"\n").replace(/\\t/g,"\t");const o=D.default.getIntl();if(""===n.trim())return;let s;try{s=R.a.parse(n)}catch({message:i}){return{type:"error",message:function(e,t){const r=H.exec(t);if(!r)return t;let n=r[1];const o=r[2],s=o?e.formatMessage({id:"mathParseHelpers.errorPosition.message",defaultMessage:"char {position}",description:"The character position at which an error occurred"},{position:o}):"";return A.forEach(({regex:t,translate:r})=>{if(n.match(t)){const o=t.exec(n);if(o){const t=o[1];n=r(e,t)}}}),e.formatMessage({id:"mathParseHelpers.fullError.message",defaultMessage:"{errorBody} ({postfix})",description:"The full error message from the math.parse library. Postfix describes the position: i.e. (char 42)"},{errorBody:n,postfix:s})}(o,i),size:1}}return function e(t,r,n,o){if(!r)return;if(r.isAccessorNode||r.isArrayNode||r.isAssignmentNode||r.isBlockNode||r.isFunctionAssignmentNode||r.isIndexNode||r.isObjectNode||r.isRangeNode)return{type:"error",size:1,message:t.formatMessage({id:"formulaHelpers.error.invalidSyntax",defaultMessage:"Invalid syntax: {input}",description:"When a user enters an invalid formula that is structured incorrectly, we show this error message."},{input:r.toString().nodeString})};if(r.isConditionalNode){const s=e(t,r.condition,n,o),i=e(t,r.trueExpr,n,o),a=e(t,r.falseExpr,n,o);if(!s)return;if("error"===s.type)return s;if(i&&"error"===i.type)return i;if(a&&"error"===a.type)return a;if(i&&a)return i.result_type!==a.result_type?{type:"error",size:1,message:t.formatMessage({id:"formulaHelpers.error.branchCondition",defaultMessage:"Each branch of a condition must be of the same type: {input}",description:"When a user enters an invalid formula with an invalid if statement, we show this error message."},{input:r.toString().nodeString})}:{type:"conditional",result_type:i.result_type,condition:s,true:i,false:a}}else{if(r.isConstantNode){const{value:e,valueType:n}=r,o={string:"text",number:"number",boolean:"checkbox"};return n in o?{type:"constant",result_type:o[n],value:e.toString(),value_type:n}:{type:"error",size:1,message:t.formatMessage({id:"formulaHelpers.error.illegalConstant",defaultMessage:"Illegal constant: {value}",description:"When a user enters an invalid formula with an invalid constant, we show this error message."},{value:e})}}if(r.isFunctionNode){const{fn:s,args:i}=r;if("prop"===s.name){if(1!==i.length)return{type:"error",size:1,message:t.formatMessage({id:"formulaHelpers.error.tooManyArgumentsInProp",defaultMessage:"Too many arguments passed to prop()."})};const e=i[0];if(!e.isConstantNode||"string"!==e.valueType)return{type:"error",size:1,message:t.formatMessage({id:"formulaHelpers.error.invalidPropertyReference",defaultMessage:"Invalid property reference: {input}"},{input:e.toString().nodeString})};const r=e.value,s=Object.keys(o).find(e=>{const t=o[e];return Boolean(t&&t.name===r)}),a=s&&o[s];if(!s||!a)return{type:"error",size:1,message:t.formatMessage({id:"formulaHelpers.error.propertyNotFound",defaultMessage:"Property not found: prop({input})"},{input:r})};if("formula"===a.type){const{formula:e}=a;if(!e||!e.result_type)return;return Object(S.a)(e).includes(n)?{type:"error",size:1,message:t.formatMessage({id:"formulaHelpers.error.circularDependency",defaultMessage:"Property {propertySchemaName} creates a circular dependency."},{propertySchemaName:a.name})}:{type:"property",result_type:Object(S.b)(a),name:r,id:s}}return{type:"property",result_type:Object(S.b)(a),name:r,id:s}}const a=M.f(s.name)||M.g(s.name);if(!a)return{type:"error",size:1,message:t.formatMessage({id:"formulaHelpers.error.undefinedFunction",defaultMessage:"Undefined function: {functionName}",description:"When a user enters an invalid formula with a function that doesn't exist, we show this error message."},{functionName:s.name})};const l=y.a.compact((i||[]).map(r=>e(t,r,n,o))),d=_({intl:t,functionName:s.name,functionArgs:l,signatures:a.signatures,schema:o});if(d.error)return d.error;return{type:"function",result_type:d.value.resultType,name:s.name,args:l}}if(r.isOperatorNode){const{op:s,fn:i,args:a}=r,l=M.g(i);if(!l)return{type:"error",size:1,message:t.formatMessage({id:"formulaHelpers.error.undefinedOperator",defaultMessage:"Undefined operator: {operator}",description:"When a user enters an invalid formula with an operator that doesn't exist, we show this error message."},{operator:s})};const d=y.a.compact((a||[]).map(r=>e(t,r,n,o))),p=_({intl:t,functionName:i,functionArgs:d,signatures:l.signatures,schema:o});if(p.error)return p.error;return{type:"operator",result_type:p.value.resultType,operator:s,name:i,args:d}}if(r.isParenthesisNode)return e(t,r.content,n,o);if(r.isSymbolNode){const{name:e}=r;return e in M.c?{type:"symbol",result_type:M.c[e].resultType,name:e}:{type:"error",size:1,message:t.formatMessage({id:"formulaHelpers.error.undefinedConstant",defaultMessage:"Undefined constant: {constantName}",description:"When a user enters an invalid formula with a constant that doesn't exist, we show this error message."},{constantName:e})}}}}(o,s,t,r)}function _(e){const{intl:t,functionName:r,functionArgs:n,signatures:o,schema:s}=e;return o.reduce((e,o)=>{if(!e.error)return e;const i=function(e){const{intl:t,functionName:r,functionArgs:n,signature:o,schema:s}=e,{arity:i,variadic:a}=o;if(a){if(!(n.length>0))return{type:"error",size:1,message:t.formatMessage({id:"formulaHelpers.error.tooFewArgumentsVariadic",defaultMessage:"Too few arguments in function {functionName}",description:"When a user enters an invalid formula with an improper use of the function, we show this error message."},{functionName:r})};{const e=y.a.compact(n.map(e=>j({intl:t,resultType:a,functionArg:e,schema:s})));if(e.length>0)return{...e[0],size:e.length}}}if(i){if(n.length<i.length)return{type:"error",size:1,message:t.formatMessage({id:"formulaHelpers.error.tooFewArguments",defaultMessage:"Too few arguments in function {functionName}",description:"When a user enters an invalid formula with an improper use of the function, we show this error message."},{functionName:r})};if(n.length>i.length)return{type:"error",size:1,message:t.formatMessage({id:"formulaHelpers.error.tooManyArguments",defaultMessage:"Too many arguments in function {functionName}",description:"When a user enters an invalid formula with an improper use of the function, we show this error message."},{functionName:r})};const e=y.a.compact(n.map((e,r)=>j({intl:t,resultType:i[r],functionArg:e,schema:s})));if(e.length>0)return{...e[0],size:e.length}}}({intl:t,functionName:r,functionArgs:n,signature:o,schema:s});return i?e.error.size<i.size?e:{error:i}:{value:o}},{error:{type:"error",size:99,message:t.formatMessage({id:"formulaHelpers.error.noSignatureForFunction",defaultMessage:"No signatures found for function: {functionName}",description:"When a user enters an invalid formula with a function that doesn't exist, we show this error message."},{functionName:r})}})}function j(e){const{intl:t,resultType:r,functionArg:n,schema:o}=e;if("error"===n.type)return n;if(r!==n.result_type){const e=I(n,o);return{type:"error",size:1,message:t.formatMessage({id:"formulaHelpers.error.typeMismatch",defaultMessage:"Type mismatch {nodeString} is not a {localizedPropertyTypeDisplayName}.",description:"When tye types in the function don't match the database property type, we show this error."},{nodeString:e,localizedPropertyTypeDisplayName:r?W.n[r]:t.formatMessage({id:"formatMessage.error.undefinedResultType",defaultMessage:"undefined"})})}}}var U=r("J9+s"),q=r("T8dS");const V=Object(U.defineMessages)({placeholder:{id:"database.formula.placeholder",defaultMessage:"Type a formula"}});class K extends f.a{constructor(...e){super(...e),l()(this,"updateTimer",void 0),l()(this,"storeTypes",{store:h}),l()(this,"handleInputMount",e=>this.input=e),l()(this,"handleInput",e=>{const{target:{textContent:t}}=e;this.updateValue(t),w.h(this.updateTimer)&&(this.updateTimer=window.setTimeout(()=>this.executeUpdate(),K.delay))}),l()(this,"handlePaste",e=>{e.preventDefault();const t=e.clipboardData.getData("text/plain");document.execCommand("insertText",!1,t)}),l()(this,"handleKeyUp",e=>{this.updateSelection()}),l()(this,"handleClick",e=>{this.updateSelection()}),l()(this,"handleKeyDown",e=>{Object(b.a)(this.environment,e,"command+enter")&&(this.handleAccept(),e.stopPropagation())})}insertEntry(e){const{value:t}=this.stores.store.state,{name:r}=e,n=K.getCompletion(e),o=document.getSelection(),s=o.anchorOffset;let i=s,a=o.focusOffset;const l=S.e(t,s);if(l){const[e,o]=l,s=t.slice(e,o).toLowerCase();s!==n.toLowerCase().slice(0,o-e)&&s!==r.toLowerCase().slice(0,o-e)||(i=e,a=o)}if(this.input.focus(),i<a){const e=this.input.firstChild||this.input,t=document.createRange();t.setStart(e,i),t.setEnd(e,a),o.removeAllRanges(),o.addRange(t),document.execCommand("delete",!1)}document.execCommand("insertText",!1,n);const d=(a+n.length)/(this.input&&this.input.textContent&&this.input.textContent.length||0)*this.container.scrollWidth;d>this.container.scrollLeft+this.container.offsetWidth&&(this.container.scrollLeft=d-this.container.offsetWidth)}handleAccept(){this.updateTimer&&(window.clearTimeout(this.updateTimer),this.updateTimer=void 0);const{value:e}=this.stores.store.state;if(""===e.trim())this.props.onSubmit();else{const{formula:t,error:r}=this.updateFormula(e);r||this.props.onSubmit(t)}}willMount(e){super.willMount(e);const{formula:t,schema:r}=e,n=I(t,r);this.updateValue(n)}didMount(){const{device:e}=this.environment,{value:t}=this.stores.store.state;if(this.input&&(this.input.textContent=t,e.isMobile||this.input.focus(),t)){const e=document.getSelection();this.input.firstChild&&e.collapse(this.input.firstChild,t.length),this.container.scrollLeft=this.container.scrollWidth-this.container.offsetWidth}}renderComponent(){const{device:e}=this.environment,{disabled:t}=this.props,{command:r}=C.a(this.environment),{html:n}=this.stores.store.state;return i()("div",{style:this.getWrapStyle()},void 0,p.a.createElement("div",{ref:e=>{e&&(this.container=e)},style:K.style},i()(T.a,{capture:!t,onLeft:y.a.identity,onRight:y.a.identity,onSelectAll:y.a.identity,onRedo:y.a.identity,onUndo:y.a.identity,onToggleBold:y.a.identity,onToggleItalics:y.a.identity,onToggleCode:y.a.identity,onCut:y.a.identity,onCopy:y.a.identity,onPaste:y.a.identity,onKeypress:y.a.identity,onDelete:y.a.identity,onBackspace:y.a.identity},void 0,p.a.createElement("div",{ref:this.handleInputMount,contentEditable:!t,spellCheck:!1,autoCorrect:"off",autoCapitalize:"off",onClick:this.handleClick,onKeyUp:this.handleKeyUp,onKeyDown:this.handleKeyDown,onInput:this.handleInput,onPaste:this.handlePaste,style:this.getInputStyle()})),i()("div",{style:this.getOverlayStyle(),dangerouslySetInnerHTML:{__html:n}})),!e.isMobile&&!t&&i()(v.a,{renderTooltip:()=>i()("div",{},void 0,i()("span",{},void 0,i()(U.FormattedMessage,{defaultMessage:"Accept",id:"database.formula.acceptFormulaInput.tooltip"}))," ",i()("span",{style:{color:this.theme.mediumInvertedTextColor}},void 0,r,"+Enter")),render:t=>p.a.createElement(N.a,o()({disabled:Boolean(this.stores.store.state.error),onClick:()=>this.handleAccept(),style:{height:24,padding:"0 8px",alignSelf:"flex-end",marginRight:6,marginBottom:4,...e.isMobile&&{marginRight:12}}},t),i()(U.FormattedMessage,{id:"database.formula.doneButton.label",defaultMessage:"Done",description:"Label for button that confirms changes to a formula."}))}))}updateValue(e){const t=""===e.trim()?this.props.disabled?"":D.default.formatMessage(V.placeholder):S.c(this.props.Prism,e);this.stores.store.setState({...this.stores.store.state,html:t,value:e})}updateSelection(){const e=document.getSelection().anchorOffset,{value:t}=this.stores.store.state,r=S.e(t,e),n=r?t.slice(r[0],r[1]):"";n!==this.stores.store.state.query&&this.stores.store.setState({...this.stores.store.state,query:n})}updateFormula(e){const{schema:t,property:r}=this.props;if(""===e.trim())return{error:void 0,formula:void 0,type:void 0};{const n=B(e,r,t);if(n&&"error"===n.type){const{message:e}=n;return{formula:void 0,error:e,type:void 0}}return{formula:n,error:void 0,type:void 0}}}executeUpdate(){const{value:e}=this.stores.store.state,{error:t,formula:r}=this.updateFormula(e);!t&&r&&this.props.onChange(r),this.updateTimer=void 0,this.stores.store.setState({...this.stores.store.state,error:t})}static getCompletion(e){const{category:t,name:r}=e;return t===M.a.property?"prop(".concat(JSON.stringify(r),")"):t===M.a.constant?r:"".concat(r,"(")}getWrapStyle(){const{device:e,WindowSizeStore:t}=this.environment;return{display:"flex",flex:"none",background:this.theme.inputBackground,minHeight:33,borderTopLeftRadius:3,borderTopRightRadius:3,...this.props.disabled&&{background:this.theme.contentBackground,borderRadius:3},...e.isMobile&&{borderBottom:"1px solid ".concat(this.theme.regularDividerColor),background:this.theme.popoverBackground,minHeight:44,paddingLeft:t.state.paddingLeftCSS,paddingRight:t.state.paddingRightCSS}}}getOverlayStyle(){const{device:e}=this.environment,{value:t}=this.stores.store.state;return{...e.isMobile?K.mobileInputStyle:K.desktopInputStyle,zIndex:0,...""===t.trim()&&{color:this.theme.mediumTextColor},position:void 0}}getInputStyle(){const{device:e}=this.environment,t=e.isSafari||e.isChrome?"WebkitTextFillColor":"color";return{...e.isMobile?K.mobileInputStyle:K.desktopInputStyle,border:"none",background:"none",[t]:""===this.stores.store.state.value?this.theme.regularTextColor:k.g.transparent,caretColor:this.theme.regularTextColor,zIndex:1,width:"100%"}}}l()(K,"delay",0),l()(K,"style",{flexGrow:1,position:"relative",minWidth:0}),l()(K,"desktopInputStyle",{alignItems:"center",position:"absolute",minWidth:"100%",minHeight:32,margin:0,padding:0,paddingLeft:10,paddingRight:8,paddingTop:8,fontSize:13,fontFamily:x.a.getCompositeFontFamily(q.a).mono,wordWrap:"break-word"}),l()(K,"mobileInputStyle",{alignItems:"center",position:"absolute",minWidth:"100%",minHeight:44,margin:0,paddingLeft:16,paddingRight:0,paddingTop:12,paddingBottom:12,fontSize:14,fontFamily:x.a.getCompositeFontFamily(q.a).githubMono});var J=K,G=r("zEGb"),Y=r("SR/M"),Q=r("i3uR"),Z=r("RgmA"),X=r("gHFd");class $ extends f.a{renderDescription(){const{entry:e}=this.props;if(e){const{descriptionMessage:t,fallbackDescription:r}=e;if(t)return p.a.createElement(U.FormattedMessage,t);if(r)return r}return null}renderComponent(){const{entry:e}=this.props;if(e){const{name:t,examples:r}=e,n=Object(S.c)(this.props.Prism,(r||[]).join("\n")),o=this.renderSyntax();return i()("div",{},void 0,i()("h1",{style:$.headerStyle},void 0,t),i()("p",{style:$.textStyle},void 0,this.renderDescription()),i()("p",{style:$.textStyle},void 0,i()("b",{},void 0,i()(U.FormattedMessage,{id:"database.formula.syntaxSection.title",defaultMessage:"Syntax",description:"Title of the section describing the syntax of a formula component. For example, for sqrt this title appears above 'sqrt(number)', and appears alongside the Examples section."}))),i()("pre",{style:this.getCodeStyle()},void 0,Object(Z.a)(o,e=>i()("br",{},"sep:".concat(e)))),i()("p",{style:$.textStyle},void 0,i()("b",{},void 0,i()(U.FormattedMessage,{id:"database.formula.examplesSection.title",defaultMessage:"Examples",description:"Title of the section listing examples of the syntax of a formula component. For example, for sqrt this title appears above 'sqrt(144) == 12', and appears alongside the Syntax section."}))),i()("pre",{style:this.getCodeStyle(),dangerouslySetInnerHTML:{__html:n}}))}return i()("div",{})}renderSyntax(){const{entry:e}=this.props;if(!e)return[];const{name:t,category:r}=e;return r===M.a.property?[i()("span",{},0,"prop(",JSON.stringify(t),")")]:r===M.a.constant?[i()("span",{},0,t)]:r===M.a.function?this.getFunctionSyntax(e):r===M.a.operator?this.getOperatorSyntax(e):[]}getFunctionSyntax(e){const{name:t}=e;return $.getSignatureNames(e).map(({variadic:e,arity:r},n)=>e?i()("span",{},n,t,"(",i()("i",{},void 0,e),"...)"):i()("span",{},n,t,"(",Object(Z.a)(r.map((e,t)=>i()("i",{},t,e)),e=>i()("span",{},"sep:".concat(e),","," ")),")"))}getOperatorSyntax(e){const{operator:t}=e;return y.a.compact($.getSignatureNames(e).map(({arity:e},r)=>{if(1===e.length){const[n]=e;return i()("span",{},-r-1,t," ",i()("i",{},void 0,n))}if(2===e.length){const[n,o]=e;return i()("span",{},-r-1,i()("i",{},void 0,n)," ",t," ",i()("i",{},void 0,o))}if(3===e.length){const[t,n,o]=e;return i()("span",{},-r-1,i()("i",{},void 0,t)," ","? ",i()("i",{},void 0,n)," ",": ",i()("i",{},void 0,o))}}).concat(this.getFunctionSyntax(e)))}static getSignatureNames(e){const{name:t,signatures:r}=e;return"if"===t?[{arity:["boolean","value","value"]}]:"format"===t||"unaryPlus"===t?[{arity:["value"]}]:"equal"===t||"unequal"===t?[{arity:["value","value"]}]:r.map(({arity:e,variadic:t})=>({variadic:t?$.typeNameMap[t]:void 0,arity:e?y.a.compact(e.map(e=>$.typeNameMap[e])):[]}))}getCodeStyle(){return{paddingTop:6,paddingBottom:8,paddingLeft:10,paddingRight:10,overflowX:"scroll",background:this.theme.sidebarBackground,borderRadius:3,fontSize:13,margin:0,fontFamily:x.a.getCompositeFontFamily(q.a).mono,lineHeight:1.4}}}l()($,"typeNameMap",{checkbox:"boolean",number:"number",text:"text",date:"date"}),l()($,"headerStyle",{fontSize:20,margin:0,lineHeight:1,marginTop:4,marginBottom:12}),l()($,"textStyle",{marginTop:8,marginBottom:8,fontSize:13,lineHeight:1.4});var ee=Object(X.withDependency)(X.deps.prismjs,(e,t)=>p.a.createElement($,o()({},t,{Prism:e}))),te=r("2Y+N"),re=r("ZQ9l"),ne=r("mF3+"),oe=r("gbGO"),se=r("MeYt"),ie=r("nPEg");class ae extends f.a{renderComponent(){const{entry:{name:e}}=this.props;return i()(Y.a,{focused:this.props.focused,onClick:this.props.onClick,onMouseEnter:this.props.onMouseEnter,icon:i()("div",{style:{...G.a.defaultWrapStyle,...this.environment.device.isMobile&&{marginLeft:14}}},void 0,this.renderPropertyIcon()),title:e,right:this.renderDocumentationButtonPopup(),style:{...!this.environment.device.isMobile&&{paddingLeft:8,paddingRight:8}},desktopIconStyle:{marginLeft:0}})}renderDocumentationButtonPopup(){const{device:e}=this.environment;if(this.environment.device.isMobile)return i()(Q.a,{popupType:e.isMobile?Q.a.PopupType.SlideUp:Q.a.PopupType.Popup,renderOrigin:e=>p.a.createElement(se.a,o()({mobileFeedback:!0,style:{width:16,height:16}},e),ne.a.typesUnknownType({fill:this.theme.mediumIconColor})),render:t=>{let r;return r=e.isMobile?{menuType:oe.b.MenuType.Modal,title:i()(U.FormattedMessage,{defaultMessage:"Documentation",id:"database.formulaPropertyEntryMenuItem.title",description:"In this context, documentation refers to the documentation popup for formulas property values in databases."}),right:i()(ie.DoneMenuText,{}),onClickRight:t.close}:{menuType:oe.b.MenuType.Popup},p.a.createElement(oe.b,r,i()(te.a,{},void 0,i()(re.a,{title:i()(ee,{entry:this.props.entry}),style:{paddingTop:10,paddingBottom:16}})))}})}renderPropertyIcon(){const{entry:e}=this.props;if(e.category===M.a.property||e.category===M.a.constant){const{resultType:t}=e;return i()(G.a,{type:t,size:14,theme:this.theme})}if(e.category===M.a.function||e.category===M.a.operator){const{signatures:[{resultType:t}]}=e;return i()(G.a,{type:t,size:14,theme:this.theme})}}}l()(ae,"contextTypes",{...oe.c});var le=ae,de=r("vshI"),pe=r("y6Dp"),ue=r("RQ1t"),ce=r("8fuX"),me=r("D2XV"),he=r("QcDD"),fe=r("sSHh"),ge=r("0CAA");class ye extends f.a{constructor(...e){super(...e),l()(this,"storeTypes",{formulaInputStore:h,menuListStore:ue.a})}renderComponent(){const{device:e}=this.environment,{schema:t,property:r,disabled:n}=this.props,{error:o}=this.stores.formulaInputStore.state,{formula:s}=t[r],a=i()(d.Fragment,{},void 0,i()(X.DependencyConsumer,{dependency:X.deps.prismjs},void 0,e=>p.a.createElement(J,{ref:e=>{e&&(this.formulaInput=e)},Prism:e,store:this.stores.formulaInputStore,formula:s,schema:t,property:r,disabled:n,onChange:e=>this.handleInputChange(e),onSubmit:e=>this.handleInputSubmit(e)})),e.isMobile&&this.renderStatus());let l;return l=e.isMobile?{menuType:oe.b.MenuType.Modal,title:i()(U.FormattedMessage,{id:"database.mobileFormulaModal.title",defaultMessage:"Formula"}),left:i()(ie.CancelMenuText,{}),right:o?void 0:i()(U.FormattedMessage,{id:"database.mobileFormulaModal.saveButton.label",defaultMessage:"Save"}),onClickLeft:this.props.onClickCancel,onClickRight:()=>this.formulaInput.handleAccept(),header:a}:{menuType:oe.b.MenuType.Popup,width:580,height:n?"none":void 0,disableScroller:!0,header:a,footer:this.renderStatus()},p.a.createElement(oe.b,l,!n&&this.renderContent())}renderContent(){const{device:e}=this.environment,t=this.getLibrary(),r=this.getFocusedEntry(t);return e.isMobile?i()(u.a,{initialFocus:0,context:{blocks:[],environment:this.environment},filter:this.stores.formulaInputStore.state.query,sections:this.renderSections(t),menuListStore:this.stores.menuListStore}):i()("div",{style:{display:"flex",flexGrow:1,overflow:"hidden",boxShadow:"\n\t\t\t\t\t\t\tinset 0 1px 0 ".concat(this.theme.regularDividerColor,",\n\t\t\t\t\t\t\tinset 0 -1px 0 ").concat(this.theme.regularDividerColor,"\n\t\t\t\t\t\t"),height:295}},void 0,i()(ce.b,{type:ce.a.Y,style:{width:180,flexGrow:0,flexShrink:0}},void 0,i()(u.a,{initialFocus:0,context:{blocks:[],environment:this.environment},filter:this.stores.formulaInputStore.state.query,sections:this.renderSections(t),menuListStore:this.stores.menuListStore,disableMouseLeaveBlur:!0})),i()(ce.b,{type:ce.a.Y,style:{padding:12,boxShadow:"inset 1px 0 0 ".concat(this.theme.regularDividerColor),flexGrow:1}},void 0,i()(ee,{entry:r})))}renderStatus(){const{device:e}=this.environment,{disabled:t}=this.props,{command:r}=C.a(this.environment),{error:n}=this.stores.formulaInputStore.state;return n?i()("div",{style:e.isMobile?this.getMobileStatusWrapStyle():this.getDesktopStatusWrapStyle()},void 0,i()("span",{style:{...e.isMobile&&ye.mobileStatusStyle,...ye.errorStatusStyle}},void 0,n),!e.isMobile&&this.renderLearnMoreLink()):e.isMobile?i()("div",{style:this.getMobileStatusWrapStyle()},void 0,i()("span",{style:ye.mobileStatusStyle},void 0,i()(U.FormattedMessage,{defaultMessage:"No errors.",id:"database.formula.mobileNoErrors.message"}))):t?void 0:i()("div",{style:this.getDesktopStatusWrapStyle()},void 0,i()("span",{},void 0,i()(U.FormattedMessage,{id:"database.formula.keyboardShortcutHint",defaultMessage:"{commandEnter} to accept.",description:'Caption that describes keyboard shortcut to confirm changes to a formula and close the formula editor. Appears as "⌘+Enter to accept." on Mac, Ctrl+Enter on Windows.',values:{commandEnter:i()("span",{style:{fontWeight:x.a.fontWeight.medium}},void 0,r,"+Enter")}})),this.renderLearnMoreLink())}renderLearnMoreLink(){return i()("div",{style:{marginLeft:"auto"}},void 0,i()(fe.a,{title:i()("span",{style:{fontSize:x.a.fontSize.UISmall.desktop}},void 0,i()(U.FormattedMessage,{defaultMessage:"Learn more about formulas",id:"formulaPropertyMenu.learnMore.button.label"})),href:Object(ge.a)("guides.formulas"),analyticsFrom:"formula_property_menu"}))}renderSections(e){return e.map(e=>({key:e.key,title:this.props.intl.formatMessage(e.titleMessage),render:e=>p.a.createElement(te.a,o()({},e,{desktopTitleStyle:{paddingLeft:8,paddingRight:8}})),actions:e.entries.map((e,t)=>({key:this.getEntryKey(e,t),displayName:e.name,analyticsName:e.name,searchName:e.name,render:t=>p.a.createElement(le,o()({},t,{entry:e})),action:()=>{this.formulaInput.insertEntry(e)},closeParentMenu:!1}))}))}handleUpdate(e,t){const{onChange:r,schema:n,property:o,analyticsFrom:s}=this.props;if(e&&"error"===e.type);else{const{type:i,name:a,number_format:l}=n[o];r({schema:{...n,[o]:{type:i,name:a,formula:e,number_format:l}},close:t});const d=n[o];d&&pe.Q(this.environment,{property_type:d.type,action:"formula_edit",from:s})}}getLibrary(){const{schema:e,property:t,block:r,intl:n}=this.props,o={},s=Object.keys(e).filter(e=>e!==t).map(t=>{const s=e[t];if(!s)throw new Error("Property not found.");const{name:i}=s,a=de.b({property:t,schema:e,block:r,getRecordValue:this.getRecordValue,userTimeZone:me.m,intl:n,depth:0,resultCache:{},normalizedSchemaCache:o});return{name:i,category:M.a.property,fallbackDescription:n.formatMessage({id:"database.formula.property.description",defaultMessage:"Returns the {propertyName} property for each entry."},{propertyName:i}),resultType:S.b(s),examples:["prop(".concat(JSON.stringify(i),") == ").concat(JSON.stringify(a))]}});return[M.d(M.a.property,s),...M.b]}getFocusedEntry(e){const t=this.stores.menuListStore.state.focus.focusedKey;if(void 0!==t)for(const r of e)for(const[e,n]of r.entries.entries())if(this.getEntryKey(n,e)===t)return n}getEntryKey(e,t){return"".concat(e.name," ").concat(t)}getDesktopStatusWrapStyle(){return{display:"flex",flex:"none",alignItems:"center",fontSize:12,paddingLeft:8,paddingRight:8,height:30,color:this.theme.mediumTextColor}}getMobileStatusWrapStyle(){const{WindowSizeStore:e}=this.environment;return{display:"flex",flex:"none",alignItems:"center",fontSize:14,height:28,color:this.theme.mediumTextColor,background:this.theme.popoverBackground,boxShadow:"0 1px 0 ".concat(this.theme.regularDividerColor),paddingLeft:e.state.paddingLeftCSS,paddingRight:e.state.paddingRightCSS}}get getRecordValue(){return he.default.getCurrentBlockValueFn()}handleInputChange(e){this.handleUpdate(e,!1)}handleInputSubmit(e){this.handleUpdate(e,!0)}}l()(ye,"mobileStatusStyle",{paddingLeft:16,paddingRight:16}),l()(ye,"errorStatusStyle",{color:k.g.redWithAlpha(.8),...x.a.textOverflowStyle});t.default=Object(U.injectIntl)(ye)}}]);