import { Card } from "./card.component";
import { useEffect, useState } from "react";

import "../../style/cardcontainer.css";

export function CardContainer() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch(
          "https://web-p3xkonsl1vzc.up-de-fra1-k8s-1.apps.run-on-seenode.com/API/PRODUCTOS"
        );
        if (!response.ok) throw new Error("Error al obtener los datos");

        const data = await response.json();
        setUsers(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  return (
    <>
      <div className="card-container">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </>
  );
}
