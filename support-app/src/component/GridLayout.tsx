/* eslint-disable jsx-a11y/alt-text */
import * as React from 'react';
import { experimentalStyled as styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
//import Stack from '@mui/material/Stack';
import styles from './styles.module.css';
import { Container } from '@mui/material';





const Item = styled(Box)(({ theme }) => ({
  padding: theme.spacing(),
  textAlign: 'center',
  border: '1px solid #ccc'
}));

function GridLayout() {
  const [language, setLanguage] = React.useState('');

  const handleChange = (event: SelectChangeEvent) => {
    setLanguage(event.target.value as string);
  };

  return (
    <>
      <Box style={{ marginLeft: '20%' }} className={styles.boxGrids}>
        <Grid container spacing={{ xs: 1, md: 2 }} columns={{ xs: 4, sm: 8, md: 12 }}
          className={styles.gridItems}>
          <Grid item xs={2} className={styles.gridBlock}>
            <Item className={styles.items}>
              <span>
                <img className={styles.gridImg}
                  src="https://fonts.gstatic.com/s/i/productlogos/chrome/v7/web-64dp/logo_chrome_color_1x_web_64dp.png" />
                <p className={styles.gridText}>Google Account</p>
              </span>
            </Item>
          </Grid>
          <Grid item xs={2} className={styles.gridBlock}>
            <Item className={styles.items}>
              <span>
                <img className={styles.gridImg}
                  src="https://lh3.googleusercontent.com/o9U8AvPuX9gkIYtYfNmH-_wBdTfOJ7jb0VwbLWWbERzml7oTPngODhKv2Br7A64=w64" />
                <p className={styles.gridText}>Google Account</p>
              </span>
            </Item>
          </Grid>
          <Grid item xs={2} className={styles.gridBlock}>
            <Item className={styles.items}>
              <span>
                <img className={styles.gridImg}
                  src="https://www.gstatic.com/images/branding/product/1x/youtube_64dp.png" />
                <p className={styles.gridText}>YouTube</p>
              </span>
            </Item>
          </Grid>
          <Grid item xs={2} className={styles.gridBlock}>
            <Item className={styles.items}>
              <span>
                <img className={styles.gridImg}
                  src="https://fonts.gstatic.com/s/i/productlogos/gmail_2020q4/v8/web-64dp/logo_gmail_2020q4_color_1x_web_64dp.png" />
                <p className={styles.gridText}>YouTube</p>
              </span>
            </Item>
          </Grid>
          <Grid container spacing={{ xs: 2, md: 3 }}
            columns={{ xs: 4, sm: 8, md: 12 }}
            direction="row"
            style={{ marginTop: '0.06rem' }}
            className={styles.gridItems}
          >
            <Grid item xs={2} className={styles.gridBlock}>
              <Item className={styles.items}>
                <span>
                  <img className={styles.gridImg}
                    src="https://fonts.gstatic.com/s/i/productlogos/play_prism/v8/web-64dp/logo_play_prism_color_1x_web_64dp.png" />
                  <p className={styles.gridText}>Google Play</p>
                </span>
              </Item>
            </Grid>
            <Grid item xs={2} className={styles.gridBlock}>
              <Item className={styles.items}>
                <span>
                  <img className={styles.gridImg}
                    src="https://www.gstatic.com/images/branding/googleg/1x/googleg_standard_color_64dp.png" />
                  <p className={styles.gridText}>Google Search</p>
                </span>
              </Item>
            </Grid>
            <Grid item xs={2} className={styles.gridBlock}>
              <Item className={styles.items}>
                <span>
                  <img className={styles.gridImg}
                    src="https://storage.googleapis.com/support-kms-prod/bJppRS0Z8FmVujFmM7KFHADzbq3L0PPb1Wpj" />
                  <p className={styles.gridText}>Google Adsense</p>
                </span>
              </Item>
            </Grid>
            <Grid item xs={2} className={styles.gridBlock}>
              <Item className={styles.items}>
                <span>
                  <img className={styles.gridImg}
                    src="https://fonts.gstatic.com/s/i/productlogos/google_now/v5/web-64dp/logo_google_now_color_1x_web_64dp.png" />
                  <p className={styles.gridText}>Pixel Phone</p>
                </span>
              </Item>
            </Grid>
          </Grid>

          <Grid container spacing={{ xs: 2, md: 3 }}
            columns={{ xs: 4, sm: 8, md: 12 }}
            direction="row"
            style={{ marginTop: '0.06rem' }}
            className={styles.gridItems}
          >
            <Grid item xs={2} className={styles.gridBlock}>
              <Item className={styles.items}>
                <span>
                  <img className={styles.gridImg}
                    src="https://fonts.gstatic.com/s/i/productlogos/maps/v6/web-64dp/logo_maps_color_1x_web_64dp.png" />
                  <p className={styles.gridText}>Google Maps</p>
                </span>
              </Item>
            </Grid>
            <Grid item xs={2} className={styles.gridBlock}>
              <Item className={styles.items}>
                <span>
                  <img className={styles.gridImg}
                    src="https://fonts.gstatic.com/s/i/productlogos/google_cloud/v8/web-64dp/logo_google_cloud_color_1x_web_64dp.png" />
                  <p className={styles.gridText}>Google Cloud</p>
                </span>
              </Item>
            </Grid>
            <Grid item xs={2} className={styles.gridBlock}>
              <Item className={styles.items}>
                <span>
                  <img className={styles.gridImg}
                    src="https://gstatic.com/ads/external/images/logo_google_ads_64px.png" />
                  <p className={styles.gridText}>Google Ads</p>
                </span>
              </Item>
            </Grid>
            <Grid item xs={2} className={styles.gridBlock}>
              <Item className={styles.items}>
                <span>
                  <img className={styles.gridImg}
                    src="https://fonts.gstatic.com/s/i/productlogos/photos/v6/web-64dp/logo_photos_color_1x_web_64dp.png" />
                  <p className={styles.gridText}>Google Photos</p>
                </span>
              </Item>
            </Grid>
          </Grid>

          <Grid container spacing={{ xs: 2, md: 3 }}
            columns={{ xs: 4, sm: 8, md: 12 }}
            direction="row"
            style={{ marginTop: '0.06rem' }}
            className={styles.gridItems}
          >
            <Grid item xs={2} className={styles.gridBlock}>
              <Item className={styles.items}>
                <span>
                  <img className={styles.gridImg}
                    src="https://www.gstatic.com/images/branding/product/1x/family_link_64dp.png" />
                  <p className={styles.gridText}>Google Families</p>
                </span>
              </Item>
            </Grid>
            <Grid item xs={2} className={styles.gridBlock}>
              <Item className={styles.items}>
                <span>
                  <img className={styles.gridImg}
                    src="https://fonts.gstatic.com/s/i/productlogos/fi/v6/web-64dp/logo_fi_color_1x_web_64dp.png" />
                  <p className={styles.gridText}>Google Fi</p>
                </span>
              </Item>
            </Grid>
            <Grid item xs={2} className={styles.gridBlock}>
              <Item className={styles.items}>
                <span>
                  <img className={styles.gridImg}
                    src="https://www.gstatic.com/images/branding/product/1x/google_home_64dp.png" />
                  <p className={styles.gridText}>Google Nest</p>
                </span>
              </Item>
            </Grid>
            <Grid item xs={2} className={styles.gridBlock}>
              <Item className={styles.items}>
                <span>
                  <img className={styles.gridImg}
                    src="https://fonts.gstatic.com/s/i/productlogos/googleg/v6/web-64dp/logo_googleg_color_1x_web_64dp.png" />
                  <p className={styles.gridText}>Google Play</p>
                </span>
              </Item>
            </Grid>
          </Grid>

          <Grid container spacing={{ xs: 2, md: 3 }}
            columns={{ xs: 4, sm: 8, md: 12 }}
            direction="row"
            style={{ marginTop: '0.06rem' }}
            className={styles.gridItems}
          >
            <Grid item xs={2} className={styles.gridBlock}>
              <Item className={styles.items}>
                <span>
                  <img className={styles.gridImg}
                    src="https://fonts.gstatic.com/s/i/productlogos/gstore/v5/web-64dp/logo_gstore_color_1x_web_64dp.png" />
                  <p className={styles.gridText}>Google Store</p>
                </span>
              </Item>
            </Grid>
            <Grid item xs={2} className={styles.gridBlock}>
              <Item className={styles.items}>
                <span>
                  <img className={styles.gridImg}
                    src="https://fonts.gstatic.com/s/i/productlogos/drive_2020q4/v8/web-64dp/logo_drive_2020q4_color_1x_web_64dp.png" />
                  <p className={styles.gridText}>Google Drive</p>
                </span>
              </Item>
            </Grid>
            <Grid item xs={2} className={styles.gridBlock}>
              <Item className={styles.items}>
                <span>
                  <img className={styles.gridImg}
                    src="https://lh3.googleusercontent.com/RM7cOeibu6ErWYBzYaGdu6EbXVYw9qcFkqkEoLT2Yn_tKIyWIrAIvb1UBH-qDrUFbitH=w64" />
                  <p className={styles.gridText}>Google Shopping</p>
                </span>
              </Item>
            </Grid>
            <Grid item xs={2} className={styles.gridBlock}>
              <Item>
                <span>
                  <img className={styles.gridImg}
                    src="https://fonts.gstatic.com/s/i/productlogos/accessibility/v4/web-64dp/logo_accessibility_color_1x_web_64dp.png" />
                  <p className={styles.gridText}>Google Accessibility</p>
                </span>
              </Item>
            </Grid>
          </Grid>
        </Grid>
      </Box>

      <Container maxWidth="lg" style={{marginTop: '3rem'}}
        sx={{
          display: 'flex',
          justifyContent: 'center'
        }}
      >
        <Grid container spacing={3} style={{width: '80%'}}>
          <Grid item lg={4} xs={12}>
              <h3>Your account</h3>
              <ul>
                <li>Can't access your account?</li>
                <li>Recent transactions with Google</li>
                <li>Useful stuff you can do with Google</li>
              </ul>
          </Grid>
          <Grid item lg={4} xs={12}>
              <h3>Help Communities</h3>
              <p>Learn more about
                <br />
                Google's Product Experts Program
              </p>
          </Grid>
          <Grid item lg={4} xs={12}>
              <h3>Status dashboard</h3>
              <p>If you're having trouble accessing a Google product,
                there's a chance we're currently experiencing a temporary problem.
                You can check for outages and downtime on the G Suite Status Dashboard.
              </p>
          </Grid>
          </Grid>
      </Container>

      
      <Box sx={{ 
        display: 'flex', 
        fontSize: '0.875rem', 
        marginTop: '5rem'}} 
      paddingLeft="10rem">
        <p style={{ width: '30%' }}> ©2022 Google  Privacy Policy  Terms of Service</p>
        <FormControl fullWidth>
          <InputLabel>English</InputLabel>
          <Select style={{ maxWidth: '10rem' }}
            value={language}
            label="Age"
            onChange={handleChange}
          >
            <MenuItem value={10}>catala</MenuItem>
            <MenuItem value={20}>deutsch</MenuItem>
            <MenuItem value={30}>filipino</MenuItem>
            <MenuItem value={30}>indonesia</MenuItem>
            <MenuItem value={30}>italiano</MenuItem>
          </Select>
        </FormControl>
      </Box>
    



    </>
  );

}

export default GridLayout