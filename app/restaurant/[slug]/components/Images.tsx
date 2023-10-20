const Images = () => {
  return (
    <div>
      <h1 className="font-bold text-3xl mt-10 mb-7 border-b pb-5">3 photos</h1>
      <div className="flex flex-wrap">
        <img
          className="w-56 h-44 mr-1 mb-1"
          alt="restaurant image"
          src="https://images.unsplash.com/photo-1505405241694-58823de133e1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Z3JpbGx8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60"
        />
        <img
          className="w-56 h-44 mr-1 mb-1"
          alt="restaurant image"
          src="https://images.unsplash.com/photo-1457460866886-40ef8d4b42a0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2940&q=80"
        />
        <img
          className="w-56 h-44 mr-1 mb-1"
          alt="restaurant image"
          src="https://images.unsplash.com/photo-1498654831517-895a5dfe4edc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2940&q=80"
        />
      </div>
    </div>
  );
};

export default Images;
