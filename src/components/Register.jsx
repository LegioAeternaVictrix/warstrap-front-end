import Flex from "./common/Flex";
import { FlexOne } from "./common/Flex";
import { ContainerMedium } from "./common/Container";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useRef, useState, useEffect } from "react";
import * as callBackend from "../services/callBackend";

function Register() {
  const { register, handleSubmit, errors, watch } = useForm();
  const [effect, setEffect] = useState();

  useEffect(() => {
    setEffect("animate__backInDown");
  }, []);

  const password = useRef({});
  password.current = watch("password", "");

  const onSubmit = async (data) => {
    const result = await callBackend.register(data);
    if (result === true) setEffect("animate__bounceOut");
  };

  return (
    <ContainerMedium className={`container--form  animate__animated ${effect}`}>
      <Flex>
        <FlexOne className="container__box">
          <form onSubmit={handleSubmit(onSubmit)}>
            <h1>REGISTRATION</h1>
            <input
              className="input input--dark shadow"
              name="email"
              type="email"
              placeholder="Email"
              ref={register({ required: true })}
            />
            <input
              className="input input--dark shadow"
              name="username"
              type="text"
              placeholder="Username"
              ref={register({ required: true, minLength: 4 })}
            />
            <input
              className="input input--dark shadow"
              name="password"
              type="password"
              placeholder="Password"
              ref={register({ required: true, minLength: 8 })}
            />
            <input
              className="input input--dark shadow"
              name="passwordConfirm"
              type="password"
              placeholder="Repeat the password"
              ref={register({
                validate: (value) =>
                  value === password.current || "The passwords do not match",
              })}
            />
            {errors.passwordConfirm && <p>Passwords do not match</p>}
            <button className="btn btn-medium btn-red" type="submit">
              CREATE AN ACCOUNT
            </button>
          </form>
        </FlexOne>

        <FlexOne className="container__box">
          <h3>Already got a Warstrap account?</h3>
          <Link to="/login" style={{ textDecoration: "none" }}>
            <button className="btn btn-medium btn-outline-white">LOG IN</button>
          </Link>
        </FlexOne>
      </Flex>
    </ContainerMedium>
  );
}

export default Register;
