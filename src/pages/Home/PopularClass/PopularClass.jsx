

const PopularClass = ({classPopular}) => {
    const {image, name, description, students_total, } = classPopular;
    return (
        <div>
    <div className="card w-96 glass bg-red-500">
  <figure><img className="w-[400px] h-[200px]" src={image} alt=""/></figure>
  <div className="card-body text-black">
    <h2 className="card-title">{name} Dance</h2>
    <p className="font-bold">{description}</p>
   
    <div className="card-actions justify-end">
    <p className="text-stone-300 font-semibold"><small>{students_total} students</small></p>
    </div>
  </div>
</div>        
        </div>
    );
};

export default PopularClass;