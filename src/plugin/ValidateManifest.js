import * as vm from '../../dist/validators.js';

/**
 * Provides a TyphonJS plugin to wire up the validator functions on a plugin eventbus.
 *
 * The following event bindings take a JSON object and options to AJV validator function.
 *
 * `typhonjs:fvtt:validate:manifest:module` - Invokes validateModule
 * `typhonjs:fvtt:validate:manifest:plus:module` - Invokes validateModulePlus
 * `typhonjs:fvtt:validate:manifest:system` - Invokes validateSystem
 * `typhonjs:fvtt:validate:manifest:plus:system` - Invokes validateSystemPlus
 */
export default class ValidateManifest
{
   static validateModule(data, options)
   {
      const valid = vm.validateModule(data, options);
      return { valid, errors: vm.validateModule.errors, type: 'module' };
   }

   static validateModulePlus(data, options)
   {
      const valid = vm.validateModulePlus(data, options);
      return { valid, errors: vm.validateModulePlus.errors, type: 'modulePlus' };
   }

   static validateSystem(data, options)
   {
      const valid = vm.validateSystem(data, options);
      return { valid, errors: vm.validateSystem.errors, type: 'system' };
   }

   static validateSystemPlus(data, options)
   {
      const valid = vm.validateSystemPlus(data, options);
      return { valid, errors: vm.validateSystemPlus.errors, type: 'systemPlus' };
   }

   /**
    * Wires up ValidateManifest on the plugin eventbus.
    *
    * @param {object} ev - PluginEvent - The plugin event.
    *
    * @see https://www.npmjs.com/package/typhonjs-plugin-manager
    *
    * @ignore
    */
   static onPluginLoad(ev)
   {
      const eventbus = ev.eventbus;

      const options = ev.pluginOptions;

      let guard = true;

      // Apply any plugin options.
      if (typeof options === 'object')
      {
         /* c8 ignore next 1 */
         if (typeof options.guard === 'boolean') { guard = options.guard; }
      }

      eventbus.on(`typhonjs:fvtt:validate:manifest:module`, ValidateManifest.validateModule, void 0, { guard });

      eventbus.on(`typhonjs:fvtt:validate:manifest:plus:module`, ValidateManifest.validateModulePlus, void 0,
       { guard });

      eventbus.on(`typhonjs:fvtt:validate:manifest:system`, ValidateManifest.validateSystem, void 0, { guard });

      eventbus.on(`typhonjs:fvtt:validate:manifest:plus:system`, ValidateManifest.validateSystemPlus, void 0,
       { guard });
   }
}

