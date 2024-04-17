const { useState, useEffect } = require("react");

const UseServices = () => {
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5001/services")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);
  return [services, setServices];
};

const UseDoctors = () => {
  const [doctors, setDoctors] = useState([]);
  useEffect(() => {
    fetch("doctors.json")
      .then((res) => res.json())
      .then((data) => setDoctors(data));
  }, []);
  return [doctors, setDoctors];
};

const UseFacilities = () => {
  const [facilities, setFacilities] = useState([]);

  useEffect(() => {
    fetch("facilities.json")
      .then((res) => res.json())
      .then((data) => setFacilities(data));
  }, []);

  return [facilities, setFacilities];
};
const UseService = (id) => {
  const [service, setService] = useState({});
  const url = `http://localhost:5001/service/${id}`;

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setService(data));
  }, [url]);

  return [service, setService];
};
const UseToken = (user) => {
  const [token, setToken] = useState();
  const [waiting, setWaiting] = useState(true);

  useEffect(() => {
    const email = user?.user?.email;
    const url = `http://localhost:5001/login/${email}`;
    const postData = async () => {
      if (email) {
        const userName = await user?.user?.displayName;
        const newUser = { userName: userName, email: email };

        await fetch(url, {
          method: "PUT",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(newUser),
        })
          .then((res) => res.json())
          .then((data) => {
            localStorage.setItem("accessToken", data.token);

            setToken(data);
            setWaiting(false);
          });
      }
    };

    postData();
  }, [user]);

  return [token, waiting];
};

const UseAdmin = (user) => {
  const [isAdmin, setIsAdmin] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const url = `http://localhost:5001/isAdmin/${user?.email}`;

    fetch(url, {
      method: "GET",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setIsAdmin(data.isAdmin);
        setIsLoading(false);
      });
  }, [user]);

  return [isAdmin, isLoading];
};

export {
  UseServices,
  UseDoctors,
  UseFacilities,
  UseService,
  UseToken,
  UseAdmin,
};
