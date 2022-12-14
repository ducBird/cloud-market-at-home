import React from "react";
// import BtnAccounts from "../BtnAccounts/btnAccounts";
import "./signUp.css";
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
import {
  CloseOutlined,
  FacebookOutlined,
  GoogleOutlined,
} from "@ant-design/icons";
import FormItem from "antd/es/form/FormItem";
import { Link } from "react-router-dom";

const Register = () => {
  const [createForm] = Form.useForm();
  const onFinish = () => {};
  const onFinishFailed = () => {};
  return (
    <div>
      <div className=" bg-white mx-auto">
        <div className="w-[80%] p-4 mx-auto">
          {/* <CloseOutlined
            style={{ color: "red", fontSize: "25px", cursor: "pointer" }}
          /> */}
          <div className="text-left text-[45px]">Customer Register</div>
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
              // name="basic"
              // autoComplete="on"
              onFinish={onFinish}
              onFinishFailed={onFinishFailed}
            >
              {/* <BtnAccounts />
              <BtnAccounts color="#dd4b39" icon="google" text="Google" /> */}
              <div className="mb-4 mt-4">
                <div className="">
                  <Form.Item
                    name="firstName"
                    rules={[
                      {
                        required: true,
                        message: "Please input your First Name!",
                      },
                    ]}
                    hasFeedback
                  >
                    <Input
                      className="outline-none border border-gray-400"
                      placeholder="First Name"
                      style={{
                        width: "100%",
                        padding: "10px 5px",
                        fontSize: "18px",
                      }}
                    />
                  </Form.Item>
                </div>

                <div className="">
                  <FormItem
                    name="lastName"
                    rules={[
                      {
                        required: true,
                        message: "Please input your Last Name!",
                      },
                    ]}
                    hasFeedback
                  >
                    <Input
                      className="outline-none border border-gray-400"
                      placeholder="Last Name"
                      style={{
                        width: "100%",
                        padding: "10px 5px",
                        fontSize: "18px",
                      }}
                    />
                  </FormItem>
                </div>
                <div className="">
                  <FormItem
                    name="email"
                    rules={[
                      { required: true, message: "Please input your Email" },
                      { type: "email", message: "Thư điện tử không đúng" },
                    ]}
                    hasFeedback
                  >
                    <Input
                      className="outline-none border border-gray-400"
                      placeholder="Email"
                      type="email"
                      style={{
                        width: "100%",
                        padding: "10px 5px",
                        fontSize: "18px",
                      }}
                    />
                  </FormItem>
                </div>
                <div>
                  <Form.Item
                    name="password"
                    rules={[
                      {
                        required: true,
                        message: "Please input your password!",
                      },
                    ]}
                    hasFeedback
                  >
                    <Input.Password
                      className="outline-none border border-gray-400"
                      placeholder="Password"
                      style={{
                        width: "100%",
                        padding: "10px 5px",
                        fontSize: "18px",
                      }}
                    />
                  </Form.Item>
                </div>
                <div>
                  <Form.Item
                    name="confirm"
                    dependencies={["password"]}
                    hasFeedback
                    rules={[
                      {
                        required: true,
                        message: "Please confirm your password!",
                      },
                      ({ getFieldValue }) => ({
                        validator(_, value) {
                          if (!value || getFieldValue("password") === value) {
                            return Promise.resolve();
                          }
                          return Promise.reject(
                            new Error(
                              "The two passwords that you entered do not match!"
                            )
                          );
                        },
                      }),
                    ]}
                  >
                    <Input.Password
                      className="outline-none border border-gray-400"
                      placeholder="Confirm password"
                      style={{
                        width: "100%",
                        padding: "10px 5px",
                        fontSize: "18px",
                      }}
                    />
                  </Form.Item>
                </div>
                {/* </div> */}
                <div className="flex items-center justify-between mt-4">
                  <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                    <Button
                      type="primary"
                      htmlType="submit"
                      className="flex bg-primary text-white px-8 rounded-md transition-all py-5 text-lg"
                    >
                      Create
                    </Button>
                  </Form.Item>
                  <div className="flex justify-end">
                    <Link to={"/accounts/login"}>
                      <div href="#" className="ml-2 ">
                        Already Have an Account? Login!
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
            </Form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
