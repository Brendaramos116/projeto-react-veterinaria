import { db } from "@/services/firebase";
import { child, get, ref, remove, set, update } from "firebase/database";
import { v4 } from "uuid";
import axios from "axios";

export default function handler(req, res) {
  const id = req.query.id;

  if (req.method == "GET") {
    get(child(ref(db), "veterinaria/" + id)).then((snapshot) => {

      res.status(200).json(snapshot.val());
    });

  } else if (req.method == "PUT") {
    
    const dados = req.body

    update(ref(db, "veterinaria/" + id), dados);
    res.status(200).json(dados);
  
  } else if (req.method == "DELETE") {
      remove(ref(db, "veterinaria/" + id))
      res.status(200).json(id);
  }
}