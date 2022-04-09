import pandas as pd
from pandas import ExcelWriter
from pandas import ExcelFile


expected = pd.read_excel('Book1.xlsx')
output = pd.read_excel('Book10.xlsx')
column_heads = expected.columns
first_row = " "

for row in expected.index :
    for name in column_heads:
        exp_item = expected[name][row]
        out_item = output[name][row])
        if(expected[name][row] == output[name][row]) :
            print('VINDICATION')
            first_row.join(expected[name][row])
        else :
            print()
