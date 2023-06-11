import { useForm } from "react-hook-form";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import Swal from "sweetalert2";

const img_hoisting_token=import.meta.env.VITE_IMAGEBB;

const AddClass = () => {
    const [axiosSecure] = useAxiosSecure();
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const img_hoisting_url = `https://api.imgbb.com/1/upload?key=${img_hoisting_token}`
    const onSubmit = data => {
        
        const formData = new FormData();
        formData.append('image', data.image[0])
        fetch(img_hoisting_url, {
            method: 'POST',
            body: formData
        })
        .then(res => res.json())
        .then(imgRes => {
            // console.log(imgRes)
             if(imgRes.success){
                  const imgURL = imgRes.data.display_url;
                  const {name,price, students_available, instructor_name} = data;
               const classItem = {name,price: parseFloat(price), students_available: parseFloat(students_available), instructor_name, image:imgURL};
                console.log(classItem)
                axiosSecure.post('/classes', classItem)
                .then(data => {
                    console.log('new classes', data.data)
                    if(data.data.insertedId){
                        reset();
                        Swal.fire({
                            position: 'top-end',
                            icon: 'success',
                            title: 'added successfully',
                            showConfirmButton: false,
                            timer: 1500
                          })
                    }
                })
             }
          
        })
    };

    console.log(errors);

    return (
        <div>
       <h2 className="text-center text-2xl font-bold text-white mt-8">Add a New Class</h2> 
       <form onSubmit={handleSubmit(onSubmit)} className="bg-stone-500 p-12 rounded-lg mt-12">
      <div className="flex gap-10 mb-5">
      <div className="form-control w-full max-w-xs">
  <label className="label font-semibold">
    <span className="label-text">Class name</span>
  </label>
  <input type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" {...register("name", { required: true })}/>
  
</div>
<div className="form-control w-full max-w-xs">
  <label className="label">
    <span className="label-text font-semibold">class image</span>
  </label>
  <input type="file" className="file-input file-input-bordered file-input-error w-full max-w-xs" {...register("image", { required: true })} />
</div>
      </div>
      <div className="flex gap-10 mb-5">
      <div className="form-control w-full max-w-xs">
  <label className="label">
    <span className="label-text font-semibold">Instructor name</span>
  </label>
  <input type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs"  {...register("instructor_name.name", { required: true })} />
  
</div>
      <div className="form-control w-full max-w-xs">
  <label className="label">
    <span className="label-text font-semibold">Instructor email</span>
  </label>
  <input type="email" placeholder="Type here" className="input input-bordered w-full max-w-xs"  {...register("instructor_name.email", { required: true })} />
  
</div>
      </div>
      <div className="flex gap-10 mb-4">
      <div className="form-control w-full max-w-xs">
  <label className="label">
    <span className="label-text font-semibold">Available seats</span>
  </label>
  <input type="number" placeholder="Type here" className="input input-bordered w-full max-w-xs"  {...register("students_available", { required: true })}/>
  
</div>
      <div className="form-control w-full max-w-xs">
  <label className="label">
    <span className="label-text font-semibold">Price</span>
  </label>
  <input type="number" placeholder="Type here" className="input input-bordered w-full max-w-xs"  {...register("price", { required: true })} />
  
</div>
      </div>
    <div className="ml-48 mt-5">
        <input className="btn btn-error text-white" type="submit" value="ADD BUTTON" />
    </div>
        </form>    
        </div>
    );
};

export default AddClass;