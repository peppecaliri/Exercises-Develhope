import { useForm } from "./useForm";

export default function Login() {
  const { username, password, handlePassword, handleUsername, handleReset } =
    useForm();

  return (
    <div>
      <form>
        <input type="text" name="username" onChange={handleUsername} />
        <input type="password" name="password" onChange={handlePassword} />
        <input type="submit" name="submit" id="btnSubmit" disabled />
        <button onChange={handleReset}>Reset</button>
      </form>
    </div>
  );
}
