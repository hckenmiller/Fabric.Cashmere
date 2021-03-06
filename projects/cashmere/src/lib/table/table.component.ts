/* tslint:disable:component-class-suffix use-host-property-decorator */

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import {CDK_TABLE_TEMPLATE, CdkTable} from '@angular/cdk/table';
import {
    Attribute,
    ChangeDetectionStrategy,
    ChangeDetectorRef,
    Component,
    ElementRef,
    IterableDiffers,
    Optional,
    ViewEncapsulation
} from '@angular/core';
import {Directionality} from '@angular/cdk/bidi';

@Component({
    selector: 'hc-table, table[hc-table]',
    exportAs: 'matTable',
    template: CDK_TABLE_TEMPLATE,
    styleUrls: ['table.component.scss'],
    host: {
        class: 'hc-table'
    },
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class HcTable<T> extends CdkTable<T> {
    /** Overrides the sticky CSS class set by the `CdkTable`. */
    protected stickyCssClass = 'hc-table-sticky';

    constructor(
        protected _differs: IterableDiffers,
        protected _changeDetectorRef: ChangeDetectorRef,
        protected _elementRef: ElementRef,
        @Attribute('role') role: string,
        @Optional() protected readonly _dir: Directionality
    ) {
        super(_differs, _changeDetectorRef, _elementRef, role, _dir);
    }
}
