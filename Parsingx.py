import pandas as pd
from pandas import ExcelWriter
from pandas import ExcelFile

output = pd.read_excel('Book10.xlsx')
expected = pd.read_excel('Book1.xlsx')
column_heads = expected.columns
first_row = " "

for row in expected.index :
    for name in column_heads:
        exp_item = expected[name][row]
        out_item = output[name][row]
        if(expected[name][row] == output[name][row]) :
            print('VINDICATION')
        else :
            print((expected[name][row], '!=', output[name][row]))


