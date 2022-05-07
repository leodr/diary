import { FormEvent, useEffect, useRef } from "react";
import { classNames } from "../utils/classnames";

type Props = {
  onLogin: (password: string) => void;
  showError: boolean;
};

const PASSWORD_FIELD_NAME = "password-field";

export default function Login({ showError, onLogin }: Props) {
  const inputRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    const input = inputRef.current;

    if (input) {
      input.focus();
    }
  }, []);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    // Stop page reload and POST-request
    event.preventDefault();

    const passwordInput: HTMLInputElement =
      // @ts-expect-error: Don't want to fight TSC, this exists.
      event.target.elements[PASSWORD_FIELD_NAME];

    const password = passwordInput.value;

    onLogin(password);
  }

  return (
    <div className="h-screen w-screen flex items-center justify-center">
      <form onSubmit={handleSubmit}>
        <label htmlFor={PASSWORD_FIELD_NAME}>
          <span className="sr-only">Password</span>
          <input
            ref={inputRef}
            className={classNames(
              "w-72 px-4 py-2 rounded text-sm",
              "border border-gray-200 dark:border-gray-600",
              "outline-none focus:ring-2 ring-offset-2 ring-offset-gray-50 dark:ring-offset-gray-900",
              showError
                ? "ring-2 ring-red-500 dark:ring-red-400"
                : "ring-gray-900 dark:ring-gray-50",
              "bg-white dark:bg-gray-800",
              "text-gray-900 dark:text-gray-50",
              "placeholder:text-gray-500 dark:placeholder:text-gray-400"
            )}
            placeholder="Enter your password"
            type="password"
            name={PASSWORD_FIELD_NAME}
            id={PASSWORD_FIELD_NAME}
          />
        </label>
      </form>
    </div>
  );
}
