import React from 'react';
import PropTypes from 'prop-types';
import style from './ClientGrid.module.css';

export function ClientGrid({ items }) {
  return (
    <div className={style.gridContainer}>
      {items.map((client, index) => (
        <div key={index} className={style.gridItem}>
          <p>Nome: {client.firstName} {client.lastName}</p>
          <p>CPF: {client.cpf}</p>
          <p>Email: {client.email}</p>
          <p>Telefone: {client.phone}</p>
        </div>
      ))}
    </div>
  );
}

ClientGrid.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      createdAt: PropTypes.string.isRequired,
      firstName: PropTypes.string.isRequired,
      lastName: PropTypes.string.isRequired,
      cpf: PropTypes.string.isRequired,
      email: PropTypes.string.isRequired,
      phone: PropTypes.string.isRequired,
    })
  ).isRequired,
};
