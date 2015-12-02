$wnd.gwtmaterialdemo.runAsyncCallback2("defineClass(1275, 1, {});\nvar Lgwt_material_design_addins_client_base_mixin_AbstractMixin_2_classLit = createForClass('gwt.material.design.addins.client.base.mixin', 'AbstractMixin', 1275);\nfunction $setActive(this$static, active){\n  var obj;\n  obj = this$static.uiObject;\n  if (active) {\n    setStyleName(($clinit_DOM() , obj.element), 'inactive', false);\n    setStyleName(obj.element, 'active', true);\n  }\n   else {\n    setStyleName(($clinit_DOM() , obj.element), 'active', false);\n    setStyleName(obj.element, 'inactive', true);\n  }\n}\n\nfunction ActiveMixin(widget){\n  this.uiObject = widget;\n}\n\ndefineClass(1276, 1275, {}, ActiveMixin);\nvar Lgwt_material_design_addins_client_base_mixin_ActiveMixin_2_classLit = createForClass('gwt.material.design.addins.client.base.mixin', 'ActiveMixin', 1276);\nfunction $add_14(this$static, child){\n  $add_13(this$static.divBody, child);\n}\n\nfunction $setActive_0(this$static, active){\n  $setActive(this$static.activeMixin, active);\n}\n\nfunction MaterialStep(){\n  ComplexWidget_0.call(this, $doc.createElement('div'));\n  this.conCircle = new Div;\n  this.conBody = new Div;\n  this.divCircle = new Div;\n  this.divLine = new Div;\n  this.divTitle = new Div;\n  this.divBody = new Div;\n  this.activeMixin = new ActiveMixin(this);\n  $setClassName(($clinit_DOM() , this.element), 'step');\n  $add_13(this, this.conCircle);\n  $add_13(this.conCircle, this.divCircle);\n  $add_13(this.conCircle, this.divLine);\n  $add_13(this, this.conBody);\n  $add_13(this.conBody, this.divTitle);\n  $add_13(this.conBody, this.divBody);\n  $setStyleName(this.divCircle, 'circle');\n  $setStyleName(this.divLine, 'line');\n  $setStyleName(this.divTitle, 'title');\n  $setStyleName(this.divBody, 'body');\n}\n\ndefineClass(114, 44, {24:1, 10:1, 22:1, 32:1, 21:1, 27:1, 12:1, 20:1, 17:1, 114:1, 37:1, 34:1}, MaterialStep);\n_.add_0 = function add_14(child){\n  $add_14(this, child);\n}\n;\nvar Lgwt_material_design_addins_client_ui_MaterialStep_2_classLit = createForClass('gwt.material.design.addins.client.ui', 'MaterialStep', 114);\nfunction $goToStep(this$static){\n  var i, w, w0;\n  this$static.totalSteps = this$static.children.size_0;\n  for (i = 0; i < this$static.totalSteps; i++) {\n    w0 = $get_3(this$static.children, i);\n    instanceOf(w0, 114) && $setActive_0(dynamicCast(w0, 114), false);\n  }\n  w = $get_3(this$static.children, 0);\n  instanceOf(w, 114) && $setActive_0(dynamicCast(w, 114), true);\n  this$static.currentStep = 0;\n}\n\nfunction $nextStep(this$static){\n  var nextStep, nextStepIndex, step, w;\n  if (this$static.currentStep >= this$static.children.size_0 - 1)\n  ;\n  else {\n    w = $getWidget(this$static, this$static.currentStep);\n    if (instanceOf(w, 114)) {\n      step = dynamicCast(w, 114);\n      $setActive(step.activeMixin, false);\n      nextStepIndex = $indexOf(this$static.children, step) + 1;\n      nextStep = dynamicCast($get_3(this$static.children, nextStepIndex), 114);\n      $setActive(nextStep.activeMixin, true);\n    }\n    ++this$static.currentStep;\n  }\n}\n\nfunction $prevStep(this$static){\n  var prevStep, prevStepIndex, step, w;\n  if (this$static.currentStep > 0) {\n    w = $getWidget(this$static, this$static.currentStep);\n    if (instanceOf(w, 114)) {\n      step = dynamicCast(w, 114);\n      $setActive(step.activeMixin, false);\n      prevStepIndex = $indexOf(this$static.children, step) - 1;\n      prevStep = dynamicCast($get_3(this$static.children, prevStepIndex), 114);\n      $setActive(prevStep.activeMixin, true);\n    }\n    --this$static.currentStep;\n  }\n}\n\nfunction MaterialStepper(){\n  ComplexWidget_0.call(this, $doc.createElement('div'));\n  this.totalSteps = 0;\n  this.currentStep = 0;\n  $setClassName(($clinit_DOM() , this.element), 'stepper');\n}\n\ndefineClass(1076, 44, $intern_47, MaterialStepper);\n_.onLoad = function onLoad_8(){\n  $goToStep(this);\n}\n;\n_.currentStep = 0;\n_.totalSteps = 0;\nvar Lgwt_material_design_addins_client_ui_MaterialStepper_2_classLit = createForClass('gwt.material.design.addins.client.ui', 'MaterialStepper', 1076);\nfunction SteppersPresenter(eventBus, view, proxy){\n  $clinit_SteppersPresenter();\n  Presenter.call(this, eventBus, view, proxy, ($clinit_ApplicationPresenter() , SLOT_MainContent));\n}\n\ndefineClass(547, 52, $intern_40, SteppersPresenter);\n_.onReveal = function onReveal_3(){\n  $clinit_SetPageTitleEvent();\n  $fireEvent_1(this, new SetPageTitleEvent('Steppers', 'Steppers convey progress through numbered steps. They may also be used for navigation.'));\n}\n;\nvar Lgwt_material_design_demo_client_application_addins_steppers_SteppersPresenter_2_classLit = createForClass('gwt.material.design.demo.client.application.addins.steppers', 'SteppersPresenter', 547);\nfunction $onFinish(this$static){\n  $toast(new MaterialToast_0(initValues(getClassLiteralForArray(Lcom_google_gwt_user_client_ui_Widget_2_classLit, 1), $intern_4, 17, 0, [])), 'All done.', $intern_56, null);\n  $goToStep(this$static.stepper);\n}\n\nfunction SteppersView(){\n  ViewImpl.call(this);\n  $initWidget_0(this, $build_f_MaterialPanel1_0(new SteppersView_BinderImpl$Widgets(this)));\n}\n\ndefineClass(684, 56, $intern_41, SteppersView);\nvar Lgwt_material_design_demo_client_application_addins_steppers_SteppersView_2_classLit = createForClass('gwt.material.design.demo.client.application.addins.steppers', 'SteppersView', 684);\nfunction SteppersView_BinderImpl(){\n}\n\ndefineClass(858, 1, {}, SteppersView_BinderImpl);\nvar Lgwt_material_design_demo_client_application_addins_steppers_SteppersView_1BinderImpl_2_classLit = createForClass('gwt.material.design.demo.client.application.addins.steppers', 'SteppersView_BinderImpl', 858);\nfunction $build_f_MaterialPanel1_0(this$static){\n  var f_MaterialPanel1, f_MaterialTitle2, f_PrettyPre3, f_MaterialTitle4, stepper, f_PrettyPre11, f_PrettyPre12, sb, f_MaterialStep5, f_MaterialPanel6, btnContinue1, btnPrev1, f_MaterialStep7, f_MaterialPanel8, btnContinue2, btnPrev2, f_MaterialStep9, f_MaterialPanel10, btnContinue3, btnPrev3, sb_0, sb_1;\n  f_MaterialPanel1 = new MaterialPanel;\n  $add_13(f_MaterialPanel1, (f_MaterialTitle2 = new MaterialTitle , $setInnerHTML($getElement(f_MaterialTitle2.header), 'Addins Usage') , $setText_4(f_MaterialTitle2.paragraph, 'In every gwt-material-addins components you may require to add the following namespace to the <ui:UIBinder> element') , f_MaterialTitle2));\n  $add_13(f_MaterialPanel1, (f_PrettyPre3 = new PrettyPre , $setHTML(f_PrettyPre3, (sb = new StringBuilder , sb.string += \"xmlns:m.addins='urn:import:gwt.material.design.addins.client.ui'\" , new OnlyToBeUsedInGeneratedCodeStringBlessedAsSafeHtml(sb.string)).html) , setStyleName(($clinit_DOM() , f_PrettyPre3.element), 'lang-xml', true) , setStyleName(f_PrettyPre3.element, 'z-depth-1', true) , f_PrettyPre3));\n  $add_13(f_MaterialPanel1, (f_MaterialTitle4 = new MaterialTitle , $setInnerHTML($getElement(f_MaterialTitle4.header), 'Vertical Steppers') , $setText_4(f_MaterialTitle4.paragraph, 'Vertical steppers are designed for narrow screen sizes. They are ideal for mobile.') , f_MaterialTitle4));\n  $add_13(f_MaterialPanel1, (stepper = new MaterialStepper , $add_13(stepper, (f_MaterialStep5 = new MaterialStep , $add_14(f_MaterialStep5, (f_MaterialPanel6 = new MaterialPanel , f_MaterialPanel6.setHeight_0('300px') , $setBackgroundColor((!f_MaterialPanel6.colorsMixin && (f_MaterialPanel6.colorsMixin = new ColorsMixin(f_MaterialPanel6)) , f_MaterialPanel6.colorsMixin), 'grey lighten-2') , f_MaterialPanel6.element.style['width'] = '100%' , f_MaterialPanel6)) , $add_14(f_MaterialStep5, (btnContinue1 = new MaterialButton , btnContinue1.span_0.setText('Continue to Step 2') , $add_13(btnContinue1, btnContinue1.span_0) , $setTextColor((!btnContinue1.colorsMixin && (btnContinue1.colorsMixin = new ColorsMixin(btnContinue1)) , btnContinue1.colorsMixin), 'white') , $setBackgroundColor((!btnContinue1.colorsMixin && (btnContinue1.colorsMixin = new ColorsMixin(btnContinue1)) , btnContinue1.colorsMixin), 'blue') , btnContinue1.element.style['marginTop'] = ($clinit_Style$Unit() , '12.0px') , $setWaves(btnContinue1, ($clinit_WavesType() , DEFAULT_6)) , $setGrid((!btnContinue1.gridMixin && (btnContinue1.gridMixin = new GridMixin(btnContinue1)) , btnContinue1.gridMixin), 'l4') , $addDomHandler(btnContinue1, this$static.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames1, ($clinit_ClickEvent() , $clinit_ClickEvent() , TYPE_1)) , btnContinue1)) , $add_14(f_MaterialStep5, (btnPrev1 = new MaterialButton , btnPrev1.span_0.setText('Cancel') , $add_13(btnPrev1, btnPrev1.span_0) , btnPrev1.element.style['marginTop'] = '12.0px' , $setWaves(btnPrev1, DEFAULT_6) , $setGrid((!btnPrev1.gridMixin && (btnPrev1.gridMixin = new GridMixin(btnPrev1)) , btnPrev1.gridMixin), 'l4') , $setType(btnPrev1, ($clinit_ButtonType() , FLAT)) , $addDomHandler(btnPrev1, this$static.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames2, (null , TYPE_1)) , btnPrev1)) , $setInnerHTML($getElement(f_MaterialStep5.divTitle), 'Name of Step 1') , $setInnerHTML($getElement(f_MaterialStep5.divCircle), '1') , f_MaterialStep5)) , $add_13(stepper, (f_MaterialStep7 = new MaterialStep , $add_14(f_MaterialStep7, (f_MaterialPanel8 = new MaterialPanel , f_MaterialPanel8.setHeight_0('300px') , $setBackgroundColor((!f_MaterialPanel8.colorsMixin && (f_MaterialPanel8.colorsMixin = new ColorsMixin(f_MaterialPanel8)) , f_MaterialPanel8.colorsMixin), 'grey lighten-2') , f_MaterialPanel8.element.style['width'] = '100%' , f_MaterialPanel8)) , $add_14(f_MaterialStep7, (btnContinue2 = new MaterialButton , btnContinue2.span_0.setText('Continue to Step 3') , $add_13(btnContinue2, btnContinue2.span_0) , $setTextColor((!btnContinue2.colorsMixin && (btnContinue2.colorsMixin = new ColorsMixin(btnContinue2)) , btnContinue2.colorsMixin), 'white') , $setBackgroundColor((!btnContinue2.colorsMixin && (btnContinue2.colorsMixin = new ColorsMixin(btnContinue2)) , btnContinue2.colorsMixin), 'blue') , btnContinue2.element.style['marginTop'] = '12.0px' , $setWaves(btnContinue2, DEFAULT_6) , $setGrid((!btnContinue2.gridMixin && (btnContinue2.gridMixin = new GridMixin(btnContinue2)) , btnContinue2.gridMixin), 'l4') , $addDomHandler(btnContinue2, this$static.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames1, (null , TYPE_1)) , btnContinue2)) , $add_14(f_MaterialStep7, (btnPrev2 = new MaterialButton , btnPrev2.span_0.setText('Cancel') , $add_13(btnPrev2, btnPrev2.span_0) , btnPrev2.element.style['marginTop'] = '12.0px' , $setWaves(btnPrev2, DEFAULT_6) , $setGrid((!btnPrev2.gridMixin && (btnPrev2.gridMixin = new GridMixin(btnPrev2)) , btnPrev2.gridMixin), 'l4') , $setType(btnPrev2, FLAT) , $addDomHandler(btnPrev2, this$static.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames2, (null , TYPE_1)) , btnPrev2)) , $setInnerHTML($getElement(f_MaterialStep7.divTitle), 'Name of Step 2') , $setInnerHTML($getElement(f_MaterialStep7.divCircle), '2') , f_MaterialStep7)) , $add_13(stepper, (f_MaterialStep9 = new MaterialStep , $add_14(f_MaterialStep9, (f_MaterialPanel10 = new MaterialPanel , f_MaterialPanel10.setHeight_0('300px') , $setBackgroundColor((!f_MaterialPanel10.colorsMixin && (f_MaterialPanel10.colorsMixin = new ColorsMixin(f_MaterialPanel10)) , f_MaterialPanel10.colorsMixin), 'grey lighten-2') , f_MaterialPanel10.element.style['width'] = '100%' , f_MaterialPanel10)) , $add_14(f_MaterialStep9, (btnContinue3 = new MaterialButton , btnContinue3.span_0.setText('Finish') , $add_13(btnContinue3, btnContinue3.span_0) , $setTextColor((!btnContinue3.colorsMixin && (btnContinue3.colorsMixin = new ColorsMixin(btnContinue3)) , btnContinue3.colorsMixin), 'white') , $setBackgroundColor((!btnContinue3.colorsMixin && (btnContinue3.colorsMixin = new ColorsMixin(btnContinue3)) , btnContinue3.colorsMixin), 'blue') , btnContinue3.element.style['marginTop'] = '12.0px' , $setWaves(btnContinue3, DEFAULT_6) , $setGrid((!btnContinue3.gridMixin && (btnContinue3.gridMixin = new GridMixin(btnContinue3)) , btnContinue3.gridMixin), 'l4') , $addDomHandler(btnContinue3, this$static.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames1, (null , TYPE_1)) , $addDomHandler(btnContinue3, this$static.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames3, (null , TYPE_1)) , btnContinue3)) , $add_14(f_MaterialStep9, (btnPrev3 = new MaterialButton , btnPrev3.span_0.setText('Cancel') , $add_13(btnPrev3, btnPrev3.span_0) , btnPrev3.element.style['marginTop'] = '12.0px' , $setWaves(btnPrev3, DEFAULT_6) , $setGrid((!btnPrev3.gridMixin && (btnPrev3.gridMixin = new GridMixin(btnPrev3)) , btnPrev3.gridMixin), 'l4') , $setType(btnPrev3, FLAT) , $addDomHandler(btnPrev3, this$static.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames2, (null , TYPE_1)) , btnPrev3)) , $setInnerHTML($getElement(f_MaterialStep9.divTitle), 'Name of Step 3') , $setInnerHTML($getElement(f_MaterialStep9.divCircle), '3') , f_MaterialStep9)) , this$static.owner.stepper = stepper , stepper));\n  $add_13(f_MaterialPanel1, (f_PrettyPre11 = new PrettyPre , $setHTML(f_PrettyPre11, (sb_0 = new StringBuilder , sb_0.string += '\\u2003&lt;m.addins:MaterialStepper ui:field=\"stepper\"&gt;<br> \\u2003&lt;m.addins:MaterialStep step=\"1\" title=\"Name of Step 1\"&gt;<br> \\u2003\\u2003&lt;m:MaterialPanel width=\"100%\" height=\"300px\" backgroundColor=\"grey lighten-2\"/&gt;<br> \\u2003\\u2003&lt;m:MaterialButton ui:field=\"btnContinue1\" text=\"Continue to Step 2\" grid=\"l4\" marginTop=\"12\" backgroundColor=\"blue\" textColor=\"white\" waves=\"DEFAULT\"/&gt;<br> \\u2003\\u2003&lt;m:MaterialButton ui:field=\"btnPrev1\" text=\"Cancel\" grid=\"l4\" marginTop=\"12\" type=\"FLAT\" waves=\"DEFAULT\"/&gt;<br> \\u2003&lt;/m.addins:MaterialStep&gt;<br> \\u2003&lt;m.addins:MaterialStep step=\"2\" title=\"Name of Step 2\"&gt;<br> \\u2003\\u2003&lt;m:MaterialPanel width=\"100%\" height=\"300px\" backgroundColor=\"grey lighten-2\"/&gt;<br> \\u2003\\u2003&lt;m:MaterialButton ui:field=\"btnContinue2\" text=\"Continue to Step 3\" grid=\"l4\" marginTop=\"12\" backgroundColor=\"blue\" textColor=\"white\" waves=\"DEFAULT\"/&gt;<br> \\u2003\\u2003&lt;m:MaterialButton ui:field=\"btnPrev2\" text=\"Cancel\" grid=\"l4\" marginTop=\"12\" type=\"FLAT\" waves=\"DEFAULT\"/&gt;<br> \\u2003&lt;/m.addins:MaterialStep&gt;<br> \\u2003&lt;m.addins:MaterialStep step=\"3\" title=\"Name of Step 3\"&gt;<br> \\u2003\\u2003&lt;m:MaterialPanel width=\"100%\" height=\"300px\" backgroundColor=\"grey lighten-2\"/&gt;<br> \\u2003\\u2003&lt;m:MaterialButton ui:field=\"btnContinue3\" text=\"Finish\" grid=\"l4\" marginTop=\"12\" backgroundColor=\"blue\" textColor=\"white\" waves=\"DEFAULT\"/&gt;<br> \\u2003\\u2003&lt;m:MaterialButton ui:field=\"btnPrev3\" text=\"Cancel\" grid=\"l4\" marginTop=\"12\" type=\"FLAT\" waves=\"DEFAULT\"/&gt;<br> \\u2003&lt;/m.addins:MaterialStep&gt;<br> &lt;/m.addins:MaterialStepper&gt;<br>' , new OnlyToBeUsedInGeneratedCodeStringBlessedAsSafeHtml(sb_0.string)).html) , setStyleName(f_PrettyPre11.element, 'lang-xml', true) , setStyleName(f_PrettyPre11.element, 'z-depth-1', true) , f_PrettyPre11));\n  $add_13(f_MaterialPanel1, (f_PrettyPre12 = new PrettyPre , $setHTML(f_PrettyPre12, (sb_1 = new StringBuilder , sb_1.string += '\\u2003@UiHandler({\"btnContinue1\", \"btnContinue2\", \"btnContinue3\"})<br> void onNextStep(ClickEvent e){<br> \\u2003stepper.nextStep();<br> }<br><br> @UiHandler({\"btnPrev1\", \"btnPrev2\", \"btnPrev3\"})<br> void onPrevStep(ClickEvent e){<br> \\u2003stepper.prevStep();<br> }<br><br> @UiHandler(\"btnContinue3\")<br> void onFinish(ClickEvent e){<br> \\u2003MaterialToast.fireToast(\"All done.\");<br> }<br>' , new OnlyToBeUsedInGeneratedCodeStringBlessedAsSafeHtml(sb_1.string)).html) , setStyleName(f_PrettyPre12.element, 'lang-xml', true) , setStyleName(f_PrettyPre12.element, 'z-depth-1', true) , f_PrettyPre12));\n  return f_MaterialPanel1;\n}\n\nfunction SteppersView_BinderImpl$Widgets(owner){\n  this.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames1 = new SteppersView_BinderImpl$Widgets$1(this);\n  this.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames2 = new SteppersView_BinderImpl$Widgets$2(this);\n  this.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames3 = new SteppersView_BinderImpl$Widgets$3(this);\n  this.owner = owner;\n}\n\ndefineClass(859, 1, {}, SteppersView_BinderImpl$Widgets);\nvar Lgwt_material_design_demo_client_application_addins_steppers_SteppersView_1BinderImpl$Widgets_2_classLit = createForClass('gwt.material.design.demo.client.application.addins.steppers', 'SteppersView_BinderImpl/Widgets', 859);\nfunction SteppersView_BinderImpl$Widgets$1(this$1){\n  this.this$11 = this$1;\n}\n\ndefineClass(860, 1, $intern_50, SteppersView_BinderImpl$Widgets$1);\n_.onClick = function onClick_13(event_0){\n  $nextStep(this.this$11.owner.stepper);\n}\n;\nvar Lgwt_material_design_demo_client_application_addins_steppers_SteppersView_1BinderImpl$Widgets$1_2_classLit = createForClass('gwt.material.design.demo.client.application.addins.steppers', 'SteppersView_BinderImpl/Widgets/1', 860);\nfunction SteppersView_BinderImpl$Widgets$2(this$1){\n  this.this$11 = this$1;\n}\n\ndefineClass(861, 1, $intern_50, SteppersView_BinderImpl$Widgets$2);\n_.onClick = function onClick_14(event_0){\n  $prevStep(this.this$11.owner.stepper);\n}\n;\nvar Lgwt_material_design_demo_client_application_addins_steppers_SteppersView_1BinderImpl$Widgets$2_2_classLit = createForClass('gwt.material.design.demo.client.application.addins.steppers', 'SteppersView_BinderImpl/Widgets/2', 861);\nfunction SteppersView_BinderImpl$Widgets$3(this$1){\n  this.this$11 = this$1;\n}\n\ndefineClass(862, 1, $intern_50, SteppersView_BinderImpl$Widgets$3);\n_.onClick = function onClick_15(event_0){\n  $onFinish(this.this$11.owner);\n}\n;\nvar Lgwt_material_design_demo_client_application_addins_steppers_SteppersView_1BinderImpl$Widgets$3_2_classLit = createForClass('gwt.material.design.demo.client.application.addins.steppers', 'SteppersView_BinderImpl/Widgets/3', 862);\nfunction $get_Key$type$gwt$material$design$demo$client$application$addins$steppers$SteppersPresenter$_annotation$$none$$(this$static){\n  var result;\n  if (!this$static.singleton_Key$type$gwt$material$design$demo$client$application$addins$steppers$SteppersPresenter$_annotation$$none$$) {\n    result = new SteppersPresenter($get_Key$type$com$google$web$bindery$event$shared$EventBus$_annotation$$none$$($getFragment_com_google_web_bindery_event_shared(this$static.injector)), $get_Key$type$gwt$material$design$demo$client$application$addins$steppers$SteppersView$_annotation$$none$$(this$static), $get_Key$type$gwt$material$design$demo$client$application$addins$steppers$SteppersPresenter$MyProxy$_annotation$$none$$(this$static));\n    $automaticBind(($getFragment_com_gwtplatform_mvp_client(this$static.injector) , result), $get_Key$type$com$gwtplatform$mvp$client$AutobindDisable$_annotation$$none$$($getFragment_com_gwtplatform_mvp_client(this$static.injector)));\n    this$static.singleton_Key$type$gwt$material$design$demo$client$application$addins$steppers$SteppersPresenter$_annotation$$none$$ = result;\n  }\n  return this$static.singleton_Key$type$gwt$material$design$demo$client$application$addins$steppers$SteppersPresenter$_annotation$$none$$;\n}\n\nfunction $get_Key$type$gwt$material$design$demo$client$application$addins$steppers$SteppersView$_annotation$$none$$(this$static){\n  var result;\n  if (!this$static.singleton_Key$type$gwt$material$design$demo$client$application$addins$steppers$SteppersView$_annotation$$none$$) {\n    result = new SteppersView(new SteppersView_BinderImpl);\n    this$static.singleton_Key$type$gwt$material$design$demo$client$application$addins$steppers$SteppersView$_annotation$$none$$ = result;\n  }\n  return this$static.singleton_Key$type$gwt$material$design$demo$client$application$addins$steppers$SteppersView$_annotation$$none$$;\n}\n\ndefineClass(473, 1, $intern_55);\n_.onSuccess_0 = function onSuccess_1(){\n  $onSuccess_0(this.val$callback2, $get_Key$type$gwt$material$design$demo$client$application$addins$steppers$SteppersPresenter$_annotation$$none$$(this.this$11.this$01));\n}\n;\n$entry(onLoad_0)(2);\n\n//# sourceURL=gwtmaterialdemo-2.js\n")
