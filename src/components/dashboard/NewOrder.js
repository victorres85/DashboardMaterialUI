import * as React from 'react';
import TextField from '@mui/material/TextField';
import Title from './Title';
import MenuItem from '@mui/material/MenuItem';
import Button from '@mui/material/Button';
import Popover from '@mui/material/Popover';
import PopupState, { bindTrigger, bindPopover } from 'material-ui-popup-state';
import Typography from '@mui/material/Typography';



const suppliers = [{
    supplier: "Liberty",
    email: 'liberty@liberty.com'
},
{
    supplier: 'FMV',
    email: 'fmv@fmv.com'
}]



export default function NewOrder() {
    const [supplier, setSupplier] = React.useState('FMV');

    const handleChange = (event) => {
        setSupplier(event.target.value);
    };

    return (
        <React.Fragment>
            <Title>Place Order</Title>
            <div>
                <TextField
                    id="outlined-select-currency"
                    select
                    label="Select"
                    value={supplier}
                    onChange={handleChange}
                    helperText="Please select the supplier"
                >
                    {suppliers.map((option) => (
                        <MenuItem key={option.supplier} value={option.supplier}>
                            {option.supplier}
                        </MenuItem>
                    ))}
                </TextField>
                <TextField
                    required
                    id="Wine-required"
                    label="Wine"
                    defaultValue="Wine"
                />

                <TextField
                    id="outlined-number"
                    label="Number"
                    type="number"
                    InputLabelProps={{
                        shrink: true,
                    }}
                />
            </div>

            <PopupState variant="popover" popupId="demo-popup-popover">
                {(popupState) => (
                    <div>
                        <Button variant="contained" {...bindTrigger(popupState)}>
                            Send Orders
                        </Button>
                        <Popover
                            {...bindPopover(popupState)}
                            anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'center',
                            }}
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'center',
                            }}
                        >
                            <Typography sx={{ p: 2 }}>Os vinhos adicionados aqui deveriam ir para a lista de orders abaixo e a aba a esquerda deveria ser atualizada. </Typography>
                        </Popover>
                    </div>
                )}
            </PopupState>
        </React.Fragment>
    );
}