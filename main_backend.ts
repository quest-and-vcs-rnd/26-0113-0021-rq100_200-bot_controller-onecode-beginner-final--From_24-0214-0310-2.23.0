// * jwc 25-0627-0400 Best to slow down joystick w/ 20ms-delay and turn-off all significant serial.prints

/**
 * Variables moved from 'main.ts' to 'main_backend.ts'
 */
let motor_Power_R_Neg100toPos100_Int = 0
let motor_Power_L_Neg100toPos100_Int = 0
let controller_Joystick__Raw_OriginAtBottomRight__X_Int = 0
let controller_Joystick__Raw_OriginAtBottomRight__Y_Int = 0
let controller_Joystick__Raw_OriginAtBottomRight__XandY_Center = 0
let _local_grid__origin_at_upper_left__y_int = 0
let _local_grid__origin_at_upper_left__x_int = 0
let _local_grid__origin_at_center__y_int = 0
let _local_grid__origin_at_center__x_int = 0
let _local_new_y_int = 0
let _local_new_x_int = 0
////jwc o let device_Mode_Show_Alt_GroupChannelNum_Bool = false
let _debug_Serial_Print_Bool = false
////jwc o let network_GroupChannel_MyBotAndController_Base0__Digit_Ones__Int = 0
////jwc o let network_GroupChannel_MyBotAndController_Base0__Digit_Tens__Int = 0
let controller_Joystick__Cartesian_OriginAtCenter__Y_Int = 0
let controller_Joystick__Cartesian_OriginAtCenter__X_Int = 0
let _local_converted_value_int_out = 0
let network_Throttle_Controller_DelayPerCpuCycle_Int = 0
let network_Throttle_MilliSec_Per_CpuCycle_Duration = 0
let network_Throttle_MilliSec_Per_CpuCycle_End = 0
let network_Throttle_MilliSec_Per_CpuCycle_Start = 0
let screenBrightness_HI_DEFAULT_INT = 0
let screenBrightness_MI_INT = 0
let screenBrightness_LO_INT = 0
let network_Message_Received_Ok_Bool = false
let _codeComment_AsText = ""

let screenBrightness_Heartbeat_Count_DELTA_INT = 0
let screenBrightness_HeartBeat_Count_MIN_INT = 0
let screenBrightness_Heartbeat_Count_MAX_INT = 0


// //jwc ? // jwc: add to fix compiler error
// //jwc ? motor_Power_Gear_01_MAX = 0
////jwc n let motor_Power_Gear_01_MAX = 0
// //jwc ? // jwc: add to fix compiler error
// //jwc ? motor_Power_Gear_02_MAX = 0
////jwc n let motor_Power_Gear_02_MAX = 0


function error_Message_Func(date_time_stamp_as_errorid_in: string, error_message_str_in: string) {
    serial.writeLine(" !!! ERROR !!! " + date_time_stamp_as_errorid_in + " : " + error_message_str_in + " . ")
}
function ConvertNetworkMessage_ToOperateBot_PrintDebug_Func(name_Str_In: string, value_Int_In: number, motor_Power_L_Neg100toPos100_Int_In: number, motor_Power_R_Neg100toPos100_Int_In: number) {
    serial.writeString(" > " + name_Str_In + " = " + quest_General.quest_Get_Number_WithColumnPadding_AsStringOut_Func(
        value_Int_In,
        5,
        0
    ) + " || servo_motor_l:" + quest_General.quest_Get_Number_WithColumnPadding_AsStringOut_Func(
        motor_Power_L_Neg100toPos100_Int_In,
        5,
        0
    ) + " | servo_motor_r:" + quest_General.quest_Get_Number_WithColumnPadding_AsStringOut_Func(
        motor_Power_R_Neg100toPos100_Int_In,
        5,
        0
    ) + " <")
}


basic.forever(function () {
    screenBrightness_Heartbeat_Count_Int += screenBrightness_Heartbeat_Count_DELTA_INT
    // * Use '<= and >=' vs '< and >' since do not want to go past boundaries when changing values
    if (screenBrightness_Heartbeat_Count_Int <= screenBrightness_HeartBeat_Count_MIN_INT || screenBrightness_Heartbeat_Count_Int >= screenBrightness_Heartbeat_Count_MAX_INT) {
        screenBrightness_Heartbeat_Count_DELTA_INT = -1 * screenBrightness_Heartbeat_Count_DELTA_INT
    }
})

function network__CpuCycle_Post__Management_Func() {
    if (true) {
        ////jwc o if (false) {
        if (false) {
            _codeComment_AsText = "Deactivate to prevent inducing any network lag"
            _codeComment_AsText = "To not flood bot-server, add delay"
            ////jwc o basic.pause(network_Throttle_Controller_DelayPerCpuCycle_Int)
            ////jwc y Total 100 -bot; 80, 12 controller: basic.pause(50)

        }
        ////jwc o if (_debug_Serial_Print_Bool) {
        if (false) {
            network_Throttle_MilliSec_Per_CpuCycle_End = control.millis()
            network_Throttle_MilliSec_Per_CpuCycle_Duration = network_Throttle_MilliSec_Per_CpuCycle_End - network_Throttle_MilliSec_Per_CpuCycle_Start
            network_Throttle_MilliSec_Per_CpuCycle_Start = network_Throttle_MilliSec_Per_CpuCycle_End
            serial.writeLine("\"*** *** Debug: network_Throttle_MilliSec_Per_CpuCycle_Duration: \"" + network_Throttle_MilliSec_Per_CpuCycle_Duration)
        }
    }
}

function setup_Network_Func() {
    if (true) {
        _codeComment_AsText = "Network"
        if (true) {
            if (true) {
                network_Throttle_MilliSec_Per_CpuCycle_Start = 0
                network_Throttle_MilliSec_Per_CpuCycle_End = 0
                network_Throttle_MilliSec_Per_CpuCycle_Duration = 0
                network_Throttle_Controller_DelayPerCpuCycle_Int = 0
            }
        }
        if (true) {
            ////jwc o device_Mode_Edit__GroupChannelNum__Bool = false
            radio.setGroup(network_GroupChannel_MyBotAndController_Base0_Int)
            ////jwc o basic.showString("CH:" + network_GroupChannel_MyBotAndController_Base0_Int)
        }
    }
}
function setup_BotAndController_Func() {
    if (true) {
        _codeComment_AsText = "Default: None, since require manual activation since all-in-one code shared between both devices"
        ////jwc o device_Type_Controller_Bool = false
        ////jwc o device_Type_Bot_Bool = false
        _system_Hw_DeviceType__Now__Id_Int = _system_Hw_DeviceType__Null__ID_INT
    }
    if (true) {
        screenBrightness_HI_DEFAULT_INT = 255
        ////jwc 24-0228-1600
        // 127 not low enough, 15 is better, 1 too low, 7 seems best (too light), try 20 (not bad), then 30 (max)
        screenBrightness_MI_INT = 30
        // lowest 1 is still visible :)+
        //// jwc ? screenBrightness_LO_INT = 7
        screenBrightness_LO_INT = 1
        screenBrightness_Heartbeat_Count_Int = 0
        // * [30..-5]by0.5 >> 1 sec one-way-trip, [50..-10]by1, [50-..-25]by1, [100..-50]by2, [200..-100]by4, off too long: [250..-50]by4
        if (true) {
            // 300/4 = 75 rounds for one-way for roughly 0.5sec
            //
            // 255 max too high, stays bright too long; 50 not bad, try 30 for more 1sec heartbeat
            ////jwc y screenBrightness_Heartbeat_Count_MAX_INT = 250
            ////jwc ? screenBrightness_Heartbeat_Count_MAX_INT = 50
            screenBrightness_Heartbeat_Count_MAX_INT = 250
            // 0 not low enough, try -15 for more of 50% duty on/off cycle, try -10 for less off, try -5
            ////jwc y screenBrightness_HeartBeat_Count_MIN_INT = -50
            ////jwc ? screenBrightness_HeartBeat_Count_MIN_INT = -25
            ////jwc y 24-0228-1600: -50, -80, -100
            ////
            ////jwc y screenBrightness_HeartBeat_Count_MIN_INT = -50
            screenBrightness_HeartBeat_Count_MIN_INT = -150
            // * 1 >> 0.5
            ////jwc y screenBrightness_Heartbeat_Count_DELTA_INT = 4
            ////jwc ? screenBrightness_Heartbeat_Count_DELTA_INT = 1
            ////jwc y x2 = 8 >> 10, 20: screenBrightness_Heartbeat_Count_DELTA_INT = 4
            screenBrightness_Heartbeat_Count_DELTA_INT = 20

        }
    }
    if (true) {
        _debug_Serial_Print_Bool = false
    }
    ////jwc o if (true) {
    ////jwc o     ////jwc o _system_Sw_ModeState__Now__Id_Int = device_Mode_Control__ByManual__ID_INT
    ////jwc o     ////jwc o device_Mode_Edit__GroupChannelNum__Bool = false
    ////jwc o     ////jwc o device_Mode_Show_Alt_GroupChannelNum_Bool = false
    ////jwc o }
}
function setup_BotOnly_Func() {
    ////jwc o if (device_Type_Bot_Bool) {
    ////jwc o if (true) {
    ////jwc o     quest_Note_1.quest_Show_String_For_Note_Big_Func(
    ////jwc o         "Was 75/100"
    ////jwc o     )
    ////jwc o     motor_Power_Gear_01_MAX = 30
    ////jwc o     motor_Power_Gear_02_MAX = 60
    ////jwc o     motor_Power_ZERO_INT = 0
    ////jwc o }
    if (true) {
        motor_Power_Full_Current_Pos = motor_Power_Gear_01_MAX        
        motor_Power_Full_Current_Neg = -1 * motor_Power_Full_Current_Pos
        motor_Power_Half_Current = Math.round(0.5 * motor_Power_Full_Current_Pos)
        ////jwc debug: serial.writeLine("*** 24-0323-1920: " + convertToText(motor_Power_Gear_01_MAX) + " " + convertToText(motor_Power_Full_Current_Pos))
        // Mb only upside-down for Bot (and not for Controller-Joystick)
        display.rotateTo(display.Direction.UpsideDown)
    }
}
function setup_ControllerOnly_Func() {
    if (true) {
        joystickbit.initJoystickBit()
    }
    if (true) {
        controller_Joystick__Raw_OriginAtBottomRight__Y_Int = 0
        controller_Joystick__Raw_OriginAtBottomRight__X_Int = 0
        controller_Joystick__Raw_OriginAtBottomRight__XandY_Center = 512
    }
    if (true) {
        controller__Polar_OriginAtCenter__AngleDegree__AsIncremented_By__Int = 90
        ////jwc o controller__Polar_OriginAtCenter__MagnitudePixel__IdleDeadzone_Max512__INT = 15
    }
}


function network_GroupChannel_Show_Func(screenBrightness_int_in: number) {
    ////jwc o laggy: basic.clearScreen()
    screen_Clear_Func()
    _codeComment_AsText = "'groupChannel_Mine_Base1_Int' convert from Human-Base1 to XY-Base0"
    ////jwc o if (device_Type_Controller_Bool) {
    ////jwc o     for (let index = 0; index <= network_GroupChannel_MyBotAndController_Base0__Digit_Tens__Int - 1; index++) {
    ////jwc o         _codeComment_AsText = "Resides on Columns (Base0): 0 & 1"
    ////jwc o         led.plot(Math.idiv(index, 5) + 0, index % 5)
    ////jwc o     }
    ////jwc o     for (let index2 = 0; index2 <= network_GroupChannel_MyBotAndController_Base0__Digit_Ones__Int - 1; index2++) {
    ////jwc o         _codeComment_AsText = "Resides on Columns (Base0): 3 & 4"
    ////jwc o         led.plot(Math.idiv(index2, 5) + 3, index2 % 5)
    ////jwc o     }
    ////jwc o } else if (device_Type_Bot_Bool) {
    ////jwc o     for (let index = 0; index <= network_GroupChannel_MyBotAndController_Base0__Digit_Tens__Int - 1; index++) {
    ////jwc o         _codeComment_AsText = "Resides on Columns (Base0): 0 & 1"
    ////jwc o         led.plot(Math.idiv(index, 5) + 0 + 3, 4 - index % 5)
    ////jwc o     }
    ////jwc o     for (let index2 = 0; index2 <= network_GroupChannel_MyBotAndController_Base0__Digit_Ones__Int - 1; index2++) {
    ////jwc o         _codeComment_AsText = "Resides on Columns (Base0): 3 & 4"
    ////jwc o         led.plot(Math.idiv(index2, 5) + 3 - 3, 4 - index2 % 5)
    ////jwc o     }
    ////jwc o }
    for (let index = 0; index <= network_GroupChannel_MyBotAndController_Base0__Digit_Tens__Int - 1; index++) {
        _codeComment_AsText = "Resides on Columns (Base0): 0 & 1"
        ////jwc o led.plot(Math.idiv(index, 5) + 0, index % 5)
        led.plotBrightness(Math.idiv(index, 5) + 0, index % 5, screenBrightness_int_in)
    }
    for (let index2 = 0; index2 <= network_GroupChannel_MyBotAndController_Base0__Digit_Ones__Int - 1; index2++) {
        _codeComment_AsText = "Resides on Columns (Base0): 3 & 4"
        ////jwc o led.plot(Math.idiv(index2, 5) + 3, index2 % 5)
        led.plotBrightness(Math.idiv(index2, 5) + 3, index2 % 5, screenBrightness_int_in)
    }
    for (let index3 = 0; index3 <= network_GroupChannel_MyBotAndController_Base0__Digit_Hundreds__Int - 1; index3++) {
        _codeComment_AsText = "Resides on Columns (Base0): 2"
        led.plotBrightness(Math.idiv(index3, 5) + 2, index3 % 5, screenBrightness_int_in)
    }
}
basic.forever(function () {
    _codeComment_AsText = "DashboardDisplay_GroupChannel_Edit_Mode"
    ////jwc o obsolete due to flickering: if (_system_Sw_ModeState__Now__Id_Int == _system_Sw_ModeState__Run__AndShow_02_GroupChannelNum__ID_INT) {
    ////jwc o obsolete due to flickering:     ////jwc o laggy: basic.clearScreen()
    ////jwc o obsolete due to flickering:     screen_Clear_Func()
    ////jwc o obsolete due to flickering:     _codeComment_AsText = "'groupChannel_Mine_Base1_Int' convert from Human-Base1 to XY-Base0"
    ////jwc o obsolete due to flickering:     ////jwc o if (device_Type_Controller_Bool) {
    ////jwc o obsolete due to flickering:     ////jwc o     for (let index = 0; index <= network_GroupChannel_MyBotAndController_Base0__Digit_Tens__Int - 1; index++) {
    ////jwc o obsolete due to flickering:     ////jwc o         _codeComment_AsText = "Resides on Columns (Base0): 0 & 1"
    ////jwc o obsolete due to flickering:     ////jwc o         led.plot(Math.idiv(index, 5) + 0, index % 5)
    ////jwc o obsolete due to flickering:     ////jwc o     }
    ////jwc o obsolete due to flickering:     ////jwc o     for (let index2 = 0; index2 <= network_GroupChannel_MyBotAndController_Base0__Digit_Ones__Int - 1; index2++) {
    ////jwc o obsolete due to flickering:     ////jwc o         _codeComment_AsText = "Resides on Columns (Base0): 3 & 4"
    ////jwc o obsolete due to flickering:     ////jwc o         led.plot(Math.idiv(index2, 5) + 3, index2 % 5)
    ////jwc o obsolete due to flickering:     ////jwc o     }
    ////jwc o obsolete due to flickering:     ////jwc o } else if (device_Type_Bot_Bool) {
    ////jwc o obsolete due to flickering:     ////jwc o     for (let index = 0; index <= network_GroupChannel_MyBotAndController_Base0__Digit_Tens__Int - 1; index++) {
    ////jwc o obsolete due to flickering:     ////jwc o         _codeComment_AsText = "Resides on Columns (Base0): 0 & 1"
    ////jwc o obsolete due to flickering:     ////jwc o         led.plot(Math.idiv(index, 5) + 0 + 3, 4 - index % 5)
    ////jwc o obsolete due to flickering:     ////jwc o     }
    ////jwc o obsolete due to flickering:     ////jwc o     for (let index2 = 0; index2 <= network_GroupChannel_MyBotAndController_Base0__Digit_Ones__Int - 1; index2++) {
    ////jwc o obsolete due to flickering:     ////jwc o         _codeComment_AsText = "Resides on Columns (Base0): 3 & 4"
    ////jwc o obsolete due to flickering:     ////jwc o         led.plot(Math.idiv(index2, 5) + 3 - 3, 4 - index2 % 5)
    ////jwc o obsolete due to flickering:     ////jwc o     }
    ////jwc o obsolete due to flickering:     ////jwc o }
    ////jwc o obsolete due to flickering:     //// //// jwc o for (let index = 0; index <= network_GroupChannel_MyBotAndController_Base0__Digit_Tens__Int - 1; index++) {
    ////jwc o obsolete due to flickering:     //// //// jwc o     _codeComment_AsText = "Resides on Columns (Base0): 0 & 1"
    ////jwc o obsolete due to flickering:     //// //// jwc o     ////jwc o led.plot(Math.idiv(index, 5) + 0, index % 5)
    ////jwc o obsolete due to flickering:     //// //// jwc o     led.plotBrightness(Math.idiv(index, 5) + 0, index % 5, screenBrightness_MI_INT)
    ////jwc o obsolete due to flickering:     //// //// jwc o }
    ////jwc o obsolete due to flickering:     //// //// jwc o for (let index2 = 0; index2 <= network_GroupChannel_MyBotAndController_Base0__Digit_Ones__Int - 1; index2++) {
    ////jwc o obsolete due to flickering:     //// //// jwc o     _codeComment_AsText = "Resides on Columns (Base0): 3 & 4"
    ////jwc o obsolete due to flickering:     //// //// jwc o     ////jwc o led.plot(Math.idiv(index2, 5) + 3, index2 % 5)
    ////jwc o obsolete due to flickering:     //// //// jwc o     led.plotBrightness(Math.idiv(index2, 5) + 3, index2 % 5, screenBrightness_MI_INT)
    ////jwc o obsolete due to flickering:     //// //// jwc o }
    ////jwc o obsolete due to flickering:     network_GroupChannel_Show_Func(screenBrightness_MI_INT)
    ////jwc o obsolete due to flickering: }
    ////jwc o obsolete due to flickering: else if (_system_Sw_ModeState__Now__Id_Int == _system_Sw_ModeState__Edit_GroupChannelNum__ID_INT){
    ////jwc o obsolete due to flickering:     network_GroupChannel_Show_Func(screenBrightness_HI_DEFAULT_INT)
    ////jwc o obsolete due to flickering: }

    if (_system_Sw_ModeState__Now__Id_Int == _system_Sw_ModeState__Edit_GroupChannelNum__ID_INT) {
        ////jwc o network_GroupChannel_Show_Func(screenBrightness_HI_DEFAULT_INT)
        network_GroupChannel_Show_Func(screenBrightness_Heartbeat_Count_Int)
    }

    // Minimum freeze this state for 20fps (50msec) for min real_time status
    // * 50msec, try longer 100msec, 500msec too laggy, cause off too long
    ////jwc n actually best not used since real_time w/o this delay: quest_Timer.quest_Set_ContinueCurrentState_CountdownTimer_Func(500, quest_Time_Units_Enum.Milliseconds)
})
basic.forever(function () {
    ////jwc o if (device_Type_Controller_Bool || device_Type_Bot_Bool) {
    if (_system_Hw_DeviceType__Now__Id_Int == _system_Hw_DeviceType__Bot__ID_INT || _system_Hw_DeviceType__Now__Id_Int == _system_Hw_DeviceType__Controller_Joystick__ID_INT) {
        if ((_system_Sw_ModeState__Now__Id_Int == _system_Sw_ModeState__Run__AndShow_01_DeviceType__ID_INT) || (_system_Sw_ModeState__Now__Id_Int == _system_Sw_ModeState__Run__AndShow_02_GroupChannelNum__ID_INT)) {

            if (_system_Sw_ModeState__Now__Id_Int == _system_Sw_ModeState__Run__AndShow_01_DeviceType__ID_INT) {
                quest_Note_2.quest_Show_String_For_Note_Small_Func(
                    "Just completed the above_conditioned 'if then' state and will move on to the next mode_state"
                )
                //
                // '_system_Sw_ModeState__Run__AndShow_02_GroupChannelNum__ID_INT'
                //
                // //jwc n: seems timing issue, place earlier before state checking: quest_Timer.quest_Set_ContinueCurrentState_CountdownTimer_Func(5, quest_Time_Units_Enum.Seconds)
                _system_Sw_ModeState__Now__Id_Int = _system_Sw_ModeState__Run__AndShow_02_GroupChannelNum__ID_INT

                ////jwc y network_GroupChannel_MyBotAndController_Base0__Digit_Tens__Int = Math.idiv(network_GroupChannel_MyBotAndController_Base0_Int, 10)
                ////jwc y network_GroupChannel_MyBotAndController_Base0__Digit_Ones__Int = network_GroupChannel_MyBotAndController_Base0_Int % 10

                network_GroupChannel_MyBotAndController_Base0__Digit_Hundreds__Int = Math.idiv(network_GroupChannel_MyBotAndController_Base0_Int, 100)
                network_GroupChannel_MyBotAndController_Base0__Digit_Tens__Int = Math.idiv(network_GroupChannel_MyBotAndController_Base0_Int - network_GroupChannel_MyBotAndController_Base0__Digit_Hundreds__Int * 100, 10)
                network_GroupChannel_MyBotAndController_Base0__Digit_Ones__Int = Math.idiv(network_GroupChannel_MyBotAndController_Base0_Int - ((network_GroupChannel_MyBotAndController_Base0__Digit_Hundreds__Int * 100) + (network_GroupChannel_MyBotAndController_Base0__Digit_Tens__Int * 10)), 1)

                ////jwc y do at lower level: screen_Clear_Func()
                ////jwc y network_GroupChannel_Show_Func(screenBrightness_MI_INT)
                network_GroupChannel_Show_Func(screenBrightness_HI_DEFAULT_INT)
                ////jwc y for debug: serial.writeLine("24-0714-2350> " + network_GroupChannel_MyBotAndController_Base0_Int + " " + network_GroupChannel_MyBotAndController_Base0__Digit_Hundreds__Int + " " + network_GroupChannel_MyBotAndController_Base0__Digit_Tens__Int + " " + network_GroupChannel_MyBotAndController_Base0__Digit_Ones__Int)

            } else if (_system_Sw_ModeState__Now__Id_Int == _system_Sw_ModeState__Run__AndShow_02_GroupChannelNum__ID_INT) {
                quest_Note_2.quest_Show_String_For_Note_Small_Func(
                    "Just completed the above_conditioned 'if then' state and will move on to the next mode_state"
                )
                //
                // '_system_Sw_ModeState__Run__AndShow_01_DeviceType__ID_INT'
                //
                _system_Sw_ModeState__Now__Id_Int = _system_Sw_ModeState__Run__AndShow_01_DeviceType__ID_INT

                ////jwc y do at lower level: screen_Clear_Func()
                if (_system_Hw_DeviceType__Now__Id_Int == _system_Hw_DeviceType__Controller_Joystick__ID_INT) {
                    screen_IconMessage_Func("controller")
                } else if (_system_Hw_DeviceType__Now__Id_Int == _system_Hw_DeviceType__Bot__ID_INT) {
                    screen_IconMessage_Func("bot")
                } else {
                    screen_IconMessage_Func("error")
                }
            }

            ////jwc o: allow for sleep_timer to be aborted as needed: quest_Timer.quest_Set_ContinueCurrentState_CountdownTimer_Func(5, quest_Time_Units_Enum.Seconds)
            for (let index = 0; index < 30; index++) {
                quest_Note_1.quest_Show_String_For_Note_Small_Func(
                    "Sleep Timer: 50 x 0.1 sec = 5.0 sec (0.1sec to allow for real-time abort, when requested) >> try 3.0sec"
                )
                quest_Timer.quest_Set_ContinueCurrentState_CountdownTimer_Func(0.1, quest_Time_Units_Enum.Seconds)
                if (_system_Sw_ModeState__Now__Id_Int == _system_Sw_ModeState__Edit_GroupChannelNum__ID_INT) {
                    quest_Note_1.quest_Show_String_For_Note_Small_Func(
                        "Abort Sleep Timer if Above Condition is True, and should abort out of parent_scope as well"
                    )
                    break;
                }
            }

        }
    }
})


function device_Mode_Edit_GroupChannelNum_ButtonA_Func() {
    ////jwc o if (device_Mode_Edit__GroupChannelNum__Bool) {
    ////jwc o simplify: Bot's Screen displayed same as Controller_Joystick: if ((_system_Hw_DeviceType__Now__Id_Int == _system_Hw_DeviceType__Controller_Joystick__ID_INT) || (_system_Sw_ModeState__Now__Id_Int == _system_Sw_ModeState__Edit_GroupChannelNum__ID_INT)) {
    ////jwc o simplify: Bot's Screen displayed same as Controller_Joystick:     network_GroupChannel_MyBotAndController_Base0__Digit_Tens__Int += 1
    ////jwc o simplify: Bot's Screen displayed same as Controller_Joystick:     if (network_GroupChannel_MyBotAndController_Base0__Digit_Tens__Int > 9) {
    ////jwc o simplify: Bot's Screen displayed same as Controller_Joystick:         // Allow Tens = 0, since 01-99
    ////jwc o simplify: Bot's Screen displayed same as Controller_Joystick:         network_GroupChannel_MyBotAndController_Base0__Digit_Tens__Int = 0
    ////jwc o simplify: Bot's Screen displayed same as Controller_Joystick:     }
    ////jwc o simplify: Bot's Screen displayed same as Controller_Joystick: } else if (_system_Hw_DeviceType__Now__Id_Int == _system_Hw_DeviceType__Bot__ID_INT) {
    ////jwc o simplify: Bot's Screen displayed same as Controller_Joystick:     network_GroupChannel_MyBotAndController_Base0__Digit_Ones__Int += 1
    ////jwc o simplify: Bot's Screen displayed same as Controller_Joystick:     if (network_GroupChannel_MyBotAndController_Base0__Digit_Ones__Int > 9) {
    ////jwc o simplify: Bot's Screen displayed same as Controller_Joystick:         network_GroupChannel_MyBotAndController_Base0__Digit_Ones__Int = 1
    ////jwc o simplify: Bot's Screen displayed same as Controller_Joystick:     }
    ////jwc o simplify: Bot's Screen displayed same as Controller_Joystick: }
    network_GroupChannel_MyBotAndController_Base0__Digit_Tens__Int += 1
    if (network_GroupChannel_MyBotAndController_Base0__Digit_Tens__Int > 9) {
        // Allow Tens = 0, since 01-99
        network_GroupChannel_MyBotAndController_Base0__Digit_Tens__Int = 0
    }
    ////jwc o }
}
function device_Mode_Edit_GroupChannelNum_ButtonB_Func() {
    ////jwc o simplify: Bot's Screen displayed same as Controller_Joystick: if (device_Mode_Edit__GroupChannelNum__Bool) {
    ////jwc o simplify: Bot's Screen displayed same as Controller_Joystick: if ((_system_Hw_DeviceType__Now__Id_Int == _system_Hw_DeviceType__Controller_Joystick__ID_INT) || (_system_Sw_ModeState__Now__Id_Int == _system_Sw_ModeState__Edit_GroupChannelNum__ID_INT)){
    ////jwc o simplify: Bot's Screen displayed same as Controller_Joystick:     network_GroupChannel_MyBotAndController_Base0__Digit_Ones__Int += 1
    ////jwc o simplify: Bot's Screen displayed same as Controller_Joystick:     if (network_GroupChannel_MyBotAndController_Base0__Digit_Ones__Int > 9) {
    ////jwc o simplify: Bot's Screen displayed same as Controller_Joystick:         network_GroupChannel_MyBotAndController_Base0__Digit_Ones__Int = 1
    ////jwc o simplify: Bot's Screen displayed same as Controller_Joystick:     }
    ////jwc o simplify: Bot's Screen displayed same as Controller_Joystick: } else if (_system_Hw_DeviceType__Now__Id_Int == _system_Hw_DeviceType__Bot__ID_INT) {
    ////jwc o simplify: Bot's Screen displayed same as Controller_Joystick:     network_GroupChannel_MyBotAndController_Base0__Digit_Tens__Int += 1
    ////jwc o simplify: Bot's Screen displayed same as Controller_Joystick:     if (network_GroupChannel_MyBotAndController_Base0__Digit_Tens__Int > 9) {
    ////jwc o simplify: Bot's Screen displayed same as Controller_Joystick:         // Allow Tens = 0, since 01-99
    ////jwc o simplify: Bot's Screen displayed same as Controller_Joystick:         network_GroupChannel_MyBotAndController_Base0__Digit_Tens__Int = 0
    ////jwc o simplify: Bot's Screen displayed same as Controller_Joystick:     }
    ////jwc o simplify: Bot's Screen displayed same as Controller_Joystick: }
    network_GroupChannel_MyBotAndController_Base0__Digit_Ones__Int += 1
    if (network_GroupChannel_MyBotAndController_Base0__Digit_Ones__Int > 9) {
        network_GroupChannel_MyBotAndController_Base0__Digit_Ones__Int = 1
    }
    ////jwc o }
}


function screen_IconMessage_Func(screen_IconMessage_Id_Str_In: string) {
    if (_system_Sw_ModeState__Now__Id_Int = _system_Sw_ModeState__Run__AndShow_01_DeviceType__ID_INT) {
        screen_Clear_Func()
        ////jwc y change to capsif (screen_IconMessage_Id_Str_In == "bot") {
        ////jwc y change to caps    _codeComment_AsText = "b = bot"
        ////jwc y change to caps    if (true) {
        ////jwc y change to caps        ////jwc o led.plotBrightness(3, 4, screenBrightness_MI_INT)
        ////jwc y change to caps        led.plotBrightness(3, 3, screenBrightness_MI_INT)
        ////jwc y change to caps        led.plotBrightness(3, 2, screenBrightness_MI_INT)
        ////jwc y change to caps        led.plotBrightness(3, 1, screenBrightness_MI_INT)
        ////jwc y change to caps    }
        ////jwc y change to caps    if (true) {
        ////jwc y change to caps        led.plotBrightness(2, 3, screenBrightness_MI_INT)
        ////jwc y change to caps        led.plotBrightness(2, 1, screenBrightness_MI_INT)
        ////jwc y change to caps    }
        ////jwc y change to caps    if (true) {
        ////jwc y change to caps        led.plotBrightness(1, 3, screenBrightness_MI_INT)
        ////jwc y change to caps        led.plotBrightness(1, 2, screenBrightness_MI_INT)
        ////jwc y change to caps        led.plotBrightness(1, 1, screenBrightness_MI_INT)
        ////jwc y change to caps        led.plotBrightness(1, 0, screenBrightness_MI_INT)
        ////jwc y change to caps    }
        ////jwc y change to caps} else if (screen_IconMessage_Id_Str_In == "controller") {
        ////jwc y change to caps    _codeComment_AsText = "c = controller"
        ////jwc y change to caps    if (true) {
        ////jwc y change to caps        led.plotBrightness(1, 1, screenBrightness_MI_INT)
        ////jwc y change to caps        led.plotBrightness(1, 2, screenBrightness_MI_INT)
        ////jwc y change to caps        led.plotBrightness(1, 3, screenBrightness_MI_INT)
        ////jwc y change to caps    }
        ////jwc y change to caps    if (true) {
        ////jwc y change to caps        led.plotBrightness(2, 3, screenBrightness_MI_INT)
        ////jwc y change to caps        led.plotBrightness(3, 3, screenBrightness_MI_INT)
        ////jwc y change to caps    }
        ////jwc y change to caps    if (true) {
        ////jwc y change to caps        led.plotBrightness(2, 1, screenBrightness_MI_INT)
        ////jwc y change to caps        led.plotBrightness(3, 1, screenBrightness_MI_INT)
        ////jwc y change to caps    }

        // switch from 'screenBrightness_MI_INT' to 'screenBrightness_HI_DEFAULT_INT' to counter strong lights
        if (screen_IconMessage_Id_Str_In == "bot") {
            _codeComment_AsText = "B = Bot"
            if (true) {
                led.plotBrightness(0, 0, screenBrightness_HI_DEFAULT_INT)
                led.plotBrightness(1, 0, screenBrightness_HI_DEFAULT_INT)
                led.plotBrightness(2, 0, screenBrightness_HI_DEFAULT_INT)
                led.plotBrightness(3, 0, screenBrightness_HI_DEFAULT_INT)
            }
            if (true) {
                led.plotBrightness(0, 1, screenBrightness_HI_DEFAULT_INT)
                led.plotBrightness(4, 1, screenBrightness_HI_DEFAULT_INT)
            }
            if (true) {
                led.plotBrightness(0, 2, screenBrightness_HI_DEFAULT_INT)
                led.plotBrightness(1, 2, screenBrightness_HI_DEFAULT_INT)
                led.plotBrightness(2, 2, screenBrightness_HI_DEFAULT_INT)
                led.plotBrightness(3, 2, screenBrightness_HI_DEFAULT_INT)
                led.plotBrightness(4, 2, screenBrightness_HI_DEFAULT_INT)
            }
            if (true) {
                led.plotBrightness(0, 3, screenBrightness_HI_DEFAULT_INT)
                led.plotBrightness(4, 3, screenBrightness_HI_DEFAULT_INT)
            }
            if (true) {
                led.plotBrightness(0, 4, screenBrightness_HI_DEFAULT_INT)
                led.plotBrightness(1, 4, screenBrightness_HI_DEFAULT_INT)
                led.plotBrightness(2, 4, screenBrightness_HI_DEFAULT_INT)
                led.plotBrightness(3, 4, screenBrightness_HI_DEFAULT_INT)
            }
        } else if (screen_IconMessage_Id_Str_In == "controller") {
            _codeComment_AsText = "C = Controller"
            if (true) {
                led.plotBrightness(1, 0, screenBrightness_HI_DEFAULT_INT)
                led.plotBrightness(2, 0, screenBrightness_HI_DEFAULT_INT)
                led.plotBrightness(3, 0, screenBrightness_HI_DEFAULT_INT)
                led.plotBrightness(4, 0, screenBrightness_HI_DEFAULT_INT)
            }
            if (true) {
                led.plotBrightness(0, 1, screenBrightness_HI_DEFAULT_INT)
            }
            if (true) {
                led.plotBrightness(0, 2, screenBrightness_HI_DEFAULT_INT)
            }
            if (true) {
                led.plotBrightness(0, 3, screenBrightness_HI_DEFAULT_INT)
            }
            if (true) {
                led.plotBrightness(1, 4, screenBrightness_HI_DEFAULT_INT)
                led.plotBrightness(2, 4, screenBrightness_HI_DEFAULT_INT)
                led.plotBrightness(3, 4, screenBrightness_HI_DEFAULT_INT)
                led.plotBrightness(4, 4, screenBrightness_HI_DEFAULT_INT)
            }
        } else if (screen_IconMessage_Id_Str_In == "error") {
            _codeComment_AsText = "All 4 Corners Lit: Simple to Code"
            if (true) {
                led.plotBrightness(0, 0, screenBrightness_HI_DEFAULT_INT)
                led.plotBrightness(4, 0, screenBrightness_HI_DEFAULT_INT)
                led.plotBrightness(0, 4, screenBrightness_HI_DEFAULT_INT)
                led.plotBrightness(4, 4, screenBrightness_HI_DEFAULT_INT)
            }
        } else if (screen_IconMessage_Id_Str_In == "1") {
            if (true) {
                led.plotBrightness(0, 1, screenBrightness_HI_DEFAULT_INT)
                led.plotBrightness(0, 2, screenBrightness_HI_DEFAULT_INT)
                led.plotBrightness(0, 3, screenBrightness_HI_DEFAULT_INT)
            }
        } else if (screen_IconMessage_Id_Str_In == "2") {
            if (true) {
                led.plotBrightness(4, 1, screenBrightness_HI_DEFAULT_INT)
                led.plotBrightness(4, 2, screenBrightness_HI_DEFAULT_INT)
                led.plotBrightness(4, 3, screenBrightness_HI_DEFAULT_INT)
            }
        } else if (screen_IconMessage_Id_Str_In == "d") {
            if (true) {
                led.plotBrightness(1, 0, screenBrightness_HI_DEFAULT_INT)
                led.plotBrightness(2, 0, screenBrightness_HI_DEFAULT_INT)
                led.plotBrightness(3, 0, screenBrightness_HI_DEFAULT_INT)
            }
        } else if (screen_IconMessage_Id_Str_In == "u") {
            if (true) {
                led.plotBrightness(1, 4, screenBrightness_HI_DEFAULT_INT)
                led.plotBrightness(2, 4, screenBrightness_HI_DEFAULT_INT)
                led.plotBrightness(3, 4, screenBrightness_HI_DEFAULT_INT)
            }
        } else {
            error_Message_Func("2024-0213-1740", screen_IconMessage_Id_Str_In)
        }
    }
}


function convert_Joytick__Raw_To_Cartesian__Y_Int_Func(raw_value_int_in: number) {
    _local_converted_value_int_out = (raw_value_int_in - controller_Joystick__Raw_OriginAtBottomRight__XandY_Center) * 1
    return _local_converted_value_int_out
}
function convert_Joytick__Raw_To_Cartesian__X_Int_Func(raw_value_int_in: number) {
    _local_converted_value_int_out = (raw_value_int_in - controller_Joystick__Raw_OriginAtBottomRight__XandY_Center) * -1
    return _local_converted_value_int_out
}
function convert_Controller_Joystick__Cartesian_To_Polar__Directional_AngleDegree__AsIncremented_Int_Func(cartesian_side_adjacent_x_int_in: number, cartesian_side_opposite_y_int_in: number, angle_degrees_incremented_in: number) {
    if (false) {
        serial.writeString("> 1 Convert::" + " Side_Adjacent: " + quest_General.quest_Get_Number_WithColumnPadding_AsStringOut_Func(
            cartesian_side_adjacent_x_int_in,
            5,
            0
        ) + " Side_Opposite: " + quest_General.quest_Get_Number_WithColumnPadding_AsStringOut_Func(
            cartesian_side_opposite_y_int_in,
            5,
            0
        ))
    }
    quest_Note_1.quest_Show_String_For_Note_Small_Func(
        "Convert to radians"
    )
    _local_converted_value_int_out = Math.atan2(cartesian_side_opposite_y_int_in, cartesian_side_adjacent_x_int_in)
    if (false) {
        serial.writeString(" Angle:: Radians: " + quest_General.quest_Get_Number_WithColumnPadding_AsStringOut_Func(
            _local_converted_value_int_out,
            10,
            4
        ))
    }
    quest_Note_1.quest_Show_String_For_Note_Small_Func(
        "Convert to degrees"
    )
    _local_converted_value_int_out = _local_converted_value_int_out * (180 / 3.1416)
    if (_local_converted_value_int_out < 0) {
        quest_Note_1.quest_Show_String_For_Note_Small_Func(
            "If < 0, then keep > 0"
        )
        _local_converted_value_int_out = _local_converted_value_int_out + 360
    }
    if (false) {
        serial.writeString(" Degrees:: Raw: " + quest_General.quest_Get_Number_WithColumnPadding_AsStringOut_Func(
            _local_converted_value_int_out,
            5,
            1
        ))
    }
    quest_Note_1.quest_Show_String_For_Note_Small_Func(
        "Convert to degrees as incremented by passed_in_argument"
    )
    _local_converted_value_int_out = Math.idiv(_local_converted_value_int_out, angle_degrees_incremented_in) + Math.round(_local_converted_value_int_out % angle_degrees_incremented_in / angle_degrees_incremented_in)
    if (false) {
        serial.writeString(" Incremented: " + quest_General.quest_Get_Number_WithColumnPadding_AsStringOut_Func(
            _local_converted_value_int_out,
            5,
            1
        ) + " * " + angle_degrees_incremented_in)
    }
    _local_converted_value_int_out = _local_converted_value_int_out * angle_degrees_incremented_in
    if (false) {
        serial.writeString(" = " + quest_General.quest_Get_Number_WithColumnPadding_AsStringOut_Func(
            _local_converted_value_int_out,
            5,
            1
        ))
    }
    if (false) {
        serial.writeNumbers([Math.atan2(1, 1), Math.atan2(1.732, 1), Math.atan2(1, 1.732)])
    }
    return _local_converted_value_int_out
}
function convert_Controller_Joystick__Cartesian_To_Polar__Directional_MagnitudePixel_Int_Func(cartesian_side_adjacent_x_int_in: number, cartesian_side_opposite_y_int_in: number) {
    if (false) {
        serial.writeString("> 2 Convert::" + " Side_Adjacent: " + quest_General.quest_Get_Number_WithColumnPadding_AsStringOut_Func(
            cartesian_side_adjacent_x_int_in,
            5,
            0
        ) + " Side_Opposite: " + quest_General.quest_Get_Number_WithColumnPadding_AsStringOut_Func(
            cartesian_side_opposite_y_int_in,
            5,
            0
        ))
    }
    quest_Note_1.quest_Show_String_For_Note_Small_Func(
        "Calculate radius (pixels)"
    )
    _local_converted_value_int_out = Math.sqrt(cartesian_side_adjacent_x_int_in ** 2 + cartesian_side_opposite_y_int_in ** 2)
    if (false) {
        serial.writeString(" Radius: " + quest_General.quest_Get_Number_WithColumnPadding_AsStringOut_Func(
            _local_converted_value_int_out,
            10,
            4
        ))
    }
    return _local_converted_value_int_out
}
function convert_Controller_Joystick_Directional_AngleDegrees__To__Microbit5x5Screen_Func(angle_degree_int_in: number) {
    if (angle_degree_int_in == 90) {
        quest_Note_1.quest_Show_String_For_Note_Small_Func(
            "tan is undefined (divide by 0)"
        )
        _local_new_x_int = 0
        _local_new_y_int = 2
        quest_Note_1.quest_Show_String_For_Note_Small_Func(
            "Convert to '_local_grid__origin_at_center__x/y_int'"
        )
        _local_grid__origin_at_center__x_int = _local_new_x_int
        _local_grid__origin_at_center__y_int = _local_new_y_int
    } else if (angle_degree_int_in == -90 || angle_degree_int_in == 270) {
        quest_Note_1.quest_Show_String_For_Note_Small_Func(
            "tan is undefined (divide by 0)"
        )
        _local_new_x_int = 0
        _local_new_y_int = -2
        quest_Note_1.quest_Show_String_For_Note_Small_Func(
            "Convert to '_local_grid__origin_at_center__x/y_int'"
        )
        _local_grid__origin_at_center__x_int = _local_new_x_int
        _local_grid__origin_at_center__y_int = _local_new_y_int
    } else {
        if (true) {
            quest_Note_1.quest_Show_String_For_Note_Small_Func(
                "tan is not undefined (not divide by 0)"
            )
            if (angle_degree_int_in >= 45 && angle_degree_int_in <= 135 || angle_degree_int_in >= 225 && angle_degree_int_in <= 315) {
                quest_Note_2.quest_Show_String_For_Note_Small_Func(
                    "Upper or Bottom Side of Grid"
                )
                quest_Note_1.quest_Show_String_For_Note_Small_Func(
                    "y=2, x:"
                )
                _local_new_x_int = 2 / Math.tan(angle_degree_int_in * (3.1416 / 180))
                _local_new_y_int = 2
                quest_Note_1.quest_Show_String_For_Note_Small_Func(
                    "Convert to '_local_grid__origin_at_center__x/y_int'"
                )
                _local_grid__origin_at_center__x_int = Math.round(_local_new_x_int)
                if (_local_grid__origin_at_center__x_int > 2) {
                    _local_grid__origin_at_center__x_int = 2
                }
                _local_grid__origin_at_center__y_int = _local_new_y_int
            } else {
                quest_Note_2.quest_Show_String_For_Note_Small_Func(
                    "Left or Right Side of Grid"
                )
                quest_Note_1.quest_Show_String_For_Note_Small_Func(
                    "x=2, y:"
                )
                _local_new_x_int = 2
                _local_new_y_int = 2 * Math.tan(angle_degree_int_in * (3.1416 / 180))
                quest_Note_1.quest_Show_String_For_Note_Small_Func(
                    "Convert to '_local_grid__origin_at_center__x/y_int'"
                )
                _local_grid__origin_at_center__x_int = _local_new_x_int
                _local_grid__origin_at_center__y_int = Math.round(_local_new_y_int)
                if (_local_grid__origin_at_center__y_int > 2) {
                    _local_grid__origin_at_center__y_int = 2
                }
            }
            if (true) {
                quest_Note_2.quest_Show_String_For_Note_Small_Func(
                    "Default as Quadrant I"
                )
                quest_Note_1.quest_Show_String_For_Note_Small_Func(
                    "Default to positive values regardless of sign of tan"
                )
                _local_grid__origin_at_center__x_int = Math.abs(_local_grid__origin_at_center__x_int)
                _local_grid__origin_at_center__y_int = Math.abs(_local_grid__origin_at_center__y_int)
            }
            if (angle_degree_int_in > 90 && angle_degree_int_in <= 180) {
                quest_Note_2.quest_Show_String_For_Note_Small_Func(
                    "Quadrant II"
                )
                quest_Note_1.quest_Show_String_For_Note_Small_Func(
                    "Exclusive at Lower Boundary (Quad I: Higher Priority) -&- Inclusive at Higher Boundary (Quad III: Lower Priority)"
                )
                _local_grid__origin_at_center__x_int = Math.abs(_local_grid__origin_at_center__x_int) * -1
            } else if (angle_degree_int_in > 180 && angle_degree_int_in < 270) {
                quest_Note_2.quest_Show_String_For_Note_Small_Func(
                    "Quadrant III"
                )
                quest_Note_1.quest_Show_String_For_Note_Small_Func(
                    "Exclusive at Lower Boundary (Quad II: Higher Priority) -&- Exclusive at Higher Boundary (Quad IV: Higher Priority)"
                )
                _local_grid__origin_at_center__x_int = Math.abs(_local_grid__origin_at_center__x_int) * -1
                _local_grid__origin_at_center__y_int = Math.abs(_local_grid__origin_at_center__y_int) * -1
            } else if (angle_degree_int_in >= 270 && angle_degree_int_in < 360) {
                quest_Note_2.quest_Show_String_For_Note_Small_Func(
                    "Quadrant IV"
                )
                quest_Note_1.quest_Show_String_For_Note_Small_Func(
                    "Inclusive at Lower Boundary (Quad III: Lower Priority) -&- Exclusive at Higher Boundary (Quad I: Higher Priority)"
                )
                _local_grid__origin_at_center__y_int = Math.abs(_local_grid__origin_at_center__y_int) * -1
            }
        }
    }
    if (true) {
        quest_Note_2.quest_Show_String_For_Note_Small_Func(
            "Convert from 'origin_at_center' to 'origin_at_upper_left'"
        )
        _local_grid__origin_at_upper_left__x_int = _local_grid__origin_at_center__x_int + 2
        quest_Note_1.quest_Show_String_For_Note_Small_Func(
            "Invert y for micro:bit grid"
        )
        _local_grid__origin_at_upper_left__y_int = _local_grid__origin_at_center__y_int * -1 + 2
        if (false) {
            _local_grid__origin_at_upper_left__y_int = _local_grid__origin_at_center__y_int + 2
            _local_grid__origin_at_upper_left__y_int = _local_grid__origin_at_upper_left__y_int * -1
        }
        if (false) {
            _local_grid__origin_at_upper_left__y_int = 4 - _local_grid__origin_at_center__y_int * -1
        }
        ////jwc o laggy: basic.clearScreen()
        ////jwc o not needed? screen_Clear_Func()
        led.plot(_local_grid__origin_at_upper_left__x_int, _local_grid__origin_at_upper_left__y_int)
    }
    quest_Note_1.quest_Show_String_For_Note_Small_Func(
        " Grid5x5: x:  y:"
    )
    if (false) {
        serial.writeString(" || Grid:::" + " Angle:: Deg:" + quest_General.quest_Get_Number_WithColumnPadding_AsStringOut_Func(
            angle_degree_int_in,
            5,
            1
        ) + " Rad: " + quest_General.quest_Get_Number_WithColumnPadding_AsStringOut_Func(
            angle_degree_int_in * (3.1416 / 180),
            10,
            4
        ) + " Tan: " + quest_General.quest_Get_Number_WithColumnPadding_AsStringOut_Func(
            Math.tan(angle_degree_int_in * (3.1416 / 180)),
            10,
            4
        ) + " | x=2, y:" + quest_General.quest_Get_Number_WithColumnPadding_AsStringOut_Func(
            _local_new_y_int,
            5,
            1
        ) + " | y=2, x: " + quest_General.quest_Get_Number_WithColumnPadding_AsStringOut_Func(
            _local_new_x_int,
            5,
            1
        ) + " || Origin@Cent::" + " x: " + _local_grid__origin_at_center__x_int + " y: " + _local_grid__origin_at_center__y_int + " | Origin@UpLe::" + " x: " + _local_grid__origin_at_upper_left__x_int + " y: " + _local_grid__origin_at_upper_left__y_int)
    }
}

function convert_Controller_Joystick__Cartesian_To_Polar__Directional_AngleDegree__AsIncremented_Int_Func_NOPARAMETERS() {
    return convert_Controller_Joystick__Cartesian_To_Polar__Directional_AngleDegree__AsIncremented_Int_Func(controller_Joystick__Cartesian_OriginAtCenter__X_Int, controller_Joystick__Cartesian_OriginAtCenter__Y_Int, controller__Polar_OriginAtCenter__AngleDegree__AsIncremented_By__Int)
}
function convert_Controller_Joystick__Cartesian_To_Polar__Directional_MagnitudePixel_Int_Func_NOPARAMETERS() {
    return convert_Controller_Joystick__Cartesian_To_Polar__Directional_MagnitudePixel_Int_Func(controller_Joystick__Cartesian_OriginAtCenter__X_Int, controller_Joystick__Cartesian_OriginAtCenter__Y_Int)
}


function startup_ScrollingText_ShowOrNotShow_ReturnBool_Func() {
    if ((_system_Hw_DeviceType__Now__Id_Int == _system_Hw_DeviceType__Null__ID_INT) && ((_system_Sw_ModeState__Now__Id_Int != _system_Sw_ModeState__Reset__ID_INT) && (_system_Sw_ModeState__Now__Id_Int != _system_Sw_ModeState__Edit_GroupChannelNum__ID_INT))) {
        return true
    } else {
        return false
    }
}
basic.forever(function () {
    _codeComment_AsText = "Fragment the letters to be interruptible between each 'show string' block"
    ////jwc o if (_system_Hw_DeviceType__Now__Id_Int == _system_Hw_DeviceType__Null__ID_INT) {
    ////jwc y if ((_system_Hw_DeviceType__Now__Id_Int == _system_Hw_DeviceType__Null__ID_INT) && (_system_Sw_ModeState__Now__Id_Int != _system_Sw_ModeState__Reset__ID_INT)) {

    ////jwc remove too shorten: if ((_system_Hw_DeviceType__Now__Id_Int == _system_Hw_DeviceType__Null__ID_INT) && ((_system_Sw_ModeState__Now__Id_Int != _system_Sw_ModeState__Reset__ID_INT) && (_system_Sw_ModeState__Now__Id_Int != _system_Sw_ModeState__Edit_GroupChannelNum__ID_INT))) {
    ////jwc remove too shorten:     basic.showString("P")
    ////jwc remove too shorten: }
    ////jwc remove too shorten: if ((_system_Hw_DeviceType__Now__Id_Int == _system_Hw_DeviceType__Null__ID_INT) && ((_system_Sw_ModeState__Now__Id_Int != _system_Sw_ModeState__Reset__ID_INT) && (_system_Sw_ModeState__Now__Id_Int != _system_Sw_ModeState__Edit_GroupChannelNum__ID_INT))) {
    ////jwc remove too shorten:     basic.showString("u")
    ////jwc remove too shorten: }
    ////jwc remove too shorten: if ((_system_Hw_DeviceType__Now__Id_Int == _system_Hw_DeviceType__Null__ID_INT) && ((_system_Sw_ModeState__Now__Id_Int != _system_Sw_ModeState__Reset__ID_INT) && (_system_Sw_ModeState__Now__Id_Int != _system_Sw_ModeState__Edit_GroupChannelNum__ID_INT))) {
    ////jwc remove too shorten:     basic.showString("s")
    ////jwc remove too shorten: }
    ////jwc remove too shorten: if ((_system_Hw_DeviceType__Now__Id_Int == _system_Hw_DeviceType__Null__ID_INT) && ((_system_Sw_ModeState__Now__Id_Int != _system_Sw_ModeState__Reset__ID_INT) && (_system_Sw_ModeState__Now__Id_Int != _system_Sw_ModeState__Edit_GroupChannelNum__ID_INT))) {
    ////jwc remove too shorten:     basic.showString("h")
    ////jwc remove too shorten: }
    //
    // Note that once using multiple characters in string, can cause 'residue' scrolling that conflicts with new state's LED testing,
    // * if interrupted via 'A||B' Button, before it can complete such string
    // * Could be fine if only 1-letter string for cleanest (no residue scrolling)  real-time experience
    ///jwc o if ((_system_Hw_DeviceType__Now__Id_Int == _system_Hw_DeviceType__Null__ID_INT) && ((_system_Sw_ModeState__Now__Id_Int != _system_Sw_ModeState__Reset__ID_INT) && (_system_Sw_ModeState__Now__Id_Int != _system_Sw_ModeState__Edit_GroupChannelNum__ID_INT))) {
    ///jwc o     basic.showString("AorB")
    ///jwc o }
    ////jwc y if ((_system_Hw_DeviceType__Now__Id_Int == _system_Hw_DeviceType__Null__ID_INT) && ((_system_Sw_ModeState__Now__Id_Int != _system_Sw_ModeState__Reset__ID_INT) && (_system_Sw_ModeState__Now__Id_Int != _system_Sw_ModeState__Edit_GroupChannelNum__ID_INT))) {

    ////jwc for Controller: if (_system_Hw_DeviceType__Now__Id_Int == _system_Hw_DeviceType__Null__ID_INT) {
    ////jwc for Controller:     basic.showString("But-")
    ////jwc for Controller: }
    ////jwc for Controller: ////jwc o if (!(device_Type_Controller_Bool) && !(device_Type_Bot_Bool)) {
    ////jwc for Controller: if (_system_Hw_DeviceType__Now__Id_Int == _system_Hw_DeviceType__Null__ID_INT) {
    ////jwc for Controller:     basic.showString("ton")
    ////jwc for Controller: }

    ////jwc y if (startup_ScrollingText_ShowOrNotShow_ReturnBool_Func()) {
    ////jwc y     basic.showString("C")
    ////jwc y }
    ////jwc y if (startup_ScrollingText_ShowOrNotShow_ReturnBool_Func()) {
    ////jwc y     basic.showString("h")
    ////jwc y }
    ////jwc y if (startup_ScrollingText_ShowOrNotShow_ReturnBool_Func()) {
    ////jwc y     basic.showString(":")
    ////jwc y }

    if (startup_ScrollingText_ShowOrNotShow_ReturnBool_Func()) {
        basic.showString(convertToText(network_GroupChannel_MyBotAndController_Base0_Int))
    }
    if (startup_ScrollingText_ShowOrNotShow_ReturnBool_Func()) {
        basic.showString("~")
    }

    if (startup_ScrollingText_ShowOrNotShow_ReturnBool_Func()) {
        basic.showString("A")
    }
    if (startup_ScrollingText_ShowOrNotShow_ReturnBool_Func()) {
        basic.showString("o")
    }
    if (startup_ScrollingText_ShowOrNotShow_ReturnBool_Func()) {
        basic.showString("r")
    }
    if (startup_ScrollingText_ShowOrNotShow_ReturnBool_Func()) {
        basic.showString("B")
    }
    if (startup_ScrollingText_ShowOrNotShow_ReturnBool_Func()) {
        basic.showString("o")
    }
    if (startup_ScrollingText_ShowOrNotShow_ReturnBool_Func()) {
        basic.showString("n")
    }
    if (startup_ScrollingText_ShowOrNotShow_ReturnBool_Func()) {
        basic.showString("C")
    }
    if (startup_ScrollingText_ShowOrNotShow_ReturnBool_Func()) {
        basic.showString("o")
    }
    if (startup_ScrollingText_ShowOrNotShow_ReturnBool_Func()) {
        basic.showString("n")
    }
    if (startup_ScrollingText_ShowOrNotShow_ReturnBool_Func()) {
        basic.showString("t")
    }
    if (startup_ScrollingText_ShowOrNotShow_ReturnBool_Func()) {
        basic.showString("r")
    }
    if (startup_ScrollingText_ShowOrNotShow_ReturnBool_Func()) {
        basic.showString("o")
    }
    if (startup_ScrollingText_ShowOrNotShow_ReturnBool_Func()) {
        basic.showString("l")
    }
    if (startup_ScrollingText_ShowOrNotShow_ReturnBool_Func()) {
        basic.showString("l")
    }
    if (startup_ScrollingText_ShowOrNotShow_ReturnBool_Func()) {
        basic.showString("e")
    }
    if (startup_ScrollingText_ShowOrNotShow_ReturnBool_Func()) {
        basic.showString("r")
    }
    
    if (startup_ScrollingText_ShowOrNotShow_ReturnBool_Func()) {
        basic.showString(".")
    }
})


//
// Comments
//


basic.forever(function () {
    quest_Note_3.quest_Show_String_For_Note_Big_Func(
        "Block Coding Special Notes"
    )
    if (true) {
        quest_Note_2.quest_Show_String_For_Note_Big_Func(
            "'If true then' Block also for modular organization and..."
        )
        quest_Note_2.quest_Show_String_For_Note_Big_Func(
            "... convenient 'copy/paste/delete' of a group of blocks"
        )
    }
    if (true) {
        quest_Note_2.quest_Show_String_For_Note_Big_Func(
            "In-Line Comments w/ Multiple-Colors for Varying Purposes and Priorities..."
        )
        quest_Note_2.quest_Show_String_For_Note_Big_Func(
            "... Suggested Uses:"
        )
        quest_Note_1.quest_Show_String_For_Note_Small_Func(
            "Comment: Priority Lo"
        )
        quest_Note_2.quest_Show_String_For_Note_Small_Func(
            "Comment: Priority Mi"
        )
        quest_Note_3.quest_Show_String_For_Note_Small_Func(
            "Comment: Priority Hi"
        )
        quest_Note_4.quest_Show_String_For_Note_Small_Func(
            "Question?: Priority Hi!"
        )
        quest_Note_5.quest_Show_String_For_Note_Small_Func(
            "Urgent TODO: Priority Hi!! "
        )
    }
})


// Add your code here
//
// jwc moved from main.ts to here as backend
//

// * Key Notes: Controller-Joystick (Network-Client)
// 
// * Yahboom Joystick
// 
// ** https://www.yahboom.net/study/SGH
// 
// ** https://github.com/lzty634158/GHBit
// 
// * DfRobot Driver Expansion Board
// 
// ** https://wiki.dfrobot.com/Micro_bit_Driver_Expansion_Board_SKU_DFR0548
// 
// ** https://github.com/DFRobot/pxt-motor

// * Techncial Notes
// 
// * 2019-0519-0340
// 
// ** DFRobot Driver Expansion Board
// 
// * 2019-0525-09-HAA TYJ first complete joystick XY
// 
// ** Create more responsiven** Then switch to 'JavaScript' then do
// 
// *** 'let variable = 0'
// 
// *** 'variable = non-zero'
// 
// * MicroBit A/B Buttons not work well with LED Display, so use 'show string' instead
// 
// * 2019-1019
// 
// * 2020-0120: 844 SW error : GC allocation failed for requested number bytes: GC (garbage collection) error of 57 variables max,
// 
// ** Delete 'index_y2' (tried to reuse but '844' error)
// 
// ** Tried to reuse 'item' but probably is a system var
// 
// ** Remove unused 'button_AandB_Countdown_CpuCycles', 'buttonA_Then_B_On'
// 
// ** Rename used-only-once-via-set:
// 
// *** 'dashboardDisplay_Brightness_HI' to 'servo_Pan_Degrees' :)+
// 
// *** 'groupChannel_Digit_MIN' to 'servo_Pan_Degrees'
// 
// *** 'groupChannel_Digit_MAX' to 'servo_Tilt_Degrees'
// 
//  
// * 2020-0120-02: Arm Servo
// 
// ** S-bus not work (DFRobot driver), so switch to P-bus (MakeCode driver)
// 
// ** DfRobot only has P0, P1, P2 as Read/Write from MakeCode's Menu, so reserve for Read Only.  Rest for Write Only.
// 
// *** Ultrasonic Sensor: P0 (Read, Echo), P8 (Write, Trigger)
// 
// *** ServoArmRight: P12 (Write-Only)
// 
// *** PIxyCam: P13 (Write-Only) Pan Servo, P14 (Write-Only) Tilt Servo, P1 (Read) Dig In from PixyCam-P1, P2 (Read) Ana In from PIxyCam-P8, S8-Pwr, S8-Gnd
// 
// * 2020-0224-1215
// 
// ** Network Test w/ Gaming Server
// 
// *** w/ Sonar: Simulated or Real
// 
// *** w/ BotId: Random or Real
// 
// * 2020-0305
// 
// ** 844 Error 57,49 variable max issue: Consolidate 'index_X' 'index_Y' to 'index'
// 
// *** Delete obsolete 'joystick_Value'
// 
// * 2020-0328
// 
// ** DFRobot S1 not seem to work for Arm-Right, though worked before, go back to micro:bit P16
// 
// ** abandon usage of S1-S6 for now, not reliable, since not work before, yet TYJ P1-P16 does  :)+
// 
// * 2020-04xx
// 
// Micro-Servo 9G A0090 (Sparkfun)
// 
// ~ HiTec HS-55
// 
// MicroBit: 'servo set pulse pin Px (e.g. P8) to (us) ___'  :)+
// 
// 0 no
// 
// 250 0
// 
// 500 no
// 
// >> 750: 45
// 
// 1000 90 - 10 = 80
// 
// 1250 90 + 10 = 100
// 
// >> 1500 90 + 30
// 
// 1750 180 - 30
// 
// 2000 170
// 
// 2250 190
// 
// >> 2500 225 = 180 + 30/45
// 
// 2750 no
// 
// 3000 no
// 
// * Using DFRobot Servo Pins not reliable, possibly since these are 3.3.v servos (not standard 5.0v servos), thus use MicroBit 'servo write pin Pxx' blocks for reliable 0-180 degrees.


//
// OBSOLETE
//

radio.onReceivedValue(function (name, value) {
    if (false) {
        quest_Note_5.quest_Show_String_For_Note_Big_Func(
            "OBSOLETE"
        )
        ////jwc o if (!(device_Type_Bot_Bool)) {
        if (_system_Hw_DeviceType__Now__Id_Int == _system_Hw_DeviceType__Null__ID_INT) {
            _codeComment_AsText = "Only place that activates Bot"
            _codeComment_AsText = "Bot can only be activated by wake-up message from Controller-Remote"
            ////jwc o device_Type_Bot_Bool = true
            _system_Hw_DeviceType__Now__Id_Int = _system_Hw_DeviceType__Bot__ID_INT
            setup_BotOnly_Func()
        } else if (_system_Hw_DeviceType__Now__Id_Int == _system_Hw_DeviceType__Bot__ID_INT) {
            quest_Note_3.quest_Show_String_For_Note_Big_Func(
                "Forwever: Receive Network Message from 'C'ontroller_Joyustick"
            )
            quest_Note_2.quest_Show_String_For_Note_Small_Func(
                "micro:bit's led_screen is upside_down"
            )
            network_Message_Received_Ok_Bool = false
            if (name == "joystick") {
                network_Message_Received_Ok_Bool = true
                controller__Polar_OriginAtCenter__AngleDegree__Int = value
                convert_Controller_Joystick_Directional_AngleDegrees__To__Microbit5x5Screen_Func(controller__Polar_OriginAtCenter__AngleDegree__Int)
            } else if (name == "gear") {
                motor_Power_Gear_Number_Int = value
                if (motor_Power_Gear_Number_Int == 1) {
                    network_Message_Received_Ok_Bool = true
                    led.plot(2, 1)
                } else if (motor_Power_Gear_Number_Int == 2) {
                    network_Message_Received_Ok_Bool = true
                    led.plot(2, 3)
                } else {
                    quest_Note_1.quest_Show_String_For_Note_Small_Func(
                        "Invalid Network Message: 'value'('motor_Power_Gear_Number_Int')"
                    )
                    error_Message_Func("24-0213-1730", "abc")
                }
            } else {
                quest_Note_1.quest_Show_String_For_Note_Small_Func(
                    "Invalid Network Message: 'name'"
                )
                error_Message_Func("24-0213-1731", "abc")
            }
            quest_Note_3.quest_Show_String_For_Note_Big_Func(
                "Forever: Convert Network Message to Operate 'B'ot"
            )
            if (network_Message_Received_Ok_Bool) {
                if (true) {
                    if (true) {
                        quest_Note_2.quest_Show_String_For_Note_Big_Func(
                            "Convert Network Message to Operate 'B'ot: "
                        )
                        if (controller__Polar_OriginAtCenter__AngleDegree__Int == 0 || controller__Polar_OriginAtCenter__AngleDegree__Int == 360) {
                            if (true) {
                                quest_Note_2.quest_Show_String_For_Note_Small_Func(
                                    "Controller_Joystick: East"
                                )
                                motor_Power_L_Neg100toPos100_Int = motor_Power_Full_Current_Pos
                                motor_Power_R_Neg100toPos100_Int = motor_Power_Full_Current_Neg
                            }
                        } else if (controller__Polar_OriginAtCenter__AngleDegree__Int == 45) {
                            if (true) {
                                quest_Note_2.quest_Show_String_For_Note_Small_Func(
                                    "Controller_Joystick: North_East"
                                )
                                motor_Power_L_Neg100toPos100_Int = motor_Power_Full_Current_Pos
                                motor_Power_R_Neg100toPos100_Int = motor_Power_ZERO_INT
                            }
                        } else if (controller__Polar_OriginAtCenter__AngleDegree__Int == 90) {
                            if (true) {
                                quest_Note_2.quest_Show_String_For_Note_Small_Func(
                                    "Controller_Joystick: North"
                                )
                                motor_Power_L_Neg100toPos100_Int = motor_Power_Full_Current_Pos
                                motor_Power_R_Neg100toPos100_Int = motor_Power_Full_Current_Pos
                            }
                        } else if (controller__Polar_OriginAtCenter__AngleDegree__Int == 135) {
                            if (true) {
                                quest_Note_2.quest_Show_String_For_Note_Small_Func(
                                    "Controller_Joystick: North_West"
                                )
                                motor_Power_L_Neg100toPos100_Int = motor_Power_ZERO_INT
                                motor_Power_R_Neg100toPos100_Int = motor_Power_Full_Current_Pos
                            }
                        } else if (controller__Polar_OriginAtCenter__AngleDegree__Int == 180) {
                            if (true) {
                                quest_Note_2.quest_Show_String_For_Note_Small_Func(
                                    "Controller_Joystick: West"
                                )
                                motor_Power_L_Neg100toPos100_Int = motor_Power_Full_Current_Neg
                                motor_Power_R_Neg100toPos100_Int = motor_Power_Full_Current_Pos
                            }
                        } else if (controller__Polar_OriginAtCenter__AngleDegree__Int == 225) {
                            if (true) {
                                quest_Note_2.quest_Show_String_For_Note_Small_Func(
                                    "Controller_Joystick: South_West"
                                )
                                motor_Power_L_Neg100toPos100_Int = motor_Power_ZERO_INT
                                motor_Power_R_Neg100toPos100_Int = motor_Power_Full_Current_Neg
                            }
                        } else if (controller__Polar_OriginAtCenter__AngleDegree__Int == 270) {
                            if (true) {
                                quest_Note_2.quest_Show_String_For_Note_Small_Func(
                                    "Controller_Joystick: South"
                                )
                                motor_Power_L_Neg100toPos100_Int = motor_Power_Full_Current_Neg
                                motor_Power_R_Neg100toPos100_Int = motor_Power_Full_Current_Neg
                            }
                        } else if (controller__Polar_OriginAtCenter__AngleDegree__Int == 315) {
                            if (true) {
                                quest_Note_2.quest_Show_String_For_Note_Small_Func(
                                    "Controller_Joystick: South_East"
                                )
                                motor_Power_L_Neg100toPos100_Int = motor_Power_Full_Current_Neg
                                motor_Power_R_Neg100toPos100_Int = motor_Power_ZERO_INT
                            }
                        } else if (controller__Polar_OriginAtCenter__AngleDegree__Int == -1) {
                            quest_Note_2.quest_Show_String_For_Note_Small_Func(
                                "Controller_Joystick: None = Idle"
                            )
                            motor_Power_L_Neg100toPos100_Int = motor_Power_ZERO_INT
                            motor_Power_R_Neg100toPos100_Int = motor_Power_ZERO_INT
                        } else {
                            quest_Note_4.quest_Show_String_For_Note_Small_Func(
                                "Invalid 'controller_Joystick_Angle_Degrees_AsIncremented_Int'"
                            )
                            ////jwc n may cause compiler bug, auto_creates 'let controller__Polar_OriginAtCenter__AngleDegree__Int = 0' at Blocks: on start stack: root level: error_Message_Func("2024-0212-1732", convertToText(controller__Polar_OriginAtCenter__AngleDegree__Int))
                            error_Message_Func("2024-0212-1732", "Invalid 'controller__Polar_OriginAtCenter__AngleDegree__Int'")
                        }
                        if (motor_Power_Gear_Number_Int == 1) {
                            motor_Power_Full_Current_Pos = motor_Power_Gear_01_MAX * 1
                            motor_Power_Full_Current_Neg = motor_Power_Gear_01_MAX * -1
                        } else if (motor_Power_Gear_Number_Int == 2) {
                            motor_Power_Full_Current_Pos = motor_Power_Gear_02_MAX * 1
                            motor_Power_Full_Current_Neg = motor_Power_Gear_02_MAX * -1
                        }
                    }
                    quest_Motors.quest_Set_PowerMotorsViaBlueRedBlackPins_Func(
                        quest_PortGroup_BlueRedBlack_PortIds_Enum.S1_MotorWheel_Left__S0_MotorWheel_Right,
                        motor_Power_L_Neg100toPos100_Int,
                        motor_Power_R_Neg100toPos100_Int
                    )
                    if (true) {
                        ConvertNetworkMessage_ToOperateBot_PrintDebug_Func(name, value, motor_Power_L_Neg100toPos100_Int, motor_Power_R_Neg100toPos100_Int)
                        quest_Note_1.quest_Show_String_For_Note_Small_Func(
                            "End of line"
                        )
                        serial.writeLine("")
                    }
                }
            }
            network__CpuCycle_Post__Management_Func()
        }
    }
})

function convert_Controller_Joystick__Cartesian_To_Polar__Directional_AngleDegree_Int_Func_OLD(cartesian_side_adjacent_x_int_in: number, cartesian_side_opposite_y_int_in: number) {
    if (false) {
            serial.writeString("> 3 Convert::" + " Side_Adjacent: " + quest_General.quest_Get_Number_WithColumnPadding_AsStringOut_Func(
            cartesian_side_adjacent_x_int_in,
            5,
            0
        ) + " Side_Opposite: " + quest_General.quest_Get_Number_WithColumnPadding_AsStringOut_Func(
            cartesian_side_opposite_y_int_in,
            5,
            0
        ))
    }
    
    quest_Note_1.quest_Show_String_For_Note_Small_Func(
        "Convert to radians"
    )
    _local_converted_value_int_out = Math.atan2(cartesian_side_opposite_y_int_in, cartesian_side_adjacent_x_int_in)
    if (false) {
        serial.writeString(" Angle:: Radians: " + quest_General.quest_Get_Number_WithColumnPadding_AsStringOut_Func(
            _local_converted_value_int_out,
            10,
            4
        ))
    }
    quest_Note_1.quest_Show_String_For_Note_Small_Func(
        "Convert to degrees and round to nearest tenth decimal"
    )
    _local_converted_value_int_out = _local_converted_value_int_out * (180 / 3.1416)
    if (_local_converted_value_int_out < 0) {
        quest_Note_1.quest_Show_String_For_Note_Small_Func(
            "If < 0, then keep > 0"
        )
        _local_converted_value_int_out = _local_converted_value_int_out + 360
    }
    if (false) {
        serial.writeString(" Degrees: " + quest_General.quest_Get_Number_WithColumnPadding_AsStringOut_Func(
            _local_converted_value_int_out,
            5,
            1
        ))
    }
    if (false) {
        serial.writeNumbers([Math.atan2(1, 1), Math.atan2(1.732, 1), Math.atan2(1, 1.732)])
    }
    return _local_converted_value_int_out
}


////jwc o input.onButtonPressed(Button.A, function () {
////jwc o     ////jwc o if (device_Type_Controller_Bool || device_Type_Bot_Bool) {
////jwc o     ////jwc o     quest_Note_2.quest_Show_String_For_Note_Small_Func(
////jwc o     ////jwc o         "Priority 2: Buttons A & B for 'device_Mode_Edit_Bool = True'"
////jwc o     ////jwc o     )
////jwc o     ////jwc o     if (device_Mode_Edit__GroupChannelNum__Bool) {
////jwc o     ////jwc o         if (device_Type_Controller_Bool) {
////jwc o     ////jwc o             network_GroupChannel_MyBotAndController_Base0__Digit_Tens__Int += 1
////jwc o     ////jwc o             if (network_GroupChannel_MyBotAndController_Base0__Digit_Tens__Int > 9) {
////jwc o     ////jwc o                 network_GroupChannel_MyBotAndController_Base0__Digit_Tens__Int = 1
////jwc o     ////jwc o             }
////jwc o     ////jwc o         } else if (device_Type_Bot_Bool) {
////jwc o     ////jwc o             network_GroupChannel_MyBotAndController_Base0__Digit_Ones__Int += 1
////jwc o     ////jwc o             if (network_GroupChannel_MyBotAndController_Base0__Digit_Ones__Int > 9) {
////jwc o     ////jwc o                 network_GroupChannel_MyBotAndController_Base0__Digit_Ones__Int = 1
////jwc o     ////jwc o             }
////jwc o     ////jwc o         }
////jwc o     ////jwc o     }
////jwc o     ////jwc o }
////jwc o     if (device_Mode_Edit__GroupChannelNum__Bool) {
////jwc o         if (device_Type_Controller_Bool) {
////jwc o             network_GroupChannel_MyBotAndController_Base0__Digit_Tens__Int += 1
////jwc o             if (network_GroupChannel_MyBotAndController_Base0__Digit_Tens__Int > 9) {
////jwc o                 network_GroupChannel_MyBotAndController_Base0__Digit_Tens__Int = 1
////jwc o             }
////jwc o         } else if (device_Type_Bot_Bool) {
////jwc o             network_GroupChannel_MyBotAndController_Base0__Digit_Ones__Int += 1
////jwc o             if (network_GroupChannel_MyBotAndController_Base0__Digit_Ones__Int > 9) {
////jwc o                 network_GroupChannel_MyBotAndController_Base0__Digit_Ones__Int = 1
////jwc o             }
////jwc o         }
////jwc o     }
////jwc o 
////jwc o })
////jwc o input.onButtonPressed(Button.B, function () {
////jwc o     if (device_Type_Controller_Bool || device_Type_Bot_Bool) {
////jwc o         quest_Note_2.quest_Show_String_For_Note_Small_Func(
////jwc o             "Priority 2: Buttons A & B for 'device_Mode_Edit_Bool = True'"
////jwc o         )
////jwc o         if (device_Mode_Edit__GroupChannelNum__Bool) {
////jwc o             if (device_Type_Controller_Bool) {
////jwc o                 network_GroupChannel_MyBotAndController_Base0__Digit_Tens__Int += 1
////jwc o                 if (network_GroupChannel_MyBotAndController_Base0__Digit_Tens__Int > 9) {
////jwc o                     network_GroupChannel_MyBotAndController_Base0__Digit_Tens__Int = 1
////jwc o                 }
////jwc o             } else if (device_Type_Bot_Bool) {
////jwc o                 network_GroupChannel_MyBotAndController_Base0__Digit_Ones__Int += 1
////jwc o                 if (network_GroupChannel_MyBotAndController_Base0__Digit_Ones__Int > 9) {
////jwc o                     network_GroupChannel_MyBotAndController_Base0__Digit_Ones__Int = 1
////jwc o                 }
////jwc o             }
////jwc o         }
////jwc o     }
////jwc o     if (!(device_Type_Controller_Bool) && !(device_Type_Bot_Bool)) {
////jwc o         quest_Note_3.quest_Show_String_For_Note_Big_Func(
////jwc o             "1of2 place that activates Controller_Joystick: 1st micro:bit's A_Button Pressed is Designated as Controller_Joystick"
////jwc o         )
////jwc o         quest_Note_2.quest_Show_String_For_Note_Small_Func(
////jwc o             "Priority 1: Buttons A & B for Activate Network Pairing if not activated yet"
////jwc o         )
////jwc o         device_Type_Controller_Bool = true
////jwc o         setup_ControllerOnly_Func()
////jwc o     } else {
////jwc o         quest_Note_2.quest_Show_String_For_Note_Small_Func(
////jwc o             "Priority 2: Buttons A & B for 'device_Mode_Edit_Bool = True'"
////jwc o         )
////jwc o         if (device_Mode_Edit__GroupChannelNum__Bool) {
////jwc o             if (device_Type_Controller_Bool) {
////jwc o                 network_GroupChannel_MyBotAndController_Base0__Digit_Ones__Int += 1
////jwc o                 if (network_GroupChannel_MyBotAndController_Base0__Digit_Ones__Int > 9) {
////jwc o                     network_GroupChannel_MyBotAndController_Base0__Digit_Ones__Int = 1
////jwc o                 }
////jwc o             } else if (device_Type_Bot_Bool) {
////jwc o                 network_GroupChannel_MyBotAndController_Base0__Digit_Tens__Int += 1
////jwc o                 if (network_GroupChannel_MyBotAndController_Base0__Digit_Tens__Int > 9) {
////jwc o                     network_GroupChannel_MyBotAndController_Base0__Digit_Tens__Int = 1
////jwc o                 }
////jwc o             }
////jwc o         }
////jwc o     }
////jwc o})


////jwc o basic.forever(function () {
////jwc o     _codeComment_AsText = "DashboardDisplay_GroupChannel_Edit_Mode"
////jwc o     if (device_Mode_Edit__GroupChannelNum__Bool || device_Mode_Show_Alt_GroupChannelNum_Bool) {
////jwc o         ////jwc o laggy: basic.clearScreen()
////jwc o         screen_Clear_Func()
////jwc o         _codeComment_AsText = "'groupChannel_Mine_Base1_Int' convert from Human-Base1 to XY-Base0"
////jwc o         ////jwc o if (device_Type_Controller_Bool) {
////jwc o         ////jwc o     for (let index = 0; index <= network_GroupChannel_MyBotAndController_Base0__Digit_Tens__Int - 1; index++) {
////jwc o         ////jwc o         _codeComment_AsText = "Resides on Columns (Base0): 0 & 1"
////jwc o         ////jwc o         led.plot(Math.idiv(index, 5) + 0, index % 5)
////jwc o         ////jwc o     }
////jwc o         ////jwc o     for (let index2 = 0; index2 <= network_GroupChannel_MyBotAndController_Base0__Digit_Ones__Int - 1; index2++) {
////jwc o         ////jwc o         _codeComment_AsText = "Resides on Columns (Base0): 3 & 4"
////jwc o         ////jwc o         led.plot(Math.idiv(index2, 5) + 3, index2 % 5)
////jwc o         ////jwc o     }
////jwc o         ////jwc o } else if (device_Type_Bot_Bool) {
////jwc o         ////jwc o     for (let index = 0; index <= network_GroupChannel_MyBotAndController_Base0__Digit_Tens__Int - 1; index++) {
////jwc o         ////jwc o         _codeComment_AsText = "Resides on Columns (Base0): 0 & 1"
////jwc o         ////jwc o         led.plot(Math.idiv(index, 5) + 0 + 3, 4 - index % 5)
////jwc o         ////jwc o     }
////jwc o         ////jwc o     for (let index2 = 0; index2 <= network_GroupChannel_MyBotAndController_Base0__Digit_Ones__Int - 1; index2++) {
////jwc o         ////jwc o         _codeComment_AsText = "Resides on Columns (Base0): 3 & 4"
////jwc o         ////jwc o         led.plot(Math.idiv(index2, 5) + 3 - 3, 4 - index2 % 5)
////jwc o         ////jwc o     }
////jwc o         ////jwc o }
////jwc o         for (let index = 0; index <= network_GroupChannel_MyBotAndController_Base0__Digit_Tens__Int - 1; index++) {
////jwc o             _codeComment_AsText = "Resides on Columns (Base0): 0 & 1"
////jwc o             ////jwc o led.plot(Math.idiv(index, 5) + 0, index % 5)
////jwc o             led.plotBrightness(Math.idiv(index, 5) + 0, index % 5, screenBrightness_MI_INT)
////jwc o         }
////jwc o         for (let index2 = 0; index2 <= network_GroupChannel_MyBotAndController_Base0__Digit_Ones__Int - 1; index2++) {
////jwc o             _codeComment_AsText = "Resides on Columns (Base0): 3 & 4"
////jwc o             ////jwc o led.plot(Math.idiv(index2, 5) + 3, index2 % 5)
////jwc o             led.plotBrightness(Math.idiv(index2, 5) + 3, index2 % 5, screenBrightness_MI_INT)
////jwc o         }
////jwc o     }
////jwc o })


////jwc o obsolete, as would cause flickering: basic.forever(function () {
////jwc o obsolete, as would cause flickering:     ////jwc o if (device_Type_Controller_Bool || device_Type_Bot_Bool) {   
////jwc o obsolete, as would cause flickering:     if (_system_Hw_DeviceType__Now__Id_Int == _system_Hw_DeviceType__Bot__ID_INT || _system_Hw_DeviceType__Now__Id_Int == _system_Hw_DeviceType__Controller_Joystick__ID_INT) {
////jwc o obsolete, as would cause flickering:     ////jwc o if (!(device_Mode_Edit__GroupChannelNum__Bool) && !(device_Mode_Show_Alt_GroupChannelNum_Bool)) {
////jwc o obsolete, as would cause flickering:         if (_system_Sw_ModeState__Now__Id_Int == _system_Sw_ModeState__Run__AndShow_01_DeviceType__ID_INT) {
////jwc o obsolete, as would cause flickering:             if (_system_Hw_DeviceType__Now__Id_Int == _system_Hw_DeviceType__Controller_Joystick__ID_INT) {
////jwc o obsolete, as would cause flickering:                 screen_IconMessage_Func("controller")
////jwc o obsolete, as would cause flickering:             } else if (_system_Hw_DeviceType__Now__Id_Int == _system_Hw_DeviceType__Bot__ID_INT) {
////jwc o obsolete, as would cause flickering:                 screen_IconMessage_Func("bot")
////jwc o obsolete, as would cause flickering:             } else {
////jwc o obsolete, as would cause flickering:                 screen_IconMessage_Func("error")
////jwc o obsolete, as would cause flickering:             }
////jwc o obsolete, as would cause flickering:         }
////jwc o obsolete, as would cause flickering:     }
////jwc o obsolete, as would cause flickering: })


////jwc o basic.forever(function () {
////jwc o     if (device_Type_Controller_Bool || device_Type_Bot_Bool) {
////jwc o         quest_Timer.quest_Set_ContinueCurrentState_CountdownTimer_Func(5, quest_Time_Units_Enum.Seconds)
////jwc o         if (_system_Sw_ModeState__Now__Id_Int == _system_Sw_ModeState__Run__AndShow_01_DeviceType__ID_INT) {
////jwc o             ////jwc n: seems timing issue, place earlier before state checking: quest_Timer.quest_Set_ContinueCurrentState_CountdownTimer_Func(5, quest_Time_Units_Enum.Seconds)
////jwc o             _system_Sw_ModeState__Now__Id_Int = _system_Sw_ModeState__Run__AndShow_02_GroupChannelNum__ID_INT
////jwc o             quest_Note_2.quest_Show_String_For_Note_Small_Func(
////jwc o                 "Will now enter and process accordingly for '_system_Sw_ModeState__Run__AndShow_02_GroupChannelNum__ID_INT':"
////jwc o             )
////jwc o             network_GroupChannel_MyBotAndController_Base0__Digit_Tens__Int = Math.idiv(network_GroupChannel_MyBotAndController_Base0_Int, 10)
////jwc o             network_GroupChannel_MyBotAndController_Base0__Digit_Ones__Int = network_GroupChannel_MyBotAndController_Base0_Int % 10
////jwc o         } else if (_system_Sw_ModeState__Now__Id_Int == _system_Sw_ModeState__Run__AndShow_02_GroupChannelNum__ID_INT) {
////jwc o             _system_Sw_ModeState__Now__Id_Int = _system_Sw_ModeState__Run__AndShow_01_DeviceType__ID_INT
////jwc o             quest_Note_2.quest_Show_String_For_Note_Small_Func(
////jwc o                 "Will now exit and process accordingly for '_system_Sw_ModeState__Run__AndShow_02_GroupChannelNum__ID_INT':"
////jwc o             )
////jwc o         }
////jwc o     }
////jwc o })

////jwc o if (true) {
////jwc o     screenBrightness_HI_DEFAULT_INT = 255
////jwc o     // lowest 1 is still visible :)+
////jwc o     screenBrightness_MI_INT = 7
////jwc o     // 127 not low enough, 15 is better, 1 too low, 7 seems good, try 8
////jwc o     screenBrightness_LO_INT = 1
////jwc o     screenBrightness_Heartbeat_Count_Int = 0
////jwc o     // * [30..-5]by0.5 >> 1 sec one-way-trip, [50..-10]by1, [50-..-25]by1, [100..-50]by2, [200..-100]by4, off too long: [250..-50]by4
////jwc o     if (true) {
////jwc o         // 255 max too high, stays bright too long; 50 not bad, try 30 for more 1sec heartbeat
////jwc o         screenBrightness_Heartbeat_Count_MAX_INT = 250
////jwc o         // 0 not low enough, try -15 for more of 50% duty on/off cycle, try -10 for less off, try -5
////jwc o         screenBrightness_HeartBeat_Count_MIN_INT = -50
////jwc o         // * 1 >> 0.5
////jwc o         screenBrightness_Heartbeat_Count_DELTA_INT = 4
////jwc o     }
////jwc o }

