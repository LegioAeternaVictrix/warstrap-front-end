import { useForm } from "react-hook-form";
import { changePassword } from "../../services/callBackend";

function PasswordOptions({ id }) {
  const { register, handleSubmit } = useForm();

  const onSubmit = async (data) => {
    await changePassword(data, id);
  };

  return (
    <div className="options animate__animated animate__fadeIn">
      <form onSubmit={handleSubmit(onSubmit)}>
        <h1>CHANGE PASSWORD</h1>
        <input
          type="password"
          className="input input--dark"
          name="currentPassword"
          placeholder="CURRENT PASSWORD"
          ref={register({ required: true, minLength: 8 })}
        />

        <input
          type="password"
          className="input input--dark"
          name="password"
          placeholder="YOUR NEW PASSWORD"
          ref={register({ required: true, minLength: 8 })}
        />

        <input
          type="password"
          className="input input--dark"
          name="repeatPassword"
          placeholder="REPEAT THE PASSWORD"
          ref={register({ required: true, minLength: 8 })}
        />

        <button className="btn btn-medium btn-red" type="submit">
          CHANGE PASSWORD
        </button>
      </form>
    </div>
  );
}

export default PasswordOptions;
