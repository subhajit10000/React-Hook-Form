import { useForm } from "react-hook-form";

export default function App() {
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm();

    function onSubmit(data) {
        console.log(data);
        reset();
    }

    return (
        <form className=" text-center mt-40 bg-slate-500 pt-5 " onSubmit={handleSubmit(onSubmit)}>
            <div>
                <label className="text-xl">First Name</label>
                <input type="text"
                    className="bg-blue-100 border-2 ml-5"
                    {...register("firstName",
                        {
                            required: "First name is required",
                            maxLength: { value: 20, message: "Maximum length is 20" },
                            minLength: { value: 3, message: "Minimum length is 3" }
                        })}
                    placeholder=" Enter Your First Name" />
                {errors.firstName && <p>{errors.firstName.message}</p>}
            </div>

            <br />

            <div>
                <label className="text-xl ">Last Name</label>
                <input type="text"
                    className="bg-blue-100 border-2 ml-5 "
                    {...register("lastName", {
                        required: "Last name is required",
                        maxLength: { value: 20, message: "Maximum length is 20" },
                        minLength: { value: 3, message: "Minimum length is 3" }
                    })}
                    placeholder=" Enter Your Last Name" />
                {errors.lastName && <p>{errors.lastName.message}</p>}
            </div>

            <br />

            <div>
                <label className="text-xl" >Age</label>
                <input type="number"
                    className="bg-blue-100 border-2 ml-5"
                    {...register("age", {
                        required: "Age is required",
                        valueAsNumber: true,
                        min: { value: 18, message: "Minimum age is 18" },
                        max: { value: 99, message: "Maximum age is 99" }
                    })}
                    placeholder=" Enter Your Age" />
                {errors.age && <p>{errors.age.message}</p>}
            </div>

            <br />

            <input type="submit"
                className="text-2xl bg-green-600 border-2 m-5 p-5 rounded-xl hover:bg-blue-500 hover:text-2xl " />
        </form>
    );
}

