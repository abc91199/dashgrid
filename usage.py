import dashgrid
import dash
import dash_html_components as html

import pandas as pd

app = dash.Dash('')

app.css.append_css({"external_url": "https://cdnjs.cloudflare.com/ajax/libs/ag-grid/12.0.2/styles/ag-grid.css"})
app.css.append_css({"external_url": "https://cdnjs.cloudflare.com/ajax/libs/ag-grid/12.0.2/styles/theme-fresh.css"})

app.scripts.config.serve_locally = True


def transformDataframe(df):
    cdef = [{"headerName": x, "field": x} for x in list(df)]
    rdata = df.to_dict("records")
    return cdef, rdata
    
cdef, rdata = transformDataframe(pd.read_csv("sampledata.csv"))

app.layout = html.Div([
    dashgrid.GridComponent(
        id='input',
        columnDefs=cdef,
        rowData=rdata,
        gridWidth=1000,
        gridHeight=1000,
        enableColResize=True,
        autoSizeColumns=True,
        enableSorting=True,
        enableFilter=True,
        
        # domLayout="autoHeight"
    ),
    html.Div(id='output')
])

# @app.callback(
# 	dash.dependencies.Output('output', 'children'),
# 	[dash.dependencies.Input('input', 'value')])
# def display_output(value):
#     return 'You have entered {}'.format(value)

if __name__ == '__main__':
    app.run_server(debug=True)
