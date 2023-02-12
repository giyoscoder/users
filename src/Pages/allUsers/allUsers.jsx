import style from "./allUser.module.scss";
import { instance } from "../../Utils/axiosIntance";
import { useEffect, useState } from "react";
import { Link, Routes, Route } from "react-router-dom";

export function AllUsers() {
  const [user, setUser] = useState();
  useEffect(() => {
    instance.get("/users").then((e) => setUser(e.data.data));
  }, []);

  return (
    <>
      <div className={style.mainCard}>
        {user?.map((e) => (
          <Link to={`/users/${e.id}`}>
            <div key={e?.id} className={style.card}>
              <img src={e?.avatar} alt="userImg" />
              <div className={style.about}>
                <div>
                  <h1>{e?.first_name}</h1>
                  <h2>{e?.last_name}</h2>
                </div>
                <a href="george.bluth@reqres.in">{e?.email}</a>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </>
  );
}
