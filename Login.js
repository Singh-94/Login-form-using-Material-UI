import React from 'react'
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import LockOpenIcon from '@mui/icons-material/LockOpen';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Checkbox from '@mui/material/Checkbox';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import FormControlLabel from '@mui/material/FormControlLabel';
import Link from '@mui/material/Link';
import './Login.css';












const Login = () => {
    const preventdefault1=()=>{
        alert("Signed In Successful..!!")
    }

    const preventdefault =(e)=>{
        e.preventDefault()
    }
    const avatarstyle={
        backgroundColor:"red",
        width:"80px",
        height:"80px",
        justification:"center",
        marginTop:"2px",
        marginLeft:"150px",
        
      
    }
    const buttonstyle={
        backgroundColor:"blue",
        color:"white",
        marginTop:"30px",
        marginBottom:"10px"
    }
   
  return (
    <div className='box'>
    <Box alignContent={"center"} ml={60} >
      <Paper elevation={24}  style={{width:"370px", height:"400px",marginTop:"100px",padding:"50px", borderRadius:"15px"}}>
      <Avatar  variant='contained' style={avatarstyle}><LockOpenIcon/></Avatar>
        <Stack spacing={5}>
        <TextField required type="name" variant='standard' label={"User Name"} placeholder={"enter your full name" }></TextField>
        <TextField  required type={"password"} variant='standard' label={"Password"} placeholder={"enter your password"}></TextField>
        </Stack>
        <Stack spacing={1}>
        <FormControlLabel control={<Checkbox/>} label={"I have provided the correct information."} labelPlacement={"right"}/>
       
        <Button variant='contained' style={buttonstyle} onClick={preventdefault1}>SIGN IN</Button>    
        </Stack>
        <Link href="#" onClick={preventdefault} style={{textDecoration:"none"}}>Forgot Password ?</Link> {""} {""}
        <Link href="#" onClick={preventdefault}>SIGN UP </Link>Here
        </Paper>
      </Box>
    </div>
  )
}

export default Login
