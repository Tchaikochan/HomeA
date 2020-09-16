using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using MySql.Data.MySqlClient;
using System.ComponentModel;
using System.Data;
using System.Drawing;

namespace prjHomeA.Soul.Pages
{
    class DataBase
    {
        #region Declaração de Variáveis
        private string _connect = "";
        /// <summary>
        /// Variável de conexão ao banco.
        /// </summary>
        public MySqlConnection DBConnection { set; get; }
        /// <summary>
        /// Valores que retornaram do banco ficarão armazenados aqui.
        /// </summary>
        public MySqlDataReader Selected { set; get; }

        //Variáveis que armazenaram as informações do banco.
        private string _serverName;
        private string _userID;
        private string _password;
        private string _dataBase;

        #endregion

        #region Conexão ao banco de dados
        /// <summary>
        /// Abrir acesso ao Banco de Dados.
        /// </summary>
        /// <param name="_serverName">String - Nome do Servidor onde rodará o Banco de Dados.</param>
        /// <param name="_userID">String - ID do Banco de Dados.</param>
        /// <param name="_password">String - Senha de acesso ao Banco de Dados.</param>
        /// <param name="_dataBase">String - Nome do Bando de Dados.</param>
        public void openBar(string _serverNameC, string _userIDC, string _passwordC, string _dataBaseC){
            _serverName = _serverNameC;
            _userID = _userIDC;
            _password = _passwordC;
            _dataBase = _dataBaseC;
            _connect = "SERVER=" + _serverName + ";UID=" + _userID + ";PASSWORD=" + _password + ";DATABASE=" + _dataBase;
            DBConnection = new MySqlConnection(_connect);
            try
            {
                DBConnection.Open();
            }
            catch
            {
                return;
            }
        
        }

        /// <summary>
        /// Após ter inserido as informações do banco uma vez, não é necessário inserir novamente, podendo apenas utilizar o comando sem parâmetros.
        /// </summary>
        public void openBar()
        {
            _connect = "SERVER=" + _serverName + ";UID=" + _userID + ";PASSWORD=" + _password + ";DATABASE=" + _dataBase;
            DBConnection = new MySqlConnection(_connect);
            try
            {
                DBConnection.Open();
            }
                catch
            {
                return;
            }

        }

        #endregion

        #region Utilização de comandos
        /// <summary>
        /// Utiliza comandos SQL que retornam algum valor.
        /// </summary>
        /// <param name="command">String - Comando SQL que será utilizado.</param>
        public MySqlDataReader getCommand(string command)
        {
            MySqlCommand cSQL = new MySqlCommand(command, DBConnection);
            Selected = cSQL.ExecuteReader();

            return Selected;
        }

        /// <summary>
        /// Utiliza comandos SQL que não retornam valores.
        /// </summary>
        /// <param name="command">String - Comando SQL que será utilizado.</param>
        public void setCommand(string command)
        {
            MySqlCommand cSQL = new MySqlCommand(command, DBConnection);
            cSQL.ExecuteNonQuery();

        }

        /// <summary>
        /// Utiliza Stored Procedures que retornam algum valor.
        /// </summary>
        /// <param name="   SP">Nome da Stored Procedure a ser utilizada.</param>
        /// <param name="args">Array de argumetos a serem passados para uso da Stored Procedure.</param>
        /// <param name="Selected"></param>
        public MySqlDataReader getSP(string SP, string[,] args)
        {
                MySqlCommand cSQL = new MySqlCommand(SP, DBConnection);
                cSQL.Parameters.Clear();
                if (args != null)   
                {
                    for (int i = 0; i < args.GetLength(0); i++)
                    {
                        cSQL.Parameters.Add(new MySqlParameter(args[i, 0], args[i, 1]));
                        
                    } 

                }
                cSQL.CommandType = CommandType.StoredProcedure;
                Selected = cSQL.ExecuteReader();

                return Selected;

        }

        /// <summary>
        /// Utiliza Stored Procedures que não retornam nenhum valor.
        /// </summary>
        /// <param name="SP">Nome da Stored Procedure a ser utilizada.</param>
        /// <param name="args">Array de argumetos a serem passados para uso da Stored Procedure.</param>
        /// <param name="Selected"></param>
        public void setSP(string SP, string[,] args)
        {
            MySqlCommand cSQL = new MySqlCommand(SP, DBConnection);
            cSQL.Parameters.Clear();
            if (args != null)
            {
                for (int i = 0; i < args.GetLength(0); i++)
                {
                    cSQL.Parameters.Add(new MySqlParameter(args[i, 0], args[i, 1]));

                }

            }
            cSQL.CommandType = CommandType.StoredProcedure;
            cSQL.ExecuteNonQuery();


        }

        #endregion

        #region Finalizar conexão
        /// <summary>
        /// Verifica conexão com o banco e encerra caso esteja aberta.
        /// </summary>
        public void Refresh()
        {
            if (DBConnection.State == ConnectionState.Open) { DBConnection.Close(); }

        }

        #endregion

    }
}
