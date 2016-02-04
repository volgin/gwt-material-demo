$wnd.gwtmaterialdemo.runAsyncCallback1("function $initBubble(element, color_0, type_0){\n  $wnd.jQuery(document).ready(function(){\n    $wnd.jQuery(element).bubble({position:type_0, color:color_0});\n  }\n  );\n}\n\nfunction $setPosition_2(this$static, position){\n  $setCssName(this$static.positionMixin, position);\n}\n\nfunction MaterialBubble(){\n  MaterialWidget_0.call(this, $doc.createElement('span'));\n  $setClassName(($clinit_DOM() , this.element), 'bubble');\n  this.triangle = new MaterialWidget_0($doc.createElement('div'));\n  $setStyleName(this.triangle, 'triangle');\n  this.positionMixin = new CssNameMixin(this.triangle);\n  $add_13(this, this.triangle);\n  $setShadow((!this.shadowMixin && (this.shadowMixin = new ShadowMixin(this)) , this.shadowMixin), 1);\n}\n\ndefineClass(219, 22, $intern_61, MaterialBubble);\n_.onLoad = function onLoad_8(){\n  $initBubble(($clinit_DOM() , this.element), setupComputedBackgroundColor((!this.colorsMixin_0 && (this.colorsMixin_0 = new ColorsMixin(this)) , this.colorsMixin_0).bgColor), dynamicCast(this.positionMixin.style_0, 199).cssClass);\n}\n;\nvar Lgwt_material_design_addins_client_ui_MaterialBubble_2_classLit = createForClass('gwt.material.design.addins.client.ui', 'MaterialBubble', 219);\nfunction BubblePresenter(eventBus, view, proxy){\n  $clinit_BubblePresenter();\n  Presenter.call(this, eventBus, view, proxy, ($clinit_ApplicationPresenter() , SLOT_MainContent));\n}\n\ndefineClass(606, 56, $intern_54, BubblePresenter);\n_.onReveal = function onReveal_3(){\n  $clinit_SetPageTitleEvent();\n  $fireEvent_1(this, new SetPageTitleEvent('Bubble', 'Addin component for chat module, it display a good bubble view of messages withing the chat module.'));\n}\n;\nvar Lgwt_material_design_demo_client_application_addins_bubble_BubblePresenter_2_classLit = createForClass('gwt.material.design.demo.client.application.addins.bubble', 'BubblePresenter', 606);\nfunction BubbleView(){\n  ViewImpl.call(this);\n  $initWidget_0(this, $build_f_HTMLPanel1_2(new BubbleView_BinderImpl$Widgets));\n}\n\ndefineClass(777, 59, $intern_55, BubbleView);\nvar Lgwt_material_design_demo_client_application_addins_bubble_BubbleView_2_classLit = createForClass('gwt.material.design.demo.client.application.addins.bubble', 'BubbleView', 777);\nfunction BubbleView_BinderImpl(){\n}\n\ndefineClass(1001, 1, {}, BubbleView_BinderImpl);\nvar Lgwt_material_design_demo_client_application_addins_bubble_BubbleView_1BinderImpl_2_classLit = createForClass('gwt.material.design.demo.client.application.addins.bubble', 'BubbleView_BinderImpl', 1001);\nfunction $build_f_HTMLPanel1_2(this$static){\n  var __attachRecord__, f_HTMLPanel1, f_MaterialTitle2, f_PrettyPre3, f_MaterialTitle4, f_MaterialRow5, f_PrettyPre10, f_MaterialTitle11, f_MaterialCard12, f_PrettyPre42, sb, f_MaterialImage6, f_MaterialBubble7, f_MaterialLabel8, f_MaterialLabel9, sb_0, f_MaterialPanel13, f_MaterialIcon14, f_MaterialIcon15, f_MaterialCardContent16, f_MaterialRow17, f_MaterialRow22, f_MaterialRow27, f_MaterialRow32, f_MaterialRow37, sb_1, f_MaterialImage18, f_MaterialBubble19, f_MaterialLabel20, f_MaterialLabel21, f_MaterialImage23, f_MaterialBubble24, f_MaterialLabel25, f_MaterialLabel26, f_MaterialImage28, f_MaterialBubble29, f_MaterialLabel30, f_MaterialLabel31, f_MaterialImage33, f_MaterialBubble34, f_MaterialLabel35, f_MaterialLabel36, f_MaterialImage38, f_MaterialBubble39, f_MaterialLabel40, f_MaterialLabel41;\n  f_HTMLPanel1 = new HTMLPanel($html4_0(this$static.domId0, this$static.domId1, this$static.domId2, this$static.domId3, this$static.domId4, this$static.domId5, this$static.domId6, this$static.domId7).html);\n  __attachRecord__ = attachToDom(($clinit_DOM() , f_HTMLPanel1.element));\n  $get_0(this$static.domId0Element);\n  $get_0(this$static.domId1Element);\n  $get_0(this$static.domId2Element);\n  $get_0(this$static.domId3Element);\n  $get_0(this$static.domId4Element);\n  $get_0(this$static.domId5Element);\n  $get_0(this$static.domId6Element);\n  $get_0(this$static.domId7Element);\n  __attachRecord__.origParent?$insertBefore(__attachRecord__.origParent, __attachRecord__.element, __attachRecord__.origSibling):orphan(__attachRecord__.element);\n  $addAndReplaceElement_1(f_HTMLPanel1, (f_MaterialTitle2 = new MaterialTitle , $setInnerHTML($getElement(f_MaterialTitle2.header), 'Addins Usage') , $setText_9(f_MaterialTitle2.paragraph, 'In every gwt-material-addins components you may require to add the following namespace to the <ui:UIBinder> element') , f_MaterialTitle2), $get_0(this$static.domId0Element));\n  $addAndReplaceElement_1(f_HTMLPanel1, (f_PrettyPre3 = new PrettyPre , $setHTML(f_PrettyPre3, (sb = new StringBuilder , sb.string += \"xmlns:m.addins='urn:import:gwt.material.design.addins.client.ui'\" , new OnlyToBeUsedInGeneratedCodeStringBlessedAsSafeHtml(sb.string)).html) , setStyleName(f_PrettyPre3.element, 'lang-xml', true) , setStyleName(f_PrettyPre3.element, 'z-depth-1', true) , f_PrettyPre3), $get_0(this$static.domId1Element));\n  $addAndReplaceElement_1(f_HTMLPanel1, (f_MaterialTitle4 = new MaterialTitle , $setInnerHTML($getElement(f_MaterialTitle4.header), 'Usage') , $setText_9(f_MaterialTitle4.paragraph, \"You can position the bubble by adding : position='LEFT,RIGHT,TOP or BOTTOM'\") , f_MaterialTitle4), $get_0(this$static.domId2Element));\n  $addAndReplaceElement_1(f_HTMLPanel1, (f_MaterialRow5 = new MaterialRow , $add_13(f_MaterialRow5, (f_MaterialImage6 = new MaterialImage , $setTextColor_0((!f_MaterialImage6.colorsMixin_0 && (f_MaterialImage6.colorsMixin_0 = new ColorsMixin(f_MaterialImage6)) , f_MaterialImage6.colorsMixin_0), 'white') , f_MaterialImage6.element.style['height'] = '40px' , $setBackgroundColor_0((!f_MaterialImage6.colorsMixin_0 && (f_MaterialImage6.colorsMixin_0 = new ColorsMixin(f_MaterialImage6)) , f_MaterialImage6.colorsMixin_0), 'red') , f_MaterialImage6.element.style['marginTop'] = ($clinit_Style$Unit() , '8.0px') , $setShadow((!f_MaterialImage6.shadowMixin && (f_MaterialImage6.shadowMixin = new ShadowMixin(f_MaterialImage6)) , f_MaterialImage6.shadowMixin), 1) , f_MaterialImage6.element.style['marginRight'] = '12.0px' , f_MaterialImage6.element.style['width'] = '40px' , $setOn((!f_MaterialImage6.circleMixin && (f_MaterialImage6.circleMixin = new ToggleStyleMixin(f_MaterialImage6, 'circle')) , f_MaterialImage6.circleMixin), true) , $setFloat(f_MaterialImage6, ($clinit_Style$Float() , LEFT)) , $setUrl_3(f_MaterialImage6.imageMixin, 'https://mir-s3-cdn-cf.behance.net/project_modules/disp/1ccdd322433737.5631e853db4a9.png') , f_MaterialImage6)) , $add_13(f_MaterialRow5, (f_MaterialBubble7 = new MaterialBubble , $add_13(f_MaterialBubble7, (f_MaterialLabel8 = new MaterialLabel , $setInnerHTML(f_MaterialLabel8.element, 'Hello there, How are you doing?') , f_MaterialLabel8)) , $add_13(f_MaterialBubble7, (f_MaterialLabel9 = new MaterialLabel , $setInnerHTML(f_MaterialLabel9.element, '1/2/2016') , $setFontSize_0(f_MaterialLabel9.fontSizeMixin, '0.6em') , $setFloat(f_MaterialLabel9, RIGHT) , f_MaterialLabel9)) , $setPosition_2(f_MaterialBubble7, ($clinit_Position() , LEFT_5)) , $setTextColor_0((!f_MaterialBubble7.colorsMixin_0 && (f_MaterialBubble7.colorsMixin_0 = new ColorsMixin(f_MaterialBubble7)) , f_MaterialBubble7.colorsMixin_0), 'white') , $setBackgroundColor_0((!f_MaterialBubble7.colorsMixin_0 && (f_MaterialBubble7.colorsMixin_0 = new ColorsMixin(f_MaterialBubble7)) , f_MaterialBubble7.colorsMixin_0), 'red') , $setFloat(f_MaterialBubble7, LEFT) , f_MaterialBubble7)) , f_MaterialRow5.element.style['marginBottom'] = '0.0px' , undefined , f_MaterialRow5), $get_0(this$static.domId3Element));\n  $addAndReplaceElement_1(f_HTMLPanel1, (f_PrettyPre10 = new PrettyPre , $setHTML(f_PrettyPre10, (sb_0 = new StringBuilder , sb_0.string += '\\u2003&lt;m.addins:MaterialBubble backgroundColor=\"blue accent-1\" position=\"LEFT\" float=\"LEFT\"&gt;<br> \\u2003&lt;m:MaterialLabel text=\"Hello there, How are you doing?\"/&gt;<br> \\u2003&lt;m:MaterialLabel text=\"1/2/2016\" fontSize=\"0.6em\" float=\"RIGHT\"/&gt;<br> &lt;/m.addins:MaterialBubble&gt;<br>' , new OnlyToBeUsedInGeneratedCodeStringBlessedAsSafeHtml(sb_0.string)).html) , setStyleName(f_PrettyPre10.element, 'lang-xml', true) , setStyleName(f_PrettyPre10.element, 'z-depth-1', true) , f_PrettyPre10), $get_0(this$static.domId4Element));\n  $addAndReplaceElement_1(f_HTMLPanel1, (f_MaterialTitle11 = new MaterialTitle , $setInnerHTML($getElement(f_MaterialTitle11.header), 'Example') , $setText_9(f_MaterialTitle11.paragraph, 'Here is a sample card with chat feature implementing bubble addin component') , f_MaterialTitle11), $get_0(this$static.domId5Element));\n  $addAndReplaceElement_1(f_HTMLPanel1, (f_MaterialCard12 = new MaterialCard , $add_13(f_MaterialCard12, (f_MaterialPanel13 = new MaterialPanel , $add_13(f_MaterialPanel13, (f_MaterialIcon14 = new MaterialIcon , $setTextColor_0((!f_MaterialIcon14.colorsMixin_0 && (f_MaterialIcon14.colorsMixin_0 = new ColorsMixin(f_MaterialIcon14)) , f_MaterialIcon14.colorsMixin_0), 'white') , $setFloat(f_MaterialIcon14, RIGHT) , $setIconType_3(f_MaterialIcon14, ($clinit_IconType() , MORE_VERT)) , f_MaterialIcon14)) , $add_13(f_MaterialPanel13, (f_MaterialIcon15 = new MaterialIcon , $setTextColor_0((!f_MaterialIcon15.colorsMixin_0 && (f_MaterialIcon15.colorsMixin_0 = new ColorsMixin(f_MaterialIcon15)) , f_MaterialIcon15.colorsMixin_0), 'white') , $setFloat(f_MaterialIcon15, RIGHT) , $setIconType_3(f_MaterialIcon15, CLOSE) , f_MaterialIcon15)) , $setBackgroundColor_0((!f_MaterialPanel13.colorsMixin_0 && (f_MaterialPanel13.colorsMixin_0 = new ColorsMixin(f_MaterialPanel13)) , f_MaterialPanel13.colorsMixin_0), 'blue darken-2') , $setOverflow(f_MaterialPanel13, ($clinit_Style$Overflow() , HIDDEN_0)) , f_MaterialPanel13.element.style['padding'] = '12.0px' , f_MaterialPanel13)) , $add_13(f_MaterialCard12, (f_MaterialCardContent16 = new MaterialCardContent , $add_13(f_MaterialCardContent16, (f_MaterialRow17 = new MaterialRow , $add_13(f_MaterialRow17, (f_MaterialImage18 = new MaterialImage , f_MaterialImage18.element.style['height'] = '40px' , $setBackgroundColor_0((!f_MaterialImage18.colorsMixin_0 && (f_MaterialImage18.colorsMixin_0 = new ColorsMixin(f_MaterialImage18)) , f_MaterialImage18.colorsMixin_0), 'blue accent-1') , f_MaterialImage18.element.style['marginTop'] = '8.0px' , $setShadow((!f_MaterialImage18.shadowMixin && (f_MaterialImage18.shadowMixin = new ShadowMixin(f_MaterialImage18)) , f_MaterialImage18.shadowMixin), 1) , f_MaterialImage18.element.style['marginRight'] = '12.0px' , f_MaterialImage18.element.style['width'] = '40px' , $setOn((!f_MaterialImage18.circleMixin && (f_MaterialImage18.circleMixin = new ToggleStyleMixin(f_MaterialImage18, 'circle')) , f_MaterialImage18.circleMixin), true) , $setFloat(f_MaterialImage18, LEFT) , $setUrl_3(f_MaterialImage18.imageMixin, 'https://mir-s3-cdn-cf.behance.net/project_modules/disp/70e0a922433737.5631e83fc9429.png') , f_MaterialImage18)) , $add_13(f_MaterialRow17, (f_MaterialBubble19 = new MaterialBubble , $add_13(f_MaterialBubble19, (f_MaterialLabel20 = new MaterialLabel , $setInnerHTML(f_MaterialLabel20.element, 'Hello there, How are you doing?') , f_MaterialLabel20)) , $add_13(f_MaterialBubble19, (f_MaterialLabel21 = new MaterialLabel , $setInnerHTML(f_MaterialLabel21.element, '1/2/2016') , $setFontSize_0(f_MaterialLabel21.fontSizeMixin, '0.6em') , $setFloat(f_MaterialLabel21, RIGHT) , f_MaterialLabel21)) , $setPosition_2(f_MaterialBubble19, LEFT_5) , $setBackgroundColor_0((!f_MaterialBubble19.colorsMixin_0 && (f_MaterialBubble19.colorsMixin_0 = new ColorsMixin(f_MaterialBubble19)) , f_MaterialBubble19.colorsMixin_0), 'blue accent-1') , $setFloat(f_MaterialBubble19, LEFT) , f_MaterialBubble19)) , f_MaterialRow17.element.style['marginBottom'] = '0.0px' , f_MaterialRow17)) , $add_13(f_MaterialCardContent16, (f_MaterialRow22 = new MaterialRow , $add_13(f_MaterialRow22, (f_MaterialImage23 = new MaterialImage , f_MaterialImage23.element.style['height'] = '40px' , $setBackgroundColor_0((!f_MaterialImage23.colorsMixin_0 && (f_MaterialImage23.colorsMixin_0 = new ColorsMixin(f_MaterialImage23)) , f_MaterialImage23.colorsMixin_0), 'blue darken-3') , f_MaterialImage23.element.style['marginLeft'] = '12.0px' , f_MaterialImage23.element.style['marginTop'] = '8.0px' , $setShadow((!f_MaterialImage23.shadowMixin && (f_MaterialImage23.shadowMixin = new ShadowMixin(f_MaterialImage23)) , f_MaterialImage23.shadowMixin), 1) , f_MaterialImage23.element.style['width'] = '40px' , $setOn((!f_MaterialImage23.circleMixin && (f_MaterialImage23.circleMixin = new ToggleStyleMixin(f_MaterialImage23, 'circle')) , f_MaterialImage23.circleMixin), true) , $setFloat(f_MaterialImage23, RIGHT) , $setUrl_3(f_MaterialImage23.imageMixin, 'https://mir-s3-cdn-cf.behance.net/project_modules/disp/6ba40822433737.5632180017216.png') , f_MaterialImage23)) , $add_13(f_MaterialRow22, (f_MaterialBubble24 = new MaterialBubble , $add_13(f_MaterialBubble24, (f_MaterialLabel25 = new MaterialLabel , $setInnerHTML(f_MaterialLabel25.element, 'Hi there, Im fine, thank you. How about you?') , f_MaterialLabel25)) , $add_13(f_MaterialBubble24, (f_MaterialLabel26 = new MaterialLabel , $setInnerHTML(f_MaterialLabel26.element, '1/2/2016') , $setFontSize_0(f_MaterialLabel26.fontSizeMixin, '0.6em') , $setFloat(f_MaterialLabel26, RIGHT) , f_MaterialLabel26)) , $setPosition_2(f_MaterialBubble24, RIGHT_6) , $setTextColor_0((!f_MaterialBubble24.colorsMixin_0 && (f_MaterialBubble24.colorsMixin_0 = new ColorsMixin(f_MaterialBubble24)) , f_MaterialBubble24.colorsMixin_0), 'white') , $setBackgroundColor_0((!f_MaterialBubble24.colorsMixin_0 && (f_MaterialBubble24.colorsMixin_0 = new ColorsMixin(f_MaterialBubble24)) , f_MaterialBubble24.colorsMixin_0), 'blue darken-3') , $setFloat(f_MaterialBubble24, RIGHT) , f_MaterialBubble24)) , f_MaterialRow22.element.style['marginBottom'] = '0.0px' , f_MaterialRow22)) , $add_13(f_MaterialCardContent16, (f_MaterialRow27 = new MaterialRow , $add_13(f_MaterialRow27, (f_MaterialImage28 = new MaterialImage , f_MaterialImage28.element.style['height'] = '40px' , $setBackgroundColor_0((!f_MaterialImage28.colorsMixin_0 && (f_MaterialImage28.colorsMixin_0 = new ColorsMixin(f_MaterialImage28)) , f_MaterialImage28.colorsMixin_0), 'blue darken-3') , f_MaterialImage28.element.style['marginLeft'] = '12.0px' , f_MaterialImage28.element.style['marginTop'] = '8.0px' , $setShadow((!f_MaterialImage28.shadowMixin && (f_MaterialImage28.shadowMixin = new ShadowMixin(f_MaterialImage28)) , f_MaterialImage28.shadowMixin), 1) , f_MaterialImage28.element.style['width'] = '40px' , $setOn((!f_MaterialImage28.circleMixin && (f_MaterialImage28.circleMixin = new ToggleStyleMixin(f_MaterialImage28, 'circle')) , f_MaterialImage28.circleMixin), true) , $setFloat(f_MaterialImage28, RIGHT) , $setUrl_3(f_MaterialImage28.imageMixin, 'https://mir-s3-cdn-cf.behance.net/project_modules/disp/6ba40822433737.5632180017216.png') , f_MaterialImage28)) , $add_13(f_MaterialRow27, (f_MaterialBubble29 = new MaterialBubble , $add_13(f_MaterialBubble29, (f_MaterialLabel30 = new MaterialLabel , $setInnerHTML(f_MaterialLabel30.element, 'Me too, Im doing good.') , f_MaterialLabel30)) , $add_13(f_MaterialBubble29, (f_MaterialLabel31 = new MaterialLabel , $setInnerHTML(f_MaterialLabel31.element, '1/2/2016') , $setFontSize_0(f_MaterialLabel31.fontSizeMixin, '0.6em') , $setFloat(f_MaterialLabel31, RIGHT) , f_MaterialLabel31)) , $setPosition_2(f_MaterialBubble29, RIGHT_6) , $setTextColor_0((!f_MaterialBubble29.colorsMixin_0 && (f_MaterialBubble29.colorsMixin_0 = new ColorsMixin(f_MaterialBubble29)) , f_MaterialBubble29.colorsMixin_0), 'white') , $setBackgroundColor_0((!f_MaterialBubble29.colorsMixin_0 && (f_MaterialBubble29.colorsMixin_0 = new ColorsMixin(f_MaterialBubble29)) , f_MaterialBubble29.colorsMixin_0), 'blue darken-3') , $setFloat(f_MaterialBubble29, RIGHT) , f_MaterialBubble29)) , f_MaterialRow27.element.style['marginBottom'] = '0.0px' , f_MaterialRow27)) , $add_13(f_MaterialCardContent16, (f_MaterialRow32 = new MaterialRow , $add_13(f_MaterialRow32, (f_MaterialImage33 = new MaterialImage , f_MaterialImage33.element.style['height'] = '40px' , $setBackgroundColor_0((!f_MaterialImage33.colorsMixin_0 && (f_MaterialImage33.colorsMixin_0 = new ColorsMixin(f_MaterialImage33)) , f_MaterialImage33.colorsMixin_0), 'blue accent-1') , f_MaterialImage33.element.style['marginTop'] = '8.0px' , $setShadow((!f_MaterialImage33.shadowMixin && (f_MaterialImage33.shadowMixin = new ShadowMixin(f_MaterialImage33)) , f_MaterialImage33.shadowMixin), 1) , f_MaterialImage33.element.style['marginRight'] = '12.0px' , f_MaterialImage33.element.style['width'] = '40px' , $setOn((!f_MaterialImage33.circleMixin && (f_MaterialImage33.circleMixin = new ToggleStyleMixin(f_MaterialImage33, 'circle')) , f_MaterialImage33.circleMixin), true) , $setFloat(f_MaterialImage33, LEFT) , $setUrl_3(f_MaterialImage33.imageMixin, 'https://mir-s3-cdn-cf.behance.net/project_modules/disp/70e0a922433737.5631e83fc9429.png') , f_MaterialImage33)) , $add_13(f_MaterialRow32, (f_MaterialBubble34 = new MaterialBubble , $add_13(f_MaterialBubble34, (f_MaterialLabel35 = new MaterialLabel , $setInnerHTML(f_MaterialLabel35.element, 'Would you want to go to Philippines?') , f_MaterialLabel35)) , $add_13(f_MaterialBubble34, (f_MaterialLabel36 = new MaterialLabel , $setInnerHTML(f_MaterialLabel36.element, '1/2/2016') , $setFontSize_0(f_MaterialLabel36.fontSizeMixin, '0.6em') , $setFloat(f_MaterialLabel36, RIGHT) , f_MaterialLabel36)) , $setPosition_2(f_MaterialBubble34, LEFT_5) , $setBackgroundColor_0((!f_MaterialBubble34.colorsMixin_0 && (f_MaterialBubble34.colorsMixin_0 = new ColorsMixin(f_MaterialBubble34)) , f_MaterialBubble34.colorsMixin_0), 'blue accent-1') , $setFloat(f_MaterialBubble34, LEFT) , f_MaterialBubble34)) , f_MaterialRow32.element.style['marginBottom'] = '0.0px' , f_MaterialRow32)) , $add_13(f_MaterialCardContent16, (f_MaterialRow37 = new MaterialRow , $add_13(f_MaterialRow37, (f_MaterialImage38 = new MaterialImage , f_MaterialImage38.element.style['height'] = '40px' , $setBackgroundColor_0((!f_MaterialImage38.colorsMixin_0 && (f_MaterialImage38.colorsMixin_0 = new ColorsMixin(f_MaterialImage38)) , f_MaterialImage38.colorsMixin_0), 'blue darken-3') , f_MaterialImage38.element.style['marginLeft'] = '12.0px' , f_MaterialImage38.element.style['marginTop'] = '8.0px' , $setShadow((!f_MaterialImage38.shadowMixin && (f_MaterialImage38.shadowMixin = new ShadowMixin(f_MaterialImage38)) , f_MaterialImage38.shadowMixin), 1) , f_MaterialImage38.element.style['width'] = '40px' , $setOn((!f_MaterialImage38.circleMixin && (f_MaterialImage38.circleMixin = new ToggleStyleMixin(f_MaterialImage38, 'circle')) , f_MaterialImage38.circleMixin), true) , $setFloat(f_MaterialImage38, RIGHT) , $setUrl_3(f_MaterialImage38.imageMixin, 'https://mir-s3-cdn-cf.behance.net/project_modules/disp/6ba40822433737.5632180017216.png') , f_MaterialImage38)) , $add_13(f_MaterialRow37, (f_MaterialBubble39 = new MaterialBubble , $add_13(f_MaterialBubble39, (f_MaterialLabel40 = new MaterialLabel , $setInnerHTML(f_MaterialLabel40.element, 'Yes of course, I want to visit Philippines and take a tour.') , f_MaterialLabel40)) , $add_13(f_MaterialBubble39, (f_MaterialLabel41 = new MaterialLabel , $setInnerHTML(f_MaterialLabel41.element, '1/2/2016') , $setFontSize_0(f_MaterialLabel41.fontSizeMixin, '0.6em') , $setFloat(f_MaterialLabel41, RIGHT) , f_MaterialLabel41)) , $setPosition_2(f_MaterialBubble39, RIGHT_6) , $setTextColor_0((!f_MaterialBubble39.colorsMixin_0 && (f_MaterialBubble39.colorsMixin_0 = new ColorsMixin(f_MaterialBubble39)) , f_MaterialBubble39.colorsMixin_0), 'white') , $setBackgroundColor_0((!f_MaterialBubble39.colorsMixin_0 && (f_MaterialBubble39.colorsMixin_0 = new ColorsMixin(f_MaterialBubble39)) , f_MaterialBubble39.colorsMixin_0), 'blue darken-3') , $setFloat(f_MaterialBubble39, RIGHT) , f_MaterialBubble39)) , f_MaterialRow37.element.style['marginBottom'] = '0.0px' , f_MaterialRow37)) , f_MaterialCardContent16)) , $setBackgroundColor_0((!f_MaterialCard12.colorsMixin_0 && (f_MaterialCard12.colorsMixin_0 = new ColorsMixin(f_MaterialCard12)) , f_MaterialCard12.colorsMixin_0), 'blue') , f_MaterialCard12.element.style['marginLeft'] = '24.0px' , undefined , f_MaterialCard12.element.style['marginTop'] = '24.0px' , undefined , $setGrid((!f_MaterialCard12.gridMixin_0 && (f_MaterialCard12.gridMixin_0 = new GridMixin(f_MaterialCard12)) , f_MaterialCard12.gridMixin_0), 'l5 m12 s12') , setStyleName(f_MaterialCard12.element, 'no-padding', true) , f_MaterialCard12), $get_0(this$static.domId6Element));\n  $addAndReplaceElement_1(f_HTMLPanel1, (f_PrettyPre42 = new PrettyPre , $setHTML(f_PrettyPre42, (sb_1 = new StringBuilder , sb_1.string += '\\u2003&lt;m:MaterialCard backgroundColor=\"blue\" grid=\"l5 m12 s12\" marginTop=\"24\" marginLeft=\"24\"&gt;<br> &lt;m:MaterialPanel backgroundColor=\"blue darken-2\" overflow=\"HIDDEN\" padding=\"12\"&gt;<br> \\u2003&lt;m:MaterialIcon iconType=\"MORE_VERT\" float=\"RIGHT\" textColor=\"white\"/&gt;<br> \\u2003&lt;m:MaterialIcon iconType=\"CLOSE\" float=\"RIGHT\" textColor=\"white\"/&gt;<br> &lt;/m:MaterialPanel&gt;<br> &lt;m:MaterialCardContent&gt;<br> \\u2003&lt;m:MaterialRow marginBottom=\"0\"&gt;<br> \\u2003\\u2003&lt;m:MaterialImage backgroundColor=\"blue accent-1\" marginRight=\"12\" marginTop=\"8\" float=\"LEFT\" width=\"40px\" height=\"40px\" shadow=\"1\" circle=\"true\" url=\"https://mir-s3-cdn-cf.behance.net/project_modules/disp/70e0a922433737.5631e83fc9429.png\"/&gt;<br> \\u2003\\u2003&lt;m.addins:MaterialBubble backgroundColor=\"blue accent-1\" position=\"LEFT\" float=\"LEFT\"&gt;<br> \\u2003\\u2003\\u2003&lt;m:MaterialLabel text=\"Hello there, How are you doing?\"/&gt;<br> \\u2003\\u2003\\u2003&lt;m:MaterialLabel text=\"1/2/2016\" fontSize=\"0.6em\" float=\"RIGHT\"/&gt;<br> \\u2003\\u2003&lt;/m.addins:MaterialBubble&gt;<br> \\u2003&lt;/m:MaterialRow&gt;<br> \\u2003&lt;m:MaterialRow marginBottom=\"0\"&gt;<br> \\u2003\\u2003&lt;m:MaterialImage backgroundColor=\"blue darken-3\" marginLeft=\"12\" marginTop=\"8\" float=\"RIGHT\" width=\"40px\" height=\"40px\" shadow=\"1\" circle=\"true\" url=\"https://mir-s3-cdn-cf.behance.net/project_modules/disp/6ba40822433737.5632180017216.png\"/&gt;<br> \\u2003\\u2003&lt;m.addins:MaterialBubble textColor=\"white\" backgroundColor=\"blue darken-3\" position=\"RIGHT\" float=\"RIGHT\"&gt;<br> \\u2003\\u2003\\u2003&lt;m:MaterialLabel text=\"Hi there, Im fine, thank you. How about you?\"/&gt;<br> \\u2003\\u2003\\u2003&lt;m:MaterialLabel text=\"1/2/2016\" fontSize=\"0.6em\" float=\"RIGHT\"/&gt;<br> \\u2003\\u2003&lt;/m.addins:MaterialBubble&gt;<br> \\u2003&lt;/m:MaterialRow&gt;<br> \\u2003&lt;m:MaterialRow marginBottom=\"0\"&gt;<br> \\u2003\\u2003&lt;m:MaterialImage backgroundColor=\"blue darken-3\" marginLeft=\"12\" marginTop=\"8\" float=\"RIGHT\" width=\"40px\" height=\"40px\" shadow=\"1\" circle=\"true\" url=\"https://mir-s3-cdn-cf.behance.net/project_modules/disp/6ba40822433737.5632180017216.png\"/&gt;<br> \\u2003\\u2003&lt;m.addins:MaterialBubble textColor=\"white\" backgroundColor=\"blue darken-3\" position=\"RIGHT\" float=\"RIGHT\"&gt;<br> \\u2003\\u2003\\u2003&lt;m:MaterialLabel text=\"Me too, Im doing good.\"/&gt;<br> \\u2003\\u2003\\u2003&lt;m:MaterialLabel text=\"1/2/2016\" fontSize=\"0.6em\" float=\"RIGHT\"/&gt;<br> \\u2003\\u2003&lt;/m.addins:MaterialBubble&gt;<br> \\u2003&lt;/m:MaterialRow&gt;<br> \\u2003&lt;m:MaterialRow marginBottom=\"0\"&gt;<br> \\u2003\\u2003&lt;m:MaterialImage backgroundColor=\"blue accent-1\" marginRight=\"12\" marginTop=\"8\" float=\"LEFT\" width=\"40px\" height=\"40px\" shadow=\"1\" circle=\"true\" url=\"https://mir-s3-cdn-cf.behance.net/project_modules/disp/70e0a922433737.5631e83fc9429.png\"/&gt;<br> \\u2003\\u2003&lt;m.addins:MaterialBubble backgroundColor=\"blue accent-1\" position=\"LEFT\" float=\"LEFT\"&gt;<br> \\u2003\\u2003\\u2003&lt;m:MaterialLabel text=\"Would you want to go to Philippines?\"/&gt;<br> \\u2003\\u2003\\u2003&lt;m:MaterialLabel text=\"1/2/2016\" fontSize=\"0.6em\" float=\"RIGHT\"/&gt;<br> \\u2003\\u2003&lt;/m.addins:MaterialBubble&gt;<br> \\u2003&lt;/m:MaterialRow&gt;<br> \\u2003&lt;m:MaterialRow marginBottom=\"0\"&gt;<br> \\u2003\\u2003&lt;m:MaterialImage backgroundColor=\"blue darken-3\" marginLeft=\"12\" marginTop=\"8\" float=\"RIGHT\" width=\"40px\" height=\"40px\" shadow=\"1\" circle=\"true\" url=\"https://mir-s3-cdn-cf.behance.net/project_modules/disp/6ba40822433737.5632180017216.png\"/&gt;<br> \\u2003\\u2003&lt;m.addins:MaterialBubble textColor=\"white\" backgroundColor=\"blue darken-3\" position=\"RIGHT\" float=\"RIGHT\"&gt;<br> \\u2003\\u2003\\u2003&lt;m:MaterialLabel text=\"Yes of course, I want to visit Philippines and take a tour.\"/&gt;<br>  \\u2003\\u2003\\u2003&lt;m:MaterialLabel text=\"1/2/2016\" fontSize=\"0.6em\" float=\"RIGHT\"/&gt;<br> \\u2003\\u2003&lt;/m.addins:MaterialBubble&gt;<br> \\u2003&lt;/m:MaterialRow&gt;<br> &lt;/m:MaterialCardContent&gt;<br> &lt;/m:MaterialCard&gt;<br>' , new OnlyToBeUsedInGeneratedCodeStringBlessedAsSafeHtml(sb_1.string)).html) , setStyleName(f_PrettyPre42.element, 'lang-xml', true) , setStyleName(f_PrettyPre42.element, 'z-depth-1', true) , f_PrettyPre42), $get_0(this$static.domId7Element));\n  return f_HTMLPanel1;\n}\n\nfunction BubbleView_BinderImpl$Widgets(){\n  this.domId0 = $createUniqueId($doc);\n  this.domId1 = $createUniqueId($doc);\n  this.domId2 = $createUniqueId($doc);\n  this.domId3 = $createUniqueId($doc);\n  this.domId4 = $createUniqueId($doc);\n  this.domId5 = $createUniqueId($doc);\n  this.domId6 = $createUniqueId($doc);\n  this.domId7 = $createUniqueId($doc);\n  this.domId0Element = new LazyDomElement(this.domId0);\n  this.domId1Element = new LazyDomElement(this.domId1);\n  this.domId2Element = new LazyDomElement(this.domId2);\n  this.domId3Element = new LazyDomElement(this.domId3);\n  this.domId4Element = new LazyDomElement(this.domId4);\n  this.domId5Element = new LazyDomElement(this.domId5);\n  this.domId6Element = new LazyDomElement(this.domId6);\n  this.domId7Element = new LazyDomElement(this.domId7);\n}\n\ndefineClass(1002, 1, {}, BubbleView_BinderImpl$Widgets);\nvar Lgwt_material_design_demo_client_application_addins_bubble_BubbleView_1BinderImpl$Widgets_2_classLit = createForClass('gwt.material.design.demo.client.application.addins.bubble', 'BubbleView_BinderImpl/Widgets', 1002);\nfunction $html4_0(arg0, arg1, arg2, arg3, arg4, arg5, arg6, arg7){\n  var sb;\n  sb = new StringBuilder;\n  sb.string += \"<span id='\";\n  $append_3(sb, htmlEscape(arg0));\n  sb.string += \"'><\\/span> <span id='\";\n  $append_3(sb, htmlEscape(arg1));\n  sb.string += \"'><\\/span> <span id='\";\n  $append_3(sb, htmlEscape(arg2));\n  sb.string += \"'><\\/span> <span id='\";\n  $append_3(sb, htmlEscape(arg3));\n  sb.string += \"'><\\/span> <span id='\";\n  $append_3(sb, htmlEscape(arg4));\n  sb.string += \"'><\\/span> <span id='\";\n  $append_3(sb, htmlEscape(arg5));\n  sb.string += \"'><\\/span> <span id='\";\n  $append_3(sb, htmlEscape(arg6));\n  sb.string += \"'><\\/span> <span id='\";\n  $append_3(sb, htmlEscape(arg7));\n  sb.string += \"'><\\/span>\";\n  return new OnlyToBeUsedInGeneratedCodeStringBlessedAsSafeHtml(sb.string);\n}\n\nfunction $get_Key$type$gwt$material$design$demo$client$application$addins$bubble$BubblePresenter$_annotation$$none$$(this$static){\n  var result;\n  if (!this$static.singleton_Key$type$gwt$material$design$demo$client$application$addins$bubble$BubblePresenter$_annotation$$none$$) {\n    result = new BubblePresenter($get_Key$type$com$google$web$bindery$event$shared$EventBus$_annotation$$none$$($getFragment_com_google_web_bindery_event_shared(this$static.injector)), $get_Key$type$gwt$material$design$demo$client$application$addins$bubble$BubbleView$_annotation$$none$$(this$static), $get_Key$type$gwt$material$design$demo$client$application$addins$bubble$BubblePresenter$MyProxy$_annotation$$none$$(this$static));\n    $automaticBind(($getFragment_com_gwtplatform_mvp_client(this$static.injector) , result), $get_Key$type$com$gwtplatform$mvp$client$AutobindDisable$_annotation$$none$$($getFragment_com_gwtplatform_mvp_client(this$static.injector)));\n    this$static.singleton_Key$type$gwt$material$design$demo$client$application$addins$bubble$BubblePresenter$_annotation$$none$$ = result;\n  }\n  return this$static.singleton_Key$type$gwt$material$design$demo$client$application$addins$bubble$BubblePresenter$_annotation$$none$$;\n}\n\nfunction $get_Key$type$gwt$material$design$demo$client$application$addins$bubble$BubbleView$_annotation$$none$$(this$static){\n  var result;\n  if (!this$static.singleton_Key$type$gwt$material$design$demo$client$application$addins$bubble$BubbleView$_annotation$$none$$) {\n    result = new BubbleView(new BubbleView_BinderImpl);\n    this$static.singleton_Key$type$gwt$material$design$demo$client$application$addins$bubble$BubbleView$_annotation$$none$$ = result;\n  }\n  return this$static.singleton_Key$type$gwt$material$design$demo$client$application$addins$bubble$BubbleView$_annotation$$none$$;\n}\n\ndefineClass(515, 1, $intern_79);\n_.onSuccess_0 = function onSuccess_0(){\n  $onSuccess_0(this.val$callback2, $get_Key$type$gwt$material$design$demo$client$application$addins$bubble$BubblePresenter$_annotation$$none$$(this.this$11.this$01));\n}\n;\n$entry(onLoad_0)(1);\n\n//# sourceURL=gwtmaterialdemo-1.js\n")
