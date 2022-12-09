import React from "react";
import "./login.css";
import {
  Table,
  Button,
  Checkbox,
  Form,
  Input,
  message,
  Popconfirm,
  Space,
  Modal,
} from "antd";
import { BrowserRouter, Link, Routes, Route } from "react-router-dom";
import { ArrowRightOutlined } from "@ant-design/icons";
import BtnAccounts from "../BtnAccounts/btnAccounts";
import FormItem from "antd/es/form/FormItem";
const Login = () => {
  const [createForm] = Form.useForm();
  const onFinish = () => {};
  const onFinishFailed = () => {};
  return (
    <>
      <div className=" bg-white mx-auto">
        <div className="w-[80%] p-4 mx-auto">
          {/* <CloseOutlined
            style={{ color: "red", fontSize: "25px", cursor: "pointer" }}
          /> */}
          <div className="text-left text-[45px]">Customer Login</div>
          <hr className="my-4 text-gray-300" />
          <div className="max-w-[500px] mx-auto">
            <BtnAccounts />
            <BtnAccounts color="#dd4b39" icon="google" text="Google" />
            <Form
              form={createForm} //2.1
              name="basic"
              labelCol={{ span: 8 }}
              wrapperCol={{ span: 16 }}
              initialValues={{ remember: true }}
              autoComplete="on"
              onFinish={onFinish}
              onFinishFailed={onFinishFailed}
            >
              <div className="mb-4 mt-4">
                <div className="">
                  <div className="">
                    <h2 className="text-xl text-primary ">Email</h2>
                    <Form.Item
                      // label="Email"
                      name="email"
                      rules={[
                        { required: true, message: "Chưa nhập thư điện tử!" },
                        { type: "email", message: "Thư điện tử không đúng" },
                      ]}
                      hasFeedback
                    >
                      <Input
                        className="outline-none border border-gray-400"
                        type="text"
                        style={{ width: "100%", padding: "10px 5px" }}
                      />
                    </Form.Item>
                  </div>

                  <div className="">
                    <h2 className="text-xl text-primary ">Password</h2>
                    <FormItem
                      name="password"
                      rules={[
                        { required: true, message: "Chưa nhập mật khẩu!" },
                        { type: "password", message: "Mật khẩu không đúng" },
                      ]}
                      hasFeedback
                    >
                      <Input
                        className="outline-none border border-gray-400"
                        type="password"
                        style={{ width: "100%", padding: "10px 5px" }}
                      />
                    </FormItem>
                    <em style={{ textAlign: "right", display: "block" }}>
                      <a href="#" className="text-primary hover:text-green-800">
                        Forgot your password?
                      </a>
                    </em>
                  </div>
                  {/* </div> */}
                  <div className="flex justify-between items-center">
                    <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                      <Button
                        type="primary"
                        htmlType="submit"
                        className="bg-primary text-white p-4 rounded-md transition-all py-5"
                      >
                        Đăng nhập
                      </Button>
                    </Form.Item>
                    <h2 className="flex items-center ">
                      New Customer?
                      <Link to={"/accounts/register"}>
                        <a href="#" className="ml-2 ">
                          Sign up
                          <ArrowRightOutlined size={""} />
                        </a>
                      </Link>
                    </h2>
                  </div>
                </div>
              </div>
            </Form>
          </div>
        </div>
      </div>
    </>
  );
};
export default Login;
