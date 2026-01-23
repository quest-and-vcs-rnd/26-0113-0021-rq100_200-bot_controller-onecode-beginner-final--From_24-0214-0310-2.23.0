# // jwc 24-0214-0310-rq100-onecode-bot_controller-beginner-final.ts
def screen_PlotNewDot_ClearOldDot_WithHeartbeat_Func(screen_x_new_num: number, screen_y_new_num: number):
    global screen_X_Old_Num, screen_Y_Old_Num, screen_XY_Brightness_Old_Num
    led.plot_brightness(screen_X_Old_Num,
        screen_Y_Old_Num,
        screen_XY_Brightness_Old_Num)
    screen_X_Old_Num = screen_x_new_num
    screen_Y_Old_Num = screen_y_new_num
    screen_XY_Brightness_Old_Num = led.point_brightness(screen_x_new_num, screen_y_new_num)
    led.plot_brightness(screen_x_new_num,
        screen_y_new_num,
        screenBrightness_Heartbeat_Count_Int)
def screen_Clear_Func():
    for index_X in range(5):
        for index_Y in range(5):
            if led.point(index_X, index_Y):
                led.unplot(index_X, index_Y)

def on_logo_long_pressed():
    global _system_Sw_ModeState__Now__Id_Int
    if True:
        quest_Note_3.quest_Show_String_For_Note_Big_Func("Software Reset")
        if True:
            quest_Note_1.quest_Show_String_For_Note_Small_Func("Give time for other stacks to complete under different concurrent 'SW_ModeState' ...")
            quest_Note_1.quest_Show_String_For_Note_Small_Func("... to not conflict with following LED Display")
            _system_Sw_ModeState__Now__Id_Int = _system_Sw_ModeState__Reset__ID_INT
            quest_Note_3.quest_Show_String_For_Note_Small_Func("Continue Current State for Time Below")
            # 1.0 too slow, 0.5 not bad, try 0.20
            quest_Timer.quest_Set_ContinueCurrentState_CountdownTimer_Func(0.2, quest_Time_Units_Enum.Seconds)
        basic.show_leds("""
            # . # . #
            . # # # .
            # # . # #
            . # # # .
            # . # . #
            """)
        if True:
            quest_Note_3.quest_Show_String_For_Note_Small_Func("Continue Current State for Time Below")
            quest_Timer.quest_Set_ContinueCurrentState_CountdownTimer_Func(3, quest_Time_Units_Enum.Seconds)
        control.reset()
input.on_logo_event(TouchButtonEvent.LONG_PRESSED, on_logo_long_pressed)

def bot_Servo_Motors_Basic_Fn(network_ReceivedString_FromControllerJoystick_Str_ParamIn: str):
    if network_ReceivedString_FromControllerJoystick_Str_ParamIn == "forward":
        images.create_image("""
            . . # . .
            . # # # .
            . . # . .
            . . # . .
            . . . . .
            """).show_image(0, 0)
        quest_Note_2.quest_Show_String_For_Note_Big_Func("Below Moddable: Motor Power_% [+/-100% max]")
        quest_Motors.quest_Set_PowerMotorsViaBlueRedBlackPins_Func(quest_PortGroup_BlueRedBlack_PortIds_Enum.S1_MotorWheel_Left__S0_MotorWheel_Right,
            60,
            60)
    elif network_ReceivedString_FromControllerJoystick_Str_ParamIn == "backward":
        images.create_image("""
            . . . . .
            . . # . .
            . . # . .
            . # # # .
            . . # . .
            """).show_image(0, 0)
        quest_Note_2.quest_Show_String_For_Note_Big_Func("Below Moddable: Motor Power_% [+/-100% max]")
        quest_Motors.quest_Set_PowerMotorsViaBlueRedBlackPins_Func(quest_PortGroup_BlueRedBlack_PortIds_Enum.S1_MotorWheel_Left__S0_MotorWheel_Right,
            -60,
            -60)
    elif network_ReceivedString_FromControllerJoystick_Str_ParamIn == "left":
        images.create_image("""
            . . . . .
            . # . . .
            # # # # .
            . # . . .
            . . . . .
            """).show_image(0, 0)
        quest_Note_2.quest_Show_String_For_Note_Big_Func("Below Moddable: Motor Power_% [+/-100% max]")
        quest_Motors.quest_Set_PowerMotorsViaBlueRedBlackPins_Func(quest_PortGroup_BlueRedBlack_PortIds_Enum.S1_MotorWheel_Left__S0_MotorWheel_Right,
            0,
            50)
    elif network_ReceivedString_FromControllerJoystick_Str_ParamIn == "right":
        images.create_image("""
            . . . . .
            . . . # .
            . # # # #
            . . . # .
            . . . . .
            """).show_image(0, 0)
        quest_Note_2.quest_Show_String_For_Note_Big_Func("Below Moddable: Motor Power_% [+/-100% max]")
        quest_Motors.quest_Set_PowerMotorsViaBlueRedBlackPins_Func(quest_PortGroup_BlueRedBlack_PortIds_Enum.S1_MotorWheel_Left__S0_MotorWheel_Right,
            50,
            0)
    elif network_ReceivedString_FromControllerJoystick_Str_ParamIn == "stop":
        images.create_image("""
            . . . . .
            . . . . .
            . . # . .
            . . . . .
            . . . . .
            """).show_image(0, 0)
        # //jwc o roboQuest.powerMotorsViaBlueRedBlackPins(PortGroup_BlueRedBlack__PortIds__Enum.S1_MotorLeft__S0_MotorRight, motor_Power_ZERO_INT, motor_Power_ZERO_INT)
        quest_Motors.quest_Set_PowerMotorsViaBlueRedBlackPins_Func(quest_PortGroup_BlueRedBlack_PortIds_Enum.S1_MotorWheel_Left__S0_MotorWheel_Right,
            0,
            0)
def bot_Servo_Arms_Fn(network_ReceivedString_FromControllerJoystick_Str_ParamIn2: str):
    if network_ReceivedString_FromControllerJoystick_Str_ParamIn2 == "arm_000__down":
        images.create_image("""
            . . . . .
            . . . . .
            # # . # #
            . . . . .
            . . . . .
            """).show_image(0, 0)
        quest_Note_1.quest_Show_String_For_Note_Small_Func("If [0|360] is jittery, insure battery at 75% power min.")
        quest_Note_1.quest_Show_String_For_Note_Small_Func("GeekServo-360-Degrees-2kg:360-degrees(not 180-degrees)")
        quest_Note_2.quest_Show_String_For_Note_Big_Func("Below Moddable: S7_ServoArm_Left")
        quest_Motors.quest_Set_AutoDegrees_ForServoArm_SMALL_Func(quest_PortSingle_ServoArmBeam_PortId_Enum.S7_ServoArm_Left,
            quest_ServoArm_DegreesInDirection_Enum.Degree_000_Down,
            quest_Debug_Show_Enum.Dashboard_OLED)
        quest_Note_2.quest_Show_String_For_Note_Big_Func("Below Moddable: S6_ServoArm_Right")
        quest_Motors.quest_Set_AutoDegrees_ForServoArm_SMALL_Func(quest_PortSingle_ServoArmBeam_PortId_Enum.S6_ServoArm_Right,
            quest_ServoArm_DegreesInDirection_Enum.Degree_000_Down,
            quest_Debug_Show_Enum.Dashboard_OLED)
    elif network_ReceivedString_FromControllerJoystick_Str_ParamIn2 == "arm_045__up_half":
        images.create_image("""
            # . . . #
            . # . # .
            . . . . .
            . . . . .
            . . . . .
            """).show_image(0, 0)
        quest_Note_1.quest_Show_String_For_Note_Small_Func("If [0|360] is jittery, insure battery at 75% power min.")
        quest_Note_1.quest_Show_String_For_Note_Small_Func("GeekServo-360-Degrees-2kg:360-degrees(not 180-degrees)")
        quest_Note_2.quest_Show_String_For_Note_Big_Func("Below Moddable: S7_ServoArm_Left")
        quest_Motors.quest_Set_AutoDegrees_ForServoArm_SMALL_Func(quest_PortSingle_ServoArmBeam_PortId_Enum.S7_ServoArm_Left,
            quest_ServoArm_DegreesInDirection_Enum.Degree_045_Up_Half,
            quest_Debug_Show_Enum.Dashboard_OLED)
        quest_Note_2.quest_Show_String_For_Note_Big_Func("Below Moddable: S6_ServoArm_Right")
        quest_Motors.quest_Set_AutoDegrees_ForServoArm_SMALL_Func(quest_PortSingle_ServoArmBeam_PortId_Enum.S6_ServoArm_Right,
            quest_ServoArm_DegreesInDirection_Enum.Degree_045_Up_Half,
            quest_Debug_Show_Enum.Dashboard_OLED)
    elif network_ReceivedString_FromControllerJoystick_Str_ParamIn2 == "arm_090__up_full":
        images.create_image("""
            . # . # .
            . # . # .
            . . . . .
            . . . . .
            . . . . .
            """).show_image(0, 0)
        quest_Note_1.quest_Show_String_For_Note_Small_Func("If [0|360] is jittery, insure battery at 75% power min.")
        quest_Note_1.quest_Show_String_For_Note_Small_Func("GeekServo-360-Degrees-2kg:360-degrees(not 180-degrees)")
        quest_Note_2.quest_Show_String_For_Note_Big_Func("Below Moddable: S7_ServoArm_Left")
        quest_Motors.quest_Set_AutoDegrees_ForServoArm_SMALL_Func(quest_PortSingle_ServoArmBeam_PortId_Enum.S7_ServoArm_Left,
            quest_ServoArm_DegreesInDirection_Enum.Degree_090_Up_Full,
            quest_Debug_Show_Enum.Dashboard_OLED)
        quest_Note_2.quest_Show_String_For_Note_Big_Func("Below Moddable: S6_ServoArm_Right")
        quest_Motors.quest_Set_AutoDegrees_ForServoArm_SMALL_Func(quest_PortSingle_ServoArmBeam_PortId_Enum.S6_ServoArm_Right,
            quest_ServoArm_DegreesInDirection_Enum.Degree_090_Up_Full,
            quest_Debug_Show_Enum.Dashboard_OLED)
def bot_Servo_Motors_Turbo_Fn(network_ReceivedString_FromControllerJoystick_Str_ParamIn3: str):
    if network_ReceivedString_FromControllerJoystick_Str_ParamIn3 == "forward_turbo":
        images.create_image("""
            . . # . .
            . # # # .
            # . # . #
            . . # . .
            . . # . .
            """).show_image(0, 0)
        quest_Note_2.quest_Show_String_For_Note_Big_Func("Below Moddable: Forward-Turbo")
        # //jwc o roboQuest.powerMotorsViaBlueRedBlackPins(PortGroup_BlueRedBlack__PortIds__Enum.S1_MotorLeft__S0_MotorRight, motor_Power_ZERO_INT, motor_Power_ZERO_INT)
        quest_Motors.quest_Set_PowerMotorsViaBlueRedBlackPins_Func(quest_PortGroup_BlueRedBlack_PortIds_Enum.S1_MotorWheel_Left__S0_MotorWheel_Right,
            90,
            90)
    elif network_ReceivedString_FromControllerJoystick_Str_ParamIn3 == "backward_turbo":
        images.create_image("""
            . . # . .
            . . # . .
            # . # . #
            . # # # .
            . . # . .
            """).show_image(0, 0)
        quest_Note_2.quest_Show_String_For_Note_Big_Func("Below Moddable: Backward-Turbo")
        # //jwc o roboQuest.powerMotorsViaBlueRedBlackPins(PortGroup_BlueRedBlack__PortIds__Enum.S1_MotorLeft__S0_MotorRight, motor_Power_ZERO_INT, motor_Power_ZERO_INT)
        quest_Motors.quest_Set_PowerMotorsViaBlueRedBlackPins_Func(quest_PortGroup_BlueRedBlack_PortIds_Enum.S1_MotorWheel_Left__S0_MotorWheel_Right,
            -90,
            -90)
    elif network_ReceivedString_FromControllerJoystick_Str_ParamIn3 == "left_turbo":
        images.create_image("""
            . . # . .
            . # . . .
            # # # # #
            . # . . .
            . . # . .
            """).show_image(0, 0)
        quest_Note_2.quest_Show_String_For_Note_Big_Func("Below Moddable: Left-Turbo")
        # //jwc o roboQuest.powerMotorsViaBlueRedBlackPins(PortGroup_BlueRedBlack__PortIds__Enum.S1_MotorLeft__S0_MotorRight, motor_Power_ZERO_INT, motor_Power_ZERO_INT)
        quest_Motors.quest_Set_PowerMotorsViaBlueRedBlackPins_Func(quest_PortGroup_BlueRedBlack_PortIds_Enum.S1_MotorWheel_Left__S0_MotorWheel_Right,
            0,
            80)
    elif network_ReceivedString_FromControllerJoystick_Str_ParamIn3 == "right_turbo":
        images.create_image("""
            . . # . .
            . . . # .
            # # # # #
            . . . # .
            . . # . .
            """).show_image(0, 0)
        quest_Note_2.quest_Show_String_For_Note_Big_Func("Below Moddable: Right-Turbo")
        # //jwc o roboQuest.powerMotorsViaBlueRedBlackPins(PortGroup_BlueRedBlack__PortIds__Enum.S1_MotorLeft__S0_MotorRight, motor_Power_ZERO_INT, motor_Power_ZERO_INT)
        quest_Motors.quest_Set_PowerMotorsViaBlueRedBlackPins_Func(quest_PortGroup_BlueRedBlack_PortIds_Enum.S1_MotorWheel_Left__S0_MotorWheel_Right,
            80,
            0)

def on_button_pressed_a():
    global _system_Hw_DeviceType__Now__Id_Int, _system_Sw_ModeState__Now__Id_Int
    if True:
        quest_Note_1.quest_Show_String_For_Note_Small_Func("Important Coding Note: Only 1 Input Stack for Button A||B Allowed for 'main/main_backend.ts'")
        if _system_Sw_ModeState__Now__Id_Int == _system_Sw_ModeState__Edit_GroupChannelNum__ID_INT:
            quest_Note_3.quest_Show_String_For_Note_Big_Func("Buttons A & B Dual Usage: Usage #2: Given Network_Paired, Increment 'GroupChannelNum' when in Respective Edit Mode")
            device_Mode_Edit_GroupChannelNum_ButtonA_Func()
        elif _system_Hw_DeviceType__Now__Id_Int == _system_Hw_DeviceType__Null__ID_INT:
            quest_Note_3.quest_Show_String_For_Note_Big_Func("Buttons A & B Dual Usage: Usage #1: Designate this micro:bit as Controller_Joystick to *Start* Network_Pairing w/ Bot")
            quest_Note_1.quest_Show_String_For_Note_Big_Func("Code Activation of Controller_Joystick:: 1of2 : 1st micro:bit Being Pressed of Button A||B is Designated as Device:Controller_Joystick")
            _system_Hw_DeviceType__Now__Id_Int = _system_Hw_DeviceType__Controller_Joystick__ID_INT
            _system_Sw_ModeState__Now__Id_Int = _system_Sw_ModeState__Run__AndShow_02_GroupChannelNum__ID_INT
            screen_Clear_Func()
            setup_ControllerOnly_Func()
        quest_Note_6.quest_Show_String_For_Note_Big_Func("Level 2.1: Variables_n_Constants_Yes")
input.on_button_pressed(Button.A, on_button_pressed_a)

def on_gesture_logo_up():
    global controller__Polar_OriginAtCenter__IdleCount_Int
    # //jwc o if (device_Type_Controller_Bool && (_system_Sw_ModeState__Now__Id_Int == _system_Sw_ModeState__Run__AndShow_01_DeviceType__ID_INT || _system_Sw_ModeState__Now__Id_Int == _system_Sw_ModeState__Run__AndShow_02_GroupChannelNum__ID_INT)) {
    if _system_Hw_DeviceType__Now__Id_Int == _system_Hw_DeviceType__Controller_Joystick__ID_INT and (_system_Sw_ModeState__Now__Id_Int == _system_Sw_ModeState__Run__AndShow_01_DeviceType__ID_INT or _system_Sw_ModeState__Now__Id_Int == _system_Sw_ModeState__Run__AndShow_02_GroupChannelNum__ID_INT):
        images.create_image("""
            . # . # .
            . # . # .
            . . . . .
            . . . . .
            . . . . .
            """).show_image(0, 0)
        radio.send_string("arm_090__up_full")
        quest_Note_1.quest_Show_String_For_Note_Small_Func("Following 0-Reset to Allow Idle/Stop Afterwards")
        controller__Polar_OriginAtCenter__IdleCount_Int = 0
input.on_gesture(Gesture.LOGO_UP, on_gesture_logo_up)

# BUG FIX: Switch from BlockCode vs TextCode
# let device_Type_Controller_Bool = 0
# 
# let device_Mode_Edit_GroupChannelNum_Bool = 0
# 
# let motor_Power_Gear_02_MAX = 0
# 
# let motor_Power_Gear_01_MAX = 0
# 
# let device_Type_Controller_Bool = 0
def setup_VariablesAndConstants_UserCustomizableNot_Func():
    global _system_Hw_DeviceType__Null__ID_INT, _system_Hw_DeviceType__Bot__ID_INT, _system_Hw_DeviceType__Controller_Joystick__ID_INT, _system_Hw_DeviceType__Now__Id_Int, controller__Polar_OriginAtCenter__MagnitudePixel__IdleDeadzone_Max512__INT, controller__Polar_OriginAtCenter__AngleDegree__Int, controller__Polar_OriginAtCenter__AngleDegree__AsIncremented_By__Int, controller__Polar_OriginAtCenter__MagnitudePixel__Int, motor_Power_Full_Current_Pos, motor_Power_Full_Current_Neg, motor_Power_Half_Current, motor_Power_ZERO_INT, motor_Power_Gear_Number_Int, screenBrightness_Heartbeat_Count_Int, screen_Delay_MSEC_INT, _system_Sw_ModeState__Null__ID_INT, _system_Sw_ModeState__Run__AndShow_01_DeviceType__ID_INT, _system_Sw_ModeState__Run__AndShow_02_GroupChannelNum__ID_INT, _system_Sw_ModeState__Autonomous__ID_INT, _system_Sw_ModeState__Edit_GroupChannelNum__ID_INT, _system_Sw_ModeState__Test__ID_INT, _system_Sw_ModeState__Reset__ID_INT, _system_Sw_ModeState__Now__Id_Int, screen_XY_Brightness_Old_Num, screen_Y_Old_Num, screen_X_Old_Num, motor_Power_Gear_01_MAX, motor_Power_Gear_02_MAX, servoArm_Now_Degrees_Int, servoArm_DOWN_MAX_DEGREES_INT, servoArm_UP_MAX_DEGREES_INT, servoArm_Left_UP_DEGREES_INT, servoArm_Right_UP_DEGREES_INT, servoArm_Left_Up_Bool, servoArm_Right_Up_Bool
    if True:
        quest_Note_3.quest_Show_String_For_Note_Big_Func("THIS STACK NOT CUSTOMIZABLE")
        if True:
            quest_Note_6.quest_Show_String_For_Note_Small_Func("Mannual Overrides to fix compiler bug")
            quest_Note_6.quest_Show_String_For_Note_Small_Func("Following assignments prevent variables from being 'grayed' out")
            if True:
                # //jwc o device_Type_Bot_Bool = false
                # //jwc o device_Type_Controller_Bool = false
                _system_Hw_DeviceType__Null__ID_INT = 0
                _system_Hw_DeviceType__Bot__ID_INT = 1
                _system_Hw_DeviceType__Controller_Joystick__ID_INT = 2
                if True:
                    _system_Hw_DeviceType__Now__Id_Int = _system_Hw_DeviceType__Null__ID_INT
            if True:
                quest_Note_1.quest_Show_String_For_Note_Small_Func("Following Pixels_Max: Horizontal/Vertical: 512 -&- Diagonal: 887 [= sqrt(512^2 + 512^2)]")
                quest_Note_1.quest_Show_String_For_Note_Small_Func("Was 15, try 30 to accomodate off_calibrated controllers")
                quest_Note_1.quest_Show_String_For_Note_Small_Func("24-0911-1220 jwc: try 30 to 50 (some joysticks: jittery idle)")
                quest_Note_4.quest_Show_String_For_Note_Small_Func("Optional Advanced Coding: Following Block_Code Moddable")
                controller__Polar_OriginAtCenter__MagnitudePixel__IdleDeadzone_Max512__INT = 50
            if True:
                controller__Polar_OriginAtCenter__AngleDegree__Int = 0
                controller__Polar_OriginAtCenter__AngleDegree__AsIncremented_By__Int = 0
                controller__Polar_OriginAtCenter__MagnitudePixel__Int = 0
            if True:
                motor_Power_Full_Current_Pos = 0
                motor_Power_Full_Current_Neg = 0
                motor_Power_Half_Current = 0
                motor_Power_ZERO_INT = 0
                # //jwc ? // jwc: add to fix compiler error
                # //jwc ? motor_Power_Gear_01_MAX = 0
                # //jwc ? // jwc: add to fix compiler error
                # //jwc ? motor_Power_Gear_02_MAX = 0
                motor_Power_Gear_Number_Int = 0
            if True:
                screenBrightness_Heartbeat_Count_Int = 0
            if True:
                quest_Note_1.quest_Show_String_For_Note_Small_Func("20msec = 50.0fps (More Noticeable Flicker vs 15msec = 66.7 fps)")
                quest_Note_1.quest_Show_String_For_Note_Small_Func("30fps is min for real-time response")
                screen_Delay_MSEC_INT = 20
            if True:
                _system_Sw_ModeState__Null__ID_INT = 0
                _system_Sw_ModeState__Run__AndShow_01_DeviceType__ID_INT = 1
                _system_Sw_ModeState__Run__AndShow_02_GroupChannelNum__ID_INT = 2
                _system_Sw_ModeState__Autonomous__ID_INT = 3
                _system_Sw_ModeState__Edit_GroupChannelNum__ID_INT = 4
                _system_Sw_ModeState__Test__ID_INT = 5
                _system_Sw_ModeState__Reset__ID_INT = 6
                if True:
                    _system_Sw_ModeState__Now__Id_Int = _system_Sw_ModeState__Null__ID_INT
            if True:
                screen_XY_Brightness_Old_Num = 0
                screen_Y_Old_Num = 0
                screen_X_Old_Num = 0
            if True:
                quest_Note_1.quest_Show_String_For_Note_Big_Func("Variable & Constant: Customizable Settings")
                if True:
                    quest_Note_1.quest_Show_String_For_Note_Small_Func("Following Gears are not used in Level_1 but need these null declarations... ")
                    quest_Note_1.quest_Show_String_For_Note_Small_Func("...to allow Level_2 code to compile (though unused in Level_1)")
                    # jwc needed to fix compiler issue
                    motor_Power_Gear_01_MAX = 0
                    # jwc needed to fix compiler issue
                    motor_Power_Gear_02_MAX = 0
                if True:
                    wuKong.mecanum_wheel(wuKong.ServoList.S1,
                        wuKong.ServoList.S3,
                        wuKong.ServoList.S0,
                        wuKong.ServoList.S2)
                if False:
                    quest_Note_1.quest_Show_String_For_Note_Small_Func("GeekServo: For servo_360: start at 180")
                    quest_Note_1.quest_Show_String_For_Note_Small_Func("Start w/ Label 'GeekServo' facing out for Servo_Arm_Left, for 180-degrees to face forward for optimum range")
                    servoArm_Now_Degrees_Int = 180
                    wuKong.set_servo_angle(wuKong.ServoTypeList._360,
                        wuKong.ServoList.S7,
                        servoArm_Now_Degrees_Int)
                    wuKong.set_servo_angle(wuKong.ServoTypeList._360,
                        wuKong.ServoList.S6,
                        servoArm_Now_Degrees_Int)
                    if False:
                        quest_Note_1.quest_Show_String_For_Note_Small_Func("Obsolete?")
                        servoArm_DOWN_MAX_DEGREES_INT = 0
                        servoArm_UP_MAX_DEGREES_INT = 90
                        servoArm_Left_UP_DEGREES_INT = 20
                        servoArm_Right_UP_DEGREES_INT = 45
                        servoArm_Left_Up_Bool = True
                        servoArm_Right_Up_Bool = True
                if True:
                    quest_Dashboard.quest_Show_Oled_Cleared_Func()
                    quest_Dashboard.quest_Show_String_For_Oled_SmallFont_Func("Hello  : )", 0, 0)
        quest_Note_6.quest_Show_String_For_Note_Big_Func("Level 2.1: Variables_n_Constants_Yes")

def on_button_pressed_ab():
    global _system_Sw_ModeState__Now__Id_Int, network_GroupChannel_MyBotAndController_Base0__Digit_Hundreds__Int, network_GroupChannel_MyBotAndController_Base0__Digit_Tens__Int, network_GroupChannel_MyBotAndController_Base0__Digit_Ones__Int, network_GroupChannel_MyBotAndController_Base0_Int
    # //jwc o if (device_Type_Controller_Bool || device_Type_Bot_Bool) {
    if _system_Hw_DeviceType__Now__Id_Int == _system_Hw_DeviceType__Bot__ID_INT or _system_Hw_DeviceType__Now__Id_Int == _system_Hw_DeviceType__Controller_Joystick__ID_INT:
        # //jwc o device_Mode_Edit__GroupChannelNum__Bool = !(device_Mode_Edit__GroupChannelNum__Bool)
        # //jwc o if (!(device_Mode_Edit__GroupChannelNum__Bool)) {
        # //jwc o     quest_Note_2.quest_Show_String_For_Note_Small_Func(
        # //jwc o         "If just left 'groupChannel_Edit_Mode', then Reset 'radio set group'"
        # //jwc o     )
        # //jwc o     network_GroupChannel_MyBotAndController_Base0_Int = network_GroupChannel_MyBotAndController_Base0__Digit_Tens__Int * 10 + network_GroupChannel_MyBotAndController_Base0__Digit_Ones__Int * 1
        # //jwc o     radio.setGroup(network_GroupChannel_MyBotAndController_Base0_Int)
        # //jwc o } else {
        # //jwc o     quest_Note_2.quest_Show_String_For_Note_Small_Func(
        # //jwc o         "If just entered 'groupChannel_Edit_Mode':"
        # //jwc o     )
        # //jwc o     network_GroupChannel_MyBotAndController_Base0__Digit_Tens__Int = Math.idiv(network_GroupChannel_MyBotAndController_Base0_Int, 10)
        # //jwc o     network_GroupChannel_MyBotAndController_Base0__Digit_Ones__Int = network_GroupChannel_MyBotAndController_Base0_Int % 10
        # //jwc o }
        # //jwc o network_GroupChannel_Show_Func()
        if _system_Sw_ModeState__Now__Id_Int == _system_Sw_ModeState__Run__AndShow_01_DeviceType__ID_INT or _system_Sw_ModeState__Now__Id_Int == _system_Sw_ModeState__Run__AndShow_02_GroupChannelNum__ID_INT:
            quest_Note_1.quest_Show_String_For_Note_Small_Func("Just entered the above_conditioned 'if then' state and will process accordingly as needed:")
            _system_Sw_ModeState__Now__Id_Int = _system_Sw_ModeState__Edit_GroupChannelNum__ID_INT
            network_GroupChannel_MyBotAndController_Base0__Digit_Hundreds__Int = Math.idiv(network_GroupChannel_MyBotAndController_Base0_Int, 100)
            network_GroupChannel_MyBotAndController_Base0__Digit_Tens__Int = Math.idiv(network_GroupChannel_MyBotAndController_Base0_Int - network_GroupChannel_MyBotAndController_Base0__Digit_Hundreds__Int * 100,
                10)
            network_GroupChannel_MyBotAndController_Base0__Digit_Ones__Int = Math.idiv(network_GroupChannel_MyBotAndController_Base0_Int - (network_GroupChannel_MyBotAndController_Base0__Digit_Hundreds__Int * 100 + network_GroupChannel_MyBotAndController_Base0__Digit_Tens__Int * 10),
                1)
            if True:
                quest_Note_1.quest_Show_String_For_Note_Small_Func("Since not enough input buttons to allow manual override of hundreds_digit, will override hundreds_digit to always be 0, to stabilize at a known value")
                network_GroupChannel_MyBotAndController_Base0__Digit_Hundreds__Int = 0
        elif _system_Sw_ModeState__Now__Id_Int == _system_Sw_ModeState__Edit_GroupChannelNum__ID_INT:
            quest_Note_1.quest_Show_String_For_Note_Small_Func("Just entered the above_conditioned 'if then' state and will process accordingly as needed:")
            _system_Sw_ModeState__Now__Id_Int = _system_Sw_ModeState__Run__AndShow_01_DeviceType__ID_INT
            network_GroupChannel_MyBotAndController_Base0_Int = network_GroupChannel_MyBotAndController_Base0__Digit_Hundreds__Int * 100 + (network_GroupChannel_MyBotAndController_Base0__Digit_Tens__Int * 10 + network_GroupChannel_MyBotAndController_Base0__Digit_Ones__Int * 1)
            radio.set_group(network_GroupChannel_MyBotAndController_Base0_Int)
    elif _system_Hw_DeviceType__Now__Id_Int == _system_Hw_DeviceType__Null__ID_INT:
        # //jwc debug: serial.writeLine("HW_Null: SW_Null >> SW_Edit")
        # //jwc debug: serial.writeLine("HW_Null: SW_Edit >> SW_Null")
        if _system_Sw_ModeState__Now__Id_Int == _system_Sw_ModeState__Null__ID_INT:
            quest_Note_1.quest_Show_String_For_Note_Small_Func("Just entered the above_conditioned 'if then' state and will process accordingly as needed:")
            _system_Sw_ModeState__Now__Id_Int = _system_Sw_ModeState__Edit_GroupChannelNum__ID_INT
            network_GroupChannel_MyBotAndController_Base0__Digit_Hundreds__Int = Math.idiv(network_GroupChannel_MyBotAndController_Base0_Int, 100)
            network_GroupChannel_MyBotAndController_Base0__Digit_Tens__Int = Math.idiv(network_GroupChannel_MyBotAndController_Base0_Int - network_GroupChannel_MyBotAndController_Base0__Digit_Hundreds__Int * 100,
                10)
            network_GroupChannel_MyBotAndController_Base0__Digit_Ones__Int = Math.idiv(network_GroupChannel_MyBotAndController_Base0_Int - (network_GroupChannel_MyBotAndController_Base0__Digit_Hundreds__Int * 100 + network_GroupChannel_MyBotAndController_Base0__Digit_Tens__Int * 10),
                1)
            if True:
                quest_Note_1.quest_Show_String_For_Note_Small_Func("Since not enough input buttons to allow manual override of hundreds_digit, will override hundreds_digit to always be 0, to stabilize at a known value")
                network_GroupChannel_MyBotAndController_Base0__Digit_Hundreds__Int = 0
        elif _system_Sw_ModeState__Now__Id_Int == _system_Sw_ModeState__Edit_GroupChannelNum__ID_INT:
            quest_Note_1.quest_Show_String_For_Note_Small_Func("Just entered the above_conditioned 'if then' state and will process accordingly as needed:")
            _system_Sw_ModeState__Now__Id_Int = _system_Sw_ModeState__Null__ID_INT
            network_GroupChannel_MyBotAndController_Base0_Int = network_GroupChannel_MyBotAndController_Base0__Digit_Hundreds__Int * 100 + (network_GroupChannel_MyBotAndController_Base0__Digit_Tens__Int * 10 + network_GroupChannel_MyBotAndController_Base0__Digit_Ones__Int * 1)
            radio.set_group(network_GroupChannel_MyBotAndController_Base0_Int)
    if False:
        serial.write_line("24-0714-2351> " + str(network_GroupChannel_MyBotAndController_Base0_Int) + " " + str(network_GroupChannel_MyBotAndController_Base0__Digit_Hundreds__Int) + " " + str(network_GroupChannel_MyBotAndController_Base0__Digit_Tens__Int) + " " + str(network_GroupChannel_MyBotAndController_Base0__Digit_Ones__Int))
    quest_Note_6.quest_Show_String_For_Note_Big_Func("Level 2.1: Variables_n_Constants_Yes")
input.on_button_pressed(Button.AB, on_button_pressed_ab)

def on_received_string(receivedString):
    global _system_Hw_DeviceType__Now__Id_Int, _system_Sw_ModeState__Now__Id_Int
    if True:
        quest_Note_3.quest_Show_String_For_Note_Big_Func("Network_Message Received' Dual Usage:: Usage #1: Operate Bot from Controller_Joystick")
        # //jwc o if (device_Type_Bot_Bool && _system_Sw_ModeState__Now__Id_Int == _system_Sw_ModeState__Run__AndShow_01_DeviceType__ID_INT) {
        # //jwc o } else if (!(device_Type_Bot_Bool)) {
        if _system_Hw_DeviceType__Now__Id_Int == _system_Hw_DeviceType__Bot__ID_INT and (_system_Sw_ModeState__Now__Id_Int == _system_Sw_ModeState__Run__AndShow_01_DeviceType__ID_INT or _system_Sw_ModeState__Now__Id_Int == _system_Sw_ModeState__Run__AndShow_02_GroupChannelNum__ID_INT):
            bot_Servo_Motors_Basic_Fn(receivedString)
            bot_Servo_Motors_Turbo_Fn(receivedString)
            bot_Servo_Arms_Fn(receivedString)
            network__CpuCycle_Post__Management_Func()
        elif _system_Hw_DeviceType__Now__Id_Int == _system_Hw_DeviceType__Null__ID_INT:
            quest_Note_3.quest_Show_String_For_Note_Big_Func("Network_Message Received' Dual Usage:: Usage #2: Designate this micro:bit as Bot to *Complete* Network_Pairing w/ Bot")
            quest_Note_1.quest_Show_String_For_Note_Big_Func("Code Activation of Bot:: 1of1 : 1st micro:bit Having Received a Network_Message is Designated as Device:Bot")
            # //jwc o device_Type_Bot_Bool = true
            _system_Hw_DeviceType__Now__Id_Int = _system_Hw_DeviceType__Bot__ID_INT
            quest_Note_1.quest_Show_String_For_Note_Small_Func("Start with 'DeviceType' Status to allow screen to stabilize & not clobber a LED for 'GroupChannelNum' Status")
            _system_Sw_ModeState__Now__Id_Int = _system_Sw_ModeState__Run__AndShow_02_GroupChannelNum__ID_INT
            setup_BotOnly_Func()
        if True:
            quest_Note_6.quest_Show_String_For_Note_Big_Func("Level 1.0: Variables_n_Constants_Not (Hardcode) ~ Yes: 1-Sec Lag 'show leds'")
            quest_Note_6.quest_Show_String_For_Note_Small_Func("For exclusive activation, place this 'on radio received' stack higher than other 'on radio received' stacks")
            quest_Note_6.quest_Show_String_For_Note_Small_Func("Bot Stack: Main 1of1 ~ 'on radio received(receivedString)'")
            quest_Note_1.quest_Show_String_For_Note_Small_Func("Network Message Max_Character_Length: 19")
        if False:
            serial.write_line("* " + receivedString)
radio.on_received_string(on_received_string)

def on_button_pressed_b():
    global _system_Hw_DeviceType__Now__Id_Int, _system_Sw_ModeState__Now__Id_Int
    if True:
        quest_Note_1.quest_Show_String_For_Note_Small_Func("Important Coding Note: Only 1 Input Stack for Button A||B Allowed for 'main/main_backend.ts'")
        # //jwc o if (!(device_Type_Controller_Bool) && !(device_Type_Bot_Bool)) {
        if _system_Sw_ModeState__Now__Id_Int == _system_Sw_ModeState__Edit_GroupChannelNum__ID_INT:
            quest_Note_3.quest_Show_String_For_Note_Big_Func("'Buttons A & B' Dual Usage: Usage #2: Given Network_Paired, Increment 'GroupChannelNum' when in Respective Edit Mode")
            device_Mode_Edit_GroupChannelNum_ButtonB_Func()
        elif _system_Hw_DeviceType__Now__Id_Int == _system_Hw_DeviceType__Null__ID_INT:
            quest_Note_3.quest_Show_String_For_Note_Big_Func("'Buttons A & B' Dual Usage: Usage #1: Designate this micro:bit as Controller_Joystick to *Start* Network_Pairing w/ Bot")
            quest_Note_1.quest_Show_String_For_Note_Big_Func("Code Activation of Controller_Joystick:: 1of2 : 1st micro:bit Being Pressed of Button A||B is Designated as Device:Controller_Joystick")
            _system_Hw_DeviceType__Now__Id_Int = _system_Hw_DeviceType__Controller_Joystick__ID_INT
            _system_Sw_ModeState__Now__Id_Int = _system_Sw_ModeState__Run__AndShow_02_GroupChannelNum__ID_INT
            screen_Clear_Func()
            setup_ControllerOnly_Func()
        quest_Note_6.quest_Show_String_For_Note_Big_Func("Level 2.1: Variables_n_Constants_Yes")
input.on_button_pressed(Button.B, on_button_pressed_b)

def botModeInIdle_Fn():
    quest_Note_1.quest_Show_String_For_Note_Small_Func("'if' statements 'and-ed' to return 'IdleMode=true'")
    if controller__Polar_OriginAtCenter__MagnitudePixel__Int <= controller__Polar_OriginAtCenter__MagnitudePixel__IdleDeadzone_Max512__INT:
        if not (joystickbit.get_button(joystickbit.JoystickBitPin.P12)):
            if not (joystickbit.get_button(joystickbit.JoystickBitPin.P13)):
                if not (joystickbit.get_button(joystickbit.JoystickBitPin.P14)):
                    if not (joystickbit.get_button(joystickbit.JoystickBitPin.P15)):
                        if not (input.is_gesture(Gesture.TILT_LEFT)):
                            if not (input.is_gesture(Gesture.TILT_RIGHT)):
                                return True
    return False
def setup_Code_For_System_Func():
    global servoArm_DEFAULT_DEGREES_INT, servoArm_UP_MAX_DEGREES_INT, servoArm_DOWN_MAX_DEGREES_INT, servoArm_Now_Degrees_Int, controller__Polar_OriginAtCenter__MagnitudePixel__PreviousCycle__Int, controller__Polar_OriginAtCenter__IdleCount_Int, controller__Polar_OriginAtCenter__IdleCount_ModulusNetworkThrottle_ADD_INT, controller__Polar_OriginAtCenter__IdleCount_ModulusNetworkThrottle_Now_Int
    if True:
        setup_VariablesAndConstants_UserCustomizableNot_Func()
        setup_Network_Func()
        setup_BotAndController_Func()
    if True:
        quest_Dashboard.quest_Dashboard_Network_SendLogin_Func(network_GroupChannel_MyBotAndController_Base0_Int)
    if False:
        quest_Note_4.quest_Show_String_For_Note_Small_Func("AAA-1: Next Block_Code Moddable...")
        quest_Note_4.quest_Show_String_For_Note_Small_Func("...Data-Dashboard: Row-1: Title")
        quest_Dashboard.quest_Show_String_For_Oled_SmallFont_Func("Driver Dashboard :)", 0, 0)
    if False:
        quest_Note_1.quest_Show_String_For_Note_Big_Func("25-0309-2040 This Section Obsolete, Replaced Below")
        quest_Note_1.quest_Show_String_For_Note_Small_Func("GeekServo-360-Degrees-2kg: start at 180")
        quest_Note_1.quest_Show_String_For_Note_Small_Func("Start w/ Label 'GeekServo' facing out for Servo_Arm_Left, for 180-degrees to face forward for optimum range")
        quest_Note_4.quest_Show_String_For_Note_Small_Func("BBB-1: Next Block_Code Moddable...")
        quest_Note_4.quest_Show_String_For_Note_Small_Func("...Servo-Arm: 1-of-3: Default (degrees)")
        servoArm_DEFAULT_DEGREES_INT = 90
        quest_Note_4.quest_Show_String_For_Note_Small_Func("BBB-2: Next Block_Code Moddable...")
        quest_Note_4.quest_Show_String_For_Note_Small_Func("...Servo-Arm: 2-of-3: Up-Max (degrees)")
        servoArm_UP_MAX_DEGREES_INT = 360
        quest_Note_4.quest_Show_String_For_Note_Small_Func("BBB-3: Next Block_Code Moddable...")
        quest_Note_4.quest_Show_String_For_Note_Small_Func("...Servo-Arm: 3-of-3: Down-Max (degrees)")
        servoArm_DOWN_MAX_DEGREES_INT = 0
        quest_Note_1.quest_Show_String_For_Note_Small_Func("Servo-Arm: GeekServo_360_Degrees: Default")
        servoArm_Now_Degrees_Int = servoArm_DEFAULT_DEGREES_INT
        wuKong.set_servo_angle(wuKong.ServoTypeList._360,
            wuKong.ServoList.S7,
            servoArm_Now_Degrees_Int)
        wuKong.set_servo_angle(wuKong.ServoTypeList._360,
            wuKong.ServoList.S6,
            servoArm_Now_Degrees_Int)
        quest_Dashboard.quest_Show_String_For_Oled_SmallFont_Func("Arm-L:" + "Default= " + str(servoArm_Now_Degrees_Int), 0, 3)
        quest_Dashboard.quest_Show_String_For_Oled_SmallFont_Func("Arm-R:" + "Default= " + str(servoArm_Now_Degrees_Int), 0, 4)
    if True:
        quest_Motors.quest_Set_AutoDegrees_ForServoArm_SMALL_Func(quest_PortSingle_ServoArmBeam_PortId_Enum.S7_ServoArm_Left,
            quest_ServoArm_DegreesInDirection_Enum.Degree_000_Down,
            quest_Debug_Show_Enum.Dashboard_OLED)
        quest_Motors.quest_Set_AutoDegrees_ForServoArm_SMALL_Func(quest_PortSingle_ServoArmBeam_PortId_Enum.S6_ServoArm_Right,
            quest_ServoArm_DegreesInDirection_Enum.Degree_000_Down,
            quest_Debug_Show_Enum.Dashboard_OLED)
    if True:
        quest_Note_1.quest_Show_String_For_Note_Small_Func("Following limits repeating 'idle/stop' to ..")
        quest_Note_1.quest_Show_String_For_Note_Small_Func(".. not flood Led-5x5 and Network")
        controller__Polar_OriginAtCenter__MagnitudePixel__PreviousCycle__Int = controller__Polar_OriginAtCenter__MagnitudePixel__IdleDeadzone_Max512__INT
        controller__Polar_OriginAtCenter__IdleCount_Int = 0
        quest_Note_1.quest_Show_String_For_Note_Small_Func("Following for Network Throttling..")
        controller__Polar_OriginAtCenter__IdleCount_Int = 0
        quest_Note_1.quest_Show_String_For_Note_Small_Func("controller..IdleCount_ModulusNetworkThrottle_ADD_INT")
        quest_Note_1.quest_Show_String_For_Note_Small_Func("..: 10, 5, 1 (for fastest response), 5")
        controller__Polar_OriginAtCenter__IdleCount_ModulusNetworkThrottle_ADD_INT = 5
        controller__Polar_OriginAtCenter__IdleCount_ModulusNetworkThrottle_Now_Int = controller__Polar_OriginAtCenter__IdleCount_ModulusNetworkThrottle_ADD_INT
        if False:
            controller__Polar_OriginAtCenter__IdleCount_ModulusNetworkThrottle_ADD_INT = 5
            controller__Polar_OriginAtCenter__IdleCount_ModulusNetworkThrottle_ADD_INT = 10
    if True:
        quest_Note_6.quest_Show_String_For_Note_Big_Func("Level 1: Variables_n_Constants_Not (Hardcode)")
        quest_Note_6.quest_Show_String_For_Note_Small_Func("For exclusive activation, place this 'on start' stack higher than other 'on start' stacks")
        quest_Note_6.quest_Show_String_For_Note_Small_Func("Bot & Controller_Joystick Stack: 'on start'")
        quest_Note_6.quest_Show_String_For_Note_Small_Func("setup_VariablesAndConstants_UserCustomizable: Yes")
controller__Polar_OriginAtCenter__IdleCount_ModulusNetworkThrottle_Now_Int = 0
controller__Polar_OriginAtCenter__IdleCount_ModulusNetworkThrottle_ADD_INT = 0
controller__Polar_OriginAtCenter__MagnitudePixel__PreviousCycle__Int = 0
servoArm_DEFAULT_DEGREES_INT = 0
network_GroupChannel_MyBotAndController_Base0__Digit_Ones__Int = 0
network_GroupChannel_MyBotAndController_Base0__Digit_Tens__Int = 0
network_GroupChannel_MyBotAndController_Base0__Digit_Hundreds__Int = 0
servoArm_Right_Up_Bool = False
servoArm_Left_Up_Bool = False
servoArm_Right_UP_DEGREES_INT = 0
servoArm_Left_UP_DEGREES_INT = 0
servoArm_UP_MAX_DEGREES_INT = 0
servoArm_DOWN_MAX_DEGREES_INT = 0
servoArm_Now_Degrees_Int = 0
motor_Power_Gear_02_MAX = 0
motor_Power_Gear_01_MAX = 0
_system_Sw_ModeState__Test__ID_INT = 0
_system_Sw_ModeState__Autonomous__ID_INT = 0
_system_Sw_ModeState__Null__ID_INT = 0
screen_Delay_MSEC_INT = 0
motor_Power_Gear_Number_Int = 0
motor_Power_ZERO_INT = 0
motor_Power_Half_Current = 0
motor_Power_Full_Current_Neg = 0
motor_Power_Full_Current_Pos = 0
controller__Polar_OriginAtCenter__MagnitudePixel__Int = 0
controller__Polar_OriginAtCenter__AngleDegree__AsIncremented_By__Int = 0
controller__Polar_OriginAtCenter__AngleDegree__Int = 0
controller__Polar_OriginAtCenter__MagnitudePixel__IdleDeadzone_Max512__INT = 0
_system_Hw_DeviceType__Bot__ID_INT = 0
controller__Polar_OriginAtCenter__IdleCount_Int = 0
_system_Sw_ModeState__Run__AndShow_01_DeviceType__ID_INT = 0
_system_Sw_ModeState__Run__AndShow_02_GroupChannelNum__ID_INT = 0
_system_Hw_DeviceType__Controller_Joystick__ID_INT = 0
_system_Hw_DeviceType__Null__ID_INT = 0
_system_Hw_DeviceType__Now__Id_Int = 0
_system_Sw_ModeState__Edit_GroupChannelNum__ID_INT = 0
_system_Sw_ModeState__Reset__ID_INT = 0
_system_Sw_ModeState__Now__Id_Int = 0
screenBrightness_Heartbeat_Count_Int = 0
screen_XY_Brightness_Old_Num = 0
screen_Y_Old_Num = 0
screen_X_Old_Num = 0
network_GroupChannel_MyBotAndController_Base0_Int = 0
images.create_image("""
    . # . # .
    # # # # #
    . # . # .
    # # # # #
    . # . # .
    """).show_image(0, 0)
quest_Note_2.quest_Show_String_For_Note_Big_Func("Below Moddable: GroupChannel_# (Bot_Id): ...")
quest_Note_2.quest_Show_String_For_Note_Small_Func("... Range [21-255], Default = 1")
network_GroupChannel_MyBotAndController_Base0_Int = 1
setup_Code_For_System_Func()
quest_Note_1.quest_Show_String_For_Note_Big_Func("Below, Setup Code for Teacher:")
quest_Note_1.quest_Show_String_For_Note_Big_Func("Below, Setup Code for Student:")

def on_forever():
    if False:
        quest_Note_6.quest_Show_String_For_Note_Big_Func("<-- Bot Code (Web-Server)  |")
        quest_Note_6.quest_Show_String_For_Note_Big_Func("<-- Bot Code (Web-Server)  |")
        quest_Note_6.quest_Show_String_For_Note_Big_Func("<-- Bot Code (Web-Server)  |")
        quest_Note_6.quest_Show_String_For_Note_Big_Func("<-- Bot Code (Web-Server)  |")
        quest_Note_6.quest_Show_String_For_Note_Big_Func("<-- Bot Code (Web-Server)  |")
        quest_Note_6.quest_Show_String_For_Note_Big_Func("<-- Bot Code (Web-Server)  |")
        quest_Note_6.quest_Show_String_For_Note_Big_Func("<-- Bot Code (Web-Server)  |")
        quest_Note_6.quest_Show_String_For_Note_Big_Func("<-- Bot Code (Web-Server)  |")
        quest_Note_6.quest_Show_String_For_Note_Big_Func("<-- Bot Code (Web-Server)  |")
        quest_Note_6.quest_Show_String_For_Note_Big_Func("<-- Bot Code (Web-Server)  |")
        quest_Note_6.quest_Show_String_For_Note_Big_Func("<-- Bot Code (Web-Server)  |")
        quest_Note_6.quest_Show_String_For_Note_Big_Func("<-- Bot Code (Web-Server)  |")
        quest_Note_6.quest_Show_String_For_Note_Big_Func("<-- Bot Code (Web-Server)  |")
        quest_Note_6.quest_Show_String_For_Note_Big_Func("<-- Bot Code (Web-Server)  |")
        quest_Note_6.quest_Show_String_For_Note_Big_Func("<-- Bot Code (Web-Server)  |")
        quest_Note_6.quest_Show_String_For_Note_Big_Func("<-- Bot Code (Web-Server)  |")
        quest_Note_6.quest_Show_String_For_Note_Big_Func("<-- Bot Code (Web-Server)  |")
        quest_Note_6.quest_Show_String_For_Note_Big_Func("<-- Bot Code (Web-Server)  |")
        quest_Note_6.quest_Show_String_For_Note_Big_Func("<-- Bot Code (Web-Server)  |")
        quest_Note_6.quest_Show_String_For_Note_Big_Func("<-- Bot Code (Web-Server)  |")
        quest_Note_6.quest_Show_String_For_Note_Big_Func("<-- Bot Code (Web-Server)  |")
        quest_Note_6.quest_Show_String_For_Note_Big_Func("<-- Bot Code (Web-Server)  |")
        quest_Note_6.quest_Show_String_For_Note_Big_Func("<-- Bot Code (Web-Server)  |")
        quest_Note_6.quest_Show_String_For_Note_Big_Func("<-- Bot Code (Web-Server)  |")
        quest_Note_6.quest_Show_String_For_Note_Big_Func("<-- Bot Code (Web-Server)  |")
        quest_Note_6.quest_Show_String_For_Note_Big_Func("<-- Bot Code (Web-Server)  |")
        quest_Note_6.quest_Show_String_For_Note_Big_Func("<-- Bot Code (Web-Server)  |")
        quest_Note_6.quest_Show_String_For_Note_Big_Func("<-- Bot Code (Web-Server)  |")
        quest_Note_6.quest_Show_String_For_Note_Big_Func("<-- Bot Code (Web-Server)  |")
        quest_Note_6.quest_Show_String_For_Note_Big_Func("<-- Bot Code (Web-Server)  |")
basic.forever(on_forever)

def on_forever2():
    if False:
        quest_Note_6.quest_Show_String_For_Note_Big_Func("|  Controller-Joystick (Web-Client) -->")
        quest_Note_6.quest_Show_String_For_Note_Big_Func("|  Controller-Joystick (Web-Client) -->")
        quest_Note_6.quest_Show_String_For_Note_Big_Func("|  Controller-Joystick (Web-Client) -->")
        quest_Note_6.quest_Show_String_For_Note_Big_Func("|  Controller-Joystick (Web-Client) -->")
        quest_Note_6.quest_Show_String_For_Note_Big_Func("|  Controller-Joystick (Web-Client) -->")
        quest_Note_6.quest_Show_String_For_Note_Big_Func("|  Controller-Joystick (Web-Client) -->")
        quest_Note_6.quest_Show_String_For_Note_Big_Func("|  Controller-Joystick (Web-Client) -->")
        quest_Note_6.quest_Show_String_For_Note_Big_Func("|  Controller-Joystick (Web-Client) -->")
        quest_Note_6.quest_Show_String_For_Note_Big_Func("|  Controller-Joystick (Web-Client) -->")
        quest_Note_6.quest_Show_String_For_Note_Big_Func("|  Controller-Joystick (Web-Client) -->")
        quest_Note_6.quest_Show_String_For_Note_Big_Func("|  Controller-Joystick (Web-Client) -->")
        quest_Note_6.quest_Show_String_For_Note_Big_Func("|  Controller-Joystick (Web-Client) -->")
        quest_Note_6.quest_Show_String_For_Note_Big_Func("|  Controller-Joystick (Web-Client) -->")
        quest_Note_6.quest_Show_String_For_Note_Big_Func("|  Controller-Joystick (Web-Client) -->")
        quest_Note_6.quest_Show_String_For_Note_Big_Func("|  Controller-Joystick (Web-Client) -->")
        quest_Note_6.quest_Show_String_For_Note_Big_Func("|  Controller-Joystick (Web-Client) -->")
        quest_Note_6.quest_Show_String_For_Note_Big_Func("|  Controller-Joystick (Web-Client) -->")
        quest_Note_6.quest_Show_String_For_Note_Big_Func("|  Controller-Joystick (Web-Client) -->")
        quest_Note_6.quest_Show_String_For_Note_Big_Func("|  Controller-Joystick (Web-Client) -->")
        quest_Note_6.quest_Show_String_For_Note_Big_Func("|  Controller-Joystick (Web-Client) -->")
        quest_Note_6.quest_Show_String_For_Note_Big_Func("|  Controller-Joystick (Web-Client) -->")
        quest_Note_6.quest_Show_String_For_Note_Big_Func("|  Controller-Joystick (Web-Client) -->")
        quest_Note_6.quest_Show_String_For_Note_Big_Func("|  Controller-Joystick (Web-Client) -->")
        quest_Note_6.quest_Show_String_For_Note_Big_Func("|  Controller-Joystick (Web-Client) -->")
        quest_Note_6.quest_Show_String_For_Note_Big_Func("|  Controller-Joystick (Web-Client) -->")
        quest_Note_6.quest_Show_String_For_Note_Big_Func("|  Controller-Joystick (Web-Client) -->")
        quest_Note_6.quest_Show_String_For_Note_Big_Func("|  Controller-Joystick (Web-Client) -->")
        quest_Note_6.quest_Show_String_For_Note_Big_Func("|  Controller-Joystick (Web-Client) -->")
        quest_Note_6.quest_Show_String_For_Note_Big_Func("|  Controller-Joystick (Web-Client) -->")
        quest_Note_6.quest_Show_String_For_Note_Big_Func("|  Controller-Joystick (Web-Client) -->")
basic.forever(on_forever2)

def on_forever3():
    global controller__Polar_OriginAtCenter__AngleDegree__Int, controller__Polar_OriginAtCenter__MagnitudePixel__PreviousCycle__Int, controller__Polar_OriginAtCenter__MagnitudePixel__Int, controller__Polar_OriginAtCenter__IdleCount_Int, controller__Polar_OriginAtCenter__IdleCount_ModulusNetworkThrottle_Now_Int
    if True:
        quest_Note_3.quest_Show_String_For_Note_Big_Func("Send Network Message to 'B'ot:: Controller_Joystick: Joystick")
        # //jwc o if (device_Type_Controller_Bool && (_system_Sw_ModeState__Now__Id_Int == _system_Sw_ModeState__Run__AndShow_01_DeviceType__ID_INT || _system_Sw_ModeState__Now__Id_Int == _system_Sw_ModeState__Run__AndShow_02_GroupChannelNum__ID_INT)) {
        if _system_Hw_DeviceType__Now__Id_Int == _system_Hw_DeviceType__Controller_Joystick__ID_INT and (_system_Sw_ModeState__Now__Id_Int == _system_Sw_ModeState__Run__AndShow_01_DeviceType__ID_INT or _system_Sw_ModeState__Now__Id_Int == _system_Sw_ModeState__Run__AndShow_02_GroupChannelNum__ID_INT):
            if True:
                controller__Polar_OriginAtCenter__AngleDegree__Int = quest_Sensors.quest_Get_Controller_Joystick_Directional_AngleDegree_IncrementOf_AsIntOut_Func(quest_Controller_Joystick_Directional_AngelDegree_Increment_Enum.degree_90)
                controller__Polar_OriginAtCenter__MagnitudePixel__PreviousCycle__Int = controller__Polar_OriginAtCenter__MagnitudePixel__Int
                controller__Polar_OriginAtCenter__MagnitudePixel__Int = quest_Sensors.quest_Get_Controller_Joystick_Directional_MagnitudePixel_AsIntOut_Func()
                if False:
                    controller__Polar_OriginAtCenter__AngleDegree__Int = quest_Sensors.quest_Get_Controller_Joystick_Directional_AngleDegree_IncrementOfDegree90_AsIntOut_Func()
            quest_Note_1.quest_Show_String_For_Note_Big_Func("Convert Network Message to Operate 'B'ot: ")
            if controller__Polar_OriginAtCenter__MagnitudePixel__Int > controller__Polar_OriginAtCenter__MagnitudePixel__IdleDeadzone_Max512__INT:
                if True:
                    quest_Note_1.quest_Show_String_For_Note_Big_Func("Motion: Yes")
                    if controller__Polar_OriginAtCenter__AngleDegree__Int == 90:
                        if True:
                            images.create_image("""
                                . . # . .
                                . # # # .
                                . . # . .
                                . . # . .
                                . . . . .
                                """).show_image(0, 0)
                            radio.send_string("forward")
                    elif controller__Polar_OriginAtCenter__AngleDegree__Int == 270:
                        if True:
                            images.create_image("""
                                . . . . .
                                . . # . .
                                . . # . .
                                . # # # .
                                . . # . .
                                """).show_image(0, 0)
                            radio.send_string("backward")
                    elif controller__Polar_OriginAtCenter__AngleDegree__Int == 180:
                        if True:
                            images.create_image("""
                                . . . . .
                                . # . . .
                                # # # # .
                                . # . . .
                                . . . . .
                                """).show_image(0, 0)
                            radio.send_string("left")
                    elif controller__Polar_OriginAtCenter__AngleDegree__Int == 0 or controller__Polar_OriginAtCenter__AngleDegree__Int == 360:
                        if True:
                            images.create_image("""
                                . . . . .
                                . . . # .
                                . # # # #
                                . . . # .
                                . . . . .
                                """).show_image(0, 0)
                            radio.send_string("right")
                    else:
                        quest_Note_5.quest_Show_String_For_Note_Small_Func("Invalid 'controller_Joystick_Angle_Degrees_AsIncremented_Int'")
                        error_Message_Func("2024-0212-1731",
                            "Invalid 'controller__Polar_OriginAtCenter__AngleDegree__Int'")
                    if True:
                        quest_Note_1.quest_Show_String_For_Note_Small_Func("Following 0-Reset to Allow Idle/Stop Afterwards")
                        controller__Polar_OriginAtCenter__IdleCount_Int = 0
                        controller__Polar_OriginAtCenter__IdleCount_ModulusNetworkThrottle_Now_Int = controller__Polar_OriginAtCenter__IdleCount_ModulusNetworkThrottle_ADD_INT
                    if False:
                        quest_Note_1.quest_Show_String_For_Note_Small_Func("jwc ? cause compiler to auto-create weird code below from 'convert_Controller_Joystick_Directional_AngleDegrees__To__Microbit5x5Screen_Func(controller__Polar_OriginAtCenter__AngleDegree__Int)'")
                        quest_Note_1.quest_Show_String_For_Note_Small_Func("jwc ? may cause compiler bug, auto_creates 'let controller__Polar_OriginAtCenter__AngleDegree__Int = 0' at inactive free space")
            elif False:
                quest_Note_1.quest_Show_String_For_Note_Small_Func("Avoid sending 'stop' to not interfere.. ")
                quest_Note_1.quest_Show_String_For_Note_Small_Func("..turbo-max-motion buttons pressed")
                if controller__Polar_OriginAtCenter__MagnitudePixel__PreviousCycle__Int <= controller__Polar_OriginAtCenter__MagnitudePixel__IdleDeadzone_Max512__INT:
                    controller__Polar_OriginAtCenter__IdleCount_Int += 1
                    quest_Note_1.quest_Show_String_For_Note_Small_Func("Avoid sending 'stop' after above threshold-max,..")
                    quest_Note_1.quest_Show_String_For_Note_Small_Func("..to not flood Led-5x5 and Network")
                    if controller__Polar_OriginAtCenter__IdleCount_Int < 5:
                        if True:
                            images.create_image("""
                                . . . . .
                                . . . . .
                                . . # . .
                                . . . . .
                                . . . . .
                                """).show_image(0, 0)
                            quest_Note_1.quest_Show_String_For_Note_Small_Func("Zero values if not exceed 'Deadzone_AsIdle'")
                            radio.send_string("stop")
                            serial.write_string("*** B: STOP" + "")
                else:
                    controller__Polar_OriginAtCenter__IdleCount_Int = 0
            if True:
                quest_Timer.quest_Set_ContinueCurrentState_CountdownTimer_Func(20, quest_Time_Units_Enum.Milliseconds)
        quest_Note_6.quest_Show_String_For_Note_Big_Func("Level 2.1: Variables_n_Constants_Yes ~ Yes: 1-Sec Lag 'show leds'")
        quest_Note_6.quest_Show_String_For_Note_Small_Func("Activate Stack via 'Forever' Stack_Header")
        quest_Note_6.quest_Show_String_For_Note_Small_Func("Controller_Joystick Stack: Main 1of2")
        quest_Note_1.quest_Show_String_For_Note_Small_Func("Network Message Max_Character_Length: 19")
basic.forever(on_forever3)

def on_forever4():
    global controller__Polar_OriginAtCenter__IdleCount_Int, controller__Polar_OriginAtCenter__IdleCount_ModulusNetworkThrottle_Now_Int
    if True:
        quest_Note_3.quest_Show_String_For_Note_Big_Func("Send Network Message to 'B'ot:: Controller_Joystick: Buttons")
        quest_Note_6.quest_Show_String_For_Note_Small_Func("Controller_Joystick Stack: Main 2of2")
        quest_Note_1.quest_Show_String_For_Note_Small_Func("Network Message Max_Character_Length: 19")
        # //jwc o if (device_Type_Controller_Bool && (_system_Sw_ModeState__Now__Id_Int == _system_Sw_ModeState__Run__AndShow_01_DeviceType__ID_INT || _system_Sw_ModeState__Now__Id_Int == _system_Sw_ModeState__Run__AndShow_02_GroupChannelNum__ID_INT)) {
        if _system_Hw_DeviceType__Now__Id_Int == _system_Hw_DeviceType__Controller_Joystick__ID_INT and (_system_Sw_ModeState__Now__Id_Int == _system_Sw_ModeState__Run__AndShow_01_DeviceType__ID_INT or _system_Sw_ModeState__Now__Id_Int == _system_Sw_ModeState__Run__AndShow_02_GroupChannelNum__ID_INT):
            if joystickbit.get_button(joystickbit.JoystickBitPin.P15):
                images.create_image("""
                    . . # . .
                    . # # # .
                    # . # . #
                    . . # . .
                    . . # . .
                    """).show_image(0, 0)
                radio.send_string("forward_turbo")
                if True:
                    quest_Note_1.quest_Show_String_For_Note_Small_Func("Following 0-Reset to Allow Idle/Stop Afterwards")
                    controller__Polar_OriginAtCenter__IdleCount_Int = 0
                    controller__Polar_OriginAtCenter__IdleCount_ModulusNetworkThrottle_Now_Int = controller__Polar_OriginAtCenter__IdleCount_ModulusNetworkThrottle_ADD_INT
            elif joystickbit.get_button(joystickbit.JoystickBitPin.P14):
                images.create_image("""
                    . . # . .
                    . . # . .
                    # . # . #
                    . # # # .
                    . . # . .
                    """).show_image(0, 0)
                radio.send_string("backward_turbo")
                if True:
                    quest_Note_1.quest_Show_String_For_Note_Small_Func("Following 0-Reset to Allow Idle/Stop Afterwards")
                    controller__Polar_OriginAtCenter__IdleCount_Int = 0
                    controller__Polar_OriginAtCenter__IdleCount_ModulusNetworkThrottle_Now_Int = controller__Polar_OriginAtCenter__IdleCount_ModulusNetworkThrottle_ADD_INT
            elif False:
                quest_Note_4.quest_Show_String_For_Note_Small_Func("Deactivate for now")
                images.create_image("""
                    . . # . .
                    . # . . .
                    # # # # #
                    . # . . .
                    . . # . .
                    """).show_image(0, 0)
                radio.send_string("left_turbo")
                quest_Note_1.quest_Show_String_For_Note_Small_Func("Following 0-Reset to Allow Idle/Stop Afterwards")
                controller__Polar_OriginAtCenter__IdleCount_Int = 0
            elif False:
                quest_Note_4.quest_Show_String_For_Note_Small_Func("Deactivate for now")
                images.create_image("""
                    . . # . .
                    . . . # .
                    # # # # #
                    . . . # .
                    . . # . .
                    """).show_image(0, 0)
                radio.send_string("right_turbo")
                quest_Note_1.quest_Show_String_For_Note_Small_Func("Following 0-Reset to Allow Idle/Stop Afterwards")
                controller__Polar_OriginAtCenter__IdleCount_Int = 0
            network__CpuCycle_Post__Management_Func()
        quest_Note_6.quest_Show_String_For_Note_Big_Func("Level 2.1: Variables_n_Constants_Yes")
basic.forever(on_forever4)

def on_forever5():
    quest_Note_1.quest_Show_String_For_Note_Small_Func(" (v2.15.0: 25-0720-2300)")
    quest_Note_1.quest_Show_String_For_Note_Small_Func("©️ 2025 Quest Institute. All rights reserved.")
basic.forever(on_forever5)

def on_forever6():
    global controller__Polar_OriginAtCenter__IdleCount_Int, controller__Polar_OriginAtCenter__IdleCount_ModulusNetworkThrottle_Now_Int
    if True:
        quest_Note_3.quest_Show_String_For_Note_Big_Func("Send Network Message to 'B'ot:: Controller_Joystick: Buttons")
        quest_Note_6.quest_Show_String_For_Note_Small_Func("Controller_Joystick Stack: Main 2of2")
        quest_Note_1.quest_Show_String_For_Note_Small_Func("Network Message Max_Character_Length: 19")
        if _system_Hw_DeviceType__Now__Id_Int == _system_Hw_DeviceType__Controller_Joystick__ID_INT and (_system_Sw_ModeState__Now__Id_Int == _system_Sw_ModeState__Run__AndShow_01_DeviceType__ID_INT or _system_Sw_ModeState__Now__Id_Int == _system_Sw_ModeState__Run__AndShow_02_GroupChannelNum__ID_INT):
            if joystickbit.get_button(joystickbit.JoystickBitPin.P12):
                images.create_image("""
                    . . . . .
                    . . . . .
                    # # . # #
                    . . . . .
                    . . . . .
                    """).show_image(0, 0)
                radio.send_string("arm_000__down")
                if True:
                    quest_Note_1.quest_Show_String_For_Note_Small_Func("Following 0-Reset to Allow Idle/Stop Afterwards")
                    controller__Polar_OriginAtCenter__IdleCount_Int = 0
                    controller__Polar_OriginAtCenter__IdleCount_ModulusNetworkThrottle_Now_Int = controller__Polar_OriginAtCenter__IdleCount_ModulusNetworkThrottle_ADD_INT
            elif joystickbit.get_button(joystickbit.JoystickBitPin.P13):
                images.create_image("""
                    # . . . #
                    . # . # .
                    . . . . .
                    . . . . .
                    . . . . .
                    """).show_image(0, 0)
                radio.send_string("arm_045__up_half")
                if True:
                    quest_Note_1.quest_Show_String_For_Note_Small_Func("Following 0-Reset to Allow Idle/Stop Afterwards")
                    controller__Polar_OriginAtCenter__IdleCount_Int = 0
                    controller__Polar_OriginAtCenter__IdleCount_ModulusNetworkThrottle_Now_Int = controller__Polar_OriginAtCenter__IdleCount_ModulusNetworkThrottle_ADD_INT
            network__CpuCycle_Post__Management_Func()
        quest_Note_6.quest_Show_String_For_Note_Big_Func("Level 2.1: Variables_n_Constants_Yes")
basic.forever(on_forever6)

def on_forever7():
    global controller__Polar_OriginAtCenter__IdleCount_Int, controller__Polar_OriginAtCenter__IdleCount_ModulusNetworkThrottle_Now_Int
    if False:
        serial.write_string("*** A:" + str(quest_General.quest_Get_Number_WithColumnPadding_AsStringOut_Func(controller__Polar_OriginAtCenter__MagnitudePixel__Int, 8, 2)) + "|" + str(quest_General.quest_Get_Number_WithColumnPadding_AsStringOut_Func(controller__Polar_OriginAtCenter__IdleCount_Int, 8, 2)) + "|" + str(quest_General.quest_Get_Number_WithColumnPadding_AsStringOut_Func(controller__Polar_OriginAtCenter__IdleCount_ModulusNetworkThrottle_Now_Int,
            8,
            2)) + "|" + str(quest_General.quest_Get_Number_WithColumnPadding_AsStringOut_Func(controller__Polar_OriginAtCenter__IdleCount_ModulusNetworkThrottle_ADD_INT,
            8,
            2)) + "|")
    if False:
        serial.write_line("*** C: " + "Joy_X:" + str(quest_General.quest_Get_Number_WithColumnPadding_AsStringOut_Func(joystickbit.get_rocker_value(joystickbit.rockerType.X), 8, 2)) + " Joy_Y:" + str(quest_General.quest_Get_Number_WithColumnPadding_AsStringOut_Func(joystickbit.get_rocker_value(joystickbit.rockerType.Y), 8, 2)))
    if True:
        network__CpuCycle_Post__Management_Func()
        quest_Note_4.quest_Show_String_For_Note_Small_Func("See if this will slow down to column-align serial-prints")
        quest_Note_1.quest_Show_String_For_Note_Small_Func("See if this will slow down to column-align serial-prints")
        quest_Note_1.quest_Show_String_For_Note_Small_Func("20ms (min standard), 100ms, 10000ms (noticably slower, 1sec, but no help)")
        quest_Timer.quest_Set_ContinueCurrentState_CountdownTimer_Func(20, quest_Time_Units_Enum.Milliseconds)
    if botModeInIdle_Fn():
        quest_Note_1.quest_Show_String_For_Note_Small_Func("Avoid sending 'stop' to not interfere.. ")
        quest_Note_1.quest_Show_String_For_Note_Small_Func("..turbo-max-motion & other user-inputs pressed")
        quest_Note_1.quest_Show_String_For_Note_Small_Func("Avoid sending 'stop' after above threshold-max,..")
        quest_Note_1.quest_Show_String_For_Note_Small_Func("..to not flood Led-5x5 and Network")
        if controller__Polar_OriginAtCenter__IdleCount_Int % controller__Polar_OriginAtCenter__IdleCount_ModulusNetworkThrottle_Now_Int == 0:
            if True:
                images.create_image("""
                    . . . . .
                    . . . . .
                    . . # . .
                    . . . . .
                    . . . . .
                    """).show_image(0, 0)
                quest_Note_1.quest_Show_String_For_Note_Small_Func("Zero values if not exceed 'Deadzone_AsIdle'")
                radio.send_string("stop")
                controller__Polar_OriginAtCenter__IdleCount_Int = 0
                controller__Polar_OriginAtCenter__IdleCount_ModulusNetworkThrottle_Now_Int += controller__Polar_OriginAtCenter__IdleCount_ModulusNetworkThrottle_ADD_INT
                serial.write_line("*** B: STOP" + "")
        controller__Polar_OriginAtCenter__IdleCount_Int += 1
        if False:
            controller__Polar_OriginAtCenter__IdleCount_Int = 0
            if controller__Polar_OriginAtCenter__IdleCount_Int % 5 == 0:
                if True:
                    images.create_image("""
                        . . . . .
                        . . . . .
                        . . # . .
                        . . . . .
                        . . . . .
                        """).show_image(0, 0)
                    quest_Note_1.quest_Show_String_For_Note_Small_Func("Zero values if not exceed 'Deadzone_AsIdle'")
                    radio.send_string("stop")
                    controller__Polar_OriginAtCenter__IdleCount_Int = 0
                    serial.write_string("*** B: STOP" + "")
basic.forever(on_forever7)

def on_forever8():
    quest_Note_6.quest_Show_String_For_Note_Big_Func("")
    if False:
        quest_Note_1.quest_Show_String_For_Note_Small_Func("Error: Unknown Msg")
        # //jwc o roboQuest.powerMotorsViaBlueRedBlackPins(PortGroup_BlueRedBlack__PortIds__Enum.S1_MotorLeft__S0_MotorRight, motor_Power_ZERO_INT, motor_Power_ZERO_INT)
        quest_Motors.quest_Set_PowerMotorsViaBlueRedBlackPins_Func(quest_PortGroup_BlueRedBlack_PortIds_Enum.S1_MotorWheel_Left__S0_MotorWheel_Right,
            0,
            0)
        if True:
            quest_Note_1.quest_Show_String_For_Note_Small_Func("For now, all 4 corners = Error: Unknown Msg")
            screen_IconMessage_Func("error")
basic.forever(on_forever8)

def on_forever9():
    global _system_Sw_ModeState__Now__Id_Int
    quest_Note_6.quest_Show_String_For_Note_Big_Func("'On Logo Pressed'")
    quest_Note_6.quest_Show_String_For_Note_Big_Func("24-0916-0620 Deactivate Servo_Motor[_Left|_Right] Diagnostic Test, Since Complicates UI")
    if False:
        quest_Note_3.quest_Show_String_For_Note_Big_Func("Built-In Diagnsotic Test for Both Servo_Motors L & R")
        if _system_Hw_DeviceType__Now__Id_Int != _system_Hw_DeviceType__Controller_Joystick__ID_INT:
            quest_Note_1.quest_Show_String_For_Note_Small_Func("Above 'if' condition prevent this diag test from running on 'Controller' yet allowable for any other devices, e.g. 'Bot'.")
            if _system_Sw_ModeState__Now__Id_Int != _system_Sw_ModeState__Autonomous__ID_INT:
                quest_Note_2.quest_Show_String_For_Note_Small_Func("Just entered the above_conditioned 'if then' state and will process accordingly as needed:")
                _system_Sw_ModeState__Now__Id_Int = _system_Sw_ModeState__Test__ID_INT
                if _system_Sw_ModeState__Now__Id_Int != _system_Sw_ModeState__Reset__ID_INT:
                    if True:
                        quest_Note_3.quest_Show_String_For_Note_Small_Func("Servo_Motors: Left Only")
                        quest_Note_2.quest_Show_String_For_Note_Small_Func("50% Power for Medium Speed")
                        quest_Note_2.quest_Show_String_For_Note_Small_Func("0% Power for Stop")
                        quest_Motors.quest_Set_PowerMotorsViaBlueRedBlackPins_Func(quest_PortGroup_BlueRedBlack_PortIds_Enum.S1_MotorWheel_Left__S0_MotorWheel_Right,
                            50,
                            0)
                    if True:
                        quest_Note_1.quest_Show_String_For_Note_Small_Func("From Driver's Viewpoint, Bot's micro:bit is upside_down so set Led_Display_Screen likewise: Begin")
                        display.rotate_to(display.Direction.UPSIDE_DOWN)
                        basic.show_leds("""
                            . # . . .
                            # # # . .
                            . # . . .
                            . # . . .
                            . # . # .
                            """)
                        quest_Note_3.quest_Show_String_For_Note_Small_Func("Continue Current State for Time Below")
                        quest_Timer.quest_Set_ContinueCurrentState_CountdownTimer_Func(3, quest_Time_Units_Enum.Seconds)
                        quest_Note_1.quest_Show_String_For_Note_Small_Func("From Driver's Viewpoint, Bot's micro:bit is upside_down so set Led_Display_Screen likewise: End")
                        display.rotate_to(display.Direction.NORMAL)
                if _system_Sw_ModeState__Now__Id_Int != _system_Sw_ModeState__Reset__ID_INT:
                    if True:
                        quest_Note_3.quest_Show_String_For_Note_Small_Func("Servo_Motors: Right Only")
                        quest_Note_2.quest_Show_String_For_Note_Small_Func("50% Power for Medium Speed")
                        quest_Note_2.quest_Show_String_For_Note_Small_Func("0% Power for Stop")
                        quest_Motors.quest_Set_PowerMotorsViaBlueRedBlackPins_Func(quest_PortGroup_BlueRedBlack_PortIds_Enum.S1_MotorWheel_Left__S0_MotorWheel_Right,
                            0,
                            50)
                    if True:
                        quest_Note_1.quest_Show_String_For_Note_Small_Func("From Driver's Viewpoint, Bot's micro:bit is upside_down so set Led_Display_Screen likewise: Begin")
                        display.rotate_to(display.Direction.UPSIDE_DOWN)
                        basic.show_leds("""
                            . . . # .
                            . . # # #
                            . . . # .
                            . . . # .
                            . # . # .
                            """)
                        quest_Note_3.quest_Show_String_For_Note_Small_Func("Continue Current State for Time Below")
                        quest_Timer.quest_Set_ContinueCurrentState_CountdownTimer_Func(3, quest_Time_Units_Enum.Seconds)
                        quest_Note_1.quest_Show_String_For_Note_Small_Func("From Driver's Viewpoint, Bot's micro:bit is upside_down so set Led_Display_Screen likewise: End")
                        display.rotate_to(display.Direction.NORMAL)
                if _system_Sw_ModeState__Now__Id_Int != _system_Sw_ModeState__Reset__ID_INT:
                    if True:
                        quest_Note_3.quest_Show_String_For_Note_Small_Func("Servo_Motors: Left + Right")
                        quest_Note_2.quest_Show_String_For_Note_Small_Func("50% Power for Medium Speed")
                        quest_Note_2.quest_Show_String_For_Note_Small_Func("0% Power for Stop")
                        quest_Motors.quest_Set_PowerMotorsViaBlueRedBlackPins_Func(quest_PortGroup_BlueRedBlack_PortIds_Enum.S1_MotorWheel_Left__S0_MotorWheel_Right,
                            50,
                            50)
                    if True:
                        quest_Note_1.quest_Show_String_For_Note_Small_Func("From Driver's Viewpoint, Bot's micro:bit is upside_down so set Led_Display_Screen likewise: Begin")
                        display.rotate_to(display.Direction.UPSIDE_DOWN)
                        basic.show_leds("""
                            . # . # .
                            # # # # #
                            . # . # .
                            . # . # .
                            . # . # .
                            """)
                        quest_Note_3.quest_Show_String_For_Note_Small_Func("Continue Current State for Time Below")
                        quest_Timer.quest_Set_ContinueCurrentState_CountdownTimer_Func(3, quest_Time_Units_Enum.Seconds)
                        quest_Note_1.quest_Show_String_For_Note_Small_Func("From Driver's Viewpoint, Bot's micro:bit is upside_down so set Led_Display_Screen likewise: End")
                        display.rotate_to(display.Direction.NORMAL)
                if _system_Sw_ModeState__Now__Id_Int != _system_Sw_ModeState__Reset__ID_INT:
                    if True:
                        quest_Note_3.quest_Show_String_For_Note_Small_Func("Servo_Motors: All Stop")
                        quest_Motors.quest_Set_PowerMotorsViaBlueRedBlackPins_Func(quest_PortGroup_BlueRedBlack_PortIds_Enum.S1_MotorWheel_Left__S0_MotorWheel_Right,
                            0,
                            0)
                    if True:
                        quest_Note_1.quest_Show_String_For_Note_Small_Func("From Driver's Viewpoint, Bot's micro:bit is upside_down so set Led_Display_Screen likewise: Begin")
                        display.rotate_to(display.Direction.UPSIDE_DOWN)
                        basic.show_leds("""
                            . . . . .
                            . . . . .
                            . . . . .
                            . . . . .
                            . # . # .
                            """)
                        quest_Note_3.quest_Show_String_For_Note_Small_Func("Continue Current State for Time Below")
                        quest_Timer.quest_Set_ContinueCurrentState_CountdownTimer_Func(3, quest_Time_Units_Enum.Seconds)
                        quest_Note_1.quest_Show_String_For_Note_Small_Func("From Driver's Viewpoint, Bot's micro:bit is upside_down so set Led_Display_Screen likewise: End")
                        display.rotate_to(display.Direction.NORMAL)
                if _system_Sw_ModeState__Now__Id_Int == _system_Sw_ModeState__Reset__ID_INT:
                    if True:
                        quest_Note_3.quest_Show_String_For_Note_Small_Func("Servo_Motors: All Stop")
                        quest_Motors.quest_Set_PowerMotorsViaBlueRedBlackPins_Func(quest_PortGroup_BlueRedBlack_PortIds_Enum.S1_MotorWheel_Left__S0_MotorWheel_Right,
                            0,
                            0)
                    if True:
                        quest_Note_1.quest_Show_String_For_Note_Small_Func("From Driver's Viewpoint, Bot's micro:bit is upside_down so set Led_Display_Screen likewise: Begin")
                        display.rotate_to(display.Direction.UPSIDE_DOWN)
                        basic.show_leds("""
                            . . . . .
                            . . . . .
                            . . . . .
                            . . . . .
                            . # . # .
                            """)
                        quest_Note_1.quest_Show_String_For_Note_Small_Func("From Driver's Viewpoint, Bot's micro:bit is upside_down so set Led_Display_Screen likewise: End")
                        display.rotate_to(display.Direction.NORMAL)
                quest_Note_2.quest_Show_String_For_Note_Small_Func("Just exited the above_conditioned 'if then' state and will process accordingly as needed:")
                _system_Sw_ModeState__Now__Id_Int = _system_Sw_ModeState__Run__AndShow_01_DeviceType__ID_INT
basic.forever(on_forever9)

def on_every_interval():
    quest_Note_6.quest_Show_String_For_Note_Small_Func("This stack is practically a 'non-executing' stack that does not tie up cpu_resources with its 1 hour (3600,000)")
    quest_Note_6.quest_Show_String_For_Note_Small_Func("Also the 'if(false)' mini-stacks will be skipped by cpu, for further non-resource burdening")
    if False:
        quest_Note_6.quest_Show_String_For_Note_Big_Func("Staff: Very Important Notes")
        if False:
            quest_Note_1.quest_Show_String_For_Note_Small_Func("Levels 1, 2, 2.1")
            quest_Note_1.quest_Show_String_For_Note_Small_Func("* Level 1: Hardcoded Static via Actual_Numbers for MotorPower%")
            quest_Note_1.quest_Show_String_For_Note_Small_Func("* Level 2: Softcoded Dynamic via Variables/Constants for MotorPower% ")
            quest_Note_1.quest_Show_String_For_Note_Small_Func("* Level 2.1 Add Controller_Joystick * Level 2.2 Add Gear 3 (90%?)")
        quest_Note_1.quest_Show_String_For_Note_Small_Func("Basic Comment_Colors Usage:: Black: Very Big Picture, Blue: Big Picture, Green: Following Block_Code Moddable, Orange: Question/TODO, Magenta: Special Multi-Purpose ")
        quest_Note_1.quest_Show_String_For_Note_Small_Func("micro:bit Ver2 Warning during Download is Ignorable Yet Courteously Helpful")
        quest_Note_1.quest_Show_String_For_Note_Small_Func("'if_then' mini-stacks useful for modular 3-D code select/duplicate/move/delete")
        quest_Note_1.quest_Show_String_For_Note_Small_Func("Light_Gray Functions non-editable (backend staff-use code only)")
        quest_Note_1.quest_Show_String_For_Note_Small_Func("For Group_CHannel_# (Bot_Id): Propose: 1-10 Staff Use, 11-99 Student Use")
        quest_Note_1.quest_Show_String_For_Note_Small_Func("SW Reset: Long_Press Logo for 3 sec min")
        quest_Note_1.quest_Show_String_For_Note_Small_Func("Built-in Diagnostic Test: Short_Press Logo for 1 sec max")
        quest_Note_1.quest_Show_String_For_Note_Small_Func("'Blocks' Window homes 'on start'_stack as top_left corner of editor_screen, until 'on start' is moved below, then next stack to right presides")
        quest_Note_3.quest_Show_String_For_Note_Small_Func("All These Levels are Intermediate Level Coding due to Networking Pairing Involved.  Basic Diagnostic Servo_Motors (Autonomoous) is Beginner Level.")
        quest_Note_3.quest_Show_String_For_Note_Small_Func("This Intermediate Level Network_Pairing has 1sec_Lag Response Time; The Other Advanced Level Network_Pairing has Real_Time Response Time.")
        quest_Note_3.quest_Show_String_For_Note_Small_Func("For Level 1, can keep 'Forward: set manual_servo_motors' Block functional, yet reset to 0 all other 'set manual_servo_motors' Blocks for Discovery Learning")
        quest_Note_3.quest_Show_String_For_Note_Small_Func("If duplicate stacks exist, then the highest stack is active and others are non_active")
    if False:
        quest_Note_6.quest_Show_String_For_Note_Big_Func("Staff: Important Notes")
        quest_Note_1.quest_Show_String_For_Note_Small_Func("Upon open file, Editor zooms in on closest stack to right of original_origin from project_creation")
        quest_Note_1.quest_Show_String_For_Note_Small_Func("Semantic Naming prefers '_' vs. '-' since latter can be conufused with minus_sign")
        quest_Note_1.quest_Show_String_For_Note_Small_Func("'every 360000 ms' (1 hour) Stacks can be ignored, esp w/ 'if false' embedded")
        quest_Note_1.quest_Show_String_For_Note_Small_Func("Avoid using 'show leds' Block since will cause lag & degrade real-time response")
        quest_Note_1.quest_Show_String_For_Note_Small_Func("Seems like 'signficant' changes to JavaScript can activate 'format code', rearrange stacks to original position")
        quest_Note_1.quest_Show_String_For_Note_Small_Func("Important 'system' variables are 1) _system_Hw_DeviceType__* (Hw=Hardware) and 2) _system_Sw_ModeState__* (Sw=Software)")
        quest_Note_1.quest_Show_String_For_Note_Small_Func("If Buttons C-F for Gears/Misc, Maybe 'Logo Up/Down' for 'Servo_Arm Up/Down'")
        quest_Note_1.quest_Show_String_For_Note_Small_Func("'Rotatedisplay' could be used on Bot's Led_Screen, but causes light flickering on bottom row, so maybe avoid")
        quest_Note_1.quest_Show_String_For_Note_Small_Func("Reliable/Faster Response If Screen_Led_Graphics After Important Action Blocks Above")
        if False:
            quest_Note_3.quest_Show_String_For_Note_Small_Func("Main upgrade from Lv1 to Lv2 is replacing cpu_laggy 'show leds' block with cpu_fast 'plox x _ y _' block, such as below: ")
            if False:
                quest_Note_1.quest_Show_String_For_Note_Small_Func("West")
                quest_Note_1.quest_Show_String_For_Note_Small_Func("LED 5x5 Screen: (0,0) @ Upper_Left -&- (4,4) @ Bottom_Right")
                led.plot(4, 2)
            elif False:
                quest_Note_1.quest_Show_String_For_Note_Small_Func("North")
                quest_Note_1.quest_Show_String_For_Note_Small_Func("LED 5x5 Screen: (0,0) @ Upper_Left -&- (4,4) @ Bottom_Right")
                led.plot(2, 0)
            elif False:
                quest_Note_1.quest_Show_String_For_Note_Small_Func("East")
                quest_Note_1.quest_Show_String_For_Note_Small_Func("LED 5x5 Screen: (0,0) @ Upper_Left -&- (4,4) @ Bottom_Right")
                led.plot(2, 4)
            elif False:
                quest_Note_1.quest_Show_String_For_Note_Small_Func("South")
                quest_Note_1.quest_Show_String_For_Note_Small_Func("LED 5x5 Screen: (0,0) @ Upper_Left -&- (4,4) @ Bottom_Right")
                led.plot(0, 2)
            elif False:
                quest_Note_1.quest_Show_String_For_Note_Small_Func("Idle: Neutral")
                quest_Note_1.quest_Show_String_For_Note_Small_Func("LED 5x5 Screen: (0,0) @ Upper_Left -&- (4,4) @ Bottom_Right")
                led.plot(2, 2)
            else:
                if True:
                    quest_Note_1.quest_Show_String_For_Note_Small_Func("Gear: Lo")
                    led.plot(2, 3)
                else:
                    quest_Note_1.quest_Show_String_For_Note_Small_Func("Gear: Hi")
                    led.plot(2, 1)
    if False:
        quest_Note_6.quest_Show_String_For_Note_Big_Func("Staff: Notes")
        if False:
            quest_Note_1.quest_Show_String_For_Note_Small_Func("Following Bug Resolved: TYJ")
            quest_Note_1.quest_Show_String_For_Note_Small_Func("////jwc n may cause compiler bug, auto_creates 'let controller__Polar_OriginAtCenter__AngleDegree__Int = 0' at Blocks: on start stack: root level: error_Message_Func(\"2024-0212-1730\", convertToText(controller__Polar_OriginAtCenter__AngleDegree__Int))")
            quest_Note_1.quest_Show_String_For_Note_Small_Func("Fix: 'error_Message_Func(\"2024-0212-1730\", \"Invalid 'controller__Polar_OriginAtCenter__AngleDegree__Int'\")'")
            if False:
                quest_Note_1.quest_Show_String_For_Note_Small_Func("KINDLY IGNORE:: COMPILER ISSUE: NEED FOLLOING UNUSUAL VARIABLE DECLARATION BY COMPILER")
                quest_Note_1.quest_Show_String_For_Note_Small_Func("Following Always First Line of This 'on start' Stack by Compiler.")
                quest_Note_1.quest_Show_String_For_Note_Small_Func("Can Move Anywhere on Same Stack, But Needs to Stay Root Level (Main_Stack), e.g. Not Nested in Sub/Mini_Stack")
                quest_Note_1.quest_Show_String_For_Note_Small_Func("* Current variable below is: 'controller__Polar_OriginAtCenter__AngleDegree__Int'")
        if False:
            quest_Note_1.quest_Show_String_For_Note_Small_Func("jwc ? cause compiler to auto-create weird code below from 'convert_Controller_Joystick_Directional_AngleDegrees__To__Microbit5x5Screen_Func(controller__Polar_OriginAtCenter__AngleDegree__Int)'")
            quest_Note_1.quest_Show_String_For_Note_Small_Func("jwc ? may cause compiler bug, auto_creates 'let controller__Polar_OriginAtCenter__AngleDegree__Int = 0' at inactive free space")
        quest_Note_1.quest_Show_String_For_Note_Small_Func("When activating a 'on Radio Received' stack, replace 'receivedString_TO_BE_REPLACED_BY_ONrADIOrECEIVED_STACK' with 'receivedString'")
        if False:
            quest_Note_4.quest_Show_String_For_Note_Small_Func("Cpu-Cycle Delay: 20ms:: 115200-Y, 57600-Y, 38400-Y")
            quest_Note_4.quest_Show_String_For_Note_Small_Func("Cpu-Cycle Delay: 20ms:: 14400-N, 28800-N, 31250-N ")
            serial.redirect(SerialPin.USB_TX, SerialPin.USB_RX, BaudRate.BAUD_RATE115200)
loops.every_interval(3600000, on_every_interval)
