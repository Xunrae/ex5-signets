import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import * as crudDossiers from '../services/crud-dossiers';

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

export default function SimpleSelect({ util, dossiers, setDossiers }) {
  const classes = useStyles();
  const [tri, changerTri] = React.useState('date');

//****************************************Code pour le point E*********************************** */
  const gererChangement = (evt) => {
    //change la valeur de tri -> modifie l'affichage du select
    changerTri(evt.target.value);

    //changer l'affichage des dossiers
    crudDossiers.lireTout(util, evt.target.value).then(
        dossiers => setDossiers(dossiers)
    );
  };


  return (
    <div id="SimpleSelect">
      <FormControl className={classes.formControl}>
        <Select
          labelId="demo-simple-select-label"
          id="simpleSelect"
          value={tri}
          onChange={gererChangement}
        >
          <MenuItem value={'date'}>Date de modification descendante</MenuItem>
          <MenuItem value={'nomAsc'}>Nom de dossier ascendant</MenuItem>
          <MenuItem value={'nomDesc'}>Nom de dossier descendant</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
}