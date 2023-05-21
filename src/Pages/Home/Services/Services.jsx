import { useEffect } from "react";
import { useState } from "react";
import ServiceCard from "./ServiceCard";

const Services = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch("services.json")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);
  return (
    <div>
      <div className="text-center space-y-2.5">
        <div className="w-[376px mx-auto]">
          <h4 className="text-2xl text-orange-500">Services</h4>
          <h2 className="text-5xl font-bold">Our Service Area</h2>
        </div>
        <p className="w-[717px] mx-auto capitalize">
          the majority have suffered alteration in some form, by injected
          humour, or randomized words which do not look even slightly
          believable.{" "}
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
      {
        services.map(service => <ServiceCard
        key={service._id}
        service={service}
        ></ServiceCard>)
      }
      </div>
    </div>
  );
};

export default Services;
