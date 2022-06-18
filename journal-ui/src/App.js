import logo from './logo.svg';
import {ThemeProvider, createTheme} from '@mui/material/styles';
import Button from '@mui/material/Button';  
import Stack from '@mui/material/Stack';
import Grid from '@mui/material/Grid';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import TextField from '@mui/material/TextField';

function App() {
  const darkModeTheme = createTheme({
    palette: {
      mode: 'light',
    },
  });

  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    //verticalAlign: 'bottom',
    border: 'solid 1px black'
  }));  

  const loadData = () => {
    fetch("https://localhost:5001/weatherforecast")
      .then(res => res.json())
      .then(
        (result) => {
          // this.setState({
          //   isLoaded: true,
          //   items: result.items
          // });
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
          // this.setState({
          //   isLoaded: true,
          //   error
          // });
        }
      )      
  };

  return (
    
    <ThemeProvider theme={darkModeTheme}>
      <div className="App">
        
        <header className="App-header">          
          <p>
            Welcome to The Journal!
          </p>
        </header>

        <Box sx={{ width: '100%' }}>
          <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
            <Grid item xs={12}>
              <Stack spacing={2}>
                <Item>Item 1</Item>
                <Item>Item 2</Item>
                <Item>Item 3</Item>
              </Stack>
            </Grid>
            <Grid item xs={11}>
              <TextField style={{width: '100%', height: '15px' }} multiline={true} rows={1} id="txtLog" label="Add text here !" variant="outlined" />                            
            </Grid>
            <Grid item xs={1}>                            
              <Button onClick={loadData} style={{height: '55px' }} variant="contained">Log</Button>              
            </Grid>
          </Grid>
        </Box>        
      </div>
      </ThemeProvider>
  );
}

export default App;
