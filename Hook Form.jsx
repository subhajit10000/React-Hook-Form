import { useForm } from "react-hook-form";

export default function App() {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    function onSubmit(data) {
        console.log("Submitting the form", data);
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div>
                <label>First Name</label>
                <input type="text" {...register("firstName", { required: "First name is required", maxLength: { value: 20, message: "Maximum length is 20" }, minLength: { value: 3, message: "Minimum length is 3" } })} />
                {errors.firstName && <p>{errors.firstName.message}</p>}
            </div>

            <br />

            <div>
                <label>Last Name</label>
                <input type="text" {...register("lastName", { required: "Last name is required", maxLength: { value: 20, message: "Maximum length is 20" }, minLength: { value: 3, message: "Minimum length is 3" } })} />
                {errors.lastName && <p>{errors.lastName.message}</p>}
            </div>

            <br />

            <div>
                <label>Age</label>
                <input type="number"{...register("age", { required: "Age is required", valueAsNumber: true, min: { value: 18, message: "Minimum age is 18" }, max: { value: 99, message: "Maximum age is 99" } })} />
                {errors.age && <p>{errors.age.message}</p>}
            </div>

            <br />

            <input type="submit" />
        </form>
    );
}
