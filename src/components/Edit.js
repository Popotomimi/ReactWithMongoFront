// React
import React from 'react';

// Axios
import axios from 'axios';

// Hooks
import { useRef, useState } from 'react';

// Toastify
import { toast } from "react-toastify";

// Icons
import { BsFillTrashFill, BsGear, BsBoxArrowInRight } from "react-icons/bs";

const Edit = ({users}) => {

  const [formStyle, setFormStyle] = useState(false);

  const [name, setName] = useState("");
  const [salary, setSalary] = useState(0);
  const [approved, setApproved] = useState(true);
  const [id, setId] = useState(0);

  const inputRef = useRef(null);
  const inputRefTwo = useRef(null);

  const handleDelete = async (id) => {
    try {
      const response = await axios.delete(`http://localhost:8800/person/${id}`);
      toast.success("Usuário excluido com sucesso!")
    } catch (error) {
      return toast.error(error);
    }
  }

  const handleEdit = async (e) => {
    e.preventDefault();

    try {
      const jsonData = {
        name: name,
        salary: salary,
        approved: approved,
      };

      const response = await axios.patch(`http://localhost:8800/person/${id}`, jsonData);

      toast.success("Edição realizada com sucesso!");
    } catch (error) {
       return toast.error("Erro ao enviar os dados:", error);
    }

    setFormStyle(false);
  }

  const handleStyle = (id, name, salary, approved) => {
    setId(id);
    setName(name);
    setSalary(salary);
    setApproved(approved);
    setFormStyle(true);
  }

  return (
    <div className='editHome'>
      <h1>Edite os usuários</h1>
      {formStyle && (
      <form onSubmit={handleEdit}>
        <input type="text" ref={inputRef} placeholder={name} defaultValue={name} onChange={(e) => setName(e.target.value)} />
        <input type="number" ref={inputRefTwo} placeholder={salary} defaultValue={salary} onChange={(e) => setSalary(e.target.value)} />
        <p>Aprovado:</p>
        <select
          value={approved === null ? "" : approved}
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
      )}
      
      <ul className='editList'>
        <h3>Nome e Salário:</h3>
        {users.map((user, i) => (
          <li key={i}>
            {user.name} {" "}
            {user.salary} {"  "}
            <span>
              <BsGear className='edit' onClick={() => handleStyle(user._id, user.name, user.salary)} /> {"  "}
              <BsFillTrashFill className='delete' onClick={() => handleDelete(user._id)} /> 
            </span>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Edit;