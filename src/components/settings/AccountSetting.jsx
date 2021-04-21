import { useForm } from "react-hook-form";
import { changeData } from "../../services/callBackend";

function AccountOptions({ id }) {
  const { register, handleSubmit } = useForm();

  const onSubmit = async (data) => {
    await changeData(data, id);
  };

  return (
    <div className="options animate__animated animate__fadeIn">
      <form onSubmit={handleSubmit(onSubmit)}>
        <h1>ACCOUNT SETTINGS</h1>
        <input
          className="input input--dark"
          type="text"
          name="username"
          placeholder="CHANGE YOUR USERNAME"
          ref={register({ required: true, minLength: 4 })}
        />

        <input
          className="input input--dark"
          type="email"
          name="email"
          placeholder="CHANGE YOUR EMAIL"
          ref={register({ required: true })}
        />

        <button className="btn btn-medium btn-red" type="submit">
          SUBMIT CHANGES
        </button>
      </form>
    </div>
  );
}

export default AccountOptions;
