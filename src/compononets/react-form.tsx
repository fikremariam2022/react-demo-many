import React from "react";
import { useForm } from "react-hook-form";
import "../App.css";
let counter = 0;

const ReactHookFormPlain = () => {
  const form = useForm<FormValues>();
  const { register, handleSubmit, control, reset, formState } = form;
  const { errors } = formState;
  type FormValues = {
    email: string;
    password: string;
  };
  const onSubmitHandler = (data: FormValues) => {
    console.log({ data });
    console.log(control._formState);
    //    reset();
  };
  //custom validation
  const checkReservedEmail = (fieldValue: string) => {
    return fieldValue !== "admin@gmail.com" || "Enter a different email";
  };
  const checkBlackListedEmail = (fieldValue: string) => {
    return fieldValue !== "fikre@gmail.com" || "This email is blocked by admin";
  };

  counter++;
  return (
    <div>
      <h1>Youtube {counter}</h1>
      <form onSubmit={handleSubmit(onSubmitHandler)} noValidate>
        <h2>Lets sign you in.</h2>
        <br />
        <div className="form-control">
          <input
            {...register("email", {
              required: { value: true, message: "username is required" },
              pattern: {
                value:
                  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:.[a-zA-Z0-9-]+)*$/,
                message: "Invalid email format",
              },
              validate: {
                isReserved: checkReservedEmail,
                isBlocked: checkBlackListedEmail,
              },
            })}
            placeholder="email"
            type="email"
            required
          />
          <p className="error">{errors.email?.message}</p>
        </div>
        <div className="form-control">
          <input
            {...register("password", {
              required: { value: true, message: "Password is required" },
              pattern: {
                value:
                  /(?=^.{6,10}$)(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&amp;*()_+}{&quot;:;'?/&gt;.&lt;,])(?!.*\s).*$/,
                message:
                  "Password should contain 1 small-case letter, 1 Capital letter, 1 digit, 1 special character and the length should be between 6-10 characters.",
              },
            })}
            placeholder="password"
            type="password"
            required
          />
          <p className="error">{errors.password?.message}</p>
        </div>
        <button type="submit">Sign in</button>
      </form>
    </div>
  );
};

export default ReactHookFormPlain;
