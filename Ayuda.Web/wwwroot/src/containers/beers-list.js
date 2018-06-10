import React, { Component } from 'react';
import { Card } from 'reactstrap';
import {
    DataTypeProvider, SortingState, IntegratedSorting
} from '@devexpress/dx-react-grid';
import { PagingState, CustomPaging } from '@devexpress/dx-react-grid';
import { Grid, Table, Toolbar, TableHeaderRow, PagingPanel } from '@devexpress/dx-react-grid-bootstrap4';
import { Container } from 'reactstrap';
import BeerIcon from '../images/icon.jpg'



const LookupFormatter = ({ value }) => {
    if (!value) return null;
    return <b>{value.name}</b>;
}

const LookupTypeProvider = props => (
    <DataTypeProvider
        formatterComponent={LookupFormatter}
        {...props}
    />
);

const ImageFormatter = ({ value }) => {
    if (!value) return <b><img src={BeerIcon} alt="" /></b>;

    return <b><img src={value.icon} alt="" /></b>;
}

const ImageTypeProvider = props => (
    <DataTypeProvider
        formatterComponent={ImageFormatter}
        {...props}
    />
);
const styles = {
    banking: {
        backgroundColor: '#f5f5f5'
    }
};

class BeersList extends Component {
    constructor(props) {
        super(props);

        this.gridOptions = {
            page: 0,
            sorting: [
                {
                    columnName: 'id',
                    direction: 'asc'
                }
            ],
            sort: 'asc',
            order: 'name'
        }
        this.state = {
            currentSelectedRow: {},
            columnDefs: [
                {
                    title: "Label",
                    name: "labels",
                },
                {
                    title: "Id",
                    name: "id", width: 180
                },
                {
                    title: "Name",
                    name: "name", width: 180
                },
                {
                    title: "Status",
                    name: "statusDisplay", width: 180
                },
                {
                    title: "Style",
                    name: "style", width: 180
                },
                {
                    title: "Available",
                    name: "available", width: 180
                },

                {
                    title: "Year",
                    name: "year",
                    width: 180
                },
            ],
            defaultColumnWidths: [
                { columnName: 'labels', width: 180 },
                { columnName: 'id', width: 180 },
                { columnName: 'name', width: 240 },
                { columnName: 'statusDisplay', width: 180 },
                { columnName: 'style', width: 180 },
                { columnName: 'available', width: 180 },
                { columnName: 'year', width: 180 },
            ],
            tableColumnExtensions: [
                { columnName: 'name', wordWrapEnabled: true },
            ],
            beers: {
                data: []
            },
            expandedRowIds: [],
            lookupColumns: ['available', 'style'],
            imageColumns: ['labels']
        }
        this.changeSorting = sorting => {
            if (sorting[0].columnName === 'id' || sorting[0].columnName === 'year') return;
            var addtoFilterColumn = '';
            if (sorting[0].columnName !== 'name') addtoFilterColumn = 'Id';
            this.gridOptions.sorting = sorting
            this.gridOptions.sort = sorting[0].direction;
            this.gridOptions.order = sorting[0].columnName + addtoFilterColumn;
            this.props.updateGridOptions(this.gridOptions);
        }
        this.changeCurrentPage = currentPage => {
            this.gridOptions.page = currentPage
            this.props.updateGridOptions(this.gridOptions);
        }
        this.TableRow = ({ row, ...restProps }) =>
            (
                <Table.Row
                    {...restProps}
                    onClick={() => this.props.openModal(row)}
                    style={{
                        cursor: 'pointer',
                        ...styles['banking'],
                    }} />
            );
    }
    render() {
        if (this.props.rowData && this.props.rowData.data) {
            return (
                <Container>
                    <Card>
                        <Grid
                            rows={this.props.rowData.data}
                            columns={this.state.columnDefs}>
                            <LookupTypeProvider
                                for={this.state.lookupColumns} />
                            <PagingState
                                currentPage={this.gridOptions.page}
                                onCurrentPageChange={this.changeCurrentPage}
                                pageSize={50} />

                            <CustomPaging
                                totalCount={this.props.rowData.totalResults} />

                            <ImageTypeProvider
                                for={this.state.imageColumns} />
                            <Table columnExtensions={this.state.tableColumnExtensions} rowComponent={this.TableRow} />

                            <SortingState
                                defaultSorting={[{ columnName: 'name', direction: 'asc' }]}
                                sorting={this.gridOptions.sorting}
                                onSortingChange={this.changeSorting} />
                            <IntegratedSorting />


                            {/* <VirtualTable columnExtensions={this.state.tableColumnExtensions}/>  */}
                            <TableHeaderRow showSortingControls />
                            <PagingPanel />
                            <Toolbar />
                        </Grid>
                    </Card>
                </Container>
            );
        } else {
            return null;
        }
    }
}
export default BeersList;

// function mapStateToProps(state) {
//     return {
//         rowData: state.beers,
//     };
// }

// function mapDispatchToProps(dispatch) {
//     return bindActionCreators({ getBeers, getBeer }, dispatch);
// }

// export default connect(mapStateToProps, mapDispatchToProps)(BeersList);
