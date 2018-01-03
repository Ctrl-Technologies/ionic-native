/**
 * This is a template for new plugin wrappers
 *
 * TODO:
 * - Add/Change information below
 * - Document usage (importing, executing main functionality)
 * - Remove any imports that you are not using
 * - Add this file to /src/index.ts (follow style of other plugins)
 * - Remove all the comments included in this template, EXCEPT the @Plugin wrapper docs and any other docs you added
 * - Remove this note
 *
 */
import { Injectable } from '@angular/core';
import { Plugin, Cordova, CordovaProperty, CordovaInstance, InstanceProperty, IonicNativePlugin } from '@ionic-native/core';
import { Observable } from 'rxjs/Observable';

/**
 * @author Christo Goosen christo.goosen@takectrl.co.za
 * @name Fabric
 * @description
 * This plugin works with cordova-fabric-plugin for crash analytics
 *
 * @usage
 * ```typescript
 * import { Fabric } from '@ionic-native/fabric';
 *
 *
 * constructor(private fabric: Fabric) { }
 *
 * ...
 *
 *
 * this.fabric.functionName('Hello', 123)
 *   .then((res: any) => console.log(res))
 *   .catch((error: any) => console.error(error));
 *
 * ```
 */
@Plugin({
  pluginName: 'Fabric',
  plugin: 'cordova-fabric-plugin', // npm package name, example: cordova-plugin-camera
  pluginRef: 'fabric.Crashlytics', // the variable reference to call the plugin, example: navigator.geolocation
  repo: 'https://github.com/sarriaroman/FabricPlugin', // the github repository URL for the plugin
  install: 'ionic cordova plugin add cordova-fabric-plugin --variable FABRIC_API_KEY=XXX --variable FABRIC_API_SECRET=xxx', // OPTIONAL install command, in case the plugin requires variables
  installVariables: ['FABRIC_API_KEY', 'FABRIC_API_SECRET'], // OPTIONAL the plugin requires variables
  platforms: ['Android', 'iOS'] // Array of platforms supported, example: ['Android', 'iOS']
})
@Injectable()
export class Fabric extends IonicNativePlugin {

  // /**
  //  * This function does something
  //  * @param arg1 {string} Some param to configure something
  //  * @param arg2 {number} Another param to configure something
  //  * @return {Promise<any>} Returns a promise that resolves when something happens
  //  */
  // @Cordova()
  // functionName(arg1: string, arg2: number): Promise<any> {
  //   return; // We add return; here to avoid any IDE / Compiler errors
  // }


  /**
   * This function initializes the monitoring of your application
   * @return {Promise<any>} Returns a promise that resolves when the plugin successfully initializes
   */

  @Cordova()
  init(): Promise<any> { return; }

  /**
   * This function simulates a crash to test crashlytics
   * @return {Promise<any>} Returns a promise that resolves when something happens
   */

  @Cordova()
  sendCrash(): Promise<any> {
    return; // We add return; here to avoid any IDE / Compiler errors
  }

    /**
   * This function add a string log message sent to crashlytics
   * @return {Promise<any>} Returns a promise that resolves when the plugin successfully initializes
   */

  @Cordova()
  addLog(message: string): Promise<any> {
    return; // We add return; here to avoid any IDE / Compiler errors
  }

}
