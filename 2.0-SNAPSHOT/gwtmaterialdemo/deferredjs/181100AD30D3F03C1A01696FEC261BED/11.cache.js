$wnd.gwtmaterialdemo.runAsyncCallback11("function $clinit_MaterialScrollfire(){\n  $clinit_MaterialScrollfire = emptyMethod;\n  !startupState && (startupState = new StartupState);\n  injectJs(($clinit_MaterialScrollfireClientBundle_default_InlineClientBundleGenerator$scrollfireJsInitializer() , scrollfireJs), true, false);\n}\n\nfunction apply_1(element, callback){\n  $clinit_MaterialScrollfire();\n  var function_0, uid;\n  uid = ($clinit_DOM() , $createUniqueId($doc));\n  element.id = uid;\n  function_0 = makeLambdaFunction(MaterialScrollfire$lambda$0$Type.prototype.call_2, MaterialScrollfire$lambda$0$Type, [callback]);\n  $wnd.apply('#' + uid, 100, function_0);\n}\n\nfunction MaterialScrollfire$lambda$0$Type(callback_0){\n  this.callback_0 = callback_0;\n}\n\ndefineClass(2344, $wnd.Function, {}, MaterialScrollfire$lambda$0$Type);\n_.call_2 = function call_29(){\n  $clinit_MaterialScrollfire();\n  this.callback_0.run();\n}\n;\nvar scrollfireJs;\nfunction MaterialScrollfireClientBundle_default_InlineClientBundleGenerator$1(){\n}\n\ndefineClass(1722, 1, {}, MaterialScrollfireClientBundle_default_InlineClientBundleGenerator$1);\n_.getName = function getName_27(){\n  return 'scrollfireJs';\n}\n;\n_.getText = function getText_18(){\n  return 'function apply(selector, offset, callback) {var didScroll = false; var done = false; var callbacks = $.Callbacks(); window.addEventListener(\"scroll\", function() {didScroll = true; }); setInterval(function() {if(didScroll) {didScroll = false; var windowScroll = window.pageYOffset + window.innerHeight; var currentElement = document.querySelector(selector); if ( currentElement !== null) {var elementOffset = currentElement.getBoundingClientRect().top + window.pageYOffset; if (windowScroll > (elementOffset + offset)) {if (done !== true) {callbacks.add(callback); callbacks.fire(); done = true; } } } } }, 100); }';\n}\n;\nvar Lgwt_material_design_addins_client_scrollfire_MaterialScrollfireClientBundle_1default_1InlineClientBundleGenerator$1_2_classLit = createForClass('gwt.material.design.addins.client.scrollfire', 'MaterialScrollfireClientBundle_default_InlineClientBundleGenerator/1', 1722);\nfunction $clinit_MaterialScrollfireClientBundle_default_InlineClientBundleGenerator$scrollfireJsInitializer(){\n  $clinit_MaterialScrollfireClientBundle_default_InlineClientBundleGenerator$scrollfireJsInitializer = emptyMethod;\n  scrollfireJs = new MaterialScrollfireClientBundle_default_InlineClientBundleGenerator$1;\n}\n\nfunction ScrollFirePresenter(eventBus, view, proxy){\n  $clinit_ScrollFirePresenter();\n  Presenter.call(this, eventBus, view, proxy, ($clinit_ApplicationPresenter() , SLOT_MAIN));\n}\n\ndefineClass(803, 57, $intern_58, ScrollFirePresenter);\n_.onReveal = function onReveal_18(){\n  $clinit_SetPageTitleEvent();\n  $fireEvent_1(this, new SetPageTitleEvent('Scrollfire', \"Executes callback functions depending on how far into the page you've scrolled.\"));\n}\n;\nvar Lgwt_material_design_demo_client_application_addins_scrollfire_ScrollFirePresenter_2_classLit = createForClass('gwt.material.design.demo.client.application.addins.scrollfire', 'ScrollFirePresenter', 803);\nfunction ScrollFireView(){\n  var forImage, forListItems, forToast;\n  ViewImpl.call(this);\n  $initWidget_0(this, $build_f_HTMLPanel1_15(new ScrollFireView_BinderImpl$Widgets(this)));\n  forToast = new ScrollFireView$1;\n  forListItems = new ScrollFireView$2(this);\n  forImage = new ScrollFireView$3(this);\n  apply_1($getElement(this.panel), forToast);\n  apply_1($getElement(this.listContainer), forListItems);\n  apply_1($getElement(this.image), forImage);\n}\n\ndefineClass(1056, 60, $intern_59, ScrollFireView);\nvar Lgwt_material_design_demo_client_application_addins_scrollfire_ScrollFireView_2_classLit = createForClass('gwt.material.design.demo.client.application.addins.scrollfire', 'ScrollFireView', 1056);\nfunction ScrollFireView$1(){\n}\n\ndefineClass(1057, 1, $intern_57, ScrollFireView$1);\n_.run = function run_12(){\n  $toast(new MaterialToast_0(stampJavaTypeInfo(getClassLiteralForArray(Lcom_google_gwt_user_client_ui_Widget_2_classLit, 1), $intern_1, 21, 0, [])), 'Toasted', $intern_70, null);\n}\n;\nvar Lgwt_material_design_demo_client_application_addins_scrollfire_ScrollFireView$1_2_classLit = createForClass('gwt.material.design.demo.client.application.addins.scrollfire', 'ScrollFireView/1', 1057);\nfunction ScrollFireView$2(this$0){\n  this.this$01 = this$0;\n}\n\ndefineClass(1058, 1, $intern_57, ScrollFireView$2);\n_.run = function run_13(){\n  animate_1(($clinit_Transition() , SHOW_STAGGERED_LIST), this.this$01.listContainer, 0, 800, null, false);\n}\n;\nvar Lgwt_material_design_demo_client_application_addins_scrollfire_ScrollFireView$2_2_classLit = createForClass('gwt.material.design.demo.client.application.addins.scrollfire', 'ScrollFireView/2', 1058);\nfunction ScrollFireView$3(this$0){\n  this.this$01 = this$0;\n}\n\ndefineClass(1059, 1, $intern_57, ScrollFireView$3);\n_.run = function run_14(){\n  animate_1(($clinit_Transition() , FADE_IN_IMAGE), this.this$01.image, 0, 800, null, false);\n}\n;\nvar Lgwt_material_design_demo_client_application_addins_scrollfire_ScrollFireView$3_2_classLit = createForClass('gwt.material.design.demo.client.application.addins.scrollfire', 'ScrollFireView/3', 1059);\nfunction $build_f_HTMLPanel1_15(this$static){\n  var __attachRecord__, f_HTMLPanel1, f_MaterialTitle2, panel, f_PrettyPre3, listContainer, image, sb, f_ListItem4, f_MaterialTitle5, f_ListItem6, f_MaterialTitle7, f_ListItem8, f_MaterialTitle9, f_ListItem10, f_MaterialTitle11;\n  f_HTMLPanel1 = new HTMLPanel($html2(this$static.domId0, this$static.domId1, this$static.domId2, this$static.domId3, this$static.domId4).html_0);\n  __attachRecord__ = attachToDom(($clinit_DOM() , f_HTMLPanel1.element_0));\n  $get_0(this$static.domId0Element);\n  $get_0(this$static.domId1Element);\n  $get_0(this$static.domId2Element);\n  $get_0(this$static.domId3Element);\n  $get_0(this$static.domId4Element);\n  __attachRecord__.origParent?$insertBefore(__attachRecord__.origParent, __attachRecord__.element, __attachRecord__.origSibling):orphan(__attachRecord__.element);\n  $addAndReplaceElement_0(f_HTMLPanel1, (f_MaterialTitle2 = new MaterialTitle , $setText_12(f_MaterialTitle2.paragraph, '') , $getElement(f_MaterialTitle2.header).innerHTML = 'Usage' , undefined , f_MaterialTitle2), $get_0(this$static.domId0Element));\n  $addAndReplaceElement_0(f_HTMLPanel1, (panel = new MaterialPanel , this$static.owner.panel = panel , panel), $get_0(this$static.domId1Element));\n  $addAndReplaceElement_0(f_HTMLPanel1, (f_PrettyPre3 = new PrettyPre , $setHTML_0(f_PrettyPre3, (sb = new StringBuilder , sb.string += '\\u2003Runnable forToast = new Runnable() { <br> \\u2003@Override<br> \\u2003public void run() {<br> \\u2003\\u2003MaterialToast.fireToast(\"Toasted\");<br> \\u2003}<br> };<br><br> Runnable forListItems = new Runnable() {<br> \\u2003@Override<br> \\u2003public void run() {<br> \\u2003\\u2003MaterialAnimator.animate(Transition.SHOW_STAGGERED_LIST, listContainer, 0);<br> \\u2003}<br> };<br><br> Runnable forImage = new Runnable() {<br> \\u2003@Override<br> \\u2003public void run() {<br> \\u2003\\u2003MaterialAnimator.animate(Transition.FADE_IN_IMAGE, image, 0);<br> \\u2003}<br> };<br><br> MaterialScrollfire.apply(panel.getElement(), forToast);<br> MaterialScrollfire.apply(listContainer.getElement(), forListItems);<br> MaterialScrollfire.apply(image.getElement(), forImage);<br>' , new OnlyToBeUsedInGeneratedCodeStringBlessedAsSafeHtml(sb.string)).html_0) , setStyleName(f_PrettyPre3.element_0, 'lang-java', true) , setStyleName(f_PrettyPre3.element_0, 'z-depth-1', true) , f_PrettyPre3), $get_0(this$static.domId2Element));\n  $addAndReplaceElement_0(f_HTMLPanel1, (listContainer = new UnorderedList , $add_19(listContainer, (f_ListItem4 = new ListItem , $add_14(f_ListItem4, (f_MaterialTitle5 = new MaterialTitle , $setText_12(f_MaterialTitle5.paragraph, 'List Item') , $getElement(f_MaterialTitle5.header).innerHTML = 'List Item' , f_MaterialTitle5)) , f_ListItem4.element_0.style.opacity = 0 , f_ListItem4)) , $add_19(listContainer, (f_ListItem6 = new ListItem , $add_14(f_ListItem6, (f_MaterialTitle7 = new MaterialTitle , $setText_12(f_MaterialTitle7.paragraph, 'List Item') , $getElement(f_MaterialTitle7.header).innerHTML = 'List Item' , f_MaterialTitle7)) , f_ListItem6.element_0.style.opacity = 0 , f_ListItem6)) , $add_19(listContainer, (f_ListItem8 = new ListItem , $add_14(f_ListItem8, (f_MaterialTitle9 = new MaterialTitle , $setText_12(f_MaterialTitle9.paragraph, 'List Item') , $getElement(f_MaterialTitle9.header).innerHTML = 'List Item' , f_MaterialTitle9)) , f_ListItem8.element_0.style.opacity = 0 , f_ListItem8)) , $add_19(listContainer, (f_ListItem10 = new ListItem , $add_14(f_ListItem10, (f_MaterialTitle11 = new MaterialTitle , $setText_12(f_MaterialTitle11.paragraph, 'List Item') , $getElement(f_MaterialTitle11.header).innerHTML = 'List Item' , f_MaterialTitle11)) , f_ListItem10.element_0.style.opacity = 0 , f_ListItem10)) , this$static.owner.listContainer = listContainer , listContainer), $get_0(this$static.domId3Element));\n  $addAndReplaceElement_0(f_HTMLPanel1, (image = new MaterialImage , $setResource_1(image, ($clinit_MaterialResources_default_InlineClientBundleGenerator() , $clinit_MaterialResources_default_InlineClientBundleGenerator$imageInitializer() , $clinit_MaterialResources_default_InlineClientBundleGenerator() , image_0)) , image.element_0.setAttribute('data-caption', 'I love Material Design') , undefined , image.element_0.style.opacity = 0 , undefined , this$static.owner.image = image , image), $get_0(this$static.domId4Element));\n  return f_HTMLPanel1;\n}\n\nfunction ScrollFireView_BinderImpl$Widgets(owner){\n  this.owner = owner;\n  this.domId0 = $createUniqueId($doc);\n  this.domId1 = $createUniqueId($doc);\n  this.domId2 = $createUniqueId($doc);\n  this.domId3 = $createUniqueId($doc);\n  this.domId4 = $createUniqueId($doc);\n  this.domId0Element = new LazyDomElement(this.domId0);\n  this.domId1Element = new LazyDomElement(this.domId1);\n  this.domId2Element = new LazyDomElement(this.domId2);\n  this.domId3Element = new LazyDomElement(this.domId3);\n  this.domId4Element = new LazyDomElement(this.domId4);\n}\n\ndefineClass(1351, 1, {}, ScrollFireView_BinderImpl$Widgets);\nvar Lgwt_material_design_demo_client_application_addins_scrollfire_ScrollFireView_1BinderImpl$Widgets_2_classLit = createForClass('gwt.material.design.demo.client.application.addins.scrollfire', 'ScrollFireView_BinderImpl/Widgets', 1351);\nfunction $html2(arg0, arg1, arg2, arg3, arg4){\n  var sb;\n  sb = new StringBuilder;\n  sb.string += \"<span id='\";\n  $append_4(sb, htmlEscape(arg0));\n  sb.string += \"'><\\/span> <span id='\";\n  $append_4(sb, htmlEscape(arg1));\n  sb.string += \"'><\\/span> <span id='\";\n  $append_4(sb, htmlEscape(arg2));\n  sb.string += \"'><\\/span> <span id='\";\n  $append_4(sb, htmlEscape(arg3));\n  sb.string += \"'><\\/span> <span id='\";\n  $append_4(sb, htmlEscape(arg4));\n  sb.string += \"'><\\/span>\";\n  return new OnlyToBeUsedInGeneratedCodeStringBlessedAsSafeHtml(sb.string);\n}\n\nfunction $get_Key$type$gwt$material$design$demo$client$application$addins$scrollfire$ScrollFirePresenter$_annotation$$none$$(this$static){\n  var result, result0;\n  if (!this$static.singleton_Key$type$gwt$material$design$demo$client$application$addins$scrollfire$ScrollFirePresenter$_annotation$$none$$) {\n    result0 = new ScrollFirePresenter($get_Key$type$com$google$web$bindery$event$shared$EventBus$_annotation$$none$$($getFragment_com_google_web_bindery_event_shared(this$static.injector)), (result = $get_Key$type$gwt$material$design$demo$client$application$addins$scrollfire$ScrollFireView$_annotation$$none$$(this$static) , result), $get_Key$type$gwt$material$design$demo$client$application$addins$scrollfire$ScrollFirePresenter$MyProxy$_annotation$$none$$(this$static));\n    $automaticBind(($getFragment_com_gwtplatform_mvp_client(this$static.injector) , result0), $get_Key$type$com$gwtplatform$mvp$client$AutobindDisable$_annotation$$none$$($getFragment_com_gwtplatform_mvp_client(this$static.injector)));\n    this$static.singleton_Key$type$gwt$material$design$demo$client$application$addins$scrollfire$ScrollFirePresenter$_annotation$$none$$ = result0;\n  }\n  return this$static.singleton_Key$type$gwt$material$design$demo$client$application$addins$scrollfire$ScrollFirePresenter$_annotation$$none$$;\n}\n\nfunction $get_Key$type$gwt$material$design$demo$client$application$addins$scrollfire$ScrollFireView$_annotation$$none$$(this$static){\n  var result;\n  if (!this$static.singleton_Key$type$gwt$material$design$demo$client$application$addins$scrollfire$ScrollFireView$_annotation$$none$$) {\n    result = new ScrollFireView;\n    this$static.singleton_Key$type$gwt$material$design$demo$client$application$addins$scrollfire$ScrollFireView$_annotation$$none$$ = result;\n  }\n  return this$static.singleton_Key$type$gwt$material$design$demo$client$application$addins$scrollfire$ScrollFireView$_annotation$$none$$;\n}\n\ndefineClass(703, 1, $intern_107);\n_.onSuccess_0 = function onSuccess_12(){\n  $onSuccess(this.val$callback2, $get_Key$type$gwt$material$design$demo$client$application$addins$scrollfire$ScrollFirePresenter$_annotation$$none$$(this.this$11.this$01));\n}\n;\n$entry(onLoad_0)(11);\n\n//# sourceURL=gwtmaterialdemo-11.js\n")
