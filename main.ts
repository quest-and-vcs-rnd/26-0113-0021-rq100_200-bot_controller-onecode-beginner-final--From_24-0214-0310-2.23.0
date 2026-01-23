// // jwc 26-0117-2030 Obsolete function setup_System_Variables__UserCustomizable_Yes__Func () {
// // jwc 26-0117-2030 Obsolete     quest_Note_3.quest_Show_String_For_Note_Big_Func(
// // jwc 26-0117-2030 Obsolete     "THIS STACK CUSTOMIZABLE_YES"
// // jwc 26-0117-2030 Obsolete     )
// // jwc 26-0117-2030 Obsolete }
// // jwc 24-0214-0310-rq100-onecode-bot_controller-beginner-final.ts
function screen_PlotNewDot_ClearOldDot_WithHeartbeat_Func (screen_x_new_num: number, screen_y_new_num: number) {
    led.plotBrightness(screen_X_Old_Num, screen_Y_Old_Num, screen_XY_Brightness_Old_Num)
    screen_X_Old_Num = screen_x_new_num
    screen_Y_Old_Num = screen_y_new_num
    screen_XY_Brightness_Old_Num = led.pointBrightness(screen_x_new_num, screen_y_new_num)
    led.plotBrightness(screen_x_new_num, screen_y_new_num, screenBrightness_Heartbeat_Count_Int)
}
function settingsOverride_FlashMem_Save_Func () {
    if (true) {
        // // jwc 26-0122-1230: Phase 2A - Expanded to save all 10 config settings
        if (false) {
            quest_Note_1.quest_Show_String_For_Note_Small_Func(
            "\\/ For Testing"
            )
            network_GroupChannel_MyBotAndController_Base0_Int = 12
        }
        quest_Note_1.quest_Show_String_For_Note_Small_Func(
        "Appears 15 char max, can have '_, upper/lower case"
        )
        quest_Note_1.quest_Show_String_For_Note_Small_Func(
        "Reflashing Code seems to clear Flash"
        )
        // // jwc 26-0122-1230: Save all 10 configuration settings to flash
        flashstorage.put("groupChanl", convertToText(config_groupChanl))
        flashstorage.put("motorFwd", convertToText(config_motorFwd))
        flashstorage.put("motorBwd", convertToText(config_motorBwd))
        flashstorage.put("motorTurn", convertToText(config_motorTurn))
        flashstorage.put("turboFwd", convertToText(config_turboFwd))
        flashstorage.put("turboBwd", convertToText(config_turboBwd))
        flashstorage.put("turboTurn", convertToText(config_turboTurn))
        flashstorage.put("servoMin", convertToText(config_servoMin))
        flashstorage.put("servoMax", convertToText(config_servoMax))
        flashstorage.put("servoInc", convertToText(config_servoInc))
        // // jwc 26-0122-1230: Also update legacy channel variable for backward compatibility
        network_GroupChannel_MyBotAndController_Base0_Int = config_groupChanl
        flashstorage.put("netGroupChannel", convertToText(network_GroupChannel_MyBotAndController_Base0_Int))
        serial.writeLine("* 26-0122-1230: Config saved: Ch=" + config_groupChanl + " MotorFwd=" + config_motorFwd + " FlashPairs=" + flashstorage.size())
    }
}
function config_SendAllValues_Func () {
    // // jwc 26-0122-1400: Phase 2A Step 5 - Send all configuration values via radio
    serial.writeLine("* CFG SEND ALL: Sending all 10 config values")
    // // Send all 10 configuration values as individual radio messages
    radio.sendString("VAL:groupChanl=" + config_groupChanl)
    radio.sendString("VAL:motorFwd=" + config_motorFwd)
    radio.sendString("VAL:motorBwd=" + config_motorBwd)
    radio.sendString("VAL:motorTurn=" + config_motorTurn)
    radio.sendString("VAL:turboFwd=" + config_turboFwd)
    radio.sendString("VAL:turboBwd=" + config_turboBwd)
    radio.sendString("VAL:turboTurn=" + config_turboTurn)
    radio.sendString("VAL:servoMin=" + config_servoMin)
    radio.sendString("VAL:servoMax=" + config_servoMax)
    radio.sendString("VAL:servoInc=" + config_servoInc)
    serial.writeLine("* CFG SEND ALL: Complete")
}
function setup_System_Variables_2__UserCustomizable_Yes__Func () {
    if (true) {
        quest_Note_3.quest_Show_String_For_Note_Big_Func(
        "THIS STACK CUSTOMIZABLE_YES"
        )
        quest_Note_3.quest_Show_String_For_Note_Small_Func(
        "Variable & Constant: Settings"
        )
        if (true) {
            quest_Note_1.quest_Show_String_For_Note_Small_Func(
            "Following Gears are not used in Level_1 but need these null declarations... "
            )
            quest_Note_1.quest_Show_String_For_Note_Small_Func(
            "...to allow Level_2 code to compile (though unused in Level_1)"
            )
            // jwc needed to fix compiler issue
            motor_Power_Gear_01_MAX = 0
            // jwc needed to fix compiler issue
            motor_Power_Gear_02_MAX = 0
        }
        if (true) {
            wuKong.mecanumWheel(
            wuKong.ServoList.S1,
            wuKong.ServoList.S3,
            wuKong.ServoList.S0,
            wuKong.ServoList.S2
            )
        }
        if (false) {
            quest_Note_1.quest_Show_String_For_Note_Small_Func(
            "GeekServo: For servo_360: start at 180"
            )
            quest_Note_1.quest_Show_String_For_Note_Small_Func(
            "Start w/ Label 'GeekServo' facing out for Servo_Arm_Left, for 180-degrees to face forward for optimum range"
            )
            servoArm_Now_Degrees_Int = 180
            wuKong.setServoAngle(wuKong.ServoTypeList._360, wuKong.ServoList.S7, servoArm_Now_Degrees_Int)
            wuKong.setServoAngle(wuKong.ServoTypeList._360, wuKong.ServoList.S6, servoArm_Now_Degrees_Int)
            if (false) {
                quest_Note_1.quest_Show_String_For_Note_Small_Func(
                "Obsolete?"
                )
                servoArm_DOWN_MAX_DEGREES_INT = 0
                servoArm_UP_MAX_DEGREES_INT = 90
                servoArm_Left_UP_DEGREES_INT = 20
                servoArm_Right_UP_DEGREES_INT = 45
                servoArm_Left_Up_Bool = true
                servoArm_Right_Up_Bool = true
            }
        }
        if (true) {
            // // jwc 26-0122-1300: Phase 2A Step 3 - Replace hardcoded servo settings with config variables
            servoArm_Increment_Degrees_Int = config_servoInc
            servoArm_Left_Now_Degrees_Int = 0
            servoArm_Right_Now_Degrees_Int = 0
            servoArm_MIN_DEGREES_INT = config_servoMin
            servoArm_MAX_DEGREES_INT = config_servoMax
            quest_Note_1.quest_Show_String_For_Note_Small_Func(
            "For ServoArm Buttons C/D: 1000ms :), 500ms"
            )
            controller__Button_TriggerDelay__MSEC_INT = 500
        }
        if (true) {
            quest_Dashboard.quest_Show_Oled_Cleared_Func(
            )
            quest_Dashboard.quest_Show_String_For_Oled_SmallFont_Func(
            "Hello  : )",
            0,
            0
            )
        }
    }
    quest_Note_6.quest_Show_String_For_Note_Big_Func(
    "Level 2.1: Variables_n_Constants_Yes"
    )
}
function screen_Clear_Func () {
    for (let index_X = 0; index_X <= 4; index_X++) {
        for (let index_Y = 0; index_Y <= 4; index_Y++) {
            if (led.point(index_X, index_Y)) {
                led.unplot(index_X, index_Y)
            }
        }
    }
}
input.onLogoEvent(TouchButtonEvent.LongPressed, function () {
    if (true) {
        quest_Note_3.quest_Show_String_For_Note_Big_Func(
        "Software Reset"
        )
        if (true) {
            quest_Note_1.quest_Show_String_For_Note_Small_Func(
            "Give time for other stacks to complete under different concurrent 'SW_ModeState' ..."
            )
            quest_Note_1.quest_Show_String_For_Note_Small_Func(
            "... to not conflict with following LED Display"
            )
            _system_Sw_ModeState__Now__Id_Int = _system_Sw_ModeState__Reset__ID_INT
            quest_Note_3.quest_Show_String_For_Note_Small_Func(
            "Continue Current State for Time Below"
            )
            // 1.0 too slow, 0.5 not bad, try 0.20
            quest_Timer.quest_Set_ContinueCurrentState_CountdownTimer_Func(0.2, quest_Time_Units_Enum.Seconds)
        }
        basic.showLeds(`
            # . # . #
            . # # # .
            # # . # #
            . # # # .
            # . # . #
            `)
        if (true) {
            quest_Note_3.quest_Show_String_For_Note_Small_Func(
            "Continue Current State for Time Below"
            )
            quest_Timer.quest_Set_ContinueCurrentState_CountdownTimer_Func(3, quest_Time_Units_Enum.Seconds)
        }
        control.reset()
    }
})
function bot_Servo_Motors_Basic_Fn (network_ReceivedString_FromControllerJoystick_Str_ParamIn: string) {
    // // jwc 26-0122-1300: Phase 2A Step 3 - Replace hardcoded values with config variables
    if (network_ReceivedString_FromControllerJoystick_Str_ParamIn == "forward") {
        images.createImage(`
            . . # . .
            . # # # .
            . . # . .
            . . # . .
            . . . . .
            `).showImage(0, 0)
        quest_Note_2.quest_Show_String_For_Note_Big_Func(
        "Below Moddable: Motor Power_% [+/-100% max]"
        )
        quest_Motors.quest_Set_PowerMotorsViaBlueRedBlackPins_Func(
        quest_PortGroup_BlueRedBlack_PortIds_Enum.S1_MotorWheel_Left__S0_MotorWheel_Right,
        config_motorFwd,
        config_motorFwd
        )
    } else if (network_ReceivedString_FromControllerJoystick_Str_ParamIn == "backward") {
        images.createImage(`
            . . . . .
            . . # . .
            . . # . .
            . # # # .
            . . # . .
            `).showImage(0, 0)
        quest_Note_2.quest_Show_String_For_Note_Big_Func(
        "Below Moddable: Motor Power_% [+/-100% max]"
        )
        quest_Motors.quest_Set_PowerMotorsViaBlueRedBlackPins_Func(
        quest_PortGroup_BlueRedBlack_PortIds_Enum.S1_MotorWheel_Left__S0_MotorWheel_Right,
        0 - config_motorBwd,
        0 - config_motorBwd
        )
    } else if (network_ReceivedString_FromControllerJoystick_Str_ParamIn == "left") {
        images.createImage(`
            . . . . .
            . # . . .
            # # # # .
            . # . . .
            . . . . .
            `).showImage(0, 0)
        quest_Note_2.quest_Show_String_For_Note_Big_Func(
        "Below Moddable: Motor Power_% [+/-100% max]"
        )
        quest_Motors.quest_Set_PowerMotorsViaBlueRedBlackPins_Func(
        quest_PortGroup_BlueRedBlack_PortIds_Enum.S1_MotorWheel_Left__S0_MotorWheel_Right,
        0,
        config_motorTurn
        )
    } else if (network_ReceivedString_FromControllerJoystick_Str_ParamIn == "right") {
        images.createImage(`
            . . . . .
            . . . # .
            . # # # #
            . . . # .
            . . . . .
            `).showImage(0, 0)
        quest_Note_2.quest_Show_String_For_Note_Big_Func(
        "Below Moddable: Motor Power_% [+/-100% max]"
        )
        quest_Motors.quest_Set_PowerMotorsViaBlueRedBlackPins_Func(
        quest_PortGroup_BlueRedBlack_PortIds_Enum.S1_MotorWheel_Left__S0_MotorWheel_Right,
        config_motorTurn,
        0
        )
    } else if (network_ReceivedString_FromControllerJoystick_Str_ParamIn == "stop") {
        images.createImage(`
            . . . . .
            . . . . .
            . . # . .
            . . . . .
            . . . . .
            `).showImage(0, 0)
        // //jwc o roboQuest.powerMotorsViaBlueRedBlackPins(PortGroup_BlueRedBlack__PortIds__Enum.S1_MotorLeft__S0_MotorRight, motor_Power_ZERO_INT, motor_Power_ZERO_INT)
        quest_Motors.quest_Set_PowerMotorsViaBlueRedBlackPins_Func(
        quest_PortGroup_BlueRedBlack_PortIds_Enum.S1_MotorWheel_Left__S0_MotorWheel_Right,
        0,
        0
        )
    }
}
function bot_Servo_Motors_Turbo_Fn (network_ReceivedString_FromControllerJoystick_Str_ParamIn: string) {
    // // jwc 26-0122-1300: Phase 2A Step 3 - Replace hardcoded turbo values with config variables
    if (network_ReceivedString_FromControllerJoystick_Str_ParamIn == "forward_turbo") {
        images.createImage(`
            . . # . .
            . # # # .
            # . # . #
            . . # . .
            . . # . .
            `).showImage(0, 0)
        quest_Note_2.quest_Show_String_For_Note_Big_Func(
        "Below Moddable: Forward-Turbo"
        )
        // //jwc o roboQuest.powerMotorsViaBlueRedBlackPins(PortGroup_BlueRedBlack__PortIds__Enum.S1_MotorLeft__S0_MotorRight, motor_Power_ZERO_INT, motor_Power_ZERO_INT)
        quest_Motors.quest_Set_PowerMotorsViaBlueRedBlackPins_Func(
        quest_PortGroup_BlueRedBlack_PortIds_Enum.S1_MotorWheel_Left__S0_MotorWheel_Right,
        config_turboFwd,
        config_turboFwd
        )
    } else if (network_ReceivedString_FromControllerJoystick_Str_ParamIn == "backward_turbo") {
        images.createImage(`
            . . # . .
            . . # . .
            # . # . #
            . # # # .
            . . # . .
            `).showImage(0, 0)
        quest_Note_2.quest_Show_String_For_Note_Big_Func(
        "Below Moddable: Backward-Turbo"
        )
        // //jwc o roboQuest.powerMotorsViaBlueRedBlackPins(PortGroup_BlueRedBlack__PortIds__Enum.S1_MotorLeft__S0_MotorRight, motor_Power_ZERO_INT, motor_Power_ZERO_INT)
        quest_Motors.quest_Set_PowerMotorsViaBlueRedBlackPins_Func(
        quest_PortGroup_BlueRedBlack_PortIds_Enum.S1_MotorWheel_Left__S0_MotorWheel_Right,
        0 - config_turboBwd,
        0 - config_turboBwd
        )
    } else if (network_ReceivedString_FromControllerJoystick_Str_ParamIn == "left_turbo") {
        images.createImage(`
            . . # . .
            . # . . .
            # # # # #
            . # . . .
            . . # . .
            `).showImage(0, 0)
        quest_Note_2.quest_Show_String_For_Note_Big_Func(
        "Below Moddable: Left-Turbo"
        )
        // //jwc o roboQuest.powerMotorsViaBlueRedBlackPins(PortGroup_BlueRedBlack__PortIds__Enum.S1_MotorLeft__S0_MotorRight, motor_Power_ZERO_INT, motor_Power_ZERO_INT)
        quest_Motors.quest_Set_PowerMotorsViaBlueRedBlackPins_Func(
        quest_PortGroup_BlueRedBlack_PortIds_Enum.S1_MotorWheel_Left__S0_MotorWheel_Right,
        0,
        config_turboTurn
        )
    } else if (network_ReceivedString_FromControllerJoystick_Str_ParamIn == "right_turbo") {
        images.createImage(`
            . . # . .
            . . . # .
            # # # # #
            . . . # .
            . . # . .
            `).showImage(0, 0)
        quest_Note_2.quest_Show_String_For_Note_Big_Func(
        "Below Moddable: Right-Turbo"
        )
        // //jwc o roboQuest.powerMotorsViaBlueRedBlackPins(PortGroup_BlueRedBlack__PortIds__Enum.S1_MotorLeft__S0_MotorRight, motor_Power_ZERO_INT, motor_Power_ZERO_INT)
        quest_Motors.quest_Set_PowerMotorsViaBlueRedBlackPins_Func(
        quest_PortGroup_BlueRedBlack_PortIds_Enum.S1_MotorWheel_Left__S0_MotorWheel_Right,
        config_turboTurn,
        0
        )
    }
}
input.onButtonPressed(Button.A, function () {
    if (true) {
        quest_Note_1.quest_Show_String_For_Note_Small_Func(
        "Important Coding Note: Only 1 Input Stack for Button A||B Allowed for 'main/main_backend.ts'"
        )
        if (_system_Sw_ModeState__Now__Id_Int == _system_Sw_ModeState__Edit_GroupChannelNum__ID_INT) {
            quest_Note_3.quest_Show_String_For_Note_Big_Func(
            "Buttons A & B Dual Usage: Usage #2: Given Network_Paired, Increment 'GroupChannelNum' when in Respective Edit Mode"
            )
            device_Mode_Edit_GroupChannelNum_ButtonA_Func()
        } else if (_system_Hw_DeviceType__Now__Id_Int == _system_Hw_DeviceType__Null__ID_INT) {
            quest_Note_3.quest_Show_String_For_Note_Big_Func(
            "Buttons A & B Dual Usage: Usage #1: Designate this micro:bit as Controller_Joystick to *Start* Network_Pairing w/ Bot"
            )
            quest_Note_1.quest_Show_String_For_Note_Big_Func(
            "Code Activation of Controller_Joystick:: 1of2 : 1st micro:bit Being Pressed of Button A||B is Designated as Device:Controller_Joystick"
            )
            _system_Hw_DeviceType__Now__Id_Int = _system_Hw_DeviceType__Controller_Joystick__ID_INT
            _system_Sw_ModeState__Now__Id_Int = _system_Sw_ModeState__Run__AndShow_02_GroupChannelNum__ID_INT
            screen_Clear_Func()
            setup_ControllerOnly_Func()
        }
        quest_Note_6.quest_Show_String_For_Note_Big_Func(
        "Level 2.1: Variables_n_Constants_Yes"
        )
    }
})
input.onGesture(Gesture.LogoUp, function () {
    if (false) {
        quest_Note_6.quest_Show_String_For_Note_Big_Func(
        "CONTROLLER: DISABLE ~ OBSOLETE"
        )
        // //jwc o if (device_Type_Controller_Bool && (_system_Sw_ModeState__Now__Id_Int == _system_Sw_ModeState__Run__AndShow_01_DeviceType__ID_INT || _system_Sw_ModeState__Now__Id_Int == _system_Sw_ModeState__Run__AndShow_02_GroupChannelNum__ID_INT)) {
        if (_system_Hw_DeviceType__Now__Id_Int == _system_Hw_DeviceType__Controller_Joystick__ID_INT && (_system_Sw_ModeState__Now__Id_Int == _system_Sw_ModeState__Run__AndShow_01_DeviceType__ID_INT || _system_Sw_ModeState__Now__Id_Int == _system_Sw_ModeState__Run__AndShow_02_GroupChannelNum__ID_INT)) {
            images.createImage(`
                . # . # .
                . # . # .
                . . . . .
                . . . . .
                . . . . .
                `).showImage(0, 0)
            radio.sendString("arm_090__up_full")
            quest_Note_1.quest_Show_String_For_Note_Small_Func(
            "Following 0-Reset to Allow Idle/Stop Afterwards"
            )
            controller__Polar_OriginAtCenter__IdleCount_Int = 0
            controller__Polar_OriginAtCenter__IdleCount_ModulusNetworkThrottle_Now_Int = controller__Polar_OriginAtCenter__IdleCount_ModulusNetworkThrottle_ADD_INT
        }
    }
})
function bot_Servo_Arms__Position_Relative__Fn (network_ReceivedString_FromControllerJoystick_Str_ParamIn: string) {
    if (network_ReceivedString_FromControllerJoystick_Str_ParamIn == "arm_000__down") {
        images.createImage(`
            . . . . .
            . . . . .
            . . . . .
            . # . # .
            # . . . #
            `).showImage(0, 0)
        quest_Note_1.quest_Show_String_For_Note_Small_Func(
        "If [0|360] is jittery, insure battery at 75% power min."
        )
        quest_Note_1.quest_Show_String_For_Note_Small_Func(
        "GeekServo-360-Degrees-2kg:360-degrees(not 180-degrees)"
        )
        if (true) {
            quest_Note_2.quest_Show_String_For_Note_Big_Func(
            "Below Moddable: S7_ServoArm_Left"
            )
            servoArm_Left_Now_Degrees_Int += servoArm_Increment_Degrees_Int * -1
            servoArm_Left_Now_Degrees_Int = Math.constrain(servoArm_Left_Now_Degrees_Int, servoArm_MIN_DEGREES_INT, servoArm_MAX_DEGREES_INT)
            quest_Motors.quest_Set_Degrees_By_Integer_ForServoArm_SMALL_Func(
            quest_PortSingle_ServoArmBeam_PortId_Enum.S7_ServoArm_Left,
            servoArm_Left_Now_Degrees_Int,
            quest_Debug_Show_Enum.Dashboard_OLED
            )
        }
        if (true) {
            quest_Note_2.quest_Show_String_For_Note_Big_Func(
            "Below Moddable: S6_ServoArm_Right"
            )
            servoArm_Right_Now_Degrees_Int += servoArm_Increment_Degrees_Int * -1
            servoArm_Right_Now_Degrees_Int = Math.constrain(servoArm_Right_Now_Degrees_Int, servoArm_MIN_DEGREES_INT, servoArm_MAX_DEGREES_INT)
            quest_Motors.quest_Set_Degrees_By_Integer_ForServoArm_SMALL_Func(
            quest_PortSingle_ServoArmBeam_PortId_Enum.S6_ServoArm_Right,
            servoArm_Right_Now_Degrees_Int,
            quest_Debug_Show_Enum.Dashboard_OLED
            )
        }
    } else if (network_ReceivedString_FromControllerJoystick_Str_ParamIn == "arm_045__up_half") {
        images.createImage(`
            # . . . #
            . # . # .
            . . . . .
            . . . . .
            . . . . .
            `).showImage(0, 0)
        quest_Note_1.quest_Show_String_For_Note_Small_Func(
        "If [0|360] is jittery, insure battery at 75% power min."
        )
        quest_Note_1.quest_Show_String_For_Note_Small_Func(
        "GeekServo-360-Degrees-2kg:360-degrees(not 180-degrees)"
        )
        if (true) {
            quest_Note_2.quest_Show_String_For_Note_Big_Func(
            "Below Moddable: S7_ServoArm_Left"
            )
            servoArm_Left_Now_Degrees_Int += servoArm_Increment_Degrees_Int * 1
            servoArm_Left_Now_Degrees_Int = Math.constrain(servoArm_Left_Now_Degrees_Int, servoArm_MIN_DEGREES_INT, servoArm_MAX_DEGREES_INT)
            quest_Motors.quest_Set_Degrees_By_Integer_ForServoArm_SMALL_Func(
            quest_PortSingle_ServoArmBeam_PortId_Enum.S7_ServoArm_Left,
            servoArm_Left_Now_Degrees_Int,
            quest_Debug_Show_Enum.Dashboard_OLED
            )
        }
        if (true) {
            quest_Note_2.quest_Show_String_For_Note_Big_Func(
            "Below Moddable: S6_ServoArm_Right"
            )
            servoArm_Right_Now_Degrees_Int += servoArm_Increment_Degrees_Int * 1
            servoArm_Right_Now_Degrees_Int = Math.constrain(servoArm_Right_Now_Degrees_Int, servoArm_MIN_DEGREES_INT, servoArm_MAX_DEGREES_INT)
            quest_Motors.quest_Set_Degrees_By_Integer_ForServoArm_SMALL_Func(
            quest_PortSingle_ServoArmBeam_PortId_Enum.S6_ServoArm_Right,
            servoArm_Right_Now_Degrees_Int,
            quest_Debug_Show_Enum.Dashboard_OLED
            )
        }
    }
}
function bot_Servo_Arms__Position_Absolute__Fn (network_ReceivedString_FromControllerJoystick_Str_ParamIn: string) {
    if (network_ReceivedString_FromControllerJoystick_Str_ParamIn == "arm_000__down") {
        images.createImage(`
            . . . . .
            . . . . .
            # # . # #
            . . . . .
            . . . . .
            `).showImage(0, 0)
        quest_Note_1.quest_Show_String_For_Note_Small_Func(
        "If [0|360] is jittery, insure battery at 75% power min."
        )
        quest_Note_1.quest_Show_String_For_Note_Small_Func(
        "GeekServo-360-Degrees-2kg:360-degrees(not 180-degrees)"
        )
        quest_Note_2.quest_Show_String_For_Note_Big_Func(
        "Below Moddable: S7_ServoArm_Left"
        )
        quest_Motors.quest_Set_Degrees_By_Menu_ForServoArm_SMALL_Func(
        quest_PortSingle_ServoArmBeam_PortId_Enum.S7_ServoArm_Left,
        quest_ServoArm_DegreesInDirection_Enum.Degree_000_Down,
        quest_Debug_Show_Enum.Dashboard_OLED
        )
        quest_Note_2.quest_Show_String_For_Note_Big_Func(
        "Below Moddable: S6_ServoArm_Right"
        )
        quest_Motors.quest_Set_Degrees_By_Menu_ForServoArm_SMALL_Func(
        quest_PortSingle_ServoArmBeam_PortId_Enum.S6_ServoArm_Right,
        quest_ServoArm_DegreesInDirection_Enum.Degree_000_Down,
        quest_Debug_Show_Enum.Dashboard_OLED
        )
    } else if (network_ReceivedString_FromControllerJoystick_Str_ParamIn == "arm_045__up_half") {
        images.createImage(`
            # . . . #
            . # . # .
            . . . . .
            . . . . .
            . . . . .
            `).showImage(0, 0)
        quest_Note_1.quest_Show_String_For_Note_Small_Func(
        "If [0|360] is jittery, insure battery at 75% power min."
        )
        quest_Note_1.quest_Show_String_For_Note_Small_Func(
        "GeekServo-360-Degrees-2kg:360-degrees(not 180-degrees)"
        )
        quest_Note_2.quest_Show_String_For_Note_Big_Func(
        "Below Moddable: S7_ServoArm_Left"
        )
        quest_Motors.quest_Set_Degrees_By_Menu_ForServoArm_SMALL_Func(
        quest_PortSingle_ServoArmBeam_PortId_Enum.S7_ServoArm_Left,
        quest_ServoArm_DegreesInDirection_Enum.Degree_090_Up_Half,
        quest_Debug_Show_Enum.Dashboard_OLED
        )
        quest_Note_2.quest_Show_String_For_Note_Big_Func(
        "Below Moddable: S6_ServoArm_Right"
        )
        quest_Motors.quest_Set_Degrees_By_Menu_ForServoArm_SMALL_Func(
        quest_PortSingle_ServoArmBeam_PortId_Enum.S6_ServoArm_Right,
        quest_ServoArm_DegreesInDirection_Enum.Degree_090_Up_Half,
        quest_Debug_Show_Enum.Dashboard_OLED
        )
    } else if (network_ReceivedString_FromControllerJoystick_Str_ParamIn == "arm_090__up_full") {
        images.createImage(`
            . # . # .
            . # . # .
            . . . . .
            . . . . .
            . . . . .
            `).showImage(0, 0)
        quest_Note_1.quest_Show_String_For_Note_Small_Func(
        "If [0|360] is jittery, insure battery at 75% power min."
        )
        quest_Note_1.quest_Show_String_For_Note_Small_Func(
        "GeekServo-360-Degrees-2kg:360-degrees(not 180-degrees)"
        )
        quest_Note_2.quest_Show_String_For_Note_Big_Func(
        "Below Moddable: S7_ServoArm_Left"
        )
        quest_Motors.quest_Set_Degrees_By_Menu_ForServoArm_SMALL_Func(
        quest_PortSingle_ServoArmBeam_PortId_Enum.S7_ServoArm_Left,
        quest_ServoArm_DegreesInDirection_Enum.Degree_180_Up_Full,
        quest_Debug_Show_Enum.Dashboard_OLED
        )
        quest_Note_2.quest_Show_String_For_Note_Big_Func(
        "Below Moddable: S6_ServoArm_Right"
        )
        quest_Motors.quest_Set_Degrees_By_Menu_ForServoArm_SMALL_Func(
        quest_PortSingle_ServoArmBeam_PortId_Enum.S6_ServoArm_Right,
        quest_ServoArm_DegreesInDirection_Enum.Degree_180_Up_Full,
        quest_Debug_Show_Enum.Dashboard_OLED
        )
    }
}
function settingsOverride_FlashMem_Load_Func () {
    // // jwc 26-0122-1230: Phase 2A - Expanded to load all 10 config settings
    serial.writeLine("* 26-0122-1230: Loading config from flash: Pairs=" + flashstorage.size())
    // // jwc 26-0122-1230: Load all 10 configuration settings from flash (with defaults)
    config_groupChanl = parseFloat(flashstorage.getOrDefault("groupChanl", convertToText(config_groupChanl)))
    config_motorFwd = parseFloat(flashstorage.getOrDefault("motorFwd", convertToText(config_motorFwd)))
    config_motorBwd = parseFloat(flashstorage.getOrDefault("motorBwd", convertToText(config_motorBwd)))
    config_motorTurn = parseFloat(flashstorage.getOrDefault("motorTurn", convertToText(config_motorTurn)))
    config_turboFwd = parseFloat(flashstorage.getOrDefault("turboFwd", convertToText(config_turboFwd)))
    config_turboBwd = parseFloat(flashstorage.getOrDefault("turboBwd", convertToText(config_turboBwd)))
    config_turboTurn = parseFloat(flashstorage.getOrDefault("turboTurn", convertToText(config_turboTurn)))
    config_servoMin = parseFloat(flashstorage.getOrDefault("servoMin", convertToText(config_servoMin)))
    config_servoMax = parseFloat(flashstorage.getOrDefault("servoMax", convertToText(config_servoMax)))
    config_servoInc = parseFloat(flashstorage.getOrDefault("servoInc", convertToText(config_servoInc)))
    // // jwc 26-0122-1230: Update legacy channel variable for backward compatibility
    network_GroupChannel_MyBotAndController_Base0_Int = config_groupChanl
    serial.writeLine("* 26-0122-1230: Config loaded: Ch=" + config_groupChanl + " MotorFwd=" + config_motorFwd + " ServoInc=" + config_servoInc)
}
input.onButtonPressed(Button.AB, function () {
    // //jwc o if (device_Type_Controller_Bool || device_Type_Bot_Bool) {
    if (_system_Hw_DeviceType__Now__Id_Int == _system_Hw_DeviceType__Bot__ID_INT || _system_Hw_DeviceType__Now__Id_Int == _system_Hw_DeviceType__Controller_Joystick__ID_INT) {
        // //jwc o device_Mode_Edit__GroupChannelNum__Bool = !(device_Mode_Edit__GroupChannelNum__Bool)
        // //jwc o if (!(device_Mode_Edit__GroupChannelNum__Bool)) {
        // //jwc o     quest_Note_2.quest_Show_String_For_Note_Small_Func(
        // //jwc o         "If just left 'groupChannel_Edit_Mode', then Reset 'radio set group'"
        // //jwc o     )
        // //jwc o     network_GroupChannel_MyBotAndController_Base0_Int = network_GroupChannel_MyBotAndController_Base0__Digit_Tens__Int * 10 + network_GroupChannel_MyBotAndController_Base0__Digit_Ones__Int * 1
        // //jwc o     radio.setGroup(network_GroupChannel_MyBotAndController_Base0_Int)
        // //jwc o } else {
        // //jwc o     quest_Note_2.quest_Show_String_For_Note_Small_Func(
        // //jwc o         "If just entered 'groupChannel_Edit_Mode':"
        // //jwc o     )
        // //jwc o     network_GroupChannel_MyBotAndController_Base0__Digit_Tens__Int = Math.idiv(network_GroupChannel_MyBotAndController_Base0_Int, 10)
        // //jwc o     network_GroupChannel_MyBotAndController_Base0__Digit_Ones__Int = network_GroupChannel_MyBotAndController_Base0_Int % 10
        // //jwc o }
        // //jwc o network_GroupChannel_Show_Func()
        if (_system_Sw_ModeState__Now__Id_Int == _system_Sw_ModeState__Run__AndShow_01_DeviceType__ID_INT || _system_Sw_ModeState__Now__Id_Int == _system_Sw_ModeState__Run__AndShow_02_GroupChannelNum__ID_INT) {
            quest_Note_1.quest_Show_String_For_Note_Small_Func(
            "Just entered the above_conditioned 'if then' state and will process accordingly as needed:"
            )
            _system_Sw_ModeState__Now__Id_Int = _system_Sw_ModeState__Edit_GroupChannelNum__ID_INT
            network_GroupChannel_MyBotAndController_Base0__Digit_Hundreds__Int = Math.idiv(network_GroupChannel_MyBotAndController_Base0_Int, 100)
            network_GroupChannel_MyBotAndController_Base0__Digit_Tens__Int = Math.idiv(network_GroupChannel_MyBotAndController_Base0_Int - network_GroupChannel_MyBotAndController_Base0__Digit_Hundreds__Int * 100, 10)
            network_GroupChannel_MyBotAndController_Base0__Digit_Ones__Int = Math.idiv(network_GroupChannel_MyBotAndController_Base0_Int - (network_GroupChannel_MyBotAndController_Base0__Digit_Hundreds__Int * 100 + network_GroupChannel_MyBotAndController_Base0__Digit_Tens__Int * 10), 1)
            if (true) {
                quest_Note_1.quest_Show_String_For_Note_Small_Func(
                "Since not enough input buttons to allow manual override of hundreds_digit, will override hundreds_digit to always be 0, to stabilize at a known value"
                )
                network_GroupChannel_MyBotAndController_Base0__Digit_Hundreds__Int = 0
            }
        } else if (_system_Sw_ModeState__Now__Id_Int == _system_Sw_ModeState__Edit_GroupChannelNum__ID_INT) {
            quest_Note_1.quest_Show_String_For_Note_Small_Func(
            "Just entered the above_conditioned 'if then' state and will process accordingly as needed:"
            )
            _system_Sw_ModeState__Now__Id_Int = _system_Sw_ModeState__Run__AndShow_01_DeviceType__ID_INT
            network_GroupChannel_MyBotAndController_Base0_Int = network_GroupChannel_MyBotAndController_Base0__Digit_Hundreds__Int * 100 + (network_GroupChannel_MyBotAndController_Base0__Digit_Tens__Int * 10 + network_GroupChannel_MyBotAndController_Base0__Digit_Ones__Int * 1)
            radio.setGroup(network_GroupChannel_MyBotAndController_Base0_Int)
            settingsOverride_FlashMem_Save_Func()
        }
    } else if (_system_Hw_DeviceType__Now__Id_Int == _system_Hw_DeviceType__Null__ID_INT) {
        // //jwc debug: serial.writeLine("HW_Null: SW_Null >> SW_Edit")
        // //jwc debug: serial.writeLine("HW_Null: SW_Edit >> SW_Null")
        if (_system_Sw_ModeState__Now__Id_Int == _system_Sw_ModeState__Null__ID_INT) {
            quest_Note_1.quest_Show_String_For_Note_Small_Func(
            "Just entered the above_conditioned 'if then' state and will process accordingly as needed:"
            )
            _system_Sw_ModeState__Now__Id_Int = _system_Sw_ModeState__Edit_GroupChannelNum__ID_INT
            network_GroupChannel_MyBotAndController_Base0__Digit_Hundreds__Int = Math.idiv(network_GroupChannel_MyBotAndController_Base0_Int, 100)
            network_GroupChannel_MyBotAndController_Base0__Digit_Tens__Int = Math.idiv(network_GroupChannel_MyBotAndController_Base0_Int - network_GroupChannel_MyBotAndController_Base0__Digit_Hundreds__Int * 100, 10)
            network_GroupChannel_MyBotAndController_Base0__Digit_Ones__Int = Math.idiv(network_GroupChannel_MyBotAndController_Base0_Int - (network_GroupChannel_MyBotAndController_Base0__Digit_Hundreds__Int * 100 + network_GroupChannel_MyBotAndController_Base0__Digit_Tens__Int * 10), 1)
            if (true) {
                quest_Note_1.quest_Show_String_For_Note_Small_Func(
                "Since not enough input buttons to allow manual override of hundreds_digit, will override hundreds_digit to always be 0, to stabilize at a known value"
                )
                network_GroupChannel_MyBotAndController_Base0__Digit_Hundreds__Int = 0
            }
        } else if (_system_Sw_ModeState__Now__Id_Int == _system_Sw_ModeState__Edit_GroupChannelNum__ID_INT) {
            quest_Note_1.quest_Show_String_For_Note_Small_Func(
            "Just entered the above_conditioned 'if then' state and will process accordingly as needed:"
            )
            _system_Sw_ModeState__Now__Id_Int = _system_Sw_ModeState__Null__ID_INT
            network_GroupChannel_MyBotAndController_Base0_Int = network_GroupChannel_MyBotAndController_Base0__Digit_Hundreds__Int * 100 + (network_GroupChannel_MyBotAndController_Base0__Digit_Tens__Int * 10 + network_GroupChannel_MyBotAndController_Base0__Digit_Ones__Int * 1)
            radio.setGroup(network_GroupChannel_MyBotAndController_Base0_Int)
            settingsOverride_FlashMem_Save_Func()
        }
    }
    if (true) {
        serial.writeLine("* 26-0121-1740: Network_GroupChannel Override Stack: 'network_GroupChannel_MyBotAndController_Base0_Int'= " + network_GroupChannel_MyBotAndController_Base0_Int + "|100x=" + network_GroupChannel_MyBotAndController_Base0__Digit_Hundreds__Int + "|10x=" + network_GroupChannel_MyBotAndController_Base0__Digit_Tens__Int + "|1x=" + network_GroupChannel_MyBotAndController_Base0__Digit_Ones__Int)
    }
    quest_Note_6.quest_Show_String_For_Note_Big_Func(
    "Level 2.1: Variables_n_Constants_Yes"
    )
})
// // jwc 26-0117-1800 Disable since can confuse user unexpectedly: input.onGesture(Gesture.ScreenDown, function () {
// // jwc 26-0117-1800 Disable since can confuse user unexpectedly:     quest_Note_1.quest_Show_String_For_Note_Big_Func(
// // jwc 26-0117-1800 Disable since can confuse user unexpectedly:     "Calibration Test: Servo Arms ~ Left & Right"
// // jwc 26-0117-1800 Disable since can confuse user unexpectedly:     )
// // jwc 26-0117-1800 Disable since can confuse user unexpectedly:     for (let index = 0; index <= 220; index++) {
// // jwc 26-0117-1800 Disable since can confuse user unexpectedly:         quest_Motors.quest_Set_Degrees_By_Integer_ForServoArm_SMALL_Func(
// // jwc 26-0117-1800 Disable since can confuse user unexpectedly:         quest_PortSingle_ServoArmBeam_PortId_Enum.S7_ServoArm_Left,
// // jwc 26-0117-1800 Disable since can confuse user unexpectedly:         index,
// // jwc 26-0117-1800 Disable since can confuse user unexpectedly:         quest_Debug_Show_Enum.Dashboard_OLED
// // jwc 26-0117-1800 Disable since can confuse user unexpectedly:         )
// // jwc 26-0117-1800 Disable since can confuse user unexpectedly:         quest_Motors.quest_Set_Degrees_By_Integer_ForServoArm_SMALL_Func(
// // jwc 26-0117-1800 Disable since can confuse user unexpectedly:         quest_PortSingle_ServoArmBeam_PortId_Enum.S6_ServoArm_Right,
// // jwc 26-0117-1800 Disable since can confuse user unexpectedly:         index,
// // jwc 26-0117-1800 Disable since can confuse user unexpectedly:         quest_Debug_Show_Enum.Dashboard_OLED
// // jwc 26-0117-1800 Disable since can confuse user unexpectedly:         )
// // jwc 26-0117-1800 Disable since can confuse user unexpectedly:     }
// // jwc 26-0117-1800 Disable since can confuse user unexpectedly: })
// BUG FIX: Switch from BlockCode vs TextCode
// let device_Type_Controller_Bool = 0
// 
// let device_Mode_Edit_GroupChannelNum_Bool = 0
// 
// let motor_Power_Gear_02_MAX = 0
// 
// let motor_Power_Gear_01_MAX = 0
// 
// let device_Type_Controller_Bool = 0
function setup_System_Variables_1__UserCustomizable_Not__Func () {
    if (true) {
        quest_Note_3.quest_Show_String_For_Note_Big_Func(
        "THIS STACK CUSTOMIZABLE_NOT"
        )
        quest_Note_3.quest_Show_String_For_Note_Small_Func(
        "Variable & Constant: Settings"
        )
        if (true) {
            quest_Note_6.quest_Show_String_For_Note_Small_Func(
            "Mannual Overrides to fix compiler bug"
            )
            quest_Note_6.quest_Show_String_For_Note_Small_Func(
            "Following assignments prevent variables from being 'grayed' out"
            )
            if (true) {
                // //jwc o device_Type_Bot_Bool = false
                // //jwc o device_Type_Controller_Bool = false
                _system_Hw_DeviceType__Null__ID_INT = 0
                _system_Hw_DeviceType__Bot__ID_INT = 1
                _system_Hw_DeviceType__Controller_Joystick__ID_INT = 2
                if (true) {
                    _system_Hw_DeviceType__Now__Id_Int = _system_Hw_DeviceType__Null__ID_INT
                }
            }
            if (true) {
                quest_Note_1.quest_Show_String_For_Note_Small_Func(
                "Following Pixels_Max: Horizontal/Vertical: 512 -&- Diagonal: 887 [= sqrt(512^2 + 512^2)]"
                )
                quest_Note_1.quest_Show_String_For_Note_Small_Func(
                "Was 15, try 30 to accomodate off_calibrated controllers"
                )
                quest_Note_1.quest_Show_String_For_Note_Small_Func(
                "24-0911-1220 jwc: try 30 to 50 (some joysticks: jittery idle)"
                )
                quest_Note_4.quest_Show_String_For_Note_Small_Func(
                "Optional Advanced Coding: Following Block_Code Moddable"
                )
                controller__Polar_OriginAtCenter__MagnitudePixel__IdleDeadzone_Max512__INT = 50
            }
            if (true) {
                controller__Polar_OriginAtCenter__AngleDegree__Int = 0
                controller__Polar_OriginAtCenter__AngleDegree__AsIncremented_By__Int = 0
                controller__Polar_OriginAtCenter__MagnitudePixel__Int = 0
            }
            if (true) {
                motor_Power_Full_Current_Pos = 0
                motor_Power_Full_Current_Neg = 0
                motor_Power_Half_Current = 0
                motor_Power_ZERO_INT = 0
                // //jwc ? // jwc: add to fix compiler error
                // //jwc ? motor_Power_Gear_01_MAX = 0
                // //jwc ? // jwc: add to fix compiler error
                // //jwc ? motor_Power_Gear_02_MAX = 0
                motor_Power_Gear_Number_Int = 0
            }
            if (true) {
                screenBrightness_Heartbeat_Count_Int = 0
            }
            if (true) {
                quest_Note_1.quest_Show_String_For_Note_Small_Func(
                "20msec = 50.0fps (More Noticeable Flicker vs 15msec = 66.7 fps)"
                )
                quest_Note_1.quest_Show_String_For_Note_Small_Func(
                "30fps is min for real-time response"
                )
                screen_Delay_MSEC_INT = 20
            }
            if (true) {
                _system_Sw_ModeState__Null__ID_INT = 0
                _system_Sw_ModeState__Run__AndShow_01_DeviceType__ID_INT = 1
                _system_Sw_ModeState__Run__AndShow_02_GroupChannelNum__ID_INT = 2
                _system_Sw_ModeState__Autonomous__ID_INT = 3
                _system_Sw_ModeState__Edit_GroupChannelNum__ID_INT = 4
                _system_Sw_ModeState__Test__ID_INT = 5
                _system_Sw_ModeState__Reset__ID_INT = 6
                if (true) {
                    _system_Sw_ModeState__Now__Id_Int = _system_Sw_ModeState__Null__ID_INT
                }
            }
            if (true) {
                screen_XY_Brightness_Old_Num = 0
                screen_Y_Old_Num = 0
                screen_X_Old_Num = 0
            }
        }
    }
}
radio.onReceivedString(function (receivedString) {
    if (true) {
        quest_Note_3.quest_Show_String_For_Note_Big_Func(
        "Network_Message Received' Dual Usage:: Usage #1: Operate Bot from Controller_Joystick"
        )
        // //jwc o if (device_Type_Bot_Bool && _system_Sw_ModeState__Now__Id_Int == _system_Sw_ModeState__Run__AndShow_01_DeviceType__ID_INT) {
        // //jwc o } else if (!(device_Type_Bot_Bool)) {
        if (_system_Hw_DeviceType__Now__Id_Int == _system_Hw_DeviceType__Bot__ID_INT && (_system_Sw_ModeState__Now__Id_Int == _system_Sw_ModeState__Run__AndShow_01_DeviceType__ID_INT || _system_Sw_ModeState__Now__Id_Int == _system_Sw_ModeState__Run__AndShow_02_GroupChannelNum__ID_INT)) {
            bot_Servo_Motors_Basic_Fn(receivedString)
            bot_Servo_Motors_Turbo_Fn(receivedString)
            bot_Servo_Arms__Position_Relative__Fn(receivedString)
            if (false) {
                bot_Servo_Arms__Position_Absolute__Fn(receivedString)
            }
            network__CpuCycle_Post__Management_Func()
        } else if (_system_Hw_DeviceType__Now__Id_Int == _system_Hw_DeviceType__Null__ID_INT) {
            serial.writeLine("* 26-0118-0300:" + receivedString + "|" + _system_Hw_DeviceType__Now__Id_Int + "|" + _system_Hw_DeviceType__Null__ID_INT)
            quest_Note_3.quest_Show_String_For_Note_Big_Func(
            "Network_Message Received' Dual Usage:: Usage #2: Designate this micro:bit as Bot to *Complete* Network_Pairing w/ Bot"
            )
            quest_Note_1.quest_Show_String_For_Note_Big_Func(
            "Code Activation of Bot:: 1of1 : 1st micro:bit Having Received a Network_Message is Designated as Device:Bot"
            )
            // //jwc o device_Type_Bot_Bool = true
            _system_Hw_DeviceType__Now__Id_Int = _system_Hw_DeviceType__Bot__ID_INT
            quest_Note_1.quest_Show_String_For_Note_Small_Func(
            "Start with 'DeviceType' Status to allow screen to stabilize & not clobber a LED for 'GroupChannelNum' Status"
            )
            _system_Sw_ModeState__Now__Id_Int = _system_Sw_ModeState__Run__AndShow_02_GroupChannelNum__ID_INT
            setup_BotOnly_Func()
if (true) {
                serial.writeLine("* 26-0118-0310:" + receivedString + "|" + _system_Hw_DeviceType__Now__Id_Int + "|" + _system_Hw_DeviceType__Null__ID_INT)
            }
        }
        if (true) {
            quest_Note_6.quest_Show_String_For_Note_Big_Func(
            "Level 1.0: Variables_n_Constants_Not (Hardcode) ~ Yes: 1-Sec Lag 'show leds'"
            )
            quest_Note_6.quest_Show_String_For_Note_Small_Func(
            "For exclusive activation, place this 'on radio received' stack higher than other 'on radio received' stacks"
            )
            quest_Note_6.quest_Show_String_For_Note_Small_Func(
            "Bot Stack: Main 1of1 ~ 'on radio received(receivedString)'"
            )
            quest_Note_1.quest_Show_String_For_Note_Small_Func(
            "Network Message Max_Character_Length: 19"
            )
        }
        if (false) {
            serial.writeLine("* " + receivedString)
        }
    }
})
function config_ParseCommand_Func (cmdString: string) {
    // // jwc 26-0122-1330: Phase 2A Step 4 - Command parser for remote configuration
    // // Format: "CFG:paramName=value" or "GET:paramName" or "GET:ALL"
    if (cmdString.substr(0, 4) == "CFG:") {
        // // Parse SET command: "CFG:motorFwd=70"
        paramPart = cmdString.substr(4, cmdString.length - 4)
        equalPos = paramPart.indexOf("=")
        if (equalPos > 0) {
            paramName = paramPart.substr(0, equalPos)
            paramValue = parseFloat(paramPart.substr(equalPos + 1, paramPart.length - equalPos - 1))
            // // Update config variable based on parameter name
            if (paramName == "groupChanl") {
                if (paramValue >= 0 && paramValue <= 99) {
                    config_groupChanl = paramValue
                    network_GroupChannel_MyBotAndController_Base0_Int = config_groupChanl
                    radio.setGroup(network_GroupChannel_MyBotAndController_Base0_Int)
                    settingsOverride_FlashMem_Save_Func()
                    serial.writeLine("* CFG OK: groupChanl=" + config_groupChanl)
                    return true
                }
            } else if (paramName == "motorFwd") {
                if (paramValue >= 0 && paramValue <= 100) {
                    config_motorFwd = paramValue
                    settingsOverride_FlashMem_Save_Func()
                    serial.writeLine("* CFG OK: motorFwd=" + config_motorFwd)
                    return true
                }
            } else if (paramName == "motorBwd") {
                if (paramValue >= 0 && paramValue <= 100) {
                    config_motorBwd = paramValue
                    settingsOverride_FlashMem_Save_Func()
                    serial.writeLine("* CFG OK: motorBwd=" + config_motorBwd)
                    return true
                }
            } else if (paramName == "motorTurn") {
                if (paramValue >= 0 && paramValue <= 100) {
                    config_motorTurn = paramValue
                    settingsOverride_FlashMem_Save_Func()
                    serial.writeLine("* CFG OK: motorTurn=" + config_motorTurn)
                    return true
                }
            } else if (paramName == "turboFwd") {
                if (paramValue >= 0 && paramValue <= 100) {
                    config_turboFwd = paramValue
                    settingsOverride_FlashMem_Save_Func()
                    serial.writeLine("* CFG OK: turboFwd=" + config_turboFwd)
                    return true
                }
            } else if (paramName == "turboBwd") {
                if (paramValue >= 0 && paramValue <= 100) {
                    config_turboBwd = paramValue
                    settingsOverride_FlashMem_Save_Func()
                    serial.writeLine("* CFG OK: turboBwd=" + config_turboBwd)
                    return true
                }
            } else if (paramName == "turboTurn") {
                if (paramValue >= 0 && paramValue <= 100) {
                    config_turboTurn = paramValue
                    settingsOverride_FlashMem_Save_Func()
                    serial.writeLine("* CFG OK: turboTurn=" + config_turboTurn)
                    return true
                }
            } else if (paramName == "servoMin") {
                if (paramValue >= 0 && paramValue <= 220) {
                    config_servoMin = paramValue
                    servoArm_MIN_DEGREES_INT = config_servoMin
                    settingsOverride_FlashMem_Save_Func()
                    serial.writeLine("* CFG OK: servoMin=" + config_servoMin)
                    return true
                }
            } else if (paramName == "servoMax") {
                if (paramValue >= 0 && paramValue <= 220) {
                    config_servoMax = paramValue
                    servoArm_MAX_DEGREES_INT = config_servoMax
                    settingsOverride_FlashMem_Save_Func()
                    serial.writeLine("* CFG OK: servoMax=" + config_servoMax)
                    return true
                }
            } else if (paramName == "servoInc") {
                if (paramValue >= 1 && paramValue <= 45) {
                    config_servoInc = paramValue
                    servoArm_Increment_Degrees_Int = config_servoInc
                    settingsOverride_FlashMem_Save_Func()
                    serial.writeLine("* CFG OK: servoInc=" + config_servoInc)
                    return true
                }
            }
            serial.writeLine("* CFG ERR: Invalid param or value")
            return false
        }
    } else if (cmdString.substr(0, 4) == "GET:") {
        // // Parse GET command: "GET:motorFwd" or "GET:ALL"
        paramName2 = cmdString.substr(4, cmdString.length - 4)
        if (paramName2 == "ALL") {
            config_SendAllValues_Func()
            return true
        } else {
            config_SendSingleValue_Func(paramName2)
            return true
        }
    }
    return false
}
input.onButtonPressed(Button.B, function () {
    if (true) {
        quest_Note_1.quest_Show_String_For_Note_Small_Func(
        "Important Coding Note: Only 1 Input Stack for Button A||B Allowed for 'main/main_backend.ts'"
        )
        // //jwc o if (!(device_Type_Controller_Bool) && !(device_Type_Bot_Bool)) {
        if (_system_Sw_ModeState__Now__Id_Int == _system_Sw_ModeState__Edit_GroupChannelNum__ID_INT) {
            quest_Note_3.quest_Show_String_For_Note_Big_Func(
            "'Buttons A & B' Dual Usage: Usage #2: Given Network_Paired, Increment 'GroupChannelNum' when in Respective Edit Mode"
            )
            device_Mode_Edit_GroupChannelNum_ButtonB_Func()
        } else if (_system_Hw_DeviceType__Now__Id_Int == _system_Hw_DeviceType__Null__ID_INT) {
            quest_Note_3.quest_Show_String_For_Note_Big_Func(
            "'Buttons A & B' Dual Usage: Usage #1: Designate this micro:bit as Controller_Joystick to *Start* Network_Pairing w/ Bot"
            )
            quest_Note_1.quest_Show_String_For_Note_Big_Func(
            "Code Activation of Controller_Joystick:: 1of2 : 1st micro:bit Being Pressed of Button A||B is Designated as Device:Controller_Joystick"
            )
            _system_Hw_DeviceType__Now__Id_Int = _system_Hw_DeviceType__Controller_Joystick__ID_INT
            _system_Sw_ModeState__Now__Id_Int = _system_Sw_ModeState__Run__AndShow_02_GroupChannelNum__ID_INT
            screen_Clear_Func()
            setup_ControllerOnly_Func()
        }
        quest_Note_6.quest_Show_String_For_Note_Big_Func(
        "Level 2.1: Variables_n_Constants_Yes"
        )
    }
})
function config_SendSingleValue_Func (paramName: string) {
    // // jwc 26-0122-1400: Phase 2A Step 5 - Send single configuration value via radio
    if (paramName == "groupChanl") {
        radio.sendString("VAL:groupChanl=" + config_groupChanl)
        serial.writeLine("* CFG SEND: groupChanl=" + config_groupChanl)
    } else if (paramName == "motorFwd") {
        radio.sendString("VAL:motorFwd=" + config_motorFwd)
        serial.writeLine("* CFG SEND: motorFwd=" + config_motorFwd)
    } else if (paramName == "motorBwd") {
        radio.sendString("VAL:motorBwd=" + config_motorBwd)
        serial.writeLine("* CFG SEND: motorBwd=" + config_motorBwd)
    } else if (paramName == "motorTurn") {
        radio.sendString("VAL:motorTurn=" + config_motorTurn)
        serial.writeLine("* CFG SEND: motorTurn=" + config_motorTurn)
    } else if (paramName == "turboFwd") {
        radio.sendString("VAL:turboFwd=" + config_turboFwd)
        serial.writeLine("* CFG SEND: turboFwd=" + config_turboFwd)
    } else if (paramName == "turboBwd") {
        radio.sendString("VAL:turboBwd=" + config_turboBwd)
        serial.writeLine("* CFG SEND: turboBwd=" + config_turboBwd)
    } else if (paramName == "turboTurn") {
        radio.sendString("VAL:turboTurn=" + config_turboTurn)
        serial.writeLine("* CFG SEND: turboTurn=" + config_turboTurn)
    } else if (paramName == "servoMin") {
        radio.sendString("VAL:servoMin=" + config_servoMin)
        serial.writeLine("* CFG SEND: servoMin=" + config_servoMin)
    } else if (paramName == "servoMax") {
        radio.sendString("VAL:servoMax=" + config_servoMax)
        serial.writeLine("* CFG SEND: servoMax=" + config_servoMax)
    } else if (paramName == "servoInc") {
        radio.sendString("VAL:servoInc=" + config_servoInc)
        serial.writeLine("* CFG SEND: servoInc=" + config_servoInc)
    } else {
        radio.sendString("VAL:ERROR=Unknown parameter: " + paramName)
        serial.writeLine("* CFG SEND ERR: Unknown param: " + paramName)
    }
}
function botModeInIdle_Fn () {
    quest_Note_5.quest_Show_String_For_Note_Small_Func(
    "/\\ 'joystickbit.initJoystickBit()' Prevents Button-Pressed = False_+"
    )
    quest_Note_1.quest_Show_String_For_Note_Small_Func(
    "'if' statements 'and-ed' to return 'IdleMode=true'"
    )
    if (controller__Polar_OriginAtCenter__MagnitudePixel__Int <= controller__Polar_OriginAtCenter__MagnitudePixel__IdleDeadzone_Max512__INT) {
        if (!(joystickbit.getButton(joystickbit.JoystickBitPin.P12))) {
            if (!(joystickbit.getButton(joystickbit.JoystickBitPin.P13))) {
                if (!(joystickbit.getButton(joystickbit.JoystickBitPin.P14))) {
                    if (!(joystickbit.getButton(joystickbit.JoystickBitPin.P15))) {
                        if (!(input.isGesture(Gesture.TiltLeft))) {
                            if (!(input.isGesture(Gesture.TiltRight))) {
                                return true
                            }
                        }
                    }
                }
            }
        }
    }
    return false
}
function setup_Code_For_System_Func () {
    if (true) {
        setup_System_Variables_1__UserCustomizable_Not__Func()
        setup_System_Variables_2__UserCustomizable_Yes__Func()
        settingsOverride_FlashMem_Load_Func()
        setup_Network_Func()
setup_BotAndController_Func()
    }
    if (true) {
        quest_Dashboard.quest_Dashboard_Network_SendLogin_Func(
        network_GroupChannel_MyBotAndController_Base0_Int
        )
    }
    if (false) {
        quest_Note_4.quest_Show_String_For_Note_Small_Func(
        "AAA-1: Next Block_Code Moddable..."
        )
        quest_Note_4.quest_Show_String_For_Note_Small_Func(
        "...Data-Dashboard: Row-1: Title"
        )
        quest_Dashboard.quest_Show_String_For_Oled_SmallFont_Func(
        "Driver Dashboard :)",
        0,
        0
        )
    }
    if (false) {
        quest_Note_1.quest_Show_String_For_Note_Big_Func(
        "25-0309-2040 This Section Obsolete, Replaced Below"
        )
        quest_Note_1.quest_Show_String_For_Note_Small_Func(
        "GeekServo-360-Degrees-2kg: start at 180"
        )
        quest_Note_1.quest_Show_String_For_Note_Small_Func(
        "Start w/ Label 'GeekServo' facing out for Servo_Arm_Left, for 180-degrees to face forward for optimum range"
        )
        quest_Note_4.quest_Show_String_For_Note_Small_Func(
        "BBB-1: Next Block_Code Moddable..."
        )
        quest_Note_4.quest_Show_String_For_Note_Small_Func(
        "...Servo-Arm: 1-of-3: Default (degrees)"
        )
        servoArm_DEFAULT_DEGREES_INT = 90
        quest_Note_4.quest_Show_String_For_Note_Small_Func(
        "BBB-2: Next Block_Code Moddable..."
        )
        quest_Note_4.quest_Show_String_For_Note_Small_Func(
        "...Servo-Arm: 2-of-3: Up-Max (degrees)"
        )
        servoArm_UP_MAX_DEGREES_INT = 360
        quest_Note_4.quest_Show_String_For_Note_Small_Func(
        "BBB-3: Next Block_Code Moddable..."
        )
        quest_Note_4.quest_Show_String_For_Note_Small_Func(
        "...Servo-Arm: 3-of-3: Down-Max (degrees)"
        )
        servoArm_DOWN_MAX_DEGREES_INT = 0
        quest_Note_1.quest_Show_String_For_Note_Small_Func(
        "Servo-Arm: GeekServo_360_Degrees: Default"
        )
        servoArm_Now_Degrees_Int = servoArm_DEFAULT_DEGREES_INT
        wuKong.setServoAngle(wuKong.ServoTypeList._360, wuKong.ServoList.S7, servoArm_Now_Degrees_Int)
        wuKong.setServoAngle(wuKong.ServoTypeList._360, wuKong.ServoList.S6, servoArm_Now_Degrees_Int)
        quest_Dashboard.quest_Show_String_For_Oled_SmallFont_Func(
        "Arm-L:" + "Default= " + servoArm_Now_Degrees_Int,
        0,
        3
        )
        quest_Dashboard.quest_Show_String_For_Oled_SmallFont_Func(
        "Arm-R:" + "Default= " + servoArm_Now_Degrees_Int,
        0,
        4
        )
    }
    if (true) {
        quest_Motors.quest_Set_Degrees_By_Integer_ForServoArm_SMALL_Func(
        quest_PortSingle_ServoArmBeam_PortId_Enum.S7_ServoArm_Left,
        0,
        quest_Debug_Show_Enum.Dashboard_OLED
        )
        quest_Motors.quest_Set_Degrees_By_Integer_ForServoArm_SMALL_Func(
        quest_PortSingle_ServoArmBeam_PortId_Enum.S6_ServoArm_Right,
        0,
        quest_Debug_Show_Enum.Dashboard_OLED
        )
        if (false) {
            quest_Note_4.quest_Show_String_For_Note_Small_Func(
            "Servo_Left not truly 0, but offset by 45-degrees"
            )
            quest_Motors.quest_Set_Degrees_By_Menu_ForServoArm_SMALL_Func(
            quest_PortSingle_ServoArmBeam_PortId_Enum.S7_ServoArm_Left,
            quest_ServoArm_DegreesInDirection_Enum.Degree_000_Down,
            quest_Debug_Show_Enum.Dashboard_OLED
            )
            quest_Motors.quest_Set_Degrees_By_Menu_ForServoArm_SMALL_Func(
            quest_PortSingle_ServoArmBeam_PortId_Enum.S6_ServoArm_Right,
            quest_ServoArm_DegreesInDirection_Enum.Degree_000_Down,
            quest_Debug_Show_Enum.Dashboard_OLED
            )
        }
    }
    if (true) {
        quest_Note_1.quest_Show_String_For_Note_Small_Func(
        "Following limits repeating 'idle/stop' to .."
        )
        quest_Note_1.quest_Show_String_For_Note_Small_Func(
        ".. not flood Led-5x5 and Network"
        )
        controller__Polar_OriginAtCenter__MagnitudePixel__PreviousCycle__Int = controller__Polar_OriginAtCenter__MagnitudePixel__IdleDeadzone_Max512__INT
        controller__Polar_OriginAtCenter__IdleCount_Int = 0
        quest_Note_1.quest_Show_String_For_Note_Small_Func(
        "Following for Network Throttling.."
        )
        controller__Polar_OriginAtCenter__IdleCount_Int = 0
        quest_Note_1.quest_Show_String_For_Note_Small_Func(
        "controller..IdleCount_ModulusNetworkThrottle_ADD_INT"
        )
        quest_Note_1.quest_Show_String_For_Note_Small_Func(
        "..: 10, 5, 1 (for fastest response), 5"
        )
        controller__Polar_OriginAtCenter__IdleCount_ModulusNetworkThrottle_ADD_INT = 5
        controller__Polar_OriginAtCenter__IdleCount_ModulusNetworkThrottle_Now_Int = controller__Polar_OriginAtCenter__IdleCount_ModulusNetworkThrottle_ADD_INT
        if (false) {
            controller__Polar_OriginAtCenter__IdleCount_ModulusNetworkThrottle_ADD_INT = 5
            controller__Polar_OriginAtCenter__IdleCount_ModulusNetworkThrottle_ADD_INT = 10
        }
    }
    if (true) {
        quest_Note_6.quest_Show_String_For_Note_Big_Func(
        "Level 1: Variables_n_Constants_Not (Hardcode)"
        )
        quest_Note_6.quest_Show_String_For_Note_Small_Func(
        "For exclusive activation, place this 'on start' stack higher than other 'on start' stacks"
        )
        quest_Note_6.quest_Show_String_For_Note_Small_Func(
        "Bot & Controller_Joystick Stack: 'on start'"
        )
        quest_Note_6.quest_Show_String_For_Note_Small_Func(
        "setup_VariablesAndConstants_UserCustomizable: Yes"
        )
    }
}
let _system_Github_VER_STRING = ""
let controller__Polar_OriginAtCenter__MagnitudePixel__PreviousCycle__Int = 0
let servoArm_DEFAULT_DEGREES_INT = 0
let paramName2 = ""
let paramValue = 0
let paramName = ""
let equalPos = 0
let paramPart = ""
let _system_Sw_ModeState__Test__ID_INT = 0
let _system_Sw_ModeState__Autonomous__ID_INT = 0
let screen_Delay_MSEC_INT = 0
let motor_Power_Gear_Number_Int = 0
let motor_Power_ZERO_INT = 0
let motor_Power_Half_Current = 0
let motor_Power_Full_Current_Neg = 0
let motor_Power_Full_Current_Pos = 0
let controller__Polar_OriginAtCenter__MagnitudePixel__Int = 0
let controller__Polar_OriginAtCenter__AngleDegree__AsIncremented_By__Int = 0
let controller__Polar_OriginAtCenter__AngleDegree__Int = 0
let controller__Polar_OriginAtCenter__MagnitudePixel__IdleDeadzone_Max512__INT = 0
let _system_Sw_ModeState__Null__ID_INT = 0
let network_GroupChannel_MyBotAndController_Base0__Digit_Ones__Int = 0
let network_GroupChannel_MyBotAndController_Base0__Digit_Tens__Int = 0
let network_GroupChannel_MyBotAndController_Base0__Digit_Hundreds__Int = 0
let _system_Hw_DeviceType__Bot__ID_INT = 0
let controller__Polar_OriginAtCenter__IdleCount_ModulusNetworkThrottle_ADD_INT = 0
let controller__Polar_OriginAtCenter__IdleCount_ModulusNetworkThrottle_Now_Int = 0
let controller__Polar_OriginAtCenter__IdleCount_Int = 0
let _system_Sw_ModeState__Run__AndShow_01_DeviceType__ID_INT = 0
let _system_Sw_ModeState__Run__AndShow_02_GroupChannelNum__ID_INT = 0
let _system_Hw_DeviceType__Controller_Joystick__ID_INT = 0
let _system_Hw_DeviceType__Null__ID_INT = 0
let _system_Hw_DeviceType__Now__Id_Int = 0
let _system_Sw_ModeState__Edit_GroupChannelNum__ID_INT = 0
let _system_Sw_ModeState__Reset__ID_INT = 0
let _system_Sw_ModeState__Now__Id_Int = 0
let controller__Button_TriggerDelay__MSEC_INT = 0
let servoArm_MAX_DEGREES_INT = 0
let servoArm_MIN_DEGREES_INT = 0
let servoArm_Right_Now_Degrees_Int = 0
let servoArm_Left_Now_Degrees_Int = 0
let servoArm_Increment_Degrees_Int = 0
let servoArm_Right_Up_Bool = false
let servoArm_Left_Up_Bool = false
let servoArm_Right_UP_DEGREES_INT = 0
let servoArm_Left_UP_DEGREES_INT = 0
let servoArm_UP_MAX_DEGREES_INT = 0
let servoArm_DOWN_MAX_DEGREES_INT = 0
let servoArm_Now_Degrees_Int = 0
let motor_Power_Gear_02_MAX = 0
let motor_Power_Gear_01_MAX = 0
let config_servoMin = 0
let screenBrightness_Heartbeat_Count_Int = 0
let screen_XY_Brightness_Old_Num = 0
let screen_Y_Old_Num = 0
let screen_X_Old_Num = 0
let network_GroupChannel_MyBotAndController_Base0_Int = 0
let config_servoInc = 0
let config_servoMax = 0
let config_turboTurn = 0
let config_turboBwd = 0
let config_turboFwd = 0
let config_motorTurn = 0
let config_motorBwd = 0
let config_motorFwd = 0
let config_groupChanl = 0
// // jwc 26-0122-1230: Phase 2A - Remote Configuration Variables (10 settings)
// Group channel (0-99)
config_groupChanl = 1
// Motor forward power (0-100%)
config_motorFwd = 60
// Motor backward power (0-100%)
config_motorBwd = 60
// Motor turn power (0-100%)
config_motorTurn = 50
// Turbo forward power (0-100%)
config_turboFwd = 90
// Turbo backward power (0-100%)
config_turboBwd = 90
// Turbo turn power (0-100%)
config_turboTurn = 80
// Servo arm minimum degrees (0-220)
// Servo arm maximum degrees (0-220)
config_servoMax = 220
// Servo arm increment degrees (1-45)
config_servoInc = 15
images.createImage(`
    . # . # .
    # # # # #
    . # . # .
    # # # # #
    . # . # .
    `).showImage(0, 0)
quest_Note_2.quest_Show_String_For_Note_Big_Func(
"Below Moddable: GroupChannel_# (Bot_Id): ..."
)
quest_Note_2.quest_Show_String_For_Note_Small_Func(
"... Range [21-255], Default = 1"
)
network_GroupChannel_MyBotAndController_Base0_Int = 1
setup_Code_For_System_Func()
quest_Note_1.quest_Show_String_For_Note_Big_Func(
"Below, Setup Code for Teacher:"
)
quest_Note_1.quest_Show_String_For_Note_Big_Func(
"Below, Setup Code for Student:"
)
basic.forever(function () {
    if (false) {
        quest_Note_6.quest_Show_String_For_Note_Big_Func(
        "<-- Bot Code (Web-Server)  |"
        )
        quest_Note_6.quest_Show_String_For_Note_Big_Func(
        "<-- Bot Code (Web-Server)  |"
        )
        quest_Note_6.quest_Show_String_For_Note_Big_Func(
        "<-- Bot Code (Web-Server)  |"
        )
        quest_Note_6.quest_Show_String_For_Note_Big_Func(
        "<-- Bot Code (Web-Server)  |"
        )
        quest_Note_6.quest_Show_String_For_Note_Big_Func(
        "<-- Bot Code (Web-Server)  |"
        )
        quest_Note_6.quest_Show_String_For_Note_Big_Func(
        "<-- Bot Code (Web-Server)  |"
        )
        quest_Note_6.quest_Show_String_For_Note_Big_Func(
        "<-- Bot Code (Web-Server)  |"
        )
        quest_Note_6.quest_Show_String_For_Note_Big_Func(
        "<-- Bot Code (Web-Server)  |"
        )
        quest_Note_6.quest_Show_String_For_Note_Big_Func(
        "<-- Bot Code (Web-Server)  |"
        )
        quest_Note_6.quest_Show_String_For_Note_Big_Func(
        "<-- Bot Code (Web-Server)  |"
        )
        quest_Note_6.quest_Show_String_For_Note_Big_Func(
        "<-- Bot Code (Web-Server)  |"
        )
        quest_Note_6.quest_Show_String_For_Note_Big_Func(
        "<-- Bot Code (Web-Server)  |"
        )
        quest_Note_6.quest_Show_String_For_Note_Big_Func(
        "<-- Bot Code (Web-Server)  |"
        )
        quest_Note_6.quest_Show_String_For_Note_Big_Func(
        "<-- Bot Code (Web-Server)  |"
        )
        quest_Note_6.quest_Show_String_For_Note_Big_Func(
        "<-- Bot Code (Web-Server)  |"
        )
        quest_Note_6.quest_Show_String_For_Note_Big_Func(
        "<-- Bot Code (Web-Server)  |"
        )
        quest_Note_6.quest_Show_String_For_Note_Big_Func(
        "<-- Bot Code (Web-Server)  |"
        )
        quest_Note_6.quest_Show_String_For_Note_Big_Func(
        "<-- Bot Code (Web-Server)  |"
        )
        quest_Note_6.quest_Show_String_For_Note_Big_Func(
        "<-- Bot Code (Web-Server)  |"
        )
        quest_Note_6.quest_Show_String_For_Note_Big_Func(
        "<-- Bot Code (Web-Server)  |"
        )
        quest_Note_6.quest_Show_String_For_Note_Big_Func(
        "<-- Bot Code (Web-Server)  |"
        )
        quest_Note_6.quest_Show_String_For_Note_Big_Func(
        "<-- Bot Code (Web-Server)  |"
        )
        quest_Note_6.quest_Show_String_For_Note_Big_Func(
        "<-- Bot Code (Web-Server)  |"
        )
        quest_Note_6.quest_Show_String_For_Note_Big_Func(
        "<-- Bot Code (Web-Server)  |"
        )
        quest_Note_6.quest_Show_String_For_Note_Big_Func(
        "<-- Bot Code (Web-Server)  |"
        )
        quest_Note_6.quest_Show_String_For_Note_Big_Func(
        "<-- Bot Code (Web-Server)  |"
        )
        quest_Note_6.quest_Show_String_For_Note_Big_Func(
        "<-- Bot Code (Web-Server)  |"
        )
        quest_Note_6.quest_Show_String_For_Note_Big_Func(
        "<-- Bot Code (Web-Server)  |"
        )
        quest_Note_6.quest_Show_String_For_Note_Big_Func(
        "<-- Bot Code (Web-Server)  |"
        )
        quest_Note_6.quest_Show_String_For_Note_Big_Func(
        "<-- Bot Code (Web-Server)  |"
        )
    }
})
basic.forever(function () {
    if (false) {
        quest_Note_6.quest_Show_String_For_Note_Big_Func(
        "|  Controller-Joystick (Web-Client) -->"
        )
        quest_Note_6.quest_Show_String_For_Note_Big_Func(
        "|  Controller-Joystick (Web-Client) -->"
        )
        quest_Note_6.quest_Show_String_For_Note_Big_Func(
        "|  Controller-Joystick (Web-Client) -->"
        )
        quest_Note_6.quest_Show_String_For_Note_Big_Func(
        "|  Controller-Joystick (Web-Client) -->"
        )
        quest_Note_6.quest_Show_String_For_Note_Big_Func(
        "|  Controller-Joystick (Web-Client) -->"
        )
        quest_Note_6.quest_Show_String_For_Note_Big_Func(
        "|  Controller-Joystick (Web-Client) -->"
        )
        quest_Note_6.quest_Show_String_For_Note_Big_Func(
        "|  Controller-Joystick (Web-Client) -->"
        )
        quest_Note_6.quest_Show_String_For_Note_Big_Func(
        "|  Controller-Joystick (Web-Client) -->"
        )
        quest_Note_6.quest_Show_String_For_Note_Big_Func(
        "|  Controller-Joystick (Web-Client) -->"
        )
        quest_Note_6.quest_Show_String_For_Note_Big_Func(
        "|  Controller-Joystick (Web-Client) -->"
        )
        quest_Note_6.quest_Show_String_For_Note_Big_Func(
        "|  Controller-Joystick (Web-Client) -->"
        )
        quest_Note_6.quest_Show_String_For_Note_Big_Func(
        "|  Controller-Joystick (Web-Client) -->"
        )
        quest_Note_6.quest_Show_String_For_Note_Big_Func(
        "|  Controller-Joystick (Web-Client) -->"
        )
        quest_Note_6.quest_Show_String_For_Note_Big_Func(
        "|  Controller-Joystick (Web-Client) -->"
        )
        quest_Note_6.quest_Show_String_For_Note_Big_Func(
        "|  Controller-Joystick (Web-Client) -->"
        )
        quest_Note_6.quest_Show_String_For_Note_Big_Func(
        "|  Controller-Joystick (Web-Client) -->"
        )
        quest_Note_6.quest_Show_String_For_Note_Big_Func(
        "|  Controller-Joystick (Web-Client) -->"
        )
        quest_Note_6.quest_Show_String_For_Note_Big_Func(
        "|  Controller-Joystick (Web-Client) -->"
        )
        quest_Note_6.quest_Show_String_For_Note_Big_Func(
        "|  Controller-Joystick (Web-Client) -->"
        )
        quest_Note_6.quest_Show_String_For_Note_Big_Func(
        "|  Controller-Joystick (Web-Client) -->"
        )
        quest_Note_6.quest_Show_String_For_Note_Big_Func(
        "|  Controller-Joystick (Web-Client) -->"
        )
        quest_Note_6.quest_Show_String_For_Note_Big_Func(
        "|  Controller-Joystick (Web-Client) -->"
        )
        quest_Note_6.quest_Show_String_For_Note_Big_Func(
        "|  Controller-Joystick (Web-Client) -->"
        )
        quest_Note_6.quest_Show_String_For_Note_Big_Func(
        "|  Controller-Joystick (Web-Client) -->"
        )
        quest_Note_6.quest_Show_String_For_Note_Big_Func(
        "|  Controller-Joystick (Web-Client) -->"
        )
        quest_Note_6.quest_Show_String_For_Note_Big_Func(
        "|  Controller-Joystick (Web-Client) -->"
        )
        quest_Note_6.quest_Show_String_For_Note_Big_Func(
        "|  Controller-Joystick (Web-Client) -->"
        )
        quest_Note_6.quest_Show_String_For_Note_Big_Func(
        "|  Controller-Joystick (Web-Client) -->"
        )
        quest_Note_6.quest_Show_String_For_Note_Big_Func(
        "|  Controller-Joystick (Web-Client) -->"
        )
        quest_Note_6.quest_Show_String_For_Note_Big_Func(
        "|  Controller-Joystick (Web-Client) -->"
        )
    }
})
basic.forever(function () {
    if (true) {
        quest_Note_3.quest_Show_String_For_Note_Big_Func(
        "Send Network Message to 'B'ot:: Controller_Joystick: Joystick"
        )
        // //jwc o if (device_Type_Controller_Bool && (_system_Sw_ModeState__Now__Id_Int == _system_Sw_ModeState__Run__AndShow_01_DeviceType__ID_INT || _system_Sw_ModeState__Now__Id_Int == _system_Sw_ModeState__Run__AndShow_02_GroupChannelNum__ID_INT)) {
        if (_system_Hw_DeviceType__Now__Id_Int == _system_Hw_DeviceType__Controller_Joystick__ID_INT && (_system_Sw_ModeState__Now__Id_Int == _system_Sw_ModeState__Run__AndShow_01_DeviceType__ID_INT || _system_Sw_ModeState__Now__Id_Int == _system_Sw_ModeState__Run__AndShow_02_GroupChannelNum__ID_INT)) {
            if (true) {
                controller__Polar_OriginAtCenter__AngleDegree__Int = quest_Sensors.quest_Get_Controller_Joystick_Directional_AngleDegree_IncrementOf_AsIntOut_Func(
                quest_Controller_Joystick_Directional_AngelDegree_Increment_Enum.degree_90
                )
                controller__Polar_OriginAtCenter__MagnitudePixel__PreviousCycle__Int = controller__Polar_OriginAtCenter__MagnitudePixel__Int
                controller__Polar_OriginAtCenter__MagnitudePixel__Int = quest_Sensors.quest_Get_Controller_Joystick_Directional_MagnitudePixel_AsIntOut_Func(
                )
                if (false) {
                    controller__Polar_OriginAtCenter__AngleDegree__Int = quest_Sensors.quest_Get_Controller_Joystick_Directional_AngleDegree_IncrementOfDegree90_AsIntOut_Func(
                    )
                }
            }
            quest_Note_1.quest_Show_String_For_Note_Big_Func(
            "Convert Network Message to Operate 'B'ot: "
            )
            if (controller__Polar_OriginAtCenter__MagnitudePixel__Int > controller__Polar_OriginAtCenter__MagnitudePixel__IdleDeadzone_Max512__INT) {
                if (true) {
                    quest_Note_1.quest_Show_String_For_Note_Big_Func(
                    "Motion: Yes"
                    )
                    if (controller__Polar_OriginAtCenter__AngleDegree__Int == 90) {
                        if (true) {
                            images.createImage(`
                                . . # . .
                                . # # # .
                                . . # . .
                                . . # . .
                                . . . . .
                                `).showImage(0, 0)
                            radio.sendString("forward")
                        }
                    } else if (controller__Polar_OriginAtCenter__AngleDegree__Int == 270) {
                        if (true) {
                            images.createImage(`
                                . . . . .
                                . . # . .
                                . . # . .
                                . # # # .
                                . . # . .
                                `).showImage(0, 0)
                            radio.sendString("backward")
                        }
                    } else if (controller__Polar_OriginAtCenter__AngleDegree__Int == 180) {
                        if (true) {
                            images.createImage(`
                                . . . . .
                                . # . . .
                                # # # # .
                                . # . . .
                                . . . . .
                                `).showImage(0, 0)
                            radio.sendString("left")
                        }
                    } else if (controller__Polar_OriginAtCenter__AngleDegree__Int == 0 || controller__Polar_OriginAtCenter__AngleDegree__Int == 360) {
                        if (true) {
                            images.createImage(`
                                . . . . .
                                . . . # .
                                . # # # #
                                . . . # .
                                . . . . .
                                `).showImage(0, 0)
                            radio.sendString("right")
                        }
                    } else {
                        quest_Note_5.quest_Show_String_For_Note_Small_Func(
                        "Invalid 'controller_Joystick_Angle_Degrees_AsIncremented_Int'"
                        )
                        error_Message_Func("2024-0212-1731", "Invalid 'controller__Polar_OriginAtCenter__AngleDegree__Int'")
                    }
                    if (true) {
                        quest_Note_1.quest_Show_String_For_Note_Small_Func(
                        "Following 0-Reset to Allow Idle/Stop Afterwards"
                        )
                        controller__Polar_OriginAtCenter__IdleCount_Int = 0
                        controller__Polar_OriginAtCenter__IdleCount_ModulusNetworkThrottle_Now_Int = controller__Polar_OriginAtCenter__IdleCount_ModulusNetworkThrottle_ADD_INT
                    }
                    if (false) {
                        quest_Note_1.quest_Show_String_For_Note_Small_Func(
                        "jwc ? cause compiler to auto-create weird code below from 'convert_Controller_Joystick_Directional_AngleDegrees__To__Microbit5x5Screen_Func(controller__Polar_OriginAtCenter__AngleDegree__Int)'"
                        )
                        quest_Note_1.quest_Show_String_For_Note_Small_Func(
                        "jwc ? may cause compiler bug, auto_creates 'let controller__Polar_OriginAtCenter__AngleDegree__Int = 0' at inactive free space"
                        )
                    }
                }
            } else if (false) {
                quest_Note_1.quest_Show_String_For_Note_Small_Func(
                "Avoid sending 'stop' to not interfere.. "
                )
                quest_Note_1.quest_Show_String_For_Note_Small_Func(
                "..turbo-max-motion buttons pressed"
                )
                if (controller__Polar_OriginAtCenter__MagnitudePixel__PreviousCycle__Int <= controller__Polar_OriginAtCenter__MagnitudePixel__IdleDeadzone_Max512__INT) {
                    controller__Polar_OriginAtCenter__IdleCount_Int += 1
                    quest_Note_1.quest_Show_String_For_Note_Small_Func(
                    "Avoid sending 'stop' after above threshold-max,.."
                    )
                    quest_Note_1.quest_Show_String_For_Note_Small_Func(
                    "..to not flood Led-5x5 and Network"
                    )
                    if (controller__Polar_OriginAtCenter__IdleCount_Int < 5) {
                        if (true) {
                            images.createImage(`
                                . . . . .
                                . . . . .
                                . . # . .
                                . . . . .
                                . . . . .
                                `).showImage(0, 0)
                            quest_Note_1.quest_Show_String_For_Note_Small_Func(
                            "Zero values if not exceed 'Deadzone_AsIdle'"
                            )
                            radio.sendString("stop")
                            serial.writeString("*** B: STOP" + "")
                        }
                    }
                } else {
                    controller__Polar_OriginAtCenter__IdleCount_Int = 0
                }
            }
            if (true) {
                quest_Timer.quest_Set_ContinueCurrentState_CountdownTimer_Func(20, quest_Time_Units_Enum.Milliseconds)
            }
        }
        quest_Note_6.quest_Show_String_For_Note_Big_Func(
        "Level 2.1: Variables_n_Constants_Yes ~ Yes: 1-Sec Lag 'show leds'"
        )
        quest_Note_6.quest_Show_String_For_Note_Small_Func(
        "Activate Stack via 'Forever' Stack_Header"
        )
        quest_Note_6.quest_Show_String_For_Note_Small_Func(
        "Controller_Joystick Stack: Main 1of2"
        )
        quest_Note_1.quest_Show_String_For_Note_Small_Func(
        "Network Message Max_Character_Length: 19"
        )
    }
})
basic.forever(function () {
    if (true) {
        quest_Note_3.quest_Show_String_For_Note_Big_Func(
        "Send Network Message to 'B'ot:: Controller_Joystick: Buttons"
        )
        quest_Note_6.quest_Show_String_For_Note_Small_Func(
        "Controller_Joystick Stack: Main 2of2"
        )
        quest_Note_1.quest_Show_String_For_Note_Small_Func(
        "Network Message Max_Character_Length: 19"
        )
        // //jwc o if (device_Type_Controller_Bool && (_system_Sw_ModeState__Now__Id_Int == _system_Sw_ModeState__Run__AndShow_01_DeviceType__ID_INT || _system_Sw_ModeState__Now__Id_Int == _system_Sw_ModeState__Run__AndShow_02_GroupChannelNum__ID_INT)) {
        if (_system_Hw_DeviceType__Now__Id_Int == _system_Hw_DeviceType__Controller_Joystick__ID_INT && (_system_Sw_ModeState__Now__Id_Int == _system_Sw_ModeState__Run__AndShow_01_DeviceType__ID_INT || _system_Sw_ModeState__Now__Id_Int == _system_Sw_ModeState__Run__AndShow_02_GroupChannelNum__ID_INT)) {
            if (joystickbit.getButton(joystickbit.JoystickBitPin.P15)) {
                images.createImage(`
                    . . # . .
                    . # # # .
                    # . # . #
                    . . # . .
                    . . # . .
                    `).showImage(0, 0)
                radio.sendString("forward_turbo")
                if (true) {
                    quest_Note_1.quest_Show_String_For_Note_Small_Func(
                    "Following 0-Reset to Allow Idle/Stop Afterwards"
                    )
                    controller__Polar_OriginAtCenter__IdleCount_Int = 0
                    controller__Polar_OriginAtCenter__IdleCount_ModulusNetworkThrottle_Now_Int = controller__Polar_OriginAtCenter__IdleCount_ModulusNetworkThrottle_ADD_INT
                }
            } else if (joystickbit.getButton(joystickbit.JoystickBitPin.P14)) {
                images.createImage(`
                    . . # . .
                    . . # . .
                    # . # . #
                    . # # # .
                    . . # . .
                    `).showImage(0, 0)
                radio.sendString("backward_turbo")
                if (true) {
                    quest_Note_1.quest_Show_String_For_Note_Small_Func(
                    "Following 0-Reset to Allow Idle/Stop Afterwards"
                    )
                    controller__Polar_OriginAtCenter__IdleCount_Int = 0
                    controller__Polar_OriginAtCenter__IdleCount_ModulusNetworkThrottle_Now_Int = controller__Polar_OriginAtCenter__IdleCount_ModulusNetworkThrottle_ADD_INT
                }
            } else if (false) {
                quest_Note_4.quest_Show_String_For_Note_Small_Func(
                "Deactivate for now"
                )
                images.createImage(`
                    . . # . .
                    . # . . .
                    # # # # #
                    . # . . .
                    . . # . .
                    `).showImage(0, 0)
                radio.sendString("left_turbo")
                quest_Note_1.quest_Show_String_For_Note_Small_Func(
                "Following 0-Reset to Allow Idle/Stop Afterwards"
                )
                controller__Polar_OriginAtCenter__IdleCount_Int = 0
            } else if (false) {
                quest_Note_4.quest_Show_String_For_Note_Small_Func(
                "Deactivate for now"
                )
                images.createImage(`
                    . . # . .
                    . . . # .
                    # # # # #
                    . . . # .
                    . . # . .
                    `).showImage(0, 0)
                radio.sendString("right_turbo")
                quest_Note_1.quest_Show_String_For_Note_Small_Func(
                "Following 0-Reset to Allow Idle/Stop Afterwards"
                )
                controller__Polar_OriginAtCenter__IdleCount_Int = 0
            }
            network__CpuCycle_Post__Management_Func()
        }
        quest_Note_6.quest_Show_String_For_Note_Big_Func(
        "Level 2.1: Variables_n_Constants_Yes"
        )
    }
})
basic.forever(function () {
    _system_Github_VER_STRING = "v0.2.2"
    quest_Note_1.quest_Show_String_For_Note_Small_Func(
    "©️ 2026 Quest Institute. All rights reserved."
    )
})
basic.forever(function () {
    if (true) {
        quest_Note_3.quest_Show_String_For_Note_Big_Func(
        "Send Network Message to 'B'ot:: Controller_Joystick: Buttons"
        )
        quest_Note_6.quest_Show_String_For_Note_Small_Func(
        "Controller_Joystick Stack: Main 2of2"
        )
        quest_Note_1.quest_Show_String_For_Note_Small_Func(
        "Network Message Max_Character_Length: 19"
        )
        if (_system_Hw_DeviceType__Now__Id_Int == _system_Hw_DeviceType__Controller_Joystick__ID_INT && (_system_Sw_ModeState__Now__Id_Int == _system_Sw_ModeState__Run__AndShow_01_DeviceType__ID_INT || _system_Sw_ModeState__Now__Id_Int == _system_Sw_ModeState__Run__AndShow_02_GroupChannelNum__ID_INT)) {
            if (joystickbit.getButton(joystickbit.JoystickBitPin.P12)) {
                images.createImage(`
                    . . . . .
                    . . . . .
                    . . . . .
                    . # . # .
                    # . . . #
                    `).showImage(0, 0)
                radio.sendString("arm_000__down")
                if (true) {
                    quest_Note_1.quest_Show_String_For_Note_Small_Func(
                    "Following 0-Reset to Allow Idle/Stop Afterwards"
                    )
                    controller__Polar_OriginAtCenter__IdleCount_Int = 0
                    controller__Polar_OriginAtCenter__IdleCount_ModulusNetworkThrottle_Now_Int = controller__Polar_OriginAtCenter__IdleCount_ModulusNetworkThrottle_ADD_INT
                    quest_Timer.quest_Set_ContinueCurrentState_CountdownTimer_Func(controller__Button_TriggerDelay__MSEC_INT, quest_Time_Units_Enum.Milliseconds)
                }
            } else if (joystickbit.getButton(joystickbit.JoystickBitPin.P13)) {
                images.createImage(`
                    # . . . #
                    . # . # .
                    . . . . .
                    . . . . .
                    . . . . .
                    `).showImage(0, 0)
                radio.sendString("arm_045__up_half")
                if (true) {
                    quest_Note_1.quest_Show_String_For_Note_Small_Func(
                    "Following 0-Reset to Allow Idle/Stop Afterwards"
                    )
                    controller__Polar_OriginAtCenter__IdleCount_Int = 0
                    controller__Polar_OriginAtCenter__IdleCount_ModulusNetworkThrottle_Now_Int = controller__Polar_OriginAtCenter__IdleCount_ModulusNetworkThrottle_ADD_INT
                    quest_Timer.quest_Set_ContinueCurrentState_CountdownTimer_Func(controller__Button_TriggerDelay__MSEC_INT, quest_Time_Units_Enum.Milliseconds)
                }
            }
            network__CpuCycle_Post__Management_Func()
        }
        quest_Note_6.quest_Show_String_For_Note_Big_Func(
        "Level 2.1: Variables_n_Constants_Yes"
        )
    }
})
basic.forever(function () {
    quest_Note_6.quest_Show_String_For_Note_Big_Func(
    ""
    )
    if (false) {
        quest_Note_1.quest_Show_String_For_Note_Small_Func(
        "Error: Unknown Msg"
        )
        // //jwc o roboQuest.powerMotorsViaBlueRedBlackPins(PortGroup_BlueRedBlack__PortIds__Enum.S1_MotorLeft__S0_MotorRight, motor_Power_ZERO_INT, motor_Power_ZERO_INT)
        quest_Motors.quest_Set_PowerMotorsViaBlueRedBlackPins_Func(
        quest_PortGroup_BlueRedBlack_PortIds_Enum.S1_MotorWheel_Left__S0_MotorWheel_Right,
        0,
        0
        )
        if (true) {
            quest_Note_1.quest_Show_String_For_Note_Small_Func(
            "For now, all 4 corners = Error: Unknown Msg"
            )
            screen_IconMessage_Func("error")
        }
    }
})
basic.forever(function () {
    quest_Note_3.quest_Show_String_For_Note_Big_Func(
    "Network-Cycle Management Stack"
    )
    if (_system_Hw_DeviceType__Now__Id_Int == _system_Hw_DeviceType__Controller_Joystick__ID_INT) {
        quest_Note_5.quest_Show_String_For_Note_Small_Func(
        "/\\ Controller-Only to Avoid Premature Auto-Pair"
        )
        if (false) {
            serial.writeString("*** A1:" + quest_General.quest_Get_Number_WithColumnPadding_AsStringOut_Func(
            controller__Polar_OriginAtCenter__MagnitudePixel__Int,
            8,
            2
            ) + "|" + quest_General.quest_Get_Number_WithColumnPadding_AsStringOut_Func(
            controller__Polar_OriginAtCenter__IdleCount_Int,
            8,
            2
            ) + "|" + quest_General.quest_Get_Number_WithColumnPadding_AsStringOut_Func(
            controller__Polar_OriginAtCenter__IdleCount_ModulusNetworkThrottle_Now_Int,
            8,
            2
            ) + "|" + quest_General.quest_Get_Number_WithColumnPadding_AsStringOut_Func(
            controller__Polar_OriginAtCenter__IdleCount_ModulusNetworkThrottle_ADD_INT,
            8,
            2
            ) + "|")
        }
        if (false) {
            serial.writeLine("*** A2: " + "Joy_X:" + quest_General.quest_Get_Number_WithColumnPadding_AsStringOut_Func(
            joystickbit.getRockerValue(joystickbit.rockerType.X),
            8,
            2
            ) + " Joy_Y:" + quest_General.quest_Get_Number_WithColumnPadding_AsStringOut_Func(
            joystickbit.getRockerValue(joystickbit.rockerType.Y),
            8,
            2
            ))
        }
        if (true) {
            network__CpuCycle_Post__Management_Func()
quest_Note_4.quest_Show_String_For_Note_Small_Func(
            "See if this will slow down to column-align serial-prints"
            )
            quest_Note_1.quest_Show_String_For_Note_Small_Func(
            "See if this will slow down to column-align serial-prints"
            )
            quest_Note_1.quest_Show_String_For_Note_Small_Func(
            "20ms (min standard), 100ms, 10000ms (noticably slower, 1sec, but no help)"
            )
            quest_Timer.quest_Set_ContinueCurrentState_CountdownTimer_Func(20, quest_Time_Units_Enum.Milliseconds)
            if (false) {
                quest_Note_5.quest_Show_String_For_Note_Small_Func(
                "TEMP FIX \\/\\/"
                )
                serial.writeLine("* 26-0118-0600:" + controller__Polar_OriginAtCenter__IdleCount_Int % controller__Polar_OriginAtCenter__IdleCount_ModulusNetworkThrottle_Now_Int + "|" + controller__Polar_OriginAtCenter__IdleCount_Int + "|" + controller__Polar_OriginAtCenter__IdleCount_ModulusNetworkThrottle_Now_Int + "|" + botModeInIdle_Fn())
            }
        }
        if (botModeInIdle_Fn()) {
            quest_Note_1.quest_Show_String_For_Note_Small_Func(
            "Avoid sending 'stop' to not interfere.. "
            )
            quest_Note_1.quest_Show_String_For_Note_Small_Func(
            "..turbo-max-motion & other user-inputs pressed"
            )
            quest_Note_1.quest_Show_String_For_Note_Small_Func(
            "Avoid sending 'stop' after above threshold-max,.."
            )
            quest_Note_1.quest_Show_String_For_Note_Small_Func(
            "..to not flood Led-5x5 and Network"
            )
            if (false) {
                quest_Note_5.quest_Show_String_For_Note_Small_Func(
                "TEMP FIX \\/\\/"
                )
                serial.writeLine("* 26-0118-0601:" + controller__Polar_OriginAtCenter__IdleCount_Int % controller__Polar_OriginAtCenter__IdleCount_ModulusNetworkThrottle_Now_Int + "|" + controller__Polar_OriginAtCenter__IdleCount_Int + "|" + controller__Polar_OriginAtCenter__IdleCount_ModulusNetworkThrottle_Now_Int + "|" + botModeInIdle_Fn())
            }
            if (controller__Polar_OriginAtCenter__IdleCount_Int % controller__Polar_OriginAtCenter__IdleCount_ModulusNetworkThrottle_Now_Int == 0) {
                if (true) {
                    images.createImage(`
                        . . . . .
                        . . . . .
                        . . # . .
                        . . . . .
                        . . . . .
                        `).showImage(0, 0)
                    quest_Note_1.quest_Show_String_For_Note_Small_Func(
                    "Zero values if not exceed 'Deadzone_AsIdle'"
                    )
                    radio.sendString("stop")
                    controller__Polar_OriginAtCenter__IdleCount_Int = 0
                    controller__Polar_OriginAtCenter__IdleCount_ModulusNetworkThrottle_Now_Int += controller__Polar_OriginAtCenter__IdleCount_ModulusNetworkThrottle_ADD_INT
                    serial.writeLine("*** B: STOP" + "")
                }
            }
            controller__Polar_OriginAtCenter__IdleCount_Int += 1
            if (false) {
                controller__Polar_OriginAtCenter__IdleCount_Int = 0
                if (controller__Polar_OriginAtCenter__IdleCount_Int % 5 == 0) {
                    if (true) {
                        images.createImage(`
                            . . . . .
                            . . . . .
                            . . # . .
                            . . . . .
                            . . . . .
                            `).showImage(0, 0)
                        quest_Note_1.quest_Show_String_For_Note_Small_Func(
                        "Zero values if not exceed 'Deadzone_AsIdle'"
                        )
                        radio.sendString("stop")
                        controller__Polar_OriginAtCenter__IdleCount_Int = 0
                        serial.writeString("*** B: STOP" + "")
                    }
                }
            }
        }
    }
})
basic.forever(function () {
    quest_Note_6.quest_Show_String_For_Note_Big_Func(
    "'On Logo Pressed'"
    )
    quest_Note_6.quest_Show_String_For_Note_Big_Func(
    "24-0916-0620 Deactivate Servo_Motor[_Left|_Right] Diagnostic Test, Since Complicates UI"
    )
    if (false) {
        quest_Note_3.quest_Show_String_For_Note_Big_Func(
        "Built-In Diagnsotic Test for Both Servo_Motors L & R"
        )
        if (_system_Hw_DeviceType__Now__Id_Int != _system_Hw_DeviceType__Controller_Joystick__ID_INT) {
            quest_Note_1.quest_Show_String_For_Note_Small_Func(
            "Above 'if' condition prevent this diag test from running on 'Controller' yet allowable for any other devices, e.g. 'Bot'."
            )
            if (_system_Sw_ModeState__Now__Id_Int != _system_Sw_ModeState__Autonomous__ID_INT) {
                quest_Note_2.quest_Show_String_For_Note_Small_Func(
                "Just entered the above_conditioned 'if then' state and will process accordingly as needed:"
                )
                _system_Sw_ModeState__Now__Id_Int = _system_Sw_ModeState__Test__ID_INT
                if (_system_Sw_ModeState__Now__Id_Int != _system_Sw_ModeState__Reset__ID_INT) {
                    if (true) {
                        quest_Note_3.quest_Show_String_For_Note_Small_Func(
                        "Servo_Motors: Left Only"
                        )
                        quest_Note_2.quest_Show_String_For_Note_Small_Func(
                        "50% Power for Medium Speed"
                        )
                        quest_Note_2.quest_Show_String_For_Note_Small_Func(
                        "0% Power for Stop"
                        )
                        quest_Motors.quest_Set_PowerMotorsViaBlueRedBlackPins_Func(
                        quest_PortGroup_BlueRedBlack_PortIds_Enum.S1_MotorWheel_Left__S0_MotorWheel_Right,
                        50,
                        0
                        )
                    }
                    if (true) {
                        quest_Note_1.quest_Show_String_For_Note_Small_Func(
                        "From Driver's Viewpoint, Bot's micro:bit is upside_down so set Led_Display_Screen likewise: Begin"
                        )
                        display.rotateTo(display.Direction.UpsideDown)
                        basic.showLeds(`
                            . # . . .
                            # # # . .
                            . # . . .
                            . # . . .
                            . # . # .
                            `)
                        quest_Note_3.quest_Show_String_For_Note_Small_Func(
                        "Continue Current State for Time Below"
                        )
                        quest_Timer.quest_Set_ContinueCurrentState_CountdownTimer_Func(3, quest_Time_Units_Enum.Seconds)
                        quest_Note_1.quest_Show_String_For_Note_Small_Func(
                        "From Driver's Viewpoint, Bot's micro:bit is upside_down so set Led_Display_Screen likewise: End"
                        )
                        display.rotateTo(display.Direction.Normal)
                    }
                }
                if (_system_Sw_ModeState__Now__Id_Int != _system_Sw_ModeState__Reset__ID_INT) {
                    if (true) {
                        quest_Note_3.quest_Show_String_For_Note_Small_Func(
                        "Servo_Motors: Right Only"
                        )
                        quest_Note_2.quest_Show_String_For_Note_Small_Func(
                        "50% Power for Medium Speed"
                        )
                        quest_Note_2.quest_Show_String_For_Note_Small_Func(
                        "0% Power for Stop"
                        )
                        quest_Motors.quest_Set_PowerMotorsViaBlueRedBlackPins_Func(
                        quest_PortGroup_BlueRedBlack_PortIds_Enum.S1_MotorWheel_Left__S0_MotorWheel_Right,
                        0,
                        50
                        )
                    }
                    if (true) {
                        quest_Note_1.quest_Show_String_For_Note_Small_Func(
                        "From Driver's Viewpoint, Bot's micro:bit is upside_down so set Led_Display_Screen likewise: Begin"
                        )
                        display.rotateTo(display.Direction.UpsideDown)
                        basic.showLeds(`
                            . . . # .
                            . . # # #
                            . . . # .
                            . . . # .
                            . # . # .
                            `)
                        quest_Note_3.quest_Show_String_For_Note_Small_Func(
                        "Continue Current State for Time Below"
                        )
                        quest_Timer.quest_Set_ContinueCurrentState_CountdownTimer_Func(3, quest_Time_Units_Enum.Seconds)
                        quest_Note_1.quest_Show_String_For_Note_Small_Func(
                        "From Driver's Viewpoint, Bot's micro:bit is upside_down so set Led_Display_Screen likewise: End"
                        )
                        display.rotateTo(display.Direction.Normal)
                    }
                }
                if (_system_Sw_ModeState__Now__Id_Int != _system_Sw_ModeState__Reset__ID_INT) {
                    if (true) {
                        quest_Note_3.quest_Show_String_For_Note_Small_Func(
                        "Servo_Motors: Left + Right"
                        )
                        quest_Note_2.quest_Show_String_For_Note_Small_Func(
                        "50% Power for Medium Speed"
                        )
                        quest_Note_2.quest_Show_String_For_Note_Small_Func(
                        "0% Power for Stop"
                        )
                        quest_Motors.quest_Set_PowerMotorsViaBlueRedBlackPins_Func(
                        quest_PortGroup_BlueRedBlack_PortIds_Enum.S1_MotorWheel_Left__S0_MotorWheel_Right,
                        50,
                        50
                        )
                    }
                    if (true) {
                        quest_Note_1.quest_Show_String_For_Note_Small_Func(
                        "From Driver's Viewpoint, Bot's micro:bit is upside_down so set Led_Display_Screen likewise: Begin"
                        )
                        display.rotateTo(display.Direction.UpsideDown)
                        basic.showLeds(`
                            . # . # .
                            # # # # #
                            . # . # .
                            . # . # .
                            . # . # .
                            `)
                        quest_Note_3.quest_Show_String_For_Note_Small_Func(
                        "Continue Current State for Time Below"
                        )
                        quest_Timer.quest_Set_ContinueCurrentState_CountdownTimer_Func(3, quest_Time_Units_Enum.Seconds)
                        quest_Note_1.quest_Show_String_For_Note_Small_Func(
                        "From Driver's Viewpoint, Bot's micro:bit is upside_down so set Led_Display_Screen likewise: End"
                        )
                        display.rotateTo(display.Direction.Normal)
                    }
                }
                if (_system_Sw_ModeState__Now__Id_Int != _system_Sw_ModeState__Reset__ID_INT) {
                    if (true) {
                        quest_Note_3.quest_Show_String_For_Note_Small_Func(
                        "Servo_Motors: All Stop"
                        )
                        quest_Motors.quest_Set_PowerMotorsViaBlueRedBlackPins_Func(
                        quest_PortGroup_BlueRedBlack_PortIds_Enum.S1_MotorWheel_Left__S0_MotorWheel_Right,
                        0,
                        0
                        )
                    }
                    if (true) {
                        quest_Note_1.quest_Show_String_For_Note_Small_Func(
                        "From Driver's Viewpoint, Bot's micro:bit is upside_down so set Led_Display_Screen likewise: Begin"
                        )
                        display.rotateTo(display.Direction.UpsideDown)
                        basic.showLeds(`
                            . . . . .
                            . . . . .
                            . . . . .
                            . . . . .
                            . # . # .
                            `)
                        quest_Note_3.quest_Show_String_For_Note_Small_Func(
                        "Continue Current State for Time Below"
                        )
                        quest_Timer.quest_Set_ContinueCurrentState_CountdownTimer_Func(3, quest_Time_Units_Enum.Seconds)
                        quest_Note_1.quest_Show_String_For_Note_Small_Func(
                        "From Driver's Viewpoint, Bot's micro:bit is upside_down so set Led_Display_Screen likewise: End"
                        )
                        display.rotateTo(display.Direction.Normal)
                    }
                }
                if (_system_Sw_ModeState__Now__Id_Int == _system_Sw_ModeState__Reset__ID_INT) {
                    if (true) {
                        quest_Note_3.quest_Show_String_For_Note_Small_Func(
                        "Servo_Motors: All Stop"
                        )
                        quest_Motors.quest_Set_PowerMotorsViaBlueRedBlackPins_Func(
                        quest_PortGroup_BlueRedBlack_PortIds_Enum.S1_MotorWheel_Left__S0_MotorWheel_Right,
                        0,
                        0
                        )
                    }
                    if (true) {
                        quest_Note_1.quest_Show_String_For_Note_Small_Func(
                        "From Driver's Viewpoint, Bot's micro:bit is upside_down so set Led_Display_Screen likewise: Begin"
                        )
                        display.rotateTo(display.Direction.UpsideDown)
                        basic.showLeds(`
                            . . . . .
                            . . . . .
                            . . . . .
                            . . . . .
                            . # . # .
                            `)
                        quest_Note_1.quest_Show_String_For_Note_Small_Func(
                        "From Driver's Viewpoint, Bot's micro:bit is upside_down so set Led_Display_Screen likewise: End"
                        )
                        display.rotateTo(display.Direction.Normal)
                    }
                }
                quest_Note_2.quest_Show_String_For_Note_Small_Func(
                "Just exited the above_conditioned 'if then' state and will process accordingly as needed:"
                )
                _system_Sw_ModeState__Now__Id_Int = _system_Sw_ModeState__Run__AndShow_01_DeviceType__ID_INT
            }
        }
    }
})
loops.everyInterval(3600000, function () {
    quest_Note_6.quest_Show_String_For_Note_Small_Func(
    "This stack is practically a 'non-executing' stack that does not tie up cpu_resources with its 1 hour (3600,000)"
    )
    quest_Note_6.quest_Show_String_For_Note_Small_Func(
    "Also the 'if(false)' mini-stacks will be skipped by cpu, for further non-resource burdening"
    )
    if (false) {
        quest_Note_6.quest_Show_String_For_Note_Big_Func(
        "Staff: Very Important Notes"
        )
        if (false) {
            quest_Note_1.quest_Show_String_For_Note_Small_Func(
            "Levels 1, 2, 2.1"
            )
            quest_Note_1.quest_Show_String_For_Note_Small_Func(
            "* Level 1: Hardcoded Static via Actual_Numbers for MotorPower%"
            )
            quest_Note_1.quest_Show_String_For_Note_Small_Func(
            "* Level 2: Softcoded Dynamic via Variables/Constants for MotorPower% "
            )
            quest_Note_1.quest_Show_String_For_Note_Small_Func(
            "* Level 2.1 Add Controller_Joystick * Level 2.2 Add Gear 3 (90%?)"
            )
        }
        quest_Note_1.quest_Show_String_For_Note_Small_Func(
        "Basic Comment_Colors Usage:: Black: Very Big Picture, Blue: Big Picture, Green: Following Block_Code Moddable, Orange: Question/TODO, Magenta: Special Multi-Purpose "
        )
        quest_Note_1.quest_Show_String_For_Note_Small_Func(
        "micro:bit Ver2 Warning during Download is Ignorable Yet Courteously Helpful"
        )
        quest_Note_1.quest_Show_String_For_Note_Small_Func(
        "'if_then' mini-stacks useful for modular 3-D code select/duplicate/move/delete"
        )
        quest_Note_1.quest_Show_String_For_Note_Small_Func(
        "Light_Gray Functions non-editable (backend staff-use code only)"
        )
        quest_Note_1.quest_Show_String_For_Note_Small_Func(
        "For Group_CHannel_# (Bot_Id): Propose: 1-10 Staff Use, 11-99 Student Use"
        )
        quest_Note_1.quest_Show_String_For_Note_Small_Func(
        "SW Reset: Long_Press Logo for 3 sec min"
        )
        quest_Note_1.quest_Show_String_For_Note_Small_Func(
        "Built-in Diagnostic Test: Short_Press Logo for 1 sec max"
        )
        quest_Note_1.quest_Show_String_For_Note_Small_Func(
        "'Blocks' Window homes 'on start'_stack as top_left corner of editor_screen, until 'on start' is moved below, then next stack to right presides"
        )
        quest_Note_3.quest_Show_String_For_Note_Small_Func(
        "All These Levels are Intermediate Level Coding due to Networking Pairing Involved.  Basic Diagnostic Servo_Motors (Autonomoous) is Beginner Level."
        )
        quest_Note_3.quest_Show_String_For_Note_Small_Func(
        "This Intermediate Level Network_Pairing has 1sec_Lag Response Time; The Other Advanced Level Network_Pairing has Real_Time Response Time."
        )
        quest_Note_3.quest_Show_String_For_Note_Small_Func(
        "For Level 1, can keep 'Forward: set manual_servo_motors' Block functional, yet reset to 0 all other 'set manual_servo_motors' Blocks for Discovery Learning"
        )
        quest_Note_3.quest_Show_String_For_Note_Small_Func(
        "If duplicate stacks exist, then the highest stack is active and others are non_active"
        )
    }
    if (false) {
        quest_Note_6.quest_Show_String_For_Note_Big_Func(
        "Staff: Important Notes"
        )
        quest_Note_1.quest_Show_String_For_Note_Small_Func(
        "Upon open file, Editor zooms in on closest stack to right of original_origin from project_creation"
        )
        quest_Note_1.quest_Show_String_For_Note_Small_Func(
        "Semantic Naming prefers '_' vs. '-' since latter can be conufused with minus_sign"
        )
        quest_Note_1.quest_Show_String_For_Note_Small_Func(
        "'every 360000 ms' (1 hour) Stacks can be ignored, esp w/ 'if false' embedded"
        )
        quest_Note_1.quest_Show_String_For_Note_Small_Func(
        "Avoid using 'show leds' Block since will cause lag & degrade real-time response"
        )
        quest_Note_1.quest_Show_String_For_Note_Small_Func(
        "Seems like 'signficant' changes to JavaScript can activate 'format code', rearrange stacks to original position"
        )
        quest_Note_1.quest_Show_String_For_Note_Small_Func(
        "Important 'system' variables are 1) _system_Hw_DeviceType__* (Hw=Hardware) and 2) _system_Sw_ModeState__* (Sw=Software)"
        )
        quest_Note_1.quest_Show_String_For_Note_Small_Func(
        "If Buttons C-F for Gears/Misc, Maybe 'Logo Up/Down' for 'Servo_Arm Up/Down'"
        )
        quest_Note_1.quest_Show_String_For_Note_Small_Func(
        "'Rotatedisplay' could be used on Bot's Led_Screen, but causes light flickering on bottom row, so maybe avoid"
        )
        quest_Note_1.quest_Show_String_For_Note_Small_Func(
        "Reliable/Faster Response If Screen_Led_Graphics After Important Action Blocks Above"
        )
        if (false) {
            quest_Note_3.quest_Show_String_For_Note_Small_Func(
            "Main upgrade from Lv1 to Lv2 is replacing cpu_laggy 'show leds' block with cpu_fast 'plox x _ y _' block, such as below: "
            )
            if (false) {
                quest_Note_1.quest_Show_String_For_Note_Small_Func(
                "West"
                )
                quest_Note_1.quest_Show_String_For_Note_Small_Func(
                "LED 5x5 Screen: (0,0) @ Upper_Left -&- (4,4) @ Bottom_Right"
                )
                led.plot(4, 2)
            } else if (false) {
                quest_Note_1.quest_Show_String_For_Note_Small_Func(
                "North"
                )
                quest_Note_1.quest_Show_String_For_Note_Small_Func(
                "LED 5x5 Screen: (0,0) @ Upper_Left -&- (4,4) @ Bottom_Right"
                )
                led.plot(2, 0)
            } else if (false) {
                quest_Note_1.quest_Show_String_For_Note_Small_Func(
                "East"
                )
                quest_Note_1.quest_Show_String_For_Note_Small_Func(
                "LED 5x5 Screen: (0,0) @ Upper_Left -&- (4,4) @ Bottom_Right"
                )
                led.plot(2, 4)
            } else if (false) {
                quest_Note_1.quest_Show_String_For_Note_Small_Func(
                "South"
                )
                quest_Note_1.quest_Show_String_For_Note_Small_Func(
                "LED 5x5 Screen: (0,0) @ Upper_Left -&- (4,4) @ Bottom_Right"
                )
                led.plot(0, 2)
            } else if (false) {
                quest_Note_1.quest_Show_String_For_Note_Small_Func(
                "Idle: Neutral"
                )
                quest_Note_1.quest_Show_String_For_Note_Small_Func(
                "LED 5x5 Screen: (0,0) @ Upper_Left -&- (4,4) @ Bottom_Right"
                )
                led.plot(2, 2)
            } else {
                if (true) {
                    quest_Note_1.quest_Show_String_For_Note_Small_Func(
                    "Gear: Lo"
                    )
                    led.plot(2, 3)
                } else {
                    quest_Note_1.quest_Show_String_For_Note_Small_Func(
                    "Gear: Hi"
                    )
                    led.plot(2, 1)
                }
            }
        }
    }
    if (false) {
        quest_Note_6.quest_Show_String_For_Note_Big_Func(
        "Staff: Notes"
        )
        if (false) {
            quest_Note_1.quest_Show_String_For_Note_Small_Func(
            "Following Bug Resolved: TYJ"
            )
            quest_Note_1.quest_Show_String_For_Note_Small_Func(
            "////jwc n may cause compiler bug, auto_creates 'let controller__Polar_OriginAtCenter__AngleDegree__Int = 0' at Blocks: on start stack: root level: error_Message_Func(\"2024-0212-1730\", convertToText(controller__Polar_OriginAtCenter__AngleDegree__Int))"
            )
            quest_Note_1.quest_Show_String_For_Note_Small_Func(
            "Fix: 'error_Message_Func(\"2024-0212-1730\", \"Invalid 'controller__Polar_OriginAtCenter__AngleDegree__Int'\")'"
            )
            if (false) {
                quest_Note_1.quest_Show_String_For_Note_Small_Func(
                "KINDLY IGNORE:: COMPILER ISSUE: NEED FOLLOING UNUSUAL VARIABLE DECLARATION BY COMPILER"
                )
                quest_Note_1.quest_Show_String_For_Note_Small_Func(
                "Following Always First Line of This 'on start' Stack by Compiler."
                )
                quest_Note_1.quest_Show_String_For_Note_Small_Func(
                "Can Move Anywhere on Same Stack, But Needs to Stay Root Level (Main_Stack), e.g. Not Nested in Sub/Mini_Stack"
                )
                quest_Note_1.quest_Show_String_For_Note_Small_Func(
                "* Current variable below is: 'controller__Polar_OriginAtCenter__AngleDegree__Int'"
                )
            }
        }
        if (false) {
            quest_Note_1.quest_Show_String_For_Note_Small_Func(
            "jwc ? cause compiler to auto-create weird code below from 'convert_Controller_Joystick_Directional_AngleDegrees__To__Microbit5x5Screen_Func(controller__Polar_OriginAtCenter__AngleDegree__Int)'"
            )
            quest_Note_1.quest_Show_String_For_Note_Small_Func(
            "jwc ? may cause compiler bug, auto_creates 'let controller__Polar_OriginAtCenter__AngleDegree__Int = 0' at inactive free space"
            )
        }
        quest_Note_1.quest_Show_String_For_Note_Small_Func(
        "When activating a 'on Radio Received' stack, replace 'receivedString_TO_BE_REPLACED_BY_ONrADIOrECEIVED_STACK' with 'receivedString'"
        )
        if (false) {
            quest_Note_4.quest_Show_String_For_Note_Small_Func(
            "Cpu-Cycle Delay: 20ms:: 115200-Y, 57600-Y, 38400-Y"
            )
            quest_Note_4.quest_Show_String_For_Note_Small_Func(
            "Cpu-Cycle Delay: 20ms:: 14400-N, 28800-N, 31250-N "
            )
            serial.redirect(
            SerialPin.USB_TX,
            SerialPin.USB_RX,
            BaudRate.BaudRate115200
            )
        }
    }
})
