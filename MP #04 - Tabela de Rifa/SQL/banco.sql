CREATE DATABASE banco;
USE banco;

CREATE TABLE rifas (
    id INT AUTO_INCREMENT PRIMARY KEY,
    codigo VARCHAR(10) UNIQUE,
    nome VARCHAR(255),
    valor FLOAT,
    num_elementos INT,
    data_criacao TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE numeros (
    id INT AUTO_INCREMENT PRIMARY KEY,
    rifa_id INT,
    numero INT,
    vendido BOOLEAN DEFAULT FALSE,
    FOREIGN KEY (rifa_id) REFERENCES rifas(id)
);