// "use client";
import React, { ChangeEvent, useState } from 'react'
import Swal from 'sweetalert2' ; 
import { Label } from '../ui/label';
import { Input } from '../ui/input';
import { cn } from '../../lib/utils';
import {
  IconBrandGithub,
  IconBrandGoogle,
} from "@tabler/icons-react";
import Form from 'next/form' ;
 
function ContactSection() {
  const [result, setResult] = React.useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setResult("Sending....");
    const form = e.target as HTMLFormElement;

    const formData = new FormData(form);
   
    formData.append("access_key", "4922a8fd-9acc-4e4d-851f-a28049ee743e");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      Swal.fire({
      title: "Good job!",
      text: "Email has been sent!",
      icon: "success"
    });
      (e.target as HTMLFormElement).reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };
  return (
    <div className='relative' id="contact">
       <h2 className="mt-[5rem] bg-clip-text text-transparent text-center bg-gradient-to-b from-neutral-900 to-neutral-700 dark:from-neutral-600 dark:to-white text-l md:text-2xl lg:text-5xl font-sans py-2 md:py-10 relative z-20 font-bold tracking-tight">
          Contact
        </h2>
       <div className="shadow-input mx-auto w-full max-w-md rounded-none bg-white p-4 md:rounded-2xl md:p-8 dark:bg-black">
          <h2 className="text-xl font-bold text-neutral-800 dark:text-neutral-200">
           You can contact me here
          </h2>

          <form className="my-8" onSubmit={handleSubmit}>
            <div className="mb-4 flex flex-col space-y-2 md:flex-row md:space-y-0 md:space-x-2">
              <LabelInputContainer>
                <Label htmlFor="name">Name</Label>
                <Input  placeholder="Your name" type="text" required/>
              </LabelInputContainer>
              </div>
            <LabelInputContainer className="mb-4">
              <Label htmlFor="email">Email Address</Label>
              <Input placeholder="email@example.com" type="email" required />
            </LabelInputContainer>
            <LabelInputContainer className="mb-4">
              <Label htmlFor="Message">Message</Label>
              <textarea 
              className='shadow-input dark:placeholder-text-neutral-600 flex h-10 w-full rounded-md border-none bg-gray-50 px-3 py-2 text-sm text-black transition duration-400 group-hover/input:shadow-none file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-neutral-400 focus-visible:ring-[2px] focus-visible:ring-neutral-400 focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50 dark:bg-zinc-800 dark:text-white dark:shadow-[0px_0px_1px_1px_#404040] dark:focus-visible:ring-neutral-600'
              name="message"
              required
              rows={3} 
              placeholder="Enter Message"></textarea>
            </LabelInputContainer>

            <button
              className="group/btn relative block h-10 w-full rounded-md bg-gradient-to-br from-black to-neutral-600 font-medium text-white shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:bg-zinc-800 dark:from-zinc-900 dark:to-zinc-900 dark:shadow-[0px_1px_0px_0px_#27272a_inset,0px_-1px_0px_0px_#27272a_inset]"
              type="submit"
            >
              Submit &rarr;
              <BottomGradient />
            </button>          
          </form>
          <span>{result}</span>

        </div>
    </div>
  );

}
export default ContactSection 
// export default function ContactSection() {
//     // const [result, setResult] = React.useState("");
//     // const [value, setValue] = useState<string>("");
//      const [name, setName] = useState('');
     
//       const handleSubmitTemp = (event) => {
//         console.log(name);
        
//         event.preventDefault(); // Prevent default form submission behavior
//         console.log(`Hello, ${name}!`);
//       };
  
//   return (
//     <div className=" mx-auto w-full max-w-md rounded-none  p-4 md:rounded-2xl md:p-8 dark:bg-black">
//       <h1 className="mt-[5rem] bg-clip-text text-transparent text-center bg-gradient-to-b from-neutral-900 to-neutral-700 dark:from-neutral-600 dark:to-white text-l md:text-2xl lg:text-5xl font-sans py-2 md:py-10 relative z-20 font-bold tracking-tight">
//           Contact
//         </h1>
//       <h2 className="text-xl font-bold text-neutral-800 dark:text-neutral-200">
//         You can sent email to me 
//       </h2>
//       <Form className="my-8 " onSubmit={handleSubmitTemp}>
//        <label     className="text-white">
//         Name:
//         <input
//         type="text"
//         value={name}
//         onChange={(e) => setName(e.target.value)} 
//         className="text-white"
//         placeholder="Type something..." 
//         required/>
//       </label>
//       <p>Current name: {name}</p>
       

//       <button
//         className="group/btn relative block h-10 w-full rounded-md bg-gradient-to-br from-black to-neutral-600 font-medium text-white shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:bg-zinc-800 dark:from-zinc-900 dark:to-zinc-900 dark:shadow-[0px_1px_0px_0px_#27272a_inset,0px_-1px_0px_0px_#27272a_inset]"
//         type="submit"
//       >
//         Submit &rarr;
//         <BottomGradient />
//       </button>

       
//       </Form>
//     </div>
//   );
// }

const BottomGradient = () => {
  return (
    <>
      <span className="absolute inset-x-0 -bottom-px block h-px w-full bg-gradient-to-r from-transparent via-cyan-500 to-transparent opacity-0 transition duration-500 group-hover/btn:opacity-100" />
      <span className="absolute inset-x-10 -bottom-px mx-auto block h-px w-1/2 bg-gradient-to-r from-transparent via-indigo-500 to-transparent opacity-0 blur-sm transition duration-500 group-hover/btn:opacity-100" />
    </>
  );
};

const LabelInputContainer = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn("flex w-full flex-col space-y-2", className)}>
      {children}
    </div>
  );
};