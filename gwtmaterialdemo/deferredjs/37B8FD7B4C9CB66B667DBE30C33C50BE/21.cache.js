$wnd.gwtmaterialdemo.runAsyncCallback21("function $clinit_FABType(){\n  $clinit_FABType = emptyMethod;\n  HOVER = new FABType('HOVER', 0, '');\n  CLICK_ONLY = new FABType('CLICK_ONLY', 1, 'click-to-toggle');\n}\n\nfunction FABType(enum$name, enum$ordinal, cssClass){\n  Enum.call(this, enum$name, enum$ordinal);\n  this.cssClass = cssClass;\n}\n\nfunction values_40(){\n  $clinit_FABType();\n  return initValues(getClassLiteralForArray(Lgwt_material_design_client_constants_FABType_2_classLit, 1), $intern_7, 283, 0, [HOVER, CLICK_ONLY]);\n}\n\ndefineClass(283, 22, {40:1, 122:1, 283:1, 103:1, 5:1, 30:1, 22:1}, FABType);\n_.getCssName = function getCssName_79(){\n  return this.cssClass;\n}\n;\nvar CLICK_ONLY, HOVER;\nvar Lgwt_material_design_client_constants_FABType_2_classLit = createForEnum('gwt.material.design.client.constants', 'FABType', 283, values_40);\nfunction $addClickHandler_4(this$static, handler){\n  return $addDomHandler(this$static, new MaterialFAB$2(this$static, handler), ($clinit_ClickEvent() , $clinit_ClickEvent() , TYPE_1));\n}\n\nfunction $closeFAB(this$static){\n  $closeFAB_0(($clinit_DOM() , this$static.element));\n}\n\nfunction $closeFAB_0(e){\n  $wnd.jQuery(e).closeFAB();\n}\n\nfunction $openFAB(this$static){\n  $openFAB_0(($clinit_DOM() , this$static.element));\n}\n\nfunction $openFAB_0(e){\n  $wnd.jQuery(e).openFAB();\n}\n\nfunction $setAxis_3(this$static, axis_0){\n  $setCssName(this$static.axisMixin, axis_0);\n}\n\nfunction $setType_7(this$static, type_0){\n  $setType_2(this$static.typeMixin, type_0);\n}\n\nfunction MaterialFAB(){\n  MaterialWidget_1.call(this, $doc.createElement('div'), initValues(getClassLiteralForArray(Ljava_lang_String_2_classLit, 1), $intern_3, 2, 4, ['fixed-action-btn']));\n  this.typeMixin = new CssTypeMixin(this);\n  this.axisMixin = new CssNameMixin(this);\n  this.toggle = true;\n}\n\ndefineClass(306, 23, $intern_64, MaterialFAB);\n_.onLoad = function onLoad_30(){\n  $onLoad_0(this);\n  dynamicCast(this.typeMixin.type_0, 283) == ($clinit_FABType() , CLICK_ONLY) && $addClickHandler_4(this, new MaterialFAB$1(this));\n}\n;\n_.toggle = false;\nvar Lgwt_material_design_client_ui_MaterialFAB_2_classLit = createForClass('gwt.material.design.client.ui', 'MaterialFAB', 306);\nfunction $onClick_0(this$static){\n  if (this$static.this$01.toggle) {\n    $openFAB(this$static.this$01);\n    this$static.this$01.toggle = false;\n  }\n   else {\n    $closeFAB(this$static.this$01);\n    this$static.this$01.toggle = true;\n  }\n}\n\nfunction MaterialFAB$1(this$0){\n  this.this$01 = this$0;\n}\n\ndefineClass(1626, 1, $intern_66, MaterialFAB$1);\n_.onClick = function onClick_23(event_0){\n  $onClick_0(this);\n}\n;\nvar Lgwt_material_design_client_ui_MaterialFAB$1_2_classLit = createForClass('gwt.material.design.client.ui', 'MaterialFAB/1', 1626);\nfunction MaterialFAB$2(this$0, val$handler){\n  this.this$01 = this$0;\n  this.val$handler2 = val$handler;\n}\n\ndefineClass(1627, 1, $intern_66, MaterialFAB$2);\n_.onClick = function onClick_24(event_0){\n  $isEnabled_0(this.this$01) && $onClick_0(this.val$handler2);\n}\n;\nvar Lgwt_material_design_client_ui_MaterialFAB$2_2_classLit = createForClass('gwt.material.design.client.ui', 'MaterialFAB/2', 1627);\nfunction MaterialFABList(){\n  MaterialWidget_0.call(this, $doc.createElement('ul'));\n}\n\ndefineClass(312, 23, $intern_64, MaterialFABList);\n_.add_0 = function add_27(child){\n  $add_12(this, new ListItem_0(child));\n}\n;\nvar Lgwt_material_design_client_ui_MaterialFABList_2_classLit = createForClass('gwt.material.design.client.ui', 'MaterialFABList', 312);\nfunction FABPresenter(eventBus, view, proxy){\n  $clinit_PresenterWidget();\n  Presenter.call(this, eventBus, view, proxy, ($clinit_ApplicationPresenter() , SLOT_MAIN));\n}\n\ndefineClass(738, 54, $intern_57, FABPresenter);\n_.onReveal = function onReveal_40(){\n  $clinit_SetPageTitleEvent();\n  $fireEvent_1(this, new SetPageTitleEvent('FAB', 'FAB or Floating action buttons are used for a promoted action. They are distinguished by a circled icon floating above the UI and have motion behaviors that include morphing, launching, and a transferring anchor point.'));\n}\n;\nvar Lgwt_material_design_demo_client_application_components_fabs_FABPresenter_2_classLit = createForClass('gwt.material.design.demo.client.application.components.fabs', 'FABPresenter', 738);\nfunction FABView(){\n  ViewImpl.call(this);\n  $initWidget_0(this, $build_f_HTMLPanel1_18(new FABView_BinderImpl$Widgets(this)));\n}\n\ndefineClass(997, 57, $intern_58, FABView);\nvar Lgwt_material_design_demo_client_application_components_fabs_FABView_2_classLit = createForClass('gwt.material.design.demo.client.application.components.fabs', 'FABView', 997);\nfunction FABView_BinderImpl(){\n}\n\ndefineClass(1347, 1, {}, FABView_BinderImpl);\nvar Lgwt_material_design_demo_client_application_components_fabs_FABView_1BinderImpl_2_classLit = createForClass('gwt.material.design.demo.client.application.components.fabs', 'FABView_BinderImpl', 1347);\nfunction $build_f_HTMLPanel1_18(this$static){\n  var __attachRecord__, f_HTMLPanel1, f_MaterialTitle2, f_MaterialFAB3, f_PrettyPre11, f_MaterialTitle12, btnOpen, btnClose, f_MaterialRow13, f_PrettyPre22, f_MaterialTitle23, f_MaterialRow24, f_PrettyPre34, f_MaterialTitle35, f_MaterialRow36, f_PrettyPre46, f_MaterialButton4, f_MaterialFABList5, f_MaterialAnchorButton6, f_MaterialAnchorButton7, f_MaterialAnchorButton8, f_MaterialAnchorButton9, f_MaterialAnchorButton10, sb, f_MaterialColumn14, fab, sb_0, f_MaterialColumn25, f_MaterialFAB26, sb_1, f_MaterialColumn37, f_MaterialFAB38, sb_2, f_MaterialButton15, f_MaterialFABList16, f_MaterialAnchorButton17, f_MaterialAnchorButton18, f_MaterialAnchorButton19, f_MaterialAnchorButton20, f_MaterialAnchorButton21, f_MaterialButton27, f_MaterialFABList28, f_MaterialAnchorButton29, f_MaterialAnchorButton30, f_MaterialAnchorButton31, f_MaterialAnchorButton32, f_MaterialAnchorButton33, f_MaterialButton39, f_MaterialFABList40, f_MaterialAnchorButton41, f_MaterialAnchorButton42, f_MaterialAnchorButton43, f_MaterialAnchorButton44, f_MaterialAnchorButton45;\n  f_HTMLPanel1 = new HTMLPanel($html5_2(this$static.domId0, this$static.domId1, this$static.domId2, this$static.domId3, this$static.domId4, this$static.domId5, this$static.domId6, this$static.domId7, this$static.domId8, this$static.domId9, this$static.domId10, this$static.domId11, this$static.domId12, this$static.domId13).html_0);\n  __attachRecord__ = attachToDom(($clinit_DOM() , f_HTMLPanel1.element));\n  $get_0(this$static.domId0Element);\n  $get_0(this$static.domId1Element);\n  $get_0(this$static.domId2Element);\n  $get_0(this$static.domId3Element);\n  $get_0(this$static.domId4Element);\n  $get_0(this$static.domId5Element);\n  $get_0(this$static.domId6Element);\n  $get_0(this$static.domId7Element);\n  $get_0(this$static.domId8Element);\n  $get_0(this$static.domId9Element);\n  $get_0(this$static.domId10Element);\n  $get_0(this$static.domId11Element);\n  $get_0(this$static.domId12Element);\n  $get_0(this$static.domId13Element);\n  __attachRecord__.origParent?$insertBefore(__attachRecord__.origParent, __attachRecord__.element, __attachRecord__.origSibling):orphan(__attachRecord__.element);\n  $addAndReplaceElement_1(f_HTMLPanel1, (f_MaterialTitle2 = new MaterialTitle , $setInnerHTML($getElement(f_MaterialTitle2.header), 'Fixed Action Button') , $setText_10(f_MaterialTitle2.paragraph, 'If you want a fixed floating action button, you can add multiple actions that will appear on hover. Our demo is in the bottom righthand corner of the page.') , f_MaterialTitle2), $get_0(this$static.domId0Element));\n  $addAndReplaceElement_1(f_HTMLPanel1, (f_MaterialFAB3 = new MaterialFAB , $add_12(f_MaterialFAB3, (f_MaterialButton4 = new MaterialButton , $setBackgroundColor_0((!f_MaterialButton4.colorsMixin_0 && (f_MaterialButton4.colorsMixin_0 = new ColorsMixin(f_MaterialButton4)) , f_MaterialButton4.colorsMixin_0), 'blue') , $setType_0(f_MaterialButton4, ($clinit_ButtonType() , FLOATING)) , $setIconType(f_MaterialButton4, ($clinit_IconType() , POLYMER)) , $setSize(f_MaterialButton4, ($clinit_ButtonSize() , LARGE)) , f_MaterialButton4)) , $add_12(f_MaterialFAB3, (f_MaterialFABList5 = new MaterialFABList , $add_12(f_MaterialFABList5, new ListItem_0((f_MaterialAnchorButton6 = new MaterialAnchorButton , $setBackgroundColor_0((!f_MaterialAnchorButton6.colorsMixin_0 && (f_MaterialAnchorButton6.colorsMixin_0 = new ColorsMixin(f_MaterialAnchorButton6)) , f_MaterialAnchorButton6.colorsMixin_0), 'blue') , $setWaves(f_MaterialAnchorButton6, ($clinit_WavesType() , LIGHT)) , $setType_0(f_MaterialAnchorButton6, FLOATING) , $setIconType(f_MaterialAnchorButton6, POLYMER) , f_MaterialAnchorButton6))) , $add_12(f_MaterialFABList5, new ListItem_0((f_MaterialAnchorButton7 = new MaterialAnchorButton , $setBackgroundColor_0((!f_MaterialAnchorButton7.colorsMixin_0 && (f_MaterialAnchorButton7.colorsMixin_0 = new ColorsMixin(f_MaterialAnchorButton7)) , f_MaterialAnchorButton7.colorsMixin_0), 'green') , $setWaves(f_MaterialAnchorButton7, LIGHT) , $setType_0(f_MaterialAnchorButton7, FLOATING) , $setIconType(f_MaterialAnchorButton7, POLYMER) , f_MaterialAnchorButton7))) , $add_12(f_MaterialFABList5, new ListItem_0((f_MaterialAnchorButton8 = new MaterialAnchorButton , $setBackgroundColor_0((!f_MaterialAnchorButton8.colorsMixin_0 && (f_MaterialAnchorButton8.colorsMixin_0 = new ColorsMixin(f_MaterialAnchorButton8)) , f_MaterialAnchorButton8.colorsMixin_0), 'red') , $setWaves(f_MaterialAnchorButton8, LIGHT) , $setType_0(f_MaterialAnchorButton8, FLOATING) , $setIconType(f_MaterialAnchorButton8, POLYMER) , f_MaterialAnchorButton8))) , $add_12(f_MaterialFABList5, new ListItem_0((f_MaterialAnchorButton9 = new MaterialAnchorButton , $setBackgroundColor_0((!f_MaterialAnchorButton9.colorsMixin_0 && (f_MaterialAnchorButton9.colorsMixin_0 = new ColorsMixin(f_MaterialAnchorButton9)) , f_MaterialAnchorButton9.colorsMixin_0), 'orange') , $setWaves(f_MaterialAnchorButton9, LIGHT) , $setType_0(f_MaterialAnchorButton9, FLOATING) , $setIconType(f_MaterialAnchorButton9, POLYMER) , f_MaterialAnchorButton9))) , $add_12(f_MaterialFABList5, new ListItem_0((f_MaterialAnchorButton10 = new MaterialAnchorButton , $setBackgroundColor_0((!f_MaterialAnchorButton10.colorsMixin_0 && (f_MaterialAnchorButton10.colorsMixin_0 = new ColorsMixin(f_MaterialAnchorButton10)) , f_MaterialAnchorButton10.colorsMixin_0), 'blue') , $setWaves(f_MaterialAnchorButton10, LIGHT) , $setType_0(f_MaterialAnchorButton10, FLOATING) , $setIconType(f_MaterialAnchorButton10, POLYMER) , f_MaterialAnchorButton10))) , f_MaterialFABList5)) , f_MaterialFAB3.element.style['zIndex'] = '995' , undefined , f_MaterialFAB3), $get_0(this$static.domId1Element));\n  $addAndReplaceElement_1(f_HTMLPanel1, (f_PrettyPre11 = new PrettyPre , $setHTML_0(f_PrettyPre11, (sb = new StringBuilder , sb.string += '\\u2003&lt;m:MaterialFAB&gt;<br> \\u2003&lt;m:MaterialAnchorButton type=\"FLOATING\" backgroundColor=\"blue\" iconType=\"POLYMER\" size=\"LARGE\"/&gt;<br> \\u2003&lt;m:MaterialFABList&gt;<br> \\u2003\\u2003&lt;m:MaterialAnchorButton type=\"FLOATING\" waves=\"LIGHT\" backgroundColor=\"blue\" iconType=\"POLYMER\"/&gt;<br> \\u2003\\u2003&lt;m:MaterialAnchorButton type=\"FLOATING\" waves=\"LIGHT\" backgroundColor=\"green\" iconType=\"POLYMER\"/&gt;<br> \\u2003\\u2003&lt;m:MaterialAnchorButton type=\"FLOATING\" waves=\"LIGHT\" backgroundColor=\"red\" iconType=\"POLYMER\"/&gt;<br> \\u2003\\u2003&lt;m:MaterialAnchorButton type=\"FLOATING\" waves=\"LIGHT\" backgroundColor=\"orange\" iconType=\"POLYMER\"/&gt;<br> \\u2003\\u2003&lt;m:MaterialAnchorButton type=\"FLOATING\" waves=\"LIGHT\" backgroundColor=\"blue\" iconType=\"POLYMER\"/&gt;<br> \\u2003&lt;/m:MaterialFABList&gt;<br> &lt;/m:MaterialFAB&gt;<br>' , new OnlyToBeUsedInGeneratedCodeStringBlessedAsSafeHtml(sb.string)).html_0) , setStyleName(f_PrettyPre11.element, 'lang-xml', true) , setStyleName(f_PrettyPre11.element, 'z-depth-1', true) , f_PrettyPre11), $get_0(this$static.domId2Element));\n  $addAndReplaceElement_1(f_HTMLPanel1, (f_MaterialTitle12 = new MaterialTitle , $setInnerHTML($getElement(f_MaterialTitle12.header), 'Open / Close FAB') , $setText_10(f_MaterialTitle12.paragraph, 'You can also open the Fixed Action Button Menu programatically.') , f_MaterialTitle12), $get_0(this$static.domId3Element));\n  $addAndReplaceElement_1(f_HTMLPanel1, (btnOpen = new MaterialButton , btnOpen.span_1.setText('Open') , $add_12(btnOpen, btnOpen.span_1) , $setBackgroundColor_0((!btnOpen.colorsMixin_0 && (btnOpen.colorsMixin_0 = new ColorsMixin(btnOpen)) , btnOpen.colorsMixin_0), 'blue') , $addClickHandler(btnOpen, this$static.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames1) , btnOpen), $get_0(this$static.domId4Element));\n  $addAndReplaceElement_1(f_HTMLPanel1, (btnClose = new MaterialButton , btnClose.span_1.setText('Close') , $add_12(btnClose, btnClose.span_1) , $setTextColor_0((!btnClose.colorsMixin_0 && (btnClose.colorsMixin_0 = new ColorsMixin(btnClose)) , btnClose.colorsMixin_0), 'black') , $setBackgroundColor_0((!btnClose.colorsMixin_0 && (btnClose.colorsMixin_0 = new ColorsMixin(btnClose)) , btnClose.colorsMixin_0), 'white') , $addClickHandler(btnClose, this$static.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames2) , btnClose), $get_0(this$static.domId5Element));\n  $addAndReplaceElement_1(f_HTMLPanel1, (f_MaterialRow13 = new MaterialRow , $add_12(f_MaterialRow13, (f_MaterialColumn14 = new MaterialColumn , $add_12(f_MaterialColumn14, (fab = new MaterialFAB , $add_12(fab, (f_MaterialButton15 = new MaterialButton , $setBackgroundColor_0((!f_MaterialButton15.colorsMixin_0 && (f_MaterialButton15.colorsMixin_0 = new ColorsMixin(f_MaterialButton15)) , f_MaterialButton15.colorsMixin_0), 'blue') , $setType_0(f_MaterialButton15, FLOATING) , $setIconType(f_MaterialButton15, POLYMER) , $setSize(f_MaterialButton15, LARGE) , f_MaterialButton15)) , $add_12(fab, (f_MaterialFABList16 = new MaterialFABList , $add_12(f_MaterialFABList16, new ListItem_0((f_MaterialAnchorButton17 = new MaterialAnchorButton , $setBackgroundColor_0((!f_MaterialAnchorButton17.colorsMixin_0 && (f_MaterialAnchorButton17.colorsMixin_0 = new ColorsMixin(f_MaterialAnchorButton17)) , f_MaterialAnchorButton17.colorsMixin_0), 'blue') , $setWaves(f_MaterialAnchorButton17, LIGHT) , $setType_0(f_MaterialAnchorButton17, FLOATING) , $setIconType(f_MaterialAnchorButton17, POLYMER) , f_MaterialAnchorButton17))) , $add_12(f_MaterialFABList16, new ListItem_0((f_MaterialAnchorButton18 = new MaterialAnchorButton , $setBackgroundColor_0((!f_MaterialAnchorButton18.colorsMixin_0 && (f_MaterialAnchorButton18.colorsMixin_0 = new ColorsMixin(f_MaterialAnchorButton18)) , f_MaterialAnchorButton18.colorsMixin_0), 'green') , $setWaves(f_MaterialAnchorButton18, LIGHT) , $setType_0(f_MaterialAnchorButton18, FLOATING) , $setIconType(f_MaterialAnchorButton18, POLYMER) , f_MaterialAnchorButton18))) , $add_12(f_MaterialFABList16, new ListItem_0((f_MaterialAnchorButton19 = new MaterialAnchorButton , $setBackgroundColor_0((!f_MaterialAnchorButton19.colorsMixin_0 && (f_MaterialAnchorButton19.colorsMixin_0 = new ColorsMixin(f_MaterialAnchorButton19)) , f_MaterialAnchorButton19.colorsMixin_0), 'red') , $setWaves(f_MaterialAnchorButton19, LIGHT) , $setType_0(f_MaterialAnchorButton19, FLOATING) , $setIconType(f_MaterialAnchorButton19, POLYMER) , f_MaterialAnchorButton19))) , $add_12(f_MaterialFABList16, new ListItem_0((f_MaterialAnchorButton20 = new MaterialAnchorButton , $setBackgroundColor_0((!f_MaterialAnchorButton20.colorsMixin_0 && (f_MaterialAnchorButton20.colorsMixin_0 = new ColorsMixin(f_MaterialAnchorButton20)) , f_MaterialAnchorButton20.colorsMixin_0), 'orange') , $setWaves(f_MaterialAnchorButton20, LIGHT) , $setType_0(f_MaterialAnchorButton20, FLOATING) , $setIconType(f_MaterialAnchorButton20, POLYMER) , f_MaterialAnchorButton20))) , $add_12(f_MaterialFABList16, new ListItem_0((f_MaterialAnchorButton21 = new MaterialAnchorButton , $setBackgroundColor_0((!f_MaterialAnchorButton21.colorsMixin_0 && (f_MaterialAnchorButton21.colorsMixin_0 = new ColorsMixin(f_MaterialAnchorButton21)) , f_MaterialAnchorButton21.colorsMixin_0), 'blue') , $setWaves(f_MaterialAnchorButton21, LIGHT) , $setType_0(f_MaterialAnchorButton21, FLOATING) , $setIconType(f_MaterialAnchorButton21, POLYMER) , f_MaterialAnchorButton21))) , f_MaterialFABList16)) , $setAxis_3(fab, ($clinit_Axis() , HORIZONTAL)) , fab.element.style['right'] = ($clinit_Style$Unit() , '0.0px') , fab.element.style['zIndex'] = '995' , $setLayoutPosition(fab, ($clinit_Style$Position() , ABSOLUTE)) , this$static.owner.fab = fab , fab)) , f_MaterialColumn14.element.style['height'] = '80px' , $setGrid((!f_MaterialColumn14.gridMixin_0 && (f_MaterialColumn14.gridMixin_0 = new GridMixin(f_MaterialColumn14)) , f_MaterialColumn14.gridMixin_0), 'l6 m6 s12') , $setLayoutPosition(f_MaterialColumn14, RELATIVE) , f_MaterialColumn14)) , f_MaterialRow13), $get_0(this$static.domId6Element));\n  $addAndReplaceElement_1(f_HTMLPanel1, (f_PrettyPre22 = new PrettyPre , $setHTML_0(f_PrettyPre22, (sb_0 = new StringBuilder , sb_0.string += '\\u2003@UiField MaterialFAB fab;<br><br> fab.openFAB();<br> fab.closeFAB();<br>' , new OnlyToBeUsedInGeneratedCodeStringBlessedAsSafeHtml(sb_0.string)).html_0) , f_PrettyPre22), $get_0(this$static.domId7Element));\n  $addAndReplaceElement_1(f_HTMLPanel1, (f_MaterialTitle23 = new MaterialTitle , $setInnerHTML($getElement(f_MaterialTitle23.header), 'FAB Type : Horizontal') , $setText_10(f_MaterialTitle23.paragraph, \"Creating a horizontal FAB is easy! Just add axis='HORIZONTAL'.\") , f_MaterialTitle23), $get_0(this$static.domId8Element));\n  $addAndReplaceElement_1(f_HTMLPanel1, (f_MaterialRow24 = new MaterialRow , $add_12(f_MaterialRow24, (f_MaterialColumn25 = new MaterialColumn , $add_12(f_MaterialColumn25, (f_MaterialFAB26 = new MaterialFAB , $add_12(f_MaterialFAB26, (f_MaterialButton27 = new MaterialButton , $setBackgroundColor_0((!f_MaterialButton27.colorsMixin_0 && (f_MaterialButton27.colorsMixin_0 = new ColorsMixin(f_MaterialButton27)) , f_MaterialButton27.colorsMixin_0), 'blue') , $setType_0(f_MaterialButton27, FLOATING) , $setIconType(f_MaterialButton27, POLYMER) , $setSize(f_MaterialButton27, LARGE) , f_MaterialButton27)) , $add_12(f_MaterialFAB26, (f_MaterialFABList28 = new MaterialFABList , $add_12(f_MaterialFABList28, new ListItem_0((f_MaterialAnchorButton29 = new MaterialAnchorButton , $setBackgroundColor_0((!f_MaterialAnchorButton29.colorsMixin_0 && (f_MaterialAnchorButton29.colorsMixin_0 = new ColorsMixin(f_MaterialAnchorButton29)) , f_MaterialAnchorButton29.colorsMixin_0), 'blue') , $setWaves(f_MaterialAnchorButton29, LIGHT) , $setType_0(f_MaterialAnchorButton29, FLOATING) , $setIconType(f_MaterialAnchorButton29, POLYMER) , f_MaterialAnchorButton29))) , $add_12(f_MaterialFABList28, new ListItem_0((f_MaterialAnchorButton30 = new MaterialAnchorButton , $setBackgroundColor_0((!f_MaterialAnchorButton30.colorsMixin_0 && (f_MaterialAnchorButton30.colorsMixin_0 = new ColorsMixin(f_MaterialAnchorButton30)) , f_MaterialAnchorButton30.colorsMixin_0), 'green') , $setWaves(f_MaterialAnchorButton30, LIGHT) , $setType_0(f_MaterialAnchorButton30, FLOATING) , $setIconType(f_MaterialAnchorButton30, POLYMER) , f_MaterialAnchorButton30))) , $add_12(f_MaterialFABList28, new ListItem_0((f_MaterialAnchorButton31 = new MaterialAnchorButton , $setBackgroundColor_0((!f_MaterialAnchorButton31.colorsMixin_0 && (f_MaterialAnchorButton31.colorsMixin_0 = new ColorsMixin(f_MaterialAnchorButton31)) , f_MaterialAnchorButton31.colorsMixin_0), 'red') , $setWaves(f_MaterialAnchorButton31, LIGHT) , $setType_0(f_MaterialAnchorButton31, FLOATING) , $setIconType(f_MaterialAnchorButton31, POLYMER) , f_MaterialAnchorButton31))) , $add_12(f_MaterialFABList28, new ListItem_0((f_MaterialAnchorButton32 = new MaterialAnchorButton , $setBackgroundColor_0((!f_MaterialAnchorButton32.colorsMixin_0 && (f_MaterialAnchorButton32.colorsMixin_0 = new ColorsMixin(f_MaterialAnchorButton32)) , f_MaterialAnchorButton32.colorsMixin_0), 'orange') , $setWaves(f_MaterialAnchorButton32, LIGHT) , $setType_0(f_MaterialAnchorButton32, FLOATING) , $setIconType(f_MaterialAnchorButton32, POLYMER) , f_MaterialAnchorButton32))) , $add_12(f_MaterialFABList28, new ListItem_0((f_MaterialAnchorButton33 = new MaterialAnchorButton , $setBackgroundColor_0((!f_MaterialAnchorButton33.colorsMixin_0 && (f_MaterialAnchorButton33.colorsMixin_0 = new ColorsMixin(f_MaterialAnchorButton33)) , f_MaterialAnchorButton33.colorsMixin_0), 'blue') , $setWaves(f_MaterialAnchorButton33, LIGHT) , $setType_0(f_MaterialAnchorButton33, FLOATING) , $setIconType(f_MaterialAnchorButton33, POLYMER) , f_MaterialAnchorButton33))) , f_MaterialFABList28)) , $setAxis_3(f_MaterialFAB26, HORIZONTAL) , f_MaterialFAB26.element.style['right'] = '0.0px' , f_MaterialFAB26.element.style['zIndex'] = '995' , $setLayoutPosition(f_MaterialFAB26, ABSOLUTE) , f_MaterialFAB26)) , f_MaterialColumn25.element.style['height'] = '80px' , $setGrid((!f_MaterialColumn25.gridMixin_0 && (f_MaterialColumn25.gridMixin_0 = new GridMixin(f_MaterialColumn25)) , f_MaterialColumn25.gridMixin_0), 'l6 m6 s12') , $setLayoutPosition(f_MaterialColumn25, RELATIVE) , f_MaterialColumn25)) , f_MaterialRow24), $get_0(this$static.domId9Element));\n  $addAndReplaceElement_1(f_HTMLPanel1, (f_PrettyPre34 = new PrettyPre , $setHTML_0(f_PrettyPre34, (sb_1 = new StringBuilder , sb_1.string += '\\u2003&lt;m:MaterialFAB axis=\"HORIZONTAL\"&gt;<br> \\u2003&lt;-- Content here --&gt;<br> &lt;/m:MaterialFAB&gt;<br>' , new OnlyToBeUsedInGeneratedCodeStringBlessedAsSafeHtml(sb_1.string)).html_0) , setStyleName(f_PrettyPre34.element, 'lang-xml', true) , setStyleName(f_PrettyPre34.element, 'z-depth-1', true) , f_PrettyPre34), $get_0(this$static.domId10Element));\n  $addAndReplaceElement_1(f_HTMLPanel1, (f_MaterialTitle35 = new MaterialTitle , $setInnerHTML($getElement(f_MaterialTitle35.header), 'FAB Type : Click Only') , $setText_10(f_MaterialTitle35.paragraph, \"If you want to disable the hover behaviour, and instead toggle the FAB menu when the user clicks on the large button (works great on mobile!), Just add type='CLICK_ONLY'\") , f_MaterialTitle35), $get_0(this$static.domId11Element));\n  $addAndReplaceElement_1(f_HTMLPanel1, (f_MaterialRow36 = new MaterialRow , $add_12(f_MaterialRow36, (f_MaterialColumn37 = new MaterialColumn , $add_12(f_MaterialColumn37, (f_MaterialFAB38 = new MaterialFAB , $add_12(f_MaterialFAB38, (f_MaterialButton39 = new MaterialButton , $setBackgroundColor_0((!f_MaterialButton39.colorsMixin_0 && (f_MaterialButton39.colorsMixin_0 = new ColorsMixin(f_MaterialButton39)) , f_MaterialButton39.colorsMixin_0), 'blue') , $setType_0(f_MaterialButton39, FLOATING) , $setIconType(f_MaterialButton39, POLYMER) , $setSize(f_MaterialButton39, LARGE) , f_MaterialButton39)) , $add_12(f_MaterialFAB38, (f_MaterialFABList40 = new MaterialFABList , $add_12(f_MaterialFABList40, new ListItem_0((f_MaterialAnchorButton41 = new MaterialAnchorButton , $setBackgroundColor_0((!f_MaterialAnchorButton41.colorsMixin_0 && (f_MaterialAnchorButton41.colorsMixin_0 = new ColorsMixin(f_MaterialAnchorButton41)) , f_MaterialAnchorButton41.colorsMixin_0), 'blue') , $setWaves(f_MaterialAnchorButton41, LIGHT) , $setType_0(f_MaterialAnchorButton41, FLOATING) , $setIconType(f_MaterialAnchorButton41, POLYMER) , f_MaterialAnchorButton41))) , $add_12(f_MaterialFABList40, new ListItem_0((f_MaterialAnchorButton42 = new MaterialAnchorButton , $setBackgroundColor_0((!f_MaterialAnchorButton42.colorsMixin_0 && (f_MaterialAnchorButton42.colorsMixin_0 = new ColorsMixin(f_MaterialAnchorButton42)) , f_MaterialAnchorButton42.colorsMixin_0), 'green') , $setWaves(f_MaterialAnchorButton42, LIGHT) , $setType_0(f_MaterialAnchorButton42, FLOATING) , $setIconType(f_MaterialAnchorButton42, POLYMER) , f_MaterialAnchorButton42))) , $add_12(f_MaterialFABList40, new ListItem_0((f_MaterialAnchorButton43 = new MaterialAnchorButton , $setBackgroundColor_0((!f_MaterialAnchorButton43.colorsMixin_0 && (f_MaterialAnchorButton43.colorsMixin_0 = new ColorsMixin(f_MaterialAnchorButton43)) , f_MaterialAnchorButton43.colorsMixin_0), 'red') , $setWaves(f_MaterialAnchorButton43, LIGHT) , $setType_0(f_MaterialAnchorButton43, FLOATING) , $setIconType(f_MaterialAnchorButton43, POLYMER) , f_MaterialAnchorButton43))) , $add_12(f_MaterialFABList40, new ListItem_0((f_MaterialAnchorButton44 = new MaterialAnchorButton , $setBackgroundColor_0((!f_MaterialAnchorButton44.colorsMixin_0 && (f_MaterialAnchorButton44.colorsMixin_0 = new ColorsMixin(f_MaterialAnchorButton44)) , f_MaterialAnchorButton44.colorsMixin_0), 'orange') , $setWaves(f_MaterialAnchorButton44, LIGHT) , $setType_0(f_MaterialAnchorButton44, FLOATING) , $setIconType(f_MaterialAnchorButton44, POLYMER) , f_MaterialAnchorButton44))) , $add_12(f_MaterialFABList40, new ListItem_0((f_MaterialAnchorButton45 = new MaterialAnchorButton , $setBackgroundColor_0((!f_MaterialAnchorButton45.colorsMixin_0 && (f_MaterialAnchorButton45.colorsMixin_0 = new ColorsMixin(f_MaterialAnchorButton45)) , f_MaterialAnchorButton45.colorsMixin_0), 'blue') , $setWaves(f_MaterialAnchorButton45, LIGHT) , $setType_0(f_MaterialAnchorButton45, FLOATING) , $setIconType(f_MaterialAnchorButton45, POLYMER) , f_MaterialAnchorButton45))) , f_MaterialFABList40)) , $setAxis_3(f_MaterialFAB38, HORIZONTAL) , $setType_7(f_MaterialFAB38, ($clinit_FABType() , CLICK_ONLY)) , f_MaterialFAB38.element.style['right'] = '0.0px' , f_MaterialFAB38.element.style['zIndex'] = '995' , $setLayoutPosition(f_MaterialFAB38, ABSOLUTE) , f_MaterialFAB38)) , f_MaterialColumn37.element.style['height'] = '80px' , $setGrid((!f_MaterialColumn37.gridMixin_0 && (f_MaterialColumn37.gridMixin_0 = new GridMixin(f_MaterialColumn37)) , f_MaterialColumn37.gridMixin_0), 'l6 m6 s12') , $setLayoutPosition(f_MaterialColumn37, RELATIVE) , f_MaterialColumn37)) , f_MaterialRow36), $get_0(this$static.domId12Element));\n  $addAndReplaceElement_1(f_HTMLPanel1, (f_PrettyPre46 = new PrettyPre , $setHTML_0(f_PrettyPre46, (sb_2 = new StringBuilder , sb_2.string += '\\u2003&lt;m:MaterialFAB type=\"CLICK_ONLY\"&gt;<br> \\u2003&lt;-- Content here --&gt;<br> &lt;/m:MaterialFAB&gt;<br>' , new OnlyToBeUsedInGeneratedCodeStringBlessedAsSafeHtml(sb_2.string)).html_0) , setStyleName(f_PrettyPre46.element, 'lang-xml', true) , setStyleName(f_PrettyPre46.element, 'z-depth-1', true) , f_PrettyPre46), $get_0(this$static.domId13Element));\n  return f_HTMLPanel1;\n}\n\nfunction FABView_BinderImpl$Widgets(owner){\n  var style;\n  this.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames1 = new FABView_BinderImpl$Widgets$1(this);\n  this.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames2 = new FABView_BinderImpl$Widgets$2(this);\n  this.owner = owner;\n  style = (new FABView_BinderImpl_GenBundle_default_InlineClientBundleGenerator , $clinit_FABView_BinderImpl_GenBundle_default_InlineClientBundleGenerator$styleInitializer() , style_16);\n  $ensureInjected_21(style);\n  this.domId0 = $createUniqueId($doc);\n  this.domId1 = $createUniqueId($doc);\n  this.domId2 = $createUniqueId($doc);\n  this.domId3 = $createUniqueId($doc);\n  this.domId4 = $createUniqueId($doc);\n  this.domId5 = $createUniqueId($doc);\n  this.domId6 = $createUniqueId($doc);\n  this.domId7 = $createUniqueId($doc);\n  this.domId8 = $createUniqueId($doc);\n  this.domId9 = $createUniqueId($doc);\n  this.domId10 = $createUniqueId($doc);\n  this.domId11 = $createUniqueId($doc);\n  this.domId12 = $createUniqueId($doc);\n  this.domId13 = $createUniqueId($doc);\n  this.domId0Element = new LazyDomElement(this.domId0);\n  this.domId1Element = new LazyDomElement(this.domId1);\n  this.domId2Element = new LazyDomElement(this.domId2);\n  this.domId3Element = new LazyDomElement(this.domId3);\n  this.domId4Element = new LazyDomElement(this.domId4);\n  this.domId5Element = new LazyDomElement(this.domId5);\n  this.domId6Element = new LazyDomElement(this.domId6);\n  this.domId7Element = new LazyDomElement(this.domId7);\n  this.domId8Element = new LazyDomElement(this.domId8);\n  this.domId9Element = new LazyDomElement(this.domId9);\n  this.domId10Element = new LazyDomElement(this.domId10);\n  this.domId11Element = new LazyDomElement(this.domId11);\n  this.domId12Element = new LazyDomElement(this.domId12);\n  this.domId13Element = new LazyDomElement(this.domId13);\n}\n\ndefineClass(1348, 1, {}, FABView_BinderImpl$Widgets);\nvar Lgwt_material_design_demo_client_application_components_fabs_FABView_1BinderImpl$Widgets_2_classLit = createForClass('gwt.material.design.demo.client.application.components.fabs', 'FABView_BinderImpl/Widgets', 1348);\nfunction FABView_BinderImpl$Widgets$1(this$1){\n  this.this$11 = this$1;\n}\n\ndefineClass(1349, 1, $intern_66, FABView_BinderImpl$Widgets$1);\n_.onClick = function onClick_152(event_0){\n  $openFAB(this.this$11.owner.fab);\n}\n;\nvar Lgwt_material_design_demo_client_application_components_fabs_FABView_1BinderImpl$Widgets$1_2_classLit = createForClass('gwt.material.design.demo.client.application.components.fabs', 'FABView_BinderImpl/Widgets/1', 1349);\nfunction FABView_BinderImpl$Widgets$2(this$1){\n  this.this$11 = this$1;\n}\n\ndefineClass(1350, 1, $intern_66, FABView_BinderImpl$Widgets$2);\n_.onClick = function onClick_153(event_0){\n  $closeFAB(this.this$11.owner.fab);\n}\n;\nvar Lgwt_material_design_demo_client_application_components_fabs_FABView_1BinderImpl$Widgets$2_2_classLit = createForClass('gwt.material.design.demo.client.application.components.fabs', 'FABView_BinderImpl/Widgets/2', 1350);\nfunction FABView_BinderImpl_GenBundle_default_InlineClientBundleGenerator(){\n}\n\ndefineClass(1827, 1, {}, FABView_BinderImpl_GenBundle_default_InlineClientBundleGenerator);\nvar style_16;\nvar Lgwt_material_design_demo_client_application_components_fabs_FABView_1BinderImpl_1GenBundle_1default_1InlineClientBundleGenerator_2_classLit = createForClass('gwt.material.design.demo.client.application.components.fabs', 'FABView_BinderImpl_GenBundle_default_InlineClientBundleGenerator', 1827);\nfunction $ensureInjected_21(this$static){\n  if (!this$static.injected) {\n    this$static.injected = true;\n    $clinit_StyleInjector();\n    $push_1(toInject, '');\n    schedule();\n    return true;\n  }\n  return false;\n}\n\nfunction FABView_BinderImpl_GenBundle_default_InlineClientBundleGenerator$1(){\n}\n\ndefineClass(1828, 1, {}, FABView_BinderImpl_GenBundle_default_InlineClientBundleGenerator$1);\n_.getName = function getName_100(){\n  return 'style';\n}\n;\n_.injected = false;\nvar Lgwt_material_design_demo_client_application_components_fabs_FABView_1BinderImpl_1GenBundle_1default_1InlineClientBundleGenerator$1_2_classLit = createForClass('gwt.material.design.demo.client.application.components.fabs', 'FABView_BinderImpl_GenBundle_default_InlineClientBundleGenerator/1', 1828);\nfunction $clinit_FABView_BinderImpl_GenBundle_default_InlineClientBundleGenerator$styleInitializer(){\n  $clinit_FABView_BinderImpl_GenBundle_default_InlineClientBundleGenerator$styleInitializer = emptyMethod;\n  style_16 = new FABView_BinderImpl_GenBundle_default_InlineClientBundleGenerator$1;\n}\n\nfunction $html5_2(arg0, arg1, arg2, arg3, arg4, arg5, arg6, arg7, arg8, arg9, arg10, arg11, arg12, arg13){\n  var sb;\n  sb = new StringBuilder;\n  sb.string += \"<span id='\";\n  $append_3(sb, htmlEscape(arg0));\n  sb.string += \"'><\\/span> <span id='\";\n  $append_3(sb, htmlEscape(arg1));\n  sb.string += \"'><\\/span> <span id='\";\n  $append_3(sb, htmlEscape(arg2));\n  sb.string += \"'><\\/span> <span id='\";\n  $append_3(sb, htmlEscape(arg3));\n  sb.string += \"'><\\/span> <span id='\";\n  $append_3(sb, htmlEscape(arg4));\n  sb.string += \"'><\\/span> <span id='\";\n  $append_3(sb, htmlEscape(arg5));\n  sb.string += \"'><\\/span> <span id='\";\n  $append_3(sb, htmlEscape(arg6));\n  sb.string += \"'><\\/span> <span id='\";\n  $append_3(sb, htmlEscape(arg7));\n  sb.string += \"'><\\/span> <span id='\";\n  $append_3(sb, htmlEscape(arg8));\n  sb.string += \"'><\\/span> <span id='\";\n  $append_3(sb, htmlEscape(arg9));\n  sb.string += \"'><\\/span> <span id='\";\n  $append_3(sb, htmlEscape(arg10));\n  sb.string += \"'><\\/span> <span id='\";\n  $append_3(sb, htmlEscape(arg11));\n  sb.string += \"'><\\/span> <span id='\";\n  $append_3(sb, htmlEscape(arg12));\n  sb.string += \"'><\\/span> <span id='\";\n  $append_3(sb, htmlEscape(arg13));\n  sb.string += \"'><\\/span>\";\n  return new OnlyToBeUsedInGeneratedCodeStringBlessedAsSafeHtml(sb.string);\n}\n\nfunction $get_Key$type$gwt$material$design$demo$client$application$components$fabs$FABPresenter$_annotation$$none$$(this$static){\n  var result;\n  if (!this$static.singleton_Key$type$gwt$material$design$demo$client$application$components$fabs$FABPresenter$_annotation$$none$$) {\n    result = new FABPresenter($get_Key$type$com$google$web$bindery$event$shared$EventBus$_annotation$$none$$($getFragment_com_google_web_bindery_event_shared(this$static.injector)), $get_Key$type$gwt$material$design$demo$client$application$components$fabs$FABView$_annotation$$none$$(this$static), $get_Key$type$gwt$material$design$demo$client$application$components$fabs$FABPresenter$MyProxy$_annotation$$none$$(this$static));\n    $automaticBind(($getFragment_com_gwtplatform_mvp_client(this$static.injector) , result), $get_Key$type$com$gwtplatform$mvp$client$AutobindDisable$_annotation$$none$$($getFragment_com_gwtplatform_mvp_client(this$static.injector)));\n    this$static.singleton_Key$type$gwt$material$design$demo$client$application$components$fabs$FABPresenter$_annotation$$none$$ = result;\n  }\n  return this$static.singleton_Key$type$gwt$material$design$demo$client$application$components$fabs$FABPresenter$_annotation$$none$$;\n}\n\nfunction $get_Key$type$gwt$material$design$demo$client$application$components$fabs$FABView$_annotation$$none$$(this$static){\n  var result;\n  if (!this$static.singleton_Key$type$gwt$material$design$demo$client$application$components$fabs$FABView$_annotation$$none$$) {\n    result = new FABView(new FABView_BinderImpl);\n    this$static.singleton_Key$type$gwt$material$design$demo$client$application$components$fabs$FABView$_annotation$$none$$ = result;\n  }\n  return this$static.singleton_Key$type$gwt$material$design$demo$client$application$components$fabs$FABView$_annotation$$none$$;\n}\n\ndefineClass(650, 1, $intern_98);\n_.onSuccess_0 = function onSuccess_22(){\n  $onSuccess_0(this.val$callback2, $get_Key$type$gwt$material$design$demo$client$application$components$fabs$FABPresenter$_annotation$$none$$(this.this$11.this$01));\n}\n;\n$entry(onLoad_0)(21);\n\n//# sourceURL=gwtmaterialdemo-21.js\n")
