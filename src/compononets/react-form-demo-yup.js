import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const schema = yup.object().shape({
  email: yup.string().email().required(),
  password: yup.string().min(8).max(32).required(),
});
let counter = 0;

const ReactFormApp = () => {
  const form = useForm({
    resolver: yupResolver(schema),
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = form;
  const onSubmitHandler = (data) => {
    console.log({ data });
    reset();
  };
  counter++;
  return (
    <div>
      <h1>Youtube {counter}</h1>
      <form onSubmit={handleSubmit(onSubmitHandler)}>
        <h2>Lets sign you in.</h2>
        <br />

        <input
          {...register("email")}
          placeholder="email"
          type="email"
          required
        />
        <p>{errors.email?.message}</p>
        <br />

        <input
          {...register("password")}
          placeholder="password"
          type="password"
          required
        />
        <p>{errors.password?.message}</p>
        <br />

        <button type="submit">Sign in</button>
      </form>
    </div>
  );
};

export default ReactFormApp;
