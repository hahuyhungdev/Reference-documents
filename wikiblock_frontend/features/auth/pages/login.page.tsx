import { useAppDispatch } from "@hooks/app";
import { saveToken } from "@utils/cookies";
import { Button, Checkbox, Form, Input } from "antd";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

import { useLoginMutation } from "../auth.service";
import { setUser } from "../auth.slice";

const LoginPage = () => {
  const [login, { data, isError, error }] = useLoginMutation();
  const dispatch = useAppDispatch();
  const router = useRouter();
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const onFinish = (values: any) => {
    login({ username: values.username, password: values.password });
  };

  useEffect(() => {
    if (data) {
      const { user, tokens } = data;
      if (user) dispatch(setUser(user));
      if (tokens)
        saveToken(
          "access_token",
          tokens.access_token,
          Date.now() + tokens.expires_in
        );
      router.push("/");
    }
  }, [data]);

  useEffect(() => {
    if (isError && error && error.message) setErrorMessage(error.message);
  }, [isError, error]);
  return (
    <div className="w-full h-full min-w-screen min-h-screen relative bg-[#d9edff] flex items-center justify-center">
      <div className="flex justify-between flex-row-reverse max-w-[1000px] bg-white overflow-hidden mx-auto rounded-[12px] shadow-[0_0_40px_rgba(0,0,0,0.16)]">
        <div className="illustration-wrapper">
          <img
            src="https://mixkit.imgix.net/art/preview/mixkit-left-handed-man-sitting-at-a-table-writing-in-a-notebook-27-original-large.png?q=80&auto=format%2Ccompress&h=700"
            alt="Login"
          />
        </div>

        <Form
          name="login-form"
          initialValues={{ remember: true }}
          onFinish={onFinish}
          onChange={(e) => setErrorMessage(null)}
        >
          <p className="form-title">Welcome back</p>
          <p>Login to the Dashboard</p>
          <Form.Item
            name="username"
            rules={[{ required: true, message: "Please input your email!" }]}
          >
            <Input placeholder="Email" />
          </Form.Item>

          <Form.Item
            name="password"
            rules={[{ required: true, message: "Please input your password!" }]}
          >
            <Input.Password placeholder="Password" />
          </Form.Item>

          {errorMessage && <p className="text-[#e63946]">{errorMessage}</p>}

          <Form.Item name="remember" valuePropName="checked">
            <Checkbox>Remember me</Checkbox>
          </Form.Item>

          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              className="login-form-button"
            >
              LOGIN
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

export default LoginPage;
