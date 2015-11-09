$wnd.gwtmaterialdemo.runAsyncCallback11("function $clinit_MaterialLoader(){\n  $clinit_MaterialLoader = emptyMethod;\n  div_0 = new Div;\n  preLoader = new MaterialPreLoader;\n  progress_0 = new MaterialProgress;\n}\n\nfunction showLoading(isShow){\n  $clinit_MaterialLoader();\n  if (isShow) {\n    $setStyleName(div_0, 'valign-wrapper loader-wrapper');\n    $setPropertyImpl($getElement(preLoader).style, 'margin', 'auto');\n    $add_13(preLoader, new MaterialSpinner_0('blue'));\n    $add_13(preLoader, new MaterialSpinner_0('red'));\n    $add_13(preLoader, new MaterialSpinner_0('yellow'));\n    $add_13(preLoader, new MaterialSpinner_0('green'));\n    $add_13(div_0, preLoader);\n    $add_2(($clinit_RootPanel() , get_1(null)), div_0);\n  }\n   else {\n    $removeFromParent_0(div_0);\n    $removeFromParent_0(preLoader);\n  }\n}\n\nfunction showProgress(isShow){\n  $clinit_MaterialLoader();\n  if (isShow) {\n    $setStyleName(div_0, 'valign-wrapper  progress-wrapper');\n    $setPropertyImpl($getElement(progress_0).style, 'margin', 'auto');\n    $add_13(div_0, progress_0);\n    $add_2(($clinit_RootPanel() , get_1(null)), div_0);\n  }\n   else {\n    $removeFromParent_0(div_0);\n    $removeFromParent_0(progress_0);\n  }\n}\n\nvar div_0, preLoader, progress_0;\nfunction $showLoader(this$static){\n  $add_13(this$static, this$static.progress);\n}\n\nfunction MaterialPreLoader(){\n  ComplexWidget_0.call(this, $doc.createElement('div'));\n  $setClassName(($clinit_DOM() , this.element), 'preloader-wrapper active');\n}\n\ndefineClass(229, 41, $intern_47, MaterialPreLoader);\nvar Lgwt_material_design_client_ui_MaterialPreLoader_2_classLit = createForClass('gwt.material.design.client.ui', 'MaterialPreLoader', 229);\nfunction MaterialSpinner(){\n  ComplexWidget_0.call(this, $doc.createElement('div'));\n  this.circleClipperLeft = new Div;\n  this.circleClipperRight = new Div;\n  this.circle1 = new Div;\n  this.circle2 = new Div;\n  this.circle3 = new Div;\n  this.gapPatch = new Div;\n  $setClassName(($clinit_DOM() , this.element), 'spinner-layer');\n  $add_13(this, this.circleClipperLeft);\n  $add_13(this.circleClipperLeft, this.circle1);\n  $add_13(this, this.gapPatch);\n  $add_13(this.gapPatch, this.circle2);\n  $add_13(this, this.circleClipperRight);\n  $add_13(this.circleClipperRight, this.circle3);\n  $setStyleName(this.circleClipperLeft, 'circle-clipper left');\n  $setStyleName(this.gapPatch, 'gap-patch');\n  $setStyleName(this.circleClipperRight, 'circle-clipper right');\n  $setStyleName(this.circle1, 'circle');\n  $setStyleName(this.circle2, 'circle');\n  $setStyleName(this.circle3, 'circle');\n}\n\nfunction MaterialSpinner_0(color_0){\n  MaterialSpinner.call(this);\n  setStyleName(($clinit_DOM() , this.element), 'spinner-' + color_0, true);\n}\n\ndefineClass(150, 41, $intern_47, MaterialSpinner, MaterialSpinner_0);\nvar Lgwt_material_design_client_ui_MaterialSpinner_2_classLit = createForClass('gwt.material.design.client.ui', 'MaterialSpinner', 150);\nfunction LoaderPresenter(eventBus, view, proxy){\n  $clinit_PresenterWidget();\n  Presenter.call(this, eventBus, view, proxy, ($clinit_ApplicationPresenter() , SLOT_MainContent));\n}\n\ndefineClass(517, 51, $intern_40, LoaderPresenter);\n_.onReveal = function onReveal_16(){\n  $clinit_SetPageTitleEvent();\n  $fireEvent_1(this, new SetPageTitleEvent('Loaders', 'If you have content that will take a long time to load, you should give the user feedback. For this reason we provide a number activity + progress indicators.'));\n}\n;\nvar Lgwt_material_design_demo_client_application_components_loader_LoaderPresenter_2_classLit = createForClass('gwt.material.design.demo.client.application.components.loader', 'LoaderPresenter', 517);\nfunction $onShowNavBarProgress(this$static){\n  var t;\n  $showLoader(this$static.navBar);\n  t = new LoaderView$3(this$static);\n  $schedule(t, 3000);\n}\n\nfunction LoaderView(){\n  ViewImpl.call(this);\n  $initWidget_0(this, $build_f_HTMLPanel1_11(new LoaderView_BinderImpl$Widgets(this)));\n}\n\ndefineClass(651, 55, $intern_41, LoaderView);\nvar Lgwt_material_design_demo_client_application_components_loader_LoaderView_2_classLit = createForClass('gwt.material.design.demo.client.application.components.loader', 'LoaderView', 651);\nfunction LoaderView$1(){\n  Timer.call(this);\n}\n\ndefineClass(652, 159, {}, LoaderView$1);\n_.run = function run_3(){\n  showLoading(false);\n}\n;\nvar Lgwt_material_design_demo_client_application_components_loader_LoaderView$1_2_classLit = createForClass('gwt.material.design.demo.client.application.components.loader', 'LoaderView/1', 652);\nfunction LoaderView$2(){\n  Timer.call(this);\n}\n\ndefineClass(653, 159, {}, LoaderView$2);\n_.run = function run_4(){\n  showProgress(false);\n}\n;\nvar Lgwt_material_design_demo_client_application_components_loader_LoaderView$2_2_classLit = createForClass('gwt.material.design.demo.client.application.components.loader', 'LoaderView/2', 653);\nfunction LoaderView$3(this$0){\n  this.this$01 = this$0;\n  Timer.call(this);\n}\n\ndefineClass(654, 159, {}, LoaderView$3);\n_.run = function run_5(){\n  $removeFromParent_0(this.this$01.navBar.progress);\n}\n;\nvar Lgwt_material_design_demo_client_application_components_loader_LoaderView$3_2_classLit = createForClass('gwt.material.design.demo.client.application.components.loader', 'LoaderView/3', 654);\nfunction LoaderView_BinderImpl(){\n}\n\ndefineClass(837, 1, {}, LoaderView_BinderImpl);\nvar Lgwt_material_design_demo_client_application_components_loader_LoaderView_1BinderImpl_2_classLit = createForClass('gwt.material.design.demo.client.application.components.loader', 'LoaderView_BinderImpl', 837);\nfunction $build_f_HTMLPanel1_11(this$static){\n  var __attachRecord__, f_HTMLPanel1, f_MaterialTitle2, btnShowLoader, f_MaterialTitle3, btnShowProgress, f_MaterialTitle4, btnShowNavBarProgress, navBar, f_MaterialTitle13, f_MaterialRow14, f_MaterialNavBrand5, f_MaterialNavSection6, f_MaterialLink7, f_MaterialLink8, f_MaterialTooltip9, f_MaterialTooltip11, f_MaterialColumn15, f_MaterialPreLoader16, f_MaterialColumn18, f_MaterialPreLoader19, f_MaterialColumn21, f_MaterialPreLoader22, f_MaterialLink10, f_MaterialLink12, f_MaterialSpinner17, f_MaterialSpinner20, f_MaterialSpinner23;\n  f_HTMLPanel1 = new HTMLPanel($html1_12(this$static.domId0, this$static.domId1, this$static.domId2, this$static.domId3, this$static.domId4, this$static.domId5, this$static.domId6, this$static.domId7, this$static.domId8).html);\n  __attachRecord__ = attachToDom(($clinit_DOM() , f_HTMLPanel1.element));\n  $get_0(this$static.domId0Element);\n  $get_0(this$static.domId1Element);\n  $get_0(this$static.domId2Element);\n  $get_0(this$static.domId3Element);\n  $get_0(this$static.domId4Element);\n  $get_0(this$static.domId5Element);\n  $get_0(this$static.domId6Element);\n  $get_0(this$static.domId7Element);\n  $get_0(this$static.domId8Element);\n  __attachRecord__.origParent?$insertBefore(__attachRecord__.origParent, __attachRecord__.element, __attachRecord__.origSibling):orphan(__attachRecord__.element);\n  $addAndReplaceElement_1(f_HTMLPanel1, (f_MaterialTitle2 = new MaterialTitle , $setInnerHTML($getElement(f_MaterialTitle2.header), 'Circular') , f_MaterialTitle2), $get_0(this$static.domId0Element));\n  $addAndReplaceElement_1(f_HTMLPanel1, (btnShowLoader = new MaterialButton , setStyleName(btnShowLoader.element, 'KVUXRGB-i-a', true) , btnShowLoader.span_0.setText('Show Loader') , $add_13(btnShowLoader, btnShowLoader.span_0) , $setBackgroundColor(btnShowLoader.colorsMixin, 'blue') , $addDomHandler(btnShowLoader, this$static.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames1, ($clinit_ClickEvent() , $clinit_ClickEvent() , TYPE_1)) , btnShowLoader), $get_0(this$static.domId1Element));\n  $addAndReplaceElement_1(f_HTMLPanel1, (f_MaterialTitle3 = new MaterialTitle , $setInnerHTML($getElement(f_MaterialTitle3.header), 'Linear') , f_MaterialTitle3), $get_0(this$static.domId2Element));\n  $addAndReplaceElement_1(f_HTMLPanel1, (btnShowProgress = new MaterialButton , setStyleName(btnShowProgress.element, 'KVUXRGB-i-a', true) , btnShowProgress.span_0.setText('Show Progress') , $add_13(btnShowProgress, btnShowProgress.span_0) , $setBackgroundColor(btnShowProgress.colorsMixin, 'blue') , $addDomHandler(btnShowProgress, this$static.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames2, (null , TYPE_1)) , btnShowProgress), $get_0(this$static.domId3Element));\n  $addAndReplaceElement_1(f_HTMLPanel1, (f_MaterialTitle4 = new MaterialTitle , $setInnerHTML($getElement(f_MaterialTitle4.header), 'NavBar Integration') , $setText_4(f_MaterialTitle4.paragraph, 'Using the progress we can attach it below the nav for better UI / UX when displaying important content on your app.') , f_MaterialTitle4), $get_0(this$static.domId4Element));\n  $addAndReplaceElement_1(f_HTMLPanel1, (btnShowNavBarProgress = new MaterialButton , setStyleName(btnShowNavBarProgress.element, 'KVUXRGB-i-a', true) , btnShowNavBarProgress.span_0.setText('Show Progress') , $add_13(btnShowNavBarProgress, btnShowNavBarProgress.span_0) , $setBackgroundColor(btnShowNavBarProgress.colorsMixin, 'blue') , $addDomHandler(btnShowNavBarProgress, this$static.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames3, (null , TYPE_1)) , btnShowNavBarProgress), $get_0(this$static.domId5Element));\n  $addAndReplaceElement_1(f_HTMLPanel1, (navBar = new MaterialNavBar , $add_23(navBar, (f_MaterialNavBrand5 = new MaterialNavBrand , $add_13(f_MaterialNavBrand5, f_MaterialNavBrand5.div) , $setInnerText($getElement(f_MaterialNavBrand5.div), 'Title') , $setFloat(f_MaterialNavBrand5, ($clinit_Style$Float() , LEFT)) , $setAttribute(f_MaterialNavBrand5.element, 'href', '#Test') , f_MaterialNavBrand5)) , $add_23(navBar, (f_MaterialNavSection6 = new MaterialNavSection , $add_19(f_MaterialNavSection6, new ListItem_0((f_MaterialLink7 = new MaterialLink , $setIconPosition(f_MaterialLink7, ($clinit_IconPosition() , LEFT_4)) , f_MaterialLink7.span_0.setText('Account') , $add_13(f_MaterialLink7, f_MaterialLink7.span_0) , $setTextColor(f_MaterialLink7.colorsMixin, 'white') , $setWaves(f_MaterialLink7, ($clinit_WavesType() , LIGHT)) , $setIconType(f_MaterialLink7, ($clinit_IconType() , ACCOUNT_CIRCLE)) , f_MaterialLink7))) , $add_19(f_MaterialNavSection6, new ListItem_0((f_MaterialLink8 = new MaterialLink , $setIconPosition(f_MaterialLink8, LEFT_4) , f_MaterialLink8.span_0.setText('Refresh') , $add_13(f_MaterialLink8, f_MaterialLink8.span_0) , $setTextColor(f_MaterialLink8.colorsMixin, 'white') , $setWaves(f_MaterialLink8, LIGHT) , $setIconType(f_MaterialLink8, AUTORENEW) , f_MaterialLink8))) , $add_19(f_MaterialNavSection6, new ListItem_0((f_MaterialTooltip9 = new MaterialTooltip , $add_26(f_MaterialTooltip9, (f_MaterialLink10 = new MaterialLink , $setTextColor(f_MaterialLink10.colorsMixin, 'white') , $setWaves(f_MaterialLink10, LIGHT) , $setIconType(f_MaterialLink10, SEARCH_0) , f_MaterialLink10)) , f_MaterialTooltip9.text_0 = 'Menu' , $setAttribute($getElement(f_MaterialTooltip9.widget), 'data-tooltip', 'Menu') , f_MaterialTooltip9).widget)) , $add_19(f_MaterialNavSection6, new ListItem_0((f_MaterialTooltip11 = new MaterialTooltip , $add_26(f_MaterialTooltip11, (f_MaterialLink12 = new MaterialLink , $setTextColor(f_MaterialLink12.colorsMixin, 'white') , $setWaves(f_MaterialLink12, LIGHT) , $setIconType(f_MaterialLink12, MORE_VERT) , f_MaterialLink12)) , f_MaterialTooltip11.text_0 = 'Starter' , $setAttribute($getElement(f_MaterialTooltip11.widget), 'data-tooltip', 'Starter') , f_MaterialTooltip11).widget)) , $setFloat(f_MaterialNavSection6, RIGHT) , f_MaterialNavSection6)) , setStyleName(navBar.element, 'KVUXRGB-i-b', true) , $setBackgroundColor(navBar.colorsMixin, 'blue') , this$static.owner.navBar = navBar , navBar), $get_0(this$static.domId6Element));\n  $addAndReplaceElement_1(f_HTMLPanel1, (f_MaterialTitle13 = new MaterialTitle , $setInnerHTML($getElement(f_MaterialTitle13.header), 'Stand alone Loaders') , $setText_4(f_MaterialTitle13.paragraph, 'Standalone loaders can be added to any place of your app using UiBinder(inside a dialog, a page or everywhere depends on your UI UX).') , f_MaterialTitle13), $get_0(this$static.domId7Element));\n  $addAndReplaceElement_1(f_HTMLPanel1, (f_MaterialRow14 = new MaterialRow , $add_13(f_MaterialRow14, (f_MaterialColumn15 = new MaterialColumn , $add_13(f_MaterialColumn15, (f_MaterialPreLoader16 = new MaterialPreLoader , $add_13(f_MaterialPreLoader16, (f_MaterialSpinner17 = new MaterialSpinner , setStyleName(f_MaterialSpinner17.element, 'spinner-blue-only', true) , f_MaterialSpinner17)) , setStyleName(f_MaterialPreLoader16.element, 'big', true) , f_MaterialPreLoader16)) , $setGrid(f_MaterialColumn15.gridMixin, 'l4') , f_MaterialColumn15)) , $add_13(f_MaterialRow14, (f_MaterialColumn18 = new MaterialColumn , $add_13(f_MaterialColumn18, (f_MaterialPreLoader19 = new MaterialPreLoader , $add_13(f_MaterialPreLoader19, (f_MaterialSpinner20 = new MaterialSpinner , setStyleName(f_MaterialSpinner20.element, 'spinner-red-only', true) , f_MaterialSpinner20)) , f_MaterialPreLoader19)) , $setGrid(f_MaterialColumn18.gridMixin, 'l4') , f_MaterialColumn18)) , $add_13(f_MaterialRow14, (f_MaterialColumn21 = new MaterialColumn , $add_13(f_MaterialColumn21, (f_MaterialPreLoader22 = new MaterialPreLoader , $add_13(f_MaterialPreLoader22, (f_MaterialSpinner23 = new MaterialSpinner , setStyleName(f_MaterialSpinner23.element, 'spinner-yellow-only', true) , f_MaterialSpinner23)) , setStyleName(f_MaterialPreLoader22.element, 'small', true) , f_MaterialPreLoader22)) , $setGrid(f_MaterialColumn21.gridMixin, 'l4') , f_MaterialColumn21)) , f_MaterialRow14), $get_0(this$static.domId8Element));\n  return f_HTMLPanel1;\n}\n\nfunction LoaderView_BinderImpl$Widgets(owner){\n  this.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames1 = new LoaderView_BinderImpl$Widgets$1;\n  this.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames2 = new LoaderView_BinderImpl$Widgets$2;\n  this.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames3 = new LoaderView_BinderImpl$Widgets$3(this);\n  this.owner = owner;\n  this.style_0 = (new LoaderView_BinderImpl_GenBundle_default_InlineClientBundleGenerator , $clinit_LoaderView_BinderImpl_GenBundle_default_InlineClientBundleGenerator$styleInitializer() , style_9);\n  $ensureInjected_14(this.style_0);\n  this.domId0 = $createUniqueId($doc);\n  this.domId1 = $createUniqueId($doc);\n  this.domId2 = $createUniqueId($doc);\n  this.domId3 = $createUniqueId($doc);\n  this.domId4 = $createUniqueId($doc);\n  this.domId5 = $createUniqueId($doc);\n  this.domId6 = $createUniqueId($doc);\n  this.domId7 = $createUniqueId($doc);\n  this.domId8 = $createUniqueId($doc);\n  this.domId0Element = new LazyDomElement(this.domId0);\n  this.domId1Element = new LazyDomElement(this.domId1);\n  this.domId2Element = new LazyDomElement(this.domId2);\n  this.domId3Element = new LazyDomElement(this.domId3);\n  this.domId4Element = new LazyDomElement(this.domId4);\n  this.domId5Element = new LazyDomElement(this.domId5);\n  this.domId6Element = new LazyDomElement(this.domId6);\n  this.domId7Element = new LazyDomElement(this.domId7);\n  this.domId8Element = new LazyDomElement(this.domId8);\n}\n\ndefineClass(838, 1, {}, LoaderView_BinderImpl$Widgets);\nvar Lgwt_material_design_demo_client_application_components_loader_LoaderView_1BinderImpl$Widgets_2_classLit = createForClass('gwt.material.design.demo.client.application.components.loader', 'LoaderView_BinderImpl/Widgets', 838);\nfunction LoaderView_BinderImpl$Widgets$1(){\n}\n\ndefineClass(839, 1, $intern_56, LoaderView_BinderImpl$Widgets$1);\n_.onClick = function onClick_54(event_0){\n  var t;\n  showLoading(true);\n  t = new LoaderView$1;\n  $schedule(t, 3000);\n}\n;\nvar Lgwt_material_design_demo_client_application_components_loader_LoaderView_1BinderImpl$Widgets$1_2_classLit = createForClass('gwt.material.design.demo.client.application.components.loader', 'LoaderView_BinderImpl/Widgets/1', 839);\nfunction LoaderView_BinderImpl$Widgets$2(){\n}\n\ndefineClass(840, 1, $intern_56, LoaderView_BinderImpl$Widgets$2);\n_.onClick = function onClick_55(event_0){\n  var t;\n  showProgress(true);\n  t = new LoaderView$2;\n  $schedule(t, 3000);\n}\n;\nvar Lgwt_material_design_demo_client_application_components_loader_LoaderView_1BinderImpl$Widgets$2_2_classLit = createForClass('gwt.material.design.demo.client.application.components.loader', 'LoaderView_BinderImpl/Widgets/2', 840);\nfunction LoaderView_BinderImpl$Widgets$3(this$1){\n  this.this$11 = this$1;\n}\n\ndefineClass(841, 1, $intern_56, LoaderView_BinderImpl$Widgets$3);\n_.onClick = function onClick_56(event_0){\n  $onShowNavBarProgress(this.this$11.owner);\n}\n;\nvar Lgwt_material_design_demo_client_application_components_loader_LoaderView_1BinderImpl$Widgets$3_2_classLit = createForClass('gwt.material.design.demo.client.application.components.loader', 'LoaderView_BinderImpl/Widgets/3', 841);\nfunction LoaderView_BinderImpl_GenBundle_default_InlineClientBundleGenerator(){\n}\n\ndefineClass(1105, 1, {}, LoaderView_BinderImpl_GenBundle_default_InlineClientBundleGenerator);\nvar style_9;\nvar Lgwt_material_design_demo_client_application_components_loader_LoaderView_1BinderImpl_1GenBundle_1default_1InlineClientBundleGenerator_2_classLit = createForClass('gwt.material.design.demo.client.application.components.loader', 'LoaderView_BinderImpl_GenBundle_default_InlineClientBundleGenerator', 1105);\nfunction $ensureInjected_14(this$static){\n  if (!this$static.injected) {\n    this$static.injected = true;\n    $clinit_StyleInjector();\n    inject_0(($clinit_LocaleInfo() , '.KVUXRGB-i-a{width:200px;margin-bottom:10px}.KVUXRGB-i-b{padding-left:0!important}'));\n    return true;\n  }\n  return false;\n}\n\nfunction LoaderView_BinderImpl_GenBundle_default_InlineClientBundleGenerator$1(){\n}\n\ndefineClass(1106, 1, {}, LoaderView_BinderImpl_GenBundle_default_InlineClientBundleGenerator$1);\n_.getName = function getName_20(){\n  return 'style';\n}\n;\n_.injected = false;\nvar Lgwt_material_design_demo_client_application_components_loader_LoaderView_1BinderImpl_1GenBundle_1default_1InlineClientBundleGenerator$1_2_classLit = createForClass('gwt.material.design.demo.client.application.components.loader', 'LoaderView_BinderImpl_GenBundle_default_InlineClientBundleGenerator/1', 1106);\nfunction $clinit_LoaderView_BinderImpl_GenBundle_default_InlineClientBundleGenerator$styleInitializer(){\n  $clinit_LoaderView_BinderImpl_GenBundle_default_InlineClientBundleGenerator$styleInitializer = emptyMethod;\n  style_9 = new LoaderView_BinderImpl_GenBundle_default_InlineClientBundleGenerator$1;\n}\n\nfunction $html1_12(arg0, arg1, arg2, arg3, arg4, arg5, arg6, arg7, arg8){\n  var sb;\n  sb = new StringBuilder;\n  sb.string += \"<span id='\";\n  $append_3(sb, htmlEscape(arg0));\n  sb.string += \"'><\\/span> <span id='\";\n  $append_3(sb, htmlEscape(arg1));\n  sb.string += \"'><\\/span> <pre>\\n      MaterialLoader.showLoading(<span class='tag'>true<\\/span>);\\n    <\\/pre> <span id='\";\n  $append_3(sb, htmlEscape(arg2));\n  sb.string += \"'><\\/span> <span id='\";\n  $append_3(sb, htmlEscape(arg3));\n  sb.string += \"'><\\/span> <pre>\\n      MaterialLoader.showProgress(<span class='tag'>true<\\/span>);\\n    <\\/pre> <span id='\";\n  $append_3(sb, htmlEscape(arg4));\n  sb.string += \"'><\\/span> <span id='\";\n  $append_3(sb, htmlEscape(arg5));\n  sb.string += \"'><\\/span> <span id='\";\n  $append_3(sb, htmlEscape(arg6));\n  sb.string += '\\'><\\/span> <pre>\\n      @UiField MaterialNavBar navBar;\\n\\n      @UiHandler(\"btnShowNavBarProgress\")\\n      void onShowNavBarProgress(ClickEvent e) {\\n      navBar.showLoader();\\n      Timer t = new Timer() {\\n\\n      @Override\\n      public void run() {\\n      navBar.hideLoader();\\n      }\\n      };\\n      t.schedule(3000);\\n      }\\n    <\\/pre> <span id=\\'';\n  $append_3(sb, htmlEscape(arg7));\n  sb.string += \"'><\\/span> <span id='\";\n  $append_3(sb, htmlEscape(arg8));\n  sb.string += '\\'><\\/span> <pre>\\n      &lt;m:MaterialPreLoader size=\"big\"&gt;\\n       &lt;m:MaterialSpinner color=\"blue-only\" /&gt;\\n      &lt;/m:MaterialPreLoader&gt;\\n\\n      &lt;m:MaterialPreLoader&gt;\\n        &lt;m:MaterialSpinner color=\"red-only\" /&gt;\\n      &lt;/m:MaterialPreLoader&gt;\\n\\n      &lt;m:MaterialPreLoader size=\"small\"&gt;\\n        &lt;m:MaterialSpinner color=\"yellow-only\" /&gt;\\n      &lt;/m:MaterialPreLoader&gt;\\n    <\\/pre>';\n  return new OnlyToBeUsedInGeneratedCodeStringBlessedAsSafeHtml(sb.string);\n}\n\nfunction $get_Key$type$gwt$material$design$demo$client$application$components$loader$LoaderPresenter$_annotation$$none$$(this$static){\n  var result;\n  if (!this$static.singleton_Key$type$gwt$material$design$demo$client$application$components$loader$LoaderPresenter$_annotation$$none$$) {\n    result = new LoaderPresenter($get_Key$type$com$google$web$bindery$event$shared$EventBus$_annotation$$none$$($getFragment_com_google_web_bindery_event_shared(this$static.injector)), $get_Key$type$gwt$material$design$demo$client$application$components$loader$LoaderView$_annotation$$none$$(this$static), $get_Key$type$gwt$material$design$demo$client$application$components$loader$LoaderPresenter$MyProxy$_annotation$$none$$(this$static));\n    $automaticBind(($getFragment_com_gwtplatform_mvp_client(this$static.injector) , result), $get_Key$type$com$gwtplatform$mvp$client$AutobindDisable$_annotation$$none$$($getFragment_com_gwtplatform_mvp_client(this$static.injector)));\n    this$static.singleton_Key$type$gwt$material$design$demo$client$application$components$loader$LoaderPresenter$_annotation$$none$$ = result;\n  }\n  return this$static.singleton_Key$type$gwt$material$design$demo$client$application$components$loader$LoaderPresenter$_annotation$$none$$;\n}\n\nfunction $get_Key$type$gwt$material$design$demo$client$application$components$loader$LoaderView$_annotation$$none$$(this$static){\n  var result;\n  if (!this$static.singleton_Key$type$gwt$material$design$demo$client$application$components$loader$LoaderView$_annotation$$none$$) {\n    result = new LoaderView(new LoaderView_BinderImpl);\n    this$static.singleton_Key$type$gwt$material$design$demo$client$application$components$loader$LoaderView$_annotation$$none$$ = result;\n  }\n  return this$static.singleton_Key$type$gwt$material$design$demo$client$application$components$loader$LoaderView$_annotation$$none$$;\n}\n\ndefineClass(463, 1, $intern_54);\n_.onSuccess_0 = function onSuccess_10(){\n  $onSuccess_0(this.val$callback2, $get_Key$type$gwt$material$design$demo$client$application$components$loader$LoaderPresenter$_annotation$$none$$(this.this$11.this$01));\n}\n;\n$entry(onLoad_0)(11);\n\n//# sourceURL=gwtmaterialdemo-11.js\n")
