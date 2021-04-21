import Flex from "./common/Flex";
import { FlexOne } from "./common/Flex";
import { ContainerMedium } from "./common/Container";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useEffect, useState } from "react";
import * as callBackend from "../services/callBackend";

function Login() {
  const { register, handleSubmit } = useForm();
  const [effect, setEffect] = useState();

  useEffect(() => {
    setEffect("animate__backInDown");
  }, []);

  const onSubmit = async (inputValues) => {
    const result = await callBackend.login(inputValues);
    if (result === true) setEffect("animate__bounceOut");
  };

  return (
    <ContainerMedium className={`container--form  animate__animated ${effect}`}>
      <Flex>
        <FlexOne className="container__box">
          <form onSubmit={handleSubmit(onSubmit)}>
            <h1>LOG INTO YOUR ACCOUNT</h1>
            <input
              type="text"
              className="input input--dark shadow"
              name="username"
              placeholder="Username"
              ref={register({ required: true, minLength: 4 })}
            />

            <input
              type="password"
              className="input input--dark shadow"
              name="password"
              placeholder="Password"
              ref={register({ required: true, minLength: 8 })}
            />

            <button className="btn btn-medium btn-red" type="submit">
              LOG IN
            </button>
          </form>
        </FlexOne>

        <FlexOne className="container__box">
          <h3>Don't have a Warstrap account?</h3>
          <Link to="/register" style={{ textDecoration: "none" }}>
            <button className="btn btn-medium btn-outline-white">
              REGISTER
            </button>
          </Link>
        </FlexOne>
      </Flex>
    </ContainerMedium>
  );
}

export default Login;
