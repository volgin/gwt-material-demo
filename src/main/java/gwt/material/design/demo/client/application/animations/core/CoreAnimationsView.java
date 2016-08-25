package gwt.material.design.demo.client.application.animations.core;

/*
 * #%L
 * GwtMaterial
 * %%
 * Copyright (C) 2015 - 2016 GwtMaterialDesign
 * %%
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 * 
 *      http://www.apache.org/licenses/LICENSE-2.0
 * 
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * #L%
 */


import com.google.gwt.event.dom.client.ClickEvent;
import com.google.gwt.event.logical.shared.ValueChangeEvent;
import com.google.gwt.uibinder.client.UiBinder;
import com.google.gwt.uibinder.client.UiField;
import com.google.gwt.uibinder.client.UiHandler;
import com.google.gwt.user.client.ui.Widget;
import com.gwtplatform.mvp.client.ViewImpl;
import gwt.material.design.client.ui.MaterialButton;
import gwt.material.design.client.ui.MaterialCard;
import gwt.material.design.client.ui.MaterialListBox;
import gwt.material.design.client.ui.MaterialToast;
import gwt.material.design.client.ui.animate.MaterialAnimation;
import gwt.material.design.client.ui.animate.MaterialAnimator;
import gwt.material.design.client.ui.animate.Transition;

import javax.inject.Inject;


public class CoreAnimationsView extends ViewImpl implements CoreAnimationsPresenter.MyView {
    interface Binder extends UiBinder<Widget, CoreAnimationsView> {
    }

    @UiField
    MaterialCard card;

    @UiField
    MaterialButton iconHeart, iconCallback, iconState;

    @UiField
    MaterialListBox lstAnimations;

    @Inject
    CoreAnimationsView(Binder uiBinder) {
        initWidget(uiBinder.createAndBindUi(this));
    }

    @Override
    protected void onAttach() {
        super.onAttach();
        lstAnimations.addItem("bounce", "bounce");
        lstAnimations.addItem("flash", "flash");
        lstAnimations.addItem("pulse", "pulse");
        lstAnimations.addItem("rubberBand", "rubberBand");
        lstAnimations.addItem("shake", "shake");
        lstAnimations.addItem("headShake", "headShake");
        lstAnimations.addItem("swing", "swing");
        lstAnimations.addItem("tada", "tada");
        lstAnimations.addItem("wobble", "wobble");
        lstAnimations.addItem("jello", "jello");
        lstAnimations.addItem("bounceIn", "bounceIn");
        lstAnimations.addItem("bounceInDown", "bounceInDown");
        lstAnimations.addItem("bounceInLeft", "bounceInLeft");
        lstAnimations.addItem("bounceInRight", "bounceInRight");
        lstAnimations.addItem("bounceInUp", "bounceInUp");
        lstAnimations.addItem("bounceOut", "bounceOut");
        lstAnimations.addItem("bounceOutDown", "bounceOutDown");
        lstAnimations.addItem("bounceOutLeft", "bounceOutLeft");
        lstAnimations.addItem("bounceOutRight", "bounceOutRight");
        lstAnimations.addItem("bounceOutUp", "bounceOutUp");
        lstAnimations.addItem("fadeIn", "fadeIn");
        lstAnimations.addItem("fadeInDown", "fadeInDown");
        lstAnimations.addItem("fadeInDownBig", "fadeInDownBig");
        lstAnimations.addItem("fadeInLeft", "fadeInLeft");
        lstAnimations.addItem("fadeInLeftBig", "fadeInLeftBig");
        lstAnimations.addItem("fadeInRight", "fadeInRight");
        lstAnimations.addItem("fadeInRightBig", "fadeInRightBig");
        lstAnimations.addItem("fadeInUp", "fadeInUp");
        lstAnimations.addItem("fadeInUpBig", "fadeInUpBig");
        lstAnimations.addItem("fadeOut", "fadeOut");
        lstAnimations.addItem("fadeOutDown", "fadeOutDown");
        lstAnimations.addItem("fadeOutDownBig", "fadeOutDownBig");
        lstAnimations.addItem("fadeOutLeft", "fadeOutLeft");
        lstAnimations.addItem("fadeOutLeftBig", "fadeOutLeftBig");
        lstAnimations.addItem("fadeOutRight", "fadeOutRight");
        lstAnimations.addItem("fadeOutRightBig", "fadeOutRightBig");
        lstAnimations.addItem("fadeOutUp", "fadeOutUp");
        lstAnimations.addItem("fadeOutUpBig", "fadeOutUpBig");
        lstAnimations.addItem("flipInX", "flipInX");
        lstAnimations.addItem("flipInY", "flipInY");
        lstAnimations.addItem("flipOutX", "flipOutX");
        lstAnimations.addItem("flipOutY", "flipOutY");
        lstAnimations.addItem("lightSpeedIn", "lightSpeedIn");
        lstAnimations.addItem("lightSpeedOut", "lightSpeedOut");
        lstAnimations.addItem("rotateIn", "rotateIn");
        lstAnimations.addItem("rotateInDownLeft", "rotateInDownLeft");
        lstAnimations.addItem("rotateInDownRight", "rotateInDownRight");
        lstAnimations.addItem("rotateInUpLeft", "rotateInUpLeft");
        lstAnimations.addItem("rotateInUpRight", "rotateInUpRight");
        lstAnimations.addItem("rotateOut", "rotateOut");
        lstAnimations.addItem("rotateOutDownLeft", "rotateOutDownLeft");
        lstAnimations.addItem("rotateOutDownRight", "rotateOutDownRight");
        lstAnimations.addItem("rotateOutUpLeft", "rotateOutUpLeft");
        lstAnimations.addItem("rotateOutUpRight", "rotateOutUpRight");
        lstAnimations.addItem("hinge", "hinge");
        lstAnimations.addItem("rollIn", "rollIn");
        lstAnimations.addItem("rollOut", "rollOut");
        lstAnimations.addItem("zoomIn", "zoomIn");
        lstAnimations.addItem("zoomInDown", "zoomInDown");
        lstAnimations.addItem("zoomInLeft", "zoomInLeft");
        lstAnimations.addItem("zoomInRight", "zoomInRight");
        lstAnimations.addItem("zoomInUp", "zoomInUp");
        lstAnimations.addItem("zoomOut", "zoomOut");
        lstAnimations.addItem("zoomOutDown", "zoomOutDown");
        lstAnimations.addItem("zoomOutLeft", "zoomOutLeft");
        lstAnimations.addItem("zoomOutRight", "zoomOutRight");
        lstAnimations.addItem("zoomOutUp", "zoomOutUp");
        lstAnimations.addItem("slideInDown", "slideInDown");
        lstAnimations.addItem("slideInLeft", "slideInLeft");
        lstAnimations.addItem("slideInRight", "slideInRight");
        lstAnimations.addItem("slideInUp", "slideInUp");
        lstAnimations.addItem("slideOutDown", "slideOutDown");
        lstAnimations.addItem("slideOutLeft", "slideOutLeft");
        lstAnimations.addItem("slideOutRight", "slideOutRight");
        lstAnimations.addItem("slideOutUp", "slideOutUp");

    }

    @UiHandler("btnAnimate")
    void onAnimateCoreTransition(ClickEvent e){
        animate();
    }

    @UiHandler("lstAnimations")
    void onAnimateWithListBox(ValueChangeEvent<String> e){
        animate();
    }

    private void animate(){
        String value = lstAnimations.getSelectedValue();
        Transition transition = Transition.fromStyleName(value);
        MaterialAnimator.animate(transition, card, 1000);
    }

    @UiHandler("btnAnimateInfinite")
    void onAnimateInfinite(ClickEvent e) {
        MaterialAnimator.animate(Transition.PULSE, iconHeart, 1000, true);
    }

    @UiHandler("btnStopAnimation")
    void onStopAnimation(ClickEvent e) {
        MaterialAnimator.stopAnimation(iconHeart);
    }

    @UiHandler("btnAnimateCallback")
    void onCallback(ClickEvent e) {
        Runnable callback = new Runnable() {
            @Override
            public void run() {
                MaterialToast.fireToast("Animation is finished");
            }
        };
        MaterialAnimator.animate(Transition.FLIPINX, iconCallback, 200, callback);
    }

    @UiHandler("btnAnimateStateful")
    void onStateful(ClickEvent e) {
        new MaterialAnimation().durationMillis(1000)
                .delayMillis(100)
                .transition(Transition.WOBBLE)
                .animate(iconState);
    }
}
