/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License;
 * you may not use this file except in compliance with the Elastic License.
 */

import { CoreSetup } from 'src/core/public';
import { OpenFlyoutAddDrilldown } from '../actions/open_flyout_add_drilldown';
import { DrilldownsSetupDependencies } from '../plugin';

export class DrilldownService {
  bootstrap(core: CoreSetup, { uiActions }: DrilldownsSetupDependencies) {
    const actionOpenFlyoutAddDrilldown = new OpenFlyoutAddDrilldown({
      overlays: async () => (await core.getStartServices())[0].overlays,
    });

    uiActions.registerAction(actionOpenFlyoutAddDrilldown);
    uiActions.attachAction('CONTEXT_MENU_TRIGGER', actionOpenFlyoutAddDrilldown.id);
  }

  /**
   * Convenience method to register a drilldown. (It should set-up all the
   * necessary triggers and actions.)
   */
  registerDrilldown = (): void => {
    throw new Error('not implemented');
  };
}
