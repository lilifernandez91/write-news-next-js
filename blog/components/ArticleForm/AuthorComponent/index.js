import { FormControl, MenuItem, Select } from '@mui/material';

const AuthorComponent = (props) => {
    return (
        <div className="mb-3 author-component">
            <label htmlFor="exampleInputPassword1" className="form-label">
                Autor
            </label>

            <FormControl sx={{ m: 1, minWidth: 120 }}>
                <Select
                    value={!props.article.author ? `Analítica Fantasy` : props.article.author}
                    id="author"
                    onChange={props.onChangeAuthor}
                    displayEmpty
                    inputProps={{ 'aria-label': 'Without label' }}
                >
                    <MenuItem value={`Analítica Fantasy`}>Analítica Fantasy</MenuItem>
                    <MenuItem value={`Dayán Ruiz`}>Dayán Ruiz</MenuItem>
                </Select>
            </FormControl>
        </div>
    );
};

export default AuthorComponent;
