// src/Register.jsx
import React, { useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { Mail, Lock } from 'lucide-react';
import Modal from '../components/Modal'; // Import the Modal component

const Register = () => {
  const [modalOpen, setModalOpen] = useState(false); // State to handle modal visibility

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .email('Email inválido')
        .required('O campo email é obrigatório'),
      password: Yup.string()
        .min(6, 'A senha é menor que 6 caracteres')
        .required('O campo senha é obrigatório'),
    }),
    onSubmit: (values, { setSubmitting, resetForm }) => {
      console.log('Form submitted:', values);
      // Show the modal on successful submission
      setModalOpen(true);
      resetForm(); // Reset the form after submission
      setSubmitting(false); // Set submitting to false
    },
  });

  const closeModal = () => {
    setModalOpen(false); // Function to close the modal
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <form onSubmit={formik.handleSubmit} className="bg-white p-6 rounded shadow-md">
        <h2 className="text-2xl mb-6">Cadastro</h2>

        <div className="mb-4">
          <label className="block mb-2">Email</label>
          <div className="flex items-center border border-gray-300 rounded">
            <Mail className="w-5 h-5 ml-2" />
            <input 
              type="email" 
              name="email" 
              placeholder="Digite o email"
              value={formik.values.email}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className={`flex-1 p-2 outline-none ${formik.touched.email && formik.errors.email ? 'border-red-500' : ''}`}
              required 
            />
          </div>
          {formik.touched.email && formik.errors.email ? (
            <div className="text-red-500 text-sm">{formik.errors.email}</div>
          ) : null}
        </div>

        <div className="mb-4">
          <label className="block mb-2">Password</label>
          <div className="flex items-center border border-gray-300 rounded">
            <Lock className="w-5 h-5 ml-2" />
            <input 
              type="password" 
              name="password" 
              placeholder="Digite a senha"
              value={formik.values.password}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className={`flex-1 p-2 outline-none ${formik.touched.password && formik.errors.password ? 'border-red-500' : ''}`}
              required 
            />
          </div>
          <label className="block mb-2 text-red-400">6 caracteres ou mais é necessário</label>
          {formik.touched.password && formik.errors.password ? (
            <div className="text-red-500 text-sm">{formik.errors.password}</div>
          ) : null}
        </div>

        <button 
          type="submit" 
          disabled={!(formik.isValid && formik.dirty)}
          className={`w-full py-2 rounded ${(formik.isValid && formik.dirty) ? 'bg-blue-600 hover:bg-blue-500' : 'bg-gray-400'} text-white`}
        >
          Registre-se
        </button>
      </form>

      {/* Conditionally render the Modal based on modalOpen state */}
      {modalOpen && (
        <Modal 
          message="Cadastro realizado com sucesso!" 
          onClose={closeModal} 
        />
      )}
    </div>
  );
};

export default Register;