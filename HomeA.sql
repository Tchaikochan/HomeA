	DROP SCHEMA if exists HomeA;
CREATE SCHEMA HomeA;
use HomeA;

CREATE TABLE Condominio (
  cd_condominio INT,
  nm_condominio VARCHAR(45),
  CONSTRAINT pk_Condominio PRIMARY KEY (cd_condominio) 
);

Insert into Condominio values (0, "Condominio Clover");
Insert into Condominio values (1, "Condominio Felicidade");

CREATE TABLE Area_Lazer (
  cd_area_lazer INT,
  nm_area_lazer VARCHAR(45),
  cd_condominio INT,
  CONSTRAINT pk_Area_Lazer PRIMARY KEY (cd_area_lazer) ,
  CONSTRAINT fk_Area_Lazer_Condomino FOREIGN KEY (cd_condominio) REFERENCES Condominio(cd_condominio)
);

Insert into Area_Lazer values (0, "Churrasqueira", 1);
Insert into Area_Lazer values (1, "Quadra", 1);
Insert into Area_Lazer values (2, "Salão de Jogos", 1);
Insert into Area_Lazer values (3, "Churrasqueira", 0);
Insert into Area_Lazer values (4, "Quadra", 0);

CREATE TABLE Enquete(
  nm_enquete	VARCHAR(150),
  ds_enquete	TEXT,
  dt_enquete	DATE,
  cd_enquete	INT,

CONSTRAINT pk_enquete PRIMARY KEY (cd_enquete)

);
INSERT INTO Enquete values ('Querem uma festa de fim de ano?','Como estamos numa quarentena é necessário decidir se é seguro ter uma festa de fim de ano. Vocês acham melhor não termos uma festa de fim de ano?',DATE_FORMAT( "2012/09/09", "%Y/%m/%d" ),0);

CREATE TABLE Pergunta(
  nm_pergunta	VARCHAR(300),
  cd_pergunta   INT,
  cd_enquete	INT,

CONSTRAINT pk_pergunta PRIMARY KEY (cd_pergunta, cd_enquete),
CONSTRAINT fk_pergunta FOREIGN KEY (cd_enquete) REFERENCES Enquete (cd_enquete)

);

CREATE TABLE Alternativa(
  cd_alternativa	INT,
  nm_alternativa    VARCHAR(999),
  cd_pergunta		INT,
  cd_enquete		INT,

CONSTRAINT pk_alternativa PRIMARY KEY (cd_alternativa, cd_pergunta, cd_enquete),
CONSTRAINT fk_alternativa FOREIGN KEY (cd_pergunta, cd_enquete) REFERENCES Pergunta (cd_pergunta, cd_enquete)

);

CREATE TABLE Bloco(
  cd_bloco INT,
  cd_condominio INT,
  nm_bloco VARCHAR(45),
  CONSTRAINT pk_Bloco PRIMARY KEY (cd_bloco, cd_condominio),
  CONSTRAINT fk_Bloco_Condominio FOREIGN KEY (cd_condominio) REFERENCES Condominio (cd_condominio)
);


Insert into Bloco values (0,1,'Diamante');
Insert into Bloco values (1,1,'Ônix');
Insert into Bloco values (2,1,'Rubi');
Insert into Bloco values (0,0,'Marte');
Insert into Bloco values (1,0,'Hélio');
Insert into Bloco values (2,0,'Ishtar');


    
CREATE TABLE Apartamento(
  cd_apartemanto INT,
  cd_bloco INT,
  cd_condominio INT,
  CONSTRAINT pk_Apartamento PRIMARY KEY (cd_apartemanto, cd_bloco, cd_condominio),
  CONSTRAINT fk_apartamento_Condominio FOREIGN KEY (cd_bloco , cd_condominio ) REFERENCES Bloco (cd_bloco, cd_condominio)
);


Insert into Apartamento values (14, 0, 1);
Insert into Apartamento values (78, 0, 1);
Insert into Apartamento values (46, 1, 1);
Insert into Apartamento values (102, 2, 0);
Insert into Apartamento values (58, 1, 0);
Insert into Apartamento values (20, 1, 1);

CREATE TABLE Reserva_Area_Lazer(
  dt_Reserva DATE,
  hr_Reserva TIME,
  cd_area_lazer INT,
  cd_apartemanto INT,
  cd_bloco INT,
  CONSTRAINT pk_Reserva_Area_Lazer PRIMARY KEY (cd_area_lazer, cd_apartemanto, cd_bloco, dt_Reserva, hr_Reserva),
  CONSTRAINT fk_Area_Lazer_Reserva_Area_Lazer FOREIGN KEY (cd_area_lazer) REFERENCES Area_Lazer (cd_area_lazer),
  CONSTRAINT fk_Reserva_Area_Lazer_Apartamento FOREIGN KEY (cd_apartemanto) REFERENCES Apartamento (cd_apartemanto)
);

Insert into Reserva_Area_Lazer values (DATE_FORMAT( "2019/12/21", "%Y/%m/%d" ), TIME_FORMAT("14:30:00", "%h:%i:%s"), 0, 14, 1);
Insert into Reserva_Area_Lazer values (DATE_FORMAT( "2020/03/16", "%Y/%m/%d" ), TIME_FORMAT("21:00:00", "%h:%i:%s"), 1, 14, 1);
Insert into Reserva_Area_Lazer values (DATE_FORMAT( "2020/07/04", "%Y/%m/%d" ), TIME_FORMAT("11:45:00", "%h:%i:%s"), 0, 58, 0);


CREATE TABLE Tipo_Usuario(
  cd_tipo_usuario INT,
  nm_tipo_usuario VARCHAR(45),
  PRIMARY KEY (cd_tipo_usuario) 
);


Insert into Tipo_Usuario values (0, "Sindico");
Insert into Tipo_Usuario values (1,"Proprietário");
Insert into Tipo_Usuario values (2,"Morador");
Insert into Tipo_Usuario values (3,"Funcionário");


CREATE TABLE Usuario (
  nm_email_usuario VARCHAR(45),
  nm_usuario VARCHAR(45),
  nm_senha_usuario VARCHAR(45),
  cd_condominio INT,
  cd_tipo_usuario INT,
  cd_apartemanto INT,
  CONSTRAINT pk_Usuario PRIMARY KEY (nm_email_usuario, nm_senha_usuario, cd_tipo_usuario, cd_apartemanto, cd_condominio),
  CONSTRAINT fk_Usuario_Condominio FOREIGN KEY (cd_condominio) REFERENCES Condominio (cd_condominio),
  CONSTRAINT fk_Usuario_Tipo_Usuario FOREIGN KEY (cd_tipo_usuario) REFERENCES Tipo_Usuario (cd_tipo_usuario),
  CONSTRAINT fk_Usuario_Apartamento FOREIGN KEY (cd_apartemanto) REFERENCES Apartamento (cd_apartemanto)
);

Insert into Usuario values ("michelcorleone@gmail.com", "Michel Corleone", "gangsta", 1, 0, 14);
Insert into Usuario values ("Ronal@gmail.com", "Ronaldo Fenômeno", "souronaldo", 1, 2, 46);
Insert into Usuario values ("davialencar@gmail.com", "Davi", "senha", 0, 1, 58);
Insert into Usuario values ("Neymar@gmail.com", "Neymar Junior", "meninoney", 0, 0, 102);

CREATE TABLE Resposta_Enquete(
	nm_resposta_usuario TEXT,
	cd_alternativa		INT,
	cd_pergunta			INT,
	cd_enquete			INT,
	nm_email_usuario	VARCHAR(45),

CONSTRAINT pk_Resposta_Enquete PRIMARY KEY (cd_alternativa, cd_pergunta, cd_enquete, nm_email_usuario),
CONSTRAINT fk_Resposta_Enquete FOREIGN KEY (cd_alternativa, cd_pergunta, cd_enquete) REFERENCES Alternativa (cd_alternativa, cd_pergunta, cd_enquete),
CONSTRAINT fk_Resposta_EnqueteUser FOREIGN KEY (nm_email_usuario) REFERENCES Usuario (nm_email_usuario)


);

CREATE TABLE Expediente_Funcionario (
  nm_dia_semana VARCHAR(45),
  hr_inicio_expediente TIME,
  hr_final_expediente TIME,
  nm_email_usuario VARCHAR(45),
  nm_usuario VARCHAR(45),
  cd_tipo_usuario INT,
  CONSTRAINT pk_Expediente_Funcionario PRIMARY KEY (nm_email_usuario, nm_usuario, cd_tipo_usuario),
  CONSTRAINT fk_Expediente_Funcionario_Usuario FOREIGN KEY (nm_email_usuario, nm_usuario, cd_tipo_usuario) REFERENCES Usuario (nm_email_usuario, nm_senha_usuario, cd_tipo_usuario)
);
/*
Insert into Expediente_Funcionario values ("segunda-feira", TIME_FORMAT('12:30:00', "%h:%i:%s"), TIME_FORMAT('17:30:00', "%h:%i:%s"), 22589536852, "Carolina", 4);
Insert into Expediente_Funcionario values ("quinta-feira", TIME_FORMAT('07:00:00', "%h:%i:%s"), TIME_FORMAT('12:00:00', "%h:%i:%s"), 32478126848, "Eduardo", 4);
Insert into Expediente_Funcionario values ("domingo", TIME_FORMAT('19:30:00', "%h:%i:%s"), TIME_FORMAT('00:30:00', "%h:%i:%s"), 71842634515, "Juliana", 4);
*/

CREATE TABLE tipo_Aviso_Reclamacao(
  cd_tipo_Aviso_Reclamacao INT,
  nm_tipo_Aviso_Reclamacao VARCHAR(45),
  CONSTRAINT pk_tipo_Aviso_Reclamacao PRIMARY KEY (cd_tipo_Aviso_Reclamacao)
);


Insert into tipo_Aviso_Reclamacao values (0, "Morador");
Insert into tipo_Aviso_Reclamacao values (1, "Funcionario");


CREATE TABLE Aviso_Reclamacao(
  dt_Aviso_Reclamacao DATE,
  hr_Aviso_Reclamacao TIME,
  ds_Aviso_Reclamacao TEXT,
  cd_protocolo_Aviso INT,
  nm_senha_usuario VARCHAR(45),
  cd_tipo_Aviso_Reclamacao INT,
  nm_email_usuario VARCHAR(45),
  cd_tipo_usuario INT,
  cd_apartemanto INT,
  cd_condominio INT,
  PRIMARY KEY (cd_protocolo_aviso, cd_tipo_Aviso_Reclamacao, nm_email_usuario, nm_senha_usuario, cd_tipo_usuario, cd_apartemanto, cd_condominio),
  CONSTRAINT fk_Aviso_Reclamacao_tipo_Aviso_Reclamacao FOREIGN KEY (cd_tipo_Aviso_Reclamacao) REFERENCES tipo_Aviso_Reclamacao (cd_tipo_Aviso_Reclamacao),
  CONSTRAINT fk_Aviso_Reclamacao_Usuario FOREIGN KEY (nm_email_usuario, nm_senha_usuario, cd_tipo_usuario, cd_apartemanto, cd_condominio) REFERENCES Usuario (nm_email_usuario, nm_senha_usuario, cd_tipo_usuario, cd_apartemanto, cd_condominio)

);
/*
Insert into Aviso_Reclamacao values (TIME_FORMAT(Current_Date(), "%Y/%m/%d"), TIME_FORMAT(Current_Time(), "%h-%i-%s"), "O morador do 58 torce para o Santos.", 147842, 1, "Neymar@gmail.com", 0, 102, 0);

*/