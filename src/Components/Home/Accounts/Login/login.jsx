import React from "react";
import "./login.css";

import { Button, Form, Input } from "antd";
import { Link } from "react-router-dom";
import { ArrowRightOutlined } from "@ant-design/icons";
import {
  CloseOutlined,
  FacebookOutlined,
  GoogleOutlined,
} from "@ant-design/icons";
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
            <div className="">
              <div className="cursor-pointer text-left h-[50px] mb-2 leading-[50px] text-[#fff] bg-[#3b5998] hover:opacity-90">
                <span className="px-3 text-[20px]">Login with FaceBook</span>
                <i className="float-right h-[50px] w-[50px] leading-[35px] text-[25px] text-center bg-[#ffffff19]">
                  <FacebookOutlined />
                </i>
              </div>
              <div className="cursor-pointer text-left h-[50px] leading-[50px] text-[#fff] bg-[#dd4b39] hover:opacity-90">
                <span className=" px-3 text-[20px] ">Login with Google</span>
                <i className="float-right  h-[50px] w-[50px] leading-[35px] text-[25px] text-center bg-[#ffffff19] ">
                  <GoogleOutlined />
                </i>
              </div>
            </div>
            <div className="my-10 relative">
              <hr className="text-[#beadad]" />
              <div className="absolute top-[-11px] left-[250px] px-[15px] bg-white">
                Or
              </div>
            </div>
            <Form
              form={createForm} //2.1
              name="basic"
              initialValues={{ remember: true }}
              autoComplete="on"
              onFinish={onFinish}
              onFinishFailed={onFinishFailed}
            >
              <div className="mb-4 mt-4">
                <div className="">
                  <div className="w-[100%]">
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
                    <Form.Item
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
                    </Form.Item>
                    <em style={{ textAlign: "right", display: "block" }}>
                      <a href="#" className="text-primary hover:text-blue-500">
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
                        className="flex bg-primary text-white rounded-md transition-all py-5 text-lg"
                      >
                        Đăng nhập
                      </Button>
                    </Form.Item>
                    <h2 className="flex items-center ">
                      New Customer?
                      <Link to={"/accounts/register"}>
                        <div className="ml-2 ">
                          Sign up
                          <ArrowRightOutlined size={""} />
                        </div>
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
