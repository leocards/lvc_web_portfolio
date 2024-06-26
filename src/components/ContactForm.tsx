import Input from "./Input";
import TextArea from "./TextArea";
import { useForm } from "react-hook-form";
import emailjs from '@emailjs/browser';
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

export default function ContactForm() {
    interface Inputs {
        name: string,
        email: string,
        message: string,
    }
    const { register, watch, handleSubmit, reset } = useForm<Inputs>()

    const data = watch()

    const mySwal = withReactContent(Swal)

    const onFormSubmit = (input_data: any) => {
        const customCss = '!bg-slate-200 dark:!bg-[#2d3036] dark:!text-[#ececec] !text-slate-700';
        const loading = mySwal.fire({
            text: `Sending...`,
            toast: true,
            position: "top-right",
            showConfirmButton: false,
            customClass: {
                popup: customCss
            },
            didOpen: () => {
                Swal.showLoading();
            }
        }) as any;
        
        emailjs
            .send('service_vdyxly9', 'contact_form', input_data, {
                publicKey: '6No_nFB9sASO2AkeB'
            })
            .then(() => {
                loading.close()
                mySwal.fire({
                    text: `Message sent successfully`,
                    icon: "success",
                    toast: true,
                    position: "top-right",
                    timerProgressBar: true,
                    timer: 3000,
                    showConfirmButton: false,
                    customClass: {
                        popup: customCss
                    }
                });
            }, (error) => {
                console.log('FAILED...', error.text);
            });
        
        reset()
    }

    return (
        <div className="sm:px-4 py-4 lg:py-0 w-full">
            <form onSubmit={handleSubmit(onFormSubmit)}>
                <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 group">
                    <Input {...register('name', { required: "Name is required" })} placeholder="Name" className="w-full border-b focus-within:border-solid placeholder-shown:dashed border-color placeholder:font-light text-sm transition-200 focus:bg-slate-200 placeholder-shown:bg-transparent placeholder-shown:dark:bg-transparent bg-slate-200 dark:bg-color dark:focus:bg-color" />
                    <div className={`hidden md:block border-l dashed group-focus-within:border-solid group-focus-within:dark:border-[#ececec]/25 ${data.name || data.email ? '!border-solid dark:!border-[#ececec]/25' : ''}`} />
                    <Input {...register('email', {
                        required: "Email is required",
                        pattern: {
                            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                            message: "Invalid email address"
                        }
                    })} placeholder="Email" className="w-full border-b focus-within:border-solid placeholder-shown:dashed border-color placeholder:font-light text-sm transition-200 focus:bg-slate-200 dark:focus:bg-color placeholder-shown:bg-transparent placeholder-shown:dark:bg-transparent bg-slate-200 dark:bg-color dark:focus:bg-color" />
                </div>

                <div className="flex mt-4">
                    <TextArea {...register('message', { required: "Message is required" })} placeholder="Message" className="transition-200 resize-none w-full border-b placeholder-shown:dashed border-color focus:border-solid focus:bg-slate-200 dark:focus:bg-color placeholder:font-light text-sm py-2 !h-[calc((20px*8)+1rem)] lg:!h-[calc((20px*10)+1rem)] placeholder-shown:bg-transparent placeholder-shown:dark:bg-transparent bg-slate-200 dark:bg-color dark:focus:bg-color"></TextArea>
                </div>

                <div className="relative border border-color mt-4">
                    <button type="submit" className="text-sm text-color dark:font-light bg-dark bg-slate-200 w-full py-3 relative">Send message</button>
                    <div className="absolute bottom-full left-5 flex h-8 items-end overflow-hidden pointer-events-none">
                        <div className="flex -mb-px h-[2px] w-44">
                            <div className="w-full flex-none blur-sm [background-image:linear-gradient(90deg,rgba(56,189,248,0)_0%,#0EA5E9_32.29%,rgba(236,72,153,0.3)_67.19%,rgba(236,72,153,0)_100%)]"></div>
                            <div className="-ml-[100%] w-full flex-none blur-[1px] [background-image:linear-gradient(90deg,rgba(56,189,248,0)_0%,#0EA5E9_32.29%,rgba(236,72,153,0)_100%)]"></div>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    )
}