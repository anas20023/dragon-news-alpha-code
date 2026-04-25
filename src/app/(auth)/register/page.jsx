'use client'
import Link from "next/link";
import { Button, Description, FieldError, Form, Input, Label, TextField } from "@heroui/react";
import { usePathname } from "next/navigation";
const RegisterPage = () => {
    const pathname=usePathname()
    const onSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const data = {}
        formData.forEach((value, key) => {
            data[key] = value.toString();
        });

        alert(`Form submitted with: ${JSON.stringify(data, null, 2)}`);
    };

    return (
        <div className="min-h-screen flex justify-center items-center p-4">
            <div className="w-full max-w-md">
                <div className="text-center mb-8">
                    <h1 className="text-4xl font-bold text-slate-800 mb-2">Create Account</h1>
                </div>

                <Form className="flex flex-col gap-6 bg-gray-50 backdrop-blur-xl p-8 rounded-2xl shadow" onSubmit={onSubmit}>
                    <TextField
                        isRequired
                        name="name"
                        type="text"
                        validate={(value) => {
                            if (value<4) {
                                return "Must be a word of 4 char";
                            }
                            return null;
                        }}
                    >
                        <Label className="text-slate-800 font-medium">Name</Label>
                        <Input
                            placeholder="Anas Ibn Belal"
                            className=" border-slate-600 text-white placeholder-slate-400 rounded-lg"
                        />
                        <FieldError />
                    </TextField>
                    <TextField
                        isRequired
                        name="email"
                        type="email"
                        validate={(value) => {
                            if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) {
                                return "Please enter a valid email address";
                            }
                            return null;
                        }}
                    >
                        <Label className="text-slate-800 font-medium">Email</Label>
                        <Input
                            placeholder="john@example.com"
                            className=" border-slate-600 text-white placeholder-slate-400 rounded-lg"
                        />
                        <FieldError />
                    </TextField>

                    <TextField
                        isRequired
                        minLength={8}
                        name="password"
                        type="password"
                        validate={(value) => {
                            if (value.length < 8) {
                                return "Password must be at least 8 characters";
                            }
                            if (!/[A-Z]/.test(value)) {
                                return "Password must contain at least one uppercase letter";
                            }
                            if (!/[0-9]/.test(value)) {
                                return "Password must contain at least one number";
                            }
                            return null;
                        }}
                    >
                        <Label className="text-slate-800 font-medium">Password</Label>
                        <Input
                            placeholder="Enter your password"
                            className=" border-slate-600 text-white placeholder-slate-400 rounded-lg"
                        />
                        <Description className="text-slate-600 text-sm">8+ characters, 1 uppercase, 1 number</Description>
                        <FieldError />
                    </TextField>

                    <div className="flex gap-3 pt-2">
                        <Button
                            type="submit"
                            className="flex-1 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg py-2 transition-colors"
                        >
                           
                           Register
                        </Button>
                    </div>
                </Form>

                <p className="text-center text-slate-600 text-sm mt-6">
                    Don&apos;t have an account? <span className="text-blue-400 hover:text-blue-300 cursor-pointer font-medium"> <Link href={pathname==='/register'?'/login':"/register"}>{pathname==='/register'?'Login':"Register"}</Link></span>
                </p>
            </div>
        </div>
    )
}

export default RegisterPage
