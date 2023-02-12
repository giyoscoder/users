import style from "./editUser.module.scss";
import { useEffect, useState } from "react";
import { Input, Button } from "antd";
import { useParams, useNavigate } from "react-router-dom";
import { instance } from "../../Utils/axiosIntance";

export function EditUser() {
  const { id } = useParams();
  const [user, setUser] = useState({
    first_name: "",
    last_name: "",
    email: "",
    avatar: "",
  });
  const nav = useNavigate();

  useEffect(() => {
    instance.get(`/users/${id}`).then((e) => setUser(e.data.data));
  }, [id]);

  const send = () => {
    instance.put(`/users/${id}`, user).then((a) => console.log(a));
    nav(-1);
  };

  return (
    <div>
      <form onSubmit={(e) => e.preventDefault()} className={style.form}>
        <Input
          value={user.first_name}
          onChange={(e) => setUser({ ...user, first_name: e.target.value })}
        />
        <Input
          value={user.last_name}
          onChange={(e) => setUser({ ...user, last_name: e.target.value })}
        />
        <Input
          value={user.email}
          onChange={(e) => setUser({ ...user, email: e.target.value })}
        />
        <Input
          value={user.avatar}
          onChange={(e) => setUser({ ...user, avatar: e.target.value })}
        />
        <Button type="primary" onClick={send}>
          Send
        </Button>
      </form>
    </div>
  );
}
