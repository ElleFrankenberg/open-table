"use client";

const ReservationCard = () => {
  return (
    <div className="fixed w-[15%] rounded bg-white p-3 shadow">
      <div className="text-center border-b pb-2 font-bold">
        <h4 className="mr-7 text-lg">Make a reservation</h4>
      </div>
      <div className="my-3 flex flex-col">
        <label htmlFor="">Party size</label>
        <select className="py-3 border-b font-light" name="" id="">
          <option value="1">1 person</option>
          <option value="2">2 people</option>
        </select>
      </div>
      <div className="flex justify-between">
        <div className="flex flex-col w-[48%]">
          <label htmlFor="">date</label>
          <input className="py-3 border-b font-light w-28" type="text" />
        </div>
        <div className="flex flex-col w-[48%]">
          <label htmlFor="">time</label>
          <select className="py-3 border-b font-light" name="" id="">
            <option value="">7:30 AM</option>
            <option value="">8:00 AM</option>
          </select>
        </div>
      </div>
      <div className="mt-5">
        <button className="bg-red-600 rounded w-full px-4 text-white h-16 font-bold">
          Find a time
        </button>
      </div>
    </div>
  );
};

export default ReservationCard;
