import { Box, Grid, Typography } from '@mui/material'
import './App.css'
import { LinkedIn, GitHub } from '@material-ui/icons'

function App() {

  return (
      <>
        <Typography variant='h2' borderBottom={1} borderColor={'primary'} align='center'>
          Nossa Equipe
        </Typography>
        <Grid container justifyContent={'center'} marginY={4} gap={4}>
          <Grid item xs={11} md={8} display={'flex'} alignItems={'center'} gap={2} className='cardInstrutor'>
            <img className="fotoInstrutor" src="https://media.licdn.com/dms/image/C5603AQF-A_fWWBnsYg/profile-displayphoto-shrink_800_800/0/1632522146983?e=1686787200&v=beta&t=zsxinhQDayl8yYOdPwWYSARiORJFkY-PELmQX0QPDOg" alt="" />
            <Box display={'flex'} flexDirection={'column'} justifyContent={'space-between'} alignItems={'center'} gap={8} paddingRight={4}>
              <Typography align='center' variant='h3'>Clauber Costa</Typography>
              <Typography align='center' variant='body1'>
                Alagador de residencias profissional, e instrutor de jornada da turma 61 nas horas vagas.
              </Typography>
              <Grid xs={3} display='flex' justifyContent={'space-around'} gap={4}>
                <LinkedIn fontSize='large' />
                <GitHub fontSize='large' />
              </Grid>
            </Box>
          </Grid>
          
          <Grid item xs={11} md={8} display={'flex'} alignItems={'center'} gap={2} className='cardInstrutor'>
            <Box display={'flex'} flexDirection={'column'} justifyContent={'space-between'} alignItems={'center'} gap={8} paddingLeft={4}>
              <Typography align='center' variant='h3'>Rafael Queiroz</Typography>
              <Typography align='center' variant='body1'>
                Careca gente boa de plantão, mestre em documentações, e sabe um pouco de Java.
              </Typography>
              <Grid xs={3} display='flex' justifyContent={'space-around'} gap={4}>
                <LinkedIn fontSize='large' />
                <GitHub fontSize='large' />
              </Grid>
            </Box>
            <img className="fotoInstrutor" src="https://media.licdn.com/dms/image/C4D03AQGTXH-g1mLpkg/profile-displayphoto-shrink_800_800/0/1603344125611?e=1686787200&v=beta&t=lKpaTSB42urZJkAuLU1zO4mcQ7cu9DZtP6ovW9AOiEY" alt="" />
          </Grid>
          
          <Grid item xs={11} md={8} display={'flex'} alignItems={'center'} gap={2} className='cardInstrutor'>
            <img className="fotoInstrutor" src="https://media.licdn.com/dms/image/C4E03AQF2HrpbBJbgMQ/profile-displayphoto-shrink_800_800/0/1565381271521?e=1686787200&v=beta&t=W-gYuIhyC_Ff5k-9s4HFEoTlrMynxS4Q8sRrP_lsFcQ" alt="" />
            <Box display={'flex'} flexDirection={'column'} justifyContent={'space-between'} alignItems={'center'} gap={8} paddingRight={4}>
              <Typography align='center' variant='h3'>Jessica Lopes</Typography>
              <Typography align='center' variant='body1'>
                Comedora de moranguete, garota tatuada, e nas horas vagas, mexe com o Springão.
              </Typography>
              <Grid xs={3} display='flex' justifyContent={'space-around'} gap={4}>
                <LinkedIn fontSize='large' />
                <GitHub fontSize='large' />
              </Grid>
            </Box>
          </Grid>
          
          <Grid item xs={11} md={8} display={'flex'} alignItems={'center'} gap={2} className='cardInstrutor'>
            <Box display={'flex'} flexDirection={'column'} justifyContent={'space-between'} alignItems={'center'} gap={8} paddingLeft={4}>
              <Typography align='center' variant='h3'>Thiago Faccipieri</Typography>
              <Typography align='center' variant='body1'>
                Cara doido do cabelo roxo, que fala varias besteiras, e finge que ensina FrontEnd
              </Typography>
              <Grid xs={3} display='flex' justifyContent={'space-around'} gap={4}>
                <LinkedIn fontSize='large' />
                <GitHub fontSize='large' />
              </Grid>
            </Box>
            <img className="fotoInstrutor" src="https://github.com/tjfaccipieri.png" alt="" />
          </Grid>
          
        </Grid>
      </>
    )
}

export default App
