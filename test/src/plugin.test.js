import { assert }       from 'chai';

import PluginManager    from '@typhonjs-plugin/manager';

import ValidateManifest from '../../src/plugin/ValidateManifest.js';

const pluginManager = new PluginManager();
const eventbus = pluginManager.getEventbus();

pluginManager.add({ name: '@typhonjs-fvtt/validate-manifest', instance: ValidateManifest });

/**
 * Verifies that the basic event bindings are hooked up to the ValidateManifest plugin.
 */
describe('Plugin Test - Basic Event Bindings', () =>
{
   it('event - validateModule', () =>
   {
      const result = eventbus.triggerSync('typhonjs:fvtt:validate:manifest:module', {});

      assert.isFalse(result.valid);
      assert.strictEqual(result.type, 'module');
   });

   it('event - validateModuleStrict', () =>
   {
      const result = eventbus.triggerSync('typhonjs:fvtt:validate:manifest:module:strict', {});

      assert.isFalse(result.valid);
      assert.strictEqual(result.type, 'moduleStrict');
   });

   it('event - validateModulePlus', () =>
   {
      const result = eventbus.triggerSync('typhonjs:fvtt:validate:manifest:plus:module', {});

      assert.isFalse(result.valid);
      assert.strictEqual(result.type, 'modulePlus');
   });

   it('event - validateModulePlusStrict', () =>
   {
      const result = eventbus.triggerSync('typhonjs:fvtt:validate:manifest:plus:module:strict', {});

      assert.isFalse(result.valid);
      assert.strictEqual(result.type, 'modulePlusStrict');
   });

   it('event - validateSystem', () =>
   {
      const result = eventbus.triggerSync('typhonjs:fvtt:validate:manifest:system', {});

      assert.isFalse(result.valid);
      assert.strictEqual(result.type, 'system');
   });

   it('event - validateSystemStrict', () =>
   {
      const result = eventbus.triggerSync('typhonjs:fvtt:validate:manifest:system:strict', {});

      assert.isFalse(result.valid);
      assert.strictEqual(result.type, 'systemStrict');
   });

   it('event - validateSystemPlus', () =>
   {
      const result = eventbus.triggerSync('typhonjs:fvtt:validate:manifest:plus:system', {});

      assert.isFalse(result.valid);
      assert.strictEqual(result.type, 'systemPlus');
   });

   it('event - validateSystemPlusStrict', () =>
   {
      const result = eventbus.triggerSync('typhonjs:fvtt:validate:manifest:plus:system:strict', {});

      assert.isFalse(result.valid);
      assert.strictEqual(result.type, 'systemPlusStrict');
   });
});
