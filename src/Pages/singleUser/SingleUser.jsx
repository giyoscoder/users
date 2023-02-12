import style from "./singleUser.module.scss";
import { useParams, useNavigate, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { instance } from "../../Utils/axiosIntance";

export function SingleUser() {
  const { id } = useParams();
  const [user, setUser] = useState();
  const nav = useNavigate();

  useEffect(() => {
    instance.get(`/users/${id}`).then((a) => setUser(a.data.data));
  }, [id]);

  const deleted = () => {
    instance.delete(`/users/${id}`).then((a) => console.log(a));
    nav("/users");
  };

  return (
    <>
      <div className={style.card}>
        <div>
          <img src={user?.avatar} alt="useImg" />
          <h1>{user?.first_name}</h1>
          <h1>{user?.last_name}</h1>
          <p>{user?.email}</p>
        </div>
        <div>
          <h3>About The User</h3>
          <p className={style.about}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Error non
            omnis eius dolores aspernatur, fugit earum reprehenderit veritatis?
            Aliquam eligendi rerum eum alias, maxime ipsum facilis amet
            molestiae! Adipisci quo iusto maiores, quos quia expedita nam harum
            corporis odio officiis dignissimos eveniet odit a, natus obcaecati
            repudiandae alias commodi! Vitae quae facere commodi tempore
            assumenda nesciunt consequuntur voluptatum qui, a eius temporibus
            ea? Molestias itaque ad eos voluptates odio doloribus, voluptas
            accusantium! Non dicta officia nam deserunt sunt delectus ut,
            cupiditate veniam voluptatem reiciendis voluptatibus quam quasi
            magni odio blanditiis recusandae provident vero. Commodi unde
            temporibus repellendus ipsum alias pariatur quo a amet voluptates,
            nesciunt quasi odio doloribus soluta sint ex qui nemo deserunt. Odio
            dicta temporibus similique fuga ipsa sunt reprehenderit, porro
            laudantium. Repellendus iste voluptates, deleniti molestias soluta
            natus voluptatem at perferendis amet perspiciatis similique
            accusamus earum praesentium dignissimos sit alias! Non nesciunt
            aliquid cupiditate consequuntur voluptatum beatae!
          </p>
        </div>
      </div>
      <div className={style.btn}>
        <Link to={`/edit/${id}`}>
          <button className={style.edit}>Edit</button>
        </Link>
        <button className={style.delete} onClick={deleted}>
          Delete
        </button>
      </div>
    </>
  );
}
