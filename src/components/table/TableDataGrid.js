import PropTypes from 'prop-types'
import { DataGrid } from '@mui/x-data-grid'

const TableDataGrid = ({
    data,
    columns,
    pagination,
    setPagination,
    loading,
}) => {
    // Calculate the width for auto columns
    const autoColumnWidth = 100 / (columns.length - 2) // Assuming first and last columns are excluded

    // Set the width for the first and last columns
    columns[0].width = 150 // Width for the first column
    columns[columns.length - 1].width = 150 // Width for the last column

    // Set the width for the auto columns
    for (let i = 1; i < columns.length - 1; i++) {
        columns[i].width = `${autoColumnWidth}%`
    }

    return (
        <div
            style={{
                height: 'auto',
                width: '100%',
                backgroundColor: '#ffffff',
                borderRadius: 10,
                overflowX: 'auto',
            }}
        >
            <DataGrid
                rows={data}
                columns={columns}
                paginationModel={pagination}
                onPaginationModelChange={setPagination}
                pageSizeOptions={[10, 25, 50, 100]}
                disableColumnMenu
                checkboxSelection={false}
                disableRowSelectionOnClick
                columnBuffer={columns.length}
                loading={loading}
                autoHeight
            />
        </div>
    )
}

TableDataGrid.propTypes = {
    data: PropTypes.array,
    columns: PropTypes.array,
    pagination: PropTypes.object,
    setPagination: PropTypes.object,
    loading: PropTypes.bool,
}

export default TableDataGrid
