import { Input } from "@/components/ui/input"; // Assuming you have shadcn Input component
import { Textarea } from "@/components/ui/textarea"; // Assuming you have shadcn Textarea component
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

const supportFormSchema = z.object({
  email: z.string().email("Invalid email address"),
  description: z.string().min(1, "Description is required"),
});

export function SupportForm() {
  const {
  register,
  handleSubmit,
  formState: { errors },
  } = useForm<{ email: string; description: string }>({
  resolver: zodResolver(supportFormSchema),
  });

  const onSubmit = (data: { email: string; description: string }) => {
    console.log(data);
  };

  return (
    <form className="self-stretch h-full lg:px-8 px-0  flex-col gap-8 flex" onSubmit={handleSubmit(onSubmit)}>
      {/* Email Input */}
      <div className="self-stretch h-auto flex flex-col gap-2">
        <label htmlFor="email" className="text-[#767c8a] text-[16px] font-medium">
          Email address
        </label>
        <Input
          id="email"
          type="email"
          placeholder="Enter email"
          className="p-3 rounded-lg text-white text-[16px] border border-[#767c8a]"
          {...register("email")}
        />
        {errors.email?.message && (
            <span className="text-red-500 text-sm">{"* " + String(errors.email.message)}</span>
        )}
      </div>

      {/* Description Textarea */}
      <div className="self-stretch h-auto flex flex-col gap-2">
        <label htmlFor="description" className="text-[#767c8a] text-[16px] font-medium">
          Description
        </label>
        <Textarea
          id="description"
          placeholder="Description"
          className="p-3 rounded-lg text-white text-[16px] border border-[#767c8a]"
          {...register("description")}
        />
        {errors.description?.message && (
            <span className="text-red-500 text-sm">{"* " + String(errors.description.message)}</span>
        )}
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        className="px-4 py-3 w-fit bg-custom-orange rounded-lg text-[#0c1220] text-[16px] font-bold"
      >
        SUBMIT
      </button>
    </form>
  );
}
