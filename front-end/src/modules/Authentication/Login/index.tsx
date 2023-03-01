import { useState } from "react";
import { useForm } from "react-hook-form";
import { Grid, Box, Button, IconButton, Snackbar, Fade } from "@material-ui/core";
import MuiAlert from "@material-ui/lab/Alert";
import { Link, useHistory } from "react-router-dom";
import clsx from "clsx";
import { useDispatch } from "react-redux";
import GoogleLogin from "react-google-login";
import useStyles from "./styles";
import InputsLogin from "components/InputsLogin";
import Images from "config/images";
import { routes } from "routers/routes";
import * as authenticationServices from "services/authentication";
import * as actionGlobal from "store/reducers/global/actionTypes";
import { ACCESS_TOKEN } from "config/constants";
import { setToken } from "services/configApi";
import { parseJwt } from "helpers";

// import { FormLoginSocial } from 'models/authentication';
// import { TypeLoginSocial } from './models';
function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const Login = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const history = useHistory();
  const [open, setOpen] = useState(false);

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();
  console.log(errors);

  const validateError = (value) => {
    if (value.length < 6) {
      return `Password must be at least 6 characters`;
    }
    if (value.length > 50) {
      return `Maximum of 50 characters`;
    }
  };

  const onSubmit = async (values) => {
    dispatch({ type: actionGlobal.SET_LOADING_PAGE, payload: true });
    await authenticationServices
      .login(values)
      .then((data) => {
        // const dataToken = parseJwt(data.data.token)
        console.log(data.data.token);

        localStorage.setItem(ACCESS_TOKEN, data.data.token);
        setToken(data.data.token);
        history.push(routes.workspace);
      })
      .catch((e) => {
        console.log(e);

        // localStorage.setItem(ACCESS_TOKEN, dataToken);
        // setToken(dataToken);
        // history.push(routes.workspace);
        // setOpen(true)
      })
      .finally(() => {
        dispatch({ type: actionGlobal.SET_LOADING_PAGE, payload: false });
      });
  };

  const renderAlert = () => {
    return (
      // <div className={classes.wrapperAlert}>
      <Snackbar open={open} autoHideDuration={60000000} onClose={() => setOpen(false)} TransitionComponent={Fade} anchorOrigin={{ vertical: "top", horizontal: "center" }}>
        <Alert onClose={() => setOpen(false)} severity="error" className={classes.customMess}>
          Email and/or password is incorrect
        </Alert>
      </Snackbar>
      // </div>
    );
  };
  return (
    <Grid container component="main" className={classes.root}>
      {open && renderAlert()}
      <img src={Images.icLogo} alt="" className={classes.icLogo} />
      <Grid container className={classes.rabbit}>
        <Grid className={classes.title}>
          <span>Log In</span>
          <span>Glad to see you!</span>
        </Grid>
      </Grid>
      <Grid container className={classes.input}>
        <Box width="354px">
          <form onSubmit={handleSubmit(onSubmit)} autoComplete="off">
            <InputsLogin
              placeholder="Email"
              name="username"
              autoComplete="new-password"
              className={clsx({
                [classes.disabled]: true,
                [classes.inputError]: !!errors?.username?.message,
              })}
              showIcon={true}
              img={Images.icEmail}
              inputRef={register("email", { required: "Email cannot be empty" })}
              // errorMessage={errors?.email ? errors.email.message : null}
            />
            <InputsLogin
              placeholder="Password"
              type="password"
              name="password"
              showEyes={true}
              autoComplete="new-password"
              className={clsx({
                [classes.disabled]: true,
                [classes.inputError]: !!errors?.password?.message,
              })}
              showIcon={true}
              img={Images.icPass}
              inputRef={register("password", {
                required: "Password cannot be empty",
                validate: (value) => validateError(value),
              })}
              // errorMessage={errors?.password ? errors.password.message : null}
            />
            <Link className={classes.href} to="/forgot-password">
              Forgot your password?
            </Link>
            <Button type="submit" className={classes.btn}>
              Login
            </Button>
          </form>
          <div className={classes.separator}>
            <span>or</span>
          </div>
          <Grid className={classes.brand}>
            <GoogleLogin
              clientId={process.env.REACT_APP_GOOGLE_KEY!}
              render={(renderProps: any) => (
                <IconButton disabled onClick={renderProps.onClick}>
                  <img src={Images.icGoogle} alt="" />
                </IconButton>
              )}
              //onSuccess={responseData(TypeLoginSocial.GOOGLE)}
              autoLoad={false}
              //onFailure={responseData(TypeLoginSocial.GOOGLE)}
              cookiePolicy={"single_host_origin"}
            />
          </Grid>
        </Box>
      </Grid>
    </Grid>
  );
};

export default Login;
