import React, { useState } from 'react'
import TextField from '@material-ui/core/TextField'
import Autocomplete from '@material-ui/lab/Autocomplete'
import { IconButton } from '@material-ui/core'

import DeleteForeverIcon from '@material-ui/icons/DeleteForever'
import EditIcon from '@material-ui/icons/Edit'
import AddIcon from '@material-ui/icons/Add'


const ProductoSelect = ( { list, toggleOpenFormAdd, value, setValue, handleEdit, handleDelete } ) =>
{

    const [ inputValue, setInputValue ] = useState( '' )

    return (
        <Autocomplete
            size='small'
            autoComplete
            fullWidth
            value={ value }
            noOptionsText=''
            onChange={ ( event, newValue ) =>
            {

                if ( newValue && newValue.id )
                    setValue( newValue.id )
                else
                    setInputValue( '' )

            } }
            inputValue={ inputValue }
            onInputChange={ ( event, newInputValue ) => { setInputValue( newInputValue ) } }
            options={ list }
            getOptionLabel={ ( option ) => ( option && option.Producto ) ? option.Producto : '' }
            selectOnFocus
            clearOnBlur
            handleHomeEndKeys
            renderOption={ ( option ) => (
                <>
                    <IconButton onClick={ e =>
                    {
                        e.stopPropagation()
                        if ( window.confirm( "¿Seguro que desea Borrar este Producto?" ) )
                            handleDelete( option )
                    } }
                        title='Borrar Producto' color="secondary"
                        size="medium"
                        variant="contained">

                        <DeleteForeverIcon />

                    </IconButton>

                    <IconButton onClick={ e =>
                    {
                        e.stopPropagation()
                        if ( window.confirm( "¿Seguro que desea Editar este Producto?" ) )
                            handleEdit( option )
                    } }
                        title='Editar Producto' color="primary"
                        size="medium"
                        variant="contained">

                        <EditIcon />

                    </IconButton>




                    <h4>  { option.Producto }</h4>

                </>

            ) }
            renderInput={ ( params ) => (
                <div style={ { display: 'flex' } }>

                    <TextField { ...params } label='Producto' variant="outlined"
                    />
                    <IconButton onClick={ e =>
                    {
                        e.stopPropagation()
                        toggleOpenFormAdd()
                    } }
                        title='Añadir Producto' color="secondary"
                        size="medium"
                        variant="contained">

                        <AddIcon />

                    </IconButton>
                </div>
            ) }
        />




    )
}





export default ProductoSelect