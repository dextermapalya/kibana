/*
 * Licensed to Elasticsearch B.V. under one or more contributor
 * license agreements. See the NOTICE file distributed with
 * this work for additional information regarding copyright
 * ownership. Elasticsearch B.V. licenses this file to you under
 * the Apache License, Version 2.0 (the "License"); you may
 * not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *    http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */

import { VisType } from './types';
import { IAggConfigs } from '../../legacy_imports';
import { Status } from './legacy/update_status';

export interface Vis {
  type: VisType;
  getCurrentState: (
    includeDisabled?: boolean
  ) => {
    title: string;
    type: string;
    params: VisParams;
    aggs: Array<{ [key: string]: any }>;
  };

  // Since we haven't typed everything here yet, we basically "any" the rest
  // of that interface. This should be removed as soon as this type definition
  // has been completed. But that way we at least have typing for a couple of
  // properties on that type.
  [key: string]: any;
}

export interface VisParams {
  [key: string]: any;
}

export interface VisState {
  title: string;
  type: VisType;
  params: VisParams;
  aggs: IAggConfigs;
}

export interface VisualizationController {
  render(visData: any, visParams: any, update: { [key in Status]: boolean }): Promise<void>;
  destroy(): void;
  isLoaded?(): Promise<void> | void;
}
