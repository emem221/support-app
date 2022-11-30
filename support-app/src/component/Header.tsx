import * as React from "react";
import {AppBar, Toolbar, IconButton, Typography, Stack, Box, InputBase} from "@mui/material";
import DehazeIcon from '@mui/icons-material/Dehaze';
import AppsIcon from '@mui/icons-material/Apps';
import Avatar from "@mui/material/Avatar";
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import SearchIcon from '@mui/icons-material/Search';
import InputAdornment from '@mui/material/InputAdornment'
import { styled } from '@mui/material/styles'
import styles from './styles.module.css'


const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(3),
      width: 'auto',
    },
}));
    


const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  alignItems: 'center',
  justifyContent: 'center',
  display: 'flex',
  fill: '#1f1f1f',
  cursor: 'pointer',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  padding: theme.spacing(1, 1, 1, 0),
  marginTop: '1.5rem',
  transition: theme.transitions.create('width'),
  width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '60ch',
    },
}));


export const Header = () => {
  return (
    <>
      <AppBar position="static" elevation={0}
        style={{ background: '#FFF' }}
      >
        <Toolbar>
          <IconButton size="large" edge="start" aria-label="menu"
            style={{ color: '#444746' }}
          >
            <DehazeIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}
            style={{ color: '#444746', paddingLeft: '20px' }}
          >
            Google Help
          </Typography>
          <Stack direction="row" spacing={2}>
            <AppsIcon style={{ color: '#444746', fontSize: '30px' }} />
            <Avatar alt="Remy Sharp" src="data:image/jpeg;base64,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RE47h2FFSxJLfaG/I3sfRpy877jZ9pamFPtPZktz9mGGxnAyzZm3HPMzdt01GunHivb5kRETQeMIiIB2/ZljTwyta6MWvbdTcj6AfredxEKwV115XE4fh/EalFro1r7g6q3iJfYXilOoNxSPNbgL4i+88+vRlvOS0Psey+1KDpQoye60ks6O3J6eTLPA45XQ021HwsOdM/8AIkjH1M+Fq9QhB8ufpOOxWKKV2ZCCLjY3DaDTSWuE45TKurXTPTZTzW5Btt+tYezyTUo6YJpdrUqkJ0qrSkt6N+D1Sf8AHpg5WIiegfGLQvsYBUwVJx8VJjTbwb3lP66mV5rXpDqlh/cSPrGBxFlqUz8Lr/cpzKfQjzkVW0YdbfUTmKtddfc016iqbsuO6k/GOL+cUvO55Y31nmInRnN1N7AnmdPnufw85piIAiIgCXXDFfFYimGN8oW/cqW9TYfOUs6DsYSMRp+w1/l+dpxUdoNrka9hjv7RCm9HJXXPJ1mJR2chadlzXYgqDVOnPe2k+dYlMrsvQkfIz6PxDiFOguZz4L95/CfOsbXz1GcC2Y3tvaZtkvnke3/qHu7win+LN1yT8NPP+XGiImw+ZEREAREQBERAEREARN1AgMuYXW4uOovr6Sx7R0aS1vsSChUNobhSRt6X85DebFsaTdNzusNK3HN8+GColjwPBitXSm2gYm9t7AE/hK6bE6g2tDV1g5pyUZqUldJp259PM94kAOwX4QTbwvp6TRESTlu4iIggS44HxFcPne2ZyAqjkOZJPkJTxIlFSVmW0a0qU1OGq0+5JxeKeqxdzmJ9O4DkJGiJJW25O71EREECIiAIiIAiIgCIiAJkzEQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAyZiZMxAEREAREQBERAEREAREQBERAEREAREQBERAEREAy25mJl9z4zEAREQBERAEREAREQBERAEREAREQBERAEREAREQD/2Q==" />

          </Stack>
        </Toolbar>
      </AppBar>
      
      <div className={styles.newIcon}>
        <span className={styles.span}>Google</span>
        <OpenInNewIcon />
      </div>  
    
   
      <div className={styles.headerSearch}>
        <Box  className={styles.boxStyle}
          justifyContent="center"
          alignItems="center"
          position="relative"
          left="30%"
          width="40%"
          >
            <Avatar className={styles.logo}
              sx={{  width: 60, height: 60 }}
              src="https://ssl.gstatic.com/images/branding/googleg/2x/googleg_standard_color_64dp.png" 
              title="Google logo" 
              alt="" aria-hidden="true" 
            />

            <h1 className={styles.h1Style}>How can we help you?</h1>
        
            <Search className={styles.SearchBar}>
              <StyledInputBase 
                className={styles.inputBase}
                placeholder='Describe your issue'
                inputProps={{ 'aria-label': 'search' }} 
                startAdornment={
                  <InputAdornment position="start">
                    <SearchIconWrapper>
                      <SearchIcon />
                    </SearchIconWrapper>
                  </InputAdornment>
                }
              />
            </Search>
        </Box>
      </div>
        
     <div className={styles.divCovid}>
      <Box className={styles.boxCovid}>
        <img className={styles.imgCovid}
          src="https://ssl.gstatic.com/images/branding/googleg/2x/googleg_standard_color_64dp.png" 
          title="Google logo" 
          alt=""  
        />
        <span className={styles.covidText}>Read about Google's response to COVID-19</span>
      </Box>
     </div>

      
    </>
    
  )
}