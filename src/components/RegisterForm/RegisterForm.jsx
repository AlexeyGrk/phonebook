import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import toast, { Toaster } from "react-hot-toast";
import { useAddUserQuery } from "../../redux/services/userApi";
import { RegisterFormContainer, RegisterMainForm } from "./RegisterForm.styled";

const RegisterForm = () => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const {
    register,
    handleSubmit,

    formState: { errors },
  } = useForm();
  const onSubmit = (data) => (
    setPassword(data.password), setEmail(data.email), setName(data.name)
  );
  const { data: userData, isLoading: loading } = useAddUserQuery(
    {
      name,
      password,
      email,
    },
    {
      skip: !name,
    }
  );

  return (
    <RegisterFormContainer>
      <RegisterMainForm onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="name">
          Name
          <input
            id="name"
            {...register("name", {
              required: true,
              maxLength: 20,
              message: "error message",
            })}
          />
          {errors.name && errors.name.type === "required" && (
            <span>{errors.message}</span>
          )}
        </label>
        <label htmlFor="password">
          Number
          <input {...register("password")} id="password" />
        </label>
        <label htmlFor="email">
          Email
          <input {...register("email")} id="email" />
        </label>
        <button type="submit">Register</button>
      </RegisterMainForm>
    </RegisterFormContainer>
  );
};

export default RegisterForm;