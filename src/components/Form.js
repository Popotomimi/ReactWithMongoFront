import React from 'react';

// Axios
import axios from 'axios';

// Hooks
import { useState, useRef } from 'react';

// Toastify
import { toast } from "react-toastify";

// Img
import formImg from "../img/fromImg.jpg";

// Icons
import { BsBoxArrowInRight } from "react-icons/bs";

const Form = () => {

  const [name, setName] = useState("");
  const [salary, setSalary] = useState(0);
  const [approved, setApproved] = useState(true);

  const inputRef = useRef(null);
  const inputRefTwo = useRef(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const jsonData = {
        name: name,
        salary: salary,
        approved: approved,
      };

      const response = await axios.post("http://localhost:8800/person", jsonData);

      toast.success("Cadastro realizado com sucesso!");
    } catch (error) {
       return toast.error("Erro ao enviar os dados:", error);
    }

    inputRef.current.value = "";
    inputRefTwo.current.value = "";
  }

  return (
    <form onSubmit={handleSubmit}>
      <img src={formImg} className='animate__animated animate__rotateIn' alt="Imagem de tecnologia para se inscreverem no meu site" />
      <h1>Registre-se</h1>
      <input type="text" ref={inputRef} placeholder='Digite seu nome' onChange={(e) => setName(e.target.value)} />
      <input type="number" ref={inputRefTwo} placeholder='Digite seu salário' onChange={(e) => setSalary(e.target.value)} />
      <p>Aprovado:</p>
      <select
        value={approved === null ? "" : approved.toString()}
        onChange={(e) =>
          setApproved(e.target.value)
        }
      >
        <option value="true">Sim</option>
        <option value="false">Não</option>
      </select>
      <button className='btn-submit' type='submit'> 
        Enviar &nbsp;
        <BsBoxArrowInRight />
      </button>
    </form>
  )
}

export default Form;