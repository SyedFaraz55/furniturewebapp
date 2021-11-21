import React, { useEffect, useState } from "react";
import {
  FormControl,
  FormLabel,
  Input,
  Button,
  Container,
  Heading,
  InputGroup,
  InputLeftAddon,
  Alert,
  AlertIcon,
  Flex,
} from "@chakra-ui/react";
import firebase from "firebase";
import firebaseConfig from "../../config/firebase";
import supabase from "../../config/supabase.config";

import { useHistory } from "react-router-dom";

const LoginForm = () => {
  const [mobile, setMobile] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [otp, setOtp] = useState("");
  const [status, setStatus] = useState(false);
  const history = useHistory();
  let [error, setError] = useState({});
  let [info, setInfo] = useState({});
  useEffect(() => {
    if (localStorage.getItem("supabase.auth.token")) {
      history.push("/");
    }
  }, [history]);
  const configureCaptcha = () => {
    window.recaptchaVerifier = new firebase.auth.RecaptchaVerifier(
      "sign-in-button",
      {
        size: "invisible",
        callback: () => {
          // reCAPTCHA solved, allow signInWithPhoneNumber.
          sendOTP();
          console.log("Recaptcha Verified");
        },
        defaultCountry: "IN",
      }
    );
  };

  const sendOTP = () => {
    if (email === "" || password === "" || mobile === "") {
      setError({ message: "All fields are required" });
    } else {
      setError({});
      const phoneNumber = `+91${mobile}`;
      configureCaptcha();
      const appVerifier = window.recaptchaVerifier;
      firebase
        .auth()
        .signInWithPhoneNumber(phoneNumber, appVerifier)
        .then((confirmationResult) => {
          setInfo({ message: `OTP sent to +91 ${mobile}` });
          setStatus(true);
          window.confirmationResult = confirmationResult;
        })
        .catch((err) =>
          setError({ message: "Something went wrong please try again later" })
        );
    }
  };
  const checkOTP = () => {
    window.confirmationResult
      .confirm(otp)
      .then((result) => {
        if (result.additionalUserInfo.isNewUser) {
          setInfo({});
          console.log("uuid", result.user);
          // props.history.push("/");
          supabase.auth
            .signUp({
              email: email,
              password: password,
              phone: mobile,
            })
            .then((response) => {
              console.log(response);
            })
            .catch((err) => console.log(err.toString()));
        } else {
          setError({ message: "user already exits !" });
          setOtp("");
          setInfo({});
          setStatus(false);
          setEmail("");
          setPassword("");
          setMobile("");
          // props.history.push("/");
          //2123
        }
      })
      .catch((err) => {
        setError({ message: err.toString() });
      });
  };

  return (
    <Container>
      <Heading as="h1">Sign Up</Heading>

      <FormControl id="name" style={{ marginTop: 30 }} isRequired>
        {error?.message && (
          <div style={{ marginBottom: 20 }}>
            <Alert status="error">
              <AlertIcon />
              {error?.message}
            </Alert>
          </div>
        )}
        {info?.message && (
          <div style={{ marginBottom: 20 }}>
            <Alert status="info">
              <AlertIcon />
              {info?.message}
            </Alert>
          </div>
        )}
        {status ? (
          <InputGroup>
            <Input
              type="number"
              value={otp}
              placeholder="OTP"
              onChange={(e) => setOtp(e.target.value)}
              min={6}
              maxLength={6}
            />
          </InputGroup>
        ) : (
          <div>
            <FormLabel>Email</FormLabel>
            <InputGroup>
              <Input
                required
                type="email"
                value={email}
                placeholder="Enter Email "
                onChange={(e) => setEmail(e.target.value)}
              />
            </InputGroup>

            <div style={{ marginTop: 15 }}>
              <FormLabel>Password</FormLabel>
              <InputGroup>
                <Input
                  type="password"
                  required
                  value={password}
                  placeholder="Enter Password"
                  onChange={(e) => setPassword(e.target.value)}
                />
              </InputGroup>
            </div>

            <div style={{ marginTop: 15 }}>
              <FormLabel>Mobile</FormLabel>
              <InputGroup>
                <InputLeftAddon children="+91" />
                <Input
                  type="tel"
                  value={mobile}
                  placeholder="mobile number"
                  onChange={(e) => setMobile(e.target.value)}
                  min={10}
                  required
                  maxLength={10}
                />
              </InputGroup>
            </div>
          </div>
        )}
      </FormControl>

      {status ? (
        <Button
          style={{ marginTop: 20, backgroundColor: "black", color: "white" }}
          onClick={checkOTP}
        >
          Verify OTP
        </Button>
      ) : (
        <Flex style={{ marginTop: 20 }}>
          <Button
            style={{
              backgroundColor: "black",
              color: "white",
            }}
            onClick={sendOTP}
          >
            Create Account
          </Button>

          <Button variant="link" style={{ marginLeft: 10 }}>
            Already have an account ? Login
          </Button>
        </Flex>
      )}
      <div id="sign-in-button"></div>
    </Container>
  );
};

export default LoginForm;
