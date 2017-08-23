import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {AgGridReact} from 'ag-grid-react';

/**
 * ExampleComponent is an example component.
 * It takes a property, `label`, and
 * displays it.
 * It renders an input with the property `value`
 * which is editable by the user.
 */
export default class GridComponent extends Component {
    onGridReady(autoSize, params) {
        this.gridApi = params.api;
        this.columnApi = params.columnApi;

        if (autoSize) {
            this.columnApi.autoSizeColumns(this.columnApi.getAllColumns());
        }
        // this.gridApi.sizeColumnsToFit();
    }

    render() {
        const {id, 
            gridWidth,
            gridHeight,
            columnDefs,
            defaultColDef,
            defaultColGroupDef,
            enableColResize,
            suppressAutoSize,
            autoSizePadding,
            enableSorting,
            enableFilter,
            pivotMode,
            pivotPanelShow,
            showToolPanel,
            rowModelType,
            rowData,
            animateRows,
            debug,
            domLayout,
            autoSizeColumns,
            enableStatusBar} = this.props;

        let containerStyle = {
            width: gridWidth,
            height: gridHeight
        };

        return (
            <div id={id}>
                <div style={containerStyle} className="ag-fresh">
                    <AgGridReact
                        // properties
                        columnDefs={columnDefs}
                        rowData={rowData}
                        defaultColDef={defaultColDef}
                        defaultColGroupDef={defaultColGroupDef}
                        enableColResize={enableColResize}
                        suppressAutoSize={suppressAutoSize}
                        autoSizePadding={autoSizePadding}
                        enableSorting={enableSorting}
                        enableFilter={enableFilter}
                        pivotMode={pivotMode}
                        pivotPanelShow={pivotPanelShow}
                        showToolPanel={showToolPanel}
                        rowModelType={rowModelType}
                        animateRow={animateRows}
                        debug={debug}
                        domLayout={domLayout}
                        enableStatusBar={enableStatusBar}

                        // events
                        onGridReady={(evt) => this.onGridReady(autoSizeColumns, evt)}>
                    </AgGridReact>
                </div>
            </div>
        );
    }
}

GridComponent.propTypes = {
    /**
     * The ID used to identify this compnent in Dash callbacks
     */
    id: PropTypes.string,

    /**
     * autosize columns
     */
    autoSizeColumns: PropTypes.bool,
    
    /**
     * The Width of the grid container
     */
    gridWidth: PropTypes.number,

    /**
     * The Height of the grid container
     */
    gridHeight: PropTypes.number,

    /**
     * Array of Column Definitions
     */
    columnDefs: PropTypes.object,

    /**
     * A default column definition
     */
    defaultColDef: PropTypes.object,

    /**
     */
    defaultColGroupDef: PropTypes.object,

    /**
     */
    enableColResize: PropTypes.bool,

    /**
     */
    suppressAutoSize: PropTypes.bool,

    /**
     */
    autoSizePadding: PropTypes.number,

    /**
     */
    enableSorting: PropTypes.bool,

    /**
     */
    enableFilter: PropTypes.bool,

    /**
     */
    pivotMode: PropTypes.bool,

    /**
     */
    pivotPanelShow: PropTypes.string,

    /**
     */
    showToolPanel: PropTypes.bool,

    /**
     */
    rowModelType: PropTypes.string,

    /**
     */
    rowData: PropTypes.object,

    /**
     */
    animateRows: PropTypes.bool,

    /**
     */
    domLayout: PropTypes.string,

    /**
     */
    debug: PropTypes.bool,

    /**
     */
    enableStatusBar: PropTypes.bool

    /**
     * Dash-assigned callback that should be called whenever any of the
     * properties change
     */
    // setProps: PropTypes.func
};
