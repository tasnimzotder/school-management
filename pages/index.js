import Head from 'next/head';
import styles from '../styles/Home.module.css';

import React from 'react';
import Router from 'next/router';

import { withStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import NativeSelect from '@material-ui/core/NativeSelect';
import InputBase from '@material-ui/core/InputBase';

const BootstrapInput = withStyles((theme) => ({
  root: {
    'label + &': {
      marginTop: theme.spacing(3),
    },
  },
  input: {
    borderRadius: 4,
    position: 'relative',
    backgroundColor: theme.palette.background.paper,
    border: '1px solid #ced4da',
    fontSize: 16,
    padding: '10px 26px 10px 12px',
    transition: theme.transitions.create(['border-color', 'box-shadow']),
    '&:focus': {
      borderRadius: 4,
      borderColor: '#80bdff',
      boxShadow: '0 0 0 0.2rem rgba(0,123,255,.25)',
    },
  },
}))(InputBase);

export default function Home() {
  const [loginType, setLoginType] = React.useState('');
  const handleChange = (event) => {
    setLoginType(event.target.value);
  };

  const handleLogin = () => {
    if (loginType == 0) {
      Router.push('/student');
    }
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/icon?family=Material+Icons"
        />
      </Head>

      <main className={styles.main}>
        <div className={styles.card}>
          <div className={styles.card_header}>
            <span>Login Here</span>
          </div>
          <hr></hr>
          <div className={styles.card_body}>
            <FormControl className={styles.form_ctrl}>
              <InputLabel htmlFor="demo-customized-textbox">
                Registration ID
              </InputLabel>
              <BootstrapInput id="demo-customized-textbox" />
            </FormControl>
            <FormControl className={styles.form_ctrl}>
              <InputLabel id="demo-customized-select-label">
                Login type
              </InputLabel>
              <Select
                labelId="demo-customized-select-label"
                id="demo-customized-select"
                value={loginType}
                onChange={handleChange}
                input={<BootstrapInput />}
              >
                <MenuItem value={0}>Student</MenuItem>
                <MenuItem value={1}>Teacher</MenuItem>
              </Select>
            </FormControl>
          </div>
          <div className={styles.card_actions}>
            <button onClick={handleLogin}>Login</button>
          </div>
        </div>
      </main>

      <footer className={styles.footer}>
        <div>
          <span>School Management System</span>
        </div>
      </footer>
    </div>
  );
}
