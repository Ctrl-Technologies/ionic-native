import {Plugin, Cordova} from './plugin';

/**
 * @name Flashlight
 * @description This plugin allows you to switch the flashlight / torch of the device on and off.
 *
 * Requires Cordova plugin: `cordova-plugin-flashlight`. For more info, please see the [Flashlight plugin docs](https://github.com/EddyVerbruggen/Flashlight-PhoneGap-Plugin).
 *
 * ```shell
 * cordova plugin add cordova-plugin-flashlight
 * ```
 *
 * @usage
 * ```js
 * ```
 */
@Plugin({
  plugin: 'cordova-plugin-flashlight',
  pluginRef: 'window.plugins.flashlight',
  repo: 'https://github.com/EddyVerbruggen/Flashlight-PhoneGap-Plugin.git'
})
export class Flashlight {


  /**
   * Checks if the flash light is available
   * @returns {Promise<boolean>} Returns a promise that resolves with a boolean stating if the flash light is available.
   */
  @Cordova()
  static available(): Promise<boolean> { return }

  /**
   * Switches the flashlight on
   * @returns {Promise<boolean>}
   */
  @Cordova()
  static switchOn(): Promise<boolean> { return }

  /**
   * Switches the flash light off
   * @returns {Promise<boolean>}
   */
  @Cordova()
  static switchOff(): Promise<boolean> { return }

  /**
   * Toggles the flashlight
   * @returns {Promise<any>}
   */
  @Cordova()
  static toggle(): Promise<any> { return }


  /**
   * Checks if the flash light is turned on.
   * Returns a boolean
   */
  @Cordova({
    sync: true
  })
  static isSwitchedOn(): boolean { return }

}