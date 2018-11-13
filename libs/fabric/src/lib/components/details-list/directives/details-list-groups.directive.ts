// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT License.

import { ContentChildren, Directive, QueryList } from '@angular/core';
import { IGroup } from 'office-ui-fabric-react';

import { ChangeableItemsDirective } from '../../core/shared/changeable-items.directive';
import { GroupItemDirective } from '../../group';

/**
 * Wrapper directive for creating multiple DetailsList Groups
 */
@Directive({ selector: 'fab-details-list > groups' })
export class DetailsListGroupsDirective
  extends ChangeableItemsDirective<IGroup> {

  @ContentChildren(GroupItemDirective)
  readonly directiveItems: QueryList<GroupItemDirective>;

  get items() {
    return this && this.directiveItems.toArray();
  }
}
