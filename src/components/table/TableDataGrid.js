import PropTypes from 'prop-types'
import { DataGrid } from '@mui/x-data-grid'

const TableDataGrid = ({ data, columns }) => {
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
                pageSize={10}
                disableColumnMenu
                checkboxSelection={false}
                disableRowSelectionOnClick
                columnBuffer={columns.length}
                autoHeight
            />
        </div>
    )
}

TableDataGrid.propTypes = {
    data: PropTypes.array,
    columns: PropTypes.array,
}

export default TableDataGrid
